<template>
  <div>


    <button class="clean-button toggle-button" @click="toggleMenu">Experimental Side Menu</button>
    <div class="gallery-header">
      <h1 class="gallery-styling-h1-span">
        <span> Projects
          <span class="title-arrow-symbol">↷</span></span>
      </h1>
    </div>

    <div class="centerAll">

      <div class="image-gallery">
        <div :class="{ 'open': isMenuOpen }" class="side-menu">

          <!-- to make appear on same line use display: inline-block; -->
          <div class="is-item-loaded-text-display"><i>Load on Scroll: </i>
            <div v-for="(item, index) in displayArray" :key="item" style=" font-size: 1.5rem; text-align: left;">

              <div v-if="displayArray.length">

                {{ item }}<span v-if="index !== displayArray.length - 1"><!-- ,&nbsp; -->
                </span>
              </div>
            </div>
            <br>
          </div>

        </div>
        <main class="image-gallery-grid-container">
          <div v-for="(item, index) in imageArrayChoice" :key="item.id" :title="item.text" class="grid-item hidden"
            :ref="`item-${index}`" :class="{ 'show': isContentVisible[index] }">
            <router-link class="no-router-link-decorations" :to="item.to">
              <div class="img-wrapper">
                <!-- add in lazy loading to test this 
                            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.text">
                            -->
                <img class="gallery-component-image" v-lazy="item.imageSrc" :alt="item.text">
              </div>
              <h2 class="grid-title" :class="{ 'odd': gridColorAlternation(index) }">{{ item.text }}</h2>
              <figcaption>
                <p>{{ item.caption }}</p>
              </figcaption>
            </router-link>
          </div>
        </main>
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
      isMenuOpen: false
    };
  },
  mounted() {
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
  methods: {
    gridColorAlternation(index) {
      const oddIndices = [0, 2, 5, 7]; // 1, 3, 6, 8 in 1-based indexing
      const modIndex = index % 8; // Repeat the pattern every 8 items
      return oddIndices.includes(modIndex);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
.side-menu {
  position: absolute;
  margin-top: -3rem;
  height: calc(100% + 3rem);
  top: 0;
  left: 0;
  z-index: -1;
  width: 18rem;
  /* Adjust as needed */

  background: #333;
  /* Adjust as needed */
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  /* Adjust timing as needed */

}

.side-menu.open {
  transform: translateX(0);

}

.toggle-button {
  margin: 0.5rem;
  margin-left: 0rem;
}



.hidden {
  opacity: 0;
  transition: all .75s;
}

.show {
  opacity: 1;
}

.no-router-link-decorations {
  text-decoration: none;
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

.gallery-styling-h1-span {
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background: rgb(40, 40, 40);
  width: 100%;
  font-size: 2rem;
  padding-left: 4rem;
}

.title-arrow-symbol {
  font-size: 1.5em;
  position: absolute;
  margin-top: 0em;
  margin-left: -0.2em;
  transform: rotate(80deg);
  display: inline-block;
}

.gallery-header {
  text-align: left;
}

.centerAll {
  justify-content: center;
  display: flex;
  height: fit-content;
  background: rgba(40, 40, 40, .9);
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1rem;
  z-index: 1;
}

.grid-item {
  width: fit-content;
  border-top-right-radius: 0.33em;
  border-top-left-radius: 0.33em;
  border-radius: 0.33em;
  padding-top: 3rem;
}



.grid-item:nth-child(-n+4) {
  /* remove top padding from first row */
  padding-top: 0rem;
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

figcaption {
  text-align: left;
  padding: 0.5em;
  margin: 0em;
  max-width: 23rem;
  background: rgba(0, 0, 0, 0);
  font-size: 1rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.grid-title {
  border-radius: 6px;
  width: fit-content;
  border: 2px solid orange;
}


.grid-title.odd {
  color: rgb(255, 255, 255);
  border: 2px solid rgb(64, 163, 255);
}

.gallery-component-image {
  border-radius: .6rem;
}

/* Does image zoom effect - start */
.img-wrapper {
  display: inline-block;
  overflow: hidden;
  border-radius: .6rem;
}

.img-wrapper img {
  transition: all .2s ease;
  vertical-align: middle;
}

img:hover {
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

@media screen and (max-width: 70rem) {
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
  }
}

@media screen and (max-width: 35rem) {
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .gallery-component-image {
    aspect-ratio: 16/9;
    max-height: 25rem;
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
    padding-top: 1.5rem;
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
  written without the not statement and reverse the border value set -- but this is interesting.
  */
  .grid-item:not(:last-child)::after {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }

}
</style>