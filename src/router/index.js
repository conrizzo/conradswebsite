import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {   
    path: '/',
    name: 'about',    
    component: About
    
    
  }
  
]

const router = new VueRouter({
  routes
})



export default router
