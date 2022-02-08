const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    mode: 'development',
    entry: {
        app: [
            path.resolve(__dirname, 'src/client/styles/main.scss'),
            path.resolve(__dirname, 'src/client/js/main.js')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Evaluate News",
            template: path.resolve(__dirname,'src/client/views/index.html'),
            minify: false
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        })
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
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ],
            },
            {   test: /\.(j)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
};

module.exports = config;

