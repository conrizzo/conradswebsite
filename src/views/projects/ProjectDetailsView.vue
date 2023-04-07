<template>
  <p>Title: {{ title }}&nbsp; ID: {{ id }}&nbsp; Details: {{ details }}</p>

  <!-- This will show the project if the ID matches it in the Projects array -->
  <div class="router-link-style">
    <div v-show="id == 1">
      <router-link style="text-decoration: none" to="/projects/cowculator">Cowculator</router-link>
      <p class="homeview">Here is how the cowculator cowculates. An additional evaluate function is also used.</p>
      <pre v-bind:class="'language-JavaScript'" class="hhh">
  <code>cowculate() {
        /* Cow Moo cowculations */
      
        // clears all number tokens and math operations from previous inputs
        this.userTokens = []
        this.operators = []

        let str = this.cleanedExpression;
        console.log(this.cleanedExpression)
        // old method BAD - to check if numbers were the same parseFloat(str) === eval(str)
        try {
          if (!(/[+\-*/÷\u00D7]/).test(str)) {
            this.result = "";
          }
          else {
            console.log("else expression")
            class Node {
              constructor(value, left = null, right = null) {
                this.value = value;
                this.left = left;
                this.right = right;
              }
            }

            //this.cleanedExpression = "-4*-2"

            console.log(this.cleanedExpression)
            //this.cleanedExpression = "4--2+3"
            var input = this.cleanedExpression
            console.log(input)
            let begin_expression_negative = ""
            if ((/^-$/).test(input)) {
              console.log("the input 2: ", input)
              input = input.slice(0, -1);

            } else if ((/^-\d+(\.\d+)?$/).test(input)) {
              console.log("the input 3: ", input)
              begin_expression_negative = input
              input = input.slice(0, -input.length);

            }
            // Finally!, a neat way to solve this is to remove any invalid operators for calculations instead of modifying the whole tree
            // Now this checks for an additional operator with a number, no calculations until it's a valid input
            if ('+-*/'.indexOf(input.slice(-1)) !== -1) {
              input = input.slice(0, -2);
              console.log("the input 1: ", input)

            }

            console.log("Final result", begin_expression_negative + input)
            console.log("Final input", input)


            let currentNumber = "";
            for (let i = 0; i &lt; input.length; i++) {
              const char = input.charAt(i);
              if (!isNaN(char) || char === "." || (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))))) {
                currentNumber += char;
              } else {
                if (currentNumber !== "") {
                  this.userTokens.push(new Node(parseFloat(currentNumber)));
                  currentNumber = "";
                }
                if (char === "+" || char === "-") {
                  while &#40;this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {
                    const op = this.operators.pop();
                    const right = this.userTokens.pop();
                    const left = this.userTokens.pop();
                    const node = new Node(op, left, right);
                    this.userTokens.push(node);
                  }
                  this.operators.push(char);
                }
                else if (char === "*" || char === "/") {
                  while &#40;this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(" && (this.operators[this.operators.length - 1] === "*" || this.operators[this.operators.length - 1] === "/")) {
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
                  while &#40;this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {
                    const op = this.operators.pop();
                    const right = this.userTokens.pop();
                    const left = this.userTokens.pop();
                    const node = new Node(op, left, right);
                    this.userTokens.push(node);
                  }
                  if &#40;this.operators.length > 0 && this.operators[this.operators.length - 1] === "(") {
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
            console.log("final result", result); // should output 0 for input "2*2-2*2"
            // Good article about using NaN in JavaScript. 
            // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.
            // This method works below, but others could also work.
            if (!Number.isNaN(result)) {
              this.result = " = " + result
            }
          

          }

        } catch (error) {
          this.result = null;
        }
      },</code>
  </pre>
      <p class="homeview">Here is the evaluate helper function which calculates nodes on the tree data structure:</p>
      <pre v-bind:class="'language-JavaScript'" class="hhh"><code>evaluate(node) {
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
  }</code></pre>



    </div>
    <div v-show="id == 2">
      <router-link style="text-decoration: none" to="/projects/cowculator">{{ title }}</router-link>
      <pre v-bind:class="'language-python'" class="hhh">
  <code>DRINK_COFFEE = True
  website_finished = False
  while website_finished is False:
   print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")</code></pre>
      <p class="homeview">
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
    <div v-show="id == 3">
      <router-link style="text-decoration: none" to="/projects/cowculator">Project 3</router-link>
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
  font-size: 16px;
  font-weight: normal;
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

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 900px) {
  p.homeview {
    margin-left: 20px;
  }

  .hhh {
    margin-left: 20px;
  }
}
</style>