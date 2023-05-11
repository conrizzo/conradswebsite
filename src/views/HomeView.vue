


<template>
  <div class="title-section"><h1>Conrad's Website</h1></div>
  <div class="container custom-background-home-page">
    <!-- Main area -->
    
    <div style="padding-top:2em;">  

      <!-- I want to make this router-link below be the color red and stay red after a user clicks it -->
      
     <div class="centered"><h1 style="color: rgb(0, 0, 0);">Check out the
        <router-link class="home-router-link"  to="/projects/cowculator"
          >Cowculator!</router-link
        ></h1>  
      </div>

      <div class="centered"><h1 style="color: rgb(0, 0, 0);">Check out the
        <router-link class="home-router-link"  to="/projects"
          >Projects Page!</router-link
        ></h1>  
      </div>

      <div class="centered"><h1 style="color: rgb(0, 0, 0);">
        <router-link class="home-router-link"  to="/projects/DataPull"
          >Pulling Datasets from GitHub</router-link
        ></h1>  
      </div>

      <p class="paragraph-text">
        
        <br><br/>
        This website is now an ongoing project. The main point isn't the styling and 
        how polished everything looks, though some time has gone into making it presentable. The idea is to design a practical website, and also some 
        applications using Vue.js!
        <br>
        <br>
      
      </p>
    </div>

    <!-- Aside area -->
    <AsideContent v-if="removeAsideAtLowResolution">
      <template v-slot:aside-content>
        <p class="aside-text" style="margin-top: 1em">
          Other ideas are on the way!
        </p>
      </template>
    </AsideContent>
  </div>
  <div class="push-footer">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
  <FirstFooter></FirstFooter>
</template>



<script>
import Prism from "prismjs";
import AsideContent from "@/components/FirstAside.vue";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
  },
  computed: {
    // this connects to the v-if to remove the aside at low resolution
    removeAsideAtLowResolution() {
      return window.innerWidth >= 900;
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>



<style scoped>
.centered {
  display: flex;
  margin-left: 6em;
  text-align: left;
}

h1 {
  
  padding-top: 0.25em;
  font-size: 2.5em;
  color: #ffffff;
  
}
p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 30px;
  margin-right: 20px;
  color: #000000;
  background: #fff;
  border-radius: 5px;
}


.custom-background-home-page {
  background-color: rgb(255, 255, 255);
}

.home-router-link{
  border-radius: 5px; 
  padding: 0.1em; 
  
  background: linear-gradient(90deg, rgba(128, 255, 187, 0.8) 29%, rgba(143, 242, 255, 0.8) 100%);
  color: black;
  text-decoration: none;
}

.home-router-link:hover{
  text-decoration: underline;
  
}
.push-footer {
    padding-bottom: 400px;
  }
  

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1200px) {
  p.homeview {
    margin-left: 20px;
  }

  h1 {
  
  font-size: 1.6em; 
  
}
.centered {
  display: flex;
  margin-left: 2em;
  text-align: left;
}


}
</style>