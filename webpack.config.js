const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  output: {
    path: path.resolve(__dirname, './assets/js/'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
