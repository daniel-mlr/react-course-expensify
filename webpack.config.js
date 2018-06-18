/** s13 L137 refactoring directoryes
 * pour extraire les css et les placer dans un fichier séparé
 */

/* global module, __dirname, require */

const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// remplacé par: (voir s13 L134 'Browse Q&A')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtractPlugin({ filename:  'style.css' })

  return {
    entry: './src/app.js',
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
    plugins: [ CSSExtract ],
    // devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool:isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}

