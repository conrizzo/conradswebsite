<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="modalParameters">
      <button class="close" @click.self="closeModal"></button>
      <!-- Button to confirm -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
//import ProjectDiagramSVG from "@/images/store/project_diagram.svg";
export default {

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

.modalParameters {
  width: 20rem;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
  position: fixed;
  /* Changed from relative to fixed */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  top: 50%;
  /* Position the top edge of the element at the middle of the screen */
  left: 50%;
  /* Position the left edge of the element at the middle of the screen */
  transform: translate(-50%, -50%);
  /* Shift the element back by half of its width and height */
  padding: 0.5rem;
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
  background-color: rgb(0, 170, 255);
  border-top-right-radius: 10px;
  /* matches the modal top right corner */
  border-bottom-left-radius: 10px;
  /* matches the modal top right corner */
}

.close:hover {
  background-color: rgb(90, 200, 255);
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


}
</style>