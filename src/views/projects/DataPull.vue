<template>
    <div>
        {{ fileContentsArray }}
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(line, index) in fileContentsArray" :key="index">
            <td v-for="(field, fieldIndex) in line" :key="fieldIndex">{{ field }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fileContents: '',
        fileContentsArray: []
      };
    },
    mounted() {
      const owner = 'conrizzo';
      const repo = 'conradswebsite';
      const path = 'data/data.tsv';
  
      const rawFileURL = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;
  
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
    }
  };
  </script>
  