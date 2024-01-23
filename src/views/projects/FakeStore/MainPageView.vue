<template>
  <body id="body">
  <section class="flex-box-center">
    <div style="text-align: left; width: 68rem; padding-left: 1rem; padding-right: 1rem;">
      <h1>This is a simple page to fetch data</h1>
      <br>
      <p>
        This is just an experimental project page that currently works by fetching data from the <a class="text-links"
          href='https://fakestoreapi.com/docs'>https://fakestoreapi.com/docs</a> API. 
          Made with Vue 3's composition API and
        an external TypeScript function to fetch the data. An animated loading text is displayed 
        while the data is being fetched. Since the data is fetched in a fraction of a second
        this likely goes unnoticed! It can be seen briefly when first loading the page, or by refreshing the page.
      </p>
    </div>
  </section>
  <CreateProductsGallery />
</body>
</template>
  
<script lang="ts">
// Path: src/views/projects/FakeStore/MainPage.vue
import CreateProductsGallery from './components/CreateProductsGallery.vue';

export default {
  components: {
    CreateProductsGallery,
  },
  setup() {
    return {
    };
  }
}
</script>

<style scoped>
#body{
  background: rgb(47, 47, 47);

}

h1{
  font-size: 3rem;
  color: #fff;
  text-transform: capitalize;
}
.flex-box-center {
  display: flex;
  justify-content: center;
  background: rgb(47, 47, 47);
 
  padding-top: 5rem;
  
  
}

p {
  font-size: 1.25rem;
  color: #fff;
}</style>