

<template>
  <div class="container background-color-about-page">
    <!-- Main area -->
    <div class="custom-background-about-page">
      <h1 style="color: #000;" class="adjust-title-font-size">Welcome to ConradsWebsite.com</h1>
      
      <br>
      <p class="paragraph-text break-text">
        This iteration of the website was started in March, 2023 and is totally self-made by Conrad using
        <a class="text-links" href="https://github.com/vuejs/core"> Vue 3</a>
        (Vue.js). It is hosted on
        <a class="text-links" href="https://github.com/conrizzo/conradswebsite">
          Conrad's GitHub</a> with
        <a class="text-links" href="https://pages.github.com/">
          GitHub pages</a>.
      </p>
      <br>
      <ul style="margin-left: 2em;">
        <li class="paragraph-text break-text">I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max
          Planck in Tübingen, Germany.</li>
        <br>
        <li class="paragraph-text break-text">I earned a B.A in Computational Linguistics from the University of Tübingen, Germany,
          and a B.S in Biology from the University of North Carolina at Wilmington.</li>
      </ul>
      <br>
      <p class="paragraph-text break-text">
        This websites focus is to show some examples of work I've done using code, plus it's fun to have a website made in
        a framework (Vue.js) and be able to
        experiment here. Once one has a basic understanding of HTML, CSS, JavaScript the next step in web devlopment are frameworks. 
        Framework description: <a class="text-links"
          href="https://en.wikipedia.org/wiki/Web_framework">https://en.wikipedia.org/wiki/Web_framework</a><br><br>
      </p>
      <figure class="center-figure">
        <img class="img-container" :src="imagePath" alt="Coding Languages used" />
        <figcaption>Here is an approximation of the languages this website uses. It's mostly Vue.js.

        </figcaption>
      </figure>
      <br>
      <p class="paragraph-text break-text">GitHub Pages requires special methods to work properly.
        For example, in order to deploy this website, the command <i>"deploy": "copy dist\index.html dist\404.html &
          gh-pages -d dist"</i> is used, and this command is added to the package.json file.
        To publish modifications to the website, one can run the command "npm run deploy". This will first build the
        vue.js application by running "npm run build", and then put the production build of the website into the 'dist'
        folder.</p>
        <br>
        <p class="paragraph-text break-text">A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html.
        This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this
        workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead
        show a 404 error on GitHub Pages.
        However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses
        now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when
        using gh-pages.</p>

      

    </div>
    <!-- Aside area -->
    <AsideContent>
      <template v-slot:aside-content>
        <p class="aside-text" style="margin-top: 1em">
          <!-- make a hyperlink template to google.com -->

          This aside is a <a class="text-links" href="https://vuejs.org/guide/components/slots.html"><i>slot</i></a>. What
          are slots in vue.js?
          <br>
          <br>
          According to chatGPT: "Slots in Vue.js provide a way to pass content from a parent component to a child
          component.
          The main purpose of slots is to make it easier to create reusable components that can be customized with
          different content.
          <br>
          <br>
          Here are some of the benefits of using slots in Vue.js:
          <br>
          <br>
          1. Reusability: Slots allow you to create reusable components that can be used in different parts of your
          application with different content.
          This makes it easier to create modular, maintainable code.
          <br>
          <br>
          2. Customizability: Slots allow you to customize the content of a component without having to modify the
          component itself. This makes it easier to create components that can be used in a variety of contexts.
          <br>
          <br>
          3. Flexibility: Slots provide a flexible way to structure your components.
          You can use slots to define different sections of a component and then fill those sections with content as
          needed.
          <br>
          <br>
          4. Separation of concerns: Slots allow you to separate the concerns of a component.
          The component defines the structure and behavior, while the content is provided by the parent component.
          <br>
          <br>
          In summary, slots are an essential feature of Vue.js that make it easier to create reusable, customizable, and
          flexible components.
          By using slots, you can create more modular and maintainable code, which can save you time and effort in the
          long run."
        </p>
      </template>
    </AsideContent>
  </div>
  
  <div class="push-footer-low-res">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
  <FirstFooter></FirstFooter>
</template>

<script>
import AsideContent from "@/components/FirstAside.vue";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
  },
  data() {
    return {

      imagePath: require("@/images/website-code.jpg"), // Add the image path to the data object
    }
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
}

.center-figure {
  margin: auto;
}

.img-container {
  text-align: center;
  margin: 1em auto;
  max-width: auto;
  
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
}

@media (max-width: 600px) {
  .adjust-title-font-size {
    font-size: 2em;
  }
}

@media only screen and (max-width: 1200px) {
  figure {
    margin-left: 1.2em;
    margin-right: 1.2em;
  }
  .push-footer-low-res {
    height: 500px;
  }
  .img-container {
    margin: 1em 0;
  }
  figcaption {
    margin-top: 0.5em;
  }
}

</style>