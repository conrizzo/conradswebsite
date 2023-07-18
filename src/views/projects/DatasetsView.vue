
<template>
  <div>

    <h2 style="font-size:3em; padding-top: 1em; padding-bottom: 0.33em;" class="homeview">Coffee Consumers
      by country</h2>
    <!-- how do i output the graph here? -->
    <div style="margin-left: 8px; margin-right: 8px; text-align: left; width: width: calc(100% - 16px);">

      <div id="chartContainer"></div>
    </div>
    <h4 style="margin-top: 0.3em; text-align: left; margin-left: 0.5em; margin-right: 0.5em;">
      <u><b>Note:</b></u> click on the column titles in the table below for each column to sort data
      numerically/alphabetically. The graph will update to the sorted values.
      All 0 values are removed for the column that is sorted. The graph now uses an SVG format output.</h4>

    <table style="margin-top: 1em;">
      <thead>
        <tr>
          <th style="cursor: pointer;" @click="sortData('country')">Country</th>
          <th class="table-column-buttons" style="cursor: pointer;"
            @click="removeZeros('perCapitaCons2016'), sortData('perCapitaCons2016'), barChart('perCapitaCons2016', 'Coffee Consumption Per Capita 2016 (kg)')">
            Coffee Consumption per Capita 2016 (kg)</th>
          <th class="table-column-buttons" style="cursor: pointer;"
            @click="removeZeros('totCons2019'), sortData('totCons2019'), barChart('totCons2019', 'Dry coffee beans 2019 (kg)')">
            Dry coffee beans 2019 (kg)</th>
          <th style="cursor: pointer;" @click="sortData('region')">Region</th>
          <th class="table-column-buttons" style="cursor: pointer;"
            @click="sortData('pop2023'), barChart('pop2023', 'Population 2023')">Population 2023</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in sortedData" :key="key">
          <td>{{ item.country }}</td>
          <td>{{ Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100 }}</td>
          <td>{{ addCommas(Math.round((item.totCons2019 * 60000) * 100 / 2.20462) / 100) }}</td>
          <td>{{ item.region }}</td>
          <td>{{ addCommas(item.pop2023) }}</td>
        </tr>
      </tbody>
    </table>

    <p class="paragraph-text homeview break-text">The functions/graphical formatting using this data table are self-made.
      Click on the column titles for each column to sort data numerically/alphabetically. The graph will update to the
      sorted values.
      Note: all 0 values are removed for the column that is sorted. The graph now uses an SVG format output. The coffee
      data itself comes from <a
        href=https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country>https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country</a>,
      but
      it is being linked as JSON from a GitHub file. The values are rounded to 2 decimal places, and since values are in
      lbs,
      further divided by 2.20462. For example each JSON value is computed through: <span
        style="color: #999999;">Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100</span>.

    </p>

    <h1 class="homeview" style="color: #000;">
      Convenient area to test anything else dataset related here...
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
      addCommas: function (number) {
        number = number.toString();
        var parts = number.split(/([\d.]+)/g);

        for (let i = 1; i < parts.length; i += 2) {
          parts[i] = parts[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return parts.join("");
      },
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
        //error handling
        this.errorMessage = 'An error occurred while fetching the data. Please try again later.' + error;
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
        this.barChart();
      })
      .catch((error) => {
        // error handling
        this.errorMessage = 'An error occurred while fetching the data. Please try again later.' + error;
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
    removeZeros(columnName = "perCapitaCons2016") {
      this.removedZeros = this.jsonData.filter(
        (item) => item[columnName] !== 0 && item[columnName] !== null
      );
    },
    barChart(
      sortType = "perCapitaCons2016",
      title = "Coffee Consumption Per Capita 2016 (kg)"
    ) {
      // This will sort the data by the selected column for the graph
      //console.log(this.sortedData);
      const data = this.sortedData.map((item) => {
        let value;
        if (sortType === "perCapitaCons2016") {
          value = Math.round((item.perCapitaCons2016 * 100) / 2.20462) / 100;
        } else if (sortType === "totCons2019") {
          value = Math.round((item[sortType] * 60000 * 100) / 2.20462) / 100;
        } else {
          value = item[sortType];
        }
        return {
          label: `${item.country} (${this.addCommas(value)})`,
          value: value,
        };
      });

      const svgWidth = window.innerWidth * 0.95; // Set the width to 90% of the viewport width
      const barHeight = 20;
      const barSpacing = 4;
      const maxValue = Math.max(...data.map((item) => item.value));
      const scaleFactor = svgWidth / maxValue;

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${(barHeight + barSpacing) * data.length + 30
        }">`;

      // Draw the title
      svg += `<text x="${svgWidth / 2
        }" y="20" text-anchor="middle" font-size="17" font-weight="bold" fill="#fff">${title}</text>`;

      // Draw the bars and labels
      let startY = 30;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const barWidth = item.value * scaleFactor;

        svg += `<rect x="0" y="${startY}" width="${barWidth}" height="${barHeight}" fill="#66ff99" />`;
        svg += `<text x="5" y="${startY + barHeight / 2 + 6}" font-size="17">${item.label
          }</text>`;

        startY += barHeight + barSpacing;
      }

      svg += "</svg>";

      //console.log(svg); // Output the generated SVG

      // You can then use the SVG as needed, e.g., appending it to an HTML element:
      document.getElementById("chartContainer").innerHTML = svg;
    },
  },
};
</script>
<style scoped>
/* Table */
table {
  width: calc(100% - 1em);
  /* Subtract 1em from 100% to account for the 0.5em margins on both sides */

  margin-left: 0.5em;
  margin-right: 0.5em;
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

.table-column-buttons {
  background-color: #66ff99;
}

.table-column-buttons:hover {
  background-color: #9dffbe;
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

  margin-bottom: 1em;
  margin-top: 1em;
}</style>
