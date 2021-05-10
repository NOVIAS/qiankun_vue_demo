const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // 最新的babel-loader 自动关闭了 ESM 转换插件, 旧版本需要手动关闭
            // 对于业务开发, 这里要关闭 modules 保证 tree-shaking 正常
            // 组件开发者可以忽略
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            // 开发环境没有必要开启
            cacheCompression: false,
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '基座模式主页',
      // 根据指定模板生成 html
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    clientLogLevel: 'warning',
    compress: true,
    // 关键点: 设置跨域
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true,
    overlay: { warnings: false, errors: true }
  }
}
