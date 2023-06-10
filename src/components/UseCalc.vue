<template>
  <div>
    <!-- checkInput highlights key presses, and formatNumber adds commas -->
    <input
      class="input-field"
      v-model="expression"
      type="text"
      @input="checkInput()"
    />
  </div>
  <div class="grid-container cow-image">
    <button class="grid-item-symbols" @click="addMathOperator('\u00D7')">
      &#215;
    </button>

    <button
      class="grid-item"
      @click="addNumber(1)"
      :class="{ active: isActive[1] }"
    >
      {{ buttonList[1] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(2)"
      :class="{ active: isActive[2] }"
    >
      {{ buttonList[2] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(3)"
      :class="{ active: isActive[3] }"
    >
      {{ buttonList[3] }}
    </button>
    <button class="grid-item-symbols" @click="addMathOperator('\u00F7')">
      ÷
    </button>
    <button
      class="grid-item"
      @click="addNumber(4)"
      :class="{ active: isActive[4] }"
    >
      {{ buttonList[4] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(5)"
      :class="{ active: isActive[5] }"
    >
      {{ buttonList[5] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(6)"
      :class="{ active: isActive[6] }"
    >
      {{ buttonList[6] }}
    </button>
    <button class="grid-item-symbols" @click="addMathOperator('-')">-</button>
    <button
      class="grid-item"
      @click="addNumber(7)"
      :class="{ active: isActive[7] }"
    >
      {{ buttonList[7] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(8)"
      :class="{ active: isActive[8] }"
    >
      {{ buttonList[8] }}
    </button>
    <button
      class="grid-item"
      @click="addNumber(9)"
      :class="{ active: isActive[9] }"
    >
      {{ buttonList[9] }}
    </button>
    <button class="grid-item-symbols" @click="addMathOperator('+')">+</button>
    <button class="grid-item" @click="removeEntry(), checkInput()">
      <div class="arrow-position">
        <div class="left-arrow"></div>
      </div>
    </button>
    <button class="grid-item" @click="addMathOperator('.')">.</button>
    <button
      class="grid-item"
      @click="addNumber(0)"
      :class="{ active: isActive[0] }"
    >
      {{ buttonList[0] }}
    </button>

    <button class="grid-item tooltip" @click="squared()">
      <i>x<sup>y</sup></i>
      <span class="tooltiptext">{{ showTooltip }}</span>
    </button>
    <button class="grid-item" @click="addMathOperator('(')">(</button>
    <button class="grid-item" @click="addMathOperator(')')">)</button>
    <button class="grid-item" @click="addMoo(), mooButtonHit()">Moo</button>
  </div>

  <div>
    <button style="margin-right: 0.25em" class="button-35" @click="clearField">
      Reset
    </button>

    <button class="button-35" @click="copyToClipboard">Copy Result</button>
  </div>
  {{ addParanthesisAroundPowerSymbol(this.expression) }}
  <div style="padding-top: 0.5em">
    <b v-if="showDescriptionText" style="color: #42b883">Cowculation</b>
    <div class=".dark-color-text cowculate-result">
      {{ addCommas(expression) }}<span v-if="this.expression == ''"></span>
      <span v-if="showText">
        = <span style="font-size: 1.15em">{{ addCommas(result) }}</span></span
      >
      <span v-if="mooCounter > 0"
        ><br />Number of Moos: <span style="">{{ mooCounter }}</span></span
      >
      <span v-if="superMoo"> <br />{{ mooPlication }}</span>
      
    </div>
  </div>
  
  <div v-if="showNotification" class="notification">
    <span style="font-weight: bold">{{ result }}</span> copied to clipboard!
    
  </div>
  <div style="margin-top: 5.4em; padding: 0.25em; padding-top: 1em">
    <div
      class=".dark-color-text"
      v-if="showDescriptionText"
      style="font-size: 1em; font-weight: 400; margin-bottom: 0.25em"
    >
      <b style="color: #42b883">Final Node Cowculation:</b><br />
      Left node: <span class="node-display">{{ addCommas(leftNode) }}</span
      >&nbsp; Operator: <span class="node-display">{{ operator }}</span
      >&nbsp; Right node:
      <span class="node-display">{{ addCommas(rightNode) }}</span
      ><br />
      <b style="color: #42b883">Full Binary Tree Structure in JSON:</b><br />
      <div>
        <span>{{ treeNodeCalculations }}</span>
      </div>
    </div>
    <div>
      <pre v-if="showText">{{ treeString }}</pre>
    </div>
    <!-- attempt to draw svg here of binary tree -->
    <div ref="svgContainer"></div>
  </div>
  <!-- This code checks for an error message and an empty string to see if user tried to 'cowculate'
      without any input. Then if there is input it pushes the error message to the line below the incorrect input.
                          As long as a correct number math operator sequence is present a correct output is shown.    
                        -->

  <div style="text-align: center">
    <h2 class="moo-cows-go-moo">
      <span v-if="mooMessage">
        Moo cows go moo, moo, moo!<br />
        Moo cows go moo, moo, moo!</span
      >
    </h2>
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

      mooCounter: null,

      superMoo: false,
      mooPlication: "",

      buttonList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      isActive: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],

      userTokens: [],
      operators: [],
      arrayOfNumbersOnly: [],

      treeNodeCalculations: null,
      currentNode: null,
      leftNode: null,
      rightNode: null,
      operator: null,

      formattedNumber: "",
      formattedResult: "",

      showDescriptionText: false,

      message: toString(this.result),
      showNotification: false,
      tree: {},

      expressionTree: this.treeNodeCalculations,

      showTooltip:
        "This currently sets the whole expression to the power y, and not just the last number entered. May change to only the last number entered in a future update.",

      //svgContent: '',

      // Adds commas to the result or expression shown on the screen to increase readability
      addCommas(number) {
        if (number == null) {
          return "";
        } else {
          number = number.toString();
          var parts = number.split(/([\d.]+)/g);
          for (let i = 1; i < parts.length; i += 2) {
            parts[i] = parts[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          return parts.join("");
        }
      },
    };
  },
  computed: {
    treeString() {
      return this.printTree(this.tree);
    },
    svgContent() {
      // Generate the SVG content based on the JSON data
      var svg = this.drawTree();
      //console.log(svg);

      return svg;
    },
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

      if (str.includes("Moo\u00D7Moo") || str.includes("Moo+Moo")) {
        this.superMoo = true;
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
          for (let i = 0; i < count; i++) {
            mooNumber *= mooNumber;
          }
          for (let i = 0; i < mooNumber; i++) {
            mooString += "o";
          }
          //console.log(count, mooNumber, mooString);
        } else if (str.includes(mooAddition)) {
          let count = (str.match(/Moo/g) || []).length;
          mooString = "M";
          for (let i = 0; i < count; i++) {
            mooString += "oo";
          }
        } else if (str.includes(mooSubtraction)) {
          let count = (str.match(/Moo/g) || []).length;
          mooString = "M";
          for (let i = 0; i < count - 1; i++) {
            mooString += "o";
          }
        }
        this.mooPlication = mooString;
      }

      // The following is largely pre-processing for the string to go into the cowculate() function
      str = str.replaceAll("÷", "/").replaceAll("\u00D7", "*");

      // This decides whether calculatons can actully be done
      // regular expression for +, -, /, and * operators before any actual parsing is done (saves useless calculations)
      const mathOperators = /([-+*/%^!()]|\d+(\.\d+)?)/g;

      // invoke function to autocorrect bad entries such as -/ or */ or -+
      if (
        !this.expression.includes("Moo\u00D7Moo") ||
        !this.expression.includes("Moo+Moo")
      ) {
        // the string contains "Moo×Moo" or "Moo+Moo"
        this.autoFixIncorrectInput(str);
      }

      /*
      if the sequence ")(" occurs a simple way to do this multiplication is just insert a multiplication "*" \u00D7 symbol 
      to the input expression be ")*("
      */
      if (str.indexOf(")(") !== -1) {
        this.expression = str
          .replaceAll(")(", ")\u00D7(")
          .replaceAll("*", "\u00D7")
          .replaceAll("/", "\u00F7");
      }

      // remove Moo's for number calculations
      str = str.replaceAll("Moo", "");

      // This only fixes deleting the very very last number when the back button <- arrow is used
      // For example if I enter 2*2 then hit "<-" button 3 times this lets the user delete the last number and reset everything!
      if (this.expression === "") {
        this.showText = false;
        this.result = "";
        this.showDescriptionText = false;
        this.treeNodeCalculations = null;
        this.currentNode = null;
        this.clearSVG();
      }
      // This sends a cleaned input to the cowculate function
      else if (mathOperators.test(str)) {
        this.cleanedExpression = str;
        this.cowculate();
      }
    },
  },
  methods: {
    drawTree() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "800");
      svg.setAttribute("height", "800");
      svg.setAttribute("viewBox", "0 0 470 800");

      const startX = 235;
      const startY = 50;
      const dx = 100;
      const dy = 100;

      this.drawTreeTwo(svg, this.tree, startX, startY, dx, dy);

      //console.log(svg)
      return svg;
    },
    drawTreeTwo(svg, node, x, y, dx, dy) {
      if (!node) {
        return;
      }

      // change output symbol in the svg graphic from * multiplcation to × symbol for example, and / to ÷ symbol
      if (node.value == "*") {
        node.value = "\u00D7";
      } else if (node.value == "/") {
        node.value = "\u00F7";
      }

      const leftX = x - dx;
      const leftY = y + dy;
      const rightX = x + dx;
      const rightY = y + dy;

      if (node.left) {
        svg.innerHTML += `<line x1="${x}" y1="${y}" x2="${leftX}" y2="${leftY}" stroke="black" />`;
        this.drawTreeTwo(svg, node.left, leftX, leftY, dx / 1.6, dy);
      }

      if (node.right) {
        svg.innerHTML += `<line x1="${x}" y1="${y}" x2="${rightX}" y2="${rightY}" stroke="black" />`;
        this.drawTreeTwo(svg, node.right, rightX, rightY, dx / 1.6, dy);
      }

      svg.innerHTML += `<circle cx="${x}" cy="${y}" r="15" fill="white" stroke="#42b883" stroke-opacity="0.5" />`;
      svg.innerHTML += `<text x="${x}" y="${y}" text-anchor="middle" alignment-baseline="central" font-family="Arial" font-size="14">${node.value}</text>`;
    },

    printTree(node, level = 1, isRoot = true) {
      if (node === null) {
        return "";
      }

      let indent;
      if (isRoot) {
        indent = "";
      } else {
        const levelPrefix = `Tree Level ${level - 1}`;
        indent = "   ".repeat(level - 2) + levelPrefix + "   ";
      }

      const value = isRoot
        ? `Root        (${node.value})`
        : "(" + node.value + ")";
      indent += "   ".repeat(level - 1) + "   ";

      return `${indent}${value}\n${this.printTree(
        node.left,
        level + 1,
        false
      )}${this.printTree(node.right, level + 1, false)}`;
    },
    cowculate() {
      /* Cow Moo cowculations */
      /* This works with some preprocessing and then everything goes into stack and is parsed in a tree */

      // clears all number tokens and math operations from previous inputs
      this.userTokens = [];
      this.operators = [];

      // Here is an interesing way I found how to add in exponents with parsing. I just add in a 
      // set of paranthesis around the exponent part such as 5*2^2+5 changes to 5*(2^2)+5 , but the user doesn't see this
      // figuring out these solutions is rewarding but since this has been a built from scratch project it feels like yarn and duck tape too, which is okay!
      // but everything works!! and I am happy with the results
      this.cleanedExpression = this.addParanthesisAroundPowerSymbol(this.cleanedExpression);

      let str = this.cleanedExpression;
      try {
        // checks that it doesn't have parenthesis and a valid math operator so it doesn't output when there is nothing to output
        if (!/-?\(?\d+\.?\d*\)?([+\-*/÷\u00D7]-?\(?\d+\.?\d*\)?)*$/.test(str)) {
          this.result = "";
        } else {
          class Node {
            constructor(value, left = null, right = null) {
              this.value = value;
              this.left = left;
              this.right = right;
            }
          }

          var input = this.cleanedExpression;
          let currentNumber = "";

          for (let i = 0; i < input.length; i++) {
            const char = input.charAt(i);
            // Check for expressions like -(2+2) and 2*-(2+2) where a negative sign precedes a "(" paranthesis
            // such as "-(" To solve this the expression in paranthesis is subtracted from 0
              if (
                char === "-" &&
                (i === 0 || isNaN(input.charAt(i - 1))) &&
                input.charAt(i + 1) === "("
              ) {
                this.userTokens.push(new Node(0));
                this.operators.push("-");
              }
              // (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))  ) checks that it's not 4-4 and is 4--4 for example!
                else if (
                  !isNaN(char) || char === "." || (char === "-" && (i === 0 || (isNaN(input.charAt(i - 1)) && input.charAt(i - 1) !== ")" && input.charAt(i + 1) !== "(")))
                      ) {
                      currentNumber += char;
                      // Does operations like (2)2 = 4
                      if (")" === input.charAt(i - 1)) {
                        this.operators.push("*");
                      }

                      // Does operations like 2(2) = 4
                      if ("(" === input.charAt(i + 1)) {
                        this.operators.push("*");
                      }
              } else {
                      if (currentNumber !== "") {
                        this.userTokens.push(new Node(parseFloat(currentNumber)));
                        currentNumber = "";
                      }
                      if (char === "+" || char === "-") {
                        while (
                          this.operators.length > 0 &&
                          this.operators[this.operators.length - 1] !== "("
                        ) {
                          const op = this.operators.pop();
                          const right = this.userTokens.pop();
                          const left = this.userTokens.pop();
                          const node = new Node(op, left, right);
                          this.userTokens.push(node);
                        }
                        this.operators.push(char);
                      } else if (char === "*" || char === "/" || char === "!") {
                          while (
                            this.operators.length > 0 &&
                            this.operators[this.operators.length - 1] !== "(" &&
                            (this.operators[this.operators.length - 1] === "*" ||
                              this.operators[this.operators.length - 1] === "/")
                          ) {
                            const op = this.operators.pop();
                            const right = this.userTokens.pop();
                            const left = this.userTokens.pop();
                            const node = new Node(op, left, right);
                            this.userTokens.push(node);
                          }
                                  this.operators.push(char);
                        }
                        else if (char === "^") {
                          while (
                            this.operators.length > 0 &&
                            this.operators[this.operators.length - 1] !== "(" &&
                            (this.operators[this.operators.length - 1] === "*" ||
                              this.operators[this.operators.length - 1] === "/")
                          ) {
                            const op = this.operators.pop();
                            const right = this.userTokens.pop();
                            const left = this.userTokens.pop();
                            const node = new Node(op, left, right);
                            this.userTokens.push(node);
                          }
                                  this.operators.push(char);
                      } else if (char === "(") {
                        this.operators.push(char);

                      } else if (char === ")") {
                        while (
                          this.operators.length > 0 &&
                          this.operators[this.operators.length - 1] !== "("
                        ) {
                          const op = this.operators.pop();
                          const right = this.userTokens.pop();
                          const left = this.userTokens.pop();
                          const node = new Node(op, left, right);
                          this.userTokens.push(node);
                        }
                
                if (
                  this.operators.length > 0 &&
                  this.operators[this.operators.length - 1] === "("
                ) {
                  this.operators.pop();
                }
              }
            }
            this.arrayOfNumbersOnly.push(currentNumber);
            console.log(this.arrayOfNumbersOnly)
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
          // calculate the final result
          var result = this.evaluate(this.userTokens[0]);
          
          // This goes to output all the results in its own function
          this.setOutputs(result);

          // Good article about using NaN in JavaScript like the function above does ^
          // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.
          // This method works below, but others could also work.
        }
      } catch (error) {
        this.result = null;
      }
    },
    // This just sets the outputs to the result of the cowculation function so the function is shorter    
    setOutputs(result){
      // If no calculations are done don't need to show a number is equal to itself
      // Quick way to make sure output isn't 5555 = 5555 if the user just enters a number
      if (result == this.cleanedExpression) { 
            result = "";
          }
       
          // IMPORTANT - THIS IS WHERE ALL THE OUTPUTS ARE COMPUTED!
          else if (!Number.isNaN(result)) {
            // show equal sign and results
            this.showText = true;
            // create the binary tree structure
            this.treeNodeCalculations = this.userTokens[0];
            //console.log(typeof this.treeNodeCalculations)
            //const myJSON = JSON.stringify(this.treeNodeCalculations);
            //console.log(myJSON);

            this.treeData = this.treeNodeCalculations;

            this.tree = this.treeNodeCalculations;

            this.showDescriptionText = true;

            // this puts the final calculation into a variable to be copied from the clipboard
            this.message = result;
            
            // this outputs the FINAL calculation
            this.result = result;

            // At the moment this is a bit of a hack to get the svg to clear and redraw
            this.clearSVG();

            // Append new SVG content
            const svgContainer = this.$refs.svgContainer;
            svgContainer.appendChild(this.svgContent);
            this.svgContent.setAttribute("width", "100%");
          }        
    },
    // Perform calculations
    evaluate(node) {
      if (node.left === null && node.right === null) {
        return node.value;
      }
      var left = this.evaluate(node.left);
      var right = this.evaluate(node.right);

      //console.log(left, node.value, right);
      //console.log(node);

      // This shows the operator to the user in '×' or '÷' format and not * or /
      let viewer_symbol_node = "";
      if (node.value === "*") {
        viewer_symbol_node = "\u00D7";
      } else if (node.value === "/") {
        viewer_symbol_node = "\u00F7";
      } else viewer_symbol_node = node.value;
      // this.currentNode = "Left node: " + left +" Operator: " + viewer_symbol_node + " Right node: " + right;
      this.leftNode = left;
      this.operator = viewer_symbol_node;
      this.rightNode = right;
      // Switched this to a switch - simpler and more readable for this use case
      switch (node.value) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
        // This is the power function
        case "^":         
          return Math.pow(left, right);
        default:
          return null;
      }
    },
    clearSVG() {
      const svgContainer = this.$refs.svgContainer;
      while (svgContainer.firstChild) {
        svgContainer.removeChild(svgContainer.firstChild);
      }
    },
    // This code createNode isn't currently used, but here for future modularization
    createNode() {
      class Node {
        constructor(value, left = null, right = null) {
          this.value = value;
          this.left = left;
          this.right = right;
        }
      }
      const op = this.operators.pop();
      const right = this.userTokens.pop();
      const left = this.userTokens.pop();
      const node = new Node(op, left, right);
      this.userTokens.push(node);
    },
    /*
    setFactorialize(num) {
    
      console.log(typeof num)
      if (!Number.isNaN(num)) {

        num = Number(num)
        console.log(typeof num)
        try {
          var factorializeAnswer = this.factorialize(num);
          console.log(typeof factorializeAnswer)
         
            this.result = factorializeAnswer;

          this.showText = true;
        } catch (error) {
          this.result = "";
          factorializeAnswer = 0;
        }
      }
    },
    factorialize(num) {
      if (num < 0) return -1;
      else if (num == 0) return 1;
      else {
        return num * this.factorialize(num - 1);
      }
    },
    */
    // This function will highlight the buttons as a user types input, or as a user hits the back button on their input to delete it
    checkInput() {
      let str = this.expression;

      const lastDigitIndex = str.slice(-1);

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
    addMathOperator(mathOperatorToAdd) {
      this.expression += mathOperatorToAdd;
    },
    addMoo() {
      this.expression += "Moo";
    },
    squared() {
      /*
      let str = this.expression;
      let lastNum = "";
      let i = str.length - 1;
      // !isNaN(str[i]) checks if the last character is a number
      while (i >= 0 && !isNaN(str[i])) {
        lastNum = str[i] + lastNum;
        i--;
      }
      if (lastNum !== "") {
        let newNum = Number(lastNum) * Number(lastNum);
        this.expression = str.slice(0, i + 1) + newNum.toString();
      }
      */

      /* Was testing code above, but decided to go with the code below instead, current solution is just temporary */

      /* if (this.expression !== "") {
        if (
          this.expression[0] !== "(" &&
          this.expression[this.expression.length - 1] !== ")" &&
          !/^\d+$/.test(this.expression)
        ) {
          this.expression = "(" + this.expression + ")";
        }
        */

        this.expression += "^";
    
    },
    addParanthesisAroundPowerSymbol(input) {
  // Use regular expression to match number^number pattern
  const regex = /(\d+\^\d+)/g;

  // Replace matches with the desired format
  const output = input.replace(regex, '($1)');

  return output;
},

    autoFixIncorrectInput(str) {
      // check that the expression isn't MooMoo first so we don't delete the expression when doing Moo operations!

      //if (!this.expression === "Moo\u00D7Moo"){

      // If someone types 5-+2 or 5-/2 or 5-*2 this will automatically change it to the last typed character
      if (str[str.length - 2] === "-" && str[str.length - 1] === "+") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "-" && str[str.length - 1] === "/") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "-" && str[str.length - 1] === "*") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (
        str[str.length - 3] === "-" &&
        str[str.length - 2] === "-" &&
        str[str.length - 1] === "-"
      ) {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      }
      // If someone types 5++2 or 5+/2 or 5+*2 this will automatically change it to the last typed character
      else if (str[str.length - 2] === "+" && str[str.length - 1] === "+") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "+" && str[str.length - 1] === "/") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "+" && str[str.length - 1] === "*") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      }
      // If someone types 5*+2 or 5*/2 or 5**2 this will automatically change it to the last typed character
      else if (str[str.length - 2] === "*" && str[str.length - 1] === "+") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "*" && str[str.length - 1] === "/") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (
        str[str.length - 3] === "*" &&
        str[str.length - 2] === "-" &&
        str[str.length - 1] === "-"
      ) {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "*" && str[str.length - 1] === "*") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      }
      // If someone types 5/+2 or 5//2 or 5/*2 this will automatically change it to the last typed character
      else if (str[str.length - 2] === "/" && str[str.length - 1] === "+") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "/" && str[str.length - 1] === "/") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("/", "\u00F7")
          .replaceAll("*", "\u00D7");
      } else if (str[str.length - 2] === "/" && str[str.length - 1] === "*") {
        this.expression = (str.slice(0, -2) + str.slice(-1))
          .replaceAll("*", "\u00D7")
          .replaceAll("/", "\u00F7");
      }
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
    copyToClipboard() {
      navigator.clipboard.writeText(this.result);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 1000);
    },
    /* Reset all input fields - if some error happens or want to restart */
    clearField() {
      this.expression = ""; // an unfiltered raw user input
      this.cleanedExpression = ""; // a cleaned version of user input
      this.showText = false; // shows main results
      this.result = null; // final result

      this.mooCounter = 0; // count Moo's
      this.superMoo = false; // turns MooxMoo into Moooo etc.
      this.userTokens = []; // global array to update numbers - probably doesnt need to be global
      this.operators = []; // global array to update math operators - probably doesnt need to be global

      this.treeNodeCalculations = null; //show the whole parse tree
      this.currentNode = null; //show only the current node math operation being done
      this.leftNode = null;
      this.rightNode = null;
      this.operator = null;

      this.showDescriptionText = false;

      this.formattedNumber = ""; // expression with commas
      this.formattedResult = ""; // final result with commas

      // reset tree
      this.tree = {};
      this.clearSVG();
    },
  },
};
</script>
<style scoped>
button.active {
  background: rgb(66, 184, 131, 0.5);
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;

  padding: 1em;
  max-width: 22em;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 0.2em;
  margin-bottom: 10px;
  border-top-left-radius: 0em;
  border-top-right-radius: 0em;
  grid-template-columns: repeat(4, 1fr);
}

.grid-item {
  background-color: rgba(30, 30, 30, 0.6);
  border: none;
  padding: 0.8em 0.8em 0.8em 0.8em;
  font-size: 1.5em;
  text-align: center;
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}

.grid-item-symbols {
  background-color: rgba(198, 198, 198, 0.6);
  border: none;
  padding: 0.8em 0.8em 0.8em 0.8em;
  font-size: 1.5em;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
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
  color: #42b883;
}

.input-field {
  width: 10.6115em;
  font-size: 2.25em;
  border-width: 1px;
  margin-bottom: 1px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

/* doesn't highlight when clicking on input field */
select:focus,
button:focus {
  outline: none;
}

/* make custom outline  https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus */
input:focus {
  outline: none !important;
  border: 1px solid #42b883;
  box-shadow: 0 0 10px #42b883;
}

@media only screen and (max-width: 600px) {
  .moo-cows-go-moo {
    top: 100%;
  }

  .input-field {
    max-width: 9.8em;
  }
  /* adjust the button grid */
  .grid-container {
    max-width: 22em;
    grid-gap: 0.2em;
    padding: 0.1em;
  }
}

.cowculate-result {
  padding-top: 1em;

  margin-top: 0.05em;
  font-size: 1.5em;
  position: absolute;
  left: 0em;
  right: 0em;
  margin-left: auto;
  margin-right: auto;
  padding: 0em;
  /* background: #515151; */
  border-radius: 4px 4px 4px 4px;
}

/* back arrow start */
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

/* back arrow end */

/* notification menu when copy to clipboard */
.notification {
  background-color: rgb(116, 247, 164);
  color: #333;
  border: 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  padding: 10px;
  border-radius: 10px;
  margin-top: 0.5em;
  margin-left: 0.5em;

  transition: opacity 0.5s ease-in-out;
  width: 300px;
  opacity: 1;
}

.notification.hide {
  opacity: 0;
}

.node-display {
  font-size: 1.3em;
  background-color: #e3e3e3;
  padding-right: 0.33em;
  padding-left: 0.33em;
}
</style>