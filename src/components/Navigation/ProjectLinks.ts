



// require.context is a webpack feature that allows us to get all the files in a directory
// false means don't look in subdirectories (only check this directory)
const requireContext = require.context('@/images/projects', false, /\.jpg$/);
const images = requireContext.keys().map(requireContext);




export default [
  { id: 1, text: 'Store', to: '/projects/store/store-prototype-made-in-vuejs-and-typescript', caption:"A store design made with Vue.js and Typescript", imageSrc: "" },
  { id: 2, text: 'Cowculator', to: '/projects/cowculator',caption:"A real calculator that does parsing to solve calculations and shows the binary tree of the calculations", imageSrc: "" },
  { id: 3, text: 'Weather', to: '/projects/weather',caption:"Weather in Tuebingen, Germany", imageSrc: "" },
  { id: 4, text: 'Coffee Data', to: '/projects/datasets',caption:"Some miscellaneous data about coffee consumption", imageSrc: "" },
  { id: 5, text: 'Game', to: '/projects/cowgame',caption:"A game made using Vue.js and TypeScript", imageSrc: "" },
  { id: 6, text: 'Sorting Algorithms', to: '/projects/sortingalgorithms',caption:"Made this to test some sorting algorithm outputs", imageSrc: "" },
  { id: 7, text: 'Skat Game', to: '/projects/cards',caption:"An attempt to build a card game, got lost figuring out the rules so it's still a prototype...", imageSrc: "" },
  { id: 8, text: 'Fetch Data', to: '/projects/fetchdata',caption:"A simple experimental page that fetches api data and formats it", imageSrc: "" },
  { id: 9, text: 'Search Wordle Words', to: '/projects/search-assistant-to-help-find-words-for-the-wordle-game',caption:"Search Wordle words with TypeScript", imageSrc: "" },
  { id: 10, text: 'Cosine Similarity', to: '/projects/compare-cosine-similarity',caption:"Compare words/sentences semantic cosine scores with sentence transformers", imageSrc: "" },
  { id: 11, text: '404 Page', to: '/12315fge45',caption:"Go to the 404 page for fun!", imageSrc: "" },
  
  
].map((link, index) => ({ ...link, imageSrc: images[index] }));

