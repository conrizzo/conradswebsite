(function(){"use strict";var e={5042:function(e,t,n){var o=n(9963),r=n(6252);function a(e,t,n,a,s,i){const c=(0,r.up)("TheMainHeader"),u=(0,r.up)("router-view"),l=(0,r.up)("TheMainFooter");return(0,r.wg)(),(0,r.iD)("div",null,[i.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(c,{key:0},null,512)),[[o.F8,s.showHeader]]):(0,r.kq)("",!0),(0,r.Wm)(u),i.showNav?(0,r.wy)(((0,r.wg)(),(0,r.j4)(l,{key:1},null,512)),[[o.F8,s.showFooter]]):(0,r.kq)("",!0)])}const s=e=>((0,r.dD)("data-v-8cebdb5e"),e=e(),(0,r.Cn)(),e),i={class:"nav-space-at-lower-resolution"},c={style:{height:"1.3em",width:"1.3em"},xmlns:"http://www.w3.org/2000/svg"},u=s((()=>(0,r._)("g",{transform:"translate(0, 5)"},[(0,r._)("path",{d:"M2 9l11-7 11 7l0+10",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r._)("line",{x1:"2",y1:"9",x2:"0",y2:"200",stroke:"currentColor",style:{"stroke-width":"2"},"stroke-linecap":"round"}),(0,r._)("line",{x1:"2",y1:"20",x2:"25",y2:"20",stroke:"currentColor",style:{"stroke-width":"2"}})],-1))),l=[u];function d(e,t,n,o,a,s){const u=(0,r.up)("router-link"),d=(0,r.up)("DropDownMenu");return(0,r.wg)(),(0,r.iD)("nav",i,[(0,r.Wm)(u,{to:"/",exact:"",class:"home-link","active-class":"active-home-link"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)("svg",c,l))])),_:1}),(0,r.Wm)(u,{class:"text-shadow",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Wm)(d)])}var p=n(3577);const f={class:"dropdown"},h={key:0,class:"dropdown-content"},m=["innerHTML"],b=(0,r._)("br",null,null,-1);function w(e,t,n,o,a,s){const i=(0,r.up)("router-link"),c=(0,r.up)("ProjectLinks");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",{class:"dropbtn unselectable",onMouseover:t[0]||(t[0]=(...e)=>s.openDropdown&&s.openDropdown(...e)),onClick:t[1]||(t[1]=(...e)=>s.toggleDropdown&&s.toggleDropdown(...e))},"Projects",32),a.isDropdownOpen?((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(c,{links:n.links},{default:(0,r.w5)((({links:t})=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((t,n)=>((0,r.wg)(),(0,r.j4)(i,{key:n,to:t.to,class:(0,p.C_)({active:e.$route.path===t.to})},{default:(0,r.w5)((()=>[(0,r._)("span",{innerHTML:t.text},null,8,m),b])),_:2},1032,["to","class"])))),128))])),_:1},8,["links"])])):(0,r.kq)("",!0)])}var g=n(7151),v={name:"DropdownMenu",components:{ProjectLinks:g.Z},props:{links:Array},data(){return{isDropdownOpen:!1,openTimeout:null}},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown(){this.isDropdownOpen||(this.isDropdownOpen=!1)},openDropdown(){clearTimeout(this.openTimeout),this.openTimeout=setTimeout((()=>{this.isDropdownOpen=!0}),250),this.isDropdownOpen=!1}}},y=n(3744);const k=(0,y.Z)(v,[["render",w]]);var j=k,C={name:"MainHeader",components:{DropDownMenu:j}};const D=(0,y.Z)(C,[["render",d],["__scopeId","data-v-8cebdb5e"]]);var _=D,x=n(834),A={name:"App",components:{TheMainHeader:_,TheMainFooter:x.Z},data(){return{showHeader:!1,showFooter:!1}},mounted(){setTimeout((()=>{this.showHeader=!0}),100),setTimeout((()=>{this.showFooter=!0}),500)},computed:{showNav(){return"/projects/cowgame"!==this.$route.path}}};const O=(0,y.Z)(A,[["render",a]]);var P=O,T=n(2392),M=n(2201);const S=()=>Promise.all([n.e(750),n.e(544),n.e(135)]).then(n.bind(n,7135)),F=()=>Promise.all([n.e(750),n.e(786)]).then(n.bind(n,4786)),N=()=>n.e(423).then(n.bind(n,7423)),E=()=>n.e(557).then(n.bind(n,5557)),W=()=>Promise.all([n.e(750),n.e(457)]).then(n.bind(n,9607)),I=()=>n.e(4).then(n.bind(n,4)),L=()=>n.e(776).then(n.bind(n,9557)),U=()=>n.e(148).then(n.bind(n,5148)),H=()=>Promise.all([n.e(750),n.e(83)]).then(n.bind(n,1083)),Z=()=>n.e(681).then(n.bind(n,5681)),V=()=>Promise.all([n.e(750),n.e(226)]).then(n.bind(n,9226)),q=()=>Promise.all([n.e(750),n.e(550)]).then(n.bind(n,4550)),B=()=>Promise.all([n.e(750),n.e(544),n.e(511)]).then(n.bind(n,1511)),G=()=>Promise.all([n.e(750),n.e(855)]).then(n.bind(n,4845)),Y=()=>n.e(203).then(n.bind(n,6203)),z=()=>n.e(106).then(n.bind(n,106)),K=[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:F},{path:"/projects",name:"projects",component:E},{path:"/projects/cowculator",name:"cowculator",component:W},{path:"/projects/:id/",name:"ProjectDetailsView",component:Z,props:!0},{path:"/projects/datasets",name:"DatasetsView",component:I},{path:"/projects/weather",name:"WeatherView",component:L},{path:"/projects/Links",name:"LinksView",component:U},{path:"/projects/cowgame",name:"CowGameView",component:H},{path:"/projects/firebasetest",name:"FirebaseTestView",component:V},{path:"/projects/sortingAlgorithms",name:"SortingAlgorithmsView",component:q},{path:"/projects/rustwebassembly",name:"RustWebAssemblyView",component:B},{path:"/authorized",name:"authorized",component:N,meta:{requiresAuth:!0}},{path:"/projects/cards",name:"CardsView",component:G},{path:"/projects/gallery",name:"Gallery",component:Y},{path:"/yadhtriByppah",name:"yadhtriByppahView",component:z},{path:"/:catchAll(.*)",redirect:"/"}],$=(0,M.p7)({history:(0,M.PO)("/"),routes:K});T.I.onAuthStateChanged((e=>{})),$.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));T.I.onAuthStateChanged((e=>{o&&!e?n("/projects/firebasetest"):n()}))}));var R=$;n(5660);(0,o.ri)(P).use(R).mount("#app")},2392:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(3977),r=n(6100),a=n(4857);const s={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},i=(0,o.ZF)(s),c=(0,r.ad)(i);t.Z=c;const u=(0,a.v0)()},834:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(6252),r=n(3577);const a=e=>((0,o.dD)("data-v-5a2b5bac"),e=e(),(0,o.Cn)(),e),s={class:"footer"},i={class:"text-area"},c=a((()=>(0,o._)("a",{class:"footer-links",href:"https://github.com/conrizzo/conradswebsite"},"GitHub",-1))),u=a((()=>(0,o._)("br",null,null,-1))),l=a((()=>(0,o._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0",-1)));function d(e,t,n,a,d,p){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",s,[(0,o._)("div",i,[(0,o._)("span",null,[(0,o.Wm)(f,{class:"footer-links",to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Uk)("    "),c,(0,o.Uk)("    "),(0,o.Wm)(f,{class:"footer-links",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("ConradsWebsite.com")])),_:1}),(0,o.Uk)(" © "+(0,r.zw)(p.getCurrentYear),1),u,(0,o.Uk)(" Licensed under "),l,(0,o.Uk)(" unless noted otherwise. ")])])])}var p={name:"MainFooter",data(){return{}},computed:{getCurrentYear(){return(new Date).getFullYear()}}},f=n(3744);const h=(0,f.Z)(p,[["render",d],["__scopeId","data-v-5a2b5bac"]]);var m=h},7151:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(6252);function r(e,t,n,r,a,s){return(0,o.WI)(e.$slots,"default",{links:n.links})}var a={name:"ProjectLinks",props:{links:{type:Array,required:!0,default:()=>[{text:"Cowculator",to:"/projects/cowculator"},{text:"Custom Weather",to:"/projects/weather"},{text:"Coffee Usage",to:"/projects/datasets"},{text:"Cow Food Game",to:"/projects/cowgame"},{text:"Post Messages",to:"/projects/firebasetest"},{text:"Sorting Algorithms",to:"/projects/sortingalgorithms"},{text:'Card Game <span style="color: #ff5959;">(New!)</span>',to:"/projects/cards"},{text:"Gallery",to:"/projects/gallery"}]}}},s=n(3744);const i=(0,s.Z)(a,[["render",r]]);var c=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{4:"bb899ce6",83:"180ce697",106:"5c3eb861",135:"a9e5806b",148:"c43a64cf",203:"1cfba187",226:"8ec7b6f2",423:"0ea0effb",457:"16482305",511:"b4dab8e7",544:"7662da6e",550:"33f434c6",557:"5d89b146",681:"ee0643cc",750:"1bcc2f08",776:"49837e09",786:"4d6c51b2",855:"180566f2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{4:"070b91ac",83:"8adac9db",135:"d0469f84",148:"fb7696b1",203:"8f5071b4",226:"19f44d79",423:"cbd29de7",457:"7dc38037",511:"6125de67",550:"17025939",557:"0b7d373f",681:"a1caab1b",776:"c21bd968",786:"3c4065ec",855:"26929c5f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var s=n.miniCssF(o),i=n.p+s;if(t(s,i))return r();e(o,i,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={4:1,83:1,135:1,148:1,203:1,226:1,423:1,457:1,511:1,550:1,557:1,681:1,776:1,786:1,855:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(o);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5042)}));o=n.O(o)})();
//# sourceMappingURL=app.67963ae4.js.map