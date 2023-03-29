

<template>
  <div style="padding: 0.1em;">
   
      <input class="input-field" v-model="expression" type="text" />
   
    
  </div>
  <div class="grid-container cow-image">
    <button class="grid-item" @click="addNumber()">1</button>
    <button class="grid-item" @click="addNumberTwo()">2</button>
    <button class="grid-item" @click="addNumberThree()">3</button>
    <button class="grid-item" @click="addNumberFour()">4</button>
    <button class="grid-item" @click="addNumberFive()">5</button>
    <button class="grid-item" @click="addNumberSix()">6</button>
    <button class="grid-item" @click="addNumberSeven()">7</button>
    <button class="grid-item" @click="addNumberEight()">8</button>
    <button class="grid-item" @click="addNumberNine()">9</button>
    <button class="grid-item" @click="addMultiplication()">&#215;</button>
    <button class="grid-item" @click="addDivision()">÷</button>
    <button class="grid-item" @click="addNumberZero()">0</button>
    <button class="grid-item" @click="addSubtraction()">-</button>
    <button class="grid-item" @click="addAddition()">+</button>
    <button class="grid-item" @click="addDecimalPoint()">.</button>
    <button class="grid-item" @click="addMoo(), mooButtonHit()">Moo</button>
    <button class="grid-item" @click="removeEntry()">
      <div class="arrow-position">
        <div class="left-arrow"></div>
      </div>
    </button>
  </div>

  <div style="margin-bottom: 5px">
    <button class="button-35" @click="clearField">Reset</button>
    <button
      class="button-35"
      style="margin-left: 5px"
      @click="cowculate(), mooDialogue(), noEntry()"
    >
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
          Moo cows go moo, moo, moo!</span
        >
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
    };
  },
  watch: {
    expression(newVal) {
      // Execute some function here whenever the value of `expression` changes
      console.log(`New expression value: ${newVal}`);
      const mathOperators = /\d[+\-*/]/g; // regular expression for +, -, /, and * operators
      if (mathOperators.test(newVal)) {
        this.showText = true;
        this.cowculate();
      }
    },
  },
  methods: {
    cowculate() {
      /* Cow Moo cowculations */
      let str = this.expression;
      let count = 0;

      while (str.indexOf("Moo") !== -1) {
        count++;
        str = str.replace("Moo", "");
      }
      this.moos = count;
      console.log("Number of 'Moo' occurrences:", count);
      console.log("String after removing 'Moo':", str);
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
      this.expression += "*";
    },
    addDivision() {
      this.expression += "/";
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #fff;
  padding: 10px;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 10px;
}
.grid-item {
  background-color: rgba(30, 30, 30, 0.55);
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 15px;
  font-size: 20px;
  text-align: center;
  margin: 2px;
  border-radius: 12px;
  width: 80px;
  color: rgba(255, 255, 255, 1);
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
  width: 267px;
  font-size: 1.5em;
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
  width: 270px;
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
  margin-left: 0.9em;
}

/* back arrow */
</style>