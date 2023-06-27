<template>
    <div>
      <!-- The ball that moves around the screen -->
      <div class="ball" :style="{ left: x + 'px', top: y + 'px' }">
        <span class="ball-text"></span>
      </div>
      
    </div>
  </template>
  
  <script lang="ts">

  
  
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CowMovingBall',
    props: {
    
      initialPosition: {
       /* type: Object, */ // Removing this type setting fixes the console log errors appearing in a loop, not sure why all this happens yet
       
       default: () => ({ top: 0, left: 0 })
      },
      
      speed: {
        type: Number,
        default: 5,
        required: false,
        
      },
    },
    data() {
      return {
        x: this.initialPosition.left,
        y: this.initialPosition.top,
        directionX: 1,
        directionY: 2,     
       
      };
    },
    mounted() { 
    
    this.moveBall();  
},
    methods: {
      moveBall() {
        setInterval(() => {
          this.x += this.speed * this.directionX;
          this.y += this.speed * this.directionY;
  
          if (this.x >= window.innerWidth - 160 || this.x <= 0) {
            this.directionX *= -1;
          }
  
          if (this.y >= window.innerHeight - 160 || this.y <= 0) {
            this.directionY *= -1;
          }

          this.$emit('position-updated', this.x, this.y); 
        }, 10);
      },
    },
  });
  </script>
  
  <style scoped>
  .ball {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff5959;
    position: absolute;
    filter: blur(5px);
  }

  .ball-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}
  </style>
  