<template>
  <div id="body">
    <!-- Your HTML goes here -->
    <div>
      <h1 class="title">Blackjack Game</h1>
      <span class="title">(Shamokin, Pennsylvania Alpha Edition)</span>
      <br>
      <div style="background-color: rgba(0,0,0,0.5); padding: 0.5em; padding-top: 1.5em; max-width: auto;">
        <h1 style="color: #fff;">This is now running a game in backend code.</h1>
        <div style="display: flex; justify-content: center; align-items: center;">
          <p style="color: #fff;">Press 'DEAL' to begin. Note: debugging this for final polishing so won't fully work
            for a bit. July 2024 -
            This now is a fullstack game that uses a gamestate in a Redis database.
            It initializes the class for the game action the frontend sends, and all the actual game logic runs in
            backend Python code,
            then returns the gamestate to the frontend. 100% of the game logic is run serverside in python.
          </p>
        </div>
      </div>
    </div>
    <div class="cards-dealer">
      <div class="card-container">
        <!-- by using computed for cardStyles when this only changes styles when cards are changed, not when other things are interacted with -->
        <div v-for="(svgFile, index) in filteredDealerHand" :key="svgFile" class="card-item"
          :style="{ 'margin-left': marginLeft, ...cardStyles[index], zIndex: index + 1 }">
          <img :src="svgFile" alt="" />
        </div>
      </div>
    </div>
    <br>
    <br>
    <!-- The card point values: {{ cardValues }} --> <!-- cardValues['K'] -->
    <br>
    <br>
    <div class="grid-container">
      <div class="input-container">
        <span style="color: #fff; font-size: 2rem;">Result: {{ currentMessage }}</span>
        <span style="color: #fff; font-size: 2rem;">Chips: {{ playerChips }}</span>
        <span style="color: #fff; font-size: 2rem;">Bet: {{ playerBetInputAmount }}</span>

        <span v-if="this.showAllDealerCards">
          Dealer cards: {{ dealerHand }}
        </span>

        <span>Player cards: {{ playerHand }}</span>
        <div>
          <label style="margin-right: 0.3em;" for="inputField"><b>Amount to Bet:</b></label>
          <input class="custom-input" type="text" id="inputField" v-model.number="playerBetInputAmount"
            placeholder="0" />

          <button class="button-35" @click="Start()"
            style="margin-left: 0.25em; height: 0.5em; margin-top: 0.25em;">DEAL</button>
          <button class="button-35" @click="Reset()"
            style="margin-left: 0.25em; height: 0.5em; margin-top: 0.25em;">Reset</button>
          <button class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;" @click="Bet()">{{
          submitButtonText }}</button>
          <br>
          <button @click="Stay()" type="button" class="button-35"
            style="margin-left: 0.25em; height: 0.5em; margin-top: 0.25em;">Stay</button>
          <button @click="Hit()" type="button" class="button-35"
            style="margin-left: 0.25em; height: 0.5em; margin-top: 0.25em;">Hit</button>
          <!--<button type="button" class="button-35" style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;"
          @click="passBid()">Pass</button>-->
        </div>
        <br>
        <br>
      </div>
    </div>
    <div class="cards">
      <div class="card-container">
        <!-- by using computed for cardStyles when this only changes styles when cards are changed, not when other things are interacted with -->
        <div v-for="(svgFile, index) in imagesOfCardsInhand" :key="svgFile" @click="removeImage(index)"
          class="card-item" :style="{ 'margin-left': marginLeft, ...cardStyles[index] }">
          <img :src="svgFile" alt="" />
          <!-- alt="" for now so after clicking it is empty -->
        </div>
      </div>
    </div>
    <div class='interactions'>
      <img class="saloon-image" :src="saloonImage" alt="Saloon Image" />
    </div>
  </div>


  <div class=select-options>
    <h2><u>Options</u></h2>
    <div class="button-container">
      <button type="button" @click="increaseMarginLeft('+');" class="button-35"
        style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">+ spacing</button>
      <button type="button" @click="increaseMarginLeft('-');" class="button-35"
        style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">- spacing</button>
    </div>
    <!-- <button type="button" @click="dealCards()" class="button-35"
      style="margin-left: 0.25em; height: 0.5em; margin-top: 0.5em;">Deal new cards</button> -->
  </div>
</template>

<script>
import { Player, DeckOfCards, CardDeck } from "@/components/CardGame/PlayerClass.ts";
import "@/assets/globalCSS.css";
import saloonImage from '@/components/CardGame/decoration_images/Saloon.jpg';

export default {
  name: 'FullStack BlackJack Game',

  components: {

  },

  data() {
    return {
      marginLeft: '-7.5rem',
      theResponse: [],
      currentMessage: '',
      showAllDealerCards: false,
      playerChips: 0,
      playerBetInputAmount: 0,
      saloonImage: saloonImage,


      svgFiles: [],
      imagesOfCardsInhand: [],
      dealerHandImages: [],
      players: [],

      // Your data properties go here
      cat: "meow",
      // messages
      submitButtonText: "Bet",
      biddingMessage: "You have been outbidded, do you want to enter a higher bid? or stop bidding?",
      informationMessage: "You won the bid! Take Skat cards and add them to your hand? or pass?",

      // cards
      firstCardDeck: [],

      skat: [],

      // player actions
      // initialize an empty hand for the object to begin with
      player1: { cards: [], bid: 0 },
      houseCards: { cards: [] },
      playerHand: [],
      dealerHand: [],


      dealer: 0,
      bidsAllowed: [18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60],
      currentOpponentBids: [],

      lastBid: -1,
      validBid: false,

      winningBid: false,

      pass: false,

      // as object
      //cardValues: {'J': 2,'A': 11,'10': 10,'K': 4,'Q': 3,'9': 0,'8': 0,'7': 0},
      cardSuitValues: { 'spades': 2, 'hearts': 3, 'diamonds': 4, 'clubs': 1 },

      // in Skat jack is the trump card in this game format
      cardRankValues: { 'J': 100, 'A': 13, '10': 10, 'K': 12, 'Q': 11, '9': 9, '8': 8, '7': 7 },
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
  computed: {

    cardStyles() {
      // '_' as a placeholder to indicate never used

      return this.imagesOfCardsInhand.map((_, index) => ({
        marginTop: `${index * (Math.random() - 0.1) * 0.1}em`,
        transform: `rotate(${(index - 4) * 3}deg)`
      }));

    },
    filteredDealerHand() {
      // If showAllDealerCards is true, return the whole dealerHand array
      // Otherwise, return an array containing only the first element
      return this.showAllDealerCards ? this.dealerHandImages : this.dealerHandImages.slice(0, 1);
    },
  },
  methods: {
    updateGameState(e) {

      // Check if e is a string and parse it if necessary
      if (typeof e === 'string') {
        e = JSON.parse(e);
      }

      this.theResponse = e;

      this.playerHand = this.theResponse.player_hand; // Changed from playerHand to player_hand
      this.dealerHand = this.theResponse.dealer_hand; // Changed from dealerHand to dealer_hand
      this.playerChips = this.theResponse.player_chips;
      this.playerBet = this.theResponse.bet;
      for (let key in this.theResponse) {
        console.log(key + ": " + JSON.stringify(this.theResponse[key]));
      }

      this.updateCards(this.dealerHand, 'dealer');
      this.updateCards(this.playerHand, 'player');
      this.currentMessage = this.theResponse.message;

    },
    async Start() {
      this.showAllDealerCards = false;
      this.Reset(); // Reset the game before starting a new one
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'start' })
        });
        let e = await response.json();
        this.updateGameState(e);

      } catch (error) {
        console.error("Error during fetch: ", error);
      }
    },
    async Reset() {
      try {
        const response = await fetch('/backend/api/blackjack/reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
          // body property removed
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    removeImage(index) {
      //console.log('------------', this.imagesOfCardsInhand[index].slice(0, -13).slice(5));
      // Removes element at the index of the array of images
      //this.imagesOfCardsInhand.splice(index, 1);

      const holder = this.imagesOfCardsInhand[index].slice(0, -13).slice(5);
      this.playerHand = this.playerHand.filter(card => {
        return !(holder.includes(card[0]) && holder.includes(card[1]));
      });

      // remove actual visual card from the screen
      this.imagesOfCardsInhand.splice(index, 1);

    },
    increaseMarginLeft(symbol) {
      const currentMarginLeft = parseFloat(this.marginLeft);
      if (symbol === '+') {
        const newMarginLeft = currentMarginLeft + 0.5;
        this.marginLeft = `${newMarginLeft}em`;
      } else {
        const newMarginLeft = currentMarginLeft - 0.5;
        this.marginLeft = `${newMarginLeft}em`;
      }
    },

    updateCards(user, who = 'player') {
      // for now set the associated image values for each card in hand to empty and update all the image values below
      let arrayToUse = [];

      //user = [['10', 'diamonds'],['5', 'diamonds']]
      this.svgFiles.forEach(svgFile => {
        const fileName = svgFile.slice(0, -13);  // Remove the last 12 characters 'iwoeruwru.svg' (including the dot)
        // console.log(fileName);
        user.forEach(card => {
          if (fileName.includes(card[0]) && fileName.includes(card[1])) {
            //console.log(svgFile);
            arrayToUse.push(svgFile);
          }
        })
      });
      console.log(arrayToUse);
      if (who === 'player') {
        this.imagesOfCardsInhand = arrayToUse;
      } else if (who === 'dealer') {
        this.dealerHandImages = arrayToUse;
      }
    },

    async Bet() {
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "bet_amount": this.playerBetInputAmount, "action": "bet" })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async Hit() {
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "bet_amount": this.playerBetInputAmount, "action": "hit" })
        });
        let e = await response.json();


        this.updateGameState(e);
      } catch (error) {
        console.error(error);
      }
    },
    async Stay() {
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "bet_amount": this.playerBetInputAmount, "action": "stay" })
        });
        let e = await response.json();

        this.updateGameState(e);
        this.showAllDealerCards = true;
      } catch (error) {
        console.error(error);
      }
    },
    generateRandomBoolean() {
      const randomBoolean = Math.random() < 0.5; // Generates random true or false
      return randomBoolean;
    },

    takeCardsOrPass() {
      // if they take the cards, add them to their hand
      // if user presses button more than once when there are no skat cards does nothing else
      if (this.skat.length !== 0) {
        this.informationMessage = "You took the SKAT cards! They are the [" + this.skat[0][0] + " of " + this.skat[0][1] +
          "] and the [" + this.skat[1][0] + " of " + this.skat[1][1] + "]";
        this.player1.cards = this.player1.cards.concat(this.skat);

        this.skat = [];
      }

    },

    displayInfo(p, c, v) {
      console.log('Player Information: \n' + `Player: ${p}\nCards: ${c}\nValues: ${v}`);
    },

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
      this.house = new Player("House", this.houseCards, 0);
      this.player3 = new Player("Bob", this.player3Cards, 0);
      this.players.push(this.player1, this.player2, this.player3);

      this.player1.cards = this.DeckOfCards.theDeckOfCards.splice(0, 2);
      this.house.cards = this.DeckOfCards.theDeckOfCards.splice(0, 2);
      //console.log(this.player1.cards);
      //console.log(this.house.cards);

      this.skat = this.DeckOfCards.theDeckOfCards.splice(0, 2);

      this.updateCards(this.player1.cards, 'player');
      this.updateCards(this.house.cards, 'house');

      this.displayInfo(this.player1.name, this.player1.cards, this.player1.card_values);
    },
  },


  mounted() {
    document.title = "Fullstack Blackjack Game"; // Set the document title to the value of the `title` property

    const svgContext = require.context("@/components/CardGame/card_images", false, /\.svg$/);
    this.svgFiles = svgContext.keys().map(svgContext);
    this.dealCards();
  },
};
</script>

<style scoped>
.title {
  padding-top: 1.5em;
  color: rgb(255, 255, 255);
  font-size: 2.5em;
  line-height: 1.1em;
  font-family: 'Helvetica';
}

#body {
  /*
  background-color: rgb(198, 111, 58); */
  background-image: url('@/components/CardGame/decoration_images/pexels-pixabay-326311.jpg');
  background-size: 100% 100%;
  height: 200svh;
}

.button-35 {
  border-radius: 0.4em;
}

.button-35:hover {
  box-shadow: #ffffff 0 0 0 2px, transparent 0 0 0 0;
}

.interactions {

  display: flex;
  justify-content: center;
  align-items: center;
  /* Add a defined width to the container */
  width: 100%;
}

.custom-input {
  width: 6em;
  font-size: 1.5em;
  border-radius: 0.25em;

  border: none;
  outline: none;
  padding-left: 1em;
}

.button-container {
  display: flex;
  gap: 0.25em;
  margin-top: 0.5em;
}

/* Your CSS goes here */
.cards {
  padding-left: 7em;
  display: flex;
  justify-content: center;
  /* Align the content to the left */
  align-items: center;
  z-index: 4;

  position: relative;
  transform: scale(0.8);
}

.cards-dealer {
  padding-left: 7em;
  display: flex;
  justify-content: center;
  /* Align the content to the left */
  align-items: center;
  z-index: 4;

  position: relative;
  transform: scale(0.8);
}

.card-container {
  display: flex;
  margin-top: 2em;
}

.card-item {
  cursor: grab;
  height: 10em;
  /* Adjust the width as desired */
  margin-left: 1em;

}

.card-item:hover {
  filter: brightness(80%);
}


.card-info {
  border: 0.1em solid #ccc;
  /* Add border around the content */

  border-radius: 0.5em;
  padding: 1em;
  /* Add padding to create space between the content and the border */
  text-align: left;
  /* Align the text to the left */




  z-index: 2;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.paragraph-text {
  max-width: 80em;
  font-size: 1.5em;
}

.input-container {
  background: rgba(0, 0, 0, 0.66);
  color: #fff;
  max-width: 30em;
  margin: 0 auto;
  padding: 0.5em;
  border-radius: 1em;




  display: grid;
  place-items: center;
  z-index: 2;

}

.select-options {
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

.saloon-image {
  border-radius: 2em;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
}

.footer-space-vertical {
  margin-top: 75vh;
}

@media screen and (max-width: 77rem) {



  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .paragraph-text {
    max-width: 80em;
    font-size: 1em;
  }

  .card-item {
    width: 9em;
    /* Adjust the width as desired */
  }

  .cards {
    top: 150vh;
    width: 130%;
    left: -17vw;
    display: flex;
    justify-content: center;
    align-items: center;



    position: absolute;
    overflow: hidden;

    /*min-width: calc(100% + 10em); */

  }

  .cards-dealer {
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

  .input-container {
    z-index: 4;


  }

  .footer-space-vertical {
    margin-top: 150vh;
  }

  .saloon-image {
    border-radius: 2em;
    top: 100vh;
    max-width: 100%;

  }

  .card-info {


    display: grid;
    place-items: center;
    left: initial;
    /* reset */
    width: 24em;
  }

  .select-options {
    left: 50%;
    top: 170vh;
    z-index: 5;
  }
}
</style>