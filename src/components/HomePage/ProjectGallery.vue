<template>
  <div class="centerAll">
     
    <div class="image-gallery hidden" ref="content" :class="{ 'show': isContentVisible }">
      <div class="gallery-header">
        <h1 class="gallery-styling-h1-span"><span class="project-title"> Project Links 
            <span  style="font-size: 1.5em; position: absolute; margin-top: 0em; margin-left: -0.2em; 
            transform: rotate(80deg); display: inline-block;">↷</span></span></h1>
        
      </div>
      <div class="image-gallery-grid-container">
        
        <div v-for="item in imageArrayChoice" :key="item.id" :title="item.id" class="grid-item">
          <RouterLink class="no-router-link-decorations" :to="item.to">
          <div>
            <h2>{{ item.text }}</h2>
            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.text">
            <figcaption><p>{{ item.caption }}</p></figcaption>
          </div>
          </RouterLink>
        </div>
        
      </div>
    
    </div>
     
  </div>
  
</template>
  
<script>

import ProjectLinks from '@/components/Navigation/ProjectLinks.ts';

export default {
  name: 'ImageGallery',
  components: {
    
  },
  data() {
    const requireContext = require.context('@/images/projects', false, /\.jpg$/);
    const images = requireContext.keys().map(requireContext);


    const coffeeImage = require('@/images/cup_of_coffee.jpg');
    const coffeeFood = require('@/images/coffee_food.jpg');
    const diffusionBird = require('@/images/diffBird.jpg');
    return {
      theProjectLinks: ProjectLinks, // make the project links available to the template dynamically
      images,

      isContentVisible: false,
      imageArrayChoice: null,
      imgArrayOfArrays: [
        
          ProjectLinks,
        

          // Add more items as needed :)
        
        [
          { id: 1, imageSrc: coffeeFood, altText: "Yummy Food", caption: "Food!" },
          { id: 2, imageSrc: coffeeImage, altText: "Coffee", caption: "Coffee!" },
          { id: 3, imageSrc: diffusionBird, altText: "Bird Watching", caption: "A bird!" },
          { id: 4, imageSrc: coffeeImage, altText: "Learn More Code", caption: "..while drinking coffee!" },
        

          // Add more items as needed :)
        ],
      ]


    };
  },
  mounted() {
    this.theProjectLinks = ProjectLinks;

    // Set the initioanl image array to the galleryItems array
    this.imageArrayChoice = this.imgArrayOfArrays[0]

    //#####
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin applied to the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
    // Intersection Observer API -- this is used to load the handleIntersection method which
    // loads items on the screen as they are scrolled to with a transition effect.
    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(this.$refs.content);


  },
  computed:{
    testTest(){
      //console.log("testing", this.theProjectLinks);
      return this.theProjectLinks;
    },
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

.no-router-link-decorations{
  text-decoration: none;
 

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
  font-size: 1.25rem;
  text-transform: uppercase;
}

.gallery-styling-h1-span {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  
 
}

.gallery-header {
  display: flex;
  align-items: flex-start;
}

.centerAll {
  justify-content: center;
  display: flex;  
  height: fit-content;
  background: rgba(0, 0, 0,0.25);
  padding-bottom: 2em;
  padding-top: 2em;
  border-radius: 1rem;

}


.image-gallery {
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255,0);
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
  width: 256px;
  height: 256px;
 
  border-radius: 0.5rem;
}

.gallery-component-image:hover {
  filter: brightness(90%);
}

figcaption {
  text-align: left;
  padding: 0.5em;
  margin: 0em;
  max-width: 256px;
  background: rgba(0, 0, 0, 0);
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(255, 255, 255);
  font-family: Arial, sans-serif;

}

@media (max-width: 70rem) {
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 50rem) {
  h2{
    
  }
}

@media (max-width: 35rem) { 

  .gallery-component-image {
    aspect-ratio: 1/1;
    height: 100%;
  }
  .grid-item {
    width: fit-content;

  }
}

</style>