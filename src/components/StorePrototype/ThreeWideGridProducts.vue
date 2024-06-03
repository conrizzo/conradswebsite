<template>
   
    <div class="centerAll">
    
                
                    <h1>Awesome Offers:</h1>
                
        
                
                <div class="image-gallery-grid-container">
                    
                    <div style="height: 512px; width: 256px; border: 1px solid black  ;border-radius: 1rem;" v-for="(item, index) in tempArray" :key="index">
                    <div style="color: #ffffff;">{{ item }}</div>
                    </div>
                
                </div>
  
       
    
    </div>
  </template>
      
  <script>
  
  import { productInventory } from './productInventoryOptionsData';
  
  export default {
  
  
    name: 'ProductGallery',
    components: {
  
    },
    props: {
      images: {
        type: Array,
        default: null,
      }
    },
    data() {
      return {
        // This imports an array of product inventory objects ---- productInventoryOptionsData.ts
        productInventoryArray: productInventory,
        tempArray: [ "Offer 1", "Offer 2", "Offer 3"],
      };
    },
    
    
    methods: {
      showArray(selectionChoice = null, choiceId = null) {
  
        if (selectionChoice === null || choiceId === null) {
          return
        }
        //const selectedItem = selectionChoiceFromArray;
        this.$emit('add-to-cart', selectionChoice, choiceId);
      },
     
    }
    // Component logic goes here
  }
  </script>
        
  <style scoped>
  h1 {
    padding-top: 0.5em;
    
    margin-bottom: 0em;
    margin: auto;
  }
  
  .centerAll {
    justify-content: center;
    display: flex;
    background: rgb(255, 255, 255);
    flex-direction: column;
  }
  
  
  
 
  
  
  
  /* IMPORTANT FIX THIS */
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1em;
    margin-bottom: 1em;
    max-width: 50%;
    margin: auto;
   
  }
  
  .grid-item {
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
  }
  
  .gallery-component-image {
    border-radius: 1em;
    padding: 0em;
    margin: 0em;
    min-width: 256px;
    height: 512px;
    background-color: #ffffff;
    transition: filter 0.5s ease;
    
  }
  
  .gallery-component-image:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
  
  @media (max-width: 76rem) {
    .gallery-button-left {
      display: none;
    }
  
    .gallery-button-right {
      top: 43%;
      left: 0em;
      width: 0.6em;
  
    }
  }
  
  @media (max-width: 76rem) {
    .image-gallery {
      max-height: 25em;
      /* Adjust the maximum height as needed */
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
    .image-gallery {
      scrollbar-width: none;
      /* Hide scrollbar for Firefox */
      -ms-overflow-style: none;
      /* Hide scrollbar for Internet Explorer and Edge */
      -webkit-overflow-scrolling: touch;
      /* Enable smooth scrolling on iOS devices */
      padding-bottom: 1em;
    }
  
    .image-gallery::-webkit-scrollbar {
      display: none;
      /* Hide scrollbar for Chrome, Safari, and Opera */
    }
  
    .image-gallery-grid-container {
      margin-left: 1.37em;
    }
  
    .grid-item {
      width: fit-content;
    }
  
    .gallery-button-right {
      top: 43%;
      left: 0em;
      width: 0.6em;
    }
  
    h1 {
      padding-left: 1.5em;
    }
  }
  
  
  figcaption {
    text-align: center;
    padding: 0.5em;
    margin: 0em;
    background: rgba(255, 255, 255, 0.8);
    font-size: 1em;
    font-weight: bold;
    color: rgb(18, 18, 18);
  }</style>