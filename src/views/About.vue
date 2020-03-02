<template>
  <div class="about-card">
    <div class="card-title">
      <!--<img src="https://media.giphy.com/media/3o751SMzZ5TjLWInoQ/giphy.gif" alt="Rad Dog" width="460" height="345">-->
      <div class="title-text-content">
        <p>About me</p>
        <h2> Conrad Lundberg </h2>


      </div>
    </div>
  <div class="card-content">
    <p>March 1st 2020 - This is a new website project being built from scratch in Vue.js</p>
    <table>
      <tr>
        <th>Row 0</th>
        <th>Type of amphibious mammal</th>
      </tr>
      <tr>
        <td>Row 1</td>
        <td>Walrus</td>
      </tr>
      <tr>
        <td>Row 2</td>
        <td>Seal</td>
      </tr>
      <tr>
        <td>Row 3</td>
        <td>Platypus</td>
      </tr>
      <tr>
        <td>Row 4</td>
        <td>Otter</td>
      </tr>
    </table>
    <p>This website is in the process of being updated and connected together. 
    It runs on <a href="https://pages.github.com/">github pages</a> in <a href="https://vuejs.org/">Vue.js</a></p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Voluptates totam praesentium, qui, et eveniet iure repellendus quisquam aliquam consectetur 
    quibusdam animi repudiandae rerum laboriosam est perspiciatis dolores officia quaerat sequi.</p>



  </div>
  

  </div>
</template>


<style lang="sass" scoped>
.about-card
  background: #333
  padding: 2em
  border-radius: 10px
  color: #ffffff
  
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px
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
  margin: 30px auto
  

table
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