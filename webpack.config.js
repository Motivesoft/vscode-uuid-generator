const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  target: 'webworker', // VS Code web extensions run in a webworker context
  entry: './src/extension.ts',
  output: {
    filename: 'extension.js',
    path: path.resolve(__dirname, 'dist/web'),
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    vscode: 'commonjs vscode' // tell webpack: don’t bundle this, it comes from the host
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  mode: 'none'
};

module.exports = config;