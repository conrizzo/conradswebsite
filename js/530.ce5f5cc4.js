"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[530],{1318:function(t,e,n){var r=n(5656),a=n(1400),i=n(6244),o=function(t){return function(e,n,o){var u,l=r(e),s=i(l),c=a(o,s);if(t&&n!=n){while(s>c)if(u=l[c++],u!=u)return!0}else for(;s>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){var r=n(9781),a=n(3157),i=TypeError,o=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(a(t)&&!o(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9920:function(t,e,n){var r=n(2597),a=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var u=a(e),l=o.f,s=i.f,c=0;c<u.length;c++){var p=u[c];r(t,p)||n&&r(n,p)||l(t,p,s(e,p))}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),a=n(1236).f,i=n(8880),o=n(8052),u=n(3072),l=n(9920),s=n(4705);t.exports=function(t,e){var n,c,p,d,f,m,h=t.target,y=t.global,g=t.stat;if(c=y?r:g?r[h]||u(h,{}):(r[h]||{}).prototype,c)for(p in e){if(f=e[p],t.dontCallGetSet?(m=a(c,p),d=m&&m.value):d=c[p],n=s(y?p:h+(g?".":"#")+p,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(c,p,f,t)}}},8361:function(t,e,n){var r=n(1702),a=n(7293),i=n(4326),o=Object,u=r("".split);t.exports=a((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):o(t)}:o},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,e,n){var r=n(7293),a=n(614),i=/#|\.prototype\./,o=function(t,e){var n=l[u(t)];return n==c||n!=s&&(a(e)?r(e):!!e)},u=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},l=o.data={},s=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},1236:function(t,e,n){var r=n(9781),a=n(6916),i=n(5296),o=n(9114),u=n(5656),l=n(4948),s=n(2597),c=n(4664),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=u(t),e=l(e),c)try{return p(t,e)}catch(n){}if(s(t,e))return o(!a(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),a=n(748),i=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(1702),a=n(2597),i=n(5656),o=n(1318).indexOf,u=n(3501),l=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,c=[];for(n in r)!a(u,n)&&a(r,n)&&l(c,n);while(e.length>s)a(r,n=e[s++])&&(~o(c,n)||l(c,n));return c}},5296:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);e.f=a?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),a=n(1702),i=n(8006),o=n(5181),u=n(9670),l=a([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=o.f;return n?l(e,n(t)):e}},1400:function(t,e,n){var r=n(9303),a=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?a(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),a=n(4488);t.exports=function(t){return r(a(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},7658:function(t,e,n){var r=n(2109),a=n(7908),i=n(6244),o=n(3658),u=n(7207),l=n(7293),s=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=s||!c();r({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var e=a(this),n=i(e),r=arguments.length;u(n+r);for(var l=0;l<r;l++)e[n]=arguments[l],n++;return o(e,n),n}})},530:function(t,e,n){n.r(e),n.d(e,{default:function(){return mt}});var r=n(6252);const a=t=>((0,r.dD)("data-v-597feb0d"),t=t(),(0,r.Cn)(),t),i={class:"store-background"},o=a((()=>(0,r._)("div",{class:"main-banner"},[(0,r._)("div",{class:"main-banner-text-container"},[(0,r._)("h1",null," Buy awesome things here..."),(0,r._)("p",{class:"main-banner"},"A simple modular store layout made in Vue.js and TypeScript")])],-1)));function u(t,e,n,a,u,l){const s=(0,r.up)("ProductGallery"),c=(0,r.up)("CheckOut");return(0,r.wg)(),(0,r.iD)("div",i,[o,(0,r.Wm)(s,{onAddToCart:l.updateValue},null,8,["onAddToCart"]),(0,r.Wm)(c,{propValue:u.propValue,propValue2:u.propValue2,propUpdate:u.updated},null,8,["propValue","propValue2","propUpdate"])])}var l=n(3577);const s=t=>((0,r.dD)("data-v-91292ea4"),t=t(),(0,r.Cn)(),t),c={class:"centerAll"},p={class:"image-gallery"},d=s((()=>(0,r._)("h1",null,"MAKE A SELECTION",-1))),f={class:"image-gallery-grid-container"},m=["src","alt"],h=["onClick"];function y(t,e,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",p,[d,(0,r._)("div",{class:"gallery-button-left",onClick:e[0]||(e[0]=t=>o.changeImageArray("left"))},"<"),(0,r._)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.productInventoryArray.slice(0,4),((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"grid-item"},[(0,r._)("img",{class:"gallery-component-image",src:t.imageSrc,alt:t.altText},null,8,m),(0,r._)("figcaption",null,(0,l.zw)(t.name)+" €"+(0,l.zw)(t.price),1),(0,r._)("button",{onClick:n=>{o.showArray(e,t.id)},class:"clean-button"},"Add to cart",8,h)])))),128))]),(0,r._)("div",{class:"gallery-button-right",onClick:e[1]||(e[1]=t=>o.changeImageArray("right"))},">")])])}n(7658);const g=[{id:1,name:"Cup of good Coffee",price:.99,quantityAvailable:20,imageSrc:"coffeeFood",altText:"coffee"},{id:2,name:"Bread",price:3.99,quantityAvailable:200,imageSrc:"coffeeImage",altText:"bread"},{id:3,name:"15kg of Bird Food",price:39.99,quantityAvailable:300,imageSrc:"diffusionBird",altText:"Bird Food"},{id:4,name:"Artisan Cake",price:5.99,quantityAvailable:50,imageSrc:"cakeFood",altText:"Artisan Cake"},{id:5,name:"Secret Purple Cake",price:9.99,quantityAvailable:50,imageSrc:"purpleCake",altText:"Artisan Cake"}];var v={name:"ProductGallery",components:{},props:{images:{type:Array,default:null}},data(){return g[0].imageSrc=n(1680),g[1].imageSrc=n(8182),g[2].imageSrc=n(1955),g[3].imageSrc=n(7563),g[4].imageSrc=n(2152),{imageArrayChoice:null,productInventoryArray:g}},mounted(){this.imageArrayChoice=this.productInventoryArray[0]},methods:{showArray(t=null,e=null){if(null===t||null===e)return;const n=t;this.$emit("add-to-cart",n,e)},changeImageArray(t){const e=this.productInventoryArray.length-1;if("left"===t){const t=this.productInventoryArray.pop();this.productInventoryArray.unshift(t),this.imageArrayChoice=this.productInventoryArray[0]}else if("right"===t){const t=this.productInventoryArray.shift();this.productInventoryArray.push(t),this.imageArrayChoice=this.productInventoryArray[e]}}}},b=n(3744);const w=(0,b.Z)(v,[["render",y],["__scopeId","data-v-91292ea4"]]);var I=w,C=n(9963);const _=t=>((0,r.dD)("data-v-157fde62"),t=t(),(0,r.Cn)(),t),A={class:"shopping-cart-area"},k={class:"grid-shopping-cart"},x={class:"grid-shopping-cart-left"},T={class:"shopping-cart-title"},S={key:0},V=_((()=>(0,r._)("h2",null,"No items selected",-1))),D=[V],q={key:1,class:"shopping-cart-border"},O=_((()=>(0,r._)("h2",null,[(0,r.Uk)("Shopping Cart "),(0,r._)("i",{class:"arrow down"})],-1))),P={style:{color:"rgb(244, 67, 54)"}},z=_((()=>(0,r._)("br",null,null,-1))),j=_((()=>(0,r._)("br",null,null,-1))),E={class:"each-item-area-formatting"},U={class:"cart-image-container"},Q=["src","alt"],M={class:"name-price-cart-formatting"},F={class:"product-name"},L=_((()=>(0,r._)("br",null,null,-1))),N={class:"cart-item-price-formatting"},B=_((()=>(0,r._)("br",null,null,-1))),W=["onUpdate:modelValue","onInput"],G=_((()=>(0,r._)("br",null,null,-1))),K=_((()=>(0,r._)("br",null,null,-1))),Z=["onClick"],Y={class:"grid-shopping-cart-right"},H={class:"special-offer"},R=_((()=>(0,r._)("h2",null,"★ Special Offer! ★",-1))),$={key:0,style:{"text-align":"left"}},J={key:1},X={class:"total-shopping-cart-area"},tt={style:{"padding-top":"1em",margin:"0 auto"}},et={key:0},nt={key:1},rt={key:0,style:{"font-size":"1.6rem"}},at={style:{}},it={style:{"margin-left":"1em"},class:"clean-button"};function ot(t,e,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",k,[(0,r._)("div",x,[(0,r._)("div",T,[0===i.runningTotal?((0,r.wg)(),(0,r.iD)("div",S,D)):((0,r.wg)(),(0,r.iD)("div",q,[O,(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)("Last added "),(0,r._)("span",P,(0,l.zw)(o.showLastAddedItem),1),(0,r.Uk)(" to your cart!")]),(0,r.Uk)(" ( Product ID: "+(0,l.zw)(n.propValue2)+" Item Position: "+(0,l.zw)(n.propValue)+" )",1),z]),j]))]),(0,r.Wm)(C.W3,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.userCart,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"cart-item"},[(0,r._)("div",E,[(0,r._)("div",U,[(0,r._)("image",null,[(0,r._)("img",{class:"each-item-in-cart-image",src:t.imageSrc,alt:t.altText,width:"128",height:"128"},null,8,Q)])]),(0,r._)("div",M,[(0,r._)("span",F,(0,l.zw)(t.name),1),L,(0,r._)("span",N," €"+(0,l.zw)(t.price),1),B,(0,r.Uk)(" Quantity: "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e=>t.quantity=e,min:"0",max:"100",step:"1",onInput:e=>o.updateQuantityInCart(t),onKeydown:e[0]||(e[0]=(...t)=>o.handleIncrementDecrement&&o.handleIncrementDecrement(...t)),style:{width:"2.5rem","font-size":"1.25rem","border-radius":"0.25rem","border-width":"1px"},class:"number-input-quantity"},null,40,W),[[C.nr,t.quantity]]),G,(0,r.Uk)(" Item Subtotal ("+(0,l.zw)(t.quantity)+" items): €"+(0,l.zw)(Math.abs((t.quantity*t.price).toFixed(2))),1),K,(0,r._)("button",{onClick:t=>o.removeItem(n),class:"clean-button shopping-modified-clean-button"},"Delete",8,Z)])])])))),128))])),_:1})]),(0,r._)("div",Y,[(0,r._)("div",H,[R,(0,r._)("div",null,[o.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("p",$,"With 5 or more items in the shopping basket a 10% discount has been applied!")):((0,r.wg)(),(0,r.iD)("p",J,"Buy 5 or more items and get 10% off!"))])])])]),(0,r._)("div",X,[(0,r._)("div",tt,[o.totalQuantity<5?((0,r.wg)(),(0,r.iD)("span",et,[(0,r._)("b",null,"Subtotal ("+(0,l.zw)(o.totalQuantity)+" items): €"+(0,l.zw)(Math.abs(i.runningTotal.toFixed(2))),1)])):o.totalQuantity>4?((0,r.wg)(),(0,r.iD)("span",nt,[(0,r._)("b",null,[(0,r.Uk)("Subtotal ("+(0,l.zw)(o.totalQuantity)+" items): ",1),(0,r._)("s",null,"€"+(0,l.zw)(Math.abs(i.runningTotal.toFixed(2))),1)])])):(0,r.kq)("",!0),(0,r.Wm)(C.uT,null,{default:(0,r.w5)((()=>[o.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("div",rt,[(0,r.Uk)("With 10% discount: ("+(0,l.zw)(o.totalQuantity)+" items): ",1),(0,r._)("span",null,"€"+(0,l.zw)(Math.abs((.9*i.runningTotal).toFixed(2))),1)])):(0,r.kq)("",!0)])),_:1}),(0,r._)("div",at,[(0,r.wy)((0,r._)("button",{style:{},onClick:e[1]||(e[1]=t=>o.emptyShoppingCart()),class:"clean-button"},"Empty Cart",512),[[C.F8,i.runningTotal>0]]),(0,r.wy)((0,r._)("button",it,"Go to Checkout",512),[[C.F8,i.runningTotal>0]])])])])])}var ut=n(7327);class lt{constructor(){(0,ut.Z)(this,"items",void 0),this.items=[]}addItem(t){const e=this.items.find((e=>e.id===t.id));e?e.quantityAvailable++:this.items.push(t)}getItems(){return this.items}}var st={name:"StoreView",components:{},props:{propValue:{type:Number,default:0},propValue2:{type:Number,default:0},propUpdate:{type:Boolean,default:!1}},data(){return{storeInventory:new lt,userCart:[],runningTotal:0,lastItemAddedToCart:null,item:{quantity:0}}},mounted(){this.makeInventory()},watch:{propUpdate(){this.addItemToCart()}},computed:{totalQuantity(){return this.userCart.reduce(((t,e)=>t+e.quantity),0)},showLastAddedItem(){return this.userCart.find((t=>t.id===this.propValue2))?.name||""},itemQuantities(){const t={};for(const e of this.userCart)e.id in t?t[e.id].quantity++:t[e.id]={quantity:1,name:e.name,price:e.price};return t}},methods:{addItemToCart(){this.handleAddItemToCart(this.propValue,this.propValue2)},handleIncrementDecrement(t){38===t.keyCode?(t.preventDefault(),this.item.quantity+=1,this.updateQuantityInCart(this.item)):40===t.keyCode&&(t.preventDefault(),this.item.quantity>0&&(this.item.quantity-=1,this.updateQuantityInCart(this.item)))},updateQuantityInCart(t){const e=this.userCart.find((e=>e.id===t.id));e&&(e.quantity=t.quantity,this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0))},makeInventory(){const t=this.storeInventory;g.forEach((e=>{t.addItem(e)})),this.storeInventory=t;const e=t.getItems();console.log(e)},resetInventory(){console.log("reset"),this.storeInventory=new lt},handleAddItemToCart(t,e){if(null===t||null===e||0===this.storeInventory.getItems().length)return;console.log("TEST",this.storeInventory.getItems()[t]);const n=this.storeInventory.getItems().find((t=>t.id===e));this.runningTotal+=n.price,console.log("TEST",n),this.addItemToShoppingCartIfNotAlreadyThere(n)},addItemToShoppingCartIfNotAlreadyThere(t){null!==t&&(this.userCart.includes(t)?t.quantity++:(t.quantity=1,this.userCart.push(t)))},emptyShoppingCart(){this.userCart=[],this.runningTotal=0},removeItem(t){null!==t&&(this.runningTotal=this.runningTotal-this.userCart[t].price*this.userCart[t].quantity,this.userCart.splice(t,1))}}};const ct=(0,b.Z)(st,[["render",ot],["__scopeId","data-v-157fde62"]]);var pt=ct,dt={name:"StoreView",components:{ProductGallery:I,CheckOut:pt},data(){return{propValue:0,propValue2:0,updated:!1}},methods:{updateValue(t,e){this.propValue=t,this.propValue2=e,this.updated=!this.updated,console.log("VALUE",this.propValue,this.propValue2)}}};const ft=(0,b.Z)(dt,[["render",u],["__scopeId","data-v-597feb0d"]]);var mt=ft},7563:function(t,e,n){t.exports=n.p+"img/cake.c78d5e5e.jpg"},8182:function(t,e,n){t.exports=n.p+"img/coffee_food.f7634650.jpg"},1955:function(t,e,n){t.exports=n.p+"img/diffBird.30532a98.jpg"},2152:function(t,e,n){t.exports=n.p+"img/purple_cake.674eb19a.jpg"},1680:function(t,e,n){t.exports=n.p+"img/second_coffee.c1bb6620.jpg"},7327:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function i(t){var e=a(t,"string");return"symbol"===r(e)?e:String(e)}function o(t,e,n){return e=i(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=530.ce5f5cc4.js.map