

<template>
  <body id="body">
    <div class="center-content-within">
      <div style="max-width: 80rem;">
        <twoColumnsGridContentTemplate :titleText="titleText" :content-text="contentText" :content-image="birdPicture"
          style="background: linear-gradient(to right, rgba(0,0,0,.6) 50%, rgba(0, 0, 0, .6) 50%);" />
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
            <div style="display: flex; justify-content: flex-start;">
              <h1>About</h1>
              <button style="margin-bottom: 0.95rem; margin-left: 2rem; margin-top: 1.2rem;" class="clean-button"
                @click="testBackEnd()">Click to test backend</button>
            </div>
            <ul class="about-me-list">
              <li v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </li>
              <li>
                This website is made by me (Conrad) and heavily uses <a href="https://vuejs.org/" class="text-links"
                  style="color: #42b883;">Vue 3 (Vue.js)</a>
                for its reactivity and interactivity. It's open-source and has been a continuous project
              </li>
              <li>
                The website now runs on a VPS (Virtual Private Server), the code is at
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
              </li>
              <li>
                <u>Back end</u> running <a class="text-links" href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                and Python with <a class="text-links" href="https://gunicorn.org/">gunicorn</a>, accessed via reverse
                proxy
                on <a class="text-links" href="https://www.nginx.com/resources/glossary/nginx/">nginx</a>. It also uses
                <a class="text-links" href="https://en.wikipedia.org/wiki/HTTP/2">http/2</a> for faster
                loading.
              </li>
              <li>
                <u>Front end</u> made with <span class="languages-used">Vue.js, JavaScript, TypeScript,
                  HTML, CSS, Rust into Web Assembly,</span> and soon more projects in other languages such as Angular,
                Wordpress,
                Astro
              </li>
              <li>
                I also started learning <a class='text-links' href="https://nuxt.com/">Nuxt.js</a> after reviewing how
                to have better SEO for new project ideas. Nuxt allows all the meta tags to be rendered by shared links
                in a simpler way than Vue.js alone.
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

            </ul>
          </section>
          <!-- German Section -->
          <section v-show="languageButtonText === 'Switch to English'" class="each-section">
            <div style="display: flex; justify-content: flex-start;">
              <h1>About</h1>
              <button style="margin-bottom: 0.95rem; margin-left: 2rem; margin-top: 1.2rem;" class="clean-button"
                @click="testBackEnd()">Click to test backend</button>
            </div>
            <ul class="about-me-list">
              <li v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </li>
              <li>
                Diese Website wurde von mir (Conrad) selbst erstellt, weitgehend mit <a href="https://vuejs.org/"
                  class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>
                für seine Reaktivität und Interaktivität. Es ist Open-Source und wird kontinuierlich weiterentwickelt.
              </li>
              <li>
                Die Website läuft jetzt auf einem VPS (Virtual Private Server). Der Code befindet sich auf
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
              </li>
              <li>
                <u>Backend</u> läuft mit <a class="text-links"
                  href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                und Python mit Gunicorn und wird über einen Reverse-Proxy auf <a class="text-links"
                  href="https://www.nginx.com/">Nginx</a> aufgerufen. Es verwendet außerdem <a class="text-links"
                  href="https://de.wikipedia.org/wiki/HTTP/2">HTTP/2</a> für schnelleres Laden.
              </li>
              <li>
                <u>Frontend</u> Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe,
                sind
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
              so after a break to figure out what to do, I thought it would be interesting to go back to websites and
              learn how to build my own websites and web
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

            <div class="form-container">
              <h2 class="form-title">Leave a message</h2>

              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="name" class="include-label-text">Name:</label>
                    <input id="name" class="input-field-style" type="text" v-model="submitName"
                      placeholder="Enter your name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email:</label>
                    <input class="input-field-style" type="email" v-model="submitSubject"
                      placeholder="name@yourmailhost.com" />
                  </li>
                  <li>
                    <label for="userMessage" class="include-label-text">Message:</label>
                    <textarea id="userMessage" class="input-field-style" type="text" v-model="submitMessage"
                      placeholder="Message">
                  </textarea>
                  </li>
                  <li class="button">
                    <button class="clean-button" type="submit">Send your message</button>
                  </li>
                </ul>
              </form>

              {{ errorMessage }}
              <p v-show="submitMessageSuccess" style="color: #fff; font-size: 1.5rem;">Message sent successfully! Thank
                you
                for your message!</p>
            </div>
            <span>(Note: All messages are sent securely via https to the backend server)</span>

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

              Deshalb dachte ich, dass es nach einer Pause interessant wäre, mich wieder mit Websites zu
              beschäftigen und zu lernen, wie ich meine eigenen Websites und Webanwendungen erstellen kann.
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
            <div class="form-container">
              <h2 class="form-title">Eine Nachricht hinterlassen</h2>

              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="name" class="include-label-text">Name:</label>
                    <input id="name" class="input-field-style" type="text" v-model="submitName"
                      placeholder="Enter your name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email:</label>
                    <input class="input-field-style" type="email" v-model="submitSubject"
                      placeholder="name@yourmailhost.com" />
                  </li>
                  <li>
                    <label for="userMessage" class="include-label-text">Nachricht:</label>
                    <textarea id="userMessage" class="input-field-style" type="text" v-model="submitMessage"
                      placeholder="Nachricht">
                  </textarea>
                  </li>
                  <li class="button">
                    <button class="clean-button" type="submit">Nachricht senden
                    </button>
                  </li>
                </ul>
              </form>
              {{ errorMessage }}
              <p v-show="submitMessageSuccess" style="color: #fff; font-size: 1.5rem;">
                Ihre Nachricht wurde erfolgreich übermittelt! Vielen Dank für Ihre Nachricht.</p>
            </div>
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

      clickCount: 0,
      firstClick: null,
      backEndQuery: null,

      clickLimit: 3,
      time: 10000,

      submitName: "",
      submitSubject: "",
      submitMessage: "",
      submitMessageSuccess: false,
      canSubmit: true,
      errorMessage: "",
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
    // query the backend, but limit the number of requests to 10 per 10 seconds
    async testBackEnd() {
      try {
        if (this.clickCount === 0) {
          setTimeout(() => {
            this.clickCount = 0;
          }, this.time); // time is set to 10 seconds
        }
        /* These rate limits match the ones in the backend - this prevents sending unnecessary requests to backend */
        if (this.clickCount < this.clickLimit) {
          console.log("Access backend Python code!");
          /* for server simplfied link is use 'back_end/api/data' */
          /* const response = await fetch('/back_end/api/data'); */
          /* const response = await fetch('https://conradswebsite.com/back_end/api/data'); */
          /* must use actual web address for localhost or from another webserver 
          const response = await fetch('https://conradswebsite.com/back_end/api/data');*/
          const response = await fetch('https://conradswebsite.com/back_end/api/data');
          const data = await response.json();
          console.log(data);
          this.backEndQuery = data.message;
          this.clickCount++;
        } else {
          this.backEndQuery = `Error: Too many requests. Limited to ${this.clickLimit} requests per ${this.time / 1000} seconds!`;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async leaveMessage() {

      if (!this.canSubmit) {
        this.errorMessage = 'Please wait, only 1 message per 30 seconds allowed!';
        return;
      }

      const name = this.submitName;
      const subject = this.submitSubject;
      const message = this.submitMessage;

      try {
        const response = await fetch('https://conradswebsite.com/back_end/api/leave_message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name, subject: subject, message: message }),

        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // If the request was successful, show a "message received" notice
        if (data.message === 'Message received') {
          // reset all the fields
          this.submitName = '';
          this.submitSubject = '';
          this.submitMessage = '';
          // show the success message
          this.submitMessageSuccess = true;
          setTimeout(() => {
            this.submitMessageSuccess = false;
          }, 5000); // close message after 5 seconds
          this.canSubmit = false; // set this to false to prevent more messages for 30 seconds
          this.errorMessage = '';
          setTimeout(() => {
            this.canSubmit = true;
          }, 30000); // disallow messages for 30 seconds
        }

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

.form>* {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  max-width: 40rem;
}

.form-title {
  color: rgb(220, 220, 220);
  margin-top: 1rem;
  text-decoration: underline;
}

.form-container {
  margin-top: 1.5rem;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: none;
}

textarea {
  height: 10rem;
  width: 100%;
  resize: none;
}

.include-label-text {
  display: flex;
  align-items: flex-start;
  margin-bottom: -0.5rem;
  color: rgb(220, 220, 220);
  cursor: auto;
}

.input-field-style {
  padding: 5px 5px;
  margin: 8px 0;
  margin-left: 0.1rem;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: .5rem;
  font-size: 1rem;
  width: 100%;
}

.clean-button:hover {
  background: rgb(4, 242, 194);
}

.clean-button:active {
  background-color: rgba(4, 242, 194, 0.75);
  color: #fff;
}

.backend-message {
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
  padding: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  color: rgb(220, 220, 220);
  background: rgb(49, 51, 56);
}

.about-me-list {
  margin-left: 16px;
}

/* start arrow area */
.language-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.language-arrow-text {
  font-size: 0.9em;
  margin-top: -4em;
  margin-left: -25rem;

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

.language-button:active {
  background-color: rgba(0, 255, 204, 0.75);
  color: #fff;
}

@media screen and (max-width: 70rem) { 
 
  .each-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media screen and (max-width: 40rem) {

  .arrow-container {
    display: none;
  }
  .language-arrow-text {
    display: none;
  }
 
}
</style>