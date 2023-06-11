<template>
  <!-- PROJECT 1 -->
  <div class="router-link-style">
    <div v-show="id == 1">
      <div style="padding-top: 0.2em;">
        <h1><router-link style="text-decoration: none; color: white;" to="/projects/cowculator">{{ title }} :
            {{ details }}</router-link></h1>
      </div>
      <h2 class="homeview">How does it work?</h2>
      <div style="margin-top: 2em; margin-bottom: 0em;">
      <p class="homeview paragraph-text">As of June 2023, here is how the <router-link style="text-decoration: none;"
          to="/projects/cowculator">Cowculator</router-link> cowculates. An additional evaluate function is also used.
        There are some tricks to how this works. The user can also type in things like (2)(2) and this will automatically
        convert
        to (2)&#215;(2). Typing in something incorrect like 2-+2 will also automatically convert to 2+2. Some of these
        functions are pre-processed with the watcher as the user types and are not done in the cowculate() function
        itself!
        The copy answer to clipboard function doesn't copy answers with exclusively Moo*Moo yet, but will work for all
        mathmatical operations such
        as 2Moo*3Moo*2Moo etc.
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
    },</code></pre>
  </div>
    </div>

    <!-- PROJECT 2 -->
    <div v-show="id == 2">
      <div style="padding-top: 0.5em;">
        <h1>{{ title }} : {{ details }}</h1>
      </div>
      <pre v-bind:class="'language-python'" class="code-format">
  <code>DRINK_COFFEE = True
  website_finished = False
  while website_finished is False:
   print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")</code></pre>
      <p class="homeview paragraph-text">
        Python doesn't officially syntactically have constants so it's
        capitalized to show it should not be modified "DRINK_COFFEE=True", but
        the code above emphasizes that work continues, and the coffee drinking
        will always continue.
      </p>
      <pre v-bind:class="'language-python'" class="code-format">
  <code># Defines a Python function to describe coffee
  def describe_coffee(roast_level, origin, flavor_notes):
      """
      This function describes a cup of coffee based on its roast level, origin, and flavor notes.

      :param roast_level: The roast level of the coffee, e.g. light, medium, dark.
      :param origin: The origin of the coffee, e.g. Ethiopia, Colombia, Kenya.
      :param flavor_notes: The flavor notes of the coffee, e.g. chocolate, caramel, citrus.
      :return: A string describing the coffee.
      """
      return f"This {roast_level}-roasted coffee from {origin} has flavor notes of {flavor_notes}."

  # Example usage of the function
  coffee_description = describe_coffee("medium", "Colombia", "chocolate and caramel")
  print(coffee_description)</code></pre>


    </div>

    <!-- PROJECT 3 -->
    <div class="smaller-font" v-show="id == 3">
      <div style="padding-top: 0.5em;">
        <h1>{{ title }} : {{ details }}</h1>
      </div>

      <p class="homeview paragraph-text">
        Lundberg C,Viñuela LS, Biales S. 2022. Dialogue summarization using BART. Paper presented at: 15th International
        Natural Language Generation Conference; Colby College,Maine, USA. <a style="text-decoration: none"
          href="https://inlgmeeting.github.io/">https://inlgmeeting.github.io/</a>
        <br>This work used machine learning and fine-tuned a BART model on 12,460 dialogue summary pairs in order to
        summarize
        dialogues between two people.
        <br>Our groups ROUGE and BERTSCORE are listed under "UoT" (University of Tübingen)
        <a style="text-decoration: none"
          href="https://cylnlp.github.io/dialogsum-challenge/">https://cylnlp.github.io/dialogsum-challenge/</a> for the
        INLG DialogSum Challenge.

        <br>
        Link to
        <a style="text-decoration: none" href="https://github.com/conrizzo/dialogue_summarization_paper">Dialogue
          Summarization using BART</a> paper, and a copy of the
        <a style="text-decoration: none"
          href="https://colab.research.google.com/drive/15CvaaYz2nv_33bPbftM6JwQCuYp3lVm9">Python code</a> we wrote for
        fine-tuning the model.
      </p>

      <p class="homeview paragraph-text">The original BART paper for reference is here:
        <a style="text-decoration: none" href="https://arxiv.org/abs/1910.13461#">https://arxiv.org/abs/1910.13461#</a>
      </p>

      <p class="homeview paragraph-text">Will add more machine learning projects soon enough</p>
    </div>


  </div>
  <FirstFooter></FirstFooter>
</template>

<script>
import Prism from "prismjs";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  components: {
    FirstFooter,
  },
  props: {
    title: String,
    details: String,
    id: Number,
  },

  mounted() {
    Prism.highlightAll();
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

.router-link-style {
  font-size: 2em;
  font-weight: bold;
}

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
  margin-bottom: 0.25em;
  margin-top: 1em;
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

h1 {
  font-size: 1em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}

.smaller-font {
  font-size: 0.9em;
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





/* end figure stuff */

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