var winston = require('winston');
// console.log(winston);
function logProvider() {
  return winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  });
}

var PROXY_CONF = {
  '/backend/**': {
    target: "http://localhost:8183",
    secure: true,
    changeOrigin: true,
    logLevel: "debug",
    logProvider: logProvider,
    pathRewrite: {
      "^/backend/": "/"
    }
  }


};
module.exports = PROXY_CONF;
