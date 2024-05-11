export default {
  // navigation
  "nav.basic": "Basic",
  "nav.server": "Server",
  "nav.location": "Location",
  "nav.upstream": "Upstream",
  "nav.proxyPlugin": "ProxyPlugin",
  // header
  "header.title": "Informations",
  "header.startTime": " Start Time:",
  "header.memory": "Memory: ",
  "header.architecture": "Architecture:",
  "header.configHash": "Config Hash: ",
  "header.restart": "Restart Pingap",
  "header.restartTips": "Pingap will graceful restart with new configuration.",
  "header.confirmTips": "Are you sure to restart pingap?",
  "header.confirm": "Restart",
  "header.cancel": "Cancel",
  // basic info
  "basic.title": "Modify the basic configurations",
  "basic.description":
    "The basic configuration of pingap mainly includes various configurations such as logs, graceful restart, threads, etc.",
  "basic.name": "Name",
  "basic.pidFile": "Pid File",
  "basic.upgradeSock": "Upgrade Sock",
  "basic.threads": "Threads",
  "basic.workStealing": "Work Stealing",
  "basic.user": "User",
  "basic.group": "Group",
  "basic.gracePeriod": "Grace Period",
  "basic.gracefulShutdownTimeout": "Graceful Shutdown Timeout",
  "basic.logLevel": "Log Level",
  "basic.logCapacity": "Log Capacity(byte)",
  "basic.autoRestartCheckInterval": "Auto Restart Check Interval",
  "basic.upstreamKeepalivePoolSize": "Upstream Keepalive Pool Size",
  "basic.cacheMaxSize": "Cache Max Size(MB)",
  "basic.webhookType": "Webhook Type",
  "basic.webhookNotifications": "Webhook Notifications",
  "basic.webhook": "Webhook Url",
  "basic.sentry": "Sentry",
  "basic.pyroscope": "Pyroscope",
  "basic.errorTemplate": "Error Template",
  // server info
  "server.title": "Modify server configuration",
  "server.description": "Change the server configuration",
  "server.addr": "Listen Address",
  "server.locations": "Locations",
  "server.threads": "Threads",
  "server.accessLog": "Access Log",
  "server.tlsCert": "Tls Cert Pem",
  "server.tlsKey": "Tls Key Pem",
  "server.letsEncrypt": "Let's encrypt domain list",
  "server.enabledH2": "Enable Http2",
  "server.remark": "Remark",
  // location info
  "location.title": "Modify location configuration",
  "location.description": "Change the location configuration",
  "location.host": "Host",
  "location.path": "Path",
  "location.upstream": "Upstream",
  "location.weight": "Weight",
  "location.headers": "Headers",
  "location.proxyHeaders": "Proxy Headers",
  "location.rewrite": "Rewrite",
  "location.proxyPlugins": "Proxy Plugins",
  "location.remark": "Remark",
  // upstream info
  "upstream.title": "Modify upstream configuration",
  "upstream.description": "Change the upstream configuration",
  "upstream.addrs": "Upstream Addrs",
  "upstream.algo": "Load balancer algorithm",
  "upstream.healthCheck": "Health Check",
  "upstream.connectionTimeout": "Connection Timeout",
  "upstream.totalConnectionTimeout": "Total Connection Timeout",
  "upstream.readTimeout": "Read Timeout",
  "upstream.writeTimeout": "Write Timeout",
  "upstream.idleTimeout": "Idle Timeout",
  "upstream.alpn": "Alpn",
  "upstream.sni": "Sni",
  "upstream.verifyCert": "Verify Cert",
  "upstream.ipv4Only": "Ipv4 Only",
  "upstream.remark": "Remark",
  // proxy plugin info
  "proxyPlugin.title": "Modify proxy plugin configuration",
  "proxyPlugin.description": "Change the proxy plugin configuration",
  "proxyPlugin.step": "Proxy Exec Step",
  "proxyPlugin.category": "Proxy Plugin Category",
  "proxyPlugin.config": "Proxy Plugin Config",
  "proxyPlugin.remark": "Remark",
  // form
  "form.name": "Name",
  "form.removing": "Removing",
  "form.remove": "Remove",
  "form.submitting": "Submitting",
  "form.submit": "Submit",
  "form.success": "Update success!",
  "form.confirmRemove": "Remove config?",
  "form.removeDescript":
    "Please confirm whether you want to delete the configuration, and it can not be restored after delete it.",
  "form.confirm": "Confirm",
  "form.nameRequired": "Name is required",
  "form.nameExists": "Name is exitst",
  "form.sortPlugin": "Sort proxy plugins",
  "form.selectPlugin": "Select proxy plugin",
  "form.addr": "Addr",
  "form.weight": "Weight",
  "from.addrs": "Add addr",
  "form.header": "Add response header",
  "form.headerName": "Header Name",
  "form.headerValue": "Header Value",
  "form.addProxyHeader": "Add proxy request header",
  "form.proxyHeaderName": "Header Name",
  "form.proxyHeaderValue": "Header Value",
  "form.gzip": "Gzip Level",
  "form.br": "Br Level",
  "form.zstd": "Zstd Level",
  "form.adminPath": "Admin Path",
  "form.basicAuth": "Basic auth(base64(user:pass))",
  "form.limitKey": "The limit key",
  "form.limitValue": "The limit value",
  "form.staticDirectory": "The static directory",
  "form.algoForId": "The algorithm for genenrate id",
  "form.lengthForId": "The length of id",
  "form.ipList": "The ip list",
  "form.limitMode": "The limit mode, 0:allow, 1:deny",
  "form.keyName": "The key name",
  "form.keyValues": "The key value list",
  "form.basicAuthList": "The basic authorization list",
  "form.cacheStorage": "The cache storage url",
  "form.redirectPrefix": "The prefix path of redirect path",
  "form.statsPath": "The stats path",
  "form.pingPath": "The ping path",
  "form.mockPath": "Response Match Path",
  "form.mockStats": "Response Status",
  "form.mockHeader": "Add Response Header",
  "form.mockData": "Response data",
};
