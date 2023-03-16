<template>
    <h1> Projects </h1>
    <div v-for="project in projects" :key="project.id">
    <h2>{{ project.title }}</h2>
    </div>
  
</template>

<script>
export default {
    data(){
        return {
            projects: [
                { title: 'Cowculator', id: 1, details: 'lorem'},
                { title: 'item 2', id: 2, details: 'lorem'},
                { title: 'item 3', id: 3, details: 'lorem'},

            
        ]
    
    }
    }
}
</script>

<style>

</style>