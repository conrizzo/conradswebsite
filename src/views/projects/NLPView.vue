<template>
    <div class="background-color">
        <main class="main-container">
            <div class="inner-flexbox-column">
                <div style="align-self: flex-start;">
                    <h1>Cosine similarity with sentence transformers using Frontend website inputs to run backend Python
                    </h1>
                    <p>Made 12th February, 2024</p>
                    <p>What is <a class='text-links'
                            href='https://en.wikipedia.org/wiki/Natural_language_processing'>NLP</a>?<br>
                        What is <a class="text-links" href="https://en.wikipedia.org/wiki/Cosine_similarity">Cosine
                            Similarity</a>?<br>
                        What are <a class="text-links" href="https://www.sbert.net/">Sentence Transformers</a>?<br>
                        What model is this using? <a class="text-links"
                            href="https://huggingface.co/sentence-transformers/multi-qa-mpnet-base-dot-v1">multi-qa-mpnet-base-dot-v1</a>
                    </p>

                </div>
                <div class="form-container">

                    <ul style="padding-left: 2rem;">
                        <li><a class="text-links" href="https://gemini.google.com/app">Gemini</a></li>
                        <li><a class="text-links" href="https://chat.openai.com/">OpenAI Chat</a></li>
                        <li><a class="text-links" href="https://www.perplexity.ai/">Perplexity AI</a></li>
                        <li><a class="text-links" href="https://github.com/features/copilot">GitHub Copilot</a></li>
                    </ul>
                    <p> AI tools, including these listed above,
                        have rapidly gained popularity. Frequently featured in news articles, the authors of these tools
                        claim they are the best at certain things and outperform their
                        competitors in specific tasks, and so the advancements, or at least claims of advancement are
                        frequent. I'm inclined to believe many of the newest claims are just marketing. Making
                        significant improvements
                        on models that already perform a task pretty well is exceptionally difficult.

                    </p>
                    <p>
                        It's also
                        extremely difficult
                        to actually evaluate how good a model performs without rigorous trials that actually test the
                        model in an emperical way. This is difficult with language since language can be ambiguous and
                        essentially have infinite
                        combinitions of how words can actually be used.
                    </p>

                    <p>
                        To illustrate how these tools work, consider the simple demonstration below. It shows how web
                        technologies can use simple inputs to perform complex tasks fast via pre-trained embeddings on a
                        backend.
                    </p>

                    <p>
                        In essence, AI tools operate similarly. They compare a typed string to a database, likely
                        containing
                        millions of embeddings. These embeddings likely took massive computing resources
                        and extensive training times in order to enable their respective AI models to perform tasks
                        well.
                    </p>
                    <p>
                        As a reminder, this is just a basic demonstration area to build and test some tools. The actual
                        processes involved in
                        AI are far more complex and resource-intensive. These input fields below merely compare
                        pre-trained
                        vectors in
                        vectorspace to return a similarity score. The more similar semantically the words or sentences
                        are,
                        the
                        closer the score is
                        to 1. If the semantic meanings of words and sentences are completely opposite the score will be
                        close to
                        0.
                    </p>
                    <p> For instance, consider the sentences..<br> Sentence 1: "<i>Huge place where people buy
                            stuff</i>"
                        <br>
                        Sentence 2: "<i>A gigantic store</i>"<br>
                        Despite having no identical words, these sentences yield a high similarity score (0.729) due to
                        their
                        similar meanings.<br>
                        A second example:<br>
                        Sentence 1: "Where is the feline?"<br>
                        Sentence 2: "I don't know how to find the cat!"<br>
                        yields a similarity score of (0.7714)
                    </p>

                    <h2 class="form-title">Compare Cosine similarity:</h2>
                    <form @submit.prevent="testCosine(s1, s2)" class="form">
                        <label class="include-label-text">Words/Sentence to Compare to Sentence 2</label>
                        <input class="input-field-style" type="text" v-model="s1" placeholder="sentence 1" />
                        <label class="include-label-text">Words/Sentence to Compare to Sentence 1</label>
                        <input class="input-field-style" type="text" v-model="s2" placeholder="sentence 2" />

                        <input style="max-width: 5rem;" class="clean-button" type="submit" value="Submit" />
                    </form>

                    <p v-if="isLoading"><span class="loading">Loading</span></p>
                    <p v-else>{{ cosineAnswer.similarity_score }}</p>

                    <p> The closer the score is to 1 the more semantically similar the comparison between
                        words/sentences. Limited to 1 submit per 10 seconds. This is taking JSON and sending it to
                        backend python code in Flask,
                        which is using the sentence transformers library and a pre-trained model of sentence embeddings
                        to
                        return the answer.<br>
                        (Note: All messages are sent securely via https to the backend server, processed, then returned
                        here
                        to
                        the user.</p>
                </div>



            </div>
        </main>
    </div>
</template>




<script setup>
import { ref } from 'vue';



const s1 = ref('');
const s2 = ref('');
const cosineAnswer = ref({});
const isLoading = ref(false);

async function testCosine(sentenceOne, sentenceTwo) {

    s1.value = sentenceOne;
    s2.value = sentenceTwo;

    isLoading.value = true;

    try {
        const response = await fetch('https://conradswebsite.com/backend/api/cosine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sentence1: s1.value, sentence2: s2.value }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data);

        cosineAnswer.value = data;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        isLoading.value = false;
    }
}

</script>

<style scoped>
.background-color {
    background: rgb(20, 22, 23);
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container {
    background: rgb(50, 50, 50);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
}

.inner-flexbox-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    text-align: left;
}

h1 {
    margin-bottom: 0em;
    font-size: 3em;
    border-radius: 0.2em;
    line-height: 1.2;
    padding-top: 2rem;
    padding-bottom: 2rem;
    align-self: flex-start;
}

h2 {
    text-align: left;
}

p {
    max-width: none;
    padding-top: 1rem;
    font-size: var(--fs-400);
}

.text-links {
    color: #00a2ff;

}

.form>* {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    max-width: 40rem;
}

.form-title {
    color: rgb(255, 255, 255);
    margin-top: 1rem;

}

.form-container {
    margin-top: 1.5rem;
    text-align: left;
}


.include-label-text {
    display: flex;
    align-items: flex-start;
    margin-bottom: -0.5rem;
    color: rgb(255, 255, 255);
    cursor: auto;
}

.input-field-style {
    padding: 5px 10px;
    margin: 8px 0;
    margin-left: 0rem;
    border-radius: 0.5em;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-right: .5rem;
    font-size: 1rem;
    width: 100%;
}


.input-field-style:focus {
    outline: none !important;
    border: 1px solid #42b883;
    box-shadow: 0 0 5px #42b883;
}

.loading {
    font-family: sans-serif;
    font-size: 1.25em;
}

.loading:after {
    display: inline-block;
    animation: dotty 1s steps(1, end) infinite;
    content: '';
}

@keyframes dotty {
    0% {
        content: '.';
    }

    20% {
        content: '.';
    }

    40% {
        content: '..';
    }

    60% {
        content: '...';
    }

    80% {
        content: '....';
    }

    100% {
        content: '.';
    }
}


@media screen and (max-width: 600px) {
    h1 {
        font-size: 2em;
    }

}
</style>