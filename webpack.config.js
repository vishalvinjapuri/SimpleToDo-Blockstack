module.exports = {
  entry: [
    './node_modules/express/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  }
}
