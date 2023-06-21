<template>
  <div>

   <!-- @food-returned="handleFoodReturned" -->
    <CowFood
      v-for="(object, index) in cowFoodObjects"
      :key="index"
      :label="object.label"
      :initialPosition="object.position"
      @food-moved="handleFoodMoved"
     
      @position-updated="updatePosition(index, $event)"
      :rect="object.rect"
      ref="foodObjects"
    />
  </div>
  
  <h1 style="float: left; position: absolute;"> This is under construction!</h1>
  <div class="unselectable" style="padding-top: 1em; padding-bottom: 1em;">
    
    <h2>Cow Food Coordinates:</h2>
    <div style="color: white;" v-for="(object, index) in cowFoodObjects" :key="index">
      <p>{{ object.label }}: Top {{ object.position.top }}, Left {{ object.position.left }}</p>
    </div>
  </div>
  <div style="background-color: rgb(75, 75, 75);   top: 0; height: 255px;">
    <h1 class="unselectable">The Cows need their food delivered! Deliver the correct food to make the cows happy!</h1>
    <button style="float: left; margin-left: 1em; background-color: rgb(173, 173, 173); color: black;" class="button-35" @click="refreshPage">Reset</button>
      <div v-if="winningMessage"><h1>You win!</h1></div>
      <div v-else-if="losingMessage"><h1>You Lose!</h1></div>
      <div v-if="isThereACollision"><h1>{{ collisionMessage }}</h1></div>
      <h1 class="unselectable">{{  customMessage }}</h1>
      <div v-if="collisionCowPasture"><h1>{{ cowPastureCollisionMessage }}</h1></div>
  </div>
  <h1 class="unselectable" style="padding-top: 1em;">The Happy Cow Pasture! (Filled with cows that need to eat)</h1>
  
  <div class="farm">
    <div class="row">
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
    </div>
    <div class="row">
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
    </div>
    <div class="row">
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
    </div>
    <div class="row">
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
    </div>
    <div class="row">
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
    </div>
    <div class="row">
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
    </div>
    <div class="row">
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
    </div>
    <div class="row">
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
      <div class="brown-soil"></div>
    </div>
    <div class="row">
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
      <div class="green-soil"></div>
    </div>    
  </div>

</template>

<script lang="ts">
import { defineComponent} from "vue";

import CowFood from "@/components/CowGame/CowFood.vue";

interface cowFoodObjectsData {
  id: string;
  label: string;
  position: Position;
  rect: DOMRect | null;  
}
interface Position {
  top: number;
  left: number;
}
export default defineComponent({
  name: "CowGameView",
  components: {
    CowFood,
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
      
      cowFoodObjects: [
        {
          id: 'grass',
          label: "Grass",
          position: { top: 310, left: 90 },
          rect: null,
          
        },
        {
          id: 'peanut-butter',
          label: "Peanut Butter",
          position: { top: 310, left: 200 },
          rect: null,
        },
        {
          id: 'onion-rings',
          label: "Onion Rings",
          position: { top: 310, left: 310 },
          rect: null,
        },
      ] as cowFoodObjectsData[], 
      movedFoodLabel: "",
      returnedFoodMessage: "",
    };
    
  }, 
  mounted() {
    this.updateRects();    
  },  

  methods: {
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
    },*/checkCollision(rect1: DOMRect, rect2: DOMRect) {
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
    for (let i = 0; i < this.cowFoodObjects.length; i++) {
      const foodObjectRect = this.cowFoodObjects[i].rect;
      if (this.checkCollision(foodObjectRect, greenAreaRect)) {
        this.collisionCowPasture = true;
        this.cowPastureCollisionMessage = (`${this.cowFoodObjects[i].label} has entered the cow pasture!`);
      }
    }
  },
  // This is like the main code that checks for collisions and anything to evaluate in real time
  // It goes here, then this invokes the other functions   
    updatePosition(index: number, position: { top: number; left: number }) {
      const foodObject = this.cowFoodObjects[index];
      foodObject.position = position;
      const foodElement = this.$refs.foodObjects[index].$el as HTMLElement;
      foodObject.rect = foodElement.getBoundingClientRect();
      console.log(foodObject.rect)
      this.checkCollisions();
      this.checkGreenAreaCollisions();
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
  z-index: -2; /* Set the z-index to -2 to position the background behind the line */
}


.farm {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 4px;
}

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }

  .green-soil {
    width: 100px;
    height: 40px;
    background-color: #71ff25;
    border-radius: 10px;
    margin: 0 2px;
  }

  .brown-soil {
    width: 100px;
    height: 40px;
    background-color: #964B00;
    border-radius: 10px;
    margin: 0 2px;
  }
</style>

