<template>
  <form @submit.prevent="signUp">

    <h2 style="padding: 0.5em;">Sign Up</h2>

    <input name="text" type="text"     placeholder="Username" required v-model="username">
    <input name="email" type="email"    placeholder="Email"    required v-model="email">
    <input name="password" type="password" placeholder="Password" required v-model="password">
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
      username: '',
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
      return this.username && this.email && this.password;
    }
  },
  methods: {
    signUp() {
      if (!this.isFormValid) {
        return;
      }

      this.isSigningUp = true;
      this.signUpError = null;

      // register and login user
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
          // update 'displayName'
          updateProfile(auth.currentUser, {
            displayName: this.username
          })
          .then(() => {
            // emit event
            this.$emit('loggedIn', this.username)
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

form{width:20em; margin: auto;}   
</style>