<template>
    <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown" style="background-color: white;">Projects</button>           
        <div class="dropdown-content" v-if="isDropdownOpen">
            <router-link to="/projects/cowculator" :class="{ active: $route.path === '/projects/cowculator' }">Cowculator</router-link>   
            <router-link to="/projects/weather" :class="{ active: $route.path === '/projects/weather' }">Custom Weather</router-link>   
            <router-link to="/projects/" :class="{ active: $route.path === '/projects/' }">Project Details</router-link>   
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownMenu",
    data() {
        return {
            isDropdownOpen: true,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
};
</script>

<style>
.dropbtn {
    
    border-radius: 5px;
    padding: 0.5em 0.6em 0.45em 0.6em;
    color: rgb(75, 75, 75);
    
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
    
    min-width: 160px;    
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);    
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 1em 1em;
    text-decoration: none;
    display: block;
    border-radius: 0;
    margin-right: 0;
}

.dropdown-content a:hover:not(.active) {background-color: none;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: none;}

.active {
    background-color: #34B7F1;
    color: none;
}
</style>