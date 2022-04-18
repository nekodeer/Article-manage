const {createProxyMiddleware} = require('http-proxy-middleware')
 
module.exports = function(app){
  app.use(createProxyMiddleware('/api',{
    target:'http://47.93.114.103:6688/manage',
    changeOrigin:true,
    pathRewrite:{"^/api":""}
  }))
}
