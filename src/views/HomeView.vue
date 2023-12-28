<template>
  <div id="body">
    <!-- negative margin here to fill in space in nav on home page -->
    <!-- Main area -->
    <main class="main-content">
      <div class="custom-background-home-page">
       

        <!-- Title -->
        <div class="center-main-area-box">
          <div class="main-area-box">
            <Transition>
              <h1 class="title">
                <span class="top-string-slice-of-title">
                  <span>{{ inputStringShuffled.slice(0, 7) }}</span>
                </span>
                <!--<span>{{ inputStringShuffled.slice(7) }}</span>-->
              </h1>
            </Transition>
            <div class='under-title-caption'>
            </div>
            <!-- Main bullets -->
            <div class="main-text-container">
              <ul>
                <li>
                  Welcome to <a class="home-text-links"
                    href="https://github.com/conrizzo">Conrad's</a> Website
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
                        <span class="project-title"> 
                          Project Links <span style="font-size: 1.5em; position: absolute; margin-top: 0.1em; margin-left: -0.2em; transform: rotate(80deg); display: inline-block;">&#8631;</span>
                        </span>
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

      <!-- 2nd section -->

      <div>
        <FourWideImages>    
        </FourWideImages>
      </div>
      <div style="background: rgb(18,18,18);">
      </div>

       <!-- 3rd section -->
      
      <CoffeeGridContent>        
      </CoffeeGridContent>      
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
    

      <AsideContent style="z-index: 1; background: #121212; padding: 0em;">
        <template v-slot:aside-content>
          <!-- <img class="aside-coffee-image" :src="coffee_image" alt="Coffee image"> -->
        </template>
      </AsideContent>

      

      <AsideContent style="z-index: 1; background: #121212; padding: 0em;">
        <template v-slot:aside-content>
          <!-- <img class="aside-coffee-image" :src="coffee_image" alt="Coffee image"> -->
         
        </template>
      </AsideContent>
    </main>


    <imagesOneRow></imagesOneRow>

    <TwoColumnsGridContentTemplate :titleText="parentTitleTextOne" :content-text="parentTextOne">   
    </TwoColumnsGridContentTemplate>


 
      
    

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



import CoffeeGridContent from "@/components/CoffeeGridContent.vue";

import FourWideImages from "@/components/FourWideImages.vue";

import imagesOneRow from "@/components/ImagesOneRow.vue";

import TwoColumnsGridContentTemplate from "@/components/TwoColumnsGridContentTemplate.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    ProjectLinks, CoffeeGridContent, FourWideImages, imagesOneRow, TwoColumnsGridContentTemplate
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

      inputString: "_ Hello",
      name: "",
      inputStringShuffled: "",

      // image hover over project links
      isHovered: false,
      hoveredImage: "",

      messages: [
        "I'm having a bad day :(",
        "Why is that?",            
        "This code won't work!",
        "Fixed.",
        ":)"
      ],

      parentTitleTextOne: "What is the goal of this website?",
      parentTextOne: "The goal of this website at the moment is to keep\
                      experimenting and learning. \
                      Make some fun projects."
                      
    
      // hello
      
      
      

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
            this.inputStringShuffled = "Hello,";
          }, 1000);
        }
      }, 200);
    },
    
  },

  mounted() {
    Prism.highlightAll();
    this.addLettersIntoInput();

    //#####

  },
};
</script>


<style scoped>
/* CSS for the home page */
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
  /*
  background: linear-gradient(180deg, rgb(93, 112, 255),rgb(93, 211, 255));
  background: linear-gradient(0deg,rgb(54, 23, 34), 5%, rgba(161, 71, 78, 0.9), 15%, rgb(251, 184, 158), 30%,  rgb(251, 237, 215) 40%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  */

  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed; 
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

.center-main-area-box {
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 3em;
}

.main-area-box {
  background: rgba(0, 0, 0, 0.1);
  /* 
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 10%,rgba(255, 255, 255, 0), 50%, rgba(255, 255, 255, 0) 90%, rgba(0, 0, 0, 0.1) 100%);
  */
  border-radius: 2em;
  width: 70%;
 
}

.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(0, 255, 204);
  text-decoration: none; 
}

.home-text-links:hover {
  border-bottom: 3px solid rgb(255, 89, 89);
  color: rgb(255, 255, 255);
}

.home-text-links:active {
  color: rgb(255, 208, 0);
}

.main-text-container {
  display: flex;
  justify-content: center;
  background: rgba(13, 17, 23,0.3);
  border-radius: 1em;
  display: inline-block;
  width: 24em;
  margin: 0 auto;
  /* padding-right: 0.5em;
  padding-top: 1em; */
  padding: 0.5em;
  padding-left: 2em;
  color: #ffffff;
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
  background: rgba(13, 17, 23,0.3);
  /* border: 1px solid rgb(229, 229, 229);  */
}

.routes-area a:hover {
  color: #ffffff;
}

.project-title {
  color: rgb(255, 255, 255);
  font-size: 2.5em;
  
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

  .center-main-area-box {
    
    display: flex;
    justify-content: center;
    padding: 0em;
  }

  .main-area-box {
    width: auto;
    padding: 0.5em;
    border: none;
  }


}

@media only screen and (max-width: 50rem) {
  .center-main-area-box {
    margin-top: 0em;
  }

  .first-aside-home-page {
    margin: 0;
    border-radius: 0em;
  }

  .main-area-box {
    background: none;
    border-radius: 0em;
    width: auto;
  }

  
}
.links-area {
  width: 20.8em;
}
.hover-image {
 
  margin-top: 4em;
  
  max-height: 16.25em;
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
  height: 2em;
  padding: 1em 0.25em 1em 0.25em;
  color: rgb(255, 255, 255);
  font-size: 2em;
  z-index: 1;
}
.top-string-slice-of-title {  
  font-size: 2em;
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
    font-size: 2.5em;    
  }

  .top-string-slice-of-title {
   
    font-size: 1.5em;
  }

  .routes-area {
    font-size: 1.75em;
  }

  

  .main-text-container {
    width: calc(100% - 4.2em);
  }
 
}

@media only screen and (max-width: 35rem) {
  .links-area {
    width: calc(100% - 2.66em);
  }
}</style>

