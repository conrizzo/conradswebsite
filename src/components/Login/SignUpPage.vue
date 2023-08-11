<template>
  <form @submit.prevent="signUp">

    <h2 style="padding: 0.5em;">Sign Up</h2>
    <div style="display: flex; flex-direction: column;">
    <label for="text" style="align-self: flex-start; padding-left: 0.25em;">Make a Username:</label>
    <input name="text" type="text"     placeholder="User Name" required v-model="userName" maxlength="20">
  </div>
  <div style="display: flex; flex-direction: column;">
    <label for="email" style="align-self: flex-start; padding-left: 0.25em;">Enter an email:</label>
    <input name="email" type="email"    placeholder="Email"    required v-model="email">
  </div>
  <div style="display: flex; flex-direction: column;">
    <label for="password" style="align-self: flex-start; padding-left: 0.25em;">Password:</label>
    <input name="password" type="password" placeholder="Password" required v-model="password">
  </div>
    <button style="margin: 0.5em;" class="button-35" :disabled="isSigningUp">{{ signUpButtonText }}</button>
    <div v-if="signUpError" style="color: red;">{{ signUpError }}</div>
  </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase/init.js'

export default {
  // register event to emit
  emits: ['loggedIn'],
  data() {
    return {
      userName: '',
      email:    '',
      password: '',
      isSigningUp: false,
      signUpError: null
    }
  },
  computed: {
    signUpButtonText() {
      return this.isSigningUp ? 'Signing Up...' : 'Sign Up';
    },
    isFormValid() {
      return this.userName && this.email && this.password;
    }
  },
  methods: {
    signUp() {
      
      if (!this.isFormValid || this.userName.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      return;
      }

      this.isSigningUp = true;
      this.signUpError = null;

      // register and login user
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
          // update 'displayName'
          updateProfile(auth.currentUser, {
            displayName: this.userName
          })
          .then(() => {
            // emit event
            this.$emit('loggedIn', this.userName)
          })
          .catch((error) => {
            this.signUpError = error.message;
          })
          .finally(() => {
            this.isSigningUp = false;
          });

        })
        .catch((error) => {
          this.signUpError = error.message;
          this.isSigningUp = false;
        });
    }
  }
}
</script>

<style scoped>
input{font-size: 1.25em; border-radius: 0.25em; border-width: 1px; outline: none; border: 1px solid #ff5959; padding: 0.25em; margin: 0.1em;}
button{width:fit-content; margin:auto}

form{width:20em; margin: auto; color: #fff;}   
</style>