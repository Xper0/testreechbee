const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack')



module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/dis"),
        filename: "[name].[chunkhash].js",

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],

            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpg|svg|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images",
                        publicPath: "images"
                    }
                }]
            }

        ]
    },
    /*
    devServer: {
        contentBase: "./dis",
        open: true,
        port: 3000
    },*/
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),





    ]
};
