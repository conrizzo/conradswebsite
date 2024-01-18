<template>
  <div class="centerAll">
    <div class="image-gallery hidden" ref="content" :class="{ 'show': isContentVisible }">
      <div class="gallery-header">
        <h1 class="gallery-styling-h1-span">things to do</h1>
      </div>
      <div class="image-gallery-grid-container">

        <div v-for="item in imageArrayChoice" :key="item.id" :title="item.id" class="grid-item">
          <div>
            <h2>{{ item.altText }}</h2>
            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
            <figcaption>{{ item.caption }}</figcaption>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>


export default {
  name: 'ImageGallery',
  compontents: {

  },
  data() {
    const coffeeImage = require('@/images/cup_of_coffee.jpg');
    const pizzaFood = require('@/images/store/products/5_self-made-pizza.jpg');
    const diffusionBird = require('@/images/diffBird.jpg');
    return {
      isContentVisible: false,
      imageArrayChoice: null,
      imgArrayOfArrays: [
        [

          { id: 1, imageSrc: pizzaFood, altText: "Eat food", caption: "Food!" },
          { id: 2, imageSrc: coffeeImage, altText: "Coffee", caption: "Coffee!" },
          { id: 3, imageSrc: diffusionBird, altText: "Bird Watching", caption: "A bird!" },
          { id: 4, imageSrc: coffeeImage, altText: "Make projects", caption: "..while drinking coffee!" },

          // Add more items as needed :)
        ],
      ]


    };
  },
  mounted() {
    // Set the initioanl image array to the galleryItems array
    this.imageArrayChoice = this.imgArrayOfArrays[0]

    //#####
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin applied to the root
      threshold: 0.8, // Trigger when 50% of the element is visible
    };
    // Intersection Observer API -- this is used to load the handleIntersection method which
    // loads items on the screen as they are scrolled to with a transition effect.
    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(this.$refs.content);


  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          if (entry.target === this.$refs.content) {
            // Load content for first element
            this.isContentVisible = true;
          }

        }
      });
    },


  },
  // Component logic goes here
}
</script>
    
<style scoped>
.hidden {
  opacity: 0;
  transition: all 2s;
}

.show {
  opacity: 1;
}

h1 {
  font-size: 1.5em;
}

h2 {
  color: rgb(255, 255, 255);
  text-align: left;
  padding-left: 0.33em;
  font-size: 1em;
  text-transform: uppercase;
}

.gallery-styling-h1-span {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.gallery-header {
  display: flex;
  align-items: flex-start;
}

.centerAll {
  justify-content: center;
  display: flex;  
  height: fit-content;
  background: rgb(18, 18, 18);
  padding-bottom: 2em;
  padding-top: 2em;
}


.image-gallery {
  margin: 0 auto;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 1em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;

}

.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1em;
}

.grid-item {
  width: fit-content;
  background-color: rgb(255, 89, 89);
  border-top-right-radius: 0.33em;
  border-top-left-radius: 0.33em;
  border-radius: 0.33em;
}

.grid-item:hover {
  cursor: pointer;
}

.gallery-component-image {

  padding: 0em;
  margin: 0em;
  background-color: #ffffff;
  transition: filter 0.5s ease;
}

.gallery-component-image:hover {
  filter: brightness(90%);
}

figcaption {
  text-align: center;
  padding: 0.5em;
  margin: 0em;

  background: rgba(0, 0, 0, 0);
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(18, 18, 18);
  font-family: Arial, sans-serif;

}

@media (max-width: 70rem) {
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 35rem) { 

  .gallery-component-image {
    width: 100%;
  }
  .grid-item {
    width: fit-content;

  }
}

</style>