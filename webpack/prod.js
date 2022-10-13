const common = require("./common")
const merge = require("webpack-merge").merge

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true
    }
});