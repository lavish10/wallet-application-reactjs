const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: process.env.REACT_APP_WALLET_API_URL?process.env.REACT_APP_WALLET_API_URL:"http://localhost:8080/" }));
 };