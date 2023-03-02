

const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}

//module.exports = {
//  publicPath: process.env.NODE_ENV === 'production'
//    ? '/conradswebsite/'
//    : '/'
//}