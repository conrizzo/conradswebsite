<template>
  <!-- Modal for confirmation-->
  <div v-if="confirmationCheck">
    <confirmationModal @close="toggleModalToConfirmEntryDeletion()">
      <div style="text-align: center; padding: .5rem; padding-top: 2rem;">
        <p style="padding-bottom: 0rem;">Are you sure you want to delete this?</p>
      </div>
      <div>
        <button style="margin-right: .5rem;" class="clean-button" @click="deleteAccountDataConfirmation()">Yes</button>
        <button class="clean-button" @click="toggleModalToConfirmEntryDeletion()">No</button>
      </div>
    </confirmationModal>
  </div>
  <!-- Modal for rate limit error -->
  <div v-if="showQueryResponse">
    <confirmationModal @close="toggleQueryModal()">
      <div style="text-align: center; padding: .5rem; padding-top: 3rem; font-size: 1.1rem; padding-bottom: 2.5rem;">
        {{ queryResponse }}
      </div>
    </confirmationModal>
  </div>
  <div class="container">
    <div class="inner-container-for-width">
      <!-- Main form -->
      <h1>{{ pageTitle }}</h1>
      <form class="authorized-form" @submit.prevent="submitMessage">
        <h2>Message:</h2>
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
            <span v-else>View last 5 Messages</span>
          </button>
          <div>
            <!-- Show last 5 messages by default, show all messages with button click -->
            <div v-if="viewAllMessages === false">
              <h3>Last 5 Messages sent:</h3>
              <div class="get-message-left-margin">
                <ul>
                  <li v-for="(message, index) in userMessagesFromBackEnd" :key="message.id">
                    <div v-if="index >= userMessagesFromBackEnd.length - 5" class="li-flex-wrapper">
                      <div>
                        <span style="margin-top: 0.2rem; display: block;">{{ message.createdAt }}</span>
                        <span v-html="checkIfLink(message.data)" style="margin-top: 0.2rem; display: block;"></span>
                      </div>
                      <svg @click="toggleModalToConfirmEntryDeletion(index)" class="svg-x-wrapper"
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        style="display: inline-block; cursor: pointer; flex-shrink: 0;">
                        <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M18 6 6 18M6 6l12 12">
                        </path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else> <!-- show all messages-->
              <h3>All messages sent:</h3>
              <div class="get-message-left-margin">
                <ul>
                  <li v-for="(message, index) in userMessagesFromBackEnd" :key="message.id" class="li-flex-wrapper">
                    <div>
                      <span style="margin-top: 0.2rem; display: block;">{{ message.createdAt }}</span>
                      <span v-html="checkIfLink(message.data)" style="margin-top: 0.2rem; display: block;"></span>
                    </div>
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

import { useUserStore } from '@/userStore/store.js';
import confirmationModal from '@/components/Modals/ConfirmationModal.vue';
import DOMPurify from 'dompurify';
import UserService from './projects/UserAccount/user.ts';

export default {
  components: {
    confirmationModal,
  },
  data() {
    return {
      pageContent: "This is a user only area. You can save messages to the backend, and delete them. Data is rate limited to 6 requests per 10 seconds.\
      Note, that when deleting or submitting data, it has to both post the data, and get the new updated data which means this is 2 requests.\
      As long as this isn't happening more than 3 times per 10 seconds, there won't be any rate limit issue.",
      saveMessageToBackEnd: "",
      showQueryResponse: false,
      queryResponse: null,
      userMessagesFromBackEnd: [],
      // For testing
      /*userMessagesFromBackEnd: [{
        "data": "Some more account data",
        "createdAt": "2022-01-02T00:00:00"
      },],
      */
      userName: '',
      userStore: useUserStore(),
      viewAllMessages: false,
      confirmationCheck: false,
      selectedItemToDelete: null,
    };
  },

  mounted() {
    this.userStore.initializeStore();
    this.userName = this.userStore.userName;
    this.loadUserServiceData(); // loads data into reactive variable
  },

  computed: {
    pageTitle() {
      return "Welcome, " + this.userName;
    },
  },

  watch: {
    queryResponse(newVal) {
      if (newVal !== null) {
        this.showQueryResponse = true;
        setTimeout(() => {
          this.showQueryResponse = false;
          this.queryResponse = null;
        }, 1500);
      }
    },
  },

  methods: {

    async loadUserServiceData() {
      //const result = await UserService.getAccountData();
      this.userMessagesFromBackEnd = await UserService.getAccountData();
      
    },

    async submitMessage() {
      //this.saveAccountData(this.saveMessageToBackEnd);
      try {
        await UserService.postAccountData(this.saveMessageToBackEnd);
        await this.loadUserServiceData();
        this.queryResponse = "Submission successful!";
      } catch (error) {
        console.error("The error", error);
      }
    },

    toggleQueryModal() {
      this.showQueryResponse = !this.showQueryResponse;
    },

    toggleModalToConfirmEntryDeletion(select_item) {
      this.confirmationCheck = !this.confirmationCheck;
      this.selectedItemToDelete = select_item;
      //console.log("selectedItemToDelete:", this.selectedItemToDelete);
    },

    async deleteAccountDataConfirmation() {
      //this.confirmationCheck = !this.confirmationCheck;
      //this.deleteAccountData(this.selectedItemToDelete);
      this.confirmationCheck = true;
      await UserService.deleteAccountData(this.selectedItemToDelete);
      //UserService.getAccountData();
      await this.loadUserServiceData(); // Update the messages displayed
      this.toggleModalToConfirmEntryDeletion();
    },

    // All the rendered user messages from backend PostgreSQL are sanitized
    checkIfLink(message) {
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      const sanitizedMessage = DOMPurify.sanitize(message);
      return urlPattern.test(sanitizedMessage)
        ? sanitizedMessage.replace(urlPattern, '<a href="$1" target="_blank">$1</a>')
        : sanitizedMessage;
    }
  },
};
</script>



<style scoped>
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
  color: rgb(0, 170, 222);
  background: white;
  max-width: 80rem;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: rgb(255, 255, 255);
}

h1,
h2 {
  text-align: left;
}

h3 {
  color: rgb(0, 170, 222);


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
  max-width: 80rem;
  width: 100%;
  padding: 0.5rem;
}

.authorized-form {
  margin-top: 1em;
  max-width: 40rem;
  resize: none;
  padding: 1rem;

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  border-top: 1px solid rgb(225, 225, 225);
  overflow-wrap: break-word;
  /* word wrap for long urls or things that overflow */
  word-break: break-all;
}
</style>