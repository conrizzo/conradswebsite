

<template>
  
  <div id="body">
    <!-- Your HTML goes here -->
    <div>
        <h1 class="title">Skat (under construction...)</h1>
        <br>
      <div style="background-color: rgba(0,0,0,0.5); padding: 0.5em; padding-top: 1.5em; max-width: auto;">

        <p style="color: #fff;" class="paragraph-text">This project was started <b>20/11/2023</b>... 
          <br><span style="margin-left: 1em; display: inline-block;">Made with Vue.js, JavaScript, TypeScript and Object-oriented programming</span>
          <br><span style="margin-left: 2em; display: inline-block;">Will be a <a class="text-links" href="https://en.wikipedia.org/wiki/Skat_(card_game)">Skat</a> game when finished?</span>
        </p>

          <p style="color: #fff;" class="paragraph-text">
          

        </p>
      </div>
    </div>
   
   
    
  
    
    <br>
    <br>
    <!-- The card point values: {{ cardValues }} --> <!-- cardValues['K'] -->
    <br>
    <br>
    <div class="input-container">
      <div>
          <label style="margin-right: 0.3em;" for="inputField"><b>Make your bid:</b></label>
          <input class="custom-input" type="text" id="inputField" v-model="this.player1.bid" :disabled="winningBid"/>
          

          <button class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;"
            @click="placeBid()">{{ submitButtonText }}</button>
          <button type="button" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;"
          @click="passBid()">Pass</button>
          
      </div>
        <br>
        <br>
        <div v-if="winningBid" 
        style="color: #ffffff; background-color: rgb(198, 111, 58); border-radius: 1em; padding-top: 0.5em; margin-bottom: 0.5em;">
        <b> {{ informationMessage }} </b> 
        <br>

        <button type="button" @click="takeCardsOrPass();" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em; margin-bottom: 0.5em;">Take cards</button>
        <button type="button" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em; margin-bottom: 0.5em;">Pass, don't take cards</button>

      </div>   
        <div v-if="validBid">You submitted a valid bid of: 
          <b>{{ this.player1.bid }}</b>
          <br>
          <br>
                <div v-if="this.player2.pass === false">
                  Player 2 bids: <b>{{ this.player2.bid }}</b>
                </div>
                <div v-else> Player 2: Pass</div>
          <br>
          <br>
                <div v-if="this.player3.pass === false">
                  Player 3 bids: <b>{{ this.player2.bid }}</b>
                </div>
                <div v-else> Player 3: Pass</div>
          <br>
          <br>
          
        </div>
        <div v-if="winningBid">Your bid of {{ this.player1.bid }} wins!</div>
        <div v-else-if="this.player1.pass !== true || this.player2.pass !== true">
          {{ biddingMessage }}
          <button type="button" class="button-35" style="margin-left: 0.25em; height: 0.5em;" @click="this.stopBid();">Stop bidding</button>
        </div>
        <br>
        <div v-if="dealer === 0"><b>(Dealer) Your cards:</b></div>
        <div v-else><b>Your cards:</b></div>
        <br>
        
        <div><b>{{ player1.cards.length }} cards are in your hand.</b>
          <br>
          {{ this.player1.cards }}
        </div>
       
    </div>
   
    <div class="cards">
      
      <div class="card-container">

          <!-- by using computed for cardStyles when this only changes styles when cards are changed, not when other things are interacted with -->
          <div v-for="(svgFile, index) in imagesOfCardsInhand" :key="svgFile" @click="removeImage(index)" class="card-item" :style="{ 'margin-left': marginLeft, ...cardStyles[index] }">
            <img :src="svgFile" alt="" />
            <!-- alt="" for now so after clicking it is empty -->
            
          </div>
          
    
      </div>
      
  </div>
  <div class=select-options>
        <h2><u>Options</u></h2>
        <div class="button-container">
          <button type="button" @click="increaseMarginLeft('+');" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">+ spacing</button>
            <button type="button" @click="increaseMarginLeft('-');" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">- spacing</button>
          </div>
            <button type="button" @click="dealCards()" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">Deal new cards</button>
        </div>
    <div class='interactions' >
        <img class="saloon-image" :src="saloonImage" alt="Saloon Image" />
        
        <div class="card-info" style="color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0.33);">      
          <div v-if="dealer === 1"><b>(Dealer) Player 2</b> is holding {{ player2.cards.length }} cards.</div>
          <div v-else><b>Player 2</b> is holding {{ player2.cards.length }} cards.</div>
          <br>
          <div v-if="dealer === 2"><b>(Dealer) Player 3</b> is holding {{ player2.cards.length }} cards.</div>
          <div v-else><b>Player 3</b> is holding {{ player3.cards.length }} cards.</div>
          <br>
          <b>Skat cards:</b> Unbekannt! Unknown! {{ skat.length }} cards
          
        </div>

        
      
  </div>
<div class="footer-space-vertical">
  <FirstFooter></FirstFooter>
</div>
</div>

</template>
  
<script>

import { Player, DeckOfCards } from "@/components/CardGame/PlayerClass.ts";
import "@/assets/globalCSS.css";

import saloonImage from '@/components/CardGame/decoration_images/Saloon.jpg';



import FirstFooter from "@/components/FirstFooter.vue";

export default {
  name: 'SkatGame',
  
  components: {
    FirstFooter,
  },
  
  data() {
    return {
      marginLeft: '0.5em',
     

      saloonImage: saloonImage,
      

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
      
     
    
      dealer: 0,
      bidsAllowed: [18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60],
      currentOpponentBids: [],
      bid: 0,
      lastBid: -1,
      validBid: false,
      

      winningBid: false,

      pass: false,

      // as object
      //cardValues: {'J': 2,'A': 11,'10': 10,'K': 4,'Q': 3,'9': 0,'8': 0,'7': 0},
      cardSuitValues: {'spades': 2, 'hearts': 3, 'diamonds': 4, 'clubs': 1},

      // in Skat jack is the trump card in this game format
      cardRankValues: {'J': 100,'A': 13,'10': 10,'K': 12,'Q': 11,'9': 9,'8': 8,'7': 7},
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
  computed:{
    cardStyles()
      // '_' as a placeholder to indicate never used
      {
      return this.imagesOfCardsInhand.map((_, index) => ({
        marginTop: `${index * (Math.random() - 0.1) * 0.1}em`,
        transform: `rotate(${(index - 4) * 3}deg)`
      }));
    }
  },
  methods: {
    removeImage(index) {
      
      console.log('------------', this.imagesOfCardsInhand[index].slice(0, -13).slice(5));
      // Removes element at the index of the array of images
      //this.imagesOfCardsInhand.splice(index, 1);

      const holder = this.imagesOfCardsInhand[index].slice(0, -13).slice(5);
      this.player1.cards = this.player1.cards.filter(card => {
        return !(holder.includes(card[0]) && holder.includes(card[1]));
      });

      // remove actual visual card from the screen
      this.imagesOfCardsInhand.splice(index, 1);

      //console.log(this.imagesOfCardsInhand);
      /*
      for (let i = 0; i < this.imagesOfCardsInhand.length; i++) {
        
        let holder = this.imagesOfCardsInhand[index].slice(0, -13).slice(5);
        this.imagesOfCardsInhand[index].slice(0, -13).slice(5);
        console.log(holder)
        if (this.player1.cards && this.player1.cards[i] && (holder.includes(this.player1.cards[i][0]) && holder.includes(this.player1.cards[i][1]))){
          console.log(holder, this.player1.cards[i][0], this.player1.cards[i][1])
          
          
          //this.player1.cards.slice(i, 1);
          console.log("TEST", this.player1.cards[i][0], this.player1.cards[i][1], this.player1.cards[i])
          this.player1.cards.splice(i, 1);
        }
        
      }
      console.log(this.player1.cards)
      */
},
    increaseMarginLeft(symbol) {
      const currentMarginLeft = parseFloat(this.marginLeft);
      if (symbol === '+'){
      const newMarginLeft = currentMarginLeft + 0.5;
      this.marginLeft = `${newMarginLeft}em`;
      } else {
        const newMarginLeft = currentMarginLeft - 0.5;
        this.marginLeft = `${newMarginLeft}em`;
      }
    },
    updateCards() {
      // for now set the associated image values for each card in hand to empty and update all the image values below
      this.imagesOfCardsInhand = [];

      this.svgFiles.forEach(svgFile => {
        const fileName = svgFile.slice(0, -13);  // Remove the last 12 characters 'iwoeruwru.svg' (including the dot)
       
        this.player1.cards.forEach(card => {
          if (fileName.includes(card[0]) && fileName.includes(card[1]) && !fileName.includes('2')) {
            //console.log(svgFile);
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
        this.opponent();
      }
      

    },
    placeBid() {   
      console.log(this.player1.bid)
      if (this.bidsAllowed.includes(parseInt(this.player1.bid)) && (this.player1.bid > this.lastBid)) {
        // reveals more information for step 2 of the game
        this.validBid = true;
        this.lastBid = this.player1.bid;
        // run logic for opponents bid
        this.opponent(2);
        // logic to make bid

      } else if (this.bid <= this.lastBid) {
        alert("You need to enter a higher valid bid, it can't be the same number, or lower than the opponents bid: " + this.bidsAllowed)
      } else {
        alert("Please enter a valid bid, they are: " + this.bidsAllowed)
      }     

    },
    generateRandomBoolean() {
      const randomBoolean = Math.random() < 0.5; // Generates random true or false
      return randomBoolean;
    },
    opponent(player) {
      console.log(player)
      
      // player 2 is the computer
      // player 3 is the computer
      
      let randomBoolean = this.generateRandomBoolean();
      
      let highestBid = Math.max(this.player1.bid, this.player2.bid, this.player3.bid);

      console.log("Random", randomBoolean)
      if (randomBoolean === true && this.player2.bid !== "Pass!") {
        this.player2.bid = this.bidsAllowed.find(bid => bid > highestBid);
      } else {
        this.player2.pass = true;
        
      }

      randomBoolean = this.generateRandomBoolean();
      if (randomBoolean === true && this.player3.bid !== "Pass!") {
        this.player3.bid = this.bidsAllowed.find(bid => bid > highestBid);
      } else {
        this.player3.pass = true;        
      }

      if (this.player2.pass === true && this.player3.pass === true) {
        this.winningBid = true;
      }
       
    },
    takeCardsOrPass() {
      // if they take the cards, add them to their hand
      // if user presses button more than once when there are no skat cards does nothing else
      if (this.skat.length !== 0) {
          this.informationMessage = "You took the SKAT cards! They are the [" + this.skat[0][0] + " of " + this.skat[0][1] + 
          "] and the [" + this.skat[1][0] + " of " + this.skat[1][1] + "]";
          this.player1.cards = this.player1.cards.concat(this.skat);
          this.updateCards();
          this.skat = [];
      }         
        
    },
    
    
    displayInfo(p,c,v) {
     console.log('Player Information: \n' + `Player: ${p}\nCards: ${c}\nValues: ${v}`);
     
    } ,

    stopBid() {
      this.biddingMessage = "You have decided to stop bidding!"
    },
    dealCards() {
      this.skat = []

      this.DeckOfCards = new DeckOfCards([]);  

      this.DeckOfCards.createCards()
      this.DeckOfCards.shuffle();   

      this.dealer = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      this.player1 = new Player("Conrad", this.player1Cards, 0);
      this.player2 = new Player("Alice", this.player2Cards, 0);
      this.player3 = new Player("Bob", this.player3Cards, 0);
      this.players.push(this.player1, this.player2, this.player3); 

      this.player1.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
      this.player2.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
      this.player3.cards = this.DeckOfCards.theDeckOfCards.splice(0, 10);
      this.skat = this.DeckOfCards.theDeckOfCards.splice(0, 2);     

      this.updateCards();
      this.displayInfo(this.player1.name, this.player1.cards, this.player1.card_values);
      },
  },
 
  mounted() {
    document.title = "Skat"; // Set the document title to the value of the `title` property

    const svgContext = require.context("@/components/CardGame/card_images", false, /\.svg$/);
    this.svgFiles = svgContext.keys().map(svgContext);

   
    //console.log(this.svgFiles.map(svgFile => svgFile.match(/\/([^/]+)\./)[1]));

    this.dealCards();
    
    
    

    // Code to run when the component is mounted goes here
    

    


    // Deal the cards
    //this.player1Cards = this.firstCardDeck.splice(0, 10);
    //this.player2Cards = this.firstCardDeck.splice(0, 10);
    //this.player3Cards = this.firstCardDeck.splice(0, 10);
    //this.skat = this.firstCardDeck.splice(0, 2);

    
    //console.log(this.players)
    

    

    
    //this.player1.displayInfo();

    this.updateCards();
   
      
   

   
  

    
  },
};
</script>
  
<style scoped>


.title{
  padding-top: 1.5em; 
  color: rgb(255, 255, 255); 
  font-size: 2.5em; 
  line-height: 1.1em; 
  font-family: 'Helvetica';
}
#body {  
  /*
  background-color: rgb(198, 111, 58); */
  background-image:  url('@/components/CardGame/decoration_images/pexels-pixabay-326311.jpg');
  background-size: 100% 100%;
}
.button-35{
  border-radius: 0.4em;
}
.button-35:hover{
  box-shadow: #ffffff 0 0 0 2px, transparent 0 0 0 0;  
}
.interactions{
  margin-top: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add a defined width to the container */
  width: 100%;
}

.custom-input{  
  width: 4em;
  font-size: 1.5em;
  border-radius: 0.25em;
  margin-right: 1em;
  border: none;
  outline: none;
  text-align: center;
}

.button-container {
  display: flex;
  gap: 0.25em;
  margin-top: 0.5em;
}

/* Your CSS goes here */
.cards {
  
  display: flex;
  justify-content: center; /* Align the content to the left */
  align-items: center;  
  z-index: 4;  
  top: 55vh;
  position: relative;
  transform:scale(0.8); 
}

.card-container {
  display: flex;
  margin-top: 2em;
}

.card-item {
  cursor: grab;
  width: 5em; /* Adjust the width as desired */
  margin-left: 1em;  
  
}
.card-item:hover{
  filter: brightness(80%);
}


.card-info {
  border: 0.1em solid #ccc; /* Add border around the content */
  left: 4.5%;
  border-radius: 0.5em;
  padding: 1em; /* Add padding to create space between the content and the border */
  text-align: left; /* Align the text to the left */ 
  position: absolute;
  top: 43svh;
  
  
  z-index: 2;
}

.paragraph-text{
  max-width: 80em;
  font-size: 1.5em;
}

.input-container{
  background: rgba(0, 0, 0, 0.33); 
  color: #fff;
  width: 25em;
  margin: 0 auto;
  padding: 0.5em;
  border-radius: 1em;  
  margin-top: -0.25em;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  z-index: 2;
  
}

.select-options{
  background: rgba(0, 0, 0, 0.33); 
  color: #fff;
  width: 25em;
  margin: 0 auto;
  padding: 0.5em;
  border-radius: 1em;  
  margin-top: -0.25em;
  position: absolute;
  top: 130vh;
  left: 85%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  z-index: 5;  
}

.saloon-image{
  border-radius: 2em;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
}

.footer-space-vertical{
    margin-top: 75vh;
  }

@media screen and (max-width: 1000px) {

  .paragraph-text{
  max-width: 80em;
  font-size: 1em;
 }

  .card-item {    
    width: 1.25em; /* Adjust the width as desired */  
  }
  .cards { 
  top: 130vh; 
  width: 130%;
  left: -17vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  
  position: absolute;
  overflow: hidden;
  
  /*min-width: calc(100% + 10em); */
  
  }
  .input-container{    
    z-index: 4;
    position: absolute;
    top: 112vh;
  }
  .footer-space-vertical{
    margin-top: 150vh;
  }
  .saloon-image{   
    border-radius: 2em;
    top: 100vh;
    max-width: 100%;
    
  }
  .card-info {
    position: relative;
    top: -8svh;
    display: grid;
    place-items: center;
    left: initial; /* reset */
    width: 24em;
  }

  .select-options{
    left: 50%;
    top: 170vh;
    z-index: 5;
  }
}
</style>