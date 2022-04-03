const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  mode: 'development',
  entry: './src/assets/js/docs.js',
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin(), new HtmlMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    static: './dist',
    hot: true
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs-page.html',
      template: 'src/docs-page.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'linked-list.html',
      template: 'src/linked-list.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets/images" },
      ],
    }),
  ],
};