
<template>
  <h1> Cowculator </h1>
  <p class="paragraph-text"> Step right up and behold the Cow-culator, now with a Moo function built-in! 
    Without a doubt, other calculators are simply inadequate. They lack the one essential feature that sets 
    the Cow-culator apart: the Moo function. Can you imagine doing calculations without the ability to 
    press a Moo button to enhance your results? It's like trying to milk a cow without a bucket. You simply can't do it. 
    The Cow-culator, with its Vue.js-powered Moo function, 
    is the only choice for discerning users who demand the very best from their cow-culations.
    Made with Vue.js, Don't be square - use the Cow-culator!"
  </p>
  
    <div>
      <!--
      <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    
    
  
      <h2 style="margin-bottom:15px;">{{ title }}</h2>
      
      
      
      <div v-if="showSiteMain">
        <SiteMain
          :title="title"
          :header="header"
          :text="text"
          :imagePath="imagePath"
          :url="url"
          @close="toggleSiteMain"
        />
      </div>
  
      <UseCalc></UseCalc>
    <div style="margin-bottom: 10px;">
      <button
        class="button-35"
        style="margin-top: 5px; margin-left: 10px"
        @click="toggleSiteMain"
      >
        About the Cowculator
      </button>
      <button
        class="button-35"
        style="margin-top: 5px; margin-left: 10px"
        @click="toggleHelpGuide"
      >
        Help Guide
      </button>
    </div>
    </div>
    <div v-if="showHelpGuide">
      
      <HelpGuide :helptitle="helpTitle" 
                 :helptext="helpText" 
                 @close="toggleHelpGuide"/>
     </div>
  </template>
  
  
  <script>
  import '@/assets/globalCSS.css'

  import SiteMain from "@/components/SiteMain.vue";
  
  import UseCalc from "@/components/UseCalc.vue";
  
  import HelpGuide from "@/components/HelpGuide.vue";
  
  /* generally will use a component object */
  export default {
    name: "App",
    components: { SiteMain, UseCalc, HelpGuide },
    data() {
      return {
        title: "Cow-culator",
        header: "Alpha-Build-1.0",
        text:
          "This is built in Vue 3. Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props. " +
          "From top to bottom they are props: title, header, text, imagePath, and url. This is a rough approximation of programming languages used to build this: ",
        url: "https://github.com/conrizzo/conradswebsite",
        showSiteMain: false,
        helpTitle: "How to use:",
        helpText: "",
        showHelpGuide: false,
        imagePath: require("@/images/languages.jpg"), // Add the image path to the data object
      };
    },
  
    methods: {
      
      toggleSiteMain() {
        this.showSiteMain = !this.showSiteMain;
      },
      toggleHelpGuide() {
        this.showHelpGuide = !this.showHelpGuide;
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  