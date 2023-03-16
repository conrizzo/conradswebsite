<template>
   <h1>Project Details</h1>
   <p>Title: {{ title }}&nbsp; ID: {{ id }}&nbsp; Details: {{ details }}</p>

   <!-- This will show the project if the ID matches it in the Projects array -->
   <div v-show="id==1">
     <router-link style="text-decoration: none;" to="/projects/cowculator">Cowculator</router-link>
   
   </div>
   
</template>

<script>
export default {
props: ['title','id','details'],

}
</script>

<style>

</style>