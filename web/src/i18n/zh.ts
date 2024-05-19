export default {
  // navigation
  "nav.basic": "基础配置",
  "nav.server": "服务配置",
  "nav.location": "Location配置",
  "nav.upstream": "上游服务配置",
  "nav.plugin": "插件配置",
  // header
  "header.title": "应用信息",
  "header.startTime": "启动时间：",
  "header.memory": "内存占用：",
  "header.architecture": "系统架构：",
  "header.configHash": "配置信息哈希：",
  "header.restart": "重启Pingap",
  "header.restartTips": "Pingap将无中断式的重启",
  "header.confirmTips": "确认重启Pingap吗？",
  "header.confirm": "重启",
  "header.cancel": "取消",
  // basic info
  "basic.title": "修改应用的基本信息配置",
  "basic.description": "Pingap的基本信息包括日志、优雅重启等待周期、线程等等",
  "basic.name": "名称",
  "basic.pidFile": "进程id文件",
  "basic.upgradeSock": "程序触发upgrade时使用的unix sock",
  "basic.threads": "各服务默认的线程数",
  "basic.workStealing": "线程间工作是否可窃取",
  "basic.user": "用户",
  "basic.group": "用户组",
  "basic.gracePeriod": "重启等待周期",
  "basic.gracefulShutdownTimeout": "等待关闭时长",
  "basic.logLevel": "日志级别",
  "basic.logCapacity": "日志缓存区大小(字节)",
  "basic.autoRestartCheckInterval": "自动重启检测间隔",
  "basic.upstreamKeepalivePoolSize": "上游节点连接池大小",
  "basic.cacheMaxSize": "缓存空间大小限制(MB)",
  "basic.webhookType": "Webhook类型",
  "basic.webhookNotifications": "Webhook通知类型",
  "basic.webhook": "Webhook的请求地址",
  "basic.sentry": "Sentry地址",
  "basic.pyroscope": "Pyroscope地址",
  "basic.errorTemplate": "错误模板",
  // server info
  "server.title": "监听服务的相关配置",
  "server.description": "修改监听服务的各相关配置",
  "server.addr": "监听地址",
  "server.locations": "Location列表",
  "server.threads": "线程数",
  "server.accessLog": "访问日志格式化",
  "server.tlsCert": "Tls证书(Pem格式)",
  "server.tlsKey": "Tls密钥(Pem格式)",
  "server.letsEncrypt": "使用let's encrypt的域名列表",
  "server.enabledH2": "是否启用http2",
  "server.remark": "备注",
  // location info
  "location.title": "Location的相关配置",
  "location.description":
    "修改Location的相关配置，包括路由重写，匹配路由与域名等",
  "location.host": "域名",
  "location.path": "路径",
  "location.upstream": "上游服务",
  "location.weight": "权重",
  "location.headers": "响应头",
  "location.proxyHeaders": "转发至上游节点的请求头",
  "location.rewrite": "路由重写规则",
  "location.plugins": "插件列表",
  "location.remark": "备注",
  "location.proxySetHeaders": "设置转发请求头",
  "location.proxyAddHeaders": "添加转发请求头",
  // upstream info
  "upstream.title": "上游服务的相关配置",
  "upstream.description": "修改上游服务的相关配置，如地址列表、各超时设置等",
  "upstream.addrs": "节点地址列表",
  "upstream.algo": "节点选择算法",
  "upstream.healthCheck": "健康检查配置",
  "upstream.connectionTimeout": "连接超时",
  "upstream.totalConnectionTimeout": "总连接超时",
  "upstream.readTimeout": "读超时",
  "upstream.writeTimeout": "写超时",
  "upstream.idleTimeout": "空闲回收时长",
  "upstream.alpn": "Alpn",
  "upstream.sni": "Sni",
  "upstream.verifyCert": "是否校验证书",
  "upstream.ipv4Only": "是否仅Ipv4",
  "upstream.tcpRecvBuf": "Tcp接收缓冲区大小",
  "upstream.tcpIdle": "Tcp保持连接的空闲时长",
  "upstream.tcpInterval": "Tcp保持连接探针的发送间隔",
  "upstream.tcpProbeCount": "Tcp保持连接探针发送的最大次数",
  "upstream.remark": "备注",
  // plugin info
  "plugin.title": "各类插件的配置",
  "plugin.description": "添加配置各类插件，可便于后续服务使用",
  "plugin.step": "插件执行阶段",
  "plugin.category": "插件类型",
  "plugin.config": "插件配置数据",
  "plugin.remark": "备注",

  // form
  "form.name": "名称",
  "form.removing": "删除中",
  "form.remove": "删除",
  "form.submitting": "提交中",
  "form.submit": "提交",
  "form.success": "成功更新！",
  "form.confirmRemove": "确认要删除该配置吗？",
  "form.removeDescript": "请确认是否要删除该配置，该配置删除后无法恢复！",
  "form.confirm": "确认",
  "form.nameRequired": "名称不允许为空",
  "form.nameExists": "该名称已存在",
  "form.sortPlugin": "排序插件",
  "form.selectPlugin": "选择插件",
  "form.addr": "地址",
  "form.weight": "权重",
  "form.addrs": "添加地址",
  "form.setHeader": "设置响应头",
  "form.removeHeader": "设置要删除的响应头，多个值以空格分隔",
  "form.headerName": "响应头名称",
  "form.headerValue": "响应头值",
  "form.addProxyHeader": "添加转发请求头",
  "form.setProxyHeader": "设置转发请求头",
  "form.proxyHeaderName": "请求头名称",
  "form.proxyHeaderValue": "请求头值",
  "form.gzip": "Gzip的压缩级别",
  "form.br": "Br的压缩级别",
  "form.zstd": "Zstd的压缩级别",
  "form.adminPath": "管理后台的路径",
  "form.adminAuthorization": "Basic auth，base64处理后的值，base64(user:pass)",
  "form.basicAuth": "Basic auth(base64(user:pass))，多个值用','分隔",
  "form.limitCategory": "限流类型",
  "form.limitTag": "限流的标记",
  "form.limitKey": "限流的key",
  "form.limitInterval": "限流的计算间隔(用于rate类型)",
  "form.limitMax": "限流的最大值",
  "form.limitValue": "限流的相关限制",
  "form.allow": "允许",
  "form.deny": "禁止",
  "form.dirPath": "静态文件目录",
  "form.dirIndex": "静态文件目录首页文件",
  "form.dirAutoIndex": "是否允许以目录形式浏览",
  "form.dirChunkSize": "静态文件响应的分块大小",
  "form.dirMaxAge": "静态文件缓存的有效期",
  "form.dirCachePrivate": "是否设置静态文件为私有缓存",
  "form.dirCharset": "静态文件的编码",
  "form.dirDownload": "是否支持文件下载",
  "form.requestIdAlgo": "请求ID的生成算法",
  "form.requestIdLength": "请求ID长度",
  "form.ipList": "IP列表",
  "form.limitMode": "限制模式, 0:允许, 1:禁止",
  "form.keyAuthType": "认证key类型，0:header, 1:query",
  "form.keyAuthName": "认证key的名称",
  "form.keyAuthValues": "认证值列表",
  "form.keyAuthAdd": "添加认证的值",
  "form.basicAuthList": "Basic auth的认证列表",
  "form.basicAuthAdd": "添加basic auth认证",
  "form.cacheStorage": "缓存的配置",
  "form.redirectPrefix": "重定向时使用的前缀",
  "form.statsPath": "统计插件对应的路径",
  "form.pingPath": "Ping插件对应的路径",
  "form.responseHeadersAddHeaderName": "添加的响应头名称",
  "form.responseHeadersAddHeaderValue": "添加的响应头值",
  "form.responseHeadersAdd": "添加更多的响应头",
  "form.responseHeadersSetHeaderName": "设置的响应头名称",
  "form.responseHeadersSetHeaderValue": "设置的响应头值",
  "form.responseHeadersSet": "设置更多的响应头",
  "form.responseHeadersRemoveHeaderName": "要删除的响应头名称",
  "form.responseHeadersRemove": "删除更多的响应头",
  "form.mockPath": "Mock响应的匹配路径",
  "form.mockStats": "Mock响应的状态码",
  "form.mockHeader": "Mock响应的响应头",
  "form.mockData": "Mock响应的数据",
};
