(function(){"use strict";var e={6015:function(e,t,n){var o=n(9963),r=n(6252);function a(e,t,n,a,i,s){const c=(0,r.up)("TheMainHeader"),u=(0,r.up)("router-view"),d=(0,r.up)("TheMainFooter");return(0,r.wg)(),(0,r.iD)("div",null,[s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{key:0},null,512)),[[o.F8,i.showHeader]]):(0,r.kq)("",!0),(0,r.Wm)(u),s.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:1},null,512)),[[o.F8,i.showFooter]]):(0,r.kq)("",!0)])}const i=e=>((0,r.dD)("data-v-91380a06"),e=e(),(0,r.Cn)(),e),s={style:{"border-bottom":"1px solid rgb(218, 220, 224)",position:"sticky",top:"0em","z-index":"5"}},c={class:"nav-menu-class"},u=i((()=>(0,r._)("h2",{class:"header-h2"},"ConradsWebsite.com",-1))),d={class:"navigation-menu"},l=i((()=>(0,r._)("h2",{class:"small-resolution-h2"},"ConradsWebsite.com",-1))),p={style:{display:"flex","align-items":"center"}},f=(0,r.uE)('<div data-v-91380a06><div class="header-logo-container" data-v-91380a06><a class="github-logo-link" href="https://github.com/conrizzo/conradswebsite" data-v-91380a06><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-v-91380a06><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-91380a06></path></svg></a></div><a class="" href="https://github.com/conrizzo/conradswebsite" data-v-91380a06><span style="font-size:0.5em;padding-right:0.4em;" data-v-91380a06>This websites code</span></a></div>',1);function h(e,t,n,o,a,i){const h=(0,r.up)("router-link"),m=(0,r.up)("DropDownMenu");return(0,r.wg)(),(0,r.iD)("header",s,[(0,r._)("nav",c,[(0,r.Wm)(h,{style:{padding:"0"},to:"/"},{default:(0,r.w5)((()=>[u])),_:1}),(0,r._)("div",d,[(0,r.Wm)(h,{class:"about-link-styling about-menu",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)(" About ")])),_:1}),(0,r.Wm)(m,{class:"projects-menu"})]),(0,r._)("div",null,[(0,r.Wm)(h,{to:"/"},{default:(0,r.w5)((()=>[l])),_:1})]),(0,r._)("div",p,[(0,r.Wm)(h,{to:"projects/firebasetest",style:{"margin-right":"0.25em","border-right":"1px rgb(218, 220, 224) solid","padding-right":"0.25em"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign In")])),_:1}),f])])])}var m=n(3577);const b={class:"dropdown"},w={key:0,class:"dropdown-content"},g=["innerHTML"],v=(0,r._)("br",null,null,-1);function y(e,t,n,o,a,i){const s=(0,r.up)("router-link"),c=(0,r.up)("ProjectLinks");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",{class:"dropbtn unselectable",onMouseover:t[0]||(t[0]=(...e)=>i.openDropdown&&i.openDropdown(...e)),onClick:t[1]||(t[1]=(...e)=>i.toggleDropdown&&i.toggleDropdown(...e))},"Projects",32),a.isDropdownOpen?((0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(c,{links:n.links},{default:(0,r.w5)((({links:t})=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((t,n)=>((0,r.wg)(),(0,r.j4)(s,{key:n,to:t.to,class:(0,m.C_)({active:e.$route.path===t.to})},{default:(0,r.w5)((()=>[(0,r._)("span",{innerHTML:t.text},null,8,g),v])),_:2},1032,["to","class"])))),128))])),_:1},8,["links"])])):(0,r.kq)("",!0)])}var k=n(5466),j={name:"DropdownMenu",components:{ProjectLinks:k.Z},props:{links:Array},data(){return{isDropdownOpen:!1,openTimeout:null}},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown(){this.isDropdownOpen||(this.isDropdownOpen=!1)},openDropdown(){clearTimeout(this.openTimeout),this.openTimeout=setTimeout((()=>{this.isDropdownOpen=!0}),150),this.isDropdownOpen=!1}}},D=n(3744);const C=(0,D.Z)(j,[["render",y]]);var _=C,A={name:"MainHeader",components:{DropDownMenu:_}};const x=(0,D.Z)(A,[["render",h],["__scopeId","data-v-91380a06"]]);var O=x;const P=e=>((0,r.dD)("data-v-4b6ccf3c"),e=e(),(0,r.Cn)(),e),T={class:"footer"},M={class:"text-area footer-right-border"},S=P((()=>(0,r._)("a",{class:"footer-links footer-right-border",href:"https://github.com/conrizzo/conradswebsite"},"GitHub",-1))),W=P((()=>(0,r._)("br",null,null,-1))),E=P((()=>(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0",-1)));function F(e,t,n,o,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",T,[(0,r._)("div",M,[(0,r._)("span",null,[(0,r.Wm)(s,{class:"footer-links footer-right-border",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" "),S,(0,r.Uk)(" "),(0,r.Wm)(s,{class:"footer-links",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("ConradsWebsite.com")])),_:1}),(0,r.Uk)(" © "+(0,m.zw)(i.getCurrentYear)+" ",1),W,E,(0,r.Uk)(" unless noted otherwise. ")])])])}var N={name:"MainFooter",data(){return{}},computed:{getCurrentYear(){return(new Date).getFullYear()}}};const I=(0,D.Z)(N,[["render",F],["__scopeId","data-v-4b6ccf3c"]]);var z=I,L={name:"App",components:{TheMainHeader:O,TheMainFooter:z},data(){return{showHeader:!1,showFooter:!1}},mounted(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),setTimeout((()=>{this.showHeader=!0}),200),setTimeout((()=>{this.showFooter=!0}),500)},computed:{showNav(){return"/projects/cowgame"!==this.$route.path}}};const H=(0,D.Z)(L,[["render",a]]);var U=H,B=n(2392),V=n(2201);const Z=()=>Promise.all([n.e(750),n.e(544),n.e(61)]).then(n.bind(n,3561)),q=()=>Promise.all([n.e(750),n.e(464)]).then(n.bind(n,9464)),G=()=>n.e(423).then(n.bind(n,7423)),Y=()=>n.e(557).then(n.bind(n,5557)),R=()=>Promise.all([n.e(750),n.e(293)]).then(n.bind(n,502)),K=()=>n.e(505).then(n.bind(n,2505)),$=()=>n.e(341).then(n.bind(n,341)),J=()=>n.e(970).then(n.bind(n,8970)),Q=()=>Promise.all([n.e(750),n.e(234)]).then(n.bind(n,3234)),X=()=>n.e(681).then(n.bind(n,5681)),ee=()=>Promise.all([n.e(750),n.e(927)]).then(n.bind(n,3927)),te=()=>Promise.all([n.e(750),n.e(338)]).then(n.bind(n,5338)),ne=()=>Promise.all([n.e(750),n.e(544),n.e(33)]).then(n.bind(n,33)),oe=()=>Promise.all([n.e(750),n.e(377)]).then(n.bind(n,84)),re=()=>n.e(203).then(n.bind(n,6203)),ae=()=>n.e(106).then(n.bind(n,106)),ie=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:q},{path:"/projects",name:"projects",component:Y},{path:"/projects/cowculator",name:"cowculator",component:R},{path:"/projects/:id/",name:"ProjectDetailsView",component:X,props:!0},{path:"/projects/datasets",name:"DatasetsView",component:K},{path:"/projects/weather",name:"WeatherView",component:$},{path:"/projects/Links",name:"LinksView",component:J},{path:"/projects/cowgame",name:"CowGameView",component:Q},{path:"/projects/firebasetest",name:"FirebaseTestView",component:ee},{path:"/projects/sortingAlgorithms",name:"SortingAlgorithmsView",component:te},{path:"/projects/rustwebassembly",name:"RustWebAssemblyView",component:ne},{path:"/authorized",name:"authorized",component:G,meta:{requiresAuth:!0}},{path:"/projects/cards",name:"CardsView",component:oe},{path:"/projects/gallery",name:"Gallery",component:re},{path:"/yadhtriByppah",name:"yadhtriByppahView",component:ae},{path:"/:catchAll(.*)",redirect:"/"}],se=(0,V.p7)({history:(0,V.PO)("/"),routes:ie,scrollBehavior(e,t,n){return n||{top:0}}});B.I.onAuthStateChanged((e=>{})),se.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));B.I.onAuthStateChanged((e=>{o&&!e?n("/projects/firebasetest"):n()}))}));var ce=se;n(5660);(0,o.ri)(U).use(ce).mount("#app")},2392:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(3977),r=n(6100),a=n(4857);const i={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},s=(0,o.ZF)(i),c=(0,r.ad)(s);t.Z=c;const u=(0,a.v0)()},5466:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(6252);function r(e,t,n,r,a,i){return(0,o.WI)(e.$slots,"default",{links:n.links})}var a={name:"ProjectLinks",props:{links:{type:Array,required:!0,default:()=>[{text:"Cowculator",to:"/projects/cowculator"},{text:"Weather",to:"/projects/weather"},{text:"Coffee Data",to:"/projects/datasets"},{text:"Game",to:"/projects/cowgame"},{text:"Login Page",to:"/projects/firebasetest"},{text:"Sorting Algorithms",to:"/projects/sortingalgorithms"},{text:'Card Game <span style="color: #ff5959;">(New!)</span>',to:"/projects/cards"}]}}},i=n(3744);const s=(0,i.Z)(a,[["render",r]]);var c=s}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{33:"a25d7328",61:"ccc67f4d",106:"5c3eb861",203:"1cfba187",234:"b7b63cb1",293:"9302db45",338:"0a3bef11",341:"465e4764",377:"e5ea7beb",423:"0ea0effb",464:"10615861",505:"bdce28ee",544:"7662da6e",557:"5d89b146",681:"ee0643cc",750:"1bcc2f08",927:"3b78b614",970:"6bc90bee"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{33:"f172b01a",61:"fa987fa9",203:"8f5071b4",234:"f2711929",293:"2d1c6990",338:"a93b96dd",341:"2fabfb37",377:"8ee0d210",423:"ea9cc81d",464:"b6fbd44a",505:"f7d7cfb6",557:"5822af67",681:"8bb97596",927:"14b2aaba",970:"92deabef"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={33:1,61:1,203:1,234:1,293:1,338:1,341:1,377:1,423:1,464:1,505:1,557:1,681:1,927:1,970:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6015)}));o=n.O(o)})();
//# sourceMappingURL=app.964a3f3f.js.map