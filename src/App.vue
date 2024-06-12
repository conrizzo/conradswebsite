<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
  <div>
    <!-- Don't show header or footer on CowGame -->
    <TheMainHeader v-show="showHeader" v-if="showNav"></TheMainHeader>
    <router-view /> <!-- main code of a page -->
    <TheMainFooter v-show="showFooter" v-if="showNav"></TheMainFooter>
  </div>
</template>

<script>

import TheMainHeader from "@/components/Navigation/MainHeader.vue";
import TheMainFooter from "@/components/Navigation/MainFooter.vue";

//import CookieAccept from "@/components/CookieAccept.vue";

export default {
  name: "App",
  components: {
    TheMainHeader, TheMainFooter  /*CookieAccept,*/
  },
  data() {
    return {
      showHeader: false,
      showFooter: false,
    }
  },
  mounted() {

    // Prevent page from scrolling to top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    setTimeout(() => {
      this.showHeader = true;
    }, 750);

    setTimeout(() => {
      this.showFooter = true;
    }, 750);
  },
  computed: {
    showNav() {
      // Array of routes where you don't want to show the footer
      const noFooterRoutes = ['/projects/cowgame', '/UserSignIn', '/porkchops-otherroute'];
      // Check if the current route is in the array
      return !noFooterRoutes.includes(this.$route.path);
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
