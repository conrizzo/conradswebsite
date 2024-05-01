<template>
    <!-- The plant image on this page is explicity copyrighted -->
    <!-- Photo by Conrad Lundberg - the owner of this website -->
    <!-- <div style="height: 100svh;" :class="['jungle-image', imageClass]"> -->
    <div @mousemove="handleMouseMove" id="top-image" class="top-image-flex" style=" 
    box-sizing: border-box; 
    height: 88vh;">

        <div class="title-container">

            <div style="height: 20rem;">
                <div class="title-text-spacing center-with-flex">
                    <div>
                        <h1>
                            <div class="h1-span-one">
                                <span v-for="(letter, index) in 'Welcome to'" :key="index"
                                    class="h1-fade-in-letters text-gradient-color"
                                    :style="{ 'animation-delay': index * 0.05 + 's' }">{{ letter }}</span>
                            </div>

                            <span class="h1-span-two">
                                <span v-for="(letter, index) in 'Conrad\'s'" :key="index"
                                    class="h1-fade-in-letters text-gradient-color"
                                    :style="{ 'animation-delay': index * 0.05 + 's' }">{{ letter }}</span>
                            </span>

                            <span class="h1-span-three">
                                <span v-for="(letter, index) in ' Website'" :key="index"
                                    class="h1-fade-in-letters text-gradient-color"
                                    :style="{ 'animation-delay': index * 0.1 + 's' }">{{ letter }}</span>
                            </span>
                        </h1>

                    </div>
                </div>
                <transition>
                    <div v-if="showMainContent" class=""
                        style="background: rgba(0,0,0,.8); padding: 0.5rem; border-radius: .75rem;">


                        <div class="center-with-flex">
                            <ul class="ul-formatting">
                                <li>
                                    <router-link class="text-links link-customization my-projects-text-animation"
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
                                        <span class="svg-resizing">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px"
                                                y="0px" width="100%" height="100%" viewBox="0 0 560 560"
                                                transform="scale(-1, 1)" xml:space="preserve">
                                                <path fill="rgb(255,255,255)"
                                                    d="M 490.00847,426.30353 476.01016,389.202 c -6.29359,-15.40393 -20.29754,-25.90277 -37.80672,-25.90277 h -6.29359 V 43.395188 H 128.10708 V 220.49813 h 39.90082 l 45.50014,-56.705 c 9.10455,-10.49319 23.09721,-17.50371 38.49535,-17.50371 h 97.30516 c 15.39814,0 28.69653,8.39343 35.69568,21.70324 l 28.70782,54.59395 c 1.39983,2.09977 2.0941,4.9051 2.0941,8.40471 0,9.79327 -8.39898,18.19234 -18.20344,18.19234 -7.69907,0 -13.29275,-3.49397 -16.80361,-9.79327 l -25.89123,-49.70013 h -42.00056 l 32.1961,80.50236 9.80446,102.89424 h 83.28993 c 13.30968,0 23.80841,8.40471 28.70782,19.60911 l 9.0989,23.79736 H 333.19921 c -10.48744,0 -19.59763,-7.6935 -20.2919,-18.19798 l -9.80446,-90.30128 -76.99069,159.59924 c -4.20513,9.10464 -14.00395,15.40394 -25.20259,15.40394 h -37.1068 l 94.5055,-195.30657 -29.3908,-73.4975 -28.0079,34.30185 c -6.99351,9.10463 -18.90901,15.39829 -31.50184,15.39829 h -41.295 v 231.00261 l 65.79768,65.09843 H 0 V 0 h 560 v 559.99436 h -63.00367 l -65.09212,-65.09843 v -68.5924 z M 228.20627,64.39286 c 21.70302,0 39.89517,18.203626 39.89517,39.90122 0,21.70324 -18.19215,39.2013 -39.89517,39.2013 -21.70302,0 -39.20655,-17.49806 -39.20655,-39.2013 0,-21.697594 17.50353,-39.90122 39.20655,-39.90122 M 245.70979,509.59994 296.10934,560 h -60.90957 l -65.79768,-65.10407 h 39.19526 c 14.00959,0 27.30798,5.60502 37.11244,14.70401" />
                                            </svg>
                                        </span>
                                    </a>




                                </li>

                            </ul>

                        </div>
                        <references />
                    </div>
                </transition>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import references from "@/components/References/HomePageFooterReferencesView.vue";
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
    const newvalueX = width * pageX + 50 * - 1;
    const newvalueY = height * pageY * - 1;
    (e.target as HTMLElement).style.backgroundPosition = `${newvalueX}px ${newvalueY}px`;
};




onMounted(() => {

    setTimeout(() => {
        imageClass.value = 'jungle-image-clear';
    }, 500); // start transition 100ms after component is mounted
    setTimeout(() => {
        showMainContent.value = true;
    }, 0); // start transition 100ms after component is mounted

});

</script>

<style scoped>
/* transition div in */
.v-enter-active,
.v-leave-active {
    transition: opacity .5s ease;
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
    align-items: center;

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
    height: 11rem;
    width: 25rem;
    margin-left: 2.5rem;
}

li {
    text-transform: uppercase;

}


li:last-child {
    margin-bottom: 0rem;
}

.title-text-spacing {}

h1 {
    line-height: 0.9;
    text-align: left;
    padding-bottom: 0.5rem;
    color: rgb(255, 212, 147);
}

h2 {
    text-align: left;
}

.text-gradient-color {
    color: rgb(255, 255, 255);
    text-shadow:
        -1px -1px 0 rgba(0, 0, 0, .2),
        1px -1px 0 rgba(0, 0, 0, .2),
        -1px 1px 0 rgba(0, 0, 0, .2),
        1px 1px 0 rgba(0, 0, 0, .2),
        4px 4px 8px rgba(0, 0, 0, 0.66);
    /* Fallback for non-webkit browsers */
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
    color: rgb(112, 169, 247) !important;
}

.link-customization {
    color: white;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    padding-left: 1rem;
    padding-right: 1rem;

}

.link-customization:hover {
    text-decoration: none;
    color: rgb(112, 169, 247);
    margin-left: 0rem;

    transition: .33s ease-in-out;
}


.link-customization::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: rgb(242, 171, 165);
    transition: width .1s ease-in-out;
    z-index: 0;
    margin-left: -1rem;

}

.link-customization:hover::before {
    width: 1rem;
    margin-left: -1rem;
    background: rgb(254, 205, 150);
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

.svg-resizing {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin-top: .75rem;
}

.h1-span-one {
    font-size: 2rem;
}

.h1-span-two {
    font-size: 3rem;

    margin-left: 0px;

}

.h1-span-three {
    font-size: 3rem;


}

.h1-fade-in-letters {
    opacity: 0;
    animation: fadeIn .5s forwards;

}

.title-caption-color {
    color: rgb(255, 255, 255);
    text-align: left;
    font-size: .9rem;
}


@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* text animation glow */
@keyframes pulse {

    0% {
        text-shadow: 0 0 1px #434343, 0 0 1px #434343, 0 0 1px #434343, 0 0 1px #434343;
        color: rgb(254, 205, 150);
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


@media only screen and (max-width: 50rem) {

    .svg-resizing {
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        margin-top: .69rem;
    }


    .title-caption-color {
        font-size: 0.8rem;
    }


    /* Remove animation on low resolution, so phone device doesnt lag */
    .my-projects-text-animation {
        animation: none;
    }

    .top-image-flex {
        padding-left: 10%;
        /*justify-content: center; */
    }

    .h1-span-one {
        font-size: 1.5rem;

    }

    .h1-span-two {
        font-size: 2.5rem;

        margin-left: -3px;

    }

    .h1-span-three {
        font-size: 2.5rem;


    }

    /*
    .title-container::before {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, .5) 1%,
                transparent 1%,
                transparent 99%, rgba(0, 0, 0, .5) 99%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.5) .5%,
                transparent .5%,
                transparent 99.5%, rgba(0, 0, 0, 0.5) 99.5%);
        filter: blur(3px);
    }
*/
    .ul-formatting {
        text-align: left;
        height: 9rem;
        width: 18rem;
        margin-left: 1.9rem;
        font-size: 1.8rem;
    }

    #top-image {
        justify-content: center;
        padding-left: 0rem;
        background-size: cover;
    }



}
</style>