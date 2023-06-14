<template>
    <div>
        <h1>Hello World!</h1>
        <button class="button-35">test</button>
    </div>

 <FirstFooter></FirstFooter>  
</template>

<script>

import "@/assets/globalCSS.css";

import "@/components/CowGame.vue"

import FirstFooter from "@/components/FirstFooter.vue";

export default {
    name: 'CowGameView',
    components: { FirstFooter },
    data() {
        return {
            message: 'Welcome to the Cow Game!'
        }
    }
}
</script>

<style>
/* Add your styles here */
</style>
