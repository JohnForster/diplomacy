const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/client/index.ts',
  devtool: 'inline-source-map',
  //! Uncomment the below when working with express
  // target: 'node',
  // node: {
  //   // Need this when working with express, otherwise the build fails
  //   __dirname: false,   // if you don't put this is, __dirname
  //   __filename: false,  // and __filename return blank or /
  // },
  // externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.(html)$/,
      //   loader: 'html-loader',
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   loader: 'file-loader'
      // }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './src/client/assets', to: './assets'}
    ])
  ],
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8083,
    host: '0.0.0.0'
  }
}