(function(){"use strict";var e={5051:function(e,t,o){var n=o(9963),s=o(6252);function i(e,t){const o=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",null,[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Uk)(" / "),(0,s.Wm)(o,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1}),(0,s.Uk)(" / "),(0,s.Wm)(o,{to:"/projects"},{default:(0,s.w5)((()=>[(0,s.Uk)("Projects")])),_:1}),(0,s.Uk)(" / "),(0,s.Wm)(o,{to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s.Uk)("Cowculator")])),_:1})]),(0,s.Wm)(n)],64)}var r=o(3744);const l={},a=(0,r.Z)(l,[["render",i]]);var u=a,c=o(2201);const h=e=>((0,s.dD)("data-v-cd44efd0"),e=e(),(0,s.Cn)(),e),p=h((()=>(0,s._)("div",{class:"title-section"},[(0,s._)("h1",null,"Welcome to Conrad's Website")],-1))),d={class:"container custom-background-home-page"},f={style:{"padding-top":"2em"}},m={class:"homeview"},g=h((()=>(0,s._)("br",null,null,-1))),w=h((()=>(0,s._)("br",null,null,-1)));function v(e,t,o,n,i,r){const l=(0,s.up)("router-link"),a=(0,s.up)("AsideContent"),u=(0,s.up)("FirstFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[p,(0,s._)("div",d,[(0,s._)("div",f,[(0,s._)("p",m,[(0,s.Uk)(" Check out the "),(0,s.Wm)(l,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s.Uk)("Cowculator")])),_:1}),(0,s.Uk)(", be sure to press the Moo button! "),g,w,(0,s.Uk)(" This website is now an ongoing project. The main point isn't the styling and how polished everything looks, though some time has gone into making it presentable. The idea is to design some applications using vue.js, and after some practice make some useful/fun applications. ")])]),(0,s.Wm)(a,{class:"aside"})]),(0,s.Wm)(u)],64)}var b=o(5660),_=o.n(b),k=o(1980),y=o(1022),C={name:"HomeView",components:{AsideContent:k.Z,FirstFooter:y.Z},mounted(){_().highlightAll()}};const x=(0,r.Z)(C,[["render",v],["__scopeId","data-v-cd44efd0"]]);var M=x,T=o(3577);const N=(0,s._)("h1",null,"Projects",-1),A=(0,s._)("div",{style:{height:"600px"}},null,-1);function F(e,t,o,n,i,r){const l=(0,s.up)("router-link"),a=(0,s.up)("FirstFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[N,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.projects,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s.Wm)(l,{to:{name:"ProjectDetailsView",params:{title:e.title,details:e.details,id:e.id},props:{title:e.title}},class:"project-link"},{default:(0,s.w5)((()=>[(0,s._)("h2",null,(0,T.zw)(e.title),1)])),_:2},1032,["to"])])))),128)),A,(0,s.Wm)(a)],64)}var D={components:{FirstFooter:y.Z},data(){return{projects:[{title:"Cowculator",id:1,details:"Do Cowculations with math and moos!"},{title:"Coffee Python",id:2,details:"list page 2"},{title:"item 3",id:3,details:"list page 3"}]}}};const E=(0,r.Z)(D,[["render",F]]);var z=E,j=o.p+"img/cow_lecture.a62d3d6d.png";const U=e=>((0,s.dD)("data-v-082051f6"),e=e(),(0,s.Cn)(),e),P={style:{"background-color":"rgb(75,75,75)"},class:"title-section"},O={style:{color:"white"}},I={style:{"background-color":"rgb(60,60,60)"}},H=U((()=>(0,s._)("h2",null," Moo×Moo is a fun expression. Moo×Moo×Moo is even better!",-1))),S={style:{"padding-top":"3em"}},W={key:0},L=U((()=>(0,s._)("figure",{class:"main-cow-figure"},[(0,s._)("img",{src:j,alt:"Professor Cow Image",class:"professor-cow-figure"}),(0,s._)("figcaption",{class:"professor-cow-figure-text"},[(0,s._)("strong",null,'"I certify that this Cowculator cowculates!"'),(0,s.Uk)(' - Professor Maximillian "Cowculus" Cowington, Distinguished Professor of Cowculating. ')])],-1))),Z={style:{"padding-bottom":"1em","margin-left":"0.2em","margin-right":"0.2em"}},G={key:0};function q(e,t,o,n,i,r){const l=(0,s.up)("SiteMain"),a=(0,s.up)("UseCalc"),u=(0,s.up)("HelpGuide"),c=(0,s.up)("FirstFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",P,[(0,s._)("h1",O,(0,T.zw)(i.title)+" - "+(0,T.zw)(i.header),1)]),(0,s._)("div",I,[H,(0,s._)("div",S,[i.showSiteMain?((0,s.wg)(),(0,s.iD)("div",W,[(0,s.Wm)(l,{title:i.title,header:i.header,text:i.text,imagePath:i.imagePath,url:i.url,onClose:r.toggleSiteMain},null,8,["title","header","text","imagePath","url","onClose"])])):(0,s.kq)("",!0),(0,s.Wm)(a),L,(0,s._)("div",Z,[(0,s._)("button",{class:"button-35",style:{"margin-top":"0.25em"},onClick:t[0]||(t[0]=(...e)=>r.toggleSiteMain&&r.toggleSiteMain(...e))}," About the Cowculator "),(0,s._)("button",{class:"button-35",style:{"margin-top":"0.25em","margin-left":"0.5em"},onClick:t[1]||(t[1]=(...e)=>r.toggleHelpGuide&&r.toggleHelpGuide(...e))}," Help Guide ")])]),i.showHelpGuide?((0,s.wg)(),(0,s.iD)("div",G,[(0,s.Wm)(u,{helptitle:i.helpTitle,helptitletwo:i.helpTitleTwo,helptext:i.helpText,onClose:r.toggleHelpGuide},null,8,["helptitle","helptitletwo","helptext","onClose"])])):(0,s.kq)("",!0)]),(0,s.Wm)(c)],64)}const B=e=>((0,s.dD)("data-v-24a75a33"),e=e(),(0,s.Cn)(),e),Y={class:"siteMain"},K=B((()=>(0,s._)("p",{class:"about-modal-text"}," Without a doubt, other calculators are simply inadequate. They lack the one essential feature that sets the Cow-culator apart: the Moo function. All this fancy math to do, but without a Moo button? It's like trying to milk a cow without a bucket. You simply can't do it. The Cow-culator, with its Vue.js-powered Moo function, is the only choice for discerning users who demand the very best from their cow-culations. Don't be square - use the Cow-culator! ",-1))),V=B((()=>(0,s._)("hr",null,null,-1))),$={style:{"padding-top":"0.25em"}},J={class:"about-modal-text",style:{"padding-bottom":"5px","text-align":"left"}},R=["src"],Q=["href"];function X(e,t,o,i,r,l){return(0,s.wg)(),(0,s.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>l.closeModal&&l.closeModal(...e)),["self"]))},[(0,s._)("div",Y,[(0,s._)("h2",null,"Why use the "+(0,T.zw)(o.title)+"?",1),K,V,(0,s._)("h2",$,(0,T.zw)(o.header),1),(0,s._)("p",J,(0,T.zw)(o.text),1),(0,s._)("div",null,[(0,s._)("img",{style:{"max-width":"15em"},src:o.imagePath,alt:"Image"},null,8,R)]),(0,s._)("a",{style:{display:"block","margin-left":"auto","margin-right":"auto","text-decoration":"none"},href:o.url},"Conrad's GitHub",8,Q)])])}var ee={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}};const te=(0,r.Z)(ee,[["render",X],["__scopeId","data-v-24a75a33"]]);var oe=te;const ne=e=>((0,s.dD)("data-v-0d402c8a"),e=e(),(0,s.Cn)(),e),se={style:{padding:"0.15em"}},ie={class:"grid-container cow-image"},re=ne((()=>(0,s._)("div",{class:"arrow-position"},[(0,s._)("div",{class:"left-arrow"})],-1))),le=[re],ae={style:{"margin-bottom":"5px"}},ue={style:{padding:"0.25em","margin-bottom":"3em"}},ce={class:"white-color-text cowculate-result"},he={key:0},pe={key:1},de=ne((()=>(0,s._)("br",null,null,-1))),fe=[de],me={key:2},ge={key:3},we=ne((()=>(0,s._)("br",null,null,-1))),ve={key:4},be=ne((()=>(0,s._)("br",null,null,-1))),_e={style:{"text-align":"center"}},ke={class:"moo-cows-go-moo"},ye={key:0},Ce=ne((()=>(0,s._)("br",null,null,-1)));function xe(e,t,o,i,r,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",se,[(0,s.wy)((0,s._)("input",{class:"input-field","onUpdate:modelValue":t[0]||(t[0]=e=>r.expression=e),type:"text",onInput:t[1]||(t[1]=(...e)=>l.checkInput&&l.checkInput(...e))},null,544),[[n.nr,r.expression]])]),(0,s._)("div",ie,[(0,s._)("button",{class:"grid-item-symbols",onClick:t[2]||(t[2]=e=>{l.addMathOperator("×")})}," × "),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[1]}]),onClick:t[3]||(t[3]=e=>l.addNumber(1))},(0,T.zw)(r.buttonList[1]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[2]}]),onClick:t[4]||(t[4]=e=>l.addNumber(2))},(0,T.zw)(r.buttonList[2]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[3]}]),onClick:t[5]||(t[5]=e=>l.addNumber(3))},(0,T.zw)(r.buttonList[3]),3),(0,s._)("button",{class:"grid-item-symbols",onClick:t[6]||(t[6]=e=>l.addMathOperator("÷"))},"÷"),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[4]}]),onClick:t[7]||(t[7]=e=>l.addNumber(4))},(0,T.zw)(r.buttonList[4]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[5]}]),onClick:t[8]||(t[8]=e=>l.addNumber(5))},(0,T.zw)(r.buttonList[5]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[6]}]),onClick:t[9]||(t[9]=e=>l.addNumber(6))},(0,T.zw)(r.buttonList[6]),3),(0,s._)("button",{class:"grid-item-symbols",onClick:t[10]||(t[10]=e=>l.addMathOperator("-"))},"-"),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[7]}]),onClick:t[11]||(t[11]=e=>l.addNumber(7))},(0,T.zw)(r.buttonList[7]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[8]}]),onClick:t[12]||(t[12]=e=>l.addNumber(8))},(0,T.zw)(r.buttonList[8]),3),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[9]}]),onClick:t[13]||(t[13]=e=>l.addNumber(9))},(0,T.zw)(r.buttonList[9]),3),(0,s._)("button",{class:"grid-item-symbols",onClick:t[14]||(t[14]=e=>l.addMathOperator("+"))},"+"),(0,s._)("button",{class:"grid-item",onClick:t[15]||(t[15]=e=>(l.removeEntry(),l.checkInput()))},le),(0,s._)("button",{class:"grid-item",onClick:t[16]||(t[16]=e=>l.addMathOperator("."))},"."),(0,s._)("button",{class:(0,T.C_)(["grid-item",{active:r.isActive[0]}]),onClick:t[17]||(t[17]=e=>l.addNumber(0))},(0,T.zw)(r.buttonList[0]),3),(0,s._)("button",{class:"grid-item",onClick:t[18]||(t[18]=e=>(l.addMoo(),l.mooButtonHit()))},"Moo"),(0,s._)("button",{class:"grid-item",onClick:t[19]||(t[19]=e=>l.setFactorialize(this.expression))},"n!")]),(0,s._)("div",ae,[(0,s._)("button",{class:"button-35",onClick:t[20]||(t[20]=(...e)=>l.clearField&&l.clearField(...e))},"Reset"),(0,s._)("button",{class:"button-35",style:{"margin-left":"5px"},onClick:t[21]||(t[21]=e=>(l.cowculate(),l.mooDialogue(),l.noEntry()))}," Cowculate ")]),(0,s._)("div",ue,[(0,s._)("div",ce,[(0,s.Uk)((0,T.zw)(r.expression),1),r.errorMessage&&""==this.expression?((0,s.wg)(),(0,s.iD)("span",he)):r.errorMessage?((0,s.wg)(),(0,s.iD)("span",pe,fe)):(0,s.kq)("",!0),r.showText?((0,s.wg)(),(0,s.iD)("span",me,(0,T.zw)(r.result),1)):(0,s.kq)("",!0),r.mooCounter>0?((0,s.wg)(),(0,s.iD)("span",ge,[we,(0,s.Uk)("Number of Moos: "+(0,T.zw)(r.mooCounter),1)])):(0,s.kq)("",!0),r.superMoo?((0,s.wg)(),(0,s.iD)("span",ve,[be,(0,s.Uk)((0,T.zw)(r.mooPlication),1)])):(0,s.kq)("",!0)]),(0,s._)("div",_e,[(0,s._)("h2",ke,[r.mooMessage?((0,s.wg)(),(0,s.iD)("span",ye,[(0,s.Uk)(" Moo cows go moo, moo, moo!"),Ce,(0,s.Uk)(" Moo cows go moo, moo, moo!")])):(0,s.kq)("",!0)])])])],64)}o(7658);var Me={data(){return{showText:!1,expression:"",cleanedExpression:"",result:null,mooMessage:!1,mooTimer:null,errorMessage:!1,mooCounter:null,superMoo:!1,mooPlication:"",buttonList:["0","1","2","3","4","5","6","7","8","9"],isActive:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],userTokens:[],operators:[]}},watch:{expression(e){let t=e;if(this.mooCounter=(t.match(/Moo/g)||[]).length,console.log("Number of 'Moo' occurrences:",this.mooCounter),t.includes("Moo×Moo")||t.includes("Moo+Moo")){this.superMoo=!0;var o=2;let e="M";const n="Moo×Moo",s="Moo+Moo",i="Moo-Moo";if(t.includes(n)){let s=0,i=t.indexOf(n);while(-1!==i)s++,i=t.indexOf(n,i+1);for(let e=0;e<s;e++)o*=o;for(let t=0;t<o;t++)e+="o";console.log(s,o,e)}else if(t.includes(s)){let o=(t.match(/Moo/g)||[]).length;e="M";for(let t=0;t<o;t++)e+="oo"}else if(t.includes(i)){let o=(t.match(/Moo/g)||[]).length;e="M";for(let t=0;t<o-1;t++)e+="o"}this.mooPlication=e}t=t.replaceAll("÷","/").replaceAll("×","*").replaceAll("Moo","");const n=/([-+*/%^()]|\d+(\.\d+)?)/g;n.test(t)&&(this.showText=!0,this.cleanedExpression=t,this.cowculate())}},methods:{checkInput(){let e=this.expression;const t=e.slice(-1);console.log(t),"0"===t?this.isActive[0]=!0:"1"===t?this.isActive[1]=!0:"2"===t?this.isActive[2]=!0:"3"===t?this.isActive[3]=!0:"4"===t?this.isActive[4]=!0:"5"===t?this.isActive[5]=!0:"6"===t?this.isActive[6]=!0:"7"===t?this.isActive[7]=!0:"8"===t?this.isActive[8]=!0:"9"===t&&(this.isActive[9]=!0),setTimeout((()=>{for(let e=0;e<10;e++)this.isActive[e]=!1}),150)},cowculate(){let e=this.cleanedExpression;console.log(this.cleanedExpression);try{if(/[+\-*/÷\u00D7]/.test(e)){console.log("else expression");class e{constructor(e,t=null,o=null){this.value=e,this.left=t,this.right=o}}console.log(this.cleanedExpression);var t=this.cleanedExpression;console.log(t);let o="";/^-$/.test(t)?(console.log("the input 2: ",t),t=t.slice(0,-1)):/^-\d+(\.\d+)?$/.test(t)&&(console.log("the input 3: ",t),o=t,t=t.slice(0,-t.length)),-1!=="+-*/".indexOf(t.slice(-1))&&(t=t.slice(0,-2),console.log("the input 1: ",t)),console.log("Final result",o+t),console.log("Final input",t);let n="";for(let i=0;i<t.length;i++){const o=t.charAt(i);if(!isNaN(o)||"."===o||"-"===o&&(0===i||isNaN(t.charAt(i-1))))n+=o;else if(""!==n&&(this.userTokens.push(new e(parseFloat(n))),n=""),"+"===o||"-"===o){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]){const t=this.operators.pop(),o=this.userTokens.pop(),n=this.userTokens.pop(),s=new e(t,n,o);this.userTokens.push(s)}this.operators.push(o)}else if("*"===o||"/"===o){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]&&("*"===this.operators[this.operators.length-1]||"/"===this.operators[this.operators.length-1])){const t=this.operators.pop(),o=this.userTokens.pop(),n=this.userTokens.pop(),s=new e(t,n,o);this.userTokens.push(s)}this.operators.push(o)}else if("("===o)this.operators.push(o);else if(")"===o){while(this.operators.length>0&&"("!==this.operators[this.operators.length-1]){const t=this.operators.pop(),o=this.userTokens.pop(),n=this.userTokens.pop(),s=new e(t,n,o);this.userTokens.push(s)}this.operators.length>0&&"("===this.operators[this.operators.length-1]&&this.operators.pop()}}""!==n&&this.userTokens.push(new e(parseFloat(n)));while(this.operators.length>0){const t=this.operators.pop(),o=this.userTokens.pop(),n=this.userTokens.pop(),s=new e(t,n,o);this.userTokens.push(s)}const s=this.evaluate(this.userTokens[0]);console.log("final result",s),Number.isNaN(s)||(this.result=" = "+s),this.userTokens=[],this.operators=[]}else this.result=""}catch(o){this.result=null}},evaluate(e){if(null===e.left&&null===e.right)return e.value;var t=this.evaluate(e.left),o=this.evaluate(e.right);return console.log(t,o),"+"===e.value?t+o:"-"===e.value?t-o:"*"===e.value?t*o:"/"===e.value?t/o:void 0},setFactorialize(e){if(!Number.isNaN(e)){var t=this.factorialize(e);console.log(t),this.expression=t}},factorialize(e){return e<0?-1:0==e?1:e*this.factorialize(e-1)},noEntry(){this.result&&this.result!=" = "+void 0||(this.errorMessage=!0,this.result=" Can't cowculate with this input!")},mooButtonHit(){this.mooMessage=!0,this.mooTimer&&clearTimeout(this.mooTimer),this.mooTimer=setTimeout((()=>{this.mooMessage=!1}),1500)},addNumber(e){this.expression+=e},addMathOperator(e){this.expression+=e},addMoo(){this.expression+="Moo"},mooDialogue(){this.showText=!0},removeEntry(){""!=this.expression&&("Moo"==this.expression.slice(-3)?this.expression=this.expression.slice(0,-3):this.expression=this.expression.slice(0,-1))},clearField(){this.expression="",this.cleanedExpression="",this.showText=!1,this.result=null,this.errorMessage=!1,this.mooCounter=0,this.superMoo=!1,this.userTokens=[],this.operators=[]}}};const Te=(0,r.Z)(Me,[["render",xe],["__scopeId","data-v-0d402c8a"]]);var Ne=Te;const Ae=e=>((0,s.dD)("data-v-6d6c9956"),e=e(),(0,s.Cn)(),e),Fe={class:"helpGuide"},De=Ae((()=>(0,s._)("p",{class:"help-guide-text"}," Enter numbers into the input field below using the keypad or by typing. The Cow-culator will perform mathematical operations on the numbers and count the number of Moo's! For instance, if you input Moo2*Moo2*2Moo, the Cow-culator will display the result as: 'Result: 8 Moo's: 3', which means that there are three 'Moo's and 2 multiplied by 2 multiplied by 2 equals 8. Additionally, each input will show up in the array it's used in. Any input field entry or button press will update the values. For advanced exponential cowculations use two multiplciation symbols consecutively. For example, 5**3 will equal 125. Currently, the factorial button only works on individual numbers. ",-1))),Ee=Ae((()=>(0,s._)("p",{class:"help-guide-text"},' Currently, it is set to automatically perform calculations. The "Cowculate" button is sort of an "override" to force any calculation. There are a few tricks to this, for example when entering numbers the result will only show when a math operator occurs after a number, and a calculation can be performed with another number! ',-1)));function ze(e,t,o,i,r,l){return(0,s.wg)(),(0,s.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>l.closeModal&&l.closeModal(...e)),["self"]))},[(0,s._)("div",Fe,[(0,s._)("h1",null,(0,T.zw)(o.helptitle),1),De,Ee])])}var je={props:["helptitle","helptext","helptitletwo"],methods:{closeModal(){this.$emit("close")}}};const Ue=(0,r.Z)(je,[["render",ze],["__scopeId","data-v-6d6c9956"]]);var Pe=Ue,Oe={name:"App",components:{SiteMain:oe,UseCalc:Ne,HelpGuide:Pe,FirstFooter:y.Z},data(){return{title:"Cow-culator",header:"Alpha-Build-2.0",text:"Made in Tübingen, Germany, and built using Vue 3. The cowculations use a self-made tree structure, not JavaScript eval() function! From top to bottom this modal is made of props: title, header, text, imagePath, and url. A rough approximation of programming languages used to build this below: ",url:"https://github.com/conrizzo/conradswebsite",showSiteMain:!1,helpTitle:"How to use:",helpTitleTwo:"Why use the cowculator?",helpText:"",showHelpGuide:!1,imagePath:o(3325)}},methods:{toggleSiteMain(){this.showSiteMain=!this.showSiteMain},toggleHelpGuide(){this.showHelpGuide=!this.showHelpGuide}}};const Ie=(0,r.Z)(Oe,[["render",q],["__scopeId","data-v-082051f6"]]);var He=Ie;const Se=e=>((0,s.dD)("data-v-71268701"),e=e(),(0,s.Cn)(),e),We={class:"router-link-style"},Le=Se((()=>(0,s._)("p",{class:"homeview"},"Here is how the cowculator cowculates. An additional evaluate function is also used.",-1))),Ze=Se((()=>(0,s._)("code",null,'cowculate() {\n      /* Cow Moo cowculations */\n\n      let str = this.cleanedExpression;\n      console.log(this.cleanedExpression)\n      // old method BAD - to check if numbers were the same parseFloat(str) === eval(str)\n      try {\n        if (!(/[+\\-*/÷\\u00D7]/).test(str)) {\n          this.result = "a";\n        }\n        else {\n          console.log("else expression")\n          class Node {\n            constructor(value, left = null, right = null) {\n              this.value = value;\n              this.left = left;\n              this.right = right;\n            }\n          }\n\n          //this.cleanedExpression = "-4*-2"\n\n          console.log(this.cleanedExpression)\n          //this.cleanedExpression = "4--2+3"\n          var input = this.cleanedExpression\n          console.log(input)\n          let begin_expression_negative = ""\n          if ((/^-$/).test(input)) {\n            console.log("the input 2: ", input)\n            input = input.slice(0, -1);\n\n          } else if ((/^-\\d+(\\.\\d+)?$/).test(input)) {\n            console.log("the input 3: ", input)\n            begin_expression_negative = input\n            input = input.slice(0, -input.length);\n\n          }\n          // Finally!, a neat way to solve this is to remove any invalid operators for calculations instead of modifying the whole tree\n          // Now this checks for an additional operator with a number, no calculations until it\'s a valid input\n          if (\'+-*/\'.indexOf(input.slice(-1)) !== -1) {\n            input = input.slice(0, -2);\n            console.log("the input 1: ", input)\n\n          }\n\n          console.log("Final result", begin_expression_negative + input)\n          console.log("Final input", input)\n\n\n          let currentNumber = "";\n          for (let i = 0; i ( input.length; i++) {\n            const char = input.charAt(i);\n            if (!isNaN(char) || char === "." || (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))))) {\n              currentNumber += char;\n            } else {\n              if (currentNumber !== "") {\n                this.userTokens.push(new Node(parseFloat(currentNumber)));\n                currentNumber = "";\n              }\n              if (char === "+" || char === "-") {\n                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {\n                  const op = this.operators.pop();\n                  const right = this.userTokens.pop();\n                  const left = this.userTokens.pop();\n                  const node = new Node(op, left, right);\n                  this.userTokens.push(node);\n                }\n                this.operators.push(char);\n              }\n              else if (char === "*" || char === "/") {\n                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(" && (this.operators[this.operators.length - 1] === "*" || this.operators[this.operators.length - 1] === "/")) {\n                  const op = this.operators.pop();\n                  const right = this.userTokens.pop();\n                  const left = this.userTokens.pop();\n                  const node = new Node(op, left, right);\n                  this.userTokens.push(node);\n                }\n                this.operators.push(char);\n              }\n              else if (char === "(") {\n                this.operators.push(char);\n              }\n              else if (char === ")") {\n                while (this.operators.length > 0 && this.operators[this.operators.length - 1] !== "(") {\n                  const op = this.operators.pop();\n                  const right = this.userTokens.pop();\n                  const left = this.userTokens.pop();\n                  const node = new Node(op, left, right);\n                  this.userTokens.push(node);\n                }\n                if (this.operators.length > 0 && this.operators[this.operators.length - 1] === "(") {\n                  this.operators.pop();\n                }\n              }\n            }\n          }\n\n          // Add the last number if there is one\n          if (currentNumber !== "") {\n            this.userTokens.push(new Node(parseFloat(currentNumber)));\n          }\n\n          // Perform remaining operations\n          while (this.operators.length > 0) {\n            const op = this.operators.pop();\n            const right = this.userTokens.pop();\n            const left = this.userTokens.pop();\n            const node = new Node(op, left, right);\n            this.userTokens.push(node);\n          }\n\n          const result = this.evaluate(this.userTokens[0]);\n          console.log("final result", result); // should output 0 for input "2*2-2*2"\n          // Good article about using NaN in JavaScript. \n          // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.\n          // This method works below, but others could also work.\n          if (!Number.isNaN(result)) {\n            this.result = " = " + result\n          }\n          this.userTokens = []\n          this.operators = []\n\n        }\n\n      } catch (error) {\n        this.result = null;\n      }\n    },',-1))),Ge=Se((()=>(0,s._)("p",{class:"homeview"},"Here is the evaluate helper function which calculates nodes on the tree data structure:",-1))),qe=Se((()=>(0,s._)("code",null,'evaluate(node) {\n      if (node.left === null && node.right === null) {\n        return node.value;\n      }\n      var left = this.evaluate(node.left);\n      var right = this.evaluate(node.right);\n      if (node.value === "+") {\n        return left + right;\n      }\n      if (node.value === "-") {\n        return left - right;\n      }\n      if (node.value === "*") {\n        return left * right;\n      }\n      if (node.value === "/") {\n        return left / right;\n      }\n}',-1))),Be=[qe],Ye=Se((()=>(0,s._)("code",null,'DRINK_COFFEE = True\nwebsite_finished = False\nwhile website_finished is False:\n print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")',-1))),Ke=Se((()=>(0,s._)("p",{class:"homeview"}," Python doesn't officially syntactically have constants so it's capitalized to show it should not be modified \"DRINK_COFFEE=True\", but the code above emphasizes that work continues, and the coffee drinking will always continue. ",-1))),Ve=Se((()=>(0,s._)("code",null,'# Defines a Python function to describe coffee\ndef describe_coffee(roast_level, origin, flavor_notes):\n    """\n    This function describes a cup of coffee based on its roast level, origin, and flavor notes.\n\n    :param roast_level: The roast level of the coffee, e.g. light, medium, dark.\n    :param origin: The origin of the coffee, e.g. Ethiopia, Colombia, Kenya.\n    :param flavor_notes: The flavor notes of the coffee, e.g. chocolate, caramel, citrus.\n    :return: A string describing the coffee.\n    """\n    return f"This {roast_level}-roasted coffee from {origin} has flavor notes of {flavor_notes}."\n\n# Example usage of the function\ncoffee_description = describe_coffee("medium", "Colombia", "chocolate and caramel")\nprint(coffee_description)',-1)));function $e(e,t,o,i,r,l){const a=(0,s.up)("router-link"),u=(0,s.up)("FirstFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("p",null,"Title: "+(0,T.zw)(o.title)+"  ID: "+(0,T.zw)(o.id)+"  Details: "+(0,T.zw)(o.details),1),(0,s._)("div",We,[(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(a,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s.Uk)("Cowculator")])),_:1}),Le,(0,s._)("pre",{class:(0,T.C_)(["language-JavaScript","hhh"])},[(0,s.Uk)(""),Ze,(0,s.Uk)("\n")]),Ge,(0,s._)("pre",{class:(0,T.C_)(["language-JavaScript","hhh"])},Be)],512),[[n.F8,1==o.id]]),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(a,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,T.zw)(o.title),1)])),_:1}),(0,s._)("pre",{class:(0,T.C_)(["language-python","hhh"])},[(0,s.Uk)(""),Ye]),Ke,(0,s._)("pre",{class:(0,T.C_)(["language-python","hhh"])},[(0,s.Uk)(""),Ve])],512),[[n.F8,2==o.id]]),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(a,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s.Uk)("Project 3")])),_:1})],512),[[n.F8,3==o.id]]),(0,s.Wm)(u)])],64)}var Je={props:["title","id","details"],mounted(){_().highlightAll()}};const Re=(0,r.Z)(Je,[["render",$e],["__scopeId","data-v-71268701"]]);var Qe=Re;const Xe=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,8202))},{path:"/projects",name:"projects",component:z},{path:"/projects/cowculator",name:"cowculator",component:He},{path:"/projects/:id:details:title",name:"ProjectDetailsView",component:Qe,props:!0},{path:"/:catchAll(.*)",redirect:"/"}],et=(0,c.p7)({history:(0,c.PO)("/"),routes:Xe});var tt=et;o(366);(0,n.ri)(u).use(tt).mount("#app")},1980:function(e,t,o){o.d(t,{Z:function(){return d}});var n=o(6252);const s=e=>((0,n.dD)("data-v-dcececa4"),e=e(),(0,n.Cn)(),e),i=s((()=>(0,n._)("h2",null,"Aside Content",-1))),r=s((()=>(0,n._)("h2",null,"Incredible latin Text!",-1))),l=s((()=>(0,n._)("p",{class:"aside",style:{"margin-top":"1em"}}," I'm not sure what to do with this aside here yet, but I'll figure something out! ",-1))),a=[i,r,l];function u(e,t,o,s,i,r){return(0,n.wg)(),(0,n.iD)("aside",null,a)}var c={name:"AsideContent"},h=o(3744);const p=(0,h.Z)(c,[["render",u],["__scopeId","data-v-dcececa4"]]);var d=p},1022:function(e,t,o){o.d(t,{Z:function(){return h}});var n=o(6252);const s={class:"footer"},i=(0,n._)("div",{class:""},[(0,n._)("p",null,[(0,n.Uk)(" Website by "),(0,n._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"Conrad"),(0,n.Uk)(" | conradswebsite.com © 2023"),(0,n._)("br"),(0,n.Uk)(" unless mentioned otherwise, licensing is "),(0,n._)("a",{class:"footer-links",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),(0,n.Uk)(". ")])],-1),r=[i];function l(e,t,o,i,l,a){return(0,n.wg)(),(0,n.iD)("footer",s,r)}var a={name:"FirstFooter"},u=o(3744);const c=(0,u.Z)(a,[["render",l]]);var h=c},3325:function(e,t,o){e.exports=o.p+"img/languages.714111be.jpg"}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],i=e[c][2];for(var l=!0,a=0;a<n.length;a++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(l=!1,i<r&&(r=i));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,s,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.5cb59309.js"}}(),function(){o.miniCssF=function(e){return"css/about.4597b764.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";o.l=function(n,s,i,r){if(e[n])e[n].push(s);else{var l,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var h=u[c];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+i){l=h;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+i),l.src=n),e[n]=[s];var p=function(t,o){l.onerror=l.onload=null,clearTimeout(d);var s=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(o)})),t)return t(o)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,s){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=r,a.request=l,i.parentNode&&i.parentNode.removeChild(i),s(a)}};return i.onerror=i.onload=r,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var s=o[n],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===t))return s}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){s=r[n],i=s.getAttribute("data-href");if(i===e||i===t)return s}},n=function(n){return new Promise((function(s,i){var r=o.miniCssF(n),l=o.p+r;if(t(r,l))return s();e(n,l,null,s,i)}))},s={143:0};o.f.miniCss=function(e,t){var o={443:1};s[e]?t.push(s[e]):0!==s[e]&&o[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var i=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=i);var r=o.p+o.u(t),l=new Error,a=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,s[1](l)}};o.l(r,a,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],l=n[1],a=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(a)var c=a(o)}for(t&&t(n);u<r.length;u++)i=r[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5051)}));n=o.O(n)})();
//# sourceMappingURL=app.1cc12f64.js.map