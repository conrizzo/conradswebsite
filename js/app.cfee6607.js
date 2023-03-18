(function(){"use strict";var __webpack_modules__={182:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data(){return{numbers:[],showText:!1,expression:"",moos:null,result:null,mooMessage:!1,mooTimer:null}},methods:{cowculate(){let str=this.expression,count=0;while(-1!==str.indexOf("Moo"))count++,str=str.replace("Moo","");this.moos=count,console.log("Number of 'Moo' occurrences:",count),console.log("String after removing 'Moo':",str);try{this.result=" = "+eval(str)}catch(error){this.result=null}},noEntry(){this.result&&this.result!=" = "+void 0||(this.result="You didn't enter any numbers!")},mooButtonHit(){this.mooMessage=!0,this.mooTimer&&clearTimeout(this.mooTimer),this.mooTimer=setTimeout((()=>{this.mooMessage=!1}),1500)},addNumber(){this.expression+=1},addNumberTwo(){this.expression+=2},addNumberThree(){this.expression+=3},addNumberFour(){this.expression+=4},addNumberFive(){this.expression+=5},addNumberSix(){this.expression+=6},addNumberSeven(){this.expression+=7},addNumberEight(){this.expression+=8},addNumberNine(){this.expression+=9},addNumberZero(){this.expression+=0},addMoo(){this.expression+="Moo"},mooDialogue(){this.showText=!0},addAddition(){this.expression+="+"},addSubtraction(){this.expression+="-"},addMultiplication(){this.expression+="*"},addDivision(){this.expression+="/"},clearField(){this.numbers=[],this.expression="",this.showText=!1,this.result=null}}}},928:function(e,t,o){var i=o(963),r=o(252);function n(e,t){const o=(0,r.up)("router-link"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/projects"},{default:(0,r.w5)((()=>[(0,r.Uk)("Projects")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/projects/cowculator"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cowculator")])),_:1})]),(0,r.Wm)(i)],64)}var a=o(744);const s={},l=(0,a.Z)(s,[["render",n]]);var u=l,c=o(201);const d={class:"home"},_=(0,r._)("h1",null,"Welcome",-1),p=(0,r._)("p",null,"This site is built using Vue.js, Vue 3 specifically. The goal is to make some projects with Vue.js, and soon enough data + machine learning.",-1),h=[_,p];function m(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",d,h)}var b={name:"HomeView",components:{}};const w=(0,a.Z)(b,[["render",m]]);var g=w,f=o(577);const k=(0,r._)("h1",null," Projects ",-1),x=(0,r._)("p",{class:"paragraph-text"},"This currently shows an array of projects below.",-1);function v(e,t,o,i,n,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[k,x,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.projects,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(s,{to:{name:"ProjectDetailsView",params:{title:e.title,details:e.details,id:e.id}},class:"project-link"},{default:(0,r.w5)((()=>[(0,r._)("h2",null,(0,f.zw)(e.title),1)])),_:2},1032,["to"])])))),128))],64)}var y={data(){return{projects:[{title:"Cowculator",id:1,details:"Do Cowculations with math and moos!"},{title:"item 2",id:2,details:"list page 2"},{title:"item 3",id:3,details:"list page 3"}]}}};const C=(0,a.Z)(y,[["render",v]]);var M=C;const q=(0,r._)("h1",null," Cowculator ",-1),T=(0,r._)("p",{class:"paragraph-text"}," Behold the Cow-culator, now with a Moo function built-in! Without a doubt, other calculators are simply inadequate. They lack the one essential feature that sets the Cow-culator apart: the Moo function. Can you imagine doing calculations without the ability to press a Moo button? It's like trying to milk a cow without a bucket. You simply can't do it. The Cow-culator, with its Vue.js-powered Moo function, is the only choice for discerning users who demand the very best from their cow-culations. Don't be square - use the Cow-culator!\" ",-1),j=(0,r._)("hr",{class:"solid"},null,-1),D={class:"green-field-image"},N={style:{"margin-bottom":"15px","padding-top":"0.5em"}},H={key:0},S={style:{"padding-bottom":"1em"}},P={key:0},z=(0,r._)("hr",{class:"solid"},null,-1);function O(e,t,o,i,n,a){const s=(0,r.up)("SiteMain"),l=(0,r.up)("UseCalc"),u=(0,r.up)("HelpGuide");return(0,r.wg)(),(0,r.iD)(r.HY,null,[q,T,j,(0,r._)("div",D,[(0,r._)("h2",N,(0,f.zw)(n.title)+" - "+(0,f.zw)(n.header),1),n.showSiteMain?((0,r.wg)(),(0,r.iD)("div",H,[(0,r.Wm)(s,{title:n.title,header:n.header,text:n.text,imagePath:n.imagePath,url:n.url,onClose:a.toggleSiteMain},null,8,["title","header","text","imagePath","url","onClose"])])):(0,r.kq)("",!0),(0,r.Wm)(l),(0,r._)("div",S,[(0,r._)("button",{class:"button-35",style:{"margin-top":"5px","margin-left":"10px"},onClick:t[0]||(t[0]=(...e)=>a.toggleSiteMain&&a.toggleSiteMain(...e))}," About the Cowculator "),(0,r._)("button",{class:"button-35",style:{"margin-top":"5px","margin-left":"10px"},onClick:t[1]||(t[1]=(...e)=>a.toggleHelpGuide&&a.toggleHelpGuide(...e))}," Help Guide ")])]),n.showHelpGuide?((0,r.wg)(),(0,r.iD)("div",P,[(0,r.Wm)(u,{helptitle:n.helpTitle,helptext:n.helpText,onClose:a.toggleHelpGuide},null,8,["helptitle","helptext","onClose"])])):(0,r.kq)("",!0),z],64)}const U={class:"siteMain"},A={style:{"padding-bottom":"5px"}},G={style:{"padding-bottom":"5px"}},F={style:{"padding-bottom":"5px","text-align":"left"}},W=["src"],Z=["href"];function E(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>s.closeModal&&s.closeModal(...e)),["self"]))},[(0,r._)("div",U,[(0,r._)("h1",A,(0,f.zw)(o.title),1),(0,r._)("h2",G,(0,f.zw)(o.header),1),(0,r._)("p",F,(0,f.zw)(o.text),1),(0,r._)("img",{style:{"max-width":"15em"},src:o.imagePath,alt:"Image"},null,8,W),(0,r._)("a",{style:{display:"block","margin-left":"auto","margin-right":"auto","text-decoration":"none"},href:o.url},"Conrad's GitHub",8,Z)])])}var V={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}};const Y=(0,a.Z)(V,[["render",E],["__scopeId","data-v-90269dc6"]]);var I=Y;const B=e=>((0,r.dD)("data-v-75dc0dce"),e=e(),(0,r.Cn)(),e),L={class:"grid-container cow-image"},R={style:{"margin-bottom":"5px"}},$={style:{padding:"20px","margin-bottom":"50px"}},K={style:{"padding-top":"5px","padding-bottom":"3px","margin-top":"20px","font-size":"20px",position:"absolute",left:"0",right:"0","margin-left":"auto","margin-right":"auto"},class:"white-color-text"},J={key:0},Q=B((()=>(0,r._)("br",null,null,-1))),X={style:{"padding-top":"3em","padding-bottom":"-1em",color:"#ffffff"}},ee={key:0};function te(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",L,[(0,r._)("button",{class:"grid-item",onClick:t[0]||(t[0]=e=>s.addNumber())},"1"),(0,r._)("button",{class:"grid-item",onClick:t[1]||(t[1]=e=>s.addNumberTwo())},"2"),(0,r._)("button",{class:"grid-item",onClick:t[2]||(t[2]=e=>s.addNumberThree())},"3"),(0,r._)("button",{class:"grid-item",onClick:t[3]||(t[3]=e=>s.addNumberFour())},"4"),(0,r._)("button",{class:"grid-item",onClick:t[4]||(t[4]=e=>s.addNumberFive())},"5"),(0,r._)("button",{class:"grid-item",onClick:t[5]||(t[5]=e=>s.addNumberSix())},"6"),(0,r._)("button",{class:"grid-item",onClick:t[6]||(t[6]=e=>s.addNumberSeven())},"7"),(0,r._)("button",{class:"grid-item",onClick:t[7]||(t[7]=e=>s.addNumberEight())},"8"),(0,r._)("button",{class:"grid-item",onClick:t[8]||(t[8]=e=>s.addNumberNine())},"9"),(0,r._)("button",{class:"grid-item",onClick:t[9]||(t[9]=e=>s.addMultiplication())},"*"),(0,r._)("button",{class:"grid-item",onClick:t[10]||(t[10]=e=>s.addDivision())},"÷"),(0,r._)("button",{class:"grid-item",onClick:t[11]||(t[11]=e=>s.addNumberZero())},"0"),(0,r._)("button",{class:"grid-item",onClick:t[12]||(t[12]=e=>s.addSubtraction())},"-"),(0,r._)("button",{class:"grid-item",onClick:t[13]||(t[13]=e=>s.addAddition())},"+"),(0,r._)("button",{class:"grid-item",onClick:t[14]||(t[14]=e=>(s.addMoo(),s.mooButtonHit()))},"Moo")]),(0,r._)("div",R,[(0,r._)("button",{class:"button-35",onClick:t[15]||(t[15]=(...e)=>s.clearField&&s.clearField(...e))},"Reset"),(0,r._)("button",{class:"button-35",style:{"margin-left":"5px"},onClick:t[16]||(t[16]=e=>(s.cowculate(),s.mooDialogue(),s.noEntry()))}," Cowculate ")]),(0,r._)("div",$,[(0,r._)("h2",K,[(0,r.Uk)((0,f.zw)(a.expression),1),a.showText?((0,r.wg)(),(0,r.iD)("span",J,[(0,r.Uk)((0,f.zw)(a.result)+" ",1),Q,(0,r.Uk)(" Number of Moos: "+(0,f.zw)(a.moos),1)])):(0,r.kq)("",!0)]),(0,r.wy)((0,r._)("input",{style:{width:"268px","margin-bottom":"7px"},"onUpdate:modelValue":t[17]||(t[17]=e=>a.expression=e),type:"text"},null,512),[[i.nr,a.expression]]),(0,r._)("h2",X,[a.mooMessage?((0,r.wg)(),(0,r.iD)("span",ee," Moo cows go moo, moo, moo!")):(0,r.kq)("",!0)])])],64)}var oe=o(182);const ie=(0,a.Z)(oe.Z,[["render",te],["__scopeId","data-v-75dc0dce"]]);var re=ie;const ne=e=>((0,r.dD)("data-v-bd8fcc0c"),e=e(),(0,r.Cn)(),e),ae={class:"helpGuide"},se={style:{"padding-bottom":"5px"}},le={style:{"padding-bottom":"5px","text-align":"left"}},ue=ne((()=>(0,r._)("p",{style:{display:"inline-block","max-width":"500px","text-align":"left",padding:"10px"}}," Enter numbers into the input field below using the keypad or by typing. The Cow-culator will perform mathematical operations on the numbers and count the number of Moo's! For instance, if you input Moo2*Moo2*2Moo, the Cow-culator will display the result as: 'Result: 8 Moo's: 3', which means that there are three 'Moo's and 2 multiplied by 2 multiplied by 2 equals 8. Additionally, each input will show up in the array it's used in. Any input field entry or button press will update the values. ",-1)));function ce(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>s.closeModal&&s.closeModal(...e)),["self"]))},[(0,r._)("div",ae,[(0,r._)("h1",se,(0,f.zw)(o.helptitle),1),(0,r._)("p",le,(0,f.zw)(o.helptext),1),ue])])}var de={props:["helptitle","helptext"],methods:{closeModal(){this.$emit("close")}}};const _e=(0,a.Z)(de,[["render",ce],["__scopeId","data-v-bd8fcc0c"]]);var pe=_e,he={name:"App",components:{SiteMain:I,UseCalc:re,HelpGuide:pe},data(){return{title:"Cow-culator",header:"Alpha-Build-1.0",text:"This is built in Vue 3. Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props. From top to bottom they are props: title, header, text, imagePath, and url. This is a rough approximation of programming languages used to build this: ",url:"https://github.com/conrizzo/conradswebsite",showSiteMain:!1,helpTitle:"How to use:",helpText:"",showHelpGuide:!1,imagePath:o(325)}},methods:{toggleSiteMain(){this.showSiteMain=!this.showSiteMain},toggleHelpGuide(){this.showHelpGuide=!this.showHelpGuide}}};const me=(0,a.Z)(he,[["render",O]]);var be=me;const we=(0,r._)("h1",null,"Project Details",-1);function ge(e,t,o,n,a,s){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[we,(0,r._)("p",null,"Title: "+(0,f.zw)(o.title)+"  ID: "+(0,f.zw)(o.id)+"  Details: "+(0,f.zw)(o.details),1),(0,r.wy)((0,r._)("div",null,[(0,r.Wm)(l,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cowculator")])),_:1})],512),[[i.F8,1==o.id]])],64)}var fe={props:["title","id","details"]};const ke=(0,a.Z)(fe,[["render",ge]]);var xe=ke;const ve=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,235))},{path:"/projects",name:"projects",component:M},{path:"/projects/cowculator",name:"cowculator",component:be},{path:"/projects/:id:details",name:"ProjectDetailsView",component:xe,props:!0},{path:"/:catchAll(.*)",redirect:"/"}],ye=(0,c.p7)({history:(0,c.PO)("/"),routes:ve});var Ce=ye;(0,i.ri)(u).use(Ce).mount("#app")},325:function(e,t,o){e.exports=o.p+"img/languages.714111be.jpg"}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,o,i,r){if(!o){var n=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&r||n>=r)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](o[s])}))?o.splice(s--,1):(a=!1,r<n&&(n=r));if(a){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){__webpack_require__.d=function(e,t){for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,o){return __webpack_require__.f[o](e,t),t}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/about.80db61c1.js"}}(),function(){__webpack_require__.miniCssF=function(e){}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";__webpack_require__.l=function(o,i,r,n){if(e[o])e[o].push(i);else{var a,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+r){a=c;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var d=function(t,i){a.onerror=a.onload=null,clearTimeout(_);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(i)})),t)return t(i)},_=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p="/"}(),function(){var e={143:0};__webpack_require__.f.j=function(t,o){var i=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(o,r){i=e[t]=[o,r]}));o.push(i[2]=r);var n=__webpack_require__.p+__webpack_require__.u(t),a=new Error,s=function(o){if(__webpack_require__.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",a.name="ChunkLoadError",a.type=r,a.request=n,i[1](a)}};__webpack_require__.l(n,s,"chunk-"+t,t)}},__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,n=o[0],a=o[1],s=o[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(i in a)__webpack_require__.o(a,i)&&(__webpack_require__.m[i]=a[i]);if(s)var u=s(__webpack_require__)}for(t&&t(o);l<n.length;l++)r=n[l],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(u)},o=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(928)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.cfee6607.js.map