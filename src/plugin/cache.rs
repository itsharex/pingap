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

use super::ProxyPlugin;
use super::{Error, Result};
use crate::config::ProxyPluginCategory;
use crate::config::ProxyPluginStep;
use crate::state::State;
use async_trait::async_trait;
use bytesize::ByteSize;
use http::Method;
use log::debug;
use once_cell::sync::Lazy;
use pingora::cache::eviction::simple_lru::Manager;
use pingora::cache::eviction::EvictionManager;
use pingora::cache::lock::CacheLock;
use pingora::cache::predictor::Predictor;
use pingora::cache::{MemCache, Storage};
use pingora::proxy::Session;
use std::str::FromStr;
use url::Url;

static MEM_BACKEND: Lazy<MemCache> = Lazy::new(MemCache::new);
static PREDICTOR: Lazy<Predictor<32>> = Lazy::new(|| Predictor::new(5, None));
static EVICTION_MANAGER: Lazy<Manager> = Lazy::new(|| Manager::new(8192));
static CACHE_LOCK_ONE_SECOND: Lazy<CacheLock> =
    Lazy::new(|| CacheLock::new(std::time::Duration::from_secs(1)));
static CACHE_LOCK_TWO_SECONDS: Lazy<CacheLock> =
    Lazy::new(|| CacheLock::new(std::time::Duration::from_secs(2)));
static CACHE_LOCK_THREE_SECONDS: Lazy<CacheLock> =
    Lazy::new(|| CacheLock::new(std::time::Duration::from_secs(3)));

pub struct Cache {
    proxy_step: ProxyPluginStep,
    eviction: bool,
    lock: u8,
    storage: &'static (dyn Storage + Sync),
    max_file_size: usize,
}

impl Cache {
    pub fn new(value: &str, proxy_step: ProxyPluginStep) -> Result<Self> {
        debug!("new cache storage proxy plugin, {value}, {proxy_step:?}");
        let url_info = Url::parse(value).map_err(|e| Error::Invalid {
            message: e.to_string(),
        })?;
        let mut lock = 0;
        let mut eviction = false;
        let mut max_file_size = 30 * 1024;
        for (key, value) in url_info.query_pairs().into_iter() {
            match key.as_ref() {
                "lock" => {
                    if let Ok(d) = value.parse::<u8>() {
                        lock = d;
                    }
                }
                "max_file_size" => {
                    if let Ok(v) = ByteSize::from_str(&value) {
                        max_file_size = v.0 as usize;
                    }
                }
                "eviction" => eviction = true,
                _ => {}
            }
        }

        Ok(Self {
            storage: &*MEM_BACKEND,
            proxy_step,
            eviction,
            lock,
            max_file_size,
        })
    }
}

#[async_trait]
impl ProxyPlugin for Cache {
    #[inline]
    fn step(&self) -> ProxyPluginStep {
        self.proxy_step
    }
    #[inline]
    fn category(&self) -> ProxyPluginCategory {
        ProxyPluginCategory::Cache
    }
    #[inline]
    async fn handle(&self, session: &mut Session, _ctx: &mut State) -> pingora::Result<bool> {
        if ![Method::GET, Method::HEAD].contains(&session.req_header().method) {
            return Ok(false);
        }
        let eviction = if self.eviction {
            None
        } else {
            Some(&*EVICTION_MANAGER as &'static (dyn EvictionManager + Sync))
        };

        let lock = match self.lock {
            1 => Some(&*CACHE_LOCK_ONE_SECOND),
            2 => Some(&*CACHE_LOCK_TWO_SECONDS),
            3 => Some(&*CACHE_LOCK_THREE_SECONDS),
            _ => None,
        };

        session
            .cache
            .enable(self.storage, eviction, Some(&*PREDICTOR), lock);
        if self.max_file_size > 0 {
            session.cache.set_max_file_size_bytes(self.max_file_size);
        }

        Ok(false)
    }
}
