

<template>
    <div style="background-color: rgb(255, 255, 255);">
      <!-- Your HTML goes here -->
      <h1 style="padding-top: 1.5em; color: #000;"> Welcome to the cards page! German game Skat </h1>
      <br>
      The cat says {{ cat }}, this project was started 20/11/2023.
      Working on the logic of how to make the opponents make decisions. The dealer is randomly selected. 
      <br>
      <br>
      <div class="cards"></div>
      
<br>
      <p>
        Initially the goal will be to play against the computer.     
      
      </p>
      <br>
      <div v-if="dealer===0"><b>(Dealer) You:</b> {{ player1 }}</div>
      <div v-else><b>You:</b> {{ player1 }}</div>
  <br>
  <br>
      <div v-if="dealer===1"><b>(Dealer) Player 2:</b> {{ player1 }}</div>
      <div v-else><b>Player 2:</b> {{ player2 }}</div>
  <br>
  <br>
      <div v-if="dealer===2"><b>(Dealer) Player 3:</b> {{ player3 }}</div>
      <div v-else><b>Player 3:</b> {{ player3 }}</div>      
<br>
<br>
     <b>Skat cards:</b> {{ skat }}
<br>
<br>
      <label for="textBox">Make your bid: </label>
      <input type="text" v-model="bid" />
      <button class="button-35" style="margin-left: 0.25em; height: 0.5em;" @click="placeBid()"> Submit </button>
<br>
<br>
     {{ bid }}
     <div v-if="validBid">You submitted a valid bid of: {{ bid }}
      <br>
      <br>
      Your opponent bids: <b>{{ opponentBid }}</b>
    
    </div>
     

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
        dealer: 0,
        skat: [],
        bidsAllowed: [18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60],
        bid: 0,
        validBid: false,
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
    if (this.bidsAllowed.includes(parseInt(this.bid))){
      this.validBid = true;
      // run logic for opponents bid
      this.firstOpponentBid();
      // logic to make bid
    } else{
      alert("Please enter a valid bid, they are: " + this.bidsAllowed)
    }
  },
    firstOpponentBid(){
      // decide if they pass or not
      let pass = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      if (pass === 0){
        this.opponentBid = "pass";
      } else{

      // logic to make bid, default player 2 for now
      let index = this.bidsAllowed.indexOf(parseInt(this.bid));
      console.log(index)
      // where index is the minimum
      let randomIndex = Math.floor(Math.random() * (this.bidsAllowed.length - index)) + index;
      this.opponentBid = this.bidsAllowed[randomIndex];


      }
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

      this.dealer = Math.floor(Math.random() * (2 - 0 + 1)) + 0; 
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