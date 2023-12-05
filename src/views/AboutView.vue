

<template>
  <body>
    <main class="main-content">
      <!-- Main area -->
      <div class="text-container">
        <h1 class="h1-title">About</h1>
        <article>
          <ul>
            <li>This iteration of the website was started March, 2023 and is
              totally self-made by me (Conrad) using primarily
              <a class="text-links" style="color: #42b883;"
                href="https://vuejs.org/guide/introduction.html"><b>Vue 3</b></a>
              (Vue.js) for its reactivity and interactivity. This site is hosted on
              <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
                my GitHub</a> with
              <a class="text-links" href="https://pages.github.com/">
                GitHub pages</a>.
            </li>

            <li>I started learning about Vue.js when I worked on the Bioinformatics
              Toolkit at <i>Max-Planck-Institut für Biologie</i> in Tübingen, Germany.</li>

            <li>Programming languages/frameworks I used to make this website include: Vue.js, JavaScript, TypeScript, HTML, CSS,
              Rust into Web Assembly, and more!</li>

            <li>Currently experimenting with a personal <b><a class="text-links" href='https://blog.conradswebsite.com'>blog</a></b> that 
              is using <a class="text-links" href='https://astro.build/'>Astro</a>.
            
            </li>
            
            <!--<li>I hold a degree in Computational Linguistics from the
              University of Tübingen in Germany,
              and previously completed a Bachelor of Science in Biology from the University of North Carolina at
              Wilmington, Wilmington, NC, USA.</li>

            <li>Have been working on this website using Vue.js, JavaScript,
              TypeScript, CSS, HTML. Starting to
              learn more about backend development and databases.
            </li>

            <li>
              Started learning <a class="text-links" href=https://doc.rust-lang.org/book/title-page.html>Rust</a> as
              well.
              Have practiced more German too, so it is <u>a lot</u> of language learning!
            </li> -->
          </ul>
        </article>
        <h2>More info if interested:</h2>
        <div class="horizontal-line"></div>
        

        <p class=" ">This websites focus is to show some projects and do fun website stuff.
          This website was originally written in Vue 3 and straight
          JavaScript. Later on I converted it to have TypeScript support, and new projects such as the
          <router-link class="text-links" to="/projects/cowgame">Cow Game</router-link> heavily use
          TypeScript. The <router-link class="text-links" to="/projects/cards">Card Game</router-link> 
          also uses TypeScript. Recently I've been reviewing code I wrote and upgrading it to be simpler 
          and more professional. There is a lot one can learn by reviewing their own code and seeing what could be improved 
          after seeing how other developers write code.
          <a class="text-links" href="https://vuejs.org/guide/typescript/overview.html">Vue.js itself is
            written in TypeScript</a> so one could also say using Vue.js is using TypeScript to an extent. As of July,
          2023, have been
          working on integrating backend development. In July, 2023 I also started learning Rust and some of this website
          now uses Rust compiled into Web Assembly.
        </p>


        <figure class="figure-location">
          <img class="img-container float-left" :src="imagePath" alt="Coding Languages used" />
          <figcaption class="figure-caption">Here is an approximation of the languages this website uses. It's mostly
            Vue.js. As of June
            2023, currently starting to add in TypeScript support.
            Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.
          </figcaption>
        </figure>


        <h2>About the Vue Routing with GitHub Pages:</h2>
        <div class="horizontal-line"></div>
        <div>
          <p class=" ">
            Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods
            to work properly.
            For example, in order to deploy this website, the command <i>"deploy": "copy dist\index.html dist\404.html
              &
              gh-pages -d dist"</i> is used, and this command is added to the package.json file.
            To publish modifications to the website, one can run the command "npm run deploy". This will first build
            the
            vue.js application by running "npm run build", and then put the production build of the website into the
            'dist'
            folder.</p>

          <p class=" ">
            A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html.
            This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this
            workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and
            instead
            show a 404 error on GitHub Pages.
            However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all
            addresses
            now work properly by falling back to the index.html page. This solution may not be ideal, but it is
            necessary when
            using gh-pages.</p>
        </div>

      </div>
      <!-- Aside area -->
      <AsideContent style="background-color: rgb(40, 40, 40);">

        <template v-slot:aside-content>
          <div class="bird-container">
            <h3>
              Bird of the Month: Kohlmeise
            </h3>

            <img class="bird" :src="birdPicture" alt="Kohlmeise picture">
          </div>
          <p class="aside-text" style="color: #c7c7c7"><a class="text-links"
              href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a>
            (name in German, English name is Great Tit)
            photo taken in Tübingen, Germany. It is a species of bird that is native to Europe.
            They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat
            peanuts!</p>

        </template>
      </AsideContent>

    </main>

  </body>
</template>

<script>
import AsideContent from "@/components/FirstAside.vue";

import Prism from "prismjs";
import "@/assets/globalCSS.css";

export default {
  name: "HomeView",
  components: {
    AsideContent,

  },
  data() {
    return {
      birdPicture: require('@/images/Kohlenmeise.jpg'),
      imagePath: require("@/images/languages_july_17_2023.jpg"), // Add the image path to the data object
    }
  },

  downloadPDF() {
    const url = 'https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf';

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'my-document.pdf');
        document.body.appendChild(link);
        link.click();
      });
  },

  mounted() {
    document.title = "About Conrad's Website";
    Prism.highlightAll();
  },
};
</script>


<style scoped>
p {
  color: #e0e0e0; 
  line-height: 1.65em;
  font-size: 1.1em;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  font-weight: 400;
  margin-bottom: 1em;
  padding: 0 2em 0 2em;
}

li{
  color: #fff;
  margin-bottom: 0.25rem;
  margin-left: 2.1rem;
  font-size: 1.1em;
}

.aside-text{
  font-size: 0.9em;
}

body {
  background-color: rgb(40, 40, 40);
}

nav {
  background-color: rgb(40, 40, 40);
}

figure {
  float: right;
  display: flex;
  flex-flow: column;
  padding: 0.5em;
  padding-bottom: 0em;
  max-width: 22rem;
  margin: auto;
  font-size: 0.9em;
  text-align: center;
  color: #cacaca;
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  line-height: 1.2;
}

.img-container {
  max-width: 350px;
  border-radius: 0.5em;
  margin-bottom: 0.33em;
}



.h1-title {
  margin-top: 1em;
  margin-bottom: 0em;
  color: #ffffff;

  font-size: 3em;
  border-radius: 0.2em;
  /* margin-top: -0.33em;  */
  text-decoration: underline;
  text-decoration-color: #ff5959;
}

h2 {
  text-align: left;
  color: #fff;
}

.horizontal-line {
  border: none;
  border-top: 1px solid #ffffff;
  margin: 0 0 0.5rem 0;
}
.adjust-title-font-size {
  font-size: 3em;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.text-container {
  background-color: rgb(40, 40, 40);
  padding: 0 10em 0 10em;
}

.figure-location {
  padding: 1em;
}

.figure-caption {
  text-align: left;
}

.bird {
  border-radius: 0.5em;
  width: 100%;
}

.bird-container{
 
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;

}

h3 {
  margin-top: 4.5em;
  color: #c7c7c7;
}

@media only screen and (max-width: 95rem) {
  .img-container {
    margin-bottom: 0.25em;
  }

  .bird {
    max-width: 20rem;
  }

  h3 {
    margin-top: 0em;
  }

  h1 {
    padding-left: 0.7em;
  }

  h2 {
    padding-left: 1.4em;
  }
}

@media only screen and (max-width: 50rem) {

  figure {
    float: none;
  }

  .text-container {
    padding-left: 0.25em;
    padding-right: 0.25em;
  }
}</style>