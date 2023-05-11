import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from  '../views/projects/ProjectsView.vue'
import CowculatorView from  '../views/projects/CowculatorView.vue'
import DataPullView from  '../views/projects/DataPullView.vue'

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
    // this could be solved by looping as well, likely better ways to route the id details title..
  {
    // I messed up this formatting before! I had the :id:title:details in the path, but it should be :id/:title/:details
    path: '/projects/:id/:title/:details',
    name: 'ProjectDetailsView',   
    component: ProjectDetailsView,
    props: true
  },

  {
    path: '/projects/datapull',
    name: 'DataPullView',  
    component: DataPullView,
    
  },
  // Keep this at the end of the array so only unmatched paths go here
  // This is important, otherwise direct links to pages a user enters will not work on the web!
  // The important fix for the direct links to work on github pages was copying the generated build from the dist
  // folder and renaming the copy 404.html
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  
]

const router = createRouter({
  
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
