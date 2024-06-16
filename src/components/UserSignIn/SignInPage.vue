<template>
  <div class="sign-in-form-container">
    <div class="sign-in-form-styling">
      <form @submit.prevent="newSignIn">
        <h2 style="padding: 0.5em; color: rgb(18,18,18);">Sign In</h2>
        <!--
        <div style="display: flex; flex-direction: column;">
          <label for="email" style="align-self: flex-start; padding-left: 0.25em;">Email:</label>
          <input name="email" type="email" placeholder="Email" required v-model="email" autocomplete="email" v-focus>
        </div>
      -->
        <div class="format-label-input">
          <label class="label-title-styling" for="username">Username</label>
          <input name="username" type="text" placeholder="Username" required v-model="userName" autocomplete="username"
            v-focus>
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

        <button style="margin-top: 1rem;" class="button-35">
          Sign In
        </button>

        <div style="margin-top: .5rem;">
          <span style="color: red;">{{ errorMessage }}</span>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
/* import axios from 'axios'; */
/* import { signInWithEmailAndPassword } from 'firebase/auth' 
import { auth } from '@/firebase/init.js' */



import UserService from '../../views/projects/UserAccount/user.ts';

// focus directive to the email input
const focus = {
  mounted: (el) => el.focus()
}

export default {
  emits: ["signInSuccessful"], // Declare the SignedIn event here

  directives: {
    focus
  },

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      userName: '',
      passwordVisible: false,
    }
  },

  methods: {

    async newSignIn() {

      const userData = {
        username: this.userName,
        password: this.password
      };

      try {
        let signInResult = await UserService.signIn(userData);
        if (signInResult) {
          this.$emit('signInSuccessful', this.userName);
        }
      }
      catch (error) {
        console.error('Error signing in:', error);
      }
    },
  }
}

</script>

<style scoped>
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
}

button {
  width: fit-content;
  margin: auto
}


input {
  margin: 0.1em;
}

.password-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.format-label-input {
  display: flex;
  flex-direction: column;
}

input:focus {
  border-color: rgb(17, 255, 180);
}

.sign-in-form-container {
  display: flex;
  justify-content: center;
}

.label-title-styling {
  color: rgb(18, 18, 18);
  font-size: 1.1rem;
  align-self: flex-start;
  padding-left: 0.25em;
  margin-bottom: -.33rem;
}

.sign-in-form-styling {
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
</style>