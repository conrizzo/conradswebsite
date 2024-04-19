<template>
    <!-- dragstart.prevent should prevent the black cross symbol appearing? -->
    <div ref="dragItem" class="movable-object unselectable"
        :style="{ top: position.top + 'px', left: position.left + 'px' }" 
        @mousedown="startDrag"
        @dragstart.prevent
        >

        <!-- the above style only needs to be top: position.top +'px', left: position.left +'px' - TESTING TOUCHSCREENS  -->
        <!-- :style="{ top: isTouchscreen ? y + 'px' : position.top + 'px', left: isTouchscreen ? x + 'px' : position.left + 'px' }"  -->
        <span class="unselectable" style="pointer-events: none; font-size: 0.9rem; color: #000;">
            <!-- {{ label }}  {{ position.top }} {{ position.left }} -->
            <!-- x:{{ position.left }}<br>
            y:{{ position.top }} -->
                <slot></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Position {
    top: number;
    left: number;
}

export default defineComponent({
    name: "dragItem",

    props: {
        //label: { type: String, required: true, },
        initialPosition: { type: Object, required: true, },

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


            this.$emit('dragging', true);


        },
        stopDrag() {
            this.isMouseDown = false;
            this.dragColorChangeCSS = false;

        },
        drag(event: MouseEvent) {
            if (this.isMouseDown) {
                this.position.top = event.clientY - this.offsetY;
                this.position.left = event.clientX - this.offsetX;

                const dragItemElement = this.$refs.dragItem as HTMLElement;
                const rect = dragItemElement.getBoundingClientRect();
                this.$emit('rect-updated', rect);
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
    width: 59px;
    height: 59px;
    background-color: rgb(94, 175, 255);
    color: #fff;

    opacity: 1;

    cursor: pointer;
}

.moving-color-change {
    background-color: rgb(60, 255, 0);
    ;
    color: #fff;
    filter: brightness(150%);
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
