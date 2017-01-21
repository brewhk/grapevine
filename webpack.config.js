const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["es2015", "react"]
        }
      }
    ]
  },
};
