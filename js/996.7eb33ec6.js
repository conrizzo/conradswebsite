"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[996],{1072:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(6252),s=i(3577);const r={class:"second-main-area"},a={class:"second-area-grid-container"},o={class:"grid-item-coffee"},l=["src"];function c(e,t,i,c,d,h){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",{class:(0,s.C_)(["hidden",{show:d.isContentVisible}]),ref:"content"},[(0,n._)("div",a,[(0,n._)("div",o,[(0,n._)("img",{class:"coffee-image",src:i.contentImage,alt:"Image"},null,8,l)]),(0,n._)("div",{class:"grid-item-text",style:(0,s.j5)({background:i.bgColor})},[(0,n._)("h2",null,(0,s.zw)(i.titleText),1),(0,n._)("p",null,(0,s.zw)(i.contentText),1)],4)])],2)])}var d=i(5797),h=(i.p,{name:"CoffeeGridContent",props:{titleText:{type:String,default:"This is the default text for the title."},contentText:{type:String,default:"This is the default text for the prop, anything can be added here in the parent component."},contentImage:{type:String,default:d},bgColor:{type:String,default:"rgba(0, 0, 0, 0.5)"}},data(){return{coffee_image:d,isContentVisible:!1,isTextVisible:!1}},mounted(){const e={root:null,rootMargin:"0px",threshold:.5};this.observer=new IntersectionObserver(this.handleIntersection,e),this.observer.observe(this.$refs.content)},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&e.target===this.$refs.content&&(this.isContentVisible=!0,this.observer.unobserve(this.$refs.content))}))}}}),g=i(3744);const m=(0,g.Z)(h,[["render",c],["__scopeId","data-v-833150ca"]]);var u=m},1685:function(e,t,i){i.r(t),i.d(t,{default:function(){return de}});var n=i(6252),s=i(3577);const r=e=>((0,n.dD)("data-v-25ea352b"),e=e(),(0,n.Cn)(),e),a={id:"body"},o={class:"center-top-main-area-box"},l={class:"website-text-boxes"},c={class:"title"},d={class:"top-string-slice-of-title"},h={class:"main-text-container"},g={class:"main-text-ul"},m=r((()=>(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Welcome to "),(0,n._)("a",{class:"home-text-links list-links-text-decoration",href:"https://github.com/conrizzo"},"Conrad's"),(0,n.Uk)(" Website")])],-1))),u=r((()=>(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Crafted under the influence of 1-2 cups of "),(0,n._)("a",{class:"home-text-links list-links-text-decoration",href:"https://en.wikipedia.org/wiki/Coffee"},"Coffee"),(0,n.Uk)(" per day. "),(0,n._)("br")])],-1))),f={class:"center-image"},p=["src"],y=["src"],v={class:"custom-background-home-page"},_={class:"center-bottom-main-area-box"},b={class:"top-home-content-section"},x=r((()=>(0,n._)("div",{class:"under-title-caption"},null,-1)));function w(e,t,i,r,w,C){const T=(0,n.up)("router-link"),k=(0,n.up)("ProjectGallery"),A=(0,n.up)("imagesOneRow"),I=(0,n.up)("TwoColumnsGridContentTemplate"),S=(0,n.up)("TwoColumnsReversedGrid");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("section",o,[(0,n._)("div",l,[(0,n._)("h1",c,[(0,n._)("span",d,[(0,n._)("span",null,(0,s.zw)(w.inputStringShuffled),1)])]),(0,n._)("div",h,[(0,n._)("ul",g,[m,(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Wm)(T,{class:"home-text-links list-links-text-decoration",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1}),(0,n.Uk)(" this website.")])]),u]),(0,n._)("div",f,[(0,n._)("img",{style:{height:"9rem","padding-right":"1rem"},class:"bird-image",src:w.birdDrawing,alt:"Bird Drawing"},null,8,p),(0,n._)("img",{style:{height:"9rem"},src:w.aCoffee,alt:"Coffee image"},null,8,y)])])])]),(0,n._)("div",v,[(0,n._)("div",_,[(0,n._)("section",b,[x,(0,n.Wm)(k)])])]),(0,n.Wm)(A),(0,n.Wm)(I,{titleText:w.parentTitleTextOne,"content-text":w.parentTextOne},null,8,["titleText","content-text"]),(0,n.Wm)(S,{titleText:w.reversedTitle,"content-text":w.reversedText},null,8,["titleText","content-text"])])}var C=i(5660),T=i.n(C),k=i(3544);const A=e=>((0,n.dD)("data-v-1b76a963"),e=e(),(0,n.Cn)(),e),I={class:"centerAll"},S={class:"image-gallery"},O=A((()=>(0,n._)("h1",null,[(0,n._)("span",{class:"gallery-styling-h1-span"},"make an activity selection")],-1))),j={class:"image-gallery-grid-container"},D=["src","alt"];function z(e,t,i,r,a,o){return(0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("div",S,[O,(0,n._)("div",{class:"gallery-button-left",onClick:t[0]||(t[0]=e=>o.changeImageArray("left"))},"<"),(0,n._)("div",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.imageArrayChoice,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"grid-item"},[(0,n._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.altText},null,8,D),(0,n._)("figcaption",null,(0,s.zw)(e.caption),1)])))),128))]),(0,n._)("div",{class:"gallery-button-right",onClick:t[1]||(t[1]=e=>o.changeImageArray("right"))},">")])])}var $={name:"ImageGallery",compontents:{},data(){const e=i(4498),t=i(4396),n=i(1955);return{imageArrayChoice:null,imgArrayOfArrays:[[{id:1,imageSrc:t,altText:"Image 1",caption:"Eat food!"},{id:2,imageSrc:e,altText:"Image 2",caption:"Have coffee!"},{id:3,imageSrc:n,altText:"Image 3",caption:"Watch the birds!"},{id:4,imageSrc:e,altText:"Image 4",caption:"Time for more coffee!"}]]}},mounted(){this.imageArrayChoice=this.imgArrayOfArrays[0]},methods:{changeImageArray(e){const t=this.imgArrayOfArrays.length-1,i=this.imgArrayOfArrays.indexOf(this.imageArrayChoice);function n(e,t,i){let n=e[t];return e.splice(t,1),e.splice(i,0,n),e}"left"===e?(n(this.imgArrayOfArrays[i],0,this.imgArrayOfArrays[i].length),this.imageArrayChoice=0===i?this.imgArrayOfArrays[t]:this.imgArrayOfArrays[i-1]):"right"===e&&(n(this.imgArrayOfArrays[i],this.imgArrayOfArrays[i].length-1,0),this.imageArrayChoice=i===t?this.imgArrayOfArrays[0]:this.imgArrayOfArrays[i+1])}}},V=i(3744);const W=(0,V.Z)($,[["render",z],["__scopeId","data-v-1b76a963"]]);var G=W,H=i(1072);const R=e=>((0,n.dD)("data-v-2c211902"),e=e(),(0,n.Cn)(),e),Z={style:{color:"#fff","background-color":"rgb(44, 49, 54)",padding:"0.5rem"}},U=R((()=>(0,n._)("div",{class:"gallery-header"},[(0,n._)("h1",{class:"gallery-styling-h1-span"},[(0,n._)("span",null,[(0,n.Uk)(" Project Links "),(0,n._)("span",{class:"title-arrow-symbol"},"↷")])])],-1))),L={class:"centerAll"},E={class:"image-gallery"},M={class:"image-gallery-grid-container"},P=["title"],Y={class:"img-wrapper"},B=["src","alt"];function F(e,t,i,r,a,o){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("span",Z,"Loading content dynamically as each row is scrolled to "+(0,s.zw)(a.isContentVisible),1),U,(0,n._)("div",L,[(0,n._)("div",E,[(0,n._)("main",M,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.imageArrayChoice,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,title:e.text,class:(0,s.C_)(["grid-item hidden",{show:a.isContentVisible[t]}]),ref_for:!0,ref:`item-${t}`},[(0,n.Wm)(l,{class:"no-router-link-decorations",to:e.to},{default:(0,n.w5)((()=>[(0,n._)("div",Y,[(0,n._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.text},null,8,B)]),(0,n._)("h2",null,(0,s.zw)(e.text),1),(0,n._)("figcaption",null,[(0,n._)("p",null,(0,s.zw)(e.caption),1)])])),_:2},1032,["to"])],10,P)))),128))])])])],64)}var K=i(6437),q={name:"ImageGallery",data(){const e=i(4710),t=e.keys().map(e);return{images:t,isContentVisible:[],imageArrayChoice:K.Z}},mounted(){const e={root:null,rootMargin:"0px",threshold:.5};this.observer=new IntersectionObserver(this.handleIntersection,e),this.$nextTick((()=>{this.imageArrayChoice.forEach(((e,t)=>{this.isContentVisible[t]=!1,this.$refs[`item-${t}`]&&(this.$refs[`item-${t}`][0].dataset.index=t,this.observer.observe(this.$refs[`item-${t}`][0]))}))}))},methods:{handleIntersection(e){e.forEach((e=>{if(e.isIntersecting){const t=e.target.dataset.index;e.target===this.$refs[`item-${t}`][0]&&(console.log("item is visible"),this.isContentVisible[t]=!0),this.observer.unobserve(e.target)}}))}}};const J=(0,V.Z)(q,[["render",F],["__scopeId","data-v-2c211902"]]);var N=J;const Q={class:"second-main-area"},X={class:"second-area-grid-container"},ee={class:"grid-item-text"},te={class:"grid-item-coffee"},ie=["src"];function ne(e,t,i,r,a,o){return(0,n.wg)(),(0,n.iD)("div",Q,[(0,n._)("div",{class:(0,s.C_)(["hidden",{show:a.isContentVisible}]),ref:"content"},[(0,n._)("div",X,[(0,n._)("div",ee,[(0,n._)("h2",null,(0,s.zw)(i.titleText),1),(0,n._)("p",null,(0,s.zw)(i.contentText),1)]),(0,n._)("div",te,[(0,n._)("img",{class:"coffee-image",src:a.coffee_image,alt:"Image"},null,8,ie)])])],2)])}var se=i(5797),re={name:"CoffeeGridContent",props:{titleText:{type:String,default:"This is the default text for the title."},contentText:{type:String,default:"This is the default text for the prop, anything can be added here in the parent component."}},data(){return{coffee_image:se,isContentVisible:!1,isTextVisible:!1}},mounted(){const e={root:null,rootMargin:"0px",threshold:.5};this.observer=new IntersectionObserver(this.handleIntersection,e),this.observer.observe(this.$refs.content)},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&e.target===this.$refs.content&&(this.isContentVisible=!0,this.observer.unobserve(this.$refs.content))}))}}};const ae=(0,V.Z)(re,[["render",ne],["__scopeId","data-v-0fa8e134"]]);var oe=ae,le={name:"HomeView",components:{imagesOneRow:G,TwoColumnsGridContentTemplate:H.Z,ProjectGallery:N,TwoColumnsReversedGrid:oe},data(){return{itemsLength:0,birdDrawing:i(1660),aCoffee:i(4498),inputString:"_ Hello,",name:"",inputStringShuffled:"",isHovered:!1,hoveredImage:"",messages:["I'm having a bad day :(","Why is that?","This code won't work!","Fixed.",":)"],parentTitleTextOne:"What is the goal?",parentTextOne:"The goal of this website at the moment is to keep                      experimenting and learning. Make some fun projects.                      Drink some coffee (hopefully good coffee). Make lots of                       mistakes and keep learning from them and improving.",reversedTitle:"approach",reversedText:"The process is usually to experiment on some projects or concepts, write a lot of code to try ideas, edit and delete the code,                     find what works, and then make it simpler.                    This is essentially the learning process along with reading documentation and code off other projects to understand how it works. Regularly watching                    YouTube videos where a concept is discussed is also part of the process.                    In the end code is just a tool to make things, so as I make more projects                    I learn more along the way and more complicated projects become easier.                    The rewarding thing is to conceptualize a project, then actually be able to build it."}},computed:{projectLinks(){return this.links}},methods:{capitalizeFirstLetter(e){let t=e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return t},hideImage(){this.isHovered=!1,this.hoveredImage=""},runRustArrayRandomizer(){(0,k.ZP)().then((()=>{const e=this.name.split(" ");let t=(0,k.DH)(e);t=t.join(" "),this.inputStringShuffled=t}))},addLettersIntoInput(){let e=0;const t=setInterval((()=>{e<this.inputString.length?(this.name+=this.inputString[e],this.runRustArrayRandomizer(),e++):(clearInterval(t),setTimeout((()=>{this.inputStringShuffled="Hello,"}),1e3))}),200)}},mounted(){T().highlightAll(),this.addLettersIntoInput()}};const ce=(0,V.Z)(le,[["render",w],["__scopeId","data-v-25ea352b"]]);var de=ce},1660:function(e,t,i){e.exports=i.p+"img/StableDiffusionBird.f51814e1.jpg"},4498:function(e,t,i){e.exports=i.p+"img/cup_of_coffee.c1bb6620.jpg"},1955:function(e,t,i){e.exports=i.p+"img/diffBird.30532a98.jpg"},5797:function(e,t,i){e.exports=i.p+"img/generated_cup_of_coffee.41e8c8ae.jpg"},4396:function(e,t,i){e.exports=i.p+"img/5_self-made-pizza.9c2e05a6.jpg"}}]);
//# sourceMappingURL=996.7eb33ec6.js.map