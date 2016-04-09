var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// flag passed in to build command
var production = process.argv.indexOf("--production") > -1;

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
    entry: './app/js/main.js',
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundled.js'
    },
    devServer: {
        contentBase: PATHS.build,
        inline: true, // reload on the fly
        port: 3000
    },
    module: {
        // note: loaders are loaded in a reverse order, the first one is
        // actually loaded last, using the result of the previous one
        loaders: [
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('css!autoprefixer!sass')
            },
            {
                // all files finishing by .js
                test: /\.js$/,
                // but not in the node_modules folder
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: true
        })
    ]
}
