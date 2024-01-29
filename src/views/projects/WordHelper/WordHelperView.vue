<template>
  <div style="min-height: 800px;">
    <h1>Word assistant to find words for Wordle</h1>

    <div class="container">
      <div class="grid-box">

        <section class="text-section">
          <h2>What game is this designed to help solve? &rarr;
            <a style="color: #42b983; text-decoration: underline;" class="text-links"
              href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>
          </h2>

          <p>
            Note: This is not an official Wordle site and all game references are property of the respective copyright
            owners.
            This is just a project to search strings with a dataset of words using JavaScript/TypeScript.
          </p>


          <div>
            <span class="description-span">Instructions</span>
          </div>
          <p>
            Typing letters in the <b>Include</b> field will
            search for those letters in any position in a word.
          </p>
          <p>
            In order to search for words with a specific letter in a specific position add anything other than a
            letter between the letters.
          </p>
          <p>
            <b>For example:</b> Type "_r_a_" to search for words with the 2nd letter
            <b>r</b> and 4th letter <b>a</b>.
            Typing "##eam" will search for words with the 3rd letter "<b>e</b>", 4th letter "<b>a</b>", and 5th letter
            "<b>m</b>".
          </p>

          <p>
            The "<b>Exclude</b>" field is optional and will exclude any words with the letters entered.
            For example, if input in this field is "ab"
            then all words with the letter "a" or "b" will be excluded.

          </p>

        </section>

        <div>
          <div class="submission-area">
           
              
              <label class="include-label-text">Include ({{ inputLength }}):</label>
              <input class="input-field-style" placeholder="Include words with these letters" type="text"
                v-model="userInput" maxlength="5" />

          

                <label class="include-label-text">Exclude:</label>
             <input class="input-field-exclude-letters-style"
                placeholder="Exclude words with these letters (optional)" type="text" v-model="userInputExcludeLetters"
                maxlength="18" />
        
            <!--
            <label>
              <span class="character-indice-font">Match Indices</span>
              <input class="check-box" type="checkbox" name="myCheckbox" v-model="checkboxValue"
                @change="handleCheckboxChange">
            </label>
            -->
          </div>

          <button class="clean-button upper-spacing" @click="checkboxValue ? exactLetterMatches() : processInputWord()">
            Submit
          </button>

          <dialog class="close" :open="invalidInput">
            <button autofocus @click="invalidInput = false;" class="close-button"></button>
            <div style="text-align: left;">
              <span class="description-span" style="color: #ff5959;">Error</span>
            </div>
            <p>To process inputs with anything other than letters the checkbox
              that says "<b>Match Indices</b>" must be checked.
            </p>
          </dialog>
        </div>

      </div>
    </div>
    Words Allowed:<b>{{ processedWords.length }}</b>
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
    const notLetter: RegExp = /[^a-zA-Z]/;
    let checkboxValue: Ref<boolean> = ref(false);
    const wordleWordData: Ref<Array<String>> = ref(allWords);
    const processedWords: Ref<string[]> = ref([]);
    const maxWordLength: number = 5;

    let userInput: Ref<string> = ref('');
    let userInputExcludeLetters: Ref<string> = ref('');
    let invalidInput: Ref<boolean> = ref(false);

    const inputLength = computed(() => `${userInput.value.length}/${maxWordLength}`);

    const exactLetterMatches = () => {
      processedWords.value = lettersMatching(userInput.value, userInputExcludeLetters.value);
    };

    const handleCheckboxChange = () => {
      console.log('Checkbox value:', checkboxValue.value);
      // Add your logic here
    };

    const processInputWord = () => {
      if (notLetter.test(userInput.value) && !checkboxValue.value) {
        // An error message can optionally be inserted here with invalidInput.value = true;       
        processedWords.value = lettersMatching(userInput.value, userInputExcludeLetters.value);
        return;
      }
      processedWords.value = processWords(userInput.value, userInputExcludeLetters.value);
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
      userInputExcludeLetters,
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
  font-size: 2.1rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}

p {
  padding-bottom: 1rem;
  text-align: left;
  max-width: 100rem;
}

.description-span {
  color: #42b983;
  text-transform: capitalize;
  font-size: 1.5rem;
}

.text-section {
  margin: 0 auto;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  padding: 5px 1rem;
  margin: 8px 0;
  margin-left: 0.1rem;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: .5rem;
  font-size: 1.5rem;
  width: 100%;
  letter-spacing: .1rem;
  text-transform: uppercase;
}

.input-field-style::placeholder,
.input-field-exclude-letters-style::placeholder {
  text-transform: none;
  letter-spacing: 0;
}

.input-field-exclude-letters-style {
  padding: 5px 1rem;
  margin: 8px 0;
  margin-left: 0.1rem;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: .5rem;
  font-size: 1.5rem;
  width: 100%;
  letter-spacing: .1rem;
  text-transform: uppercase;
}

.exclude-div {
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-left: 2rem;
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



.upper-spacing {
  margin-top: 1rem;
}

label {
  background: #ffffff;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: .5rem;

  padding-right: .1rem;
  border-radius: .5rem;
  font-weight: bold;

  margin-bottom: -2rem;
}

.close-button {
  position: absolute;
  top: -2px;
  right: -2px;
  border-top-right-radius: .8rem;
  border-bottom-left-radius: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 3;
  width: 40px;
  height: 40px;
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
  width: 3px;
  background-color: #000000;
  top: .33rem;
  left: 1.25rem;
}
.include-label-text{
  display: flex; 
  align-items: flex-start; 
  padding-bottom: 1.3rem;
  color: #42b883;
  cursor: auto; 
}
.close-button:before {
  transform: rotate(45deg);
}

.close-button:after {
  transform: rotate(-45deg);
}

dialog {
  position: relative;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1rem;
  z-index: 2;
  border: 2px solid #ff5959;
  margin-top: 1rem;
  max-width: 39.5rem;
}

.dialog-button {
  margin: 1rem
}

.submission-area {
  border: 2px solid #42b883;
  max-width: 39.5rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.character-indice-font {
  font-size: 1rem;
  padding-right: 0.2rem;

}

@media screen and (max-width: 70rem) {
  .container {
    padding: 1em;
    background-color: #f2f2f2;
  }

  .character-indice-font {
    font-size: 0.9rem;
  }


  .grid-box {
    grid-template-columns: 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>