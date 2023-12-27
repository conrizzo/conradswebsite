<template>
  <div class="store-background-color">
        <h1> Buy awesome things here...</h1>

        

  
      

      <!-- <button @click="makeInventory">Make Inventory</button> -->

      <!-- <button @click="resetInventory()">Reset</button> -->

      <ProductGallery  @add-to-cart="handleAddItemToCart"></ProductGallery>

      <h2>Your Shopping Cart: </h2>
      <div v-for="item in userCart" :key="item.id" class="cart-item">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>            
      </div>
      <div>
        <p>Total: {{ runningTotal }}</p>
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
     
     
    };
  },
  mounted() {
    // Your mounted logic here
    this.makeInventory();
  },
  methods: {    
    // Your methods here
    makeInventory(){
      
        const inventory = this.storeInventory;
        
        // Usage example
        const item1 = { id: 1, name: "Bread", price: 15 };
        const item2 = { id: 2, name: "Fresh Coffee", price: 15 };
        const item3 = { id: 3, name: "Bird Food", price: 10 };
        const item4 = { id: 4, name: "Cake", price: 300 };
        
        inventory.addItem(item1);
        inventory.addItem(item2);
        inventory.addItem(item3);
        inventory.addItem(item4);

        this.storeInventory = inventory;
        
        const items = inventory.getItems();
        console.log(items);
       

    },
  
      resetInventory(){
        console.log("reset");
        this.storeInventory = new Inventory();
      },
      handleAddItemToCart(selectedItem, actualProductID) {
        if (selectedItem === null || actualProductID === null || this.storeInventory.getItems().length === 0){
          return
        }
       
      
      console.log("TEST", this.storeInventory.getItems()[selectedItem]);

      const matchingItemId = this.storeInventory.getItems().find(item => item.id === actualProductID)
      this.runningTotal += matchingItemId.price;
      // looks for the product ID that is scrolled in the gallery and matches it to the product ID in the inventory
      console.log("TEST", matchingItemId);
      this.userCart.push(matchingItemId);
    }
  
  }
}
</script>

<style scoped>
h1{
  font-size: 4em;
  padding: 2em;
}

.store-background-color{
  background-color: #f5f5f5;
  padding: 2em;
}
/* Your styles here */
</style>
