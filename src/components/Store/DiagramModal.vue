<template>
    <!-- click.self means only this item will activate this function-->
   <div class="backdrop" @click.self="closeModal">
     <div class="aboutDiagram">
       <button class="close" @click.self="closeModal"></button>
      
       <h2>Diagram of how this project works</h2>
       <div style="text-align: left; padding: 1em;">              
            <p><b>CheckOut.vue</b> is the main part of this application.</p>
            <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store">
            Component and TypeScript source code on GitHub</a><br>
            <a class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreView.vue">Store page
            view</a><br>
            <a class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreCheckOutView.vue">Checkout
            page view</a>
       </div>
       <div style="padding: 0.5em;">
         <img src="@/images/store/project_diagram.svg" alt="Diagram of how this project works" style="max-width: 100%; max-height: 100%;">
    </div>   
 
    <p>Diagram made using <a class="text-links" href='https://app.diagrams.net/'>
                https://app.diagrams.net/
     </a></p>
     </div>
   </div>
 </template>
 
 <script>
 //import ProjectDiagramSVG from "@/images/store/project_diagram.svg";
 export default {
   props: ["title", "header", "text", "imagePath", "url"],
   methods: {
     closeModal() {
       this.$emit("close");
     },
   },
 };
 </script>
 
 
 <!-- scoped applies to only this component -->
 <style scoped>
 h1 {
   color: rgb(105, 105, 198);
   border: none;
   padding: 0;
 }
 
 .aboutDiagram {   
   width:calc(100% - 40%);
   margin-left: 20%;
   margin-top: 8vh;
   background: rgb(255, 255, 255);
   border-radius: 2em;
   position: relative;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
   
 }
 
 .backdrop {
   top: 0;
   position: fixed;
   width: 100%;
   height: 100%;
   
   /* bring this in front of all other elements */
   z-index: 1000;
 }
 
 .text-links {
   color: #42b883;  
 }
 
 ul{
   text-align: left; 
   padding-left: 4em;
   font-size: 1.3em;
   list-style: none;
 }
 
 
 .about-modal-text {
   display: inline-block;
   max-width: 500px;
   text-align: left;
   padding: 1em;
   font-size: 1em;
   line-height: 1.5;
   padding-bottom: 1em; 
   
 }
 
 h2 {
   color: rgb(16, 16, 16);   
   padding: 1em;
   
   padding-bottom: 0em;
   font-size: 2.25em;
   text-align: left;
 }
 
 /* CSS FOR MODAL "X" Close button*/
 .close {
   position: absolute;
   top: 0em;
   right: 0em;
   cursor: pointer;
   width: 15px;
   height: 15px;
 
   border: none;
   width: 40px;
   height: 40px;
   background-color: #42b883;
   border-top-right-radius: 10px;
   /* matches the modal top right corner */
   border-bottom-left-radius: 10px;
   /* matches the modal top right corner */
 }
 
 .close:hover {
   background-color: #ff5959;
 }
 
 .close:before,
 .close:after {
   position: absolute;
   left: 15px;
   content: " ";
   height: 28px;
   width: 2px;
   background-color: #000000;
   top: 0.5em;
   left: 1.4em;
 }
 .close:before {
   transform: rotate(45deg);
 }
 .close:after {
   transform: rotate(-45deg);
 }
 li + li {
   margin-top: 0.5em;
 }
 
 @media only screen and (max-width: 50rem) {
   h2 {
     font-size: 1.25em;
   }

   .aboutDiagram {  
    width:calc(100% - 4%);
    margin-left: 2%;
   }
 }
 </style>