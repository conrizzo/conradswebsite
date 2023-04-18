

<template>
    <div class="about container">
      <!-- Main area -->
      <div>
        <h1 style="color: black;">Howdy there! Welcome to conradswebsite.com</h1>
        <br>
        <p class="paragraph-text">
          This website is totally self-made by Conrad using
          <a class="text-links" href="https://github.com/vuejs/core"> Vue 3</a>
          (Vue.js). It is hosted on
          <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
            Conrad's GitHub</a
          > with
          <a class="text-links" href="https://pages.github.com/">
            GitHub pages</a
          >.</p><br>

        <p class="paragraph-text">
          I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max Planck in Tübingen, Germany.<br><br>
      
          I earned a B.A in Computational Linguistics from the University of Tübingen, Germany, and a B.S in Biology from the University of North Carolina at Wilmington. 
          
          This websites focus is to show some examples of work I've done using code, plus it's fun to have a website made in a framework (Vue.js) and be able to 
          experiment here. For anyone unfamiliar with what a framework is <a class="text-links" href="https://en.wikipedia.org/wiki/Web_framework">https://en.wikipedia.org/wiki/Web_framework</a><br><br>

          Here is an approximation of the languages this website uses. It's mostly Vue.js, JavaScript, some minimal styling.<br>
          
            <img style="max-width: 20em; padding-top: 0.5em; text-align: center;" :src="imagePath" alt="Coding Languages used" />
          
          
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
  data() {
    return {
  
     imagePath: require("@/images/website-code.jpg"), // Add the image path to the data object
    }
  }
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