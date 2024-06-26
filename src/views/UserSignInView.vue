<template>
  <!---<CookieAccept />-->
  <div class="main-container">

    <!-- Show a simple navigation area if the user is logged in -->
    <div v-if="isSignedIn" class="center-area-horizontally-and-vertically">

      <div class="user-signed-in-console">

        <span>Welcome, {{ userName }}!
          This is the user navigation area.</span>

        <div class="user-signed-in-button-area">
          <div>
            <button class="clean-button highlight-green" @click="$router.push('/authorized')"
              style="margin-right: 0.5rem; margin-top: .5rem;">
              Continue to User Area
            </button>
          </div>
          <div>
            <button class="clean-button highlight-green" style="margin-top: .5rem;"
              @click="showChangePasswordMenu = !showChangePasswordMenu">
              Change Password
            </button>
          </div>
          <div>
            <button class="clean-button highlight-red" style="margin-top: .5rem;" @click="signUserOut">
              Sign Out
            </button>
          </div>
        </div>

        <div v-if="showChangePasswordMenu === true" style="margin-top: .5rem;">
          <ChangePassword />
        </div>

      </div>

    </div>

    <!-- Show Sign In with option for user to select Sign Up to make an account -->
    <div class="signed-in-or-not" v-if="!isSignedIn">
      <!-- Sign in -->
      <template v-if="showSignIn">
        <div class="center-sign-in">
          <SignInPage @signInSuccessful="handleSignInSuccess" />

          <span class="signIn-information" style="padding: 1em;">No account yet?

            <a class="sign-in-sign-up" @click="showSignIn = false">Create an Account</a>
          </span>

        </div>
      </template>
      <template v-else>
        <!-- Sign up -->
        <div class="center-sign-in">
          <SignUpPage @signUpSuccessful="handleSignUpSuccess" />
          <div class="center-with-flex">
            <span class="signIn-information" style="padding: 1em;">Already registered?
              <a class="sign-in-sign-up" style="cursor: pointer;" @click="showSignIn = true">Sign In</a></span>
          </div>
        </div>
      </template>
    </div>

    <!-- information about the page -->
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
import ChangePassword from '@/components/UserSignIn/ChangePassword.vue'
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

  components: { SignUpPage, SignInPage, ChangePassword },

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
      showChangePasswordMenu: false,
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
    handleSignUpSuccess() {
      this.showSignIn = true; // show the sign in form
    },

    handleSignInSuccess(userName) {
      this.userStore.signInSuccess(userName);
      this.showSignIn = false;
      this.isSignedIn = true;
      this.userName = this.userStore.userName;
      router.push('/authorized'); // go to authorized user area
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

.center-area-horizontally-and-vertically {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
}

.signed-in-or-not {
  color: rgb(18, 18, 18);
  border: 2px rgb(218, 220, 224);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.user-signed-in-console {
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  cursor: auto;
  color: rgb(30, 144, 255);
  font-size: 1.5em;
  font-weight: bold;
}

.user-signed-in-button-area {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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