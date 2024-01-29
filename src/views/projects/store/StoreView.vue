<template>
  <div class="store-background">
    <div class="main-banner">
      <div class="main-banner-text-container">
        <div style="z-index: 3; position: relative;">
          <h1> Buy awesome things here...</h1>
          <span class="main-banner-sub-text">
            A simple modular store layout made in Vue.js and TypeScript.
          </span>
        </div>
        <div style="z-index: 3; position: relative; padding: 0.5rem;">
          <SearchFunction />
        </div>
      </div>
    </div>
    <ProductGallery @add-to-cart="updateValue" />   
    <CheckOut :propProductIndexInGallery="propIndex" :propProductIdentificationNumber="propProduct" :propUpdate="updated"/>     
    <div style="background: #fff; display: inline-block;">
      <button @click="showDiagramAndSourceCode, toggleDiagramModal()" class='clean-button'>{{
        showDiagramButtonText }}</button>
    </div>
  </div>  
  <div v-if="showDiagramModal">
    <DiagramModal @close="toggleDiagramModal" />    
  </div>
 
</template>

<script>
import ProductGallery from "@/components/Store/ProductGallery.vue";
import "@/assets/globalCSS.css";
import CheckOut from "@/components/Store/CheckOut.vue";
import DiagramModal from "@/components/Store/DiagramModal.vue";
import SearchFunction from "@/components/Store/SearchFunction.vue";
import ThreeWideGrid from "@/components/Store/ThreeWideGridProducts.vue";

export default {
  name: "StoreView",
  components: {
    ProductGallery, CheckOut, DiagramModal, SearchFunction,
  },
  data() {
    return {
      propProduct: 0,
      propIndex: 0,
      updated: false, //dummy value to force the child component watcher to update
      openDiagramAndSourceCodeLinks: false,
      showDiagramButtonText: "Show Diagram and Source Code",
      showDiagramModal: false,
    };
  },
  methods: {
    updateValue(productNumber, GalleryIndex) {
      this.propProduct = productNumber,
        this.propIndex = GalleryIndex;
      this.updated = !this.updated; // NOTE! This is a dummy value to force the child component watcher to update      
      // this.$emit('add-item-to-cart', newValue, newValue2);      
    },
    showDiagramAndSourceCode() {
      this.openDiagramAndSourceCodeLinks = !this.openDiagramAndSourceCodeLinks;
      if (this.openDiagramAndSourceCodeLinks) {
        this.showDiagramButtonText = "Hide Diagram and Source Code";
      } else {
        this.showDiagramButtonText = "Show Diagram and Source Code";
      }
    },
    toggleDiagramModal() {
      this.showDiagramModal = !this.showDiagramModal;
    },    
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
  text-align: center;
}

.store-background {
  background-color: #f5f5f5;
  padding: 2.5em 5em 5em 5em;
}
.main-banner-text-container {
  padding: 10em;
}
.store-show-diagram-button {
  margin: 1em;
  background: rgb(244, 67, 54);
  color: #fff;
}
.store-show-diagram-button:hover {
  background-color: #ff6c62;
  color: #fff;
}
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
</style>
