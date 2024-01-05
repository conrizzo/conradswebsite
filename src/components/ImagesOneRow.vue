<template>
  <div class="centerAll">

    <div class="image-gallery">
      <!-- 
          This is an education thing to write about the h1 tag directly below this! 
          Doing inline block to underline only the text in a span, then aligning the outside text to the left works nicely!
      -->
      <h1><span class='gallery-styling-h1-span'>MAKE A SELECTION</span></h1>
      <div class="gallery-button-left" @click="changeImageArray('left')">&lt;</div>
      <div class="image-gallery-grid-container">
        <div v-for="item in imageArrayChoice" :key="item.id" class="grid-item">
          
              <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
              <figcaption>{{ item.caption }}</figcaption>
          
        </div>
      </div>
      <div class="gallery-button-right" @click="changeImageArray('right')">></div>
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
        const coffeeFood = require('@/images/coffee_food.jpg');
        const diffusionBird = require('@/images/diffBird.jpg');
      return {       
        imageArrayChoice: null,
        imgArrayOfArrays: [
            [
              { id: 1, imageSrc: coffeeFood, altText: "Image 1", caption: "Delicious Food!" },
              { id: 2, imageSrc: coffeeImage, altText: "Image 2", caption: "Fresh Coffee!" },
              { id: 3, imageSrc: diffusionBird, altText: "Image 3", caption: "Look, a bird!" },
              { id: 4, imageSrc: coffeeImage, altText: "Image 4", caption: "More Coffee!" },
           
              // Add more items as needed :)
            ],
        ]
        
      
      };
    },
    mounted() {
      // Set the initioanl image array to the galleryItems array
      this.imageArrayChoice = this.imgArrayOfArrays[0]
     
    },
    methods: {
      // This method will change the image array to the one passed in
      changeImageArray(choice) {
  
        const lastIndex = this.imgArrayOfArrays.length - 1;
        const currentIndex = this.imgArrayOfArrays.indexOf(this.imageArrayChoice);
        
        function arraymove(arr, fromIndex, toIndex) {
          let element = arr[fromIndex];
          arr.splice(fromIndex, 1);
          arr.splice(toIndex, 0, element);
          return arr;
        }      
  
        if (choice === 'left') {
          arraymove(this.imgArrayOfArrays[currentIndex],0,this.imgArrayOfArrays[currentIndex].length);
          if (currentIndex === 0) {
            this.imageArrayChoice = this.imgArrayOfArrays[lastIndex];
          } else {
            this.imageArrayChoice = this.imgArrayOfArrays[currentIndex - 1];
          }
        } else if (choice === 'right') {
          arraymove(this.imgArrayOfArrays[currentIndex],this.imgArrayOfArrays[currentIndex].length-1,0);
          if (currentIndex === lastIndex) {
            this.imageArrayChoice = this.imgArrayOfArrays[0];
          } else {
            this.imageArrayChoice = this.imgArrayOfArrays[currentIndex + 1];
          }
        }
      }
    },
    // Component logic goes here
  }
  </script>
    
  <style scoped>
  h1{
    font-size: 0.9em; 
    margin-bottom: 0.5em;
    text-align: left;  
  }
  .gallery-styling-h1-span{    
    display: inline-block;
    border-bottom: 2px solid rgb(255, 89, 89);
    background: #fff;
    
    padding: 3px;
    padding-bottom: none;
    border-bottom: none;
  }

  

  .centerAll{
    justify-content: center;
    display: flex;  
    background:rgb(255, 255, 255);
    
  }
  
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
    padding: 0em;
    
   
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
  
  .grid-item:hover { 
    cursor: pointer;
  }
  
  .gallery-component-image {
    border-radius: 1em;
    padding: 0em;
    margin: 0em;
    background-color: #ffffff;
    transition: filter 0.5s ease;
  }
  .gallery-component-image:hover{
    filter: brightness(90%); 
  }
  
  
  @media (max-width: 76rem) {
  
    .gallery-button-left,
    .gallery-button-right {
      display: none;
    }
  
  }
 
  @media (max-width: 71rem) {
   
  
    .image-gallery{
        max-height: 25em; /* Adjust the maximum height as needed */
        overflow-x: auto;
        overflow-y: none; 
        padding-left: 1em;
           
    }
    .image-gallery-grid-container {
     margin: 0em;
     padding: 0em;
    }
  
  }
  
  @media (max-width: 40rem) {
  
    .image-gallery-grid-container {
     
  
    }
    
  
    .grid-item {
      width: fit-content;
    }
  
    
  
  }
  
  
  figcaption {
    text-align: center;
    padding: 0.5em;
    margin: 0em;
  
    background: rgba(255, 255, 255, 0.8);
    font-size: 0.8em;
    font-weight: bold;
    color: rgb(18, 18, 18);
    
  
  }
  </style>