// The important fix for the direct links to work on GitHub pages was copying the generated build from the dist
// folder and renaming the copy 404.html  

//firebase authorization import
//import { auth } from '@/firebase/init.js';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

// create router
import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const MainPageToListProjects = () => import('../views/MainPageToListProjects.vue');

const AboutView = () => import('../views/AboutView.vue');
const PrivacyView = () => import('../views/PrivacyView.vue');
const AuthorizedView = () => import('../views/AuthorizedView.vue');

// Projects
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
const CountryMusicExperimentView = () => import('../views/projects/CountryMusicExperiment/CountryMusicExperimentView.vue');
const GridDragView = () => import('../views/projects/GridDragView/GridView.vue');
const NLPView = () => import('../views/projects/NLPView.vue');
//const JungleView = () => import('../views/projects/JungleView.vue');

const yadhtriByppahView = () => import('../views/yadhtriByppahView.vue');

const PageNotFoundView = () => import('../views/PageNotFoundView.vue');
// const about = () => import('../views/about.vue');

const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'ConradsWebsite.com',
      description: 'Home page of ConradsWebsite.com'
    },
  },

  {
    path: '/my-projects',
    name: 'MainPageToListProjects',
    component: MainPageToListProjects,
    meta: {
      title: 'ConradsWebsite.com',
      description: 'Main page of ConradsWebsite.com for Projects'
    },
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Page',
      description: 'About ConradsWebsite.com',
    },
  },

  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
    meta: {
      title: 'Privacy Policy',
      description: 'Privacy Policy',
    },
  },

  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },

  {
    path: '/projects/:id/',
    /* path: '/projects/:id/:title/:details',     --- Dynamic routing */
    name: 'ProjectDetailsView',
    component: ProjectDetailsView,
    props: true,
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    children: [
      {
        path: 'cowculator',
        name: 'cowculator',
        component: CowculatorView,
        meta: {
          title: 'A real working calculator',
          description: 'This cowculator was made from scratch and does real parsing and displays a binary tree of calculations.',
        },
      },
      {
        path: 'datasets',
        name: 'DatasetsView',
        component: DatasetsView,
      },
      {
        path: 'weather',
        name: 'WeatherView',
        component: WeatherView,
        meta: {
          title: 'Weather in Tuebingen, Germany',
          description: 'Basic Weather App fetching weather data using the wttr.in API',
        },
      },
      {
        path: 'interesting-links',
        name: 'LinksView',
        component: LinksView,
      },
      {
        path: 'cowgame',
        name: 'CowGameView',
        component: CowGameView,
        meta: {
          title: 'Cow Game',
          description: 'A basic game where the user can drag and drop food to feed the cows. Made with Vue.js and TypeScript.',
        },
      },
      {
        path: 'login',
        name: 'FirebaseTestView',
        component: FirebaseTestView,
      },
      {
        path: 'sortingAlgorithms',
        name: 'SortingAlgorithmsView',
        component: SortingAlgorithmsView,
      },

      {
        path: 'rustwebassembly',
        name: 'RustWebAssemblyView',
        component: RustWebAssemblyView,
      },

      {
        path: 'cards',
        name: 'CardsView',
        component: CardsView,
      },

      {
        path: 'gallery',
        name: 'Gallery',
        component: GalleryView,
      },

      {
        path: 'store/store-prototype-made-in-vuejs-and-typescript',
        name: 'StorePrototype',
        component: StoreView,
      },

      {
        path: 'store/checkout',
        name: 'checkout',
        component: StoreCheckOutView,
        props: true // Allows passing props via route parameters
      },
      {
        path: 'store/product/:id/:name/',  //:image/:price',
        name: 'ProductPageView',
        component: ProductPageView,
        props: true,
      },

      {
        path: 'RenderTemplate/template',
        name: 'RenderTemplateView',
        component: RenderTemplateView,
      },

      {
        path: 'fetchdata',
        name: 'fetchdata',
        component: FetchDataView,
      },

      {
        path: 'search-assistant-to-help-find-words-for-the-wordle-game',
        name: 'search-assistant-to-help-find-words-for-the-wordle-game',
        component: WordHelperView,
        meta: {
          title: 'Search assistant to help find words for the Wordle game',
          description: 'A project to help win the game Wordle by searching strings with JavaScript/TypeScript',
          ogImage: '/9word_searcher.jpg',
        },
      },

      {
        path: 'compare-cosine-similarity',
        name: 'compareCosineSimilarityView',
        component: NLPView,
      },

      {
        path: 'country-music-generator',
        name: 'countrymusicexperiment',
        component: CountryMusicExperimentView,
      },
      {
        path: 'drag-and-drop-stuff', 
        name: 'gridDragExperiment', 
        component: GridDragView,
      }
      /*
      {
          path: 'jungle-page',
          name: 'JungleView',
          component: JungleView,
      },
      */
    ],
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
  // This is important, otherwise incorrect direct links to pages a user enters will not work  
  {
    path: '/404',
    name: 'PageNotFoundView',
    component: PageNotFoundView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

// Does web history, and also routes to the saved position on a page if the user hits Refresh
// As documented in the 4th option down https://router.vuejs.org/guide/advanced/scroll-behavior.html
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash // scroll to hash element in page
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  },
});

// this should fix it invoking the next() function multiple times.
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  //const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  document.title = to.meta.title as string || 'ConradsWebsite.com';

  let metaDescriptionTag = document.querySelector('meta[name="description"]');

  if (metaDescriptionTag) {
    (metaDescriptionTag as HTMLMetaElement).setAttribute('content', to.meta.description as string || 'Welcome to ConradsWebsite.com');
  } else {
    metaDescriptionTag = document.createElement('meta');
    (metaDescriptionTag as HTMLMetaElement).name = 'description';
    (metaDescriptionTag as HTMLMetaElement).content = to.meta.description as string || 'Welcome to ConradsWebsite.com';
    document.getElementsByTagName('head')[0].appendChild(metaDescriptionTag);
  }

  // image for open graph
  let metaOgImageTag = document.querySelector('meta[property="og:image"]');

  if (metaOgImageTag) {
    (metaOgImageTag as HTMLMetaElement).setAttribute('content', to.meta.ogImage as string || 'https://www.conradswebsite.com/9word_searcher.jpg');
  } else {
    metaOgImageTag = document.createElement('meta');
    (metaOgImageTag as HTMLMetaElement).setAttribute('property', 'og:image');
    (metaOgImageTag as HTMLMetaElement).content = to.meta.ogImage as string || 'https://www.conradswebsite.com/9word_searcher.jpg';
    document.getElementsByTagName('head')[0].appendChild(metaOgImageTag);
  }

  // Wait for Firebase authentication to initialize
  /*
  const unsubscribe = auth.onAuthStateChanged(user => {
    unsubscribe(); // Unsubscribe after getting the user state for the first time

    if (requiresAuth && !user) {
      next('/projects/firebasetest'); // Redirect to home page if user is not authenticated
    } else {
      next(); // Allow access to authorized or non-authorized pages
    }

  });
  */

  next();
});
export default router;
