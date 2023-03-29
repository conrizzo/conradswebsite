(function(){"use strict";var __webpack_modules__={182:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data(){return{numbers:[],showText:!1,expression:"",moos:null,showMoos:null,result:null,mooMessage:!1,mooTimer:null,errorMessage:!1}},watch:{expression(e){console.log(`New expression value: ${e}`);const t=/\d[+\-*/]/g;t.test(e)&&(this.showText=!0,this.cowculate())}},methods:{cowculate(){let str=this.expression,count=0;while(-1!==str.indexOf("Moo"))count++,str=str.replace("Moo","");this.moos=count,console.log("Number of 'Moo' occurrences:",count),console.log("String after removing 'Moo':",str);try{this.result=" = "+eval(str)}catch(error){this.result=null}},noEntry(){this.result&&this.result!=" = "+void 0||(this.errorMessage=!0,this.result=" Can't cowculate with this input!")},mooButtonHit(){this.mooMessage=!0,this.mooTimer&&clearTimeout(this.mooTimer),this.mooTimer=setTimeout((()=>{this.mooMessage=!1}),1500)},addNumber(){this.expression+=1},addNumberTwo(){this.expression+=2},addNumberThree(){this.expression+=3},addNumberFour(){this.expression+=4},addNumberFive(){this.expression+=5},addNumberSix(){this.expression+=6},addNumberSeven(){this.expression+=7},addNumberEight(){this.expression+=8},addNumberNine(){this.expression+=9},addNumberZero(){this.expression+=0},addMoo(){this.expression+="Moo"},mooDialogue(){this.showText=!0},addAddition(){this.expression+="+"},addSubtraction(){this.expression+="-"},addMultiplication(){this.expression+="*"},addDivision(){this.expression+="/"},addDecimalPoint(){this.expression+="."},removeEntry(){""!=this.expression&&("Moo"==this.expression.slice(-3)?this.expression=this.expression.slice(0,-3):this.expression=this.expression.slice(0,-1))},clearField(){this.numbers=[],this.expression="",this.showText=!1,this.result=null,this.errorMessage=!1}}}},333:function(e,t,o){var i=o(963),n=o(252);function r(e,t){const o=(0,n.up)("router-link"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n.Wm)(o,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Uk)(" / "),(0,n.Wm)(o,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1}),(0,n.Uk)(" / "),(0,n.Wm)(o,{to:"/projects"},{default:(0,n.w5)((()=>[(0,n.Uk)("Projects")])),_:1}),(0,n.Uk)(" / "),(0,n.Wm)(o,{to:"/projects/cowculator"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cowculator")])),_:1})]),(0,n.Wm)(i)],64)}var s=o(744);const a={},u=(0,s.Z)(a,[["render",r]]);var l=u,c=o(201);const d=e=>((0,n.dD)("data-v-f6196308"),e=e(),(0,n.Cn)(),e),_={class:"container custom-background-home-page"},p=d((()=>(0,n._)("h1",null,"Welcome to Conrad's Website",-1))),m={class:"homeview"};function h(e,t,o,i,r,s){const a=(0,n.up)("router-link"),u=(0,n.up)("AsideContent"),l=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",_,[(0,n._)("div",null,[p,(0,n._)("p",m,[(0,n.Uk)(" Check out the "),(0,n.Wm)(a,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cowculator")])),_:1}),(0,n.Uk)(", be sure to press the Moo button. ")])]),(0,n.Wm)(u,{class:"aside"})]),(0,n.Wm)(l)],64)}var f=o(660),b=o.n(f),g=o(282),w=o(22),v={name:"HomeView",components:{AsideContent:g.Z,FirstFooter:w.Z},mounted(){b().highlightAll()}};const k=(0,s.Z)(v,[["render",h],["__scopeId","data-v-f6196308"]]);var y=k,q=o(577);const x=(0,n._)("h1",null,"Projects",-1),C=(0,n._)("div",{style:{height:"600px"}},null,-1);function M(e,t,o,i,r,s){const a=(0,n.up)("router-link"),u=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[x,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.projects,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n.Wm)(a,{to:{name:"ProjectDetailsView",params:{title:e.title,details:e.details,id:e.id},props:{title:e.title}},class:"project-link"},{default:(0,n.w5)((()=>[(0,n._)("h2",null,(0,q.zw)(e.title),1)])),_:2},1032,["to"])])))),128)),C,(0,n.Wm)(u)],64)}var T={components:{FirstFooter:w.Z},data(){return{projects:[{title:"Cowculator",id:1,details:"Do Cowculations with math and moos!"},{title:"Coffee Python",id:2,details:"list page 2"},{title:"item 3",id:3,details:"list page 3"}]}}};const D=(0,s.Z)(T,[["render",M]]);var F=D,N=o.p+"img/cow_lecture.a62d3d6d.png";const j=e=>((0,n.dD)("data-v-0fff7abf"),e=e(),(0,n.Cn)(),e),A=j((()=>(0,n._)("hr",{class:"solid"},null,-1))),S={style:{"margin-bottom":"0.25em","padding-top":"0.5em",color:"white"}},E={key:0},P=j((()=>(0,n._)("figure",{class:"main-cow-figure"},[(0,n._)("img",{src:N,alt:"Professor Cow Image",class:"professor-cow-figure"}),(0,n._)("figcaption",{class:"professor-cow-figure-text"},[(0,n._)("strong",null,'"I certify that this Cowculator cowculates!"'),(0,n.Uk)(' - Professor Maximillian "Cowculus" Cowington, Distinguished Professor of Cowculating. ')])],-1))),U={style:{"padding-bottom":"1em","margin-left":"0.2em","margin-right":"0.2em"}},H={key:0},W=j((()=>(0,n._)("hr",{class:"solid"},null,-1)));function I(e,t,o,i,r,s){const a=(0,n.up)("SiteMain"),u=(0,n.up)("UseCalc"),l=(0,n.up)("HelpGuide"),c=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[A,(0,n._)("div",null,[(0,n._)("h2",S,(0,q.zw)(r.title)+" - "+(0,q.zw)(r.header),1),r.showSiteMain?((0,n.wg)(),(0,n.iD)("div",E,[(0,n.Wm)(a,{title:r.title,header:r.header,text:r.text,imagePath:r.imagePath,url:r.url,onClose:s.toggleSiteMain},null,8,["title","header","text","imagePath","url","onClose"])])):(0,n.kq)("",!0),(0,n.Wm)(u),P,(0,n._)("div",U,[(0,n._)("button",{class:"button-35",style:{"margin-top":"0.25em"},onClick:t[0]||(t[0]=(...e)=>s.toggleSiteMain&&s.toggleSiteMain(...e))}," About the Cowculator "),(0,n._)("button",{class:"button-35",style:{"margin-top":"0.25em","margin-left":"0.5em"},onClick:t[1]||(t[1]=(...e)=>s.toggleHelpGuide&&s.toggleHelpGuide(...e))}," Help Guide ")])]),r.showHelpGuide?((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(l,{helptitle:r.helpTitle,helptitletwo:r.helpTitleTwo,helptext:r.helpText,onClose:s.toggleHelpGuide},null,8,["helptitle","helptitletwo","helptext","onClose"])])):(0,n.kq)("",!0),W]),(0,n.Wm)(c)],64)}const O=e=>((0,n.dD)("data-v-24a75a33"),e=e(),(0,n.Cn)(),e),z={class:"siteMain"},Z=O((()=>(0,n._)("p",{class:"about-modal-text"}," Without a doubt, other calculators are simply inadequate. They lack the one essential feature that sets the Cow-culator apart: the Moo function. All this fancy math to do, but without a Moo button? It's like trying to milk a cow without a bucket. You simply can't do it. The Cow-culator, with its Vue.js-powered Moo function, is the only choice for discerning users who demand the very best from their cow-culations. Don't be square - use the Cow-culator! ",-1))),G=O((()=>(0,n._)("hr",null,null,-1))),L={style:{"padding-top":"0.25em"}},Y={class:"about-modal-text",style:{"padding-bottom":"5px","text-align":"left"}},B=["src"],V=["href"];function K(e,t,o,r,s,a){return(0,n.wg)(),(0,n.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>a.closeModal&&a.closeModal(...e)),["self"]))},[(0,n._)("div",z,[(0,n._)("h2",null,"Why use the "+(0,q.zw)(o.title)+"?",1),Z,G,(0,n._)("h2",L,(0,q.zw)(o.header),1),(0,n._)("p",Y,(0,q.zw)(o.text),1),(0,n._)("div",null,[(0,n._)("img",{style:{"max-width":"15em"},src:o.imagePath,alt:"Image"},null,8,B)]),(0,n._)("a",{style:{display:"block","margin-left":"auto","margin-right":"auto","text-decoration":"none"},href:o.url},"Conrad's GitHub",8,V)])])}var R={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}};const $=(0,s.Z)(R,[["render",K],["__scopeId","data-v-24a75a33"]]);var Q=$;const J=e=>((0,n.dD)("data-v-0c7328d7"),e=e(),(0,n.Cn)(),e),X={style:{padding:"0.1em"}},ee={class:"grid-container cow-image"},te=J((()=>(0,n._)("div",{class:"arrow-position"},[(0,n._)("div",{class:"left-arrow"})],-1))),oe=[te],ie={style:{"margin-bottom":"5px"}},ne={style:{padding:"0.25em","margin-bottom":"3em"}},re={class:"white-color-text cowculate-result"},se={key:0},ae={key:1},ue=J((()=>(0,n._)("br",null,null,-1))),le=[ue],ce={key:2},de=J((()=>(0,n._)("br",null,null,-1))),_e={style:{"text-align":"center"}},pe={class:"moo-cows-go-moo"},me={key:0},he=J((()=>(0,n._)("br",null,null,-1)));function fe(e,t,o,r,s,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",X,[(0,n.wy)((0,n._)("input",{class:"input-field","onUpdate:modelValue":t[0]||(t[0]=e=>s.expression=e),type:"text"},null,512),[[i.nr,s.expression]])]),(0,n._)("div",ee,[(0,n._)("button",{class:"grid-item",onClick:t[1]||(t[1]=e=>a.addNumber())},"1"),(0,n._)("button",{class:"grid-item",onClick:t[2]||(t[2]=e=>a.addNumberTwo())},"2"),(0,n._)("button",{class:"grid-item",onClick:t[3]||(t[3]=e=>a.addNumberThree())},"3"),(0,n._)("button",{class:"grid-item",onClick:t[4]||(t[4]=e=>a.addNumberFour())},"4"),(0,n._)("button",{class:"grid-item",onClick:t[5]||(t[5]=e=>a.addNumberFive())},"5"),(0,n._)("button",{class:"grid-item",onClick:t[6]||(t[6]=e=>a.addNumberSix())},"6"),(0,n._)("button",{class:"grid-item",onClick:t[7]||(t[7]=e=>a.addNumberSeven())},"7"),(0,n._)("button",{class:"grid-item",onClick:t[8]||(t[8]=e=>a.addNumberEight())},"8"),(0,n._)("button",{class:"grid-item",onClick:t[9]||(t[9]=e=>a.addNumberNine())},"9"),(0,n._)("button",{class:"grid-item",onClick:t[10]||(t[10]=e=>a.addMultiplication())},"×"),(0,n._)("button",{class:"grid-item",onClick:t[11]||(t[11]=e=>a.addDivision())},"÷"),(0,n._)("button",{class:"grid-item",onClick:t[12]||(t[12]=e=>a.addNumberZero())},"0"),(0,n._)("button",{class:"grid-item",onClick:t[13]||(t[13]=e=>a.addSubtraction())},"-"),(0,n._)("button",{class:"grid-item",onClick:t[14]||(t[14]=e=>a.addAddition())},"+"),(0,n._)("button",{class:"grid-item",onClick:t[15]||(t[15]=e=>a.addDecimalPoint())},"."),(0,n._)("button",{class:"grid-item",onClick:t[16]||(t[16]=e=>(a.addMoo(),a.mooButtonHit()))},"Moo"),(0,n._)("button",{class:"grid-item",onClick:t[17]||(t[17]=e=>a.removeEntry())},oe)]),(0,n._)("div",ie,[(0,n._)("button",{class:"button-35",onClick:t[18]||(t[18]=(...e)=>a.clearField&&a.clearField(...e))},"Reset"),(0,n._)("button",{class:"button-35",style:{"margin-left":"5px"},onClick:t[19]||(t[19]=e=>(a.cowculate(),a.mooDialogue(),a.noEntry()))}," Cowculate ")]),(0,n._)("div",ne,[(0,n._)("h2",re,[(0,n.Uk)((0,q.zw)(s.expression),1),s.errorMessage&&""==this.expression?((0,n.wg)(),(0,n.iD)("span",se)):s.errorMessage?((0,n.wg)(),(0,n.iD)("span",ae,le)):(0,n.kq)("",!0),s.showText?((0,n.wg)(),(0,n.iD)("span",ce,[(0,n.Uk)((0,q.zw)(s.result),1),de,(0,n.Uk)("Number of Moos: "+(0,q.zw)(s.moos),1)])):(0,n.kq)("",!0)]),(0,n._)("div",_e,[(0,n._)("h2",pe,[s.mooMessage?((0,n.wg)(),(0,n.iD)("span",me,[(0,n.Uk)(" Moo cows go moo, moo, moo!"),he,(0,n.Uk)(" Moo cows go moo, moo, moo!")])):(0,n.kq)("",!0)])])])],64)}var be=o(182);const ge=(0,s.Z)(be.Z,[["render",fe],["__scopeId","data-v-0c7328d7"]]);var we=ge;const ve=e=>((0,n.dD)("data-v-0af15d33"),e=e(),(0,n.Cn)(),e),ke={class:"helpGuide"},ye=ve((()=>(0,n._)("p",{class:"help-guide-text"}," Enter numbers into the input field below using the keypad or by typing. The Cow-culator will perform mathematical operations on the numbers and count the number of Moo's! For instance, if you input Moo2*Moo2*2Moo, the Cow-culator will display the result as: 'Result: 8 Moo's: 3', which means that there are three 'Moo's and 2 multiplied by 2 multiplied by 2 equals 8. Additionally, each input will show up in the array it's used in. Any input field entry or button press will update the values. For advanced exponential cowculations use two multiplciation symbols consecutively. For example, 5**3 will equal 125. ",-1))),qe=ve((()=>(0,n._)("p",{class:"help-guide-text"},' Currently, it is set to automatically perform calculations. The "Cowculate" button only updates the "Moo" count. There are a few tricks to this, for example when entering numbers the result will only show when a math operator occurs after a number, and a calculation can be performed with another number! ',-1)));function xe(e,t,o,r,s,a){return(0,n.wg)(),(0,n.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>a.closeModal&&a.closeModal(...e)),["self"]))},[(0,n._)("div",ke,[(0,n._)("h1",null,(0,q.zw)(o.helptitle),1),ye,qe])])}var Ce={props:["helptitle","helptext","helptitletwo"],methods:{closeModal(){this.$emit("close")}}};const Me=(0,s.Z)(Ce,[["render",xe],["__scopeId","data-v-0af15d33"]]);var Te=Me,De={name:"App",components:{SiteMain:Q,UseCalc:we,HelpGuide:Te,FirstFooter:w.Z},data(){return{title:"Cow-culator",header:"Alpha-Build-2.0",text:"Made in Tübingen, Germany, and built using Vue 3. Click anywhere on the screen outside this modal to exit! This modal is a component that is an array of 5 props and additional text. From top to bottom they are props: title, header, text, imagePath, and url. A rough approximation of programming languages used to build this below: ",url:"https://github.com/conrizzo/conradswebsite",showSiteMain:!1,helpTitle:"How to use:",helpTitleTwo:"Why use the cowculator?",helpText:"",showHelpGuide:!1,imagePath:o(325)}},methods:{toggleSiteMain(){this.showSiteMain=!this.showSiteMain},toggleHelpGuide(){this.showHelpGuide=!this.showHelpGuide}}};const Fe=(0,s.Z)(De,[["render",I],["__scopeId","data-v-0fff7abf"]]);var Ne=Fe;const je=e=>((0,n.dD)("data-v-f099621a"),e=e(),(0,n.Cn)(),e),Ae={class:"router-link-style"},Se=je((()=>(0,n._)("code",null,'DRINK_COFFEE = True\nwebsite_finished = False\nwhile website_finished is False:\n print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")',-1))),Ee=je((()=>(0,n._)("p",{class:"homeview"}," Python doesn't officially syntactically have constants so it's capitalized to show it should not be modified \"DRINK_COFFEE=True\", but the code above emphasizes that work continues, and the coffee drinking will always continue. ",-1))),Pe=je((()=>(0,n._)("code",null,'# Defines a Python function to describe coffee\ndef describe_coffee(roast_level, origin, flavor_notes):\n    """\n    This function describes a cup of coffee based on its roast level, origin, and flavor notes.\n\n    :param roast_level: The roast level of the coffee, e.g. light, medium, dark.\n    :param origin: The origin of the coffee, e.g. Ethiopia, Colombia, Kenya.\n    :param flavor_notes: The flavor notes of the coffee, e.g. chocolate, caramel, citrus.\n    :return: A string describing the coffee.\n    """\n    return f"This {roast_level}-roasted coffee from {origin} has flavor notes of {flavor_notes}."\n\n# Example usage of the function\ncoffee_description = describe_coffee("medium", "Colombia", "chocolate and caramel")\nprint(coffee_description)',-1)));function Ue(e,t,o,r,s,a){const u=(0,n.up)("router-link"),l=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",null,"Title: "+(0,q.zw)(o.title)+"  ID: "+(0,q.zw)(o.id)+"  Details: "+(0,q.zw)(o.details),1),(0,n._)("div",Ae,[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cowculator")])),_:1})],512),[[i.F8,1==o.id]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(o.title),1)])),_:1}),(0,n._)("pre",{class:(0,q.C_)(["language-python","hhh"])},[(0,n.Uk)(""),Se]),Ee,(0,n._)("pre",{class:(0,q.C_)(["language-python","hhh"])},[(0,n.Uk)(""),Pe])],512),[[i.F8,2==o.id]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(u,{style:{"text-decoration":"none"},to:"/projects/cowculator"},{default:(0,n.w5)((()=>[(0,n.Uk)("Project 3")])),_:1})],512),[[i.F8,3==o.id]]),(0,n.Wm)(l)])],64)}var He={props:["title","id","details"],mounted(){b().highlightAll()}};const We=(0,s.Z)(He,[["render",Ue],["__scopeId","data-v-f099621a"]]);var Ie=We;const Oe=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,906))},{path:"/projects",name:"projects",component:F},{path:"/projects/cowculator",name:"cowculator",component:Ne},{path:"/projects/:id:details:title",name:"ProjectDetailsView",component:Ie,props:!0},{path:"/:catchAll(.*)",redirect:"/"}],ze=(0,c.p7)({history:(0,c.PO)("/"),routes:Oe});var Ze=ze;o(366);(0,i.ri)(l).use(Ze).mount("#app")},282:function(e,t,o){o.d(t,{Z:function(){return p}});var i=o(252);const n=e=>((0,i.dD)("data-v-cc83112a"),e=e(),(0,i.Cn)(),e),r=n((()=>(0,i._)("h2",null,"Aside Content",-1))),s=n((()=>(0,i._)("h2",null,"Incredible latin Text!",-1))),a=n((()=>(0,i._)("p",{class:"aside"}," Adding some more stuff soon.. in the meantime check out the Cowculator! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Eget egestas purus viverra accumsan in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Neque egestas congue quisque egestas diam in. Erat velit scelerisque in dictum. Porttitor eget dolor morbi non arcu risus quis. Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nam libero justo laoreet sit amet. Tempor id eu nisl nunc mi. Sit amet mauris commodo quis imperdiet massa tincidunt. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Lobortis elementum nibh tellus molestie nunc non. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisl vel pretium lectus quam id leo in. Gravida neque convallis a cras semper. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Aliquet eget sit amet tellus cras adipiscing enim. Eu facilisis sed odio morbi quis commodo odio. Morbi tempus iaculis urna id volutpat lacus laoreet non. Mauris pellentesque pulvinar pellentesque habitant. Ultrices neque ornare aenean euismod elementum nisi quis. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dui nunc mattis enim ut tellus. Risus in hendrerit gravida rutrum quisque non tellus. Montes nascetur ridiculus mus mauris vitae ultricies leo. Platea dictumst quisque sagittis purus sit amet volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Duis ut diam quam nulla porttitor massa id neque aliquam. Lobortis mattis aliquam faucibus purus in massa tempor. Lacus laoreet non curabitur gravida. Aenean et tortor at risus viverra adipiscing at. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet dictum sit amet. Sapien pellentesque habitant morbi tristique senectus et. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id leo in vitae. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Dui ut ornare lectus sit amet est placerat in egestas. Sed lectus vestibulum mattis ullamcorper velit sed. Semper auctor neque vitae tempus. Fames ac turpis egestas integer eget aliquet. Dictum at tempor commodo ullamcorper a. Dictum non consectetur a erat. Et malesuada fames ac turpis. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Mattis rhoncus urna neque viverra justo nec. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. A iaculis at erat pellentesque adipiscing. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. ",-1))),u=[r,s,a];function l(e,t,o,n,r,s){return(0,i.wg)(),(0,i.iD)("aside",null,u)}var c={name:"AsideContent"},d=o(744);const _=(0,d.Z)(c,[["render",l],["__scopeId","data-v-cc83112a"]]);var p=_},22:function(e,t,o){o.d(t,{Z:function(){return d}});var i=o(252);const n={class:"footer"},r=(0,i._)("div",{class:""},[(0,i._)("p",null,[(0,i.Uk)(" Website by "),(0,i._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"Conrad"),(0,i.Uk)(" | conradswebsite.com © 2023"),(0,i._)("br"),(0,i.Uk)(" unless mentioned otherwise, licensing is "),(0,i._)("a",{class:"footer-links",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),(0,i.Uk)(". ")])],-1),s=[r];function a(e,t,o,r,a,u){return(0,i.wg)(),(0,i.iD)("footer",n,s)}var u={name:"FirstFooter"},l=o(744);const c=(0,l.Z)(u,[["render",a]]);var d=c},325:function(e,t,o){e.exports=o.p+"img/languages.714111be.jpg"}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,o,i,n){if(!o){var r=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],n=e[l][2];for(var s=!0,a=0;a<o.length;a++)(!1&n||r>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](o[a])}))?o.splice(a--,1):(s=!1,n<r&&(r=n));if(s){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,i,n]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,o){return __webpack_require__.f[o](e,t),t}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/about.2601558d.js"}}(),function(){__webpack_require__.miniCssF=function(e){return"css/about.b3fc1297.css"}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="conradswebsite:";__webpack_require__.l=function(o,i,n,r){if(e[o])e[o].push(i);else{var s,a;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+n){s=c;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,__webpack_require__.nc&&s.setAttribute("nonce",__webpack_require__.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[i];var d=function(t,i){s.onerror=s.onload=null,clearTimeout(_);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(i)})),t)return t(i)},_=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,i,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(o){if(r.onerror=r.onload=null,"load"===o.type)i();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,r.parentNode&&r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=s,r.href=t,o?o.parentNode.insertBefore(r,o.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var n=o[i],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===t))return n}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){n=s[i],r=n.getAttribute("data-href");if(r===e||r===t)return n}},o=function(o){return new Promise((function(i,n){var r=__webpack_require__.miniCssF(o),s=__webpack_require__.p+r;if(t(r,s))return i();e(o,s,null,i,n)}))},i={143:0};__webpack_require__.f.miniCss=function(e,t){var n={443:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};__webpack_require__.f.j=function(t,o){var i=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var n=new Promise((function(o,n){i=e[t]=[o,n]}));o.push(i[2]=n);var r=__webpack_require__.p+__webpack_require__.u(t),s=new Error,a=function(o){if(__webpack_require__.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,i[1](s)}};__webpack_require__.l(r,a,"chunk-"+t,t)}},__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,r=o[0],s=o[1],a=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)__webpack_require__.o(s,i)&&(__webpack_require__.m[i]=s[i]);if(a)var l=a(__webpack_require__)}for(t&&t(o);u<r.length;u++)n=r[u],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(l)},o=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(333)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.1326c24e.js.map