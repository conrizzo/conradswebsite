<template>
  <div class="my-page">
    <div class="">
    
    <!-- @food-returned="handleFoodReturned" -->
      <CowFood
        v-for="(object, index) in cowFoodObjects"
        :style="{zIndex: 2}"
        :key="index"
        :label="object.label"
        :initialPosition="object.position"
        @food-moved="handleFoodMoved"
      
        @position-updated="updatePosition(index, $event)"
        :rect="object.rect"
        ref="foodObjects"
      />

    </div>
  
    <div v-if="showAboutCowGame">
        <AboutCowGame          
          @close="toggleAboutCowGame"
        />
    </div>

  <h1 class="unselectable" style="float: left; position: absolute;"> This is under construction!</h1>
  <h1 class="unselectable" style="float: left; left: 60px; top: 260px; position: absolute;">Drag the cow food below!</h1>
  <div class="unselectable" style="padding-top: 1em; padding-bottom: 1em;">
   
     <!-- generate the pasture -->
 
    <h2 style="color: #fff;">Cow Food Coordinates:</h2>
    <div style="color: #fff;" v-for="(object, index) in cowFoodObjects" :key="index">
      <p>{{ object.label }}: Top {{ object.position.top }}, Left {{ object.position.left }}</p>
    </div>
  </div>
  <div style="
      background-color:  rgb(0, 138, 156);
     top: 0; height: 255px; padding-bottom: 1em;">
    <h1 class="unselectable">The Cows need their food delivered! Deliver the correct food to make the cows happy!</h1>
    <button style="float: left; margin-left: 1em; background-color: rgb(173, 173, 173); color: black;" class="button-35" @click="refreshPage">Reset</button>
      <!---<div v-if="winningMessage"><h1>You win!</h1></div>
      <div v-else-if="losingMessage"><h1>You Lose!</h1></div>-->
      <div v-if="isThereACollision"><h1>{{ collisionMessage }}</h1></div>
      <h1 class="unselectable">{{  customMessage }}</h1>
      <div v-if="collisionCowPasture"><h1>{{ cowPastureCollisionMessage }}</h1></div>
  </div>
  
  
 <div style="padding-bottom: 100px; padding-top: 50px;">
 
 
    <div class="farm">
      <h1 class="unselectable">Cow Pasture</h1>
      <p class="unselectable paragraph-text" style="padding-top: 1em; color: #fff; text-align: center;">This is a cow pasture filled with hungry cows! (Danger: Some cows may be hangry!)</p>
      
    </div>

  </div>
  <button style="background-color: #ff5959; margin-bottom: 1em;" class="button-35" @click="toggleAboutCowGame">About</button>
  </div>

</template>


<script lang="ts">
import { defineComponent} from "vue";
import "@/assets/globalCSS.css";
import CowFood from "@/components/CowGame/CowFood.vue";
import AboutCowGame from "@/components/CowGame/AboutCowGame.vue";

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
    CowFood, AboutCowGame
  },
  data() {
    return {
      winningMessage: false,
      losingMessage: false,
      
      customMessage: "",
      firstCowFoodObject: [] as [number, number] | never[],
      secondCowFoodObject: [] as [number, number] | never[],
      third: [] as [number, number] | never[],
      isThereACollision: false,
      collisionMessage: "",
      collisionCowPasture: false,
      cowPastureCollisionMessage: "",
      showAboutCowGame: false,
      

      cowFoodObjects: [
        {
          id: 'grass',
          label: "Grass",
          position: { top: 310, left: 90 },
          rect: null,
          inPasture: false,
          
        },
        {
          id: 'peanut-butter',
          label: "Peanut Butter",
          position: { top: 310, left: 200 },
          rect: null,
          inPasture: false,
          
        },
        {
          id: 'onion-rings',
          label: "Onion Rings",
          position: { top: 310, left: 310 },
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
   
    areGrassAndPeanutButterInPasture() {
    const grassInPasture = this.cowFoodObjects[0].inPasture;
    const peanutButterInPasture = this.cowFoodObjects[1].inPasture;
    const onionRingsInPasture = this.cowFoodObjects[2].inPasture;
    if(grassInPasture && peanutButterInPasture && !onionRingsInPasture){
      this.winningMessage = true;
      this.customMessage = "You win! The cows are happy and full! they love to eat " + this.cowFoodObjects[1].label + " and " +this.cowFoodObjects[0].label +"!";
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
    handleFoodMoved(label: string, id: number) {
      //this.movedFoodLabel = `${label} went into the cow food area.`; 
      console.log("id here", id)     
      //this.checkWinning(label);
     
      //this.checkCollision();
    },
    
    /*
    handleFoodReturned(label: string) {
     
      if (this.losingMessage && label !== "Grass" && label !== "Peanut Butter"){
        this.returnedFoodMessage = `At least you decided to remove the ${label} from the cow food pasture!`;
        this.losingMessage = false;
      } else if(!this.losingMessage){
        this.returnedFoodMessage = `You took the ${label} food from the cows! They are sad now!`;
        this.losingMessage = true; this.winningMessage = false;
      }
      
      //this.checkWinning(label);
    },
*/
    /*
    checkWinning(label: string){
      console.log(label)
      if(label == "Grass"){
        if (this.losingMessage === false){
          this.winningMessage = true;    
          this.customMessage = "Cows love grass! Mooooo!"         
        } 
        //this.losingMessage = false;
      } else if(label == "Peanut Butter"){
        if (this.losingMessage === false){
          this.winningMessage = true;  
          this.customMessage = "Cows love peanut butter! Mooooo!"        
        }
      } else if(label == "Onion Rings"){
        this.winningMessage = false;
        this.losingMessage = true;
        if (this.losingMessage) {
          this.customMessage = "Cows can't eat onion rings! You are a bad farmer!"
        }
        
      }      
    },*/checkCollision(rect1: any, rect2: any) {
      // the type of this is DomRect but to fix errors am allowing any
        return (
          rect1.left < rect2.right &&
          rect1.right > rect2.left &&
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top
        );},

        checkCollisions() {
  for (let i = 0; i < this.cowFoodObjects.length; i++) {
    for (let j = i + 1; j < this.cowFoodObjects.length; j++) {
      if (this.checkCollision(this.cowFoodObjects[i].rect, this.cowFoodObjects[j].rect)) {
        this.isThereACollision = true;
        this.collisionMessage = `${this.cowFoodObjects[i].label} and ${this.cowFoodObjects[j].label} are colliding!`;
        return true;
      } else {
        this.isThereACollision = false;        
      }
    }
  }
  return false;
},checkGreenAreaCollisions() {
  const greenArea = document.querySelector('.farm') as HTMLElement;
  const greenAreaRect = greenArea.getBoundingClientRect();
  const inPasture: string[] = [];

  for (let i = 0; i < this.cowFoodObjects.length; i++) {
    const foodObjectRect = this.cowFoodObjects[i].rect;
    if (this.checkCollision(foodObjectRect, greenAreaRect)) {
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
  }if (inPasture.length === 1 && this.cowFoodObjects[2].inPasture){ 
  this.collisionCowPasture = true;
    this.cowPastureCollisionMessage = (`${inPasture.join(', ')} are in the cow pasture!`);
  }
  else if (inPasture.length > 0) {
    this.collisionCowPasture = true;
    this.cowPastureCollisionMessage = (`${inPasture.join(', ')} ${inPasture.length > 1 ? 'are' : 'is'} in the cow pasture!`);
    console.log(inPasture.length)
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
      console.log(foodObject.rect)
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
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(75, 75, 75);   
  z-index: 0; /* Set the z-index to -2 to position the background behind the line */
}

.farm {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 2px dashed rgb(255, 255, 255);
  
  
  z-index: -1;
  background: 
        
        rgba(0, 255, 119, 0.66) 29%;
       
     
  width: 500px;
  height: 350px;
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
     background-color: rgba(99, 67, 0, 0.856);
  }

  
</style>

