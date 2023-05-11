<template>
  <div>
    <p class="paragraph-text homeview">
      Data as an array: {{ fileContentsArray }} 
      <br>
      <br>
      This is pulling data from <a href="https://github.com/conrizzo/conradswebsite/blob/master/src/data/data.tsv">https://github.com/conrizzo/conradswebsite/blob/master/src/data/data.tsv</a> as a TSV file.
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
    <button @click="sortData">Optional buttons to sort data by types</button>
    <p class="paragraph-text homeview">This is using data from <a href=https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country>https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country</a>, but
     it is being linked as JSON with GitHub. The values are rounded to 2 decimal places, and since values are in lbs, further divided by 2.20462. For example each JSON value is computed through: <span style="color: red">Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100</span> </p>
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Kg's of Coffee per year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in sortedData" :key="key">
          <td>{{ item.country }}</td>
          <td>{{ Math.round(item.perCapitaCons2016 * 100 / 2.20462) / 100}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "@/assets/globalCSS.css";

export default {
  data() {
    return {
      fileContents: '',
      fileContentsArray: [],
      jsonData: null,
      sortedData: null,
    };
  },
  mounted() {
    // Text file import
    const owner = 'conrizzo';
    const repo = 'conradswebsite';
    const path = 'src/data/data.tsv';

    const rawFileURL = `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`;
    
    fetch(rawFileURL)
      .then(response => response.text())
      .then(data => {
        this.fileContents = data;
        this.fileContentsArray = data.split('\n').map(line => line.split('\t'));

        // Check if the last field in the last line is an empty value and if it is, remove it
        const lastLine = this.fileContentsArray[this.fileContentsArray.length - 1];
        if (lastLine && lastLine[lastLine.length - 1] === '') {
          this.fileContentsArray.pop();
        }
      })
      .catch(error => {
        console.error(error);
      });

          // JSON file import
          const owner1 = 'conrizzo';
      const repo1 = 'data_test';
     
      const path1 = 'coffee_data.json';

      const rawJsonURL = `https://raw.githubusercontent.com/${owner1}/${repo1}/main/${path1}`;
      console.log(rawJsonURL)

    fetch(rawJsonURL)
      .then(response => response.json())
      .then(data2 => {
        this.jsonData = data2;
        this.sortData(); // Call the sortData method here so that the data is sorted by default
        
      })
      .catch(error => {
        console.error(error);
      }
      
      );
      
      this.sortedData = this.jsonData;
     
  },
  methods: {
    sortData() {
      
      this.sortedData = this.jsonData.slice().sort((a, b) => b.perCapitaCons2016 - a.perCapitaCons2016);
    }
  }
};
</script>
  <style scoped>
  
  /* Table */
  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Table Header */
  thead {
    background-color: #f5f5f5;
    
  }

  th {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid black;
  }

  /* Table Body */
  tbody {
    background-color: #fff;
  }

  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid black;
  }

  /* Alternate Row Color */
  tr:nth-child(even) {
    background-color: #ededed96;
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
