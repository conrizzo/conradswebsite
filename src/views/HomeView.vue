


<template>
  <div class="container custom-background-home-page" >
    <!-- Main area -->
    <div>
      <h1>Welcome to Conrad's Website</h1>
      <p class="homeview">
        Check out the
        <router-link style="text-decoration: none" to="/projects/cowculator"
          >Cowculator</router-link
        >, be sure to press the Moo button.
      </p>

      <pre v-bind:class="'language-python'" class="hhh">
<code>DRINK_COFFEE = True
website_finished = False
while website_finished is False:
 print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")</code>
      </pre>
      <p class="homeview">
        Python doesn't officially syntactically have constants so it's capitalized to show 
        it should not be modified "DRINK_COFFEE=True", but the code above emphasizes that work
        continues, and the coffee drinking will always continue.
      </p>
    </div>

    <!-- Aside area -->
    <AsideContent class="aside"> </AsideContent>
  </div>
</template>



<script>
import Prism from "prismjs";
import AsideContent from "@/components/FirstAside.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>



<style scoped>
p.homeview {
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 30px;
  margin-right: 20px;
  color: #000000;
  background: #fff;
}

h1 {
  text-align: center;
  padding-top: 0.25em;
  
}

.hhh {

  page-break-inside: avoid;
  font-family: monospace;
  font-size: 14px;
  margin-left: 30px;
  margin-right: 20px;
  overflow: auto;
  display: block;
  word-wrap: break-word;
 
 
  
}
.custom-background-home-page {
  background-color: rgb(158, 158, 158);;
}

</style>