
<!-- 
    
    2024 - this is deprecated and will be removed in the future. Now using Typescript File for this

    The function of this file is to hold all the links data!
     Anything changed in here will be reflected in all the pages that use this component.
     These pages are the DropdownMenu.vue and the HomeView.vue page, but it could easily be in
     as many other pages as needed and the data that is changed here will automatically update to all of them. 

-->
<template>
<slot :links="links"></slot>
</template>

<script>
export default {
    name: 'ProjectLinks',
    props: {
        links: {
            type: Array,
            required: true,
            default: () => [
                { text: 'Store', to: '/projects/store/store' },   
                { text: 'Cowculator', to: '/projects/cowculator' },
                { text: 'Weather', to: '/projects/weather' },
                { text: 'Coffee Data', to: '/projects/datasets' },                
                { text: 'Game', to: '/projects/cowgame' },
                // { text: 'Login Page', to: '/projects/firebasetest'},
                { text: 'Sorting Algorithms', to: '/projects/sortingalgorithms' },    
                // { text: 'Project Descriptions', to: '/projects/' },    
                // { text: 'Rust Web Assembly', to: '/projects/rustwebassembly' },    
                // { text: 'Various Links', to: '/projects/Links' },                          
                // { text: 'Card Game <span style="color: #ff5959;">(New)</span>', to: '/projects/cards' },     
                // { text: 'Gallery', to: '/projects/gallery' },  
                
                
                
                    
            ]
        },       
    }   
}
</script>