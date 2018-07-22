const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const autoprefixer = require('autoprefixer');

process.noDeprecation = true;

module.exports = {
  mode: "none",
  entry: {
    // we only have 1 entry, but I've set it up for multiple in the future
    App: ['./src/js/app.js', './src/scss/app.scss']
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),    
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // modules: true,
              sourceMap: true              
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[name].css"
    })
  ]
};