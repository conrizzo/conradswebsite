<template>
    <div class="background">
    <div class="product-information-area">
      <div class="grid-container">
        <div class="product-image-container">
          <img class="gallery-component-image" :src="itemImageSrc" :alt="itemName">
        </div>
        <div class="product-details">
          <h1>{{ itemName }}</h1>
          <p>Product ID: {{ productId }}</p>
          <p>Product: {{ itemName }}</p>
          <p>Price: €{{ itemPrice }}</p>
           <div>
            <!--<button style="margin-right: 0.5em;" @click="addToCartClicked(0, productId);" class="clean-button">Add to cart</button> -->
            <button style="" class="clean-button" @click="goBackOnePage">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import "@/assets/globalCSS.css";



export default {
    components: {
      
    },
    data() {
        return {
            activeSelection: null,
        };
    },
   

    computed: {
        productId() {
            return this.$route.params.id;
        },
        itemName() {
            return this.$route.params.name;
        },
        itemImageSrc() {
            return this.$route.params.image;
        },
        itemPrice() {
            return this.$route.params.price;
        }
    },

    methods: {
        goBackOnePage() {
            this.$router.go(-1); // Navigate back to the previous page
        },
        addToCartClicked(selectionChoiceFromArray, choiceId) {
            this.$emit('add-to-cart', selectionChoiceFromArray, choiceId);
        },
    }

}
</script>
  
<style scoped>
.background {
    background-color: #f5f5f5;
    padding: 2em;
    
}

.gallery-component-image {
    border-radius: 1em;
    padding: 0em;
    margin: 0em;
    background-color: #ffffff;   
}

.product-information-area{
    background: rgb(255, 255, 255);
    padding: 1em;
    display: flex;
    justify-content: center;
}

.product-image-container{
 padding: 1em;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  max-width: 40em;
}

.product-image-container {
  grid-column: 1 / 2;
}

.product-details {
    text-align: left;
    margin-left: 1em;
    padding: 0.25em;
    grid-column: 2 / 3;
}

@media screen and (max-width: 50rem) {
    .grid-container {
        grid-template-columns: 1fr;
    }
    .product-image-container {
        grid-column: 1 / 2;
    }
    .product-details {
        grid-column: 1 / 2;
    }
    
}


</style>