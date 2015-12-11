var path = require('path');
var webpack = require('webpack');

var config = {
    context: __dirname + '/javascripts',

    entry: {
        bundle: ['./index.js']
    },

    output: {
        library: 'ReactRouter',
        libraryTarget: 'umd'
    },

    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        'events',
        {'jquery': 'jQuery'},
        { 'lodash': 'lodash'}

    ],

    output:
    {
        path: __dirname + '/dist',
        filename:'[name].js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']}
        ]
    },

    plugins: [
        //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'javascripts']
    }
};

module.exports = config;
