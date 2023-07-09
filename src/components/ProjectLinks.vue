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
                { text: 'Project Descriptions', to: '/projects/' },
                
            ]
        },
       
    }
   
}
</script>