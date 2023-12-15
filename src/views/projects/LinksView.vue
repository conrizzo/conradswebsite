<template>
    <body>
    <div class="fill-page-to-footer">
      <div class="background">
        <h1>Interesting Links</h1>
        <p class="paragraph-text">The goal here is to link interesting research papers, videos, webpages. This section is under development. Any links that
            I find particularly useful will go here soon...
        </p>
       
        <table>
            <thead>
                <tr>
                    <th>Publication Date</th>
                    <th>Title / Description</th>
                    <th>Video</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(link, index) in links" :key="index">
                    <td>{{ link.date }}</td>
                    <td><a class="text-links break-text" :href=link.url>{{ link.title }}</a><br><br>
                        {{link.description}} </td>
                    
                    <td><a class="text-links break-text" :href="link.videoUrl">{{ link.videoUrl }}</a></td>
                </tr>
            </tbody>
        </table>

    </div>
   
</div>

</body>
</template>

<script>
import "@/assets/globalCSS.css";


export default {
    name: "NLP",
    components: {
   
    },
    data() {
        return {
            links: [
                {
                    date: "31 May 2023",
                    title: "Introducing BERTopic Integration with the Hugging Face Hub",
                    description: "Interesting tool for topic modeling.",
                    url: "https://huggingface.co/blog/bertopic",
                    
                },
                {
                    date: "17 May 2023",
                    title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
                    url: "https://arxiv.org/abs/2305.10601",
                    videoUrl: "https://www.youtube.com/watch?v=ut5kp56wW_4",
                },
                {
                    date: "November 1, 2018",
                    title: "Good article web security vulnerabilities using NPM",
                    url: "https://www.voitanos.io/blog/don-t-be-alarmed-by-vulnerabilities-after-running-npm-install/",
                   
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
body{
    background-color: rgb(40, 40, 40);
}
.background {
    background-color: rgb(80, 80, 80);
}
table {
    border-collapse: collapse;
    width: 95%;    
    margin: 1em auto;
   
}
th,
td {
    text-align: left;
    padding: 0.5em;
    color: #fff;
}
th {
    background-color: #252525;
    font-weight: bold;
}
tr:nth-child(even) {
    background-color: #2c2c2c;
}

/* Testing article css styling for paragraphs - may use this globally on all pages */
p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 1.5em;
    text-align: justify;
    color: #fff;
}

p:first-of-type {
    margin-top: 1em;
}

p:last-of-type {
    margin-bottom: 1em;
}


</style>