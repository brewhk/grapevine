import webpack from 'webpack';

export default {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              "presets": [["es2015", {"modules": false}], "react"]
            }
          }
        ]
      }
    ]
  },
  watch: true,
};
