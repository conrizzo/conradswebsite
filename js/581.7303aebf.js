"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[581],{1318:function(t,e,n){var r=n(5656),i=n(1400),a=n(6244),o=function(t){return function(e,n,o){var u,s=r(e),l=a(s),c=i(o,l);if(t&&n!=n){while(l>c)if(u=s[c++],u!=u)return!0}else for(;l>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){var r=n(9781),i=n(3157),a=TypeError,o=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(i(t)&&!o(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9920:function(t,e,n){var r=n(2597),i=n(3887),a=n(1236),o=n(3070);t.exports=function(t,e,n){for(var u=i(e),s=o.f,l=a.f,c=0;c<u.length;c++){var d=u[c];r(t,d)||n&&r(n,d)||s(t,d,l(e,d))}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),i=n(1236).f,a=n(8880),o=n(8052),u=n(3072),s=n(9920),l=n(4705);t.exports=function(t,e){var n,c,d,p,f,m,y=t.target,h=t.global,g=t.stat;if(c=h?r:g?r[y]||u(y,{}):(r[y]||{}).prototype,c)for(d in e){if(f=e[d],t.dontCallGetSet?(m=i(c,d),p=m&&m.value):p=c[d],n=l(h?d:y+(g?".":"#")+d,t.forced),!n&&void 0!==p){if(typeof f==typeof p)continue;s(f,p)}(t.sham||p&&p.sham)&&a(f,"sham",!0),o(c,d,f,t)}}},8361:function(t,e,n){var r=n(1702),i=n(7293),a=n(4326),o=Object,u=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):o(t)}:o},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,e,n){var r=n(7293),i=n(614),a=/#|\.prototype\./,o=function(t,e){var n=s[u(t)];return n==c||n!=l&&(i(e)?r(e):!!e)},u=o.normalize=function(t){return String(t).replace(a,".").toLowerCase()},s=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},1236:function(t,e,n){var r=n(9781),i=n(6916),a=n(5296),o=n(9114),u=n(5656),s=n(4948),l=n(2597),c=n(4664),d=Object.getOwnPropertyDescriptor;e.f=r?d:function(t,e){if(t=u(t),e=s(e),c)try{return d(t,e)}catch(n){}if(l(t,e))return o(!i(a.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),a=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(1702),i=n(2597),a=n(5656),o=n(1318).indexOf,u=n(3501),s=r([].push);t.exports=function(t,e){var n,r=a(t),l=0,c=[];for(n in r)!i(u,n)&&i(r,n)&&s(c,n);while(e.length>l)i(r,n=e[l++])&&(~o(c,n)||s(c,n));return c}},5296:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),i=n(1702),a=n(8006),o=n(5181),u=n(9670),s=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(u(t)),n=o.f;return n?s(e,n(t)):e}},1400:function(t,e,n){var r=n(9303),i=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):a(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7658:function(t,e,n){var r=n(2109),i=n(7908),a=n(6244),o=n(3658),u=n(7207),s=n(7293),l=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=l||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=i(this),n=a(e),r=arguments.length;u(n+r);for(var s=0;s<r;s++)e[n]=arguments[s],n++;return o(e,n),n}})},2581:function(t,e,n){n.r(e),n.d(e,{default:function(){return rt}});var r=n(6252),i=n(3577),a=n(9963);const o=t=>((0,r.dD)("data-v-780ac1a4"),t=t(),(0,r.Cn)(),t),u={class:"store-background"},s=o((()=>(0,r._)("div",{class:"main-banner"},[(0,r._)("div",{class:"main-banner-text-container"},[(0,r._)("h1",null," Buy awesome things here..."),(0,r._)("p",{class:"main-banner"},"A simple modular store layout made in Vue.js and TypeScript")])],-1))),l={class:"shopping-cart-area"},c={class:"grid-shopping-cart"},d={class:"grid-shopping-cart-left"},p={class:"shopping-cart-title"},f={key:0},m=o((()=>(0,r._)("h2",null,"No items selected",-1))),y=[m],h={key:1,class:"shopping-cart-border"},g=o((()=>(0,r._)("h2",null,[(0,r.Uk)("Shopping Cart "),(0,r._)("i",{class:"arrow down"})],-1))),v=o((()=>(0,r._)("br",null,null,-1))),b={class:"each-item-area-formatting"},w=["src","alt"],I={class:"name-price-cart-formatting"},C={class:"product-name"},_=o((()=>(0,r._)("br",null,null,-1))),A=["onClick"],x=o((()=>(0,r._)("br",null,null,-1))),k=["onUpdate:modelValue","onInput"],S=o((()=>(0,r._)("br",null,null,-1))),T={class:"grid-shopping-cart-right"},q={class:"special-offer"},D=o((()=>(0,r._)("h2",null,"★ Special Offer! ★",-1))),O={key:0,style:{"text-align":"left"}},P=o((()=>(0,r._)("br",null,null,-1))),j={key:1},E={class:"total-shopping-cart-area"},z={style:{"padding-top":"1em",margin:"0 auto"}},M={key:0,style:{"font-size":"1.6rem"}},Q={style:{"padding-top":"1em"}},F={style:{"margin-left":"1em"},class:"clean-button"};function L(t,e,n,o,m,L){const U=(0,r.up)("ProductGallery");return(0,r.wg)(),(0,r.iD)("div",u,[s,(0,r.Wm)(U,{onAddToCart:L.handleAddItemToCart},null,8,["onAddToCart"]),(0,r._)("div",l,[(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("div",p,[0===m.runningTotal?((0,r.wg)(),(0,r.iD)("div",f,y)):((0,r.wg)(),(0,r.iD)("div",h,[g,(0,r._)("div",null,[(0,r._)("p",null,'Last added "'+(0,i.zw)(L.showLastAddedItem)+'" to your cart!',1)]),v]))]),(0,r.Wm)(a.W3,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.userCart,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"cart-item"},[(0,r._)("div",b,[(0,r._)("image",null,[(0,r._)("img",{class:"each-item-in-cart-image",src:t.imageSrc,alt:t.altText,width:"128",height:"128"},null,8,w)]),(0,r._)("span",I,[(0,r._)("span",C,(0,i.zw)(t.name),1),_,(0,r.Uk)(" €"+(0,i.zw)(t.price)+" ",1),(0,r._)("button",{onClick:t=>L.removeItem(n),class:"clean-button shopping-modified-clean-button"},"Delete",8,A),x,(0,r.Uk)(" Quantity: "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e=>t.quantity=e,min:"0",max:"100",step:"1",onInput:e=>L.updateQuantityInCart(t),onKeydown:e[0]||(e[0]=(...t)=>L.handleIncrementDecrement&&L.handleIncrementDecrement(...t)),style:{width:"2.5rem","font-size":"1.25rem","border-radius":"0.25rem","border-width":"1px"},class:"number-input-quantity"},null,40,k),[[a.nr,t.quantity]]),S,(0,r.Uk)("Item Subtotal ("+(0,i.zw)(t.quantity)+" items): €"+(0,i.zw)(Math.abs((t.quantity*t.price).toFixed(2))),1)])])])))),128))])),_:1})]),(0,r._)("div",T,[(0,r._)("div",q,[D,(0,r._)("div",null,[L.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("p",O,[(0,r.Uk)("You have 5 or more items!"),P,(0,r.Uk)("10% discount has been applied.")])):((0,r.wg)(),(0,r.iD)("p",j,"Buy 5 or more items and get 10% off!"))])])])]),(0,r._)("div",E,[(0,r._)("div",z,[(0,r._)("p",null,[(0,r._)("b",null,"Subtotal ("+(0,i.zw)(L.totalQuantity)+" items): €"+(0,i.zw)(Math.abs(m.runningTotal.toFixed(2))),1)]),(0,r.Wm)(a.uT,null,{default:(0,r.w5)((()=>[L.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("div",M,[(0,r.Uk)("After 10% discount: ("+(0,i.zw)(L.totalQuantity)+" items): ",1),(0,r._)("span",null,"€"+(0,i.zw)(Math.abs((.9*m.runningTotal).toFixed(2))),1)])):(0,r.kq)("",!0)])),_:1}),(0,r._)("div",Q,[(0,r.wy)((0,r._)("button",{style:{},onClick:e[1]||(e[1]=t=>L.emptyShoppingCart()),class:"clean-button"},"Empty Cart",512),[[a.F8,m.runningTotal>0]]),(0,r.wy)((0,r._)("button",F,"Go to Checkout",512),[[a.F8,m.runningTotal>0]])])])])])])}n(7658);const U=t=>((0,r.dD)("data-v-704447e0"),t=t(),(0,r.Cn)(),t),N={class:"centerAll"},B={class:"image-gallery"},G=U((()=>(0,r._)("h1",null,"MAKE A SELECTION",-1))),K={class:"image-gallery-grid-container"},V=["src","alt"],W=["onClick"];function Y(t,e,n,a,o,u){return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("div",B,[G,(0,r._)("div",{class:"gallery-button-left",onClick:e[0]||(e[0]=t=>u.changeImageArray("left"))},"<"),(0,r._)("div",K,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.productInventoryArray.slice(0,4),((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"grid-item"},[(0,r._)("img",{class:"gallery-component-image",src:t.imageSrc,alt:t.altText},null,8,V),(0,r._)("figcaption",null,(0,i.zw)(t.name)+" €"+(0,i.zw)(t.price),1),(0,r._)("button",{onClick:n=>{u.showArray(e,t.id)},class:"clean-button"},"Add to cart",8,W)])))),128))]),(0,r._)("div",{class:"gallery-button-right",onClick:e[1]||(e[1]=t=>u.changeImageArray("right"))},">")])])}const Z=[{id:1,name:"Cup of good Coffee",price:.99,quantityAvailable:20,imageSrc:"coffeeFood",altText:"coffee"},{id:2,name:"Bread",price:3.99,quantityAvailable:200,imageSrc:"coffeeImage",altText:"bread"},{id:3,name:"15kg of Bird Food",price:39.99,quantityAvailable:300,imageSrc:"diffusionBird",altText:"Bird Food"},{id:4,name:"Artisan Cake",price:5.99,quantityAvailable:50,imageSrc:"cakeFood",altText:"Artisan Cake"},{id:5,name:"Secret Purple Cake",price:9.99,quantityAvailable:50,imageSrc:"purpleCake",altText:"Artisan Cake"}];var H={name:"ProductGallery",components:{},props:{images:{type:Array,default:null}},data(){return Z[0].imageSrc=n(1680),Z[1].imageSrc=n(8182),Z[2].imageSrc=n(1955),Z[3].imageSrc=n(7563),Z[4].imageSrc=n(2152),{imageArrayChoice:null,productInventoryArray:Z}},mounted(){this.imageArrayChoice=this.productInventoryArray[0]},methods:{showArray(t=null,e=null){if(null===t||null===e)return;const n=t;this.$emit("add-to-cart",n,e)},changeImageArray(t){const e=this.productInventoryArray.length-1;if("left"===t){const t=this.productInventoryArray.pop();this.productInventoryArray.unshift(t),this.imageArrayChoice=this.productInventoryArray[0]}else if("right"===t){const t=this.productInventoryArray.shift();this.productInventoryArray.push(t),this.imageArrayChoice=this.productInventoryArray[e]}}}},R=n(3744);const $=(0,R.Z)(H,[["render",Y],["__scopeId","data-v-704447e0"]]);var J=$,X=n(7327);class tt{constructor(){(0,X.Z)(this,"items",void 0),this.items=[]}addItem(t){const e=this.items.find((e=>e.id===t.id));e?e.quantityAvailable++:this.items.push(t)}getItems(){return this.items}}var et={name:"StoreView",components:{ProductGallery:J},props:{},data(){return{storeInventory:new tt,userCart:[],runningTotal:0,lastItemAddedToCart:null,item:{quantity:0}}},mounted(){this.makeInventory()},computed:{totalQuantity(){return this.userCart.reduce(((t,e)=>t+e.quantity),0)},showLastAddedItem(){const t=this.userCart.length-1,e=this.userCart[t];if(void 0!==e)return e["name"]},itemQuantities(){const t={};for(const e of this.userCart)e.id in t?t[e.id].quantity++:t[e.id]={quantity:1,name:e.name,price:e.price};return t}},methods:{handleIncrementDecrement(t){38===t.keyCode?(t.preventDefault(),this.item.quantity+=1,this.updateQuantityInCart(this.item)):40===t.keyCode&&(t.preventDefault(),this.item.quantity>0&&(this.item.quantity-=1,this.updateQuantityInCart(this.item)))},updateQuantityInCart(t){const e=this.userCart.find((e=>e.id===t.id));e&&(e.quantity=t.quantity,this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0))},makeInventory(){const t=this.storeInventory;Z.forEach((e=>{t.addItem(e)})),this.storeInventory=t;const e=t.getItems();console.log(e)},resetInventory(){console.log("reset"),this.storeInventory=new tt},handleAddItemToCart(t,e){if(null===t||null===e||0===this.storeInventory.getItems().length)return;console.log("TEST",this.storeInventory.getItems()[t]);const n=this.storeInventory.getItems().find((t=>t.id===e));this.runningTotal+=n.price,console.log("TEST",n),this.addItemToShoppingCartIfNotAlreadyThere(n)},addItemToShoppingCartIfNotAlreadyThere(t){null!==t&&(this.userCart.includes(t)?t.quantity++:(t.quantity=1,this.userCart.push(t)))},emptyShoppingCart(){this.userCart=[],this.runningTotal=0},removeItem(t){null!==t&&(this.runningTotal=this.runningTotal-this.userCart[t].price*this.userCart[t].quantity,this.userCart.splice(t,1))}}};const nt=(0,R.Z)(et,[["render",L],["__scopeId","data-v-780ac1a4"]]);var rt=nt},7563:function(t,e,n){t.exports=n.p+"img/cake.c78d5e5e.jpg"},8182:function(t,e,n){t.exports=n.p+"img/coffee_food.f7634650.jpg"},1955:function(t,e,n){t.exports=n.p+"img/diffBird.30532a98.jpg"},2152:function(t,e,n){t.exports=n.p+"img/purple_cake.674eb19a.jpg"},1680:function(t,e,n){t.exports=n.p+"img/second_coffee.c1bb6620.jpg"},7327:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function a(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)}function o(t,e,n){return e=a(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=581.7303aebf.js.map