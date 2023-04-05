

<template>
  <div class="about container">
    <!-- Main area -->
    <div>
      <h1 style="color: black;">Howdy there! Welcome to conradswebsite.com</h1>
      <br>
      <p class="paragraph-text">
        This website is made by Conrad using
        <a class="text-links" href="https://github.com/vuejs/core"> Vue 3</a>
        (Vue.js). It is hosted on
        <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
          Conrad's GitHub</a
        > with
        <a class="text-links" href="https://pages.github.com/">
          GitHub pages</a
        >.
      </p>
      <br><br/>
    <p class="paragraph-text">
      I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max Planck in Tübingen, Germany.
     <br><br/>
      I earned a B.A in Computational Linguistics from the University of Tübingen, Germany, and a B.S in Biology from the University of North Carolina at Wilmington.
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
  margin-top: 1em;
}

.about{
  background: rgb(255, 255, 255);
}

@media only screen and (max-width: 900px){
  .push-footer-low-res{
  height: 500px;
  }
}
</style>