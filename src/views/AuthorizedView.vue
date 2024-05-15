<template>
  <div class="container">
    <div class="inner-container-for-width">

      <h1 style="color: rgb(245, 53, 147);">{{ pageTitle }}</h1>

      <form class="authorized-form" @submit.prevent="submitMessage">
        <h2>Leave a message:</h2>
        <textarea class="message-field" v-model="saveMessageToBackEnd" rows="5"
          placeholder="Send a message to PostgreSQL" required></textarea><br>
        <button class="clean-button" type="submit">Submit</button>
      </form>
      <div v-if="showQueryResponse">
        <p>{{ queryResponse }}</p>
      </div>
      <div style="color: rgb(83, 21, 23); text-align: left;">
        <p>{{ pageContent }}</p>

        <p v-if="currentUser !== null">You are logged in as {{ currentUser }}</p>
        <p v-else>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/axios';
import Cookies from 'js-cookie';

//import { startTokenRefresh, stopTokenRefresh } from '@/tokenRefresher';
import { useUserStore } from '@/userStore/store.js';

export default {
  data() {
    return {
      pageContent: "Will add more unique content from backend here now specific to each logged in user.",
      currentUser: null,
      saveMessageToBackEnd: "",
      showQueryResponse: false,
      queryResponse: null,
      userStore: useUserStore(),
    };
  },
  computed: {
    pageTitle() {
      return "Hello, " + this.currentUser + ", you are in a logged in user only area!";
    }
  },
  created() {

    this.currentUser = this.userStore.userName;
    //startTokenRefresh();
  },
  beforeUnmount() {
    //stopTokenRefresh();
  },
  watch: {
    queryResponse(newVal) {
      if (newVal !== null) {
        this.showQueryResponse = true;
        setTimeout(() => {
          this.showQueryResponse = false;
          this.queryResponse = null;
        }, 3000);
      }
    },
  },
  methods: {

    submitMessage() {
      this.saveAccountData(this.saveMessageToBackEnd);
    },
    async saveAccountData(data) {
      try {
        const submitResponse =
          await axiosInstance.post('/backend/api/account_data',
            { data: data },
          );
        this.queryResponse = "Submission successful!";
      } catch (error) {
        this.queryResponse = "Submission failed!";
        console.error("The error", error);
      }
    },
  },
};
</script>
<style scoped>
h1 {

  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
}

h2 {
  color: rgb(83, 21, 23);
}

h1,
h2 {
  text-align: left;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80svh;
  background-color: rgb(248, 244, 240);
}

.inner-container-for-width {
  max-width: 40rem;
  padding: 0.5rem;
}

.authorized-form {
  margin-top: 1em;
  max-width: 40rem;
  resize: none;

  padding: 1rem;

  border: 1px solid #3a3a3a;
  border-radius: 0.5rem;
  background: rgb(241, 125, 23);
}

.message-field {
  margin-bottom: .5rem;
  width: 100%;
  resize: none;
  border: none;
  border-radius: 0.5rem;
  padding: 5px;
  font-size: 1rem;
}

.message-field:focus {
  outline: 1px solid #3a3a3a
}
</style>@/axiosinstance