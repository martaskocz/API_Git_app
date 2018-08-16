'use strict';

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: {
        index: './client/src/index.js'
    },
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    target: 'node', //needs to be on 'dev' when test on dev server; 'node'
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: 'client/webpack',
        inline: true, //automatic update
        port: 3000,
        open: true,
        proxy: {
            '/auth/github': 'http://localhost:8080',
            '/api/*': 'http://localhost:8080'
        }
    }
};