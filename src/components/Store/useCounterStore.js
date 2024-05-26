
import { defineStore } from 'pinia';
import { productInventory } from '@/components/Store/productInventoryOptionsData.ts';



export const useCounterStore = defineStore('counter', {

    state: () => ({ count: 0 }),

    getters: {
        doubleCount: (state) => state.count * 2,
    },
    
    actions: {
        increment() {
            this.count++
        },
    },
});



export const useCartStore = defineStore('cart', {


    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        lastAddedItem: null,
    }),


    actions: {

        setCart(newCart) {
            this.cart = newCart;
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },

        addToCart(productId) { // this method isnt being used

            const setProductID = Number(productId);
            const product = productInventory.find(product => product.id === setProductID);

            if (product) { return }
            /*
            if (product) {
                this.cart.push(product);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
            */
        },

        setLastItemAdded(product) {
            this.lastAddedItem = product;
            localStorage.setItem('lastItem', JSON.stringify(this.lastAddedItem));
        }
    },


    getters: {

        getCart() {
            return this.cart;
        },

        getLastItemAdded() {
            return this.lastAddedItem;
        }

    }
});