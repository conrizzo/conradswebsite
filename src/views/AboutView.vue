

<template>
  <body v-show="languageButtonText === 'Deutsch wechseln'" id="body">
    <main class="main-content">
      <!-- Main area -->
      <div class="text-container">

        <div class="title-container">
            <h1>About</h1>
            <div class="language-container">
              <span class="language-arrow-text tooltip">{{arrowText}}
                <span class="tooltiptext">This is CSS and Vue.js, not an image or drawn arrow!</span>
              
              </span>
              <span class="tooltiptext"></span>
                  <div   style="transform: rotate(-55deg);">                   
                    <div class="arrow-container">
                      
                      <div class="arrow">
                        
                        <div class="curve"></div>
                        <div class="point"></div>
                      </div>
                      
                    </div>
                  </div>
                  <button @click="language();" class="clean-button language-button" role="button">{{ languageButtonText }}</button>
              </div>

        </div>

        <div class="bullets">                   
          <ul>
            <li>
              This website is made by me (Conrad) using primarily
              <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                  3</b></a>
              (Vue.js) for its reactivity and interactivity.
            </li>

            <li>This website has been an evolving project. It is hosted on
              <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite">
                my GitHub</a> with
              <a class="home-text-links" href="https://pages.github.com/">
                GitHub Pages</a>.
            </li>

            <li>Programming languages/frameworks I used to make this website include: Vue.js, JavaScript, TypeScript,
              HTML, CSS, Rust into Web Assembly, and soon more projects in other languages such as Angular, Wordpress, Astro.
            </li>

            <li>I started learning about Vue.js when I worked on the Bioinformatics
              Toolkit at <i>Max-Planck-Institut für Biologie</i> in Tübingen, Germany.
            </li>                 

            <li>I also started a <b><a class="home-text-links"
                  href='https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/'>blog site</a></b> that
              uses the <a class="home-text-links" href='https://astro.build/'>Astro</a> framework.
            </li>

            <li> 
              The point has been to have fun and continue learning!
            </li>
          </ul>
        </div>     
            <!--<span style="color: #a335ee;">Education:  -->
            <!--<li>I hold a degree in Computational Linguistics from the
              University of Tübingen in Germany,
              and previously completed a Bachelor of Science in Biology from the University of North Carolina at
              Wilmington, Wilmington, NC, USA.</li>
            <li>Have been working on this website using Vue.js, JavaScript,
              TypeScript, CSS, HTML. Starting to
              learn more about backend development and databases.
            </li>
            <li>
              Started learning <a class="home-text-links" href=https://doc.rust-lang.org/book/title-page.html>Rust</a> as
              well.
              Have practiced more German too, so it is <u>a lot</u> of language learning!
            </li> -->     
      
        <h2>More information about me</h2>    
        <p>I studied <a class="home-text-links" href="https://en.wikipedia.org/wiki/Computational_linguistics">Computational Linguistics</a> in Germany. Before this I completed a Biology degree in the USA. After some time to figure out what to do with my background, I'm 
          eager to learn more programming languages and improve as a developer. I'm motivated and curious about solving challenging topics that expand my knowledge in front-end, back-end, full-stack, or potentially machine learning and NLP related work. 
          I'm excited about learning anything that adds to my skills as a developer, and confident in my ability to research and think through how to solve a problem using code.
        
        </p>

                     
        <figure class="figure-location">
          <img class="img-container" :src="imagePath" alt="Coding Languages used" />
          <figcaption class="figure-caption">Here is an approximation of the languages this website uses. It's mostly
            Vue.js. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.
          </figcaption>
        </figure>      
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
          <p class="bird-text" style="color: #c7c7c7;"><a class="home-text-links"
              href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a>
            (name in German, English name is Great Tit)
            photo taken in Tübingen, Germany. 
            <br>
            <br>
            It is a species of bird that is native to Europe.
            They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat
            peanuts!</p>
        </template>
      </AsideContent>
    </main>
  </body>

  <!-- Deutsch -->
  <body v-show="languageButtonText === 'Switch to English'" id="body">
    <main class="main-content">
      <!-- Main area -->
      <div class="text-container">
        
        <div class="title-container">
            <h1>Über</h1>
            <div class="language-container">
              <span class="language-arrow-text tooltip">{{arrowText}}
                <span class="tooltiptext">Das ist CSS und Vue.js, keine Abbildung oder gezeichneter Pfeil!</span>
              
              </span>
                  <div   style="transform: rotate(-55deg);">                   
                    <div class="arrow-container">
                      
                      <div class="arrow">
                        
                        <div class="curve"></div>
                        <div class="point"></div>
                      </div>
                      
                    </div>
                  </div>
                  <button @click="language();" class="clean-button language-button" role="button">{{ languageButtonText }}</button>
              </div>
        </div>

        <div class="bullets">      
          <ul>
            <li>Diese Website wurde von mir (Conrad) selbst erstellt, hauptsächlich mit
              <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                  3</b></a>
              (Vue.js) für seine Reaktivität und Interaktivität.
            </li>

            <li>Diese Website war ein sich entwickelndes Projekt. Sie wird auf
              <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite">
                meinem GitHub</a> mit
              <a class="home-text-links" href="https://pages.github.com/">
                GitHub Pages</a> gehostet.
            </li>

            <li>
              Die Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe, sind Vue.js, 
              JavaScript, TypeScript, HTML, CSS und Rust für Web Assembly. 
              In Zukunft plane ich, weitere Projekte in anderen Sprachen wie Angular, Wordpress und Astro umzusetzen.
            </li>

            <li> Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am 
              <i>Max-Planck-Institut für Biologie</i> in Tübingen, Deutschland, gearbeitet habe.
            </li>             

            <li>Außerdem habe ich begonnen, eine 
                 <b><a class="home-text-links"
                  href='https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/'>Blogseite</a></b> die das
              <a class="home-text-links" href='https://astro.build/'>Astro</a> framework verwendet.
            </li>

            <li>
              Der Sinn war, Spaß daran zu haben, dabei mehr zu lernen.
            </li>          
          </ul>
        </div>
   
       
  <figure class="figure-location">
    <img class="img-container" :src="imagePath" alt="Coding Languages used" />
    <figcaption class="figure-caption">Here is an approximation of the languages this website uses. It's mostly
      Vue.js. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.
    </figcaption>
  </figure>
</div>
      <!-- Aside area -->
      <AsideContent style="background-color: rgb(40, 40, 40);">
          <template v-slot:aside-content>
            <div class="bird-container">
              <h3>
                Vogel des Monats: Kohlmeise
              </h3>

              <img class="bird" :src="birdPicture" alt="Kohlmeise picture">
            </div>
            <p class="bird-text" style="color: #c7c7c7;"><a class="home-text-links"
                href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a>
             
              Foto in Tübingen, Deutschland gemacht. 
            <br>
            <br>
            Es ist eine Vogelart, die in Europa heimisch ist.
            Sie sind bekannt für ihr charakteristisches schwarz-weißes Gefieder und ihre fröhlichen Lieder. 
            Sie lieben es auch, Erdnüsse zu essen!</p>
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
      imagePath: require("@/images/project_languages.jpg"), // Add the image path to the data object
      languageChange: false,
      languageButtonText: "Deutsch wechseln",
      arrowText: "Deutsch",
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
  background: -webkit-linear-gradient(-4deg,rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);
  background: linear-gradient(-4deg,rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9), 20%,  rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5) 60%, rgb(139, 114, 188) 100%);  
  background-size: 100% 120%;  
  background-attachment: fixed;   
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
}

h1 {  
  margin-bottom: 0em;
  color: #343434;
  font-size: 3em;
  border-radius: 0.2em;  
  text-decoration: underline;
  text-decoration-color: #ff5959;
}

h2 {
  text-align: left;
  color: #2c2c2c;

  border-bottom: 1px solid rgb(18,18,18);
  
}

h3 {
  margin-top: 4.5em;
  color: #c7c7c7;
}

/* start arrow area */
.language-container{
  display: flex;
  align-items: center;
}

.language-arrow-text{
  font-size: 0.9em; margin-top: -2.5em; margin-right: 4em; z-index: 5; transform: rotate(35deg);
  border-bottom: none; 
}

.tooltip:before{
  top: 1em;
}
.tooltip .tooltiptext{
  top: 4em;
}

.arrow-container {
  position: relative;
}

/* Exclusively only the drawn arrow for this graphic from https://codepen.io/zomgbre/pen/DdEWby */
.arrow {
  position: absolute;
  top: -320px;
  left: -60px;
}

.arrow .curve {
  border: 4px solid #ff5959;
  border-color: transparent transparent transparent #ff5959;
  height: 360px;
  width: 200px; /* Adjust the width as needed */
  border-radius: 0 0 0 150px; /* Adjust the border-radius as needed */
}

.arrow .point {
	position: absolute;
	left: 40px;
	top: 315px;
}

.arrow .point:before, .arrow .point:after {
	border: 2px solid #ff5959;
	height: 25px;
	content: "";
	position: absolute;
}

.arrow .point:before {
	top: -11px;
	left: -11px;
	transform:rotate(-74deg);
	-webkit-transform:rotate(-74deg);
  -moz-transform:rotate(-74deg);
  -ms-transform: rotate(-74deg);
}

.arrow .point:after {
  top: -20px;
	left: 5px;
	transform:rotate(12deg);
	-webkit-transform: rotate(12deg);
  -moz-transform:rotate(12deg);
  -ms-transform: rotate(12deg);
}
/* arrow code css end */


.language-button{ 
  margin-top: 1em;
  margin-right:1em;
  font-size: 0.6em;
}
.language-button:hover{
  box-shadow: rgb(255, 89, 89) 0 0 0 2px, transparent 0 0 0 0;  
}

.bullets{
  
  margin-left: 2rem;
  padding-right: 0.5em;
}

li::marker {
  color: rgb(255, 89, 89);

}

li {
  color: #2c2c2c; 
  font-size: 1.4rem;  
  padding-bottom: 0.5rem;
  
}
/*
li::before{
  content: "• ";
  color: rgb(255, 89, 89);
}
*/
.home-text-links{
  color: rgb(67, 82, 255);
  font-weight: 500;  
  text-decoration: none;   
  transition: 0.33s ease-in-out; /* Add transition for smooth animation */
}

.home-text-links:hover{
  text-decoration: underline;
  color: rgb(255, 89, 89);
}

p{
  color: rgb(15, 18, 25);
  line-height: 1.7em;
  font-size: 1.25em;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  font-weight: 400;  
  padding: 0.5em 2em 0.5em 2em;
}

nav {
  background-color: rgb(40, 40, 40);
}

figure {
  float: inline-end;
  display: flex;
  flex-flow: column; 
  max-width: 22rem;
  margin: auto;
  font-size: 0.9em;
  text-align: center;
  color: #cacaca;
  background-color: rgb(40, 40, 40);
  border-radius: 15px;
  line-height: 1.2;  
}
.img-container {
  max-width: 30em;
  border-radius: 0.5em;
  margin-bottom: 0.33em;
}
.text-container {
  background-color: rgb(246, 247, 250);
  padding: 3em 10em 2em 10em;
}
.figure-location {
  padding: 0.5em;  
  margin: 1em;
}
.figure-caption {
  text-align: left;
}
.bird {
  border-radius: 15px;
  width: 90%;
}
.bird-text{
  padding-left: 10%; 
  font-size: 1em;
}
.bird-container {
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}


@media only screen and (max-width: 95rem) {
  .img-container {
    margin-bottom: 0.25em;
  }
  .bird {
    max-width: 22.5rem;
  }
  .bird-text{
  padding-left: 2em;
 }  

  h1 {
    padding-left: 0.7em;
  }

  h2 {
    padding-left: 1.4em;
  }

  h3 {
    margin-top: 0em;
  }
}

@media only screen and (max-width: 80rem) { 
  .text-container {
    padding-left: 0.25em;
    padding-right: 0.25em;
  }
}

@media only screen and (max-width: 45rem) { 

    figure {
      float: none;   
     
    }
    .figure-location{    
      margin: auto;  
      margin-top: 1em;
      margin-bottom: 1em;
    }
}
</style>