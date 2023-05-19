
<template>
  <div>
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

    
    <p class="paragraph-text homeview break-text">This is using data from <a
        href=https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country>https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country</a>,
      but
      it is being linked as JSON with GitHub. The values are rounded to 2 decimal places, and since values are in lbs,
      further divided by 2.20462. For example each JSON value is computed through: <span
        style="color: red">Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100</span> </p>


    <h2 style="color: white; font-size:3em; padding-bottom: 0.33em;" class="homeview">Click column titles to sort</h2>
    <table>

      <thead>

        <tr>
          <th style="cursor: pointer;" @click="sortData('country')">Country</th>
          <th style="cursor: pointer;" @click="sortData('perCapitaCons2016')">Coffee Consumption per Capita 2016 (kg)</th>
          <th style="cursor: pointer;" @click="sortData('totCons2019')">dry coffee beans 2019 (kg)</th>
          <th style="cursor: pointer;" @click="sortData('region')">Region</th>
          <th style="cursor: pointer;" @click="sortData('pop2023')">Population 2023</th>
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
        console.log(parts);
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

    console.log(rawJsonURL);

    fetch(rawJsonURL)
      .then((response) => response.json())
      .then((data2) => {
        this.jsonData = data2;
        this.removeZeros();
        this.sortData(); // Call the sortData method here so that the data is sorted by default
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
    removeZeros() {
      this.removedZeros = this.jsonData.filter(
        (item) =>
          item.perCapitaCons2016 !== 0 && item.perCapitaCons2016 !== null
      );
    },
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
