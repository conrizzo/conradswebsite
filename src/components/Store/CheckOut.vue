<template>
    <!-- <button @click="makeInventory">Make Inventory</button> -->
    <!-- <button @click="resetInventory()">Reset</button> -->
    <!--<ProductGallery @add-to-cart="handleAddItemToCart"></ProductGallery>-->
    <div class="shopping-cart-area">
        <div class="grid-shopping-cart">
            <div class="grid-shopping-cart-left">
                <div class="shopping-cart-title">
                    <div v-if="runningTotal === 0">

                        <h2>No items selected</h2>

                    </div>
                    <div class="shopping-cart-border" v-else>
                        <h2>Shopping Cart <span class="arrow down"></span></h2>

                        <div>
                            <span>Last added <span style="color: rgb(244, 67, 54);">{{ showLastAddedItem }}</span> to your
                                cart!</span>
                            ( Product ID: {{ propValue2 }} Item Position: {{ propValue }} )<br>

                        </div>
                        <br>
                    </div>
                </div>
                <!-- Each cart item is outputted here with v-for loop -->
                <transition-group>
                    <div v-for="(item, index) in userCart" :key="item.id" class="cart-item">
                        <div class="each-item-area-formatting">
                            <div class="cart-image-container">
                                <image>
                                    <img class="each-item-in-cart-image" :src="item.imageSrc" :alt="item.altText"
                                        width="128" height="128">
                                </image>
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
                                Quantity: <input type="number" v-model="item.quantity" min="0" max="100" step="1"
                                    @input="updateQuantityInCart(item)" @keydown="handleIncrementDecrement"
                                    style="width: 2.5rem; font-size: 1.25rem; border-radius: 0.25rem; border-width: 1px;">
                                   
                                <br>
                                Item Subtotal ({{ item.quantity }} items): €{{ Math.abs((item.quantity *
                                    item.price).toFixed(2)) }}<br>
                                <button @click="removeItem(index)"
                                    class="clean-button shopping-modified-clean-button">Delete</button>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div class="grid-shopping-cart-right">
                <div class="special-offer">
                    <h2>&#9733;&nbsp;Special Offer!&nbsp;&#9733;</h2>


                    <div>
                        <p style="text-align: left;" v-if="totalQuantity >= 5">With 5 or more items in the shopping basket a
                            10% discount has been applied!</p>
                        <p v-else>Buy 5 or more items and get 10% off!</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="total-shopping-cart-area">

            <div style="padding-top: 1em; margin: 0 auto;">
                <div style="height: 4.5em;">
                    <span v-if="totalQuantity < 5"><b>Subtotal ({{ totalQuantity }} items): €{{
                        Math.abs(runningTotal.toFixed(2)) }} </b></span>
                    <span v-else-if="totalQuantity > 4"><b>Subtotal ({{ totalQuantity }} items): <s>€{{
                        Math.abs(runningTotal.toFixed(2)) }}</s></b></span>
                    <transition>
                        <div style="font-size: 1.6rem;" v-if="totalQuantity >= 5">With 10% discount: ({{ totalQuantity }}
                            items):
                            <span>€{{ Math.abs((runningTotal * .9).toFixed(2)) }}</span>
                        </div>
                    </transition>
               </div>
                <div class="bottom-checkout-button-container">

                    <button v-show="runningTotal > 0" style="" @click="emptyShoppingCart()" class="clean-button">Empty Cart
                    </button>

                    <div v-if="showGoToCheckOutButton">
                        <RouterLink to="/projects/checkout">
                            <button v-show="runningTotal > 0" style="margin-left: 1em;" class="clean-button">Go to Checkout
                            </button>
                        </RouterLink>
                    </div>

                    <div v-else>
                        <RouterLink to="/projects/store">
                            <button v-show="runningTotal > 0" style="margin-left: 1em;" class="clean-button">Go Back
                            </button>
                        </RouterLink>
                        <button v-show="runningTotal > 0" style="margin-left: 1em;" class="clean-button">Purchase Items
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
import "@/assets/globalCSS.css";

// make cookies for the products in the user cart
import VueCookies from 'vue-cookie';

export default {
    name: "StoreView",
    components: {
        //ProductGallery,
    },
    props: {
        propValue: {
            type: Number,
            default: 0
        },
        propValue2: {
            type: Number,
            default: 0
        },
        propUpdate: {
            type: Boolean,
            default: false,
        },
        showGoToCheckOutButton: {
            type: Boolean,
            default: true,
        }
    },
    // Your script logic here
    data() {
        return {
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
        // Retrieve the userCart array from cookies
        const cartItems = VueCookies.get('userCart');
        if (cartItems) {
            this.userCart = JSON.parse(cartItems);
        }
        console.log("CART", this.userCart)
    },
    mounted() {
        // Your mounted logic here     
        this.makeInventory();
        // NOTE: There is definitely a better way to solve this problem than this, but for now
        // This line of code below updates the runningtotal of the local cookies automatically.
        this.runningTotal = this.userCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    },

    // This solves the issue I had with the architecture, didn't expect to use a watcher here.
    watch: {

        propUpdate() {

            this.addItemToCart();

        },
        // watch userCart array for changes to add or remove local cookies of what is in the cart
        userCart: {
            handler(newCart) {
                VueCookies.set('userCart', JSON.stringify(newCart));
            },
            deep: true // Watch for changes in nested properties of userCart
        },

    },

    computed: {
        itemTotal() {
            return this.userCart.map(item => Math.abs((item.quantity * item.price).toFixed(2)));
        },

        totalQuantity() {
            return this.userCart.reduce((total, item) => total + item.quantity, 0);
        },
        showLastAddedItem() {
            return this.userCart.find(item => item.id === this.propValue2)?.name || '';
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

        addItemToCart() {
            // Invoke the handleAddItemToCart method with propValue and propValue2
            this.handleAddItemToCart(this.propValue, this.propValue2);

        },

        saveUserCartToCookies() {
            // Store the userCart array in cookies
            VueCookies.set('userCart', JSON.stringify([this.userCart]), { expires: 3 });
        },

        handleIncrementDecrement(event) {
            if (event.keyCode === 38) {
                event.preventDefault();
                this.item.quantity += 1;
                this.updateQuantityInCart(this.item);
            } else if (event.keyCode === 40) {
                event.preventDefault();
                if (this.item.quantity > 0) {
                    this.item.quantity -= 1;
                    this.updateQuantityInCart(this.item);
                }
            }
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
        },
        // Your methods here
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
            const items = inventory.getItems();
            console.log(items);
        },

        resetInventory() {
            console.log("reset");
            this.storeInventory = new Inventory();
        },

        handleAddItemToCart(selectedItem, actualProductID) {

            if (selectedItem === null || actualProductID === null || this.storeInventory.getItems().length === 0) {
                return
            }
            console.log("TEST", this.storeInventory.getItems()[selectedItem]);

            const matchingItemId = this.storeInventory.getItems().find(item => item.id === actualProductID)
            this.runningTotal += matchingItemId.price;
            // looks for the product ID that is scrolled in the gallery and matches it to the product ID in the inventory
            console.log("TEST", matchingItemId);

            this.addItemToShoppingCartIfNotAlreadyThere(matchingItemId);
        },

        addItemToShoppingCartIfNotAlreadyThere(item) {
            if (item === null) {
                return
            }           
            // Here we check to make sure the item is not in the user-defined array AND the local cookies array
            // This is an important fix to the previous version.
            const itemIndex = this.userCart.findIndex(cartItem => cartItem.id === item.id);
                if (itemIndex === -1) {
                item.quantity = 1;
                this.userCart.push(item);
                } else {
                this.userCart[itemIndex].quantity++;
                }
        },

        emptyShoppingCart() {
            this.userCart = [];
            this.runningTotal = 0;
        },

        removeItem(index) {
            if (index === null) {
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

.main-banner {
    background-color: #f44336;
    /* Replace with your desired background color */
    color: white;
    /* Replace with your desired text color */
    text-align: center;
}

p.main-banner {
    font-size: 0.8em;
}

.store-background {
    background-color: #f5f5f5;
    padding: 2.5em 5em 5em 5em;
}

.shopping-cart-area {
    background-color: #ffffff;
    padding: 2em;
    margin-top: 2em;
    margin-bottom: 2em;
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

.total-shopping-cart-area {
    display: flex;
    align-items: center;
}

.name-price-cart-formatting {
    display: inline-block;
    padding-left: 1em;
}

.each-item-area-formatting {
    border-bottom: 1px solid #f44336;
    margin: 0 1rem 0 1rem;
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    background: rgb(255, 255, 255);
}

.shopping-cart-title {
    text-align: left;
    margin-left: 1em;
    margin-right: 1em;
    font-size: 1.1em;
    border-bottom: 1px solid #f44336;
   
}

.each-item-in-cart-image {
    border-radius: 1em;
}

.cart-image-container {}

.product-name {
    font-size: 1.1em;
}

.shopping-cart-border {
    /* border-bottom: 1px solid rgb(218, 220, 224); */
    background: rgb(255, 255, 255);
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
    display: flex;
    justify-content: center;
    align-items: center;
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

}

@media screen and (max-width: 10rem) {
    .each-item-area-formatting {
        flex-direction: column;
    }
}

/* Your styles here */</style>
  