<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="aboutCowculator">
      <h2 style="padding-top: 0.25em; padding-bottom: 0.25em;">{{ header }}</h2>
      <router-link style="text-decoration: none;" to ="/projects/1Do%20Cowculations%20with%20math%20and%20moos!Cowculator">Actual code that does the calculations here!</router-link>
      <p class="about-modal-text" style="padding-bottom: 5px; text-align: left">
        {{ text }}
      </p>
      
      <div>
        <img style="max-width: 15em" :src="imagePath" alt="Image" />
      </div>
      <a
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          text-decoration: none;
        "
        :href="url"
        >Conrad's GitHub</a
      >
      <hr />
      <h2 style = "padding-top: 0.5em;">Why use the {{ title }}?</h2>
      <p class="about-modal-text">
        Without a doubt, other calculators are simply inadequate. They lack the
        one essential feature that sets the Cow-culator apart: the Moo function.
        All this fancy math to do, but without a Moo button? It's like trying to
        milk a cow without a bucket. You simply can't do it. The Cow-culator,
        with its Vue.js-powered Moo function, is the only choice for discerning
        users who demand the very best from their cow-culations. Don't be square
        - use the Cow-culator!
      </p>
    </div>
    
  </div>
  
</template>

<script>
export default {
  props: ["title", "header", "text", "imagePath", "url"],
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

.aboutCowculator {
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

.about-modal-text {
  display: inline-block;
  max-width: 500px;
  text-align: left;
  font-size: 0.9em;
  padding: 10px;
}
</style>