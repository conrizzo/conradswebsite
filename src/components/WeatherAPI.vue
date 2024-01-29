<template>
  <!-- this 1st div does a nice background color, and puts padding between this element and the footer-->
  <div class="weather-background">
    <h1 class="weather-title">Tübingen Weather</h1>
    <div class="center-content">


      <table>
        <thead>
          <tr>
            <th>City / Country / Region</th>
            <th>Sun Rise / Sun Set</th>
            <th>Conditions</th>
            <th>Recent</th>
            <th>High / Low </th>            
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cityWeather in cityWeathers" :key="cityWeather.city">

            <!-- 1 -->
            <td data-label="City / Country / Region"><span style="color: rgb(255, 100, 100);"><b>{{ cityWeather.city
            }}</b></span>
              <br>
              <template v-if="cityWeather.weather && cityWeather.weather.request[0].query">

                <!--<span>Country:</span>
                {{ cityWeather.weather.nearest_area[0].country[0].value }}<br> -->

                {{ cityWeather.weather.nearest_area[0].region[0].value }}<br>
                {{ cityWeather.weather.request[0].query }}<br>
                <div style="margin-top: 0.25em;"><br>
                  <span style="color: rgb(255, 100, 100);">Latest Query:</span> {{
                    cityWeather.weather.current_condition[0].observation_time }} -
                  {{ formatDate(cityWeather.weather.weather[0].date) }}
                </div>
              </template>
            </td>


            <!-- 2 -->
            <td data-label="Sun Rise / Sun Set">
              <div style="text-align: center;">(Astronomical Sun Hours)</div>
              <template v-if="cityWeather.weather && cityWeather.weather.weather[0].astronomy[0].sunrise">
                <div class="sun-rise-list">   
                <ul >                            
                    <li>{{ (formatDate(cityWeather.weather.weather[0].date)).split(' ')[0].substring(0, 3)}}
                      <span
                        class="sunny-background">
                        {{ cityWeather.weather.weather[0].astronomy[0].sunrise }} - {{
                          cityWeather.weather.weather[0].astronomy[0].sunset }}</span><br>&nbsp;&nbsp;<span
                        class="sun-hour-background">{{
                          this.calculateDaylightTime(cityWeather.weather.weather[0].astronomy[0].sunrise,
                            cityWeather.weather.weather[0].astronomy[0].sunset) }}</span>
                    </li>
                    <li>{{ (formatDate(cityWeather.weather.weather[1].date)).split(' ')[0].substring(0, 3) }}&nbsp;<span
                        class="sunny-background">
                        {{ cityWeather.weather.weather[1].astronomy[0].sunrise }} - {{
                          cityWeather.weather.weather[1].astronomy[0].sunset }}</span><br>&nbsp;&nbsp;<span
                        class="sun-hour-background">{{
                          this.calculateDaylightTime(cityWeather.weather.weather[1].astronomy[0].sunrise,
                            cityWeather.weather.weather[1].astronomy[0].sunset) }}</span>
                    </li>
                    <li>{{ (formatDate(cityWeather.weather.weather[2].date)).split(' ')[0].substring(0, 3) }} <span
                        class="sunny-background">
                        {{ cityWeather.weather.weather[2].astronomy[0].sunrise }} - {{
                          cityWeather.weather.weather[2].astronomy[0].sunset }}</span><br>&nbsp;&nbsp;<span
                        class="sun-hour-background">{{
                          this.calculateDaylightTime(cityWeather.weather.weather[2].astronomy[0].sunrise,
                            cityWeather.weather.weather[2].astronomy[0].sunset) }}</span>
                    </li>              
                </ul>
              </div>  
                <!--
                Astronomical Sun Hours: <span class="sun-hour-background">{{
                  this.calculateDaylightTime(cityWeather.weather.weather[0].astronomy[0].sunrise,
                    cityWeather.weather.weather[0].astronomy[0].sunset) }}</span><br>
                Estimated actual sun hours: <span class="sun-hour-background">{{
                  parseInt(cityWeather.weather.weather[0].sunHour) }} hours {{
    (Math.round((cityWeather.weather.weather[0].sunHour -
      parseInt(cityWeather.weather.weather[0].sunHour)) * 60) * 100) / 100 }} minutes</span> -->
              </template>
              <template v-else>
                N/A
              </template>
            </td>


            <!-- 3 -->
            <!-- This sets the table cell to have a different color background on a condition  -->
            <td data-label="Conditions" style="padding-left: 0.5rem; text-align: center;" v-bind:class="{
              'gray-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Partly cloudy',
              'rain-showers-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Rain shower',
              'overcast-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Overcast',
              'cloudy-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Cloudy',
              'sunny-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Sunny',
              'light-rain-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Light rain',
              'rain-background': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Rain',
              'snow': cityWeather.weather && cityWeather.weather.current_condition[0].weatherDesc[0].value == 'Light snow, mist',
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
            <td data-label="Recent">
              <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">

                <div v-if="temperatureUnit === false">
                  <b> {{ cityWeather.weather.current_condition[0].temp_C }}°C</b>&nbsp;
                  <br>
                  Humidity: {{ cityWeather.weather.current_condition[0].humidity }}%<br>
                  Feels like: {{ cityWeather.weather.current_condition[0].FeelsLikeC }}°C
                </div>
                <div v-else>
                  <b> {{
                    cityWeather.weather.current_condition[0].temp_F }}°F</b><br>
                  Humidity: {{ cityWeather.weather.current_condition[0].humidity }}%<br>
                  Feels like: {{ cityWeather.weather.current_condition[0].FeelsLikeF }}°F
                </div>
              </template>
              <template v-else>
                N/A
              </template>
            </td>

            <!-- 6 -->
            <td data-label="High / Low ">

              <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0].temp_C">



                <div>
                  {{ formatDate(cityWeather.weather.weather[0].date) }}
                  <div>
                    <span v-if="temperatureUnit === false">
                      {{ cityWeather.weather.weather[0].maxtempC }}°C
                      {{ cityWeather.weather.weather[0].mintempC }}°C

                    </span>&nbsp;
                    <span v-else>
                      {{ cityWeather.weather.weather[0].maxtempF }}°F
                      {{ cityWeather.weather.weather[0].mintempF }}°F</span>
                  </div>
                  {{ formatDate(cityWeather.weather.weather[1].date) }}
                  <div>
                    <span v-if="temperatureUnit === false">
                      {{ cityWeather.weather.weather[1].maxtempC }}°C
                      {{ cityWeather.weather.weather[1].mintempC }}°C
                    </span>&nbsp;
                    <span v-else>
                      {{ cityWeather.weather.weather[1].maxtempF }}°F
                      {{ cityWeather.weather.weather[1].mintempF }}°F</span>
                  </div>
                  {{ formatDate(cityWeather.weather.weather[2].date) }}
                  <div>
                    <span v-if="temperatureUnit === false">
                      {{ cityWeather.weather.weather[2].maxtempC }}°C
                      {{ cityWeather.weather.weather[2].mintempC }}°C
                    </span>&nbsp;
                    <span v-else>
                      {{ cityWeather.weather.weather[2].maxtempF }}°F
                      {{ cityWeather.weather.weather[2].mintempF }}°F</span>
                  </div>
                </div>


              </template>
              <template v-else>
                N/A
              </template>
            </td>

           
            
            <!-- 7 -->
            <td data-label="Wind Speed">
              <template v-if="cityWeather.weather && cityWeather.weather.current_condition[0]">
                <div v-if="temperatureUnit === false">
                  {{ cityWeather.weather.current_condition[0].windspeedKmph }} km/h
                </div>
                <div v-else>
                  {{ cityWeather.weather.current_condition[0].windspeedMiles }} mph
                </div>
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
    <div>
      <div class="temperature-switch-container-styling">
        <span><b>°C </b></span>
        <label class="switch">
          <input v-model="temperatureUnit" type="checkbox">
          <span class="slider round"></span>
        </label>
        <span><b> °F</b></span>
      </div>


      <div>
        <button class="clean-button" @click="addWeatherLocation(weatherLocationInputText)">Add Location</button>
        <input style="padding: 10px 20px;
            margin: 8px 0; margin-left: 0.5em; border-radius: 0.5em; border: 1px solid #ccc;
            box-sizing: border-box;" type="text" v-model="weatherLocationInputText" placeholder="Miami, Florida">
      </div>
    </div>
    <br>
    <br>
    <div class="description-area">
      <p style="text-align: left;"> All the locations here are easily customizable! Data is queried as JSON
        using <a class="text-links" href="https://github.com/chubin/wttr.in">https://github.com/chubin/wttr.in</a>,
        then formatted and displayed here in a custom made table. This is just a simple project to fetch and format
        customized data.

      </p>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      temperatureUnit: false,
      weatherLocationInputText: "Miami, Florida",
      cityWeathers: [
        //{ city: "Death Valley, CA", weather: "" },
        { city: "Tübingen, Germany", weather: "" },
        //{ city: "STR, Stuttgart Airport, Germany", weather: "" },
        //{ city: "Cary, NC", weather: "" },
        //{ city: "Wilmington, NC", weather: "" },
        //{ city: "Albuquerque, New Mexico", weather: "" },
        //{ city: "Shamokin, PA", weather: "" },
        //{ city: "Temecula, CA", weather: "" },
        // { city: "Albany WA, Australia", weather: "" },
        //{ city: "RDU, Raleigh Durham Airport, USA", weather: "" },
        //{ city: "Uppsala, Sweden", weather: "" },
        //{ city: "Miami, Florida", weather: "" },
        //{ city: "Madrid", weather: "" },
        //{ city: "Helsinki", weather: "" },

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
            // error handling
            this.jsonData = { data: { error: [{ msg: "Unknown error occurred." + error }] } };
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
    },
    formatDate(convertDate) {
      // const date takes string in format of 2021-05-18
      const date = new Date(convertDate);
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return formattedDate;
    },
    addWeatherLocation(locaton = "Miami, Florida") {

      this.cityWeathers.push({ city: locaton, weather: "" });
      this.fetchWeather();
    },
  },
};
</script>
<style scoped>
/* The right padding forces it into the center */


.weather-background {
  /*background-image: url('../images/blue_sky2.jpg'); */
  background-image: url('../images/background_tuebingen.jpg');

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

table tbody tr td:nth-child(odd):not(:nth-child(3)) {
  background: rgba(40, 40, 40, 0.9);
}

table tbody tr td:nth-child(even) {
  /* Styles for the second <span> element inside <td> elements */
  background: rgba(40, 40, 40, 0.7);
}

table tbody tr td:nth-child(5) {
  /* Styles for the second <span> element inside <td> elements */

  font-weight: 600;
}

table tbody tr td:nth-child(1) {
  /* Styles for the second <span> element inside <td> elements */

}

.center-content {
  padding-left: 10em;
  padding-right: 0.5em;
  display: flex;
  justify-content: left;
  align-items: center;
}

/* Table */
table {
  border-collapse: collapse;
  margin-bottom: 1em;
  border: none;

  color: #ffffff;
}

/* Table border radius with CSS only https://stackoverflow.com/questions/4932181/rounded-table-corners-css-only 3rd answer */

/* Table Header */
thead {
  background-color: rgba(255, 0, 0, 0.8);

}

th {
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  color: #ffffff;
}

th:last-child {
  border-right: none;
}

.last-item {
  border-bottom: none;
}

/* Table Body */

td {
  text-align: left;
  padding: 0.5em;
  color: #ffffff;
}


/* Alternate Row Color 
tr:nth-child(even) {
  background-color: #ededed96;
}
*/

.high-temp-text-coloring {
  color: #000;
  padding: 3px;
  background-color: #ffbf00;
  border-radius: 0.2em;
}

.weather-title {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: #ffffff;
  font-size: 5em;
  text-align: left;
  padding-left: 2.9em;
}

.low-temp-text-coloring {
  color: #ffffff;
  padding: 3px;
  background-color: #255fff;
  border-radius: 0.2em;
}

.feels-like-temperature-color {
  background: rgb(206, 255, 206);
  text-align: center;
}

.weather-location {
  background: rgb(231, 250, 255);
}

.temperature-grid-weather {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0em;
}

.temperature-switch-container-styling {
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 1em;
  padding: 0.5em;
  width: 5em;
  margin: 0 auto;
  margin-top: 2em;
}


.gray-background {
  background: linear-gradient(to left, #ffffff 50%, #e1e1e1 50%);
  color: #000;
}

.rain-background {
  background: #8aa9ff;
  color: #000;
}

.rain-showers-background {
  background: linear-gradient(to left, #ffffff 50%, #8aa9ff 50%);
  color: #000;
}

.light-rain-background {
  background: linear-gradient(to left, #ffffff 75%, #8aa9ff 25%);
  color: #000;
}

.overcast-background {
  background: #e1e1e1;
  color: #000;
}

.cloudy-background {
  background: #e1e1e1;
  color: #000;
}

.sunny-background {
  background:  rgb(255, 255, 255);
  color: #000;
  padding: 0.15rem;


}

.clear-background {
  background: #272727;
  color: white;
}

.snow {
  background: #f4feffc6;
  color: #0033ff;
}

.sun-hour-background {
  padding: 0.1em;
  border-radius: 0.3em;
}


/* toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.sun-rise-list {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.sun-rise-list li {
  
  list-style-type: none;
  
}

input:checked+.slider {
  background-color: #ff0000;
}



input:checked+.slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}


/* temperature location adding item doesn't highlight when clicking on input field */
select:focus,
button:focus {
  outline: none;
}

/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
  outline: none !important;
  border: 1px solid #545454;
  box-shadow: 0 0 30px rgb(178, 214, 86);
}

.description-area {
  border-radius: 1em;
  margin: 0.5em;
  margin-bottom: 20em;
  background: #fff;
  opacity: 0.9;
  display: inline-block;
  max-width: 30rem;
  padding: 1em;
}

@media screen and (max-width: 89rem) {
  .center-content {
    justify-content: center;
    padding-left: 1em;
    padding-right: 1em;
  }
}


@media screen and (max-width: 45rem) {
  table {
    width: 100%;
    font-size: 1em;

  }

  thead {
    display: none;
  }

  tr {
    display: block;
    margin-bottom: .625em;
  }

  td {
    display: block;
    text-align: right;
  }

  td::before {
    content: attr(data-label);
    float: inline-start;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .center-content {
    padding-left: 1em;
    padding-right: 1em;
  }

  .weather-title {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    color: #ffffff;
    font-size: 3em;
    text-align: left;
    padding-left: 0.66em;
  }

  .description-area {
    margin-bottom: 5em;

  }

}</style>