<template>
    <h1> Projects </h1>
    <p class="paragraph-text">This currently shows an array of projects below.</p>
    <div v-for="project in projects" :key="project.id">
        
        <router-link :to="{ name: 'ProjectDetailsView', params: {title: project.title, details: project.details, id: project.id}}" class="project-link">
           <h2> {{ project.title }} </h2>

               
               
        </router-link>
    </div>

    
</template>

<script>
export default {
    data(){
        return {
            projects: [
                { title: 'Cowculator', id: 1, details: 'Do Cowculations with math and moos!'},
                { title: 'item 2', id: 2, details: 'list page 2'},
                { title: 'item 3', id: 3, details: 'list page 3'},

            
        ]
    
    }
    }
}
</script>

<style>

</style>