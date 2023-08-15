//firebase authorization import
import { auth } from '@/firebase/init.js';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

// create router
import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const AuthorizedView = () => import('../views/AuthorizedView.vue');

const ProjectsView = () => import('../views/projects/ProjectsView.vue');
const CowculatorView = () => import('../views/projects/CowculatorView.vue');
const DatasetsView = () => import('../views/projects/DatasetsView.vue');
const WeatherView = () => import('../views/projects/WeatherView.vue');
const LinksView = () => import('../views/projects/LinksView.vue');
const CowGameView = () => import('../views/projects/CowGameView.vue');
const ProjectDetailsView = () => import('../views/projects/ProjectDetailsView.vue');
const FirebaseTestView = () => import('../views/projects/FirebaseTestView.vue');
const SortingAlgorithmsView = () => import('../views/projects/SortingAlgorithmsView.vue');
const RustWebAssemblyView = () => import('../views/projects/RustWebAssemblyView.vue');




const yadhtriByppahView = () => import('../views/yadhtriByppahView.vue');
// const about = () => import('../views/about.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projects/cowculator',
    name: 'cowculator',
    component: CowculatorView,
  },
  {
    path: '/projects/:id/:title/:details',
    name: 'ProjectDetailsView',
    component: ProjectDetailsView,
    props: true,
  },
  {
    path: '/projects/datasets',
    name: 'DatasetsView',
    component: DatasetsView,
  },
  {
    path: '/projects/weather',
    name: 'WeatherView',
    component: WeatherView,
  },
  {
    path: '/projects/Links',
    name: 'LinksView',
    component: LinksView,
  },
  {
    path: '/projects/cowgame',
    name: 'CowGameView',
    component: CowGameView,
  },
  {
    path: '/projects/firebasetest',
    name: 'FirebaseTestView',
    component: FirebaseTestView,
  },
  {
    path: '/projects/sortingAlgorithms',
    name: 'SortingAlgorithmsView',
    component: SortingAlgorithmsView,
  },

  {
    path: '/projects/rustwebassembly',
    name: 'RustWebAssemblyView',
    component: RustWebAssemblyView,
  },

  {
    path: '/authorized',
    name: 'authorized',
    component: AuthorizedView,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/yadhtriByppah',
    name: 'yadhtriByppahView',
    component: yadhtriByppahView,
  },

  // Keep this at the end of the array so only unmatched paths go here
  // This is important, otherwise direct links to pages a user enters will not work on the web!
  // The important fix for the direct links to work on GitHub pages was copying the generated build from the dist
  // folder and renaming the copy 404.html  
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



// Removed duplicate import statement


router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  // const currentRoute = window.location.pathname;

  /* this auth.onAuthStateChanged checks on a direct url to the page, or refreshing it if the user is already logged in
  in summary, the code below allows the user to refresh the page and not be redirected to the login page if 'user'
  value is true */
  auth.onAuthStateChanged(user => {
      
      if (requiresAuth && currentUser || user) {
          next(); // Allow access to authorized page if user is authenticated
        } else if (requiresAuth && !currentUser) {
          next('/projects/firebasetest'); // Redirect to home page if user is not authenticated
        } else {
          next(); // Allow access to non-authorized pages
        }
      });

  });
  
export default router;
