// Copyright 2024 Tree xie.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use async_trait::async_trait;
use humantime::parse_duration;
use opentelemetry::{
    global::{self, BoxedTracer},
    propagation::{TextMapCompositePropagator, TextMapPropagator},
    trace::TracerProvider,
    KeyValue,
};
use opentelemetry_otlp::WithExportConfig;
use opentelemetry_sdk::{
    propagation::{BaggagePropagator, TraceContextPropagator},
    trace::{self, BatchConfig, RandomIdGenerator, Sampler},
    Resource,
};
use pingora::{server::ShutdownWatch, services::background::BackgroundService};
use std::time::Duration;
use tracing::{error, info};
use url::Url;

pub struct TracerService {
    name: String,
    endpoint: String,
    timeout: Duration,
    max_attributes: u32,
    max_events: u32,
    support_jaeger_propagator: bool,
    support_baggage_propagator: bool,
}

impl TracerService {
    pub fn new(name: &str, endpoint: &str) -> TracerService {
        let mut timeout = Duration::from_secs(3);
        let mut max_attributes = 16;
        let mut max_events = 16;
        let mut support_jaeger_propagator = false;
        let mut support_baggage_propagator = false;
        if let Ok(info) = Url::parse(endpoint) {
            for (key, value) in info.query_pairs().into_iter() {
                match key.to_string().as_str() {
                    "timeout" => {
                        if let Ok(v) = parse_duration(&value) {
                            timeout = v;
                        }
                    },
                    "max_attributes" => {
                        if let Ok(v) = value.parse::<u32>() {
                            max_attributes = v;
                        }
                    },
                    "max_events" => {
                        if let Ok(v) = value.parse::<u32>() {
                            max_events = v;
                        }
                    },
                    "jaeger" => {
                        support_jaeger_propagator = true;
                    },
                    "baggage" => {
                        support_baggage_propagator = true;
                    },
                    _ => {},
                }
            }
        }

        Self {
            name: name.to_string(),
            endpoint: endpoint.to_string(),
            timeout,
            max_events,
            max_attributes,
            support_jaeger_propagator,
            support_baggage_propagator,
        }
    }
}

#[inline]
fn get_service_name(name: &str) -> String {
    format!("pingap-{name}")
}

#[inline]
pub fn new_tracer(name: &str) -> Option<BoxedTracer> {
    if let Some(provider) = provider::get_provider(name) {
        return Some(provider.tracer(get_service_name(name)));
    }
    None
}

#[async_trait]
impl BackgroundService for TracerService {
    /// The lets encrypt servier checks the cert, it will get news cert if current is invalid.
    async fn start(&self, mut shutdown: ShutdownWatch) {
        let result = opentelemetry_otlp::new_pipeline()
            .tracing()
            .with_exporter(
                opentelemetry_otlp::new_exporter()
                    .tonic()
                    .with_endpoint(&self.endpoint)
                    .with_timeout(self.timeout),
            )
            .with_trace_config(
                trace::Config::default()
                    // TODO smapler config
                    .with_sampler(Sampler::AlwaysOn)
                    .with_id_generator(RandomIdGenerator::default())
                    .with_max_attributes_per_span(self.max_attributes)
                    .with_max_events_per_span(self.max_events)
                    .with_resource(Resource::new(vec![KeyValue::new(
                        "service.name",
                        get_service_name(&self.name),
                    )])),
            )
            .with_batch_config(BatchConfig::default())
            .install_batch(opentelemetry_sdk::runtime::Tokio);

        match result {
            Ok(tracer_provider) => {
                info!(endpoint = self.endpoint, "opentelemetry init success");
                let mut propagators: Vec<
                    Box<dyn TextMapPropagator + Send + Sync>,
                > = vec![Box::new(TraceContextPropagator::new())];
                if self.support_jaeger_propagator {
                    propagators.push(Box::new(
                        opentelemetry_jaeger_propagator::Propagator::new(),
                    ));
                }
                if self.support_baggage_propagator {
                    propagators.push(Box::new(BaggagePropagator::new()));
                }
                global::set_text_map_propagator(
                    TextMapCompositePropagator::new(propagators),
                );

                // set tracer provider
                provider::add_provider(&self.name, tracer_provider.clone());

                let _ = shutdown.changed().await;
                if let Err(e) = tracer_provider.shutdown() {
                    error!(
                        error = e.to_string(),
                        "opentelemetry shutdown fail"
                    );
                } else {
                    info!("opentelemetry shutdown success");
                }
            },
            Err(e) => {
                error!(error = e.to_string(), "opentelemetry init fail");
            },
        }
    }
}

mod provider;
