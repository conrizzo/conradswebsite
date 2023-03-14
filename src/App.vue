
<template>
  <div style="">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  
    <div v-if="showHelpGuide">
    
     <HelpGuide :helptitle="helpTitle" 
                :helptext="helpText" 
                @close="toggleHelpGuide"/>
    </div>

    <h1>{{ title }}</h1>
    
    
    
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
  <div>
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
</template>


<script>
import SiteMain from "./components/SiteMain.vue";

import UseCalc from "./components/UseCalc.vue";

import HelpGuide from "./components/HelpGuide.vue";

/* generally will use a component object */
export default {
  name: "App",
  components: { SiteMain, UseCalc, HelpGuide },
  data() {
    return {
      title: "Cow-culator built in Vue.js",
      header: "Alpha-Build-1.0",
      text:
        "Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props. " +
        "From top to bottom they are props: title, header, text, imagePath, and url. This is a rough approximation of programming languages used to build this: ",
      url: "https://github.com/conrizzo/conradswebsite",
      showSiteMain: false,
      helpTitle: "How to use:",
      helpText: "",
      showHelpGuide: false,
      imagePath: require("./images/languages.jpg"), // Add the image path to the data object
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
