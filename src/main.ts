
import { createApp } from 'vue';
import  App  from './App.vue';
import router from './router';
import './assets/globalCSS.css';

import 'prismjs';


/*
window.addEventListener('resize', onResize)
// set size on startup
onResize()

function onResize() {
  // get actual vh on mobile
  document.body.style.setProperty('--vh', window.innerHeight + 'px')
}*/

createApp(App).use(router).mount('#app');

/* import 'prismjs/themes/prism.css'; */
/*
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';


createApp(App).use(router).mount('#app')
*/

/* In the package.json this command is important:
"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"
after it builds the vue website, it copies index to a 404.html so gh pages redirects all links correctly,
then sends it to the gh-dist folder */

/* npm install prism.js*/






