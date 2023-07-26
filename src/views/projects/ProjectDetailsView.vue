
<template>
 
  <!-- PROJECT 1 -->
  <div class="router-link-style">    
    <div v-show="id == 1">      
      <div class="title-padding" style="margin-top: 2em;">
        <h1><router-link style="text-decoration: none; color: rgb(36, 36, 36);" to="/projects/cowculator">{{ title }} :
            {{ details }}</router-link></h1>
      </div>
      <CowculatorDescription></CowculatorDescription>   
      
      
    </div>

    <!-- PROJECT 2 -->
    <div v-show="id == 2">
      <div class="title-padding">
        <h1 style="color: rgb(36, 36, 36);">{{ title }} : {{ details }}</h1>
      </div>
      <CoffeeFunction></CoffeeFunction>
    </div>

    <!-- PROJECT 3 -->
    <div v-show="id == 3">
      <div class="title-padding">
        <h1 style="color: rgb(36, 36, 36);">{{ title }} : {{ details }}</h1>
      </div>
      <BartProject BartProjectTitle=""></BartProject>      
    </div>
</div>
   

<FirstFooter></FirstFooter>

</template>


<script>
/* imports for content */
import CowculatorDescription from "@/components/ProjectDescriptions/CowculatorDescription.vue";
import CoffeeFunction from "@/components/ProjectDescriptions/CoffeeFunction.vue";
import BartProject from "@/components/ProjectDescriptions/BartProject.vue";

import "@/assets/globalCSS.css";
import Prism from "prismjs";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  components: {
    FirstFooter, CoffeeFunction, CowculatorDescription, BartProject
  },
  props: {
    title: String,
    details: String,
    id: Number,
    BartProjectTitle: String,

  },
  mounted() {
    Prism.highlightAll();
  },
  data() {
    return {
     
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.75em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}

.title-padding{
  padding-top: 3em; 
  padding-bottom: 0.5em;
}
</style>