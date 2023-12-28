<template>
  <div class="store-background-color">

    <div class="main-banner">
      <h1> Buy awesome things here...</h1>
    </div>
    <!-- <button @click="makeInventory">Make Inventory</button> -->

    <!-- <button @click="resetInventory()">Reset</button> -->

    <ProductGallery @add-to-cart="handleAddItemToCart"></ProductGallery>
    <div class="shopping-cart-area">
         <div class="shopping-cart-title">
            <div v-if="runningTotal === 0">
                <h2>Your Shopping Cart is empty!</h2>
              </div>
              <div v-else>
                <h2>Your Shopping Cart</h2>
                  <br>
                    <div>
                    <b>You last added "{{ showLastAddedItem }}" to your cart!</b>
                   
                  </div>
                <br>
              </div>
          </div>
         
          <div v-for="(item, index) in userCart" :key="item.id" class="cart-item">
           
              <div class="each-item-area-formatting">
                 <image>
                    <img class="each-item-in-cart-image" :src="item.imageSrc" :alt="item.altText" width="128" height="128">
                  </image>    
                <span class="name-price-cart-formatting">
                  
                  <span class="product-name">{{ item.name }}</span><br>
                    Price: {{ item.price }}<br>
                    Quantity: <input
                    type="number"
                    v-model="item.quantity"
                    min="0"
                    max="100"
                    step="1"
                    @input="updateQuantityInCart(item)"
                    @keydown="handleIncrementDecrement" style="width: 2.5rem; font-size: 1.2rem;" class="custom-input">
                    <br><br>Subtotal ({{ item.quantity }} items): €{{ Math.abs((item.quantity*item.price).toFixed(2)) }}
                </span>   
                             
                <button @click="removeItem(index)" class="clean-button shopping-modified-clean-button">Remove Item</button> 
                    
              </div>
          </div>
        
        <div class="total-shopping-cart-area">
          <button style="margin-bottom: 1em;" @click="emptyShoppingCart()" class="clean-button">Empty shopping cart</button>                
          <p><b>Subtotal ({{ totalQuantity }} items): €{{ Math.abs(runningTotal.toFixed(2)) }} </b></p>      
        </div>
    </div>
  </div>
</template>



<script>
import ProductGallery from "@/components/Store/ProductGallery.vue";
import { Inventory } from "@/components/Store/InventoryData.ts";
import { productInventory } from '@/components/Store/productInventoryOptionsData';
import "@/assets/globalCSS.css";
export default {
  name: "StoreView",
  components: {
    ProductGallery,
  },
  props: {
    // Your props here
  },
  // Your script logic here
  data() {
    return {
      storeInventory: new Inventory(),
      userCart: [],
      runningTotal: 0,
      lastItemAddedToCart: null,
      item: {
        quantity: 0 // Initialize with your default quantity
      }

    };
  },
  mounted() {
    // Your mounted logic here
    this.makeInventory();
  },
  computed: {
    totalQuantity() {
      return this.userCart.reduce((total, item) => total + item.quantity, 0);
    },
    showLastAddedItem() {
      const lastItemIndex = this.userCart.length - 1;
      const lastItem = this.userCart[lastItemIndex]
      // guard statement for null / undefined
      if (lastItem === undefined){
        return
      }     
      return lastItem['name']
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
    /*
    updateQuantityInCart(item) {
      
      const matchingCartItem = this.userCart.find(cartItem => cartItem.id === item.id);
    
       this.runningTotal = this.runningTotal + matchingCartItem.price;
    },
  */
    updateQuantityInCart(item) {
      console.log('Updated quantity:', item.quantity);
      this.runningTotal = item.quantity * item.price;
      // You can add your logic here to update the cart or perform other actions
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

      if (!this.userCart.includes(item)) {
        item.quantity = 1;
        this.userCart.push(item);
      } else {
        item.quantity++;
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
  padding: 2em;
}

.main-banner {
  background-color: #f44336; /* Replace with your desired background color */
  color: white; /* Replace with your desired text color */
  padding: 1em;
  text-align: center;
  
}
.store-background-color {
  background-color: #f5f5f5;
  padding: 2em;
}

.shopping-cart-area {
  background-color: #ffffff;
  padding: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.cart-item{
  text-align: left;
  padding: 0.25em;
}

.shopping-modified-clean-button{
  background-color: #f44336;
  color: white;
  border: none;
  
  border-radius: 0.5em;
  margin: 0.5em;
}
.shopping-modified-clean-button:hover{
  background-color: #ff6c62;
}

.total-shopping-cart-area{
  text-align: right;
  padding: 2em;
}

.name-price-cart-formatting{
  display: inline-block;
  width: 20em;
  padding-left: 1em;
}

.each-item-area-formatting{
  border: 1px solid #f44336;
  padding: 1em;
  border-radius: 1em;
  max-width: 30em;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(255, 255, 255);
 
}
.shopping-cart-title {
  text-align: left;
  padding: 1em;
}

.each-item-in-cart-image{
  border-radius: 1em;
  margin-top: 0.25em;
 
}
.product-name{
  font-weight: 600;
  font-size: 1.1em;
}




@media (max-width: 60em) {
  .each-item-area-formatting{
      
      flex-direction: column;
    
  }
  h1 {
  font-size: 2em;
  padding: 0.5em;
}
.name-price-cart-formatting{
  font-size: 0.9em;
  

}
.shopping-modified-clean-button{
  font-size: 0.9em;
}
.shopping-cart-area {
  padding: 0.5em;
}

}

/* Your styles here */
</style>
