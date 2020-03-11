<template>
  <section class="nav">
    <div class="nav-logo">
      <!-- put image logo here -->
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
    <div id="app">
    </div>
  </section>
</template>



<script>


export default{
  name: 'app',
  components:{
    
  }
    
}
</script>

<style lang="sass" scoped>
.nav
    background: #333
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    .nav-logo
        margin: 20px auto
    .nav-menu
        width: 100%
.nav-menu-list
    list-style: none
    padding: 0
    display: flex
    margin: 0
    color: white
    li
      
      text-align: center
      background-color: #696969
      padding: 10px 0
      cursor: pointer
      transition: background 100ms ease-in-out
      &:hover
        background: #808080
      
</style>

<style lang="css" scoped>
 /* This removes the text decoration since the router defaults to a hyperlink */
 a {
   text-decoration: none;
   color: #ffffff;   
   width: 50%;
 }
 
 li:hover,
 li.router-link-active,
 li.router-link-exact-active {          
   
   cursor: pointer;
 }
</style>