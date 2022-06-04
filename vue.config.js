const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  lintOnSave: false,
  // 输出文件目录
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      // 设置代理
      '/api': {
        target: 'http://api.xxqq.top', //线上测试',
        // target: 'http://m.metacurrency.trade', // 线上正式',
        // target: 'http://127.0.0.1:8090', //本地测试',
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
})
