<template>
    <div class="dropdown" @mouseleave="closeDropdown">
        <button class="dropbtn" @click="toggleDropdown" style="background-color: white;">Projects</button>           
        <div class="dropdown-content" v-if="isDropdownOpen">
            <router-link to="/projects/cowculator" :class="{ active: $route.path === '/projects/cowculator' }">Cowculator</router-link>   
            <router-link to="/projects/weather" :class="{ active: $route.path === '/projects/weather' }">Custom Weather</router-link>
            <router-link to="/projects/datasets" :class="{ active: $route.path === '/projects/datasets' }">Interactive Data Table</router-link>   
            <router-link to="/projects/" :class="{ active: $route.path === '/projects/' }">Project Descriptions</router-link>   
               
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
    
    border-radius: 5px;
    /* padding: 0.72em 0.6em 0.72em 0.6em; */
    padding: 1.05em 0.6em 1em 0.6em;
    color: rgb(75, 75, 75);
    font-weight: 600;
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
    box-shadow: 0px -2px 8px rgba(0,0,0,0.4);    
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