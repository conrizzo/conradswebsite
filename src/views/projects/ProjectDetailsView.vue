
<template>
  
  <!-- PROJECT 1 -->
  <div class="router-link-style">
    
    <div v-show="id == 1">      
      <div style="padding-top: 0.2em;">
        <h1><router-link style="text-decoration: none; color: white;" to="/projects/cowculator">{{ title }} :
            {{ details }}</router-link></h1>
      </div>
      <CowculatorDescription></CowculatorDescription>   
    </div>

    <!-- PROJECT 2 -->
    <div v-show="id == 2">
      <div style="padding-top: 0.5em;">
        <h1>{{ title }} : {{ details }}</h1>
      </div>
      <CoffeeFunction></CoffeeFunction>
    </div>

    <!-- PROJECT 3 -->
    <div class="smaller-font" v-show="id == 3">
      <div style="padding-top: 0.5em;">
        <h1>{{ title }} : {{ details }}</h1>
      </div>
      <BartProject></BartProject>      
    </div>

</div>
<FirstFooter></FirstFooter>
</template>


<script>
/* imports for content */
import CowculatorDescription from "@/components/ProjectDescriptions/CowculatorDescription.vue";
import CoffeeFunction from "@/components/ProjectDescriptions/CoffeeFunction.vue";
import BartProject from "@/components/ProjectDescriptions/BartProject.vue";

import Prism from "prismjs";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  components: {
    FirstFooter, CoffeeFunction, CowculatorDescription, BartProject,
  },
  props: {
    title: String,
    details: String,
    id: Number,

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

.router-link-style {
  font-size: 2em;
  font-weight: bold;
}

p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  font-size: 0.6em;
  font-weight: normal;
  margin-bottom: 0.25em;
  margin-top: 1em;
}



.code-format {
  margin-top: 0.25em;
  font-weight: normal;
  font-size: 0.6em;
  page-break-inside: avoid;
  font-family: monospace;

  margin-left: 1.2em;
  margin-right: 1.2em;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}

h1 {
  font-size: 1em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}

.smaller-font {
  font-size: 0.9em;
}


</style>