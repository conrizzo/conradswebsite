<template>
<div class="dropdown" @mouseleave="closeDropdown">
    <div class="dropbtn" @click="toggleDropdown">Projects</div>           
       <div class="dropdown-content" v-if="isDropdownOpen">
            <router-link v-for="(item, index) in links" :key="index" :to="item.to" :class="{ active: $route.path === item.to }">
            {{ item.text }}
            </router-link>
       </div>
    </div>
</template>

<script>
export default {
    name: "DropdownMenu",
    data() {
        return {
            isDropdownOpen: true,
            links: [
        { text: 'Cowculator', to: '/projects/cowculator' },
        { text: 'Custom Weather', to: '/projects/weather' },
        { text: 'Interactive Data Table', to: '/projects/datasets' },
        { text: 'Interesting Links', to: '/projects/interestingLinks' },
        { text: 'Feed the cows (game!)', to: '/projects/cowgame' },
        { text: 'Project Descriptions', to: '/projects/' }
      ]
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            if (!this.isDropdownOpen) {
                this.isDropdownOpen = true;
            }
        },
    },
};
</script>

<style>
.dropbtn {    
    /* padding: 0.72em 0.6em 0.72em 0.6em; */
    padding: 0.5em 0.6em 0.5em 0.6em;  
    color:#ffffff;
    background-color: rgb(0, 0, 0);
    font-weight: normal;
    font-size: 1em;
    border: none;    
}

.dropdown {
    position: relative;
    display: inline-block;            
}

.dropdown-content {
    display: none;
    position: absolute;
    margin-left: -0.2em;
    text-align: left;
    padding:0.15em;    
    width: 13em;
    background-color: white;        
    box-shadow: 0px -2px 8px rgba(0,0,0,0.4);    
    z-index: 1;    
}

.dropdown-content a {
    color: rgb(128, 128, 128);
    padding: 0.5em 0.6em 0.5em 0.6em; 
    text-decoration: none;
    display: block;   
    margin-right: 0;    
}
/* #00b3ff; */

.dropdown-content a:hover:not(.active) {background-color: none; color: #000; background-color: rgb(235, 235, 235);}

.dropdown:hover .dropdown-content {display: block; }

.dropdown:hover .dropbtn {background-color: none; cursor: pointer;}



</style>