//its just node js module!
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


console.log(__dirname);

var config = {
  context: __dirname,

  entry: {
    bundle: ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      "./javascripts/entry"]
  },

  devtool: 'eval',

  output:
  {
    path: __dirname + "/webpack_dist",
    filename:"[name].js",
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.PrefetchPlugin('jquery'),
    new webpack.ProvidePlugin({$: 'jquery'}),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.png|jpg|svg|ttf|otf|woff|woff2$/, loader: "file-loader?limit=100000"}
    ]
  },

  devServer: {
    headers: {"Access-Control-Allow-Origin": "*"}
  },

  debug: true,

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "javascripts"]
  }
};

module.exports = config;
