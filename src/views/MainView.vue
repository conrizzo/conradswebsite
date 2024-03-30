<template>
  <div id="body">
    <section class="center-top-main-area-box">
      <div class="website-text-boxes">
        <h1 class="title">
          <span class="top-string-slice-of-title">
            <span>{{ inputStringShuffled }}</span>
          </span>
        </h1>
        <div class="main-text-container">
          <ul class="main-text-ul">
            <li>
              Scroll down to see projects!
            </li>
            
            <li>
              <span>Crafted under
                the influence of 1-2 cups of <a class="home-text-links list-links-text-decoration"
                  href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>
                per day.
                <br>
              </span>
            </li>
          </ul>
          <div class="center-image">
            <img style="height: 9rem; padding-right: 1rem;" class="bird-image" :src="birdDrawing" alt="Bird Drawing">
            <img style="height: 9rem;" :src="aCoffee" alt="Coffee image">
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
        </section>
      </div>
    </div>
    <imagesOneRow />    
  </div>
</template>

<script>
import Prism from "prismjs";
import "@/assets/globalCSS.css";

import init, { main } from "@/rust_web_assembly/hello_wasm.js";

import imagesOneRow from "@/components/ImagesOneRow.vue";

import ProjectGallery from "@/components/HomePage/ProjectGallery.vue";


export default {
  name: "MainPageView",
  components: {
    imagesOneRow, ProjectGallery,
  },

  data() {
    return {
      itemsLength: 0,
      birdDrawing: require("@/images/BlueSkyBird.jpg"),
      aCoffee: require("@/images/cup_of_coffee.jpg"),      

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
  background: linear-gradient(to right, orange, red, pink);
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
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
  
}


.center-top-main-area-box {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
}


/*
.center-top-main-area-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(100deg, rgba(0, 0, 0, .1) 10%,
      transparent 10%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);*/
      /*
      background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(70deg, rgba(0, 0, 0, .1) 10%,
      transparent 5%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);
}
*/
.center-bottom-main-area-box {
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
}

.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background: rgb(18, 18, 18);
}

.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(0, 171, 137);
  text-decoration: none;
}

.home-text-links:is(:hover, :focus) {
  background: rgb(0, 255, 204);
  color: rgb(18, 18, 18);
  border-bottom: none;
}

.home-text-links:active {
  color: rgb(255, 89, 89);
}

.list-links-text-decoration {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
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
  padding-left: 3rem;
  padding-top: 2.5rem;
}

.first-aside-home-page {
  background: rgb(18, 18, 18);
  z-index: 1;
  padding: 1em;
}

.top-home-content-section {
  z-index: 4;
  padding-top: 2rem;
  max-width: 80rem;
}

.website-text-boxes {
  z-index: 4;
  width: 80rem;
  background: rgb(40, 40, 40);
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media only screen and (max-width: 100rem) {
  .center-bottom-main-area-box {
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 10rem;
  }

  .center-bottom-main-area-box {
    padding-bottom: 2rem;
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
}</style>

