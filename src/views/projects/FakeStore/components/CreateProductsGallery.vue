<template>
   
        <main>
            <div v-if="isLoading" style="text-align: center;">
                <span class="loading" style="font-size: 4rem; color: #fff;">Loading</span>
            </div>
            <div v-else class="center-content">
                <div class="container">
                    <div v-for="(product, index) in products" :key="index">
                        <!-- Display the product here -->
                        <div class="each-item-format img-wrapper">
                            <img class="image-ratio" :src="product.image" :alt="product.title" />
                            <div style="padding-top: 3rem;">
                                <h2>{{ product.title }}</h2>
                                <p>{{ product.rating.rate }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  
</template>
  
<script lang="ts">
// Path: src/views/projects/FakeStore/MainPage.vue
import { onMounted, ref } from 'vue';
import { fetchData } from './getData';

export default {
    setup() {
        const products = ref(null);
        const isLoading = ref(false);

        // set products to the data from the api call in getData.ts
        onMounted(async () => {
            isLoading.value = true;
            products.value = await fetchData();
            isLoading.value = false;
        });

        return {
            products,
            isLoading,
        };
    }
}
</script>

<style scoped>
h2{
    font-size: 1rem;
}
.center-content {
    justify-content: center;
    display: flex;
    height: fit-content;
    
    background: rgb(47, 47, 47);
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: flex-end;
    background: #ffffff;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
}


.each-item-format {
    max-width: 20rem;
}

.image-ratio {
    max-height: 25rem;
    max-width: 20rem;
}

@media screen and (max-width: 67em) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
    
}

@media screen and (max-width: 46em) {
    
    h2{
    font-size: .8rem;
    }       
    .each-item-format {
    max-width: calc(100%);
    padding-right: 2rem;
    padding-left: 2rem;
    }
    .image-ratio {
    max-height: 100%;
    max-width: 100%
}
    
}


/* Does image zoom effect - start */
.img-wrapper {
    display: inline-block;
    overflow: hidden;
    
}

.img-wrapper img {
    transition: all .2s ease;
    vertical-align: middle;
}

img:hover {
    transform: scale(1.03);
    -ms-transform: scale(1.03);
    /* IE 9 */
    -moz-transform: scale(1.03);
    /* Firefox */
    -webkit-transform: scale(1.03);
    /* Safari and Chrome */
    -o-transform: scale(1.03);
    /* Opera */
}
/* Does image zoom effect - end */

.loading {
    font-family: sans-serif;
    font-size: 1.25em;
}
.loading:after {
    display: inline-block;
    animation: dotty .5s steps(1, end) infinite;
    content: '';
}
@keyframes dotty {
    0% {
        content: '.';
    }

    20% {
        content: '.';
    }

    40% {
        content: '..';
    }

    60% {
        content: '...';
    }

    80% {
        content: '....';
    }

    100% {
        content: '.';
    }
}
</style>