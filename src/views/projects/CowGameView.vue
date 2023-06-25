<template >
  <div class="my-page">

    <div class="">
      <h2 style="color: #ff5959;">This page is not currently designed for mobile/touchscreen!</h2>
      <!-- @food-returned="handleFoodReturned" -->
      <CowFood v-for="(object, index) in cowFoodObjects" :style="{ zIndex: 2 }" :key="index" :label="object.label"
        :initialPosition="object.position" @position-updated="updatePosition(index, $event)" :rect="object.rect"
        ref="foodObjects" />
    </div>

 
    <CowMovingBall class="unselectable" ref="ball" ></CowMovingBall>
   
    
    <div v-if="showAboutCowGame">
      <AboutCowGame @close="toggleAboutCowGame" />
    </div>

    <h1 class="unselectable"
      style="font-size: 1.5em; text-align: left; padding-left: 1em; float: left; position: absolute;"> This is under
      construction!<br>
      How to play: <br>
      
    </h1>    
    <p class="unselectable" style="width: 250px; color: #fff; font-size: 1.2em; text-align: left; padding-left: 1em; top: 9em; float: left; position: absolute;">Don't hit the cow food
      on the electric fence or the fireball! If any of the cow food gets hit by the fireball while you are moving one of them, you lose!
      For example: If moving the Onion Rings and the fireball hits the Peanut butter, you lose! Pay attention to where all the cowfood is at all times!
      The Onion Rings have special properties! They can hit the electric fence and the fireball and not cause you to lose!

    </p>
    

    <div style="background-color:  rgb(99, 67, 0);
      top: 0; height: 255px; padding-bottom: 1em;">
        <h1 style="font-size: 1.5em;" class="unselectable">The Cows need their food delivered! Deliver the correct food to make the cows happy!</h1>
    </div>

    <div style="position: absolute; right: 5em; top: 7em;" class="unselectable">      
      <div v-if="isThereACollision">
        <h1>{{ collisionMessage }}</h1>
      </div>

      <div v-if="collisionCowPasture">
        <h1>{{ cowPastureCollisionMessage }}</h1>
      </div>

      <div v-if="hitCowFence">
        <h1 style="color: red;">The cow food collided with the electric fence! <br>The cows are sad! You are a bad cow farmer!</h1>
      </div><div v-else-if="onionRingsHitCowFence"><h1>It's okay for the Onion rings to hit the electric fence or fireball!</h1></div>    
    </div>


    <div class="unselectable" style="padding-top: 1em; padding-bottom: 1em;">
      <!-- generate the pasture -->
      <h2 style="color: #fff;">Cow Food Coordinates:</h2>
      <div style="color: #fff;" v-for="(object, index) in cowFoodObjects" :key="index">
        <p>{{ object.label }}: Top {{ object.position.top }}, Left {{ object.position.left }}</p>
      </div>
    </div>
    <div style="margin-top: 5em;"></div>    

    <div class="vertical-line-three"></div>
    <div class="vertical-line-two"></div>
    <div class="vertical-line"></div>
    <div class="diagonal-line"></div>
    
    <div style=" margin-left: 50em;">
      <div class="farm">
        <h1 style="padding-top: 2em;" class="unselectable">Cow Pasture</h1>
        <p class="unselectable paragraph-text" style="padding-top: 1em; color: #fff; text-align: center;">This is a cow
          pasture filled with hungry cows! (Danger: Some cows may be hangry!)</p>
        <h1 style="font-size: 1.5em; color: greenyellow;" class="unselectable">{{ customMessage }}</h1>
      </div>
    </div>

    <button style="background-color: #ff5959; position: absolute;  top: 600px; right: 1em;" class="button-35"
      @click="toggleAboutCowGame">About</button>
    <button style="position: absolute; top: 660px; right: 1em; background-color: #ff5959;" class="button-35"
      @click="refreshPage">Reset Page</button>
  </div>
  
</template>


<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/globalCSS.css";
import CowFood from "@/components/CowGame/CowFood.vue";
import AboutCowGame from "@/components/CowGame/AboutCowGame.vue";
import CowMovingBall from "@/components/CowGame/CowMovingBall.vue";

interface bouncingBall {
  id: string;  
  position: Position;
  rect: DOMRect | null;
}

interface cowFoodObjectsData {
  id: string;
  label: string;
  position: Position;
  rect: DOMRect | null;
  inPasture: boolean;
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
      losingMessage: false,

      customMessage: "",

      isThereACollision: false,
      collisionMessage: "",
      collisionCowPasture: false,
      cowPastureCollisionMessage: "",
      showAboutCowGame: false,

      isBlocked: false,
      hitCowFence: false,
      onionRingsHitCowFence: false,

      bouncingBallObjects: [
        {
          id: 'ball',
          position: { top: 400, left: 100 },
          rect: null,
        },
      ] as bouncingBall[],

      cowFoodObjects: [
        {
          id: 'grass',
          label: "Grass",
          position: { top: Math.floor(Math.random() * (window.innerHeight - 100)), left: 10 },
          rect: null,
          inPasture: false,

        },
        {
          id: 'peanut-butter',
          label: "Peanut Butter",
          position: { top: Math.floor(Math.random() * (window.innerHeight - 100)), left: 120 },
          rect: null,
          inPasture: false,

        },
        {
          id: 'onion-rings',
          label: "Onion Rings",
          position: { top: Math.floor(Math.random() * (window.innerHeight - 100)), left: 230 },
          rect: null,
          inPasture: false,
        },
      ] as cowFoodObjectsData[],

    };

  },
  mounted() {
    this.updateRects();
  },

  methods: {
    toggleAboutCowGame() {
      this.showAboutCowGame = !this.showAboutCowGame;
    },

    cowFenceHit() {
      this.hitCowFence = true;

      setTimeout(() => {
        this.hitCowFence = false;
        this.refreshPage();
      }, 1000);
    },

    areGrassAndPeanutButterInPasture() {
      const grassInPasture = this.cowFoodObjects[0].inPasture;
      const peanutButterInPasture = this.cowFoodObjects[1].inPasture;
      const onionRingsInPasture = this.cowFoodObjects[2].inPasture;
      if (grassInPasture && peanutButterInPasture && !onionRingsInPasture) {
        this.winningMessage = true;
        this.customMessage = "You win! The cows are happy and full! they love to eat " + this.cowFoodObjects[1].label + " and " + this.cowFoodObjects[0].label + "!";
      }
    },

    updateRects() {
      const foodObjects = this.$refs.foodObjects as typeof CowFood[];
      foodObjects.forEach((foodObject, index) => {
        if (!this.cowFoodObjects[index].rect) {
          this.cowFoodObjects[index].rect = foodObject.$el.getBoundingClientRect();
          console.log(this.cowFoodObjects[index].rect)
        }
      });
    },

    refreshPage() {
      location.reload();
    },
    
    checkCollision(rect1: DOMRect, rect2: DOMRect) {
      // the type of this is DomRect but to fix errors am allowing any
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
    }, checkGreenAreaCollisions() {
      const greenArea = document.querySelector('.farm') as HTMLElement;
      const greenAreaRect = greenArea.getBoundingClientRect();
      const verticalLine = document.querySelector('.vertical-line') as HTMLElement;
      const verticalLineRect = verticalLine.getBoundingClientRect();
      const diagonalLine = document.querySelector('.diagonal-line') as HTMLElement;
      const diagonalLineRect = diagonalLine.getBoundingClientRect();
      const verticalLineTwo = document.querySelector('.vertical-line-two') as HTMLElement;
      const verticalLineTwoRect = verticalLineTwo.getBoundingClientRect();
      const verticalLineThree = document.querySelector('.vertical-line-three') as HTMLElement;
      const verticalLineThreeRect = verticalLineThree.getBoundingClientRect();

      const movingBall = document.querySelector('.ball') as HTMLElement;
      const movingBallRect = movingBall.getBoundingClientRect();

      const inPasture: string[] = [];

      // this LOOP will  check for collisions with any objects
      for (let i = 0; i < this.cowFoodObjects.length; i++) {
        const foodObjectRect = this.cowFoodObjects[i].rect;
        if (foodObjectRect && this.checkCollision(foodObjectRect, greenAreaRect)) {
          if (!this.cowFoodObjects[i].inPasture) {
            this.collisionCowPasture = true;
            this.cowPastureCollisionMessage = (`${this.cowFoodObjects[i].label} has entered the cow pasture!`);
            this.cowFoodObjects[i].inPasture = true;
            console.log("Enter cow", this.cowFoodObjects[i].inPasture)
          }
          inPasture.push(this.cowFoodObjects[i].label);
        } else { // add an else block to set inPasture to false if the object leaves the pasture
          if (this.cowFoodObjects[i].inPasture) {
            this.cowFoodObjects[i].inPasture = false;
            console.log("Leave cow", this.cowFoodObjects[i].inPasture)
          }
        }
        // check for collision with vertical-line
        if (foodObjectRect && (this.checkCollision(foodObjectRect, verticalLineRect) ||
          this.checkCollision(foodObjectRect, diagonalLineRect) ||
          this.checkCollision(foodObjectRect, verticalLineTwoRect) || 
          this.checkCollision(foodObjectRect, verticalLineThreeRect) ||
          this.checkCollision(foodObjectRect, movingBallRect))) {
          this.isThereACollision = true;
          this.collisionMessage = `${this.cowFoodObjects[i].label} is colliding with the electric fence!`;
          if (this.cowFoodObjects[i].label === "Onion Rings") {
            this.onionRingsHitCowFence = true;
          } else {
            this.cowFenceHit();
          }
          return true;
        }
      }
      if (inPasture.length === 1 && this.cowFoodObjects[2].inPasture) {
        this.collisionCowPasture = true;
        this.cowPastureCollisionMessage = (`${inPasture.join(', ')} are in the cow pasture!`);
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
    // This is like the main code that checks for collisions and anything to evaluate in real time
    // It goes here, then this invokes the other functions   
    // --- this needs to be read through and understood
    updatePosition(index: number, position: { top: number; left: number }) {

      const foodObjects = (this.$refs as { foodObjects: typeof CowFood[] }).foodObjects;
      const foodElement = foodObjects[index].$el as HTMLElement;

      const foodObject = this.cowFoodObjects[index];
      foodObject.position = position;

      foodObject.rect = foodElement.getBoundingClientRect();


      // These consecutive function invocations is a prototype, there are definitely more practical efficient ways to do this
      // But for building up a prototype this is fine
      this.checkCollisions();
      this.checkGreenAreaCollisions();
      this.areGrassAndPeanutButterInPasture();
    },
  },

});
</script>





<style scoped>
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}



.farm {  
  border: 2px dashed rgb(255, 255, 255);
  z-index: -1;
  background:
    rgba(0, 255, 119, 0.66) 29%;
  width: 500px;
  height: 350px; 
 
}

.vertical-line {
  position: absolute;
  top: 10vh;
  left: 400px;
 
  width: 10px;
  height: 94.5vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.vertical-line-two {
  position: absolute;
  top: calc(0%);
  left: 600px;
  transform: translateX(-25%);
  width: 10px;
  height: 20em;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;

}

.vertical-line-three {
  position: absolute;
  top: 5em;
  left: 800px;
  transform: translateX(-25%);
  width: 10px;
  height: 23.5em;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;

}




.diagonal-line {
  width: 1000px;
  top: 28.3em;
  position: absolute;
  height: 10px;
  background-color: black;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  margin-left: 402px;
  opacity: 0.9;

}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
}

.green-soil {
  width: 100px;
  height: 30px;
  background-color: #67ff52;

  border-radius: 1px;
  z-index: 1;
  margin: 0 1px;
}

.my-page {
  background-color: rgba(99, 67, 0);
  height: 100vh; /* Add this line to set the height to 100% of the window size */
 
}

</style>

