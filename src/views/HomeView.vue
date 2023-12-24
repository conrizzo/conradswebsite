<template>
 
    
  
  <div id="body">
    <!-- negative margin here to fill in space in nav on home page -->
    <!-- Main area -->
    <main class="main-content">
      <div class="custom-background-home-page">
        <!-- generate clouds -->
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
      <div class="center-main-area-box">
        <div class="main-area-box">
          <h1 class="title">
            <div class="top-string-slice-of-title">
              <span>{{ inputStringShuffled.slice(0, 7) }}</span>
            </div>
            <span>{{ inputStringShuffled.slice(7) }}</span>
          </h1>
          <div class='under-title-caption'>
          </div>
          <!-- Main bullets -->
          <div class="main-text-container">
            <ul>
              <li>
                This is a website project made by <a class="home-text-links" href="https://github.com/conrizzo">Conrad</a>
              </li>
              <li>
                View the <router-link class="home-text-links" to="/about">About</router-link> page for more information
              </li>
              <li>
                Crafted under the influence of <a class="home-text-links"
                  href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>
              </li>
            </ul>
          </div>
          <!-- Grid for project links and image to appear on hover -->
          <div class="grid-container">
            <div class="grid-item" style="grid-column: 1;">
              <div class="image-container">
                <img v-if="isHovered" style="" class="hover-image" :src="hoveredImage" alt="Hover Image">
              </div>
            </div>
            <div class="grid-item">
              <div class="project-area">
                <!-- Projects ({{ this.itemsLength }})</h3> optionall show how many projcets -->
                <ProjectLinks :links="links">
                  <template v-slot="{ links }">
                    <div class="links-area">
                      <span class="project-title">Project Links:</span>
                      <div class="routes-area">
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
          </div>
        </div>
      </div>
    </div>
      <!-- Aside area begins  #2d2d2d; slate black color -->

      <AsideContent class="first-aside-home-page">
        <template v-slot:aside-content>
          <figure style="display: inline-block;">
            <img class="bird-image" :src="birdDrawing" alt="Bird Drawing">
            <figcaption class="aside-text" style="display: block;">
              <i>Rust code that animates the title is: </i>
              <a class="home-text-links" href="https://blog.conradswebsite.com/blog/rust-web-assembly-example/">here.</a>
            </figcaption>
          </figure>
        </template>
      </AsideContent>
      <div>
        <FourWideImages></FourWideImages>
      </div>

      <div style="background: #fff;">
      </div>
      <CoffeeGridContent></CoffeeGridContent>
      <div style="background: linear-gradient(0deg,rgb(54, 23, 34), 5%, rgba(161, 71, 78, 0.9), 
      15%, rgb(251, 184, 158), 30%,  rgb(251, 237, 215) 40%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);">
      </div>
     
      <!--
              <AsideContent style="z-index: 1; background: #000; padding: 0em;">

                    <template v-slot:aside-content>          
                                  
                          <img class="aside-coffee-image" :src="coffee_image" alt="Coffee image">   

                        <img class="aside-coffee-image" :src="secondCoffee" alt="Coffee image"> 
                          <img class="" style="" :src="foodImage" alt="Coffee image"> 
                    </template>

              </AsideContent>   
        -->
      

      <div class="third-main-area">
        <div class="hidden" ref="content2" :class="{ 'show': isContentVisible2 }">
          <!-- div to show/hide items within on scroll -->
          <div class="third-area-grid-container">
             <div class="grid-section-3-first-column">
             </div>
             <div class="grid-section-3-second-column">

             </div>
          </div>
        </div>
      </div>
      <AsideContent style="z-index: 1; background: #121212; padding: 0em;">

        <template v-slot:aside-content>
          <!-- <img class="aside-coffee-image" :src="coffee_image" alt="Coffee image"> -->
        </template>

      </AsideContent>

      <!--<div class="hidden" style="margin: 0 auto;" ref="content2" :class="{ 'show': isContentVisible2 }"> -->
      <ImageGallery>
      </ImageGallery>
      <AsideContent style="z-index: 1; background: #121212; padding: 0em;">
        <template v-slot:aside-content>
          <!-- <img class="aside-coffee-image" :src="coffee_image" alt="Coffee image"> -->
          <div class="image-gallery-aside">
            <li>
              <span class="gallery-list-item">BEST FOODS:</span>
              <ul class="gallery-list-home">
                Coffee
              </ul>
              <ul class="gallery-list-home">
                Coffee
              </ul>
              <ul class="gallery-list-home">
                Foods that go with Coffee
              </ul>
              <span class="gallery-list-item">BEST DRINKS:</span>
              <ul class="gallery-list-home">
                Coffee
              </ul>
              <ul class="gallery-list-home">
                Wasser mit Kohlensäure
              </ul>
            </li>
          </div>
        </template>
      </AsideContent>
    </main>

    
        <imagesOneRow></imagesOneRow>
    

  </div>
</template>

<script>

import Prism from "prismjs";

// global default css file - which contains some key items for this page
import "@/assets/globalCSS.css";

// Aside vue slot
import AsideContent from "@/components/FirstAside.vue";

// Array of project links
import ProjectLinks from '@/components/Navigation/ProjectLinks.vue'

// Rust token title animation
import init, { main } from "@/rust_web_assembly/hello_wasm.js";

import coffee_image from '@/images/coffee_time.jpg';

import ImageGallery from "@/components/ImageGallery.vue";

import CoffeeGridContent from "@/components/CoffeeGridContent.vue";

import FourWideImages from "@/components/FourWideImages.vue";

import imagesOneRow from "@/components/ImagesOneRow.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    ProjectLinks, ImageGallery, CoffeeGridContent, FourWideImages, imagesOneRow
  },
  props: {
    links: {
      type: Array,
    },
  },
  data() {
    return {
      itemsLength: 0,
      birdDrawing: require("@/images/StableDiffusionBird.jpg"),
      coffee_image: coffee_image, // Assign the imported image to the "image" data property
      secondCoffee: require("@/images/second_coffee.jpg"),
      foodImage: require("@/images/coffee_food.jpg"),
      //conradImage: require("@/images/conrad.jpg"), 

      // Intersection Observer to show items when they are scrolled to
      isContentVisible: false,
      isContentVisible2: false,
      isContentVisible3: false,

      //########## This logic only does cloud animations - not used anymore.
      moveTheClouds: false,
      i1: null,
      i2: null,
      i3: null,
      clouds: [],
      coordX: [15, 9, 2],
      //######### End cloud animations area.

      inputString: "_ Hello",
      name: "",
      inputStringShuffled: "",

      // image hover over project links
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
    handleIntersection(entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          if (entry.target === this.$refs.content) {
            // Load content for first element
            this.isContentVisible = true;
          } else if (entry.target === this.$refs.content2) {
            // Load content for second element
            this.isContentVisible2 = true;
          }else if (entry.target === this.$refs.content3) {
            // Load content for second element
            this.isContentVisible3 = true;
          }

        }
      });
    },


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
        case "Game":
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
            this.inputStringShuffled = "Hello, Welcome to Conrad's Website";
          }, 1000);
        }
      }, 200);
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

    //#####
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin applied to the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
    // Intersection Observer API -- this is used to load the handleIntersection method which
    // loads items on the screen as they are scrolled to with a transition effect.
    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(this.$refs.content2);
   
    //#####

  },
};
</script>



<style scoped>
/* CSS for the home page */
.hidden {
  opacity: 0;
  transition: all 2s;
}
.show {
  opacity: 1;
}

#body {
  /* Winter background 
  background: linear-gradient(-4deg,rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  background: -webkit-linear-gradient(-4deg,rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);

  background: -webkit-linear-gradient(0deg, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  background: linear-gradient(0deg, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
   

  background: linear-gradient(180deg, rgb(226, 254, 255), 1%, rgba(228, 253, 255, 0.8),
      15%, rgba(81, 209, 255, 0.8) 30%, rgba(81, 209, 255, 0.7) 60%, rgb(53, 77, 255, 0.8) 90%);
       */
  background-size: 100% 100%;
  background-attachment: fixed;
}

.custom-background-home-page {

  background: linear-gradient(180deg, rgb(93, 112, 255),rgb(93, 211, 255));

  /*
  background: linear-gradient(0deg,rgb(54, 23, 34), 5%, rgba(161, 71, 78, 0.9), 15%, rgb(251, 184, 158), 30%,  rgb(251, 237, 215) 40%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  */
}

.third-main-area {
  background: linear-gradient(0deg, rgb(226, 254, 255), 1%, rgba(228, 253, 255, 0.7), 15%, rgba(81, 209, 255, 0.7) 30%, rgba(81, 209, 255, 0.7) 60%, rgb(53, 77, 255) 90%);
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
}
.third-area-grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1em;
  /* Adjust the gap between grid items as needed */
}
.grid-section-3-first-column {
  grid-column: 1;
  grid-row: 1 / 3;
  border: 5px rgb(51, 51, 51) solid;
  background: rgb(0, 227, 227);
  color: #ffffff;
  border-radius: 0.2em;
  padding: 0.25em;
  max-height: 1.5em;
  font-size: 3em;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}
.grid-section-3-second-column {
  grid-column: 2;
  grid-row: 3 / 5;
  border: 1px rgb(51, 51, 51) solid;
  background: rgb(195, 25, 15);
  color: #ffffff;
  border-radius: 0.2em;
  padding: 0.25em;
  max-height: 1.5em;
  font-size: 3em;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.custom-color {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}
.custom-color:hover {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}
.button-35:hover {
  box-shadow: #ffffff 0 0 0 2px, transparent 0 0 0 0;
}

.center-main-area-box{
  display: flex;
  justify-content: center;   
  margin-top: 3em;
  margin-bottom: 3em;  
  
}

.main-area-box{
  background: rgba(0, 0, 0, 0.1);
  /* 
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 10%,rgba(255, 255, 255, 0), 50%, rgba(255, 255, 255, 0) 90%, rgba(0, 0, 0, 0.1) 100%);
  */
  border-radius: 1em;
  width: 70%; 
}

.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(255, 89, 89);
  text-decoration: none;
  /*padding: 0.1em 0.2em;  */

  /*  transition: 0.33s ease-in-out; Add transition for smooth animation */
}

.home-text-links:hover {
  border-bottom: 3px solid rgb(0, 255, 170);
  color: rgb(255, 255, 255);
}

.home-text-links:active {
  color: rgb(255, 208, 0);
}


.main-text-container {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  display: inline-block;
  width: 24em;
  margin: 0 auto;
  /* padding-right: 0.5em;
  padding-top: 1em; */
  padding: 0.5em;
  padding-left: 2em;
  color: #fff;
  font-size: 1.6em;
  text-align: left;
}

.routes-area {
  line-height: 1.11;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 2.1em;
  padding: 0.5em;
  border-radius: 0.5em;
  background: rgba(0, 0, 0, 0.1);
  /* border: 1px solid rgb(229, 229, 229);  */
}

.routes-area a:hover {
  color: #ffffff;
}

.project-title {
  color: rgb(255, 255, 255);
  font-size: 2.5em;
  border-bottom: 3px solid rgb(255, 89, 89);
  padding-bottom: 2px;
  /* text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3); */
}

.on-hover-projects {
  text-decoration: none;
  padding: 0 0.25em 0 0.25em;
}

.on-hover-projects:hover {
  color: #000000 !important;
  background-color: rgb(255, 255, 255);
  border-radius: 0.33em;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Two columns with equal width */
  gap: 1em;
  /* padding-top: 2em; */
  margin-bottom: 2em;

}








.first-aside-home-page {
  background: rgb(18, 18, 18);
  z-index: 1;
  padding: 1em;



}

.aside-coffee-image {
  max-width: 100%;
  padding-top: 33vmin;
  border-radius: 1em;
}

.bird-image {
  max-width: 14%;
  border-radius: 1em;
  position: absolute;
  top: 50%;
  /* Position the element at the vertical center */
  /* Position the element at the horizontal center */
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 1em;
}

@media only screen and (max-width: 100rem) {
  .bird-image {
    max-width: 75%;
    border-radius: 1em;
    position: static;
    transform: none;
    background: #586af8;
    padding: 1em;
  }

.center-main-area-box{
  margin-top: 5em;  
  display: flex;
  justify-content: center;  
  padding: 0em; 
}

.main-area-box{  
  width: auto; 
  padding: 0.5em;
}


}

@media only screen and (max-width: 50rem) {


  .first-aside-home-page {
    margin: 0;
    border-radius: 0em;
  }

    .main-area-box{
    background: none;
    border-radius: 0em;
    width: auto; 
  }




  /* Remove the right margin from the third grid item */

  

  
}

@media only screen and (max-width: 70rem) {}

.coffee-image {
  border-radius: 1em;
  width: 100%;
  border: 4px solid rgb(0, 255, 166);
  background: rgb(229, 233, 240);
  box-sizing: border-box;
}


.links-area {
  width: 20.8em;
}

.hover-image {
  max-height: 18.33em;
  margin-top: 4em;
  max-width: 100%;

  display: block;
  border-radius: 1em;
}

/* Style for grid items */
.grid-item {
  border: none;
  /* Border for visualization */
}

.title {
  position: relative;
  line-height: 1;
  height: 3em;
  padding: 0.5em 0.25em 0.25em 0.25em;
  

  color: rgb(255, 255, 255);
  font-size: 3em;
  z-index: 1;
}

.top-string-slice-of-title {
  padding-bottom: 0.3em;
  font-size: 1.5em;
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

.image-gallery-aside {
  list-style-type: none;
  text-align: left;
  color: #fff;
  padding: 1em;
  font-weight: bold;

}

ul.gallery-list-home {
  margin-left: 0.25em;
  font-size: 0.85em;
  color: rgb(0, 221, 255);
}

.gallery-list-item {
  font-size: 0.9em;
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

.image-container {
  float: inline-end;
  max-height: 18.3em;
  padding-left: 2em;
}

@media (max-width: 50em) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .image-container {
    /* Set a fixed height for the container */
    display: none;
  }

  .hover-image {
    border-radius: 1em;

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
  .title {
    margin-bottom: 5rem;
  }

  .top-string-slice-of-title {
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }



  .routes-area {
    font-size: 1.75em;
  }

  .hide-button-low-resolution {
    display: none;
  }

  .main-text-container {
    width: calc(100% - 4.2em);
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
  .links-area {
    width: calc(100% - 2.66em);
  }
}</style>

