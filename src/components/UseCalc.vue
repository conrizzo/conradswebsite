

<template>
  
  <div class="grid-container cow-image">
    <button class="grid-item" @click="addNumber(); mooDialogue();">1</button>
    <button class="grid-item" @click="addNumberTwo(); mooDialogue();">2</button>
    <button class="grid-item" @click="addNumberThree(); mooDialogue();">3</button>
    <button class="grid-item" @click="addNumberFour(); mooDialogue();">4</button>
    <button class="grid-item" @click="addNumberFive(); mooDialogue();">5</button>
    <button class="grid-item" @click="addNumberSix(); mooDialogue();">6</button>
    <button class="grid-item" @click="addNumberSeven(); mooDialogue();">7</button>
    <button class="grid-item" @click="addNumberEight(); mooDialogue();">8</button>
    <button class="grid-item" @click="addNumberNine(); mooDialogue();">9</button>
    <button class="grid-item" @click="addMultiplication(); mooDialogue();">*</button>
    <button class="grid-item" @click="addNumberZero(), mooDialogue();">0</button>
    
    <!-- override styling to fit in more text for the element below -->
    <button class="grid-item" style="padding: 2px;" @click="addMoo(); mooDialogue();">Moo</button>
    
  </div>
  <input
      style="width: 268px; margin-bottom: 7px;"
      v-model="displayNumbers"
      @input="updateNumbers, mooDialogue();"
      type="text"
    />
  
  

  <div>
    
    <button class="button-35"  @click="cowculate">
      Cowculate
    </button>
    <button class="button-35" style="margin-left: 5px" @click="clearField">
      Reset
    </button>
    <!-- Make the Moo button generate random x,y moos on the screen -->
    <h2  v-if="showText" style="margin-right:20%; font-size: 20px; color: #c4b7a6;" :style="{position: 'absolute', top: textTop + 'px', left: textLeft + 'px' }"> {{ numbers }}</h2>
    
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [],
      currentOperation: null,
      showText: false,
      buttonX: 0,
      buttonY: 0,
    };
  },
  
  methods: {
    addNumber() {
      this.numbers.push(1);
    },
    addNumberTwo() {
      this.numbers.push(2);
    },
    addNumberThree() {
      this.numbers.push(3);
    },
    addNumberFour() {
      this.numbers.push(4);
    },
    addNumberFive() {
      this.numbers.push(5);
    },
    addNumberSix() {
      this.numbers.push(6);
    },
    addNumberSeven() {
      this.numbers.push(7);
    },
    addNumberEight() {
      this.numbers.push(8);
    },
    addNumberNine() {
      this.numbers.push(9);
    },
    addNumberZero() {
      this.numbers.push(0);
    },
    addMoo() {
      this.numbers.push("Moo");
    },
    mooDialogue(){
      this.showText = true;
      this.textTop = (window.innerHeight-20)
      this.textLeft = ((window.innerWidth-200)/4)
      
      /* (innerheight / 3.5) will keep it to the top section of the screen area */
      /* this.textTop = Math.random() * (window.innerHeight / 3.5); */
      /* ((window.innerWidth - 75)/1.3) this keeps the text 75 px from the left and makes sure it generates a number
         slightly larger than the right side of the screen so it doesnt overflow off the screen */
      /* this.textLeft = Math.random() * ((window.innerWidth - 75)/1.1); */
    },
    addMultiplication() {
      this.currentOperation = "*";
      this.numbers.push("*");
    },
    /* Reset the array - if some error happens or want to restart */
    clearField() {
      this.numbers = [];

      this.texts = [];
      this.showText = false;
    },

    cowculate() {
      let leftOperand = "";
      let rightOperand = "";
      let result = "";

      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] === "*") {
          /* slice the array positions from the begining to 
          the multiplication, and right of the multiplication */
          leftOperand = this.numbers.slice(0, i).join("");
          rightOperand = this.numbers.slice(i + 1).join("");
          /* Remove the Moo's from the calculator but count them for user using the "Moo" button */

          const countMoo =
            (leftOperand.match(/Moo/gi) || []).length +
            (rightOperand.match(/Moo/gi) || []).length; // Count occurrences
          console.log(countMoo);

          const leftNoMoo = leftOperand.replace(/Moo/gi, "");
          const rightNoMoo = rightOperand.replace(/Moo/gi, ""); // Remove all occurrences of "Moo"

          /* multiply these together */
          result = Number(leftNoMoo) * Number(rightNoMoo);
          if (countMoo > 2) {
            this.numbers = [
              "That's a lot of Moo's!" +
                " Result: " +
                result +
                " Moo's: " +
                countMoo,
            ];
          } else {
            this.numbers = ["Result: " + result + " Moo's: " + countMoo];
            break;
          }
        }
      }
    },
  },
  computed: {
    displayNumbers: {
      get() {
        return this.numbers.join("");
      },
      set(value) {
        this.numbers = value.split("");
      },
    },
  }
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
  margin: 2px;
  border-radius: 12px;
}
.grid-item:hover {
  background-color: rgba(186, 186, 186, 0.318);
}
</style>