const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


const sourcePath = path.join(__dirname, './sources');
const staticsPath = path.join(__dirname, './static');


module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const IS_PRODUCTION = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),

    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      __PRODUCTION__: IS_PRODUCTION,
      __DEVELOPMENT__: !IS_PRODUCTION,
      __DEVTOOLS__: !IS_PRODUCTION
    }),
  ];

  if (IS_PRODUCTION) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      })
    );
  } else {
    plugins.push(
      // Hot Module Replacement
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          sassLoader: {
            outputStyle: 'expanded' // nested, expanded, compact, compressed
          }
        }
      })
    );
  }

  return {
    devtool: IS_PRODUCTION ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      js: './app/index.js',
      vendor: ['react']
    },
    output: {
      path: staticsPath,
      publicPath: 'http://localhost:3000/',
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]'
            },
          },
        },

        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },

        {
          test: /\.(sass|scss)$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },

        {
          test: /\.(png|jpe?g|gif|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },

        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

      ]
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json', '.css', '.scss'],
      modules: [
        sourcePath,
        'app',
        'shared',
        'node_modules'
      ]
    },

    plugins,

    performance: IS_PRODUCTION && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './sources',
      historyApiFallback: true,
      port: 3000,
      compress: IS_PRODUCTION,
      inline: !IS_PRODUCTION,
      hot: !IS_PRODUCTION,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
