(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[833],{6223:function(t,e,r){"use strict";r.d(e,{a:function(){return o}});const n=r(376),i=n.keys().map(n),o=[{id:1,name:"Cup of good Coffee",price:.99,quantityAvailable:20,imageSrc:"@/images/cup_of_coffee.jpg",altText:"coffee",description:"This is some serious gourmet coffee, made by someone who cares that it tastes good!"},{id:2,name:"Bread",price:3.99,quantityAvailable:200,imageSrc:"coffeeImage",altText:"bread",description:"Freshly baked bread with that nice fresh bread smell!"},{id:3,name:"15kg of Bird Food",price:39.99,quantityAvailable:300,imageSrc:"diffusionBird",altText:"Bird Food",description:"Good bird food that makes birds happy!"},{id:4,name:"Artisan Cake",price:5.99,quantityAvailable:50,imageSrc:"cakeFood",altText:"Artisan Cake",description:"Cake that goes well with coffee!"},{id:5,name:"Pizza",price:9.99,quantityAvailable:5,imageSrc:"pizza",altText:"pizza",description:"Freshly made classic pizza!"},{id:6,name:"Secret Purple Cake",price:9.99,quantityAvailable:50,imageSrc:"purpleCake",altText:"Artisan Cake",description:"Cake that is so good you feel guilty buying it!"}].map(((t,e)=>({...t,imageSrc:i[e]})))},5925:function(t,e,r){var n,i;
/*!
 * tiny-cookie - A tiny cookie manipulation plugin
 * https://github.com/Alex1990/tiny-cookie
 * Under the MIT license | (c) Alex Chao
 */!function(o,a){n=a,i="function"===typeof n?n.call(e,r,e,t):n,void 0===i||(t.exports=i)}(0,(function(){"use strict";function t(e,r,n){if(void 0===r)return t.get(e);null===r?t.remove(e):t.set(e,r,n)}function e(t){return t.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")}function r(t){var e="";for(var r in t)if(t.hasOwnProperty(r)){if("expires"===r){var i=t[r];"object"!==typeof i&&(i+="number"===typeof i?"D":"",i=n(i)),t[r]=i.toUTCString()}if("secure"===r){t[r]&&(e+=";"+r);continue}e+=";"+r+"="+t[r]}return t.hasOwnProperty("path")||(e+=";path=/"),e}function n(t){var e=new Date,r=t.charAt(t.length-1),n=parseInt(t,10);switch(r){case"Y":e.setFullYear(e.getFullYear()+n);break;case"M":e.setMonth(e.getMonth()+n);break;case"D":e.setDate(e.getDate()+n);break;case"h":e.setHours(e.getHours()+n);break;case"m":e.setMinutes(e.getMinutes()+n);break;case"s":e.setSeconds(e.getSeconds()+n);break;default:e=new Date(t)}return e}return t.enabled=function(){var e,r="__test_key";return document.cookie=r+"=1",e=!!document.cookie,e&&t.remove(r),e},t.get=function(t,r){if("string"!==typeof t||!t)return null;t="(?:^|; )"+e(t)+"(?:=([^;]*?))?(?:;|$)";var n=new RegExp(t),i=n.exec(document.cookie);return null!==i?r?i[1]:decodeURIComponent(i[1]):null},t.getRaw=function(e){return t.get(e,!0)},t.set=function(t,e,n,i){!0!==n&&(i=n,n=!1),i=r(i||{});var o=t+"="+(n?e:encodeURIComponent(e))+i;document.cookie=o},t.setRaw=function(e,r,n){t.set(e,r,!0,n)},t.remove=function(e){t.set(e,"a",{expires:new Date})},t}))},4253:function(t,e,r){(function(){Number.isInteger=Number.isInteger||function(t){return"number"===typeof t&&isFinite(t)&&Math.floor(t)===t};var e=r(5925),n={install:function(t){t.prototype.$cookie=this,t.cookie=this},set:function(t,r,n){var i=n;return Number.isInteger(n)&&(i={expires:n}),e.set(t,r,i)},get:function(t){return e.get(t)},delete:function(t,e){var r={expires:-1};void 0!==e&&(r=Object.assign(e,r)),this.set(t,"",r)}};t.exports=n})()},6833:function(t,e,r){"use strict";r.d(e,{Z:function(){return nt}});var n=r(6252),i=r(3577),o=r(9963);const a=t=>((0,n.dD)("data-v-73e52543"),t=t(),(0,n.Cn)(),t),s={class:"shopping-cart-area"},u={class:"grid-shopping-cart"},c={class:"grid-shopping-cart-left"},l={class:"shopping-cart-title"},p={key:0},d=a((()=>(0,n._)("h2",null,"No items selected",-1))),f=[d],m={key:1,class:"shopping-cart-border"},h=a((()=>(0,n._)("h2",null,[(0,n.Uk)("Shopping Cart "),(0,n._)("span",{class:"arrow down"})],-1))),g={style:{color:"rgb(244, 67, 54)"}},y=a((()=>(0,n._)("br",null,null,-1))),v={class:"each-item-area-formatting"},b={class:"cart-image-container"},w=["src","alt"],I={class:"name-price-cart-formatting"},_={class:"product-name"},C=a((()=>(0,n._)("br",null,null,-1))),k={class:"cart-item-price-formatting"},x=a((()=>(0,n._)("br",null,null,-1))),T={style:{display:"flex"}},S=["onClick"],P=["onUpdate:modelValue","onInput"],O=["onClick"],z=a((()=>(0,n._)("br",null,null,-1))),D=a((()=>(0,n._)("br",null,null,-1))),j=["onClick"],q={class:"grid-shopping-cart-right"},A={class:"special-offer"},M=a((()=>(0,n._)("h2",null,"Special Offer!",-1))),F={key:0,style:{"text-align":"left"}},N={key:1},U={style:{margin:"0 auto"}},Q={key:0},E={key:1},B={key:0,class:"discount-text"},G={class:"bottom-checkout-button-container"},L={key:0},W={class:"clean-button"},R={key:1},Z=a((()=>(0,n._)("button",{class:"clean-button"},"Go Back ",-1))),V={class:"clean-button"};function Y(t,e,r,a,d,Y){const $=(0,n.up)("router-link"),H=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",u,[(0,n._)("div",c,[(0,n._)("div",l,[0===d.runningTotal?((0,n.wg)(),(0,n.iD)("div",p,f)):((0,n.wg)(),(0,n.iD)("div",m,[h,(0,n._)("div",null,[(0,n._)("span",null,[(0,n.Uk)("Last added "),(0,n._)("span",g,(0,i.zw)(Y.showLastAddedItem),1),(0,n.Uk)(" to your cart!")]),y,(0,n.Uk)(" Product ID: "+(0,i.zw)(r.propProductIndexInGallery)+" Item Position: "+(0,i.zw)(r.propProductIdentificationNumber),1)])]))]),(0,n.Wm)(o.W3,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.userCart,((t,e)=>((0,n.wg)(),(0,n.iD)("main",{key:t.id,class:"cart-item"},[(0,n._)("div",v,[(0,n._)("div",b,[(0,n.Wm)($,{to:{name:"ProductPageView",params:{id:t.id,name:t.name,image:t.imageSrc,price:t.price}}},{default:(0,n.w5)((()=>[(0,n._)("image",null,[(0,n._)("img",{class:"each-item-in-cart-image",src:t.imageSrc,alt:t.imageSrc,width:"128",height:"128"},null,8,w)])])),_:2},1032,["to"])]),(0,n._)("div",I,[(0,n._)("span",_,(0,i.zw)(t.name),1),C,(0,n._)("span",k," €"+(0,i.zw)(t.price),1),x,(0,n.Uk)(" Quantity: "),(0,n._)("div",T,[(0,n._)("button",{onClick:e=>Y.handlePlusMinusIncrementDecrementButtons(t,-1),style:{"font-size":"1.25rem","margin-right":"0.1rem",width:"1.7rem",cursor:"pointer"}},"-",8,S),(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":e=>t.quantity=e,min:"0",max:"100",step:"1",onInput:e=>Y.updateQuantityInCart(t),style:{width:"3.2rem","font-size":"1.25rem","border-radius":"0.25rem","border-width":"1px"}},null,40,P),[[o.nr,t.quantity]]),(0,n._)("button",{onClick:e=>Y.handlePlusMinusIncrementDecrementButtons(t,1),style:{"font-size":"1.25rem","margin-left":"0.1rem",width:"1.7rem",cursor:"pointer"}},"+",8,O)]),z,(0,n.Uk)(" Item Subtotal ("+(0,i.zw)(t.quantity)+" items): €"+(0,i.zw)(Math.abs((t.quantity*t.price).toFixed(2))),1),D,(0,n._)("button",{onClick:t=>Y.removeItem(e),class:"clean-button shopping-modified-clean-button"},"Delete",8,j)])])])))),128))])),_:1})]),(0,n._)("div",q,[(0,n._)("div",A,[M,(0,n._)("div",null,[Y.totalQuantity>=5?((0,n.wg)(),(0,n.iD)("p",F,"With 5 or more items in the shopping basket a 10% discount has been applied!")):((0,n.wg)(),(0,n.iD)("p",N,"Buy 5 or more items and get 10% off!"))])])])]),(0,n._)("div",null,[(0,n._)("div",U,[(0,n._)("div",{class:(0,i.C_)(["total-cost-area",{"lower-height-total-cost-area":Y.totalQuantity<5}])},[Y.totalQuantity<5?((0,n.wg)(),(0,n.iD)("span",Q,[(0,n._)("b",null,"Subtotal ("+(0,i.zw)(Y.totalQuantity)+" items): €"+(0,i.zw)(Math.abs(d.runningTotal.toFixed(2))),1)])):Y.totalQuantity>4?((0,n.wg)(),(0,n.iD)("span",E,[(0,n._)("b",null,[(0,n.Uk)("Subtotal ("+(0,i.zw)(Y.totalQuantity)+" items): ",1),(0,n._)("s",null,"€"+(0,i.zw)(Math.abs(d.runningTotal.toFixed(2))),1)])])):(0,n.kq)("",!0),(0,n.Wm)(o.uT,null,{default:(0,n.w5)((()=>[Y.totalQuantity>=5?((0,n.wg)(),(0,n.iD)("div",B,[(0,n.Uk)("With 10% discount: ("+(0,i.zw)(Y.totalQuantity)+" items): ",1),(0,n._)("span",null,"€"+(0,i.zw)(Math.abs((.9*d.runningTotal).toFixed(2))),1)])):(0,n.kq)("",!0)])),_:1})],2),(0,n._)("div",G,[(0,n.wy)((0,n._)("button",{onClick:e[0]||(e[0]=t=>Y.emptyShoppingCart()),class:"clean-button button-at-bottom-right-space"},"Empty Cart ",512),[[o.F8,d.runningTotal>0]]),r.showGoToCheckOutButton?((0,n.wg)(),(0,n.iD)("div",L,[(0,n.Wm)(H,{to:"/projects/store/checkout"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("button",W,"Go to Checkout ",512),[[o.F8,d.runningTotal>0]])])),_:1})])):((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Wm)(H,{class:"button-at-bottom-right-space",to:"/projects/store/store"},{default:(0,n.w5)((()=>[Z])),_:1}),(0,n.wy)((0,n._)("button",V,"Purchase Items ",512),[[o.F8,d.runningTotal>0]])]))])])])])}r(560);var $=r(7327);class H{constructor(){(0,$.Z)(this,"items",void 0),this.items=[]}addItem(t){const e=this.items.find((e=>e.id===t.id));e?e.quantityAvailable++:this.items.push(t)}getItems(){return this.items}}var J=r(6223),K=r(4253),X=r.n(K),tt={name:"StoreView",components:{},props:{propProductIdentificationNumber:{type:Number,default:0},propProductIndexInGallery:{type:Number,default:0},propUpdate:{type:Boolean,default:!1},showGoToCheckOutButton:{type:Boolean,default:!0},propProductPageAddItemToCart:{type:Array,required:!1}},data(){return{storeInventory:new H,userCart:[],runningTotal:0,lastItemAddedToCart:null,item:{quantity:0}}},created(){const t=X().get("userCart");t&&(this.userCart=JSON.parse(t))},mounted(){this.makeInventory(),this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0)},watch:{propProductPageAddItemToCart(){this.handleAddItemToCart(0,parseInt(this.propProductPageAddItemToCart[0]))},propUpdate(){this.addItemToCart()},userCart:{handler(t){X().set("userCart",JSON.stringify(t))},deep:!0}},computed:{itemTotal(){return this.userCart.map((t=>Math.abs((t.quantity*t.price).toFixed(2))))},totalQuantity(){return this.userCart.reduce(((t,e)=>t+e.quantity),0)},showLastAddedItem(){return this.userCart.find((t=>t.id===this.propProductIndexInGallery))?.name||""},itemQuantities(){const t={};for(const e of this.userCart)e.id in t?t[e.id].quantity++:t[e.id]={quantity:1,name:e.name,price:e.price};return t}},methods:{addItemToCart(){this.handleAddItemToCart(this.propProductIdentificationNumber,this.propProductIndexInGallery)},saveUserCartToCookies(){X().set("userCart",JSON.stringify([this.userCart]),{expires:3})},removeItemFromCartIfQuantityIsZero(t){0===t.quantity&&this.removeItem(this.userCart.findIndex((e=>e.id===t.id)))},handlePlusMinusIncrementDecrementButtons(t,e){const r=t.quantity+e;r>=0&&r<=100&&(t.quantity=r,this.updateQuantityInCart(t)),this.removeItemFromCartIfQuantityIsZero(t)},updateQuantityInCart(t){const e=this.userCart.find((e=>e.id===t.id));e&&(e.quantity=t.quantity,this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0)),this.removeItemFromCartIfQuantityIsZero(t)},makeInventory(){const t=this.storeInventory;J.a.forEach((e=>{t.addItem(e)})),this.storeInventory=t},resetInventory(){this.storeInventory=new H},handleAddItemToCart(t,e){if(null===t&&null!==e){const t=this.storeInventory.getItems().find((t=>t.id===e));return this.runningTotal+=t.price,void this.addItemToShoppingCartIfNotAlreadyThere(t)}if(null===t||null===e||0===this.storeInventory.getItems().length)return;const r=this.storeInventory.getItems().find((t=>t.id===e));this.runningTotal+=r.price,this.addItemToShoppingCartIfNotAlreadyThere(r)},addItemToShoppingCartIfNotAlreadyThere(t){if(null===t)return;const e=this.userCart.findIndex((e=>e.id===t.id));-1===e?(t.quantity=1,this.userCart.push(t)):this.userCart[e].quantity++},emptyShoppingCart(){this.userCart=[],this.runningTotal=0},removeItem(t){null===t||void 0===t||t<0||(this.runningTotal=this.runningTotal-this.userCart[t].price*this.userCart[t].quantity,this.userCart.splice(t,1))}}},et=r(3744);const rt=(0,et.Z)(tt,[["render",Y],["__scopeId","data-v-73e52543"]]);var nt=rt},376:function(t,e,r){var n={"./1_cup_of_coffee.jpg":2689,"./2_bakery_food.jpg":7473,"./3_bird_food.jpg":1692,"./4_cake.jpg":7181,"./5_self-made-pizza.jpg":4396,"./6_purple_cake.jpg":7673};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id=376},2689:function(t,e,r){"use strict";t.exports=r.p+"img/1_cup_of_coffee.c1bb6620.jpg"},7473:function(t,e,r){"use strict";t.exports=r.p+"img/2_bakery_food.f7634650.jpg"},1692:function(t,e,r){"use strict";t.exports=r.p+"img/3_bird_food.30532a98.jpg"},7181:function(t,e,r){"use strict";t.exports=r.p+"img/4_cake.c78d5e5e.jpg"},4396:function(t,e,r){"use strict";t.exports=r.p+"img/5_self-made-pizza.9c2e05a6.jpg"},7673:function(t,e,r){"use strict";t.exports=r.p+"img/6_purple_cake.674eb19a.jpg"},4328:function(t,e,r){"use strict";var n=r(5290),i=r(7578),o=r(6310),a=function(t){return function(e,r,a){var s,u=n(e),c=o(u),l=i(a,c);if(t&&r!==r){while(c>l)if(s=u[l++],s!==s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},5649:function(t,e,r){"use strict";var n=r(7697),i=r(2297),o=TypeError,a=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(i(t)&&!a(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:function(t,e,r){"use strict";var n=r(6812),i=r(9152),o=r(2474),a=r(2560);t.exports=function(t,e,r){for(var s=i(e),u=a.f,c=o.f,l=0;l<s.length;l++){var p=s[l];n(t,p)||r&&n(r,p)||u(t,p,c(e,p))}}},5565:function(t){"use strict";var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},2739:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,e,r){"use strict";var n=r(9037),i=r(2474).f,o=r(5773),a=r(1880),s=r(5014),u=r(8758),c=r(5266);t.exports=function(t,e){var r,l,p,d,f,m,h=t.target,g=t.global,y=t.stat;if(l=g?n:y?n[h]||s(h,{}):(n[h]||{}).prototype,l)for(p in e){if(f=e[p],t.dontCallGetSet?(m=i(l,p),d=m&&m.value):d=l[p],r=c(g?p:h+(y?".":"#")+p,t.forced),!r&&void 0!==d){if(typeof f==typeof d)continue;u(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),a(l,p,f,t)}}},4413:function(t,e,r){"use strict";var n=r(8844),i=r(3689),o=r(6648),a=Object,s=n("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?s(t,""):a(t)}:a},2297:function(t,e,r){"use strict";var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},5266:function(t,e,r){"use strict";var n=r(3689),i=r(9985),o=/#|\.prototype\./,a=function(t,e){var r=u[s(t)];return r===l||r!==c&&(i(e)?n(e):!!e)},s=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},6310:function(t,e,r){"use strict";var n=r(3126);t.exports=function(t){return n(t.length)}},8828:function(t){"use strict";var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},2474:function(t,e,r){"use strict";var n=r(7697),i=r(2615),o=r(9556),a=r(5684),s=r(5290),u=r(8360),c=r(6812),l=r(8506),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=s(t),e=u(e),l)try{return p(t,e)}catch(r){}if(c(t,e))return a(!i(o.f,t,e),t[e])}},2741:function(t,e,r){"use strict";var n=r(4948),i=r(2739),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},7518:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},4948:function(t,e,r){"use strict";var n=r(8844),i=r(6812),o=r(5290),a=r(4328).indexOf,s=r(7248),u=n([].push);t.exports=function(t,e){var r,n=o(t),c=0,l=[];for(r in n)!i(s,r)&&i(n,r)&&u(l,r);while(e.length>c)i(n,r=e[c++])&&(~a(l,r)||u(l,r));return l}},9556:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!r.call({1:2},1);e.f=i?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},9152:function(t,e,r){"use strict";var n=r(6058),i=r(8844),o=r(2741),a=r(7518),s=r(5027),u=i([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(s(t)),r=a.f;return r?u(e,r(t)):e}},7578:function(t,e,r){"use strict";var n=r(8700),i=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):o(r,e)}},5290:function(t,e,r){"use strict";var n=r(4413),i=r(4684);t.exports=function(t){return n(i(t))}},8700:function(t,e,r){"use strict";var n=r(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},3126:function(t,e,r){"use strict";var n=r(8700),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},560:function(t,e,r){"use strict";var n=r(9989),i=r(690),o=r(6310),a=r(5649),s=r(5565),u=r(3689),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=c||!l();n({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var e=i(this),r=o(e),n=arguments.length;s(r+n);for(var u=0;u<n;u++)e[r]=arguments[u],r++;return a(e,r),r}})},7327:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function o(t){var e=i(t,"string");return"symbol"==n(e)?e:String(e)}function a(t,e,r){return e=o(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=833.a974ef5d.js.map