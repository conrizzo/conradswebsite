<template>
    <div>
        <div class="main-banner">
          <h1 style="padding: 1em; font-size: 3em;">Checkout</h1>
        </div>      
    
      <CheckOut 
      :propValue="propValue" 
      :propValue2="propValue2" 
      :propUpdate="updated" 
      :itemTotalProp="itemTotal" 
      :showGoToCheckOutButton="false">
      </CheckOut>       
      
    </div>
  </template>
  
  <script>
  import "@/assets/globalCSS.css";
  import CheckOut from "@/components/Store/CheckOut.vue";

   // make cookies for the products in the user cart
   import VueCookies from 'vue-cookie';

  export default {
    // Component options
    components: {
      CheckOut
    },
    subtotalProp: {
     type: Number,
     required: true
    },
    data() {
      return {
       
        userCart: [],
        
      };
    }, 

  created() {
    // Retrieve the userCart cookie
    const userCartCookie = VueCookies.get('userCart');
    if (userCartCookie) {
      const userCart = JSON.parse(userCartCookie);
        this.userCart = userCart;     
    }
    
  },
  mounted(){   
  }
  
  }
  </script>
  
  <style scoped>
    .main-banner {
    background: linear-gradient(to right, orange, red, pink);
    color: white;
    text-align: center;
    position: relative;
    }

    .main-banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%,
        transparent 25%, transparent 70%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.1) 100%, transparent 100%, transparent);
    }
   
  </style>