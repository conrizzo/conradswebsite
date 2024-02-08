//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true
//})

module.exports = {
  publicPath: '/',

  // fixes the hydration error message
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
        return args;
      });
  }

}

// vue.config.js


// vue.config.js added from https://vuejs.org/api/compile-time-flags.html to remove hydration error message
