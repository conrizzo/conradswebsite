import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Project from '@/views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {   
    path: '/', name: 'about', component: About     
    
  },
  {   
    path: '/project', name: 'project', component: Project        
    
  }
  
]

const router = new VueRouter({
  
  /* Removes the '#' after the URL */
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})




export default router

