<template>
  <h1>Projects</h1>

  <div v-for="project in projects" :key="project.id">
    <router-link
      :to="{
        name: 'ProjectDetailsView',
        params: {
          title: project.title,
          details: project.details,
          id: project.id,
        },props: {
          title: project.title
        }
      }"
      class="project-link"
    >
      <h2>{{ project.title }}</h2>
    </router-link>
  </div>

  <div style="height: 600px">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
  <FirstFooter></FirstFooter>
</template>

<script>
import FirstFooter from "@/components/FirstFooter.vue";
export default {
  components: {
    FirstFooter,
  },
  data() {
    return {
      projects: [
        {
          title: "Cowculator",
          id: 1,
          details: "Do Cowculations with math and moos!",
        },
        { title: "Coffee Python", id: 2, details: "list page 2" },

        { title: "item 3", id: 3, details: "list page 3" },
      ],
    };
  },
};
</script>

<style>
</style>