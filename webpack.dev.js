const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TemplateLoader = require("./src/template/template-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: 'source-map', // https://webpack.js.org/configuration/devtool/
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        templateContent: ({htmlWebpackPlugin}) => {
          const loader = new TemplateLoader(htmlWebpackPlugin);
          return loader.getTemplateHTML();
        }
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          //"style-loader", //3. Inject styles into DOM
          MiniCssExtractPlugin.loader, // 3. extracts css into separate files
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            },
          },
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  }
});
