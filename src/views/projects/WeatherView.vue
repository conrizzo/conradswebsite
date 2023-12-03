<template>
    <div id="app" style="padding-top: 2.8em;">
      <WeatherAPI></WeatherAPI>
    </div>
  
    
  </template>
  
  <script>
  import WeatherAPI from "@/components/WeatherAPI.vue";
  import "@/assets/globalCSS.css";
  

  export default {
    name: "DatasetsView",
    components: {
        WeatherAPI
    },
  };
  </script>