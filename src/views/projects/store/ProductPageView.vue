<template>
    <div class="background">
        <div class="product-information-area">
            <div class="grid-container">
                <div class="product-image-container">
                    <div class="left-align-back-link">
                        <RouterLink class="links-black" to="/projects/store/store">Back to product selection</RouterLink>
                    </div>
                    <img class="gallery-component-image" :src="itemImageSrc" :alt="itemName">
                </div>
                <div class="product-details">
                    <h1>{{ itemName }}</h1>
                    <ul class="no-bullets">
                        <li>
                            <span class="bold">Product ID:</span> {{ productId }}
                        </li>
                        <li>
                            <span class="bold">Product:</span> {{ itemName }}
                        </li>
                        <li>
                            <span class="bold">Price:</span> €{{ searchInventoryById(itemIdentificationNumber).price }}
                        </li>
                        <li>
                            <span class="bold">Description:</span> 
                            {{ searchInventoryById(itemIdentificationNumber).description }}
                        </li>
                    </ul>
                    <div style="padding-top: 1rem;">
                        <button style="margin-right: 0.5em;" @click="addToCartClicked(productId);" class="clean-button">
                            Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <CheckOut :propProductPageAddItemToCart="choiceId"></CheckOut>
    </div>
</template>
  
<script>
import "@/assets/globalCSS.css";
import CheckOut from "@/components/Store/CheckOut.vue";
import { productInventory } from '@/components/Store/productInventoryOptionsData.ts';

export default {

    components: {
        CheckOut,
    },

    data() {
        return {
            choiceId: [],
            buttonCounter: 0,
            itemIdentificationNumber: parseInt(this.$route.params.id),
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
        },
    },

    methods: {

        goBackOnePage() {
            this.$router.go(-1); // Navigate back to the previous page
        },

        addToCartClicked(choiceId) {
            console.log(choiceId)
            //this.$emit('add-to-cart', choiceId);
            this.buttonCounter++;
            this.choiceId = [this.productId, this.buttonCounter];
        },
        searchInventoryById(id) {
            return productInventory.find(item => item.id === id);
        }
    }
}
</script>
  
<style scoped>
h1 {
    padding-left: 0em;
    margin-left: 0em;
    text-align: left;
    line-height: 1.25em;
    padding-bottom: 1em;
}
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
.product-information-area {
    background: rgb(255, 255, 255);
    padding: 1em;
    display: flex;
    justify-content: center;
}
.product-image-container {
    padding: 1em;
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 60em;
}
.product-image-container {
    grid-column: 1 / 2;
}
.product-details {
    text-align: left;
    margin-left: 2rem;

    padding-top: 4.5rem;
    grid-column: 2 / 3;
}
/* This is a very nice way to align text to the left side of a centered image 
   Set the margin-right to push the text to the starting left side area of the centered image.
*/
.left-align-back-link {
    padding-left: 0.1rem;
    padding-bottom: 2rem;
    text-align: left;
}
.links-black {
    font-size: 0.8rem;
    text-align: left;

}
.bold {
    font-weight: bold;
}
.no-bullets {
    list-style-type: none;
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
        padding-top: 1em;
    }

}
</style>