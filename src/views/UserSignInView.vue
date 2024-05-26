<template>

  <!---<CookieAccept />-->

  <div class="main-container">
    <!-- If not logged in -->

    <div v-if="isSignedIn" class=""
      style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; cursor: auto; color: rgb(30, 144, 255); font-size: 1.5em; font-weight: bold;">

      <span>Welcome, {{ userName }}!
        <span style="font-size: 0.75em; color: rgb(30, 144, 255);">This is the user navigation area.</span></span><br>
      <div>
        <div class="logged-in-button-container">
          <button class="clean-button highlight-green" @click="$router.push('/authorized')"
            style="margin-right: 0.5rem;">
            Continue to User Area
          </button>
          <button class="clean-button highlight-red" @click="signUserOut">Sign Out
          </button>
        </div>
      </div>
    </div>

    <div class="signed-in-or-not" v-if="!isSignedIn">
      <!-- Sign in -->
      <template v-if="showSignIn">
        <div class="center-sign-in">
          <SignInPage @signInSuccessful="handleSignInSuccess" />
          <div class="center-with-flex">
            <span class="signIn-information" style="padding: 1em;">No account yet?
              <br>
              <a class="sign-in-sign-up" @click="showSignIn = false">Sign up</a>
            </span>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- <SignUpPage @registrationSuccessful="handlesignInSuccess" /> -->
        <div class="center-sign-in">
          <SignUpPage />
          <div class="center-with-flex">
            <span class="signIn-information" style="padding: 1em;">Already registered? <br>
              <a class="sign-in-sign-up" style="cursor: pointer;" @click="showSignIn = true">Sign In</a></span>
          </div>
        </div>
      </template>
    </div>


    <div style="padding-top: 2em;">
      <div class="center-with-flex" style="text-align: left; padding: 1rem;">
        <div>
          <p>
            Now connects to self-made PostgreSQL database and allows user registration (sign up / sign in).<br>
            Stores secure sessions with Axios and JWT http cookies and CSRF tokens for access, and implicitly +
            explicitly refreshing the access cookies for user sessions.<br>
            This 'sign in' is a custom self-made setup with Vue.js on Nginx &rarr; Flask/Gunicorn/Python(Docker) &rarr;
            PostgreSQL(Docker).<br>
            For security the user made passwords are stored as hashes in the database, and the password is never stored
            anywhere.
          </p>
          <p>
            This is fully functional now, but still under development! At the moment all data and users will be deleted
            periodically as
            more testing occurs, so there isn't any long term data storage here.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


import SignUpPage from '@/components/UserSignIn/SignUpPage.vue'
import SignInPage from '@/components/UserSignIn/SignInPage.vue'
//import "@/assets/globalCSS.css";
//import axiosInstance from '@/axios';
import UserService from './projects/UserAccount/user.ts';
import { useUserStore } from '@/userStore/store.js';
import router from '@/router';



// Import the Firebase database instance and the Firestore collection and addDoc functions
//import db from '@/firebase/init.js'
//import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
//import { auth } from '@/firebase/init.js'
//import { signOut } from 'firebase/auth'
//import CookieAccept from "@/components/CookieAccept.vue";

export default {

  components: { SignUpPage, SignInPage, },

  data() {
    return {
      isSignedIn: false,
      showSignIn: true,

      userName: '',
      message: '',
      messageLength: 50,
      submissions: [],
      displayName: '',
      lastMessageSentTime: 0,
      timeElapsed: 0,
      errorMessage: '',
      userStore: useUserStore(),
    }
  },

  mounted() {
    this.userStore.initializeStore();
    if (this.userStore.isUserSignedIn) {
      console.log("User logged in: ", this.userStore.isUserSignedIn);
      console.log("Username: ", this.userStore.userName);
      this.userName = this.userStore.userName;
      this.isSignedIn = this.userStore.isUserSignedIn;
    }
  },

  methods: {

    handleSignInSuccess(userName) {
      this.userStore.signInSuccess(userName);
      this.showSignIn = false;
      this.isSignedIn = true;
      this.userName = this.userStore.userName;
      router.push('/authorized');
    },

    async signUserOut() {
      //this.userStore.signOut();
      await UserService.signOut();
      this.isSignedIn = false;
      this.showSignIn = true;
    },

  }
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

p {
  max-width: 80rem;
  padding-bottom: 1rem;
}

.top-text-sub-container {
  max-width: calc(100% - 20em);
  margin: 0 auto;
  text-align: left;
}

.main-container {
  background: linear-gradient(to right, rgba(173, 216, 230, 0.3), pink);
  height: 100vh;
}

.signed-in-or-not {
  color: rgb(18, 18, 18);
  border: 2px rgb(218, 220, 224);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logged-in-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.highlight-green:hover {
  box-shadow: rgb(17, 255, 180) 0 0 0 2px, transparent 0 0 0 0;
}

.highlight-red:hover {
  box-shadow: #ff4a4a 0 0 0 2px, transparent 0 0 0 0;
}

.textarea {
  width: 100%;
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

input:focus {
  border-color: rgb(17, 255, 180);
}

button {
  width: fit-content;
  margin: auto
}

.sign-in-sign-up {
  color: rgb(11, 87, 208);
  cursor: pointer;
  font-size: 1.25rem;
}

.sign-in-sign-up:hover {
  text-decoration: underline;
}

textarea:focus {
  border-color: rgb(17, 255, 180);
}

.center-sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 800px) {

  .top-text-sub-container {
    max-width: none;
    padding: 1em;
  }

}
</style>