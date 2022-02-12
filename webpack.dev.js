const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require("sass");
const Dotenv = require("dotenv-webpack");

const config = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: [
            path.resolve('src/client/styles/main.scss'),
            path.resolve('src/client/js/main.js')
        ],
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        library: 'ENLP',
        libraryTarget: 'var'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Evaluate News",
            template: path.resolve('src/client/views/index.html'),
            minify: false
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
        new Dotenv()
    ],
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: sass,
                        },
                    },
                ],
            },
            {   test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
};

module.exports = config;

