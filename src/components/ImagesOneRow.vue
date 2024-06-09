<template>
  <div class="center-with-flex custom-background" :style="{ background: theBackground }">

    <div class="image-gallery">
      <h3>
        <span class='gallery-styling-h1-span'>make an activity selection</span>
      </h3>

      <div class="image-gallery-grid-container">
        <button class="gallery-button-left" @click="changeImageArray('left')">&lt;</button>
        <div v-for="item in imageArrayChoice" :key="item.id" class="grid-item">
          <!-- 
            optionally can use v-lazy here v-lazy="item.imageSrc" :src="item.imageSrc" 
            The advantage of v-lazy is it only loads images when in viewport
            The disadvantage with this specific code is there is a blank spot temporarily if a user
            clicks through these quickly.          
          -->
          <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
          <figcaption>{{ item.caption }}</figcaption>
        </div>
        <button class="gallery-button-right" @click="changeImageArray('right')">></button>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'ClickableImageGalleryOfImagesOnMainPageAtBottom',
  components: {

  },
  props: {
    theBackground: {
      type: String,

      default: '#ffffff'
    },
  },
  data() {
    const coffeeImage = require('@/images/cup_of_coffee.jpg');
    const pizzaFood = require('@/images/store/products/5_self-made-pizza.jpg');
    const diffusionBird = require('@/images/diffBird.jpg');
    return {
      currentIndex: 0, // Use an index to track the current batch
      imageBatches: [
        [
          { id: 1, imageSrc: pizzaFood, altText: "Image 1", caption: "Eat food!" },
          { id: 2, imageSrc: coffeeImage, altText: "Image 2", caption: "Have coffee!" },
          { id: 3, imageSrc: diffusionBird, altText: "Image 3", caption: "Watch the birds!" },
          { id: 4, imageSrc: coffeeImage, altText: "Image 4", caption: "Time for more coffee!" },
        ],
        [
          { id: 5, imageSrc: diffusionBird, altText: "Image 3", caption: "Watch the birds!" },
          { id: 6, imageSrc: diffusionBird, altText: "Image 3", caption: "Watch the birds!" },
          { id: 7, imageSrc: diffusionBird, altText: "Image 3", caption: "Watch the birds!" },
          { id: 8, imageSrc: diffusionBird, altText: "Image 3", caption: "Watch the birds!" },
        ]
      ]
    };
  },
  mounted() {
    this.imageArrayChoice = this.imageBatches[this.currentIndex];
  },
  computed: {
    // Directly use imageArrayChoice for rendering in template
    imageArrayChoice() {
      return this.imageBatches[this.currentIndex];
    }
  },
  methods: {
    changeImageArray(direction) {
      const numBatches = this.imageBatches.length;
      if (direction === 'left') {
        this.currentIndex = (this.currentIndex - 1 + numBatches) % numBatches;
      } else if (direction === 'right') {
        this.currentIndex = (this.currentIndex + 1) % numBatches;
      }
      // No need to manually adjust the array elements
    }
  },
};
</script>

<style scoped>
h3 {
  font-size: 0.9em;
  text-align: left;
}

.gallery-styling-h1-span {
  display: inline-block;
  border-bottom: 2px solid rgb(255, 89, 89);
  font-size: 1.5rem;
  padding-left: 0.2rem;
  padding-bottom: none;
  border-bottom: none;
  margin-top: 1rem;
  color: #fff;
  text-transform: uppercase;
}

/*
.custom-background {  
  background-image: url('../images/blue_sky2.jpg') !important;
  background-color: rgba(0, 0, 0, 0.1);
}
*/

.gallery-button-left {
  position: absolute;
  font-size: 4em;
  top: 50%;
  left: -1em;
  transform: translateY(-50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.66);
  cursor: pointer;
  user-select: none;
  width: 1em;
  border: 1px solid rgb(255, 255, 255);
  border-right: none;
  height: 7rem;
}

.gallery-button-right {
  position: absolute;
  font-size: 4em;
  top: 50%;
  right: -1em;
  transform: translateY(-50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.66);
  cursor: pointer;
  user-select: none;
  width: 1em;
  border: 1px solid rgb(255, 255, 255);
  border-left: none;
  height: 7rem;
}

.gallery-button-right:hover {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 17, 255, 0.5));
}

.gallery-button-left:hover {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 17, 255, 0.5));
}

.image-gallery {
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, 0);
}

.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1em;
  margin-bottom: 1em;

}

.grid-item {
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
}



.grid-item:last-child>div {
  margin-right: 1rem;
}

.grid-item:hover {
  cursor: pointer;
}

.gallery-component-image {
  border-radius: .5rem;
  padding: 0em;
  margin: 0em;
  background-color: #ffffff;
  transition: filter 0.5s ease;
  min-width: 19rem;
}

.gallery-component-image:hover {
  filter: brightness(90%);
}

figcaption {
  text-align: center;
  padding: 0.5em;
  margin: 0em;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: rgb(55, 55, 55);

}

@media (max-width: 88rem) {

  .gallery-button-left,
  .gallery-button-right {
    display: none;
  }

}

@media (max-width: 84rem) {

  /* this is a good thing to know how to use */
  .grid-item:last-of-type {
    padding-right: 1rem;
  }



  .image-gallery {
    max-height: 30rem;
    /* Adjust the maximum height as needed */
    overflow-x: auto;
    overflow-y: hidden;
    padding-left: 1em;
    padding-bottom: 1.8rem;
    padding-right: 1rem;
  }

  .image-gallery-grid-container {
    margin: 0em;
    padding: 0em;
  }

}

@media (max-width: 40rem) {

  .grid-item {
    width: fit-content;
  }
}
</style>