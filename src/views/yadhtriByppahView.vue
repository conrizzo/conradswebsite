<template>
    <div>
      <button
        style="margin-top: 5em; background-color: red"
        class="button-35"
        @click="startTimer"
      >
        CLICK ME
      </button>
      <h2 style="font-size: 7em; color: #b3ff00;" v-if="showBirthdayMessage">Happy Birthday</h2>
      <h1 style="font-size: 5em; color: white;">{{ reversedText }}</h1>
      
    </div>
  </template>
  
  <script>
  export default {
    name: "yadhtriByppah",
    data() {
      return {
        text: "Eat pizza or macaroni and cheese AND have a good day AND dont stare at the sun.",
        reversedText: "",
        showBirthdayMessage: false,
      };
    },
    methods: {
      reverseText() {
        this.reversedText = this.text.split("").reverse().join("");
      },
      startTimer() {
        setTimeout(() => {
          this.showBirthdayMessage = true;
        }, 4000);
        this.reverseText(); // Reverse the text immediately
      },
    },
  };
  </script>
  
  <style></style>
  