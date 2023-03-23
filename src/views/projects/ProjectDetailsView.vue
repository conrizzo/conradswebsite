<template>
  <h1>Project Details</h1>
  <p>Title: {{ title }}&nbsp; ID: {{ id }}&nbsp; Details: {{ details }}</p>

  <!-- This will show the project if the ID matches it in the Projects array -->
  <div class="router-link-style">
    <div v-show="id == 1">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >Cowculator</router-link
      >
    </div>
    <div v-show="id == 2">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >Project 2</router-link
      >
    </div>
    <div v-show="id == 3">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >Project 3</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "id", "details"],
};
</script>

<style>
.router-link-style {
  font-size: 2em;
  font-weight: bold;
}
</style>