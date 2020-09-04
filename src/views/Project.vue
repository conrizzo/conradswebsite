


<template>
  
  <div class="about-card">
     
    <div class="card-title">      
      <div class="title-text-content">        
        <h2>Project Page</h2>  
      </div>
    </div>
    <div class="card-content">      
      <p>
        This is the project page. Going to write a connected Vue app with code here. Setting up some basic interactions now for practice.
      </p> 
      
      <span>Message is: {{ message }}</span>
      <br>
      <input type="text" v-model="message" placeholder="">
      <button @click="status = !status">change status</button> 
      {{status}}

      <div>
        <button v-on:click="counter += 1">Add 1</button>
        <br>
        <button v-on:click="counter += 2">Add 2</button>
        <br>
        <button v-on:click="counter += counter**1.2">current total<sup>1.25</sup></button>
        <br>
        <button v-on:click="counter += (message **2)">if you enter a number in the box string converted to integer with Number() but was parseInt()<sup>2</sup></button>
        <br>
        <button v-on:click="counter = 0, message = 0">reset</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </div>
      
      
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>

        
    </div> 
    
  
    
  </div>
  
  
</template>

<!-- working ! amazing! -->

<script>
export default {
  data: function () {
    
      return {
          status: false,
          counter: 0,
          message: Number(),
          
      }
    },
  methods: {
    say: function (message) {
      alert(message)
    }
  }
    
    
  }
</script>







<style lang="sass" scoped>
.about-card
  background: #333
  padding: 3em
  border-radius: 0px
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
  }
  */
  a:hover, a:active, a:focus {
    color:#66ff66;
  }
</style>



