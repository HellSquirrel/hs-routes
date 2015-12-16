var webpack = require("webpack"),
    path = require("path");


module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './javascripts/test/test.entry.js'
        ],


        plugins: [
            require("karma-webpack"),
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-mocha-reporter")

        ],

        reporters: ['mocha'],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './javascripts/test/test.entry.js': ["webpack"]
        },


        webpack: {

            devtool: 'cheap-module-source-map',

            module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
                ]
            },

            plugins: [
                new webpack.PrefetchPlugin('jquery'),
                new webpack.ProvidePlugin({
                    $: 'jquery'
                })
            ],

            resolve: {
                extensions: ['', '.js', '.jsx'],
                modulesDirectories: ["node_modules", "javascripts"]
            }
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};
