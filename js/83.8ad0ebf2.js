"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[83],{3303:function(e,t,i){i.r(t),i.d(t,{default:function(){return ye}});var n=i(6252),a=i(3577);const r=e=>((0,n.dD)("data-v-4bc87096"),e=e(),(0,n.Cn)(),e),s={id:"body"},o={class:"center-top-main-area-box"},l={class:"website-text-boxes"},c={class:"title"},d={class:"top-string-slice-of-title"},g={class:"main-text-container"},h={class:"main-text-ul"},m=r((()=>(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Welcome to "),(0,n._)("a",{style:{background:"rgb(255, 225, 161)","padding-left":"0.25rem","padding-right":"0.25rem"},class:"home-text-links",href:"https://github.com/conrizzo"},"Conrad's"),(0,n.Uk)(" Website")])],-1))),u=r((()=>(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Uk)("Crafted under the influence of "),(0,n._)("a",{style:{background:"rgb(255, 170, 161)","padding-left":"0.25rem","padding-right":"0.25rem"},class:"home-text-links",href:"https://en.wikipedia.org/wiki/Coffee"},"Coffee")])],-1))),f=r((()=>(0,n._)("div",{class:"main-text-p"},[(0,n._)("h2",null,"Project Information"),(0,n._)("p",null,"Some projects are below, there are a few other projects I'm working on that are not shown here. The array of projects below is dynamically loaded in as objects, images are dynamically inserted into those objects from an images folder. The header navigation uses the same data.")],-1))),p={class:"custom-background-home-page"},y={class:"center-bottom-main-area-box"},_={class:"top-home-content-section"},b=r((()=>(0,n._)("div",{class:"under-title-caption"},null,-1))),v=r((()=>(0,n._)("div",{style:{background:"rgb(18,18,18)"}},null,-1))),A={style:{background:"rgb(45, 45, 45)"}},w={style:{"max-width":"80rem",margin:"0 auto"}};function x(e,t,i,r,x,C){const k=(0,n.up)("router-link"),I=(0,n.up)("ProjectGallery"),T=(0,n.up)("FourWideImages"),O=(0,n.up)("TwoColumnsGridContentTemplate"),S=(0,n.up)("imagesOneRow");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("section",o,[(0,n._)("div",l,[(0,n._)("h1",c,[(0,n._)("span",d,[(0,n._)("span",null,(0,a.zw)(x.inputStringShuffled.slice(0,7)),1)])]),(0,n._)("div",g,[(0,n._)("ul",h,[m,(0,n._)("li",null,[(0,n._)("span",null,[(0,n.Wm)(k,{style:{background:"rgb(161, 244, 255)","padding-left":"0.25rem","padding-right":"0.25rem"},class:"home-text-links",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1}),(0,n.Uk)(" this website.")])]),u]),f])])]),(0,n._)("div",p,[(0,n._)("div",y,[(0,n._)("section",_,[b,(0,n.Wm)(I)])])]),v,(0,n._)("div",null,[(0,n.Wm)(T)]),(0,n._)("div",A,[(0,n._)("section",w,[(0,n.Wm)(O,{titleText:x.parentTitleTextOne,"content-text":x.parentTextOne},null,8,["titleText","content-text"])])]),(0,n.Wm)(S)])}var C=i(5660),k=i.n(C),I=i(3544);const T=e=>((0,n.dD)("data-v-0b283802"),e=e(),(0,n.Cn)(),e),O={class:"centerAll"},S=T((()=>(0,n._)("div",{class:"gallery-header"},[(0,n._)("h1",{class:"gallery-styling-h1-span"},"things to do")],-1))),D={class:"image-gallery-grid-container"},j=["title"],V=["src","alt"];function W(e,t,i,r,s,o){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",{class:(0,a.C_)(["image-gallery hidden",{show:s.isContentVisible}]),ref:"content"},[S,(0,n._)("div",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.imageArrayChoice,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,title:e.id,class:"grid-item"},[(0,n._)("div",null,[(0,n._)("h2",null,(0,a.zw)(e.altText),1),(0,n._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.altText},null,8,V),(0,n._)("figcaption",null,(0,a.zw)(e.caption),1)])],8,j)))),128))])],2)])}var z={name:"ImageGallery",compontents:{},data(){const e=i(4498),t=i(8182),n=i(1955);return{isContentVisible:!1,imageArrayChoice:null,imgArrayOfArrays:[[{id:1,imageSrc:t,altText:"Eat yummy food",caption:"Food!"},{id:2,imageSrc:e,altText:"Coffee",caption:"Coffee!"},{id:3,imageSrc:n,altText:"Bird Watching",caption:"A bird!"},{id:4,imageSrc:e,altText:"Make projects",caption:"..while drinking coffee!"}]]}},mounted(){this.imageArrayChoice=this.imgArrayOfArrays[0];const e={root:null,rootMargin:"0px",threshold:.8},t=new IntersectionObserver(this.handleIntersection,e);t.observe(this.$refs.content)},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&e.target===this.$refs.content&&(this.isContentVisible=!0)}))}}},H=i(3744);const G=(0,H.Z)(z,[["render",W],["__scopeId","data-v-0b283802"]]);var L=G;const M=e=>((0,n.dD)("data-v-69aff52c"),e=e(),(0,n.Cn)(),e),E={class:"centerAll"},Z={class:"image-gallery"},$=M((()=>(0,n._)("h1",null,[(0,n._)("span",{class:"gallery-styling-h1-span"},"MAKE AN ACTIVITY SELECTION")],-1))),F={class:"image-gallery-grid-container"},P=["src","alt"];function R(e,t,i,r,s,o){return(0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("div",Z,[$,(0,n._)("div",{class:"gallery-button-left",onClick:t[0]||(t[0]=e=>o.changeImageArray("left"))},"<"),(0,n._)("div",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.imageArrayChoice,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"grid-item"},[(0,n._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.altText},null,8,P),(0,n._)("figcaption",null,(0,a.zw)(e.caption),1)])))),128))]),(0,n._)("div",{class:"gallery-button-right",onClick:t[1]||(t[1]=e=>o.changeImageArray("right"))},">")])])}var U={name:"ImageGallery",compontents:{},data(){const e=i(4498),t=i(8182),n=i(1955);return{imageArrayChoice:null,imgArrayOfArrays:[[{id:1,imageSrc:t,altText:"Image 1",caption:"Delicious Food!"},{id:2,imageSrc:e,altText:"Image 2",caption:"Fresh Coffee!"},{id:3,imageSrc:n,altText:"Image 3",caption:"Look, a bird!"},{id:4,imageSrc:e,altText:"Image 4",caption:"More Coffee!"}]]}},mounted(){this.imageArrayChoice=this.imgArrayOfArrays[0]},methods:{changeImageArray(e){const t=this.imgArrayOfArrays.length-1,i=this.imgArrayOfArrays.indexOf(this.imageArrayChoice);function n(e,t,i){let n=e[t];return e.splice(t,1),e.splice(i,0,n),e}"left"===e?(n(this.imgArrayOfArrays[i],0,this.imgArrayOfArrays[i].length),this.imageArrayChoice=0===i?this.imgArrayOfArrays[t]:this.imgArrayOfArrays[i-1]):"right"===e&&(n(this.imgArrayOfArrays[i],this.imgArrayOfArrays[i].length-1,0),this.imageArrayChoice=i===t?this.imgArrayOfArrays[0]:this.imgArrayOfArrays[i+1])}}};const Y=(0,H.Z)(U,[["render",R],["__scopeId","data-v-69aff52c"]]);var K=Y;const B={class:"second-main-area"},N={class:"second-area-grid-container"},q={class:"grid-item-coffee"},J=["src"],Q={class:"grid-item-text"};function X(e,t,i,r,s,o){return(0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("div",{class:(0,a.C_)(["hidden",{show:s.isContentVisible}]),ref:"content"},[(0,n._)("div",N,[(0,n._)("div",q,[(0,n._)("img",{class:"coffee-image",src:s.coffee_image,alt:"Image"},null,8,J)]),(0,n._)("div",Q,[(0,n._)("h2",null,(0,a.zw)(i.titleText),1),(0,n._)("p",null,(0,a.zw)(i.contentText),1)])])],2)])}var ee=i.p+"img/generated_cup_of_coffee.41e8c8ae.jpg",te={name:"CoffeeGridContent",props:{titleText:{type:String,default:"This is the default text for the title."},contentText:{type:String,default:"This is the default text for the prop, anything can be added here in the parent component."}},data(){return{coffee_image:ee,isContentVisible:!1,isTextVisible:!1}},mounted(){const e={root:null,rootMargin:"0px",threshold:.5},t=new IntersectionObserver(this.handleIntersection,e);t.observe(this.$refs.content)},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&(e.target===this.$refs.content?this.isContentVisible=!0:e.target===this.$refs.content_text&&(this.options.threshold=.8,this.isTextVisible=!0))}))}}};const ie=(0,H.Z)(te,[["render",X],["__scopeId","data-v-8019bcc8"]]);var ne=ie;const ae=e=>((0,n.dD)("data-v-207b70ff"),e=e(),(0,n.Cn)(),e),re=ae((()=>(0,n._)("div",{class:"gallery-header"},[(0,n._)("h1",{class:"gallery-styling-h1-span"},[(0,n._)("span",null,[(0,n.Uk)(" Project Links "),(0,n._)("span",{class:"title-arrow-symbol"},"↷")])])],-1))),se={class:"centerAll"},oe={class:"image-gallery-grid-container"},le=["title"],ce=["src","alt"];function de(e,t,i,r,s,o){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[re,(0,n._)("div",se,[(0,n._)("div",{class:(0,a.C_)(["image-gallery hidden",{show:s.isContentVisible}]),ref:"content"},[(0,n._)("main",oe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.imageArrayChoice,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,title:e.text,class:"grid-item"},[(0,n._)("div",null,[(0,n.Wm)(l,{class:"no-router-link-decorations",to:e.to},{default:(0,n.w5)((()=>[(0,n._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.text},null,8,ce),(0,n._)("h2",null,(0,a.zw)(e.text),1),(0,n._)("figcaption",null,[(0,n._)("p",null,(0,a.zw)(e.caption),1)])])),_:2},1032,["to"])])],8,le)))),128))])],2)])],64)}var ge=i(6437),he={name:"ImageGallery",components:{},data(){const e=i(4710),t=e.keys().map(e);return{images:t,isContentVisible:!1,imageArrayChoice:null,imgArrayOfArrays:[ge.Z,[]]}},mounted(){this.imageArrayChoice=this.imgArrayOfArrays[0];const e={root:null,rootMargin:"0px",threshold:.25},t=new IntersectionObserver(this.handleIntersection,e);t.observe(this.$refs.content)},computed:{testTest(){return this.theProjectLinks}},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&e.target===this.$refs.content&&(this.isContentVisible=!0)}))}}};const me=(0,H.Z)(he,[["render",de],["__scopeId","data-v-207b70ff"]]);var ue=me,fe={name:"HomeView",components:{FourWideImages:L,imagesOneRow:K,TwoColumnsGridContentTemplate:ne,ProjectGallery:ue},data(){return{itemsLength:0,birdDrawing:i(1660),inputString:"_ Hello,",name:"",inputStringShuffled:"",isHovered:!1,hoveredImage:"",messages:["I'm having a bad day :(","Why is that?","This code won't work!","Fixed.",":)"],parentTitleTextOne:"What is the goal of this website?",parentTextOne:"The goal of this website at the moment is to keep                      experimenting and learning. Make some fun projects.                      Drink some coffee (hopefully good coffee). Make lots of                       mistakes and keep learning from them and improving."}},computed:{projectLinks(){return this.links}},methods:{hideImage(){this.isHovered=!1,this.hoveredImage=""},runRustArrayRandomizer(){(0,I.ZP)().then((()=>{const e=this.name.split(" ");let t=(0,I.DH)(e);t=t.join(" "),this.inputStringShuffled=t}))},addLettersIntoInput(){let e=0;const t=setInterval((()=>{e<this.inputString.length?(this.name+=this.inputString[e],this.runRustArrayRandomizer(),e++):(clearInterval(t),setTimeout((()=>{this.inputStringShuffled="Hello,"}),1e3))}),200)}},mounted(){k().highlightAll(),this.addLettersIntoInput()}};const pe=(0,H.Z)(fe,[["render",x],["__scopeId","data-v-4bc87096"]]);var ye=pe},1660:function(e,t,i){e.exports=i.p+"img/StableDiffusionBird.f51814e1.jpg"},8182:function(e,t,i){e.exports=i.p+"img/coffee_food.f7634650.jpg"},4498:function(e,t,i){e.exports=i.p+"img/cup_of_coffee.c1bb6620.jpg"},1955:function(e,t,i){e.exports=i.p+"img/diffBird.30532a98.jpg"}}]);
//# sourceMappingURL=83.8ad0ebf2.js.map