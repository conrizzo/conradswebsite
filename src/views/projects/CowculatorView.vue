<template>
  <div style="
      background: linear-gradient(
        90deg,
        rgba(0, 255, 119) 29%,
        rgba(0, 224, 255) 100%
      );
    ">
    <h1 style="color: white; font-size: 3em;">The Cowculator</h1>
    <h2 style="color: white; padding-bottom: 1.3vh; padding-top: 0em; line-height: 1.1; font-size: 2em;">
      <span v-html="header"></span>
    </h2>
  </div>
  <!-- change background color of the cowculator main area -->
  <!--style="background-color:rgb(60,60,60);-->
  <div style="background: rgb(255, 255, 255);">
    <h2>
      Now shows binary tree graphic of calculations as svg! 100% self-made in
      <a style="color: #42b883;" class="text-links" href="https://vuejs.org/">Vue.js</a>
      <br />
      Moo<span style="color: black">&times;</span>Moo<span style="color: black">&times;</span>Moo = Moooooooooooooooo
    </h2>

    <div style="padding-top: 3em;">
      <div v-if="showAboutCalc">
        <AboutCalc :title="title" :header="header" :imagePath="imagePath" :url="url" @close="toggleAboutCalc" />
      </div>
      <!-- loads in cowculator -->
      <UseCalc />

      <div class="main-cow-figure">
        <figure>
          <img src="@/images/cow_lecture.jpg" alt="Professor Cow Image" class="professor-cow-figure" />
          <figcaption class="professor-cow-figure-text">

            <b><span style="color: #42b883;"><q>I certify that this Cowculator cowculates!</q></span></b><br>
            &nbsp;Professor Maximillian "Cowculus" Cowington, &nbsp;Distinguished Professor
            of Cowculating.

          </figcaption>
        </figure>
      </div>
      <h3>Miscellaneous Cow Facts</h3>
      <div class="main-cow-figure">
        <li class="no-bullet" style="text-align: left; padding: 0 0.5rem 0 0.5rem;">
          <ul>In 1865, the cow’s carefree existence in America was tragically disrupted by the Civil War.</ul>
          <ul>The meaning of life? A cow knows. A cow simply exists, unburdened by existential dread.</ul>
        </li>
      </div>

      <div style="padding-bottom: 1em; margin-left: 0.2em; margin-right: 0.2em">
        <button class="button-35" style="margin-top: 0.25em" @click="toggleAboutCalc">
          About the Cowculator
        </button>
        <button class="button-35" style="margin-top: 0.25em; margin-left: 0.5em" @click="toggleHelpGuide">
          Help Guide
        </button>
      </div>
    </div>
    <div v-if="showHelpGuide">
      <HelpGuide :helptitle="helpTitle" :helptitletwo="helpTitleTwo" :helptext="helpText" @close="toggleHelpGuide" />
    </div>
  </div>
</template>


<script>
import "@/assets/globalCSS.css";

import AboutCalc from "@/components/Cowculator/AboutCalc.vue";

import UseCalc from "@/components/Cowculator/UseCalc.vue";

import HelpGuide from "@/components/Cowculator/HelpGuide.vue";



/* generally will use a component object */
export default {
  name: "App",
  components: { AboutCalc, UseCalc, HelpGuide },
  data() {
    return {
      title: "<u><i>Cow</i></u>-culator",
      header:
        "<q>For the <u><i>moo</i></u>-st accurate <u><i>cow</i></u>-culations!</q>",

      url: "https://github.com/conrizzo/conradswebsite",
      showAboutCalc: false,
      helpTitle: "How to use:",
      helpTitleTwo: "Why use the cowculator?",
      helpText: "",
      showHelpGuide: false,
      imagePath: require("@/images/project_languages.jpg"), // Add the image path to the data object
    };
  },
  mounted() {
    document.title = "The Cowculator";
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
.button-35:hover {
  box-shadow: rgb(0, 255, 119) 0 0 0 2px, transparent 0 0 0 0;
}

.main-cow-figure {
  margin-top: 1em;
  justify-content: center;
  display: flex;
}

.professor-cow-figure {
  width: 24em;
  background-color: #515151;
  text-align: left;
  margin-bottom: 0em;

  padding: 0.5em;
  border-radius: 1em;
}

/* when media sizes adjust, the non-media needs to come first in parsing the code */


.professor-cow-figure-text {
  background: rgb(255, 255, 255);
  width: 24em;
  margin: 0 auto;
  text-align: left;

  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 0.66em;
  font-family: arial;
  color: rgb(40, 40, 40);
}

h2 {
  padding-top: 2em;
  padding-bottom: 0em;
  color: #808080;
}

@media only screen and (max-width: 35rem) {
  .professor-cow-figure {
    max-width: 22rem;
    margin-left: 1rem;
  }
}
</style>