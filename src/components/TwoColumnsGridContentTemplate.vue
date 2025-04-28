<template>
  <div class="second-main-area">
    <div class="hidden" ref="content" :class="{ 'show': isContentVisible }">
      <!-- div to show/hide items within on scroll -->
      <div class="second-area-grid-container">

        <div class="grid-item-coffee" v-if="setPhotoLink === ''">
          <img :style="{ width: imgWidth + 'rem' }" class="coffee-image" v-lazy="contentImage" alt="Image">

        </div>
        <div class="grid-item-coffee" v-else>
          <a :href="setPhotoLink">
            <img :style="{ width: imgWidth + 'rem' }" class="coffee-image" v-lazy="contentImage" alt="Image">

          </a>
          <div class="photo-caption">{{ setPhotoCaption }}</div>

        </div>

        <div class="grid-item-text" :style="{ background: bgColor, color: textColor }">
          <h2 :style="{ 'font-size': titleTextSize }" v-html="titleText"></h2>
          <p :style="{ 'font-size': contentTextSize }" v-html="contentText">
          </p>
        </div>

      </div>
      <slot></slot> <!-- slot here to add anything else under it -->
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
    titleTextSize: {
      type: String,
    },
    contentText: {
      type: String,
      default: 'This is the default text for the prop, anything can be added here in the parent component.',
    },
    contentTextSize: {
      type: String,
    },
    contentImage: {
      type: String,
      default: coffee_image,
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)'
    },
    textColor: {
      type: String,
      default: '#ffffff',
    },
    imgWidth: {
      type: Number || String,
      default: 10,
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

.photo-caption {
  font-size: 0.6em;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  text-align: left;
  display: block;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: auto;
  margin-top: 0.2rem;
  border-radius: 0.25em;
}



.second-main-area {
  background: -webkit-linear-gradient(-3deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
      40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%);
  background: linear-gradient(-2deg, rgb(27, 10, 15), 1%, rgb(54, 23, 34), 15%, rgba(161, 71, 78, 0.9),
      40%, rgb(251, 237, 215) 60%, rgba(185, 134, 193, 0.5) 80%, rgb(139, 114, 188) 100%),
    linear-gradient(45deg, rgba(161, 71, 78, 0.9), 40%, rgb(251, 237, 215), rgba(185, 134, 193, 0.5),
      rgb(139, 114, 188) 100%);
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