<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="siteMain">
      <h1>{{ title }}</h1>
      <h2>{{ header }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "header", "text"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>


<!-- scoped applies to only this component -->
<style scoped>
h1 {
  color: rgb(105, 105, 198);
  border: none;
  padding: 0;
}

.siteMain {
  width: 80%;
  padding: 25px;
  margin: 80px auto;
  background: rgb(255, 255, 255);
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>