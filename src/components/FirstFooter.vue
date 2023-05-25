<template>
  <footer class="footer">
    <div class="">
      <p>
        Website by
        <a
          class="footer-links"
          href="https://github.com/conrizzo"
          >Conrad</a
        >
        | conradswebsite.com © 2023<br />
        unless mentioned otherwise, licensing is
        <a
          class="footer-links"
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          >CC BY NC 4.0</a
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
  color: #34B7F1;
}

.footer-links:hover {
  text-decoration: none;
}

.footer-links:visited {
  color: #34B7F1;
}

footer {
  margin-top: auto;
  height: 50px;
  font-size: 12px;
}
</style>