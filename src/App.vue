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
  padding: 1.05em 0.25em 1.05em 0.25em;
  font-size: 1.25em;
  background-color: rgb(255, 255, 255);
  
}



nav a {
  font-weight: bold;
  color: rgb(75, 75, 75);
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  margin-right: 0.1em;
  
  border-radius: 5px;
  padding: 0.5em 0.6em 0.5em 0.6em;
  
}

nav a:hover {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  
  margin-right: 0.1em;
  border-radius: 5px;
  padding: 0.5em 0.6em 0.5em 0.6em;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgb(75, 75, 75);
  padding: 0.5em 0.6em 0.5em 0.6em;
}

html,
body {
  padding-top: 2.02em;
  background-color: rgb(198, 198, 198);
}

@media only screen and (max-width: 600px) {
  nav {
    font-size: 1em;
    padding: 1.5em 0.25em 1.5em 0.25em;
  }
}
</style>
