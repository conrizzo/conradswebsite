<template>
    <div class="main-container-width">
        <div class="center-with-flex">
            <div id="about-background">
                <h1>Country Music Generator <br>(under construction)</h1>
                <p>Project started March 27th, 2024
                </p>
                <div class="top-paragraph-formatting">
                    <p>Country music plus Natural Language Processing in the same place!
                        Not an easy combination to find. The Frontend on this is
                        pretty crude at the moment, the main work is in designing queries for this in backend. I have
                        the lyrics in dictionaries
                        in a python file for a few songs. Essentially the goal is to help a user find a good country
                        song based on some inputs. Sentiment analysis
                        based on the themes of the country music lyrics is an idea as well. Based on a users selection
                        embedded youtube videos will be
                        shown based on input queries using NLP.

                    </p>

                    <p>At the moment lyrics are stored in a python file. Since this is showing embedded YouTube videos
                        this page uses
                        3rd party cookies from Google/Youtube.
                    </p>

                </div>
                <button style="margin: 1rem;" class="clean-button">Generate</button>

                <label class="check-box-label" v-for="(value, index) in checkBoxValues" :key="index"
                    :for="'acceptCheckBox' + index">
                    <span class="about-check-box-font">{{ value.label }}</span>
                    <input :id="'acceptCheckBox' + index" class="check-box" type="checkbox" name="myCheckBox"
                        v-model="value.checked">
                </label>

            </div>
        </div>
    </div>


    <div class="center-with-flex">

        <div class="grid-container">
<!--
            <div style="text-align: left; padding-bottom: 2rem;" v-for="song in songList" :key="song.id">
                <iframe width="420" height="315" :src="formatSong(song.YOUTUBE_URL_ID)">
                </iframe>
                <div>{{ song.id }}</div>
                <div>{{ song.title }}</div>
                <div>{{ formatSong(song.YOUTUBE_URL_ID) }}</div>
                <div>{{ song.artist }}</div>
                <div>{{ song.year }}</div>
                <div>{{ song.genre }}</div>

            </div>
        -->

        </div>

    </div>



    <CookieAccept />
    <!--<button class="clean-button">Show</button>-->
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

import CookieAccept from "@/components/CookieAccept.vue";
import { songList } from './countrySongs';

export default {
    name: 'CountryMusicView',
    components: {
        CookieAccept
    },
    setup() {
        const data = ref(null);
        const checkBoxValues = ref([
            { label: 'Happy', checked: false },
            { label: 'Beer', checked: false },
            { label: 'Trucks', checked: false },
            { label: 'Sad', checked: false },
            { label: 'Alligators', checked: false },
            { label: 'Texas', checked: false },
            { label: 'Gambling', checked: false },
            { label: 'German', checked: false },
        ]);



        onMounted(() => {
            // Your code here
        });

        const formatSong = (key: string) => {
            return 'https://www.youtube.com/embed/' + key;
        };

        return {
            data,
            songList,
            formatSong,
            checkBoxValues
        };
    }
};
</script>


<style scoped>
h1 {
    font-size: 4rem;
    padding: 2rem;
    text-align: left;
    background: rgb(255, 209, 93);
    color: rgb(18, 18, 18);
}

.main-container-width {
    width: 80rem;
    margin: 0 auto;
}

.top-paragraph-formatting {
    font-size: 1.25rem;
    text-align: left;
    padding: 2rem;
    max-width: fit-content;
    background: transparent;
}

.top-paragraph-formatting p {

    max-width: 100%;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: rgb(255, 221, 135);
    padding: 10px;
}

iframe {
    border: 1px solid #000000;
    /* Change as needed */
}

.check-box-label {

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    color: rgb(18, 18, 18);
}

.check-box {
    cursor: pointer;
    margin-left: 0.5rem;
    transform: scale(1.5);
}

input[type='checkbox'] {
    accent-color: #ffb662;
}

#about-background {
    /*
    background: linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
    background: -webkit-linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);  
    */
    background: -webkit-linear-gradient(-3deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
            40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%);
    background: linear-gradient(-2deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
            40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%),
        linear-gradient(45deg, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215), rgba(185, 134, 193, 0.5),
            rgb(139, 114, 188) 100%);
    background-size: 100% 100%;
    background-attachment: fixed;
    z-index: 0;
    text-align: left;
}
</style>