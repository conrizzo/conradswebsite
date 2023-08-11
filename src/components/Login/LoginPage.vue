<template>
  <form @submit.prevent="login">

    <h2 style="padding: 0.5em;">Log in</h2>



    
  <div style="display: flex; flex-direction: column;">
    <label for="email" style="align-self: flex-start; padding-left: 0.25em;">Email:</label>
    <input name="email" type="email" placeholder="Email" required v-model="email" autocomplete="email">
  </div>
  
  
  <div style="display: flex; flex-direction: column; ">
  <label for="password" style="align-self: flex-start; padding-left: 0.25em;">Password:</label>
  <input name="password" type="password" placeholder="Password" required v-model="password">
</div>
    
    <button style="margin-top: 0.5em;" class="button-35">Log in</button>

  </form>
</template>
  
<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/init.js'

export default {
  emits: ["loggedIn"], // declare the loggedIn event here
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // login user
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // emit event for member area
          this.$emit('loggedIn', this.userName)
        })
        .catch((error) => {
          // handle error
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/user-not-found') {
            alert('User not found! Please check your email and password and try again.');
          } else {
            alert(errorMessage);
          }
        });
    }
  }
}
</script>
<style scoped>
input {
  font-size: 1.25em;
  border-radius: 0.25em;
  border-width: 1px;
  outline: none;
  border: 1px solid #ff5959;
  padding: 0.25em;
}

button {
  width: fit-content;
  margin: auto
}


form {
  width: 20em;
  margin: auto;
}

input {
  margin: 0.1em;
}
input:focus {
    border-width: 2px;
}

</style>