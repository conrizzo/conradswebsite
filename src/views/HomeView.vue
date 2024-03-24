<template>
    <!-- The plant image on this page is explicity copyrighted -->
    <!-- Photo by Conrad Lundberg - the owner of this website -->
    <!-- <div style="height: 100svh;" :class="['jungle-image', imageClass]"> -->
    <div @mousemove="handleMouseMove" id="top-image" style="display: flex; 
    align-items: center; 
    justify-content: center; 
    box-sizing: border-box; /* Include padding and border in the element's total width and height */    
    height: 88vh;">

        <div class="title-container">
            <div class="container-80-em white center-with-flex title-text-spacing">
                <div>
                    <h1>
                        <span class="h1-span-one">
                            <span v-for="(letter, index) in 'Welcome To'" :key="index" class="h1-fade-in-letters"
                                :style="{ 'animation-delay': index * 0.05 + 's' }">{{ letter }}</span>
                        </span>
                        <br>
                        <span class="h1-span-two">
                            <span v-for="(letter, index) in 'Conrad\'s'" :key="index" class="h1-fade-in-letters"
                                :style="{ 'animation-delay': index * 0.05 + 's' }">{{ letter }}</span>
                        </span>
                        <br>
                        <span class="h1-span-three">
                            <span v-for="(letter, index) in 'Website'" :key="index" class="h1-fade-in-letters"
                                :style="{ 'animation-delay': index * 0.1 + 's' }">{{ letter }}</span>
                        </span>
                    </h1>
                </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: center; height: 24rem;">
                <transition>
                    <div v-if="showMainContent" class="container-80-em white center-area-padding"
                        style="background: rgba(0,0,0,.7);">

                        <div class="center-with-flex attention-notice-container">
                            <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32"
                                fill="white">
                                <path
                                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                            </svg>
                            <span class="attention-message">
                                Attention: this website is continually being updated!</span>
                        </div>

                        <ul style="margin-left: 2rem; text-align: center;">
                            <li>
                                <router-link class="text-links link-customization" to="/my-projects">My
                                    Projects</router-link>
                            </li>
                            <li>
                                <router-link class="text-links link-customization" to="/about">About</router-link>
                            </li>
                            <li>
                                <a class="text-links link-customization exit-link"
                                    href="https://en.wikipedia.org/wiki/Exit_sign">
                                    <span style="margin-right: 10px;">Exit</span>
                                    <!-- Exit icon Copyright https://www.flaticon.com/uicons free to use with attribution -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" id="Layer_1" data-name="Layer 1"
                                        viewBox="0 0 24 24" width="32" height="32">
                                        <path
                                            d="m24,12.5c0,.828-.671,1.5-1.5,1.5h-1.5c-1.221,0-2.37-.649-2.999-1.695l-.552-.917-1.332,3.247,2.614,1.486c1.091.62,1.769,1.786,1.769,3.042v3.337c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-3.337c0-.18-.097-.346-.252-.435l-4.081-2.322c-1.498-.947-2.073-2.749-1.428-4.322l1.265-3.084h-1.268c-.19,0-.362.105-.447.276l-1.447,2.895c-.371.741-1.271,1.041-2.013.671-.741-.371-1.041-1.271-.671-2.013l1.447-2.895c.597-1.193,1.796-1.935,3.13-1.935h3.993c1.221,0,2.37.649,3,1.695l1.843,3.062c.091.151,.251.242,.428.242h1.5c.829,0,1.5.672,1.5,1.5Zm-12.442,4.351c-.771-.309-1.642.066-1.95.835-.077.191-.259.314-.464.314h-4.143c-.552,0-1-.448-1-1s.448-1,1-1h.826c.111-1.253,.174-2.595,.174-4C6,5.373,4.657,0,3,0S0,5.373,0,12s1.343,12,3,12c.76,0,1.453-1.134,1.981-3h4.162c1.439,0,2.715-.863,3.25-2.199.308-.77-.066-1.643-.835-1.95Zm6.442-11.851c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        <p style="margin-bottom: -2rem; ">
                            Background photo by Conrad Lundberg. © 2023<br>
                            Plants at <a class="text-links link-customization"
                                href="https://uni-tuebingen.de/en/facilities/central-institutions/welcome-to-the-botanical-garden/the-botanical-garden/greenhouses/">Tübingen
                                botanical garden</a><br>
                            <span style="font-size: 12px;">Attention Icon by <a
                                    class="text-links font-override-white-color"
                                    href="https://fontawesome.com/license/free">Font Awesome</a>, Exit Icon by
                                <a class="text-links font-override-white-color"
                                    href="https://www.flaticon.com/uicons">Flaticon</a></span>
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const data = ref(null);

//const jungleImage = ref(require('@/images/jungle/2880-1620.jpg'));
const imageClass = ref('');
const showMainContent = ref(false);


// background movement on mouse move effect
const movementStrength = 100;
const height = movementStrength / window.innerHeight;
const width = movementStrength / window.innerWidth;

const handleMouseMove = (e: MouseEvent) => {
    const pageX = e.pageX - (window.innerWidth / 2);
    const pageY = e.pageY - (window.innerHeight / 2);
    const newvalueX = width * pageX * + -1;
    const newvalueY = height * pageY * -1;
    (e.target as HTMLElement).style.backgroundPosition = `${newvalueX}px ${newvalueY}px`;
};




onMounted(() => {

    setTimeout(() => {
        imageClass.value = 'jungle-image-clear';
    }, 500); // start transition 100ms after component is mounted
    setTimeout(() => {
        showMainContent.value = true;
    }, 500); // start transition 100ms after component is mounted

});

</script>

<style scoped>
/* transition div in */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.title-container {
    z-index: 2;
}

/*
.title-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .5) 1%,
            transparent 1%,
            transparent 90%, rgba(0, 0, 0, .5) 90%),
        linear-gradient(90deg, rgba(0, 0, 0, 0.5) .5%,
            transparent .5%,
            transparent 99.5%, rgba(0, 0, 0, 0.5) 99.5%);
    filter: blur(3px);
    
}
*/
.title-padding {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 3rem;
}

/* raise all the items in the blur effect children */
.jungle-image>* {
    position: relative;
    z-index: 1;
}

.jungle-image {
    position: relative;
    overflow: hidden;

}

/*
.jungle-image::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('@/images/jungle/2880-1620.jpg') center;
    background-size: cover;
    background-attachment: fixed;   
    filter: blur(5px);
    transition: filter 1s ease-in-out;

}
*/
#top-image {
    background: url('@/images/jungle/2880-1620.jpg') center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 0;
}

#top-image::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image:
        linear-gradient(90deg, rgba(0, 0, 0, 0.33) 1%,
            transparent 1%,
            transparent 99%, rgba(0, 0, 0, .33) 99%);
    filter: blur(3px);
}

.font-override-white-color {
    color: white !important;
}

.jungle-image-clear {
    filter: blur(0);
}

.jungle-image-clear::before {
    filter: blur(0);
}

.text-bottom-half-change {
    background: linear-gradient(180deg, rgb(225, 225, 225) 70%, rgba(255, 255, 255, 0.1) 90%, rgba(255, 255, 255, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

ul {
    font-size: 2rem;
    list-style-type: none;
}

li:last-child {
    margin-bottom: 1rem;
}

.title-text-spacing {
    padding-top: 0rem;
    margin-bottom: 0;
}

h1 {
    line-height: 0.9;
    text-align: left;
    padding-bottom: 1rem;
    color: rgb(255, 255, 255);
}

h2 {
    text-align: left;
}

.link-customization {
    color: #fff;
}

.attention-notice-container {
    color: rgb(42, 42, 42);
    background: rgba(255, 165, 69, 0.8);
    width: fit-content;
    padding: 0.5rem;
    margin-bottom: 1rem;
}

.attention-message {
    padding-left: .5rem;
    padding-top: 0.2rem;
    font-size: 1.1rem;
}

.center-area-padding {
    padding: 2rem;
}

.h1-span-one {
    font-size: 3rem;

}

.h1-span-two {
    font-size: 5rem;
    letter-spacing: -3px;

}

.h1-span-three {
    font-size: 7rem;
    letter-spacing: 3px;
    padding: 5px;
}

.h1-fade-in-letters {
    opacity: 0;
    animation: fadeIn .5s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.exit-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
}

@media only screen and (max-width: 50rem) {
    .h1-span-one {
        font-size: 2rem;
    }

    .h1-span-two {
        font-size: 4rem;
    }

    .h1-span-three {
        font-size: 6rem;
    }

    .title-text-spacing {
        padding-top: 2rem;
    }

    .title-container::before {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, .5) 1%,
                transparent 1%,
                transparent 99%, rgba(0, 0, 0, .5) 99%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.5) .5%,
                transparent .5%,
                transparent 99.5%, rgba(0, 0, 0, 0.5) 99.5%);
        filter: blur(3px);
    }

}
</style>