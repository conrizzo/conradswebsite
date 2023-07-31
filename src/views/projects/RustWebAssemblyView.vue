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
  
  <FirstFooter></FirstFooter>
</template>
  
<script>

import "@/assets/globalCSS.css";
import FirstFooter from "@/components/FirstFooter.vue";
import Prism from "prismjs";
import 'prismjs/themes/prism.css';


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
  

  }
};
</script>
  
<style scoped>
</style>