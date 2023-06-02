<template>
    <div class="background">
        <h1>Interesting NLP (Natural Language Processing)</h1>
        <p class="paragraph-text ">The goal here is to link interesting research papers, videos, webpages. This section is under development.
            Will likely categorize this for NLP, useful code links, and other topics.
        </p>
       
        <table>
            <thead>
                <tr>
                    <th>Publication Date</th>
                    <th>Title</th>
                    <th>Video</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(link, index) in links" :key="index">
                    <td>{{ link.date }}</td>
                    <td><a class="text-links break-text" :href=link.url>{{ link.title }}</a></td>
                    
                    <td><a class="text-links break-text" :href="link.videoUrl">{{ link.videoUrl }}</a></td>
                </tr>
            </tbody>
        </table>

    </div>
    <div class="push-footer"></div>
    <FirstFooter></FirstFooter>
</template>

<script>
import "@/assets/globalCSS.css";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
    name: "NLP",
    components: {
        FirstFooter,
    },
    data() {
        return {
            links: [
                {
                    date: "17 May 2023",
                    title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
                    url: "https://arxiv.org/abs/2305.10601",
                    videoUrl: "https://www.youtube.com/watch?v=ut5kp56wW_4",
                },
            ],
        };
    },
};
</script>

<style scoped>
h1 {
    color: black;
}
.background {
    background-color: rgb(255, 255, 255);
}
table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 2em;
}
th,
td {
    text-align: left;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    font-weight: bold;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* Testing article css styling for paragraphs - may use this globally on all pages */
p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 1.5em;
    text-align: justify;
}

p:first-of-type {
    margin-top: 1em;
}

p:last-of-type {
    margin-bottom: 1em;
}


</style>