<!-- This component is exclusively the menu that drops down in the header -->

<template>
    <div class="dropdown"> <!-- @mouseleave="closeDropdown" -->
        <div class="dropbtn unselectable" @click="toggleDropdown">
            <div class="horizontal-align-elements">
                Projects
                <svg style="width: 32px; height: 32px; transition: transform 0.25s;" viewBox="0 0 32 32" fill="none"
                    stroke="#ffffff" stroke-width="2" :class="{ 'rotate': isRotated }">
                    <polyline points="8 12 16 20 24 12" />
                </svg>
            </div>
        </div>
        <transition name="fade">
            <div v-if="isDropdownOpen" class="dropdown-content">
                <div v-for="(item, index) in links" :key="index">
                    <router-link :to="item.to" :class="{ active: $route.path === item.to }">
                        <span v-html='item.text'></span><br>
                    </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

import ProjectLinks from '@/components/Navigation/ProjectLinks.ts'

export default {
    name: "DropdownMenu",
    components: {

    },

    data() {
        return {
            links: ProjectLinks, // make the project links available to the template dynamically

            isDropdownOpen: false, // Initialize as closed
            openTimeout: null, // Variable to store the timeout    

            isRotated: false,
        };
    },
    mounted() {
        window.addEventListener('click', this.closeDropdown);
        window.addEventListener('scroll', this.closeDropdownOnScroll);
    },

    beforeUnmount() {
        window.removeEventListener('click', this.closeDropdown);
        window.removeEventListener('scroll', this.closeDropdownOnScroll);
    },
    methods: {
        // if the dropdown is closed, then open it with a tiny delay
        // otherwise no added extra delay here
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
            this.isRotated = !this.isRotated;
        },

        // function the event listeners target if click outside the menu
        closeDropdown(event) {
            // if event not in the dropdown menu, then close it
            if (!this.$el.contains(event.target)) {
                this.isDropdownOpen = false;

            }
        },

        // closes when it is open and the user scrolls
        closeDropdownOnScroll() {
            this.isDropdownOpen = false;
            this.isRotated = false;
        },
    },
};
</script>

<style scoped>
.dropbtn {
    /* padding: 0.72em 0.6em 0.72em 0.6em; */

    padding-left: .75rem;
    padding-right: .25rem;
    color: rgb(240, 240, 240);
    background-color: rgb(24, 26, 27);
    font-weight: normal;
    font-size: 1em;
    border: none;
    /*    
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.33);  ### this optional is the shadow for the text
    */
}

/* Is this a bug in css or vue js that this only works this way? It can work here or in the parent component 
This makes sense I guess, whatever value is set in the child css the parent tag can use it.
.projects-menu {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*/

.dropdown {
    position: relative;
    display: inline-block;
    z-index: 5;
}

.dropdown-content {
    /* this removes it when not over it */
    position: absolute;
    margin-left: -2.1em;
    text-align: left;
    padding: 0.15em;
    margin-top: 0rem;
    width: 10.4em;
    background-color: rgb(33, 35, 36);    
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 1);
    transition: all 0.35s ease-in-out;
    border-radius: .33rem;
    border: 1px solid rgb(70, 70, 70);
}

.fade-leave-to {
    opacity: 0;
}

.dropdown-content a {
    border-bottom: 1px solid rgb(70, 70, 70);
    color: rgb(255, 255, 255);
    padding: 0.5em 0.6em 0.5em 0.6em;
    text-decoration: none;
    display: block;
    margin-right: 0;
    border-radius: none;
}

.dropdown-content div:first-child a {
    border-top-right-radius: .33rem;
    border-top-left-radius: .33rem;
}

.dropdown-content div:last-child a {
    border-bottom: none;
    border-bottom-right-radius: .33rem;
    border-bottom-left-radius: .33rem;
}

/* Can make this the page color for the respective page if I set all pages to follow a page color value */
nav a.router-link-exact-active {
    color: #ff5959;
}

/* #00b3ff; */
.dropdown-content a:hover:not(.active) {
    background-color: none;    
    background-color: rgb(70, 70, 70);
}

.dropdown .dropdown-content.active {
    display: block;
}

/*
.dropdown:hover .dropdown-content {display: block;}
*/

.dropdown .dropbtn:hover {
    background-color: none;
    cursor: pointer;
    border-bottom: 2px solid #fff;
    margin-bottom: -2px;
}

.horizontal-align-elements {
    display: flex;
    align-items: center;
}

.rotate {
    transition: transform 0.25s;
    transform: rotate(180deg) !important;
    transform-origin: center;
}
</style>