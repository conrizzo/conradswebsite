<template>
  <div id="body">
    <div>
      <h1 class="title">Blackjack Game</h1>
      <div style="margin-bottom: .25rem;">
        <span class="title">(Shamokin, Pennsylvania Alpha Edition)</span>
      </div>
      <div style="background-color: rgba(0,0,0,0.5); padding: 0.5em; padding-top: 1.5em; max-width: auto;">
        <h1 style="color: #fff;">This is now running a game in backend code.</h1>
        <div style="display: flex; justify-content: center; align-items: center;">
          <p style="color: #fff; z-index: 10;">Press 'DEAL' to begin. Note: debugging this for final polishing so won't
            fully work
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
    <div class="grid-container">
      <div class="input-container">
        <span class="interaction-menu-font">{{ currentMessage }}</span>
        <span class="interaction-menu-font">Player Score: {{ playerScore }}</span>
        <span class="interaction-menu-font" v-if="this.showAllDealerCards">
          Dealer Score: {{ dealerScore }}</span>
        <span class="interaction-menu-font">Chips: {{ playerChips }}</span>
        <span class="interaction-menu-font">Bet: {{ playerBetInputAmount }}</span>
        <span v-if="this.userSplits" class="interaction-menu-font">Split:<br>Hand 1: {{ playerScore
          }}<br>
          Hand 2: {{ playerScore2 }}</span>
        <span v-if="this.showAllDealerCards">
          Dealer cards: {{ dealerHand }}
        </span>
        <span>Player cards: {{ playerHand }}</span>
        <div>

          <label style="margin-right: 0.3em;" for="inputField"><b>Amount to Bet:</b></label>
          <input class="custom-input" type="text" id="inputField" v-model.number="playerBetInputAmount"
            placeholder="0" />

          <div style="margin-top: 0.25rem;">
            <!--<button class="clean-button button-margin-right" @click="Start()" style="">Validate Bet</button>-->
            <button v-if="isDealButtonVisible" class="clean-button button-margin-right" @click="Deal">DEAL</button>
            <button class="clean-button" @click="Reset(), isDealButtonVisible = true;" style="">RESET</button>
          </div>

          <div style="margin-top: 0.25rem;">
            <button @click="Stay()" type="button" class="clean-button button-margin-right" style="">Stay</button>
            <button @click="Hit()" type="button" class="clean-button button-margin-right" style="">Hit</button>
            <button v-if="showSplitButton" @click="Split()" type="button" class="clean-button " style="">Split</button>
            <br>
            <a href="https://github.com/conrizzo/python_back_end/blob/master/blackjack_game.py" class="text-links">Code
              this game actually uses</a> and
            <a href="https://github.com/conrizzo/python_back_end/blob/master/first_routes.py"
              class="text-links">routes</a> are 4 functions at bottom + Redis database for the game state.
          </div>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="card-container">
        <!-- by using computed for cardStyles when this only changes styles when cards are changed, not when other things are interacted with -->
        <div v-for="(svgFile, index) in imagesOfCardsInhand" :key="svgFile" @click="removeImage(index)"
          class="card-item" :class="{ 'splitOptionExtraSpaceBetweenCards': index === 2 && userSplits }"
          :style="{ 'margin-left': marginLeft, ...cardStyles[index] }">
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
      <button type="button" @click="increaseMarginLeft('+');" class="clean-button" style="">+ spacing</button>
      <button type="button" @click="increaseMarginLeft('-');" class="clean-button" style="">- spacing</button>
    </div>
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
      playerBet: 0,
      playerScore: 0,
      playerScore2: 0,
      dealerScore: 0,
      isDealButtonVisible: true,
      saloonImage: saloonImage,
      svgFiles: [],
      imagesOfCardsInhand: [],
      dealerHandImages: [],
      players: [],
      splitPlayerScores: [],
      showSplitButton: false,
      userSplits: false,

      // cards
      firstCardDeck: [],
      player1: { cards: [], bid: 0 },
      playerHand: [],
      dealerHand: [],
      dealer: 0,
    };
  },
  mounted() {
    document.title = "Fullstack Blackjack Game"; // Set the document title to the value of the `title` property
    const svgContext = require.context("@/components/CardGame/card_images", false, /\.svg$/);
    this.svgFiles = svgContext.keys().map(svgContext);
    //this.dealCards(); //-- can deal cards for testing purposes

    this.getInitialGameStateOnFirstUserLoad(); // fetch the initial game state - e.g. player chips
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

    async getInitialGameStateOnFirstUserLoad() {

      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'start' })
        });
        let e = await response.json();

        console.log(e);
        this.playerChips = e;
      } catch (error) {
        console.error("Error during fetch: ", error);
      }
    },


    confirmLoss() {
      if (this.currentMessage === "Bust! Dealer wins.") {
        this.isDealButtonVisible = true;
      }
    },

    updateGameState(e) {
      // Check if e is a string and parse it if necessary
      if (typeof e === 'string') {
        e = JSON.parse(e);
      }
      this.theResponse = e;
      this.playerChips = this.theResponse.player_chips;
      this.playerBet = this.theResponse.bet;

      this.playerHand = this.theResponse.player_hand; // Changed from playerHand to player_hand
      this.dealerHand = this.theResponse.dealer_hand; // Changed from dealerHand to dealer_hand

      if (this.theResponse.message === "Insufficient chips") {
        this.currentMessage = "You are betting more chips than you have!";
        return
      }

      for (let key in this.theResponse) {
        console.log(key + ": " + JSON.stringify(this.theResponse[key]));
      }

      this.updateCards(this.dealerHand, 'dealer');
      this.updateCards(this.playerHand, 'player');
      this.currentMessage = this.theResponse.message;
      this.playerScore = this.theResponse.player_score;
      this.dealerScore = this.theResponse.dealer_score;
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
        if (typeof e === 'string') {
          e = JSON.parse(e);
        }

        this.updateGameState(e);

      } catch (error) {
        console.error("Error during fetch: ", error);
      }
    },
    async Deal() {
      this.showAllDealerCards = false;
      this.userSplits = false;
      this.showSplitButton = false;
      this.Reset(); // Resets game state server side - except for the player's chips
      this.isDealButtonVisible = false;
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "bet_amount": this.playerBetInputAmount, action: 'deal' })
        });
        let e = await response.json();
        if (typeof e === 'string') {
          e = JSON.parse(e);
        }

        this.updateGameState(e);

        if (this.playerBetInputAmount > this.playerChips) {
          this.currentMessage = "You are betting more chips than you have!";
          return;
        }

        if ((this.playerHand[0][0] === 'jack' || this.playerHand[0][0] === 'queen' || this.playerHand[0][0] === 'king' || this.playerHand[0][0] === '10') &&
          (this.playerHand[1][0] === 'jack' || this.playerHand[1][0] === 'queen' || this.playerHand[1][0] === 'king' || this.playerHand[1][0] === '10')) {
          this.currentMessage = "You have an equal pair of cards. Would you like to split?";
          this.showSplitButton = true;
        } else if (this.playerHand[0][0] === this.playerHand[1][0]) {
          this.currentMessage = "You have a pair. Would you like to split?";
          this.showSplitButton = true;
        }

      } catch (error) {
        if (error === "Insufficient chips") {
          this.currentMessage = "You are betting more chips than you have!";
        }
        console.error("the error is: ", error);
      }
    },

    removeImage(index) {
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

      } catch (error) {
        console.error(error);
      }
    },

    updateCards(user, who = 'player') {
      let arrayToUse = [];
      console.log("updateCards Method: ", user);

      // Iterate over the user array first to maintain the order
      user.forEach(card => {
        // Find the corresponding svg file in this.svgFiles
        const svgFile = this.svgFiles.find(svg => {
          const fileName = svg.slice(0, -13);
          return fileName.includes(card[0]) && fileName.includes(card[1]);
        });

        // If a matching svg file add to new array
        if (svgFile) {
          arrayToUse.push(svgFile);
        }
      });

      console.log(arrayToUse);

      // Assign the found images to the correct array based on who is playing
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
          body: JSON.stringify({ "action": "bet" })
        });
        const data = await response.json();

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
          body: JSON.stringify({ "action": "hit" })
        });
        let e = await response.json();

        this.updateGameState(e);

        this.confirmLoss();
      } catch (error) {
        console.error(error);
      }
    },

    async Split() {
      try {
        const response = await fetch('/backend/api/blackjack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "split": true })
        });
        let e = await response.json();
        this.userSplits = true;

        this.updateGameState(e);

        this.playerHand = this.theResponse.split_player_hand;
        this.splitPlayerScores = this.theResponse.split_player_scores;
        this.playerScore = this.splitPlayerScores[0];
        this.playerScore2 = this.splitPlayerScores[1];
        this.showAllDealerCards = true;
        this.isDealButtonVisible = true;

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
          body: JSON.stringify({ "action": "stay" })
        });
        let e = await response.json();

        this.updateGameState(e);

        this.showAllDealerCards = true;
        this.isDealButtonVisible = true;
      } catch (error) {
        console.error(error);
      }
    },
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

.button-margin-right {
  margin-right: 0.25rem;
}

.interactions {
  display: flex;
  justify-content: center;
  align-items: center;
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

.interaction-menu-font {
  color: #fff;
  font-size: 2rem;
}

.button-container {
  display: flex;
  gap: 0.25em;
  margin-top: 0.5em;
}

.cards {
  padding-left: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;
  transform: scale(0.8);
  bottom: 5rem;
}

.cards-dealer {
  padding-left: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;
  transform: scale(0.8);
  top: 5rem;
}

.card-container {
  display: flex;
  margin-top: 2em;
}

.card-item {
  cursor: grab;
  height: 10em;
  margin-left: 1em;
}

.splitOptionExtraSpaceBetweenCards {
  margin-left: 2em !important;
}

.card-item:hover {
  filter: brightness(80%);
}

.card-info {
  border: 0.1em solid #ccc;
  border-radius: 0.5em;
  padding: 1em;
  text-align: left;
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
  z-index: 4;
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
  z-index: 1;
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
    width: 12em;
  }

  .cards {
    top: 20vh;
    width: 130%;
    left: -17vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: hidden;
    z-index: 10;
    /*min-width: calc(100% + 10em); */
  }

  .cards-dealer {
    top: 20vh;
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
    width: 24em;
  }

  .select-options {
    left: 50%;
    top: 170vh;
    z-index: 5;
  }

}
</style>