const { name } = require('./package')

// 配置开发环境的端口
const port = 8080

module.exports = {
  // 如果是要在子路径下配置站点, 还需要额外配置 publicPath 参数
  // 大多数情况下应该是 '/', 除非你有特殊的需要
  // https://cli.vuejs.org/config/ 参考更多配置
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    // 参考 https://webpack.js.org/configuration/dev-server/
    hot: true,
    port,
    // 不进行主机验证
    // disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    },
    // 子应用解决跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义 webpack 配置
  configureWebpack: {
    // qiankun 需要加入的部分
    output: {
      library: `${name}-[name]`,
      // 一定是 umd 方式
      libraryTarget: 'umd',
      // 定义拉取代码 JSONP
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
