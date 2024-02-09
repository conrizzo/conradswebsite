<template>
    <div>
        <h1>Country Music Experiment</h1>
    </div>
    {{ songList[0].id }}
    <div class="grid-container">
        <div v-for="song in songList" :key="song.id">
            <div>{{ song.id }}</div>
            <div>{{ song.title }}</div>
            <div>{{ formatSong(song.YOUTUBE_URL_ID) }}</div>
            <div>{{ song.artist }}</div>
            <div>{{ song.year }}</div>
            <div>{{ song.genre }}</div>
            <iframe width="420" height="315" :src="formatSong(song.YOUTUBE_URL_ID)">
        </iframe>
        </div>

    </div>
    <div>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/n7GyLr7Cz2g">
        </iframe>
    </div>

    <button class="clean-button">Show</button>
</template>

<script lang="ts">
import { ref, onMounted} from 'vue';

import { songList } from './countrySongs';

export default {
    name: 'YourComponentName',
    setup() {
        const data = ref(null);



        onMounted(() => {
            // Your code here
        });

        const formatSong = (key: string) => {
            return 'https://www.youtube.com/embed/' + key;
        };

        return {
            data,
            songList,
            formatSong
        };
    }
};
</script>


<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto;
    background-color: #2196F3;
    padding: 10px;
}
</style>