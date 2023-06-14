<!-- This text is imported into the CowculatorDescription.vue so that page isn't long -->

<template>
<div>
<p class="paragraph-text break-text"> This code takes the user input and parses through the expression to evaluate it correctly. 
    Explaining this entirely step-by-step could take some time!</p>
<pre v-bind:class="'language-JavaScript'" class="code-format">
    <code>
        cowculate() {
      /* Cow Moo cowculations */
      /* This works with some preprocessing and then everything goes into stack and is parsed in a tree */

      // clears all number tokens and math operations from previous inputs
      this.userTokens = [];
      this.operators = [];

      // Here is an interesting way I found how to add in exponents with parsing. I just add in a 
      // set of paranthesis around the exponent part such as 5*2^2+5 changes to 5*(2^2)+5 , but the user doesn't see this
      // figuring out these solutions is rewarding but since this has been a built from scratch project it feels like yarn and duck tape too, which is okay!
      // but everything works! and I am happy with the results
      this.cleanedExpression = this.addParenthesisAroundPowerSymbol(this.cleanedExpression);

      let str = this.cleanedExpression;
      try {
        // checks that it doesn't have parenthesis and a valid math operator so it doesn't output when there is nothing to output
        if (!/-?\(?\d+\.?\d*\)?([+\-*/÷\u00D7]-?\(?\d+\.?\d*\)?)*$/.test(str)) {
          this.result = "";
        } else {          
          
          var input = this.cleanedExpression;
          let currentNumber = "";

          for (let i = 0; i &lt; input.length; i++) {
            const char = input.charAt(i);
            // Check for expressions like -(2+2) and 2*-(2+2) where a negative sign precedes a "(" paranthesis
            // such as "-(" To solve this the expression in paranthesis is subtracted from 0
              if (
                char === "-" &&
                (i === 0 || isNaN(input.charAt(i - 1))) &&
                input.charAt(i + 1) === "("
              ) {
                // access helper function to push a 0 to the stack, this is for the use case such as "-(" To solve this the expression in paranthesis is subtracted from 0
                this.userTokens.push( this.createNodes(true, 0));
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
                        // access helper function to push a node and number to the stack
                        this.userTokens.push( this.createNodes(true, parseFloat(currentNumber)));
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
                            this.operators[this.operators.length - 1] !== "(")                           
                          {
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
            // This was an array for testing each number addition to the expression
            // this.arrayOfNumbersOnly.push(currentNumber);
            // console.log(this.arrayOfNumbersOnly)
          }
          // Add the last number if there is one
          if (currentNumber !== "") {
            // access helper function to push a node and number to the stack
            this.userTokens.push( this.createNodes(true, parseFloat(currentNumber)));
          }
          // Perform remaining operations
          while (this.operators.length > 0) {            
            const node = this.createNodes();
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
        </code>   
    </pre>
    <pre v-bind:class="'language-JavaScript'" class="code-format">
    <code>
    //helper function to create nodes - this separates the concerns and makes functions shorter
    createNodes(pushNode = false, number = 0){

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
          }else{
            return new Node(number);
          }
        },

    </code>   
    </pre>
    <p class="paragraph-text break-text"> This code below sets the outputs the user sees, and all the final results of the code:</p>
    <pre v-bind:class="'language-JavaScript'" class="code-format">
    <code>
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
        </code>   
    </pre>
    <p class="paragraph-text break-text"> This code below evalutes the nodes that are parsed:</p>
    <pre v-bind:class="'language-JavaScript'" class="code-format">
    <code>
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
        </code>   
    </pre>
  </div>
</template>

<script>

export default {
    name: "CowculatorCode",
    
    data() {
        return {
            
        }
    },
    
};
</script>

<style scoped>
/* Add your styles here */
.code-format {
  margin-top: 0.25em;
  font-weight: normal;
  font-size: 1em;
  page-break-inside: avoid;
  font-family: monospace;

  margin-left: 10em;
  margin-right: 10em;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}

.paragraph-text {
  margin-left: 10em;
  margin-right: 10em;
  line-height: 1.65em;
  font-size: 1em;
  text-align: left;
  word-break: break-word;
  font-weight: 400;
  margin-bottom: 1em;
  margin-top: 1em;
}
@media only screen and (max-width: 1500px) {
.paragraph-text {
    margin-left: 3em;
    margin-right: 3em;

  }

  .code-format {
    margin-left: 2em;
    font-size: 1em;
    margin-right: 2em;
  }

}

</style>
