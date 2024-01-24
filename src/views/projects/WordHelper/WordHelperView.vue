<template>
  <div style="min-height: 800px;">
    <h1>Word assistant to find words for Wordle</h1>
    <div class="container">
      <div class="grid-box">
        <section>
          <h2>To enable exact character matches</h2>

          <p>
            For matching exact locations use any non-letter for unknown letters in the word.
            <br>
            <br>
            For example: type "_r_a_" to search for words with the 2nd letter <b>r</b> and 3rd letter <b>a</b>.
            "b&nbsp;&nbsp;&nbsp;d" also works with 3 spaces to search for the 1st letter "<b>b</b>" and last letter
            "<b>d</b>" in words.
            "&*eam" will search for words with the 3rd letter "<b>e</b>", 4th letter "<b>a</b>", and 5th letter
            "<b>m</b>".

          </p>
          <br>
          <p>
            Play <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> here.
            Note: This is not an official Wordle site and all game references are property of the respective copyright
            owners.
            This is just a project to search strings with TypeScript.
          </p>
        </section>
        <div>
          <input class="input-field-style" type="text" v-model="userInput" />

          <button class="clean-button" @click="checkboxValue ? exactLetterMatches() : processInputWord()">
            Submit
          </button>
        </div>
        <label>
          Match Exact Character Locations
          <input class="check-box" type="checkbox" name="myCheckbox" v-model="checkboxValue"
            @change="handleCheckboxChange">

        </label>


      </div>
    </div>
    <div style="padding-top: 1rem;">
      <ul>
        <li v-for="(word, index) in processedWords" :key="index">
          {{ word }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
import { ref, computed } from 'vue';

import { allWords, processWords, lettersMatching } from '../../../data/wordle_words/wordle.ts'

export default {
  name: 'MyComponent',
  setup() {
    let checkboxValue = ref(false);
    const wordleWordData = ref(allWords);
    const processedWords = ref([]);

    let userInput = ref('');

    const exactLetterMatches = () => {
      processedWords.value = lettersMatching(userInput.value);
    };

    const handleCheckboxChange = () => {
      console.log('Checkbox value:', checkboxValue.value);
      // Add your logic here
    };

    const processInputWord = () => {
      console.log("input word: ", userInput.value)

      processedWords.value = processWords(userInput.value);

    };



    return {

      userInput,
      processInputWord,
      processedWords,
      lettersMatching,
      checkboxValue,
      handleCheckboxChange,
      exactLetterMatches
    };
  }
};
</script>
  
<style scoped>
h1 {
  color: #42b983;
  text-transform: capitalize;
  font-size: 2rem;
  padding: 3rem 1rem 3rem 1rem;
}

h2 {
  color: #42b983;
  text-transform: capitalize;
  text-align: left;
  font-size: 2rem;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: flex-end;
  background: #ffffff;
  padding: 1rem 1.5rem 1rem 1.5rem;
}


select:focus,
button:focus {
  outline: none;
}

/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
  outline: none !important;
  border: 1px solid #545454;
  box-shadow: 0 0 30px #42b983;
}

.input-field-style {
  padding: 10px 20px;
  margin: 8px 0;
  margin-left: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: .5rem;
}

.container {
  padding: 2em;
  background-color: #f2f2f2;
}

.check-box {

  margin-left: 0.25rem;
  transform: scale(1.5);

}

input[type='checkbox'] {
  accent-color: #42b983;
}

p {
  text-align: left;
}

label {
  background: #ffffff;
  width: fit-content;
  margin: 0 auto;
  padding: .5rem;
  padding-right: .8rem;
  padding-left: 0.5rem;
  border-radius: .5rem;
  font-weight: bold;
  border: 1px solid #42b983;

}


@media screen and (max-width: 45em) {

  .container {
    padding: 1em;
    background-color: #f2f2f2;
  }

  .grid-box {
    grid-template-columns: 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>