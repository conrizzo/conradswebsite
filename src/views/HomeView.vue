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

      <h3 style="color: #fff; font-size: 1.2em; font-weight: 600">
        This is a personal website by Conrad that is an ongoing project.
      </h3>
      <br>
      <p style="color: #fff; text-align: center; line-height: 1.6;">
        
        <a style="font-weight: 600;" class="text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>☕🌳 + <a
          style="font-weight: 600;" class="text-links" href="https://pages.github.com/">
          GitHub pages</a> = Free Fun website hosting
        <br>        
      </p>

      <h3 style="color:#fff; text-align: left; padding-left: 3em; padding-top: 2em;">A list of various projects is below:</h3>

      <div style="padding-bottom: 2em;" class="route-styling">
        
        <div v-for="(item, key, index) in items" :key="key">
          <h2>
            <!-- This is some cool code. Here's a step-by-step explanation of the selected code:               
            The `to` attribute is being set dynamically using a ternary operator and some string manipulation. 
            If the `key` prop is equal to "Projects" (case-insensitive), the `to` attribute is set to "/projects". 
            Otherwise, the `to` attribute is set to "/projects/" followed by the `key` prop with all spaces removed.
            -->
            <router-link class="home-router-link" :to="key.toLowerCase() === 'projects'
                ? '/projects'
                : '/projects/' + key.toLowerCase().replace(' ', '')
              " active-class="active-link">
              {{ index + 1 }}. {{ item }}
            </router-link>
          </h2>
        </div>
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

//import UseCalc from "@/components/UseCalc.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
    //UseCalc,

  },
  data() {
    return {
      items: {
        cowculator: "Cowculator",
        weather: "Custom Weather",
        Datasets: "Interactive Data Table",
        projects: "Project Descriptions",
        nlp: "Interesting NLP",
        cowgame: "Feed the cows (game)",
      },
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
      rgba(0, 255, 119, 0.9) 29%,
      rgba(0, 224, 255, 0.9) 100%);
  font-size: 3em;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  /* margin-top: -0.33em;  */
  margin-left: 2em;
  margin-right: 2em;
}

h2 {
  font-size: 2.5em;
  padding-bottom: 0.5em;
}

.custom-background-home-page {
  background-color: rgb(50, 50, 50);
}

.home-router-link {
  border-radius: 0px 5px 5px 0px;
  padding: 0.1em;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.home-router-link:hover,
.active-link {
  text-decoration: underline;

  color: #ff5959;
  text-decoration: none;
}

.route-styling {
  padding-top: 2em;
  margin-left: 7em;
  text-align: left;
  font-size: 0.75em;
}

.remove {
  display: none;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1500px) {
  .route-styling {
    margin-left: 2em;
  }

  .remove {
    display: grid;
  }

  .h1-title {
    margin-left: 0em;
    margin-right: 0em;
  }
}</style>