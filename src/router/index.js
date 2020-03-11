import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {   
    path: '/',
    name: 'about',    
    component: About,     
    
  },
  {   
    path: '/project',
    name: 'project',    
    component: Project,   
      
    
  }
  
]

const router = new VueRouter({
  routes,
  /* Removes the '#' after the URL */
  mode: 'history'
  
})

Vue.prototype.$appName = 'My App'



export default router

