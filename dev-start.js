var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/config.dev.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  proxy:{
      '/api/*': {
        target: 'http://nldctvlevemr001.levi9.com/',
        secure: false
      }
}}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
