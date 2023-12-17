

<template>
  <body v-show="languageButtonText === 'Deutsch wechseln'" id="body">
    <main class="main-content">
      <!-- Main area -->
      <div class="text-container">

         <div class="title-container">
            <h1>About</h1>
            <button @click="language();" class="clean-button language-button" role="button">{{ languageButtonText }}</button>
        </div>

        <div class="bullets">                   
          <ul>
            <li>This website was started March, 2023 and is
              totally self-made by me (Conrad) using primarily
              <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                  3</b></a>
              (Vue.js) for its reactivity and interactivity.
            </li>

            <li>The primary aim is to create and exhibit various projects. It is hosted on
              <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite">
                my GitHub</a> with
              <a class="home-text-links" href="https://pages.github.com/">
                GitHub Pages</a>.

            </li>

            <li>I started learning about Vue.js when I worked on the Bioinformatics
              Toolkit at <i>Max-Planck-Institut für Biologie</i> in Tübingen, Germany.
            </li>            

            <li>Programming languages/frameworks I used to make this website include: Vue.js, JavaScript, TypeScript,
              HTML, CSS, Rust into Web Assembly, and more!
            </li>

            <li>I also started a <b><a class="home-text-links"
                  href='https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/'>blog site</a></b> that
              uses the <a class="home-text-links" href='https://astro.build/'>Astro</a> framework.
            </li>

            <li>This website has mostly been about improving my knowledge of web programming. 
              The point has also been to have fun building this.
            </li>

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
          </ul>
         
        </div>
        <h2>Motivation:</h2>       

        <p>   

          This website is constantly being updated and improved. I am always learning new things. All projects here are not meant to be text-book
          examples of how to do things, but rather examples of how I learned to make things. The fun thing about this website is it is self-made 
          so I understand it well.

        </p>
        
        
        <h2>Progression:</h2>

             
        <figure class="figure-location">
          <img class="img-container" :src="imagePath" alt="Coding Languages used" />
          <figcaption class="figure-caption">Here is an approximation of the languages this website uses. It's mostly
            Vue.js. As of June
            2023, currently starting to add in TypeScript support.
            Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.
          </figcaption>
        </figure>
        <p>
          This website was originally written in Vue 3 and straight
          JavaScript. Later on I converted it to have TypeScript support, and new projects such as the
          <router-link class="home-text-links" to="/projects/cowgame">Cow Game</router-link> heavily use
          TypeScript. The <router-link class="home-text-links" to="/projects/cards">Card Game</router-link>
          also uses TypeScript.
          <a class="home-text-links" href="https://vuejs.org/guide/typescript/overview.html">Vue.js itself is
            written in TypeScript</a> so one could also say using Vue.js is using TypeScript to an extent. In July,
          2023, started
          working on integrating some minor backend services for experimenting. In July, 2023 I also started learning how 
          to use Rust with Web Assembly, so some of this website
          now uses Rust compiled into Web Assembly. Recently I've been reviewing code I wrote and upgrading it to be simpler
          and more professional. There is a lot one can learn by reviewing their own code and seeing what could be
          improved
          after seeing how other developers write code.
        </p>
        
        
     
        

        <h2>About the Vue Routing with GitHub Pages:</h2>

        

     
          <p>December 6th 2023 - Next item for deployment will be to convert this process below to use GitHub actions and a .yaml file to automate it. Lately I've 
            been making many small commits so I may not need to deploy the website everytime I make small adjustments with an automated process but the 
            auto deployment using GitHub actions is a nice tool.            
          </p>
          <p>
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

          <p>
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
            <h1 class="h1-title">Über</h1>
            <button @click="language();" class="clean-button language-button" role="button">{{ languageButtonText }}</button>
        </div>
        <div class="bullets">      
          <ul>
            <li>Diese Website wurde im März 2023 gestartet und komplett von mir (Conrad) selbst erstellt, hauptsächlich mit
              <a class="home-text-links" style="color: #42b883;" href="https://vuejs.org/guide/introduction.html"><b>Vue
                  3</b></a>
              (Vue.js) für seine Reaktivität und Interaktivität.
            </li>

            <li>Das Hauptziel ist verschiedene Projekte zu erstellen und auszustellen. Sie wird auf
              <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite">
                meinem GitHub</a> mit
              <a class="home-text-links" href="https://pages.github.com/">
                GitHub Pages</a> gehostet.
            </li>

            <li> Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am 
              <i>Max-Planck-Institut für Biologie</i> in Tübingen, Deutschland, gearbeitet habe.
            </li>           

            <li>
              Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe, 
              sind Vue.js, JavaScript, TypeScript, HTML, CSS, Rust für Web Assembly und mehr!
            </li>

            <li>Außerdem habe ich begonnen, eine 
                 <b><a class="home-text-links"
                  href='https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/'>Blogseite</a></b> zu erstellen, die das
              <a class="home-text-links" href='https://astro.build/'>Astro</a> framework verwendet.
            </li>

            <li>
              Diese Website handelt größtenteils davon, mein Wissen im Bereich Webprogrammierung zu verbessern. 
              Der Zweck besteht auch darin, Spaß beim Bauen zu haben.
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
              Started learning <a class="home-text-links" href=https://doc.rust-lang.org/book/title-page.html>Rust</a> as
              well.
              Have practiced more German too, so it is <u>a lot</u> of language learning!
            </li> -->
          </ul>
        </div>


        <h2>Motivation:</h2>       



                <p>   

                  This website is constantly being updated and improved. I am always learning new things. All projects here are not meant to be text-book
                  examples of how to do things, but rather examples of how I learned to make things. The fun thing about this website is it is self-made so I
                  understand it well.

                </p>


<h2>Progression:</h2>

   
       
<figure class="figure-location">
  <img class="img-container" :src="imagePath" alt="Coding Languages used" />
  <figcaption class="figure-caption">Here is an approximation of the languages this website uses. It's mostly
    Vue.js. As of June
    2023, currently starting to add in TypeScript support.
    Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.
  </figcaption>
</figure>
<p>
  This website was originally written in Vue 3 and straight
  JavaScript. Later on I converted it to have TypeScript support, and new projects such as the
  <router-link class="home-text-links" to="/projects/cowgame">Cow Game</router-link> heavily use
  TypeScript. The <router-link class="home-text-links" to="/projects/cards">Card Game</router-link>
  also uses TypeScript.
  <a class="home-text-links" href="https://vuejs.org/guide/typescript/overview.html">Vue.js itself is
    written in TypeScript</a> so one could also say using Vue.js is using TypeScript to an extent. In July,
  2023, started
  working on integrating some minor backend services for experimenting. In July, 2023 I also started learning how 
  to use Rust with Web Assembly, so some of this website
  now uses Rust compiled into Web Assembly. Recently I've been reviewing code I wrote and upgrading it to be simpler
  and more professional. There is a lot one can learn by reviewing their own code and seeing what could be
  improved
  after seeing how other developers write code.
</p>





<h2>About the Vue Routing with GitHub Pages:</h2>



<div>
  <p>December 6th 2023 - Next item for deployment will be to convert this process below to use GitHub actions and a .yaml file to automate it. Lately I've 
    been making many small commits so I may not need to deploy the website everytime I make small adjustments with an automated process but the 
    auto deployment using GitHub actions is a nice tool.            
  </p>
  <p>
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

  <p>
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
      } else {
        this.languageButtonText = "Deutsch wechseln";
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

h1 {
  margin-top: 1em;
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

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.language-button{ 
  margin-top: 4em;  
 
}
.language-button:hover{
  box-shadow: rgb(255, 89, 89) 0 0 0 2px, transparent 0 0 0 0;  
}

.bullets{
  padding-right: 1em;
}

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
  font-size: 1em;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  font-weight: 400;  
  padding: 0.5em 2em 0.5em 2em;
}

li {
  color: #2c2c2c;
  margin-bottom: 0.75rem;
  margin-left: 2.1rem;
  font-size: 1.1em;  
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
  padding: 1em 10em 2em 10em;
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
    max-width: 20rem;
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