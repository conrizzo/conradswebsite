<template>
    <div ref="cowFood" :class="{
        'peanut-butter': label === 'Peanut Butter' && !dragColorChangeCSS,
        'moving-peanut-butter': label === 'Peanut Butter' && dragColorChangeCSS,
        'onion-rings': label === 'Onion Rings' && !dragColorChangeCSS,
        'moving-onion-rings': label === 'Onion Rings' && dragColorChangeCSS,
        'moving-grass': label === 'Grass' && dragColorChangeCSS,
    }" class="movable-object unselectable" :style="{ top: position.top + 'px', left: position.left + 'px' }"
        @mousedown="startDrag">
        <!-- the above style only needs to be top: position.top +'px', left: position.left +'px' - TESTING TOUCHSCREENS  -->
        <!-- :style="{ top: isTouchscreen ? y + 'px' : position.top + 'px', left: isTouchscreen ? x + 'px' : position.left + 'px' }"  -->
        <b class="unselectable" style="pointer-events: none;">
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
        label: { type: String, required: true, },
        initialPosition: { type: Object, required: true, },
        rect: {
            default: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
        },
    },

    data() {
        return {
            isMouseDown: false,
            offsetX: 0,
            offsetY: 0,
            position: ({ ...this.initialPosition }) as Position,
            alertShown: false,
            dragColorChangeCSS: false,

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
            this.dragColorChangeCSS = true;

        },
        stopDrag() {
            this.isMouseDown = false;
            this.dragColorChangeCSS = false;

        },
        drag(event: MouseEvent) {
            if (this.isMouseDown) {
                this.position.top = event.clientY - this.offsetY;
                this.position.left = event.clientX - this.offsetX;

                /*
                 // Emit an event with the updated position
                if (this.position.left > 299 && this.position.top > 400) {
                        // If it is, prevent the movement                    
                        this.position.left = 300;
                        this.position.top = 300;
                }
                
                        
                else{
                    this.$emit('position-updated', this.position);         
                }
                   */

                // This keeps track of the position of the food in the CowGameView.vue

                //this.$emit('position-updated', this.position);   //PREVIOUS CODE

                const cowFoodElement = this.$refs.cowFood as HTMLElement;
                const rect = cowFoodElement.getBoundingClientRect();
                this.$emit('rect-updated', rect);
            }
        },
    },
    mounted() {
        document.addEventListener("mouseup", this.stopDrag);
        document.addEventListener("mousemove", this.drag);
        // statement to TEST TOUCHSCREENS 
        /*
        if(window.matchMedia("(pointer: coarse)").matches) {
           this.isTouchscreen = true // touchscreen
        }
        */
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
    height: 100px;
    background-color: rgb(131, 255, 94);
    color: #fff;
    padding-top: 40px;
    opacity: 1;
    border-radius: 4px;
    cursor: pointer;
}

.moving-grass {
    background-color: rgb(60, 255, 0);
    ;
    color: #fff;
    filter: brightness(150%);
}

.peanut-butter {
    background-color: #7e5d02;
    color: #fff;     

    display: flex;
    align-items: center;   
    padding-bottom: 1.7rem;
}

.moving-peanut-butter {
    background-color: #7e5d02;
    color: #fff;
    filter: brightness(120%);

    display: flex;
    align-items: center;   
    padding-bottom: 1.7rem;

}

.onion-rings {
    background-color: #c29e00;
    color: #fff;
}

.moving-onion-rings {
    background-color: #c29e00;
    color: #fff;
    filter: brightness(120%);


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


