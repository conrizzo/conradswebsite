
<template>
  <div style="">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
    <h1>{{ title }}</h1>
    
    <p
      style="
        display: inline-block;
        max-width: 500px;
        text-align: left;

        padding: 10px;
      "
    >
      Please enter numbers into the input field below using the keypad or by
      typing. The Cow-culator will perform mathematical operations on the
      numbers and count the number of Moo's! For instance, if you input
      Moo2*Moo2*2Moo, the Cow-culator will display the result as: 'Result: 8 Moo's:
      3', which means that there are three 'Moo's and 2 multiplied by 2 multiplied by 2 equals 8.
      Additionally, each input will show up in the array it's used in. Any input
      field entry or button press will update the array by pushing the value
      into it and showing it on the screen.
    </p>
   
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

    <button
      class="button-35"
      style="margin-top: 5px; margin-left: 10px"
      @click="toggleSiteMain"
    >
      About the Cowculator
    </button>
    
  </div>
</template>


<script>
import SiteMain from "./components/SiteMain.vue";

import UseCalc from "./components/UseCalc.vue";

/* generally will use a component object */
export default {
  name: "App",
  components: { SiteMain, UseCalc },
  data() {
    return {
      title: "Cow-culator built in Vue.js",
      header: "Alpha-Build-1.0",
      text:
        "Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props. " +
        "From top to bottom they are props: title, header, text, imagePath, and url. This is a rough approximation of programming languages used to build this: ",
      url: "https://github.com/conrizzo/conradswebsite",
      showSiteMain: false,
      imagePath: require("./images/languages.jpg"), // Add the image path to the data object
    };
  },

  methods: {
    
    toggleSiteMain() {
      this.showSiteMain = !this.showSiteMain;
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
