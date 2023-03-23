
<template>
  <div class="green-field-image">
    <h1>The Cowculator</h1>
    <p class="paragraph-text">
      Get cow-culating today! Background cow math images generated using
      <a class="text-links" href="https://github.com/CompVis/stable-diffusion"
        >stable diffusion</a
      >.
    </p>
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

      <p class="professor-message">
        I, Professor Maximillian "Cowculus" Corn-elius Cowington, distinguished
        professor of cowculating, approve of this cowculator!
      </p>
      <div style="padding-bottom: 1em">
        <button
          class="button-35"
          style="margin-top: 0.25em; margin-left: 0.5em"
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
      header: "Alpha-Build-1.0",
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
  
  <style>
</style>
  