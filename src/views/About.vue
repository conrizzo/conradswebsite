

<template>

  <div class="about-card">
    <div class="card-title">
      
      <div class="title-text-content">
        <p>About me:</p>
        <h2>Conrad Lundberg </h2>


      </div>
    </div>
  <div class="card-content">
    
    <p>This website project was added to <a href="https://pages.github.com/">Github Pages</a> March 1st, 2020. It is being built from scratch in <a href="https://vuejs.org/">Vue.js</a></p>
    
    
    
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
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptates totam praesentium, qui, et eveniet iure repellendus quisquam aliquam consectetur 
    quibusdam animi repudiandae rerum laboriosam est perspiciatis dolores officia quaerat sequi.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptates totam praesentium, qui, et eveniet iure repellendus quisquam aliquam consectetur 
    quibusdam animi repudiandae rerum laboriosam est perspiciatis dolores officia quaerat sequi.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptates totam praesentium, qui, et eveniet iure repellendus quisquam aliquam consectetur 
    quibusdam animi repudiandae rerum laboriosam est perspiciatis dolores officia quaerat sequi.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptates totam praesentium, qui, et eveniet iure repellendus quisquam aliquam consectetur 
    quibusdam animi repudiandae rerum laboriosam est perspiciatis dolores officia quaerat sequi.</p>
   



  </div>
  

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
  a:visited {
    color: #9966FF;
  }
  a:hover, a:active, a:focus {
    color:#9900FF;
  }
</style>