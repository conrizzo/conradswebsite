



<!-- npm run build --- runs this but need to
 https://stackoverflow.com/questions/42308879/how-to-solve-npm-error-npm-err-code-elifecycle

 1. npm run build
2. git add dist -f
3. git commit dist -m 'gh-pages'
4. git subtree push --prefix dist origin gh-pages

 -->

<template>

  <div class="about-card">
    <div class="card-title">
      
      <div class="title-text-content">
        <p>About me:</p>
        <h2>Conrad Lundberg </h2>


      </div>
    </div>
  <div class="card-content">

    <p>September 2nd 2020 now starting to really customize this</p>
    
    <p>This website project was started March 1st, 2020 and is hosted via <a href="https://pages.github.com/">Github Pages</a>. 
       It is being built from scratch in the <a href="https://vuejs.org/">Vue.js</a> JavaScript framework.<br> 
       Pages link with Vue.js router and all the page resizing works at a basic level.
       Now working to connect in a custom Vue app to do some basic things with inputs + code.</p> 

    <hr>

    <p>To update the actual webpage it takes a few minutes since the 'npm run build' needs to generate a new 'dist' file
       and convert the code to a running Vue.js build. This 'dist' folder then needs to be pushed into a branch that Github Pages 
       hosts the Vue.js build in. The custom web domain <a href="https://conradswebsite.com">conradswebsite.com</a> needs to be selected.
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
  padding: 4em
  margin-right: 0em
  
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
  color: #DCDCDC

table  
  width: 100%
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td
    border: 1px solid #DCDCDC
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