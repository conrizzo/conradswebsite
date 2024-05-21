<template>
  <div class="container">
    <div class="inner-container-for-width">

      <!-- Modal for confirmation-->
      <div v-if="confirmationCheck">
        <confirmationModal @close="toggleModalToConfirmEntryDeletion()">
          <div>
            <button style="margin-right: .5rem;" class="clean-button"
              @click="deleteAccountDataConfirmation()">Yes</button>
            <button class="clean-button" @click="toggleModalToConfirmEntryDeletion()">No</button>
          </div>
        </confirmationModal>
      </div>

      <!-- Modal for rate limit error -->
      <div v-if="showQueryResponse">
        <confirmationModal @close="toggleModalToConfirmEntryDeletion()">
          <div>
            {{ queryResponse }}
          </div>
        </confirmationModal>
      </div>

      <!-- Main form -->
      <h1 style="color: rgb(245, 53, 147);">{{ pageTitle }}</h1>
      <form class="authorized-form" @submit.prevent="submitMessage">
        <h2>Save a message:</h2>
        <textarea class="message-field" v-model="saveMessageToBackEnd" rows="5"
          placeholder="Send a message to PostgreSQL" required></textarea><br>
        <div style="display: flex; align-items: center;">
          <button style="display: block; margin-left: 0; margin-right: 0.5rem;" class="clean-button"
            type="submit">Submit</button>

        </div>
      </form>

      <!-- Message area -->
      <div class="message-if-else-area">
        <div>
          <p>{{ pageContent }}</p>
          <p v-if="userName !== null">You are logged in as {{ userName }}</p>
          <p v-else>Loading...</p>
          <button class="clean-button" style="margin-bottom: .5rem;" @click='viewAllMessages = !viewAllMessages'>
            <span v-if="viewAllMessages === false">View All</span>
            <span v-else>View last 5</span>
          </button>
          <div>
            <!-- Show last 5 messages by default, show all messages with button click -->
            <div v-if="viewAllMessages === false">
              <h3>Last 5 messages sent:</h3>
              <div class="get-message-left-margin">
                <ul>
                  <li v-for="(message, index) in userMessagesFromBackEnd.slice(-5)" :key="message.id"
                    class="li-flex-wrapper">
                    <span style="margin-top: 0.2rem;">{{ message }}</span>
                    <svg @click="toggleModalToConfirmEntryDeletion(index)" class="svg-x-wrapper"
                      xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                      style="display: inline-block; cursor: pointer; flex-shrink: 0;">
                      <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M18 6 6 18M6 6l12 12">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else> <!-- show all messages-->
              <h3>All messages sent:</h3>
              <div class="get-message-left-margin">
                <ul>
                  <li v-for="(message, index) in userMessagesFromBackEnd" :key="message.id" class="li-flex-wrapper">
                    <span style="margin-top: 0.2rem;">{{ message }}</span>
                    <svg @click="toggleModalToConfirmEntryDeletion(index)" class="svg-x-wrapper"
                      xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                      style="display: inline-block; cursor: pointer; flex-shrink: 0;">
                      <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M18 6 6 18M6 6l12 12">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/axios';
import { useUserStore } from '@/userStore/store.js';
import confirmationModal from '@/components/Modals/ConfirmationModal.vue';

export default {
  components: {
    confirmationModal,
  },
  data() {
    return {
      pageContent: "This is a user only area. You can save messages to the backend, and delete them. Data is rate limited to a few requests per 10 seconds.",
      saveMessageToBackEnd: "",
      showQueryResponse: false,
      queryResponse: null,
      userMessagesFromBackEnd: [],
      userName: '',
      userStore: useUserStore(),
      viewAllMessages: false,
      confirmationCheck: false,
      selectedItemToDelete: null,
    };
  },
  created() {
    this.getAccountData();
  },
  mounted() {
    this.userStore.initializeStore();
    this.userName = this.userStore.userName;
  },
  computed: {
    pageTitle() {
      return "Hello, " + this.userName + ", you are in a user only area!";
    },
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
        this.getAccountData(); // Update the messages displayed
        this.queryResponse = "Submission successful!";
      }
      catch (error) {

        // Too many requests error handling
        if (error.response && error.response.status === 429) {
          this.queryResponse = "Too many requests, please try again in 10 seconds.";
          return
        }

        // Redirect to login page if user session ended and it's not a rate limiting error
        setTimeout(() => {
          this.userStore.isUserSignedIn = false;
          this.userStore.userName = '';
          this.userStore.signOut();
          this.$router.push('/UserSignIn');
        }, 3000);
        console.error("The error", error);
      }
    },

    async getAccountData() {
      try {
        const response = await axiosInstance.get('/backend/api/account_data');
        console.log("response data:", response.data);
        this.userMessagesFromBackEnd = response.data.account_data.map(item => item.data);
      } catch (error) {
        console.error("The error", error);
      }
    },

    async deleteAccountData(select_item) {

      // for now require input to be an integer number (0 through infinite will delete a specific post)
      // NOTE: A negative number will DELETE ALL POSTS in the backend database for this user

      if (!Number.isInteger(select_item)) {
        console.error("Invalid input: select_item is not an integer");
        return;
      }
      this.confirmationCheck = true;

      try {
        const response = await axiosInstance.delete(`/backend/api/account_data/${select_item}`);
        this.getAccountData(); // Update the data displayed
        this.queryResponse = "Deletion successful!";
      }
      catch (error) {
        this.queryResponse = "Deletion failed!";
        console.error("The error", error);
      }
    },

    toggleModalToConfirmEntryDeletion(select_item) {
      this.confirmationCheck = !this.confirmationCheck;
      this.selectedItemToDelete = select_item;
      //console.log("selectedItemToDelete:", this.selectedItemToDelete);
    },

    deleteAccountDataConfirmation() {

      //this.confirmationCheck = !this.confirmationCheck;
      this.deleteAccountData(this.selectedItemToDelete);
      this.toggleModalToConfirmEntryDeletion();
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
  color: rgb(255, 255, 255);
}

h1,
h2 {
  text-align: left;
}

p {
  padding-bottom: 1rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100svh;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  background: linear-gradient(to right, orange, red);
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
  outline: 1px solid #3a3a3a;
  outline: none;
}

.get-message-left-margin ul {
  list-style-type: none;
  width: auto;
}

.message-if-else-area {
  text-align: left;
  background: white;
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.svg-x-hover-color-highlight {
  stroke: rgb(200, 200, 200);
  transition: stroke 0.3s ease;
  /* Adjust the duration and timing function as needed */
}

.svg-x-wrapper:hover .svg-x-hover-color-highlight {
  stroke: rgb(245, 53, 147);  
  fill: green !important;
  background: green !important;
}

.li-flex-wrapper {
  display: flex;
  justify-content: space-between;
  width: calc(100%);
}
</style>