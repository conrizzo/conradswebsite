
<template>
  <div style="background-color:#42b883;" class="title-section"><h1 style="color: white">
    <span  v-html="title"></span>: <span  v-html="header"></span>
        
      </h1></div>
      <!-- change background color of the cowculator main area -->
      <!--style="background-color:rgb(60,60,60);-->
  <div style="background-color:rgb(255, 255, 255);">
    <h2> Moo<span style="color: black;">&times;</span>Moo is a fun expression!</h2>
    <p class="paragraph-text" style="text-align: center; color: #808080;">The most current node in the tree to perform calculations is shown in real time! 
    This performs all calculations with self-made parsing, no JavaScript eval() function is used!
  
    </p>
    <div style="padding-top: 3em;">
      <!--
      <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
      

      <div v-if="showAboutCalc">
        <AboutCalc
          :title="title"
          :header="header"
          :text="text"
          :imagePath="imagePath"
          :url="url"
          @close="toggleAboutCalc"
        />
      </div>
      <!-- loads in cowculator -->
      <UseCalc></UseCalc>
      <div class="main-cow-figure">
        <figure>
          <img
            src="@/images/cow_lecture.png"
            alt="Professor Cow Image"
            class="professor-cow-figure"
          />
          <figcaption class="professor-cow-figure-text">
            <strong>"I certify that this Cowculator cowculates!"</strong> - Professor Maximillian "Cowculus" Cowington, Distinguished Professor of Cowculating.
          </figcaption>
        </figure>
      </div>
      <div style="padding-bottom: 1em; margin-left: 0.2em; margin-right: 0.2em;">
        <button
          class="button-35"
          style="margin-top: 0.25em;"
          @click="toggleAboutCalc"
        >
          About the Cowculator
        </button>
        <button
          class="button-35"
          style="margin-top: 0.25em; margin-left: 0.5em"
          @click="toggleHelpGuide"
        >
          Help Guide
        </button>
      </div>
    </div>
    <div v-if="showHelpGuide">
      <HelpGuide
        :helptitle="helpTitle"
        :helptitletwo="helpTitleTwo"
        :helptext="helpText"
        @close="toggleHelpGuide"
      />
    </div>

  
  </div>
  <FirstFooter></FirstFooter>
</template>
  
  
  <script>
import "@/assets/globalCSS.css";

import AboutCalc from "@/components/AboutCalc.vue";

import UseCalc from "@/components/UseCalc.vue";

import HelpGuide from "@/components/HelpGuide.vue";

import FirstFooter from "@/components/FirstFooter.vue";

/* generally will use a component object */
export default {
  name: "App",
  components: { AboutCalc, UseCalc, HelpGuide, FirstFooter },
  data() {
    return {
      title: "The <u><i>Cow</i></u>culator",
      header: "<q>For the <u><i>moo</i></u>st accurate <u><i>cow</i></u>culations!</q>",
      text:"The Cowculator was made by Conrad in Tübingen, Germany, and built using Vue 3. It utilizes a self-made tree structure, correctly follows the order of operations, and displays the current math operation node being performed. The Cowculator does not use the JavaScript eval() function, as it is considered insecure and bad practice. The current left node, math operator node, and right node in the tree are shown as calculations are entered. The modal is comprised of the following props from top to bottom: title, header, text, imagePath, and URL. A rough estimate of the programming languages used to build the Cowculator are:",
      url: "https://github.com/conrizzo/conradswebsite",
      showAboutCalc: false,
      helpTitle: "How to use:",
      helpTitleTwo: "Why use the cowculator?",
      helpText: "",
      showHelpGuide: false,
      imagePath: require("@/images/languages.jpg"), // Add the image path to the data object
    };
  },

  methods: {
    toggleAboutCalc() {
      this.showAboutCalc = !this.showAboutCalc;
    },
    toggleHelpGuide() {
      this.showHelpGuide = !this.showHelpGuide;
    },
  },
};
</script>
  
  <style scoped>
  .main-cow-figure{
    margin-top: 1em;
    
  }
.professor-cow-figure {
  width: 300px;
  background-color: #515151;
  text-align: left;
  margin-bottom: 0em;
  
  padding: 10px;
  border-radius: 5px;
  
}
.professor-cow-figure-text{
  background: rgb(235, 235, 235);
  width: 300px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 0.66em;
}
h2{
  padding-top: 2em;
  padding-bottom: 0em;
  color:#808080;
}



  
  


</style>
  