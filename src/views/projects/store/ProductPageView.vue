<template>
    <div class="background">
        <div class="product-information-area">
            <div class="grid-container">
                <div class="product-image-container">
                    <div class="left-align-back-link">
                        <RouterLink class="links-black"
                            to="/projects/store/store-prototype-made-in-vuejs-and-typescript">
                            Back to product selection</RouterLink>
                    </div>
                    <img class="gallery-component-image" :src="getImage()" :alt="itemName">
                </div>
                <div class="product-details">
                    <h1>{{ itemName }}</h1>
                    <ul class="no-bullets">
                        <!--
                        <li>
                            <span class="product-subtitle-font">Product ID:</span> {{ productId }}
                        </li>
                        -->
                        <li>
                            <span class="product-subtitle-font">Product:</span> {{ itemName }}
                        </li>
                        <li>
                            <span class="product-subtitle-font">Price:</span> €{{
                        searchInventoryById(itemIdentificationNumber).price }}
                        </li>
                        <br>
                        <li>
                            <span class="product-subtitle-font">Description</span><br>
                            {{ searchInventoryById(itemIdentificationNumber).description }}
                        </li>
                    </ul>
                    <div style="padding-top: 1rem;">
                        <button style="margin-right: 0.5em;" @click="addToCartClicked(productId);"
                            class="add-to-cart-button">
                            Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <CheckOut :propProductPageAddItemToCart="choiceId"></CheckOut>
        <!-- 
            {{ getImage().imageSrc }}
            {{ cart }} 
        -->

    </div>
</template>

<script>
import "@/assets/globalCSS.css";
import CheckOut from "@/components/StorePrototype/CheckOut.vue";
import { productInventory } from '@/components/StorePrototype/productInventoryOptionsData.ts';

import { useCartStore } from '@/components/StorePrototype/useCounterStore.js';


export default {

    components: {
        CheckOut,
    },

    data() {
        return {
            choiceId: [],
            buttonCounter: 0,
            itemIdentificationNumber: parseInt(this.$route.params.id), // the id is a string

            cart: [],
        };
    },
    created() {
        const cartStore = useCartStore();
        this.cart = cartStore.cart;

    },
    watch: {
        cart: {
            immediate: true,
            handler() {
                this.itemIdentificationNumber = parseInt(this.$route.params.id);
            },
        },
    },
    computed: {

        productId() {
            return this.$route.params.id;
        },
        itemName() {
            return this.$route.params.name;
        },
        /*
        itemImageSrc() {
            return this.$route.params.image;
        },
        itemPrice() {
            return this.$route.params.price;
        },
        */

    },


    methods: {

        getImage() {
            console.log(this.productId);
            //const productName = this.itemName;
            const product = this.productId;
            console.log(this.cart);
            //let product = this.cart.find(item => item.name === productName);
            let product2 = productInventory.find(item => item.id === parseInt(product));
            console.log("test", product2);

            let imageSrc = product2 ? product2.imageSrc : '';
            console.log(imageSrc);

            return imageSrc;
        },

        goBackOnePage() {
            this.$router.go(-1); // Navigate back to the previous page
        },
        addToCartClicked(choiceId) {
            //console.log(choiceId)
            this.$emit('add-to-cart', choiceId);
            this.buttonCounter++;

            // emits the product to the checkout page to process it and reuse the same functions there
            // for handling data
            this.choiceId = [this.productId, this.buttonCounter];
            //console.log(choiceId)

            //pinia -- experimenting here
            //const cartStore = useCartStore();
            //cartStore.addToCart(choiceId);
            //console.log(this.searchInventoryById(choiceId))
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

.left-align-back-link {
    padding-left: 0.1rem;
    padding-bottom: 2rem;
    text-align: left;
}

.links-black {
    font-size: 0.8rem;
    text-align: left;

}

.product-subtitle-font {
    font-weight: bold;
    font-size: 1.25rem;
}

.no-bullets {
    list-style-type: none;
}

.add-to-cart-button {
    background: rgb(244, 67, 54);

    padding: 0.5rem 2rem 0.5rem 2rem;
    border-radius: 1rem;
    font-size: 1.1rem;
    border: none;
    color: #ffffff;
    cursor: pointer;
}

.add-to-cart-button:hover {
    background: rgb(204, 3, 0);
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
</style>@/components/StorePrototype/productInventoryOptionsData@/components/StorePrototype/useCounterStore.js