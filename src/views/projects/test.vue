<template>
    <div>
      <input
        type="number"
        v-model="item.quantity"
        min="0"
        max="100"
        step="1"
        @input="updateQuantityInCart(item)"
        @keydown="handleIncrementDecrement"
      >
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        item: {
          quantity: 0 // Initialize with your default quantity
        }
      };
    },
    methods: {
      updateQuantityInCart(item) {
        //console.log('Updated quantity:', item.quantity);
        // You can add your logic here to update the cart or perform other actions
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
      }
    }
  };
  </script>
  