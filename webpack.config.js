const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',  // '[name].js' for more then one entry point
        path: path.resolve(__dirname,'./dist'),
        publicPath:'/dist' // for dev-server
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    devServer: {
        overlay: true // show error
    }
}