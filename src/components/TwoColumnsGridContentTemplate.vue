<template>
    <div class="second-main-area">  
      <div class="hidden" ref="content" :class="{ 'show': isContentVisible }">
        <!-- div to show/hide items within on scroll -->
  
         <div class="second-area-grid-container">  
            <div class="grid-item-coffee">  
                <img class="coffee-image" :src="coffee_image" alt="Image">
            </div>           
            <div class="grid-item-text">
                           
                    <h2>{{ titleText }}</h2>                
                    <p>
                    {{contentText}}
                    </p>    
                
            </div>    
         </div>
      </div>  
    </div>
  </template>
    
  <script>
  import coffee_image from '@/images/coffee_time.jpg';
  
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
    },
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
        root: null, 
        rootMargin: '0px', 
        threshold: 0.5, };
   
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
    background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed;
  position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2em;  
    padding: 2em;
  }  
  .grid-item-text {
    grid-column: 1;
    grid-row: 1 / -1;
    color: #ffffff;  
    background: rgba(0, 0, 0, 0.2);
    height: fit-content;
    padding: 3em;
    font-size: 1.5em;
    text-align: left;
  }
  .grid-item-coffee {
    grid-column: 2;
    grid-row: 1 / -1;
    color: #ffffff;  
    padding: 3em;
    font-size: 1.5em;
    text-align: left;
    
  }  
  .coffee-image {
    border-radius: 1em;
    width: 66%;   
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
      grid-gap: 1em;    
    }  
    .grid-item-coffee {
      grid-column: 1;
      grid-row: none;    
    }   
    .coffee-image {
      max-width: 100%;      
    }  
  }
  
  @media only screen and (max-width: 70rem) {
    .grid-item-text {
      font-size: 1em;
      padding: 1em;
    }
    .grid-item-coffee{
      padding: 1em;     
      text-align: center;
    }
  }
  </style>