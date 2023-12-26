<!-- This component generates a li (list) with ul elements based on what the user imputs into arrays -->
<template>
  
    <div class="image-gallery-aside">
            <li v-for="(category, index) in categories" :key="index">
              <span class="gallery-list-item">{{ category.title }}</span>
              <ul class="gallery-list-home">
                <li v-for="(item, itemIndex) in category.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </li>
          </div>
 
</template>

<script>
export default {
  name: "AsideListGeneration",
  data() {
    return {
      // Your data here
      categories: [
        {
          title: "BEST FOODS:",
          items: ["Coffee", "Coffee", "Foods that go with Coffee"],
        },
        {
          title: "BEST DRINKS:",
          items: ["Coffee", "Wasser mit Kohlensäure"],
        },
      ],
    };
  },
  methods: {
    // Your methods here
  },
  mounted() {
    // Your mounted hook logic here
  },
};
</script>

<style scoped>
/* Your component styles here */
.image-gallery-aside {
  text-align: left;
  color: #fff;
  padding: 1em;
  font-weight: bold;
  list-style-type: none;
}
ul.gallery-list-home {
  margin-left: 0.25em;
  font-size: 0.85em;
  color: rgb(0, 221, 255);
  list-style-type: none;
}

li.gallery-list-item {
  font-size: 0.9em;
  padding-left: 0.25em;
  list-style-type: none;
}

</style>
