<template>
    
    

    <div :class="{ 'peanut-butter': label === 'Peanut Butter', 'onion-rings': label === 'Onion Rings' }" class="movable-object unselectable" :style="{ top: position.top + 'px', left: position.left + 'px' }" @mousedown="startDrag">

        <b class="unselectable" style="color: white; pointer-events: none;">

            {{ label }} <!-- {{ position.top }} {{ position.left }} -->
        </b>
    </div>      
</template>
  
<script lang="ts">
import { defineComponent } from "vue";


interface Position {
    top: number;
    left: number;
}

export default defineComponent({
    name: "CowFood",

    props: {
        label: {type: String, required: true,},
        initialPosition: {type: Object,required: true,},      
         
    },
    
    data() {
        return {
            isMouseDown: false,
            offsetX: 0,
            offsetY: 0,
            position: ({ ...this.initialPosition }) as Position,
            alertShown: false,
        };
    },
    methods: {
        startDrag(event: MouseEvent) {
            this.isMouseDown = true;
            const rect = (event.target as HTMLElement).getBoundingClientRect();

            
            this.offsetX = event.clientX - rect.left - window.scrollX;
            this.offsetY = event.clientY - rect.top - window.scrollY;

            //this.offsetX = event.clientX - rect.left;
            //this.offsetY = event.clientY - rect.top;
        },
        stopDrag() {
            this.isMouseDown = false;
           
        },
        drag(event: MouseEvent) {
        if (this.isMouseDown) {                
            this.position.top = event.clientY - this.offsetY;
            this.position.left = event.clientX - this.offsetX;

            

             // Emit an event with the updated position
      this.$emit('position-updated', this.position);            
             
            if (this.position.left > 500 && this.position.top > 304 && !this.alertShown) { // check if alert has been shown
                        this.alertShown = true; // set alertShown to true to block future alerts
                        console.log("Food delivered!");
                        
                        this.$emit('food-moved', this.label, this.position); // emit an event with the label of the food and the direction it moved
            } else if (this.position.left <= 400 && this.position.top > 304 &&  this.alertShown) { // check if alert has been shown
                this.alertShown = false; // set alertShown to false to allow future alerts
                this.$emit('food-returned', this.label , this.position); // emit an event with the label of the food and the direction it moved
                console.log("Food returned!");
                
            }
        }
        },    
  
        }, 
        mounted() {
            document.addEventListener("mouseup", this.stopDrag);
            document.addEventListener("mousemove", this.drag);
        },
        beforeUnmount() {
            document.removeEventListener("mouseup", this.stopDrag);
            document.removeEventListener("mousemove", this.drag);
        },
});
</script>
  
<style scoped>
.movable-object {
    position: absolute;
    width: 100px;
    height: 60px;
    background-color: rgb(60, 255, 0);
    padding-top: 40px;
   
}

.peanut-butter{
  background-color: #7e5d02;
  color: #fff;
}

.onion-rings{
    background-color: #b6b609;
    color: #000;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


</style>