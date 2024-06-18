<!-- This page mostly just sets the default values across the whole website, and whether to omit nav bar such as on the cow game -->
<template>
  <header :class="headerClass">
    <!-- create a nav bar on every page-->
    <div v-if="(this.$route.path === '/' || this.$route.path === '/about') && removeTopBanner !== true"
      class="headline center-with-flex" style="position: relative;">

      <p style="max-width: 100%; margin-right: 3rem;">Visit the&nbsp;<router-link class="text-links"
          style="color: #fff;" to="/my-projects"><span style="color: rgb(12, 216, 175);">My Projects</span>
        </router-link>&nbsp;page <span style="color: rgba(255,255,255,0.6);">and click stuff on the screen</span></p>

      <svg @click="removeBanner" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
        fill="none" style="position: absolute; right: 1rem; cursor: pointer;">
        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6 6 18M6 6l12 12">
        </path>
      </svg>
    </div>

    <nav class="nav-menu-class">
      <div style="display: flex; align-items: center;">
        <router-link to="/my-projects" class="only-show-home-svg-at-mobile-size">
          <!-- self made SVG image -->
          <img src="@/images/icons/house.svg" alt="House Icon">
        </router-link>
        <router-link style="padding: 0;" to="/my-projects">
          <div class="header-h2">ConradsWebsite.com</div>
        </router-link>
      </div>

      <div v-if="showNav" class="navigation-menu">
        <ul class="no-bullet" style="list-style-type: none;
            display: flex;
            justify-content: space-between;">
          <li class="list-element-styling">
            <router-link class="about-menu" to="/about">
              About
            </router-link>
          </li>
          <li class="list-element-styling">
            <DropDownMenu class="projects-menu" /> <!--import the dropdown menu into the nav bar-->
          </li>
        </ul>
      </div>

      <div class="small-resolution-h2">
        <router-link to="/UserSignIn">
          Sign In
        </router-link>
      </div>

      <div style="display: flex; align-items: center;">
        <router-link class="hide-sign-in-text-at-low-res" to="/UserSignIn">Sign In</router-link>
        <!--
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
            <span style="font-size: 0.5em; margin-right: 1rem; margin-left: -0.5em;">This websites code</span>
          </a>
        </div>
        -->
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
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'MainHeader',
  components: {
    DropDownMenu
  },
  setup() {
    const route = useRoute();

    const headerClass = ref('header-visible');
    let lastScrollPosition = 0;
    let removeTopBanner = ref(false);

    const checkScroll = () => {
      const currentScrollPosition = window.scrollY;
      // keep header visibile at the top of the page
      if (currentScrollPosition < 90) {
        headerClass.value = 'header-hidden-instant';
      }
      else if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        headerClass.value = 'header-hidden';
      } else if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up
        headerClass.value = 'header-visible';
      }
      lastScrollPosition = currentScrollPosition;
    };

    const removeBanner = () => {
      removeTopBanner.value = true;
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    const showNav = computed(() => {
      // Check if the current route is not the home route
      return route.path !== '/';
    });


    return {
      headerClass,
      removeBanner,
      removeTopBanner,
      showNav
    };
  }
};
</script>

<style scoped>
.list-element-styling {
  display: flex;
  align-items: center;
}

.list-element-styling:hover {
  border-bottom: 2px solid #fff;
  margin-bottom: -2px;
}

.horizontal-align-elements {
  display: flex;
  align-items: center;
}

.header-visible {
  transition: transform 0.5s ease;
}

/* This visibility of header-hidden is not set to hidden to allow the transition effect to work */
.header-hidden {
  /* visibility: hidden; */
  transform: translateY(-100%);
  transition: transform .4s ease;
}

/* Instant change class at the top 90-100px or so to prevent empty background from being seen underneath header */
.header-hidden-instant {
  transition: none;
}

header {
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, .15);
  position: sticky;
  top: 0em;
  z-index: 5;
}

.headline {
  padding-left: 1rem;
  text-transform: uppercase;
  letter-spacing: .125rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  font-size: 1.1rem;
  background: rgb(0, 0, 0);
  color: #fff;
}

.about-menu {
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  padding-right: .75rem;
  /* This is done to fill in all the space so full area is clickable :) */
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 0.32rem;
}

nav a.router-link-exact-active:not(.active):hover {
  color: #ff5959;
}


.about-menu:active {
  color: #ffffff;
}

.projects-menu {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}



.header-h2 {
  font-size: 1em;
  color: rgb(240, 240, 240);
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-bottom: 0;
  border-right: 1px solid rgb(218, 220, 224);
}

.small-resolution-h2 {
  display: none;
}

/* how to pin the nav to the top of the page */
.nav-menu-class {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  padding-left: .5rem;
}

.navigation-menu {
  padding-right: 8.5rem;
}

nav {
  font-size: 1.25em;
  background-color: rgb(24, 26, 27);
  line-height: 1.1;
}

nav a {
  text-decoration: none;
  color: rgb(240, 240, 240);
}

nav a.router-link-exact-active {
  color: #ff5959;
  /* adjusts the active link color of ABOUT */
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
  margin-right: 0.6rem;
  padding-right: 0.6rem;
  font-size: 1em;
  padding-left: 0.5em;
  color: rgb(0, 255, 204);
}

.hide-sign-in-text-at-low-res:hover {
background: rgb(60, 60, 60);
padding-top: 0.5rem;
padding-bottom: .5rem;
border-radius: .25rem;
}

.only-show-home-svg-at-mobile-size {
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
}

.only-show-home-svg-at-mobile-size:is(:hover) {
  background: rgb(60, 60, 60);
  border-radius: 0.25rem;
}

.only-show-home-svg-at-mobile-size:is(:focus, :active) img {
  background: rgb(24, 26, 27);
}

@media (max-width: 45rem) {
  .navigation-menu {
    padding-right: 0rem;
  }

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
    right: 1em;
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