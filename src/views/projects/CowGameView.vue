<template >
  <!-- this nav here fills in the empty space where we tell the vue router not to send the nav structure to the game page -->
  
  <div class="my-page">
    <!-- @position-updated="updatePosition(index, $event)" -->

    <h2 style="z-index: 4; position: absolute; background: #000; color: #04ff00; float: left; top: 40vh;">Sorry! This page is not designed
      for mobile/touchscreen!</h2>
    <!-- @food-returned="handleFoodReturned" -->
    <CowFood v-for="(object, index) in cowFoodObjects" :style="{ zIndex: 2 }" :key="index" :label="object.label"
      :initialPosition="object.position" @rect-updated="updateCowFoodRect(index, $event)" ref="foodObjects" />

    <!-- @position-updated="updateBallPosition(index, $event)" -->
    <CowMovingBall v-for="(object, index) in bouncingBallObjects" :key="index" :initial-position="object.position"
      :speed="object.speed" :setMovementDirection="object.setMovementDirection"
      @rect-updated="updateBallRect(index, $event)" ref="ballObjects">
    </CowMovingBall>

    <div v-if="showAboutCowGame">
      <AboutCowGame @close="toggleAboutCowGame" />
    </div>

    <h1 class="unselectable cow-game-text" style="color: #fff; font-size: 1.5em; top: 1em; float: left; position: absolute;">
      Click and drag a Cow Food square to start!<br>They are interactive!<br>
    </h1>
    
    <div style="width: 25em; color: #fff;  top: 8em; float: left; position: absolute;">
          

      <h1 class="unselectable" style="color: #fff;">How to play:</h1>
          <p class="unselectable cow-game-text">
            
            <br><br>Don't hit the cow food
            on the electric fence or a fireball! You only lose if you run out of time or are moving something when
            a collision occurs!
            <br>
            <br>For example: If moving the Onion Rings and the fireball hits the Peanut butter, you lose! Pay attention to where
            all the cowfood is at all times!
          </p>
          <br>
          <p class="unselectable cow-game-text" >
            Once you move the cow food, a timer starts:
            <b style="color: rgb(47, 196, 255); font-size: 2em;">{{ timeLeft }}</b>
            <br><br>Don't run out of time before the cows get the food or they will be hangry cows! MOOOO!
          </p>
    </div>
    <div style="color: #ffffff; z-index: 1; position: absolute; right: 3em; top: 2.9em;" class="unselectable">
      <div v-if="isThereACollision">
        <h1>{{ collisionMessage }}</h1>
      </div>

      <div v-if="collisionCowPasture">
        <h1>{{ cowPastureCollisionMessage }}</h1>
      </div>
    </div>

    <!-- hitting items and losing messages -->
    <div class="unselectable">
      <div v-if="hitCowFence && !peanutButterHitCowFence"
        :style="{ left: cowFoodObjects[0].rect?.left + 'px', top: cowFoodObjects[0].rect?.top + 'px' }"
        style="text-align: left; z-index: 2; position: absolute; margin-left: 10em; font-size: 0.8em;"
        class="unselectable">
        <h1 style="color: #ff5959;">The {{ cowFoodObjects[0].label }} collided with the electric fence or fireball!
          <br>The
          cows are sad! You are a bad cow farmer!</h1>
      </div>
      <div v-else-if="hitCowFence && peanutButterHitCowFence"
        :style="{ left: cowFoodObjects[1].rect?.left + 'px', top: cowFoodObjects[1].rect?.top + 'px' }"
        style="text-align: left; z-index: 2; position: absolute; margin-left: 10em; font-size: 0.8em;"
        class="unselectable">
        <h1 style="color: #ff5959;">The {{ cowFoodObjects[1].label }} collided with the electric fence or fireball!
          <br>The
          cows are sad! You are a bad cow farmer!</h1>
      </div>
      <div v-else-if="onionRingsHitCowFence"
        :style="{ left: cowFoodObjects[2].rect?.left + 'px', top: cowFoodObjects[2].rect?.top + 'px' }"
        style="color: #ffffff; text-align: left; z-index: 2; position: absolute; margin-left: 10em; font-size: 0.8em;">
        <h1>It's okay for the {{ cowFoodObjects[2].label }} to hit the electric fence or fireball!</h1>
      </div>
    </div>


    <div style="margin-top: 0em;"></div>

    <!-- obstacles -->
    <div class="vertical-line-three"></div>
    <div class="vertical-line-two"></div>
    <div class="vertical-line"></div>
    <div class="horizontal-line"></div>
    <div class="vertical-line-four"></div>
    <div class="vertical-line-five"></div>
    <div class="spinning-rectangle"></div>
    <div class="parent">
      <div class="vertical-rectangle"></div>
    </div>

    <div style=" margin-left: 27em; padding-top: 54vh;">
      <div v-if="winningMessage">
        <span
          style="border-radius: 1em; padding: 0.5em; background-color: #ffd755; margin-right: 3em; margin-left: 3em; position: absolute; top: 3em; left: 1em; font-size: 3em; color: rgb(255, 255, 255);"
          class="unselectable">
          {{ customMessage }}<br><br>
          {{ youTubeCowVideoLink }}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uA8dAnlD51o?autoplay=1&mute=1"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </span>
      </div>

      <!-- generate the pasture -->
      <div class="farm unselectable">
        <span style="font-size: 2.5em; padding-top: 1em; color: rgb(255, 255, 255); font-family: Arial, sans-serif;">
          Hungry cows need food! 
        </span>
        <p class="paragraph-text" style="font-size: 1rem; padding-top: 1em; color: #fff; text-align: center;">This is a cow
          pasture filled with hungry cows!<br>(Danger: Some cows may be hangry!)<br>
          The Cows need their food delivered!<br>Deliver the correct food to make the cows happy!</p>
        <div style="font-size: 2em; padding-right: 5em; color: rgb(179, 255, 0);" v-if="showCowPastureMessage">
          {{ cowPastureMessage }}
        </div>
        <div v-if="showCowPastureMessage === false" style="font-size: 2em; color: rgb(179, 255, 0); padding-left: 5em;">{{
          cowPastureMessage }}</div>
        <div v-if="showCowPastureMessage === false" style="font-size: 2em; color: rgb(179, 255, 0); padding-left: 10em;">
          Moo!</div>
      </div>




    </div>

    <button style="background-color: #ff5959; position: absolute; bottom: 1vh; right: 1em;" class="button-35"
      @click="toggleAboutCowGame">About</button>
    <!--<button style="background-color: #ff5959; position: absolute; bottom: calc(2vh + 3em); right: 1em;" class="button-35"
    @click="refreshPage">Reset Page</button> -->
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import "@/assets/globalCSS.css";
import CowFood from "@/components/CowGame/CowFood.vue";
import AboutCowGame from "@/components/CowGame/AboutCowGame.vue";
import CowMovingBall from "@/components/CowGame/CowMovingBall.vue";

// In JavaScript Object and object are different! Object creates a new object! lowercase object just sets properties and values of an object.

interface ballObjectData {
  id: string;
  position: Position;
  speed: number;
  setMovementDirection: Movement;
  rect: DOMRect;
}

interface cowFoodObjectsData {
  id: string;
  label: string;
  position: Position;
  rect: DOMRect | null;
  inPasture: boolean;
}

interface Movement {
  directionX: number;
  directionY: number;
}

interface Position {
  top: number;
  left: number;
}


export default defineComponent({
  name: "CowGameView",
  components: {
    CowFood, AboutCowGame, CowMovingBall
  },
  data() {
    return {
      winningMessage: false,
      customMessage: "",
      youTubeCowVideoLink: "Your reward for winning is a happy cow video!",
      isThereACollision: false,
      collisionMessage: "",
      collisionCowPasture: false,
      cowPastureCollisionMessage: "",
      onionLeavesCowPasture: false,
      showAboutCowGame: false,
      isBlocked: false,
      hitCowFence: false,
      onionRingsHitCowFence: false,
      peanutButterHitCowFence: false,
      // if timeLeft is changed make sure to change the first invocation in the updatecowfoodrect function
      timeLeft: 30,
      cowPastureMessage: "Moo!",
      showCowPastureMessage: false,

      // all these values can be set to defaults, or not, the interface shows what is allowed here
      // position values set the initial location of the objects
      bouncingBallObjects: [
        {
          id: 'ball1',
          position: { top: 50, left: 350 },
          setMovementDirection: { directionX: 3, directionY: 0 },
          speed: 2,
        },
        {
          id: 'ball2',
          position: { top: 250, left: 350 },
          setMovementDirection: { directionX: 3, directionY: 0 },
          speed: 2,
        },
        {
          id: 'ball3',
          position: { top: 450, left: 350 },
          setMovementDirection: { directionX: 3, directionY: 0 },
          speed: 2,
        },
      ] as ballObjectData[],

      cowFoodObjects: [
        {
          id: 'grass',
          label: "Grass",
          position: { top: 500, left: 10 },
          inPasture: false,
        },
        {
          id: 'peanut-butter',
          label: "Peanut Butter",
          position: { top: 500, left: 120 },
          inPasture: false,
        },
        {
          id: 'onion-rings',
          label: "Onion Rings",
          position: { top: 500, left: 230 },
          inPasture: false,
        },
      ] as cowFoodObjectsData[],

    };
  },

  mounted() {
    this.updateRects();

    setInterval(() => {
      this.showCowPastureMessage = true;
      setTimeout(() => {
        this.showCowPastureMessage = false;
      }, 1500);
    }, 3000);
  },
  methods: {
    startGameTimerCountDown() {
      let seconds = this.timeLeft;

      let timer = setInterval(() => {
        // Reduce the remaining seconds by 1
        seconds--;
        //console.log(seconds);
        this.timeLeft = seconds;
        // If the countdown is finished, clear the interval and display "Time's up!"
        if (this.winningMessage) {
          clearInterval(timer);
        }
        if (seconds === 0 && this.winningMessage === false) {
          clearInterval(timer);
          this.customMessage = "Time's up! You are a bad cow farmer! Try again!";
          setTimeout(() => {
            this.refreshPage();
          }, 3000);
        }
      }, 1000);
    },
    toggleAboutCowGame() {
      this.showAboutCowGame = !this.showAboutCowGame;
    },
    updateBallRect(index: number, rect: DOMRect) {     
      this.bouncingBallObjects[index].rect = rect;      
    },
    cowFenceHit() {
      this.hitCowFence = true;
      setTimeout(() => {
        this.hitCowFence = false;
        this.refreshPage();
      }, 1500);
    },
    areGrassAndPeanutButterInPasture() {
      const grassInPasture = this.cowFoodObjects[0].inPasture;
      const peanutButterInPasture = this.cowFoodObjects[1].inPasture;
      const onionRingsInPasture = this.cowFoodObjects[2].inPasture;
      // checks if grass and peanut butter are in the pasture and nothing hit the cowfence right before the food is in the cow pasture
      if (grassInPasture && peanutButterInPasture && !onionRingsInPasture && this.hitCowFence === false) {
        this.winningMessage = true;
        if (this.timeLeft >= 15) {
          this.customMessage = "You WIN! You are a PROFESSIONAL FARMER! It only took you " + (30 - this.timeLeft) + " seconds! The Cows love " + this.cowFoodObjects[1].label + " and " + this.cowFoodObjects[0].label + "!";
        }
        else if (this.timeLeft >= 5) {
          this.customMessage = "You WIN! You are a RESPECTABLE FARMER! It only took you " + (30 - this.timeLeft) + " seconds! The Cows love " + this.cowFoodObjects[1].label + " and " + this.cowFoodObjects[0].label + "!";
        } else {
          this.customMessage = "You WIN! You are a GREENHORN FARMER, It took you " + (30 - this.timeLeft) + " seconds! The cows love " + this.cowFoodObjects[1].label + " and " + this.cowFoodObjects[0].label + "!";
        }
      }
    },
    updateRects() {
      // set initial rects for CowFood objects
      const foodObjects = this.$refs.foodObjects as typeof CowFood[];
      foodObjects.forEach((foodObject, index) => {
        if (!this.cowFoodObjects[index].rect) {
          this.cowFoodObjects[index].rect = foodObject.$el.getBoundingClientRect();
          //console.log(this.cowFoodObjects[index].rect)
        }
      });
    },
    refreshPage() {
      location.reload();
    },
    checkCollision(rect1: DOMRect, rect2: DOMRect) {
      // the -1 + 1 make the collision area slightly larger than the object to account for any slight numerical errors
      return (
        rect1.left - 1 < rect2.right &&
        rect1.right + 1 > rect2.left &&
        rect1.top - 1 < rect2.bottom &&
        rect1.bottom + 1 > rect2.top
      );
    },
    checkCollisions() {
      for (let i = 0; i < this.cowFoodObjects.length; i++) {
        for (let j = i + 1; j < this.cowFoodObjects.length; j++) {
          /* In Vue.js, the ! symbol is used to indicate that a property or method is non-null, which means that it 
          is guaranteed to have a value at runtime. When a property or method is marked as non-null, TypeScript will 
          not generate any compile-time errors if the property or method is accessed without first checking if it is null or undefined.*/
          if (this.checkCollision(this.cowFoodObjects[i].rect!, this.cowFoodObjects[j].rect!)) {
            this.isThereACollision = true;
            this.collisionMessage = `${this.cowFoodObjects[i].label} and ${this.cowFoodObjects[j].label} are colliding!`;
            return true;
          } else {
            this.isThereACollision = false;
          }
        }
      }
      return false;
    }, checkForObjectCollisions() {
      const greenArea = document.querySelector('.farm') as HTMLElement;
      const greenAreaRect = greenArea.getBoundingClientRect();
      const verticalLine = document.querySelector('.vertical-line') as HTMLElement;
      const verticalLineRect = verticalLine.getBoundingClientRect();
      const diagonalLine = document.querySelector('.horizontal-line') as HTMLElement;
      const diagonalLineRect = diagonalLine.getBoundingClientRect();
      const verticalLineTwo = document.querySelector('.vertical-line-two') as HTMLElement;
      const verticalLineTwoRect = verticalLineTwo.getBoundingClientRect();
      const verticalLineThree = document.querySelector('.vertical-line-three') as HTMLElement;
      const verticalLineThreeRect = verticalLineThree.getBoundingClientRect();
      const verticalLineFour = document.querySelector('.vertical-line-four') as HTMLElement;
      const verticalLineFourRect = verticalLineFour.getBoundingClientRect();
      const verticalLineFive = document.querySelector('.vertical-line-five') as HTMLElement;
      const verticalLineFiveRect = verticalLineFive.getBoundingClientRect();
      const spinningRectangle = document.querySelector('.spinning-rectangle') as HTMLElement;
      const spinningRectangleRect = spinningRectangle.getBoundingClientRect();
      const verticalMovingRectangle = document.querySelector('.vertical-rectangle') as HTMLElement;
      const verticalMovingRectangleRect = verticalMovingRectangle.getBoundingClientRect();

      const inPasture: string[] = [];
      // this LOOP will  check for collisions with any objects
      for (let i = 0; i < this.cowFoodObjects.length; i++) {
        const foodObjectRect = this.cowFoodObjects[i].rect;
        if (foodObjectRect && this.checkCollision(foodObjectRect, greenAreaRect)) {
          if (!this.cowFoodObjects[i].inPasture) {
            this.collisionCowPasture = true;
            this.cowPastureCollisionMessage = (`${this.cowFoodObjects[i].label} has entered the cow pasture!`);
            this.cowFoodObjects[i].inPasture = true;
            //console.log("Enter cow", this.cowFoodObjects[i].inPasture)
          }
          inPasture.push(this.cowFoodObjects[i].label);
        } else { // add an else block to set inPasture to false if the object leaves the pasture
          if (this.cowFoodObjects[i].inPasture) {
            this.cowFoodObjects[i].inPasture = false;
            //console.log("Leave cow", this.cowFoodObjects[i].inPasture)
          }
        }
        // check for collision with vertical-line
        if (foodObjectRect && (this.checkCollision(foodObjectRect, verticalLineRect) ||
          this.checkCollision(foodObjectRect, diagonalLineRect) ||
          this.checkCollision(foodObjectRect, verticalLineTwoRect) ||
          this.checkCollision(foodObjectRect, verticalLineThreeRect) ||
          this.checkCollision(foodObjectRect, verticalLineFourRect) ||
          this.checkCollision(foodObjectRect, verticalLineFiveRect) ||
          this.checkCollision(foodObjectRect, spinningRectangleRect) ||
          this.checkCollision(foodObjectRect, verticalMovingRectangleRect) ||
          // checks for collision with the moving balls          
          this.checkCollision(foodObjectRect, this.bouncingBallObjects[0].rect!) ||
          this.checkCollision(foodObjectRect, this.bouncingBallObjects[1].rect!) ||
          this.checkCollision(foodObjectRect, this.bouncingBallObjects[2].rect!)

          /* ||
          this.checkCollision(foodObjectRect, movingBallRectThree) */)) {
          this.isThereACollision = true;
          this.collisionMessage = `${this.cowFoodObjects[i].label} is colliding with the electric fence or fireball!`;
          if (this.cowFoodObjects[i].label === "Onion Rings") {
            this.onionRingsHitCowFence = true;
            setTimeout(() => {
              this.onionRingsHitCowFence = false;
            }, 2000);
          }
          else if (this.cowFoodObjects[i].label === "Peanut Butter") {
            this.peanutButterHitCowFence = true;
            this.cowFenceHit();
            setTimeout(() => {
              this.peanutButterHitCowFence = false;
            }, 2000);
          }
          else {
            this.cowFenceHit();
          }
          return true;
        }
      }
      if (this.cowFoodObjects[2].inPasture && this.cowFoodObjects[1].inPasture === false && this.cowFoodObjects[0].inPasture === false) {
        this.collisionCowPasture = true;
        this.cowPastureCollisionMessage = (`${inPasture.join(', ')} are Toxic to cows! Get them out of the cow pasture!`);

      }
      // lingustics the message by adding commas, and, and commas in a nice happy grammatic way!
      else if (inPasture.length > 0) {

        this.collisionCowPasture = true;
        if (inPasture.length === 2) {
          const firstPart = inPasture.slice(0, -1).join(', ');
          const lastPart = inPasture[inPasture.length - 1];
          this.cowPastureCollisionMessage = `${firstPart} and ${lastPart} are in the cow pasture!`;
        }
        else if (inPasture.length > 2) {
          const firstPart = inPasture.slice(0, -1).join(', ');
          const lastPart = inPasture[inPasture.length - 1];
          this.cowPastureCollisionMessage = `${firstPart}, and ${lastPart} are in the cow pasture!`;
        }
        else {
          this.cowPastureCollisionMessage = `${inPasture[0]} is in the cow pasture!`;
        }
      } else {
        this.collisionCowPasture = false;
        this.cowPastureCollisionMessage = '';
      }
    },
    /**
    * This is basically the game loop, it is called every time the user moves a cowFood object
    * As the user drags the cowfood objects we check for collisions with other objects
    * Updates the `rect` property of a food object in the `cowFoodObjects` array with a new `DOMRect` value.
    * @param {number} index - The index of the food object in the `cowFoodObjects` array.
    * @param {DOMRect} rect - The new `DOMRect` value of the food object.
    */
    updateCowFoodRect(index: number, rect: DOMRect) {

      if (this.timeLeft === 30) {
        this.startGameTimerCountDown();
      }
      // Stop interaction with the game loop once a user wins
      if (this.winningMessage) {
        return;
      }
      // Get and set the rect property of the food object in the cowFoodObjects array
      this.cowFoodObjects[index].rect = rect;

      //retrieve the position
      //console.log(this.cowFoodObjects[index].rect?.x, this.cowFoodObjects[index].rect?.y)
      //console.log(index, foodObject.rect)      
     
      this.checkCollisions();
      this.checkForObjectCollisions();
      this.areGrassAndPeanutButterInPasture();
    },
  },

});
</script>



<style scoped>
.farm {  
  box-shadow: 0 0 10px rgb(142, 255, 116);
  z-index: -1;
  background:
    rgba(0, 176, 3, 0.751) 29%;
  border-radius: 10px;
  width: 35em;
  height: 20em;
}

.vertical-line {
  position: absolute;
  top: 13vh;
  left: 400px;
  width: 1em;
  height: 87vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  opacity: 0.9;
  overflow: hidden;
}
.vertical-line-two {
  position: absolute;
  top: 0;
  left: 600px;
  transform: translateX(-25%);
  width: 1em;
  height: 32vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  opacity: 0.9;
}

.vertical-line-three {
  position: absolute;
  top: 16vh;
  left: 800px;
  transform: translateX(-25%);
  width: 1em;
  height: 34.33vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  opacity: 0.9;
}
.vertical-line-four {
  position: absolute;
  top: 0;
  left: 1000px;
  transform: translateX(-25%);
  width: 1em;
  height: 32vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  opacity: 0.9;
}

.vertical-line-five {
  position: absolute;
  top: 16vh;
  left: 1200px;
  transform: translateX(-25%);
  width: 1em;
  height: 34.33vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  opacity: 0.9;
}

.horizontal-line {
  width: 60vw;
  top: 50vh;
  position: absolute;
  height: 1em;
  background-color: black;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 10px;
  left: 25.3em;
  opacity: 0.9;
}

.spinning-rectangle {
  width: 19vw;
  height: 1em;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  animation: left-right 2s ease-in-out infinite;
  border-radius: 10px;
  top: 50vh;
  right: 19vw;
  filter: blur(1px);
  position: absolute;
}


.vertical-rectangle {
  width: 1em;
  height: 19vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  animation: top-bottom 2s ease-in-out infinite;
  border-radius: 10px;
  top: 50vh;
  right: 19vw;
  filter: blur(1px);
  position: absolute;
}

.cow-game-text {
  line-height: 1.5em;
  font-size: 0.9em;
  padding-left: 2em;
  text-align: left;
}

@keyframes left-right {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(19vw);
  }

  100% {
    transform: translateX(0);

  }
}

/* for vertical-rectangle */
@keyframes top-bottom {
  0% {
    top: 0;
  }

  50% {
    top: 50vh;
  }

  100% {
    top: 80vh;

  }
}

.my-page {
  background-color: rgb(23, 29, 37);
  height: 100vh;
  /* Add this line to set the height to 100% of the window size */

}

h2 {
  display: none;
}

.paragraph-text {
  font-size: 1.2em;
  
}

@media (max-width: 1400px) {

  /* Add your CSS rules here */
  h2 {
    display: block;
  }
}
</style>

