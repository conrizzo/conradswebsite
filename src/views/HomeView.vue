<template>
    <!-- The plant image on this page is explicity copyrighted -->
    <!-- Photo by Conrad Lundberg - the owner of this website -->
    <!-- <div style="height: 100svh;" :class="['jungle-image', imageClass]"> -->
    <div @mousemove="handleMouseMove" id="top-image" class="top-image-flex" style="align-items: center; 
    box-sizing: border-box; 
    height: 88vh;">

        <div class="title-container">
            <div class="white center-with-flex title-text-spacing">
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

            <div style="height: 20rem;">
                <transition>
                    <div v-if="showMainContent" class="" style="background: rgba(0,0,0,.8); padding: 0.5rem;">

                        <div class="center-with-flex">
                            <ul class="ul-formatting">
                                <li>
                                    <router-link style="background: rgba(255,255,255,.2);"
                                        class="text-links link-customization my-projects-text-animation"
                                        to="/my-projects">
                                        My Projects
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="text-links link-customization about-color" to="/about">About
                                    </router-link>
                                </li>
                                <li>
                                    <a class="text-links link-customization"
                                        href="https://en.wikipedia.org/wiki/Exit_sign">
                                        <span style="margin-right: 10px;">Exit</span>
                                        <span class="exit-link"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p class="title-caption-color">
                            Background photo by Conrad Lundberg © 2023<br>
                            Plants at <a class="text-links font-override-white-color"
                                href="https://uni-tuebingen.de/en/facilities/central-institutions/welcome-to-the-botanical-garden/the-botanical-garden/greenhouses/">Tübingen
                                botanical garden</a><br>
                            Exit portal UIcon by <a class="text-links font-override-white-color"
                                href="https://www.flaticon.com/uicons">Flaticon</a>
                            <!-- Exit icon Copyright https://www.flaticon.com/uicons free to use with attribution 
                            https://www.flaticon.com/free-icon-font/portal-exit_10506900 -->
                            <!--<span style="font-size: 12px;">Exit UIcon by
                                <a class="text-links font-override-white-color"
                                    href="https://www.flaticon.com/uicons">Flaticon</a>
                            </span>-->
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
    const newvalueX = width * pageX+50 * - 1;
    const newvalueY = height * pageY * - 1;
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
.top-image-flex {
    display: flex;
    
}

#top-image {
    background: url('@/images/jungle/2880-1620.jpg') center;
    background-size: 105%;
    padding-left: 20rem;
    background-attachment: fixed;
    z-index: 0;
    background-repeat: no-repeat;
    background-color: rgb(18, 18, 18);
}

#top-image::before {
    position: absolute;
    background: url('@/images/jungle/2880-1620.jpg') center;
    background-size: 105%;
    padding-left: 20rem;
    background-attachment: fixed;
    z-index: 0;
    background-repeat: no-repeat;
}

.projects-underline-color-hover:hover {
    text-decoration: underline rgb(163, 255, 0);

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
    font-size: 2.25rem;
    list-style-type: none;
}

.ul-formatting {
    text-align: left;
    height: 12rem;
    width: 25rem;
    margin-left: 2.5rem;
}

li {
    text-transform: uppercase;
    margin-bottom: .25rem;
}


li:last-child {
    margin-bottom: 1rem;
}

.title-text-spacing {
    padding-top: 0rem;
    margin-bottom: 2rem;
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

/*
.about-color {
    color: lightblue !important;
}

.about-color:hover {
    color: rgb(0, 255, 204) !important;
}
*/

.my-projects-text-animation {
    animation: pulse 4s;
}

.my-projects-text-animation:hover {
    color: rgb(0, 255, 204) !important;
}

.link-customization {
    color: white;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-left: -1.5rem;
    background: rgba(255, 255, 255, 0.05);
    padding-left: 1rem;
    padding-right: 1rem;
}

.link-customization:hover {
    text-decoration: none;
    color: rgb(0, 255, 204);
    margin-left: 0rem;
    transition: .3s ease-in-out;
}


.link-customization::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: rgb(0, 255, 204);
    transition: width .1s ease-in-out;
    z-index: 0;
    margin-left: -1.5rem;
}

.link-customization:hover::before {
    width: 1rem;
    margin-left: -1.45rem;

}

.attention-notice-container {
    color: rgb(0, 0, 0);
    background: rgb(255, 176, 72, 0.75);
    width: fit-content;
    padding: 0.25rem;
    padding-right: .5rem;
    padding-left: .5rem;
    margin-bottom: 1rem;
}

.attention-message {
    padding-left: .5rem;
    padding-top: 0.2rem;
    font-size: 1.1rem;

}

.center-area-padding {
    padding: 2rem;
    padding-bottom: 0rem;
    padding-top: 1rem;

}

.h1-span-one {
    font-size: 3rem;
    
}

.h1-span-two {
    font-size: 5rem;
    letter-spacing: -3px;

}

.h1-span-three {
    font-size: 6rem;
    letter-spacing: 3px;
    padding: 5px;

}

.h1-fade-in-letters {
    opacity: 0;
    animation: fadeIn .5s forwards;

}

.title-caption-color {
    color: rgb(255, 255, 255);
}


@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* text animation glow */
@keyframes pulse {

    0% {
        text-shadow: 0 0 1px #126a58, 0 0 1px #126a58, 0 0 1px #126a58, 0 0 1px #126a58;
        color: #00ffcc;
    }


    100% {
        text-shadow: 0 0 20px #000000, 0 0 30px #000000, 0 0 40px #000000, 0 0 50px #000000, 0 0 60px #000000;
        color: rgb(255, 255, 255);
    }

    /*
    50% {
        text-shadow: 0 0 20px #000000, 0 0 30px #000000, 0 0 40px #000000, 0 0 50px #000000, 0 0 60px #000000;
        color: rgb(255, 255, 255);
    }

    100% {
        text-shadow: 0 0 1px #126a58, 0 0 1px #126a58, 0 0 1px #126a58, 0 0 1px #126a58;
        color: #00ffcc;
    }
    */

}

.exit-link {
    color: rgb(255, 255, 255);
    margin-left: -.5rem;
}

/* Exit icon Copyright https://www.flaticon.com/uicons free to use with attribution
     https://www.flaticon.com/free-icon-font/portal-exit_10506900  */
.exit-link::after {
    margin-left: .5rem;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="m24,12.5c0,.828-.671,1.5-1.5,1.5h-1.5c-1.221,0-2.37-.649-2.999-1.695l-.552-.917-1.332,3.247,2.614,1.486c1.091.62,1.769,1.786,1.769,3.042v3.337c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-3.337c0-.18-.097-.346-.252-.435l-4.081-2.322c-1.498-.947-2.073-2.749-1.428-4.322l1.265-3.084h-1.268c-.19,0-.362.105-.447.276l-1.447,2.895c-.371.741-1.271,1.041-2.013.671-.741-.371-1.041-1.271-.671-2.013l1.447-2.895c.597-1.193,1.796-1.935,3.13-1.935h3.993c1.221,0,2.37.649,3,1.695l1.843,3.062c.091.151,.251.242,.428.242h1.5c.829,0,1.5.672,1.5,1.5Zm-12.442,4.351c-.771-.309-1.642.066-1.95.835-.077.191-.259.314-.464.314h-4.143c-.552,0-1-.448-1-1s.448-1,1-1h.826c.111-1.253,.174-2.595,.174-4C6,5.373,4.657,0,3,0S0,5.373,0,12s1.343,12,3,12c.76,0,1.453-1.134,1.981-3h4.162c1.439,0,2.715-.863,3.25-2.199.308-.77-.066-1.643-.835-1.95Zm6.442-11.851c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z" /></svg>');
    /* Other styles go here */
}

@media only screen and (max-width: 50rem) {

    /* Remove animation on low resolution, so phone device doesnt lag */
    .my-projects-text-animation {
        animation: none;
    }

    .top-image-flex {
        padding-left: 0%;
        justify-content: center;
    }

    .h1-span-one {
        font-size: 2.4rem;
    }

    .h1-span-two {
        font-size: 4rem;
    }

    .h1-span-three {
        font-size: 5rem;
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

    .ul-formatting {
        text-align: left;
        height: 9rem;
        width: 18rem;
        margin-left: 1.9rem;
        font-size: 1.8rem;
    }

    #top-image {
        padding-left: 0rem;
        background-size: cover;
    }

}
</style>