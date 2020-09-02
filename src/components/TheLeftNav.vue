<template>  
  <section class="nav">
    
    <div class="nav-logo">
      
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <router-link to="/">
          <li class="nav-list-item">
            Home      
          </li>
        </router-link>    
        <router-link to="/project">
          <li class="nav-list-item">
            Project
          </li>       
        </router-link> 
                
        
      </ul>
    </div>
    
  </section>
  
</template>

<script>

export default {
  
  
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  left: 0
  top: 0
  bottom: 0
  background: #333
  display: flex
  flex-direction: column
  align-items: center
  width: 11vw
  .nav-logo
    margin: 23% auto
  .nav-menu
    color: white
    width: 80%
.nav-menu-list
  list-style: none  
  padding: 0
  .nav-list-item
    background-color: #696969
    padding: 10px 0px
    text-align: center
    text-decoration: none
    margin: 7px auto
    cursor: pointer
    transition: background 100ms ease-in-out
    
    border-radius: 10px 10px;
    &:hover
      background-color: #808080

</style>
<style lang="css" scoped>
 /* This removes the text decoration since the router defaults to a hyperlink */
 a {
   text-decoration: none;
   color: #ffffff;   
 }
 
</style>
