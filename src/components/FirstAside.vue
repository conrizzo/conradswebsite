<template>
  <aside>
    

    <!-- eslint-disable-next-line vue/valid-v-slot -->
    <slot name="aside-content">aaaaaaaaaa</slot>
    <!--<p class="aside" style="margin-top: 1em">
      I haven't decided what to write here yet, but I coded in this aside!
    </p> -->
  </aside>
</template>
  
<script>
export default {
  name: "AsideContent",
};
</script>
  
<style scoped>
aside {
  background-color: #f2f2f2;
  border-left: 3px solid #ff5959;
  
  padding: 2em;
  

}

p.aside {
  text-align: left;
  padding-left: 1em;
}

@media only screen and (max-width: 1200px) {
  aside {
    /*display: none;*/
    border: none;
  }
}
</style>
  