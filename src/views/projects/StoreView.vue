<template>
  <div class="store-background-color">

    <div class="main-banner">
      <h1> Buy awesome things here...</h1>
    </div>
    <!-- <button @click="makeInventory">Make Inventory</button> -->

    <!-- <button @click="resetInventory()">Reset</button> -->

    <ProductGallery @add-to-cart="handleAddItemToCart"></ProductGallery>
    <div class="shopping-cart-area">
        <div v-if="runningTotal === 0">
          <h2>Your Shopping Cart is empty!</h2>
        </div>
        <div v-else>
          <h2>Your Shopping Cart</h2>
          <br>
          <div>
          <b>You just added "{{ showLastAddedItem }}" to your cart!</b>
          <button style="margin-left: 1em;" @click="emptyShoppingCart()" class="clean-button">Empty shopping cart</button>
        </div>
          <br>
        </div>
        <div v-for="(item, index) in userCart" :key="item.id" class="cart-item">
        
          {{ item.name }} --- {{ item.price }} <button @click="removeItem(index)" class="clean-button shopping-modified-clean-button">Remove Item</button>
               
        </div>
        <div class="total-shopping-cart-area">
          <p><b>Total: €{{ runningTotal.toFixed(2) }} </b></p>      
        </div>
    </div>
  </div>
</template>



<script>
import ProductGallery from "@/components/Store/ProductGallery.vue";
import { Inventory } from "@/components/Store/InventoryData.ts";
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
     

    };
  },
  mounted() {
    // Your mounted logic here
    this.makeInventory();
  },
  computed: {
    showLastAddedItem() {
      const lastItemIndex = this.userCart.length - 1;
      const lastItem = this.userCart[lastItemIndex]
      // guard statement for null / undefined
      if (lastItem === undefined){
        return
      }     
      return lastItem['name']
    },
  },
  methods: {
    
    // Your methods here
    makeInventory() {

      const inventory = this.storeInventory;

      // Usage example
      const item1 = { id: 1, name: "Bread", price: 2.99 };
      const item2 = { id: 2, name: "Fresh Coffee", price: 15.99 };
      const item3 = { id: 3, name: "10kg of Bird Food", price: 39.99 };
      const item4 = { id: 4, name: "Cake", price: 8.99 };

      inventory.addItem(item1);
      inventory.addItem(item2);
      inventory.addItem(item3);
      inventory.addItem(item4);

      this.storeInventory = inventory;

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
      this.userCart.push(matchingItemId);
    },
    emptyShoppingCart() {
      this.userCart = [];
      this.runningTotal = 0;
    },
    removeItem(index) {
      if (index === null) {
        return
      }
      this.runningTotal = this.runningTotal - this.userCart[index].price;
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
}
.cart-item{
  text-align: left;
  padding: 0.25em;
}

.shopping-modified-clean-button{
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.25em;
  border-radius: 0.5em;
  margin-left: 1em;
}
.shopping-modified-clean-button:hover{
  background-color: #ff6c62;
}

.total-shopping-cart-area{
  text-align: right;
  padding: 2em;
}



@media (max-width: 60em) {
  h1 {
  font-size: 2em;
  padding: 0.5em;
}
}

/* Your styles here */
</style>
