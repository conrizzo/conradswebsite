<template>
    <!-- conflict with "firebase": "^10.0.0", security-->
    <!-- tried downgrading to "firebase": "9.0.2" -->
    <div style="background-color: rgb(255, 255, 255); padding-bottom: 2em;">
    <h2 style="padding-top: 1em;">This page is still under construction - actively working on this!</h2>
      <div v-if="!isLoggedIn">
            <!-- login -->
            <template v-if="showLogin">
            <!-- listen for event -->
            <LoginPage @loggedIn="handleLogin"/>
            <p style="padding: 1em;">No account yet? <span @click="showLogin=false">Sign up</span></p>
            </template>
            <!-- or register -->
            <template v-else>
            <!-- listen for event -->
            <SignUpPage @loggedIn="handleLogin"/>
            <p>Already registered? <span @click="showLogin=true">Login</span></p>
            </template>
      </div>
      <!-- is logged in -->
      <div v-else>
        <button class="button-35" @click="handleLogout">Logout</button>
        <h2>Welcome, you can submit a message now, you are logged in! {{ displayName }}</h2>
      </div>
      
      <div style="padding-top: 5em;">
        <form class="addinput-form" @submit.prevent="createSubmission">
          <h2>Submit Message! - must be logged in for it to work.</h2>
          <input type="text" placeholder="Name to post as" required v-model="name" name="submissionName">
          <textarea type="text" placeholder="Description" required v-model="description" name="submissionDescription" cols="50" rows="10"></textarea>
          <button @click="createUser" class="button-35">Add Entry</button>
        </form>
        <!-- message area -->
        <h2 style="padding-bottom: 1em;">Public message posts:</h2>
        <div class="submission-container">
        <ul style="list-style: none;">
          <li v-for="submission in submissions" :key="submission.id">
            <div>
              <span style="font-weight: bold; font-size: 1em; color: rgb(3, 212, 142); display: inline-block; padding: 0.25em 0 0.25em 0;">{{ submission.name }}</span>  
              <p style="padding-left: 0.5em; font-size: 0.8em; color: #ff6b6b; display: inline-block;" 
                v-if="submission.timestamp">{{ submission.timestamp.toDate().toLocaleString() }}</p>
            </div>
            <p class="break-text" style="background-color: white; 
            display: inline-block; padding: 0.5em; margin-bottom: 0.5em; 
            border-radius: 0.5em;">{{ submission.description }}</p> 
          </li>
        </ul>
    </div>
      </div>

    </div>
    
    <FirstFooter></FirstFooter>
  </template>
  
  <script>
  import FirstFooter from "@/components/FirstFooter.vue";

  import SignUpPage from '@/components/Login/SignUpPage.vue'
  import LoginPage from '@/components/Login/LoginPage.vue'
  import "@/assets/globalCSS.css";
  
  // Import the Firebase database instance and the Firestore collection and addDoc functions
  import db from '@/firebase/init.js'
  import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
  import { auth } from '@/firebase/init.js'
  import { signOut } from 'firebase/auth'
  //import router from "@/router"; // import the router object
  
  export default {
    components: { SignUpPage, LoginPage, FirstFooter },
    data() {
      return {
        isLoggedIn: false,
        showLogin: true,
        name: '',
        description: '',    
        submissions: [],  
        displayName: '',   
        lastMessageSentTime: 0,
      }
    },
    beforeUpdate() {
      if (auth.currentUser) {
        // set local 'displayName' to user's displayName
        this.displayName = auth.currentUser.displayName
      }
    },
    methods:{
      async createUser(){
        try{
          //if (auth.currentUser) {
          // set local 'displayName' to user's displayName
          this.displayName = auth.currentUser
          
          this.sendMessage();
          
        } catch (err) {
          console.error("Error adding document!!!: ", err);
        }
      },
      async sendMessage(){

        console.log("message sent")
        // Get the current time in milliseconds
        const currentTime = new Date().getTime();
        console.log(currentTime)
        // Calculate the time elapsed since the last message was sent
        const timeElapsed = currentTime - this.lastMessageSentTime;
        console.log(timeElapsed)

        // If less than 5 seconds have elapsed, do not send the message
        if (timeElapsed < 5000) {
          console.log('Please wait at least 5 seconds before sending another message.');
          alert('Please wait at least 5 seconds before sending another message.');
          return;
        }


        // Get a reference to the 'items' collection in the database
        const colRef = collection(db, 'submissions')        
        // Create an object with the data for the new item
        const dataObj = {
          name: this.name,
          description: this.description,      
          timestamp: serverTimestamp(),          
        }
        // Add the new item to the 'items' collection and get a reference to the new document          
        const docRef = await addDoc(colRef, dataObj)
        console.log("Document written with ID: ", docRef.id);
      },
      handleLogin() {
        this.isLoggedIn = true;
        document.cookie = 'isLoggedIn=true; SameSite=Strict';
        localStorage.setItem('isLoggedIn', 'true'); // store the authentication state in local storage
      },
      // needs to be invoked from firebase - this is why it said signOut function didnt exist before
    signOut() {
        try {
            signOut(auth);
            console.log("User signed out");
        } catch (err) {
            console.error("Error signing out user: ", err);
        }
    },
      handleLogout() {
        this.signOut();
        this.isLoggedIn = false;
        document.cookie = 'isLoggedIn=false; SameSite=Strict';
        localStorage.removeItem('isLoggedIn'); // remove the authentication state from local storage
      },    
      
  }, // add a closing curly brace here
    created() {
      const colRef = collection(db, 'submissions')
      onSnapshot(colRef, (querySnapshot) => {
        const submissions = []
        querySnapshot.forEach((doc) => {
          const submission = { id: doc.id, ...doc.data() }
          if (submission.timestamp) {
            submissions.push(submission)
          }
        })
        submissions.sort((a, b) => a.timestamp.toMillis() - b.timestamp.toMillis())
        this.submissions = submissions
      })
  
      // retrieve the authentication state from local storage
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        this.isLoggedIn = true;
      }
    },
  }
  </script>
  
  <style scoped>
   
    span{cursor:pointer; color:#ff6b6b}
    .addinput-form{display:flex;
        flex-direction:column;
        row-gap:1em;
        max-width:25em;
        margin:1em auto;        
    }
    input{font-size: 1.25em; border-radius: 0.25em; border-width: 1px; outline: none; 
        border: 1px solid #ff5959; padding: 0.25em; margin-bottom: -0.5em;}
    textarea{font-size: 1.25em; border-radius: 0.25em; border-width: 1px; outline: none; border: 1px solid #ff5959; padding: 0.25em;}
    button{width:fit-content; margin:auto}

    .submission-container{
        background-color: rgb(221, 250, 240); 
        display: flex;
            flex-direction: column;
            align-items: center;
             text-align: left; width: 40em; margin: 0 auto; padding: 2em; border-radius: 1em; border: 1px solid black;

    }
    @media only screen and (max-width: 800px) {
        .submission-container{
            width: 90%;
            padding-right: 1em;
            padding-left: 1em;
        }
    }
  </style>