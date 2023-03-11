<template>

<div class="grid-container">
  <button class="grid-item" @click="addNumber">1</button>
  <button class="grid-item" @click="addNumberTwo">2</button>
  <button class="grid-item" @click="addNumberThree">3</button>
  <button class="grid-item" @click="addNumberFour">4</button>
  <button class="grid-item" @click="addNumberFive">5</button>
  <button class="grid-item" @click="addNumberSix">6</button>
  <button class="grid-item" @click="addNumberSeven">7</button>
  <button class="grid-item" @click="addNumberEight">8</button>
  <button class="grid-item" @click="addNumberNine">9</button>
  <button class="grid-item" @click="addMultiplication">*</button>
  <button class="grid-item" @click="addNumberZero">0</button>
  <!-- override styling to fit in more text for the element below -->
  <button class="grid-item" style="padding:2px;" @click="addMoo">Moo</button>

  
</div>

  <div>
    
  
    <input
      style="margin-left: 10px; width: 250px;"
      v-model="displayNumbers"
      @input="updateNumbers"
      type="text"
    />
    <button class="button-35" style="margin-left: 10px" @click="cowculate">
      Cowculate
    </button>
    <button class="button-35" style="margin-left: 10px" @click="clearField">
      Reset
    </button>
    
      
    
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      numbers: [],
      currentOperation: null,
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
    addMultiplication() {
      this.currentOperation = "*";
      this.numbers.push("*");
    },
    /* Reset the array - if some error happens or want to restart */
    clearField() {
      this.numbers = [];
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
          
          const countMoo = (leftOperand.match(/Moo/gi) || []).length + (rightOperand.match(/Moo/gi) || []).length;// Count occurrences
          console.log(countMoo); 

          const leftNoMoo = leftOperand.replace(/Moo/gi, "") 
          const rightNoMoo = rightOperand.replace(/Moo/gi, ""); // Remove all occurrences of "Moo"
          



          /* multiply these together */
          result = Number(leftNoMoo) * Number(rightNoMoo);
          this.numbers = ["Result: " + result + " Moo's: " + countMoo];
          break;
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
  
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
  margin: 2px;
  border-radius: 12px;
}
.grid-item:hover{
  background-color: rgba(186, 186, 186, 0.318);
}

</style>