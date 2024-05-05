<template>
  <div class="signup-form-container">
    <div class='signup-form-styling'>
      <form @submit.prevent="signUp">

        <h2 style="padding: 0.5em;">Sign Up</h2>

        <div style="display: flex; flex-direction: column;">
          <label class="label-title-styling" for="text" style="align-self: flex-start; padding-left: 0.25em;">Make a
            Username:</label>
          <input name="text" type="text" placeholder="User Name" required v-model="userName" maxlength="20" v-focus>
        </div>
        <div style="display: flex; flex-direction: column;">
          <label class="label-title-styling" for="email" style="align-self: flex-start; padding-left: 0.25em;">Enter an
            email:</label>
          <input name="email" type="email" placeholder="Email" required v-model="email">
        </div>
        <div style="display: flex; flex-direction: column;">
          <label class="label-title-styling" for="password"
            style="align-self: flex-start; padding-left: 0.25em;">Password:</label>
          <input name="password" type="password" placeholder="Password" required v-model="password">
        </div>
        <button style="margin: 0.5em; margin-top: 1rem;" class="button-35" :disabled="isSigningUp">{{ signUpButtonText
          }}</button>
        <div style="color: red;">{{ signUpError }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/*
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase/init.js' */

// focus directive to the user input
const focus = {
  mounted: (el) => el.focus()
}

export default {
  // register event to emit
  emits: ['loggedIn'],
  directives: {
    focus
  },
  data() {
    return {
      userName: '',
      email: '',
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
    async signUp() {
      if (!this.isFormValid || this.userName.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
        return;
      }
      this.isSigningUp = true;
      try {
        // Prepare the user data
        const userData = {
          username: this.userName,
          password: this.password
        };
        // Send a POST request to the Flask backend using Axios
        const response = await axios.post('/backend/api/register', userData);

        // Handle success response
        console.log(response.data.message);
        // Optionally, emit an event for successful registration
        // I have this turned off for the sign up for now
        // user must login after signing up
        // this.$emit('registrationSuccessful', response.data.username);
      } catch (error) {
        if (error.response && error.response.data) {
          this.signUpError = `Error: ${error.response.data.message}`;
        } else {
          // Handle errors that don't have a response (e.g., network errors)
          this.signUpError = `Error: ${error.message}`;
        }
      } finally {
        this.isSigningUp = false;
      }
    }
  }
}
</script>

<style scoped>
h2 {
  color: rgb(18, 18, 18);
}

input:focus {
  border-color: rgb(17, 255, 180);
}

input {
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;
  margin: 0.1em;
}

.label-title-styling {
  color: rgb(18, 18, 18);
}

button {
  width: fit-content;
  margin: auto
}

.signup-form-container {
  display: flex;
  justify-content: center;
  height: 24.5rem;
}

.signup-form-styling {
  padding: 1em;
  background: rgb(245, 245, 245);
  width: fit-content;
  border-radius: 1em;
  margin-top: 2em;
  border: 1px solid #cecece;
}
</style>