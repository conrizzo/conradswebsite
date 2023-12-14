"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[368],{6433:function(e,t,s){s.d(t,{Z:function(){return l}});var i=s(6252);function o(e,t,s,o,n,a){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i.WI)(e.$slots,"aside-content",{},void 0,!0)])}var n={name:"AsideContent"},a=s(3744);const r=(0,a.Z)(n,[["render",o],["__scopeId","data-v-5d61191c"]]);var l=r},7368:function(e,t,s){s.r(t),s.d(t,{default:function(){return B}});var i=s(6252),o=s(3577);const n=e=>((0,i.dD)("data-v-b6f59596"),e=e(),(0,i.Cn)(),e),a={id:"body"},r={class:"main-content custom-background-home-page"},l={style:{background:"rgba(144, 9, 135, 0.2)","border-radius":"15px",margin:"0 auto","max-width":"90%"}},d={class:"title-spacing"},c=n((()=>(0,i._)("div",{class:"under-title-caption"},"Title animations are generated with Rust code compiled into Web Assembly ↑ ",-1))),u={class:"main-text-container"},h=n((()=>(0,i._)("li",null,[(0,i.Uk)(" This is a website project made by "),(0,i._)("a",{class:"home-text-links",href:"https://github.com/conrizzo"},"Conrad")],-1))),m=n((()=>(0,i._)("li",null,[(0,i._)("a",{class:"home-text-links",href:"https://en.wikipedia.org/wiki/Coffee"},"Coffee"),(0,i.Uk)("☕ and enthusiasm helped make this website ")],-1))),g={class:"grid-container"},p={class:"grid-item",style:{"grid-column":"1"}},v={class:"image-container"},f=["src"],k={class:"grid-item"},w={class:"project-area"},_={class:"links-area"},b=n((()=>(0,i._)("span",{class:"project-title"},"Project Links:",-1))),I={class:"routes-area"},C=["innerHTML"],y=n((()=>(0,i._)("br",null,null,-1))),x=n((()=>(0,i._)("p",{class:"aside-text loading"},null,-1))),j={style:{display:"inline-block"}},H=["src"],S=n((()=>(0,i._)("figcaption",{class:"aside-text",style:{display:"block"}},[(0,i._)("i")],-1)));function L(e,t,s,n,L,T){const D=(0,i.up)("router-link"),A=(0,i.up)("ProjectLinks"),W=(0,i.up)("AsideContent");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("main",r,[(0,i._)("div",null,[(0,i._)("div",l,[(0,i._)("h2",d,(0,o.zw)(L.inputStringShuffled),1),c,(0,i._)("div",u,[(0,i._)("ul",null,[h,(0,i._)("li",null,[(0,i.Uk)(" For more specific info about this website please read the "),(0,i.Wm)(D,{class:"home-text-links",to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About")])),_:1}),(0,i.Uk)(" page ")]),m])]),(0,i._)("div",g,[(0,i._)("div",p,[(0,i._)("div",v,[L.isHovered?((0,i.wg)(),(0,i.iD)("img",{key:0,style:{},class:"hover-image",src:L.hoveredImage,alt:"Hover Image"},null,8,f)):(0,i.kq)("",!0)])]),(0,i._)("div",k,[(0,i._)("div",w,[(0,i.Wm)(A,{links:s.links},{default:(0,i.w5)((({links:t})=>[(0,i._)("div",_,[b,(0,i._)("div",I,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t,((t,s)=>((0,i.wg)(),(0,i.j4)(D,{class:(0,o.C_)(["on-hover-projects custom-color",{active:e.$route.path===t.to}]),key:s,to:t.to,onMouseover:e=>T.showImage(t),onMouseleave:T.hideImage},{default:(0,i.w5)((()=>[(0,i._)("span",{innerHTML:t.text},null,8,C),y])),_:2},1032,["to","class","onMouseover","onMouseleave"])))),128))])])])),_:1},8,["links"])])])])])]),(0,i.Wm)(W,{style:{background:"#fff","z-index":"1"}},{"aside-content":(0,i.w5)((()=>[x,(0,i._)("figure",j,[(0,i._)("img",{style:{"max-width":"80%","border-radius":"1em"},src:L.birdDrawing,alt:"Bird Drawing"},null,8,H),S])])),_:1})])])}s(7658);var T=s(5660),D=s.n(T),A=s(6433),W=s(7151),X=s(3544),z={name:"HomeView",components:{AsideContent:A.Z,ProjectLinks:W.Z},props:{links:{type:Array}},data(){return{itemsLength:0,birdDrawing:s(1660),moveTheClouds:!1,i1:null,i2:null,i3:null,clouds:[],coordX:[15,9,2],inputString:"_ Welcome",name:"",inputStringShuffled:"",isHovered:!1,hoveredImage:""}},computed:{projectLinks(){return this.links}},methods:{showImage(e){switch(e.text){case"Cowculator":this.hoveredImage=s(8365),this.isHovered=!0;break;case'Card Game <span style="color: #ff5959;">(New!)</span>':this.hoveredImage=s(55),this.isHovered=!0,console.log(this.hoveredImage);break;case"Cow Food Game":this.hoveredImage=s(7657),this.isHovered=!0,console.log(this.hoveredImage);break;default:this.hoveredImage="",this.isHovered=!1;break}},hideImage(){this.isHovered=!1,this.hoveredImage=""},runRustArrayRandomizer(){(0,X.ZP)().then((()=>{const e=this.name.split(" ");let t=(0,X.DH)(e);t=t.join(" "),this.inputStringShuffled=t}))},addLettersIntoInput(){let e=0;const t=setInterval((()=>{e<this.inputString.length?(this.name+=this.inputString[e],this.runRustArrayRandomizer(),e++):(clearInterval(t),setTimeout((()=>{this.inputStringShuffled="Welcome to Conrad's Website"}),1e3))}),125)},toggleClouds(){!1===this.moveTheClouds&&this.moveClouds(),!0===this.moveTheClouds&&this.stopClouds(),this.moveTheClouds=!this.moveTheClouds},moveClouds(){const e=document.getElementById("cloudOne");let t=this.coordX[0];const s=document.getElementById("cloudTwo");let i=this.coordX[1];const o=document.getElementById("cloudThree");let n=this.coordX[2];window.innerWidth>=800&&(this.i1=setInterval((()=>{t+=.02,this.coordX[0]=t,e.style.marginLeft=`${n}em`,n>90&&(n=-22)}),33),this.i2=setInterval((()=>{i+=.03,this.coordX[1]=i,s.style.marginLeft=`${i}em`,i>90&&(i=-22)}),33),this.i3=setInterval((()=>{n+=.03,this.coordX[2]=n,o.style.marginLeft=`${t}em`,t>90&&(t=-22)}),33),this.clouds.push(this.i1,this.i2,this.i3))},stopClouds(){for(const e of this.clouds)clearInterval(e)}},mounted(){D().highlightAll(),this.addLettersIntoInput()}},M=s(3744);const Z=(0,M.Z)(z,[["render",L],["__scopeId","data-v-b6f59596"]]);var B=Z},55:function(e,t,s){e.exports=s.p+"img/CardGame.e2ee11b3.jpg"},7657:function(e,t,s){e.exports=s.p+"img/CowGame.de772ece.jpg"},8365:function(e,t,s){e.exports=s.p+"img/CowculatorScreen.6fb47aae.jpg"},1660:function(e,t,s){e.exports=s.p+"img/StableDiffusionBird.f51814e1.jpg"}}]);
//# sourceMappingURL=368.453099c3.js.map