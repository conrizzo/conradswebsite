
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import  App  from './App.vue';
import router from './router';

import './assets/globalCSS.css';
import 'prismjs';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
/* await router.isReady(); */


/*
Without await router.isReady(), there could be a flash of unstyled content (FOUC), 
where the user sees the page before it's fully rendered, or other inconsistencies in the initial render.
*/


/*
window.addEventListener('resize', onResize)
// set size on startup
onResize()

function onResize() {
  // get actual vh on mobile
  document.body.style.setProperty('--vh', window.innerHeight + 'px')
}*/



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






