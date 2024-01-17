<template>
  <div class="second-main-area">

    <div class="hidden" ref="content" :class="{ 'show': isContentVisible }">
      <!-- div to show/hide items within on scroll -->

      <div class="second-area-grid-container">

        <div class="grid-item-coffee">
          <img class="coffee-image" :src="coffee_image" alt="Image">
        </div>
        <!--        
            <a href="https://de.wikipedia.org/wiki/Kaffee" class="grid-item-second-second">Kaffee</a>   
            <div class="grid-item-second-first"> Coffee</div>
            <a href="https://fr.wikipedia.org/wiki/Caf%C3%A9" class="grid-item-second-third">Café</a>  
            -->
        <div class="grid-item-coffee-text">
          <div class="hidden" ref="content_text" :class="{ 'show': isContentVisible }">
            <h2>Website Ingredients</h2>           
              <ul>
                <li><span style="border-bottom: 3px solid rgb(255, 255, 255);">Enthusiasm</span></li>
                <li><a class="home-text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a></li>
                <li><span style="border-bottom: 3px solid rgb(0, 255, 204);">Website code</span></li>
              </ul>
              <br>
              <br>
              <p>
               Foods that helped include just about anything that goes good with coffee<span class="loading"></span>
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
  
<script>
import coffee_image from '@/images/coffee_time.jpg';

export default {
  name: 'CoffeeGridContent',
  // Component logic goes here
  data() {

    return {
      coffee_image: coffee_image,
      isContentVisible: false,
      isTextVisible: false,
    };
  },
  mounted() {
    //#####
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin applied to the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
    // Intersection Observer API -- this is used to load the handleIntersection method which
    // loads items on the screen as they are scrolled to with a transition effect.
    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.content);

  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          if (entry.target === this.$refs.content) {
            // Load content for first element
            this.isContentVisible = true;

          } else if (entry.target === this.$refs.content_text) {
            this.options.threshold = 0.8;
            this.isTextVisible = true;
          }
        }
      });
    },
  },
}
</script>
  




<style scoped>
.loading {
  font-family: sans-serif;
  font-size: 1.25em;
}

.loading:after {
  display: inline-block;
  animation: dotty 3s steps(1, end) infinite;
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
}

.second-main-area {
  /* background: linear-gradient(0deg, rgb(49, 21, 32), 10%, rgba(161, 71, 78, 0.9), 30%,  
 rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5)80%, rgb(139, 114, 188) 100%); */
 background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
  background-size: 100% 100%;
}

/*
.main-area-box{
  background: rgba(31, 42, 85, 0.2);  
  padding: 1em 8em 1em 8em;
  max-width: 53em;
  margin-bottom: 2em;
  margin: 0 auto; 
}
*/
.home-text-links {
  color: rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 3px solid rgb(255, 89, 89);
  text-decoration: none;
  /*padding: 0.1em 0.2em;  */

  /*  transition: 0.33s ease-in-out; Add transition for smooth animation */
}

.home-text-links:hover {
  border-bottom: 3px solid rgb(0, 255, 170);
  color: rgb(255, 255, 255);
}

.home-text-links:active {
  color: rgb(255, 208, 0);
}



/* 2nd page grid */
.second-area-grid-container {  
  display: grid;
  grid-template-columns: 1fr 1fr; 
  justify-items: center; 
  align-items: center; 
  grid-gap: 2em; 
  padding: 2em;
}



.grid-item-coffee {
  grid-column: 1 / 2;
  
  color: #000000;
  max-height: 4em;
  cursor: pointer;
  text-align: right;
 
}


.grid-item-coffee-text {
  grid-column: 2 / 4;
  grid-row: 2;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.2);
  
  padding: 1rem 1rem 2rem 3rem;
  
  text-align: left;
}

.grid-item-coffee-text ul {
  font-size: 1.5em;
}


.grid-item-second-third:hover {
  color: #000000;
  background: #ffffff;
}

.coffee-image {
  border-radius: 1em;
  height: 90%;
}


@media only screen and (max-width: 70rem) {
  .grid-item-coffee-text {
    font-size: 1em;
  }
  .grid-item-coffee{
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

  /* Stack the grid items on top of each other vertically */
  .grid-item-second-first,
  .grid-item-second-second,
  .grid-item-second-third,
  .grid-item-coffee-text {
    grid-template-columns: repeat(1);
    grid-template-rows: 1 / -1;
    grid-column: 1;
  }

  .second-area-grid-container {
    grid-template-columns: 1fr;
    /* Change to a single column */
    grid-template-rows: auto;
    /* Allow rows to adjust automatically */
    grid-gap: 1em;
    /* Adjust the gap between grid items as needed */
  }

  .grid-item-coffee {
    grid-column: 1;
    grid-row: none;
    color: #000000;
  }

  .grid-item-coffee-text {
    grid-row: 3 / 4;
    color: #ffffff;
    
    padding-top: 1rem; padding-bottom: 1rem;
    font-family: 'Nimbus Sans L', sans-serif;
  }

  /* Remove the right margin from the third grid item */


  

}





</style>