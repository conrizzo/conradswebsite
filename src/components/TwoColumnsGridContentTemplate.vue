<template>
  <div class="second-main-area">
    <div class="hidden" ref="content" :class="{ 'show': isContentVisible }">
      <!-- div to show/hide items within on scroll -->
      <div class="second-area-grid-container">

        <div class="grid-item-coffee" v-if="setPhotoLink===''">        
            <img :style="{ width: imgWidth + '%' }" class="coffee-image" :src="contentImage" alt="Image">    
        </div>
        <div class="grid-item-coffee" v-else>
          <a :href="setPhotoLink">
            <img :style="{ width: imgWidth + '%' }" class="coffee-image" :src="contentImage" alt="Image">            
          </a>
          <caption class="photo-caption-style">{{ setPhotoCaption }}</caption>
        </div>

        <div class="grid-item-text" :style="{ background: bgColor }">
          <h2>{{ titleText }}</h2>
          <p v-html="contentText">           
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
    
<script>
import coffee_image from '@/images/generated_cup_of_coffee.jpg';


export default {
  name: 'CoffeeGridContent',
  props: {
    titleText: {
      type: String,
      default: 'This is the default text for the title.',
    },
    contentText: {
      type: String,
      default: 'This is the default text for the prop, anything can be added here in the parent component.',
    },
    contentImage: {
      type: String,
      default: coffee_image,
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)'
    },
    imgWidth: {
      type: Number || String,
      default: 100,
    },
    setPhotoLink: {  // creates a prop to set a link for the image, combined with v-else
      type: String,  // it will do no link if not set
      default: '',
    },
    setPhotoCaption: {
      type: String,
      default: 'This is the default caption for the image.',
    },


  },
  data() {
    return {
      coffee_image: coffee_image,
      isContentVisible: false,
      isTextVisible: false,
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.observer.observe(this.$refs.content);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.$refs.content) {
            this.isContentVisible = true;
            this.observer.unobserve(this.$refs.content);
          } 
        }
      });
    },
  },
}
</script>   
  

<style scoped>
/* CSS for the home page */
.hidden {
  opacity: 0;
  transition: all 2s;
}

.show {
  opacity: 1;
}

h1 {
  font-size: 3em;
  padding: 1em;
}

h2 {
  font-size: 1.6em;
  padding: 0em 0em 1em 0em;
  line-height: 1.1em;
  text-transform: capitalize;
}

.photo-caption-style {
  font-size: 0.6em;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  text-align: left;  
  display: block;
  padding-left: 0.5em;
  padding-right: 0.5em; 
  margin-left: auto;
  margin-top: 0.5em;
  border-radius: 0.25em;
}

.second-main-area {
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
}

.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(255, 89, 89);
  text-decoration: none;
}

.home-text-links:hover {
  border-bottom: 3px solid rgb(0, 255, 170);
  color: rgb(255, 255, 255);
}

.second-area-grid-container {
  display: grid;
  grid-template-columns: 1fr .75fr;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  column-gap: 1rem;
}

.grid-item-text {
  grid-column: 1;
  grid-row: 1;
  color: #ffffff;
  height: fit-content;
  padding: 3em;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;
}

.grid-item-coffee {
  grid-column: 2;
  grid-row: 1;
  color: #ffffff;
  font-size: 1.5em;  
}

.coffee-image {
  border-radius: .75rem; 
  margin: 0 auto;
}

@media only screen and (max-width: 70rem) {
  .grid-item-text {
    font-size: 1em;
    padding: 1em;
  }

  .grid-item-coffee {
    text-align: center;
  }
}

@media only screen and (max-width: 50rem) {

  .second-main-area {
    padding-top: 0em;
  }

  h1 {
    padding-top: 3em;
    font-size: 2em;
  }

  .second-area-grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .grid-item-text {
    grid-column: 1;
    grid-row: 2;
  }

  .grid-item-coffee {
    grid-column: 1;
    grid-row: 1;
    padding-bottom: 1rem;
  }

  .coffee-image {
    height: 100%;
  }
}
</style>