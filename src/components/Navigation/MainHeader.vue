<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
  <div class="full-main-header-div">
    <!-- createa nav bar on every page-->
    <nav class="nav-space-at-lower-resolution">
      <!-- <router-link class="move-first-nav-link-at-lower-resolution" to="/">Home</router-link> -->      
      <!-- House icon -->

      <router-link to="/" exact class="home-link" active-class="active-home-link">
         <!-- <img src="@/images/Home_Icon.jpg" alt="Logo" style="width: 20px; height: 20px;"> -->
         <svg style="height: 1.3em; width: 1.3em;" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
              <path d="M2 9l11-7 11 7l0+10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>              
              <line x1="2" y1="9" x2="0" y2="200" stroke="currentColor" style="stroke-width:2" stroke-linecap="round" />
              <line x1="2" y1="20" x2="25" y2="20"  stroke="currentColor" style="stroke-width:2"  />
            </g>
         </svg>         
      </router-link>  

      <router-link class="text-shadow" to="/about">
        About
      </router-link>

      <!--import the dropdown menu into the nav bar-->
      <DropDownMenu>        
      </DropDownMenu>      
    </nav>
  
    <!--adds a bar across the top behind hte navigation  --> 
    <div style="height: 2.7em; border-bottom: solid rgb(218, 220, 224) 1px;">
      <a href="https://github.com/conrizzo/conradswebsite">
        <svg class="github-logo-link" viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" ><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </div>
    <div style="height: 1px;">
    </div>
    
  </div>
    <!-- user accepts privacy agreement -->
    <!-- Removed this for now, the only cookies the site has is if someone uses firebase so I will put this notification on that page exclusively -->
    <!-- <CookieAccept /> -->
  </template>
  
  <script>
  // import the dropdown menu into the nav bar
  import DropDownMenu from "@/components/Navigation/DropDownMenu.vue";  
  
  export default {
    name: "MainHeader",
    components: {
      DropDownMenu, 
    }, 
  };
  </script>
  

  <style scoped>    
  /* how to pin the nav to the top of the page */
  nav {  
    padding-left: 0em;  
    /* padding: 0.3em 0.25em 0.3em 0.25em; */
    font-size: 1.25em;
    background-color: rgb(255, 255, 255);   
    border-right: 1px solid rgb(218, 220, 224);  
    
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
    background-color: rgb(40, 40, 40);
  }  

  .home-link.active-home-link {
  color: #ff5959;
  background: none;  
  }
  .nav-space-at-lower-resolution {
    z-index: 3;
    left: 0; 
    position: absolute;    
  }
  .github-logo-link{
    float: inline-end;
    padding-top: 0.4em;
    padding-right: 0.8em;
    color: #000;
  }

  @media (max-width: 30rem) {
    .github-logo-link{
      display: none;
    }
  }

  /* Additional styles for the active home link */

  
  /*
  nav a.router-link-home-active {
    color: rgb(128, 128, 128);
    background: none;      
  }

  nav a.router-link-home-active:hover {
    color: rgb(12,12,12);
    background: none;
  }  
  */
  
 
 
  
  /*
  .text-shadow{
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    color: rgb(100, 100, 100);    
  }
  */
  </style>
  