(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[662],{6223:function(t,e,n){"use strict";n.d(e,{a:function(){return r}});const r=[{id:1,name:"Cup of good Coffee",price:.99,quantityAvailable:20,imageSrc:"coffeeFood",altText:"coffee"},{id:2,name:"Bread",price:3.99,quantityAvailable:200,imageSrc:"coffeeImage",altText:"bread"},{id:3,name:"15kg of Bird Food",price:39.99,quantityAvailable:300,imageSrc:"diffusionBird",altText:"Bird Food"},{id:4,name:"Artisan Cake",price:5.99,quantityAvailable:50,imageSrc:"cakeFood",altText:"Artisan Cake"},{id:5,name:"Secret Purple Cake",price:9.99,quantityAvailable:50,imageSrc:"purpleCake",altText:"Artisan Cake"}]},5925:function(t,e,n){var r,i;
/*!
 * tiny-cookie - A tiny cookie manipulation plugin
 * https://github.com/Alex1990/tiny-cookie
 * Under the MIT license | (c) Alex Chao
 */!function(o,a){r=a,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i)}(0,(function(){"use strict";function t(e,n,r){if(void 0===n)return t.get(e);null===n?t.remove(e):t.set(e,n,r)}function e(t){return t.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")}function n(t){var e="";for(var n in t)if(t.hasOwnProperty(n)){if("expires"===n){var i=t[n];"object"!==typeof i&&(i+="number"===typeof i?"D":"",i=r(i)),t[n]=i.toUTCString()}if("secure"===n){t[n]&&(e+=";"+n);continue}e+=";"+n+"="+t[n]}return t.hasOwnProperty("path")||(e+=";path=/"),e}function r(t){var e=new Date,n=t.charAt(t.length-1),r=parseInt(t,10);switch(n){case"Y":e.setFullYear(e.getFullYear()+r);break;case"M":e.setMonth(e.getMonth()+r);break;case"D":e.setDate(e.getDate()+r);break;case"h":e.setHours(e.getHours()+r);break;case"m":e.setMinutes(e.getMinutes()+r);break;case"s":e.setSeconds(e.getSeconds()+r);break;default:e=new Date(t)}return e}return t.enabled=function(){var e,n="__test_key";return document.cookie=n+"=1",e=!!document.cookie,e&&t.remove(n),e},t.get=function(t,n){if("string"!==typeof t||!t)return null;t="(?:^|; )"+e(t)+"(?:=([^;]*?))?(?:;|$)";var r=new RegExp(t),i=r.exec(document.cookie);return null!==i?n?i[1]:decodeURIComponent(i[1]):null},t.getRaw=function(e){return t.get(e,!0)},t.set=function(t,e,r,i){!0!==r&&(i=r,r=!1),i=n(i||{});var o=t+"="+(r?e:encodeURIComponent(e))+i;document.cookie=o},t.setRaw=function(e,n,r){t.set(e,n,!0,r)},t.remove=function(e){t.set(e,"a",{expires:new Date})},t}))},4253:function(t,e,n){(function(){Number.isInteger=Number.isInteger||function(t){return"number"===typeof t&&isFinite(t)&&Math.floor(t)===t};var e=n(5925),r={install:function(t){t.prototype.$cookie=this,t.cookie=this},set:function(t,n,r){var i=r;return Number.isInteger(r)&&(i={expires:r}),e.set(t,n,i)},get:function(t){return e.get(t)},delete:function(t,e){var n={expires:-1};void 0!==e&&(n=Object.assign(e,n)),this.set(t,"",n)}};t.exports=r})()},9662:function(t,e,n){"use strict";n.d(e,{Z:function(){return nt}});var r=n(6252),i=n(3577),o=n(9963);const a=t=>((0,r.dD)("data-v-4bc2f6e4"),t=t(),(0,r.Cn)(),t),u={class:"shopping-cart-area"},s={class:"grid-shopping-cart"},c={class:"grid-shopping-cart-left"},l={class:"shopping-cart-title"},f={key:0},p=a((()=>(0,r._)("h2",null,"No items selected",-1))),d=[p],h={key:1,class:"shopping-cart-border"},m=a((()=>(0,r._)("h2",null,[(0,r.Uk)("Shopping Cart "),(0,r._)("span",{class:"arrow down"})],-1))),y={style:{color:"rgb(244, 67, 54)"}},g=a((()=>(0,r._)("br",null,null,-1))),v=a((()=>(0,r._)("br",null,null,-1))),b={class:"each-item-area-formatting"},w={class:"cart-image-container"},I=["src","alt"],C={class:"name-price-cart-formatting"},k={class:"product-name"},x=a((()=>(0,r._)("br",null,null,-1))),_={class:"cart-item-price-formatting"},T=a((()=>(0,r._)("br",null,null,-1))),S=["onUpdate:modelValue","onInput"],D=a((()=>(0,r._)("br",null,null,-1))),O=a((()=>(0,r._)("br",null,null,-1))),q=["onClick"],P={class:"grid-shopping-cart-right"},A={class:"special-offer"},M=a((()=>(0,r._)("h2",null,"★ Special Offer! ★",-1))),N={key:0,style:{"text-align":"left"}},F={key:1},z={class:"total-shopping-cart-area"},U={style:{margin:"0 auto"}},j={key:0},Q={key:1},E={key:0,class:"discount-text"},B={class:"bottom-checkout-button-container"},G={key:0},L={style:{"margin-left":"1em"},class:"clean-button"},R={key:1},W={style:{"margin-left":"1em"},class:"clean-button"},Y={style:{"margin-left":"1em"},class:"clean-button"};function V(t,e,n,a,p,V){const Z=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",s,[(0,r._)("div",c,[(0,r._)("div",l,[0===p.runningTotal?((0,r.wg)(),(0,r.iD)("div",f,d)):((0,r.wg)(),(0,r.iD)("div",h,[m,(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)("Last added "),(0,r._)("span",y,(0,i.zw)(V.showLastAddedItem),1),(0,r.Uk)(" to your cart!")]),(0,r.Uk)(" ( Product ID: "+(0,i.zw)(n.propProductIndexInGallery)+" Item Position: "+(0,i.zw)(n.propProductIdentificationNumber)+" )",1),g]),v]))]),(0,r.Wm)(o.W3,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.userCart,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"cart-item"},[(0,r._)("div",b,[(0,r._)("div",w,[(0,r._)("image",null,[(0,r._)("img",{class:"each-item-in-cart-image",src:t.imageSrc,alt:t.altText,width:"128",height:"128"},null,8,I)])]),(0,r._)("div",C,[(0,r._)("span",k,(0,i.zw)(t.name),1),x,(0,r._)("span",_," €"+(0,i.zw)(t.price),1),T,(0,r.Uk)(" Quantity: "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e=>t.quantity=e,min:"0",max:"100",step:"1",onInput:e=>V.updateQuantityInCart(t),onKeydown:e[0]||(e[0]=(...t)=>V.handleIncrementDecrement&&V.handleIncrementDecrement(...t)),style:{width:"2.5rem","font-size":"1.25rem","border-radius":"0.25rem","border-width":"1px"}},null,40,S),[[o.nr,t.quantity]]),D,(0,r.Uk)(" Item Subtotal ("+(0,i.zw)(t.quantity)+" items): €"+(0,i.zw)(Math.abs((t.quantity*t.price).toFixed(2))),1),O,(0,r._)("button",{onClick:t=>V.removeItem(n),class:"clean-button shopping-modified-clean-button"},"Delete",8,q)])])])))),128))])),_:1})]),(0,r._)("div",P,[(0,r._)("div",A,[M,(0,r._)("div",null,[V.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("p",N,"With 5 or more items in the shopping basket a 10% discount has been applied!")):((0,r.wg)(),(0,r.iD)("p",F,"Buy 5 or more items and get 10% off!"))])])])]),(0,r._)("div",z,[(0,r._)("div",U,[(0,r._)("div",{class:(0,i.C_)(["total-cost-area",{"lower-height-total-cost-area":V.totalQuantity<5}])},[V.totalQuantity<5?((0,r.wg)(),(0,r.iD)("span",j,[(0,r._)("b",null,"Subtotal ("+(0,i.zw)(V.totalQuantity)+" items): €"+(0,i.zw)(Math.abs(p.runningTotal.toFixed(2))),1)])):V.totalQuantity>4?((0,r.wg)(),(0,r.iD)("span",Q,[(0,r._)("b",null,[(0,r.Uk)("Subtotal ("+(0,i.zw)(V.totalQuantity)+" items): ",1),(0,r._)("s",null,"€"+(0,i.zw)(Math.abs(p.runningTotal.toFixed(2))),1)])])):(0,r.kq)("",!0),(0,r.Wm)(o.uT,null,{default:(0,r.w5)((()=>[V.totalQuantity>=5?((0,r.wg)(),(0,r.iD)("div",E,[(0,r.Uk)("With 10% discount: ("+(0,i.zw)(V.totalQuantity)+" items): ",1),(0,r._)("span",null,"€"+(0,i.zw)(Math.abs((.9*p.runningTotal).toFixed(2))),1)])):(0,r.kq)("",!0)])),_:1})],2),(0,r._)("div",B,[(0,r.wy)((0,r._)("button",{style:{},onClick:e[1]||(e[1]=t=>V.emptyShoppingCart()),class:"clean-button"},"Empty Cart ",512),[[o.F8,p.runningTotal>0]]),n.showGoToCheckOutButton?((0,r.wg)(),(0,r.iD)("div",G,[(0,r.Wm)(Z,{to:"/projects/checkout"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("button",L,"Go to Checkout ",512),[[o.F8,p.runningTotal>0]])])),_:1})])):((0,r.wg)(),(0,r.iD)("div",R,[(0,r.Wm)(Z,{to:"/projects/store"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("button",W,"Go Back ",512),[[o.F8,p.runningTotal>0]])])),_:1}),(0,r.wy)((0,r._)("button",Y,"Purchase Items ",512),[[o.F8,p.runningTotal>0]])]))])])])])}n(560);var Z=n(7327);class ${constructor(){(0,Z.Z)(this,"items",void 0),this.items=[]}addItem(t){const e=this.items.find((e=>e.id===t.id));e?e.quantityAvailable++:this.items.push(t)}getItems(){return this.items}}var H=n(6223),J=n(4253),K=n.n(J),X={name:"StoreView",components:{},props:{propProductIdentificationNumber:{type:Number,default:0},propProductIndexInGallery:{type:Number,default:0},propUpdate:{type:Boolean,default:!1},showGoToCheckOutButton:{type:Boolean,default:!0}},data(){return{storeInventory:new $,userCart:[],runningTotal:0,lastItemAddedToCart:null,item:{quantity:0}}},created(){const t=K().get("userCart");t&&(this.userCart=JSON.parse(t))},mounted(){this.makeInventory(),this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0)},watch:{propUpdate(){this.addItemToCart()},userCart:{handler(t){K().set("userCart",JSON.stringify(t))},deep:!0}},computed:{itemTotal(){return this.userCart.map((t=>Math.abs((t.quantity*t.price).toFixed(2))))},totalQuantity(){return this.userCart.reduce(((t,e)=>t+e.quantity),0)},showLastAddedItem(){return this.userCart.find((t=>t.id===this.propProductIndexInGallery))?.name||""},itemQuantities(){const t={};for(const e of this.userCart)e.id in t?t[e.id].quantity++:t[e.id]={quantity:1,name:e.name,price:e.price};return t}},methods:{addItemToCart(){this.handleAddItemToCart(this.propProductIdentificationNumber,this.propProductIndexInGallery)},saveUserCartToCookies(){K().set("userCart",JSON.stringify([this.userCart]),{expires:3})},handleIncrementDecrement(t){38===t.keyCode?(t.preventDefault(),this.item.quantity+=1,this.updateQuantityInCart(this.item)):40===t.keyCode&&(t.preventDefault(),this.item.quantity>0&&(this.item.quantity-=1,this.updateQuantityInCart(this.item)))},updateQuantityInCart(t){const e=this.userCart.find((e=>e.id===t.id));e&&(e.quantity=t.quantity,this.runningTotal=this.userCart.reduce(((t,e)=>t+e.price*e.quantity),0))},makeInventory(){const t=this.storeInventory;H.a.forEach((e=>{t.addItem(e)})),this.storeInventory=t;const e=t.getItems();console.log(e)},resetInventory(){this.storeInventory=new $},handleAddItemToCart(t,e){if(null===t||null===e||0===this.storeInventory.getItems().length)return;const n=this.storeInventory.getItems().find((t=>t.id===e));this.runningTotal+=n.price,this.addItemToShoppingCartIfNotAlreadyThere(n)},addItemToShoppingCartIfNotAlreadyThere(t){if(null===t)return;const e=this.userCart.findIndex((e=>e.id===t.id));-1===e?(t.quantity=1,this.userCart.push(t)):this.userCart[e].quantity++},emptyShoppingCart(){this.userCart=[],this.runningTotal=0},removeItem(t){null!==t&&(this.runningTotal=this.runningTotal-this.userCart[t].price*this.userCart[t].quantity,this.userCart.splice(t,1))}}},tt=n(3744);const et=(0,tt.Z)(X,[["render",V],["__scopeId","data-v-4bc2f6e4"]]);var nt=et},4328:function(t,e,n){"use strict";var r=n(5290),i=n(7578),o=n(6310),a=function(t){return function(e,n,a){var u,s=r(e),c=o(s),l=i(a,c);if(t&&n!==n){while(c>l)if(u=s[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},5649:function(t,e,n){"use strict";var r=n(7697),i=n(2297),o=TypeError,a=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(i(t)&&!a(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:function(t,e,n){"use strict";var r=n(6812),i=n(9152),o=n(2474),a=n(2560);t.exports=function(t,e,n){for(var u=i(e),s=a.f,c=o.f,l=0;l<u.length;l++){var f=u[l];r(t,f)||n&&r(n,f)||s(t,f,c(e,f))}}},5565:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},2739:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,e,n){"use strict";var r=n(9037),i=n(2474).f,o=n(5773),a=n(1880),u=n(5014),s=n(8758),c=n(5266);t.exports=function(t,e){var n,l,f,p,d,h,m=t.target,y=t.global,g=t.stat;if(l=y?r:g?r[m]||u(m,{}):(r[m]||{}).prototype,l)for(f in e){if(d=e[f],t.dontCallGetSet?(h=i(l,f),p=h&&h.value):p=l[f],n=c(y?f:m+(g?".":"#")+f,t.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;s(d,p)}(t.sham||p&&p.sham)&&o(d,"sham",!0),a(l,f,d,t)}}},4413:function(t,e,n){"use strict";var r=n(8844),i=n(3689),o=n(6648),a=Object,u=r("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?u(t,""):a(t)}:a},2297:function(t,e,n){"use strict";var r=n(6648);t.exports=Array.isArray||function(t){return"Array"===r(t)}},5266:function(t,e,n){"use strict";var r=n(3689),i=n(9985),o=/#|\.prototype\./,a=function(t,e){var n=s[u(t)];return n===l||n!==c&&(i(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=a.data={},c=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},6310:function(t,e,n){"use strict";var r=n(3126);t.exports=function(t){return r(t.length)}},8828:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2474:function(t,e,n){"use strict";var r=n(7697),i=n(2615),o=n(9556),a=n(5684),u=n(5290),s=n(8360),c=n(6812),l=n(8506),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=s(e),l)try{return f(t,e)}catch(n){}if(c(t,e))return a(!i(o.f,t,e),t[e])}},2741:function(t,e,n){"use strict";var r=n(4948),i=n(2739),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},7518:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},4948:function(t,e,n){"use strict";var r=n(8844),i=n(6812),o=n(5290),a=n(4328).indexOf,u=n(7248),s=r([].push);t.exports=function(t,e){var n,r=o(t),c=0,l=[];for(n in r)!i(u,n)&&i(r,n)&&s(l,n);while(e.length>c)i(r,n=e[c++])&&(~a(l,n)||s(l,n));return l}},9556:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},9152:function(t,e,n){"use strict";var r=n(6058),i=n(8844),o=n(2741),a=n(7518),u=n(5027),s=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=a.f;return n?s(e,n(t)):e}},7578:function(t,e,n){"use strict";var r=n(8700),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5290:function(t,e,n){"use strict";var r=n(4413),i=n(4684);t.exports=function(t){return r(i(t))}},8700:function(t,e,n){"use strict";var r=n(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},3126:function(t,e,n){"use strict";var r=n(8700),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},560:function(t,e,n){"use strict";var r=n(9989),i=n(690),o=n(6310),a=n(5649),u=n(5565),s=n(3689),c=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=c||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=i(this),n=o(e),r=arguments.length;u(n+r);for(var s=0;s<r;s++)e[n]=arguments[s],n++;return a(e,n),n}})},7327:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function o(t){var e=i(t,"string");return"symbol"==r(e)?e:String(e)}function a(t,e,n){return e=o(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=662.c126e0b8.js.map