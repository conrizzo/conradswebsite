<template>
  <!-- Turned off Firebase February 2024 -->


  <!-- conflict with "firebase": "^10.0.0", security-->
  <!-- tried downgrading to "firebase": "9.0.2" -->
  <!---<CookieAccept />-->

  <div style="background: rgb(255, 255, 255); padding-bottom: 2em;height: 100svh;">

    <!-- If not logged in -->
    <!-- <span v-if="!isLoggedIn" class="not-logged-in">You are not logged in!</span> -->

    <div v-if="isLoggedIn" class="center-with-flex">
      <div style="padding-top: 2rem;">
        <button class="button-35">
          <router-link class="text-links" style="text-decoration: none; color: white;" to="/authorized">
            Enter authorized user page
          </router-link>
        </button>
        <div style="cursor: auto; color: #c4c4c4;  font-size: 1.5em; margin-top: 2em; font-weight: bold;">
          <span>Welcome, {{ userName }}!<br>
            <span style="font-size: 0.75em; color: #c4c4c4;">You are logged in.</span></span><br>
          <button class="button-35" style='margin-top: 1rem;' @click="handleLogout">Logout
          </button>
        </div>
      </div>
    </div>

    <div style="color: rgb(18,18,18); border: 2px rgb(218, 220, 224);" v-if="!isLoggedIn">
      <!-- login -->
      <template v-if="showLogin">
        <LoginPage @loginSuccessful="handleLoginSuccess" />
        <div style="justify-content: center; display: flex;">
          <span class="login-information" style="padding: 1em;">No account yet?
            <br>
            <a class="login-sign-up" @click="showLogin = false">Sign up</a>
          </span>
        </div>
      </template>
      <template v-else>
        <SignUpPage @registrationSuccessful="handleLoginSuccess" />
        <div style="justify-content: center; display: flex;">
          <span class="login-information" style="padding: 1em;">Already registered?
            <br>
            <a class="login-sign-up" style="cursor: pointer;" @click="showLogin = true">Log in</a></span>
        </div>
      </template>
    </div>

    <!--
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
      -->

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
    <div style="padding-top: 2em;">
      <div class="center-with-flex" style="text-align: left; padding: 1rem;">
        <div>

          <p>
            Now connects to self-made PostgreSQL database and allows user registration (sign up / sign in).<br>
            Stores sequre sessions with Axios and JWT tokens.<br>
            This login is a custom setup with Vue.js on Nginx &rarr; Flask/Gunicorn/Python(Docker) &rarr; PostgreSQL(Docker).<br>
            For security the user made passwords are stored as hashes in the database, and the password is never stored anywhere.
          </p>

          <br>
          <p>
            This page was previously setup with <a href="https://firebase.google.com/">Firebase</a> and
            allowed logins, user sessions, message posting.
          </p>

        </div>
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
//import CookieAccept from "@/components/CookieAccept.vue";

export default {

  components: { SignUpPage, LoginPage, },

  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      userName: '',
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
  mounted() {
    // userName in local storage, set logged in true - for if user already logged in, came back to page
    if (localStorage.getItem('userName')) {
      this.isLoggedIn = true; // 

      // set localstorage username to displayed username
      const userName = localStorage.getItem('userName');
      this.userName = userName;
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

    handleLoginSuccess(userName) {
      // set login to true to confirm a user logged in
      console.log(userName);
      this.isLoggedIn = true;

      localStorage.setItem('isLoggedIn', 'true'); // store the authentication state in local storage


      localStorage.setItem('userName', userName); // store the username in local storage    
      console.log("User logged in: ", this.isLoggedIn);
      this.userName = localStorage.getItem('userName');
    },
    // needs to be invoked from firebase - this is why it said signOut function didnt exist before
    signOut() {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn'); // remove the authentication state from local storage
      localStorage.removeItem('userName'); // remove the authentication state from local storage

      // Remove the token from Axios default headers
      if (axios.defaults.headers.common['Authorization']) {
        delete axios.defaults.headers.common['Authorization'];
      }

      console.log("User logged out");
    },
    handleLogout() {
      this.signOut();
      //document.cookie = 'isLoggedIn=false; SameSite=Strict';
      //document.cookie = `userName=${""}; SameSite=Strict`;     
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

p{
  max-width: 80rem;
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