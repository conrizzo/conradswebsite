<template>
  <div class="gallery-header">
        <h1 class="gallery-styling-h1-span"><span> Project Links
            <span class="title-arrow-symbol">↷</span></span>
        </h1>
  </div>
  <div class="centerAll">

    <div class="image-gallery hidden" ref="content" :class="{ 'show': isContentVisible }">
      
      <main class="image-gallery-grid-container">

        <div v-for="item in imageArrayChoice" :key="item.id" :title="item.text" class="grid-item">
          <div>
            <router-link class="no-router-link-decorations" :to="item.to">

              <h2>{{ item.text }}</h2>

              <img class="gallery-component-image" :src="item.imageSrc" :alt="item.text">
              <figcaption>
                <p>{{ item.caption }}</p>
              </figcaption>

            </router-link>
          </div>
        </div>

      </main>

    </div>

  </div>
</template>
  
<script>

import ProjectLinks from '@/components/Navigation/ProjectLinks.ts';

export default {
  name: 'ImageGallery',
  components: {

  },
  data() {
    const requireContext = require.context('@/images/projects', false, /\.jpg$/);
    const images = requireContext.keys().map(requireContext);
    
    return {      
      images,

      isContentVisible: false,
      imageArrayChoice: null,
      imgArrayOfArrays: [
          // 1st array
          ProjectLinks,        
        [  
          // optional 2nd array
        ],
      ]


    };
  },
  mounted() {
    

    // Set the initioanl image array to the galleryItems array
    this.imageArrayChoice = this.imgArrayOfArrays[0]

    //#####
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin applied to the root
      threshold: 0.25, // Trigger when 50% of the element is visible
    };
    // Intersection Observer API -- this is used to load the handleIntersection method which
    // loads items on the screen as they are scrolled to with a transition effect.
    const observer = new IntersectionObserver(this.handleIntersection, options);

    observer.observe(this.$refs.content);


  },
  computed: {
    testTest() {
      //console.log("testing", this.theProjectLinks);
      return this.theProjectLinks;
    },
  },
  methods: {



    handleIntersection(entries) {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          if (entry.target === this.$refs.content) {
            // Load content for first element
            this.isContentVisible = true;
          }

        }
      });
    },


  },
  // Component logic goes here
}
</script>
    
<style scoped>
.hidden {
  opacity: 0;
  transition: all .75s;
}

.no-router-link-decorations {
  text-decoration: none;
}

.show {
  opacity: 1;
}

h1 {
  font-size: 1.5em;
}

h2 {
  color: rgb(255, 255, 255);
  text-align: left;
  padding-left: 0.33em;
  font-size: 1.25rem;
  text-transform: uppercase;
}

.gallery-styling-h1-span {  
  text-transform: uppercase;  
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
}

.title-arrow-symbol {
  font-size: 1.5em;
  position: absolute;
  margin-top: 0em;
  margin-left: -0.2em;
  transform: rotate(80deg);
  display: inline-block;
}

.gallery-header {
  text-align: left;
  margin-left: 3.5rem; 
}

.centerAll {
  justify-content: center;
  display: flex;
  height: fit-content;
  background: rgba(0, 0, 0, 0.33);
  border-radius: .75rem;
}

.image-gallery {
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, 0);
  padding: 1em; 
  display: flex;
  flex-direction: column;
}

.image-gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1rem;
}

.grid-item {
  width: fit-content;
  border-top-right-radius: 0.33em;
  border-top-left-radius: 0.33em;
  border-radius: 0.33em;  
}

.gallery-component-image {
  padding: 0em;
  margin: 0em;
  background-color: #ffffff;
  transition: filter .25s ease;
  max-height: 16rem;
  aspect-ratio: 6/4;
  border-radius: 0.5rem;
}

.gallery-component-image:hover {
  filter: brightness(90%);
}

figcaption {
  text-align: left;
  padding: 0.5em;
  margin: 0em;
  max-width: 23rem;
  background: rgba(0, 0, 0, 0);
  font-size: .9rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.gallery-component-image {   
    border-radius: 1rem;    
}

@media screen and (max-width: 70rem) {
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 50rem) {
  .image-gallery {
    padding: .5rem;
  }  
}

@media screen and (max-width: 35rem) {
  .image-gallery-grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .gallery-component-image {
    aspect-ratio: 4/3;
    max-height: 25rem;   
  }

  .grid-item {
    width: fit-content;     
    border-radius: 0;
    padding-bottom: 1rem;    
  }

  .grid-item::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin-top: .75rem;
    border-top: none; 
  }  

  /* 
  Fancy code that makes the last item in the grid not have a line after it
  by telling all other elements to have a border line. of course this could be
  written without the not statement and reverse the border value set -- but this is interesting.
  */
  .grid-item:not(:last-child)::after {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
  }

}


</style>