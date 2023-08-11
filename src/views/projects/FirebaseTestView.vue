<template>
  <!-- conflict with "firebase": "^10.0.0", security-->
  <!-- tried downgrading to "firebase": "9.0.2" -->
  
  <div style="background: rgb(240, 240, 240); padding-bottom: 2em; padding-top: 2.7em;">
    
    <hr style="position: absolute; top: 7.6em; left: 0; right: 0; border: none; border-top: 1px solid black;">
    <h2 style="padding-top: 5em; padding-bottom: 1em;">This page is still under construction - actively working on this!     
    </h2>
    <p>This is just a place to learn more about setting up a login/sign out setup using a basic BaaS (Back end as a
      service) tools.<br>
      The goal will eventually be to create a more comprehensive backend once there is a need for it.</p>
    <div v-if="!isLoggedIn">
      <!-- login -->
      <template v-if="showLogin">
        <!-- listen for event -->
        <LoginPage @loggedIn="handleLogin" />
        <p style="padding: 1em;">No account yet? <span @click="showLogin = false">Sign up</span></p>
      </template>
      <!-- or register -->
      <template v-else>
        <!-- listen for event -->
        <SignUpPage @loggedIn="handleLogin" />
        <p>Already registered? <span @click="showLogin = true">Login</span></p>
      </template>
    </div>
    <!-- is logged in -->
    <div v-else>
      <span style="color: black; position: absolute; left: 0.5em; top: 0.5em; margin-top: 1.7em; font-size: 1.5em;">Welcome, {{ displayName }}<br> You are logged in.</span>

      <button class="button-35" style="position: absolute;  top: 3em;
  right: 1em;" @click="handleLogout">Logout</button>

    </div>

    <div style="padding-top: 2em;">
      <form name="sendMessage" class="addinput-form" @submit.prevent="createSubmission">
        <h2>Submit Message! - must be logged in for it to work.</h2>
          
          <div style="max-width: 40em;">
            <div style="display: flex; flex-direction: column;">
            <label for="Subject" style="align-self: flex-start; padding-left: 0.25em;">Subject:</label>
              <div style="display: flex;">
                <input style="width: 23em; font-size: 1em;" type="text" placeholder="Subject" required v-model="name" name="submissionName" maxlength="{{this.messageLength}}">
                <span style="margin-left: 0.5em; padding-top: 0.5em;">{{ name.length }}/{{ this.messageLength }}</span> 
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="Message" style="align-self: flex-start; padding-left: 0.25em;">Message:</label>
            <textarea type="text" placeholder="Message" required v-model="message" name="submissionMessage" cols="50"
              rows="10"></textarea>
          </div>
        <button @click="createUser" class="button-35">Add Entry</button>
      </form>
      <!-- message area -->

      <div class="submission-container">
        <ul style="list-style: none;">
          <li v-for="submission in submissions" :key="submission.id">
            <div>
              <span
                style="font-weight: bold; font-size: 1em; color: #b0ffa7; display: inline-block; padding: 0.25em 0 0.25em 0;">{{
                  submission.userName }} <br><span style="color: #d8d8d8; font-size: 0.9em;">Subject:</span> <span style='color:#ffffff;'>{{ submission.name }}</span> </span>
              <p style="padding-left: 0.5em; font-size: 0.8em; color: #ffffff; display: inline-block;"
                v-if="submission.timestamp">{{ submission.timestamp.toDate().toLocaleString() }}</p>
            </div>
            <p class="break-text" style="background-color: white; 
            display: inline-block; padding: 0.5em; margin-bottom: 0.5em; 
            border-radius: 0.5em;">{{ submission.message }}</p>
          </li>
        </ul>
      </div>
    </div>

  </div>

  <FirstFooter></FirstFooter>
</template>
  
<script>
import FirstFooter from "@/components/FirstFooter.vue";

import SignUpPage from '@/components/Login/SignUpPage.vue'
import LoginPage from '@/components/Login/LoginPage.vue'
import "@/assets/globalCSS.css";

// Import the Firebase database instance and the Firestore collection and addDoc functions
import db from '@/firebase/init.js'
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { auth } from '@/firebase/init.js'
import { signOut } from 'firebase/auth'
//import router from "@/router"; // import the router object

export default {
  components: { SignUpPage, LoginPage, FirstFooter },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      userName: this.displayName,
      name: '',
      message: '',
      messageLength: 50,
      submissions: [],
      displayName: '',
      lastMessageSentTime: 0,
      timeElapsed: 0,
    }
  },
  beforeUpdate() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName;

      this.userName = this.displayName;
    }
  },
  watch: {
    name(newName) {
      if (newName.length >= this.messageLength) {
        alert("Subject cannot be longer than " + this.messageLength + " characters!");
        this.name = newName.slice(0, this.messageLength);
      }
    }
  },
  methods: {
    async createUser() {
      try {
        // if no name entered throw error
        if (this.name == '') {
          alert("Please enter a name!")
          throw new Error("Please enter a name!")
        }
        // if no message entered throw error
        if (this.message == '') {
          alert("Please enter a message!")
          throw new Error("Please enter a name!")
        }
        //if (auth.currentUser) {
        // set local 'displayName' to user's displayName          
        this.displayName = auth.currentUser
        if (this.isLoggedIn) {
          this.sendMessage();
        }
        else {
          alert("You must be logged in to submit a message!")
        }

      } catch (err) {
        console.error("Error adding document!: ", err);
      }
    },
    async sendMessage() {


      // Get the current time in milliseconds
      const currentTime = new Date().getTime();
      console.log(currentTime)
      // Calculate the time elapsed since the last message was sent
      this.timeElapsed = currentTime - this.lastMessageSentTime;
      console.log(this.timeElapsed)

      // If less than 5 seconds have elapsed, do not send the message
      if (this.timeElapsed < 10000) {
        console.log('Please wait at least 10 seconds before sending another message.');
        alert('Please wait at least 10 seconds before sending another message.');
        return;
      }
      console.log("message sent")
      // this effectively uses the last message sent to find the time between them
      this.lastMessageSentTime = currentTime;


      // Get a reference to the 'items' collection in the database
      const colRef = collection(db, 'submissions')
      // Create an object with the data for the new item
      const dataObj = {
        name: this.name,
        userName: this.userName,
        message: this.message,
        timestamp: serverTimestamp(),
      }
      // Add the new item to the 'items' collection and get a reference to the new document          
      const docRef = await addDoc(colRef, dataObj)
      console.log("Document written with ID: ", docRef.id);
    },
    handleLogin() {
      // set login to true to confirm a user logged in
      this.isLoggedIn = true;
      document.cookie = 'isLoggedIn=true; SameSite=Strict';
      localStorage.setItem('isLoggedIn', 'true'); // store the authentication state in local storage

      document.cookie = `userName=${this.userName}; SameSite=Strict`; // store the username in a cookie
      localStorage.setItem('userName', this.userName); // store the username in local storage        
    },
    // needs to be invoked from firebase - this is why it said signOut function didnt exist before
    signOut() {
      try {
        signOut(auth);
      } catch (err) {
        console.error("Error signing out user: ", err);
      }
    },
    handleLogout() {
      this.signOut();
      this.isLoggedIn = false;
      document.cookie = 'isLoggedIn=false; SameSite=Strict';
      document.cookie = `userName=${""}; SameSite=Strict`;
      localStorage.removeItem('isLoggedIn'); // remove the authentication state from local storage
      localStorage.removeItem('userName'); // remove the authentication state from local storage
    },

  }, // add a closing curly brace here
  created() {
    const colRef = collection(db, 'submissions')
    onSnapshot(colRef, (querySnapshot) => {
      const submissions = []
      querySnapshot.forEach((doc) => {
        const submission = { id: doc.id, ...doc.data() }
        if (submission.timestamp) {
          submissions.push(submission)
        }
      })
      submissions.sort((a, b) => a.timestamp.toMillis() - b.timestamp.toMillis())
      this.submissions = submissions
    })

    // retrieve the authentication state from local storage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true;
    }
  },
}
</script>
  
<style scoped>
span {
  cursor: pointer;
  color: #ff6b6b
}

.addinput-form {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  max-width: 43.85em;
  margin: 1em auto;
  padding-right: 0.3em;
  padding-left: 0.3em;
}

input {  
  
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid #252525;
  padding: 0.25em;
}

textarea {  
  
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid #252525;
  padding: 0.25em;
}

button {
  width: fit-content;
  margin: auto
}

.submission-container {
  background-color: rgb(0, 171, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 40em;
  margin: 0 auto;
  padding: 2em;
  border-radius: 1em;
  border: 1px solid #252525;

}

@media only screen and (max-width: 800px) {
  .submission-container {
    width: 90%;
    padding-right: 1em;
    padding-left: 1em;
  }
  
}
</style>