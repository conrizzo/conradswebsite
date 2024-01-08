<template>
   <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="aboutCowculator">
      <button class="close" @click.self="closeModal"></button>
      <h1 style="padding-top: 0.5em; color: rgb(66, 184, 147);"><span v-html="title"></span>, why?</h1>

      <p class="about-modal-text">
        The Cowculator was made by Conrad in Tübingen, Germany, and built using Vue 3. This is not some simple calculator tutorial
        people write. It uses real parsing.  
        It displays a binary tree of the output, correctly follows the order of operations, and displays the current math operation node being performed. 
        The Cowculator does not use the JavaScript eval() function, as it is considered insecure and bad practice. 
        The current left node, math operator node, and right node in the tree are shown as calculations are entered. 
        This has mostly been a learning project so there are some extra unused functions and comments.
      </p>



      <ul>
        <li>
          - <a
            class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/components/Cowculator/UseCalc.vue"
            ><b>Main Cowculator Code</b></a
          >
        </li>
        <li>
          - <a class="text-links" :href="url"><b>Conrad's GitHub</b></a>
        </li>
      </ul>
      <!--
      <div>
        <img style="max-width: 15em" :src="imagePath" alt="Image" />
      </div>
       -->
  <!--
      <p class="about-modal-text">
        Without a doubt, other calculators are simply inadequate. They lack the
        one essential feature that sets the Cow-culator apart: the Moo function.
        All this fancy math to do, but without a Moo button? It's like trying to
        milk a cow without a bucket. You simply can't do it. The Cow-culator,
        with its Vue.js-powered Moo function, is the only choice for discerning
        users who demand the very best from their cow-culations. Don't be square
        - use the Cow-culator!
      </p>
    -->
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
  
  border: none;
  padding: 0;
}

.aboutCowculator {
  width: 90%;
  max-width: 400px;
  padding-top: 0.75em;
  padding-bottom: 25px;
  padding: 1rem;
  margin: 80px auto;
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

.text-links {
  color: #42b883;  
}

ul{
  text-align: left; 
  padding-left: 2rem;
  font-size: 1.3em;
  list-style: none;
}


.about-modal-text {
  display: inline-block;
  max-width: 500px;
  text-align: left;
  padding: 1em;
  font-size: 1em;
  line-height: 1.5;
  padding-bottom: 1em; 
  
}

h2 {
  color: #42b883;
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
li + li {
  margin-top: 0.5em;
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 1.1em;
  }
}
</style>