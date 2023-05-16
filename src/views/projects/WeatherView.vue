<template>
    <div id="app">
      <WeatherAPI></WeatherAPI>
    </div>
    <p style="color: #fff; padding-bottom: 1em;" class="paragraph-text">Data is queried as JSON using <a href="https://github.com/chubin/wttr.in">https://github.com/chubin/wttr.in</a>, 
      then formatted and displayed here in a custom made table.
    </p>
    <FirstFooter></FirstFooter>
  </template>
  
  <script>
  import WeatherAPI from "@/components/WeatherAPI.vue";
  import "@/assets/globalCSS.css";
  import FirstFooter from "@/components/FirstFooter.vue";

  export default {
    name: "DatasetsView",
    components: {
        WeatherAPI,FirstFooter
    },
  };
  </script>