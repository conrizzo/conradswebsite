<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
    <!-- createa nav bar on every page-->
    <nav class="nav-space-at-lower-resolution">
      <!-- <router-link class="move-first-nav-link-at-lower-resolution" to="/">Home</router-link> -->      
      <!-- House icon -->
      <RouterLink class="router-link-home-active" style="" to="/">
         <!-- <img src="@/images/Home_Icon.jpg" alt="Logo" style="width: 20px; height: 20px;"> -->
         <svg style="height: 1.1em; width: 1.1em;" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>              
              <line x1="3" y1="16" x2="21" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
         </svg>
      </RouterLink>  
      <router-link class="text-shadow" to="/about">About</router-link>

      <!--import the dropdown menu into the nav bar-->
      <DropDownMenu></DropDownMenu>
      
    </nav>
  
   
  
    <!-- user accepts privacy agreement -->
    <!-- Removed this for now, the only cookies the site has is if someone uses firebase so I will put this notification on that page exclusively -->
    <!-- <CookieAccept /> -->
  </template>
  
  <script>
  // import the dropdown menu into the nav bar
  import DropDownMenu from "@/components/DropDownMenu.vue";  
  
  
  export default {
    name: "MainHeader",
    components: {
      DropDownMenu, 
    }, 
  };
  </script>
  
  <style>  
  
  /* how to pin the nav to the top of the page */
  nav {  
    padding-left: 0em;  
    /* padding: 0.3em 0.25em 0.3em 0.25em; */
    font-size: 1.25em;
    background-color: rgb(255, 255, 255);
    line-height: 1.1;  
  }
  
  nav a {
    text-decoration: none;
    color: rgb(128, 128, 128);
    
    padding: 0.4em 0.6em 0.4em 0.6em;
    border-radius: 0.4em;  
  }
  
  nav a:hover {
    color: rgb(12, 12, 12);
    text-decoration: none;
    /*background-color: rgb(235, 235, 235);*/
  
  }
  
  nav a.router-link-exact-active {
    color: #ffffff;
    background-color: #ff5959;
  }
  
  
  nav a.router-link-home-active {
    color: rgb(128, 128, 128);
    background: none;  
    
  }
  nav a.router-link-home-active:hover {
    color: rgb(12, 12, 12);
    background: none;
  }  
  
  /* ABOVE this comment adjusts the default scrollbar on the right */
  
  .nav-space-at-lower-resolution {
    z-index: 3;
    left: 0; 
    position: absolute;    
  }
  
  .text-shadow{
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    color: rgb(100, 100, 100);  
    text-decoration: underline #ff5959;
  }
  .text-shadow:hover {
    color: rgb(12, 12, 12);
    text-decoration: underline #ff5959;  
  }
  
  </style>
  