<template >
  <div class="my-page">
    <!-- @position-updated="updatePosition(index, $event)" -->
    
    <h2 style="color: #ff5959; float: left;">This page is not currently designed<br> for mobile/touchscreen!</h2>
    <!-- @food-returned="handleFoodReturned" -->
    <CowFood v-for="(object, index) in cowFoodObjects" 
    :style="{ zIndex: 2 }" 
    :key="index" 
    :label="object.label"
    :initialPosition="object.position"       
    @rect-updated="updateCowFoodRect(index, $event)"
    ref="foodObjects" />    

    <!-- @position-updated="updateBallPosition(index, $event)" -->
   
    <CowMovingBall  v-for="(object, index) in bouncingBallObjects"     
    :key="index"    
    :initial-position="object.position"      
    :speed="object.speed"   
    :setMovementDirection="object.setMovementDirection"    
    @rect-updated="updateBallRect(index, $event)"    
     ref="ballObjects">
    </CowMovingBall>    
    

    <div v-if="showAboutCowGame">
      <AboutCowGame @close="toggleAboutCowGame" />
    </div>

    <h1 class="unselectable"
      style="font-size: 1.5em; top: 5em; text-align: left; padding-left: 1em; float: left; position: absolute;"> This is still under
      construction!<br>
      How to play: <br>
      
    </h1>    
    <p class="unselectable" style="width: 250px; color: #fff; font-size: 1.2em; text-align: left; padding-left: 1em; top: 11em; float: left; position: absolute;">Don't hit the cow food
      on the electric fence or the fireball! If any of the cow food gets hit by the fireball while you are moving one of them, you lose!
      For example: If moving the Onion Rings and the fireball hits the Peanut butter, you lose! Pay attention to where all the cowfood is at all times!
      The Onion Rings have special properties! They can hit the electric fence and the fireball and not cause you to lose! But they may or may not be important!
    </p>   

    <div style="z-index: 3; position: absolute; right: 5em; top: 7em;" class="unselectable">      
      <div v-if="isThereACollision">
        <h1>{{ collisionMessage }}</h1>
      </div>

      <div v-if="collisionCowPasture">
        <h1>{{ cowPastureCollisionMessage }}</h1>
      </div>

      <div v-if="hitCowFence">
        <h1 style="color: #ff5959;">The cow food collided with the electric fence or fireball! <br>The cows are sad! You are a bad cow farmer!</h1>
      </div><div v-else-if="onionRingsHitCowFence"><h1>It's okay for the Onion rings to hit the electric fence or fireball!</h1></div>    
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
    
    <div style=" margin-left: 30em; padding-top: 50vh;">
      <h1 style="position: absolute; top: 3em; left: 1em; font-size: 5em; color: greenyellow;" class="unselectable">{{ customMessage }}</h1>
        <!-- generate the pasture -->
      <div class="farm">
        <h1 style="padding-top: 2em;" class="unselectable">Cow Pasture</h1>
        <p class="unselectable paragraph-text" style="padding-top: 1em; color: #fff; text-align: center;">This is a cow
          pasture filled with hungry cows! (Danger: Some cows may be hangry!)</p>
        
      </div>
      <div style="background-color:  rgb(0, 0, 0);
      top: 0;  padding-bottom: 1em;">
        <h1 style="font-size: 1.5em;" class="unselectable">The Cows need their food delivered! Deliver the correct food to make the cows happy!</h1>
        
      </div>
      <div class="unselectable">
    
          
          <div style="color: #fff;" v-for="(object, index) in cowFoodObjects" :key="index">
            <p>{{ object.label }}: Top {{ object.position.top }}, Left {{ object.position.left }}</p>
          </div>
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
          position: { top: 200, left: 350  },   
          setMovementDirection: { directionX: 3, directionY: 0 },
          speed: 2,       
         
        },
        {
          id: 'ball3',
          position: { top: 350, left: 350 },   
          setMovementDirection: { directionX: 3, directionY: 0},  
          speed: 2,        
         
        },              
      ] as ballObjectData[],

      
      cowFoodObjects: [
        {
          id: 'grass',
          label: "Grass",
          position: { top: 800, left: 10 },         
          inPasture: false,
        },
        {
          id: 'peanut-butter',
          label: "Peanut Butter",
          position: { top: 800, left: 120 },       
          inPasture: false,
        },
        {
          id: 'onion-rings',
          label: "Onion Rings",
          position: { top: 800, left: 230 },       
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
    updateBallRect(index: number, rect: DOMRect) {
      //const ballObject = this.bouncingBallObjects[index] as ballObjectData;
      //ballObject.rect = rect;

      this.bouncingBallObjects[index].rect = rect;
      
      //console.log(index, ballObject.rect)      
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
      // set initial rects for CowFood objects
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

      /**
       * Updates the `rect` property of a food object in the `cowFoodObjects` array with a new `DOMRect` value.
       * @param {number} index - The index of the food object in the `cowFoodObjects` array.
       * @param {DOMRect} rect - The new `DOMRect` value of the food object.
       */
      },updateCowFoodRect(index: number, rect: DOMRect){
        
        // get the food object from the cowFoodObjects array - this is like a getter
        //const foodObject = this.cowFoodObjects[index] as cowFoodObjectsData;
        // update the rect position of the food object in the cowFoodObjects array to this function parameter rect  - this is like a setter
        //foodObject.rect = rect;

        // Get and set the rect property of the food object in the cowFoodObjects array
        this.cowFoodObjects[index].rect = rect;
        //console.log(index, foodObject.rect)

        // As the user drags the cowFood objects we check for collisions and interactions
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
  top: 13vh;
  left: 400px; 
  width: 10px;
  height: 91vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.vertical-line-two {
  position: absolute;
  top: 0;
  left: 600px;
  transform: translateX(-25%);
  width: 10px;
  height: 34vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.vertical-line-three {
  position: absolute;
  top: 16vh;
  left: 800px;
  transform: translateX(-25%);
  width: 10px;
  height: 34.33vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.vertical-line-four {
  position: absolute;
  top: 0;
  left: 1000px;
  transform: translateX(-25%);
  width: 10px;
  height: 34vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.vertical-line-five {
  position: absolute;
  top: 16vh;
  left: 1200px;
  transform: translateX(-25%);
  width: 10px;
  height: 34.33vh;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  opacity: 0.9;
}

.horizontal-line {
  width: 60vw;
  top: 50vh;
  position: absolute;
  height: 10px;
  background-color: black;
  background-color: rgb(115, 129, 255);
  box-shadow: 0 0 10px 5px rgba(115, 129, 255, 0.5);
  filter: blur(1px);
  border-radius: 3px;
  left: 25.3em;
  opacity: 0.9;
}

.spinning-rectangle {
  width: 19vw;
  height: 10px;
  background-color: #f00;
  animation: left-right 2s ease-in-out infinite;
  top: 50vh;
  right: 19vw;
  filter: blur(1px);
  box-shadow: 0 0 10px 5px rgba(255, 72, 0, 0.8);
  position: absolute;
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

.my-page {
  background-color: rgb(0, 0, 0);
  height: 100vh; /* Add this line to set the height to 100% of the window size */
 
}

</style>

