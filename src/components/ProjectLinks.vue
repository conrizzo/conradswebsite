
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
                { text: 'Interactive Data Table', to: '/projects/datasets' },
                { text: 'Interesting Links', to: '/projects/interestingLinks' },
                { text: 'Feed the cows (game!)', to: '/projects/cowgame' },
                { text: 'Backend Firebase App', to: '/projects/firebasetest'},
                { text: 'Project Descriptions', to: '/projects/' },                
                
            ]
        },       
    }   
}
</script>