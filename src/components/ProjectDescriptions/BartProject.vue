<template>


  <h1>{{ BartProjectTitle }}</h1>
  <p>{{ BartProjectDescription }}</p>


  <p class="homeview paragraph-text">
    Lundberg C,Viñuela LS, Biales S. 2022. Dialogue summarization using BART.
    Paper presented at: 15th International Natural Language Generation
    Conference; Colby College,Maine, USA.
    <a style="text-decoration: none" href="https://inlgmeeting.github.io/"
      >https://inlgmeeting.github.io/</a
    >
    <br />This work used machine learning and fine-tuned a BART model on 12,460
    dialogue summary pairs in order to summarize dialogues between two people.
    <br />Our groups ROUGE and BERTSCORE are listed under "UoT" (University of
    Tübingen)
    <a
      style="text-decoration: none"
      href="https://cylnlp.github.io/dialogsum-challenge/"
      >https://cylnlp.github.io/dialogsum-challenge/</a
    >
    for the INLG DialogSum Challenge.

    <br />
    Link to
    <a
      style="text-decoration: none"
      href="https://github.com/conrizzo/dialogue_summarization_paper"
      >Dialogue Summarization using BART</a
    >
    paper, and a copy of the
    <span style="font-size: 1.25em; color: #34B7F1;"><a
      style="text-decoration: none"
      href="https://colab.research.google.com/drive/15CvaaYz2nv_33bPbftM6JwQCuYp3lVm9"
      >Python code</a
    >
    we wrote for fine-tuning the model.</span>
  </p>

  <p class="homeview paragraph-text">
    The original BART paper for reference is here:
    <a style="text-decoration: none" href="https://arxiv.org/abs/1910.13461#"
      >https://arxiv.org/abs/1910.13461#</a
    >
  </p>

  <p class="homeview paragraph-text">
    Will add more machine learning style projects here in the future.
  </p>
</template>


<script>
import Prism from "prismjs";

export default {
  name: "BartProject",
  components: Prism,
  props: {
    BartProjectTitle: {
      type: String,
      required: true,
    },
    BartProjectDescription: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imagePath: require("@/images/binary_tree.jpg"),
      imagePathTwo: require("@/images/binary_tree_two.jpg"),
    };
  },
};
</script>

<style scoped>
p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  
  font-weight: normal;
  margin-bottom: 1em;
  margin-top: 1em;
}

.code-format {
  margin-top: 0.25em;
  font-weight: normal;
  font-size: 1em;
  page-break-inside: avoid;
  font-family: monospace;

  margin-left: 1.2em;
  margin-right: 1.2em;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}

/* figure stuff */
.figure-stuff {
  margin: 0em 0.5em 0em 0.5em;
  text-align: center;
}

.figure-stuff > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.figure-stuff figure {
  margin: 0em 0.25em auto;
  width: 48.5%;
}

.figure-stuff img {
  width: 100%;
  height: auto;
  max-width: 98%;
  display: block;
  margin: 0 auto;
}

/* image and figures */
figure {
  height: 550px;
  display: flex;
  flex-flow: column;
  padding: 0.5em;
  padding-bottom: 0em;

  margin-left: auto;
  margin-right: auto;
  margin-top: 0em;
  margin-bottom: 0.25em;
  font-size: 1em;
  font-weight: 75;
  text-align: left;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 1.2em;
}

figcaption {
  padding: 0.5em;
}

img {
  max-width: 500px;
  max-height: auto;
}

h2.homeview {
  display: inline;
  float: left;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 0.7em;
  margin-right: 0.7em;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  font-size: 1em;
  font-weight: normal;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1800px) {
  p.homeview {
    margin-left: 20px;
  }

  .code-format {
    margin-left: 2em;
    font-size: 0.4em;
    margin-right: 2em;
  }

  figure {
    margin-left: 1.2em;
    margin-right: 1.2em;
    height: auto;
  }
  .figure-stuff > div {
    flex-direction: column;
  }

  .figure-stuff figure {
    margin-top: 0.5em;
    margin-right: 0.2em;
    width: auto;
  }
}
</style>