<template>
  <div class="outer-padding" :style="{ fontSize: baseFontSize }">
    <!--<div style='text-align: left;'>
      <button class="clean-button toggle-button" @click="toggleMenu">Experimental Side Menu</button>
    </div>-->

    <div class="centerAll">
      <div class="second-grid" :class="{ 'active-grid-style': isSecondGridActive }">

        <!-- Grid column 1 side menu -->
        <div :class="['side-menu', menuClassState]" class="side-menu">

          <div class="left-column-content">

            <div style="display: flex; justify-content: space-between;">
              <h3>Random Projects</h3>

              <svg @click="toggleMenu(), toggleGridStyle()" class="svg-x-wrapper" xmlns="http://www.w3.org/2000/svg"
                width="32" height="32" viewBox="0 0 24 24" fill="none"
                style="display: inline-block; cursor: pointer; margin-right: 0.5rem;">
                <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M18 6 6 18M6 6l12 12">
                </path>
              </svg>

              <!-- to make appear on same line use display: inline-block; -->
            </div>

            <div v-for="(item, index) in imageArrayChoice" :key="item.id" :title="item.text"
              class="side-links-background">

              <!-- this v-if v-else is only here to allow using router links and https links -->
              <a v-if="isExternalHTTPSLink(item.to)" :href="item.to" class="no-router-link-decorations align-text-left"
                target="_blank" rel="noopener noreferrer">
                <div :class="{ 'hover-effect': hoveredIndex === index }" class="projects-side-menu-items">
                  <span>{{ item.text }}</span>
                </div>
              </a>

              <!-- if it's not an https link then use vue router -->
              <router-link v-else class="no-router-link-decorations align-text-left" :to="item.to" :href="item.to">
                <div :class="{ 'hover-effect': hoveredIndex === index }" class="projects-side-menu-items">
                  <span>{{ item.text }}</span>
                </div>
              </router-link>
            </div>
          </div>


        </div>
        <!-- Grid column 2 main projects -->
        <div class="image-gallery" :style="addNegativeMarginToTopProjectsToCompensateForLeftMenu">
          <main class="image-gallery-grid-container">
            <div v-for="(item, index) in imageArrayChoice" :key="item.id" :title="item.text" class="grid-item hidden"
              :ref="`item-${index}`" :class="{
                'show': isContentVisible[index],
                'hovered': hoveredIndex === index,
                'odd': gridColorAlternation(index)
              }" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
              <!-- This first checks IF links are https so the array of projects can differentiate between https and vue Router links -->
              <a v-if="isExternalHTTPSLink(item.to)" class="no-router-link-decorations h2-color" :href="item.to"
                target="_blank" rel="noopener noreferrer">
                <div class="img-wrapper">
                  <!-- add in lazy loading to test this 
                            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.text">
                            -->
                  <img class="gallery-component-image" v-lazy="item.imageSrc" :alt="item.text">
                </div>
                <h2 class="grid-title" :class="{ 'odd': gridColorAlternation(index) }">{{ item.text }}</h2>
                <figure-caption>
                  <p>{{ item.caption }}</p>
                </figure-caption>
              </a>
              <!-- ELSE it's a router link the vue.js  -->
              <router-link v-else class="no-router-link-decorations h2-color" :to="item.to">
                <div class="img-wrapper">
                  <!-- add in lazy loading to test this 
                            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.text">
                            -->
                  <img class="gallery-component-image" v-lazy="item.imageSrc" :alt="item.text">
                </div>
                <h2 class="grid-title" :class="{ 'odd': gridColorAlternation(index) }">{{ item.text }}</h2>
                <figure-caption>
                  <p>{{ item.caption }}</p>
                </figure-caption>
              </router-link>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLinks from '@/components/Navigation/ProjectLinks.ts';

export default {
  name: 'ImageGallery',
  data() {
    const requireContext = require.context('@/images/projects', false, /\.jpg$/);
    const images = requireContext.keys().map(requireContext);

    return {
      images,
      isContentVisible: [],
      imageArrayChoice: ProjectLinks,
      displayArray: [],
      isMenuOpen: true,
      isSecondGridActive: false,
      currentMenuState: 0,
      hoveredIndex: null,
      baseFontSize: '16px',
      addNegativeMarginToTopProjectsToCompensateForLeftMenu: 'margin-top: 0rem;',
    };
  },

  mounted() {
    /*
        var devicePixelRatio = window.devicePixelRatio;
        var isMobile = /Mobi|Android/i.test(navigator.userAgent);
        console.log('test', devicePixelRatio, isMobile);
        
        // Check if the device has a high DPI display and is not a mobile device
        if (devicePixelRatio > 1 && !isMobile) {
          // Adjust the zoom level of the webpage so high dpi displays don't have it slide off the screen
          document.body.style.zoom = 1.66 / devicePixelRatio;
        }
    */
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };
    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.$nextTick(() => {
      this.imageArrayChoice.forEach((item, index) => {
        this.isContentVisible[index] = false;
        if (this.$refs[`item-${index}`]) {
          this.$refs[`item-${index}`][0].dataset.index = index;
          this.observer.observe(this.$refs[`item-${index}`][0]);
        }
      });
    });
  },

  computed: {
    hoverClassStates() {
      return this.imageArrayChoice.map((_, index) => {
        // Example logic: highlight the next item in the list
        return { 'next-hovered': this.hoveredIndex !== null && this.hoveredIndex + 1 === index };
      });
    },

    menuClassState() {
      switch (this.currentMenuState) {
        case 0: return '';
        case 1: return 'open';
        case 2: return 'closed';
        default: return '';
      }
    },
  },

  methods: {

    isExternalHTTPSLink(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },

    toggleGridStyle() {
      if (this.currentMenuState === 0 || this.currentMenuState === 2) {
        this.addNegativeMarginToTopProjectsToCompensateForLeftMenu = 'margin-top: 0rem;' // set back to 0 on close
        return;
      }
      this.addNegativeMarginToTopProjectsToCompensateForLeftMenu = 'margin-top: -26.5rem;';
      this.isSecondGridActive = !this.isSecondGridActive;
    },

    gridColorAlternation(index) {
      const oddIndices = [0, 2];
      const modIndex = index % 2; // Repeat the pattern
      return oddIndices.includes(modIndex);
    },

    toggleMenu() {
      //this.isMenuOpen = !this.isMenuOpen;
      this.currentMenuState = (this.currentMenuState + 1) % 3;
    },

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          if (entry.target === this.$refs[`item-${index}`][0]) {
            this.isContentVisible[index] = true;
            this.changeWords();
          }
          this.observer.unobserve(entry.target);
        }
      });
    },

    changeWords() {
      this.displayArray = [];
      for (let i = 0; this.isContentVisible[i] !== false && i < this.isContentVisible.length; i++) {
        if (this.isContentVisible[i] === false) {
          this.displayArray.push(null);
        } else {
          this.displayArray.push(this.imageArrayChoice[i].text);
        }
      }
    },
  }
};
</script>

<style scoped>
/* custom zoom for high resolution screen */



.outer-padding {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.side-menu {
  position: sticky;
  top: 4.5rem;
  padding-top: .9rem;
  /*
  margin-top: -3rem;
  */
  height: calc(100%);
  transform: translateX(0);
  z-index: 1;
  background-size: cover;
  /*background: rgb(53, 164, 238);*/
  background: rgb(38, 38, 38);
  border-top-right-radius: .5rem;
  /* 
  transform: translateX(-100%); if this element sidemenu is 
    put inside the imageGallery div then it will slide inside the middle when closed
  */
  transition: transform .75s ease-out, opacity .75s ease-out;
  opacity: 1;
}

.side-menu.open {
  transform: translateX(-100%);
  padding-top: .9rem;
  height: 0rem;
  width: 18rem;
  /*background: rgb(53, 164, 238);*/
  background: rgb(38, 38, 38);
  margin-bottom: 25rem;
  padding-bottom: .5rem;
  border-top-right-radius: 0rem;
}

.side-menu.closed {
  display: none;
}

.side-links-background:hover {
  background: rgba(60, 60, 60);
  border-radius: 0rem;

  transition-delay: 0s;
}

/*
.h2-color:hover h2 {
  color: #fff;
}
*/
.toggle-button {
  margin: 0.5rem;
  margin-left: 0rem;
  border-radius: 0;
  background: rgba(60, 60, 60);
  box-shadow: none;
  color: #fff;
}

.toggle-button:hover {
  text-decoration: underline;
}

.second-grid {
  display: grid;
  grid-template-columns: 18rem 53rem;
}

.left-column-content {
  position: sticky;
  top: 5rem;
  padding-bottom: 2rem;
  /*background: linear-gradient(rgb(53, 164, 238), rgb(23, 196, 216), rgb(53, 164, 238)); */
  background: rgb(38, 38, 38);
}

/* this adjusts the transition time of hovering over each project grid-item  */
.hidden {
  opacity: 0;
  transition: all .5s;
}

.show {
  opacity: 1;
}

.no-router-link-decorations {
  text-decoration: none;
}

.align-text-left {
  text-align: left;
}

h1 {
  font-size: 1.5em;
}

h2 {
  color: rgb(255, 255, 255);
  text-align: left;
  padding-left: 0.33em;
  padding-right: 0.33em;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
}

h3 {
  font-size: 1.1rem;
  color: rgb(225, 225, 225);
  text-align: left;
  padding-left: .7em;
}

.projects-side-menu-items {
  color: rgb(245, 245, 245);
  padding-left: 1em;
  padding-right: 1em;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.5;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.projects-side-menu-items:hover {
  text-decoration: underline;
  background: rgba(60, 60, 60);
}

.hover-effect {
  background: rgba(60, 60, 60);
  border-radius: 0rem;
  transition-delay: .5s ease;
}

.gallery-header {
  text-align: left;
}

.centerAll {
  justify-content: center;
  display: flex;
  height: fit-content;
  background: rgb(50, 50, 50);
}

.image-gallery {
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, 0);
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1rem;
  z-index: 1;
}

.grid-item {
  width: fit-content;
  border-top-right-radius: 0.33em;
  border-top-left-radius: 0.33em;
  border-radius: 0.33em;
  margin-top: 0rem;
  /* This fixed the 4th item having extra padding on top*/
}

.grid-item.odd:hover {
  background: rgba(73, 67, 52, 0.75);
}

.grid-item:hover {
  background: rgba(55, 73, 85, 0.75);
}

.grid-item:hover h2 {
  color: rgb(255, 255, 255);
}

/*
.grid-item:hover figure-caption{
  color: rgb(50, 50, 50);
}
*/

.grid-item:nth-child(-n+3) {
  /* remove top padding from first row */
  margin-top: 0rem;
}

.gallery-component-image {
  padding: 0em;
  margin: 0em;
  background-color: #ffffff;
  transition: filter .25s ease;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 0.5rem;
}

.gallery-component-image:hover {
  filter: brightness(90%);
}

figure-caption {
  text-align: left;
  padding: 0.5em;
  margin: 0em;
  max-width: 23rem;
  background: rgba(0, 0, 0, 0);
  font-size: 1rem;
  font-weight: bold;
  color: rgb(250, 250, 250);
}

.grid-title {
  width: fit-content;
  /* border: 2px solid rgb(200, 200, 200); */
  color: rgb(225, 225, 225);
  border-left: 2px solid rgb(175, 224, 255);
  /* background: rgb(46, 50, 55); */
}

.grid-title.odd {
  color: rgb(225, 225, 225);
  border-left: 2px solid rgb(255, 225, 156);
}

.gallery-component-image {
  border-radius: .5rem;
}

/* Does image zoom effect - start */
.img-wrapper {
  display: inline-block;
  overflow: hidden;
  border-radius: -0.25rem;
}

.img-wrapper img {
  transition: all .2s ease;
  vertical-align: middle;
}

/* zoom image on grid item hover */
.h2-color:hover img {
  transform: scale(1.03);
  -ms-transform: scale(1.03);
  /* IE 9 */
  -moz-transform: scale(1.03);
  /* Firefox */
  -webkit-transform: scale(1.03);
  /* Safari and Chrome */
  -o-transform: scale(1.03);
  /* Opera */
}

/* Does image zoom effect - end */

.is-item-loaded-text-display {
  color: #fff;
  background-color: rgba(44, 49, 54, 0);
  width: fit-content;
  margin: 0 auto;
  padding-bottom: 0.75rem;
}

.active-grid-style {
  grid-template-columns: 1fr;
}

.svg-x-hover-color-highlight {
  stroke: rgb(255, 255, 255);
  transition: stroke 0.3s ease;
  /* Adjust the duration and timing function as needed */
}

.svg-x-wrapper:hover .svg-x-hover-color-highlight {
  stroke: rgb(60, 60, 60);
  /* Your desired hover color */
}

.gallery-styling-h1-span {
  display: none;
}

/* create clouds */
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

/* Disable hover since mobile devices dont use pointer fine, and alter the the grid layout */
/* (hover: hover) and (pointer: fine) */
@media (max-width: 70rem) {
  .gallery-styling-h1-span {
    font-size: 1.1rem;
    color: rgb(255, 255, 255);
    text-align: left;
    padding-left: 1rem;
    display: block;
  }

  .title-arrow-symbol {
    font-size: 1.5em;
    position: absolute;
    margin-top: 0em;
    margin-left: 0rem;
    transform: rotate(30deg);
    display: inline-block;
  }

  /* Notice: image-gallery --- 
  This overrides the this.addNegativeMarginToTopProjectsToCompensateForLeftMenu = 'margin-top: -25rem;'; 
  in the toggleGridStyle method. This way when the grid layout shifts it doesnt have a giant negative margin  
  */
  .image-gallery {
    margin-top: 0rem !important;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .second-grid {
    grid-template-columns: 1fr;
  }

  .side-menu {
    display: none;
  }

  .toggle-button {
    display: none;
  }

  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-item:nth-child(-n+4) {
    padding-top: 3rem;
  }

  .grid-item {
    padding-top: 3rem;
    /* set padding to 2rem for all items */
  }

  .grid-item:nth-child(-n+2) {
    padding-top: 0;
    /* override the previous rule */
  }
}

@media screen and (max-width: 50rem) {
  .image-gallery {
    padding: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  /* lower font sizes a bit */
  .grid-title {
    font-size: 1rem;
  }

  figure-caption {
    font-size: .8rem;
  }
}

@media screen and (max-width: 35rem) {
  .grid-title {
    font-size: .8rem;
  }
}

@media screen and (max-width: 16rem) {

  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  /* adjust this to set the image size at low resolutions */
  .gallery-component-image {
    aspect-ratio: 16/9;
    max-height: 19rem;
  }

  .grid-item {
    width: fit-content;
    border-radius: 0;
    padding-bottom: 1.5rem;
    padding-top: 0rem;
  }


  .grid-item:nth-child(-n+4) {
    padding-top: 0rem;
  }

  .grid-item:first-child {
    padding-top: 0rem;
  }

  .grid-item::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin-top: .75rem;
    border-top: none;
  }

  /* 
  Fancy code that makes the last item in the grid not have a line after it
  by telling all other elements to have a border line. of course this could be
  written without the not statement and reverse the border value set as well, so 2 ways to do this same operation
  */
  .grid-item:not(:last-child)::after {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }

}
</style>