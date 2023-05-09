<template>
  <aside>
    <h2>Aside Content</h2>

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
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px;

}

p.aside {
  text-align: left;
  padding-left: 1em;
}
</style>
  