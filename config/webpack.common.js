var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    context: path.join(__dirname, "../src"),
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file?name=img/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?.*$|$)/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.less$/,
                include: helpers.root('src', 'app'),
                loaders: ["raw-loader", "less-loader"]
            }

        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './index.ejs',
            baseUrl: '/'
        })
    ]
};
