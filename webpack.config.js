const webpack = require('webpack');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === "production";
    const config = {
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js'
        },
        plugins: [

        ]
    }
    return config;
}