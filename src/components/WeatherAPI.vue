<template>
  <div>
    <h1>Weather</h1>
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>Sun Rise/Sun Set</th>
          <th>GPS</th>
          <th>Country</th>
          <th>Humidity</th>
          <th>Temperature °C</th>
          <th>Temperature °C (Feels Like)</th>
          <th>Temperature °F (Feels Like)</th>
          <th>Wind Speed</th>
          <th>Sun Hours</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="cityWeather in cityWeathers" :key="cityWeather.city">
          <td>{{ cityWeather.city }}</td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.weather[0].astronomy[0].sunrise">
              {{ cityWeather.weather.weather[0].astronomy[0].sunrise }} to {{ cityWeather.weather.weather[0].astronomy[0].sunset }}<br>
              Happy Sun Time: {{ this.calculateDaylightTime( cityWeather.weather.weather[0].astronomy[0].sunrise ,  cityWeather.weather.weather[0].astronomy[0].sunset )}}
              
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.request[0].query">
              {{ cityWeather.weather.request[0].query }}
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.nearest_area[0].country[0].value">
              {{ cityWeather.weather.nearest_area[0].country[0].value}}
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].humidity }}
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0].temp_C">
              {{ cityWeather.weather.current_condition[0].temp_C}}°C 
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].FeelsLikeC }}°C 
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].FeelsLikeF }}°F 
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].windspeedKmph }} km/h
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.weather[0].sunHour">
              {{ cityWeather.weather.weather[0].sunHour }}
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
      
export default {
  data() {
    return {
      cityWeathers: [
        { city: "Reutlingen, Germany", weather: ""},        
        { city: "Tübingen, Germany", weather: ""},
        { city: "New York, NY", weather: ""},
        { city: "Uppsala, Sweden", weather: ""},
        { city: "Cary, NC", weather: ""},
        { city: "Wilmington, NC", weather: ""},
        { city: "Miami, Florida", weather: ""},
        { city: "Los Angeles, California", weather: ""},
        
      ],
      jsonData: null,
    };
  },
  mounted() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      this.cityWeathers.forEach((cityWeather) => {
        const url = `https://wttr.in/${cityWeather.city}?format=j1`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            cityWeather.weather = data;
            this.jsonData = data;
          })
          .catch((error) => {
            console.error(`Error fetching weather for ${cityWeather.city}:`, error);
          });
      });
    },
    calculateDaylightTime(startTime, endTime) {
      const startDate = new Date(`2023/01/01 ${startTime}`);
      const endDate = new Date(`2023/01/01 ${endTime}`);
      const daylightTime = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
      const hours = Math.floor(daylightTime);
      const minutes = Math.floor((daylightTime - hours) * 60);
      return `${hours} hours ${minutes} minutes`;
    }
  },
};
</script>
<style scoped>
/* Table */
table {
  width: 99%;
  margin-right: 0.5%;
  margin-left: 0.5%;
  border-collapse: collapse;
  margin-bottom: 1em;
 
}

/* Table Header */
thead {
  background-color: #f5f5f5;
  
}

th {
  padding-right: 0em;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

/* Table Body */
tbody {
  background-color: #fff;
}

td {
  text-align: left;
  
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

/* Alternate Row Color */
tr:nth-child(even) {
  background-color: #ededed96;
  
}

.responsive-link {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}


@media (max-width: 768px) {
  table {
    font-size: 0.7em;
    padding: 0.25em;
  }
  .responsive-link {
    display: block;
  }
  
}
</style>