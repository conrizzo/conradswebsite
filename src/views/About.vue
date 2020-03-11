

<template>

  <div class="about-card">
    <div class="card-title">
      
      <div class="title-text-content">
        <p>About me:</p>
        <h2>Conrad Lundberg </h2>


      </div>
    </div>
  <div class="card-content">
    
    <p>This website was started March 1st, 2020 and the hosting service is <a href="https://pages.github.com/">Github Pages</a>. 
       It is being built from scratch in <a href="https://vuejs.org/">Vue.js</a><br> 
       Multiple pages link with Vue.js Router and all the page resizing works at a basic level.
       Now working to connect in a custom Vue app to do some basic things with inputs and code.</p> 

    <hr>

    <p>Updating the actual webpage takes a few minutes since the 'npm run build' needs to generate a new 'dist' file
       and convert the code to a running Vue.js build. This 'dist' folder then needs to be pushed into a branch that Github Pages 
       hosts the Vue.js build in, and then the custom web domain <a href="conradswebsite.com">conradswebsite.com</a> needs to be selected.
       This domain is already redirected for Githubs servers to use with the proper addresses.    
    </p>

    

    <p>For reference the necessary commands to do this are:<br>
       1. npm run build<br>
       2. git add dist -f<br>
       3. git commit dist -m 'gh-pages'<br>
       4. git subtree push --prefix dist origin gh-pages<br>
    
    
    
    <table>      
      <tr>
        <th>0 Row</th>
        <th>Amphibious Mammal</th>
        <th>Mammal</th>
        
      </tr>
      <tr>
        <td>R1</td>
        <td>Walrus</td>
        <td>Squirrel</td>
        
      </tr>
      <tr>
        <td>R2</td>
        <td>Seal of approval</td>
        <td>Parrot</td>
       
      </tr>
      <tr>
        <td>R3</td>
        <td>Platypus</td>
        <td>Horse</td>
       
      </tr>
      <tr>
        <td>R4</td>
        <td>Otter</td>
        <td>Cat</td>
      
      </tr>
    </table>

    <p>More features are being connected together! 
    </p>
   
  
 



  </div>
   <footer>
          <p>Text to use for the footer.</p>
     </footer>

  </div>
</template>


<style lang="sass" scoped>
.about-card
  background: #333
  padding: 3em
  border-radius: 7px
  color: white  
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 7px
    .avatar
      border: 1px solid rgba(255,255,255,0.4)
      border-radius: 50%
      margin: 0 30px
  .title-text-content
    p      
      margin-bottom: 0
      margin-left: 1.55em
      color: rgb(210,210,210)
    h2            
      margin-left: 1em
      margin-top: 0.8em  


.card-content p
  line-height: 1.5
  margin: 25px auto 

table  
  width: 100%
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td
    border: 1px solid white
    border-top: none
    padding: 10px
    text-align: center
    &:first-of-type
      border-left: none
    &:nth-of-type(2)
      border-right: none
</style>

<style lang="css" scoped>
  a {
    color: #6699FF;
    text-decoration: none;
  }
  /*
  a:visited {
    color: #9966FF;
    text-decoration: none;
  }
  */
  a:hover, a:active, a:focus {
    color:#66ff66;
    text-decoration: none;
  }
</style>