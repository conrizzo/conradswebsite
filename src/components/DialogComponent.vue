   <template>
      <div class="third-main-area">
        
        <div class="third-area-grid-container">
         <h2>GET THINGS FIXED</h2>
          <div v-for="(message, index) in messages" :key="index" class="grid-item-messages">      
            {{ message }} 
            

             <div>
               <span style="font-size: 0.5em; float: inline-end; margin-right: 0.5em;">Person#1</span>  
             </div>    
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'DialogComponent',
    data(){
        return{

        }
    }

} 
</script>






<style scoped>

.third-main-area {
  /*
  background: linear-gradient(0deg, rgb(226, 254, 255), 1%, rgba(228, 253, 255, 0.7), 15%, rgba(81, 209, 255, 0.7) 30%, rgba(81, 209, 255, 0.7) 60%, rgb(53, 77, 255) 90%);
  */
  background-image: url('../images/blue_sky2.jpg');
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-size: 100% 100%;

  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
}

.third-area-grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* Two equal-width columns */
  grid-gap: 0em;
  grid-row-gap: 0em;
  width: 40rem;
  background: rgb(25, 25, 25, 0.1);
  padding: 1em;
  border-radius: 1em;
}

.grid-item-messages {
  color: #ffffff;
  
  border-radius: 0.5em;
  position: relative;
  font-size: 1.5em;
  text-align: left;  

  margin-bottom: 0.5em;  
  padding-left: 0.5em;  
}

.grid-item-messages:nth-child(even) {  
  
  margin-right: 20%;
  
  background: rgb(255, 88, 88);
}

.grid-item-messages:last-child {
  background: rgb(0, 238, 255);
}

.grid-item-messages:nth-child(odd) {  
  margin-left: 20%;
  background: rgb(78, 255, 134);
}

@media only screen and (max-width: 50rem) {


.grid-item-messages {
  font-size: 1em;
}
}
</style>