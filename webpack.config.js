const path = require('path');

module.exports = {
  entry: './ui/modules/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './ui/dist')
  },
  resolve : {
      extensions : [".js",".ts"]
  },
  devtool : "source-map",
  module : {
      loaders : [
        { 
          test : /\.ts$/,
          loader : 'ts-loader'
        }
      ]
  }
};