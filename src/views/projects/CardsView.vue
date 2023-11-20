

<template>
    <div>
      <!-- Your HTML goes here -->
      <h1 style="padding-top: 1.5em; color: #000;"> Welcome to the cards page! German game Skat </h1>
      The cat says {{ cat }} 
      <br>
      <br>
      <div class="cards"> Deck of cards is: <br> {{ this.shallowFirstDeckCopy  }}</div>
      {{ firstCardDeck.length }}
<br>
      <p>
        Initially the goal will be to play against the computer.     
      
      </p>
      <br>
      <b>Player 1:</b> {{ player1 }}
      <br>
      <br>
      <b>Player 2:</b> {{ player2 }}
      <br>
      <br>
      <b>Player 3:</b> {{ player3 }}
<br>
<br>
      {{ skat }}
<br>
<br>
      <label for="textBox">Make your bid: </label>
      <input type="text" v-model="bid" />
      <button class="button-35" style="margin-left: 0.25em; height: 0.5em;" @click="placeBid()"> Submit </button>
<br>
<br>
     {{ bid }}
    </div>

  </template>
  
  <script>
  import NodeGraph from "@/components/DirectedGraphing/NodeGraph.vue";

  export default {
    name: 'YourComponentName',
    components: NodeGraph,
    data() {
      return {
        // Your data properties go here
        cat: "meow",
        firstCardDeck: [],
        shallowFirstDeckCopy: [],
        player1: [],
        player2: [],
        player3: [],
        skat: [],
        bidsAllowed: [18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60],
        bid: 0,
      };
    },
    methods: {
      // This is set up as the traditional German card game Skat!
      createCards(){
        let suits = ["hearts", "diamonds", "spades", "clubs"]
        let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
        for (let i = 0; i < suits.length; i++) {                  
          for (let j = 5; j < cards.length; j++) {
            this.firstCardDeck.push([suits[i], cards[j]]);
          }
        }
      },
      shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

    return array;
   },
   placeBid(){
      // logic to make bid
   },
    },
    computed: {
      // Your computed properties go here
      updateCards() {
        return this.firstCardDeck;
      },
    },
    mounted() {
      // Code to run when the component is mounted goes here
      this.createCards();
      this.shuffle(this.firstCardDeck);
      this.shallowFirstDeckCopy = this.firstCardDeck;
      // Deal the cards
      this.player1 = this.firstCardDeck.splice(0, 10);
      this.player2 = this.firstCardDeck.splice(0, 10);
      this.player3 = this.firstCardDeck.splice(0, 10);
      this.skat = this.firstCardDeck.splice(0, 2);
    },
  };
  </script>
  
  <style scoped>
  /* Your CSS goes here */
  .cards{    
  
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 25em;
  }
  </style>