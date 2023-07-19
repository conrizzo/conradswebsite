<template>
  <div class="fill-page-to-footer">
    <!-- negative margin here to fill in space in nav on home page -->
    
    <!-- Main area -->

    <div class="container custom-background-home-page" style="margin-top: 2em;">
      
      <!-- generate clouds -->
      <div style="margin-bottom: 9em;">
        <div style="position: absolute; margin-left: 5em; margin-top: 2.5em; opacity: 0.95;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>

        <div style="float: right; margin-right: 20em; margin-top: 5em; opacity: 0.95;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>
        <!-- Title -->
        
        <h2 class="title-spacing"
          >
          Welcome
        </h2>
     
        <!-- Main bullets -->
        <div class="main-text-container">
          <ul style="text-align: left; color: white;">
            <li style="margin-bottom: 1em;">
              <h3 style="color: #fff;">
                This is an ongoing personal website project made by <a class="text-links"
                  href="https://github.com/conrizzo">Conrad</a>
              </h3>
            </li>
            <li style="margin-bottom: 1em;">
              <h3 style="color: #fff;">
                For more specific info about this website please read the <router-link class="text-links"
                  to="/about">About page</router-link>!
              </h3>
            </li>
            <li>
              <h3 style="color: #fff;">
                "Healthy" amounts of <a class="text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕ were consumed while building this.    
              </h3>
            </li>
          </ul>         
          
        </div>
       
        <div>
        <div class="links-div-container" style="position: relative; z-index: 1;">
          <!-- Projects ({{ this.itemsLength }})</h3> -->

          <ProjectLinks :links="links">
            <template v-slot="{ links }">
              <h3
                style="font-size: 2em; padding-bottom: 0.5em; padding-top: 2em; padding-left: 1.6em; color:#ff5959; text-align: left;">
                Projects: {{ links.length }}
              </h3>
              <div class="route-styling">
                <router-link class="on-hover-projects" v-for="(item, index) in links" :key="index" :to="item.to"
                  :class="{ active: $route.path === item.to }">
                  {{ item.text }}<br>
                </router-link>
              </div>
            </template>
          </ProjectLinks>
         
        </div>
       
        <!--
      <div style="padding-top: 3em; background-color: #fff;">
        <h2 style="color: black;"> Featuring the Cowculator </h2>
        <p> Go to the <router-link class="text-links-no-underline" to="/projects/cowculator">cowculator page</router-link>
          for the full experience.</p>
        <UseCalc></UseCalc>
      </div>
    -->
         
          <div style="position: relative; width: 100%; z-index: 0;">
            <div class="box" style="--size: 7em; width: 100%; height: 3em; position: absolute; left: 0em; bottom: -9em;"></div>
            <div class="box" style="--size: 7em; width: 100%; height: 2em; position: absolute; left: 0em; padding-left: 2em; bottom: -7em; "></div>
          </div>
        </div>
      </div>
      <!-- Aside area begins  #2d2d2d; slate black color -->
      <AsideContent class="aside-low-resolution" style="background: #fff; z-index: 1;">
        <template v-slot:aside-content>
          <p class="aside-text loading">Nothing in this section</p>
          <figure style="display: inline-block;">
          <img :src="birdDrawing" alt="Bird Drawing">
          <figcaption class="aside-text" style="display: block;"><i>Except this quickly doodled bird drawing made in ms paint!</i></figcaption>
        </figure>
        </template>
      </AsideContent>

    </div>

  </div>
  <FirstFooter />
</template>

<script>
import Prism from "prismjs";

import AsideContent from "@/components/FirstAside.vue";

import FirstFooter from "@/components/FirstFooter.vue";

import ProjectLinks from '@/components/ProjectLinks.vue'

//import UseCalc from "@/components/UseCalc.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
    ProjectLinks,
    //UseCalc, 
  },
  props: {
    links: Array,
  },
  data() {
    return {
      itemsLength: 0,
      birdDrawing: require("@/images/bird_drawing.jpg"), // Add the image path to the data object

     
    };
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
/*
.h1-title {
  color: #ffffff;
  background: linear-gradient(90deg,
      rgb(224, 11, 11) 20%,
      rgb(137, 238, 252) 100%);
  font-size: 3em;
  padding-bottom: 0.5em;
  padding-top: 0.5em;

  
  margin-left: 2em;
  margin-right: 2em;
}
*/
.custom-background-home-page {  
  background: linear-gradient(0deg, rgba(1,239,249,1) 0%, rgba(0,112,255,0.5746673669467788) 38%, rgba(23,50,143,0.8155637254901961) 78%);
}

.links-div-container {
  padding-left: 10em;
 
}


.on-hover-projects {
  text-decoration: none;
  padding-right: 0.25em;
  padding-left: 0.25em;
}

.on-hover-projects:visited {
  text-decoration: none;
  color: #fff;
}

.on-hover-projects:hover {
  background-color: #fff;
  color: #000;

}

.on-hover-projects:nth-child(odd) {
  border-right: 1px solid #ff5959;
  max-width: 100%;
}

.on-hover-projects:nth-child(even) {
  border-left: 1px solid #ff5959;
  max-width: 100%;
}

a {
  color: white;
}

.route-styling {

  color: #fff;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 2em;
  padding: 1em;
  border-radius: 5px;
  max-width: 10.8em;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.main-text-container {
  padding-top: 0.5em;
  display: flex;
  justify-content: center;
}

.title-spacing{   

    margin-top: 2em;
    color: #fff;
    font-size: 3em;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1500px) {
  .h1-title {
    margin-left: 0em;
    margin-right: 0em;
  }

  .main-text-container {
    padding-right: 1em;
    padding-left: 2em;

  }
}

@media only screen and (max-width: 880px) {
  .title-spacing{
    text-align: center;
    margin-left: 0em;
    margin-top: 3.5em;
  }
}

@media only screen and (max-width: 800px) {
  .links-div-container {
    padding-left: 1em;
    padding-right: 1em;
    display: inline-block;
  }

  .route-styling {
    font-size: 1.75em;
  } 
}


.loading {    
    font-family: sans-serif;
    font-size: 1.25em;
  
}

.loading:after {
  display: inline-block;
  animation: dotty 3s steps(1,end) infinite;
  content: '';
}

@keyframes dotty {
  0%   { content: ''; }
  20%  { content: '.'; }
  40%  { content: '..'; }
  60%  { content: '...'; }
  80%  { content: '....'; }
  100% { content: ''; }
}

/* Make some happy clouds */
.cloud {
  width: 200px;
  height: 50px;
  background: #fff;
  border-radius: 100px;
  position: relative;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1), 0 30px 50px rgba(0, 0, 0, 0.1);
}

.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 100%;
}

.cloud::before {
  width: 100px;
  height: 70px;
  top: -20px;
  left: 20px;
}

.cloud::after {
  width: 100px;
  height: 70px;
  top: -30px;
  right: 20px;
}

/* make hills */

/* Base code I used to make my own design started from here: https://codepen.io/t_afif/pen/RwyNVOr */

.box {
  margin-left: 0em;
  margin-bottom: 0em;
  --size: 30px;
  --R: calc(var(--size)*1.28);

  -webkit-mask:
    radial-gradient(var(--R) at 50% calc(1.8*var(--size)),#000 99%,#0000 101%) 
      calc(0% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(-.8*var(--size)),#0000 99%,#000 101%) 
      0% var(--size)/calc(4*var(--size)) 100% repeat-x;
  mask:
    radial-gradient(var(--R) at 50% calc(1.8*var(--size)),#000 99%,#0000 101%) 
      calc(0% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(-.8*var(--size)),#0000 99%,#000 101%) 
      0% var(--size)/calc(4*var(--size)) 100% repeat-x;
  background: repeating-linear-gradient(
    -70deg,
    green 0 10em,
    #14ec00 10em 20em
  );
  
 
}

.box-two {
  margin-left: 0em;
  margin-bottom: 0em;
  --size: 30px;
  --R: calc(var(--size)*1.28);

  -webkit-mask:
    radial-gradient(var(--R) at 50% calc(1.8*var(--size)),#000 99%,#0000 101%) 
      calc(0% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(-.8*var(--size)),#0000 99%,#000 101%) 
      0% var(--size)/calc(4*var(--size)) 100% repeat-x;
  mask:
    radial-gradient(var(--R) at 20% calc(1.8*var(--size)),#000 99%,#0000 101%) 
      calc(0% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(-.8*var(--size)),#0000 99%,#000 101%) 
      0% var(--size)/calc(4*var(--size)) 100% repeat-x;
  background: repeating-linear-gradient(
    -70deg,
    rgb(107, 167, 107) 0 10em,
    #14ec00 10em 20em
  );
  
 
}


</style>