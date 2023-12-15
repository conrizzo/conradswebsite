
<template>
  <div class="background-color" style="padding-top: 3em;">
    <p class="paragraph-text" style="text-align: left; font-size: 1.5em;">
      This page is a work in progress. 
      <br>
      <br>      
      I am currently working on a project that uses Rust with Web Assembly to compile the logic of a web program and I will be updating this page with more information 
    soon! Click the button below to run the Rust code. If you roll 75 or higher, you should drink more coffee. If you roll below 75, you should drink carbonated water instead!
    Adding more soon!</p>
  </div>
  <div class="button-area">
    <button class="button-35"  @click="runRust">Run Rust</button>
  </div>
  
  <div style="font-size: 1.5em;" id="greeting"></div>
  <pre v-bind:class="'language-rust'"><code>
/* The #[wasm_bindgen] attribute is a macro in Rust that is used to generate JavaScript bindings for Rust functions and types. */  
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    /* The `thread_rng` function is part of the Rust `rand` crate, which provides utilities for generating random numbers and other random data. 
    The `thread_rng` function creates a new instance of the `ThreadRng` type, which is a random number generator that is safe to use in a multi-threaded context. */
    let mut rng = thread_rng();
    // generates a random number between 1 and 100 inclusive (can be 1 or 100 too!)
    let random_number = rng.gen_range(1..=100);
    
        if random_number >= 75 {
            return format!("{name} {random_number}/100 Coffee is good, time to drink more coffee!");
        } else {
            return format!("{name} {random_number}/100 Seems you may have had too much coffee today, drink carbonated water instead!");
        }    
    }   
</code></pre>
<p class="paragraph-text">Enter some strings separated by spaces e.g. 
  'tree beach house car' and they will be randomized using Rust Web Assembly as you type them in! Amazing!<br>
   Oddly, every new character addition or deletion is shuffling the array using Rust Web Assembly code. Yes, spaces 
  count as characters, and nothing can logically be shuffled until there are two tokens with a space between them!</p>
    <label for="name">Write stuff here:</label>
    <input style="width: 350px; font-size: 1.5em;" type="text" id="name" v-model="name">
    
    <p class="paragraph-text">What you typed: {{ name }}{{runRustArrayRandomizer()}}</p>
    <div style="font-size: 1.5em; text-align: center; padding-left: 1em; padding-right: 1em; padding-bottom: 2em;" id="randomizedArray"></div>
    

</template>
  
<script>

import "@/assets/globalCSS.css";

import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-rust.min.js';
// import rust web assembly .js file
import init, {greet, main} from "@/rust_web_assembly/hello_wasm.js";

export default {
  name: 'rustWebAssemblyView',
  components: {
    
  },
  data() {
    return {      
      name: "",
      inputString: "Hello, it is a beautiful day isn't it?",
    };
  },
  mounted() {
      Prism.highlightAll();
    },
  methods: {
  addLettersIntoInput(){
    let i = 0;
const intervalId = setInterval(() => {
  if (i < this.inputString.length) {
    this.name += this.inputString[i];
    i++;
  } else {
    clearInterval(intervalId);
  }
}, 200);
  },
  runRust(){
    init().then(() => {
        const greeting = greet("You rolled:");
        document.getElementById("greeting").textContent = greeting;
      });
  },
  runRustArrayRandomizer(){
    init().then(() => {
        const arr = this.name.split(" ");
        let mainFunction = main(arr);
        /*
        let outputArray = []
        for (let i = 0; i < mainFunction.length; i++) {
          outputArray.push(mainFunction[i]);
        }
        */
        // add spaces
        mainFunction = mainFunction.join(" ");
        console.log(typeof mainFunction);
        document.getElementById("randomizedArray").textContent = mainFunction;
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