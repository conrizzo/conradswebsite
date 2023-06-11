<template>
    
      <h1>{{ CowculatorTitle }}</h1>
      <p>{{ CowculatorDescription }}</p>
      
      <h2 class="homeview">How does it work?</h2>
      <div style="margin-top: 2em; margin-bottom: 0em;">
      <p class="homeview paragraph-text">As of June 2023, here is how the <router-link style="text-decoration: none;"
          to="/projects/cowculator">Cowculator</router-link> cowculates.
        There are some tricks to how this works. The user can type in things like (2)(2) and this will automatically
        convert to (2)&#215;(2). Typing in something incorrect like 2-+2 will also automatically convert to 2+2. Some of these
        functions are pre-processed with the watcher as the user types and are not done in the cowculate() function
        itself!
        The copy answer to clipboard function doesn't copy anything until a result is actually evaluated, but will work for all
        mathmatical operations such
        as 2Moo*3Moo*2Moo etc. The cowculator also supports exponents, parenthesis, and the user can type in 2^2, or 2(2)^3 and it will be evaluated correctly.
      </p>
    </div>
      <div class="figure-stuff">
        <div>
          <figure>
            <img :src="imagePath" alt="Binary Tree example" />
            <figcaption>A) Binary Tree example showing how the cowculator code computes. The left tree result is 14, the right
              tree is -19, and an expression with parenthesis is shown.
              As shown, the binary tree evaluates each node starting from the bottom. Diagram made using: <a
                href="https://vanya.jp.net/vtree/">https://vanya.jp.net/vtree/</a>.

            </figcaption>
          </figure>
          <figure >
            <img  :src="imagePathTwo" alt="Binary Tree example 2" />
            <figcaption>B) Binary Tree example of the left-most example from figure A: <b>5*4-6=14</b>, this comes directly from the cowculator output!

            </figcaption>
          </figure>
        </div>
      </div>
      <div>
      <pre v-bind:class="'language-JavaScript'" class="code-format">
  <code>cowculate() {
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
          class Node {
            constructor(value, left = null, right = null) {
              this.value = value;
              this.left = left;
              this.right = right;
            }
          }

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
                            this.operators[this.operators.length - 1] !== "(")                           
                          {
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
    },</code></pre>
  </div>
      
  </template>
  
  
  <script>
  import Prism from "prismjs";
  
  export default {
    name: "CowculatorDescription",
    components: Prism,
    props: {
      CowculatorTitle: {
        type: String,
        required: true,
      },
      CowculatorDescription: {
        type: String,
        required: true,
      },
    },
    data() {
    return {
      imagePath: require("@/images/binary_tree.jpg"),
      imagePathTwo: require("@/images/binary_tree_two.jpg"),
    }
  }
  };
  </script>
  
  <style scoped>
  p.homeview {
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin-left: 1em;
    margin-right: 1em;
    color: #000000;
    background: #fff;
    border-radius: 5px;
    font-size: 0.6em;
    font-weight: normal;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  
  .code-format {
    margin-top: 0.25em;
    font-weight: normal;
    font-size: 0.6em;
    page-break-inside: avoid;
    font-family: monospace;
  
    margin-left: 1.2em;
    margin-right: 1.2em;
    overflow: auto;
    display: block;
    word-wrap: break-word;
    border-radius: 5px;
  }

  /* figure stuff */
.figure-stuff {
  margin: 0em 0.5em 0em 0.5em;
  text-align: center;
}

.figure-stuff > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.figure-stuff figure {
  margin: 0em 0.25em auto;
  width: 48.5%;
}

.figure-stuff img {
  width: 100%;
  height: auto;
  max-width: 98%;
  display: block;
  margin: 0 auto;
}

/* image and figures */
figure { 
  height: 550px;
  display: flex;
  flex-flow: column;
  padding: 0.5em;
  padding-bottom: 0em;
  
  margin-left: auto;
  margin-right: auto;
  margin-top: 0em;
  margin-bottom: 0.25em;
  font-size: 0.6em;
  font-weight: 75;
  text-align: left;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 1.2em;
  
}

figcaption {
  padding: 0.5em;
}

img {
  max-width: 500px;
  max-height: auto;
}

h2.homeview{
  display: inline;
  float: left;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 0.7em;
  margin-right: 0.7em;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: normal; 
  
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1800px) {
  p.homeview {
    margin-left: 20px;
  }

  .code-format {
    margin-left: 2em;
    font-size: 0.4em;
    margin-right: 2em;

  }

  figure {

    margin-left: 1.2em;
    margin-right: 1.2em;
    height: auto;

  }
  .figure-stuff> div {
    flex-direction: column;
  }
  
  .figure-stuff figure {
    margin-top: 0.5em;
    margin-right: 0.2em;
    width: auto;
  }
}

  </style>