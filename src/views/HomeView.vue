<template>
  <div id="body">
    <!-- Main area -->
   
      <div class="custom-background-home-page">      

        <!-- Title -->
        <div class="center-main-area-box">
          <div class="top-home-content-section">      
            <h1 class="title">
              <span class="top-string-slice-of-title">
                <span>{{ inputStringShuffled.slice(0, 7) }}</span>
              </span>             
            </h1>
       
            <div class='under-title-caption'>
            </div>
            <!-- Main bullets -->
            <div class="main-text-container">

              <ul class="main-text-ul">
                <li>
                  Welcome to <a class="home-text-links"
                    href="https://github.com/conrizzo">Conrad's</a> Website
                </li>
                <li>
                  <router-link class="home-text-links" to="/about">About</router-link> this website.
                </li>
                <li>
                  Crafted under the influence of <a class="home-text-links"
                    href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>
                </li>
              </ul>

              <div class="main-text-p">
                <p style="color: #fff; font-size: 1rem;">There are a few other projects I'm working on that are not shown here. 
              The array of projects below is dynamically loaded in as objects, images are dynamically inserted into those objects 
              from an images folder. The header navigation uses the same data.</p>
              </div>

            </div>
            <!-- Grid for project links and image to appear on hover -->
            
            <ProjectGallery>  </ProjectGallery>
            
          </div>
       
        </div>
          
          <!-- <img class="aside-coffee-image" src="https://raw.githubusercontent.com/conrizzo/conradswebsite/master/src/images/CowGame.jpg" alt="Coffee image"> -->
      </div>
 
      <!-- Aside area begins  #2d2d2d; slate black color -->
       <div style="background: rgb(18,18,18);">
      </div>

   
     

      <!-- 2nd section -->
         <main class="main-content">
      <div>
        <FourWideImages>    
        </FourWideImages>
      </div>
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

       <!-- 3rd section -->      
      <CoffeeGridContent>        
      </CoffeeGridContent>   

       <div style="background: rgb(18,18,18);">
      </div>
      
      <!--
      <div style="background: linear-gradient(0deg,rgb(54, 23, 34), 5%, rgba(161, 71, 78, 0.9), 
      15%, rgb(251, 184, 158), 30%,  rgb(251, 237, 215) 40%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);">
      </div>
      -->
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

    <TwoColumnsGridContentTemplate 
      :titleText="parentTitleTextOne" 
      :content-text="parentTextOne">   
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


// Rust token title animation
import init, { main } from "@/rust_web_assembly/hello_wasm.js";

import coffee_image from '@/images/coffee_time.jpg';

import CoffeeGridContent from "@/components/CoffeeGridContent.vue";

import FourWideImages from "@/components/FourWideImages.vue";

import imagesOneRow from "@/components/ImagesOneRow.vue";

import TwoColumnsGridContentTemplate from "@/components/TwoColumnsGridContentTemplate.vue";

import ProjectGallery from "@/components/HomePage/ProjectGallery.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent, CoffeeGridContent, FourWideImages, imagesOneRow, TwoColumnsGridContentTemplate, ProjectGallery
  },
  
  data() {
    return {
      itemsLength: 0,
      birdDrawing: require("@/images/StableDiffusionBird.jpg"),
      coffee_image: coffee_image, // Assign the imported image to the "image" data property
      secondCoffee: require("@/images/cup_of_coffee.jpg"),
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
                      experimenting and learning. Make some fun projects.\
                      Drink some coffee (hopefully good coffee)."
    };
  },
  computed: {

    projectLinks() {
      return this.links; // Assuming `links` is the array of project links
    },

  },
  methods: {

    // deprecated code that was used to show the image on hover -0 may use this for somethign else later and move it
    showImage(item) {

      if (item.text === "Cowculator") {
        this.hoveredImage = require("@/images/CowculatorScreen.jpg");
        this.isHovered = true;
      } else if (item.text.startsWith('Card')) {
        this.hoveredImage = require("@/images/CardGame.jpg");
        this.isHovered = true;
      } else if (item.text === "Game") {
        this.hoveredImage = require("@/images/CowGame.jpg");
        this.isHovered = true;
      } else if (item.text.startsWith('Store')) {
        this.hoveredImage = require("@/images/store/Store_Page.jpg");
        this.isHovered = true;
      } else {
        this.hoveredImage = "";
        this.isHovered = false;
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

.title {
  text-align: left;
  position: relative;
  line-height: 1;
  height: 2em;
  padding: 1em 0.25em 3em 0.25em;
  color: rgb(255, 255, 255);
  font-size: 2em;
  z-index: 1;
}

.top-string-slice-of-title {  
  font-size: 2em;
  background-image: linear-gradient(90deg, rgb(255, 255, 255) 90%, rgba(0, 0, 0, 0.5) 30%);
  background-size: conver;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.custom-background-home-page {
  /*
  background: linear-gradient(180deg, rgb(93, 112, 255),rgb(93, 211, 255));
  background: linear-gradient(0deg,rgb(54, 23, 34), 5%, rgba(161, 71, 78, 0.9), 15%, rgb(251, 184, 158), 30%,  rgb(251, 237, 215) 40%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  */
  /* background-image: url('../images/blue_sky2.jpg'); */
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed; 
  position: relative;  
  
}
.custom-background-home-page::before{  
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(5deg, rgba(0, 0, 0, .05) 20%, transparent 20%, transparent 80%, rgba(0, 0, 0, .05) 80%), linear-gradient(100deg, rgba(0, 0, 0, .05) 10%, transparent 10%, transparent 90%, rgba(0, 0, 0, .05) 90%);
}

.custom-color {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}

.custom-color:hover {
  color: rgb(255, 255, 255) !important;
  /* overrides the components default values of '#fff' */
}

.center-main-area-box {
  display: flex;
  justify-content: center; 
  padding-bottom: 10rem;  
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
  color: rgb(255, 89, 89);
}

.main-text-container {
  display: flex;
  justify-content: left; 
  /*max-width: 40rem; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;   
  color: #ffffff;
  font-size: 1.6em;
  text-align: left;
  margin-bottom: 1em;  
}
.main-text-ul{
  background: rgba(8, 0, 42, 0.2);
   border-radius: .75rem;  
   padding: 0.5rem;
   padding-left: 2.5rem;
}
.main-text-p{
   background: rgba(8, 0, 42, 0.2);
   border-radius: .75rem;
   padding: 1rem;   
}
.first-aside-home-page {
  background: rgb(18, 18, 18);
  z-index: 1;
  padding: 1em;
}
.bird-image {
  max-width: 100%;
  border-radius: 1em; 
  background: #ffffff;
  padding: 1em;
}
.top-home-content-section{ 
  z-index: 4;
  padding-top: 2rem;
 max-width: 90rem;  
}

@media only screen and (max-width: 100rem) {
  .bird-image {
    max-width: 50%;
    border-radius: 1em;
    position: static;
    transform: none;
    background: #586af8;
    padding: 1em; 
    margin-left: 1rem; 
  }

  .center-main-area-box {    
    display: flex;
    justify-content: center;
    padding-left: 2rem; padding-right: 2rem;
    padding-bottom: 10rem;
  }
}

@media only screen and (max-width: 60rem) {
  .main-text-container {
      grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 50rem) {
  .center-main-area-box {
    margin-top: 0em;
    padding-left: 0.5rem; padding-right: 0.5rem;
  }

  .top-home-content-section { 
    z-index: 4;
    padding-top: 0rem;
  }

  .first-aside-home-page {
    margin: 0;
    border-radius: 0em;
  }

  .title {    
    font-size: 2.5em;    
  }

  .top-string-slice-of-title {   
    font-size: 1.5em;
  }  
}

</style>

