

<template>
  <div class="router-link-style">
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>

import CowculatorDescription from "@/components/ProjectDescriptions/CowculatorDescription.vue";
import CoffeeFunction from "@/components/ProjectDescriptions/CoffeeFunction.vue";
import BartProject from "@/components/ProjectDescriptions/BartProject.vue";

export default {
  components: {
    CowculatorDescription,
    CoffeeFunction,
    BartProject,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // Store the components in an object as ID: Component pairs
      componentValues:
      {
        1: CowculatorDescription,
        2: CoffeeFunction,
        3: BartProject
      },
    };
  },

  computed: {
    selectedComponent() {
      // Dynamically show the content based on the id
      return this.componentValues[this.id];

    },
  },
};
</script>






<style scoped>
h1 {
  font-size: 1.75em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}
</style>