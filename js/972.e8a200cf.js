"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[972],{1318:function(e,t,o){var s=o(5656),i=o(1400),r=o(6244),n=function(e){return function(t,o,n){var l,a=s(t),u=r(a),c=i(n,u);if(e&&o!=o){while(u>c)if(l=a[c++],l!=l)return!0}else for(;u>c;c++)if((e||c in a)&&a[c]===o)return e||c||0;return!e&&-1}};e.exports={includes:n(!0),indexOf:n(!1)}},3658:function(e,t,o){var s=o(9781),i=o(3157),r=TypeError,n=Object.getOwnPropertyDescriptor,l=s&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=l?function(e,t){if(i(e)&&!n(e,"length").writable)throw r("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,o){var s=o(2597),i=o(3887),r=o(1236),n=o(3070);e.exports=function(e,t,o){for(var l=i(t),a=n.f,u=r.f,c=0;c<l.length;c++){var h=l[c];s(e,h)||o&&s(o,h)||a(e,h,u(t,h))}}},7207:function(e){var t=TypeError,o=9007199254740991;e.exports=function(e){if(e>o)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,o){var s=o(7854),i=o(1236).f,r=o(8880),n=o(8052),l=o(3072),a=o(9920),u=o(4705);e.exports=function(e,t){var o,c,h,p,d,f,g=e.target,m=e.global,w=e.stat;if(c=m?s:w?s[g]||l(g,{}):(s[g]||{}).prototype,c)for(h in t){if(d=t[h],e.dontCallGetSet?(f=i(c,h),p=f&&f.value):p=c[h],o=u(m?h:g+(w?".":"#")+h,e.forced),!o&&void 0!==p){if(typeof d==typeof p)continue;a(d,p)}(e.sham||p&&p.sham)&&r(d,"sham",!0),n(c,h,d,e)}}},8361:function(e,t,o){var s=o(1702),i=o(7293),r=o(4326),n=Object,l=s("".split);e.exports=i((function(){return!n("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?l(e,""):n(e)}:n},3157:function(e,t,o){var s=o(4326);e.exports=Array.isArray||function(e){return"Array"==s(e)}},4705:function(e,t,o){var s=o(7293),i=o(614),r=/#|\.prototype\./,n=function(e,t){var o=a[l(e)];return o==c||o!=u&&(i(t)?s(t):!!t)},l=n.normalize=function(e){return String(e).replace(r,".").toLowerCase()},a=n.data={},u=n.NATIVE="N",c=n.POLYFILL="P";e.exports=n},6244:function(e,t,o){var s=o(7466);e.exports=function(e){return s(e.length)}},4758:function(e){var t=Math.ceil,o=Math.floor;e.exports=Math.trunc||function(e){var s=+e;return(s>0?o:t)(s)}},1236:function(e,t,o){var s=o(9781),i=o(6916),r=o(5296),n=o(9114),l=o(5656),a=o(4948),u=o(2597),c=o(4664),h=Object.getOwnPropertyDescriptor;t.f=s?h:function(e,t){if(e=l(e),t=a(t),c)try{return h(e,t)}catch(o){}if(u(e,t))return n(!i(r.f,e,t),e[t])}},8006:function(e,t,o){var s=o(6324),i=o(748),r=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,r)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,o){var s=o(1702),i=o(2597),r=o(5656),n=o(1318).indexOf,l=o(3501),a=s([].push);e.exports=function(e,t){var o,s=r(e),u=0,c=[];for(o in s)!i(l,o)&&i(s,o)&&a(c,o);while(t.length>u)i(s,o=t[u++])&&(~n(c,o)||a(c,o));return c}},5296:function(e,t){var o={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,i=s&&!o.call({1:2},1);t.f=i?function(e){var t=s(this,e);return!!t&&t.enumerable}:o},3887:function(e,t,o){var s=o(5005),i=o(1702),r=o(8006),n=o(5181),l=o(9670),a=i([].concat);e.exports=s("Reflect","ownKeys")||function(e){var t=r.f(l(e)),o=n.f;return o?a(t,o(e)):t}},1400:function(e,t,o){var s=o(9303),i=Math.max,r=Math.min;e.exports=function(e,t){var o=s(e);return o<0?i(o+t,0):r(o,t)}},5656:function(e,t,o){var s=o(8361),i=o(4488);e.exports=function(e){return s(i(e))}},9303:function(e,t,o){var s=o(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:s(t)}},7466:function(e,t,o){var s=o(9303),i=Math.min;e.exports=function(e){return e>0?i(s(e),9007199254740991):0}},7658:function(e,t,o){var s=o(2109),i=o(7908),r=o(6244),n=o(3658),l=o(7207),a=o(7293),u=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!c();s({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),o=r(t),s=arguments.length;l(o+s);for(var a=0;a<s;a++)t[o]=arguments[a],o++;return n(t,o),o}})},4260:function(e,t,o){o.d(t,{Z:function(){return d}});var s=o(6252),i=o(3577);const r={class:"footer"},n=(0,s._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),l=(0,s._)("br",null,null,-1),a=(0,s._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,o,u,c,h){const p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("footer",r,[(0,s._)("div",null,[(0,s._)("span",null,[(0,s.Wm)(p,{class:"footer-links",to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About  ")])),_:1}),(0,s.Uk)("  "),n,(0,s.Uk)("    conradswebsite.com © "+(0,i.zw)(h.getCurrentYear),1),l,(0,s.Uk)(" unless mentioned otherwise, licensing is "),a,(0,s.Uk)(". ")])])])}var c={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=o(3744);const p=(0,h.Z)(c,[["render",u]]);var d=p},7429:function(e,t,o){o.r(t),o.d(t,{default:function(){return Fe}});var s=o(6252),i=o.p+"img/cow_lecture.a62d3d6d.png";const r=e=>((0,s.dD)("data-v-a96f5506"),e=e(),(0,s.Cn)(),e),n={style:{"padding-top":"3em",background:"linear-gradient(\r\n        90deg,\r\n        rgba(0, 255, 119) 29%,\r\n        rgba(0, 224, 255) 100%\r\n      )"}},l=r((()=>(0,s._)("h1",{style:{color:"white","font-size":"3em"}},"The Cowculator",-1))),a={style:{color:"white","padding-bottom":"1.3vh","padding-top":"0em","line-height":"1.1","font-size":"2em"}},u=["innerHTML"],c={style:{background:"rgb(255, 255, 255)"}},h=r((()=>(0,s._)("h2",null,[(0,s.Uk)(" Now shows binary tree graphic of calculations as svg! Built in "),(0,s._)("a",{style:{color:"#42b883"},class:"text-links",href:"https://vuejs.org/"},"Vue.js"),(0,s._)("br"),(0,s.Uk)(" Moo"),(0,s._)("span",{style:{color:"black"}},"×"),(0,s.Uk)("Moo"),(0,s._)("span",{style:{color:"black"}},"×"),(0,s.Uk)("Moo = Moooooooooooooooo ")],-1))),p={style:{"padding-top":"3em"}},d={key:0},f=r((()=>(0,s._)("div",{class:"main-cow-figure"},[(0,s._)("figure",null,[(0,s._)("img",{src:i,alt:"Professor Cow Image",class:"professor-cow-figure"}),(0,s._)("figcaption",{class:"professor-cow-figure-text"},[(0,s._)("b",null,[(0,s._)("span",{style:{color:"#42b883"}},[(0,s._)("q",null,"I certify that this Cowculator cowculates!")])]),(0,s.Uk)(' - Professor Maximillian "Cowculus" Cowington, Distinguished Professor of Cowculating. ')])])],-1))),g={style:{"padding-bottom":"1em","margin-left":"0.2em","margin-right":"0.2em"}},m={key:0};function w(e,t,o,i,r,w){const b=(0,s.up)("AboutCalc"),v=(0,s.up)("UseCalc"),y=(0,s.up)("HelpGuide"),x=(0,s.up)("FirstFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[l,(0,s._)("h2",a,[(0,s._)("span",{innerHTML:r.header},null,8,u)])]),(0,s._)("div",c,[h,(0,s._)("div",p,[r.showAboutCalc?((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(b,{title:r.title,header:r.header,text:r.text,imagePath:r.imagePath,url:r.url,onClose:w.toggleAboutCalc},null,8,["title","header","text","imagePath","url","onClose"])])):(0,s.kq)("",!0),(0,s.Wm)(v),f,(0,s._)("div",g,[(0,s._)("button",{class:"button-35",style:{"margin-top":"0.25em"},onClick:t[0]||(t[0]=(...e)=>w.toggleAboutCalc&&w.toggleAboutCalc(...e))}," About the Cowculator "),(0,s._)("button",{class:"button-35",style:{"margin-top":"0.25em","margin-left":"0.5em"},onClick:t[1]||(t[1]=(...e)=>w.toggleHelpGuide&&w.toggleHelpGuide(...e))}," Help Guide ")])]),r.showHelpGuide?((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(y,{helptitle:r.helpTitle,helptitletwo:r.helpTitleTwo,helptext:r.helpText,onClose:w.toggleHelpGuide},null,8,["helptitle","helptitletwo","helptext","onClose"])])):(0,s.kq)("",!0)]),(0,s.Wm)(x)],64)}var b=o(9963),v=o(3577);const y=e=>((0,s.dD)("data-v-3b20a6ab"),e=e(),(0,s.Cn)(),e),x={class:"aboutCowculator"},k={style:{"padding-top":"0.5em"}},C=["innerHTML"],_={class:"about-modal-text",style:{"padding-bottom":"5px","text-align":"left"}},T={style:{"text-align":"left","padding-left":"2em"}},M=y((()=>(0,s._)("b",null,"Actual code that does the calculations here!",-1))),A=["href"],N=y((()=>(0,s._)("b",null,"Conrad's GitHub",-1))),z=[N],D=y((()=>(0,s._)("p",{class:"about-modal-text"}," Without a doubt, other calculators are simply inadequate. They lack the one essential feature that sets the Cow-culator apart: the Moo function. All this fancy math to do, but without a Moo button? It's like trying to milk a cow without a bucket. You simply can't do it. The Cow-culator, with its Vue.js-powered Moo function, is the only choice for discerning users who demand the very best from their cow-culations. Don't be square - use the Cow-culator! ",-1)));function S(e,t,o,i,r,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"backdrop",onClick:t[1]||(t[1]=(0,b.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))},[(0,s._)("div",x,[(0,s._)("button",{class:"close",onClick:t[0]||(t[0]=(0,b.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))}),(0,s._)("h2",k,[(0,s._)("span",{innerHTML:o.title},null,8,C),(0,s.Uk)(", why?")]),(0,s._)("p",_,(0,v.zw)(o.text),1),(0,s._)("ul",T,[(0,s._)("li",null,[(0,s.Wm)(l,{class:"text-links",to:"/projects/1/Cowculator/A%20working%20calculator"},{default:(0,s.w5)((()=>[M])),_:1})]),(0,s._)("li",null,[(0,s._)("a",{class:"text-links",href:o.url},z,8,A)])]),D])])}var I={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}},O=o(3744);const H=(0,O.Z)(I,[["render",S],["__scopeId","data-v-3b20a6ab"]]);var P=H;const U=e=>((0,s.dD)("data-v-393c8397"),e=e(),(0,s.Cn)(),e),j={class:"grid-container cow-image"},$=["onClick"],E={key:0,class:"arrow-position"},F=U((()=>(0,s._)("div",{class:"left-arrow"},null,-1))),G=[F],q={key:1},L=U((()=>(0,s._)("i",null,[(0,s.Uk)("x"),(0,s._)("sup",null,"y")],-1))),B={class:"tooltiptext"},V={key:2},Y={style:{display:"flex","justify-content":"center","align-items":"center"}},W={style:{display:"flex","flex-direction":"column","justify-content":"flex-end"}},R={style:{"padding-top":"0.5em"}},Z={key:0,style:{color:"#42b883"}},J={class:".dark-color-text cowculate-result"},K={key:0},Q={key:1},X=U((()=>(0,s._)("br",null,null,-1))),ee={style:{"font-size":"1.15em","background-color":"#6aff64","border-radius":"0.33em",display:"inline-block","padding-left":"0.25em","padding-right":"0.25em"}},te={key:0},oe={key:2},se=U((()=>(0,s._)("br",null,null,-1))),ie={style:{}},re={key:3},ne=U((()=>(0,s._)("br",null,null,-1))),le={key:0,class:"notification"},ae={style:{"font-weight":"bold"}},ue={style:{padding:"0.25em","padding-top":"1em"}},ce={key:0,class:".dark-color-text",style:{"font-size":"1em","font-weight":"400","margin-bottom":"0.25em"}},he=U((()=>(0,s._)("b",{style:{color:"#42b883"}},"Final Node Cowculation:",-1))),pe=U((()=>(0,s._)("br",null,null,-1))),de={class:"node-display"},fe={class:"node-display"},ge={class:"node-display"},me=U((()=>(0,s._)("br",null,null,-1))),we=U((()=>(0,s._)("b",{style:{color:"#42b883"}},"Full Binary Tree Structure in JSON:",-1))),be=U((()=>(0,s._)("br",null,null,-1))),ve={key:0},ye={ref:"svgContainer"},xe={style:{"text-align":"center"}},ke={class:"moo-cows-go-moo"},Ce={key:0},_e=U((()=>(0,s._)("br",null,null,-1)));function Te(e,t,o,i,r,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"input-field","onUpdate:modelValue":t[0]||(t[0]=e=>r.expression=e),type:"text",onInput:t[1]||(t[1]=e=>n.checkInput())},null,544),[[b.nr,r.expression]])]),(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.buttonList,(e=>((0,s.wg)(),(0,s.iD)("button",{key:e,class:(0,v.C_)(["grid-item",{"grid-item-symbols":"+"===e||"-"===e||"÷"==e||"×"==e,tooltip:"power"===e,active:r.isActive[e]}]),onClick:t=>n.addNumber(e)},["<-"===e?((0,s.wg)(),(0,s.iD)("div",E,G)):"power"===e?((0,s.wg)(),(0,s.iD)("div",q,[L,(0,s._)("span",B,(0,v.zw)(r.showTooltip),1)])):((0,s.wg)(),(0,s.iD)("div",V,(0,v.zw)(e),1))],10,$)))),128))]),(0,s._)("div",Y,[(0,s._)("div",null,[(0,s._)("button",{style:{"margin-right":"0.25em"},class:"button-35",onClick:t[2]||(t[2]=(...e)=>n.clearField&&n.clearField(...e))}," Reset "),(0,s._)("button",{style:{"margin-right":"0.25em"},class:"button-35",onClick:t[3]||(t[3]=(...e)=>n.copyToClipboard&&n.copyToClipboard(...e))}," Copy Result ")]),(0,s._)("div",W,[(0,s._)("button",{style:{"font-size":"0.75em",padding:"0.5em","border-radius":"0.75em","margin-bottom":"0.25em"},class:"button-35",onClick:t[4]||(t[4]=e=>n.adjustTreeSize("+"))}," + Binary Tree Size "),(0,s._)("button",{style:{"font-size":"0.75em",padding:"0.5em","border-radius":"0.75em"},class:"button-35",onClick:t[5]||(t[5]=e=>n.adjustTreeSize("-"))}," - Binary Tree Size ")])]),(0,s._)("div",R,[r.showDescriptionText?((0,s.wg)(),(0,s.iD)("b",Z,"Cowculation")):(0,s.kq)("",!0),(0,s._)("div",J,[(0,s.Uk)((0,v.zw)(r.addCommas(n.addInExtraMultiplicationSymbols(r.expression))),1),""==this.expression?((0,s.wg)(),(0,s.iD)("span",K)):(0,s.kq)("",!0),r.showText?((0,s.wg)(),(0,s.iD)("span",Q,[(0,s.Uk)(" =  "),X,(0,s._)("div",ee,["Infinity"==this.result?((0,s.wg)(),(0,s.iD)("span",te,(0,v.zw)(n.findInfinity),1)):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,v.zw)(r.addCommas(r.result)),1)])])):(0,s.kq)("",!0),r.mooCounter>0?((0,s.wg)(),(0,s.iD)("span",oe,[se,(0,s.Uk)("Number of Moos: "),(0,s._)("span",ie,(0,v.zw)(r.mooCounter),1)])):(0,s.kq)("",!0),r.superMoo?((0,s.wg)(),(0,s.iD)("span",re,[ne,(0,s.Uk)((0,v.zw)(r.mooPlication),1)])):(0,s.kq)("",!0)])]),r.showNotification?((0,s.wg)(),(0,s.iD)("div",le,[(0,s._)("span",ae,(0,v.zw)(r.result),1),(0,s.Uk)(" copied to clipboard! ")])):(0,s.kq)("",!0),(0,s._)("div",ue,[r.showDescriptionText?((0,s.wg)(),(0,s.iD)("div",ce,[he,pe,(0,s.Uk)(" Left node: "),(0,s._)("span",de,(0,v.zw)(r.addCommas(r.leftNode)),1),(0,s.Uk)("  Operator: "),(0,s._)("span",fe,(0,v.zw)(r.operator),1),(0,s.Uk)("  Right node: "),(0,s._)("span",ge,(0,v.zw)(r.addCommas(r.rightNode)),1),me,we,be,(0,s._)("div",null,[(0,s._)("span",null,(0,v.zw)(r.treeNodeCalculations),1)])])):(0,s.kq)("",!0),(0,s._)("div",null,[r.showText?((0,s.wg)(),(0,s.iD)("pre",ve,(0,v.zw)(n.treeString),1)):(0,s.kq)("",!0)]),(0,s._)("div",ye,null,512)]),(0,s._)("div",xe,[(0,s._)("h2",ke,[r.mooMessage?((0,s.wg)(),(0,s.iD)("span",Ce,[(0,s.Uk)(" Moo cows go moo, moo, moo!"),_e,(0,s.Uk)(" Moo cows go moo, moo, moo!")])):(0,s.kq)("",!0)])])],64)}o(7658);var Me={data(){return{showText:!1,expression:"",cleanedExpression:"",result:null,mooMessage:!1,mooTimer:null,mooCounter:null,superMoo:!1,mooPlication:"",buttonList:["×","1","2","3","÷","4","5","6","-","7","8","9","+","<-",".","0","power","(",")","Moo"],isActive:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],userTokens:[],operators:[],arrayOfNumbersOnly:[],treeNodeCalculations:null,currentNode:null,leftNode:null,rightNode:null,operator:null,formattedNumber:"",formattedResult:"",showDescriptionText:!1,message:toString(this.result),showNotification:!1,tree:{},expressionTree:this.treeNodeCalculations,showTooltip:"Making this work with my code was interesting! If the user does an expression like 2*2^2+2 the actual expression being evaluated is 2*(2^2)+2",adjustViewBoxSize:400,addCommas(e){if(null==e)return"";e=e.toString();var t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}}},computed:{treeString(){return this.printTree(this.tree)},svgContent(){var e=this.drawTree();return e},findInfinity(){return"Infinity"==this.result?"Moooooooo! You have reached ":""}},watch:{expression(e){let t=e;if(this.mooCounter=(t.match(/Moo/g)||[]).length,t.includes("Moo×Moo")||t.includes("Moo+Moo")){this.superMoo=!0;var o=2;let e="M";const s="Moo×Moo",i="Moo+Moo",r="Moo-Moo";if(t.includes(s)){let i=0,r=t.indexOf(s);while(-1!==r)i++,r=t.indexOf(s,r+1);for(let e=0;e<i;e++)o*=o;for(let t=0;t<o;t++)e+="o"}else if(t.includes(i)){let o=(t.match(/Moo/g)||[]).length;e="M";for(let t=0;t<o;t++)e+="oo"}else if(t.includes(r)){let o=(t.match(/Moo/g)||[]).length;e="M";for(let t=0;t<o-1;t++)e+="o"}this.mooPlication=e}t=t.replaceAll("÷","/").replaceAll("×","*"),this.expression.includes("Moo×Moo")&&this.expression.includes("Moo+Moo")||this.autoFixIncorrectInput(t),t=t.replaceAll("Moo",""),""===this.expression?(this.showText=!1,this.result="",this.showDescriptionText=!1,this.treeNodeCalculations=null,this.currentNode=null,this.clearSVG()):(this.cleanedExpression=t,this.cowculate())}},methods:{adjustTreeSize(e){null!=this.result&&("+"===e?this.adjustViewBoxSize-=100:"-"===e&&(this.adjustViewBoxSize+=100),this.setOutputs(this.result))},findInfinity2(){"Infinity"==this.result&&(this.result="Moo-Infinity!")},drawTree(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("width","400"),e.setAttribute("height","400"),e.setAttribute("viewBox",`0 0 470 ${this.adjustViewBoxSize}`);const t=235,o=50,s=100,i=100;return this.drawTreeTwo(e,this.tree,t,o,s,i),e},drawTreeTwo(e,t,o,s,i,r){if(!t)return;"*"==t.value?t.value="×":"/"==t.value&&(t.value="÷");const n=o-i,l=s+r,a=o+i,u=s+r;t.left&&(e.innerHTML+=`<line x1="${o}" y1="${s}" x2="${n}" y2="${l}" stroke="black" />`,this.drawTreeTwo(e,t.left,n,l,i/1.6,r)),t.right&&(e.innerHTML+=`<line x1="${o}" y1="${s}" x2="${a}" y2="${u}" stroke="black" />`,this.drawTreeTwo(e,t.right,a,u,i/1.6,r)),e.innerHTML+=`<circle cx="${o}" cy="${s}" r="15" fill="white" stroke="#42b883" stroke-opacity="0.5" />`,e.innerHTML+=`<text x="${o}" y="${s}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="1em">${t.value}</text>`},printTree(e,t=1,o=!0){if(null===e)return"";let s;if(o)s="";else{const e="Tree Level "+(t-1);s="   ".repeat(t-2)+e+"   "}const i=o?`Root        (${e.value})`:"("+e.value+")";return s+="   ".repeat(t-1)+"   ",`${s}${i}\n${this.printTree(e.left,t+1,!1)}${this.printTree(e.right,t+1,!1)}`},cowculate(){this.userTokens=[],this.operators=[],this.cleanedExpression=this.addParenthesisAroundPowerSymbol(this.cleanedExpression);try{var e=this.cleanedExpression;let o="";for(let t=0;t<e.length;t++){const s=e.charAt(t);if("-"!==s||0!==t&&!isNaN(e.charAt(t-1))||"("!==e.charAt(t+1)){if(!isNaN(s)||"."===s||"-"===s&&(0===t||isNaN(e.charAt(t-1))&&")"!==e.charAt(t-1)&&"("!==e.charAt(t+1)))o+=s,")"===e.charAt(t-1)&&this.operators.push("*"),"("===e.charAt(t+1)&&this.operators.push("*");else if(""!==o&&(this.userTokens.push(this.createNodes(!0,parseFloat(o))),o=""),"+"===s||"-"===s){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]){const e=this.createNodes();this.userTokens.push(e)}this.operators.push(s)}else if("*"===s||"/"===s||"!"===s){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]&&("*"===this.operators[this.operators.length-1]||"/"===this.operators[this.operators.length-1])){const e=this.createNodes();this.userTokens.push(e)}this.operators.push(s)}else if("^"===s){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]){const e=this.createNodes();this.userTokens.push(e)}this.operators.push(s)}else if("("===s)this.operators.push(s);else if(")"===s){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]){const e=this.createNodes();this.userTokens.push(e)}this.operators.length>0&&"("===this.operators[this.operators.length-1]&&this.operators.pop()}}else this.userTokens.push(this.createNodes(!0,0)),this.operators.push("-")}""!==o&&this.userTokens.push(this.createNodes(!0,parseFloat(o)));while(this.operators.length>0){const e=this.createNodes();this.userTokens.push(e)}var t=this.evaluate(this.userTokens[0]);this.setOutputs(t)}catch(o){this.result=null}},createNodes(e=!1,t=0){class o{constructor(e,t=null,o=null){this.value=e,this.left=t,this.right=o}}if(!1===e){const e=this.operators.pop(),t=this.userTokens.pop(),s=this.userTokens.pop();return new o(e,s,t)}return new o(t)},setOutputs(e){if(e==this.cleanedExpression)e="";else if(!Number.isNaN(e)){this.showText=!0,this.treeNodeCalculations=this.userTokens[0],this.treeData=this.treeNodeCalculations,this.tree=this.treeNodeCalculations,this.showDescriptionText=!0,this.message=e,this.result=e,this.clearSVG();const t=this.$refs.svgContainer;t.appendChild(this.svgContent),this.svgContent.setAttribute("width","100%")}},evaluate(e){if(null===e.left&&null===e.right)return e.value;var t=this.evaluate(e.left),o=this.evaluate(e.right);let s="";switch(s="*"===e.value?"×":"/"===e.value?"÷":e.value,this.leftNode=t,this.operator=s,this.rightNode=o,e.value){case"+":return t+o;case"-":return t-o;case"*":return t*o;case"/":return t/o;case"^":return Math.pow(t,o);default:return null}},clearSVG(){const e=this.$refs.svgContainer;while(e.firstChild)e.removeChild(e.firstChild)},checkInput(){let e=this.expression;const t=e.slice(-1);"0"===t?this.isActive[0]=!0:"1"===t?this.isActive[1]=!0:"2"===t?this.isActive[2]=!0:"3"===t?this.isActive[3]=!0:"4"===t?this.isActive[4]=!0:"5"===t?this.isActive[5]=!0:"6"===t?this.isActive[6]=!0:"7"===t?this.isActive[7]=!0:"8"===t?this.isActive[8]=!0:"9"===t&&(this.isActive[9]=!0),setTimeout((()=>{for(let e=0;e<10;e++)this.isActive[e]=!1}),150)},mooButtonHit(){this.mooMessage=!0,this.mooTimer&&clearTimeout(this.mooTimer),this.mooTimer=setTimeout((()=>{this.mooMessage=!1}),1500)},addNumber(e){"<-"===e?(this.removeEntry(),this.checkInput()):"power"===e?this.squared():"Moo"===e?(this.addMoo(),this.mooButtonHit()):this.expression+=e},addMoo(){this.expression+="Moo"},squared(){this.expression+="^"},addInExtraMultiplicationSymbols(e){let t=e.replace(/(\d)\(/g,"$1×(").replace(/\)\(/g,")×(");return t},addParenthesisAroundPowerSymbol(e){const t=/(\(\d+\)(?:\^\d+)*|\d+(?:\^\d+)+)/g;let o=e.replace(t,"($1)"),s=o.replace(/\)\(/g,")*(");return s},autoFixIncorrectInput(e){const t=e.slice(-2),o=e.slice(-3),s=[{pattern:/-\+|-\/|-\\|\+\+|\+\/|\+\*|\*\+|\*\/|\*\*|\+\\|\/\+|\/\/|\/\*/,replacement:""},{pattern:/---/,replacement:"-"},{pattern:/-\*/,replacement:"*"}];for(const i of s)if(i.pattern.test(t)||i.pattern.test(o)){this.expression=e.slice(0,-2)+e.slice(-1).replaceAll("/","÷").replaceAll("*","×").replace(i.pattern,i.replacement);break}this.expression=this.expression.replaceAll("/","÷").replaceAll("*","×")},removeEntry(){""!=this.expression&&("Moo"==this.expression.slice(-3)?this.expression=this.expression.slice(0,-3):this.expression=this.expression.slice(0,-1))},copyToClipboard(){navigator.clipboard.writeText(this.result),this.showNotification=!0,setTimeout((()=>{this.showNotification=!1}),1e3)},clearField(){this.expression="",this.cleanedExpression="",this.showText=!1,this.result=null,this.mooCounter=0,this.superMoo=!1,this.userTokens=[],this.operators=[],this.treeNodeCalculations=null,this.currentNode=null,this.leftNode=null,this.rightNode=null,this.operator=null,this.showDescriptionText=!1,this.formattedNumber="",this.formattedResult="",this.adjustViewBoxSize=400,this.tree={},this.clearSVG()}}};const Ae=(0,O.Z)(Me,[["render",Te],["__scopeId","data-v-393c8397"]]);var Ne=Ae;const ze=e=>((0,s.dD)("data-v-63de29a6"),e=e(),(0,s.Cn)(),e),De={class:"helpGuide"},Se=ze((()=>(0,s._)("p",{class:"help-guide-text"}," Enter numbers into the input field below using the keypad or by typing. The Cow-culator will perform mathematical operations on the numbers and count the number of Moo's! For instance, Moo2*Moo2*2Moo = 8, and Number of Moos: 3. Any input field entry or button press will update the values. Additionally, typing numbers into the input field, or hitting the back button will highlight corresponding buttons in the user interface. ",-1))),Ie=ze((()=>(0,s._)("p",{class:"help-guide-text"},' Currently, it is set to automatically perform calculations. Operations like 2(2)=4, (2)2=4, and (2)(2)=4 function correctly. The operations -(2+2) or 2*-(2+2) where the value inside paranthesis needs to be negated also now work! This was solved by pushing a new Node to the stack with the value 0 and performing 0 minus the value in paranthesis. For example, with the expression "2*-(2+2)" the math this calculator performs is 2*(0-(2+2)) = -8. Another interesting challenge that was solved in a surprisingly simple way is adding in a math.pow() function. To do this correclty in my code, paranthesis are added around the base and exponent values, but the user doesn\'t see them added in! For example the user would see 2*2^2+2 = 10 but the actual expression that is evaluated is 2*(2^2)+2 = 10. ',-1)));function Oe(e,t,o,i,r,n){return(0,s.wg)(),(0,s.iD)("div",{class:"backdrop",onClick:t[1]||(t[1]=(0,b.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))},[(0,s._)("div",De,[(0,s._)("button",{class:"close",onClick:t[0]||(t[0]=(0,b.iM)(((...e)=>n.closeModal&&n.closeModal(...e)),["self"]))}),(0,s._)("h1",null,(0,v.zw)(o.helptitle),1),Se,Ie])])}var He={props:["helptitle","helptext","helptitletwo"],methods:{closeModal(){this.$emit("close")}}};const Pe=(0,O.Z)(He,[["render",Oe],["__scopeId","data-v-63de29a6"]]);var Ue=Pe,je=o(4260),$e={name:"App",components:{AboutCalc:P,UseCalc:Ne,HelpGuide:Ue,FirstFooter:je.Z},data(){return{title:"<u><i>Cow</i></u>-culator",header:"<q>For the <u><i>moo</i></u>-st accurate <u><i>cow</i></u>-culations!</q>",text:"The Cowculator was made by Conrad in Tübingen, Germany, and built using Vue 3. It utilizes a self-made tree structure, correctly follows the order of operations, and displays the current math operation node being performed. The Cowculator does not use the JavaScript eval() function, as it is considered insecure and bad practice. The current left node, math operator node, and right node in the tree are shown as calculations are entered.",url:"https://github.com/conrizzo/conradswebsite",showAboutCalc:!1,helpTitle:"How to use:",helpTitleTwo:"Why use the cowculator?",helpText:"",showHelpGuide:!1,imagePath:o(9190)}},methods:{toggleAboutCalc(){this.showAboutCalc=!this.showAboutCalc},toggleHelpGuide(){this.showHelpGuide=!this.showHelpGuide}}};const Ee=(0,O.Z)($e,[["render",w],["__scopeId","data-v-a96f5506"]]);var Fe=Ee},9190:function(e,t,o){e.exports=o.p+"img/languages_july_17_2023.1260acd6.jpg"}}]);
//# sourceMappingURL=972.e8a200cf.js.map