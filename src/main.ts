
import { createApp } from 'vue';
import  App  from './App.vue';
import router from './router';


import 'prismjs';
/* import 'prismjs/themes/prism.css'; */



createApp(App).use(router).mount('#app');


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






