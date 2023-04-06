

<template>
  <div style="padding: 0.15em">
    <input class="input-field" v-model="expression" type="text" @input="checkInput" />
  </div>
  <div class="grid-container cow-image">
    <button class="grid-item-symbols" @click="addMathOperator('\u00D7');">
      &#215;
    </button>
    
    <button class="grid-item" @click="addNumber(1)" :class="{ active: isActive[1] }">
      {{ buttonList[1] }}
    </button>
    <button class="grid-item" @click="addNumber(2)" :class="{ active: isActive[2] }">
      {{ buttonList[2] }}
    </button>
    <button class="grid-item" @click="addNumber(3)" :class="{ active: isActive[3] }">
      {{ buttonList[3] }}
    </button>

    <button class="grid-item-symbols" @click="addMathOperator('\u00F7')">÷</button>

    <button class="grid-item" @click="addNumber(4)" :class="{ active: isActive[4] }">
      {{ buttonList[4] }}
    </button>
    <button class="grid-item" @click="addNumber(5)" :class="{ active: isActive[5] }">
      {{ buttonList[5] }}
    </button>
    <button class="grid-item" @click="addNumber(6)" :class="{ active: isActive[6] }">
      {{ buttonList[6] }}
    </button>
    <button class="grid-item-symbols" @click="addMathOperator('-')">-</button>
    <button class="grid-item" @click="addNumber(7)" :class="{ active: isActive[7] }">
      {{ buttonList[7] }}
    </button>
    <button class="grid-item" @click="addNumber(8)" :class="{ active: isActive[8] }">
      {{ buttonList[8] }}
    </button>
    <button class="grid-item" @click="addNumber(9)" :class="{ active: isActive[9] }">
      {{ buttonList[9] }}
    </button>
    <button class="grid-item-symbols" @click="addMathOperator('+')">+</button>
    <button class="grid-item" @click="removeEntry(), checkInput()">
      <div class="arrow-position">
        <div class="left-arrow"></div>
      </div>
    </button>
    
    <button class="grid-item" @click="addMathOperator('.')">.</button>
    <button class="grid-item" @click="addNumber(0)" :class="{ active: isActive[0] }">
      {{ buttonList[0] }}
    </button>
    <button class="grid-item" @click="addMoo(), mooButtonHit()">Moo</button>
    <button class="grid-item" @click="setFactorialize(this.expression)">n!</button>
    
    
    
    
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
    <div class="white-color-text cowculate-result">
      {{ expression }}<span v-if="errorMessage && this.expression == ''"></span>
      <span v-else-if="errorMessage"><br /></span>
      <span v-if="showText">{{ result }}</span>
      <span v-if="mooCounter > 0"> <br />Number of Moos: {{ mooCounter }}</span>
      <span v-if="superMoo"> <br />{{mooPlication}}</span>
    </div>

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
      showText: false,
      expression: "",
      cleanedExpression: "",
      result: null,
      mooMessage: false,
      mooTimer: null,
      errorMessage: false,
      mooCounter: null,

      superMoo: false,
      mooPlication: "",

      buttonList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      isActive: [false, false, false,false, false, false,false,false,false,false,],

      userTokens: [],
      operators: [],
    };
  },
  watch: {
    expression(userInput) {
      // This expression(userInput) works by taking whatever the user input is from buttons/text field.
      // The number of Moo's are counted and saved to mooCounter
      // the math symbols that are displayed but don't actually work in calculations are replaced, along with
      // the moos.
      // If the regular expression of a number followed by a math operator is followed such as 3.45*5 then
      // calculations will be performed automatically!
      // mathOperators checks for this regex sequence, then if true the text is shown, a cleanedExpression is
      // used in the cowculate function to evaluate the result!

      let str = userInput;

      this.mooCounter = (str.match(/Moo/g) || []).length;
      console.log("Number of 'Moo' occurrences:", this.mooCounter);

      if (str.includes("Moo\u00D7Moo") || str.includes("Moo+Moo")){       
        this.superMoo=true;
        var mooNumber = 2;
        let mooString = "M";
        const mooMultiplication = "Moo\u00D7Moo"; 
        const mooAddition = "Moo+Moo";
        const mooSubtraction = "Moo-Moo";
        
      if (str.includes(mooMultiplication)) {
      let count = 0;
      let index = str.indexOf(mooMultiplication);
      while (index !== -1) {
        count++;
        index = str.indexOf(mooMultiplication, index + 1);
      }
      for (let i = 0; i < count; i++){
        mooNumber*=mooNumber
      }        
      for (let i = 0; i < mooNumber; i++){
        mooString+="o"
      }
      console.log(count, mooNumber, mooString);
        } else if (str.includes(mooAddition)) {
      let count = (str.match(/Moo/g) || []).length;
      mooString = "M";
      for (let i = 0; i < count; i++){
        mooString += "oo";
      }
      } else if (str.includes(mooSubtraction)) {
      let count = (str.match(/Moo/g) || []).length;
      mooString = "M";
      for (let i = 0; i < count-1; i++){
        mooString += "o";
      }
      }

        this.mooPlication = mooString

        // moo addition
        
      }
      
      str = str.replaceAll("÷", "/").replaceAll("\u00D7", "*").replaceAll("Moo", "");

      // This decides whether calculatons can actully be done
      const mathOperators = /^\d+(\.\d+)?[+\-*/÷\u00D7]/g; // regular expression for +, -, /, and * operators

      if (mathOperators.test(str)) {
        this.showText = true;
        this.cleanedExpression = str;
        this.cowculate();
      }
    },
  },
  methods: {
    checkInput() {
      let str = this.expression;
      const lastDigitIndex = str.slice(-1);
      console.log(lastDigitIndex);
      if (lastDigitIndex === "0") {
        this.isActive[0] = true;
      } else if (lastDigitIndex === "1") {
        this.isActive[1] = true;
      } else if (lastDigitIndex === "2") {
        this.isActive[2] = true;
      } else if (lastDigitIndex === "3") {
        this.isActive[3] = true;
      } else if (lastDigitIndex === "4") {
        this.isActive[4] = true;
      } else if (lastDigitIndex === "5") {
        this.isActive[5] = true;
      } else if (lastDigitIndex === "6") {
        this.isActive[6] = true;
      } else if (lastDigitIndex === "7") {
        this.isActive[7] = true;
      } else if (lastDigitIndex === "8") {
        this.isActive[8] = true;
      } else if (lastDigitIndex === "9") {
        this.isActive[9] = true;
      }
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.isActive[i] = false;
        }
      }, 150);
    },
    cowculate() {
      /* Cow Moo cowculations */

      let str = this.cleanedExpression;
      // old method BAD - to check if numbers were the same parseFloat(str) === eval(str)
      try {
        if ( !(/[+\-*/÷\u00D7]/).test(str) ) {
          this.result = "";
        }
        else{       
          
          class Node {
            constructor(value, left = null, right = null) {
              this.value = value;
              this.left = left;
              this.right = right;
            }
          }
          //this.cleanedExpression = "2*4+5"
          console.log(this.cleanedExpression)
          var input = this.cleanedExpression
          // Finally!, a neat way to solve this is to remove any invalid operators for calculations instead of modifying the whole tree
          if ('+-*/'.indexOf(input.slice(-1)) !== -1) {
            input = input.slice(0, -1);
          }
          //console.log(input)
          let currentNumber = "";
          for (let i = 0; i < input.length; i++) {
            const char = input.charAt(i);
            if (!isNaN(char) || char === ".") {
              currentNumber += char;
            } else {
              if (currentNumber !== "") {
                this.userTokens.push(new Node(parseFloat(currentNumber)));
                currentNumber = "";
              }
              if (char === "+" || char === "-") {
                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {
                  const op = this.operators.pop();
                  const right = this.userTokens.pop();
                  const left = this.userTokens.pop();
                  const node = new Node(op, left, right);
                  this.userTokens.push(node);
                }
                this.operators.push(char);
              }
              else if (char === "*" || char === "/") {
                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(" && (this.operators[this.operators.length - 1] === "*" || this.operators[this.operators.length - 1] === "/")) {
                  const op = this.operators.pop();
                  const right = this.userTokens.pop();
                  const left = this.userTokens.pop();
                  const node = new Node(op, left, right);
                  this.userTokens.push(node);
                }
                this.operators.push(char);
              }
              else if (char === "(") {
                this.operators.push(char);
              }
              else if (char === ")") {
                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {
                  const op = this.operators.pop();
                  const right = this.userTokens.pop();
                  const left = this.userTokens.pop();
                  const node = new Node(op, left, right);
                  this.userTokens.push(node);
                }
                if (this.operators.length > 0 && this.operators[this.operators.length - 1] === "(") {
                  this.operators.pop();
                }
              }
            }
          }

          // Add the last number if there is one
          if (currentNumber !== "") {
            this.userTokens.push(new Node(parseFloat(currentNumber)));
          }

          // Perform remaining operations
          while (this.operators.length > 0) {
            const op = this.operators.pop();
            const right = this.userTokens.pop();
            const left = this.userTokens.pop();
            const node = new Node(op, left, right);
            this.userTokens.push(node);
          }

          const result = this.evaluate(this.userTokens[0]);
          console.log(result); 
          this.result = " = " + result
          this.userTokens = []
          this.operators = []
 
        }

      } catch (error) {
        this.result = null;
      }
    },
    // Perform calculations
    evaluate(node) {
      if (node.left === null && node.right === null) {
        return node.value;
      }
      var left = this.evaluate(node.left);
      var right = this.evaluate(node.right);
      if (node.value === "+") {
        return left + right;
      }
      if (node.value === "-") {
        return left - right;
      }
      if (node.value === "*") {
        return left * right;
      }
      if (node.value === "/") {
        return left / right;
      }
    }, setFactorialize(num) {
      if (!isNaN(num)) {
        var factorializeAnswer = this.factorialize(num)
        console.log(factorializeAnswer)
        this.expression = factorializeAnswer

      }

     
       },
      factorialize(num) {         
      if (num < 0) 
        return -1;
      else if (num == 0) 
        return 1;
      else {
        return (num * this.factorialize(num - 1));
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
    addNumber(buttonValueToAdd) {
      this.expression += buttonValueToAdd;
    },
    addMathOperator(mathOperatorToAdd){
      this.expression += mathOperatorToAdd

    },

    addMoo() {
      this.expression += "Moo";
    },
    mooDialogue() {
      this.showText = true;
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
      this.expression = ""; // am unfiltered raw user input
      this.cleanedExpression = ""; // a cleaned version of user input
      this.showText = false;
      this.result = null; // final result
      this.errorMessage = false;
      this.mooCounter = 0; // count Moo's
      this.superMoo = false;
      this.userTokens = [];
      this.operators = [];
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