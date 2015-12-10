var path = require('path');
var webpack = require('webpack');

var config = {
    context: __dirname + '/javascripts',

    entry: {
        bundle: ['./index.js'],
        vendor: ['react', 'jquery', 'lodash']
    },

    output:
    {
        path: __dirname + '/dist',
        filename:'[name].js'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']}
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'javascripts']
    }
};

module.exports = config;
