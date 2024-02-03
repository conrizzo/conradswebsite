

<template>
  <body id="body">
    <div class="center-content-within">
      <div style="width: 80rem;">
        <twoColumnsGridContentTemplate :titleText="titleText" :content-text="contentText" :content-image="birdPicture"
          style="background: linear-gradient(to right, rgba(0,0,0,.8) 50%, rgba(0, 0, 0, .78) 50%);" />
      </div>


    </div>

    <main class="text-container">
      <div class="width-container">
        <div class="language-container">
          <span class="language-arrow-text tooltip">{{ arrowText }}
            <span class="tooltiptext">
              CSS and Vue.js, not an image or drawn arrow!
            </span>
          </span>
          <div style="transform: rotate(-55deg);">
            <div class="arrow-container">
              <div class="arrow">
                <div class="curve"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <button @click="language();" class="language-button" role="button">{{ languageButtonText
          }}</button>
           
           
        </div>

        <div class="center-content-within">
          <section v-show="languageButtonText === 'Deutsch wechseln'" class="each-section">
            <h1>About</h1>
            <button style="margin-bottom: 0.25rem;" class="clean-button" @click="testBackEnd()">Test back-end</button>
            <ul>
              <li>
                This website is made by me (Conrad) and heavily uses <a href="https://vuejs.org/" class="text-links"
                  style="color: #42b883;">Vue 3 (Vue.js)</a>
                for its reactivity and interactivity. It's open-source and has been a continuous project
              </li>
              <li>
                The website now runs on a VPS (Virtual Private Server), but it is also hosted
                on <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a> at
                <a class="text-links" href="https://git.conradswebsite.com">git.conradswebsite.com</a>

              </li>
              <li>
                It is currently a basic full-stack website with back-end running Flask and Python, and front-end running Vue.js
                on <a class="text-links" href="https://www.nginx.com/resources/glossary/nginx/">nginx</a>. It also uses http/2 for faster
                loading.
              </li>
              <li>
                Made with <span class="languages-used">Vue.js, JavaScript, TypeScript,
                  HTML, CSS, Rust into Web Assembly,</span> and soon more projects in other languages such as Angular,
                Wordpress,
                Astro
              </li>
              <li>
                I started learning about Vue.js when I worked on the Bioinformatics Toolkit at Max-Planck-Institut für
                Biologie in Tübingen, Germany
              </li>
              <li>
                Side project <a class="text-links"
                  href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> to try out the <a
                  class="text-links" href="https://astro.build/">Astro</a> framework
              </li>
              <li v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </li>
            </ul>
          </section>
          <!-- German Section -->
          <section v-show="languageButtonText === 'Switch to English'" class="each-section">
            <h1>About</h1>
            <ul>
              <li>
                Diese Website wurde von mir (Conrad) selbst erstellt, weitgehend mit <a href="https://vuejs.org/"
                  class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>
                für seine Reaktivität und Interaktivität
              </li>
              <li>
                Sie wird auf meinem <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
                gehostet. Es ist Open Source und ein kontinuierliches Projekt
              </li>
              <li>
                Die Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe, sind
                <span class="languages-used">Vue.js, JavaScript, TypeScript, HTML, CSS und Rust für Web Assembly.</span>
                In Zukunft plane ich, weitere Projekte in anderen Sprachen wie Angular, Wordpress und Astro umzusetzen
              </li>
              <li>
                Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am Max-Planck-Institut für
                Biologie in Tübingen, Deutschland, gearbeitet habe
              </li>
              <li>
                Nebenprojekt <a class="text-links"
                  href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> die das <a class="text-links"
                  href="https://astro.build/">Astro</a> framework verwendet
              </li>
              <li v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </li>
            </ul>
          </section>

        </div>
        <div class="center-content-within">
          <section v-show="languageButtonText === 'Deutsch wechseln'" class="each-section">

            <h2>More about me</h2>

            <p>
              In 2022 I completed studies in Computational Linguistics at the University of Tübingen in Germany.
              I am pleased to have successfully earned a degree from a German university. Before this I obtained a Biology
              degree in the USA. Most of the information in todays world travels through the internet in one way or
              another,
              so I thought it would be interesting to go back to websites and learn how to build my own websites and web
              applications.
            </p>

            <p>
              I am now keen on enhancing my programming abilities and advancing as a developer.
              Every day I'm motivated and curious to learn more. Anything in Front-end, back-end, or full-stack web
              applications piques my interest.
              Potentially more machine
              learning and NLP is an option, but these machine learning subjects (while incredibly interesting) can get
              very complicated quickly!
              I look forward to new opportunities, am excited about learning more, and confident in my
              ability to do problem-solving through code and research.
            </p>
            <!--
            <a href="https://docs.google.com/document/d/13StVIl-t67L-FviOjpdy9sIrOZ4Zxy9jFD7kTfcwpyc/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer" class="text-links">Shared Google Document - For testing</a>
              -->
          </section>
          <!-- German Section -->
          <section v-show="languageButtonText === 'Switch to English'" class="each-section">
            
            <h2>Mehr über mich</h2>
            <p>
              In 2022 habe ich ein Studium der Computerlinguistik an der Universität Tübingen in Deutschland
              abgeschlossen.

              Ich freue mich, dass ich erfolgreich einen Abschluss an einer deutschen Universität erworben habe. Vorher
              habe ich einen Biologie-Abschluss in den USA erhalten.

              Die meisten Informationen in der heutigen Welt werden auf eine oder andere Weise über das Internet
              übertragen.

              Deshalb dachte ich, es wäre interessant, mich wieder
              mit Websites zu beschäftigen und zu lernen, wie ich meine eigenen Websites und Web-Anwendungen erstellen
              kann.
            </p>

            <p>
              Ich bin jetzt daran interessiert, meine Programmierfähigkeiten zu verbessern und mich als Entwickler
              weiterzuentwickeln.

              Jeden Tag bin ich motiviert und neugierig mehr zu lernen. Alles rund um Front-end, back-end oder full-stack
              Web-Anwendungen weckt mein Interesse.

              Potenziell auch Maschinenlernen und NLP (Natural Language Processing) möglich, aber diese
              Maschinenlernthemen (obwohl unglaublich interessant) können sehr schnell sehr komplex werden!

              Ich freue mich auf neue Möglichkeiten, bin begeistert, mehr zu lernen und habe Vertrauen in
              meine Fähigkeiten, Probleme durch Code und Forschung zu lösen.              
            </p>           
          </section>
        </div>        
      </div>
    </main>
  </body>

  <!-- Deutsch -->
</template>

<script>

import twoColumnsGridContentTemplate from "@/components/TwoColumnsGridContentTemplate.vue";
import Prism from "prismjs";
import "@/assets/globalCSS.css";



export default {
  name: "HomeView",
  components: {
    twoColumnsGridContentTemplate,
  },
  data() {
    return {
      birdPicture: require('@/images/Kohlenmeise.jpg'),
      imagePath: require("@/images/project_languages.jpg"), // Add the image path to the data object
      languageChange: false,
      languageButtonText: "Deutsch wechseln",
      arrowText: "Deutsch",

      titleText: "ConradsWebsite",
      contentText: "Thank you for visiting!\
                    Welcome to the personal website of Conrad Lundberg. This is primarily a place to test ideas and make some projects.",

      backEndQuery: null,
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
  methods: {
    async testBackEnd() {
      try {
        console.log("test");
        const response = await fetch('http://conradswebsite.com:5000/back_end/api/data');
        const data = await response.json();
        console.log(data);
        this.backEndQuery = data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    language() {
      if (this.languageButtonText == "Deutsch wechseln") {
        this.languageButtonText = "Switch to English";
        this.arrowText = "English";
      } else {
        this.languageButtonText = "Deutsch wechseln";
        this.arrowText = "Deutsch";
      }
    }
  }

};
</script>


<style scoped>
#body {
  /*
  background: linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
  background: -webkit-linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);  
  */
  background: -webkit-linear-gradient(-10deg, rgb(27, 10, 15), 10%, rgb(54, 23, 34), 20%, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%);
  background: linear-gradient(-10deg, rgb(27, 10, 15), 10%, rgb(54, 23, 34), 20%, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%),
    linear-gradient(45deg, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215), rgba(185, 134, 193, 0.5), rgb(139, 114, 188) 100%);
  background-size: 100% 100%;
  background-attachment: fixed;


  z-index: 0;
}

#body::before {
  content: "";
  position: fixed;
  bottom: 50%;
  left: 200px;
  width: 150px;
  height: 150px;
  background-color: rgb(255, 255, 245);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(20px);
  z-index: 0;
  background-attachment: fixed;
}

h1 {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3em;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #ff5959;

}

h2 {
  text-align: left;

}

p {
  max-width: none;
}

.backend-message{
  color: rgb(255, 89, 89);
}

.text-links {
  color: #66baff;
  text-decoration: underline;
}


.text-container {
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
}

.width-container {
  background: rgba(22, 22, 22, .9);
  width: 80rem;
  padding-top: 2.2rem;
}

.center-content-within {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-400);
}

.each-section {
  max-width: 65rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  color: rgb(220, 220, 220);
  background: rgb(49, 51, 56);
}

/* start arrow area */
.language-container {
  display: flex;
  align-items: center;
  margin-left: 17.5rem;

  font-size: 1.4rem;
}

.language-arrow-text {
  font-size: 0.9em;
  margin-top: -4em;
  margin-left: -10rem;

  z-index: 4;
  transform: rotate(35deg);
  border-bottom: none;
  color: rgb(255, 255, 255);
  position: absolute;
}

.tooltip:before {
  top: 1em;
  position: absolute;
}

.tooltip .tooltiptext {
  top: 4em;
  position: absolute;
}

.arrow-container {
  position: relative;

}

/* Exclusively only the drawn arrow for this graphic from https://codepen.io/zomgbre/pen/DdEWby */
.arrow {
  position: absolute;
  top: -320px;
  left: -50px;
}

.arrow .curve {
  border: 4px solid #ff5959;
  border-color: transparent transparent transparent #ff5959;
  height: 366px;
  width: 200px;
  /* Adjust the width as needed */
  border-radius: 0 0 0 150px;
  /* Adjust the border-radius as needed */
}

.arrow .point {
  position: absolute;
  left: 40px;
  top: 315px;
}

.arrow .point:before,
.arrow .point:after {
  border: 2px solid #ff5959;
  height: 25px;
  content: "";
  position: absolute;
}

.arrow .point:before {
  top: -11px;
  left: -11px;
  transform: rotate(-74deg);
  -webkit-transform: rotate(-74deg);
  -moz-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
}

.arrow .point:after {
  top: -20px;
  left: 5px;
  transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -ms-transform: rotate(12deg);
}

/* arrow code css end */
.languages-used {
  color: rgb(212, 148, 255);
  border-radius: 0.2em;
  padding: 0.2rem;

}

.language-button {

  font-size: 0.8em;
  background: rgb(255, 255, 255);
  border-radius: 0rem;
  border: none;
  color: #262626;
  padding: 1rem;
  z-index: 3;
  cursor: pointer;

}


.language-button:hover {
  background: rgb(0, 255, 204);
}

@media screen and (max-width: 70rem) {
  .language-container {
    margin-left: 30%;
  }
}

@media screen and (max-width: 40rem) {
  .language-container {
    margin-left: 45%;
  }
}</style>