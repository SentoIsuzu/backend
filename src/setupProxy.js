const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api', { 
         target: "http://shop.mana.d2c.cn/",
         secure: false,
         changeOrigin: true,
         pathRewrite: {
          "^/api": "/back"
         },
      })
    );
  };
//export default {}