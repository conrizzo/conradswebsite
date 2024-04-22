<template>
    <div id="about-background">
        <div class="main-container-width">
            <div class="center-with-flex">
                <div style="background: #fff;">
                    <h1>Country Music Generator <br>(under construction)</h1>

                    <div class="top-paragraph-formatting">
                        <h2>Documenting steps and approach</h2>
                        <p>Project started March 27th, 2024</p>
                        <br>
                        <p>Country music plus Natural Language Processing in the same place!
                            Not an easy combination to find. The Frontend on this is
                            pretty crude at the moment, the main work is in designing queries for this in backend. I
                            have
                            the lyrics in dictionaries
                            in a python file for a few songs. Essentially the goal is to help a user find a good country
                            song based on some inputs. Sentiment analysis
                            based on the themes of the country music lyrics is an idea as well. Based on a users
                            selection
                            embedded youtube videos will be
                            shown.
                        </p>

                        <p>
                            At the moment lyrics are stored in a python file. Since this is showing embedded YouTube
                            videos
                            this page uses
                            3rd party cookies from Google/Youtube.
                        </p>
                        <br>
                        <p>
                            Here is a sample of tokenizing the lyrics for the current Country songs.
                            This is after Removing <a class="text-links"
                                href="https://en.wikipedia.org/wiki/Stop_word">stopwords</a>, common pronouns, and
                            punctuation. The objective is to
                            focus on
                            only words that carry higher information content. There may be some errors here.
                            This is an educational/research project to use Frontend, backend, and NLP.
                        </p>
                        <span style="background: lightyellow; padding: 0.25rem;">
                            Funny thing about some song lyrics is the most frequently used words in the lyrics often
                            match the title of the song.
                            This means if the actual title words are also removed from the lyrics it's hard to even
                            figure out what the song is about
                            after removing all but unique repeated words.
                        </span>
                        <p>
                            <b>Amos Moses:</b><br>
                            [('amos', 9), ('louisiana', 8), ('alligator', 7), ('man', 6), ('swamp', 5), ('called', 5),
                            ('moses', 4), ('lived', 4), ('boy', 3), ('forty-five', 3), ('minutes', 3), ('southeast', 3),
                            ('thibodaux', 3), ('doc', 3), ('millsap', 3), ('pretty', 3), ('wife', 3), ('hannah', 3),
                            ('son', 3), ('gon', 2)]
                            <br>
                            <b>Diggin' Up Bones: </b><br>
                            [('diggin', 22), ('bones', 22), ('alone', 12), ('sittin', 8), ('tonight', 7), ('love', 6),
                            ('resurrectin', 5), ('memories', 5), ('dead', 5), ('gone', 5), ('exhumin', 4), ('left', 4),
                            ('old', 2), ('went', 2), ('found', 2), ('night', 1), ('dug', 1), ('picture', 1), ('dresser',
                            1), ('drawer', 1)]
                            <br>
                            <b>Mamma Don't Let Your Babies Grow Up to Be Cowboys:</b><br>
                            [('mamas', 6), ('babies', 6), ('grow', 6), ('cowboys', 6), ('old', 4), ('love', 4), ('pick',
                            3), ('guitars', 3), ('drive', 3), ('trucks', 3), ('doctors', 3), ('lawyers', 3), ('never',
                            3), ('stay', 3), ('home', 3), ('always', 3), ('alone', 3), ('even', 3), ('someone', 3),
                            ('wo', 3)]
                        </p>
                        <p>Using <a class="text-links purple-text" href="https://github.com/nltk/nltk">NLTK</a> for much
                            of the text processing.</p>
                        <br>


                        <p>The difficult part about this is thinking of some creative way to search the songs. If all it
                            does is matches
                            words it's kind of boring - this is why NLP tools and creative approaches make it
                            interesting.
                        </p>
                        <p>
                            All the checkboxes are generated with a loop and their respective css properties and
                            reactivity are
                            attached to each looped element. This is made with Vue
                            <a class="text-links purple-text"
                                href="https://vuejs.org/guide/extras/composition-api-faq.html">composition API</a>.
                        </p>

                    </div>

                    <div class="sentiment-label-padding">
                        <h4>Sentiments</h4>
                        <div class="checkbox-item" v-for="(value, index) in sentimentCheckBox" :key="index">
                            <label :for="'sentimentCheckBox' + index" class="check-box-label">
                                <span class="about-check-box-font">{{ value.label }}</span>
                                <input :id="'sentimentCheckBox' + index" class="check-box" type="checkbox"
                                    name="sentimentCheckBox" v-model="value.checked">
                            </label>
                        </div>
                        <br>
                        <h4>Labels</h4>
                        <div class="checkbox-item" v-for="(value, index) in checkBoxValues" :key="index">
                            <label :for="'acceptCheckBox' + index" class="check-box-label">
                                <span class="about-check-box-font">{{ value.label }}</span>
                                <input :id="'acceptCheckBox' + index" class="check-box" type="checkbox"
                                    name="labelsCheckBox" v-model="value.checked">
                            </label>
                        </div>
                        <h4>Entity</h4>
                        <div>
                            <button @click="fetchData, generateButtonClicked()" style="margin: 1rem;"
                                class="clean-button">Generate</button>
                        </div>
                        Post Response: {{ postResponseData }}
                        <p>These are just some sample videos displayed - will match videos based on inputs with backend
                            code</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="query-array">
            Query that is sent to the backend to run in Python code: <br>
            Sentiments: {{ checkedSentiment }}<br>
            Labels: {{ checkedLabels }}
            Entity type:
        </div>
        <div v-if="generateButton" class="center-with-flex">
            <div class="grid-container video-area-width">

                <div v-for="song in songList" :key="song.id" style="height: 30rem;">

                    <div class="each-iframe">
                        <iframe :src="formatSong(song.YOUTUBE_URL_ID)">
                        </iframe>
                    </div>
                    <div class="song-description-area">
                        <div>{{ song.id }}</div>
                        <div>{{ song.title }}</div>
                        <div>{{ formatSong(song.YOUTUBE_URL_ID) }}</div>
                        <div>{{ song.artist }}</div>
                        <div>{{ song.year }}</div>
                        <div>{{ song.genre }}</div>
                    </div>

                </div>

            </div>
        </div>
        <CookieAccept />
    </div>
</template>
<!-- 
sometimes these file imports glitch red in vs code editor, have to reload editor 
I suppose this is normal when 3 or more editors are open using vs code insiders? 
-->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { postDataAndGetResponse } from './getBackend';
import { songList } from './countrySongs';
import { SongList2 } from './countrySongs';
import CookieAccept from "@/components/CookieAccept.vue";
console.log(SongList2);
const sentimentCheckBox = ref([
    { label: 'Happy', checked: false },
    { label: 'Sad', checked: false },
]);
const checkBoxValues = ref([
    { label: 'Beer', checked: false },
    { label: 'Trucks', checked: false },
    { label: 'Texas', checked: false },
    { label: 'Alligator', checked: false },
    { label: 'German', checked: false },
    { label: 'Gambling', checked: false },
]);
let generateButton = ref(false);

const checkedLabels = computed(() => checkBoxValues.value.filter(item => item.checked).map(item => item.label));
const checkedSentiment = computed(() => sentimentCheckBox.value.filter(item => item.checked).map(item => item.label));

let postResponseData: any = ref();

const fetchData = async () => {

    const url = '/backend/api/country_music_generator';

    console.log("click button");
    console.log(checkedLabels.value);
    console.log(url)
    try {
        postResponseData.value = await postDataAndGetResponse(url, checkedLabels.value, checkedSentiment.value);
        console.log(postResponseData.value);
    } catch (error) {
        console.error('Error:', error);
    }
};

const formatSong = (key: string) => {
    return 'https://www.youtube.com/embed/' + key;
};

const generateButtonClicked = () => {
    generateButton.value = true;
};

onMounted(() => {

});
</script>


<style scoped>
p {
    padding-bottom: 1rem;
}

h1 {
    font-size: 4rem;
    padding: 2rem;
    text-align: left;
    background: rgb(255, 209, 93);
    color: rgb(18, 18, 18);
}

h2 {
    font-size: 2rem;
}

h4 {

    font-size: 1.5rem;
    color: rgb(255, 106, 0);
}

.sentiment-label-padding {
    padding: 1rem;
}

.purple-text {
    color: rgb(156, 64, 242);
}

.query-array {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 1.25rem;
}

.main-container-width {
    padding-top: 3rem;
    max-width: 80rem;
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
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: (360px, auto);
    background-color: rgb(255, 221, 135);
    margin-bottom: 4rem;

}

iframe {
    border: 1px solid #000000;
    /* Change as needed */
}

.checkbox-item {
    display: inline-block;
    margin-left: 0rem;
    margin-bottom: 1rem;
}

.check-box-label {
    user-select: none;
    cursor: pointer;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    color: rgb(18, 18, 18);
    font-size: 1.3rem;
    padding: 0.5rem;

    box-sizing: border-box;

}

.check-box-label:hover {
    background: rgb(255, 221, 135);
}

.check-box {
    cursor: pointer;
    margin-left: 0.5rem;
    transform: scale(1.5);
}

input[type='checkbox'] {
    accent-color: rgb(255, 209, 93);
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
        linear-gradient(45deg, rgba(201, 253, 255, 0.9), 40%, rgb(173, 252, 255), rgba(0, 195, 255, 0.5),
            rgb(255, 255, 255) 100%);
    background-size: 100% 100%;
    background-attachment: fixed;
    z-index: 0;
    text-align: left;
}

.video-area-width {
    width: 80rem;


}

.each-iframe {
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    width: 100%;
    height: 50%;

}

.each-iframe iframe {
    position: absolute;
    width: 90%;
    margin-left: 5%;

    height: 95%;
    margin-top: 5%;
    left: 0;
    top: 0;

}

.song-description-area {
    padding: 1.5rem;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: 3rem;
    }
}

@media screen and (max-width: 60rem) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);

    }
}
</style>