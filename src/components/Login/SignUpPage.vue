<template>
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
    <button style="margin: 0.5em; margin-top: 2rem;" class="button-35" :disabled="isSigningUp">{{ signUpButtonText
      }}</button>
    <div v-if="signUpError" style="color: red;">{{ signUpError }}</div>
  </form>
</template>

<script>

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
        // register and login user
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        // update 'displayName'
        await updateProfile(auth.currentUser, {
          displayName: this.userName
        });
        // emit event
        this.$emit('loggedIn', this.userName);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.signUpError = 'Error: Email already in use.';
            break;
          default:
            this.signUpError = error.message;
            break;
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

form {
  width: 20em;
  margin: auto;
  color: #fff;
  border: 1px solid #cecece;
  border-radius: 1em;
  padding: 0 1em 0em 1em;
  height: 375px;
  background: rgb(245, 245, 245);
}
</style>