<!-- This component is exclusively the menu that drops down in the header -->

<template>
    <div class="dropdown" > <!-- @mouseleave="closeDropdown" -->
      <div class="dropbtn unselectable"  @click="toggleDropdown">Projects</div>
        <div class="dropdown-content" :class="{ 'active': isDropdownOpen }">
            <ProjectLinks :links="links">
                <template v-slot="{ links }">            
                
                    <router-link v-for="(item, index) in links" :key="index" :to="item.to"
                    :class="{ active: $route.path === item.to }">
                    <span v-html='item.text'></span><br>
                    </router-link>            

                </template>
            </ProjectLinks>
        </div>
        </div>
    </template>
<script>
import ProjectLinks from '@/components/Navigation/ProjectLinks.vue'

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
    mounted() {
            window.addEventListener('click', this.closeDropdown);
        },
    beforeUnmount() {
        window.removeEventListener('click', this.closeDropdown);
    },
    methods: {
        
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown(event) {
        if (!this.$el.contains(event.target)) {
            this.isDropdownOpen = false;
        }
        },
        openDropdown() {
            clearTimeout(this.openTimeout); // Clear any existing timeout
                this.openTimeout = setTimeout(() => {
                    this.isDropdownOpen = true;
                }, 150); 
                // set to false after opening
                this.isDropdownOpen = false;
        }
    },
};
</script>

<style>

.dropbtn {    
    /* padding: 0.72em 0.6em 0.72em 0.6em; */
    padding: 0.5em 0.5em 0.5em 0em;  
    color: rgb(128, 128, 128); 
    background-color: rgb(255, 255, 255);
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
    display: none; /* this removes it when not over it */
    position: absolute;
    margin-left: -3.5em;
    text-align: left;
    padding:0.15em;    
    width: 10.4em;
    background-color: white;        
    box-shadow: 0px -2px 8px rgba(0,0,0,0.4);      
   
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

.dropdown .dropdown-content {
  display: none;
}

.dropdown .dropdown-content.active {
  display: block;
}

/*
.dropdown:hover .dropdown-content {display: block;}
*/
.dropdown:hover .dropbtn {background-color: none; cursor: pointer; color: #000;}
</style>