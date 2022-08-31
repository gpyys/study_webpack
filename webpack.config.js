const path = require("path")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders:1,
          }
        }, 'postcss-loader'
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     postcssOptions: {
        //       plugins: [require("autoprefixer"), require('postcss-preset-env')]
        //     }
        //   }
        // }
      ]
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  }
}