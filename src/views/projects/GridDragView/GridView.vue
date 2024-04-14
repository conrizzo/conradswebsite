<template>
    <div class="center-with-flex outter-padding-and-margins" style="min-height: 90vh;">

        <div>
            <div>
                <div class="unselectable">
                    <h1>Experiment to drag stuff around on the screen</h1>
                    <div class="center-with-flex">
                        <p>Click the button to generate a green square, then try dragging it! Not setup to drag on touch
                            or
                            mobile
                            devices. This is using many key features in vue.js, emitting an event, using a slot, using
                            props,
                            a component in a parent view. The green squares are draggable. The location is monitored.
                            When objects are generated in the DOM by default with vue.js at least the z-index is
                            increased for each
                            new object.
                        </p>
                    </div>
                </div>
                <div>

                    <div class="main-button-container">
                        <button class="clean-button" @click="addComponentAndIncrement">Generate Component</button>
                    </div>
                    <div class="center-with-flex">
                        <div class="grid">
                            <div class="square" v-for="i in 25" :key="i"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="center-with-flex">
                <div>

                    <div @mousedown="mouseDown = true" @mouseup="mouseDown = false">
                        <ItemToDrag v-for="item in items" :key="item.id" :initialPosition="item.position"
                            @rect-updated="handleRectUpdated(item.id, $event)">
                            <span style="z-index: 5;">{{ item.id }}</span><br>
                            <span style="font-size: 0.6rem; line-height: 1;" v-if="lastUpdatedRect && item.id === currentDraggingId">
                                <!--ID: {{ currentDraggingId }}, -->
                                left: {{ lastUpdatedRect.left }}<br>
                                top: {{ lastUpdatedRect.top }}
                            </span>
                        </ItemToDrag>
                    </div>

                    <div v-if="mouseDown && lastUpdatedRect">
                        <span>Currently object location:</span><br>
                        left: {{ lastUpdatedRect.left }}, top: {{ lastUpdatedRect.top }}
                    </div>
                    <!--<div style="max-width: 600px; padding: 1rem;">
                        <div v-if="items.length > 0">{{ items }}</div>
                    </div>-->
                </div>
            </div>
        </div>
    </div>




</template>


<script setup lang="ts">
import { ref } from 'vue'
import ItemToDrag from './ItemToDrag.vue'

const leftValue = ref(60);
let topValue = ref(300);
const items = ref<Array<{ id: number, position: { top: number, left: number } }>>([])
const counter = ref(0);
const mouseDown = ref(false);
const currentDraggingId = ref<number | null>(null);

const lastUpdatedRect = ref<{ left: number, top: number } | null>(null);
const handleRectUpdated = (id: number, rect: null) => {
    currentDraggingId.value = id;
    lastUpdatedRect.value = rect;
};

// Methods

const increment = () => {

    counter.value += 1
    leftValue.value += 60

    if (counter.value % 4 === 0) {
        topValue.value += 60
        leftValue.value = 60
    }


}
const addComponent = () => {
    const id = items.value.length + 1
    const position = { top: topValue.value, left: leftValue.value }
    items.value.push({ id, position })
}

const addComponentAndIncrement = () => {

    if (counter.value >= 16) {
        return
    }

    addComponent();
    increment();
}
</script>

<style scoped>
h1 {
    padding: 5rem;
    padding-left: 0rem;
    padding-right: 0.5rem;
    font-size: 3rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 4rem);
    grid-template-rows: repeat(5, 4rem);
    gap: 1px;
}

.square {
    width: 4rem;
    height: 4rem;
    background-color: #ccc;
}

.outter-padding-and-margins {
    margin: 2rem;
}

.main-button-container {
    margin: 1rem;

}
</style>