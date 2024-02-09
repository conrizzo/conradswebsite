//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true
//})

/*
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

// pre-rendering html content so it can be searched by search engines
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes:
          ['/',
            '/about',
            '/projects/cowculator',
            '/projects/search-assistant-to-help-find-words-for-the-wordle-game',
            '/projects/store/store-prototype-made-in-vuejs-and-typescript',
          ]
      }),
    ],
  },
*/

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
