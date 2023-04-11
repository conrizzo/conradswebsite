<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="helpGuide">
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
        Currently, it is set to automatically perform calculations. The "Cowculate"
        button is sort of an "override" to force any calculation. There are a few
        tricks to this, for example when entering numbers the result will only
        show when a math operator occurs after a number, and a calculation can
        be performed with another number! 
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
  color: rgb(144, 0, 255);
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