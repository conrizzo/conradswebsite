
<template>
  <div>
    <hr class="solid" />

    <div>
      <!--
      <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->

      <h2 style="margin-bottom: 15px; padding-top: 0.5em; color: white">
        {{ title }} - {{ header }}
      </h2>

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
      <!-- loads in cowculator -->
      <UseCalc></UseCalc>

      <figure class="main-cow-figure">
        <img
          src="@/images/cow_lecture.png"
          alt="Professor Cow Image"
          class="professor-cow-figure"
        />
        <figcaption class="professor-cow-figure-text">
          <strong>"I certify that this Cowculator cowculates!"</strong> - Professor Maximillian "Cowculus" Cornelius Cowington, Distinguished Professor of Cowculating.
        </figcaption>
      </figure>

      <div style="padding-bottom: 1em; margin-left: 0.2em; margin-right: 0.2em;">
        <button
          class="button-35"
          style="margin-top: 0.25em;"
          @click="toggleSiteMain"
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

    <hr class="solid" />
  </div>
  <FirstFooter></FirstFooter>
</template>
  
  
  <script>
import "@/assets/globalCSS.css";

import SiteMain from "@/components/SiteMain.vue";

import UseCalc from "@/components/UseCalc.vue";

import HelpGuide from "@/components/HelpGuide.vue";

import FirstFooter from "@/components/FirstFooter.vue";

/* generally will use a component object */
export default {
  name: "App",
  components: { SiteMain, UseCalc, HelpGuide, FirstFooter },
  data() {
    return {
      title: "Cow-culator",
      header: "Alpha-Build-2.0",
      text:
        "Made in Tübingen, Germany, and built using Vue 3. Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props and additional text. " +
        "From top to bottom they are props: title, header, text, imagePath, and url. A rough approximation of programming languages used to build this below: ",
      url: "https://github.com/conrizzo/conradswebsite",
      showSiteMain: false,
      helpTitle: "How to use:",
      helpTitleTwo: "Why use the cowculator?",
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
  
  <style scoped>
.professor-cow-figure {
  width: 250px;
  background-color: white;
  text-align: left;
  margin-bottom: 0em;
  
  padding: 10px;
  border-radius: 5px;
  
}
.professor-cow-figure-text{
  background: white;
  width: 250px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 0.66em;
}

  
  


</style>
  