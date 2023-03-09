<template>
  <h1>{{ title }}</h1>
  <SiteMain :header="header" :text="text"/>
  <!--
    <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <input type="text" ref="name" />
  <button @click="handleClick">click</button>
</template>


<!-- optional below -->

<script>

import SiteMain from './components/SiteMain.vue'
/* import HelloWorld from './components/HelloWorld.vue' */

/* generally will use a component object */
export default {
  name: 'App',
  components: { SiteMain },
  data() {
    return {
      title: "Vue App :)",
      header: 'Here is the header',
      text: 'Health decision tree'
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
