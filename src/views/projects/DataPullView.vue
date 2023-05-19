
<template>
  <div>
    

    <h2 style="color: white; font-size:3em; padding-top: 2em; padding-bottom: 0.33em;" class="homeview">Coffee Consumers by country</h2>
    <p class="paragraph-text homeview break-text">This is using data from <a
        href=https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country>https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country</a>,
      but
      it is being linked as JSON with GitHub. The values are rounded to 2 decimal places, and since values are in lbs,
      further divided by 2.20462. For example each JSON value is computed through: <span
        style="color: red">Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100</span>.
        <br>
        <br>
        Click on the column titles for each column to sort data numerically/alphabetically. The graph will update to the sorted values.
        Note: all 0 values are removed for the column that is sorted. </p>

      <!-- how do i output the graph here? -->
      
      <div style="text-align: left;">
      <canvas id="barGraphCanvas"></canvas>
    </div>
    <table style="margin-top: 1em;">

      <thead>

        <tr>
          <th style="cursor: pointer;" @click="sortData('country')">Country</th>
          <th style="cursor: pointer;" @click="removeZeros('perCapitaCons2016'),sortData('perCapitaCons2016'), barChart('perCapitaCons2016')">Coffee Consumption per Capita 2016 (kg)</th>
          <th style="cursor: pointer;" @click="removeZeros('totCons2019'),sortData('totCons2019'),barChart('totCons2019')">dry coffee beans 2019 (kg)</th>
          <th style="cursor: pointer;" @click="sortData('region')">Region</th>
          <th style="cursor: pointer;" @click="sortData('pop2023'),barChart('pop2023')">Population 2023</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in sortedData" :key="key">
          <td>{{ item.country }}</td>
          <td>{{ Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100 }}</td>
          <td>{{ addCommas(Math.round((item.totCons2019 * 60000)* 100 / 2.20462) / 100 ) }}</td>
          <td>{{ item.region }}</td>
          <td>{{ addCommas(item.pop2023) }}</td>
        </tr>
      </tbody>
    </table>
    <h1 class="homeview">
      Testing datasets here.
    </h1>
    <p class="paragraph-text homeview break-text">
      Data as an array: {{ fileContentsArray }}
      <br>
      <br>
      This is pulling data from <a
        href="https://github.com/conrizzo/conradswebsite/blob/master/src/data/data.tsv">https://github.com/conrizzo/conradswebsite/blob/master/src/data/data.tsv</a>
      as a TSV file.
    </p>
    <br>
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, index) in fileContentsArray" :key="index">
          <td v-for="(field, fieldIndex) in line" :key="fieldIndex">{{ field }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  
  <FirstFooter></FirstFooter>
</template>

<script>

import "@/assets/globalCSS.css";
import FirstFooter from "@/components/FirstFooter.vue";
export default {
  name: "DatasetsView",
  components: {
    FirstFooter,
  },
  data() {
    return {
      fileContents: "",
      fileContentsArray: [],
      jsonData: null,
      sortedData: null,
      removedZeros: null,

      
      
      
      // This function adds commas to numbers to increase readability
      addCommas: function(number) {
        number = number.toString();
        var parts = number.split(/([\d.]+)/g);
        
        
        for (let i = 1; i < parts.length; i += 2) {
          parts[i] = parts[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return parts.join("");
        
    }
    };
  },
  mounted() {
     
   
    // Text file import
    const owner = "conrizzo";
    const repo = "conradswebsite";
    const path = "src/data/data.tsv";

    const rawFileURL = `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`;

    fetch(rawFileURL)
      .then((response) => response.text())
      .then((data) => {
        this.fileContents = data;
        this.fileContentsArray = data
          .split("\n")
          .map((line) => line.split("\t"));

        // Check if the last field in the last line is an empty value and if it is, remove it
        const lastLine =
          this.fileContentsArray[this.fileContentsArray.length - 1];
        if (lastLine && lastLine[lastLine.length - 1] === "") {
          this.fileContentsArray.pop();
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // JSON file import
    const owner1 = "conrizzo";
    const repo1 = "data_sets_for_conradswebsite";
    const path1 = "coffee_data.json";
    const rawJsonURL = `https://raw.githubusercontent.com/${owner1}/${repo1}/main/${path1}`;   
    

    fetch(rawJsonURL)
      .then((response) => response.json())
      .then((data2) => {
        this.jsonData = data2;
        this.removeZeros();
        this.sortData(); // Call the sortData method here so that the data is sorted by default
        this.barChart()
      })
      .catch((error) => {
        console.error(error);
      });

    this.sortedData = this.jsonData;
    
  },
  methods: {
    // this sorts the data by a specific column
    sortData(columnName) {
      /*
      Check if the currently sorted column is the same as the clicked column
      If this.sortedColumn and columnName are the same, it means that the 
      currently sorted column is being clicked again. This is important because 
      you want to toggle the sorting direction when the same column is clicked multiple times.
      */
      const isSameColumn = this.sortedColumn === columnName;

      // Toggle the sorting direction based on whether it's the same column or not
      // The "?" is a ternary operator. It's a shorthand for an if/else statement
      this.sortDirection = isSameColumn ? !this.sortDirection : true;

      this.sortedData = this.removedZeros.slice().sort((a, b) => {
        const columnA = a[columnName];
        const columnB = b[columnName];

        // Handle null values
        if (columnA === null) return 1;
        if (columnB === null) return -1;

        // Handle numeric and non-numeric values
        if (typeof columnA === "number" && typeof columnB === "number") {
          const result = columnB - columnA;
          return this.sortDirection ? result : -result; // Reverse sorting if necessary
        } else {
          const strA = String(columnA).toLowerCase();
          const strB = String(columnB).toLowerCase();

          // localeCompare https://www.w3schools.com/jsref/jsref_localecompare.asp#:~:text=Definition%20and%20Usage,language%20settings%20of%20the%20browser.
          const result = strB.localeCompare(strA);
          return this.sortDirection ? result : -result; // Reverse sorting if necessary
        }
      });

      // Store the currently sorted column
      this.sortedColumn = columnName;
    },
    // this function removes all 0 or null values from JSON data
    removeZeros(columnName = 'perCapitaCons2016') {
      this.removedZeros = this.jsonData.filter(
        (item) =>
          item[columnName] !== 0 && item[columnName] !== null
      );
    },
    barChart(sortType = 'perCapitaCons2016') {    
        
        // Sample data for the bar graph
        console.log(this.sortedData);
        const data = this.sortedData.map(item => {
          return {
            label: item.country,
            value: item[sortType]
          }
        });

        // Get the canvas element and its 2D context
        const canvas = document.getElementById('barGraphCanvas');
         
        const ctx = canvas.getContext('2d');
        
const screenWidth = window.innerWidth; // Get the width of the screen
const canvasWidthPercentage = 90; // Set the desired percentage

canvas.width = (screenWidth * canvasWidthPercentage) / 100;
canvas.height = canvas.width * (9 / 16); // Adjust height proportionally if needed
        
        
        // Clear the canvas before drawing the graph - point of this is so updated values can be displayed and it doesn't
        // just keep the same graph values with updated orders
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set the bar graph configuration
        const barHeight = 20;
        const barSpacing = 5;
        const graphWidth = canvas.width;
        const maxValue = Math.max(...data.map(item => item.value));

        // Calculate the scaling factor for the bar widths
        const scaleFactor = graphWidth / maxValue;
        
        // Function to draw a bar
        const drawBar = (x, y, width, height, color) => {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, width, height);
        };

        // Function to draw the bar graph
        const drawGraph = () => {
          let startY = 40;

          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const barWidth = item.value * scaleFactor;
            const startX = 20;

            drawBar(startX, startY, barWidth, barHeight, '#00ff77'); // Change the color to red

            // Draw the label to the left of the bar
            ctx.fillStyle = '#000';
            ctx.textAlign = 'left';
              ctx.font = 'bold 14px Arial';
              ctx.fillStyle = 'black'; // Set the fill color to yellow
              
            ctx.fillText(item.label, startX + 5, startY + barHeight / 2 + 5);

            startY += barHeight + barSpacing;
          }
        };

        drawGraph();
      },

      
  },
};
</script>
<style scoped>
/* Table */
table {
  width: 40%;
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

p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: #000000;
  background: #fff;
  border-radius: 5px;

  font-weight: normal;
  margin-bottom: 1em;
  margin-top: 1em;
}
</style>
