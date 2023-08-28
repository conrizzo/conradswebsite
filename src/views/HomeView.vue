<template>
  <div id="body" style="padding-top: 2.7em;">
    <!-- negative margin here to fill in space in nav on home page -->    
    <!-- Main area -->
    <div class="main-content custom-background-home-page">
  
      <!-- generate clouds -->
      <div style="margin-bottom: 3em;">

        <button class="button-35 hide-button-low-resolution"
          style="background-color: rgba(255, 255, 255, 0); float: right; margin-right: 1em; margin-top: 1em; z-index: 3; color: #fff; opacity: 1;"
          @click="toggleClouds"><span v-if='moveTheClouds'>Stop</span><span v-else>Move</span>&nbsp;Clouds</button>

        <div id="cloudOne" style="position: absolute; margin-left: 2em; margin-top: 3em; opacity: 0.8;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>

        <div id="cloudTwo" style="position: absolute; margin-left: 9em; margin-top: 5em; opacity: 0.8;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>

        <div id="cloudThree" style="position: absolute; margin-left: 6em; margin-top:10em; opacity: 0.9; z-index: 0;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="transform: rotateY(150deg); float: right; margin-left: 1em; margin-top: 1em; position: absolute;"
            class="cloud"></div>
        </div>
        <!-- Title -->

        <h2 class="title-spacing">{{ inputStringShuffled }}</h2>
        
        <div style="position: relative; color: #fff; padding-bottom: 0.25em; padding-top: 0.25em; line-height: 1.4;">(The main heading tokens &uarr; are
          shuffled as each character is added using
          <a class="text-links" href="https://www.rust-lang.org/">Rust</a> code
          compiled into <a class="text-links" href="https://webassembly.org/">Web Assembly</a>)
        </div>
        <!-- Main bullets -->
        <div class="main-text-container">

          <ul style="text-align: left; color: white;" class="mb-3">
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                This is a website project made by <a class="text-links" style="color: #ff5959;"
                  href="https://github.com/conrizzo">Conrad</a>
              </span>
            </li>
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                For more specific info about this website please read the <router-link class="text-links"
                  style="color: #ff5959;" to="/about">About page</router-link>
                </span>
            </li>
            <li>
              <span style="color: #fff; font-size: 1.25em;">
                <a class="text-links" style="color: #ff5959;"
                  href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕ and enthusiasm helped make this website
              </span>
            </li>
          </ul>

        </div>
       
        <div>

          <div class="links-div-container" style="position: relative; z-index: 1;">
            <!-- Projects ({{ this.itemsLength }})</h3> -->
            <ProjectLinks :links="links">
              <template v-slot="{ links }">
                <h3
                  style="font-size: 2em; padding-bottom: 0.25em; padding-top: 0.5em; padding-left: 1.05em; color:#fff; text-align: left;">
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
        
         
         

        </div>

      </div>

      <!-- Aside area begins  #2d2d2d; slate black color -->
      <AsideContent class="aside-low-resolution" style="background: #fff; z-index: 1;">
        <template v-slot:aside-content>
          <p class="aside-text loading">Nothing in this section</p>
          <figure style="display: inline-block;">
            <img style="max-width: 250px;" :src="birdDrawing" alt="Bird Drawing">
            <figcaption class="aside-text" style="display: block;"><i>Except this bird I created using some customized Python code and a stable diffusion model!
                </i><br>Chirp chirp chirp!</figcaption>
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

import "@/assets/globalCSS.css";
//import UseCalc from "@/components/UseCalc.vue";

import init, { main } from "@/rust_web_assembly/hello_wasm.js";



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
      birdDrawing: require("@/images/StableDiffusionBird.jpg"), // Add the image path to the data object

      moveTheClouds: false,
      i1: null,
      i2: null,
      i3: null,
      clouds: [],
      coordX: [6, 9, 2],

      inputString: "Welcome to Conrad's Website",
      name: "",
      inputStringShuffled: "",
    };
  },

  methods: {
    runRustArrayRandomizer() {
      init().then(() => {
        const arr = this.name.split(" ");
        let mainFunction = main(arr);          
        mainFunction = mainFunction.join(" ");

        this.inputStringShuffled = mainFunction;

        //document.getElementById("randomizedArray").textContent = mainFunction;
      });
    },
    addLettersIntoInput() {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < this.inputString.length) {
          this.name += this.inputString[i];
          this.runRustArrayRandomizer();
          i++;
        }
        else {
          clearInterval(intervalId);
          setTimeout(() => {
            this.inputStringShuffled = "Welcome to Conrad's Website";
          }, 1000);
        }
      }, 125);
    },
    toggleClouds() {

      if (this.moveTheClouds === false) {
        this.moveClouds();
      }

      if (this.moveTheClouds === true) {
        this.stopClouds();
      }

      this.moveTheClouds = !this.moveTheClouds;

    },
    moveClouds() {
      const cloudOne = document.getElementById("cloudOne");
      let marginLeftCloudOne = this.coordX[0]

      const cloudTwo = document.getElementById("cloudTwo");
      let cloudTwoMargin = this.coordX[1]

      const cloudThree = document.getElementById("cloudThree");
      let marginLeft = this.coordX[2]

      if (window.innerWidth >= 800) {

        this.i1 = setInterval(() => {
          marginLeftCloudOne += 0.02;
          this.coordX[0] = marginLeftCloudOne;
          cloudOne.style.marginLeft = `${marginLeft}em`;
          if (marginLeft > 90) {
            marginLeft = -22;
          }
        }, 33);

        this.i2 = setInterval(() => {
          cloudTwoMargin += 0.03;
          this.coordX[1] = cloudTwoMargin;
          cloudTwo.style.marginLeft = `${cloudTwoMargin}em`;
          if (cloudTwoMargin > 90) {
            cloudTwoMargin = -22;
          }
        }, 33);

        this.i3 = setInterval(() => {
          marginLeft += 0.03;
          this.coordX[2] = marginLeft;
          cloudThree.style.marginLeft = `${marginLeftCloudOne}em`;
          if (marginLeftCloudOne > 90) {
            marginLeftCloudOne = -22;
          }
        }, 33);

        this.clouds.push(this.i1, this.i2, this.i3);
      }
    },
    stopClouds() {
      for (const cloudId of this.clouds) {
        clearInterval(cloudId);
      }
    },
  },
  mounted() {
    Prism.highlightAll();
    this.addLettersIntoInput();
  },
};
</script>

<style scoped>
/* @import "~bootstrap/dist/css/bootstrap.css"; */

#body {
  background: rgb(240, 240, 240);
}

.custom-background-home-page {
  background: linear-gradient(0deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
}
.links-div-container {  
  padding-left: 1em;
  padding-right: 1em;
  display: inline-block;
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
  color: #ffffff;
  background-color: rgb(255, 89, 89,0.8);
}

.on-hover-projects:nth-child(odd) {
  border-right: 2px solid #ff5959; 
  padding-left: 0.315em; 
}
.on-hover-projects:nth-child(even) {
  border-left: 2px solid #ff5959;  
}
.route-styling {
  /* to fix bootstrap link styling */  
  line-height: 1.15;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 2.25em;
  padding: 0.5em;  
  border-radius: 0.33em;
  max-width: 11em;
  background: rgba(0, 9, 139, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.9);
}
.route-styling a{  
  color: rgb(255, 255, 255);  
  padding-top: 0.00em;
}
.route-styling a:hover{  
  color: #ffffff; 
  border-top: 2px solid #ff5959;
  border-bottom: 2px solid #ff5959;
}
.main-text-container {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
  max-width: 800px;
  margin: 0 auto;
  /* padding-right: 0.5em;
  padding-top: 1em; */
  padding: 1em;
  padding-left: 2em;
  border-right: 2px solid rgba(255, 255, 255, 0.9);
  border-left: 2px solid rgba(255, 255, 255, 0.9);
}
.title-spacing {
  position: relative;
  line-height: 1;
  padding-top: 1.5em;  
  padding-left: 0.25em;
  padding-right: 0.25em;
  margin-top: 2em;
  color: #ffffff;
  font-size: 3em;
  z-index: 1;
}
.loading {
  font-family: sans-serif;
  font-size: 1.25em;
}
.loading:after {
  display: inline-block;
  animation: dotty 3s steps(1, end) infinite;
  content: '';
}
@keyframes dotty {
  0% {
    content: '.';
  }
  20% {
    content: '.';
  }
  40% {
    content: '..';
  }
  60% {
    content: '...';
  }

  80% {
    content: '....';
  }
  100% {
    content: '.';
  }
}
/* Make some happy clouds */
.cloud {
  width: 200px;
  height: 50px;
  background: #ececec;
  border-radius: 100px;
  position: relative;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1), 0 30px 50px rgba(0, 0, 0, 0.1);
}
.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background-color: #ffffff;
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

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1500px) {
  .main-text-container {
    padding-right: 0.5em;
    padding-left: 1.25em;
  }
}

@media only screen and (max-width: 880px) {
  .title-spacing {
    color: #fff;
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
  .hide-button-low-resolution {
    display: none;
  }
  .main-text-container {
    border-right: 8px solid rgba(255, 255, 255, 0.9);
    border-left: 8px solid rgba(255, 255, 255, 0.9);
  }
}
</style>