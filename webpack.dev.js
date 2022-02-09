import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
    mode: 'development',
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

export default config;

