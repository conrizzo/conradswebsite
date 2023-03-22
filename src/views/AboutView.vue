

<template>
  <div class="about container">
    <!-- Main area -->
    <div>
      <h1>Howdy there! Welcome to conradswebsite.com</h1>
      <p class="paragraph-text">This website is made by Conrad Lundberg using <a class="text-links" href="https://github.com/vuejs/core"> Vue 3</a> (Vue.js). It is hosted on
      <a class="text-links" href="https://github.com/conrizzo/conradswebsite"> Conrad's GitHub</a> with <a class="text-links" href="https://pages.github.com/"> GitHub pages.</a>
      </p>
    
    </div>
    <!-- Aside area -->
    <AsideContent class="aside">
      
      
    </AsideContent>
  </div>
</template>

<script>
import AsideContent from "@/components/coreAside.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
  },
};
</script>

<style scoped>

h1 {
  text-align: center;
}



</style>