(function(){var e={6437:function(e,t,n){"use strict";const o=n(4710),r=o.keys().map(o);t.Z=[{id:1,text:"Store",to:"/projects/store/store",caption:"A store design made with Vue.js and Typescript",imageSrc:""},{id:2,text:"Cowculator",to:"/projects/cowculator",caption:"A real calculator that does parsing to solve calculations and shows the binary tree of the calculations",imageSrc:""},{id:3,text:"Weather",to:"/projects/weather",caption:"Weather in Tuebingen, Germany",imageSrc:""},{id:4,text:"Coffee Data",to:"/projects/datasets",caption:"Some miscellaneous data about coffee consumption",imageSrc:""},{id:5,text:"Game",to:"/projects/cowgame",caption:"A game made using Vue.js and TypeScript",imageSrc:""},{id:6,text:"Sorting Algorithms",to:"/projects/sortingalgorithms",caption:"Made this to test some sorting algorithm outputs",imageSrc:""}].map(((e,t)=>({...e,imageSrc:r[t]})))},7359:function(e,t,n){"use strict";var o=n(9963),r=n(6252);function a(e,t,n,a,i,s){const c=(0,r.up)("TheMainHeader"),u=(0,r.up)("router-view"),d=(0,r.up)("TheMainFooter");return(0,r.wg)(),(0,r.iD)("div",null,[s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{key:0},null,512)),[[o.F8,i.showHeader]]):(0,r.kq)("",!0),(0,r.Wm)(u),s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:1},null,512)),[[o.F8,i.showFooter]]):(0,r.kq)("",!0)])}const i=e=>((0,r.dD)("data-v-1a7be596"),e=e(),(0,r.Cn)(),e),s={class:"nav-menu-class"},c=i((()=>(0,r._)("h2",{class:"header-h2"},"ConradsWebsite.com",-1))),u={class:"navigation-menu"},d={class:"small-resolution-h2"},l={style:{display:"flex","align-items":"center"}},p=(0,r.uE)('<div data-v-1a7be596><div class="header-logo-container" data-v-1a7be596><a class="github-logo-link" href="https://github.com/conrizzo/conradswebsite" data-v-1a7be596><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-v-1a7be596><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-1a7be596></path></svg></a></div><a class="text-under-github-logo" href="https://github.com/conrizzo/conradswebsite" data-v-1a7be596><span style="font-size:0.5em;margin-right:0.5em;margin-left:-0.5em;" data-v-1a7be596>This websites code</span></a></div>',1);function m(e,t,n,o,a,i){const m=(0,r.up)("router-link"),f=(0,r.up)("DropDownMenu");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("nav",s,[(0,r.Wm)(m,{style:{padding:"0"},to:"/"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r._)("div",u,[(0,r.Wm)(m,{class:"about-link-styling about-menu",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)(" About ")])),_:1}),(0,r.Wm)(f,{class:"projects-menu"})]),(0,r._)("div",d,[(0,r.Wm)(m,{to:"/projects/login"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Sign In ")])),_:1})]),(0,r._)("div",l,[(0,r.Wm)(m,{class:"hide-sign-in-text-at-low-res",to:"/projects/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign In")])),_:1}),p])])])}var f=n(3577);const h=e=>((0,r.dD)("data-v-298ecab2"),e=e(),(0,r.Cn)(),e),b={class:"dropdown"},g={key:0,class:"dropdown-content"},w=["innerHTML"],v=h((()=>(0,r._)("br",null,null,-1)));function y(e,t,n,a,i,s){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",{class:"dropbtn unselectable",onClick:t[0]||(t[0]=(...e)=>s.toggleDropdown&&s.toggleDropdown(...e))}," Projects "),(0,r.Wm)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[i.isDropdownOpen?((0,r.wg)(),(0,r.iD)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.links,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n},[(0,r.Wm)(c,{to:t.to,class:(0,f.C_)({active:e.$route.path===t.to})},{default:(0,r.w5)((()=>[(0,r._)("span",{innerHTML:t.text},null,8,w),v])),_:2},1032,["to","class"])])))),128))])):(0,r.kq)("",!0)])),_:1})])}var j=n(6437),k={name:"DropdownMenu",components:{},data(){return{links:j.Z,isDropdownOpen:!1,openTimeout:null}},mounted(){window.addEventListener("click",this.closeDropdown),window.addEventListener("scroll",this.closeDropdownOnScroll)},beforeUnmount(){window.removeEventListener("click",this.closeDropdown),window.removeEventListener("scroll",this.closeDropdownOnScroll)},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown(e){this.$el.contains(e.target)||(this.isDropdownOpen=!1)},closeDropdownOnScroll(){this.isDropdownOpen=!1}}},D=n(3744);const _=(0,D.Z)(k,[["render",y],["__scopeId","data-v-298ecab2"]]);var C=_,S={name:"MainHeader",components:{DropDownMenu:C}};const x=(0,D.Z)(S,[["render",m],["__scopeId","data-v-1a7be596"]]);var O=x;const A=e=>((0,r.dD)("data-v-4b6ccf3c"),e=e(),(0,r.Cn)(),e),P={class:"footer"},T={class:"text-area footer-right-border"},E=A((()=>(0,r._)("a",{class:"footer-links footer-right-border",href:"https://github.com/conrizzo/conradswebsite"},"GitHub",-1))),M=A((()=>(0,r._)("br",null,null,-1))),W=A((()=>(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0",-1)));function F(e,t,n,o,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",P,[(0,r._)("div",T,[(0,r._)("span",null,[(0,r.Wm)(s,{class:"footer-links footer-right-border",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" "),E,(0,r.Uk)(" "),(0,r.Wm)(s,{class:"footer-links",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("ConradsWebsite.com")])),_:1}),(0,r.Uk)(" © "+(0,f.zw)(i.getCurrentYear)+" ",1),M,W,(0,r.Uk)(" unless noted otherwise. ")])])])}var N={name:"MainFooter",data(){return{}},computed:{getCurrentYear(){return(new Date).getFullYear()}}};const U=(0,D.Z)(N,[["render",F],["__scopeId","data-v-4b6ccf3c"]]);var I=U,L={name:"App",components:{TheMainHeader:O,TheMainFooter:I},data(){return{showHeader:!1,showFooter:!1}},mounted(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),setTimeout((()=>{this.showHeader=!0}),200),setTimeout((()=>{this.showFooter=!0}),500)},computed:{showNav(){return"/projects/cowgame"!==this.$route.path}}};const V=(0,D.Z)(L,[["render",a]]);var z=V,H=n(2392),B=n(2201);const G=()=>Promise.all([n.e(301),n.e(544),n.e(945)]).then(n.bind(n,3340)),Z=()=>Promise.all([n.e(301),n.e(481)]).then(n.bind(n,7481)),q=()=>n.e(423).then(n.bind(n,7423)),Y=()=>n.e(557).then(n.bind(n,5557)),R=()=>Promise.all([n.e(301),n.e(62)]).then(n.bind(n,4845)),K=()=>n.e(955).then(n.bind(n,7955)),$=()=>Promise.all([n.e(301),n.e(0)]).then(n.bind(n,1e3)),J=()=>n.e(970).then(n.bind(n,8970)),Q=()=>Promise.all([n.e(301),n.e(606)]).then(n.bind(n,606)),X=()=>n.e(681).then(n.bind(n,5681)),ee=()=>Promise.all([n.e(301),n.e(76)]).then(n.bind(n,1076)),te=()=>Promise.all([n.e(301),n.e(338)]).then(n.bind(n,5338)),ne=()=>Promise.all([n.e(301),n.e(544),n.e(33)]).then(n.bind(n,33)),oe=()=>Promise.all([n.e(301),n.e(852)]).then(n.bind(n,849)),re=()=>n.e(203).then(n.bind(n,6203)),ae=()=>Promise.all([n.e(301),n.e(808),n.e(570)]).then(n.bind(n,2758)),ie=()=>Promise.all([n.e(301),n.e(808),n.e(615)]).then(n.bind(n,2401)),se=()=>Promise.all([n.e(301),n.e(808),n.e(601)]).then(n.bind(n,9336)),ce=()=>n.e(106).then(n.bind(n,106)),ue=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:Z},{path:"/projects",name:"projects",component:Y},{path:"/projects/cowculator",name:"cowculator",component:R},{path:"/projects/:id/",name:"ProjectDetailsView",component:X,props:!0},{path:"/projects/datasets",name:"DatasetsView",component:K},{path:"/projects/weather",name:"WeatherView",component:$},{path:"/projects/Links",name:"LinksView",component:J},{path:"/projects/cowgame",name:"CowGameView",component:Q},{path:"/projects/login",name:"FirebaseTestView",component:ee},{path:"/projects/sortingAlgorithms",name:"SortingAlgorithmsView",component:te},{path:"/projects/rustwebassembly",name:"RustWebAssemblyView",component:ne},{path:"/authorized",name:"authorized",component:q,meta:{requiresAuth:!0}},{path:"/projects/cards",name:"CardsView",component:oe},{path:"/projects/gallery",name:"Gallery",component:re},{path:"/projects/store/store",name:"Store",component:ae},{path:"/projects/store/checkout",name:"checkout",component:ie,props:!0},{path:"/projects/store/product/:id/:name/:image/:price",name:"ProductPageView",component:se,props:!0},{path:"/yadhtriByppah",name:"yadhtriByppahView",component:ce},{path:"/:catchAll(.*)",redirect:"/"}],de=(0,B.p7)({history:(0,B.PO)("/"),routes:ue,scrollBehavior(e,t,n){return n||{top:0}}});de.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));H.I.onAuthStateChanged((e=>{o&&!e?n("/projects/firebasetest"):n()}))}));var le=de;n(5660);(0,o.ri)(z).use(le).mount("#app")},2392:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var o=n(3977),r=n(6100),a=n(316);const i={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},s=(0,o.ZF)(i),c=(0,r.ad)(s);t.Z=c;const u=(0,a.v0)()},4710:function(e,t,n){var o={"./1Store.jpg":5554,"./2Cowculator.jpg":131,"./3weather.jpg":8600,"./4coffee_data.jpg":8613,"./5CowGame.jpg":6581,"./6sorting.jpg":8855};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=4710},5554:function(e,t,n){"use strict";e.exports=n.p+"img/1Store.a0143db7.jpg"},131:function(e,t,n){"use strict";e.exports=n.p+"img/2Cowculator.299c56d6.jpg"},8600:function(e,t,n){"use strict";e.exports=n.p+"img/3weather.fccd399a.jpg"},8613:function(e,t,n){"use strict";e.exports=n.p+"img/4coffee_data.1aa2ad0b.jpg"},6581:function(e,t,n){"use strict";e.exports=n.p+"img/5CowGame.de772ece.jpg"},8855:function(e,t,n){"use strict";e.exports=n.p+"img/6sorting.767d9214.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{0:"ca7e29b9",33:"c8b4dcda",62:"82df5d66",76:"d3f1b161",106:"7794f9d9",203:"3158dc05",301:"33a1e6ad",338:"bcb5c327",423:"35a8154a",481:"23152eaf",544:"c62bfdf0",557:"d9f04bf7",570:"b8dac927",601:"1b3f6a79",606:"3ba5d50a",615:"5f20023b",681:"ac6f49c9",808:"a3e6c952",852:"d0cb237e",945:"bd1cb0fe",955:"daeb1dc5",970:"11490983"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{0:"47b69563",33:"17023315",62:"25ea32fa",76:"568441f7",203:"288ab667",338:"efc0dec6",423:"4eeed6e0",481:"e9814b21",557:"3ae76a71",570:"d674bfe9",601:"8c42ab39",606:"6ee20ad7",615:"068f8e9c",681:"4ab90480",852:"9681721f",945:"ed0a456d",955:"9b399c27",970:"e3385912"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={0:1,33:1,62:1,76:1,203:1,338:1,423:1,481:1,557:1,570:1,601:1,606:1,615:1,681:1,852:1,945:1,955:1,970:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7359)}));o=n.O(o)})();
//# sourceMappingURL=app.fee4901b.js.map