<template>
  
  <!--
    <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <h1>{{ title }}</h1>
  <p>Enter numbers into the input field below by typing or using the keypad.
     The Cow-culator will do math operations on the numbers, and count the number of Moo's!
  </p>
  <div v-if="showSiteMain">
    <SiteMain
      :title="title"
      :header="header"
      :text="text"
      @close="toggleSiteMain"
    />
    
  </div>
  
  <UseCalc></UseCalc>
  <button class="button-35" style="margin-top: 20px; margin-left: 10px;"  @click="handleClick">Event Listener</button>
  <button class="button-35" style="margin-top: 20px; margin-left: 10px;"  @click="toggleSiteMain">About the Cowculator</button>
  <div>
    <input style="margin-top: 100px;" type="text" ref="name" v-model="name" />
  </div>
  
</template>


<!-- optional below -->

<script>
import SiteMain from "./components/SiteMain.vue";
/* import HelloWorld from './components/HelloWorld.vue' */
import UseCalc from "./components/UseCalc.vue";

/* generally will use a component object */
export default {
  name: "App",
  components: { SiteMain , UseCalc },
  data() {
    return {
      title: "Cow-culator",
      header: "Alpha-Build-1.0",
      text: "Currently not set up to handle more than one multiplication operation. Click anywhere on the screen outside this modal to exit!",
      showSiteMain: false,
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
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
