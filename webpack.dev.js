const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const TemplateLoader = require("./src/template/template-loader");

module.exports = merge(common, {
  mode: "development",
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
      })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
