const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

module.exports = {
  test: /\.(css|sass|scss)$/,
  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader', 'sass-loader' ] })

}
