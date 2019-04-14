const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // address to package in package.json

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:'/dist' // for dev-server
    },
    module: {
        rules: [  // loaders for processing js, css... files.
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // the loader helps separate css and js
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                   {
                       loader: 'css-loader',
                       options: { sourceMap: true }
                   },
                   {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                   }
                ]
            }
        ]
    },
    devServer: {
        overlay: true // show error
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css' 
        }),
    ],
}