import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Status from './components/Status.vue'


/* create buttons for github */
import 'vue-github-buttons/dist/vue-github-buttons.css'; // Stylesheet
import VueGitHubButtons from 'vue-github-buttons'; // Component plugin
Vue.use(VueGitHubButtons, { useCache: true });




Vue.config.productionTip = false


// Define a new component called todo-item
Vue.component('app-status', Status)

new Vue({
  
  router, 
  render: h => h(App)
  
}).$mount('#app')


