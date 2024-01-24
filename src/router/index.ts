// The important fix for the direct links to work on GitHub pages was copying the generated build from the dist
// folder and renaming the copy 404.html  

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
const CardsView = () => import('../views/projects/CardsView.vue');
const GalleryView = () => import('../views/projects/GalleryView.vue');
const StoreView = () => import('../views/projects/store/StoreView.vue');
const StoreCheckOutView = () => import('../views/projects/store/StoreCheckOutView.vue');
const ProductPageView = () => import('../views/projects/store/ProductPageView.vue');
const RenderTemplateView = () => import('../views/projects/RenderTemplate/RenderTemplateView.vue');
const FetchDataView = () => import('../views/projects/FakeStore/MainPageView.vue');
const WordHelperView = () => import('../views/projects/WordHelper/WordHelperView.vue');

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
    path: '/projects/:id/',
    /* path: '/projects/:id/:title/:details',     --- Dynamic routing */
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
    path: '/projects/login',
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
    path: '/projects/cards',
    name: 'CardsView',
    component: CardsView,    
  },

  {
    path: '/projects/gallery',
    name: 'Gallery',
    component: GalleryView,    
  },

  {
    path: '/projects/store/store',
    name: 'Store',
    component: StoreView,    
  },
  {
    path: '/projects/store/checkout',
    name: 'checkout',
    component: StoreCheckOutView,    
     props: true // Allows passing props via route parameters
  },
  {
    path: '/projects/store/product/:id/:name/:image/:price',
    name: 'ProductPageView',
    component: ProductPageView,
    props: true,
  },

  {
    path: '/projects/RenderTemplate/template',
    name: 'RenderTemplateView',
    component: RenderTemplateView,
  },

  {
    path: '/projects/fetchdata',
    name: 'fetchdata',
    component: FetchDataView,
  },

  {
    path: '/projects/WordHelper',
    name: 'wordhelper',
    component: WordHelperView,
  },

  {
    path: '/yadhtriByppah',
    name: 'yadhtriByppahView',
    component: yadhtriByppahView,
  },

  // Keep this at the end of the array so only unmatched paths go here
  // This is important, otherwise incorrect direct links to pages a user enters will not work  
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

// Does web history, and also routes to the saved position on a page if the user hits Refresh
// As documented in the 4th option down https://router.vuejs.org/guide/advanced/scroll-behavior.html
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

/*
auth.onAuthStateChanged(user => {



});  
*/
  // const currentRoute = window.location.pathname;

  // this should fix it invoking the next() function multiple times.
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Wait for Firebase authentication to initialize
  const unsubscribe = auth.onAuthStateChanged(user => {
    unsubscribe(); // Unsubscribe after getting the user state for the first time

    if (requiresAuth && !user) {
      next('/projects/firebasetest'); // Redirect to home page if user is not authenticated
    } else {
      next(); // Allow access to authorized or non-authorized pages
    }
  });
});
export default router;
