<template>
  <div class="title-section">
    <h1 style="font-size: 3em; padding-bottom: 0.4em">Conrad's Website</h1>
  </div>  
      <!-- Main area -->
  <div class="container custom-background-home-page">     
    
    <div style="margin-bottom: 9em;">      

      <h2 style="margin-top: 1em; color: #fff;">

          <span style="font-weight: 400; font-size: 2em;">This is a website.</span> <br /><span
            style="font-size: 1em; font-weight: 600"
          >
            Made by Conrad.
          </span>

          <span
            style="font-weight: 400"
          >
            This website has a Cowculator + some projects / test examples.
          </span>

        </h2>
        <br>
        <p style="color: #fff; text-align: center;" class="aside-text">
          Website currently powered by
          <a class="text-links" href="https://pages.github.com/">
            GitHub pages</a
          >
          and
          <a class="text-links" href="https://en.wikipedia.org/wiki/Coffee"
            >Coffee.</a
          > Coded in <a class="text-links" href="https://vuejs.org/">Vue 3</a>
          <br>              
        </p>    

      <div class="route-styling">
        <div v-for="(item, key, index) in items" :key="key">
          <h1 style="color: rgb(0, 0, 0)">
            <!-- This is some cool code. Here's a step-by-step explanation of the selected code:               
              The `to` attribute is being set dynamically using a ternary operator and some string manipulation. 
              If the `key` prop is equal to "Projects" (case-insensitive), the `to` attribute is set to "/projects". 
              Otherwise, the `to` attribute is set to "/projects/" followed by the `key` prop with all spaces removed.
              -->
            <router-link
              class="home-router-link"
              :to="
                key.toLowerCase() === 'projects'
                  ? '/projects'
                  : '/projects/' + key.toLowerCase().replace(' ', '')
              "
              active-class="active-link"
            >
              {{ index + 1 }}. {{ item }}
            </router-link>
          </h1>
        </div>
      </div>      
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
  <div class="push-footer">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
  <FirstFooter />
</template>

<script>
import Prism from "prismjs";
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
      items: {
        cowculator: "Cowculator",
        weather: "Weather",
        Datasets: "Graphing Data",
        projects: "Project Descriptions",
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

h1 {
  padding-top: 0.25em;
  font-size: 2.5em;
  color: #ffffff;
}


.custom-background-home-page {
  background-color: rgb(50, 50, 50);
}

.home-router-link {
  border-radius: 5px;
  padding: 0.1em;
  background: linear-gradient(
    90deg,
    rgba(128, 255, 187, 0.8) 29%,
    rgba(143, 242, 255, 0.8) 100%
  );
  color: black;
  text-decoration: none;
  border-left: 20px solid rgb(255, 255, 255);
  border-right: 25px dashed rgb(255, 255, 255);
}

.home-router-link:hover,
.active-link {
  text-decoration: underline;

  color: #ff5959;
  text-decoration: none;
}

.push-footer {
  padding-bottom: 700px;
}

.route-styling {
  padding-top: 2em;
  margin-left: 7em;
  text-align: left;
  font-size: 1em;
}

.remove{
    display: none;
  }
/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1200px) {
  
  .route-styling {
    margin-left: 2em;
  }

  
  .remove{
    display: grid;
  }
}




</style>