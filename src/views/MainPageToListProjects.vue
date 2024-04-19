<template>
  <div id="body">
    <topArea />
    <div class="custom-background-home-page center-with-flex">
      <section class="looped-project-section">
        <div class='under-title-caption'>
        </div>
        <ProjectGallery />
      </section>
    </div>
    <imagesOneRow :backgroundColor="backgroundImage" />
  </div>
</template>

<script>
import Prism from "prismjs";
import "@/assets/globalCSS.css";
import imagesOneRow from "@/components/ImagesOneRow.vue";
import ProjectGallery from "@/components/MainProjectPage/ProjectGallery.vue";
import topArea from "@/components/MainProjectPage/TheTopArea.vue";

export default {
  name: "MainPageToListProjects",
  components: {
    imagesOneRow, ProjectGallery, topArea
  },

  data() {
    return {
      itemsLength: 0,
      isHovered: false,
      hoveredImage: "",

      messages: [
        "I'm having a bad day :(",
        "Why is that?",
        "This code won't work!",
        "Fixed.",
        ":)"
      ],

    };
  },
  computed: {
    projectLinks() {
      return this.links; // Assuming `links` is the array of project links
    },
  },
  methods: {

    capitalizeFirstLetter(string) {
      let capitalizedTitle = string.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return capitalizedTitle
    },

    hideImage() {
      this.isHovered = false;
      this.hoveredImage = "";
    },
  },

  mounted() {
    Prism.highlightAll();
  },
};
</script>


<style scoped>
/* CSS for the home page */
#body {
  background-size: 100% 100%;
  background-attachment: fixed;
}

.title {
  text-align: left;
  position: relative;
  line-height: 1;
  height: 2em;
  padding: 1em 0.25em 3em 2rem;
  color: rgb(255, 255, 255);
  font-size: 2em;
  z-index: 1;
  background: linear-gradient(to right, orange, red, pink);
}

.capText {
  text-transform: capitalize;
}

.top-string-slice-of-title {
  font-size: 2em;
}

/* end arrow css */




.center-top-main-area-box {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
}

.custom-background-home-page {

  background-color: rgb(55, 55, 55);
  background-blend-mode: multiply;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;

}


/*
.center-top-main-area-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(100deg, rgba(0, 0, 0, .1) 10%,
      transparent 10%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);*/
/*
      background-image: linear-gradient(5deg, rgba(0, 0, 0, .1) 20%, transparent 20%,
      transparent 80%, rgba(0, 0, 0, .1) 80%), linear-gradient(70deg, rgba(0, 0, 0, .1) 10%,
      transparent 5%, transparent 90%, rgba(0, 0, 0, .1) 90%);
      filter: blur(3px);
}
*/
.center-bottom-main-area-box {
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
}

.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background: rgb(18, 18, 18);
}

.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(0, 171, 137);
  text-decoration: none;
}

.home-text-links:is(:hover, :focus) {
  background: rgb(0, 255, 204);
  color: rgb(40, 40, 40);
  border-bottom: none;
}

.home-text-links:active {
  color: rgb(255, 89, 89);
}

.list-links-text-decoration {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.main-text-container {
  display: flex;
  justify-content: left;
  /*max-width: 40rem; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0rem;
  color: #ffffff;
  font-size: 1.6em;
  text-align: left;
}

.main-text-ul {
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-top: 2.5rem;
}


.looped-project-section {
  z-index: 4;
  max-width: 71rem;
  margin: 1rem 0 1rem 0;
}

.website-text-boxes {
  z-index: 4;
  width: 71rem;
  background: rgb(40, 40, 40);
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media only screen and (max-width: 100rem) {}

@media only screen and (max-width: 60rem) {
  .main-text-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 50rem) {


  .looped-project-section {
    z-index: 4;
  }
}
</style>
