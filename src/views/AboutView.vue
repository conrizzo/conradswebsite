<template>
  <div id="about-background">
    <div class="center-content-within">

      <div class="left-area-title">
      </div>

      <two-columns-grid-content-template class="top-top-component-adjustment" :imgWidth="imageWidth"
        :titleText="titleText" :titleTextSize="'3.5rem'" :text-color="'rgb(255, 255, 255)'"
        :content-text-size="'1.4rem'" :bg-color="'rgba(0, 0, 0, 0)'" :contentText="contentText"
        :contentImage="birdPicture" :setPhotoLink="'https://de.wikipedia.org/wiki/Kohlmeise'"
        :setPhotoCaption="'Tübingen, Germany. Kohlmeise / Great Tit'">
        <!-- Slot content below-->
        <div class="language-container">
          <span class="language-arrow-text tooltip">{{ arrowText }}
            <span class="tooltiptext">
              This page can switch between English and German
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
         
          <button @click="language();" class="language-button" role="button">{{
        languageButtonText
      }}</button>        
              <!--Mit diesem Knopf wird die Haupttext Sprache auf Deutsch geändert-->
                  
       
        </div>

      </two-columns-grid-content-template>
    </div>

    <main class="text-container">
      <div class="width-container">
        <div class="center-content-within">
          <section v-if="languageButtonText === 'Sprache: Deutsch'" class="each-section">
            <div class="flex-start">
              <h2 class="section-title-fun">What Makes Development Fun?</h2>
            </div>
            <p>
              I've used the internet a lot in life, and to actually be able to build it feels rewarding. In building something with code as one learns more, and learns more of the tools, libraries, tricks, all
              the creative possiblities also increase. One has to seek out new challenges.
              On the side there is always something to work on or learn. Having the ability to continually improve
              and
              have this accessibility to make computers do stuff with the internet worldwide is fun. I've always
              appreciated clean user friendly applications, whether it's Websites, Games, or any other software. The
              creative
              and artistic aspect of designing something from scratch on the frontend is fun. I find backend web
              developement
              fascinating since it allows running any language one wants (Python, Rust, Java, etc) on a server to create
              responses. After completing
              multiple
              university courses in Java, and a few more exclusively using Python, just having the ability to have a
              website I made query a server of mine, and
              actually run things in the languages I've written many assignments and exercises in makes programming
              feel more interactive and useful. 
            </p>

            <h3>What is my approach to learning all this website stuff?</h3>
            <p>I generally work on a few projects concurrently. Sometimes stopping one, or coming back to it after
              I learn skills from another project. If there isn't an exact end goal of what I am trying to make I may
              pause a project or find something interesting I want to learn how to implement, and if I find objectives
              to projects, or feel as
              though there is a lot to learn by working on them, I'll come back and complete them. Usually, it's a
              combination of working on some projects, polishing
              anything on my website, refactoring, polishing, and continually learning. One of my main goals is often
              to make sure I understand why I am doing something, why it makes sense, how it works, and now instead of
              just making stuff I think of how to make components that focus on specific tasks that are combined
              together.
            </p>
          </section>
          <!-- German Section -->
          <section v-if="languageButtonText === 'Language: English'" class="each-section">
            <div class="flex-start">
              <h1 class='section-title'></h1>
            </div>
          </section>
        </div>
        <div class="center-content-within">
          <section v-if="languageButtonText === 'Sprache: Deutsch'" class="each-section">
            <div class="flex-start">
              <h1 class="section-title">About the website</h1>
            </div>

            <ul class="about-me-list">
              <li>
                This website is made by me (Conrad) completely from a blank slate, and is 100% self-made. It is a Single Page Application (SPA)
                made in <a href="https://vuejs.org/" class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>. It's
                open-source and has been a continuous project to do web development and make projects.
              </li>
              <li>
                Now is a fullstack website and runs on a VPS (Virtual Private Server), the code is at
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>.
                I set up the VPS twice, after deciding to switch server hosts.

              </li>
              <li>
                <u>Front end</u> made with <span class="languages-used">Vue.js, JavaScript, TypeScript,
                  HTML, CSS (no CSS frameworks), Rust into Web Assembly,</span> and soon more projects in other
                languages such as Angular,
                Wordpress, <a class='text-links' href="https://nuxt.com/">Nuxt.js</a>,
                <a class="text-links" href="https://astro.build/">Astro</a>.
              </li>
              <li>
                <u>Back end</u> running <a class="text-links"
                  href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                and Python with <a class="text-links" href="https://gunicorn.org/">Gunicorn</a>, accessed via reverse
                proxy
                on <a class="text-links" href="https://www.nginx.com/resources/glossary/nginx/">nginx</a>.
                It also uses
                <a class="text-links" href="https://en.wikipedia.org/wiki/HTTP/2">http/2</a> for faster
                loading. Runs <a class="text-links" href="https://redis.io/">Redis</a> for data
                cache/storage and rate limiting backend requests. Redis runs in its own <a class="text-links"
                  href="https://docs.docker.com/engine/install/ubuntu/">Docker</a>
                image container on a Docker network, Gunicorn and Flask run in a separate Docker python image container
                on the same Docker network. Added in a <a class="text-links"
                  href="https://www.postgresql.org/">PostgreSQL</a> docker container, and also SQLite as well to setup
                some basic database
                functionalities. The user login now uses the PostgreSQL to create password hashes and user sessions
                with secure http cookies. Allows reading and writing to PostgreSQL from the frontend. Also uses Ubuntu
                ufw - Uncomplicated Firewall, and
                <a class="text-links" href="https://github.com/fail2ban/fail2ban">fail2ban</a> to block malicious IPs
                and bots and such.
              </li>
              <li>
                15 May 2024 - After extensive debugging, the backend now correctly uses http secure access cookies and
                refresh cookies with CSRF tokens for user sign in and user sessions. These
                user sessions expire after 30 minutes, sign ins use hashed passwords from my own Docker postgreSQL
                database.
                The refresh cookies both explicitly and implicitly refresh the access cookies.
                If the usersession is not expired, interactions will extend the session, and if the session is expired,
                the refresh cookie will explicitly refresh the
                access cookie and the user will not have to sign in again since the refresh access lasts 10 days as
                currently set!
              </li>
              <li>
                I started learning about Vue.js when I worked on the Bioinformatics Toolkit at Max-Planck-Institut für
                Biologie in Tübingen, Germany
              </li>
              <li>
                Side project to learn React/Next.js <a class="text-links"
                  href="https://next.conradswebsite.com/">next.conradswebsite.com</a> and also <a class="text-links"
                  href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> to try out the <a
                  class="text-links" href="https://astro.build/">Astro</a> framework. A <a class="text-links"
                  href='https://search-wordle-words.netlify.app/'>Wordle helper in Nuxt.js</a>
              </li>
              <li>
                This website only uses 1st party http cookies for user authentication. Why does this matter?
                Browsers end up amassing thousands of 3rd party cookies which track users, and <a class="text-links"
                  href="https://blog.google/products/chrome/privacy-sandbox-tracking-protection/?trk=article-ssr-frontend-pulse_little-text-block">Google
                  says</a> they are "taking a responsible approach to phasing out third-party cookies in Chrome"
              </li>
            </ul>
          </section>

          <!-- German Section -->
          <section v-if="languageButtonText === 'Language: English'" class="each-section">

            <div class="flex-start">
              <h1 class='section-title'>Über die Website</h1>
            </div>
            <ul class="about-me-list">
              <li>
                Diese Website wurde von mir (Conrad) komplett selbst erstellt. Es ist in Single Page Application (SPA)
                in <a href="https://vuejs.org/" class="text-links" style="color: #42b883;">Vue 3 (Vue.js)</a>
                gemacht. Es ist Open-Source und ist ein kontinuierliches Projekt zur Webentwicklung und Durchführung von
                Projekten.
              </li>
              <li>
                Jetzt ist eine Fullstack Website und Läuft auf einem VPS (Virtual Private Server). Der Code befindet
                sich auf
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">GitHub</a>.
                Ich habe den VPS zweimal eingerichtet, nachdem ich mich entschieden hatte, den Server-Host zu wechseln.

              </li>
              <li>
                <u>Frontend</u> Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet
                habe,
                sind
                <span class="languages-used">Vue.js, JavaScript, TypeScript, HTML, CSS (keine CSS-Frameworks), und Rust
                  für Web Assembly.</span>
                In Zukunft plane ich, weitere Projekte in anderen Sprachen wie Angular, Wordpress und Astro umzusetzen
              </li>
              <li>
                <u>Backend</u> läuft mit <a class="text-links"
                  href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>
                und Python mit Gunicorn und wird über einen Reverse-Proxy auf <a class="text-links"
                  href="https://www.nginx.com/">Nginx</a> aufgerufen. Es verwendet außerdem <a class="text-links"
                  href="https://de.wikipedia.org/wiki/HTTP/2">HTTP/2</a> für schnelleres Laden.
                Es läuft jetzt <a class="text-links" href="https://redis.io/">Redis</a> für Daten Cache/Speicherung und
                raten begrenzende Backend-Anfragen.
                Backend läuft in <a class="text-links" href="https://docs.docker.com/engine/install/ubuntu/">Docker</a>.
                Im selben Docker-Netzwerk läuft Redis in einem eigenen Docker-Image-Container.
                Gunicorn und Flask hingegen befinden sich in einem separaten Docker-Python-Image-Container auf demselben
                Netzwerk. Hinzugefügt wurde ein <a class="text-links"
                  href="https://www.postgresql.org/">PostgreSQL</a>-Docker-Container sowie auch SQLite, um einige
                grundlegende
                Datenbankfunktionalitäten einzurichten.
                Nutzt auch Ubuntu ufw - Uncomplicated Firewall und Fail2ban, um bösartige IPs und Bots zu blockieren
                und ähnliches.
              </li>
              <li>
                15. Mai 2024 - Nach umfangreichen Debugging-Arbeiten verwendet das Backend nun korrekt HTTP-sichere
                Zugriffscookies
                und Aktualisierungscookies mit CSRF-Token für Benutzeranmeldung und Benutzersitzungen. Diese
                Benutzersitzungen
                dauern
                30 Minuten, Anmeldungen verwenden gehashte Passwörter aus meiner eigenen Docker-PostgreSQL-Datenbank.
                Die Aktualisierungscookies aktualisieren sowohl explizit als auch implizit die Zugriffscookies.
                Wenn die Benutzersitzung nicht abgelaufen ist, werden Interaktionen die Sitzung verlängern, und wenn die
                Sitzung abgelaufen ist,
                wird das Aktualisierungscookie explizit das Zugriffscookie aktualisieren, und der Benutzer muss sich
                nicht erneut anmelden,
                da der Aktualisierungszugriff aktuell auf 10 Tage eingestellt ist!
              </li>
              <li>
                Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am Max-Planck-Institut für
                Biologie in Tübingen, Deutschland, gearbeitet habe
              </li>
              <li>
                Nebenprojekt zu React/Next.js lernen <a class="text-links"
                  href="https://next.conradswebsite.com/">https://next.conradswebsite.com</a> und auch <a
                  class="text-links" href="https://blog.conradswebsite.com">https://blog.conradswebsite.com</a> die das
                <a class="text-links" href="https://astro.build/">Astro</a> framework verwendet
              </li>
              <li>
                Diese Website verwendet nur First-Party-HTTP-Cookies zur Benutzerauthentifizierung. Warum ist das
                wichtig? Browser sammeln am Ende
                Tausende von Drittanbieter-Cookies, die Benutzer verfolgen, und <a class="text-links"
                  href="https://blog.google/products/chrome/privacy-sandbox-tracking-protection/?trk=article-ssr-frontend-pulse_little-text-block">Google
                  sagt</a>, dass sie gerade dabei sind "taking a responsible approach to phasing out third-party cookies
                in Chrome"
              </li>

            </ul>
          </section>
        </div>

        <div class="center-content-within" style="flex-direction: column;">
          <section v-if="languageButtonText === 'Sprache: Deutsch'" class="each-section form-section">

            <div class="flex-start">
              <h2 class="section-title-two">About me</h2>
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
            <!-- This area sets the contact to scroll where 'form-container' below in the middle of the page-->
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
            <span id="contact-form-section"></span>

            <p>In addition to programming and making this website.
              I drink coffee and like spicy food (especially Mexican food). Sometimes play guitar, chess.
              Enjoy watching/listening to the birds.</p>
          </section>

          <section v-if="languageButtonText === 'Sprache: Deutsch'"
            class="each-section form-section last-section-bottom-padding">
            <div class="">

              <div v-if="backEndQuery !== null" class="backend-message center-with-flex">
                ConradsWebsite says: "{{ backEndQuery }}"
              </div>
              <div v-if="errorMessage !== ''" class="error-message-color center-with-flex">

                <!-- License below refers to the svg icon only -->
                <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="#ff5959">
                  <path
                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg><span class="error-message-span-text">{{ errorMessage }}</span>

              </div>
              <div class="flex-start">
                <h2 class="section-title-three">Contact</h2>
                <button style="margin-bottom: 0.95rem; margin-left: 1rem; margin-top: 1.2rem;" class="clean-button"
                  @click="testBackEnd()">Test Backend</button>
              </div>
              <p>Must check <b style="color: rgb(67, 255, 149);">"Agree to terms"</b> checkbox to submit message. Name
                and
                message are required fields. Email is
                not required.</p>
              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="name" class="include-label-text">Name*</label>
                    <input id="name" autocomplete="given-name" class="input-field-style" type="text"
                      v-model="submitName" placeholder="Enter your name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email</label>
                    <input autocomplete="off" class="input-field-style" id="email" type="email" v-model="submitEmail"
                      placeholder="name@####.com" />
                  </li>
                  <li>
                    <label for="userMessage" class="include-label-text">Message*</label>
                    <textarea id="userMessage" class="input-field-style" type="text" v-model="submitMessage"
                      placeholder="Message">
                  </textarea>
                  </li>
                  <li class="button">
                    <button :class="{ 'not-allowed-cursor-change': !isFormValid }" class="clean-button"
                      type="submit">Send your message</button>
                    <div>
                      <div style="font-size: 0.8rem; margin-top: 1rem;">
                        <p>The cursor on the 'Send your message' button above will be a
                          'not-allowed' icon (a circle with a diagonal line through it) if required fields are
                          missing! The button can be pressed to help find out what is missing.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </form>

              <p v-if="submitMessageSuccess" style="color: #fff; font-size: 1.5rem;">Message sent successfully! Thank
                you
                for your message!</p>
            </div>

            <label class="check-box-label" for="acceptCheckBoxEnglish">
              <span class="about-check-box-font">Agree to terms</span>
              <input id="acceptCheckBoxEnglish" class="check-box" type="checkbox" name="myCheckBox"
                v-model="checkBoxValue">
            </label>
            <router-link class="text-links no-decoration" :to="{ path: '/privacy' }">Privacy Policy</router-link>

            <!--
            --- Additional Testing Area ---<br>
            <a class="text-links" href="https://conradswebsite.com/backend/api/download" download="test100.txt">Download
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
          <section v-if="languageButtonText === 'Language: English'" class="each-section form-section">
            <div class="flex-start">
              <h2 class="section-title-two">Über mich</h2>
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

            <p>
              Zusätzlich zum Programmieren und Erstellen dieser Website trinke ich gerne Kaffee und mag scharfes Essen
              (besonders mexikanisches).
              Manchmal spiele ich Gitarre oder Schach. Ich genieße es, Vögeln zuzuschauen/-hören.
            </p>
          </section>
          <section v-if="languageButtonText === 'Language: English'"
            class="each-section form-section last-section-bottom-padding">
            <div class="">

              <div v-if="backEndQuery !== null" class="backend-message center-with-flex">
                ConradsWebsite says: "{{ backEndQuery }}"
              </div>
              <div v-if="errorMessage !== ''" class="error-message-color center-with-flex">

                <!-- License below refers to the svg icon only -->
                <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="#ff5959">
                  <path
                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg><span class="error-message-span-text">{{ errorMessage }}</span>

              </div>
              <div class="flex-start">
                <h2 class="section-title-three">Kontakt</h2>
                <button style="margin-bottom: 0.95rem; margin-left: 1rem; margin-top: 1.2rem;" class="clean-button"
                  @click="testBackEnd()">Backend Testen</button>
              </div>
              <p>Muss das Kontrollkästchen <b style="color: rgb(67, 255, 149);">„Zustimmen“</b> aktivieren werden, um
                die
                Nachricht abzusenden.
                Name und Nachricht sind Pflichtfelder. Die E-Mail ist nicht erforderlich.</p>
              <form @submit.prevent="leaveMessage" class="form">
                <ul class="no-bullet">
                  <li>
                    <label for="nameD" class="include-label-text">Name*</label>
                    <input id="nameD" autocomplete="given-name" class="input-field-style" type="text"
                      v-model="submitName" placeholder="Enter your name" />
                  </li>
                  <li>
                    <label for="email" class="include-label-text">Email</label>
                    <input autocomplete="off" class="input-field-style" id="email" type="email" v-model="submitEmail"
                      placeholder="name@####.com" />
                  </li>
                  <li>
                    <label for="userMessageD" class="include-label-text">Nachricht*</label>
                    <textarea id="userMessageD" class="input-field-style" type="text" v-model="submitMessage"
                      placeholder="Message">
                  </textarea>
                  </li>
                  <li class="button">
                    <button :class="{ 'not-allowed-cursor-change': !isFormValid }" class="clean-button"
                      type="submit">Nachricht senden</button>
                    <div>
                      <div style="font-size: 0.8rem; margin-top: 1rem;">
                        <p>Der Cursor auf dem Button 'Nachricht senden' oben wird ein 'nicht erlaubt'-Symbol (ein Kreis
                          mit einer diagonalen Linie durch) sein,
                          wenn erforderliche Felder fehlen! Der Button kann gedrückt werden, um herauszufinden, was
                          fehlt.</p>
                      </div>

                    </div>
                  </li>
                </ul>
              </form>
              <p v-if="submitMessageSuccess" style="color: #fff; font-size: 1.5rem;">
                Ihre Nachricht wurde erfolgreich übermittelt! Vielen Dank für Ihre Nachricht.</p>
            </div>

            <label class="check-box-label" for="acceptCheckBoxEnglish">
              <span class="about-check-box-font">Zustimmen</span>
              <input id="acceptCheckBoxEnglish" class="check-box" type="checkbox" name="myCheckBox"
                v-model="checkBoxValue">
            </label>
            <router-link class="text-links no-decoration" :to="{ path: '/privacy' }">Datenschutzerklärung</router-link>
          </section>
        </div>
        <!-- images and text section -->
        <div class="center-content-within text-with-photos-max-width">
          <div>
            <!-- 1st text image component -->
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-grid-content-template :imgWidth="26" :titleText="objectiveTitle"
                :content-text="objectiveText" />
            </div>
            <div v-else>
              <two-columns-grid-content-template :imgWidth="26" :titleText="objectiveTitleDeutsch"
                :content-text="objectiveTextDeutsch" />
            </div>
            <!-- 2nd text image component -->
            <div class="center-with-flex">
              <div v-if="arrowText === 'Deutsch'">
                <two-columns-reversed-grid class="top-component-adjustment" :titleText="approachTitle"
                  :content-text="approachText" :content-image="birdGenerated" />
              </div>
              <div v-else>
                <two-columns-reversed-grid class="top-component-adjustment" :titleText="approachTitleDeutsch"
                  :content-text="approachTextDeutsch" :content-image="birdGenerated" />
              </div>
            </div>
            <!-- 3rd text image component -->
            <div v-if="arrowText === 'Deutsch'">
              <two-columns-grid-content-template :imgWidth="26" :titleText="updatesTitle" :content-text="updatesText"
                :content-image="gitLanguages" :setPhotoLink="'https://github.com/conrizzo/conradswebsite'"
                :set-photo-caption="languagesCaptionText" />
            </div>
            <div v-else>
              <two-columns-grid-content-template :imgWidth="26" :titleText="updatesTitleDeutsch"
                :content-text="updatesTextDeutsch" :content-image="gitLanguages"
                :setPhotoLink="'https://github.com/conrizzo/conradswebsite'"
                :set-photo-caption="languagesCaptionTextDeutsch" />
            </div>
            <!-- 4th text image component -->
            <div class="center-with-flex">
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
        <!--
        <div class="center-with-flex">
          <div style="overflow-x: hidden; width: 425px; padding-top: 1rem;">
            <h3
              style="color: rgba(255,255, 255, 1); font-size: 3rem; line-height: 1.1; padding-bottom: .5rem; padding-top: 1rem; text-align: center;">
              Mobile iframe simulation</h3>
            <iframe title="Mobile Website Emulation Example" src="/about" width="425" height="600"
              style="overflow:hidden;"></iframe>
            <div class="center-with-flex iFrameSection">
              <div>
                <h2 style="font-size: 2rem; line-height: 1.1; padding-bottom: .5rem; padding-top: 1rem;"><i>Responsive
                    Web Design</i></h2>
                <p>Explore within this iframe, or use browser tools by <i>right-clicking</i> then selecting
                  <i>'Inspect'</i>.
                  The next steps will vary depending on your browser e.g. Chrome, Firefox, Safari, etc. The funny thing
                  about this
                  is by using an iframe to display this page with an iframe, it potentially makes an infinite loop
                  of iframes, though the browser should limit this by default. If an iframe within an iframe within an
                  iframe occurs this
                  is not intended! I am not trying to <a href="https://www.youtube.com/watch?v=fQGbXmkSArs"
                    class="text-links" target="_blank">'Hack time'</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      -->
      </div>
    </main>
  </div>

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

      titleText: "hello and welcome,",
      contentText: "A personal fullstack website to test <br> Projects, Learn, and Experiment. Details are below!",

      clickCount: 0,
      firstClick: null,
      backEndQuery: null,

      clickLimit: 3,
      time: 10000,

      submitName: "",
      submitEmail: "",
      submitMessage: "",

      submitMessageSuccess: false,
      canSubmit: true,
      errorMessage: "",
      checkBoxValue: false,
      validateFormFieldsCheck: false,

      imageWidth: 20,  // Initial width
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
  computed: {
    isFormValid() {
      return this.submitName.length >= 1 && this.submitMessage.length >= 1 && this.checkBoxValue;
    },
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

  mounted() {
    document.title = "About Conrad's Website";
    Prism.highlightAll();
  },
  // add a possibility to give an alternate error message if the backend is down
  methods: {
    toggleCheckboxChange() {
      this.checkBoxValue = !this.checkBoxValue;
    },
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
          //console.log("Access backend Python code!");
          /* for server simplfied link is use 'backend/api/data' */
          /* const response = await fetch('/backend/api/data'); */
          /* const response = await fetch('https://conradswebsite.com/backend/api/data'); */
          /* must use actual web address for localhost or from another webserver 
          const response = await fetch('https://conradswebsite.com/backend/api/data'); */
          const response = await fetch('/backend/api/data');
          const data = await response.json();
          //console.log(data);
          this.backEndQuery = data.message;
          this.clickCount++;
        } else {
          this.backEndQuery = `Error: Too many requests. Limited to ${this.clickLimit} requests per ${this.time / 1000} seconds!`;
        }
      } catch (error) {
        //console.error('Error:', error);
        this.backEndQuery = `Error: The backend is currently down (likely for updates). Please try again later.`;
      }
    },
    validateFormFields() {

      if (this.checkBoxValue === false) {
        this.errorMessage = 'Error: Please click "Agree to terms" checkbox to send a message';
        return false;
      }

      if (!this.canSubmit) {
        this.errorMessage = 'Error: Please wait, only 1 message per 30 seconds allowed!';
        return false;
      }

      if (this.submitMessage.length < 1) {
        this.errorMessage = "Please fill out the 'Message' field";
        return false;
      }

      if (this.submitName.length < 1) {
        this.errorMessage = "Please fill out the 'Name' field";
        return false;
      }
      this.errorMessage = "";
      // If all conditions are met, return true
      return true;

    },
    async leaveMessage() {

      if (this.validateFormFields() === false) {
        return;
      }

      this.submitName.length < 1

      const name = this.submitName;
      const subject = this.submitEmail;
      const message = this.submitMessage;

      try {
        const response = await fetch('/backend/api/leave_message', {
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
        //console.log(data);

        // If the request was successful, show a "message received" notice
        if (data.message === 'Form submission successful') {
          // reset all the fields
          this.submitName = '';
          this.submitEmail = '';
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
        this.errorMessage = `Error: It's likely the backend server is down (likely for updates). Please try again later.`;
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

.section-title-fun {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3rem;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #d059ff;
  line-height: 1.25;

}

.section-title {
  margin-bottom: 0em;
  color: #ffffff;
  font-size: 3rem;
  border-radius: 0.2em;
  text-decoration: underline;
  text-decoration-color: #ff5959;
  line-height: 1.25;
  text-transform: capitalize;
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
  text-decoration: underline;
  text-decoration-color: #43ff95;
}

h2 {
  text-align: left;
  text-transform: capitalize;
}

p {
  max-width: none;
  padding-bottom: 1rem;
}

p:last-child {
  padding-bottom: 0rem;
}

.form-section {
  width: 100%;
}



.top-top-component-adjustment {
  max-width: 100rem;
  height: 55rem;
  background: rgba(0, 0, 0, 0.75);
  padding-right: 1rem;
  padding-left: 1rem;
  color: black;
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
  color: rgb(255, 255, 255);
  cursor: auto;
  font-size: 1.1rem;
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

.clean-button {
  background: transparent;
  border: 1px white solid;
  color: white;
  font-size: 1rem;
}

.clean-button:hover {
  background: rgb(67, 255, 149);
  color: #000;
}

.clean-button:active {
  background-color: rgba(67, 255, 149, 0.75);
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

  background:
    linear-gradient(10deg, rgb(0, 0, 0) 20%, transparent 90%) -0px 0,
    linear-gradient(-10deg, rgb(0, 0, 0) 20%, transparent 90%) -0px 0,
    linear-gradient(10deg, transparent 75%, rgb(0, 0, 0) 75%) 0px 0,
    linear-gradient(-10deg, transparent 75%, black 75%) 0px 0;
  background-size: 75% 800px;
  background-color: white;
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
  margin-top: 3.5rem;
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
  margin-top: 3rem;
}

.language-arrow-text {
  font-size: 0.9em;
  margin-top: -6em;
  margin-left: -31rem;
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
  border: 4px solid rgb(255, 255, 255);
  border-color: transparent transparent transparent rgb(255, 255, 255);
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
  border: 2px solid rgb(255, 255, 255);
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
  font-size: 1.25rem;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  border: 1px solid #fff;
  color: #ffffff;
  padding: 1rem;
  z-index: 3;
  cursor: pointer;
  width: 15rem;
  height: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;

  letter-spacing: -0.06rem;
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.8);
  color: rgb(55, 55, 55);
}

.language-button:active {
  border: 2px solid rgba(0, 255, 204, 0.75);
  color: #fff;
}


/* basic css tooltip */
.tooltipTwo {
  position: relative;
  display: inline-block;
  z-index: 4;
}

.tooltipTwo:before {
  content: "";
  visibility: hidden;
  position: absolute;
  height: 0px;
  width: 0px;
  top: 3.2rem;
  left: 4.5rem;
  /* 1px buffer for zooming problems while rendering*/
  border-width: 0.66em;
  border-color: transparent #42b883 transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
}

.tooltipTwo .tooltiptextTwo {
  text-align: left;
  visibility: hidden;
  background-color: #42b883;
  color: #fff;
  border-radius: 6px;
  padding: 0.5em;
  font-size: 0.6em;
  /* Position the tooltip */
  position: absolute;
  top: 5.1rem;
}

.tooltipTwo:hover:before {
  visibility: visible;
}

.tooltipTwo:hover .tooltiptextTwo {
  visibility: visible;
}

.check-box-label {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.check-box {
  cursor: pointer;
  margin-left: 0.25rem;
  transform: scale(1.5);
}

input[type='checkbox'] {
  accent-color: #42b983;
}

.about-check-box-font {
  font-size: 1.1rem;
  color: rgb(67, 255, 149);
  margin-right: 0.2rem;
}

.error-message-color {
  color: #ff5959;
}

.error-message-span-text {
  margin-left: 0.5rem;
  margin-top: 0.1rem;
}

.last-section-bottom-padding {
  margin-bottom: 3.5rem;
}

.iFrameSection {
  color: #ffffff;
  padding-bottom: 0.5rem;
}

.text-with-photos-max-width {
  max-width: 90rem;
  margin: 0 auto;
}

.left-area-title {
  width: 50%;
}

.not-allowed-cursor-change {
  cursor: not-allowed;
}


@media screen and (max-width: 70rem) {
  .left-area-title {
    display: none;
  }

  .each-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

}

@media screen and (max-width: 45rem) {
  .language-container {
    margin-top: 0rem;
    margin-bottom: 8rem;
  }

  .top-top-component-adjustment {
    /* keep top image from overflowing off screen, center  */
    margin-top: 8rem;
    margin-bottom: 2.5rem;
  }

}

@media screen and (max-width: 40rem) {


  .top-top-component-adjustment {
    background: rgba(0, 0, 0, 0);
  }

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

  .iFrameSection {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

}
</style>