const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge.merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/site/",
    filename: "[name].[contenthash:8].js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        },
      },
    },
  },
});
