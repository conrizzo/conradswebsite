<template>
  <section class="nav">
    <div class="nav-logo">
      <!-- put image logo here -->
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item">About me</li>
        <li class="nav-list-item">More Stuff</li>
      </ul>
   
    </div>
  </section>
</template>



<script>
export default{
    
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
      width: 50%
      text-align: center
      background-color: #696969
      padding: 10px 0
      cursor: pointer
      transition: background 100ms ease-in-out
      &:hover
        background: #808080
      
</style>