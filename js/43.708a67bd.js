"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[43],{7834:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var r=a(6252),o=a(3577);const i=e=>((0,r.dD)("data-v-197443f6"),e=e(),(0,r.Cn)(),e),n={class:"store-background"},s={class:"main-banner"},d={class:"main-banner-text-container"},l=i((()=>(0,r._)("div",{style:{"z-index":"3",position:"relative"}},[(0,r._)("h1",null," Buy awesome things here..."),(0,r._)("span",{class:"main-banner-sub-text"}," A simple modular store layout made in Vue.js and TypeScript. ")],-1))),c={style:{"z-index":"3",position:"relative",padding:"0.5rem"}},u={style:{background:"#fff"}},p={key:0};function h(e,t,a,i,h,m){const g=(0,r.up)("SearchFunction"),v=(0,r.up)("ProductGallery"),f=(0,r.up)("CheckOut"),w=(0,r.up)("DiagramModal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",n,[(0,r._)("div",s,[(0,r._)("div",d,[l,(0,r._)("div",c,[(0,r.Wm)(g)])])]),(0,r.Wm)(v,{onAddToCart:m.updateValue},null,8,["onAddToCart"]),(0,r.Wm)(f,{propProductIndexInGallery:h.propIndex,propProductIdentificationNumber:h.propProduct,propUpdate:h.updated},null,8,["propProductIndexInGallery","propProductIdentificationNumber","propUpdate"]),(0,r._)("div",u,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>(m.showDiagramAndSourceCode,m.toggleDiagramModal())),class:"clean-button store-show-diagram-button"},(0,o.zw)(h.showDiagramButtonText),1)])]),h.showDiagramModal?((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(w,{onClose:m.toggleDiagramModal},null,8,["onClose"])])):(0,r.kq)("",!0)],64)}const m=e=>((0,r.dD)("data-v-6d1ebcb7"),e=e(),(0,r.Cn)(),e),g={class:"centerAll"},v={class:"image-gallery"},f=m((()=>(0,r._)("h1",null,"MAKE A SELECTION",-1))),w={class:"image-gallery-grid-container"},y=["src","alt"],b=["onClick"];function k(e,t,a,i,n,s){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",v,[f,(0,r._)("div",{class:"gallery-button-left",onClick:t[0]||(t[0]=e=>s.changeImageArray("left"))}," < "),(0,r._)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.slicedProductInventoryArray,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"grid-item"},[(0,r.Wm)(d,{to:{name:"ProductPageView",params:{id:e.id,name:e.name,image:e.imageSrc,price:e.price}}},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.altText},null,8,y)])),_:2},1032,["to"]),(0,r._)("figcaption",null,(0,o.zw)(e.name)+" €"+(0,o.zw)(e.price),1),(0,r._)("button",{onClick:a=>{s.showArray(t,e.id)},class:"clean-button"},"Add to cart",8,b)])))),128))]),(0,r._)("div",{class:"gallery-button-right",onClick:t[1]||(t[1]=e=>s.changeImageArray("right"))}," > ")])])}a(560);var D=a(6223),_={name:"ProductGallery",components:{},props:{images:{type:Array,default:null}},data(){return{productInventoryArray:D.a}},created(){this.testArray=["@/images/cup_of_coffee.jpg"]},computed:{slicedProductInventoryArray(){const e=4;return this.productInventoryArray.slice(0,e)}},methods:{showArray(e=null,t=null){null!==e&&null!==t&&this.$emit("add-to-cart",e,t)},changeImageArray(e){const t=this.productInventoryArray.length-1;if("left"===e){const e=this.productInventoryArray.pop();this.productInventoryArray.unshift(e),this.imageArrayChoice=this.productInventoryArray[0]}else if("right"===e){const e=this.productInventoryArray.shift();this.productInventoryArray.push(e),this.imageArrayChoice=this.productInventoryArray[t]}}}},C=a(3744);const A=(0,C.Z)(_,[["render",k],["__scopeId","data-v-6d1ebcb7"]]);var I=A,S=a(8375),x=a(9963),T=a.p+"img/project_diagram.b746ae8a.svg";const M={class:"aboutDiagram"},P=(0,r.uE)('<h2 data-v-4481f0f2>Diagram of how this project works</h2><div style="text-align:left;padding-left:1rem;" data-v-4481f0f2><p data-v-4481f0f2><b data-v-4481f0f2>CheckOut.vue</b> is the main part of this application.</p><a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store" data-v-4481f0f2> Component and TypeScript source code on GitHub</a><br data-v-4481f0f2><a class="text-links" href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/store/StoreView.vue" data-v-4481f0f2>Store page view</a><br data-v-4481f0f2><a class="text-links" href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/store/StoreCheckOutView.vue" data-v-4481f0f2>Checkout page view</a><p data-v-4481f0f2> An alternative idea was to use an <a class="text-links" href="https://v3-migration.vuejs.org/breaking-changes/events-api.html#_3-x-update" data-v-4481f0f2>Event Bus</a>, but this is generally frowned upon. In this application all user choices are passed between components as props and held locally as cookies. </p></div><div class="diagram-image-container" data-v-4481f0f2><img src="'+T+'" alt="Diagram of how this project works" style="max-width:98%;max-height:100%;" data-v-4481f0f2></div><p data-v-4481f0f2>Diagram made using <a class="text-links" href="https://app.diagrams.net/" data-v-4481f0f2> https://app.diagrams.net/ </a></p>',4);function z(e,t,a,o,i,n){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:t[1]||(t[1]=(0,x.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))},[(0,r._)("div",M,[(0,r._)("button",{class:"close",onClick:t[0]||(t[0]=(0,x.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))}),P])])}var L={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}};const V=(0,C.Z)(L,[["render",z],["__scopeId","data-v-4481f0f2"]]);var j=V;const H=e=>((0,r.dD)("data-v-21b9fd9b"),e=e(),(0,r.Cn)(),e),U={class:"outside-div"},Z={class:"input-area"},W=H((()=>(0,r._)("span",{id:"tip-1",class:"tooltip-search-anchor"},[(0,r._)("span",{anchor:"tip-1",class:"tooltip-search"},[(0,r.Uk)("Available products create clickable links. Type the full word "),(0,r._)("b",null,"bread"),(0,r.Uk)(" and a ✓ will appear to confirm it's in the "),(0,r._)("b",null,"trie datastructure"),(0,r.Uk)(". This tooltip uses the new "),(0,r._)("b",null,"CSS anchor positioning"),(0,r.Uk)(". ")])],-1))),B={key:0},E={key:0,style:{"font-size":"1.25rem"}};function F(e,t,a,i,n,s){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("div",Z,[W,(0,r.wy)((0,r._)("input",{ref:"inputField",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.searchTerm=e),placeholder:"Search items..."},null,512),[[x.nr,i.searchTerm]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.filteredItems,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[i.searchTerm.length>0?((0,r.wg)(),(0,r.iD)("div",B,[(0,r.Wm)(d,{class:"text-links",to:{name:"ProductPageView",params:{id:e.id,name:e.name,image:e.imageSrc,price:e.price}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.name),1)])),_:2},1032,["to"]),i.trie.search(i.searchTerm.toLowerCase())?((0,r.wg)(),(0,r.iD)("span",E," ✓ ")):(0,r.kq)("",!0)])):(0,r.kq)("",!0)])))),128))])}var G=a(2262),O=a(7327);class q{constructor(){(0,O.Z)(this,"end",void 0),(0,O.Z)(this,"children",void 0),this.end=!1,this.children={}}}class K{constructor(){(0,O.Z)(this,"root",void 0),this.root=new q}insert(e){let t=this.root;for(let a=0;a<e.length;a++)t.children[e[a]]||(t.children[e[a]]=new q),t=t.children[e[a]];t.end=!0}search(e){let t=this.root;for(let a=0;a<e.length;a++){if(!t.children[e[a]])return!1;t=t.children[e[a]]}return t.end}print(e=this.root,t="",a=[]){e.end&&a.push(t);for(const r in e.children)this.print(e.children[r],t+r,a);return a}}var N={directives:{focus:{mounted(e){e.focus()}}},name:"SearchFunction",setup(){const e=(0,G.iH)(""),t=(0,G.iH)(D.a),a=(0,G.iH)(null);let o=new K;t.value.forEach((e=>{o.insert(e.name.toLowerCase())})),(0,r.bv)((()=>{window.innerWidth>600&&a.value.focus()}));const i=()=>o.print(),n=(0,r.Fl)((()=>e.value?t.value.filter((t=>t.name.toLowerCase().includes(e.value.toLowerCase()))):t.value));return{searchTerm:e,items:t,filteredItems:n,trie:o,printTrie:i,inputField:a}}};const Y=(0,C.Z)(N,[["render",F],["__scopeId","data-v-21b9fd9b"]]);var $=Y,J={name:"StoreView",components:{ProductGallery:I,CheckOut:S.Z,DiagramModal:j,SearchFunction:$},data(){return{propProduct:0,propIndex:0,updated:!1,openDiagramAndSourceCodeLinks:!1,showDiagramButtonText:"Show Diagram and Source Code",showDiagramModal:!1}},methods:{updateValue(e,t){this.propProduct=e,this.propIndex=t,this.updated=!this.updated},showDiagramAndSourceCode(){this.openDiagramAndSourceCodeLinks=!this.openDiagramAndSourceCodeLinks,this.openDiagramAndSourceCodeLinks?this.showDiagramButtonText="Hide Diagram and Source Code":this.showDiagramButtonText="Show Diagram and Source Code"},toggleDiagramModal(){this.showDiagramModal=!this.showDiagramModal}}};const Q=(0,C.Z)(J,[["render",h],["__scopeId","data-v-197443f6"]]);var R=Q}}]);
//# sourceMappingURL=43.708a67bd.js.map