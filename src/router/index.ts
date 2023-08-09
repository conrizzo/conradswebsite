import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');

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

export default router;
