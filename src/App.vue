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
  color: #454545;
}

nav {
  padding: 10px 0px 10px 0px;
  background-color: rgb(198, 198, 198);
  
}

nav a {
  font-weight: bold;
  color: #454545;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  margin-right: 0.5em;
  border-radius: 5px;
  padding: 0.33em;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: black;
  padding: 0.33em;
}

html,
body {
  background-color: rgb(198, 198, 198);
}
</style>
