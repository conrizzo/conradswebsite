(function(){"use strict";var e={6205:function(e,t,n){var i=n(9963),r=n(6252),o=n(3577);const s=(0,r._)("p",null,"Enter numbers into the input field below by typing or using the keypad. The Cow-culator will do math operations on the numbers, and count the number of Moo's! ",-1),u={key:0};function a(e,t,n,a,l,d){const c=(0,r.up)("SiteMain"),m=(0,r.up)("UseCalc");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h1",null,(0,o.zw)(l.title),1),s,l.showSiteMain?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(c,{title:l.title,header:l.header,text:l.text,onClose:d.toggleSiteMain},null,8,["title","header","text","onClose"])])):(0,r.kq)("",!0),(0,r.Wm)(m),(0,r._)("button",{class:"button-35",style:{"margin-top":"20px","margin-left":"10px"},onClick:t[0]||(t[0]=(...e)=>d.handleClick&&d.handleClick(...e))},"Event Listener"),(0,r._)("button",{class:"button-35",style:{"margin-top":"20px","margin-left":"10px"},onClick:t[1]||(t[1]=(...e)=>d.toggleSiteMain&&d.toggleSiteMain(...e))},"About the Cowculator"),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{style:{"margin-top":"100px"},type:"text",ref:"name","onUpdate:modelValue":t[2]||(t[2]=t=>e.name=t)},null,512),[[i.nr,e.name]])])],64)}const l={class:"siteMain"};function d(e,t,n,s,u,a){return(0,r.wg)(),(0,r.iD)("div",{class:"backdrop",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>a.closeModal&&a.closeModal(...e)),["self"]))},[(0,r._)("div",l,[(0,r._)("h1",null,(0,o.zw)(n.title),1),(0,r._)("h2",null,(0,o.zw)(n.header),1),(0,r._)("p",null,(0,o.zw)(n.text),1)])])}var c={props:["title","header","text"],methods:{closeModal(){this.$emit("close")}}},m=n(3744);const b=(0,m.Z)(c,[["render",d],["__scopeId","data-v-58f2ea08"]]);var h=b;const p={class:"grid-container"};function g(e,t,n,o,s,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",p,[(0,r._)("button",{class:"grid-item",onClick:t[0]||(t[0]=(...e)=>u.addNumber&&u.addNumber(...e))},"1"),(0,r._)("button",{class:"grid-item",onClick:t[1]||(t[1]=(...e)=>u.addNumberTwo&&u.addNumberTwo(...e))},"2"),(0,r._)("button",{class:"grid-item",onClick:t[2]||(t[2]=(...e)=>u.addNumberThree&&u.addNumberThree(...e))},"3"),(0,r._)("button",{class:"grid-item",onClick:t[3]||(t[3]=(...e)=>u.addNumberFour&&u.addNumberFour(...e))},"4"),(0,r._)("button",{class:"grid-item",onClick:t[4]||(t[4]=(...e)=>u.addNumberFive&&u.addNumberFive(...e))},"5"),(0,r._)("button",{class:"grid-item",onClick:t[5]||(t[5]=(...e)=>u.addNumberSix&&u.addNumberSix(...e))},"6"),(0,r._)("button",{class:"grid-item",onClick:t[6]||(t[6]=(...e)=>u.addNumberSeven&&u.addNumberSeven(...e))},"7"),(0,r._)("button",{class:"grid-item",onClick:t[7]||(t[7]=(...e)=>u.addNumberEight&&u.addNumberEight(...e))},"8"),(0,r._)("button",{class:"grid-item",onClick:t[8]||(t[8]=(...e)=>u.addNumberNine&&u.addNumberNine(...e))},"9"),(0,r._)("button",{class:"grid-item",onClick:t[9]||(t[9]=(...e)=>u.addMultiplication&&u.addMultiplication(...e))},"*"),(0,r._)("button",{class:"grid-item",onClick:t[10]||(t[10]=(...e)=>u.addNumberZero&&u.addNumberZero(...e))},"0"),(0,r._)("button",{class:"grid-item",style:{padding:"2px"},onClick:t[11]||(t[11]=(...e)=>u.addMoo&&u.addMoo(...e))},"Moo")]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{style:{"margin-left":"10px",width:"250px"},"onUpdate:modelValue":t[12]||(t[12]=e=>u.displayNumbers=e),onInput:t[13]||(t[13]=(...t)=>e.updateNumbers&&e.updateNumbers(...t)),type:"text"},null,544),[[i.nr,u.displayNumbers]]),(0,r._)("button",{class:"button-35",style:{"margin-left":"10px"},onClick:t[14]||(t[14]=(...e)=>u.cowculate&&u.cowculate(...e))}," Cowculate "),(0,r._)("button",{class:"button-35",style:{"margin-left":"10px"},onClick:t[15]||(t[15]=(...e)=>u.clearField&&u.clearField(...e))}," Reset ")])],64)}n(7658);var f={data(){return{numbers:[],currentOperation:null}},methods:{addNumber(){this.numbers.push(1)},addNumberTwo(){this.numbers.push(2)},addNumberThree(){this.numbers.push(3)},addNumberFour(){this.numbers.push(4)},addNumberFive(){this.numbers.push(5)},addNumberSix(){this.numbers.push(6)},addNumberSeven(){this.numbers.push(7)},addNumberEight(){this.numbers.push(8)},addNumberNine(){this.numbers.push(9)},addNumberZero(){this.numbers.push(0)},addMoo(){this.numbers.push("Moo")},addMultiplication(){this.currentOperation="*",this.numbers.push("*")},clearField(){this.numbers=[]},cowculate(){let e="",t="",n="";for(let i=0;i<this.numbers.length;i++)if("*"===this.numbers[i]){e=this.numbers.slice(0,i).join(""),t=this.numbers.slice(i+1).join("");const r=(e.match(/Moo/gi)||[]).length+(t.match(/Moo/gi)||[]).length;console.log(r);const o=e.replace(/Moo/gi,""),s=t.replace(/Moo/gi,"");n=Number(o)*Number(s),this.numbers=["Result: "+n+" Moo's: "+r];break}}},computed:{displayNumbers:{get(){return this.numbers.join("")},set(e){this.numbers=e.split("")}}}};const v=(0,m.Z)(f,[["render",g],["__scopeId","data-v-0abf5893"]]);var N=v,w={name:"App",components:{SiteMain:h,UseCalc:N},data(){return{title:"Cow-culator",header:"Alpha-Build-1.0",text:"Currently not set up to handle more than one multiplication operation. Click anywhere on the screen outside this modal to exit!",showSiteMain:!1}},methods:{handleClick(){console.log(this.$refs.name),this.$refs.name.classList.add("active"),this.$refs.name.focus()},toggleSiteMain(){this.showSiteMain=!this.showSiteMain}}};const C=(0,m.Z)(w,[["render",a]]);var k=C;(0,i.ri)(k).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],o=e[d][2];for(var u=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(u=!1,o<s&&(s=o));if(u){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,r,o]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,s=i[0],u=i[1],a=i[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(a)var d=a(n)}for(t&&t(i);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6205)}));i=n.O(i)})();
//# sourceMappingURL=app.bc28309f.js.map