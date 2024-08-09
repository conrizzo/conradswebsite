<template>
  <div class="main-container">
  <h1>U.S 2024 Election Links</h1>
  <div class="center-with-flex">

  <p style="text-align: left; padding: 1rem;">Started August 9, 2024 - small project started for convenience to have quick links to 2024 U.S.A election related items.
    The main point is I check the data for this and it's more convenient to have all the links I want in one customized place
  </p>
</div>
<h2>Fivethirtyeight aggregate of polls for states</h2>
  <ul>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/arizona/">Arizona</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/georgia/">Georgia</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/pennsylvania/">Pennsylvania</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/michigan/">Michigan</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/wisconsin/">Wisconsin</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/north-carolina/">North Carolina</a></li>
    <li><a class="text-links" href="https://projects.fivethirtyeight.com/polls/nevada/">Nevada</a></li>
  </ul>
<h2>Cook Political Report</h2>
<a class="text-links" href="https://www.cookpolitical.com/">Cook Political Website</a>


  <img :src="myLogoSrc">
</div>
<div class="center-with-flex">
<p>Any website names listed are all the property of the respective copyright owners. This is just a place to compile links I want to use
  as a tool of convenience.
</p>
</div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import myLogoSrc from './us.svg';

const data = ref(null);



</script>

<style scoped>
.main-container{
  padding: 1rem;
}

li{
  list-style-type: none; 
}

</style>