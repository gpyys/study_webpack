const path = require ('path');
const HelloWorld = require ('./pligins/plugin1');
const HtmlPlugin = require ('./pligins/html');
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    path: path.resolve (__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require("autoprefixer"), require('postcss-preset-env')]
          //     }
          //   }
          // }
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.md$/,
        use: ['html-loader', './markdown-loader'],
      },
    ],
  },
  plugins: [
    // new HelloWorld (),
    new HtmlPlugin({
      filename:'index.html',
      template:'./index.html'
    })
  ],
};
