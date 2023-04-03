

<template>
  <div style="padding: 0.15em">
    <input class="input-field" v-model="expression" type="text" @input="checkInput" />
  </div>
  <div class="grid-container cow-image">
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[1] }">{{ buttonList[1] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[2] }">{{ buttonList[2] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[3] }">{{ buttonList[3] }}</button>

    <button class="grid-item-symbols" @click="addDivision()">÷</button>

    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[4] }">{{ buttonList[4] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[5] }">{{ buttonList[5] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[6] }">{{ buttonList[6] }}</button>
    <button class="grid-item-symbols" @click="addSubtraction()">-</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[7] }">{{ buttonList[7] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[8] }">{{ buttonList[8] }}</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[9] }">{{ buttonList[9] }}</button>
    <button class="grid-item-symbols" @click="addMultiplication()">
      &#215;
    </button>

    <button class="grid-item" @click="addDecimalPoint()">.</button>
    <button class="grid-item" @click="addNumber()" :class="{ active: isActive[0] }">{{ buttonList[0] }}</button>
    <button class="grid-item" @click="removeEntry()">
      <div class="arrow-position">
        <div class="left-arrow"></div>
      </div>
    </button>
    <button class="grid-item-symbols" @click="addAddition()">+</button>
    <button class="grid-item" @click="addMoo(), mooButtonHit()">Moo</button>
  </div>

  <div style="margin-bottom: 5px">
    <button class="button-35" @click="clearField">Reset</button>
    <button class="button-35" style="margin-left: 5px" @click="cowculate(), mooDialogue(), noEntry()">
      Cowculate
    </button>
  </div>
<div style="padding: 0.25em; margin-bottom: 3em">
  <!-- This code checks for an error message and an empty string to see if user tried to 'cowculate'
      without any input. Then if there is input it pushes the error message to the line below the incorrect input.
        As long as a correct number math operator sequence is present a correct output is shown.    
      -->
    <h2 class="white-color-text cowculate-result">
      {{ expression }}<span v-if="errorMessage && this.expression == ''"></span>
      <span v-else-if="errorMessage"><br /></span>
      <span v-if="showText">{{ result }}<br />Number of Moos: {{ moos }}</span>
    </h2>
    <div style="text-align: center">
      <h2 class="moo-cows-go-moo">
        <span v-if="mooMessage">
          Moo cows go moo, moo, moo!<br />
          Moo cows go moo, moo, moo!</span>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [],
      showText: false,
      expression: "",
      moos: null,
      showMoos: null,
      result: null,
      mooMessage: false,
      mooTimer: null,
      errorMessage: false,

      buttonList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      isActive: [false, false, false, false, false, false, false, false, false, false]

    };
  },
  watch: {
    expression(newVal) {
      // Execute some function here whenever the value of `expression` changes
      console.log(`New expression value: ${newVal}`);
      const mathOperators = /\d[+\-*/÷\u00D7]/g; // regular expression for +, -, /, and * operators
      if (mathOperators.test(newVal)) {
        this.showText = true;
        this.cowculate();
      }
    },
  },
  methods: {
    checkInput() {


      let str = this.expression;
      const lastDigitIndex = str.slice(-1);
      console.log(lastDigitIndex)
      if (lastDigitIndex === '0') {
        this.isActive[0] = true;
      }
      else if (lastDigitIndex === '1') {
        this.isActive[1] = true;
      } else if (lastDigitIndex === '2') {
        this.isActive[2] = true;
      } else if (lastDigitIndex === '3') {
        this.isActive[3] = true;
      } else if (lastDigitIndex === '4') {
        this.isActive[4] = true;
      } else if (lastDigitIndex === '5') {
        this.isActive[5] = true;
      } else if (lastDigitIndex === '6') {
        this.isActive[6] = true;
      } else if (lastDigitIndex === '7') {
        this.isActive[7] = true;
      } else if (lastDigitIndex === '8') {
        this.isActive[8] = true;
      } else if (lastDigitIndex === '9') {
        this.isActive[9] = true;
      }
      setTimeout(() => {

        for (let i = 0; i < 10; i++) {
          this.isActive[i] = false;
        }

      }, 100);


    },
    cowculate() {
      /* Cow Moo cowculations */
      let str = this.expression;
      let count = 0;
      this.moos = count;

      str = str.replaceAll("÷", "/").replaceAll("\u00D7", "*").replaceAll("Moo", "");

      console.log("Number of 'Moo' occurrences:", count);
      console.log(str);
      try {
        this.result = " = " + eval(str);
      } catch (error) {
        this.result = null;
      }
    },
    noEntry() {
      // check if this.result is empty or is only the " = undefined" combined string value
      // Doesn't actually need to check for null value OR the " = undefined" but may want to change later on not
      // to include the = sign like this
      if (!this.result || this.result == " = " + undefined) {
        this.errorMessage = true;
        this.result = " Can't cowculate with this input!";
        /* reset error message */
      }
    },
    mooButtonHit() {
      this.mooMessage = true;
      if (this.mooTimer) {
        clearTimeout(this.mooTimer); // clear the previous timer if it exists
      }
      this.mooTimer = setTimeout(() => {
        this.mooMessage = false;
      }, 1500);
    },
    addNumber() {
      this.expression += 1;
    },
    addNumberTwo() {
      this.expression += 2;
    },
    addNumberThree() {
      this.expression += 3;
    },
    addNumberFour() {
      this.expression += 4;
    },
    addNumberFive() {
      this.expression += 5;
    },
    addNumberSix() {
      this.expression += 6;
    },
    addNumberSeven() {
      this.expression += 7;
    },
    addNumberEight() {
      this.expression += 8;
    },
    addNumberNine() {
      this.expression += 9;
    },
    addNumberZero() {
      this.expression += 0;
    },
    addMoo() {
      this.expression += "Moo";
    },
    mooDialogue() {
      this.showText = true;
    },
    addAddition() {
      this.expression += "+";
    },
    addSubtraction() {
      this.expression += "-";
    },
    addMultiplication() {
      this.expression += "\u00D7";
    },
    addDivision() {
      this.expression += "\u00F7";
    },
    addDecimalPoint() {
      this.expression += ".";
    },
    removeEntry() {
      if (this.expression != "") {
        if (this.expression.slice(-3) == "Moo") {
          this.expression = this.expression.slice(0, -3);
        } else {
          this.expression = this.expression.slice(0, -1);
        }
      }
    },
    /* Reset the array - if some error happens or want to restart */
    clearField() {
      this.numbers = [];
      this.expression = "";
      this.showText = false;
      this.result = null;
      this.errorMessage = false;
    },
  },
};
</script>

<style scoped>
button.active {
  box-shadow: #00ffff 0 0 0 2px;
  background: rgba(186, 186, 186, 0.318);
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #fff;
  padding: 10px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 0.2em;
  margin-bottom: 10px;
  grid-template-columns: repeat(4, 1fr);
}

.grid-item {
  background-color: rgba(30, 30, 30, 0.55);
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 0.8em 0.8em 0.8em 0.8em;
  font-size: 1.2em;
  text-align: center;
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
}

.grid-item-symbols {
  background-color: rgba(198, 198, 198, 0.6);
  border: 1px solid rgb(0, 0, 0);
  padding: 0.8em 0.8em 0.8em 0.8em;
  font-size: 1.2em;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}

.grid-item-symbols:hover {
  background-color: rgba(186, 186, 186, 0.318);
}

.grid-item:hover {
  background-color: rgba(186, 186, 186, 0.318);
}

.moo-cows-go-moo {
  top: 102%;
  left: 50%;

  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
  color: rgb(255, 255, 255);
}

.input-field {
  width: 317px;
  font-size: 1.9em;
}

@media only screen and (max-width: 900px) {
  .moo-cows-go-moo {
    top: 100%;
  }
}

.cowculate-result {
  padding-top: 1em;
  padding-bottom: 1em;

  margin-top: 0.05em;
  font-size: 1.5em;
  position: absolute;
  left: 0em;
  right: 0em;
  margin-left: auto;
  margin-right: auto;
  padding: 0em;
  background: #515151;
  width: 320px;
  border-radius: 4px 4px 4px 4px;
}

.arrow {
  border: solid rgb(255, 255, 255);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.left-arrow {
  border-right: 0.6em solid #ffffff;
  border-bottom: 0.4em solid transparent;
  border-top: 0.4em solid transparent;

  position: absolute;
}

.arrow-position {
  margin-bottom: 0.8em;
  margin-left: 0.75em;
}

/* back arrow */
</style>