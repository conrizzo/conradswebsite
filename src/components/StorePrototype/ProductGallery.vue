<template>
  <div class="centerAll">
    <div class="image-gallery">

      <h1>MAKE A SELECTION</h1>
      <div class="gallery-button-left" @click="changeImageArray('left')">
        &lt;
      </div>

      <div class="image-gallery-grid-container">
        <div v-for="(item, index) in slicedProductInventoryArray" :key="item.id" class="grid-item">
          <router-link
            :to="{ name: 'ProductPageView', params: { id: item.id, name: item.name } }">
            <div class="img-wrapper">
              <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
            </div>
          </router-link>
      
          <figure-caption>{{ item.name }} €{{ item.price }}</figure-caption>
    
          <button type="button" @click="showArray(index, item.id);" class="add-to-cart-button">Add to cart</button>
        </div>
      </div>

      <div class="gallery-button-right" @click="changeImageArray('right')">
        >
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
    };
  },

  computed: {
    slicedProductInventoryArray() {
      const numColumns = 5;
      return this.productInventoryArray.slice(0, numColumns);
    }
  },
  methods: {
    showArray(selectionChoiceFromArray = null, choiceId = null) {

      if (selectionChoiceFromArray === null || choiceId === null) {
        return
      }
      //const selectedItem = selectionChoiceFromArray;
      this.$emit('add-to-cart', selectionChoiceFromArray, choiceId);
    },
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
  font-size: 2rem;
  margin-bottom: 0em;
  text-align: left;
}

.centerAll {
  justify-content: center;
  display: flex;
  background: rgb(255, 255, 255);
}

.clean-button{
  background: rgb(233, 233, 234);
  color: rgb(18,18,18);
}

.clean-button:hover{
  background: rgb(64, 64, 64);
  color: #fff;
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
  z-index: 3;
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
  padding-bottom: 1rem;
}

/* IMPORTANT FIX THIS */
.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1em;
  margin-bottom: 1em;
}

.grid-item {
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;  
}

.gallery-component-image {
  border-radius: .5rem;
  padding: 0em;
  margin: 0em;
  min-width: 256px;
  height: 256px;
  background-color: #ffffff;
  transition: filter 0.5s ease;
}

.gallery-component-image:hover {
  filter: brightness(90%);
  cursor: pointer;
}

.add-to-cart-button{
  background: rgb(244, 67, 54);
  
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

.add-to-cart-button:hover{
  background: rgb(204, 3, 0); 
}
/* 4 images wide is 76rem, 5 images is about 94rem */
@media (max-width: 94.5rem) {
  .gallery-button-left {
    display: none;
  }

  .gallery-button-right {
    top: 43%;
    left: 0em;
    width: 0.6em;

  }
}

@media (max-width: 94.5rem) {
  .image-gallery {
    max-height: 27.5rem;
    /* Adjust the maximum height as needed */
    overflow-x: auto;
    overflow-y: none;
    padding-left: .5rem;
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

figure-caption {
  text-align: center;
  padding: 0.5em;
  margin: 0em;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: bold;
  color: rgb(18, 18, 18);
  display: block;
}

/* Does image zoom effect - start */
.img-wrapper {
    display: inline-block;
    overflow: hidden;   
    border-radius: 0.5rem;
}

.img-wrapper img {
    transition: all .2s ease;
    vertical-align: middle;
}

img:hover {
    transform:scale(1.03);
    -ms-transform:scale(1.03); /* IE 9 */
    -moz-transform:scale(1.03); /* Firefox */
    -webkit-transform:scale(1.03); /* Safari and Chrome */
    -o-transform:scale(1.03); /* Opera */
}
/* Does image zoom effect - end */



</style>