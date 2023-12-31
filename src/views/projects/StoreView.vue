<template>
  <div class="store-background">
    <div class="main-banner">
      <div class="main-banner-text-container">
        <h1> Buy awesome things here...</h1>
        <p class="main-banner-sub-text">A simple modular store layout made in Vue.js and TypeScript</p>
      
      </div>
    </div>
    <!-- <button @click="makeInventory">Make Inventory</button> -->
    <!-- <button @click="resetInventory()">Reset</button> -->
    <ProductGallery @add-to-cart="updateValue"></ProductGallery>
    <CheckOut :propValue="propValue" :propValue2="propValue2" :propUpdate="updated"></CheckOut>
    <!-- <CheckOut :active-selection="activeSelection"></CheckOut> -->
    <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store">View the component and TypeScript source code on GitHub</a><br>
    <a class="text-links" href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreView.vue">Store page view</a><br>
    <a class="text-links" href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreCheckOutView.vue">Checkout page view</a>
  </div>
</template>

<script>
import ProductGallery from "@/components/Store/ProductGallery.vue";
// import { Inventory } from "@/components/Store/InventoryData.ts";
// import { productInventory } from '@/components/Store/productInventoryOptionsData';
import "@/assets/globalCSS.css";

import CheckOut from "@/components/Store/CheckOut.vue";

export default {
  name: "StoreView",
  components: {
    ProductGallery, CheckOut
  },
  data() {
    return {
      propValue: 0,
      propValue2: 0,
      updated: false, //dummy value to force the child component watcher to update

    };
  },

  methods: {
    updateValue(newValue, newValue2) {
      this.propValue = newValue,
        this.propValue2 = newValue2;
      this.updated = !this.updated; // NOTE! This is a dummy value to force the child component watcher to update
      console.log("VALUE", this.propValue, this.propValue2);
      // this.$emit('add-item-to-cart', newValue, newValue2);      
    },

   
    // Your methods here    
  }
}
</script>

<style scoped>
h1 {
  font-size: 4em;
}
.main-banner {
  background: linear-gradient(to right, orange, red, pink);
  /* Replace with your desired background color */
  color: white;
  /* Replace with your desired text color */
  text-align: center;
  position: relative;
}

.main-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%,
      transparent 25%, transparent 70%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.1) 100%, transparent 100%, transparent);
}

.main-banner-sub-text {
  font-size: 0.8em;
}

.store-background {
  background-color: #f5f5f5;
  padding: 2.5em 5em 5em 5em;
}

.main-banner-text-container {
  padding: 10em;
}

@media screen and (max-width: 65rem) {}

@media screen and (max-width: 60rem) {

  .store-background {
    background-color: #f5f5f5;
    padding: 1em;
  }

  .main-banner-text-container {
    padding: 1em;
  }

  h1 {
    font-size: 2em;
    padding: 0.5em;
  }
}

/* Your styles here */</style>
