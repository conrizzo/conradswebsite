<template>
  <div id="body">
    <section class="center-top-main-area-box">
      <div class="website-text-boxes">
        <h1 class="title">
          <span class="top-string-slice-of-title">
            <span>{{ inputStringShuffled.slice(0, 7) }}</span>
          </span>
        </h1>
        <div class="main-text-container">

          <ul class="main-text-ul">
            <li>
              <span>Welcome to <a 
                style="background: rgb(255, 225, 161); padding-left: 0.25rem; padding-right: 0.25rem;" class="home-text-links" href="https://github.com/conrizzo">Conrad's</a> Website</span>
            </li>
            <li>
              <span><router-link style="background: rgb(161, 244, 255);  padding-left: 0.25rem; padding-right: 0.25rem;"
                  class="home-text-links" to="/about">About</router-link> this website.</span>
            </li>
            <li>
              <span>Crafted under
                the influence of <a style="background: rgb(255, 170, 161);  padding-left: 0.25rem; padding-right: 0.25rem;" class="home-text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a></span>
            </li>
          </ul>
          
          <div class="main-text-p">
           
             
            <h2>Project Information</h2>
        
            <p>Some projects are below, there are a few other projects I'm working on that are not shown
              here.
              The array of projects below is dynamically loaded in as objects, images are dynamically inserted into
              those objects
              from an images folder. The header navigation uses the same data.</p>
          </div>
          
        </div>
      </div>
    </section>
    <div class="custom-background-home-page">
      <div class="center-bottom-main-area-box">
        <section class="top-home-content-section">

          <div class='under-title-caption'>
          </div>

          <ProjectGallery />
          <!-- Main bullets -->

        </section>
      </div>
      <!-- <img class="aside-coffee-image" src="https://raw.githubusercontent.com/conrizzo/conradswebsite/master/src/images/CowGame.jpg" alt="Coffee image"> -->
    </div>
    <!-- Aside area begins  #2d2d2d; slate black color -->
    <div style="background: rgb(18,18,18);">
    </div>
    <!-- 2nd section 
   
      <div>
        <FourWideImages />
      </div>
      -->
      <imagesOneRow />
      <!--
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
      -->
   
    <!-- 3rd section -->
   
     
      
    <TwoColumnsGridContentTemplate :titleText="parentTitleTextOne" :content-text="parentTextOne" />  
   
    <TwoColumnsReversedGrid :titleText="reversedTitle" :content-text="reversedText"/>
    
   

  </div>
</template>

<script>
import Prism from "prismjs";
import "@/assets/globalCSS.css";

import init, { main } from "@/rust_web_assembly/hello_wasm.js";

import FourWideImages from "@/components/FourWideImages.vue";
import imagesOneRow from "@/components/ImagesOneRow.vue";
import TwoColumnsGridContentTemplate from "@/components/TwoColumnsGridContentTemplate.vue";
import ProjectGallery from "@/components/HomePage/ProjectGallery.vue";
import TwoColumnsReversedGrid from "@/components/TwoColumnsReversedGrid.vue";

export default {
  name: "HomeView",
  components: {
    imagesOneRow, TwoColumnsGridContentTemplate, ProjectGallery, TwoColumnsReversedGrid
  },

  data() {
    return {
      itemsLength: 0,
      birdDrawing: require("@/images/StableDiffusionBird.jpg"),

      inputString: "_ Hello,",
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

      parentTitleTextOne: "What is the goal?",
      parentTextOne: "The goal of this website at the moment is to keep\
                      experimenting and learning. Make some fun projects.\
                      Drink some coffee (hopefully good coffee). Make lots of \
                      mistakes and keep learning from them and improving.",

      reversedTitle: "approach",
      reversedText: "The process is usually to experiment on some projects or concepts, write a lot of code to try ideas, edit and delete the code,\
                     find what works, and then make it simpler.\
                    This is essentially the learning process along with reading documentation and code off other projects to understand how it works. Regularly watching\
                    YouTube videos where a concept is discussed is also part of the process.\
                    In the end code is just a tool to make things, so as I make more projects I learn more along the way and more complicated projects become easier."
    };
  },
  computed: {

    projectLinks() {
      return this.links; // Assuming `links` is the array of project links
    },

  },
  methods: {   

    capitalizeFirstLetter(string) {
          let capitalizedTitle = string.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      return capitalizedTitle
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
  },
};
</script>


<style scoped>
/* CSS for the home page */
#body {
  background-size: 100% 100%;
  background-attachment: fixed;
}

.title {
  text-align: left;
  position: relative;
  line-height: 1;
  height: 2em;
  padding: 1em 0.25em 3em 2rem;
  color: rgb(255, 255, 255);
  font-size: 2em;
  z-index: 1;
  background: rgb(45, 45, 45); 
  width: 50%;
  
}

.capText {
  text-transform: capitalize;
}
.top-string-slice-of-title {
  font-size: 2em;  
}


/* end arrow css */

.custom-background-home-page {
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
}

.custom-background-home-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(5deg, rgba(0, 0, 0, .05) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .05) 80%), linear-gradient(100deg, rgba(0, 0, 0, .05) 10%,
      transparent 10%, transparent 90%, rgba(0, 0, 0, .05) 90%);
}

.center-top-main-area-box {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
}


.center-bottom-main-area-box {
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
}

.home-text-links {
  color: rgb(18, 18, 18);

  font-weight: 500;
  border-bottom: 3px solid rgb(0, 255, 204);
  text-decoration: none;

}

.home-text-links:is(:hover, :focus) {
  border-bottom: 3px solid rgb(0, 255, 204);
  
  background: rgb(0, 255, 204) !important;
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
  gap: 0rem;
  color: #ffffff;
  font-size: 1.6em;
  text-align: left;  
}

.main-text-ul {
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  list-style-type: none;
  padding-top: 2.5rem;
}

.main-text-p {
  background: rgb(45, 45, 45); 
  padding: .5rem;
  padding-left: 1rem; padding-right: 1rem;
  color: rgb(255, 255, 255);  
  font-size: 1.1rem;
  line-height: 2; 
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

.top-home-content-section {
  z-index: 4;
  padding-top: 2rem;
  max-width: 80rem;
}

.website-text-boxes {
  z-index: 4;  
  max-width: 80rem;
  background: rgb(40, 40, 40);  
  margin-top: 4rem;
  margin-bottom: 4rem;
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

  .center-bottom-main-area-box {
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 10rem;
  }
}

@media only screen and (max-width: 60rem) {
  .main-text-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 50rem) {
  .center-bottom-main-area-box {
    margin-top: 0em;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .top-home-content-section {
    z-index: 4;
    
  }

  .first-aside-home-page {
    margin: 0;
    border-radius: 0em;
  }

  .title {
    font-size: 2.5em;
    width: 100%;
  }

  .top-string-slice-of-title {
    font-size: 1.5em;
  }
}</style>

