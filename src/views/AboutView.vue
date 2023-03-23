

<template>
  <div class="about container">
    <!-- Main area -->
    <div>
      <h1>Howdy there! Welcome to conradswebsite.com</h1>
      <p class="paragraph-text">
        This website is made by Conrad Lundberg using
        <a class="text-links" href="https://github.com/vuejs/core"> Vue 3</a>
        (Vue.js). It is hosted on
        <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
          Conrad's GitHub</a
        >
        with
        <a class="text-links" href="https://pages.github.com/">
          GitHub pages.</a
        >
      </p>
    </div>
    <!-- Aside area -->
    <AsideContent class="aside"> </AsideContent>
  </div>
  <div class="push-footer-low-res">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
  <FirstFooter></FirstFooter>
</template>

<script>
import AsideContent from "@/components/FirstAside.vue";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

@media only screen and (max-width: 900px){
  .push-footer-low-res{
  height: 500px;
  }
}
</style>