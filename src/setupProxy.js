//https://p3p7b0bvxl.execute-api.eu-central-1.amazonaws.com/test/stabledpopacatalin

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://p3p7b0bvxl.execute-api.eu-central-1.amazonaws.com/',
  changeOrigin: true,
};
module.exports = function (app) {
  app.use('/test', createProxyMiddleware(proxy));
};