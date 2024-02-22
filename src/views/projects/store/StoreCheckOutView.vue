<template style="background: red;">
  <div>
    <div class="main-banner">
      <div class="centered-container">
        <h1 style="font-size: 3em;">Checkout</h1>
      </div>
    </div>

    <CheckOut :showGoToCheckOutButton="false">
    </CheckOut>

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

  data() {
    return {
      //userCart: [],
      
    };
  },

  
  mounted() {
  }

}
</script>
  
<style scoped>


.main-banner {
  background: linear-gradient(to right, orange, red, pink);
  color: white;
  justify-content: center;
  position: relative;
  display: flex;
  height: 40vh;
}

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
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