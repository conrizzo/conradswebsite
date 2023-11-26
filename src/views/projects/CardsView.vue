

<template>
  <div style="background-color: rgb(255, 255, 255);">
    <!-- Your HTML goes here -->
    <h1 style="padding-top: 1.5em; color: #000;"> Welcome to the cards page! German game Skat, and perhaps other card games. </h1>
    <br>
    <p class="paragraph-text">
    The cat says {{ cat }}, this project was started <b>20/11/2023</b>... 
    This is using Vue.js, JavaScript, TypeScript, object oriented programming, and multiple classes to create players in a game of Skat.
  </p>
    <br>
    <br>
   <p class="paragraph-text">
    Working on the logic of how to make the opponents make decisions. The dealer is randomly selected. The logic to make this work takes
    some thinking, also because I don't even know the specific rules to play Skat and all the variations of it I need to look these up and verify I'm making this correctly. 
    Making things look beautiful will be a further step here.
    Once a winning bid is placed the user can't input anymore into the bid box.
    
    
      Initially the goal will be to play against the computer.

    </p>
   
    
   
   
    
  
    <div class="card-info">
    <div v-if="dealer === 1"><b>(Dealer) Player 2</b> is holding {{ player2.cards.length }} cards.</div>
    <div v-else><b>Player 2</b> is holding {{ player2.cards.length }} cards.</div>
    <br>
    <div v-if="dealer === 2"><b>(Dealer) Player 3</b> is holding {{ player2.cards.length }} cards.</div>
    <div v-else><b>Player 3</b> is holding {{ player3.cards.length }} cards.</div>
    <br>
    <b>Skat cards:</b> Unbekannt! Unknown! {{ skat.length }} cards
  </div>

    <br>
    <br>
    The card point values: {{ cardValues }} <!-- cardValues['K'] -->
    <br>
    <br>
    <label for="inputField"><b>Make your bid:</b> </label>
    <input type="text" id="inputField" v-model="bid" :disabled="winningBid" />
    <button class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;"
      @click="placeBid()">{{ submitButtonText }}</button>
    <button class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;"
    @click="passBid()">Pass</button>
    <br>
    <br>
    <div v-if="winningBid" style="color: blue;">{{ informationMessage }}  
    <br>

    <button @click="takeCardsOrPass();" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em; margin-bottom: 0.5em;">Take cards</button>
    <button class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em; margin-bottom: 0.5em;">Pass, don't take cards</button>

   </div>   
    <div v-if="validBid">You submitted a valid bid of: <b>{{ bid }}</b>
      <br>
      <br>
      Player 2 bids: <b>{{ opponentBid }}</b>
      <br>
      <br>
      Player 3 bids: <b>{{ opponentTwoBid }}</b>
      <br>
      <br>
      
    </div>
    <div v-if="winningBid">Your bid of {{ bid }} wins!</div>
    <div v-else-if="opponentBid !== 'pass' || opponentTwoBid !== 'pass'">
      {{ biddingMessage }}
      <button class="button-35" style="margin-left: 0.25em; height: 0.5em;" @click="this.stopBid();">Stop bidding</button>
    </div>
    <div v-if="dealer === 0"><b>(Dealer) Your cards:</b></div>
    <div v-else><b>Your cards:</b></div>
    <br>

    <div style=""><b>{{ player1.cards.length }} cards are in your hand.</b>
    </div>
    <div class="cards">
      
      <div class="card-container">
        
        <div v-for="(svgFile, index) in imagesOfCardsInhand" :key="svgFile" class="card-item" :style="{ marginTop: `${index * (Math.random() - 0.1) * 0.1}em`, transform: `rotate(${(index-4) * 3}deg)` }">
          <img :src="svgFile" alt="SVG Image" />
      </div>  
    </div>
  </div>
  
  </div>
</template>
  
<script>

import { Player, DeckOfCards } from "@/components/CardGame/PlayerClass.ts";
import "@/assets/globalCSS.css";

export default {
  name: 'YourComponentName',
  
  data() {
    return {

      svgFiles: [],
      imagesOfCardsInhand: [],

      players: [],
      
      // Your data properties go here
      cat: "meow",
      // messages
      submitButtonText: "Submit this bid",
      biddingMessage: "You have been outbidded, do you want to enter a higher bid? or stop bidding?",
      informationMessage: "You won the bid! Take Skat cards and add them to your hand? or pass?",

      // cards
      firstCardDeck: [],
      
      skat: [],

      // player actions
      // initialize an empty hand for the object to begin with
      player1: {cards:[]},
      player2: {cards:[]},
      player3: {cards:[]},
      
      player1Cards: [],
      player2Cards: [],
      player3Cards: [],
      player1Pass: false,
      player2Pass: false,
      player3Pass: false,
      dealer: 0,
      bidsAllowed: [18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60],
      currentOpponentBids: [],
      bid: 0,
      lastBid: -1,
      validBid: false,
      opponentBid: 'pass',
      opponentTwoBid: 'pass',

      winningBid: false,

      pass: false,

      // as object
      //cardValues: {'J': 2,'A': 11,'10': 10,'K': 4,'Q': 3,'9': 0,'8': 0,'7': 0},

      // as map
      cardValues: new Map([
        ['J', 2],
        ['A', 11],
        ['10', 10],
        ['K', 4],
        ['Q', 3],
        ['9', 0],
        ['8', 0],
        ['7', 0]
      ]),
      

    };
  },
  methods: {
    updateCards() {
      // for now set the associated image values for each card in hand to empty and update all the image values below
      this.imagesOfCardsInhand = [];

      this.svgFiles.forEach(svgFile => {
        const fileName = svgFile.slice(0, -13);  // Remove the last 12 characters 'iwoeruwru.svg' (including the dot)
       
        this.player1.cards.forEach(card => {
          if (fileName.includes(card[0]) && fileName.includes(card[1]) && !fileName.includes('2')) {
            console.log(svgFile);
            this.imagesOfCardsInhand.push(svgFile);
          }
        })
      });
    },
   
    
    
    passBid(){
      this.player1Pass = true;

      let isSixtyIncluded = this.currentOpponentBids.includes(60);
      // opponenet computers bid until one wins or passes
      while ((this.opponentBid !== 'pass' || this.opponentTwoBid !== 'pass') || isSixtyIncluded) {
        this.firstOpponentBid();
      }
      

    },
    placeBid() {   

      if (this.bidsAllowed.includes(parseInt(this.bid)) && (this.bid > this.lastBid)) {
        this.validBid = true;
        this.lastBid = this.bid;
        // run logic for opponents bid
        this.firstOpponentBid();
        // logic to make bid

      } else if (this.bid <= this.lastBid) {
        alert("You need to enter a higher valid bid, it can't be the same number, or lower than the opponents bid: " + this.bidsAllowed)
      } else {
        alert("Please enter a valid bid, they are: " + this.bidsAllowed)
      }
      

    },
    takeCardsOrPass() {
      // if they take the cards, add them to their hand
      // if they pass, add them to the skat
          this.informationMessage = "You took the SKAT cards! They are the [" + this.skat[0][0] + " of " + this.skat[0][1] + 
          "] and the [" + this.skat[1][0] + " of " + this.skat[1][1] + "]";
          this.player1.cards = this.player1.cards.concat(this.skat);
          this.updateCards();
          this.skat = [];

          
        
    },
    firstOpponentBid() {
      // decide if they pass or not
      if (this.player2Pass !== true) {
        this.secondOpponentBid();        
        return;
      }

      let pass = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      if (pass === 0) {
        this.opponentBid = "pass";
        this.secondOpponentBid();
      } else {

        // set this to 1 higher than the bid
        let index = this.bidsAllowed.indexOf(parseInt(this.bid));

        // where index is the minimum
        //let randomIndex = Math.floor(Math.random() * (this.bidsAllowed.length - index)) + index;
        let randomIndex = index + 1;
        this.opponentBid = this.bidsAllowed[randomIndex];

        this.currentOpponentBids.push(['p2', this.opponentBid]);


        this.submitButtonText = "Submit a new higher bid?";

        if (this.player3Pass !== true) {
          this.secondOpponentBid();
        }
      }
    },
    secondOpponentBid() {
      // decide if they pass or not
      let pass = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      if (pass === 1) {
        this.opponentTwoBid = "pass";
        this.player3Pass = true;

        if (this.opponentBid === 'pass' & this.opponentTwoBid === 'pass') {
          this.winningBid = true;
        }
        
      } else {
        // set this to 1 higher than the bid
        let index = this.bidsAllowed.indexOf(parseInt(this.bid)) + 1;
       
        // where index is the minimum
        let randomIndex = index + 1;
        this.opponentTwoBid = this.bidsAllowed[randomIndex];

        this.currentOpponentBids.push(['p3', this.opponentTwoBid]);

        // change message 
        this.submitButtonText = "Submit a new higher bid?";
      }
      // compare bids
      if ((this.opponentBid > this.bid) || (this.opponentTwoBid > this.bid)) {
        //this.winningBid = false;
      }
    },

    stopBid() {
      this.biddingMessage = "You have decided to stop bidding!"
    },
  },
  computed: {
    // Your computed properties go here
    


  },
  mounted() {
    
    const svgContext = require.context("@/components/CardGame/card_images", false, /\.svg$/);
    this.svgFiles = svgContext.keys().map(svgContext);
    //console.log(this.svgFiles.map(svgFile => svgFile.match(/\/([^/]+)\./)[1]));

   
    
    
    this.DeckOfCards = new DeckOfCards([]);    
    
    this.DeckOfCards.createCards()
    this.DeckOfCards.shuffle();    

    // Code to run when the component is mounted goes here
    

    this.dealer = Math.floor(Math.random() * (2 - 0 + 1)) + 0;



    // Deal the cards
    //this.player1Cards = this.firstCardDeck.splice(0, 10);
    //this.player2Cards = this.firstCardDeck.splice(0, 10);
    //this.player3Cards = this.firstCardDeck.splice(0, 10);
    //this.skat = this.firstCardDeck.splice(0, 2);

    this.player1 = new Player("Conrad", this.player1Cards, 0);
    this.player2 = new Player("Alice", this.player2Cards, 0);
    this.player3 = new Player("Bob", this.player3Cards, 0);
    this.players.push(this.player1, this.player2, this.player3);
    //console.log(this.players)
    

    this.player1.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
    this.player2.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
    this.player3.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
    this.skat = this.DeckOfCards.theDeckOfCards.splice(0, 2);

    
    this.player1.displayInfo();

    this.updateCards();
   
      
   

   
  

    
  },
};
</script>
  
<style scoped>
/* Your CSS goes here */
.cards {
  margin: 0 auto;
  display: flex;
  justify-content: center; /* Align the content to the left */
  align-items: center;
  max-width: 25em;  
}

.card-container {
  display: flex;
  margin-top: 2em;
}

.card-item {
  margin-right: 10px; /* Optional: Add margin between cards */
  width: 50px; /* Adjust the width as desired */  
}

.card-info {
  border: 0.1em solid #ccc; /* Add border around the content */
  border-radius: 0.5em;
  padding: 10px; /* Add padding to create space between the content and the border */
  text-align: left; /* Align the text to the left */
  width: 20em;
  margin-left: 1em;
}

.paragraph-text{
  max-width: 50em;
}

@media screen and (max-width: 600px) {
  .card-item {
    margin-right: 10px; /* Optional: Add margin between cards */
    width: 20px; /* Adjust the width as desired */  
  }
  .cards {
  margin-left: -1em;
  margin-top: 2em;
  }
}

</style>