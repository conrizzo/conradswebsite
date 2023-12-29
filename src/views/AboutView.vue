

<template>
  <body v-show="languageButtonText === 'Deutsch wechseln'" id="body">
    <main class="main-content">
      <!-- Main area -->
      <div class="text-container">

        <div class="title-container">
            <h1>About</h1>
            <div class="language-container">
                <span class="language-arrow-text tooltip">{{arrowText}}
                  <span class="tooltiptext">
                    This is CSS and Vue.js, not an image or drawn arrow!
                  </span>              
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
        <div class="bullets-container">
          <div class="bullets">                   
            <ul>
              <li>
                This website is made by me (Conrad) using primarily
                <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                    3</b></a>
                (Vue.js) for its reactivity and interactivity.
              </li>

              <li>It has been an evolving project. It is hosted on
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
        </div>
            <!--<span style="color: #a335ee;">Education:  -->
            <!--<li>I hold a degree in Computational Linguistics from the
              University of Tübingen in Germany,
              and previously completed a Bachelor of Science in Biology from the University of North Carolina at
              Wilmington, Wilmington, NC, USA.</li>
            <li>Have been working on this website using Vue.js, JavaScript,
              TypeScript, CSS, HTML. Starting torh2
              learn more about backend development and databases.
            </li>
            <li>
              Started learning <a class="home-text-links" href=https://doc.rust-lang.org/book/title-page.html>Rust</a> as
              well.
              Have practiced more German too, so it is <u>a lot</u> of language learning!
            </li> -->     
      <div class="more-information-about-me">
        <h2><span class="bottom-border">More information about me</span></h2>    
        <p> 
          In 2022 I completed studies in <a class="home-text-links" href="https://en.wikipedia.org/wiki/Computational_linguistics">Computational Linguistics</a> 
          at the University of Tübingen in Germany. I am pleased to have successfully earned a degree from a German university.
          The combination of computer science, statistics, linguistics, parsing, logic, math, and machine learning
          this subject encompassed made it challenging. Before this I obtained a Biology degree in the USA. 
          I am now keen on enhancing my programming abilities and advancing as a developer.
          Motivated and curious, I seek challenges in front-end, back-end, full-stack, or potentially in machine learning and NLP.  
          I look forward to any new opportunity, am excited about learning, and confident in my ability to do problem-solving through code and research.
        </p>
      </div>    
      <div class="more-information-about-me" >
          <h2>Updates</h2>
          <p>
            I've been adding new components into this website and updating it - lots of refactoring and restructuring.
            As one writes more code, abilities improve, and coming back to previously written code can be a good way to see
            ones progression. There are often minor ways to improve code, ways to make it simpler and improve the design.
            One also gains a continually better understanding of how to use language syntax to structure code better.
            Final finished examples are coming together.
          </p>
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
                Bird of the Month: Kohlmeise
              </h3>

              <img class="bird" :src="birdPicture" alt="Kohlmeise picture">
            </div>
            <div class="aside-bird-caption">
            <p class="bird-text"><a class="home-text-links"
                href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a>
              (name in German, English name is Great Tit)
              photo taken in Tübingen, Germany. 
              <br>
              <br>
              It is a species of bird that is native to Europe.
              They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat
              peanuts!
            </p>
          </div>
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
                  <span class="tooltiptext">
                    Das ist CSS und Vue.js, keine Abbildung oder gezeichneter Pfeil!
                  </span>              
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
        <div class="bullets-container">
          <div class="bullets">      
            <ul>
              <li>Diese Website wurde von mir (Conrad) selbst erstellt, hauptsächlich mit
                <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                    3</b></a>
                (Vue.js) für seine Reaktivität und Interaktivität.
              </li>

              <li>Es handelt sich um ein sich entwickelndes Projekt. Sie wird auf
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
        </div>

        <div class="more-information-about-me">
          <h2><span class="bottom-border"></span>Mehr Informationen über mich</h2>    
          <p> 
            Im Jahr 2022 habe ich mein Studium der <a class="home-text-links" href="https://de.wikipedia.org/wiki/Computerlinguistik\">Computerlinguistik</a> an der Universität Tübingen in Deutschland abgeschlossen. 
            Ich freue mich, einen deutschen Universitätsabschluss erreicht zu haben.
            Die Kombination aus Informatik, Statistik, Linguistik, Parsing, Logik, Mathematik und machine learning, die dieses Fach umfasste, machte es anspruchsvoll. 
            Zuvor habe ich einen Abschluss in Biologie in den USA erworben. Ich bin nun darauf aus, meine Programmierkenntnisse zu verbessern und mich als Entwickler weiterzuentwickeln. 
            Motiviert und neugierig strebe ich nach Herausforderungen im Bereich Frontend, Backend, Full-Stack oder möglicherweise im maschinellen Lernen und in der natürlichen Sprachverarbeitung (NLP). 
            Ich freue mich auf jede neue Gelegenheit, bin begeistert vom Lernen und zuversichtlich in meiner Fähigkeit, Problemlösungen durch Code und Forschung zu finden.
          </p>
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
            <div class="aside-bird-caption">
            <p class="bird-text" style="color: #c7c7c7;"><a class="home-text-links"
                href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a>
              Foto in Tübingen, Deutschland gemacht. 
              <br>
              <br>
              Es ist eine Vogelart, die in Europa heimisch ist.
            Sie sind bekannt für ihr charakteristisches schwarz-weißes Gefieder und ihre fröhlichen Lieder. 
            Sie lieben es auch, Erdnüsse zu essen!
            </p>
          </div>
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
  padding-left: 1.2em; 
}


h3 {
  margin-top: 4.5em;
  color: #c7c7c7;
}


/* start arrow area */
.language-container{
  display: flex;
  align-items: center;
  position: absolute;
  right: 30%;
  
}

.language-arrow-text{
  font-size: 0.9em; margin-top: -2.5em; margin-right: 4em; z-index: 5; transform: rotate(35deg);
  border-bottom: none;   
  color: rgb(18,18,18);
}

.tooltip:before{
  top: 1em;
 position: absolute;
}
.tooltip .tooltiptext{
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

.bullets-container{ 
  border-radius: 1.25em;
  background: rgb(239, 236, 229);
  padding: 0.5em;
  margin: 0.5em;
}
.bullets{  
  margin-left: 1.8rem;
  padding-right: 0.425em;
  font-size: 1.2rem;  
  
}





.more-information-about-me:nth-child(even) {
  margin-top: 2em; 
  background: rgb(239, 234, 229);
  border-radius: 1.25em;  
  margin: 0.5em;
  margin-top: 2em;
  padding-top: 0.5em;
}

.more-information-about-me:nth-child(odd) {
  margin-top: 2em; 
  
  border-radius: 1.25em;
  background: rgb(222, 241, 255);
  margin: 0.5em;
  margin-top: 2em;
  padding-top: 0.5em;
}

li::marker {
  color: rgb(255, 89, 89);
}

li {
  color: #2c2c2c;   
  padding-bottom: 0.5rem;  
}
li:last-child {
  padding-bottom: 0;
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

p {
  color: rgb(15, 18, 25);
  line-height: 1.7em;
  font-size: 1.1em;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  font-weight: 400;  
  padding: 0.5em 1.65em 0.5em 1.65em;
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
.aside-bird-caption{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  border-radius: 0em;
}
.bird-text{  
  line-height: 1.6;
  text-align: left;
  padding-left: 0.5em;
  font-size: 1em;
  border-left: 1px solid rgb(218, 220, 224);
  color: #91d7ff;
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
 
 .aside-bird-caption{
  padding: 1em;
  margin-left: 2.25em;
  border-radius: 0em; 
}

  h1 {
    padding-left: 0.7em;
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

@media only screen and (max-width: 48rem){

  h1 {  
    margin-top: 2em;
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
    .language-container{
      display: flex;
      align-items: center;
      position: absolute;
      right: 0%;
      
    }
}
</style>