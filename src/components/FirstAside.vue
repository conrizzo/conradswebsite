<template>
  <aside>
    <!-- eslint-disable-next-line vue/valid-v-slot -->
    <slot name="aside-content"></slot>
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
  background-color: #ffffff;
  border-left: 2px solid rgb(240, 197, 117);  
  padding-left: 0.5em;
  padding-right: 0.5em;
  
}


@media only screen and (max-width: 100rem) {
  aside {
    /*display: none;*/
    border: none;
  }
}
</style>
  