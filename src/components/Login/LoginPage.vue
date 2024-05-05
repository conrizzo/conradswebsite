<template>
  <div class="login-form-container">
    <div class="login-form-styling">
      <form @submit.prevent="login">
        <h2 style="padding: 0.5em; color: rgb(18,18,18);">Log in</h2>

        <div style="display: flex; flex-direction: column;">
          <label for="email" style="align-self: flex-start; padding-left: 0.25em;">Email:</label>
          <input name="email" type="email" placeholder="Email" required v-model="email" autocomplete="email" v-focus>
        </div>

        <div style="display: flex; flex-direction: column; ">
          <label for="password" style="align-self: flex-start; padding-left: 0.25em;">Password:</label>
          <input name="password" type="password" placeholder="Password" required v-model="password">
        </div>

        <button style="margin-top: 1rem;" class="button-35">
          Log in
        </button>

        <div style="margin-top: 1em;">
          <span style="color: red;">{{ errorMessage }}</span>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
/* import { signInWithEmailAndPassword } from 'firebase/auth' 
import { auth } from '@/firebase/init.js' */


// focus directive to the email input
const focus = {
  mounted: (el) => el.focus()
}

export default {
  emits: ["loggedIn"], // declare the loggedIn event here
  directives: {
    focus
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    async login() {
      try {
        // Prepare the login data
        const loginData = {
          username: this.userName, // Make sure you have a userName data property
          password: this.password
        };
        // Send a POST request to the Flask backend for login
        const response = await fetch('/backend/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        const result = await response.json();

        if (!response.ok) {
          // Handle HTTP error responses from your backend
          throw new Error(result.message || 'Failed to login');
        }

        // Login successful
        this.$emit('loggedIn', this.userName);
        console.log(result.message); // Optionally log the success message
      } catch (error) {
        // Handle errors based on the backend response
        this.errorMessage = `Error: ${error.message}`;
      }
    }
  }
}
</script>
<style scoped>
.button-35 {
  
}

.button-35:hover {
  box-shadow: rgb(17, 255, 180) 0 0 0 2px, transparent 0 0 0 0;
}

input {
  font-size: 1.25em;
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

input:focus {
  border-color: rgb(17, 255, 180);
}

.login-form-container {
  display: flex;
  justify-content: center;
  height: 20.5rem;
}

.login-form-styling {
  padding: 1em;
  background: rgb(245, 245, 245);
  width: fit-content;
  border-radius: 1em;
  margin-top: 2em;
  border: 1px solid #cecece;
}
</style>