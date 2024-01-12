<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
  <header>
    <!-- create a nav bar on every page-->
    <nav class="nav-menu-class">
      <div style="display: flex; align-items: center;">
        <router-link to="/" class="only-show-home-svg-at-mobile-size">
          <!-- self made SVG image -->
          <svg style="height: 3rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
            <!-- Left roof -->
            <line x1="10" y1="50" x2="50" y2="10" stroke="rgb(0, 255, 204)" stroke-width="4" />
            <!-- Right roof -->
            <line x1="90" y1="50" x2="50" y2="10" stroke="rgb(0, 255, 204)" stroke-width="4" />
            <!-- House body -->
            <line x1="20" y1="80" x2="80" y2="80" stroke="rgb(0, 255, 204)" stroke-width="4" />
            <line x1="20" y1="40" x2="20" y2="80" stroke="rgb(0, 255, 204)" stroke-width="4" />
            <line x1="80" y1="40" x2="80" y2="80" stroke="rgb(0, 255, 204)" stroke-width="4" />
          </svg>
        </router-link>
        <router-link style="padding: 0;" to="/">
          <h2 class="header-h2">ConradsWebsite.com</h2>
        </router-link>
      </div>

      <div class="navigation-menu">

        <router-link class="about-link-styling about-menu" to="/about">
          About
        </router-link>
        <!--import the dropdown menu into the nav bar-->
        <DropDownMenu class="projects-menu" />

      </div>
      <div class="small-resolution-h2">
        <router-link to="/projects/login">
          Sign In
        </router-link>
      </div>

      <div style="display: flex; align-items: center;">
        <router-link class="hide-sign-in-text-at-low-res" to="/projects/login">Sign In</router-link>
        <div>
          <div class="header-logo-container">
            <a class="github-logo-link" href="https://github.com/conrizzo/conradswebsite">
              <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32">
                <path fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg>
            </a>
          </div>
          <a class="text-under-github-logo" href="https://github.com/conrizzo/conradswebsite">
            <span style="font-size: 0.5em; margin-right: 0.5em; margin-left: -0.5em;">This websites code</span>
          </a>
        </div>
      </div>

    </nav>

  </header>
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

    header {
      box-shadow: 0px 3px 3px 0px rgba(0,0,0,.15);
      position: sticky;
      top: 0em;
      z-index: 5;
    }

    .about-menu:hover {
      outline: 2px solid rgb(255, 89, 89);
    }

    .projects-menu {
      box-sizing: border-box;
      padding-left: 0.45em;
    }

    .projects-menu:hover {
      outline: 2px solid rgb(255, 89, 89);
    }

    .header-h2 {
      font-size: 0.8em;
      color: rgb(128, 128, 128);
      padding-left: 0.5em;
      padding-right: 0.5em;
      margin-bottom: 0;
      border-right: 1px solid rgb(218, 220, 224);
    }

    .small-resolution-h2 {
      display: none;
    }

    .about-link-styling {
      padding: 0.5em 0.25em 0.5em 0.5em;
    }

    /* how to pin the nav to the top of the page */
    .nav-menu-class {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3em;
      padding-left: .5rem;
    }

    .navigation-menu {}

    nav {
      font-size: 1.25em;
      background-color: rgb(255, 255, 255);
      line-height: 1.1;
    }

    nav a {
      text-decoration: none;
      color: rgb(128, 128, 128);
    }

    nav a:hover {
      color: rgb(12, 12, 12);
      text-decoration: none;
      /*background-color: rgb(235, 235, 235);*/
    }

    nav a.router-link-exact-active {
      color: #ff5959;
      background-color: rgba(0, 0, 0, 0);
    }

    .home-link {
      padding-left: 0.5em;
    }

    .home-link.active-home-link {
      color: #ff5959;
      background: none;
    }

    .nav-menu-class {
      z-index: 3;
    }

    .github-logo-link {
      margin-right: 0em;
      color: #000;
    }

    .header-logo-container {
      margin-top: 0.25em;
      margin-left: 1em;
      max-width: 32px;
      max-height: 32px;
    }

    .hide-sign-in-text-at-low-res {
      border-right: 1px solid rgb(218, 220, 224);
      margin-right: 0.5em;
      padding-right: 0.4em;
      font-size: 1em;
      padding-left: 0.5em;
    }

    .only-show-home-svg-at-mobile-size {
      margin-bottom: 0.25rem;
      margin-right: 0.25rem;

    }

    @media (max-width: 37rem) {
      .header-h2 {
        display: none;
      }

      .hide-sign-in-text-at-low-res {
        display: none;
      }

      .only-show-home-svg-at-mobile-size {
        margin-bottom: 0.25rem;
        margin-right: 0.25rem;
        margin-left: 0rem;
      }


    }

    @media (max-width: 37rem) {
      .github-logo-link {
        display: none;
      }

      .text-under-github-logo {
        display: none;
      }

      .nav-menu-class {
        padding-left: .5rem;
        justify-content: start;
      }

      .small-resolution-h2 {
        position: absolute;
        right: 0.5em;
        display: inline;
        color: rgb(128, 128, 128);
      }

      .small-font-website-name {
        font-size: 1.2em;
        color: rgb(128, 128, 128);
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
  