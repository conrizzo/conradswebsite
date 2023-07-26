<template>
    <div id="app" style="padding-top: 3em;">
      <WeatherAPI></WeatherAPI>
    </div>
  
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