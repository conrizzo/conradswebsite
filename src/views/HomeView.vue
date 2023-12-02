<template>
  <div id="body" style="padding-top: 2.7em;">
    <!-- negative margin here to fill in space in nav on home page -->
    <!-- Main area -->
    <main class="main-content custom-background-home-page">

      <!-- generate clouds -->
      <div style="">

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
        <!-- Title -->

        <h2 class="title-spacing">{{ inputStringShuffled }}</h2>

        <div style="position: relative; color: #fff; padding-bottom: 0.25em; padding-top: 0.25em; line-height: 1.4;">(The
          main heading tokens &uarr; are
          shuffled as each character is added using
          <a class="text-links" href="https://www.rust-lang.org/">Rust</a> code
          compiled into <a class="text-links" href="https://webassembly.org/">Web Assembly</a>)
        </div>
        <!-- Main bullets -->
        <div class="main-text-container">

          <ul style="text-align: left; color: white;" class="mb-3">
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                This is a website project made by <a class="text-links"
                  href="https://github.com/conrizzo"><b>Conrad</b></a>
              </span>
            </li>
            <li style="margin-bottom: 1em">
              <span style="color: #fff; font-size: 1.25em;">
                For more specific info about this website please read the <router-link class="text-links"
                  to="/about">About</router-link> page
              </span>
            </li>
            <li>
              <span style="color: #fff; font-size: 1.25em;">
                <a class="text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕ and enthusiasm helped make
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
                    <div style="max-width: 20em; float: right;">
                      <span style="color: white; font-size: 1.8em;">
                        Projects: {{ links.length }}
                      </span>
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
          <p class="aside-text loading">Aside area</p>
          <figure style="display: inline-block;">
            <img style="max-width: 80%; border-radius: 1em;" :src="birdDrawing" alt="Bird Drawing">
            <figcaption class="aside-text" style="display: block;"><i>
                Chirp chirp chirp!</i></figcaption>
          </figure>
        </template>
      </AsideContent>
    </main>
  </div>


  <FirstFooter />
</template>

<script>

import Prism from "prismjs";

import AsideContent from "@/components/FirstAside.vue";

import FirstFooter from "@/components/FirstFooter.vue";

import ProjectLinks from '@/components/Navigation/ProjectLinks.vue'

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
      inputString: "Welcome to Conrad's Website",
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
/* @import "~bootstrap/dist/css/bootstrap.css"; */
#body {
  background: #fff;
  min-height: 88.9vh;
}

.custom-background-home-page {
  background: linear-gradient(0deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
}

.custom-color {
  color: #606060 !important;
  /* overrides the components default values of '#fff' */

}

.custom-color:hover {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}


.button-35:hover {
  box-shadow: #ffffff 0 0 0 2px, transparent 0 0 0 0;
}

.text-links {
  color: rgb(240, 197, 117);
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
  background-color: rgb(200, 200, 200);
}

.on-hover-projects:nth-child(odd) {
  border-right: 1px solid #606060;
  padding-left: 0.315em;
}

.on-hover-projects:nth-child(even) {
  border-left: 1px solid #606060;
}

.route-styling {

  line-height: 1.15;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 1.8em;
  padding: 0.5em;
  border-radius: 0.33em;
  background: rgb(255, 255, 255);
  border: 1px solid #606060;
}

.route-styling a {
  color: rgb(255, 255, 255);
  padding-top: 0.00em;
}

.route-styling a:hover {
  color: #ffffff;
  border-top: 1px solid #606060;
  border-bottom: 1px solid #606060;
}

.main-text-container {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
  max-width: 40em;
  margin: 0 auto;
  /* padding-right: 0.5em;
  padding-top: 1em; */
  padding: 1em;
  padding-left: 2em;
  border-right: 2px solid rgba(255, 255, 255, 0.9);
  border-left: 2px solid rgba(255, 255, 255, 0.9);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Two columns with equal width */
  gap: 1em;
  margin-bottom: 10em;
  /* No gap between grid items */
}
.hover-image{
  max-height: 18.3em; margin-top: 2.15em; max-width: 100%; display: block; border-radius: 1em;  
}

@media (max-width: 50em) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .image-container {
  width: 100%;
  max-height: 18.3em; /* Set a fixed height for the container */  
  display: flex;
  justify-content: center;
  align-items: center;
 
  padding-bottom: 1em;

  }
  .hover-image{
    border-radius: 1em;
    max-width: 17.5em;
    position: absolute;
    top: 111.8vh;
    z-index: 2;
  }
  
  .project-area{
    display: flex;
  justify-content: center;
  align-items: center;  
  }
}
/* Style for grid items */
.grid-item {
  border: none;
  /* Border for visualization */
 
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

#cloudThree {
  position: absolute;
  margin-left: 15em;
  margin-top: 9.5em;
  opacity: 0.9;
  z-index: 0;
}



@media only screen and (max-width: 50rem) {
  .title-spacing {
    color: #fff;
    text-align: center;
    margin-left: 0em;
    margin-top: 3.5em;
  }

  #cloudThree {
    position: absolute;
    margin-left: 0em;
    margin-top: 9.5em;
    opacity: 0.9;
    z-index: 0;
  }

  .route-styling {
    font-size: 1.75em;

  }

  .hide-button-low-resolution {
    display: none;
  }

  .main-text-container {
    border-right: 1em solid rgba(255, 255, 255, 0.9);
    border-left: 1em solid rgba(255, 255, 255, 0.9);
  }
}</style>