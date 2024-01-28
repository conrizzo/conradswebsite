(function(){var e={6437:function(e,t,o){"use strict";const n=o(4710),r=n.keys().map(n);t.Z=[{id:1,text:"Store",to:"/projects/store/store",caption:"A store design made with Vue.js and Typescript",imageSrc:""},{id:2,text:"Cowculator",to:"/projects/cowculator",caption:"A real calculator that does parsing to solve calculations and shows the binary tree of the calculations",imageSrc:""},{id:3,text:"Weather",to:"/projects/weather",caption:"Weather in Tuebingen, Germany",imageSrc:""},{id:4,text:"Coffee Data",to:"/projects/datasets",caption:"Some miscellaneous data about coffee consumption",imageSrc:""},{id:5,text:"Game",to:"/projects/cowgame",caption:"A game made using Vue.js and TypeScript",imageSrc:""},{id:6,text:"Sorting Algorithms",to:"/projects/sortingalgorithms",caption:"Made this to test some sorting algorithm outputs",imageSrc:""},{id:7,text:"Skat Game",to:"/projects/cards",caption:"An attempt to build a card game, got lost figuring out the rules so it's still a prototype...",imageSrc:""},{id:8,text:"Fetch Data",to:"/projects/fetchdata",caption:"A simple experimental page that fetches api data and formats it",imageSrc:""},{id:9,text:"Search Wordle Words",to:"/projects/wordhelper",caption:"Search Wordle words with TypeScript",imageSrc:""}].map(((e,t)=>({...e,imageSrc:r[t]})))},1518:function(e,t,o){"use strict";var n=o(9963),r=o(6252);function a(e,t,o,a,i,s){const c=(0,r.up)("TheMainHeader"),d=(0,r.up)("router-view"),l=(0,r.up)("TheMainFooter");return(0,r.wg)(),(0,r.iD)("div",null,[s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{key:0},null,512)),[[n.F8,i.showHeader]]):(0,r.kq)("",!0),(0,r.Wm)(d),s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{key:1},null,512)),[[n.F8,i.showFooter]]):(0,r.kq)("",!0)])}var i=o(3577),s=o.p+"img/house.6f22bc15.svg";const c=e=>((0,r.dD)("data-v-0d83fae0"),e=e(),(0,r.Cn)(),e),d={key:0,style:{"padding-left":"1rem","text-transform":"uppercase","letter-spacing":".125rem","padding-top":".5rem","padding-bottom":".5rem",color:"#fff","font-size":"1.1rem",background:"rgb(0, 0, 0)"}},l={class:"nav-menu-class"},u={style:{display:"flex","align-items":"center"}},p=c((()=>(0,r._)("img",{src:s,alt:"House Icon"},null,-1))),m=c((()=>(0,r._)("div",{class:"header-h2"},"ConradsWebsite.com",-1))),f={class:"navigation-menu"},h={class:"small-resolution-h2"},g={style:{display:"flex","align-items":"center"}};function b(e,t,o,n,a,s){const c=(0,r.up)("router-link"),b=(0,r.up)("DropDownMenu");return(0,r.wg)(),(0,r.iD)("header",{class:(0,i.C_)(n.headerClass)},["/"===this.$route.path?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(c,{style:{color:"#fff"},class:"text-links",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("Thank you for visiting!")])),_:1})])):(0,r.kq)("",!0),(0,r._)("nav",l,[(0,r._)("div",u,[(0,r.Wm)(c,{to:"/",class:"only-show-home-svg-at-mobile-size"},{default:(0,r.w5)((()=>[p])),_:1}),(0,r.Wm)(c,{style:{padding:"0"},to:"/"},{default:(0,r.w5)((()=>[m])),_:1})]),(0,r._)("div",f,[(0,r.Wm)(c,{class:"about-link-styling about-menu",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)(" About ")])),_:1}),(0,r.Wm)(b,{class:"projects-menu"})]),(0,r._)("div",h,[(0,r.Wm)(c,{to:"/projects/login"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Sign In ")])),_:1})]),(0,r._)("div",g,[(0,r.Wm)(c,{class:"hide-sign-in-text-at-low-res",to:"/projects/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign In")])),_:1})])])],2)}const w=e=>((0,r.dD)("data-v-03583106"),e=e(),(0,r.Cn)(),e),v={class:"dropdown"},j={key:0,class:"dropdown-content"},y=["innerHTML"],k=w((()=>(0,r._)("br",null,null,-1)));function _(e,t,o,a,s,c){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",{class:"dropbtn unselectable",onClick:t[0]||(t[0]=(...e)=>c.toggleDropdown&&c.toggleDropdown(...e))}," Projects "),(0,r.Wm)(n.uT,{name:"fade"},{default:(0,r.w5)((()=>[s.isDropdownOpen?((0,r.wg)(),(0,r.iD)("div",j,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.links,((t,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r.Wm)(d,{to:t.to,class:(0,i.C_)({active:e.$route.path===t.to})},{default:(0,r.w5)((()=>[(0,r._)("span",{innerHTML:t.text},null,8,y),k])),_:2},1032,["to","class"])])))),128))])):(0,r.kq)("",!0)])),_:1})])}var D=o(6437),S={name:"DropdownMenu",components:{},data(){return{links:D.Z,isDropdownOpen:!1,openTimeout:null}},mounted(){window.addEventListener("click",this.closeDropdown),window.addEventListener("scroll",this.closeDropdownOnScroll)},beforeUnmount(){window.removeEventListener("click",this.closeDropdown),window.removeEventListener("scroll",this.closeDropdownOnScroll)},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown(e){this.$el.contains(e.target)||(this.isDropdownOpen=!1)},closeDropdownOnScroll(){this.isDropdownOpen=!1}}},C=o(3744);const x=(0,C.Z)(S,[["render",_],["__scopeId","data-v-03583106"]]);var O=x,A=o(2262),P={name:"MainHeader",components:{DropDownMenu:O},setup(){const e=(0,A.iH)("header-visible");let t=0;const o=()=>{const o=window.scrollY;o>t?e.value="header-hidden":o<t&&(e.value="header-visible"),t=o};return(0,r.bv)((()=>{window.addEventListener("scroll",o)})),(0,r.Ah)((()=>{window.removeEventListener("scroll",o)})),{headerClass:e}}};const T=(0,C.Z)(P,[["render",b],["__scopeId","data-v-0d83fae0"]]);var W=T;const E=e=>((0,r.dD)("data-v-615aa276"),e=e(),(0,r.Cn)(),e),M={class:"footer"},F={class:"text-area footer-right-border"},N=E((()=>(0,r._)("a",{class:"footer-links footer-right-border",href:"https://github.com/conrizzo/conradswebsite"},"GitHub",-1))),U=E((()=>(0,r._)("br",null,null,-1))),L=E((()=>(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0",-1)));function H(e,t,o,n,a,s){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",M,[(0,r._)("div",F,[(0,r._)("span",null,[(0,r.Wm)(c,{class:"footer-links footer-right-border",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" "),N,(0,r.Uk)(" "),(0,r.Wm)(c,{class:"footer-links",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("ConradsWebsite.com")])),_:1}),(0,r.Uk)(" © "+(0,i.zw)(s.getCurrentYear)+" ",1),U,L,(0,r.Uk)(" unless noted otherwise. ")])])])}var I={name:"MainFooter",data(){return{}},computed:{getCurrentYear(){return(new Date).getFullYear()}}};const V=(0,C.Z)(I,[["render",H],["__scopeId","data-v-615aa276"]]);var G=V,q={name:"App",components:{TheMainHeader:W,TheMainFooter:G},data(){return{showHeader:!1,showFooter:!1}},mounted(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),setTimeout((()=>{this.showHeader=!0}),200),setTimeout((()=>{this.showFooter=!0}),500)},computed:{showNav(){return"/projects/cowgame"!==this.$route.path}}};const B=(0,C.Z)(q,[["render",a]]);var Z=B,z=o(2392),Y=o(2201);const R=()=>Promise.all([o.e(301),o.e(544),o.e(415)]).then(o.bind(o,9297)),$=()=>Promise.all([o.e(301),o.e(926)]).then(o.bind(o,7319)),K=()=>o.e(423).then(o.bind(o,7423)),J=()=>o.e(557).then(o.bind(o,5557)),Q=()=>Promise.all([o.e(301),o.e(76)]).then(o.bind(o,6055)),X=()=>o.e(378).then(o.bind(o,3378)),ee=()=>Promise.all([o.e(301),o.e(410)]).then(o.bind(o,8410)),te=()=>o.e(970).then(o.bind(o,8970)),oe=()=>Promise.all([o.e(301),o.e(606)]).then(o.bind(o,606)),ne=()=>o.e(321).then(o.bind(o,8321)),re=()=>Promise.all([o.e(301),o.e(300)]).then(o.bind(o,1300)),ae=()=>Promise.all([o.e(301),o.e(165)]).then(o.bind(o,3165)),ie=()=>Promise.all([o.e(301),o.e(544),o.e(33)]).then(o.bind(o,33)),se=()=>Promise.all([o.e(301),o.e(925)]).then(o.bind(o,6647)),ce=()=>o.e(203).then(o.bind(o,6203)),de=()=>Promise.all([o.e(301),o.e(833),o.e(650)]).then(o.bind(o,2159)),le=()=>Promise.all([o.e(301),o.e(833),o.e(310)]).then(o.bind(o,2401)),ue=()=>Promise.all([o.e(301),o.e(833),o.e(785)]).then(o.bind(o,7)),pe=()=>o.e(949).then(o.bind(o,949)),me=()=>o.e(113).then(o.bind(o,113)),fe=()=>Promise.all([o.e(301),o.e(629)]).then(o.bind(o,2629)),he=()=>o.e(106).then(o.bind(o,106)),ge=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:$},{path:"/projects",name:"projects",component:J},{path:"/projects/cowculator",name:"cowculator",component:Q},{path:"/projects/:id/",name:"ProjectDetailsView",component:ne,props:!0},{path:"/projects/datasets",name:"DatasetsView",component:X},{path:"/projects/weather",name:"WeatherView",component:ee},{path:"/projects/Links",name:"LinksView",component:te},{path:"/projects/cowgame",name:"CowGameView",component:oe},{path:"/projects/login",name:"FirebaseTestView",component:re},{path:"/projects/sortingAlgorithms",name:"SortingAlgorithmsView",component:ae},{path:"/projects/rustwebassembly",name:"RustWebAssemblyView",component:ie},{path:"/authorized",name:"authorized",component:K,meta:{requiresAuth:!0}},{path:"/projects/cards",name:"CardsView",component:se},{path:"/projects/gallery",name:"Gallery",component:ce},{path:"/projects/store/store",name:"Store",component:de},{path:"/projects/store/checkout",name:"checkout",component:le,props:!0},{path:"/projects/store/product/:id/:name/:image/:price",name:"ProductPageView",component:ue,props:!0},{path:"/projects/RenderTemplate/template",name:"RenderTemplateView",component:pe},{path:"/projects/fetchdata",name:"fetchdata",component:me},{path:"/projects/WordHelper",name:"wordhelper",component:fe},{path:"/yadhtriByppah",name:"yadhtriByppahView",component:he},{path:"/:catchAll(.*)",redirect:"/"}],be=(0,Y.p7)({history:(0,Y.PO)("/"),routes:ge,scrollBehavior(e,t,o){return o||{top:0}}});be.beforeEach(((e,t,o)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),r=z.I.onAuthStateChanged((e=>{r(),n&&!e?o("/projects/firebasetest"):o()}))}));var we=be;o(5660);(0,n.ri)(Z).use(we).mount("#app")},2392:function(e,t,o){"use strict";o.d(t,{I:function(){return d}});var n=o(3977),r=o(6100),a=o(316);const i={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},s=(0,n.ZF)(i),c=(0,r.ad)(s);t.Z=c;const d=(0,a.v0)()},4710:function(e,t,o){var n={"./1Store.jpg":5554,"./2Cowculator.jpg":131,"./3weather.jpg":8600,"./4coffee_data.jpg":8613,"./5CowGame.jpg":6581,"./6sorting.jpg":8855,"./7CardGame.jpg":7005,"./8fetch_data.jpg":6037,"./9word_searcher.jpg":9118};function r(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=4710},5554:function(e,t,o){"use strict";e.exports=o.p+"img/1Store.a0143db7.jpg"},131:function(e,t,o){"use strict";e.exports=o.p+"img/2Cowculator.299c56d6.jpg"},8600:function(e,t,o){"use strict";e.exports=o.p+"img/3weather.fccd399a.jpg"},8613:function(e,t,o){"use strict";e.exports=o.p+"img/4coffee_data.1aa2ad0b.jpg"},6581:function(e,t,o){"use strict";e.exports=o.p+"img/5CowGame.de772ece.jpg"},8855:function(e,t,o){"use strict";e.exports=o.p+"img/6sorting.767d9214.jpg"},7005:function(e,t,o){"use strict";e.exports=o.p+"img/7CardGame.e2ee11b3.jpg"},6037:function(e,t,o){"use strict";e.exports=o.p+"img/8fetch_data.5d0ede74.jpg"},9118:function(e,t,o){"use strict";e.exports=o.p+"img/9word_searcher.6a7cc0dd.jpg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{33:"c865b31a",76:"ebf13f20",106:"9675eb3d",113:"c1049657",165:"4c1aae73",203:"ff960ad6",300:"63d33466",301:"33a1e6ad",310:"491680e5",321:"744c65dc",378:"aedaae80",410:"dd752b2f",415:"c19fa074",423:"7dd4f469",544:"c62bfdf0",557:"76e3eddf",606:"a24250e4",629:"fdddc64b",650:"88740ac8",785:"01281d23",833:"a974ef5d",925:"b9c74c5e",926:"28fe9e08",949:"6920828c",970:"24be15f3"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{33:"2d2fa8b9",76:"e11beff8",113:"3ea57a0e",165:"23e0a38a",203:"288ab667",300:"e8e67a64",310:"60473ebb",321:"2a8bb9e5",378:"528ffe6d",410:"d3ab13e0",415:"05374a06",557:"6d0229a4",606:"b422a11a",629:"38bd0cf5",650:"70b78c5a",785:"2add9bf9",925:"2c36d26e",926:"7ab8123a",949:"9bb8de8c",970:"03d4ef48"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,null,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={33:1,76:1,113:1,165:1,203:1,300:1,310:1,321:1,378:1,410:1,415:1,557:1,606:1,629:1,650:1,785:1,925:1,926:1,949:1,970:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){o.b=document.baseURI||self.location.href;var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],c=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(t&&t(n);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1518)}));n=o.O(n)})();
//# sourceMappingURL=app.8996092f.js.map