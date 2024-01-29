<template>
  <div class="second-main-area">
    <div class="hidden" ref="content" :class="{ 'show': isContentVisible }">
      <!-- div to show/hide items within on scroll -->
      <div class="second-area-grid-container">

        <div class="grid-item-coffee">
          <img class="coffee-image" :src="contentImage" alt="Image">
        </div>

        <div class="grid-item-text" :style="{ background: bgColor }">
          <h2>{{ titleText }}</h2>
          <p>
            {{ contentText }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
    
<script>
import coffee_image from '@/images/generated_cup_of_coffee.jpg';
import blueSky from '@/images/blue_sky2.jpg';

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
          } else if (entry.target === this.$refs.content_text) {
            this.options.threshold = 0.8;
            this.isTextVisible = true;
            this.observer.unobserve(this.$refs.content_text);
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
  padding-bottom: 1rem;
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
  }

  .coffee-image {
    width: 50rem;
  }
}
</style>