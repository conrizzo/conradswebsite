<template>
  <div class="fill-page-to-footer">
    <!-- negative margin here to fill in space in nav on home page -->
    <h1 class="h1-title">Conrad's Website</h1>
    <!-- Main area -->

    <div class="container custom-background-home-page">
      <div style="margin-bottom: 9em;">

        <h2
          style="font-weight: 10; padding: 0.25em; border-radius: 0.25em; margin-top: 1em; color: #fff; font-size: 3em; display: inline-block;">
          Guten Tag / Howdy!
        </h2>

        <div class="main-text-container">
          <ul style="text-align: left; color: white;">
            <li style="margin-bottom: 1em;">
              <h3 style="color: #fff;">
                This is an ongoing personal website project made by <a class="text-links"
                  href="https://github.com/conrizzo">Conrad</a>.
              </h3>
            </li>
            <li style="">
              <h3 style="color: #fff;">
                For more specific info about this website please read the <router-link class="text-links"
                  to="/about">About page</router-link>!
              </h3>
            </li>
          </ul>
        </div>

        <br>
        <p style="color: #fff; text-align: center;">

          <a class="text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕ and <a class="text-links"
            href="https://pages.github.com/">
            GitHub pages</a> = Free Fun website hosting!
          <br>
        </p>
        <div class="links-div-container">
          <!-- Projects ({{ this.itemsLength }})</h3> -->

          <ProjectLinks :links="links">
            <template v-slot="{ links }">

              <h3
                style="font-size: 2em; padding-bottom: 0.5em; padding-top: 3em; padding-left: 1.6em; color:#ff5959; text-align: left;">
                Projects: {{ links.length }}
              </h3>

              <div class="route-styling">
                <router-link class="on-hover-projects" v-for="(item, index) in links" :key="index" :to="item.to"
                  :class="{ active: $route.path === item.to }">
                  {{ item.text }}<br>
                </router-link>
              </div>

            </template>
          </ProjectLinks>
        </div>



        <!--
      <div style="padding-top: 3em; background-color: #fff;">
        <h2 style="color: black;"> Featuring the Cowculator </h2>
        <p> Go to the <router-link class="text-links-no-underline" to="/projects/cowculator">cowculator page</router-link>
          for the full experience.</p>
        <UseCalc></UseCalc>
      </div>
    -->
      </div>

      <!-- Aside area begins -->
      <AsideContent class="aside-low-resolution">
        <template v-slot:aside-content>
          <p class="aside-text">
            Howdy, partner! If you're hankerin' for some good eatin', I recommend makin' fresh salsa.
            <br><br>All you need is:
          <ul>
            <li style="margin-left: 3em;">2 medium or bigger tomatoes</li>
            <li style="margin-left: 3em;">Fresh lime juice (1 lime is good)</li>
            <li style="margin-left: 3em;">1 onion</li>
            <li style="margin-left: 3em;">Salt to taste</li>
            <li style="margin-left: 3em;">Some black pepper</li>
            <li style="margin-left: 3em;">Jalapenos! Add as much as you want, no limits ya hear.</li>
            <li style="margin-left: 3em;">Fresh Cilantro (Coriander)</li>
          </ul>
          <br>
          Chop all them ingredients up and mix it together! It's delicious! Picture of salsa comin' soon!
          </p>
        </template>
      </AsideContent>

    </div>

  </div>
  <FirstFooter />
</template>

<script>
import Prism from "prismjs";

import AsideContent from "@/components/FirstAside.vue";

import FirstFooter from "@/components/FirstFooter.vue";

import ProjectLinks from '@/components/ProjectLinks.vue'

//import UseCalc from "@/components/UseCalc.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
    ProjectLinks,

    //UseCalc, 

  },
  props: {
    links: Array,

  },
  data() {
    return {
      itemsLength: 0,
    };
  },
  mounted() {
    Prism.highlightAll();
  },



};
</script>

<style scoped>
.centered {
  display: flex;
  margin-left: 6em;
  text-align: left;
}

.h1-title {
  color: #ffffff;
  background: linear-gradient(90deg,
      rgb(0, 255, 119) 20%,
      rgb(0, 225, 255) 100%);
  font-size: 3em;
  padding-bottom: 0.5em;
  padding-top: 0.5em;

  /* margin-top: -0.33em;  */
  margin-left: 2em;
  margin-right: 2em;
}

.custom-background-home-page {
  background-color: rgb(50, 50, 50);
}

.links-div-container {
  padding-left: 10em;
}

.on-hover-projects {
  text-decoration: none;
  padding-right: 0.25em;
  padding-left: 0.25em;
}

.on-hover-projects:visited {
  text-decoration: none;
  color: #fff;
}

.on-hover-projects:hover {
  background-color: #fff;
  color: #000;

}

.on-hover-projects:nth-child(odd) {
  border-right: 1px solid #ff5959;
  max-width: 100%;
}

.on-hover-projects:nth-child(even) {
  border-left: 1px solid #ff5959;
  max-width: 100%;
}

.route-styling {

  color: rgb(255, 255, 255);
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 2em;
  padding: 1em;
  border-radius: 5px;
  max-width: 10.8em;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.main-text-container {
  padding-top: 0.5em;
  display: flex;
  justify-content: center;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1500px) {
  .h1-title {
    margin-left: 0em;
    margin-right: 0em;
  }

  .main-text-container {
    padding-right: 1em;
    padding-left: 2em;

  }
}



@media only screen and (max-width: 800px) {
  .links-div-container {
    padding-left: 1em;
    padding-right: 1em;
    display: inline-block;
  }
}</style>