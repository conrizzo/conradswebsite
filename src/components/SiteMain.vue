<template>
  <div class="backdrop">
    <div class="siteMain">
      <h1>Here is the  title</h1>
      <h2>{{ header }} </h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>


export default {
  props: ['header','text']
  }

</script>


<!-- scoped applies to only this component -->
<style scoped>
    h1{
     color: rgb(49, 49, 254);
     border: none;
     padding: 0;
    }



    .siteMain {
    width: 500px;
    padding: 25px;
    margin: 80px auto;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    


</style>