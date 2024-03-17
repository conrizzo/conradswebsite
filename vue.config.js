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

/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */

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
  },




  // split webpacks into chunks to reduce load time and prevent duplicates
  // According to the author of webpacks, the error is in tools like lightspeed saying duplicate,
  // and there actually aren't duplicates? so this is a bit unclear
  configureWebpack: {
    /*
    plugins: [
      new BundleAnalyzerPlugin()
    ],
    */
    // split webpacks into chunks to reduce load time and prevent duplicates
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
}
// vue.config.js


// vue.config.js added from https://vuejs.org/api/compile-time-flags.html to remove hydration error message
