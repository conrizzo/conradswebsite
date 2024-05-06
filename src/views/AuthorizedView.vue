<template>
  <div style="margin-top: 5em;">
    <h1 style="color: blue;">{{ pageTitle }}</h1>
    <p>{{ pageContent }}</p>
    <p v-if="currentUser !== null">You are logged in as {{ currentUser.email }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import "@/assets/globalCSS.css";
import { auth } from "@/firebase/init.js";

export default {
  data() {
    return {
      pageTitle: "Hello, you are in a logged in user only area!",
      pageContent: "Basic content",
      currentUser: null,
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if (user) {
        // Assuming the token is stored in localStorage when the user logs in
        const token = localStorage.getItem('userToken');
        if (token) {
          // Set the Axios Authorization header
          this.setAxiosAuthorizationHeader(token);
        }
      } else {
        // Clear the Axios Authorization header if no user is logged in
        this.clearAxiosAuthorizationHeader();
      }
    });
  },
  methods: {
    setAxiosAuthorizationHeader(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    clearAxiosAuthorizationHeader() {
      axios.defaults.headers.common['Authorization'] = null;
    },
  },
};
</script>