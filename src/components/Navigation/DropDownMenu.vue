<!-- This component is exclusively the menu that drops down in the header -->

<template>
    <div class="dropdown"> <!-- @mouseleave="closeDropdown" -->
        <div class="dropbtn unselectable" @click="toggleDropdown">
            Projects
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
            this.isDropdownOpen = !this.isDropdownOpen ;         
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
        },       
    },
};
</script>

<style scoped>
.dropbtn {
    /* padding: 0.72em 0.6em 0.72em 0.6em; */
    padding: 0.5em 0.5em 0.5em 0em;
    color: rgb(240, 240, 240);
    background-color: rgb(24, 26, 27);
    font-weight: normal;
    font-size: 1em;
    border: none;
    /*    
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.33);  ### this optional is the shadow for the text
    */
}

.dropdown {
    position: relative;
    display: inline-block;
    z-index: 5;  
}

.dropdown-content {
    /* this removes it when not over it */
    position: absolute;
    margin-left: -3.5em;
    text-align: left;
    padding: 0.15em;
    width: 10.4em;
    background-color: rgba(255,255,255,1);
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.35s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}

.dropdown-content a {
    color: rgb(12, 12, 12);
    padding: 0.5em 0.6em 0.5em 0.6em;
    text-decoration: none;
    display: block;
    margin-right: 0;
}

/* Can make this the page color for the respective page if I set all pages to follow a page color value */
nav a.router-link-exact-active {
    color: #ff5959;
}

/* #00b3ff; */
.dropdown-content a:hover:not(.active) {
    background-color: none;
    color: #000;
    background-color: rgb(235, 235, 235);    
}

.dropdown .dropdown-content.active {
    display: block;
}

/*
.dropdown:hover .dropdown-content {display: block;}
*/

.dropdown:hover .dropbtn {
    background-color: none;
    cursor: pointer;
    color: #ff5959;
}
</style>