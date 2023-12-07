"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[482],{2628:function(e,t,s){s.d(t,{Z:function(){return r}});var i=s(6252);function o(e,t,s,o,n,a){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i.WI)(e.$slots,"aside-content",{},void 0,!0)])}var n={name:"AsideContent"},a=s(3744);const l=(0,a.Z)(n,[["render",o],["__scopeId","data-v-303bb1c0"]]);var r=l},8482:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var i=s(6252),o=s(3577);const n=e=>((0,i.dD)("data-v-a0730b4c"),e=e(),(0,i.Cn)(),e),a={id:"body",style:{"padding-top":"2.7em"}},l={class:"main-content custom-background-home-page"},r={class:"title-spacing"},d=n((()=>(0,i._)("div",{class:"under-title-caption"},[(0,i.Uk)("Main heading tokens ↑ are generated using "),(0,i._)("a",{class:"home-text-links",href:"https://www.rust-lang.org/"},"Rust"),(0,i.Uk)(" code compiled into "),(0,i._)("a",{class:"home-text-links",href:"https://webassembly.org/"},"Web Assembly")],-1))),c={class:"main-text-container"},u={style:{"text-align":"left",color:"white"},class:"mb-3"},h=n((()=>(0,i._)("li",{style:{"margin-bottom":"1em"}},[(0,i._)("span",{style:{color:"#fff","font-size":"1.25em"}},[(0,i.Uk)(" This is a website project made by "),(0,i._)("a",{class:"home-text-links",href:"https://github.com/conrizzo"},[(0,i._)("b",null,"Conrad")])])],-1))),m={style:{"margin-bottom":"1em"}},g={style:{color:"#fff","font-size":"1.25em"}},p=n((()=>(0,i._)("li",null,[(0,i._)("span",{style:{color:"#fff","font-size":"1.25em"}},[(0,i._)("a",{class:"home-text-links",href:"https://en.wikipedia.org/wiki/Coffee"},"Coffee"),(0,i.Uk)("☕ and enthusiasm helped make this website ")])],-1))),f={class:"grid-container"},v={class:"grid-item"},k={class:"project-area"},b={class:"links-area"},w=n((()=>(0,i._)("span",{style:{color:"white","font-size":"1.8em"}}," Project Links: ",-1))),_={class:"route-styling"},y=["innerHTML"],I=n((()=>(0,i._)("br",null,null,-1))),C={class:"grid-item"},x={class:"image-container"},j=["src"],H=n((()=>(0,i._)("p",{class:"aside-text loading"},null,-1))),S={style:{display:"inline-block"}},L=["src"],T=n((()=>(0,i._)("figcaption",{class:"aside-text",style:{display:"block"}},[(0,i._)("i")],-1)));function z(e,t,s,n,z,D){const A=(0,i.up)("router-link"),W=(0,i.up)("ProjectLinks"),M=(0,i.up)("AsideContent");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("main",l,[(0,i._)("div",null,[(0,i._)("h2",r,(0,o.zw)(z.inputStringShuffled),1),d,(0,i._)("div",c,[(0,i._)("ul",u,[h,(0,i._)("li",m,[(0,i._)("span",g,[(0,i.Uk)(" For more specific info about this website please read the "),(0,i.Wm)(A,{class:"home-text-links",to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About")])),_:1}),(0,i.Uk)(" page ")])]),p])]),(0,i._)("div",f,[(0,i._)("div",v,[(0,i._)("div",k,[(0,i.Wm)(W,{links:s.links},{default:(0,i.w5)((({links:t})=>[(0,i._)("div",b,[w,(0,i._)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t,((t,s)=>((0,i.wg)(),(0,i.j4)(A,{class:(0,o.C_)(["on-hover-projects custom-color",{active:e.$route.path===t.to}]),key:s,to:t.to,onMouseover:e=>D.showImage(t),onMouseleave:D.hideImage},{default:(0,i.w5)((()=>[(0,i._)("span",{innerHTML:t.text},null,8,y),I])),_:2},1032,["to","class","onMouseover","onMouseleave"])))),128))])])])),_:1},8,["links"])])]),(0,i._)("div",C,[(0,i._)("div",x,[z.isHovered?((0,i.wg)(),(0,i.iD)("img",{key:0,style:{},class:"hover-image",src:z.hoveredImage,alt:"Hover Image"},null,8,j)):(0,i.kq)("",!0)])])])]),(0,i.Wm)(M,{style:{background:"#fff","z-index":"1"}},{"aside-content":(0,i.w5)((()=>[H,(0,i._)("figure",S,[(0,i._)("img",{style:{"max-width":"80%","border-radius":"1em"},src:z.birdDrawing,alt:"Bird Drawing"},null,8,L),T])])),_:1})])])}s(7658);var D=s(5660),A=s.n(D),W=s(2628),M=s(2240),U=s(3544),X={name:"HomeView",components:{AsideContent:W.Z,ProjectLinks:M.Z},props:{links:{type:Array}},data(){return{itemsLength:0,birdDrawing:s(1660),moveTheClouds:!1,i1:null,i2:null,i3:null,clouds:[],coordX:[15,9,2],inputString:"Welcome",name:"",inputStringShuffled:"",isHovered:!1,hoveredImage:""}},computed:{projectLinks(){return this.links}},methods:{showImage(e){switch(e.text){case"Cowculator":this.hoveredImage=s(8365),this.isHovered=!0;break;case'Card Game <span style="color: #ff5959;">(New!)</span>':this.hoveredImage=s(55),this.isHovered=!0,console.log(this.hoveredImage);break;case"The Cow Game":this.hoveredImage=s(7657),this.isHovered=!0,console.log(this.hoveredImage);break;default:this.hoveredImage="",this.isHovered=!1;break}},hideImage(){this.isHovered=!1,this.hoveredImage=""},runRustArrayRandomizer(){(0,U.ZP)().then((()=>{const e=this.name.split(" ");let t=(0,U.DH)(e);t=t.join(" "),this.inputStringShuffled=t}))},addLettersIntoInput(){let e=0;const t=setInterval((()=>{e<this.inputString.length?(this.name+=this.inputString[e],this.runRustArrayRandomizer(),e++):(clearInterval(t),setTimeout((()=>{this.inputStringShuffled="Welcome to Conrad's Website"}),1e3))}),125)},toggleClouds(){!1===this.moveTheClouds&&this.moveClouds(),!0===this.moveTheClouds&&this.stopClouds(),this.moveTheClouds=!this.moveTheClouds},moveClouds(){const e=document.getElementById("cloudOne");let t=this.coordX[0];const s=document.getElementById("cloudTwo");let i=this.coordX[1];const o=document.getElementById("cloudThree");let n=this.coordX[2];window.innerWidth>=800&&(this.i1=setInterval((()=>{t+=.02,this.coordX[0]=t,e.style.marginLeft=`${n}em`,n>90&&(n=-22)}),33),this.i2=setInterval((()=>{i+=.03,this.coordX[1]=i,s.style.marginLeft=`${i}em`,i>90&&(i=-22)}),33),this.i3=setInterval((()=>{n+=.03,this.coordX[2]=n,o.style.marginLeft=`${t}em`,t>90&&(t=-22)}),33),this.clouds.push(this.i1,this.i2,this.i3))},stopClouds(){for(const e of this.clouds)clearInterval(e)}},mounted(){A().highlightAll(),this.addLettersIntoInput()}},Z=s(3744);const B=(0,Z.Z)(X,[["render",z],["__scopeId","data-v-a0730b4c"]]);var R=B},55:function(e,t,s){e.exports=s.p+"img/CardGame.e2ee11b3.jpg"},7657:function(e,t,s){e.exports=s.p+"img/CowGame.de772ece.jpg"},8365:function(e,t,s){e.exports=s.p+"img/CowculatorScreen.6fb47aae.jpg"},1660:function(e,t,s){e.exports=s.p+"img/StableDiffusionBird.f51814e1.jpg"}}]);
//# sourceMappingURL=482.9e74df16.js.map