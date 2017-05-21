module.exports = {
  entry: './client/index.js',
  output: {
  path: __dirname + '/server/public',
  filename: 'bundle.js'
},
module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
  moduleExtensions: ['-loader']
  },
  devtool: 'source-map'
}
