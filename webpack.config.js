/** s13 L137 refactoring directories
 * pour extraire les css et les placer dans un fichier séparé
 */

/* global module, __dirname, require, process */

const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// remplacé par: (voir s13 L134 'Browse Q&A')

// accès aux plugins internes de webpack, notamment Define()
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// pour utiliser multiple database (test, production, development)
// automatically set by heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'})
} else if (process.env.NODE_ENV === 'development'){
  require('dotenv').config({ path: '.env.development'})
}

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtractPlugin({ filename:  'style.css' })

  return {
    // s17 L180 babel polyfill
    entry: ['babel-polyfill', './src/app.js' ],
    mode: 'development',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',   // quel loader utiliser
        test: /\.js$/,  // sur quels fichier le loader doit-il s'exécuter
        exclude: /node_modules/,  // exceptions: tout le répertoire des modules
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
    },
    plugins: [ 
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      })
    ],
    // devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool:isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}

