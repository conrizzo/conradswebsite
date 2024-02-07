<template>
  <main style="min-height: 800px; background: rgb(44, 44, 50);">
    <h1>Word assistant to find words for Wordle</h1>

    <div class="container">
      <div class="grid-box">
        <section class="text-section">
          <h2>What game is this designed to help solve? &rarr;
            <a style="color: #42b983;" class="text-links"
              href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>
          </h2>
          <p>
            Note: This is not an official Wordle site and all game references are property of the respective copyright
            owners.
            This is just a project to search strings with a dataset of words using JavaScript/TypeScript.
          </p>
          <div>
            <span v-if="!viewInstructions" @click="viewInstructions = !viewInstructions" class="description-span">
              View Instructions<span class="arrow down"></span></span>
            <span v-else @click="viewInstructions = !viewInstructions" class="description-span">
              Close Instructions<span class="arrow-up up"></span></span>
          </div>

          <div v-if="viewInstructions" class="instructions">
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
          </div>

        </section>

        <form @submit.prevent="processInputWord()">
          <span style="color:#fff;">{{ outputSuccessMessage }}</span>
          <div class="submission-area">

            <label class="include-label-text">Include ({{ inputLength }}):</label>
            <input class="input-field-style" placeholder="Include letters" type="text" v-model="userInput"
              maxlength="5" />

            <label class="include-label-text">Exclude (optional):</label>
            <input class="input-field-exclude-letters-style" placeholder="Exclude letters" type="text"
              v-model="userInputExcludeLetters" maxlength="18" />
            <!--
            <label>
              <span class="character-indice-font">Match Indices</span>
              <input class="check-box" type="checkbox" name="myCheckbox" v-model="checkboxValue"
                @change="handleCheckboxChange">
            </label>
            -->
          </div>

          <button type="submit" class="clean-button upper-spacing">
            Submit
          </button>

          <dialog class="close" :open="invalidInput">
            <button type="button" autofocus @click="invalidInput = false;" class="close-button"></button>
            <div style="text-align: left;">
              <span class="description-span" style="color: #ff5959;">Error</span>
            </div>
            <p>You are trying to include and exclude the same data!<br>
              {{ duplicateLettersMessage }}
            </p>
          </dialog>
        </form>
      </div>
    </div>
    <!--  <img :src="(getImageSrc() as string)"> for testing -->
    <span style="color: #fff;">Words Allowed:<b>{{ processedWords.length }}</b></span>
    <div class="letter-output-grid-box">
      <div v-for="(word, index) in processedWords" :key="index">
        {{ word.toUpperCase() }}
      </div>
    </div>
  </main>
</template>
  
<script lang="ts">

import { ref, computed, Ref, onMounted } from 'vue';
import { allWords, processWords, lettersMatching } from '../../../data/wordle_words/wordle'
import projectLinks from '@/components/Navigation/ProjectLinks' // meta tags experiment


export default {
  name: 'MyComponent',

  setup() {
    // This adds meta tags for the page - experimenting with this
    onMounted(() => {
      document.title = 'Word assistant to find words for Wordle';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'A project to help win the game Wordle by searching strings with JavaScript/TypeScript');
      }
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', getImageSrc() as string);
      }
    });

    // main variables
    const notLetter: RegExp = /[^a-zA-Z]/;
    let checkboxValue = ref(false);
    const wordleWordData: Ref<Array<String>> = ref(allWords);
    const processedWords: Ref<string[]> = ref([]);
    const maxWordLength: number = 5;
    let userInput: Ref<string> = ref('');
    let userInputExcludeLetters: Ref<string> = ref('');
    let invalidInput = ref(false);
    let viewInstructions = ref(false);

    // meta tags experiment 
    const links = ref(projectLinks);
    const linkWithId9 = links.value.find(link => link.id === 9);
    const imageSrc = linkWithId9 ? linkWithId9.imageSrc : '';
    // this area above is experimental

    let duplicateLettersMessage: Ref<string> = ref('');
    const outputSuccessMessage: Ref<String> = ref("");

    const inputLength = computed(() => `${userInput.value.length}/${maxWordLength}`);

    const exactLetterMatches = () => {
      processedWords.value = lettersMatching(userInput.value, userInputExcludeLetters.value);
    };
    const getOutputSuccessMessage = () => {
      outputSuccessMessage.value = "Submission successful! Scroll down to see the results!";
    }
    const handleCheckboxChange = () => {
      console.log('Checkbox value:', checkboxValue.value);
      // Add your logic here
    };

    const getImageSrc = () => {
      return projectLinks.find(link => link.id === 9)?.imageSrc ?? '';
    };

    const checkForDuplicateLetters = () => {
      const inputLetters = userInput.value.split('');
      const excludeLetters = userInputExcludeLetters.value.split('');
      const duplicates = inputLetters.filter(letter => excludeLetters.includes(letter));

      if (duplicates.length > 0) {
        // singular/plural message
        if (duplicates.length === 1) {
          duplicateLettersMessage.value = `The error letter is ${duplicates[0].toUpperCase()}`;
        } else {
          duplicateLettersMessage.value = `The error letters are ${duplicates.join(', ').toUpperCase()}`;
        }
        duplicates.length = 0; // read more about this - clears all array instances and works but should understand this single line better
        invalidInput.value = true; // make error message
        return true;
      }
      return false;
    };

    // MAIN FUNCTION FOR THIS
    const processInputWord = () => {
      // verify a user isn't trying to exclude letters that are also included
      if (checkForDuplicateLetters() === true) {
        return;
      }
      getOutputSuccessMessage(); // submission successful message

      // if any input is not a letter this says find exact character position matches
      if (notLetter.test(userInput.value) && !checkboxValue.value) {
        // An error message can optionally be inserted here with invalidInput.value = true;       
        processedWords.value = lettersMatching(userInput.value, userInputExcludeLetters.value);
        return;
      }
      // This will check if any letter is in the word and positions don't matter - could be if-else not sure
      // what is more readable
      processedWords.value = processWords(userInput.value, userInputExcludeLetters.value);
    };

    return {
      userInput,
      userInputExcludeLetters,
      processInputWord,
      processedWords,
      lettersMatching,
      checkboxValue,
      handleCheckboxChange,
      exactLetterMatches,
      inputLength,
      invalidInput,
      getOutputSuccessMessage,
      outputSuccessMessage,
      duplicateLettersMessage,
      viewInstructions,
      // meta tags experiment 
      links,
      imageSrc,
      getImageSrc
      // meta tags experiment 
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
  line-height: 1;
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
  cursor: pointer;
}

/* custom arrow logic starts */
.arrow {
  border: solid #42b983;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.arrow-up {
  border: solid #42b983;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  margin-left: 0.5rem;
  margin-bottom: -0.2rem;
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
/* custom arrow logic ends */

.description-span:hover {
  text-decoration: underline;
  user-select: none;
}

.text-section {
  margin: 0 auto;
  background: rgb(44, 44, 50);
  color: #fff;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: flex-start;
  flex-direction: column;
  background: rgb(44, 44, 50);
  padding: 1rem 1.5rem 1rem 1.5rem;
  margin: 0 auto;
  max-width: 60rem;
}

.letter-output-grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  align-items: flex-end;
  background: rgb(44, 44, 50);
  color: #fff;
  padding: 1rem .25rem 1rem .25rem;
  max-width: 30rem;
  margin: 0 auto;
  border-radius: 0.5rem;
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
  /*letter-spacing: .1rem;*/
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

.upper-spacing:active {
  background: #42b983;
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
  background-color: #ff0000;
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

.include-label-text {
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.3rem;
  color: #ffffff;
  background-color: rgb(51, 51, 51);
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
  border: 3px solid #ff5959;
  margin-top: 1rem;
  max-width: 39.5rem;
}

.dialog-button {
  margin: 1rem
}

.submission-area {
  border: 2px solid #42b983;
  background-color: rgb(51, 51, 51);
  max-width: 39.5rem;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 0rem 1rem .5rem 1rem;
}

.character-indice-font {
  font-size: 1rem;
  padding-right: 0.2rem;

}

@media screen and (max-width: 70rem) {
  .container {
    padding: .5em;
    background: rgb(44, 44, 50);
  }

  .character-indice-font {
    font-size: 0.9rem;
  }


  .grid-box {
    grid-template-columns: 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 2rem;
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>