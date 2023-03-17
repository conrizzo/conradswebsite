import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from  '../views/projects/ProjectsView.vue'
import CowculatorView from  '../views/projects/CowculatorView.vue'

import ProjectDetailsView from  '../views/projects/ProjectDetailsView.vue'

//import about from '../views/about.vue'


const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',    
    
    component: ProjectsView
  },
  {
    path: '/projects/cowculator',
    name: 'cowculator',    
    
    component: CowculatorView
  },
  {
    path: '/projects/:id:details',
    name: 'ProjectDetailsView',   
    component: ProjectDetailsView,
    props: true
  },
  // Keep this at the end of the array so only unmatched paths go here
  // This is important, otherwise direct links to pages a user enters will not work on the web!
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  
]

const router = createRouter({
  // using # hash mode since the site is being hosted on github pages so the links can be directly accessed
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
