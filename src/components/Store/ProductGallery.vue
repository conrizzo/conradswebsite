<template>
  <div class="centerAll">
    <div class="image-gallery">
      <h1>MAKE A SELECTION</h1>
      <div class="gallery-button-left" @click="changeImageArray('left')">&lt;</div>

      <div class="image-gallery-grid-container">
        <div v-for="(item, index) in productInventoryArray.slice(0, 4)" :key="item.id" class="grid-item">
          <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
          <figcaption>{{ item.name }} €{{ item.price }}</figcaption>
          <button @click="showArray(index, item.id);" class="clean-button">Add to cart</button>
        </div>
      </div>

      <div class="gallery-button-right" @click="changeImageArray('right')">></div>
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
    productInventory[0].imageSrc = require('@/images/second_coffee.jpg');
    productInventory[1].imageSrc = require('@/images/coffee_food.jpg');
    productInventory[2].imageSrc = require('@/images/diffBird.jpg');
    productInventory[3].imageSrc = require('@/images/cake.jpg');
    productInventory[4].imageSrc = require('@/images/purple_cake.jpg');
    return {
      imageArrayChoice: null,
      // This imports an array of product inventory objects ---- productInventoryOptionsData.ts
      productInventoryArray: productInventory,
    };
  },
  mounted() {
    // Set the initioanl image array to the galleryItems array
    this.imageArrayChoice = this.productInventoryArray[0]

  },
  methods: {
    showArray(selectionChoiceFromArray = null, choiceId = null) {

      if (selectionChoiceFromArray === null || choiceId === null) {
        return
      }
      const selectedItem = selectionChoiceFromArray;
      this.$emit('add-to-cart', selectedItem, choiceId);
    },
    /*
            handleAddToCart(index) {
              //const selectedItem = this.imageArrayChoice[index];
              //this.$emit('add-to-cart', index);
              
            },
    */
    // This method will change the image array to the one passed in
    changeImageArray(choice) {
      const lastIndex = this.productInventoryArray.length - 1;

      if (choice === 'left') {
        const lastItem = this.productInventoryArray.pop();
        this.productInventoryArray.unshift(lastItem);
        this.imageArrayChoice = this.productInventoryArray[0];
      } else if (choice === 'right') {
        const firstItem = this.productInventoryArray.shift();
        this.productInventoryArray.push(firstItem);
        this.imageArrayChoice = this.productInventoryArray[lastIndex];
      }
    }
  }
  // Component logic goes here
}
</script>
      
<style scoped>
h1 {
  padding-top: 0.5em;
  font-size: 0.9em;
  margin-bottom: 0em;
  text-align: left;
}

.centerAll {
  justify-content: center;
  display: flex;
  background: rgb(255, 255, 255);

}

.gallery-button-left {
  position: absolute;
  font-size: 4em;
  top: 43%;
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
  top: 43%;
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



.gallery-component-image {
  border-radius: 1em;
  padding: 0em;
  margin: 0em;
  background-color: #ffffff;
  transition: filter 0.5s ease;
  width: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
}

.gallery-component-image:hover {
  filter: brightness(90%);
  cursor: pointer;
}


@media (max-width: 76rem) {

  .gallery-button-left,
  .gallery-button-right {
    display: none;
  }

}

@media (max-width: 71rem) {


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

  .image-gallery-grid-container {}


  .grid-item {
    width: fit-content;
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


}
</style>