

// require.context is a webpack feature that allows us to get all the files in a directory
// false means don't look in subdirectories (only check this directory)

// uncommenting the 2 const and .map will allow to use a folder of images sorted by rank
// It has been updated to fetch links of the images on a separate server to load faster

//const requireContext = require.context('@/images/projects', false, /\.jpg$/);
//const images = requireContext.keys().map(requireContext);

export default [
  { id: 1, text: 'Store Prototype', to: '/projects/store/store-prototype-made-in-vuejs-and-typescript', caption: "A store prototype made with Vue.js and Typescript", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/1store.jpg" },
  { id: 2, text: 'Cowculator', to: '/projects/cowculator', caption: "A real calculator that does parsing to solve calculations and shows the binary tree of the calculations. Moo × Moo = Moooo", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/2cowculator.jpg" },
  { id: 3, text: 'Check the Weather', to: '/projects/weather', caption: "Weather in Tuebingen, Germany", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/3weather.jpg" },
  { id: 4, text: 'Coffee Consumption by Country', to: '/projects/datasets', caption: "Some miscellaneous data about coffee consumption by country", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/4coffee_consumption.jpg" },
  { id: 5, text: 'Cow Food Game', to: '/projects/cowgame', caption: "A self-made classic arcade style game made using Vue.js and TypeScript", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/5_cow_game.jpg" },
  { id: 6, text: 'Run Sorting Algorithms', to: '/projects/sortingalgorithms', caption: "Made to test some sorting algorithm outputs", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/6sorting.jpg" },
  { id: 7, text: 'Partially made Skat game', to: '/projects/cards', caption: "An attempt to build a card game, just a visual test, doesn't work yet", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/7card.jpg" },
  { id: 8, text: 'Simple Fetch Data Example', to: '/projects/fetchdata', caption: "A simple experimental page that fetches api data and formats it", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/8fetch_data.jpg" },
  { id: 9, text: 'Tool to find Wordle answer', to: '/projects/search-assistant-to-help-find-words-for-the-wordle-game', caption: "Search Wordle words with TypeScript", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/9word_searcher.jpg" },
  { id: 10, text: 'Cosine Similarity example', to: '/projects/compare-cosine-similarity', caption: "Compare words/sentences semantic cosine scores with backend sentence transformers", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/b1_cosine.jpg" },
  { id: 11, text: 'Country Music Search Generator', to: '/projects/country-music-generator', caption: "Classic Country music and natural language processing (under construction)", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/b2_country.jpg" },
  { id: 12, text: 'Drag and Drop Objects', to: '/projects/drag-and-drop-stuff', caption: "Small experiment to generate + drag and drop stuff", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/b3_drag_stuff.jpg" },
  { id: 13, text: 'Are you sure you are sure you agree?', to: 'https://next.conradswebsite.com/agree-to-terms', caption: "Made in React.js and Next.js to make a funny authorization page one sees all too often on the internet", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/b4_auth.jpg" },
  { id: 14, text: 'SQLite React / Next.js Test', to: 'https://next.conradswebsite.com/sql', caption: "Project to test some backend services in React / Next.js", imageSrc: "https://next.conradswebsite.com/images/conradswebsite_images/SQLite.jpg" }
  //{ id: 11, text: '404 Page', to: '/12315fge45',caption:"Go to the 404 page for fun!", imageSrc: "" },


]

//.map((link, index) => ({ ...link, imageSrc: images[index] }));

