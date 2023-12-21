<template>
  <div class="image-gallery">
    <div class="gallery-button-left" @click="changeImageArray('left')">&lt;</div>
    <div class="image-gallery-grid-container">
      <div v-for="item in imageArrayChoice" :key="item.id" class="grid-item">
        
            <img class="gallery-component-image" :src="item.imageSrc" :alt="item.altText">
            <figcaption>{{ item.caption }}</figcaption>
        
      </div>
    </div>
    <div class="gallery-button-right" @click="changeImageArray('right')">></div>
  </div>
</template>

<script>
import coffeeImage from '@/images/second_coffee.jpg';
import coffeeFood from '@/images/coffee_food.jpg';

export default {
  name: 'ImageGallery',
  compontents: {

  },
  data() {
    return {
      coffeeImage: coffeeImage,
      coffeeFood: coffeeFood,
      
      imageArrayChoice: null,

      imgArrayOfArrays: [
          [
            { id: 1, imageSrc: coffeeFood, altText: "Image 1", caption: "Food!" },
            { id: 2, imageSrc: coffeeImage, altText: "Image 2", caption: "A Coffee Cup!" },
            { id: 3, imageSrc: coffeeImage, altText: "Image 3", caption: "A Coffee Cup!" },
            { id: 4, imageSrc: coffeeImage, altText: "Image 4", caption: "A Coffee Cup!" },
            { id: 5, imageSrc: coffeeImage, altText: "Image 5", caption: "A Coffee Cup!" },
            { id: 6, imageSrc: coffeeImage, altText: "Image 6", caption: "A Coffee Cup!" },
            { id: 7, imageSrc: coffeeImage, altText: "Image 7", caption: "A Coffee Cup!" },
            { id: 8, imageSrc: coffeeImage, altText: "Image 8", caption: "A Coffee Cup!" },
            // Add more items as needed :)
          ],
      ]
      /*
      [
        { id: 1, imageSrc: coffeeFood, altText: "Image 1", caption: "Food!" },
        { id: 2, imageSrc: coffeeFood, altText: "Image 2", caption: "Food!" },
        { id: 3, imageSrc: coffeeFood, altText: "Image 3", caption: "Food!" },
        { id: 4, imageSrc: coffeeFood, altText: "Image 4", caption: "Food!" },
        { id: 5, imageSrc: coffeeFood, altText: "Image 5", caption: "Food!" },
        { id: 6, imageSrc: coffeeFood, altText: "Image 6", caption: "Food!" },
        { id: 7, imageSrc: coffeeFood, altText: "Image 7", caption: "Food!" },
        { id: 8, imageSrc: coffeeFood, altText: "Image 8", caption: "Food!" },
      ],
      [
        { id: 1, imageSrc: coffeeFood, altText: "Image 1", caption: "Food!" },
        { id: 2, imageSrc: coffeeImage, altText: "Image 2", caption: "A Coffee Cup!" },
        { id: 3, imageSrc: coffeeFood, altText: "Image 3", caption: "Food!" },
        { id: 4, imageSrc: coffeeImage, altText: "Image 4", caption: "A Coffee Cup!" },
        { id: 5, imageSrc: coffeeFood, altText: "Image 5", caption: "Food!" },
        { id: 6, imageSrc: coffeeImage, altText: "Image 6", caption: "A Coffee Cup!" },
        { id: 7, imageSrc: coffeeFood, altText: "Image 7", caption: "Food!" },
        { id: 8, imageSrc: coffeeImage, altText: "Image 8", caption: "A Coffee Cup!" },
      ],
      [
        { id: 1, imageSrc: coffeeImage, altText: "Image 1", caption: "A Coffee Cup!" },
        { id: 2, imageSrc: coffeeFood, altText: "Image 2", caption: "Food!" },
        { id: 3, imageSrc: coffeeImage, altText: "Image 3", caption: "A Coffee Cup!" },
        { id: 4, imageSrc: coffeeFood, altText: "Image 4", caption: "Food!" },
        { id: 5, imageSrc: coffeeImage, altText: "Image 5", caption: "A Coffee Cup!" },
        { id: 6, imageSrc: coffeeFood, altText: "Image 6", caption: "Food!" },
        { id: 7, imageSrc: coffeeImage, altText: "Image 7", caption: "A Coffee Cup!" },
        { id: 8, imageSrc: coffeeFood, altText: "Image 8", caption: "Food!" },
      ]*/
    
    };

  },
  methods: {
    // This method will change the image array to the one passed in
    changeImageArray(choice) {

      const lastIndex = this.imgArrayOfArrays.length - 1;
      const currentIndex = this.imgArrayOfArrays.indexOf(this.imageArrayChoice);
      
      function arraymove(arr, fromIndex, toIndex) {
        let element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        return arr;
      }      

      if (choice === 'left') {
        arraymove(this.imgArrayOfArrays[currentIndex],0,this.imgArrayOfArrays[currentIndex].length);
        if (currentIndex === 0) {
          this.imageArrayChoice = this.imgArrayOfArrays[lastIndex];
        } else {
          this.imageArrayChoice = this.imgArrayOfArrays[currentIndex - 1];
        }
      } else if (choice === 'right') {
        arraymove(this.imgArrayOfArrays[currentIndex],this.imgArrayOfArrays[currentIndex].length-1,0);
        if (currentIndex === lastIndex) {
          this.imageArrayChoice = this.imgArrayOfArrays[0];
        } else {
          this.imageArrayChoice = this.imgArrayOfArrays[currentIndex + 1];
        }
      }
    }
  },

  mounted() {
    // Set the initioanl image array to the galleryItems array
    this.imageArrayChoice = this.imgArrayOfArrays[0]
  },

  // Component logic goes here
}
</script>
  
<style scoped>
.gallery-button-left {
  position: absolute;
  font-size: 4em;
  top: 50%;
  left: -1em;
  transform: translateY(-50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
}

.gallery-button-right {
  position: absolute;
  font-size: 4em;
  top: 50%;
  right: -1em;
  transform: translateY(-50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.33);
  cursor: pointer;
  user-select: none;
}

.gallery-button-right:hover {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 17, 255, 0.5));
}

.gallery-button-left:hover {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 17, 255, 0.5));
}

.image-gallery {
  margin: 0 auto;
  position: relative;
}

.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.grid-item {
  border-radius: 1em;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
}

.grid-item:hover {
  box-shadow: 0 0 3px 2px rgb(255, 255, 255);
  background-color: #ffffff;
  cursor: pointer;
}

.gallery-component-image {
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

  .gallery-component-image {

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

  .grid-item {
    width: 100%;
  }

  .gallery-button-left,
  .gallery-button-right {
    display: none;
  }

}


figcaption {
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