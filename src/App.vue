<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/projects">Projects</router-link> 
    <router-link to="/projects/cowculator">Cowculator</router-link>    
    <router-link to="/projects/weather">Weather</router-link>   
  </nav>
  <router-view />
</template>

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
  padding: 10px 0px 10px 0px;
  
  background-color: rgb(75, 75, 75);
  padding-bottom: -50px; 
}



nav a {
  font-weight: bold;
  color: rgb(75, 75, 75);
  text-decoration: none;
  background-color: rgb(168, 168, 168);
  margin-right: 0.5em;
  border-radius: 5px;
  padding: 0.33em;
  
}

nav a:hover {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  
  margin-right: 0.5em;
  border-radius: 5px;
  padding: 0.33em;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgb(75, 75, 75);
  padding: 0.33em;
}

html,
body {
  padding-top: 1em;
  background-color: rgb(198, 198, 198);
}
</style>
