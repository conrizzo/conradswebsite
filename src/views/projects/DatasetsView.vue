<template>
  <div class="coffee-data-background">

    <h1>Coffee Consumers by country</h1>

    <div class="container-for-svg-graph">
      <div id="chartContainer">
      </div>
    </div>

    <h4 style="margin-top: 0.3em; text-align: left; margin-left: 0.5em; margin-right: 0.5em; color: #000;">
      Coffee consumption data based off (International Coffee Organization 2016).
      Click on the column titles in the table below for each column to sort data
      numerically/alphabetically. The graph will update to the sorted values.
      All 0 values are removed for the column that is sorted. The graph now uses an SVG format output.</h4>

    <table class="table-area">
      <thead>
        <tr>
          <th class="table-column-buttons" @click="sortData('country')">Country</th>
          <th class="table-column-buttons"
            @click="removeZeros('perCapitaCons2016'), sortData('perCapitaCons2016'), barChart('perCapitaCons2016', 'Coffee Consumption Per Capita 2016 (kg)')">
            Coffee Consumption per Capita 2016 (kg)</th>
          <th class="table-column-buttons"
            @click="removeZeros('totCons2019'), sortData('totCons2019'), barChart('totCons2019', 'Dry coffee beans 2019 (kg)')">
            Dry coffee beans 2019 (kg)</th>
          <th style="cursor: pointer;" @click="sortData('region')">Region</th>
          <th class="table-column-buttons" @click="sortData('pop2023'), barChart('pop2023', 'Population 2023')">
            Population 2023</th>
        </tr>
      </thead>
      <tbody>
        <!-- It's not likely best practice to do all these calculations here but for 
          readability it makes it easy to see how the data is formatted in one place -->
        <tr v-for="(item, key) in sortedData" :key="key">
          <td>{{ item.country }}</td>
          <td>{{ Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100 }}</td>
          <td>{{ addCommas(Math.round((item.totCons2019 * 60000) * 100 / 2.20462) / 100) }}</td>
          <td>{{ item.region }}</td>
          <td>{{ addCommas(item.pop2023) }}</td>
        </tr>
      </tbody>
    </table>




  </div>

  <!-- <FastQuickSort ref="fastQuickSort" /> -->


</template>

<script>
import FastQuickSort from "@/components/SortingAlgorithms/FastQuickSort.vue"





import "@/assets/globalCSS.css";

export default {
  name: "DatasetsView",
  components: {

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
    quickSort(columnName) {
      //console.log(columnName);
      const columnA = [columnName];
      //console.log(columnA);
      let array = columnA;
      // set a reference to the component FastQuickSort
      const fastQuickSort = this.$refs.fastQuickSort;
      // Invoke the function from the component FastQuickSort
      this.quickSortedArray = fastQuickSort.invoke([...array], 0, array.length - 1);
      //console.log(this.quickSortedArray)  
    },
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

      const svgWidth = window.innerWidth * 0.9; // Set the width to 90% of the viewport width
      const barHeight = 30;
      const barSpacing = 4;
      const maxValue = Math.max(...data.map((item) => item.value));
      const scaleFactor = svgWidth / maxValue;

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${(barHeight + barSpacing) * data.length + 30
        }">`;

      // Draw the title
      svg += `<text x="${svgWidth / 2
        }" y="15" text-anchor="middle" font-size="1.1rem" font-weight="bold" fill="#000">${title}</text>`;

      // Draw the bars and labels
      let startY = 30;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const barWidth = item.value * scaleFactor;

        svg += `<rect x="0" y="${startY}" width="${barWidth}" height="${barHeight}" fill="rgb(173, 247, 255)" />`;
        svg += `<text x="5" y="${startY + barHeight / 2 + 6}" font-size="1rem">${item.label
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
.coffee-data-background {
  padding-top: 3em;
  background-color: rgb(255, 255, 255);
  padding-bottom: 1em;
  background-blend-mode: multiply;
  background-attachment: fixed;
  position: relative;
  background-size: cover;
  /* Free to use Image Source:
  https://unsplash.com/photos/coffee-beans-are-growing-on-a-tree-branch-3p8U2e7kAiM */
}

.coffee-data-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95svh;
  z-index: 1;
}

.table-area {

  position: relative;
  /* Add this line */
  z-index: 2;
  /* Add this line */
  margin-top: 1em;
}


h1 {
  font-size: 4rem;
  color: rgb(18, 18, 18);
  padding-top: 0.5em;
  font-weight: 400;
}

/* Table */
table {
  width: calc(100% - 1em);
  /* Subtract 1em from 100% to account for the 0.5em margins on both sides */
  margin-left: 0.5em;
  margin-right: 0.5em;
  border-collapse: collapse;

}

/* Table Header */
thead {
  background-color: #ffc400;

}

th {
  padding-right: 0em;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: left;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
}

/* no border on last element */
th:last-child {
  border-right: none;
}

/* Table Body */
tbody {
  background-color: #fffaf1;
  color: #000000;
}

td {
  text-align: left;
  border-bottom: 1px solid #b5b5b5;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

/* remove border at the last row of the table */
tr:last-child td {
  border-bottom: none;
}

/* Alternate Row Color */
tr:nth-child(even) {
  background-color: #fff3de;
}



.table-column-buttons {
  cursor: pointer;
}

/*
.table-column-buttons:hover {
  background-color: #94ddee;
}
*/

.container-for-svg-graph {
  margin: 1rem .5rem 1rem .5rem;
}

@media (max-width: 50rem) {
  table {
    font-size: 0.8em;
    padding: 0.25em;
  }

  h1 {
    font-size: 2rem;
    margin-top: 1em;
  }

}
</style>
