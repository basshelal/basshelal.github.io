const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const srcDir = path.join(__dirname, "..", "src");
const publicDir = path.join(__dirname, "..", "public");
const destinationDir = path.join(__dirname, "..", "dist");

module.exports = {
    entry: {
        index: path.join(srcDir, "index.tsx"),
    },
    output: {
        path: destinationDir,
        filename: "[name].js",
        publicPath: "/"
    },
    optimization: {
        minimize: false,
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        })
    ],
};