<template>
  
  <footer class="footer">
    <div class="">
      <p>
        <strong>Website</strong> by
        <router-link class="footer-links" to="/">Conrad</router-link> | © 2023
        conradswebsite.com | unless mentioned otherwise, licensing is
        <a
          class="footer-links"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a
        >.
      </p>
    </div>
  </footer>

</template>

<script>
export default {
  name: "FirstFooter",
};
</script>

<style>
.footer-links:link {
  text-decoration: none;
  color: white;
}

.footer-links:hover {
  text-decoration: underline;
}
.footer-links:visited {
  color: rgb(181, 0, 181);
}





footer {
  margin-top: auto;
  height: 50px;
}
</style>