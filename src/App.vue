<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
  
  <!-- Don't show header or footer on CowGame -->
  <TheMainHeader v-if="showNav"></TheMainHeader>  
  <router-view></router-view> <!-- main code of a page -->  
  <TheMainFooter v-if="showNav"></TheMainFooter>

</template>

<script>
// import the dropdown menu into the nav bar


import TheMainHeader from "@/components/MainHeader.vue";
import TheMainFooter from "@/components/MainFooter.vue";

//import CookieAccept from "@/components/CookieAccept.vue";

export default {
  name: "App",
  components: {
    TheMainHeader, TheMainFooter  /*CookieAccept,*/
  }, computed: {
    showNav() {
      // Check if the current route is not the cowGame route
      return this.$route.path !== '/projects/cowgame';
    }
  }
};
</script>

<style>

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;   
  text-align: center;
}

</style>
