<template>
    <!-- Logic for saved shopping cart values and text to display -->
    <div class="shopping-cart-area">
        <div class="grid-shopping-cart">
            <div class="grid-shopping-cart-left">
                <div class="shopping-cart-title" :style="cartTitleStyle">
                    <div v-if="runningTotal === 0" class="center-element">
                        <h2>No items selected</h2>
                        <svg style="width: 32px; height: 32px; transition: transform 0.5s;" viewBox="0 0 32 32" fill="none"
                            stroke="rgb(244, 67, 54)" stroke-width="2">
                            <polyline points="8 12 16 20 24 12" />
                        </svg>
                    </div>
                    <div class="shopping-cart-border" v-else-if="showLastAddedItem !== ''">
                        <h2>Shopping Cart</h2>
                        

                        <div>
                            <span>Last added <span style="color: rgb(244, 67, 54);">{{ showLastAddedItem }}</span> to your
                                cart!</span><br>
                            Product ID: {{ propProductIndexInGallery }} Item Position: {{ propProductIdentificationNumber }}
                        </div>

                    </div>
                    <div class="shopping-cart-border" v-else>
                        <h2 style="">Shopping Cart</h2>
                    </div>
                </div>
                <!-- Each cart item is outputted here with v-for loop -->
                <transition-group>
                    <main v-for="(item, index) in userCart" :key="item.id" class="cart-item">
                        <div class="each-item-area-formatting">
                            <div class="cart-image-container">
                                <router-link
                                    :to="{ name: 'ProductPageView', params: { id: item.id, name: item.name, image: item.imageSrc, price: item.price } }">

                                    <img class="each-item-in-cart-image" :src="item.imageSrc" :alt="item.imageSrc"
                                        width="128" height="128">

                                </router-link>
                            </div>
                            <div class="name-price-cart-formatting">
                                <span class="product-name">
                                    {{ item.name }}
                                </span>
                                <br>
                                <span class="cart-item-price-formatting">
                                    €{{ item.price }}
                                </span>
                                <br>
                                Quantity:
                                <div style="display: flex;">
                                    <button @click="handlePlusMinusIncrementDecrementButtons(item, -1)"
                                        style="font-size: 1.25rem; margin-right: 0.1rem; width: 1.7rem; cursor: pointer;">-</button>
                                    <input type="number" v-model="item.quantity" min="0" max="100" step="1"
                                        @input="updateQuantityInCart(item)"
                                        style="width: 3.2rem; font-size: 1.25rem; border-radius: 0.25rem; border-width: 1px;">
                                    <button @click="handlePlusMinusIncrementDecrementButtons(item, 1)"
                                        style="font-size: 1.25rem; margin-left: 0.1rem; width: 1.7rem; cursor: pointer;">+</button>
                                </div>

                                <br>
                                Item Subtotal ({{ item.quantity }} items): €{{ Math.abs((item.quantity *
                                    item.price).toFixed(2)) }}<br>
                                <button @click="removeItem(index)"
                                    class="clean-button shopping-modified-clean-button">Delete</button>
                            </div>
                        </div>
                    </main>
                </transition-group>
            </div>
            <div class="grid-shopping-cart-right">
                <div class="special-offer">

                    <h2>Special Offer!</h2>
                    <div>
                        <p style="text-align: left;" v-if="totalQuantity >= 5">With 5 or more items in the shopping basket a
                            10% discount has been applied!</p>
                        <p v-else>Buy 5 or more items and get 10% off!</p>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div style="margin: 0 auto;">
                <div :class="['total-cost-area', { 'lower-height-total-cost-area': totalQuantity < 5 }]">
                    <span v-if="totalQuantity < 5"><b>Subtotal ({{ totalQuantity }} items): €{{
                        Math.abs(runningTotal.toFixed(2)) }} </b></span>
                    <span v-else-if="totalQuantity > 4"><b>Subtotal ({{ totalQuantity }} items): <s>€{{
                        Math.abs(runningTotal.toFixed(2)) }}</s></b></span>
                    <transition>
                        <div class="discount-text" v-if="totalQuantity >= 5">With 10% discount: ({{ totalQuantity }}
                            items):
                            <span>€{{ Math.abs((runningTotal * .9).toFixed(2)) }}</span>
                        </div>
                    </transition>
                </div>


                <div class="bottom-checkout-button-container">

                    <button v-show="runningTotal > 0" @click="emptyShoppingCart()"
                        class="clean-button button-at-bottom-right-space">Empty Cart
                    </button>

                    <div v-if="showGoToCheckOutButton">
                        <RouterLink to="/projects/store/checkout">
                            <button v-show="runningTotal > 0" class="clean-button">Go to Checkout
                            </button>
                        </RouterLink>
                    </div>

                    <div v-else>
                        <RouterLink class="button-at-bottom-right-space"
                            to="/projects/store/store-prototype-made-in-vuejs-and-typescript">
                            <button class="clean-button">Go Back
                            </button>
                        </RouterLink>
                        <button v-show="runningTotal > 0" class="clean-button">Purchase Items
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>  

<script>
// import ProductGallery from "@/components/Store/ProductGallery.vue";
import { Inventory } from "@/components/Store/InventoryData.ts";
import { productInventory } from '@/components/Store/productInventoryOptionsData';

import { useCounterStore } from './useCounterStore.js';
import { useCartStore } from './useCounterStore.js';
//import { defineStore } from 'pinia'
//import { useCounterStore } from './UseStore.vue';
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
/*
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
*/

// make cookies for the products in the user cart
import VueCookies from 'vue-cookie';

export default {
    name: "StoreView",
    components: {
        //ProductGallery,
    },
    props: {
        propProductIdentificationNumber: {
            type: Number,
            default: 0
        },
        propProductIndexInGallery: {
            type: Number,
            default: 0
        },
        // this propUpdate is exclusively used to update all the calculations as a watcher between components
        propUpdate: {
            type: Boolean,
            default: false,
        },
        // removes this button from the StoreCheckOutView page, is default true on the StoreView (Main page)
        showGoToCheckOutButton: {
            type: Boolean,
            default: true,
        },
        // Prop of adding item using each individual product in ProductPageView.vue
        propProductPageAddItemToCart: {
            type: Array,
            required: false,
        }

    },
    // Your script logic here
    data() {
        return {
            counter: 0,

            storeInventory: new Inventory(),
            userCart: [],
            runningTotal: 0,
            lastItemAddedToCart: null,
            item: {
                quantity: 0, // Initialize with your default quantity
            }

        };
    },
    created() {
        // create the users cart from the store
        const counterStore = useCounterStore();
        this.counter = counterStore.count;
        this.userCart = useCartStore().cart;
    },
    mounted() {
        this.showLastAddedItem;

        //console.log(this.lastItemAddedToCart);
        this.makeInventory();
        // NOTE: There is definitely a better way to solve this problem than this, but for now
        // This line of code below updates the runningtotal of the local items in cart automatically.
        this.runningTotal = this.userCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    },
    // This solves the issue I had with the architecture, didn't expect to use a watcher here.
    watch: {
        // this watches for user adding item to cart from the ProductPageView.vue
        // Checks for quantity of item clicks, and which ID the item has
        propProductPageAddItemToCart() {
            this.handleAddItemToCart(0, parseInt(this.propProductPageAddItemToCart[0]));
        },
        propUpdate() {
            this.addItemToCart();
        },
        // watch userCart array for changes to add or remove local cookies of what is in the cart
        // doesnt use cookies anymore - used store instead
        userCart: {
            deep: true, // Watch for changes in nested properties of userCart
            handler(newCart) {
                //VueCookies.set('userCart', JSON.stringify(newCart));

                const cartStore = useCartStore();
                cartStore.setCart(newCart);

            },
        },
    },
    computed: {
        cartTitleStyle() {
            if (this.showLastAddedItem !== '') {
            return {};
            } else {
            return { paddingBottom: '0rem', minHeight: '3rem' };
            }
        },
        itemTotal() {
            return this.userCart.map(item => Math.abs((item.quantity * item.price).toFixed(2)));
        },

        totalQuantity() {
            return this.userCart.reduce((total, item) => total + item.quantity, 0);
        },
        showLastAddedItem() {
            const lastItem = this.userCart.find(item => item.id === this.propProductIndexInGallery)?.name || '';

            const cartStore = useCartStore();
            cartStore.setLastItemAdded(lastItem);

            return lastItem;
        },
        lastAddedItem() {
            const cartStore = useCartStore();
            return cartStore.getLastItemAdded;
        },
        itemQuantities() {
            const quantities = {};
            for (const item of this.userCart) {
                if (item.id in quantities) {
                    quantities[item.id].quantity++;
                } else {
                    quantities[item.id] = {
                        quantity: 1,
                        name: item.name,
                        price: item.price
                    };
                }
            }
            return quantities;
        }
    },

    methods: {
        increment() {
            const counterStore = useCounterStore();
            counterStore.increment();
            this.counter = counterStore.count;
        },

        addItemToCart() {
            // Invoke the handleAddItemToCart method with propProductIdentificationNumber and propProductIndexInGallery
            this.handleAddItemToCart(this.propProductIdentificationNumber, this.propProductIndexInGallery);
        },

        removeItemFromCartIfQuantityIsZero(item) {
            if (item.quantity === 0) {
                this.removeItem(this.userCart.findIndex(cartItem => cartItem.id === item.id));
            }
        },
        handlePlusMinusIncrementDecrementButtons(item, increment) {
            const newQuantity = item.quantity + increment;
            if (newQuantity >= 0 && newQuantity <= 100) {
                item.quantity = newQuantity;
                this.updateQuantityInCart(item);
            }
            // only runs if the quantity is 0
            this.removeItemFromCartIfQuantityIsZero(item);
        },

        updateQuantityInCart(item) {
            const matchingCartItem = this.userCart.find(cartItem => cartItem.id === item.id);
            if (matchingCartItem) {
                matchingCartItem.quantity = item.quantity;
                // reduce function is interesting!
                this.runningTotal = this.userCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
                /* How to do this reduce function without reduce --- 
                            function calculateRunningTotal(userCart) {
                            let runningTotal = 0;
                            for (const cartItem of userCart) {
                              runningTotal += cartItem.price * cartItem.quantity;
                            }
                            return runningTotal;
                            }
                            this.runningTotal = calculateRunningTotal(this.userCart);
                */
            }
            this.removeItemFromCartIfQuantityIsZero(item);
        },

        makeInventory() {
            // sets this local constant to the global TypeScript array of product inventory objects
            const inventory = this.storeInventory;
            // Loops through each item in the productInventory array and adds it to the inventory
            productInventory.forEach((item) => {
                inventory.addItem(item);
            });
            // sets store inventory to the updated inventory object
            this.storeInventory = inventory;
            // gets the items available, this is just for testing, shows them in the console
            // const items = inventory.getItems();            
        },

        resetInventory() {
            this.storeInventory = new Inventory();
        },

        handleAddItemToCart(selectedItem, actualProductID) {

            if (selectedItem === null && actualProductID !== null) {
                const matchingItemId = this.storeInventory.getItems().find(item => item.id === actualProductID)
                this.runningTotal += matchingItemId.price;
                this.addItemToShoppingCartIfNotAlreadyThere(matchingItemId);
                return
            }
            // The this.storeInventory.getItems().length === 0 is to make sure the inventory is not empty
            if (selectedItem === null || actualProductID === null || this.storeInventory.getItems().length === 0) {
                return
            }
            //console.log("TEST", this.storeInventory.getItems()[selectedItem]);
            const matchingItemId = this.storeInventory.getItems().find(item => item.id === actualProductID)
            this.runningTotal += matchingItemId.price;
            // looks for the product ID that is scrolled in the gallery and matches it to the product ID in the inventory
            //console.log("TEST", matchingItemId);
            this.addItemToShoppingCartIfNotAlreadyThere(matchingItemId);
        },

        addItemToShoppingCartIfNotAlreadyThere(item) {
            if (item === null) {
                return
            }
            // Checks that item doesnt exist in the cart already
            const itemIndex = this.userCart.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex === -1) {
                item.quantity = 1;
                this.userCart.push(item);
            } else {
                this.userCart[itemIndex].quantity++;
                //console.log("TEST", this.userCart)
            }
        },

        emptyShoppingCart() {
            this.userCart = [];
            this.runningTotal = 0;
        },

        removeItem(index) {
            // guard statement 
            if (index === null || index === undefined || index < 0) {
                return
            }
            this.runningTotal = this.runningTotal - this.userCart[index].price * this.userCart[index].quantity;
            this.userCart.splice(index, 1);
        }
    }
}
</script>  

<style scoped>
h1 {
    font-size: 4em;
}

.shopping-cart-area {
    background-color: #ffffff;
    padding: 2em 2em 0.5em 2em;
    margin-top: 2em;
    margin-bottom: 0em;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.grid-shopping-cart {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0em;
}

.grid-shopping-cart-left {
    grid-column: 1;
}

.grid-shopping-cart-right {
    grid-column: 2;
}

.cart-item {
    text-align: left;
}

.shopping-modified-clean-button {
    background-color: #f44336;
    float: inline-start;
    color: white;
    border: none;
    border-radius: 0.5em;
    margin-left: 0rem;
}

.shopping-modified-clean-button:hover {
    background-color: #ff6c62;
}


.name-price-cart-formatting {
    display: inline-block;
    padding-left: 1em;
}

.each-item-area-formatting {
    border-bottom: 1px solid #f44336;

    padding: 1rem 2rem 1rem 2rem;
    display: flex;
    background: rgb(255, 255, 255);
}

.shopping-cart-title {
    text-align: left;    
    padding-left: 1em;
    padding-right: 1em;
    min-height: 7rem;
    font-size: 1.1em;
    padding-bottom: 2rem;
    border-bottom: 1px solid #f44336;
}
.center-element{
    display: flex; align-items: center;
}

.each-item-in-cart-image {
    border-radius: 1em;
    min-width: 128px;
}

.product-name {
    font-size: 1.1em;
}

.shopping-cart-border {
    /* border-bottom: 1px solid rgb(218, 220, 224); */
    background: rgb(255, 255, 255);
    margin-bottom: 0em;
}

.special-offer {
    color: #fff;
    background: rgb(244, 67, 54);
    border-radius: 1em;
    max-width: 20rem;
    max-height: 20em;
    margin: 0 auto;
    margin-top: 1em;
}

.special-offer p {
    font-size: 1rem;
    text-align: left;
    padding: 1em;
    font-style: italic;
}

.special-offer h2 {
    display: inline-block;
    border-bottom: 3px solid #ffffff;

    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.25rem;
    padding-top: 0.5rem;
    text-align: center;
}

.v-enter-active {
    transition: opacity 1s ease;
}

.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.cart-item-price-formatting {
    font-weight: 600;
    font-size: 1.1em;
}

.bottom-checkout-button-container {
    padding-top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.discount-text {
    font-size: 1.6rem;

}

.total-cost-area {
    height: 4.5em;
    padding-top: 3em;
}

.button-at-bottom-right-space {
    margin-right: 1rem;
}

@media screen and (max-width: 65rem) {
    .grid-shopping-cart {
        grid-template-columns: 1fr;
    }

    .grid-shopping-cart-right {
        grid-column: 1;
    }

}


@media screen and (max-width: 60rem) {
    .special-offer h2 {
        font-size: 1rem;
        padding-top: 0.5em;
    }

    .store-background {
        background-color: #f5f5f5;
        padding: 1em;
    }

    h1 {
        font-size: 2em;
        padding: 0.5em;
    }

    .name-price-cart-formatting {
        padding-left: 1rem;
        padding-top: 0rem;
    }

    .shopping-modified-clean-button {
        font-size: 0.9em;
    }

    .shopping-cart-area {
        padding: 0.5em;
    }

    .total-cost-area {
        height: 9rem;
    }

    .lower-height-total-cost-area {
        height: 8rem;
    }

    .bottom-checkout-button-container {
        padding-top: 0rem;
    }

    .discount-text {
        font-size: 1.2rem;
    }

    .each-item-area-formatting {
        padding-left: .5em;
        padding-right: .5em;
    }
}

@media screen and (max-width: 10rem) {
    .each-item-area-formatting {
        flex-direction: column;
    }
}

/* Your styles here */
</style>