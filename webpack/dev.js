const merge = require("webpack-merge").merge
const common = require("./common");

module.exports = merge(common, {
    devtool: "inline-source-map",
    mode: "development",
    optimization: {
        minimize: false,
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        proxy: {
            "/api": {
                target: "http://localhost:4000",
                pathRewrite: {"^/api": ""},
            },
        },
        watchFiles: ["files/**/*"]
    },
});