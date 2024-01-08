/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */

<template>
  <div class="background-color" style="padding-top: 3em;">
    <div class="">
      <div class="main-title-sorting-algorithms">
        <h1>Sorting Algorithm Examples</h1>
        <p>
          This area is just a place to do stuff with sorting algorithms.
        </p>
      </div>
      <div class="first-algorithm">
        <h2>Bogosort</h2>
        <div class="text-container">

          <p class="paragraph-text">What is <a class="bogo-link no-underlines" style="color: #fff;"
              href="https://en.wikipedia.org/wiki/Bogosort">Bogosort?</a></p><br>

          <p class="paragraph-text">This button below will Bogosort an array. There really is no limit on how bad a
            sorting
            algorithm can be, they can
            always be made worse.
            Bogosort is nearly useless unless the goal is to heat up a room with a cpu.
            This code will, with each iteration add an element (random integer 1-100) to an array of the user specified
            array
            length. This is currently using the
            performance.now() function to measure performance time it takes to sort each newly pushed element.
            <b>Careful!</b> If the size of a 'bogosorted' (Bogosort as a past tense verb) array is 12 or higher it will
            likely
            freeze the page. It uses
            the time complexity of Θ(n &times; n!) which means that the algorithm's running time grows at a rate
            proportional
            to n multiplied by the factorial of n.
            This is an extremely high time complexity and is considered to be extremely, extremely inefficient.<br>
            Next will be a Bogosorted array of Bogosorted arrays?
            <br>


          </p><br>
          <div style="justify-content: center; display: flex; padding-bottom: 1rem;">
            <figure>
              <img
                src="https://www.researchgate.net/publication/371457259/figure/fig3/AS:11431281166794429@1686405800300/Big-O-time-complexity-chart-based-feature-selection-a-Big-O-complexity-chart-b-Time.ppm"
                alt="Big O Complexity Chart">
              <figcaption style="text-align: left; color: #fff;">Big O Complexity Chart -<br>
                source: <a class="text-links" style="color: #fff;"
                  href="https://www.researchgate.net/publication/371457259_Wearable_Electromyography_Classification_of_Epileptic_Seizures_A_Feasibility_Study">https://www.researchgate.net/</a>

              </figcaption>
            </figure>
          </div>
          <p class="paragraph-text">BogoSort is worse than even the worst sorting algorithm on the chart above. To emphasize, 
            it's useless unless the goal is to heat up a room in the winter with a CPU. It's still a good educational tool to
            understand why using the wrong sorting algorithm or a bad algorithm could yield catastropic results.            
          </p>

          <div style="display: inline-block;">
            <button @click="bogoSort" class="button-35">Click me to Bogosort</button>
            <button @click="arrayOfArrays = [], bogoSortArrayButtonClicked = false" class="button-35"
              style="margin-left: 0.5em;">Reset</button>
          </div>
        </div>

        <br><br><label style="padding-right: 1em; color: #fff;" for="number-input">Enter length of array to
          Bogosort!</label>
        <input style="font-size: 1.25em; margin-bottom: 1em;" type="text" id="number-input" v-model="arrayInput"
          placeholder=""><br>

        <div v-show="bogoSortArrayButtonClicked" class="table-container">
          <table style="color: #fff; text-align: left;">
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
        let startTime = performance.now();

        this.bogoSortArrayButtonClicked = true;

        for (let i = 1; i &lt;= this.arrayInput; i++) {
          const arr = [];
          for (let j = 0; j &lt; i; j++) {
            const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed
            arr.push(randomNumber);
          }
          let number_of_shuffles = 0;
          
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

      </div>


      <div class="second-algorithm">
        <div class="text-container">
          <h2>Quicksort</h2>

          <p style="padding-top: 1em;" class="paragraph-text">What is <a class="bogo-link no-underlines"
              style="color: #fff;" href="https://en.wikipedia.org/wiki/Bogosort">Quicksort?</a></p>
          <br>
          <p class="paragraph-text" style="padding-top: 1em;"> A professional recursive quicksort algorithm is much, much,
            much better than BogoSort! On my computer 1000 random integers
            between 1-100 only takes about 0.53ms to sort. What is interesting about this is with 1000 arrays each with a
            size of 1000,
            on the first button click, and
            sometimes the first few it tends to take around 1.5ms on this computer for the sorting to complete,
            but then the time on subsequent clicks drops down to around 0.419ms. This is likely due to browser caching and
            the local computer operating system deciding how to allocate resources to the browser when new code is loaded
            to
            run.
          </p>
          <p class="paragraph-text">
            Running 1000 arrays
            generating 1000 random integers between 1-100 it takes Quicksort about 0.419 ms on this computer. This
            processing time will be faster or slower depending
            on the cpu speed, resources available, etc. What is also interesting is that the time it takes to sort these
            1000 random integers is slightly slower on the Firefox Browser than Chrome.
            For general use no one will ever notice, but Firefox with the same computer takes about 0.751ms to sort 1000
            arrays of 1000 random integers between 1-100 using Quicksort.
            Resetting the variables after already running the sorting algorithm removes this initial lag time! The browser
            already knows what code to run so the first iterations immediately run fast.
          </p>
          <p class="paragraph-text">
            Quicksort is usually the fastest sorting algorithm there is for most applications. If one has a list
            that is already almost sorted insertion sort is faster. Quicksort will create an unncessary amount of pivots
            and
            waste time
            if given a long list/array that has 1 million items and only 2 items are not in order.
            Insertion sort will be faster than quickSort for a small set of data when based on the worst case scenario.
            Heap sort will be faster than quickSort with a large set of data when quickSort has the worst case scenario.
            <br><br>
            <b>A very good explanation of quickSort and other algorithms:</b> <a class="text-links" style="color: #fff;"
              href="https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html">https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html</a>
          </p>
        </div>

        <div style="display: inline-block;">
          <button class="button-35" @click="quickSort">Quick Sort</button>
          <button @click="quickSortArrays = [], averageTimeTaken = 0" class="button-35"
            style="margin-left: 0.5em;">Reset</button>
        </div>

        <br><br><label style="padding-right: 1em; color: #fff;" for="number-input">Enter length of array to
          Quicksort!</label>
        <input style="font-size: 1.25em; margin-bottom: 1em;" type="text" id="number-input" v-model="arrayInputQuickSort"
          placeholder=""><br>
        <div v-show="quickSortArrayButtonClicked" class="table-container">
          <table style="color: #fff; text-align: left;">
            <thead>
              <tr>
                <th style="width: 6em;">Array Size</th>
                <th style="width: 15em;">Sorted Array</th>
                <th>Elapsed Time (ms)</th>
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in quickSortArrays" :key="index">
                <td style="vertical-align: top; padding-right: 1em;">{{ item[0] }}</td>
                <td style="padding-right: 1em; padding-bottom: 0.5em;">{{ item[1] }}</td>
                <td style="vertical-align: top; padding-right: 1em;">{{ "Milliseconds: " + item[2].toFixed(3) }}</td>
                <td style="vertical-align: top; padding-bottom: 0.5em;">{{
                  (averageTimeTaken / quickSortArrays.length).toFixed(3) }}</td>
              </tr>
            </tbody>
          </table>
        </div>


        <FastQuickSort ref="fastQuickSort" />
      </div>
    </div>

  </div>
</template>
  
<script>

import "@/assets/globalCSS.css";

import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import FastQuickSort from "@/components/SortingAlgorithms/FastQuickSort.vue"

export default {
  name: 'SortingAlgorithmsView',
  components: {
    FastQuickSort
  },
  data() {
    return {
      bogoSortArray: [],
      bogoSortArrayButtonClicked: false,
      arrayOfArrays: [],
      quickSortArray: [],
      quickSortArrayButtonClicked: false,
      quickSortArrays: [],

      averageTimeTaken: 0,
      arrayInput: 9,
      arrayInputQuickSort: 1000,
      sortedArray: [],
      arrayToSort: [],
      thousandArray: [],
    };
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {

    // Following section is BOGOSORT
    bogoSort() {
      let startTime = performance.now();

      this.bogoSortArrayButtonClicked = true;

      for (let i = 1; i <= this.arrayInput; i++) {
        const arr = [];
        for (let j = 0; j < i; j++) {
          const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed
          arr.push(randomNumber);
        }
        let number_of_shuffles = 0;

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
    quickSort() {
      //for (let j = 0; j < 1000; j++){
      this.arrayToSort = [];
      let array = this.arrayToSort;
      // generate 1000 random numbers between 1-100
      for (let i = 0; i < this.arrayInputQuickSort; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        array.push(randomValue);
      }


      this.quickSortArrayButtonClicked = true;

      let startTime = performance.now();
      // set a reference to the component FastQuickSort
      const fastQuickSort = this.$refs.fastQuickSort;
      // Invoke the function from the component FastQuickSort
      this.thousandArray = fastQuickSort.invoke([...array], 0, array.length - 1);
      console.log(this.thousandArray)
      let endTime = performance.now();
      this.timeTaken = endTime - startTime;
      this.averageTimeTaken += this.timeTaken;
      this.quickSortArrays.push([this.thousandArray.length, this.thousandArray, this.timeTaken]);
      //}

    },

  }
};
</script>
  
<style scoped>
h1 {
  font-size: 4em;
  margin-bottom: 0.5em;
  padding-top: 1em;
  color: #fff;
}

h2 {
  font-size: 4em;
  color: #fff;
  padding: 1em;
}

.main-title-sorting-algorithms {
  padding-bottom: 4em;
  border-bottom: 1px solid #fff;
}

p {
  font-size: 1.25em;
  color: white;
}

.first-algorithm {
  padding-top: 5em;

}

.bogo-link {

  text-align: left;
  padding: 0.25em;
  border-radius: 0.5em;
  border: 4px solid #d46f2b;
}

.button-35:hover {
  box-shadow: rgb(255, 255, 255) 0 0 0 2px, transparent 0 0 0 0;
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

.text-container {
  display: grid;
  place-items: center;

}

.paragraph-text {
  width: calc(100% - 40em);
  text-align: left;
  border-left: 1px solid #fff;
  padding-left: 1em;
}

@media only screen and (max-width: 90rem) {
  .paragraph-text {
    width: calc(100% - 8rem);
  }
}

@media only screen and (max-width: 40rem) {
  .paragraph-text {
    width: calc(100% - 4rem);
    font-size: 0.9em;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
    padding-top: 1em;
    color: #fff;
  }
}</style>