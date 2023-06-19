<template>
    <h1 class="unselectable">
      This is under construction!<br />
      The cows in the <i>cow food delivery area</i> are hungry! Drag the food to them!
    </h1>
  
    <div>
      <button
        style="margin-bottom: 1em; margin-top: 1em;"
        class="button-35"
        @click="removeMovableObject"
      >
        Careful! This button will delete the cow food.
      </button>
      <div style="margin-bottom: 3em;" class="unselectable" id="food-area">
        <span style="color: #fff; ">Cow food delivery area</span>
      </div>
  
      <h1 class="unselectable delivered-color" v-if="isCollisionDetected">
        {{ collisionMessage }}
      </h1>
      <h1 class="unselectable undelivered-color" v-else>
        Cow Food not delivered!
      </h1>
  
      <div style="padding-top: 1em;" class="text-container">
        <span class="unselectable" style="font-size: 12px; color: #fff;">
          This array below is tracking whether the food is already in the cow
          delivery area, or it is outside the cow delivery area. This prevents any
          winning message from showing up when the food is already inside the cow
          food delivery area.<br />
          <span style="font-size: 2em;">{{ collisionCount }}</span>
          <br />
          Number of times the cow food has entered the cow food delivery area:
          <span style="font-size: 2em;">{{ cowFoodDeliveryCount }}</span>
          <br />
          Number of times cow food has left the cow delivery area:
          <span style="font-size: 2em;">{{ cowFoodExitsDeliveryAreaCount }}</span>
        </span>
      </div>
      <div
        id="movable-object"
        :style="{ top: position.top + 'px', left: position.left + 'px' }"
        @mousedown="startDrag"
      >
        <b class="unselectable" style="color: white; pointer-events: none;">
          Cow Food
        </b>
      </div>
    </div>
  
    <h1 class="unselectable" v-if="winningMessage">
      The cows say Moo!<br />
      They are happy!<br />
      You win!
    </h1>
  
    <div style="padding-top: 70em">
      <FirstFooter></FirstFooter>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import FirstFooter from "@/components/FirstFooter.vue";
  
  interface Position {
    top: number;
    left: number;
  }
 
  
  export default defineComponent({
    name: "CowGameView",
    components: {
      FirstFooter,
    },
    data() {
      return {
        isMouseDown: false,
        offsetX: 0,
        offsetY: 0,
        position: { top: 0, left: 0 } as Position,
        isCollisionDetected: false,
  
        collisionMessage: "Cow Food Delivered!",
  
        winningMessage: false,
        collisionCount: [] as number[],
        cowFoodDeliveryCount: 0,
        cowFoodExitsDeliveryAreaCount: 0,
        inCowDeliveryArea: false,
  
        numberOfRemovingCowFood: 0,
        numberOfGivingCowFood: 0,
        timerId: null as number | null, // can have type number or null     
      };      
    },
    
    mounted() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      const objectWidth = 50; // Update with the actual width of the object
      const objectHeight = 50; // Update with the actual height of the object
  
      this.position.top = (screenHeight - objectHeight) / 1.3;
      this.position.left = (screenWidth - objectWidth) / 2.05;
  
      document.addEventListener("mouseup", this.stopDrag);
      document.addEventListener("mousemove", this.drag);
    },
    beforeUnmount() {
      document.removeEventListener("mouseup", this.stopDrag);
      document.removeEventListener("mousemove", this.drag);
    },
    methods: {
      removeMovableObject(event: MouseEvent) {
        const movableObject = document.getElementById("movable-object");
        if (movableObject && !movableObject.contains(event.target as Node)) {
          movableObject.remove();
        }
      },
      startDrag(event: MouseEvent) {
        this.isMouseDown = true;
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        this.offsetX = event.clientX - rect.left;
        this.offsetY = event.clientY - rect.top;
      },
      stopDrag() {
        this.isMouseDown = false;
      },
      drag(event: MouseEvent) {
        if (this.isMouseDown) {
          const foodArea = document.getElementById("food-area");
          const movableObject = document.getElementById("movable-object");
  
          const foodRect = foodArea!.getBoundingClientRect();
          const objectRect = movableObject!.getBoundingClientRect();
  
          // Check for collision
          const isColliding = this.checkCollision(foodRect, objectRect);
  
          if (isColliding && this.collisionCount[this.collisionCount.length - 1] !== 1) {
            // Handle collision (e.g., update
            this.cowFoodDeliveryCount = this.cowFoodDeliveryCount + 1;
            this.isCollisionDetected = true;
            if (this.collisionCount[this.collisionCount.length - 1] !== 1) {
              this.showWinningMessage();
            }
            this.collisionCount.push(1);
          } else if (!isColliding) {
            if (this.collisionCount[this.collisionCount.length - 1] !== 0) {
              this.collisionCount.push(0);
              if (this.collisionCount.includes(1)){
                this.cowFoodExitsDeliveryAreaCount = this.cowFoodExitsDeliveryAreaCount + 1;
              }
            }
            this.isCollisionDetected = false;
          }
          this.position.top = event.clientY - this.offsetY;
          this.position.left = event.clientX - this.offsetX;
        }
      },
      checkCollision(rect1: DOMRect, rect2: DOMRect) {
        return (
          rect1.left < rect2.right &&
          rect1.right > rect2.left &&
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top
        );
      },
  
      showWinningMessage() {
        if (this.timerId) {
          // If the timer is already active, do nothing
          return;
        }
        this.winningMessage = true;
        this.timerId = setTimeout(() => {
          this.winningMessage = false;
          this.timerId = null;
        }, 4000); // 4 seconds
      },
      
    },
  });
  </script>
  
  <style>
  #movable-object {
    position: absolute;
    width: 100px;
    height: 60px;
    background-color: rgb(30, 255, 0);
    padding-top: 40px;
  }
  
  #food-area {
    width: 170px;
    height: 140px;
    border: 2px solid rgb(30, 255, 0);
  
    display: flex;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    padding: 110px 40px 0px 40px;
  }
  
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  div.text-container {
    display: flex;
    justify-content: center;
  }
  
  div.text-container span {
    text-align: left;
  }
  
  .delivered-color {
    color: rgb(30, 255, 0);
  }
  .undelivered-color {
    color: #ff5959;
  }
  </style>