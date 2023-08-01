/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */

<template>
  <div class="background-color" style="padding-top: 3em;">
    <p class="paragraph-text" style="text-align: center; font-size: 1.5em;">
      This page is a work in progress. 
      <br>
      <br>      
      I am currently working on a project that uses Rust with Web Assembly to compile the logic of a web program and I will be updating this page with more information 
    soon!</p>
  </div>
  <div class="button-area">
    <button class="button-35"  @click="runRust">Run Rust</button>
  </div>
  <div id="greeting"></div>
  <pre v-bind:class="'language-rust'"><code>#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    let mut rng = thread_rng();
    let random_number = rng.gen_range(1..=100);
    
        if random_number >= 75 {
            return format!("{name} {random_number}/100 Coffee is good, time to drink more coffee!");
        } else {
            return format!("{name} {random_number}/100 Seems you may have had too much coffee today, drink carbonated water instead!");
        }    
    }   
</code></pre>
  <FirstFooter></FirstFooter>
</template>
  
<script>

import "@/assets/globalCSS.css";
import FirstFooter from "@/components/FirstFooter.vue";
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-rust.min.js';
// import rust web assembly .js file
import init, {greet} from "@/rust_web_assembly/hello_wasm.js";

export default {
  name: 'rustWebAssemblyView',
  components: {
    FirstFooter,
  },
  data() {
    return {      
      
    };
  },
  mounted() {
      Prism.highlightAll();
    },
  methods: {
  runRust(){
    init().then(() => {
        const greeting = greet("You rolled:");
        document.getElementById("greeting").textContent = greeting;
      });
  }

  }
};
</script>
  
<style scoped>

.button-area{
 
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>