<template>
  
  <div class="centerAll hidden" ref="content" :class="{ 'show': isContentVisible }">
        <div class="image-gallery">     
        
            <div class="gallery-header">
                <h1 class="gallery-styling-h1-span">Good choices</h1>
            </div>

        <div class="image-gallery-grid-container">
            
            <div v-for="item in imageArrayChoice" :key="item.id" :title="item.id" class="grid-item">
                <div>
                <h2>{{item.altText}}</h2>
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
        const coffeeImage = require('@/images/second_coffee.jpg');
        const coffeeFood = require('@/images/coffee_food.jpg');
        const diffusionBird = require('@/images/diffBird.jpg');
      return {       
        isContentVisible: false,
        imageArrayChoice: null,
        imgArrayOfArrays: [
            [
              { id: 1, imageSrc: coffeeFood, altText: "Good Food!", caption: "Food!" },
              { id: 2, imageSrc: coffeeImage, altText: "Coffee", caption: "Coffee!" },
              { id: 3, imageSrc: diffusionBird, altText: "Bird", caption: "A bird!" },
              { id: 4, imageSrc: coffeeImage, altText: "Tischtennis", caption: "Coffee!" },
              
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
          threshold: 0.5, // Trigger when 50% of the element is visible
        };
        // Intersection Observer API -- this is used to load the handleIntersection method which
        // loads items on the screen as they are scrolled to with a transition effect.
        const observer = new IntersectionObserver(this.handleIntersection, options);

        observer.observe(this.$refs.content);
   
     
    },
    methods: {
      handleIntersection(entries) {
      entries.forEach(entry => {
        console.log(entry);
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

  h1{
    font-size: 1.5em;     
  }

  h2{
    text-align: left;
    padding-left: 0.33em;
    font-size: 1em;
  }
  .gallery-styling-h1-span{
    text-align: left;
  }

  .gallery-header {
  display: flex;
  align-items: flex-start;
}
  
    .centerAll{
        justify-content: center;
        display: flex;    
        padding-bottom: 1em;
       
    }
  
  
  .image-gallery {
    margin: 0 auto;
    position: relative;
    background: rgb(255, 255, 255);
    padding: 1em;    
    display: flex;
    flex-direction: column;
   
  }
  
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
    
    margin-bottom: 1em;
  }
  
  .grid-item {
    
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.05);
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
  .gallery-component-image:hover{
    filter: brightness(90%); 
  }
  
  
  @media (max-width: 79rem) {
  
    .gallery-button-left,
    .gallery-button-right {
      display: none;
    }
  
  }
  
  @media (max-width: 79rem) {
  
    .image-gallery-grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .gallery-component-image {
      background-color: #ffffff;
    }
  
    
  
  }
  
  @media (max-width: 53rem) {
  
    .image-gallery-grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
  }
  
  @media (max-width: 35rem) {
  
    .image-gallery-grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
  
    }
  
    .grid-item {
      width: fit-content;
    }
  
    
  
  }
  
  
  figcaption {
    text-align: center;
    padding: 0.5em;
    margin: 0em;
  
    background: rgba(0, 0, 0, 0);
    font-size: 0.8em;
    font-weight: bold;
    color: rgb(18, 18, 18);
  
  }
  </style>