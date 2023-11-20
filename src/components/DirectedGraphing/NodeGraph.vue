<template>
  <div>
    <!-- Your component's HTML goes here -->
    <button @click="printResult()">Click me</button>
    <button @click="printResult">Add left Node</button>
    <button @click="printResult">Add right Node</button>
  </div>
</template>

<script>
export default {
  name: 'NodeGraph',
  data() {
    return {
      nodeStack: [],
      currentValue: 0,
    }
  },

  methods: {
          

            
    },

}


</script>

<style scoped>
/* Your component's CSS goes here */
</style>
