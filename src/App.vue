<template>
  
    <nav class="move-left-at-lower-resolution" v-if="showNav">     
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <!--import the dropdown menu into the nav bar-->
      
      <DropDownMenu></DropDownMenu> 
   
    </nav> 
  <router-view />
</template>

<script>
// import the dropdown menu into the nav bar
import DropDownMenu from "@/components/DropDownMenu.vue";

export default {
  name: "App",
  components: {
    DropDownMenu
  }, computed: {
    showNav() {
      // Check if the current route is not the cowGame route
      return this.$route.path !== '/projects/cowgame';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
}
/* how to pin the nav to the top of the page */
nav {
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  justify-content: center;
  align-items: center;
  position: fixed; 
  /* padding: 0.3em 0.25em 0.3em 0.25em; */  
  font-size: 1.25em;
  background-color: rgb(255, 255, 255);  
}

nav a {    
  text-decoration: none;
  color: rgb(128, 128, 128);
  margin-right: 0.2em;   
  padding: 0.4em 0.6em 0.4em 0.6em;  
}

nav a:hover {    
  color: #000;
  text-decoration: none;  
  background-color: rgb(235, 235, 235);
 /*background-color:rgb(235, 235, 235);*/
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #ff5959;
}

html,
body {  
  /* padding-top: 1.33em; */
  /* background-color: rgb(100, 100, 100); */
  background-color: #ffffff;
}


/* BELOW this comment adjusts the default scrollbar on the right */
/* Set the width of the scrollbar */
::-webkit-scrollbar {
  width: 0.75em; 
  background-color: #fff;
  margin-right: 5px;
  height: 50px;
}
/* Set the color of the scrollbar track */
::-webkit-scrollbar-track {
  background-color: #ffffff;
  width: 0.5em;
  margin-right: 5px;
}
::-webkit-scrollbar-thumb {
  background: rgb(172, 172, 172);  
  border-right: 0.25em white solid;
  border-top: 0.25em white solid;
  border-bottom: 0.25em white solid;
  background-clip: padding-box;
  border-radius: 0.5em; 
}
/* Set the color of the scrollbar thumb on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}
/* ABOVE this comment adjusts the default scrollbar on the right */


.move-left-at-lower-resolution{
  z-index: 2;
}

@media only screen and (max-width: 1000px) {

  .move-left-at-lower-resolution {
  padding-left: 1.7em;
  text-align: left;
  
}
}
</style>
