<template>
  <div>
    <h1 style="padding-top: 1em; padding-bottom: 1em;">Weather</h1>
    <p class="paragraph-text white-color-text"> All the locations here are easily customizable!<br> Data is queried as JSON using <a class="text-links" href="https://github.com/chubin/wttr.in">https://github.com/chubin/wttr.in</a>, 
      then formatted and displayed here in a custom made table.</p>
    <table>
      <thead>
        <tr>
          <th>City / Country / Region</th>
          <th>Sun Rise/Sun Set</th>          
          <th>Weather Conditions</th>
          <th>Temperature °C</th>
          <th>Temperature °C (Feels Like)</th>
          <th>Wind Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cityWeather in cityWeathers" :key="cityWeather.city">
          <!-- 1 -->
          <td><b>{{ cityWeather.city }}</b>
            <br><br>
            
            <template v-if="cityWeather.weather && cityWeather.weather.request[0].query">
              <span style="color: rgb(0, 149, 255);">Country:</span> {{ cityWeather.weather.nearest_area[0].country[0].value }}<br>
              <span style="color: rgb(255, 133, 133);">Region:</span> {{ cityWeather.weather.nearest_area[0].region[0].value }}<br>
              {{ cityWeather.weather.request[0].query }}<br>
              <div style="margin-top: 0.25em;"><br>
                <span style="color: rgb(123, 123, 123);">Query Date:</span> {{
                   cityWeather.weather.current_condition[0].observation_time }} -
                  {{ formatDate(cityWeather.weather.weather[0].date) }}
              
            </div>
            </template>
          </td>
          <!-- 2 -->
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.weather[0].astronomy[0].sunrise">
              <span class="sunny-background">{{ cityWeather.weather.weather[0].astronomy[0].sunrise }} - {{
                cityWeather.weather.weather[0].astronomy[0].sunset }}</span><br>
              Astronomical Sun Hours: <span class="sun-hour-background">{{
                this.calculateDaylightTime(cityWeather.weather.weather[0].astronomy[0].sunrise,
                  cityWeather.weather.weather[0].astronomy[0].sunset) }}</span><br>
              Estimated actual sun hours: <span class="sun-hour-background">{{
                parseInt(cityWeather.weather.weather[0].sunHour) }} hours {{
    (Math.round((cityWeather.weather.weather[0].sunHour -
      parseInt(cityWeather.weather.weather[0].sunHour)) * 60) * 100) / 100 }} minutes</span>
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <!-- 3 -->
          
         
          <!-- This sets the table cell to have a different color background on a condition  -->
          <td
            v-bind:class="{
              'gray-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Partly cloudy',
              'rain-showers-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Rain shower',
              'overcast-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Overcast',
              'cloudy-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Cloudy',
              'sunny-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Sunny',
              'light-rain-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Light rain',
              'rain-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Rain',
              'clear-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Clear'
            }">
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              <div v-if="cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Partly cloudy'">
                {{ cityWeather.weather.current_condition[0].weatherDesc[0].value }}
              </div>
              <div v-else>
                {{ cityWeather.weather.current_condition[0].weatherDesc[0].value }}
              </div>
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <!-- 5 -->
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0].temp_C">
              <div style="margin-bottom: 0.25em;">
                Projected High Today:
                <span class="high-temp-text-coloring">{{ cityWeather.weather.weather[0].maxtempC }}°C&nbsp;{{ cityWeather.weather.weather[0].maxtempF }}°F</span><br>
                
              </div>
              Recent Temperature: <b>{{ cityWeather.weather.current_condition[0].temp_C }}°C&nbsp;{{
                cityWeather.weather.current_condition[0].temp_F }}°F</b><br><br>
              Humidity: {{ cityWeather.weather.current_condition[0].humidity }}%<br>
              - - - -<br>
              <span class="">
                {{formatDate(cityWeather.weather.weather[1].date)}}:
                <span class="high-temp-text-coloring-1">{{ cityWeather.weather.weather[1].maxtempC }}°C&nbsp;{{ cityWeather.weather.weather[1].maxtempF }}°F</span><br>
                </span>- - - -<br>
                <span class="">
                {{ formatDate(cityWeather.weather.weather[2].date)}}:
                <span class="high-temp-text-coloring-2">{{ cityWeather.weather.weather[2].maxtempC }}°C&nbsp;{{ cityWeather.weather.weather[2].maxtempF }}°F</span><br>
                </span>
                

            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <!-- 6 -->
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].FeelsLikeC }}°C<br>
              {{ cityWeather.weather.current_condition[0].FeelsLikeF }}°F
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <!-- 7 -->
          <td>
            <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
              {{ cityWeather.weather.current_condition[0].windspeedKmph }} km/h
            </template>
            <template v-else>
              N/A
            </template>
          </td>
          <!-- 8 -->


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
        { city: "Tübingen, Germany", weather: "" },
        { city: "STR, Stuttgart Airport, Germany", weather: "" },
        { city: "Cary, NC", weather: "" },
        { city: "Wilmington, NC", weather: "" },
        { city: "Albuquerque, New Mexico", weather: ""},
        { city: "Albany WA, Australia", weather: "" },
        { city: "RDU, Raleigh Durham Airport, USA", weather: "" },
        { city: "Uppsala, Sweden", weather: "" },        
        { city: "Miami, Florida", weather: "" },
        { city: "Madrid", weather: "" },
        { city: "Helsinki", weather: "" },

      ],
      jsonData: null,
      regularText: null,
    };
  },
  mounted() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      this.cityWeathers.forEach((cityWeather) => {
        const url = `https://wttr.in/${cityWeather.city}?format=j1`;
        //const regularURL = 'https://wttr.in/tuebingen'
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            cityWeather.weather = data;
            this.jsonData = data;
          })
          .catch((error) => {
            console.error(`Error fetching weather for ${cityWeather.city}:`, error);
          });

        // optional regular text
        /*
        fetch(regularURL)
        .then((response) => response.text())
        .then((data3) => {
         
          this.regularText = data3;
        })
        .catch((error) => {
          console.error(`Error fetching weather for regularURL`, error);
        });
        */
      });
    },
    calculateDaylightTime(startTime, endTime) {
      const startDate = new Date(`2023/01/01 ${startTime}`);
      const endDate = new Date(`2023/01/01 ${endTime}`);
      const daylightTime = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
      const hours = Math.floor(daylightTime);
      const minutes = Math.floor((daylightTime - hours) * 60);
      return `${hours} hours ${minutes} minutes`;
    },
    formatDate(convertDate){
      // const date takes string in format of 2021-05-18
      const date = new Date(convertDate);
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      console.log(formattedDate);
      return formattedDate;
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
  background-color: #ffffff;
}

td {
  text-align: left;

  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

/* Alternate Row Color 
tr:nth-child(even) {
  background-color: #ededed96;

}
*/
.responsive-link {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.background-text-coloring {
  color: #000000;
  padding: 0.2em;
  background-color: #69ff76;
  border-radius: 0.3em;
}

.high-temp-text-coloring{
  color: #000;  
  padding-right: 0.1em;
  padding-left: 0.1em;
  background-color: #5eff00;
  border-radius: 0.2em;
}
.high-temp-text-coloring-1{
  color: #000;  
  padding-right: 0.1em;
  padding-left: 0.1em;
  background-color: #e0ffcd;
  border-radius: 0.2em;
}

.high-temp-text-coloring-2{
  color: #000;  
  padding-right: 0.1em;
  padding-left: 0.1em;
  background-color: #e0ffcd;
  border-radius: 0.2em;
}


.gray-background {
  background: linear-gradient(to left, #ffffff 50%, #e1e1e1 50%);
}

.rain-background {
  background: #8aa9ff;
}

.rain-showers-background {
  background: linear-gradient(to left, #ffffff 50%, #8aa9ff 50%);
}

.light-rain-background {
  background: linear-gradient(to left, #ffffff 75%, #8aa9ff 25%);
}

.overcast-background {
  background: #e1e1e1;
}

.cloudy-background{
  background: #e1e1e1;
}

.sunny-background {
  background: #fef88b;
}

.clear-background{
  background: #272727;
  color: white;
}

.sun-hour-background {
  
  text-decoration: underline;
  padding: 0.1em;
  border-radius: 0.3em;
}


@media (max-width: 768px) {
  table {
    font-size: 0.7em;
    padding: 0.25em;
  }

  .responsive-link {
    display: block;
  }

}</style>