<template>
    <section class="center-top-main-area-box">
        <div class="website-text-boxes">
            <h2 class="title">
                <span class="top-string-slice-of-title">
                    <span></span>
                </span>
            </h2>
            <div class="main-text-container">
                <ul class="main-text-ul">

                    <li>
                        Projects here are either to test things, or have fun
                    </li>

                    <li>
                        Updates empowered by coffee while birds fly around the windows all day
                    </li>

                    

                </ul>
                <div class="center-image">
                    <img :src="birdDrawingUrl" style="height: 9rem; padding-right: 1rem;" class="bird-image"
                        alt="Bird Drawing">
                    <img :src="aCoffeeUrl" style="height: 9rem;" alt="Coffee image">

                </div>

            </div>
            <div class="center-with-flex">
                <div style="padding: 1rem;">
                    <h3 style="font-size: 1rem; text-align: left; color: #fff;"></h3>


                    <ul style="font-size: 1rem; text-align: left; color: #fff; padding: 0.5rem; padding-left: 2rem;">
                        <li>
                            July, 2024 - Made a Fullstack Blackjack game. Game runs in Python. <router-link
                                to="/projects/cards" class="home-text-links list-links-text-decoration">Blackjack
                                Game</router-link>
                        </li>
                        <li>
                            June, 2024 - Other project is to learn how to use <a
                                class="home-text-links list-links-text-decoration"
                                href='https://socket.io/docs/v4/'>https://socket.io/docs/v4/</a>
                            to
                            create realtime updates to the server.
                        </li>

                        <li>
                            I've started to build a project in <a class="home-text-links list-links-text-decoration"
                                href='https://react.dev/blog/2023/03/16/introducing-react-dev'>React.js</a>
                            to compare+learn <a class="home-text-links list-links-text-decoration"
                                href="https://next.conradswebsite.com/">https://next.conradswebsite.com/</a> using React
                            and Next.js
                        </li>

                        <li>
                            May, 2024 - Set up <router-link class="home-text-links list-links-text-decoration"
                                to="/UserSignIn">User
                                logins</router-link> with my own Docker
                            PostgreSQL database. User login allows secure sessions with Axios, JWT http cookies, and
                            CSRF tokens that implicitly and explicitly refresh the user sessions.
                        </li>

                        <li>
                            SQL and database usage + doing side project in raw
                            JavaScript/TypeScript to learn more about other fundamentals of the language itself (no
                            frameworks).<br>
                            <a class="home-text-links list-links-text-decoration"
                                href="https://project.conradswebsite.com">project.conradswebsite.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import birdDrawing from '@/images/BlueSkyBird.jpg';
import aCoffee from '@/images/cup_of_coffee.jpg';
import init, { main } from "@/rust_web_assembly/hello_wasm.js";


const birdDrawingUrl = ref(birdDrawing) as Ref<string>;
const aCoffeeUrl = ref(aCoffee) as Ref<string>;

import { computed } from 'vue';
const isProduction = computed(() => process.env.NODE_ENV === 'production');
console.log(isProduction.value); // check if in producton mode

const name = ref('');
const inputString = ref("_ Projects");
const inputStringShuffled = ref<string>('');

const runRustArrayRandomizer = async () => {
    await init();
    const arr = name.value.split(" ");
    let mainFunction: string = main(arr).join(" ");
    inputStringShuffled.value = mainFunction;
};

const addLettersIntoInput = () => {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i < inputString.value.length) {
            name.value += inputString.value[i];
            runRustArrayRandomizer();
            i++;
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                inputStringShuffled.value = 'Projects';
            }, 1000);
        }
    }, 100);
};


onMounted(() => {
    addLettersIntoInput();
});

</script>

<style scoped>
.title {
    text-align: left;
    position: relative;
    line-height: 1;
    padding: 1em 0.25em 1em 2rem;
    color: rgb(255, 255, 255);
    font-size: 2em;
    z-index: 1;
    background: linear-gradient(to right, orange, red, pink);
}

.capText {
    text-transform: capitalize;
}

.top-string-slice-of-title {
    font-size: 2em;
}

.center-top-main-area-box {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: url('../../images/blue_sky2.jpg');
    /* 2 folders up */
    background-color: rgba(0, 0, 0, 0.1);
    background-blend-mode: multiply;
    background-size: 100% 100%;
    background-attachment: fixed;
    position: relative;
}

/*
.center-top-main-area-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(100deg, rgba(0, 0, 0, .1) 10%,
      transparent 10%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);*/
/*
      background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(70deg, rgba(0, 0, 0, .1) 10%,
      transparent 5%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);
}
*/

.center-bottom-main-area-box {
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
}

.center-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
    background: rgb(18, 18, 18);
}

.home-text-links {
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-bottom: 3px solid rgb(0, 171, 137);
    text-decoration: none;
}

.home-text-links:is(:hover, :focus) {
    background: rgb(0, 255, 204);
    color: rgb(40, 40, 40);
    border-bottom: none;
    font-weight: bold;
}

.home-text-links:active {
    color: rgb(255, 89, 89);
}

.list-links-text-decoration {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}

.main-text-container {
    display: flex;
    justify-content: left;
    /*max-width: 40rem; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0rem;
    color: #ffffff;
    font-size: 1.5em;
    text-align: left;
}

.main-text-ul {
    color: rgb(255, 255, 255);
    padding: 0.5rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-top: 2.5rem;
}

.website-text-boxes {
    z-index: 4;
    width: 71rem;
    background: rgb(44, 44, 44);
    margin-top: 4rem;
    margin-bottom: 4rem;
}

@media only screen and (max-width: 100rem) {}

@media only screen and (max-width: 60rem) {
    .main-text-container {
        grid-template-columns: repeat(1, 1fr);
    }

    .title {

        font-size: 1rem;

    }

    .main-text-container {

        font-size: 1.3em;

    }
}

@media only screen and (max-width: 50rem) {}
</style>