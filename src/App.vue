<template>

  <div id="app">    
    
    
    <!-- <the-my-component id="my-component"/> -->
    <the-left-nav id="left-nav"/>   
    <the-mobile-nav id="mobile-nav"/>    
    <app-status />
    <div class="view-container">      
       <router-view/>
    </div>  

    
     
  </div>
</template>


   
 

<script>
import TheLeftNav from '@/components/TheLeftNav'
import TheMobileNav from '@/components/TheMobileNav'
import Status from '@/components/Status.vue'


export default {
  components: {
    TheLeftNav,
    TheMobileNav,
    Status
  }
    
 
    
  
}



</script>


<style lang="sass" scoped>
.view-container
  width: 84vw
  padding: 0em
  margin-left: 14.97vw
  box-sizing: border-box
  minimum-height: 100vh

#mobile-nav
  display: none

@media screen and (max-width: 800px)
  .view-container
    width: 100%
    margin-left: 0
  #left-nav
    display: none
  #mobile-nav
    display: flex






</style>
