<template>
  <aside>
    <h2>Aside Content</h2>

    <!-- eslint-disable-next-line vue/valid-v-slot -->
    <h2>Incredible latin Text!</h2>
    <p class="aside" style="margin-top: 1em">
      I'm not sure what to do with this aside here yet, but I'll figure something out!
    </p>
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
  