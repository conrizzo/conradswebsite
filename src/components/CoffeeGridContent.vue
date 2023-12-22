<template>
     <div class="second-main-area">     
        <div class="hidden" ref="content" :class="{ 'show': isContentVisible }"> <!-- div to show/hide items within on scroll -->  
          <div class="second-area-grid-container">       
            <div class="grid-item-second-first">
              Coffee
            </div>
            <div class="grid-item-coffee">              
                <img  class="coffee-image" :src="coffee_image" alt="Image">                
            </div>               
            <a href="https://de.wikipedia.org/wiki/Kaffee" class="grid-item-second-second">Deutsch Kaffee</a>           
            <div class="grid-item-coffee-text">
              <p>             
                Website made with enthusiasm and <a class="home-text-links" href="https://en.wikipedia.org/wiki/Coffee">Coffee</a>.
                <br><br>
                Foods that helped include <span style="color:rgb(255, 247, 0);">&#8594;</span> Fresh bread with butter, croissants, donuts, cake, bagels, muffins,
                buttermilk biscuits, toast (w/butter+cinnamon), pancakes or waffles (w/butter+<a style="color: rgb(216, 88, 14);" class="text-links" href="https://en.wikipedia.org/wiki/Maple_syrup">maple syrup</a>), 
                granola bars, apple pie, chocolate<span class="loading"></span>
              </p>              
            </div>
            <a href="https://fr.wikipedia.org/wiki/Caf%C3%A9" class="grid-item-second-third">Café Français</a>             
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
        console.log(entry);
        if (entry.isIntersecting) {          
            if (entry.target === this.$refs.content) {
            // Load content for first element
            this.isContentVisible = true;
         
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
.second-main-area {
 /* background: linear-gradient(0deg, rgb(49, 21, 32), 10%, rgba(161, 71, 78, 0.9), 30%,  
 rgb(251, 237, 215) 45%, rgba(185, 134, 193,0.5)80%, rgb(139, 114, 188) 100%); */
 background: rgb(18,18,18);
 height: 100vh;
 color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;

 padding-left: 2em;
 padding-right: 2em;  

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
.second-area-grid-container{ 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2em; /* Adjust the gap between grid items as needed */   
 
}
.grid-item-second-first{  
  grid-column: 1 / 2;
  grid-row: 1 / 2;  
  border-radius: 0.3em 0.3em 0.3em 0.3em;  

  padding: 0.25em;  
  max-height: 1.5em;  
  font-size: 2em;  
  background: rgb(187, 127, 64);
  color: #ffffff;
  border: 3px rgb(0, 255, 166) solid;  
  text-align: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}.grid-item-second-first:hover{ 
  color: #000000;
  background: #ffffff;
}

.grid-item-coffee{
  grid-column: 1 / 2;
  grid-row: 2 / 3;    
  color: #000000;
  max-height: 4em;   
  cursor: pointer;
}
.grid-item-second-second{  
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  border: 3px rgb(0, 242, 255) solid;
  background: #121212;
  
  color: #ffffff;
  border-radius: 0.2em;
  padding: 0.25em;  
  max-height: 1.5em;  
  font-size: 2em;  
  text-decoration: none;
  transition: 0.3s ease-in-out;
}.grid-item-second-second:hover{  
  color: #000000;
  background: #ffffff;
}


.grid-item-coffee-text{  
  grid-column: 3 / 3;
  grid-row: 1 / 3;  
  color: #ffffff;
  background: rgb(18,18,18);
 
  border-radius: 0.5em;
  padding: 0.5em;  
  font-size: 1.5em;  
  text-align: left; 
}
.grid-item-second-third{  
  grid-column: 3 / 4;
  grid-row: 3 / 4;  
  border: 3px rgb(255, 65, 65) solid;
  border-radius: 0.2em;
  background: rgb(67, 49, 45);
  padding: 0.25em;  
  max-height: 1.5em;  
  font-size: 2em;  
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}.grid-item-second-third:hover{  
  color: #000000;
  background: #ffffff;
}




@media only screen and (max-width: 100rem) {
 
  .second-main-area{
    padding-top: 3em;
  }
}

@media only screen and (max-width: 50rem) {

  .second-main-area {
    padding-top: 0em;
    margin-top: -5em; 
  }
 
  

    /* Stack the grid items on top of each other vertically */
  .grid-item-second-first,
  .grid-item-second-second,
  .grid-item-second-third, .grid-item-coffee-text {
      grid-template-columns: repeat(1);
      grid-template-rows: repeat(1);
      grid-column: 1;     
      
  }
  .second-area-grid-container {
      grid-template-columns: 1fr; /* Change to a single column */
      grid-template-rows: auto; /* Allow rows to adjust automatically */
      grid-gap: 1em; /* Adjust the gap between grid items as needed */
    }

  .grid-item-coffee{
    grid-column: 1;
    grid-row: none;  
    color: #000000;    
  }
  .grid-item-coffee-text{     
    grid-row: 4 / 5;  
    color: #ffffff;   
    background: rgb(0, 0, 0);    
    font-family: 'Nimbus Sans L', sans-serif;
  }
  /* Remove the right margin from the third grid item */
  .grid-item-second-third{
    margin-right: 0em;
  }
  .coffee-image {
    display: none;
  }
 
}

@media only screen and (max-width: 70rem){
  .grid-item-coffee-text{     
    font-size: 1em;
 }
}

.coffee-image {  
  border-radius: 1em;
  width: 100%;
  border: 4px solid rgb(0, 255, 166);
  background: rgb(229, 233, 240);
  box-sizing: border-box;
}






.loading {
  font-family: sans-serif;
  font-size: 1.25em;  
}

.loading:after {
  display: inline-block;
  animation: dotty 3s steps(1, end) infinite;
  content: '';
}












</style>