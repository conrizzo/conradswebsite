

<template>
  <div class="fill-page-to-footer">
   <div class="container background-color-about-page">
    <!-- Main area -->
     <div>
      <h1 class="h1-title">About this website!</h1>
        <div class="text-container">
          <div style="padding-top: 3em;">
            <p class="paragraph-text break-text">
                This iteration of the website was started in March, 2023 and is totally self-made by Conrad using
                <a class="text-links" style="color: #42b883;" href="https://vuejs.org/"><b>Vue 3</b></a>
                (Vue.js). It is hosted on
                <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
                  <b>Conrad's GitHub</b></a> with
                <a class="text-links" href="https://pages.github.com/">
                  <b>GitHub pages</b></a>.<br>
                  Much of this website was originally written in Vue 3 and straight JavaScript, however new projects such as the 
                  <router-link class="text-links" to="/projects/cowgame"><b>Cow Game</b></router-link> heavily use 
                  <a class="text-links" href=https://www.typescriptlang.org/><b>TypeScript</b></a>. This website is designed 
                  to be minimal and offer simple navigation to some projects I've made. These projects have been made for fun and to learn.
                  The focus has really been to use progressively more complex aspects of Vue 3, JavaScript, TypeScript, CSS, HTML, and really just learn
                  everything that is useful to know and make some more sophisticated projects. As of July, 2023, have been working on integrating backend development.
                  This website has been a static website, but will change into a dynamic one with a backend.
            </p>
        
        
            <ul style="margin-left: 2em;">
              <li class="paragraph-text break-text">I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max
                Planck in Tübingen, Germany.</li>
          
              <li class="paragraph-text break-text">I hold a degree in Computational Linguistics from the University of Tübingen in Germany,
                and previously completed a Bachelor of Science in Biology from the University of North Carolina at Wilmington.</li>
            </ul>
          
            <p class="paragraph-text break-text">
              This websites focus is to show some examples of work I've done using code, plus it's fun to have a website made in
              a framework (Vue.js) and be able to
              experiment here. Once one has a basic understanding of HTML, CSS, and JavaScript, the next step in front-end web development is frameworks. 
              Framework description: <a class="text-links"
                href="https://en.wikipedia.org/wiki/Web_framework">https://en.wikipedia.org/wiki/Web_framework</a>
            </p>
            <figure class="center-figure">
              <img class="img-container" :src="imagePath" alt="Coding Languages used" />
              <figcaption>Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support.
                Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript.

              </figcaption>
            </figure>
            <br>
            <div>
            <p class="paragraph-text break-text">
              Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly.
              For example, in order to deploy this website, the command <i>"deploy": "copy dist\index.html dist\404.html &
              gh-pages -d dist"</i> is used, and this command is added to the package.json file.
              To publish modifications to the website, one can run the command "npm run deploy". This will first build the
              vue.js application by running "npm run build", and then put the production build of the website into the 'dist'
              folder.</p>
          
              <p class="paragraph-text break-text">
              A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html.
              This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this
              workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead
              show a 404 error on GitHub Pages.
              However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses
              now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when
              using gh-pages.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Aside area -->
      <AsideContent>
        <template v-slot:aside-content>
          <p class="aside-text" style="margin-top: 1em">
            This aside is a <a class="text-links" href="https://vuejs.org/guide/components/slots.html"><i>slot</i></a>.</p>
            <img style="border-radius: 1em;" :src="birdPicture" alt="Kohlenmeise picture">
            <p class="aside-text">This is a <a class="text-links" href="https://en.wikipedia.org/wiki/Great_tit">Kohlmeise</a> (name in German, English name is Great Tit), a species of bird that is native to Europe. 
              Kohlenmeises are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!</p>
         
        
      </template>
    </AsideContent>
  </div>
  
</div>
  <FirstFooter></FirstFooter>
</template>

<script>
import AsideContent from "@/components/FirstAside.vue";
import FirstFooter from "@/components/FirstFooter.vue";
import Prism from "prismjs";
export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
  },
  data() {
    return {
      birdPicture: require('@/images/Kohlenmeise.jpg'),
      imagePath: require("@/images/website-code.jpg"), // Add the image path to the data object
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
    Prism.highlightAll();
  },
  
};
</script>


<style scoped>
h1 {
  text-align: center;
  margin-top: 1em;
}

figure {
  display: flex;
  flex-flow: column;
  padding: 0.5em;
  padding-bottom: 0em;
  max-width: auto;
  margin: auto;
  font-size: 0.9em;
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 1.2;
  
}

figcaption {
  padding: 0.5em;
  text-align: left;
}

.center-figure {
  margin: auto;
}

.img-container {
  text-align: center;
  margin: 1em auto;
  max-width: auto;   
  border-radius: 0.5em;
}

.h1-title {
  color: #ffffff;
  background: linear-gradient(90deg,
      rgb(0, 204, 95) 29%,
      rgb(0, 183, 207) 100%);
  font-size: 3em;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  margin-top: 0.5em;
  /* margin-top: -0.33em;  */
  margin-left: 2em;
  margin-right: 2em;
  border-radius: 0.3em;
}



@media (min-width: 600px) {
  figure {
    width: 80%;
    margin: auto;
  }
}

.background-color-about-page{
  background-color: #ffffff;
}

.adjust-title-font-size {
  font-size: 3em;
  margin-left: 0.5em;
  margin-right: 0.5em;  
}

.text-container{
  padding-left: 8em;
  padding-right: 8em
}



@media (max-width: 600px) {
  .adjust-title-font-size {
    font-size: 2em;
  }
 
}

@media only screen and (max-width: 1200px) {
  .text-container{
  padding-left: 1em;
  padding-right: 1em
  }
  figure {
    margin-left: 1.2em;
    margin-right: 1.2em;
  }
  
  .img-container {
    margin: 1em 0;
  }
  figcaption {
    margin-top: 0.5em;
  }

  .h1-title {
    margin-left: 0em;
    margin-right: 0em;
    font-size: 1.9em;
  }

 
}


</style>