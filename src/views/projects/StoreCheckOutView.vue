<template>
    <div>
      <h1 style="padding: 1em;">Checkout - deciding how to proceed here.</h1>
      <p>The goal will likely be to carry the user cart items as cookies here.</p>
      <!-- Your content here -->
      <CheckOut :propValue="propValue" :propValue2="propValue2" :propUpdate="updated"></CheckOut>
        {{ items }}
      <div v-for="item in userCart" :key="item.id">
      {{ item.name }}
    </div>
    </div>
  </template>
  
  <script>
  import "@/assets/globalCSS.css";
  import CheckOut from "@/components/Store/CheckOut.vue";
  export default {
    // Component options
    components: {
      CheckOut
    },
    
    props: ['items'], // Define props to accept items passed from the route

  created() {
    // Access the passed items
    console.log('Cart items:', this.items);
  }
  
  }
  </script>
  
  <style>
  /* Your component styles here */
  </style>