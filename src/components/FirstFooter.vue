<template>
  <footer class="footer">
    <div>
      <span>
        <router-link class="footer-links" to="/about">About</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<a
          class="footer-links"
          href="https://github.com/conrizzo"
          >GitHub</a>&nbsp;&nbsp;&nbsp;&nbsp;conradswebsite.com © {{ getCurrentYear }}<br />
        unless mentioned otherwise, licensing is
        <a
          class="footer-links"
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          >CC BY NC 4.0</a
        >. 
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FirstFooter",
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
.footer-links:link {
  text-decoration: none;
  color: #34B7F1;
}

.footer-links:hover {
  text-decoration: underline;
}

.footer-links:visited {
  color: #34B7F1;
}

footer {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  
  font-size: 0.9em;
  line-height: 1.5;
}
</style>