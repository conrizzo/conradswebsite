<template>
<div class="cowculator-position">
        
        <div>
          <!-- checkInput highlights key presses -->
          <input class="input-field" v-model="expression" type="text" @input="checkInput(); cursorIndex();"
           @keydown="getLastKey" @selectionchange="handleSelectionChange" ref="inputField" />
        </div>

        <!-- build the cowculator buttons and their functions using v-for with conditions for each button type -->
        <div class="grid-container cow-image">
          <button v-for="button in buttonList" :key="button" :class="['grid-item', {
            'grid-item-symbols': button === '+' || button === '-' || button == '\u00F7' || button == '\u00D7', 'tooltip': button === 'power',
            active: isActive[button]
          }]" @click="addNumber(button)">

              <div v-if="button === '<-'" class="arrow-position">
                <div class="left-arrow"></div>
              </div>

              <div v-else-if="button === 'power'">
                <i>x<sup>y</sup></i>
                <span class="tooltiptext">{{ showTooltip }}</span>
              </div>

              <div v-else>
                {{ button }}
              </div>

          </button>
        </div>

        <div style="display: flex; justify-content: center; align-items: center;">
          <div>
            <button style="margin-right: 0.25em" class="button-35" @click="resetAllData">
              Reset
            </button>
            <button style="margin-right: 0.25em" class="button-35" @click="copyToClipboard">
              Copy Result
            </button>
          </div>

        <div style="display: flex; flex-direction: column; justify-content: flex-end;">
          <button style="font-size: 0.75em; padding: 0.25em 0.66em; border-radius: 0.75em; margin-bottom: 0.25em;" class="button-35"
            @click="adjustTreeSize('+')">
            Binary Tree Size (<span style="color: #42b883; font-size: 1.5em;">+</span>)
          </button>
          <button style="font-size: 0.75em; padding: 0.25em 0.66em; border-radius: 0.75em;" class="button-35"
            @click="adjustTreeSize('-')">
            Binary Tree Size (<span style="color: #42b883; font-size: 1.5em;">-</span>)
          </button>
        </div>

      </div>
</div>

<div class="binary-tree-and-outputs-area">
  <div style="padding-top: 0.5em">
    <b v-if="showDescriptionText" style="color: #42b883;">Cowculation</b>
    <div class=".dark-color-text cowculate-result">
      {{ addCommas(addInExtraMultiplicationSymbols(expression)) }}<span v-if="this.expression == ''"></span>
      <span v-if="showText">&nbsp;=&nbsp;
        <br>
        <div style="font-size: 1.15em; background-color: #6aff64; border-radius: 0.33em; display: inline-block;
         padding-left: 0.25em; padding-right: 0.25em;">
          <span v-if="this.result == 'Infinity'">{{ findInfinity }}</span> {{ addCommas(result) }}
        </div>
      </span>

      <span v-if="mooCounter > 0"><br />Number of Moos: <span style="">{{ mooCounter }}</span></span>
      <span v-if="superMoo"> <br />{{ mooPlication }}</span>

    </div>
  </div>

  <div v-if="showNotification" class="notification">
    <span style="font-weight: bold">{{ result }}</span> copied to clipboard!
  </div>

  <div style="padding: 0.25em; padding-top: 1em;">
    <div class=".dark-color-text" v-if="showDescriptionText"
      style="font-size: 1em; font-weight: 400; margin-bottom: 0.25em">
      <b style="color: #42b883;">Final Node Cowculation:</b><br />
      Left node: <span class="node-display">{{ addCommas(leftNode) }}</span>&nbsp; Operator: <span class="node-display">{{
        operator }}</span>&nbsp; Right node:
      <span class="node-display">{{ addCommas(rightNode) }}</span><br />
      <b style="color: #42b883;">Full Binary Tree Structure in JSON:</b><br />
      <div style="font-size: 0.8em; max-width: 66%; text-align: center; margin: 0 auto;">
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
      expressionOneStepBehind: "",
      lastKey: "",
      indexOfCursor: 0, // offically called the 'text cursor'
      cleanedExpression: "",
      result: null,
      mooMessage: false,
      mooTimer: null,
      mooCounter: null,
      superMoo: false,
      mooPlication: "",
      buttonList: ["\u00D7", "1", "2", "3", "\u00F7", "4", "5", "6", "-", "7", "8", "9", "+", "<-", ".", "0", "power", "(", ")", "Moo"],
      isActive: [],
      // isActive: [ false,   false,  false,  false,  false, false,  false,  false,   false,  false,],
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
      showTooltip: "Making this work with my code was interesting! If the user does an expression like 2*2^2+2 the actual expression being evaluated is 2*(2^2)+2",
      adjustViewBoxSize: 400,
      //svgContent: '',
      
    };
  },  
  computed: {
    
    treeString() {
      return this.printTree(this.tree);
    },
    svgContent() {
      // Generate the SVG content based on the JSON data
      let svg = this.drawTree();
      //console.log(svg);

      return svg;
    },
    // If the result is infinity, then we need a custom message to display
    findInfinity() {
      return this.result == "Infinity" ? "Moooooooo! You have reached " : "";
    }
  },
   /*
      For section immediately below: 

      This expression(userInput) works by taking whatever the user input is from buttons/text field.
      The number of Moo's are counted and saved to mooCounter
      the math symbols that are displayed but don't actually work in calculations are replaced, along with
      the moos.
      If the regular expression of a number followed by a math operator is followed such as 3.45*5 then
      calculations will be performed automatically!
      mathOperators checks for this regex sequence, then if true the text is shown, a cleanedExpression is
      used in the cowculate function to evaluate the result! 
    */
  watch: {
    
    expression(userInput) {
     
      let str = userInput;

      this.mooCounter = (str.match(/Moo/g) || []).length;

      if (str.includes("Moo\u00D7Moo") || str.includes("Moo+Moo")) {
        this.superMoo = true;
        let mooNumber = 2;
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
          const count = (str.match(/Moo/g) || []).length;
          mooString = "M";
          for (let i = 0; i < count - 1; i++) {
            mooString += "o";
          }
        }
        this.mooPlication = mooString;
      }

      // The following is largely pre-processing for the string to go into the cowculate() function
      str = str.replaceAll("÷", "/").replaceAll("\u00D7", "*");
    
      // invoke function to autocorrect bad entries such as -/ or */ or -+
      if (
        !this.expression.includes("Moo\u00D7Moo") ||
        !this.expression.includes("Moo+Moo")
      ) {
        // the string contains "Moo×Moo" or "Moo+Moo"
        this.autoFixIncorrectInput(str);
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
      // This sends input to the cowculator if the input is valid
      else {
        this.cleanedExpression = str;
        this.cowculate();
      }
    },
  },
  methods: {
    // Adds commas to the result or expression shown on the screen to increase readability
    addCommas(number) {
        if (number == null) {
          return "";
        } else {
          // fixed this so it only adds commas to the left of the decimal point
          number = number.toString();
          let parts = number.split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return parts.join('.');
        }
      },
    cursorIndex() {
      this.indexOfCursor = this.$refs.inputField.selectionStart;
      //console.log("Cursor index:", this.indexOfCursor);
    },
    handleSelectionChange() {
      const cursorIndex = this.$refs.inputField.selectionStart;
      console.log("Cursor index:", cursorIndex);
      return(cursorIndex);
    },
    getLastKey(event) {
      this.lastKey = event.key;
      console.log(this.lastKey)
    },
    // Method functions above this are new additions to the cowculator Dec. 2023

    adjustTreeSize(operator) {

      if (this.result != null) {

        if (operator === "+") {
          this.adjustViewBoxSize -= 100;
        } else if (operator === "-") {
          this.adjustViewBoxSize += 100;
        }
        this.setOutputs(this.result);
      }


    },
    findInfinity2() {
      if (this.result == "Infinity") {
        this.result = "Moo-Infinity!";
      }
    },

    drawTree() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "400");
      svg.setAttribute("height", "400");
      svg.setAttribute("viewBox", `0 0 470 ${this.adjustViewBoxSize}`);

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

      // dominant-baseline="middle" seems to work better at vertical centering across browsers, alignment-baseline wasn't centering the
      // text vertically in firefox browser - 17/08/2023
      svg.innerHTML += `<circle cx="${x}" cy="${y}" r="15" fill="white" stroke="#42b883" stroke-opacity="0.5" />`;
      svg.innerHTML += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="1em">${node.value}</text>`;
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
      // Cow Moo cowculations   
      this.userTokens = [];
      this.operators = [];
      
      this.cleanedExpression = this.addParenthesisAroundPowerSymbol(this.cleanedExpression);

      try {   
        let input = this.cleanedExpression;
        let currentNumber = "";

        for (let i = 0; i < input.length; i++) {
          const char = input.charAt(i);
          // Check for expressions where a negative sign precedes a "left paranthesis"
          // such as "- left paranthesis" To solve this the expression in parenthesis is subtracted from 0
         
          if (
            char === "-" &&
            (i === 0 || isNaN(input.charAt(i - 1))) &&
            input.charAt(i + 1) === "("
          ) {
            // access helper function to push a 0 to the stack, this is for the use case such as "- left paranthesis" To solve this the expression in parenthesis is subtracted from 0
            this.userTokens.push(this.createNodes(true, 0));
            this.operators.push("-");
          }
          // not double --
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
              // access helper function to push a node and number to the stack
              this.userTokens.push(this.createNodes(true, parseFloat(currentNumber)));
              currentNumber = "";
            }
            if (char === "+" || char === "-") {
              while (
                this.operators.length > 0 &&
                this.operators[this.operators.length - 1] !== "("
              ) {
                const node = this.createNodes();
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
                const node = this.createNodes();
                this.userTokens.push(node);
              }
              this.operators.push(char);
            }
            else if (char === "^") {
              while (
                this.operators.length > 0 &&
                this.operators[this.operators.length - 1] !== "(") {
                const node = this.createNodes();
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
                const node = this.createNodes();
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
        
        }
        // Add the last number if there is one
        if (currentNumber !== "") {
          // access helper function to push a node and number to the stack
          this.userTokens.push(this.createNodes(true, parseFloat(currentNumber)));
        }
        // Perform remaining operations
        while (this.operators.length > 0) {
          const node = this.createNodes();
          this.userTokens.push(node);
        }
        // calculate the final result
        const result = this.evaluate(this.userTokens[0]);

        // This goes to output all the results in its own function
        this.setOutputs(result);

        // Good article about using NaN in JavaScript like the function above does ^
        // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.
        // This method works below, but others could also work.

      } catch (error) {
        this.result = null;
      }
    },
    //helper function to create nodes - this separates the concerns and makes functions shorter
    createNodes(pushNode = false, number = 0) {

      // create a node class to store the values
      class Node {
        constructor(value, left = null, right = null) {
          this.value = value;
          this.left = left;
          this.right = right;
        }
      }
      // if a node only needs to be built then this first IF is used
      if (pushNode === false) {
        const op = this.operators.pop();
        const right = this.userTokens.pop();
        const left = this.userTokens.pop();
        return new Node(op, left, right);
        // if a node has to input a specific number then this second ELSE is used
      } else {
        return new Node(number);
      }
    },
    // This just sets the outputs to the result of the cowculation function so the function is shorter    
    setOutputs(result) {
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
      const left = this.evaluate(node.left);
      const right = this.evaluate(node.right);
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
    // This function will highlight the buttons as a user types input, or as a user hits the back button on their input to delete it
    checkInput() {
      
      /* this.expression is what the user sees at the top of the cowculator */
      let str = this.expression;   
      
      /* take the last digit of the expression */
      let lastDigitIndex = str.slice(-1);    

      /* highlighting of the digits when something is deleted or backarrow is pressed */      
      this.buttonList.forEach((_, index) => {
        this.isActive[index.toString()] = (lastDigitIndex.toString() === index.toString());
      });

      /* delay the removal of the highlight so it looks better */
      setTimeout(() => {       
          this.isActive[lastDigitIndex.toString()] = false;       
      }, 300);

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
    // this decides what each button type does
    addNumber(buttonValueToAdd) {
      if (buttonValueToAdd === "<-") {
        /* The order of these functions and expressions in this block below is important! 
        If the checkInput() function is called after the removeEntry() 
        function then rightmost digit will not be highlighted
        */              
        this.checkInput();
        // set the expression one step behind for comparison to see where an item is removed between 2 strings
        this.expressionOneStepBehind = this.expression;
        // Remove the value
        this.removeEntry();
        // update this value after doing operations to be 1 step behind the 
      } else if (buttonValueToAdd === "power") {        
        this.squared();
      }
      else if (buttonValueToAdd === "Moo") {
        this.addMoo(), this.mooButtonHit();
      } else {
        this.expression += buttonValueToAdd;
      }
    },
    removeEntry() {
      if (this.expression !== "") {

        let cursorIndex = this.$refs.inputField.selectionStart; // Store the cursor index

        if (this.expression.slice(-3) === "Moo") {
          this.expression = this.expression.slice(0, -3);
        } else {

          if (cursorIndex === 0 || cursorIndex === this.expression.length) {
            this.expression = this.expression.slice(0, -1);
          } 
          else {            
            this.expression = this.expression.slice(0, cursorIndex - 1) + this.expression.slice(cursorIndex);
          }

          cursorIndex--; // Move the cursor to the left
        }        
        this.$nextTick(() => {
          this.$refs.inputField.selectionStart = cursorIndex; // Restore the cursor index
          this.$refs.inputField.selectionEnd = cursorIndex;
          this.$refs.inputField.focus(); // Keep the focus on the input field
        });
      }
},
    addMoo() {
      this.expression += "Moo";
    },
    squared() {
      this.expression += "^";
    },
    addInExtraMultiplicationSymbols(input) {
      const output = input.replace(/(\d)\(/g, '$1\u00D7(').replace(/\)\(/g, ')\u00D7(');
      //console.log(output)
      return output
    },
    addParenthesisAroundPowerSymbol(input) {
      // Use regular expression to match number^number pattern
      const regex = /(\(\d+\)(?:\^\d+)*|\d+(?:\^\d+)+)/g;
      const output = input.replace(regex, '($1)');
      // for now this fixes it, but it's not the best solution, forces multiplication symbol between parenthesis to fix mult error
      const addMultParenthesis = output.replace(/\)\(/g, ')*(');

      return addMultParenthesis;
    },
    autoFixIncorrectInput(str) {
      // This code was updated from a long if-else chain to just regex so could have some bugs, likely its good!

      // If someone types 5-+2 or 5-/2 or 5-*2 or other incorrect inputs this will fix them.
      const lastTwoChars = str.slice(-2);
      const lastThreeChars = str.slice(-3);

      const regexPatterns = [
        { pattern: /-\+|-\/|-\\|\+\+|\+\/|\+\*|\*\+|\*\/|\*\*|\+\\|\/\+|\/\/|\/\*/, replacement: '' },
        { pattern: /---/, replacement: '-' },
        { pattern: /-\*/, replacement: '*' }
      ];
      for (const regex of regexPatterns) {
        if (regex.pattern.test(lastTwoChars) || regex.pattern.test(lastThreeChars)) {
          this.expression = str.slice(0, -2) + str.slice(-1)
            .replaceAll("/", "\u00F7")
            .replaceAll("*", "\u00D7")
            .replace(regex.pattern, regex.replacement);
          break;
        }
      }
      // for output to screen to show x instead of * and ÷ instead of /
      this.expression = this.expression.replaceAll("/", "\u00F7")
        .replaceAll("*", "\u00D7")
    },
    
    copyToClipboard() {
      navigator.clipboard.writeText(this.result);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 1000);
    },
    /* Reset all input fields - if some error happens or want to restart */
    resetAllData() {
      this.expression = ""; // an unfiltered raw user input
      this.cleanedExpression = ""; // a cleaned version of user input
      this.showText = false; // shows main results
      this.result = null; // final result

      this.mooCounter = 0; // count Moo's
      this.superMoo = false; // turns MooxMoo into Moooo etc.
      this.userTokens = []; // global array to update numbers - probably doesnt need to be global
      this.operators = []; // global array to update math operators - probably doesnt need to be global

      // Nodes for the binary tree
      this.treeNodeCalculations = null; //show the whole parse tree
      this.currentNode = null; //show only the current node math operation being done
      this.leftNode = null;
      this.rightNode = null;
      this.operator = null;

      this.showDescriptionText = false;

      this.formattedNumber = ""; // expression with commas
      this.formattedResult = ""; // final result with commas
      this.adjustViewBoxSize = 400; // reset tree scale

      // reset tree graphic
      this.tree = {};
      this.clearSVG();
    },
  },
};
</script>





<style scoped>
.button-35:hover {
  box-shadow: rgb(0, 255, 119) 0 0 0 2px, transparent 0 0 0 0;
}
/*
.cowculator-position{
  position: absolute; left: 5em;
}

.binary-tree-and-outputs-area{
  margin-left: 30em;
  padding-right: 2em;
  padding-left: 0em;  
}

@media screen and (max-width: 110rem) {
  .cowculator-position{
    position: relative; 
    left: 0em;
  }
  .binary-tree-and-outputs-area{
  margin-left: 0em;
  padding-left: 2em;
  }  
}
*/
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
  background-color: rgba(30, 30, 30, 0.66);
  border: none;
  padding: 0.8em 0.8em 0.8em 0.8em;
  font-size: 1.5em;
  text-align: center;
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.active {
  background-color: rgba(66, 184, 131, 0.7) !important;
  /* 
  While this may say 0 references in the css file, it is actually used in the Vue.js Javascript
  to highlight buttons that are added to the expression or removed! 
  It uses the active: isActive[button] to highlight the button that was just added or removed and
  also uses the checkInput() function
*/
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
}.grid-item-symbols:hover {
  background-color: rgba(66, 184, 131, 0.7) !important;
}.grid-item:hover {
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
  text-align: center;
  margin-top: 0.05em;
  font-size: 1.5em;
  left: 0em;
  right: 0em;
  padding: 0em;
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
}.arrow-position {
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
  top: 3em;
  font-weight: bold;
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