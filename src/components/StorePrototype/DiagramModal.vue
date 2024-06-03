<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="aboutDiagram">
      <button class="close" @click.self="closeModal"></button>

      <h2>Diagram</h2>
      <div class="diagram-image-container">
        <img src="@/images/store/project_diagram.svg" alt="Diagram of how this project works"
          style="max-width: 98%; max-height: 400px;">
      </div>
      <div style="text-align: left; padding-left: 1rem;">
        <p>This was built from scratch using Vue.js and TypeScript in a week or two. The main goal was to create a
          store prototype. A major change I made was changing cookies to a store and using <a class="text-links"
            href='https://pinia.vuejs.org/'>Pinea</a> to manage the cart.
          This means I could get rid of all the special url params and just put a name or ID to each product - and all
          that's needed is to
          fetch that name or id from a database to get all the details of that product e.g. price, image for product,
          etc. This is all updated now and should be pretty close to professionally made. The next update would be connecting 
          an actual payment system with backend code which should be fairly quick to do, but I dont sell bird food, cake, and pizza 
          so I haven't really found a need to do this yet!<br>
          <a class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/components/StorePrototype/CheckOut.vue">CheckOut.vue</a>
          is the main part of this application.
        </p>
        <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store">
          Component and TypeScript source code on GitHub</a><br>
        <a class="text-links"
          href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/store/StoreView.vue">Store
          page
          view</a><br>
        <a class="text-links"
          href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/store/StoreCheckOutView.vue">Checkout
          page view</a>
      </div>


      <p>Diagram made using <a class="text-links" href='https://app.diagrams.net/'>
          https://app.diagrams.net/
        </a></p>
    </div>
  </div>
</template>

<script>
//import ProjectDiagramSVG from "@/images/store/project_diagram.svg";
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

.aboutDiagram {
  width: calc(100% - 60%);
  margin-left: 30%;
  margin-top: 8svh;
  background: rgb(255, 255, 255);
  border-radius: 2em;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;

  /* bring this in front of all other elements */
  z-index: 1000;
}

.text-links {
  color: #42b883;
}

ul {
  text-align: left;
  padding-left: 4em;
  font-size: 1.3em;
  list-style: none;
}

p {
  max-width: 100%;
  padding-right: 0.5rem;
}

h2 {
  color: rgb(16, 16, 16);
  padding: 1em;
  padding-top: 0em;
  padding-bottom: 0em;
  font-size: 2.25em;
  text-align: center;
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

.diagram-image-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

@media only screen and (max-width: 50rem) {
  h2 {
    font-size: 1.25em;
  }

  .aboutDiagram {
    width: calc(100% - 4%);
    margin-left: 2%;
  }
}
</style>