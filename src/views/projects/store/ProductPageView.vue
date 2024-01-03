<template>
    <div class="background">
       <div class="product-information-area">
            <h1>{{ itemName }}</h1>

            <p>Product ID: {{ productId }}</p>
            <p>Product: {{ itemName }}</p>
            <p>Price: €{{ itemPrice }}</p>
            <div>


                <img class="gallery-component-image" :src="itemImageSrc" :alt="itemName"
                    style="max-width: 100%; max-height: 100%;">


            </div>
            <button class="clean-button" @click="goBackOnePage">Back to last page</button>
       </div>
    </div>
</template>
  
<script>
import "@/assets/globalCSS.css";
export default {
    data() {
        return {

        };
    },

    computed: {
        productId() {
            return this.$route.params.id;
        },
        itemName() {
            return this.$route.params.name;
        },
        itemImageSrc() {
            return this.$route.params.image;
        },
        itemPrice() {
            return this.$route.params.price;
        }
    },

    methods: {
        goBackOnePage() {
            this.$router.go(-1); // Navigate back to the previous page
        },
    }

}
</script>
  
<style scoped>
.background {
    background-color: #f5f5f5;
    padding: 2em;
    
}

.gallery-component-image {
    border-radius: 1em;
    padding: 0em;
    margin: 0em;
    background-color: #ffffff;   
}

.product-information-area{
    background: rgb(255, 255, 255);
    padding: 1em;
}


</style>