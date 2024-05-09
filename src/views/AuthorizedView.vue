<template>
  <div style="margin-top: 5em;">
    <h1 style="color: blue;">{{ pageTitle }}</h1>
    <form @submit.prevent="submitMessage">
      <input type="text" v-model="saveMessageToBackEnd" placeholder="Enter your message" required />
      <button type="submit">Submit</button>
    </form>
    <p>{{ pageContent }}</p>
    <p v-if="currentUser !== null">You are logged in as {{ currentUser }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
const instance = axios.create();

export default {
  data() {
    return {
      pageTitle: "Hello, you are in a logged in user only area!",
      pageContent: "Basic content",
      currentUser: null,
      saveMessageToBackEnd: "",
      instance: instance, // Add the Axios instance to the component's data
    };
  },
  computed: {
    token() {
      return localStorage.getItem('userToken');
    }
  },
  created() {
    // Manually trigger the watcher when the component is created
    this.$watch('token', this.tokenChange);

    // Add a request interceptor to the Axios instance
    this.instance.interceptors.request.use((config) => {
      // Attach the access token to the Authorization header
      config.headers.Authorization = `Bearer ${this.token}`;
      return config;
    });

    // Add a response interceptor to the Axios instance
    this.instance.interceptors.response.use(undefined, (error) => {
      if (error.config && error.response && error.response.status === 401) {
        // If the server returns a 401 response, refresh the token
        let refreshToken = localStorage.getItem('refreshToken');
        return axios.post('/refresh', {}, {
          headers: {
            'Authorization': `Bearer ${refreshToken}`
          }
        })
          .then(response => {
            // Save the new access token
            localStorage.setItem('userToken', response.data.access_token);
            // Retry the original request
            error.config.headers['Authorization'] = `Bearer ${response.data.access_token}`;
            return this.instance.request(error.config);
          });
      }
      return Promise.reject(error);
    });
  },
  watch: {
    token(newToken) {
      this.tokenChange(newToken);
    }
  },
  methods: {
    tokenChange(newToken) {
      if (newToken) {
        // Set the Axios Authorization header
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      } else {
        // Clear the Axios Authorization header if no user is logged in
        delete axios.defaults.headers.common['Authorization'];
      }
    },
    submitMessage() {
      // Send the message to the backend
      this.saveAccountData(this.saveMessageToBackEnd);
    },
    // send a post request to the account_data Postgres table which is connected to userID
    // change this to the same axios instance, was axios.post before
    async saveAccountData(data) {
      try {
        const response = await this.instance.post('/backend/api/account_data', {
          data: data
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    setAxiosAuthorizationHeader(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    clearAxiosAuthorizationHeader() {
      axios.defaults.headers.common['Authorization'] = null;
    },
  },
};
</script>