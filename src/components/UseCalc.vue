

<template>
  <div class="grid-container cow-image">
    <button
      class="grid-item"
      @click="
        addNumber();
        mooDialogue();
      "
    >
      1
    </button>
    <button
      class="grid-item"
      @click="
        addNumberTwo();
        mooDialogue();
      "
    >
      2
    </button>
    <button
      class="grid-item"
      @click="
        addNumberThree();
        mooDialogue();
      "
    >
      3
    </button>
    <button
      class="grid-item"
      @click="
        addNumberFour();
        mooDialogue();
      "
    >
      4
    </button>
    <button
      class="grid-item"
      @click="
        addNumberFive();
        mooDialogue();
      "
    >
      5
    </button>
    <button
      class="grid-item"
      @click="
        addNumberSix();
        mooDialogue();
      "
    >
      6
    </button>
    <button
      class="grid-item"
      @click="
        addNumberSeven();
        mooDialogue();
      "
    >
      7
    </button>
    <button
      class="grid-item"
      @click="
        addNumberEight();
        mooDialogue();
      "
    >
      8
    </button>
    <button
      class="grid-item"
      @click="
        addNumberNine();
        mooDialogue();
      "
    >
      9
    </button>
    <button
      class="grid-item"
      @click="
        addMultiplication();
        mooDialogue();
      "
    >
      *
    </button>
    <button class="grid-item" @click="addNumberZero(), mooDialogue()">0</button>

    <!-- override styling to fit in more text for the element below -->
    <button
      class="grid-item"
      style="padding: 2px"
      @click="
        addMoo();
        mooDialogue();
      "
    >
      Moo
    </button>
  </div>
  <input
    style="width: 268px; margin-bottom: 7px"
    v-model="displayNumbers"
    @input="updateNumbers, mooDialogue()"
    type="text"
  />

  <div>
    <button class="button-35" @click="cowculate">Cowculate</button>
    <button class="button-35" style="margin-left: 5px" @click="clearField">
      Reset
    </button>
    
    <h2
      v-if="showText"
      style="
        padding-top: 5px;
        padding-bottom: 3px;
        margin-right: 20%;
        margin-left: 20%;
        font-size: 20px;
        color: #000;
      "
    >
      {{ numbers }}
    </h2>
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
    mooDialogue() {
      this.showText = true;

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
  let moos = 0;
  let result = 1;
  let temp = '';

  for (let i = 0; i < this.numbers.length; i++) {
    const item = this.numbers[i];

    if (typeof item === 'number') {
      temp += item;
    } else if (item === 'Moo') {
      moos++;
    } else if (item === '*') {
      // multiply the current value of temp by result
      result *= parseInt(temp);
      // reset temp
      temp = '';
    } else {
      console.log(`Unexpected item in array: ${item}`);
    }
  }

  // handle the final value of temp (if there is one)
  if (temp !== '') {
    result *= parseInt(temp);
  }

  console.log(`${moos} Moos`);
  console.log(result);
  this.numbers = ["Result: " + result + " Moo's: " + moos];
  return this.numbers;
}
    
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
.grid-item:hover {
  background-color: rgba(186, 186, 186, 0.318);
}
</style>