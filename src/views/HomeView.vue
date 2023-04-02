


<template>
  <div class="title-section"><h1>Welcome to Conrad's Website</h1></div>
  <div class="container custom-background-home-page">
    <!-- Main area -->
    <div style="padding-top:2em;">      
      <p class="homeview">
        Check out the
        <router-link style="text-decoration: none" to="/projects/cowculator"
          >Cowculator</router-link
        >, be sure to press the Moo button!
      </p>
    </div>

    <!-- Aside area -->
    <AsideContent class="aside"> </AsideContent>
  </div>
  <FirstFooter></FirstFooter>
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
  mounted() {
    Prism.highlightAll();
  },
};
</script>



<style scoped>
h1 {
  text-align: center;
  padding-top: 0.25em;
}
p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 30px;
  margin-right: 20px;
  color: #000000;
  background: #fff;
  border-radius: 5px;
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
  border-radius: 5px;
}
.custom-background-home-page {
  background-color: rgb(158, 158, 158);
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 900px) {
  p.homeview {
    margin-left: 20px;
  }
  .hhh {
    margin-left: 20px;
  }
}
</style>