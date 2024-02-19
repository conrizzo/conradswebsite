<template>
  <footer class="footer">

    <div class="text-area-left footer-right-border">
      <span>
        <router-link class="footer-links footer-right-border" to="/about">About</router-link>&nbsp;<a
          class="footer-links footer-right-border"
          href="https://github.com/conrizzo/conradswebsite">GitHub</a>&nbsp;<router-link class="footer-links"
          to="/">ConradsWebsite.com</router-link> © {{ getCurrentYear }}
        <br><a class="footer-links" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
        unless noted otherwise.
      </span>
    </div>

    <!--
    <div class="text-area-right">
      <span>
        <router-link class="footer-links footer-right-border" to="/privacy">Privacy</router-link>&nbsp;<router-link
          class="footer-links footer-right-border" to="/terms">Terms</router-link>&nbsp;<router-link class="footer-links"
          to="/about">Contact</router-link>
      </span>
    </div>
    -->
    <!--adds a bar across the top behind hte navigation  -->

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
  color: rgb(255, 255, 255);
  /* text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4); */
}

.footer-links:hover {
  text-decoration: underline;
}

.footer-links:visited {
  color: rgb(255, 255, 255);
}

.footer-right-border {
  padding-right: 0.4em;
}

.text-area-left {
  max-width: 25em;
  background-color: rgb(45, 45, 45);
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: rgb(255, 255, 255);
}

.text-area-right {
  background-color: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding-left: .5em;
  padding-right: .5em;
}

footer {
  background-color: rgb(18, 18, 18);
  color: #fff;
  text-align: left;
  font-size: 1em;
  line-height: 1.5;

  display: flex;
  justify-content: space-between;
}
</style>