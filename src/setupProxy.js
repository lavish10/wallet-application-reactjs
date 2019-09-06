const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { changeOrigin: true, target: process.cwd().indexOf('/Users/')>-1?"http://localhost:8080/":"https://megamindswallet.herokuapp.com" }));
 };