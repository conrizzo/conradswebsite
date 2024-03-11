<template>
  <div id="about-background">
    <div class="center-content-within">
      <div>
        <twoColumnsGridContentTemplate class="top-component-adjustment" :imageWidth="imageWidth" :titleText="titleText"
          :content-text="contentText" :content-image="birdPicture"
          :set-photo-link="'https://de.wikipedia.org/wiki/Kohlmeise'"
          :set-photo-caption="'Tübingen, Germany. Kohlmeise / Great Tit'" />
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
          <div class="tooltipTwo"><button @click="language();" class="language-button" role="button">{{
          languageButtonText
        }}</button>
            <div class="tooltiptextTwo">
              <!--Mit diesem Knopf wird die Haupttext Sprache auf Deutsch geändert-->
              Change the main text language between English and German with this button.
            </div>
          </div>
        </div>

        <div class="center-content-within">
          <section v-show="languageButtonText === 'Sprache: Deutsch'" class="each-section">

            <div class="flex-start">
              <h1 class="section-title">About the website</h1>
            </div>

            <ul class="about-me-list">

              <li>
                This website is made by me (Conrad) completely from a blank slate. It is a Single Page Application (SPA)
                made in <a href="https://vuejs.org/" class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>. It's
                open-source and has been a continuous project
              </li>
              <li>
                Now runs on a VPS (Virtual Private Server), the code is at
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
              </li>
              <li>
                This website does not use any cookies! Why does this matter? They track users, and <a class="text-links"
                  href="https://blog.google/products/chrome/privacy-sandbox-tracking-protection/?trk=article-ssr-frontend-pulse_little-text-block">Google
                  says</a> they are "taking a responsible approach to phasing out third-party cookies in Chrome"
              </li>
              <li>
                <u>Back end</u> running <a class="text-links"
                  href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                and Python with <a class="text-links" href="https://gunicorn.org/">gunicorn</a>, accessed via reverse
                proxy
                on <a class="text-links" href="https://www.nginx.com/resources/glossary/nginx/">nginx</a>. It also uses
                <a class="text-links" href="https://en.wikipedia.org/wiki/HTTP/2">http/2</a> for faster
                loading. Also now running <a class="text-links" href="https://redis.io/">Redis</a> for data
                cache/storage.
              </li>
              <li>
                <u>Front end</u> made with <span class="languages-used">Vue.js, JavaScript, TypeScript,
                  HTML, CSS, Rust into Web Assembly,</span> and soon more projects in other languages such as Angular,
                Wordpress, <a class='text-links' href="https://nuxt.com/">Nuxt.js</a>,
                <a class="text-links" href="https://astro.build/">Astro</a>.
              </li>

              <li>
                I started learning about Vue.js when I worked on the Bioinformatics Toolkit at Max-Planck-Institut für
                Biologie in Tübingen, Germany
              </li>
              <li>
                Side project <a class="text-links"
                  href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> to try out the <a
                  class="text-links" href="https://astro.build/">Astro</a> framework. A <a class="text-links"
                  href='https://search-wordle-words.netlify.app/'>Wordle helper in Nuxt.js</a>
              </li>
            </ul>
          </section>
          <!-- German Section -->
          <section v-show="languageButtonText === 'Language: English'" class="each-section">

            <div class="flex-start">
              <h1 class='section-title'>Über die Website</h1>
            </div>
            <ul class="about-me-list">
              <li>
                Diese Website wurde von mir (Conrad) komplett selbst erstellt. Es ist in Single Page Application (SPA)
                in <a href="https://vuejs.org/" class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>
                gemacht. Es ist Open-Source und wird kontinuierlich weiterentwickelt.
              </li>
              <li>
                Läuft jetzt auf einem VPS (Virtual Private Server). Der Code befindet sich auf
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
              </li>
              <li>
                Diese Website verwendet keine Cookies! Warum ist das wichtig? Cookies verfolgen Benutzer, und <a
                  class="text-links"
                  href="https://blog.google/products/chrome/privacy-sandbox-tracking-protection/?trk=article-ssr-frontend-pulse_little-text-block">Google
                  sagt</a>, dass sie gerade dabei sind "taking a responsible approach to phasing out third-party cookies
                in Chrome"
              </li>
              <li>
                <u>Backend</u> läuft mit <a class="text-links"
                  href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                und Python mit Gunicorn und wird über einen Reverse-Proxy auf <a class="text-links"
                  href="https://www.nginx.com/">Nginx</a> aufgerufen. Es verwendet außerdem <a class="text-links"
                  href="https://de.wikipedia.org/wiki/HTTP/2">HTTP/2</a> für schnelleres Laden.
                Es läuft jetzt <a class="text-links" href="https://redis.io/">Redis</a> für Datencache/Speicherung
                ausgeführt.
              </li>
              <li>
                <u>Frontend</u> Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet
                habe,
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
                  href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> die das <a
                  class="text-links" href="https://astro.build/">Astro</a> framework verwendet
              </li>

            </ul>
          </section>
        </div>

        <div class="center-content-within" style="flex-direction: column; padding-bottom: 3.5rem;">
          <section v-show="languageButtonText === 'Sprache: Deutsch'" class="each-section form-section">

            <div class="flex-start">
              <h1 class="section-title-two">About me</h1>
            </div>

            <p>
              In 2022 I completed studies in Computational Linguistics at the University of Tübingen in Germany.
              I am pleased to have successfully earned a degree from a German university. Before this I obtained a
              Biology
              degree in the USA. Most of the information in todays world travels through the internet in one way or
              another,
              so after a break to figure out what to do, I thought it would be interesting to go back to websites and
              learn how to build my own websites and web
              applications.
            </p>

            <p>
              I am now keen on enhancing my programming abilities and advancing as a developer.
              Every day I'm motivated and curious to learn more. Anything in frontend, backend, or fullstack web
              applications piques my interest.
              Potentially more machine
              learning and NLP is an option, but these machine learning subjects (while incredibly interesting) can get
              very complicated quickly!
              I look forward to new opportunities, am excited about learning more, and confident in my
              ability to do problem-solving through code and research.
            </p>

          </section>

          <section v-show="languageButtonText === 'Sprache: Deutsch'" class="each-section form-section">
            <div class="form-container">

              <div v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </div>
              <div class="flex-start">
                <h2 class="section-title-three">Contact</h2>
                <button style="margin-bottom: 0.95rem; margin-left: 2rem; margin-top: 1.2rem;" class="clean-button"
                  @click="testBackEnd()">Test Backend</button>
              </div>
              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="name" class="include-label-text">Name:</label>
                    <input id="name" autocomplete="given-name" class="input-field-style" type="text"
                      v-model="submitName" placeholder="Enter your name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email:</label>
                    <input autocomplete="off" class="input-field-style" id="email" type="email" v-model="submitSubject"
                      placeholder="name@####.com" />
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
            <br>
            <br>
            <!--
            --- Additional Testing Area ---<br>
            <a class="text-links" href="https://conradswebsite.com/back_end/api/download" download="test100.txt">Download
              10mb 0's test txt file</a>
            <br>
            <a href="https://conradswebsite.com/test.html" target="_blank" rel="noopener noreferrer"
              class="text-links">HTML page for testing</a><br>
            <a href="https://conradswebsite.com/asdfaesrrwr34" target="_blank" rel="noopener noreferrer"
              class="text-links">404 test</a><br>
            -->

            <!--
            <a href="https://docs.google.com/document/d/13StVIl-t67L-FviOjpdy9sIrOZ4Zxy9jFD7kTfcwpyc/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer" class="text-links">Shared Google Document - For testing</a>
              -->

          </section>
          <!-- German Section -->
          <section v-show="languageButtonText === 'Language: English'" class="each-section form-section">
            <div class="flex-start">
              <h1 class="section-title-two">Über mich</h1>
            </div>
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

              Jeden Tag bin ich motiviert und neugierig mehr zu lernen. Alles rund um frontend, backend oder
              fullstack
              Webanwendungen weckt mein Interesse.

              Potenziell auch Maschinenlernen und NLP (Natural Language Processing) möglich, aber diese
              Maschinenlernthemen (obwohl unglaublich interessant) können sehr schnell sehr komplex werden!

              Ich freue mich auf neue Möglichkeiten, bin begeistert, mehr zu lernen und habe Vertrauen in
              meine Fähigkeiten, Probleme durch Code und Forschung zu lösen.
            </p>
          </section>

          <section v-show="languageButtonText === 'Language: English'" class="each-section form-section">
            <div class="form-container">
              <div v-show="backEndQuery !== null" class="backend-message">
                Python backend: {{ backEndQuery }}
              </div>
              <div class="flex-start">
                <h2 class="section-title-three">Kontakt</h2>
                <button style="margin-bottom: 0.95rem; margin-left: 2rem; margin-top: 1.2rem;" class="clean-button"
                  @click="testBackEnd()">Backend testen
                </button>
              </div>

              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="nameD" class="include-label-text">Name:</label>
                    <input id="nameD" autocomplete="given-name" class="input-field-style" type="text"
                      v-model="submitName" placeholder="Name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email:</label>
                    <input autocomplete="off" class="input-field-style" id="email" type="email" v-model="submitSubject"
                      placeholder="name@####.com" />
                  </li>
                  <li>
                    <label for="userMessageD" class="include-label-text">Nachricht:</label>
                    <textarea id="userMessageD" class="input-field-style" type="text" v-model="submitMessage"
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

        <div class="center-content-within">
          <div>
            <!-- first text image component -->
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-grid-content-template :titleText="objectiveTitle" :content-text="objectiveText" />
            </div>
            <div v-else>
              <two-columns-grid-content-template :titleText="objectiveTitleDeutsch"
                :content-text="objectiveTextDeutsch" />
            </div>
            <!-- second text image component -->
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-reversed-grid class="top-component-adjustment" :titleText="approachTitle"
                :content-text="approachText" :content-image="birdGenerated" />
            </div>
            <div v-else>
              <two-columns-reversed-grid class="top-component-adjustment" :titleText="approachTitleDeutsch"
                :content-text="approachTextDeutsch" :content-image="birdGenerated" />
            </div>
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-grid-content-template :titleText="updatesTitle" :content-text="updatesText"
                :content-image="gitLanguages" :setPhotoLink="'https://github.com/conrizzo/conradswebsite'"
                :set-photo-caption="languagesCaptionText" />
            </div>
            <div v-else>
              <two-columns-grid-content-template :titleText="updatesTitleDeutsch" :content-text="updatesTextDeutsch"
                :content-image="gitLanguages" :setPhotoLink="'https://github.com/conrizzo/conradswebsite'"
                :set-photo-caption="languagesCaptionTextDeutsch" />
            </div>
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-reversed-grid style="max-height: 600px;" class="top-component-adjustment"
                :titleText="optimizationTitle" :content-text="optimizationText" :content-image="lightHouseScore"
                :set-photo-link="'https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1'"
                :set-photo-caption="lightHouseCaption" />
            </div>
            <div v-else>
              <two-columns-reversed-grid style="max-height: 600px;" class="top-component-adjustment"
                :titleText="optimizationTitleDeutsch" :content-text="optimizationTextDeutsch"
                :content-image="lightHouseScore"
                :set-photo-link="'https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1'"
                :set-photo-caption="lightHouseCaptionDeutsch" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Deutsch -->
</template>

<script>
import twoColumnsReversedGrid from "@/components/TwoColumnsReversedGrid.vue";
import twoColumnsGridContentTemplate from "@/components/TwoColumnsGridContentTemplate.vue";
import Prism from "prismjs";
import "@/assets/globalCSS.css";


export default {
  name: "HomeView",
  components: {
    twoColumnsGridContentTemplate, twoColumnsReversedGrid
  },

  data() {
    return {
      birdPicture: require('@/images/Kohlenmeise.jpg'),
      birdGenerated: require('@/images/BlueSkyBird.jpg'),
      lightHouseScore: require('@/images/google-lighthouse-result.jpg'),
      gitLanguages: require('@/images/git-languages.jpg'),
      imagePath: require("@/images/project_languages.jpg"), // Add the image path to the data object
      languageChange: false,
      languageButtonText: "Sprache: Deutsch",
      arrowText: "Deutsch",

      titleText: "ConradsWebsite",
      contentText: "Thank you for visiting!<br>\
      Welcome to the personal website of Conrad Lundberg.<br>\
      This is primarily a place to test ideas and make some projects.",

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

      imageWidth: 20,  // Initial height
      isMobile: window.innerWidth <= 800, // initial check

      objectiveTitle: "objective",
      objectiveText: "The goal of this website at the moment is to keep\
                      experimenting and learning. Make some fun projects.\
                      Drink some coffee (hopefully good coffee). Make lots of \
                      mistakes and keep learning from them and improving.",

      objectiveTitleDeutsch: "objecktiv",
      objectiveTextDeutsch: "Das Ziel dieser Website ist es im Moment, ständig zu experimentieren und zu lernen.\
      Lustige Projekte machen. (Hoffentlich guten) Kaffee trinken.\
      Viele Fehler machen und immer wieder daraus lernen und sich verbessern.",

      approachTitle: "approach",
      approachText: "The process is usually to write code to try ideas, edit and delete the code,\
                    find what works and why, and then make it simpler. Often, much of the learning ends up coming from\
                    reviewing what I've done and simplifying it.\
                    This is essentially the process along with reading documentation and code off other projects for understanding.\
                    Regularly watching\
                    YouTube videos where a concept is discussed is also part of the process.\
                    In the end code is just a tool to make things, so as I make more projects\
                    I learn more along the way and more complicated projects become easier.\
                    The rewarding thing is to conceptualize a project, then actually be able to build it.",

      approachTitleDeutsch: "Ansatz",
      approachTextDeutsch: "Im Allgemeinen besteht der Prozess darin, Code zu schreiben, um Ideen auszuprobieren,\
      den Code zu bearbeiten und zu löschen, herauszufinden, was funktioniert und warum, und ihn dann zu vereinfachen.\
      Oftmals lernt man am meisten, indem man das Geschriebene überprüft und vereinfacht.\
      Dies ist im Wesentlichen der Prozess, zusammen mit dem Lesen von Dokumentation und Code anderer Projekte zum Verständnis.\
      Auch das regelmäßige Anschauen von YouTube Videos, in denen ein Konzept diskutiert wird, gehört dazu.\
      Letztendlich ist Code nur ein Werkzeug, um Dinge zu erschaffen. Je mehr Projekte ich mache, desto mehr\
      lerne ich dabei und desto einfacher werden kompliziertere Projekte.\
      Das Schönste ist es, ein Projekt zu konzipieren und es dann tatsächlich bauen zu können.",
      languagesCaptionText: "GitHub Languages bar chart for conradswebsite.com - the frontend code is on Github.",

      updatesTitle: "updates",
      updatesText: "This website was started from a blank page.\
                      Now it's a fullstack website that is evolving and branching to test new projects.\
                      Much of the work on this website is currently being done in backend code\
                      and connecting items in the server. More simplified operations are also being done on the frontend!",
      updatesTitleDeutsch: "Aktualisierungen",
      updatesTextDeutsch: "Diese Website wurde mit einer leeren Seite begonnen.\
      Jetzt ist sie eine fullstack Website, die sich ständig weiterentwickelt und verzweigt, um neue Projekte zu testen.\
      Ein Großteil der Arbeit an dieser Website wird derzeit im backend Code und der Verbindung von Elementen auf dem Server\
      erledigt. Aber auch einfachere Arbeiten werden auf dem frontend durchgeführt!",
      languagesCaptionTextDeutsch: "GitHub Sprachen Balkendiagramm für conradswebsite.com - der frontend Code ist auf Github.",

      optimizationTitle: "Optimization",
      optimizationText: "Many of the pages on this website have been optimized for performance and best practices.\
      For example the Google Lighthouse score for this page is perfect.",
      lightHouseCaption: "Google Lighthouse Score for this page.",

      optimizationTitleDeutsch: "Optimierung",
      optimizationTextDeutsch: "Viele der Seiten dieser Website wurden im Hinblick auf Leistung und Best Practices optimiert.\
      Beispielsweise ist der Google Lighthouse-Score für diese Website perfekt.",
      lightHouseCaptionDeutsch: "Google Lighthouse Score für diese Seite.",

    }
  },
  watch: {
    isMobile(newVal) {
      this.imageWidth = newVal ? 15 : 20;
    }
  },
  created() {
    window.addEventListener('resize', this.updateViewport);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewport);
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
    updateViewport() {
      this.isMobile = window.innerWidth <= 800;
    },
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
        if (data.message === 'Form submission successful') {
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
      if (this.languageButtonText == "Sprache: Deutsch") {
        this.languageButtonText = "Language: English";
        this.arrowText = "English";
      } else {
        this.languageButtonText = "Sprache: Deutsch";
        this.arrowText = "Deutsch";
      }
    }
  }

};
</script>


<style scoped>
/* @import "../assets/css_files/AboutViewCSS.css"; */
/* basic css tooltip */
#about-background {
  /*
    background: linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);
    background: -webkit-linear-gradient(90deg, rgb(148, 243, 255) 30%, rgb(41, 126, 236) 60%, rgb(11, 0, 167) 90%);  
    */
  background: -webkit-linear-gradient(-3deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
      40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%);
  background: linear-gradient(-2deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
      40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%),
    linear-gradient(45deg, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215), rgba(185, 134, 193, 0.5),
      rgb(139, 114, 188) 100%);
  background-size: 100% 100%;
  background-attachment: fixed;
  z-index: 0;
  text-align: left;
}

#about-background::before {
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



.section-title {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3rem;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #ff5959;
  line-height: 1.25;
}

.section-title-two {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3rem;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #1b72ff;
}

.section-title-three {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3rem;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #43ff95;
}







h2 {
  text-align: left;
}

p {
  max-width: none;
}

.form-section {
  margin-top: 3.5rem;
  width: 100%;
}

.top-component-adjustment {
  max-width: 80rem;
  width: 100%;
  height: 55rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%);
  padding-right: 1rem;
  padding-left: 1rem;
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

.flex-start {
  display: flex;
  justify-content: flex-start;
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
  color: rgb(249, 255, 89);
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
  width: 100%;
  /* was 80em, but 100% looks more polished */
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
  margin-top: -7em;
  margin-left: -28rem;
  z-index: 4;
  transform: rotate(35deg);
  border-bottom: none;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
}

.tooltip:before {
  top: 1em;
  left: 1.9em;
  position: absolute;
}

.tooltip .tooltiptext {
  top: 4em;
  left: 0.1em;
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


/* basic css tooltip */
.tooltipTwo {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltipTwo:before {
  content: "";
  visibility: hidden;
  position: absolute;
  height: 0px;
  width: 0px;
  top: -1rem;
  left: 4.5rem;
  /* 1px buffer for zooming problems while rendering*/
  border-width: 0.66em;
  border-color: transparent #42b883 transparent transparent;
  border-style: solid;
  transform: rotate(270deg);
}

.tooltipTwo .tooltiptextTwo {
  text-align: left;
  visibility: hidden;
  width: 200px;
  background-color: #42b883;
  color: #fff;
  border-radius: 6px;
  padding: 0.5em;
  font-size: 0.6em;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -7em;

}

.tooltipTwo:hover:before {
  visibility: visible;
}

.tooltipTwo:hover .tooltiptextTwo {
  visibility: visible;
}









@media screen and (max-width: 70rem) {

  .each-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media screen and (max-width: 40rem) {

  .top-component-adjustment {
    height: fit-content;

  }

  .arrow-container {
    display: none;
  }

  .language-arrow-text {
    display: none;
  }

  .section-title {
    font-size: 2.5rem;
  }

}
</style>