<template>
  <div style="min-height: 800px;">
    <h1>Word assistant to find words for Wordle</h1>
    <div class="container">
      <div class="grid-box">
        <section style="margin: 0 auto;">
          <h2>Two ways to search at the moment</h2>
          <p>
            To match exact positions within the string use any non-letter for unknown letters in the word and click the
            checkbox below the
            search field.
            <br>
            <br>
            For example: type "_r_a_" to search for words with the 2nd letter <b>r</b> and 4th letter <b>a</b>.
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
          <dialog class="close" :open="invalidInput">
            <button @click="invalidInput = false;" class="close-button"></button>
           <p>Error: To process inputs with anything other than letters you need to click the checkbox
             that says: <br> "<b>Match Character Indices</b>"
           </p>
           <button autofocus class="clean-button dialog-button" @click="invalidInput = false;">Close</button>
         </dialog>


          {{ inputLength }}
          <input class="input-field-style" type="text" v-model="userInput" maxlength="5" />

          <button class="clean-button" @click="checkboxValue ? exactLetterMatches() : processInputWord()">
            Submit
          </button>
          <br>
          <label>
            Match Character Indices
            <input class="check-box" type="checkbox" name="myCheckbox" v-model="checkboxValue"
              @change="handleCheckboxChange">
          </label>
        </div>
        <div style="margin: 0 auto;">
          <div style="text-align: left;">
            <span class="description-span">Notice:</span>
          </div>
            <p>
              If the <b>Match Character Indices</b>  checkbox is not checked the default behavior is to search for all words
              with any of the letters in the input word. All search queries can be any length of letters whether the checkbox
              is checked or not.
              e.g. "a" will return all words with the letter "a" in them.
              e.g. "ab" will return all words with the letters "a" or "b" in them.
            </p>
         
         </div>
      </div>
    </div>
    <div class="letter-output-grid-box" style="padding-top: 1rem;">
      <div v-for="(word, index) in processedWords" :key="index">
        <b>{{ word }}</b>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">

import { ref, computed, Ref } from 'vue';
import { allWords, processWords, lettersMatching } from '../../../data/wordle_words/wordle'

export default {
  name: 'MyComponent',
  setup() {
    let checkboxValue: Ref<boolean> = ref(false);
    const wordleWordData: Ref<Array<String>> = ref(allWords);
    const processedWords: Ref<string[]> = ref([]);
    const maxWordLength: number = 5;
    let userInput: Ref<string> = ref('');
    const notLetter: RegExp = /[^a-zA-Z]/;
    let invalidInput: Ref<boolean> = ref(false);
    const showDialogBtn = document.getElementById('showDialogBtn');



    const inputLength = computed(() => `${userInput.value.length}/${maxWordLength}`);


    const exactLetterMatches = () => {
      processedWords.value = lettersMatching(userInput.value);
    };
    const handleCheckboxChange = () => {
      console.log('Checkbox value:', checkboxValue.value);
      // Add your logic here
    };
    const processInputWord = () => {
      if (notLetter.test(userInput.value) && !checkboxValue.value) {      
        invalidInput.value = true;
      }
      processedWords.value = processWords(userInput.value);
    };

    return {
      userInput,
      processInputWord,
      processedWords,
      lettersMatching,
      checkboxValue,
      handleCheckboxChange,
      exactLetterMatches,
      inputLength,
      invalidInput,
    };
  }
};
</script>
  
<style scoped>
h1 {
  color: #42b983;
  text-transform: capitalize;
  font-size: 4rem;
  padding: 3rem 1rem 3rem 1rem;
  font-family: 'Signika', sans-serif;
  font-weight: 300;
  line-height: 1.1;
  max-width: 50rem;
  margin: 0 auto;
}

h2 {
  color: #42b983;
  text-transform: capitalize;
  text-align: left;
  font-size: 2rem; 
  padding-bottom: 1rem;
}

.description-span{
  color: #42b983;
  text-transform: capitalize;
  text-align: left;
  font-size: 2rem; 
  padding-bottom: 1rem;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: flex-start;
  flex-direction: column;
  background: #ffffff;
  padding: 1rem 1.5rem 1rem 1.5rem;
}

.letter-output-grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: flex-end;
  background: #ffffff;
  padding: 1rem 1.5rem 1rem 1.5rem;
  max-width: 40rem;
  margin: 0 auto;
}

select:focus,
button:focus {
  outline: none;
}

/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
  outline: none !important;
  border: 1px solid #545454;  
}

.input-field-style {
  padding: 10px 20px;
  margin: 8px 0;
  margin-left: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: .5rem;
  font-size: 2rem;
  max-width: 8rem;
}

.container {
  padding: 2em;  
}

.check-box {
  cursor: pointer;
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
  cursor: pointer;
  margin: 0 auto;
  padding: .5rem;
  padding-left: 0.5rem;
  padding-right: .1rem;  
  border-radius: .5rem;
  font-weight: bold;
  
  margin-bottom: -2rem;
}

.close-button {
  position: absolute; 
  top: -2px;
  right: -2px;
  border-top-right-radius: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 3;
  width: 35px;
  height: 35px;  
  background-color: #42b883;
}

.close-button:hover {
  background-color: #ff5959;
}

.close-button:before,
.close-button:after {
  position: absolute;
 
  content: " ";
  height: 28px;
  width: 2px;
  background-color: #000000;
  top: .25rem;
  left: 1rem;
}
.close-button:before {
  transform: rotate(45deg);
}
.close-button:after {
  transform: rotate(-45deg);
}
dialog{
  position: relative;
  margin: 0 auto;
  border-radius: 1rem; 
  padding: 2rem;
  z-index: 2;
  max-width: 30rem;
  border: 2px solid rgb(66, 185, 131);
}
.dialog-button{
  margin: 1rem;
}

@media screen and (max-width: 70rem) {
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