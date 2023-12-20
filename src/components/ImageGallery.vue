<template>
    <div class="image-gallery">
      <div class="image-gallery-grid-container">
        <div v-for="item in galleryItems" :key="item.id" class="grid-item">
          <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
          <figcaption>{{ item.caption }}</figcaption>
        </div>
      </div>
    </div>
  </template>

  <script>
    import coffeeImage from '@/images/second_coffee.jpg';

  export default {
    name: 'ImageGallery',
    compontents: {
     
    },
    data() {
      return {
        coffeeImage: coffeeImage,

        galleryItems: [
            { id: 1, imageSrc: coffeeImage, altText: "Image 1", caption: "A Coffee Cup!" },
            { id: 2, imageSrc: coffeeImage, altText: "Image 2", caption: "A Coffee Cup!" },
            { id: 3, imageSrc: coffeeImage, altText: "Image 3", caption: "A Coffee Cup!" },
            { id: 4, imageSrc: coffeeImage, altText: "Image 1", caption: "A Coffee Cup!" },
            { id: 5, imageSrc: coffeeImage, altText: "Image 2", caption: "A Coffee Cup!" },
            { id: 6, imageSrc: coffeeImage, altText: "Image 3", caption: "A Coffee Cup!" },
        // Add more items as needed :)
      ]
    };
      
    },
    // Component logic goes here
  }
  </script>
  
  <style scoped>
  .image-gallery{    
    margin: 0 auto;   
  }

 .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
 }

 .grid-item{    
    border-radius: 1em;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    background-color: #ffffff; 
    
 }

 .grid-item:hover{   
    box-shadow: 0 0 10px 5px rgb(118, 223, 255);   
    
    background-color: #ffffff;
 }

.gallery-component-image{   
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    padding: 0em;
    margin: 0em;
    background-color: #ffffff;        
    
}

@media (max-width: 68rem) {

    .image-gallery-grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
       
    }
    .gallery-component-image{   
    
        background-color: #ffffff;
        
        
}
}

@media (max-width: 53rem) {

.image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);   
}

}

@media (max-width: 35rem) {

.image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);   
   
}

.grid-item{   
    width: 100%;
}

}


figcaption{
    text-align: center;
    padding: 0.5em;
    margin: 0em;
    
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    font-size: 0.8em;
    font-weight: bold;
    color: rgb(18, 18, 18);
   
}
  </style>