<template>
  <div class="signup-form-container">
    <div class='signup-form-styling'>
      <form @submit.prevent="signUp">
        <h2 style="padding: 0.5em;">Create an Account</h2>

        <div class="format-label-input">
          <label class="label-title-styling" for="text">Make a
            Username</label>
          <input name="text" type="text" placeholder="User Name" required v-model="userName" maxlength="20" v-focus>
        </div>
        <div class="format-label-input">
          <label class="label-title-styling" for="email">
            Email (Not Required)</label>
          <!-- Note: required attribute removed for email - does not need it -->
          <input name="email" type="email" placeholder="Email" v-model="email">
        </div>
        <div class="format-label-input">
          <label class="label-title-styling" for="password">Password</label>
          <div class="password-input">
            <input name="password" :type="passwordVisible ? 'text' : 'password'" placeholder="Password" required
              v-model="password">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <font-awesome-icon class="spacing-icon" :icon="passwordVisible ? 'eye' : 'eye-slash'"
              @click="passwordVisible = !passwordVisible" />

          </div>
        </div>
        <button style="margin-top: 1rem;" class="button-35" :disabled="isSigningUp">{{ signUpButtonText
          }}</button>
        <div style="margin-top: 0.5rem;">
          <span style="color: red;">{{ signUpMessage }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/axios';
/*
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase/init.js' */
// focus directive to the user input
const focus = {
  mounted: (el) => el.focus()
}

export default {
  // register event to emit
  emits: ['signUpSuccessful'],
  directives: {
    focus
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      isSigningUp: false,
      signUpMessage: null,
      passwordVisible: false,
    }
  },
  computed: {
    signUpButtonText() {
      return this.isSigningUp ? 'Signing Up...' : 'Sign Up';
    },
    isFormValid() {
      return this.userName && this.password;
    }
  },
  methods: {
    async signUp() {
      if (!this.isFormValid || this.userName.trim() === '' || this.password.trim() === '') {
        return;
      }
      this.signUpMessage = null; // reset the message
      this.isSigningUp = true; // this functions as a loading spinner
      try {
        // Prepare the user data
        const userData = {
          username: this.userName,
          password: this.password
        };
        // Send a POST request to the Flask backend using Axios
        const response = await axiosInstance.post('/backend/api/register', userData);
        // Handle success response
        console.log(response.data.message);
        this.signUpMessage = response.data.message;
        setTimeout(() => {
          this.$emit('signUpSuccessful');
        }, 1500);
      } catch (error) {
        if (error.response && error.response.data) {
          this.signUpMessage = `Error: ${error.response.data.message}`;
        } else {
          // Handle errors that don't have a response (e.g., network errors)
          this.signUpMessage = `Error: ${error.message}`;
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

.button-35:hover {
  background: rgb(140, 140, 140);
}

input {
  font-size: 1.5rem;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid rgb(218, 220, 224);
  padding: 0.25em;
  margin: 0.1em;
}

.label-title-styling {
  color: rgb(18, 18, 18);
  font-size: 1.1rem;
  align-self: flex-start;
  padding-left: 0.25em;
  margin-bottom: -.33rem;
}

button {
  width: fit-content;
  margin: auto
}

.signup-form-container {
  display: flex;
  justify-content: center;
}

.signup-form-styling {
  padding: 2rem;
  background: rgb(255, 255, 255);
  width: fit-content;
  border-radius: 1em;
  margin-top: 2rem;
  border: 1px solid #cecece;
}

.spacing-icon {
  margin-right: -1.25rem;
  padding-left: .25rem;
  width: 1rem;
}

.format-label-input {
  display: flex;
  flex-direction: column;
}
</style>