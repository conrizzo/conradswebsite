/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */

 <template>
    <div>
      <h1>Will make some sorting algorithm examples here:</h1>
      <p>Have to start with <a class="text-links-no-underline" href="https://en.wikipedia.org/wiki/Bogosort">Bogosort! </a></p>
      <div style="height: 95vh;"></div>
    </div>
    <FirstFooter></FirstFooter>
  </template>
  
  <script>

 import "@/assets/globalCSS.css";
 import FirstFooter from "@/components/FirstFooter.vue";
  export default {
    name: 'SortingAlgorithmsView',
    components:{
        FirstFooter
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  
  p {
    font-size: 1.25em;
    color: white;
  }

  a{
    background-color: #000;
    padding: 0.25em;
    border-radius: 0.5em;
  }
  </style>