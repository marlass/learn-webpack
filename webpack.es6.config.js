var webpack = require('webpack'),
    path = require('path');
 
module.exports = {
    debug: true,
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist/js/es6'),
        filename: '[name].js'
    },
    eslint: {
    configFile: './.eslintrc.json'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}            
        ]
    },
    watch: true
};