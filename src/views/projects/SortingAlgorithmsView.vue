/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */

<template>
  <div class="background-color">
    <div class="">
      <h1>Sorting algorithms:</h1>
      <p class="paragraph-text">What is <a class="bogo-link no-underlines" style="color: #fff;"
          href="https://en.wikipedia.org/wiki/Bogosort">Bogosort?</a></p><br>
      <p class="paragraph-text">This button below will Bogosort an array.
        Each iteration it adds an element (random integer 1-100) to the array. This is currently using the
        performance.now() function to measure performance time it takes to sort each newly pushed element. This is not the
        most precise way to measure time, and it
        doesn't really work for less than 1/10th of a ms (1/10000th of a second). It gives a good enough picture though.
        Careful! If the size of a bogosorted array is 12 or higher it will likely freeze the page. It uses
        the time complexity of Θ(n &times; n!) which means that the algorithm's running time grows at a rate proportional
        to n multiplied by the factorial of n.
        This is an extremely high time complexity and is considered to be extremely, extremely inefficient.<br>
        Next will be a Bogosorted array of Bogosorted arrays?
        <br>


      </p><br>

      <div style="display: inline-block;">
        <button @click="bogoSort" class="button-35" style="background: #424242;">Click me to Bogosort</button>
        <button @click="arrayOfArrays = [], bogoSortArrayButtonClicked=false" class="button-35" style="background: #424242; margin-left: 0.5em;">Reset</button>
      </div>

      <br><br><label style="padding-right: 1em; color: #fff;" for="number-input">Enter length of array to
        Bogosort!</label>
      <input style="font-size: 1.25em; margin-bottom: 1em;" type="text" id="number-input" v-model="arrayInput"
        placeholder=""><br>

      <div v-show="bogoSortArrayButtonClicked" class="table-container">
        <table  style="color: #fff; text-align: left;">
          <thead>
            <tr>
              <th style="width: 6em;">Array Size</th>
              <th style="width: 15em;">Sorted Array</th>
              <th style="width: 11em;">Number of Shuffles</th>
              <th>Elapsed Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in arrayOfArrays" :key="index">
              <td style="padding-right: 1em;">{{ item[0] }}</td>
              <td style="padding-right: 1em; padding-bottom: 0.5em;">{{ item[1] }}</td>
              <td style="padding-bottom: 0.5em;">{{ item[2] }}</td>
              <td>{{ "Milliseconds: " + item[3].toFixed(3) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- https://vademon.github.io/steam2019emoticons/stickers-Winter2019.html png is from Steam 2019 winter collection -->
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1195690/4e2f1695d6cad53e90dbd8b481db806b49f6a56f.png"
        alt="Bogo Sort GIF">
<pre v-bind:class="'language-JavaScript line-numbers'">
<code>      
  // Following section is BOGOSORT
    bogoSort() {
      

      this.bogoSortArrayButtonClicked = true;

      for (let i = 1; i &lt;= this.arrayInput; i++) {
        const arr = [];
        for (let j = 0; j &lt; i; j++) {
          const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed
          arr.push(randomNumber);
        }
        let number_of_shuffles = 0;
        let startTime = performance.now();
        while (!this.isSorted(arr)) {
          number_of_shuffles++;
          this.shuffle(arr);
        }
        let endTime = performance.now();
        let elapsedTime = (endTime - startTime);

        this.arrayOfArrays.push([i, arr, number_of_shuffles, elapsedTime]);
      }
    },
    // Function to generate a random integer between min and max (inclusive)
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // This is an implementation of the Fisher-Yates shuffle algorithm, which is an efficient way to shuffle an array.
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },
    isSorted(arr) {
      for (let i = 1; i &lt; arr.length; i++) {
        if (arr[i] &lt; arr[i - 1]) {
          return false;
        }
      }
      return true;
    },
</code>
</pre>

<pre v-bind:class="'language-JavaScript line-numbers'">
<code> 
// Below is my self-written way to reverse a string using recursion. 
// This is oddly the way I came up with this writing it from scratch with no resources in a few minutes.
// Generally, building anything it's good to get a working prototype, then can fine-tune it, but this was just
// an exercise to see how I would solve this on my own.

let string = 'hello'

function reverse(string, newString, finalString){
  if (string.length === 0){
   return newString;
  }
  //console.log(string.slice(-1))

  console.log(newString)
 
 
	newString = string.slice(string.length-1,string.length);
  string = string.slice(0,string.length - 1);
  
  finalString = finalString + newString
  //console.log(newString)
  //console.log(string)
  console.log(finalString)
  reverse(string,newString, finalString);

}

reverse(string, '', '');
</code>
</pre>
<button class="button-35" @click="quickSort">Quick Sort</button>
    </div>
    
    <div style="height: 95vh;"></div>
  </div>
  
  <FirstFooter></FirstFooter>
</template>
  
<script>

import "@/assets/globalCSS.css";
import FirstFooter from "@/components/FirstFooter.vue";
import Prism from "prismjs";
export default {
  name: 'SortingAlgorithmsView',
  components: {
    FirstFooter
  },
  data() {
    return {
      bogoSortArrayButtonClicked: false,
      bogoSortArray: [],
      arrayOfArrays: [],
      arrayInput: 9,

      quickSortArray: [4,3,5,7,2,4,9,1,6,7,13,3,1,3,5,6,5],
    };
  },
  mounted() {
      Prism.highlightAll();
    },
  methods: {
   
    // Following section is BOGOSORT
    bogoSort() {
      

      this.bogoSortArrayButtonClicked = true;

      for (let i = 1; i <= this.arrayInput; i++) {
        const arr = [];
        for (let j = 0; j < i; j++) {
          const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed
          arr.push(randomNumber);
        }
        let number_of_shuffles = 0;
        let startTime = performance.now();
        while (!this.isSorted(arr)) {
          number_of_shuffles++;
          this.shuffle(arr);
        }
        let endTime = performance.now();
        let elapsedTime = (endTime - startTime);

        this.arrayOfArrays.push([i, arr, number_of_shuffles, elapsedTime]);
      }
    },
    // Function to generate a random integer between min and max (inclusive)
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // This is an implementation of the Fisher-Yates shuffle algorithm, which is an efficient way to shuffle an array.
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    },
    isSorted(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
          return false;
        }
      }
      return true;
    },
    quickSort(){
      // get the middle point of the array
      let pivot = this.quickSortArray[ Math.floor( [this.quickSortArray.length/2] ) ];
      console.log(this.quickSortArray[pivot])

      let sliced_array = this.quickSortArray.slice(0,this.quickSortArray[pivot]);
      console.log(pivot);
      console.log(sliced_array);
    },

  }
};
</script>
  
<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  padding-top: 1em;
}

p {
  font-size: 1.25em;
  color: white;
}

.bogo-link {
  
  text-align: left;
  padding: 0.25em;
  border-radius: 0.5em;
  border: 4px solid #d46f2b;
}

.main-content-area {
  padding-left: 8em;
  padding-right: 8em;
}

.background-color {
  background-color: #3e59e2;
}

.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1em;
}

@media only screen and (max-width: 700px) {
  .paragraph-text {
    font-size: 0.9em;
  }
}</style>