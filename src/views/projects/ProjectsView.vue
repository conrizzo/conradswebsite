<template>
  <h1>Projects</h1>

  <div v-for="project in projects" :key="project.id">
    <router-link :to="{
        name: 'ProjectDetailsView',
        params: {
          title: project.title,
          id: project.id,
          details: project.details,

        }, props: {
          title: project.title,
          



        }
      }" class="project-link">
      <!-- inline block makes the background color only as wide as the text -->
      <h2 style="background-color: black; display: inline-block; padding: 0.25em; border-radius: 0.25em;">{{project.title}} {{project.details }}</h2>
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

  // Don't use id: 1 for some reason if 1 is an option it loops the first character of details:, not sure why?
  data() {
    return {
      projects: [
        {
          title: "Cowculator",
          id: 1,
          details: ": A working calculator"
        },
        {
          title: "Coffee Python",
          id: 2,
          details: ": Python code and coffee"
        },
        {
          title: "Dialogue Summarization using BART",
          id: 3,
          details: ": Project using transformer models to summarize dialogues"
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 5em;
}
</style>