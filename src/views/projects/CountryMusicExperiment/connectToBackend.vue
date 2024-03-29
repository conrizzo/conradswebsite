<template>
    <div>
        <search></search>

    </div>

    <button class="clean-button">Show</button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

import { songList } from './countrySongs';

export default {
    name: 'CountryMusicView',
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