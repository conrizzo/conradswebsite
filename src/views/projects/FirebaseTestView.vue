<template>
  <!-- Turned off Firebase February 2024 -->


  <!-- conflict with "firebase": "^10.0.0", security-->
  <!-- tried downgrading to "firebase": "9.0.2" -->
  <CookieAccept />

  <div style="background: rgb(255, 255, 255); padding-bottom: 2em; padding-top: 2.7em;">
    <div style="justify-content: center;">
      <button v-if="isLoggedIn" class="button-35">
        <router-link class="text-links" style="text-decoration: none; color: white;" to="/authorized">
          Enter authorized user page
        </router-link>
      </button>

    </div>

    <!-- If not logged in -->
    <!-- <span v-if="!isLoggedIn" class="not-logged-in">You are not logged in!</span> -->



    <div style="color: rgb(18,18,18); border: 2px rgb(218, 220, 224);" v-if="!isLoggedIn">
      <!-- login -->
      <template v-if="showLogin">
        <!-- listen for event -->
        <LoginPage @loggedIn="handleLogin" />
        <div style="justify-content: center; display: flex;">
          <span class="login-information" style="padding: 1em;">No account yet?
            <br>
            <a class="login-sign-up" @click="showLogin = false">Sign up</a>
          </span>
        </div>
      </template>
      <!-- or register -->
      <template v-else>
        <!-- listen for event -->
        <SignUpPage @loggedIn="handleLogin" />
        <div style="justify-content: center; display: flex;">
          <span class="login-information" style="padding: 1em;">Already registered?
            <br>
            <a class="login-sign-up" style="cursor: pointer;" @click="showLogin = true">Log in</a></span>
        </div>
      </template>

    </div>
    <!-- is logged in -->
    <div v-else>
      <div style="cursor: auto; color: #c4c4c4;  font-size: 1.5em; margin-top: 2em; font-weight: bold;">
        <span>Welcome, {{ displayName }}!<button class="button-35" style="float: inline-block; margin-left: 4em;"
            @click="handleLogout">Logout</button><br>
          <span style="font-size: 0.75em; color: #c4c4c4;">You are logged in.</span></span>

      </div>

    </div>

    <div style="padding-top: 2em;">
      <form name="sendMessage" class="addinput-form" @submit.prevent="createSubmission">
        <div class="error-message"> {{ errorMessage }} </div>



        <div class="input-container">
          <div class="input-group">
            <div style="text-align: left;">
              <label for="Subject" class="label">Subject:</label>
              <span :style="textStyle">({{ inputLength }})</span>
            </div>
            <div class="input-flex">

              <input id="Subject" class="input" type="text" placeholder="Subject" required v-model="name"
                name="submissionName" :maxlength="messageLength" ref="subjectInput">

            </div>
          </div>
        </div>
        <div class="input-group">
          <label for="Message" class="label">Message:</label>
          <textarea id="Message" class="textarea" type="text" placeholder="Message" required v-model="message"
            name="submissionMessage" cols="50" rows="10"></textarea>
        </div>

        <button @click="createUser" class="button-35">Add Entry</button>
      </form>

      <!-- message area -->
      <!--
      <div class="submission-container">
        <h3 style="color: rgb(0, 227, 227);">Messages will appear publicly here.</h3>
        <ul style="list-style: none;">
          <li v-for="submission in submissions" :key="submission.id">
            <div>
              <span
                style="font-weight: bold; font-size: 1em; color: #87ff7a; display: inline-block; padding: 0.25em 0 0.25em 0;">{{
        submission.userName }} <br><span style="color: #d8d8d8; font-size: 0.9em;">Subject:</span> <span
                  style='color:#ffffff;'>{{ submission.name }}</span> </span>
              <p style="padding-left: 0.5em; font-size: 0.8em; color: #ffffff; display: inline-block;"
                v-if="submission.timestamp">{{ submission.timestamp.toDate().toLocaleString() }}</p>
            </div>
            <p class="break-text" style="background-color: white; 
            display: inline-block; padding: 0.5em; margin-bottom: 0.5em; 
            border-radius: 0.5em;">{{ submission.message }}</p>
          </li>
        </ul>
      </div>

  -->
      <div class="center-with-flex">
        <p>This page was setup with <a href="https://firebase.google.com/">Firebase</a>. I currently have this disabled.
          Everything worked for user logins + message posting. Deciding what kind of backend system I want to do with
          users
          and logins, why, what the goal is, etc.</p>
      </div>
    </div>

  </div>
</template>

<script>


import SignUpPage from '@/components/Login/SignUpPage.vue'
import LoginPage from '@/components/Login/LoginPage.vue'
import "@/assets/globalCSS.css";

// Import the Firebase database instance and the Firestore collection and addDoc functions
//import db from '@/firebase/init.js'
//import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
//import { auth } from '@/firebase/init.js'
//import { signOut } from 'firebase/auth'


import CookieAccept from "@/components/CookieAccept.vue";


export default {

  components: { SignUpPage, LoginPage, CookieAccept },

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
      errorMessage: '',
    }
  },
  computed: {
    textStyle() {
      return {
        color: this.name.length > 0 ? '#000' : 'red'
      }
    },
    inputLength() {
      return `${this.name.length}/${this.messageLength}`;
    },
  },

  watch: {
    name(newName) {
      if (newName.length >= this.messageLength) {
        this.errorMessage = "Subject cannot be longer than " + this.messageLength + " characters!";
        this.name = newName.slice(0, this.messageLength);
      } else if (newName.length == 0) {
        // change color back to red if the user deletes all the text
        this.textStyle.color = '#ff6b6b';
      }
    },
    // this references the subject field by default if a user is logged in
    isLoggedIn() {
      if (this.isLoggedIn) {
        this.$nextTick(() => {
          this.$refs.subjectInput.focus();
        });
      }
    }
  },
  methods: {
    async createUser() {
      try {
        // if no name entered throw error
        if (this.name == '') {
          this.errorMessage = "Please enter a subject!"
          throw new Error("Please enter a subject!")
        }
        // if no message entered throw error
        if (this.message == '') {
          this.errorMessage = "Please enter a message!"
          throw new Error("Please enter a message!")
        }

        // this.displayName = auth.currentUser
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
    /*
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
    */
    handleLogin() {
      // set login to true to confirm a user logged in
      this.isLoggedIn = true;
      //document.cookie = 'isLoggedIn=true; SameSite=Strict';
      localStorage.setItem('isLoggedIn', 'true'); // store the authentication state in local storage

      //document.cookie = `userName=${this.userName}; SameSite=Strict`; // store the username in a cookie
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
      //document.cookie = 'isLoggedIn=false; SameSite=Strict';
      //document.cookie = `userName=${""}; SameSite=Strict`;
      localStorage.removeItem('isLoggedIn'); // remove the authentication state from local storage
      localStorage.removeItem('userName'); // remove the authentication state from local storage
    },

  }, // add a closing curly brace here
  /*
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
  */
}
</script>

<style scoped>
h1 {
  color: rgb(18, 18, 18);
  font-size: 3em;
  text-align: center;
}

h2 {
  line-height: 1.4em;
}



p.login-information {
  color: rgb(18, 18, 18);
  font-size: 1.2em;
}

.top-text-sub-container {
  max-width: calc(100% - 20em);
  margin: 0 auto;
  text-align: left;
}

.top-text-container {
  display: flex;
  justify-content: center;
  color: #fff;
  border-bottom: 1px solid rgb(218, 220, 224);
  padding-bottom: 2em;
}

.button-35 {
  background-color: rgb(130, 130, 130);
}

.button-35:hover {
  box-shadow: rgb(17, 255, 180) 0 0 0 2px, transparent 0 0 0 0;
}

.error-message {
  color: #ff4a4a;
}

.header {
  color: #181818;
}

.not-logged-in {
  color: rgb(255, 89, 89);
}

.input-container {
  max-width: 40em;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.label {
  color: #202020;
  align-self: flex-start;
  font-weight: 600;
  padding: 0.25rem;
}

.input-flex {
  display: flex;
}

.input {
  width: 40em;
}

.input-length {
  color: #ff6b6b;
  margin-left: 0.5em;
  padding-top: 0.5em;
}

.textarea {
  width: 100%;
}


.addinput-form {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  max-width: 40em;
  margin: 1em auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

input {
  background-color: rgb(255, 255, 255);
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;
}

textarea {
  background-color: rgb(255, 255, 255);
  font-size: 1.5em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;

}

button {
  width: fit-content;
  margin: auto
}

.submission-container {
  background-color: #4e4e4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 41rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1em;
  border: 1px solid #fcfcfc;

}

.login-sign-up {
  color: rgb(11, 87, 208);
  cursor: pointer;
  font-size: 1.25rem;
}

.login-sign-up:hover {
  text-decoration: underline;

}

input:focus {
  border-color: rgb(17, 255, 180);
}

textarea:focus {
  border-color: rgb(17, 255, 180);
}

@media only screen and (max-width: 800px) {
  .submission-container {
    width: 90%;
    padding-right: 1em;
    padding-left: 1em;
  }

  .top-text-sub-container {
    max-width: none;
    padding: 1em;
  }




}
</style>