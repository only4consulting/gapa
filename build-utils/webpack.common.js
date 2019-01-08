const commonPaths = require('./common-paths');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    polyfill: '@babel/polyfill',
    vendor: ['semantic-ui-react']
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: './images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public/styles/', to: 'styles' }
    ]),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`
    }),
    new webpack.DefinePlugin({
      ENVAR_API_URL: JSON.stringify(process.env.API_URL),
      ENVAR_UAI: JSON.stringify(process.env.UAI),
      ENVAR_SITE_KEY: JSON.stringify(process.env.SITE_KEY)
    })
  ]
};

config.node = {
  fs: 'empty'
}

module.exports = config;
