<template>
    <div class="dropdown" > <!-- @mouseleave="closeDropdown" -->
      <div class="dropbtn unselectable" @mouseover="openDropdown" @click="toggleDropdown">Projects</div>
        <div class="dropdown-content" v-if="isDropdownOpen">
            <ProjectLinks :links="links">
                <template v-slot="{ links }">            
                
                    <router-link v-for="(item, index) in links" :key="index" :to="item.to"
                    :class="{ active: $route.path === item.to }">
                    {{ item.text }}<br>
                    </router-link>            

                </template>
            </ProjectLinks>
        </div>
        </div>
    </template>
<script>
import ProjectLinks from '@/components/ProjectLinks.vue'

export default {
    name: "DropdownMenu",
    components: {
        ProjectLinks
    },
    props: {
        links: Array,
    },
    data() {
        return {
            isDropdownOpen: false, // Initialize as closed
            openTimeout: null, // Variable to store the timeout            
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            if (!this.isDropdownOpen) {
                this.isDropdownOpen = false;
            }
        },
        openDropdown() {
            clearTimeout(this.openTimeout); // Clear any existing timeout
                this.openTimeout = setTimeout(() => {
                    this.isDropdownOpen = true;
                }, 250); // Set a new 250ms-second timeout
                // set to false after opening
                this.isDropdownOpen = false;
        }
    },
};
</script>

<style>
.dropbtn {    
    /* padding: 0.72em 0.6em 0.72em 0.6em; */
    padding: 0.5em 0.6em 0.5em 0.6em;  
    color: rgb(128, 128, 128);
    background-color: rgb(255, 255, 255);
    font-weight: normal;
    font-size: 1em;
    border: none;     
    border-bottom-right-radius: 1em;    
}

.dropdown {
    position: relative;
    display: inline-block;         
}

.dropdown-content {    
    display: none; /* this removes it when not over it */
    position: absolute;
    margin-left: -0.2em;
    text-align: left;
    padding:0.15em;    
    width: 10.4em;
    background-color: white;        
    box-shadow: 0px -2px 8px rgba(0,0,0,0.4);   
     
}

.dropdown-content a {
    color: rgb(128, 128, 128);
    padding: 0.5em 0.6em 0.5em 0.6em; 
    text-decoration: none;
    display: block;   
    margin-right: 0;           
}

/* #00b3ff; */
.dropdown-content a:hover:not(.active) {
    background-color: none; 
    color: #000; 
    background-color: rgb(235, 235, 235);       
}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: none; cursor: pointer; color: #000;}



</style>