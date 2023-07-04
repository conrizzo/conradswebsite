<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="aboutCowGame">
      <button class="close" @click.self="closeModal"></button>


      <h2>This is a game project!</h2>




      <ul>
        <li>This was started June 19th 2023, and is built from scratch for fun and to learn!</li>
        <li>It's made with Vue.js, TypeScript, JavaScript, etc.</li>
        <li>It's not finished yet, so the exact mechanics of how the game works and what the final result will be are a
          surprise!</li>
        <li>Building a game with interactions and multiple objects being generated + tracking positions is challenging!
        </li>
        <li>Not designed for mobile and touch devices, but can implement this later!</li>
      </ul>

      <p class="about-modal-text">Code for main page:
      <a class="text-links"
        href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/CowGameView.vue">My GitHub</a>
      <br>Components that are imported:
      <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/CowGame">in the
        cowgame folder.</a></p>

      <p class="about-modal-text">
        One nice fix to this was changing:
      </p>
      <pre v-bind:class="'language-JavaScript line-numbers'">
        <code>       
        this.offsetX = event.clientX - rect.left;
        this.offsetY = event.clientY - rect.top;

        //to:

        this.offsetX = event.clientX - rect.left - window.scrollX;
        this.offsetY = event.clientY - rect.top - window.scrollY;
        </code>
        </pre>
      <p class="about-modal-text">
        This fixed the issue of the cursor jumping after scrolling the page vertically when clicking the cowFoodObjects.
        It covers the x-coordinate as well should the page scroll horizontally.
      </p>
      <!--
        <div>
          <img style="max-width: 15em" :src="imagePath" alt="Image" />
        </div>
         -->


    </div>
  </div>
</template>
  
<script>
import Prism from "prismjs";
export default {
  props: [],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  mounted() {
    Prism.highlightAll();
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

.aboutCowGame {
  width: 80%;
  max-width: 500px;
  padding-top: 0.75em;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  margin: 1em auto;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  position: relative;
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

.about-modal-text {
  display: inline-block;
  max-width: 500px;
  text-align: left;
  padding: 10px;
  font-size: 1em;
  line-height: 1.6;
}

h2 {
  color: #42b883;
  font-size: 2em;
}

/* CSS FOR MODAL "X" Close button*/
.close {
  position: absolute;
  top: 0em;
  right: 0em;
  cursor: pointer;
  width: 15px;
  height: 15px;

  border: none;
  width: 40px;
  height: 40px;
  background-color: #42b883;
  border-top-right-radius: 10px;
  /* matches the modal top right corner */
  border-bottom-left-radius: 10px;
  /* matches the modal top right corner */
}

.close:hover {
  background-color: #ff5959;
}

.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
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

li+li {
  margin-top: 0.5em;
}

li::marker {
  color: #ff5959;
  font-size: 1.1em;
}


ul {
  list-style-type: decimal;
  text-align: left;
  padding-top: 1em;
  padding-left: 1em;
}



@media only screen and (max-width: 600px) {
  h2 {
    font-size: 1.1em;
  }
}</style>