<template>
    <!-- click.self means only this item will activate this function-->
    <div class="backdrop" @click.self="closeModal">
      <div class="helpGuide">
        <h1 style="margin-bottom: -0.2em;">{{ helptitle }}</h1>
       
        <!-- <p style="padding-bottom: 5px; text-align: left">{{ helptext }}</p> -->
        <p class ="help-guide-text">
      Enter numbers into the input field below using the keypad or by
      typing. The Cow-culator will perform mathematical operations on the
      numbers and count the number of Moo's! For instance, if you input
      Moo2*Moo2*2Moo, the Cow-culator will display the result as: 'Result: 8 Moo's:
      3', which means that there are three 'Moo's and 2 multiplied by 2 multiplied by 2 equals 8.
      Additionally, each input will show up in the array it's used in. Any input
      field entry or button press will update the values.
    </p>
    <!-- <h1>{{ helptitletwo }}</h1> -->
    
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["helptitle", "helptext", "helptitletwo"],
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  
  <!-- scoped applies to only this component -->
  <style scoped>
  h1 {
    color: rgb(105, 105, 198);
    border: none;
    padding: 0;
  }
  
  .helpGuide {
    width: 80%;
  max-width: 400px;
  padding-top: 0.75em;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  margin: 80px auto;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    /* bring this in front of all other elements */
    z-index: 1000;
  }
  .help-guide-text {
        display: inline-block;
        max-width: 500px;
        text-align: left;

        padding: 10px;

  }
  
  </style>