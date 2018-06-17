/** s13 lect 133 config pour production 
 * ajout d'un script dans package.json qui permet d'utiliser l'environnement de
 * production. Modification de webpack.config.js pour choisir le devtool.
 */

/* global module, __dirname, require */

const path = require('path')

// exporte une fonction qui retourne un objet, plutôt que l'objet lui-même
module.exports = (env) => {
  const isProduction = env === 'production'
  return {
    entry: './src/app.js',
    mode: 'development',
    output: {
      path: path.join(__dirname, 'public'),
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
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}

