
require('babel-register');

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var DashboardPlugin = require('webpack-dashboard/plugin');

var webpackConfig = require('./webpack.config');

var frontendPath = path.resolve(__dirname, '..');
var buildPath = path.join(frontendPath, '..', 'www');

/**
 * INITIALIZATION
 */

var compiler = webpack(webpackConfig);
compiler.apply(new DashboardPlugin());

var port = 8080;
var app = express();
var middleware = webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  watchOptions: {
    poll: true
  },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

/**
 * SERVER SETTINGS
 */

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

/**
 * ROUTES
 */

app.use(express.static(buildPath));

/**
 * LAUNCH SERVER
 */

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🐵 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
