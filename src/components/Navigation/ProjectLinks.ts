

// require.context is a webpack feature that allows us to get all the files in a directory
// false means don't look in subdirectories (only check this directory)
const requireContext = require.context('@/images/projects', false, /\.jpg$/);
const images = requireContext.keys().map(requireContext);

export default [
  { id: 1, text: 'Store Prototype', to: '/projects/store/store-prototype-made-in-vuejs-and-typescript', caption:"A store prototype made with Vue.js and Typescript", imageSrc: "" },
  { id: 2, text: 'Cowculator', to: '/projects/cowculator',caption:"A real calculator that does parsing to solve calculations and shows the binary tree of the calculations. Moo × Moo = Moooo", imageSrc: "" },
  { id: 3, text: 'Check the Weather', to: '/projects/weather',caption:"Weather in Tuebingen, Germany", imageSrc: "" },
  { id: 4, text: 'Coffee Consumption by Country', to: '/projects/datasets',caption:"Some miscellaneous data about coffee consumption by country", imageSrc: "" },
  { id: 5, text: 'Cow Food Game', to: '/projects/cowgame',caption:"A self-made classic arcade style game made using Vue.js and TypeScript", imageSrc: "" },
  { id: 6, text: 'Run Sorting Algorithms', to: '/projects/sortingalgorithms',caption:"Made to test some sorting algorithm outputs", imageSrc: "" },
  { id: 7, text: 'Partially made Skat game', to: '/projects/cards',caption:"An attempt to build a card game, just a visual test, doesn't work yet", imageSrc: "" },
  { id: 8, text: 'Simple Fetch Data Example', to: '/projects/fetchdata',caption:"A simple experimental page that fetches api data and formats it", imageSrc: "" },
  { id: 9, text: 'Tool to find Wordle answer', to: '/projects/search-assistant-to-help-find-words-for-the-wordle-game',caption:"Search Wordle words with TypeScript", imageSrc: "" },
  { id: 10, text: 'Cosine Similarity example', to: '/projects/compare-cosine-similarity',caption:"Compare words/sentences semantic cosine scores with backend sentence transformers", imageSrc: "" },
  { id: 11, text: 'Country Music Search Generator', to: '/projects/country-music-generator',caption:"Classic Country music and natural language processing (under construction)", imageSrc: "" },
  { id: 12, text: 'Drag and Drop Objects', to: '/projects/drag-and-drop-stuff',caption:"Small experiment to generate + drag and drop stuff", imageSrc: "" },
  { id: 13, text: 'Are you sure you are sure?', to: 'https://next.conradswebsite.com/agree-to-terms',caption:"Uses React.js and Next.js to make a funny authorization page", imageSrc: "" }
  //{ id: 11, text: '404 Page', to: '/12315fge45',caption:"Go to the 404 page for fun!", imageSrc: "" },
  
  
].map((link, index) => ({ ...link, imageSrc: images[index] }));

