"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[83],{1318:function(e,t,o){var i=o(5656),n=o(1400),s=o(6244),r=function(e){return function(t,o,r){var l,a=i(t),c=s(a),u=n(r,c);if(e&&o!=o){while(c>u)if(l=a[u++],l!=l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===o)return e||u||0;return!e&&-1}};e.exports={includes:r(!0),indexOf:r(!1)}},3658:function(e,t,o){var i=o(9781),n=o(3157),s=TypeError,r=Object.getOwnPropertyDescriptor,l=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=l?function(e,t){if(n(e)&&!r(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,o){var i=o(2597),n=o(3887),s=o(1236),r=o(3070);e.exports=function(e,t,o){for(var l=n(t),a=r.f,c=s.f,u=0;u<l.length;u++){var d=l[u];i(e,d)||o&&i(o,d)||a(e,d,c(t,d))}}},7207:function(e){var t=TypeError,o=9007199254740991;e.exports=function(e){if(e>o)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,o){var i=o(7854),n=o(1236).f,s=o(8880),r=o(8052),l=o(3072),a=o(9920),c=o(4705);e.exports=function(e,t){var o,u,d,h,f,g,w=e.target,p=e.global,b=e.stat;if(u=p?i:b?i[w]||l(w,{}):(i[w]||{}).prototype,u)for(d in t){if(f=t[d],e.dontCallGetSet?(g=n(u,d),h=g&&g.value):h=u[d],o=c(p?d:w+(b?".":"#")+d,e.forced),!o&&void 0!==h){if(typeof f==typeof h)continue;a(f,h)}(e.sham||h&&h.sham)&&s(f,"sham",!0),r(u,d,f,e)}}},8361:function(e,t,o){var i=o(1702),n=o(7293),s=o(4326),r=Object,l=i("".split);e.exports=n((function(){return!r("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?l(e,""):r(e)}:r},3157:function(e,t,o){var i=o(4326);e.exports=Array.isArray||function(e){return"Array"==i(e)}},4705:function(e,t,o){var i=o(7293),n=o(614),s=/#|\.prototype\./,r=function(e,t){var o=a[l(e)];return o==u||o!=c&&(n(t)?i(t):!!t)},l=r.normalize=function(e){return String(e).replace(s,".").toLowerCase()},a=r.data={},c=r.NATIVE="N",u=r.POLYFILL="P";e.exports=r},6244:function(e,t,o){var i=o(7466);e.exports=function(e){return i(e.length)}},4758:function(e){var t=Math.ceil,o=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?o:t)(i)}},1236:function(e,t,o){var i=o(9781),n=o(6916),s=o(5296),r=o(9114),l=o(5656),a=o(4948),c=o(2597),u=o(4664),d=Object.getOwnPropertyDescriptor;t.f=i?d:function(e,t){if(e=l(e),t=a(t),u)try{return d(e,t)}catch(o){}if(c(e,t))return r(!n(s.f,e,t),e[t])}},8006:function(e,t,o){var i=o(6324),n=o(748),s=n.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,o){var i=o(1702),n=o(2597),s=o(5656),r=o(1318).indexOf,l=o(3501),a=i([].push);e.exports=function(e,t){var o,i=s(e),c=0,u=[];for(o in i)!n(l,o)&&n(i,o)&&a(u,o);while(t.length>c)n(i,o=t[c++])&&(~r(u,o)||a(u,o));return u}},5296:function(e,t){var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,n=i&&!o.call({1:2},1);t.f=n?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},3887:function(e,t,o){var i=o(5005),n=o(1702),s=o(8006),r=o(5181),l=o(9670),a=n([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(l(e)),o=r.f;return o?a(t,o(e)):t}},1400:function(e,t,o){var i=o(9303),n=Math.max,s=Math.min;e.exports=function(e,t){var o=i(e);return o<0?n(o+t,0):s(o,t)}},5656:function(e,t,o){var i=o(8361),n=o(4488);e.exports=function(e){return i(n(e))}},9303:function(e,t,o){var i=o(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},7466:function(e,t,o){var i=o(9303),n=Math.min;e.exports=function(e){return e>0?n(i(e),9007199254740991):0}},7658:function(e,t,o){var i=o(2109),n=o(7908),s=o(6244),r=o(3658),l=o(7207),a=o(7293),c=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=c||!u();i({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=n(this),o=s(t),i=arguments.length;l(o+i);for(var a=0;a<i;a++)t[o]=arguments[a],o++;return r(t,o),o}})},1083:function(e,t,o){o.r(t),o.d(t,{default:function(){return ae}});var i=o(6252),n=o(3577);const s=e=>((0,i.dD)("data-v-ad6528b0"),e=e(),(0,i.Cn)(),e),r=s((()=>(0,i._)("nav",{style:{"background-color":"black",height:"2.3em"}},null,-1))),l={class:"my-page"},a=s((()=>(0,i._)("h2",{style:{"z-index":"4",position:"absolute",background:"#000",color:"#04ff00",float:"left",top:"40vh"}},"Sorry! This page is not designed for mobile/touchscreen!",-1))),c={key:0},u=s((()=>(0,i._)("h1",{class:"unselectable cow-game-text",style:{"font-size":"1.5em",top:"0em",float:"left",position:"absolute"}},[(0,i.Uk)(" This is still under construction!"),(0,i._)("br")],-1))),d=s((()=>(0,i._)("p",{class:"unselectable cow-game-text",style:{width:"25em",color:"#fff",top:"8em",float:"left",position:"absolute"}},[(0,i._)("b",null,"How to play:"),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)("Don't hit the cow food on the electric fence or the fireball! You can only lose if you run out of time or are moving something! "),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)("For example: If moving the Onion Rings and the fireball hits the Peanut butter, you lose! Pay attention to where all the cowfood is at all times! ")],-1))),h={class:"unselectable cow-game-text",style:{width:"25em",color:"white",top:"25em",position:"absolute"}},f={style:{color:"greenyellow","font-size":"2em"}},g=s((()=>(0,i._)("br",null,null,-1))),w=s((()=>(0,i._)("br",null,null,-1))),p={style:{"z-index":"1",position:"absolute",right:"3em",top:"2.9em"},class:"unselectable"},b={key:0},m={key:1},v={class:"unselectable"},C={style:{color:"#ff5959"}},y=s((()=>(0,i._)("br",null,null,-1))),O={style:{color:"#ff5959"}},j=s((()=>(0,i._)("br",null,null,-1))),k=(0,i.uE)('<div style="margin-top:0em;" data-v-ad6528b0></div><div class="vertical-line-three" data-v-ad6528b0></div><div class="vertical-line-two" data-v-ad6528b0></div><div class="vertical-line" data-v-ad6528b0></div><div class="horizontal-line" data-v-ad6528b0></div><div class="vertical-line-four" data-v-ad6528b0></div><div class="vertical-line-five" data-v-ad6528b0></div><div class="spinning-rectangle" data-v-ad6528b0></div><div class="parent" data-v-ad6528b0><div class="vertical-rectangle" data-v-ad6528b0></div></div>',9),F={style:{"margin-left":"27em","padding-top":"54vh"}},M={key:0},P={style:{"border-radius":"1em",padding:"0.5em","background-color":"#ffd755","margin-right":"3em","margin-left":"3em",position:"absolute",top:"3em",left:"1em","font-size":"3em",color:"rgb(255, 255, 255)"},class:"unselectable"},x=s((()=>(0,i._)("br",null,null,-1))),_=s((()=>(0,i._)("br",null,null,-1))),D=s((()=>(0,i._)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/uA8dAnlD51o?autoplay=1&mute=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1))),R={class:"farm unselectable"},S=s((()=>(0,i._)("h1",{style:{"padding-top":"1em"}},"Cow Pasture",-1))),B=s((()=>(0,i._)("p",{class:"paragraph-text",style:{"padding-top":"1em",color:"#fff","text-align":"center"}},[(0,i.Uk)("This is a cow pasture filled with hungry cows! (Danger: Some cows may be hangry!)"),(0,i._)("br"),(0,i.Uk)(" The Cows need their food delivered!"),(0,i._)("br"),(0,i.Uk)("Deliver the correct food to make the cows happy!")],-1))),T={key:0,style:{"font-size":"2em","padding-right":"5em",color:"rgb(179, 255, 0)"}},z={key:1,style:{"font-size":"2em",color:"rgb(179, 255, 0)","padding-left":"5em"}},Y={key:2,style:{"font-size":"2em",color:"rgb(179, 255, 0)","padding-left":"10em"}};function A(e,t,o,s,A,I){const E=(0,i.up)("CowFood"),G=(0,i.up)("CowMovingBall"),L=(0,i.up)("AboutCowGame");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("div",l,[a,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cowFoodObjects,((t,o)=>((0,i.wg)(),(0,i.j4)(E,{style:{zIndex:2},key:o,label:t.label,initialPosition:t.position,onRectUpdated:t=>e.updateCowFoodRect(o,t),ref_for:!0,ref:"foodObjects"},null,8,["label","initialPosition","onRectUpdated"])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.bouncingBallObjects,((t,o)=>((0,i.wg)(),(0,i.j4)(G,{key:o,"initial-position":t.position,speed:t.speed,setMovementDirection:t.setMovementDirection,onRectUpdated:t=>e.updateBallRect(o,t),ref_for:!0,ref:"ballObjects"},null,8,["initial-position","speed","setMovementDirection","onRectUpdated"])))),128)),e.showAboutCowGame?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(L,{onClose:e.toggleAboutCowGame},null,8,["onClose"])])):(0,i.kq)("",!0),u,d,(0,i._)("p",h,[(0,i.Uk)(" Once you move the cow food, a timer starts: "),(0,i._)("b",f,(0,n.zw)(e.timeLeft),1),g,w,(0,i.Uk)("Don't run out of time before the cows get the food or they will be hangry cows! MOOOO! ")]),(0,i._)("div",p,[e.isThereACollision?((0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("h1",null,(0,n.zw)(e.collisionMessage),1)])):(0,i.kq)("",!0),e.collisionCowPasture?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("h1",null,(0,n.zw)(e.cowPastureCollisionMessage),1)])):(0,i.kq)("",!0)]),(0,i._)("div",v,[e.hitCowFence&&!e.peanutButterHitCowFence?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,n.j5)([{left:e.cowFoodObjects[0].rect?.left+"px",top:e.cowFoodObjects[0].rect?.top+"px"},{"text-align":"left","z-index":"2",position:"absolute","margin-left":"10em","font-size":"0.8em"}]),class:"unselectable"},[(0,i._)("h1",C,[(0,i.Uk)("The "+(0,n.zw)(e.cowFoodObjects[0].label)+" collided with the electric fence or fireball! ",1),y,(0,i.Uk)("The cows are sad! You are a bad cow farmer!")])],4)):e.hitCowFence&&e.peanutButterHitCowFence?((0,i.wg)(),(0,i.iD)("div",{key:1,style:(0,n.j5)([{left:e.cowFoodObjects[1].rect?.left+"px",top:e.cowFoodObjects[1].rect?.top+"px"},{"text-align":"left","z-index":"2",position:"absolute","margin-left":"10em","font-size":"0.8em"}]),class:"unselectable"},[(0,i._)("h1",O,[(0,i.Uk)("The "+(0,n.zw)(e.cowFoodObjects[1].label)+" collided with the electric fence or fireball! ",1),j,(0,i.Uk)("The cows are sad! You are a bad cow farmer!")])],4)):e.onionRingsHitCowFence?((0,i.wg)(),(0,i.iD)("div",{key:2,style:(0,n.j5)([{left:e.cowFoodObjects[2].rect?.left+"px",top:e.cowFoodObjects[2].rect?.top+"px"},{"text-align":"left","z-index":"2",position:"absolute","margin-left":"10em","font-size":"0.8em"}])},[(0,i._)("h1",null,"It's okay for the "+(0,n.zw)(e.cowFoodObjects[2].label)+" to hit the electric fence or fireball!",1)],4)):(0,i.kq)("",!0)]),k,(0,i._)("div",F,[e.winningMessage?((0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("span",P,[(0,i.Uk)((0,n.zw)(e.customMessage),1),x,_,(0,i.Uk)(" "+(0,n.zw)(e.youTubeCowVideoLink)+" ",1),D])])):(0,i.kq)("",!0),(0,i._)("div",R,[S,B,e.showCowPastureMessage?((0,i.wg)(),(0,i.iD)("div",T,(0,n.zw)(e.cowPastureMessage),1)):(0,i.kq)("",!0),!1===e.showCowPastureMessage?((0,i.wg)(),(0,i.iD)("div",z,(0,n.zw)(e.cowPastureMessage),1)):(0,i.kq)("",!0),!1===e.showCowPastureMessage?((0,i.wg)(),(0,i.iD)("div",Y," Moo!")):(0,i.kq)("",!0)])]),(0,i._)("button",{style:{"background-color":"#ff5959",position:"absolute",bottom:"1vh",right:"1em"},class:"button-35",onClick:t[0]||(t[0]=(...t)=>e.toggleAboutCowGame&&e.toggleAboutCowGame(...t))},"About")])],64)}o(7658);const I={class:"unselectable",style:{"pointer-events":"none"}};function E(e,t,o,s,r,l){return(0,i.wg)(),(0,i.iD)("div",{ref:"cowFood",class:(0,n.C_)([{"peanut-butter":"Peanut Butter"===e.label&&!e.dragColorChangeCSS,"moving-peanut-butter":"Peanut Butter"===e.label&&e.dragColorChangeCSS,"onion-rings":"Onion Rings"===e.label&&!e.dragColorChangeCSS,"moving-onion-rings":"Onion Rings"===e.label&&e.dragColorChangeCSS,"moving-grass":"Grass"===e.label&&e.dragColorChangeCSS},"movable-object unselectable"]),style:(0,n.j5)({top:e.position.top+"px",left:e.position.left+"px"}),onMousedown:t[0]||(t[0]=(...t)=>e.startDrag&&e.startDrag(...t))},[(0,i._)("b",I,(0,n.zw)(e.label)+" ",1)],38)}var G=(0,i.aZ)({name:"CowFood",props:{label:{type:String,required:!0},initialPosition:{type:Object,required:!0},rect:{default:()=>({top:0,left:0,bottom:0,right:0,width:0,height:0})}},data(){return{isMouseDown:!1,offsetX:0,offsetY:0,position:{...this.initialPosition},alertShown:!1,dragColorChangeCSS:!1}},methods:{startDrag(e){this.isMouseDown=!0;const t=e.target.getBoundingClientRect();this.offsetX=e.clientX-t.left-window.scrollX,this.offsetY=e.clientY-t.top-window.scrollY,this.dragColorChangeCSS=!0},stopDrag(){this.isMouseDown=!1,this.dragColorChangeCSS=!1},drag(e){if(this.isMouseDown){this.position.top=e.clientY-this.offsetY,this.position.left=e.clientX-this.offsetX;const t=this.$refs.cowFood,o=t.getBoundingClientRect();this.$emit("rect-updated",o)}}},mounted(){document.addEventListener("mouseup",this.stopDrag),document.addEventListener("mousemove",this.drag)},beforeUnmount(){document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("mousemove",this.drag)}}),L=o(3744);const q=(0,L.Z)(G,[["render",E],["__scopeId","data-v-11d8b5f4"]]);var X=q,H=o(9963);const U={class:"aboutCowGame"},$=(0,i.uE)('<h2 data-v-593e7142>This is a game project!</h2><ul data-v-593e7142><li data-v-593e7142>This was started June 19th 2023, and is built from scratch for fun and to learn!</li><li data-v-593e7142>It&#39;s made with Vue.js, TypeScript, JavaScript, etc.</li><li data-v-593e7142>It&#39;s not finished yet, so the exact mechanics of how the game works and what the final result will be are a surprise!</li><li data-v-593e7142>Building a game with interactions and multiple objects being generated + tracking positions is challenging! </li><li data-v-593e7142>Not designed for mobile and touch devices, but can implement this later!</li></ul><p class="about-modal-text" data-v-593e7142>Code for main page: <a class="text-links" href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/CowGameView.vue" data-v-593e7142>My GitHub</a><br data-v-593e7142>Components that are imported: <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/CowGame" data-v-593e7142>in the cowgame folder.</a></p><p class="about-modal-text" data-v-593e7142> One nice fix to this was changing: </p><pre class="language-JavaScript line-numbers" data-v-593e7142>        <code data-v-593e7142>       \n        this.offsetX = event.clientX - rect.left;\n        this.offsetY = event.clientY - rect.top;\n\n        //to:\n\n        this.offsetX = event.clientX - rect.left - window.scrollX;\n        this.offsetY = event.clientY - rect.top - window.scrollY;\n        </code>\n        </pre><p class="about-modal-text" data-v-593e7142> This fixed the issue of the cursor jumping after scrolling the page vertically when clicking the cowFoodObjects. It covers the x-coordinate as well should the page scroll horizontally. </p>',6);function N(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",{class:"backdrop",onClick:t[1]||(t[1]=(0,H.iM)(((...e)=>r.closeModal&&r.closeModal(...e)),["self"]))},[(0,i._)("div",U,[(0,i._)("button",{class:"close",onClick:t[0]||(t[0]=(0,H.iM)(((...e)=>r.closeModal&&r.closeModal(...e)),["self"]))}),$])])}var Z=o(5660),V=o.n(Z),W={props:[],methods:{closeModal(){this.$emit("close")}},mounted(){V().highlightAll()}};const J=(0,L.Z)(W,[["render",N],["__scopeId","data-v-593e7142"]]);var K=J;const Q=e=>((0,i.dD)("data-v-67a67306"),e=e(),(0,i.Cn)(),e),ee=Q((()=>(0,i._)("span",{class:"ball-text"},null,-1))),te=[ee];function oe(e,t,o,s,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",{ref:"ballElement",class:"ball",style:(0,n.j5)({left:e.x+"px",top:e.y+"px",zIndex:2})},te,4)])}var ie=(0,i.aZ)({name:"CowMovingBall",props:{initialPosition:{default:()=>({top:0,left:0})},speed:{type:Number,default:5,required:!1},setMovementDirection:{default:()=>({directionX:0,directionY:0}),required:!1},rect:{default:()=>({top:0,left:0,bottom:0,right:0,width:0,height:0})}},data(){return{x:this.initialPosition.left,y:this.initialPosition.top,directionX:this.setMovementDirection.directionX,directionY:this.setMovementDirection.directionY}},mounted(){this.moveBall(),setInterval((()=>{const e=Math.floor(6*Math.random())-3;this.directionX=e;const t=Math.floor(6*Math.random())-3;this.directionY=t}),3e3)},methods:{moveBall(){setInterval((()=>{this.x+=this.speed*this.directionX,this.y+=this.speed*this.directionY,(this.x>=window.innerWidth-160||this.x<=0)&&(this.directionX*=-1),(this.y>=window.innerHeight-160||this.y<=0)&&(this.directionY*=-1);const e=this.$refs.ballElement;if(e){const t=e.getBoundingClientRect();this.$emit("rect-updated",t)}}),10)}}});const ne=(0,L.Z)(ie,[["render",oe],["__scopeId","data-v-67a67306"]]);var se=ne,re=(0,i.aZ)({name:"CowGameView",components:{CowFood:X,AboutCowGame:K,CowMovingBall:se},data(){return{winningMessage:!1,customMessage:"",youTubeCowVideoLink:"Your reward for winning is a happy cow video!",isThereACollision:!1,collisionMessage:"",collisionCowPasture:!1,cowPastureCollisionMessage:"",onionLeavesCowPasture:!1,showAboutCowGame:!1,isBlocked:!1,hitCowFence:!1,onionRingsHitCowFence:!1,peanutButterHitCowFence:!1,timeLeft:30,cowPastureMessage:"Moo!",showCowPastureMessage:!1,bouncingBallObjects:[{id:"ball1",position:{top:50,left:350},setMovementDirection:{directionX:3,directionY:0},speed:2},{id:"ball2",position:{top:250,left:350},setMovementDirection:{directionX:3,directionY:0},speed:2},{id:"ball3",position:{top:450,left:350},setMovementDirection:{directionX:3,directionY:0},speed:2}],cowFoodObjects:[{id:"grass",label:"Grass",position:{top:500,left:10},inPasture:!1},{id:"peanut-butter",label:"Peanut Butter",position:{top:500,left:120},inPasture:!1},{id:"onion-rings",label:"Onion Rings",position:{top:500,left:230},inPasture:!1}]}},mounted(){this.updateRects(),setInterval((()=>{this.showCowPastureMessage=!0,setTimeout((()=>{this.showCowPastureMessage=!1}),1500)}),3e3)},methods:{startGameTimerCountDown(){let e=this.timeLeft,t=setInterval((()=>{e--,this.timeLeft=e,this.winningMessage&&clearInterval(t),0===e&&!1===this.winningMessage&&(clearInterval(t),this.customMessage="Time's up! You are a bad cow farmer! Try again!",setTimeout((()=>{this.refreshPage()}),3e3))}),1e3)},toggleAboutCowGame(){this.showAboutCowGame=!this.showAboutCowGame},updateBallRect(e,t){this.bouncingBallObjects[e].rect=t},cowFenceHit(){this.hitCowFence=!0,setTimeout((()=>{this.hitCowFence=!1,this.refreshPage()}),1500)},areGrassAndPeanutButterInPasture(){const e=this.cowFoodObjects[0].inPasture,t=this.cowFoodObjects[1].inPasture,o=this.cowFoodObjects[2].inPasture;e&&t&&!o&&!1===this.hitCowFence&&(this.winningMessage=!0,this.timeLeft>=15?this.customMessage="You WIN! You are a PROFESSIONAL FARMER! It only took you "+(30-this.timeLeft)+" seconds! The Cows love "+this.cowFoodObjects[1].label+" and "+this.cowFoodObjects[0].label+"!":this.timeLeft>=5?this.customMessage="You WIN! You are a RESPECTABLE FARMER! It only took you "+(30-this.timeLeft)+" seconds! The Cows love "+this.cowFoodObjects[1].label+" and "+this.cowFoodObjects[0].label+"!":this.customMessage="You WIN! You are a GREENHORN FARMER, It took you "+(30-this.timeLeft)+" seconds! The cows love "+this.cowFoodObjects[1].label+" and "+this.cowFoodObjects[0].label+"!")},updateRects(){const e=this.$refs.foodObjects;e.forEach(((e,t)=>{this.cowFoodObjects[t].rect||(this.cowFoodObjects[t].rect=e.$el.getBoundingClientRect())}))},refreshPage(){location.reload()},checkCollision(e,t){return e.left-1<t.right&&e.right+1>t.left&&e.top-1<t.bottom&&e.bottom+1>t.top},checkCollisions(){for(let e=0;e<this.cowFoodObjects.length;e++)for(let t=e+1;t<this.cowFoodObjects.length;t++){if(this.checkCollision(this.cowFoodObjects[e].rect,this.cowFoodObjects[t].rect))return this.isThereACollision=!0,this.collisionMessage=`${this.cowFoodObjects[e].label} and ${this.cowFoodObjects[t].label} are colliding!`,!0;this.isThereACollision=!1}return!1},checkGreenAreaCollisions(){const e=document.querySelector(".farm"),t=e.getBoundingClientRect(),o=document.querySelector(".vertical-line"),i=o.getBoundingClientRect(),n=document.querySelector(".horizontal-line"),s=n.getBoundingClientRect(),r=document.querySelector(".vertical-line-two"),l=r.getBoundingClientRect(),a=document.querySelector(".vertical-line-three"),c=a.getBoundingClientRect(),u=document.querySelector(".vertical-line-four"),d=u.getBoundingClientRect(),h=document.querySelector(".vertical-line-five"),f=h.getBoundingClientRect(),g=document.querySelector(".spinning-rectangle"),w=g.getBoundingClientRect(),p=document.querySelector(".vertical-rectangle"),b=p.getBoundingClientRect(),m=[];for(let v=0;v<this.cowFoodObjects.length;v++){const e=this.cowFoodObjects[v].rect;if(e&&this.checkCollision(e,t)?(this.cowFoodObjects[v].inPasture||(this.collisionCowPasture=!0,this.cowPastureCollisionMessage=`${this.cowFoodObjects[v].label} has entered the cow pasture!`,this.cowFoodObjects[v].inPasture=!0),m.push(this.cowFoodObjects[v].label)):this.cowFoodObjects[v].inPasture&&(this.cowFoodObjects[v].inPasture=!1),e&&(this.checkCollision(e,i)||this.checkCollision(e,s)||this.checkCollision(e,l)||this.checkCollision(e,c)||this.checkCollision(e,d)||this.checkCollision(e,f)||this.checkCollision(e,w)||this.checkCollision(e,b)||this.checkCollision(e,this.bouncingBallObjects[0].rect)||this.checkCollision(e,this.bouncingBallObjects[1].rect)||this.checkCollision(e,this.bouncingBallObjects[2].rect)))return this.isThereACollision=!0,this.collisionMessage=`${this.cowFoodObjects[v].label} is colliding with the electric fence or fireball!`,"Onion Rings"===this.cowFoodObjects[v].label?(this.onionRingsHitCowFence=!0,setTimeout((()=>{this.onionRingsHitCowFence=!1}),2e3)):"Peanut Butter"===this.cowFoodObjects[v].label?(this.peanutButterHitCowFence=!0,this.cowFenceHit(),setTimeout((()=>{this.peanutButterHitCowFence=!1}),2e3)):this.cowFenceHit(),!0}if(this.cowFoodObjects[2].inPasture&&!1===this.cowFoodObjects[1].inPasture&&!1===this.cowFoodObjects[0].inPasture)this.collisionCowPasture=!0,this.cowPastureCollisionMessage=`${m.join(", ")} are Toxic to cows! Get them out of the cow pasture!`;else if(m.length>0)if(this.collisionCowPasture=!0,2===m.length){const e=m.slice(0,-1).join(", "),t=m[m.length-1];this.cowPastureCollisionMessage=`${e} and ${t} are in the cow pasture!`}else if(m.length>2){const e=m.slice(0,-1).join(", "),t=m[m.length-1];this.cowPastureCollisionMessage=`${e}, and ${t} are in the cow pasture!`}else this.cowPastureCollisionMessage=`${m[0]} is in the cow pasture!`;else this.collisionCowPasture=!1,this.cowPastureCollisionMessage=""},updateCowFoodRect(e,t){30===this.timeLeft&&this.startGameTimerCountDown(),this.winningMessage||(this.cowFoodObjects[e].rect=t,this.checkCollisions(),this.checkGreenAreaCollisions(),this.areGrassAndPeanutButterInPasture())}}});const le=(0,L.Z)(re,[["render",A],["__scopeId","data-v-ad6528b0"]]);var ae=le}}]);
//# sourceMappingURL=83.180ce697.js.map