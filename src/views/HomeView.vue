<template>
  <div id="body">
    <!-- negative margin here to fill in space in nav on home page -->
    <!-- Main area -->
    <main class="main-content custom-background-home-page">
      <!-- generate clouds -->      
      <div>
        <!--
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

        <div id="cloudThree">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="transform: rotateY(150deg); float: right; margin-left: 1em; margin-top: 1em; position: absolute;"
            class="cloud"></div>
        </div>
      -->
        <!-- Title -->

        <h2 class="title-spacing">{{ inputStringShuffled }}</h2>

        <div class='under-title-caption'>Main heading tokens &uarr; are generated using
          <a class="home-text-links" href="https://www.rust-lang.org/">Rust</a> code
          compiled into <a class="home-text-links" href="https://webassembly.org/">Web Assembly</a>
        </div>

        <!-- Main bullets -->
        <div class="main-text-container">
          <ul style="text-align: left; color: white;" class="mb-3">
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                This is a website project made by <a class="home-text-links"
                  href="https://github.com/conrizzo"><b>Conrad</b></a>
              </span>
            </li>
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                For more specific info about this website please read the <router-link class="home-text-links"
                  to="/about">About</router-link> page
              </span>
            </li>
            <li>
              <span style="color: #fff; font-size: 1.25em;">
                <a class="home-text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕ and enthusiasm helped make
                this website
              </span>
            </li>
          </ul>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <div class="project-area">
              <!-- Projects ({{ this.itemsLength }})</h3> -->
              <ProjectLinks :links="links">
                <template v-slot="{ links }">
                  <div class="links-area">
                      <span class="project-title">
                        Project Links:</span>
                      <div class="route-styling">
                        <router-link class="on-hover-projects custom-color" v-for="(item, index) in links" :key="index"
                          :to="item.to" :class="{ active: $route.path === item.to }" @mouseover="showImage(item)"
                          @mouseleave="hideImage">
                          <span v-html="item.text"></span><br>
                        </router-link>
                        
                      </div>
                  </div>
                </template>
              </ProjectLinks>
            </div>
          </div>
          <div class="grid-item">
            <div class="image-container">
              <img v-if="isHovered" style="" class="hover-image" :src="hoveredImage" alt="Hover Image">
            </div>
          </div>
        </div>

      </div>
      <!-- Aside area begins  #2d2d2d; slate black color -->
      <AsideContent style="background: #fff; z-index: 1;">
        <template v-slot:aside-content>
          <p class="aside-text loading"></p>
          <figure style="display: inline-block;">
            <img style="max-width: 80%; border-radius: 1em;" :src="birdDrawing" alt="Bird Drawing">
            <figcaption class="aside-text" style="display: block;"><i></i></figcaption>
          </figure>
        </template>
      </AsideContent>

    </main>
  </div>
</template>

<script>

import Prism from "prismjs";
import AsideContent from "@/components/FirstAside.vue";
import ProjectLinks from '@/components/Navigation/ProjectLinks.vue'
import "@/assets/globalCSS.css";
import init, { main } from "@/rust_web_assembly/hello_wasm.js";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    ProjectLinks,
  },
  props: {
    links: {
      type: Array,
    },
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
      coordX: [15, 9, 2],
      inputString: "_ Welcome",
      name: "",
      inputStringShuffled: "",
      isHovered: false,
      hoveredImage: "",
    };
  },
  computed: {
    projectLinks() {
      return this.links; // Assuming `links` is the array of project links
    },
  },
  methods: {
    
    showImage(item) {
      switch (item.text) {
        case "Cowculator":
          this.hoveredImage = require("@/images/CowculatorScreen.jpg");
          this.isHovered = true;
          break;
        case "Card Game <span style=\"color: #ff5959;\">(New!)</span>":
          this.hoveredImage = require("@/images/CardGame.jpg");
          this.isHovered = true;
          console.log(this.hoveredImage);
          break;
        case "The Cow Game":
          this.hoveredImage = require("@/images/CowGame.jpg");
          this.isHovered = true;
          console.log(this.hoveredImage);
          break;
        default:
          this.hoveredImage = "";
          this.isHovered = false;
          break;
      }
    },
    hideImage() {
      this.isHovered = false;
      this.hoveredImage = "";
    },
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

#body {
  /* Winter background */
  background: linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
  background: -webkit-linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
  background-size: 100% 100%;
  background-attachment: fixed;   
 
}
.custom-background-home-page {
  background: linear-gradient(0deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
}
.custom-color {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}
.custom-color:hover {
  color: rgb(229, 229, 229) !important;
  /* overrides the components default values of '#fff' */
}
.button-35:hover {
  box-shadow: #ffffff 0 0 0 2px, transparent 0 0 0 0;
}

.home-text-links {
  color: rgb(255, 208, 0);
  text-decoration: none;
}
.home-text-links:hover {
  text-decoration: underline;
}
.home-text-links:visited {
  color: rgb(255, 208, 0);
}
.home-text-links:active {
  color: rgb(255, 208, 0);
}

.project-title{
  color: #fff; font-size: 1.8em; text-decoration: underline;
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
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ffffff;
  
  /* test */
}

.on-hover-projects:nth-child(odd) {
  border-right: 1px solid #ffffff;
  padding-left: 0.315em;
}

.on-hover-projects:nth-child(even) {
  border-left: 1px solid  #ffffff;
}

.route-styling {
  line-height: 1.15;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 1.8em;
  padding: 0.5em;
  border-radius: 0.33em; 
  background: rgba(7, 0, 116,0.33);
  border: 1px solid #606060; 
}

.route-styling a:hover {
  color: #ffffff;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.main-text-container {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  display: inline-block;
  width: 40em;
  margin: 0 auto;
  /* padding-right: 0.5em;
  padding-top: 1em; */
  padding: 1em;
  padding-left: 2em;  
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Two columns with equal width */
  gap: 1em;
  margin-bottom: 10em;
  /* No gap between grid items */
}

.links-area{
  width: 21em; float: right;  
}

.hover-image {
  max-height: 18.3em;
  margin-top: 3em;
  max-width: 100%;
  display: block;
  border-radius: 1em;
}

/* Style for grid items */
.grid-item {
  border: none;
  /* Border for visualization */
}

.title-spacing {
  position: relative;

  line-height: 1;
  padding: 0em 0.25em 0em 0.25em;
  margin-top: 2em;
  color: #ffffff;
  font-size: 4em;
  z-index: 1;
}

.under-title-caption{
  position: relative; 
  color: #fff; 
  padding-bottom: 0.25em; 
  padding-top: 0.25em; 
  line-height: 1.5;
  font-size: 0.9em;
}

.loading {
  font-family: sans-serif;
  font-size: 1.25em;
  padding-left: 1em;
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

/* Make some happy clouds
- these are old designs, but I removed them for now to make site look more professional and formal. */
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

#cloudThree {
  position: absolute;
  margin-left: 15em;
  margin-top: 9.5em;
  opacity: 0.9;
  z-index: 0;
}

@media (max-width: 50em) {
  .grid-container {
    grid-template-columns: 1fr;
  } 
  .image-container {
    width: 100%;
    max-height: 18.3em;
    /* Set a fixed height for the container */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1em;
  }
  .hover-image {
    border-radius: 1em;
    max-width: 17.5em;
    position: absolute;
    top: 111.8vh;
    z-index: 2;
  }

  .project-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 50rem) {
  .title-spacing {
    color: #fff;      
    padding-top: 2em;
    font-size: 2.5em;
  }
  .under-title-caption{
    padding: 0 1em 0 1em;    
  }
  
  .route-styling {
    font-size: 1.75em;
  }
  .hide-button-low-resolution {
    display: none;
  }
  .main-text-container {
   width: calc(100% - 5em);
  } 

  #cloudThree {
    position: absolute;
    margin-left: 0em;
    margin-top: 9.5em;
    opacity: 0.9;
    z-index: 0;
  }
}

@media only screen and (max-width: 35rem) {
  .links-area{
  width: calc(100% - 2em); 
  }
}


</style>