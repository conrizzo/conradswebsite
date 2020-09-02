<template>
  <div id="app">
    <the-left-nav id="left-nav"/>
    <the-mobile-nav id="mobile-nav"/>    
    <div class="view-container">
       <router-view/>
    </div>  
  </div>
</template>
<script>
import TheLeftNav from '@/components/TheLeftNav'
import TheMobileNav from '@/components/TheMobileNav'
export default {
  components: {
    TheLeftNav,
    TheMobileNav
  }
}
</script>

<style lang="sass" scoped>
.view-container
  width: 90vw
  padding: 0em
  margin-left: 9.97vw
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
