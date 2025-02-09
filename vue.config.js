const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   https: true,
  //   host: '0.0.0.0', 
  //   port: 8080,
  //   client: {
  //     webSocketURL: 'wss://mn6c24lt-8080.brs.devtunnels.ms/ws',
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'https://laboratorio3-f36a.restdb.io',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' }, // Reescribe la URL eliminando '/api'
  //     },
  //   },
  // }
})
