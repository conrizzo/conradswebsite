
<!-- 
    
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

                { text: 'Cowculator', to: '/projects/cowculator' },
                { text: 'Custom Weather', to: '/projects/weather' },
                { text: 'Coffee Usage', to: '/projects/datasets' },                
                { text: 'Cow Food Game', to: '/projects/cowgame' },
                { text: 'Post Messages', to: '/projects/firebasetest'},
                { text: 'Sorting Algorithms', to: '/projects/sortingalgorithms' },    
                { text: 'Project Descriptions', to: '/projects/' },    
                { text: 'Rust Web Assembly', to: '/projects/rustwebassembly' },    
                { text: 'Various Links', to: '/projects/Links' },                          
                { text: 'Card Game <span style="color: #ff5959;">(New!)</span>', to: '/projects/cards' },   
                { text: 'Store Project', to: '/projects/store' },      
                    
            ]
        },       
    }   
}
</script>