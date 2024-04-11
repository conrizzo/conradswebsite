<template style="background: red;">
  <div>
    <div class="main-banner">
      <div class="centered-container">
        <h1 style="font-size: 3em;">Checkout</h1>
      </div>
    </div>

    <CheckOut :showGoToCheckOutButton="false">
    </CheckOut>
    <h3 style="padding: 2rem; padding-bottom: 0rem;">User cart reference for testing:</h3>
    <div style="padding: 1rem;">
      <div v-for="(item, index) in cart" :key="index" style="text-align: left;">
        <b>Item:</b> {{ item }}
      </div>
    </div>
  </div>
</template>
<script>

import "@/assets/globalCSS.css";
import CheckOut from "@/components/Store/CheckOut.vue";
import { useCartStore } from '@/components/Store/useCounterStore.js';

export default {
  // Component options
  components: {
    CheckOut
  },
  created() {
    const cartStore = useCartStore();
    this.cart = cartStore.cart;
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