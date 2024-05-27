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

      <h1>{{ pageTitle }}</h1>
      <!-- Message area -->
      <div class="message-if-else-area">
        <div>
          <p>{{ pageContent }}</p>
          <p v-if="userName !== null">You are logged in as {{ userName }}</p>
          <p v-else>Loading...</p>
          <button class="clean-button" style="margin-right: .5rem; margin-bottom: 1rem;"
            @click='viewAllMessages = !viewAllMessages'>
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
                      <div @click="toggleModalToConfirmEntryDeletion(index)" class="svg-container">
                        <svg class="svg-x-wrapper" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                          viewBox="0 0 24 24" fill="none">
                          <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M18 6 6 18M6 6l12 12">
                          </path>
                        </svg>
                      </div>
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
                    <div @click="toggleModalToConfirmEntryDeletion(index)" class="svg-container">
                      <svg class="svg-x-wrapper" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 24 24" fill="none">
                        <path class="svg-x-hover-color-highlight" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M18 6 6 18M6 6l12 12">
                        </path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- special area to test -->
      <div v-if="userName === 'conrad'" style="background: #fff; text-align: left; padding: 1rem;">
        <div>
          <h3>Special area for testing</h3>
          <p>Special area for testing</p>
          <button class="clean-button" @click="querySpecialAreaAccess">Load About Page user messages</button>
        </div>
        <div v-for="(item, index) in specialMessages" :key="index">
          <span style="display: block;">Date: {{ item.date }}</span>
          <span style="display: block;">Name: {{ item.name }}</span>
          <span style="display: block;">Subject: {{ item.subject }}</span>
          <p>Message: {{ item.message }}</p>
        </div>
      </div>

      <!-- Main form -->
      <form class="authorized-form" @submit.prevent="submitMessage">
        <h2>Message:</h2>
        <textarea class="message-field" v-model="saveMessageToBackEnd" rows="5"
          placeholder="Send a message to PostgreSQL" required></textarea><br>
        <div style="display: flex; align-items: center;">
          <button style="display: block; margin-left: 0; margin-right: 0.5rem;" class="clean-button"
            type="submit">Submit</button>
        </div>
      </form>
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

      showQueryResponse: false,
      queryResponse: null,
      //userMessagesFromBackEnd: [],
      // For testing - it's okay if this is in production since it loads a replacement and wont show this
      userMessagesFromBackEnd: [{
        "data": "Default message for testing - this is an error if you see this in production",
        "createdAt": "2022-01-02T00:00:00"
      },],

      userName: '',
      userStore: useUserStore(),
      viewAllMessages: false,
      confirmationCheck: false,
      selectedItemToDelete: null,
      saveMessageToBackEnd: "",

      specialMessages: [],
    };
  },

  mounted() {
    this.userStore.initializeStore();
    this.userName = this.userStore.userName;
    this.loadUserServiceData(); // loads data into reactive variable - comment out for testing locally
  },

  computed: {
    pageTitle() {
      return "Welcome, " + this.userName;
    },

  },
  /*
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
 */
  methods: {

    async loadUserServiceData() {
      //const result = await UserService.getAccountData();
      this.userMessagesFromBackEnd = await UserService.getAccountData();
      this.userMessagesFromBackEnd.sort((a, b) => {
        // Compare by date
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;

        // If the dates are the same, compare by some other field
        // Replace 'someField' with the actual field name
        if (a.someField < b.someField) return -1;
        if (a.someField > b.someField) return 1;

        return 0;
      });
    },

    async submitMessage() {
      try {

        /*
        1. Send data to PostgreSQL, 
        2. if true response, then show 'success message', and show the modal 
         */

        if (await UserService.postAccountData(this.saveMessageToBackEnd)) {
          this.queryResponse = "Submission successful!"; // set modal message
          this.toggleQueryModal();
          await this.loadUserServiceData();
        }
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
    },


    async deleteAccountDataConfirmation() {
      this.confirmationCheck = true;
      await UserService.deleteAccountData(this.selectedItemToDelete);
      await this.loadUserServiceData();
      this.toggleModalToConfirmEntryDeletion();
    },


    // All the rendered user messages from backend PostgreSQL are sanitized
    checkIfLink(message) {
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      const sanitizedMessage = DOMPurify.sanitize(message);
      return urlPattern.test(sanitizedMessage)
        ? sanitizedMessage.replace(urlPattern, '<a href="$1" target="_blank">$1</a>')
        : sanitizedMessage;
    },

    async querySpecialAreaAccess() {
      this.specialMessages = await UserService.specialAreaAccess();
      console.log(this.specialMessages);

      console.log(JSON.stringify(specialMessages, null, 2));
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
  border-top: 1px solid rgb(225, 225, 225);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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
  stroke: rgb(210, 210, 210);
  transition: stroke 0.3s ease;
  /* Adjust the duration and timing function as needed */
}

/*
.svg-x-wrapper:hover .svg-x-hover-color-highlight {
  stroke: rgb(245, 53, 147); 
}
*/
.svg-container {
  height: 2rem;
  display: inline-block;
  flex-shrink: 0;
}

.svg-container:hover {
  background-color: rgb(225, 225, 225);
  cursor: pointer;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 10px;


}

.svg-container:hover .svg-x-hover-color-highlight {
  stroke: rgb(255, 255, 255);

}


.li-flex-wrapper {
  display: flex;
  justify-content: space-between;
  width: calc(100%);

  overflow-wrap: break-word;
  /* word wrap for long urls or things that overflow */
  word-break: break-all;
  padding-left: 1rem;
}

.li-flex-wrapper:hover {
  background: rgb(250, 250, 250);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>