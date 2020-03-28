var path = require('path');

const dropbox_dir = '/Users/yumochi21/Dropbox/Customize/modules';

module.exports = {
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(dropbox_dir, 'dist'),
    filename: 'kintone-viewer.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use:[
          'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: 'url-loader'
      }
    ]
  }
};