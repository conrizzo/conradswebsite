<template>
  <footer class="footer">


    <div class="text-area-left footer-right-border">
      <!-- License below refers to the svg icon only -->
      <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <div class="center-with-flex attention-notice-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="white">
          <path
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        <p class="attention-message">
          Attention: website is updated frequently!
        </p>
      </div>

      <span>
        <router-link class="footer-links footer-right-border" to="/about">About</router-link>
        &nbsp;
        <router-link class="footer-links footer-right-border"
          :to="{ path: '/about', hash: '#contact-form-section' }">Contact</router-link>
        &nbsp;
        <router-link class="footer-links footer-right-border" :to="{ path: '/privacy', }">Privacy</router-link>
        &nbsp;
        <a class="footer-links footer-right-border" href="https://github.com/conrizzo/conradswebsite">GitHub</a>
        <br>
        <router-link class="footer-links" to="/">ConradsWebsite.com</router-link> © {{ getCurrentYear }}
        <br>
        <a class="footer-links" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
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

.attention-notice-container {
  color: rgb(0, 0, 0);
  background: rgb(255, 176, 72, 0.75);
  width: fit-content;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  padding-right: .5rem;
  padding-left: .5rem;
  align-items: center;

}

.attention-message {
  padding-left: .5rem;
  padding-top: 0.1rem;
  font-size: 1.1rem;

}
</style>