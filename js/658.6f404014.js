"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[658],{4658:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(6252);const r=e=>((0,n.dD)("data-v-603e0390"),e=e(),(0,n.Cn)(),e),i={id:"body"},s={class:"flex-box-center"},o={style:{"text-align":"left",width:"68rem","padding-left":"1rem","padding-right":"1rem"}},l=r((()=>(0,n._)("h1",null,"This is a simple page to fetch data",-1))),c=r((()=>(0,n._)("br",null,null,-1))),d=r((()=>(0,n._)("p",null,[(0,n.Uk)(" This is just an experimental project page that currently works by fetching data from the "),(0,n._)("a",{class:"text-links",href:"https://fakestoreapi.com/docs"},"https://fakestoreapi.com/docs"),(0,n.Uk)(" API. All values, images, and brands are only for demonstration purposes. Made with Vue 3's composition API and an external TypeScript function to fetch the data. An animated loading text is displayed while the data is being fetched. Since the data is fetched in a fraction of a second this likely goes unnoticed! It can be seen briefly when first loading the page, or by refreshing the page. A simple data caching mechanism is also used when coming back to this page. This means an API request will not be made if the data has already been fetched, but will fetch it again when the page is refreshed. The data is stored in the browser's local storage and if it's already there the function is told to return that cached data in a guard statement. The little rating star symbols are made with a for loop and rounded to the nearest whole integer. ")],-1))),h=r((()=>(0,n._)("br",null,null,-1)));function u(e,t,a,r,u,p){const f=(0,n.up)("CreateProductsGallery");return(0,n.wg)(),(0,n.iD)("body",i,[(0,n._)("section",s,[(0,n._)("div",o,[l,c,d,h,(0,n.Wm)(f)])])])}var p=a(3577);const f=e=>((0,n.dD)("data-v-93a77264"),e=e(),(0,n.Cn)(),e),g={key:0,style:{"text-align":"center"}},m=f((()=>(0,n._)("span",{class:"loading",style:{"font-size":"4rem",color:"#fff"}},"Loading",-1))),w=[m],b={key:1,class:"center-content"},y={class:"container"},v={class:"each-item-format img-wrapper"},_=["src","alt"],k={style:{"padding-top":"3rem"}},T=f((()=>(0,n._)("br",null,null,-1)));function x(e,t,a,r,i,s){return(0,n.wg)(),(0,n.iD)("main",null,[r.isLoading?((0,n.wg)(),(0,n.iD)("div",g,w)):((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.products,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n._)("div",v,[(0,n._)("img",{class:"image-ratio",src:e.image,alt:e.title},null,8,_),(0,n._)("div",k,[(0,n._)("h2",null,(0,p.zw)(e.title),1),(0,n._)("span",null,"Price: "+(0,p.zw)(e.price.toFixed(2)),1),T,(0,n._)("span",null,(0,p.zw)(e.rating.rate),1),(0,n.Uk)(" "+(0,p.zw)(r.productRating(e.rating.rate)),1)])])])))),128))])]))])}var D=a(2262);let P=null;async function A(){if(P)return P;try{const e=await fetch("https://fakestoreapi.com/products");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();return P=t,t}catch(e){return console.error("There was a problem with the fetch operation:",e),{message:"There was a problem with the fetch operation:",error:e}}}var C={setup(){const e=(0,D.iH)(null),t=(0,D.iH)(!1);(0,n.bv)((async()=>{t.value=!0,e.value=await A(),t.value=!1}));let a=e=>{const t=Math.round(e);let a="";for(let n=0;n<t;n++)a+="⭐";return a};return{products:e,isLoading:t,productRating:a}}},I=a(3744);const z=(0,I.Z)(C,[["render",x],["__scopeId","data-v-93a77264"]]);var H=z,j={components:{CreateProductsGallery:H},setup(){return{}}};const L=(0,I.Z)(j,[["render",u],["__scopeId","data-v-603e0390"]]);var U=L}}]);
//# sourceMappingURL=658.6f404014.js.map