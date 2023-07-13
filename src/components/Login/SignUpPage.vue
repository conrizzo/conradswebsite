<template>
    <form @submit.prevent="signUp">
        
      <h2>Sign Up</h2>

      <input type="text"     placeholder="Username" required v-model="username">
      <input type="email"    placeholder="Email"    required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button style="margin: 0.5em;" class="button-35">Sign Up</button>
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
        password: ''
      }
    },
    methods: {
      signUp() {
        // register and login user
        createUserWithEmailAndPassword(auth,this.email,this.password)
        .then(() => {
  
          // update 'displayName'
          updateProfile(auth.currentUser, {
            displayName: this.username
          })
          .then(() => {
            // emit event
            this.$emit('loggedIn')
          })
  
        })
      }
    }
  }
  </script>

<style scoped>
input{font-size: 1.25em; border-radius: 0.25em; border-width: 1px; outline: none; border: 1px solid #ff5959; padding: 0.25em; margin: 0.1em;}
button{width:fit-content; margin:auto}

form{width:20em; margin: auto;}   


     
</style>