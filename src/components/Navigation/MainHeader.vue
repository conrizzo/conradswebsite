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
  