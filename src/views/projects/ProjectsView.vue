<template>
  <div id="content-background" style="background: linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);">

    <h1>Project Descriptions</h1>

    <div v-for="project in projects" :key="project.id">
      <router-link :to="{
        name: 'ProjectDetailsView',
        params: {
          title: project.title,
          id: project.id,
          details: project.details,
        },
      }" class="project-link">

        <h2 style="color: #fff; border: 5px gray; display: inline-block; padding: 0.25em; border-radius: 0.25em;">
          {{ project.id }}. {{ project.title }} : {{ project.details }}
        </h2>

      </router-link>
    </div>


  </div>
</template>

<script>

import "@/assets/globalCSS.css";
export default {
  components: {

  },

  // Don't use id: 1 for some reason if 1 is an option it loops the first character of details:, not sure why?
  data() {
    return {
      projects: [
        {
          title: "Cowculator",
          id: 1,
          details: "A working calculator"
        },
        {
          title: "Coffee Python",
          id: 2,
          details: "Python code and coffee"
        },
        {
          title: "Dialogue Summarization using BART",
          id: 3,
          details: "Project using transformer models to summarize dialogues"
        },
      ],
    };
  },
};
</script>

<style scoped>
#content-background{
  height: 100vh;
}

h1 {
  margin: 5em 0 2em 0;
  color: #ffffff;
  background: rgb(80, 80, 80);
  display: inline-block;
  padding: 0.1em 0.25em 0.1em 0.25em;
  border-radius: 0.25em;
}

.project-link {
  /* change link color */
  font-size: 1.3em;
  /* change font size */
  text-decoration: none;
  /* remove underline */
  font-weight: bold;
  /* add bold style */
  background: linear-gradient(90deg, rgba(0, 255, 119) 29%, rgba(0, 224, 255) 100%);
  display: inline-block;
  padding: 0.25em;
  border-radius: 0.5em;
  margin-bottom: 0.8em;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>