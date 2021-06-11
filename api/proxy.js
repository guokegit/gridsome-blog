/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''
    
    // 处理代理目标地址
    if (req.url.startsWith('https://47.243.85.19:1337/')) {
        target = 'http://47.243.85.19:1337/'
    }
    
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
    })(req, res)
}
