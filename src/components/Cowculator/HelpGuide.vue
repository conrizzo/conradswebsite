<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="helpGuide">
      <button class="close" @click.self="closeModal"></button>
      <h1>{{ helptitle }}</h1>

      <!-- <p style="padding-bottom: 5px; text-align: left">{{ helptext }}</p> -->
      <p class="help-guide-text">
        Enter numbers into the input field below using the keypad or by typing.
        The Cow-culator will perform mathematical operations on the numbers and
        count the number of Moo's! For instance, Moo2*Moo2*2Moo = 8, and Number of Moos: 3. 
        Any input field entry or button press will update the values. Additionally,
        typing numbers into the input field, or hitting the back button will
        highlight corresponding buttons in the user interface. 
      </p>
      <p class="help-guide-text">
        Currently, it is set to automatically perform calculations. Operations like 2(2)=4, (2)2=4, and (2)(2)=4 function correctly.
        The operations -(2+2) or 2*-(2+2) where the value inside parentheses needs to be negated also now work!
        This was solved by pushing a new Node to the stack with the value 0 and performing 0 minus the value in
        parenthesis. For example, with the expression "2*-(2+2)" the math this calculator performs is 2*(0-(2+2)) = -8. Another interesting
        challenge that was solved in a surprisingly simple way is adding in a math.pow() function. To do this correclty in my code, parenthesis are added around the base and exponent values, but the user 
        doesn't see them added in! For example the user would see 2*2^2+2 = 10 but the actual expression that is evaluated is 2*(2^2)+2 = 10.
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
  color:#42b883;
  border: none;
  font-size: 1.6em;
  margin-bottom: 0em;
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

  position: relative; /* this makes sure the X button is located within this element in the top right */
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
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
  font-size: 0.8em;  
  line-height: 1.7;
}

/* CSS FOR MODAL "X" Close button*/
.close {
  position: absolute;
  top: 0em;
right: 0em;
cursor:pointer;
  width: 15px;
  height: 15px;
  
  border: none;
  width: 40px;
  height: 40px;
  background-color: #42b883;
  border-top-right-radius: 10px; /* matches the modal top right corner */
  border-bottom-left-radius: 10px; /* matches the modal top right corner */
}
.close:hover {
  
  background-color: #ff5959;
  
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 28px;
  width: 2px;
  background-color: #000000;
  top: 0.5em;
  left: 1.4em;
  
}
.close:before {
  transform: rotate(45deg);
  
}
.close:after {
  transform: rotate(-45deg);
  
}


</style>