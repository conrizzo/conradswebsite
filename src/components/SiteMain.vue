<template>
  <!-- click.self means only this item will activate this function-->
  <div class="backdrop" @click.self="closeModal">
    <div class="siteMain">
      <h1 style="padding-bottom: 5px">{{ title }}</h1>
      <h2 style="padding-bottom: 5px">{{ header }}</h2>
      <p style="padding-bottom: 5px; text-align: left">{{ text }}</p>
      <img style="max-width: 15em" :src="imagePath" alt="Image" />
      <a style="display: block; margin-left: auto; margin-right: auto; text-decoration: none;" :href="url">Conrad's GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "header", "text", "imagePath","url"],
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