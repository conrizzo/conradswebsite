<template>
  <div class="search-projects-container">
    <div style="width: 71rem; padding-top: 1rem;">
      <SearchProjects />
    </div>
  </div>
  <div class="custom-background-home-page center-with-flex">

    <section class="looped-project-section">



      <div class='under-title-caption'>
      </div>
      <ProjectGallery />
    </section>
  </div>
  <!-- :backgroundImageUrl=""   fix this - add in the image with prop -->
  <TopArea />
  <ImagesOneRow :theBackground="'#000'" />

</template>

<script>

import "@/assets/globalCSS.css";
import ImagesOneRow from "@/components/ImagesOneRow.vue";
import SearchProjects from "@/components/MainProjectPage/SearchProjects.vue";
import ProjectGallery from "@/components/MainProjectPage/ProjectGallery.vue";
import TopArea from "@/components/MainProjectPage/TheTopArea.vue";


export default {
  name: "MainPageToListProjects",
  components: {
    ImagesOneRow, ProjectGallery, TopArea, SearchProjects
  },
  props: {
    theBackground: {
      type: String,
      required: false,
    }
  },

  data() {
    return {
      itemsLength: 0,

      linkToImage: require('@/images/blue_sky2.jpg'), // pass image from parent to prop in ImagesOneRow
      messages: [
        "I'm having a bad day :(",
        "Why is that?",
        "This code won't work!",
        "Fixed.",
        ":)"
      ],

    };
  },

  methods: {


  },
};
</script>


<style scoped>
.custom-background-home-page {
  /* background: linear-gradient(to bottom right, rgb(0, 145, 207), rgb(118, 111, 209) 60%); */
  background: rgb(50, 50, 50);
  background-size: 100% 100%;
  background-attachment: fixed;
  position: relative;
}

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

.search-projects-container {
  display: flex;
  justify-content: center;
  background: rgb(50, 50, 50);
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
