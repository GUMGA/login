var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'gumga-login.min.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      beautify: true,
      comments: false,
      mangle: false,
      compress: {
          warnings: false
      }
    }),
    new ExtractTextPlugin({
			filename: "dist/style.css",
			allChunks: true
		})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0"]
        }
      },
      {
				test: /\.css$/,
				loader: extractCSS.extract(['style-loader','css-loader?importLoaders=1'])
			},
			{ test: /\.png$/, loader: "file-loader" }
    ]
  }
};
