<template>
  <footer class="footer">
    <div class="text-area">
      <span>
        <router-link class="footer-links" to="/about">About</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<a class="footer-links"
          href="https://github.com/conrizzo/conradswebsite">GitHub</a>&nbsp;&nbsp;&nbsp;&nbsp;<router-link class="footer-links"
          to="/">ConradsWebsite.com</router-link> © {{ getCurrentYear }}<br />
        Licensed under <a class="footer-links" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
        unless noted otherwise.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
     
    };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },  
};
</script>

<style scoped>
.footer-links:link {
  text-decoration: none;
  color: #34B7F1;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
}

.footer-links:hover {
  text-decoration: underline;
}

.footer-links:visited {
  color: #34B7F1;
}

.text-area {
  max-width: 25em;
  background-color: rgb(12, 12, 12);
  padding-left: 1em;
  padding-top: 0.5em;  
  padding-bottom: 0.5em; 
}

footer {    
  background-color: rgb(81, 81, 81);
  color: #fff;  
  text-align: left;
  font-size: 0.9em;
  line-height: 1.5;  
}
</style>