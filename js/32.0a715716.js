"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[32],{1318:function(t,r,n){var e=n(5656),o=n(1400),i=n(6244),a=function(t){return function(r,n,a){var s,c=e(r),u=i(c),l=o(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},3658:function(t,r,n){var e=n(9781),o=n(3157),i=TypeError,a=Object.getOwnPropertyDescriptor,s=e&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,r){if(o(t)&&!a(t,"length").writable)throw i("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r}},9920:function(t,r,n){var e=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,r,n){for(var s=o(r),c=a.f,u=i.f,l=0;l<s.length;l++){var f=s[l];e(t,f)||n&&e(n,f)||c(t,f,u(r,f))}}},7207:function(t){var r=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw r("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,r,n){var e=n(7854),o=n(1236).f,i=n(8880),a=n(8052),s=n(3072),c=n(9920),u=n(4705);t.exports=function(t,r){var n,l,f,p,d,g,m=t.target,y=t.global,h=t.stat;if(l=y?e:h?e[m]||s(m,{}):(e[m]||{}).prototype,l)for(f in r){if(d=r[f],t.dontCallGetSet?(g=o(l,f),p=g&&g.value):p=l[f],n=u(y?f:m+(h?".":"#")+f,t.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;c(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),a(l,f,d,t)}}},8361:function(t,r,n){var e=n(1702),o=n(7293),i=n(4326),a=Object,s=e("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s(t,""):a(t)}:a},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},4705:function(t,r,n){var e=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,r){var n=c[s(t)];return n==l||n!=u&&(o(r)?e(r):!!r)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},6244:function(t,r,n){var e=n(7466);t.exports=function(t){return e(t.length)}},4758:function(t){var r=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?n:r)(e)}},1236:function(t,r,n){var e=n(9781),o=n(6916),i=n(5296),a=n(9114),s=n(5656),c=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;r.f=e?f:function(t,r){if(t=s(t),r=c(r),l)try{return f(t,r)}catch(n){}if(u(t,r))return a(!o(i.f,t,r),t[r])}},8006:function(t,r,n){var e=n(6324),o=n(748),i=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},5181:function(t,r){r.f=Object.getOwnPropertySymbols},6324:function(t,r,n){var e=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,s=n(3501),c=e([].push);t.exports=function(t,r){var n,e=i(t),u=0,l=[];for(n in e)!o(s,n)&&o(e,n)&&c(l,n);while(r.length>u)o(e,n=r[u++])&&(~a(l,n)||c(l,n));return l}},5296:function(t,r){var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},3887:function(t,r,n){var e=n(5005),o=n(1702),i=n(8006),a=n(5181),s=n(9670),c=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(s(t)),n=a.f;return n?c(r,n(t)):r}},1400:function(t,r,n){var e=n(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},5656:function(t,r,n){var e=n(8361),o=n(4488);t.exports=function(t){return e(o(t))}},9303:function(t,r,n){var e=n(4758);t.exports=function(t){var r=+t;return r!==r||0===r?0:e(r)}},7466:function(t,r,n){var e=n(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7658:function(t,r,n){var e=n(2109),o=n(7908),i=n(6244),a=n(3658),s=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!l();e({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var r=o(this),n=i(r),e=arguments.length;s(n+e);for(var c=0;c<e;c++)r[n]=arguments[c],n++;return a(r,n),n}})},8032:function(t,r,n){n.r(r),n.d(r,{default:function(){return E}});var e=n(6252),o=n(3577);const i=t=>((0,e.dD)("data-v-740a3e96"),t=t(),(0,e.Cn)(),t),a={class:"store-background-color"},s=i((()=>(0,e._)("div",{class:"main-banner"},[(0,e._)("h1",null," Buy awesome things here...")],-1))),c={key:0},u=i((()=>(0,e._)("h2",null,"Your Shopping Cart is empty!",-1))),l=[u],f={key:1},p=i((()=>(0,e._)("h2",null,"Your Shopping Cart",-1))),d=i((()=>(0,e._)("br",null,null,-1))),g=i((()=>(0,e._)("br",null,null,-1)));function m(t,r,n,i,u,m){const y=(0,e.up)("ProductGallery");return(0,e.wg)(),(0,e.iD)("div",a,[s,(0,e.Wm)(y,{onAddToCart:m.handleAddItemToCart},null,8,["onAddToCart"]),0===u.runningTotal?((0,e.wg)(),(0,e.iD)("div",c,l)):((0,e.wg)(),(0,e.iD)("div",f,[p,d,(0,e._)("div",null,[(0,e._)("b",null,'You just added "'+(0,o.zw)(m.showLastAddedItem)+'" to your cart!',1),(0,e._)("button",{style:{"margin-left":"1em"},onClick:r[0]||(r[0]=t=>m.emptyShoppingCart()),class:"clean-button"},"Empty shopping cart")]),g])),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.userCart,(t=>((0,e.wg)(),(0,e.iD)("div",{key:t.id,class:"cart-item"},[(0,e._)("p",null,(0,o.zw)(t.name),1),(0,e._)("p",null,(0,o.zw)(t.price),1)])))),128)),(0,e._)("div",null,[(0,e._)("p",null,[(0,e._)("b",null,"Total: "+(0,o.zw)(u.runningTotal),1)])])])}n(7658);const y=t=>((0,e.dD)("data-v-31413a61"),t=t(),(0,e.Cn)(),t),h={class:"centerAll"},v={class:"image-gallery"},A=y((()=>(0,e._)("h1",null,[(0,e._)("span",{class:"gallery-styling-h1-span"},"MAKE A SELECTION")],-1))),b={class:"image-gallery-grid-container"},w=["src","alt"],I=["onClick"];function C(t,r,n,i,a,s){return(0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("div",v,[A,(0,e._)("div",{class:"gallery-button-left",onClick:r[0]||(r[0]=t=>s.changeImageArray("left"))},"<"),(0,e._)("div",b,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(a.imageArrayChoice,((t,r)=>((0,e.wg)(),(0,e.iD)("div",{key:t.id,class:"grid-item"},[(0,e._)("img",{class:"gallery-component-image",src:t.imageSrc,alt:t.altText},null,8,w),(0,e._)("figcaption",null,(0,o.zw)(t.caption),1),(0,e.Uk)(),(0,e._)("button",{onClick:n=>{s.showArray(r,t.id)},class:"clean-button"},"Add to cart",8,I)])))),128))]),(0,e._)("div",{class:"gallery-button-right",onClick:r[1]||(r[1]=t=>s.changeImageArray("right"))},">")])])}var O={name:"ProductGallery",components:{},props:{images:{type:Array,default:null}},data(){const t=n(1680),r=n(8182),e=n(1955),o=n(7563);return{imageArrayChoice:null,imgArrayOfArrays:[[{id:1,imageSrc:r,name:"Image 1",caption:"Bread"},{id:2,imageSrc:t,name:"Image 2",caption:"Fresh Coffee"},{id:3,imageSrc:e,name:"Image 3",caption:"Bird Food"},{id:4,imageSrc:o,name:"Image 4",caption:"Cake"}]]}},mounted(){this.imageArrayChoice=this.imgArrayOfArrays[0]},methods:{showArray(t=null,r=null){if(null===t||null===r)return;const n=t;this.$emit("add-to-cart",n,r)},changeImageArray(t){const r=this.imgArrayOfArrays.length-1,n=this.imgArrayOfArrays.indexOf(this.imageArrayChoice);function e(t,r,n){let e=t[r];return t.splice(r,1),t.splice(n,0,e),t}"left"===t?(e(this.imgArrayOfArrays[n],0,this.imgArrayOfArrays[n].length),this.imageArrayChoice=0===n?this.imgArrayOfArrays[r]:this.imgArrayOfArrays[n-1]):"right"===t&&(e(this.imgArrayOfArrays[n],this.imgArrayOfArrays[n].length-1,0),this.imageArrayChoice=n===r?this.imgArrayOfArrays[0]:this.imgArrayOfArrays[n+1])}}},x=n(3744);const _=(0,x.Z)(O,[["render",C],["__scopeId","data-v-31413a61"]]);var S=_,T=n(7327);class k{constructor(){(0,T.Z)(this,"items",void 0),this.items=[]}addItem(t){this.items.push(t)}getItems(){return this.items}}var P={name:"StoreView",components:{ProductGallery:S},props:{},data(){return{storeInventory:new k,userCart:[],runningTotal:0,lastItemAddedToCart:null}},mounted(){this.makeInventory()},computed:{showLastAddedItem(){const t=this.userCart.length-1,r=this.userCart[t];if(void 0!==r)return r["name"]}},methods:{makeInventory(){const t=this.storeInventory,r={id:1,name:"Bread",price:15},n={id:2,name:"Fresh Coffee",price:15},e={id:3,name:"Bird Food",price:10},o={id:4,name:"Cake",price:300};t.addItem(r),t.addItem(n),t.addItem(e),t.addItem(o),this.storeInventory=t;const i=t.getItems();console.log(i)},resetInventory(){console.log("reset"),this.storeInventory=new k},handleAddItemToCart(t,r){if(null===t||null===r||0===this.storeInventory.getItems().length)return;console.log("TEST",this.storeInventory.getItems()[t]);const n=this.storeInventory.getItems().find((t=>t.id===r));this.runningTotal+=n.price,console.log("TEST",n),this.userCart.push(n)},emptyShoppingCart(){this.userCart=[],this.runningTotal=0}}};const j=(0,x.Z)(P,[["render",m],["__scopeId","data-v-740a3e96"]]);var E=j},7563:function(t,r,n){t.exports=n.p+"img/cake.c78d5e5e.jpg"},8182:function(t,r,n){t.exports=n.p+"img/coffee_food.f7634650.jpg"},1955:function(t,r,n){t.exports=n.p+"img/diffBird.30532a98.jpg"},1680:function(t,r,n){t.exports=n.p+"img/second_coffee.c1bb6620.jpg"},7327:function(t,r,n){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function i(t){var r=o(t,"string");return"symbol"===e(r)?r:String(r)}function a(t,r,n){return r=i(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}n.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=32.0a715716.js.map