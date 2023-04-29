<template>
  <p>Title: {{ title }}&nbsp; ID: {{ id }}&nbsp; Details: {{ details }}</p>

  <!-- This will show the project if the ID matches it in the Projects array -->
  <div class="router-link-style">
    <div v-show="id == 1">
      <router-link style="text-decoration: none" to="/projects/cowculator">Cowculator</router-link>
      <p class="homeview paragraph-text">As of April 2023, here is how the cowculator cowculates. An additional evaluate function is also used.
       There are some tricks to how this works. The user can also type in things like (2)(2) and this will automatically convert 
       to (2)&#215;(2). Typing in something incorrect like 2-+2 will also automatically convert to 2+2. Some of these
       functions are pre-processed with the watcher as the user types and are not done in the cowculate() function itself!
       The copy answer to clipboard function doesn't copy answers with exclusively Moo*Moo yet, but will work for all mathmatical operations such
       as 2Moo*3Moo*2Moo etc.

      </p>
      
      <figure class="">
      <img :src="imagePath" alt="Binary Tree example" />
      <figcaption>Binary Tree example showing how the code computes. The left tree result is 14, the right tree is -19, and an expression with paranthesis is shown.
        As shown, the binary tree evaluates each node starting from the bottom.

      </figcaption>
      </figure>
    
      <pre v-bind:class="'language-JavaScript'" class="hhh">
  <code>cowculate() {
      /* Cow Moo cowculations */
      
      /* This works with some preprocessing and then everything goes into stack and is parsed in a tree */      

      // clears all number tokens and math operations from previous inputs
      this.userTokens = []
      this.operators = []

      let str = this.cleanedExpression;

      // old method BAD - to check if numbers were the same parseFloat(str) === eval(str)
      try {
        // checks that it doesn't have parenthesis and a valid math operator so it doesn't output when there is nothing to output
        if (!(/-?\(?\d+\.?\d*\)?([+\-*/÷\u00D7]-?\(?\d+\.?\d*\)?)*$/).test(str)) {
          this.result = "";
        }        
        else {
          class Node {
            constructor(value, left = null, right = null) {
              this.value = value;
              this.left = left;
              this.right = right;
            }
          }
          var input = this.cleanedExpression
          let currentNumber = "";
          for (let i = 0; i &lt; input.length; i++) {
            const char = input.charAt(i);
            // Check for expressions like -(2+2) and 2*-(2+2) where a negative sign precedes a "(" paranthesis 
            // such as "-(" To solve this the expression in paranthesis is subtracted from 0
            if (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))) && input.charAt(i + 1) === "(") {
              this.userTokens.push(new Node(0));
              this.operators.push("-");
            }
            // (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))  ) checks that it's not 4-4 and is 4--4 for example!
            else if (!isNaN(char) || char === "." || (char === "-" && (i === 0 || isNaN(input.charAt(i - 1)) && input.charAt(i - 1) !== ")" && input.charAt(i + 1) !== "("))) {
              currentNumber += char;
              // Does operations like (2)2 = 4
              if (")" === input.charAt(i - 1)) {
                this.operators.push("*");
              }

              // Does operations like 2(2) = 4
              if ("(" === input.charAt(i + 1)) {
                this.operators.push("*");
              }
            }
            else {
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
              else if (char === "*" || char === "/" || char === "!") {
                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(" && (this.operators[this.operators.length - 1] === "*" || this.operators[this.operators.length - 1] === "/" )) {
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
          // calculate the final result
          var result = this.evaluate(this.userTokens[0]);
          // Quick way to make sure output isn't 5555 = 5555 if the user just enters a number
          // If no calculations are done don't need to show a number is equal to itself.
          if (result == this.cleanedExpression) {
            result = ""
          }
          // IMPORTANT - THIS IS WHERE ALL THE OUTPUTS ARE COMPUTED!
          else if (!Number.isNaN(result)) {
            // show equal sign and results
            this.showText = true;
            // create the binary tree structure
            this.treeNodeCalculations = this.userTokens
            // this outputs the binary parse tree and nodes
            this.showDescriptionText = true;
            // this puts the final calculation into a variable to be copied from the clipboard
            this.message = result
            // this outputs the FINAL calculation
            this.result = result;
          }
          // Good article about using NaN in JavaScript like the function above does ^ 
          // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.
          // This method works below, but others could also work.
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

      console.log(left, node.value, right);
      this.currentNode = "Left node:  " + left + " Operator:  " + node.value + "  Right node:  " + right;

      // Switched this to a switch - simpler and more readable for this use case
      switch (node.value) {
        case '+':
          return left + right;
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        default:
          return null;
      }
    }</code></pre>





    </div>
    <div v-show="id == 2">
      <router-link style="text-decoration: none" to="/projects/cowculator">{{ title }}</router-link>
      <pre v-bind:class="'language-python'" class="hhh">
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
      <pre v-bind:class="'language-python'" class="hhh">
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
    <div class="smaller-font" v-show="id == 3">
      <h1>{{  title }}</h1>
      
      <p class="homeview paragraph-text">
        Lundberg C,Viñuela LS, Biales S. 2022. Dialogue summarization using BART. Paper presented at: 15th International
        Natural Language Generation Conference; Colby College,Maine, USA. <a style="text-decoration: none" href="https://inlgmeeting.github.io/">https://inlgmeeting.github.io/</a>
        <br>This work used machine learning and fine-tuned a BART model on 12,460 dialogue summary pairs in order to summarize
        dialogues between two people.
        <br>Our groups ROUGE and BERTSCORE are listed under "UoT" (University of Tübingen)
        <a style="text-decoration: none" href="https://cylnlp.github.io/dialogsum-challenge/">https://cylnlp.github.io/dialogsum-challenge/</a> for the INLG DialogSum Challenge.
        
        <br>
        Link to
        <a style="text-decoration: none" href="https://github.com/conrizzo/dialogue_summarization_paper">Dialogue Summarization using BART</a> paper, and a copy of the 
        <a style="text-decoration: none" href="https://colab.research.google.com/drive/15CvaaYz2nv_33bPbftM6JwQCuYp3lVm9">Python code</a> we wrote for fine-tuning the model.</p>
        
      <p class="homeview paragraph-text">The original BART paper for reference is here: 
        <a style="text-decoration: none" href="https://arxiv.org/abs/1910.13461#">https://arxiv.org/abs/1910.13461#</a></p>

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
  props: ["title", "id", "details"],
  mounted() {
    Prism.highlightAll();
  },
  data() {
   return {
    imagePath: require("@/images/binary_tree.jpg"),
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
  margin-left: 30px;
  margin-right: 20px;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  font-size: 0.5em;
  font-weight: normal;
  margin-bottom: 1em;
  margin-top: 1em;
}

.hhh {
  font-weight: normal;
  font-size: 14px;
  page-break-inside: avoid;
  font-family: monospace;

  margin-left: 30px;
  margin-right: 20px;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}
h1{
  font-size: 1em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}
.smaller-font{
  font-size: 0.9em;
}



/* image and figures */
figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 0.5em;
    padding-bottom: 0em;
    max-width: 500px;
    margin: auto;
    font-size: 0.5em;
    text-align: left;
    color: rgb(255, 255, 255);
    background-color: #999999;    
    border-radius: 5px;
    
}

figcaption{
  padding: 0.5em;
}

img {
    max-width: 500px;
    max-height: auto;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 900px) {
  p.homeview {
    margin-left: 20px;
  }

  .hhh {
    margin-left: 20px;
  }

  figure {
    
    margin-left: 1.2em;
    margin-right: 1.2em;
    
  }
}
</style>