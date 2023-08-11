"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[607],{648:function(e,t,a){var n=a(1694),i=a(614),o=a(4326),r=a(5112),s=r("toStringTag"),l=Object,u="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=n?o:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=l(e),s))?a:u?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n}},7045:function(e,t,a){var n=a(6339),i=a(3070);e.exports=function(e,t,a){return a.get&&n(a.get,t,{getter:!0}),a.set&&n(a.set,t,{setter:!0}),i.f(e,t,a)}},1694:function(e,t,a){var n=a(5112),i=n("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,a){var n=a(648),i=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},8053:function(e){var t=TypeError;e.exports=function(e,a){if(e<a)throw t("Not enough arguments");return e}},6229:function(e,t,a){var n=a(8052),i=a(1702),o=a(1340),r=a(8053),s=URLSearchParams,l=s.prototype,u=i(l.append),c=i(l["delete"]),d=i(l.forEach),h=i([].push),p=new s("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&n(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=[];d(this,(function(e,t){h(n,{key:t,value:e})})),r(t,1);var i,s=o(e),l=o(a),p=0,g=0,f=!1,m=n.length;while(p<m)i=n[p++],f||i.key===s?(f=!0,c(this,i.key)):g++;while(g<m)i=n[g++],i.key===s&&i.value===l||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,a){var n=a(8052),i=a(1702),o=a(1340),r=a(8053),s=URLSearchParams,l=s.prototype,u=i(l.getAll),c=i(l.has),d=new s("a=1");!d.has("a",2)&&d.has("a",void 0)||n(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=u(this,e);r(t,1);var i=o(a),s=0;while(s<n.length)if(n[s++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,a){var n=a(9781),i=a(1702),o=a(7045),r=URLSearchParams.prototype,s=i(r.forEach);n&&!("size"in r)&&o(r,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},6295:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(6252);function i(e,t,a,i,o,r){return(0,n.wg)(),(0,n.iD)("aside",null,[(0,n.WI)(e.$slots,"aside-content",{},void 0,!0)])}var o={name:"AsideContent"},r=a(3744);const s=(0,r.Z)(o,[["render",i],["__scopeId","data-v-c8f6de7c"]]);var l=s},5585:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(6252),i=a(3577);const o={class:"footer"},r=(0,n._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),s=(0,n._)("br",null,null,-1),l=(0,n._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,a,u,c,d){return(0,n.wg)(),(0,n.iD)("footer",o,[(0,n._)("div",null,[(0,n._)("span",null,[(0,n.Uk)(" Conrad's account on "),r,(0,n.Uk)(" | conradswebsite.com © "+(0,i.zw)(d.getCurrentYear),1),s,(0,n.Uk)(" unless mentioned otherwise, licensing is "),l,(0,n.Uk)(". ")])])])}var c={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},d=a(3744);const h=(0,d.Z)(c,[["render",u]]);var p=h},5607:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(6252);const i=e=>((0,n.dD)("data-v-8fe9346a"),e=e(),(0,n.Cn)(),e),o={class:"main-content background-color-about-page"},r={class:"text-container"},s=(0,n.uE)('<h1 class="h1-title" data-v-8fe9346a>About</h1><ul data-v-8fe9346a><li class="paragraph-text break-text" data-v-8fe9346a>This iteration of the website was started in March, 2023 and is totally self-made by me (Conrad) using primarily <a class="text-links" style="color:#42b883;" href="https://vuejs.org/guide/introduction.html" data-v-8fe9346a><b data-v-8fe9346a>Vue 3</b></a> (Vue.js). It is hosted on <a class="text-links" href="https://github.com/conrizzo/conradswebsite" data-v-8fe9346a> my GitHub</a> with <a class="text-links" href="https://pages.github.com/" data-v-8fe9346a> GitHub pages</a>. </li><li class="paragraph-text break-text" data-v-8fe9346a>I started learning about Vue.js when I worked on the Bioinformatics Toolkit at <i data-v-8fe9346a>Max-Planck-Institut für Biologie</i> in Tübingen, Germany.</li><li class="paragraph-text break-text" data-v-8fe9346a>I hold a degree in Computational Linguistics from the University of Tübingen in Germany, and previously completed a Bachelor of Science in Biology from the University of North Carolina at Wilmington, Wilmington, NC, USA.</li><li class="paragraph-text break-text" data-v-8fe9346a>Have been working on this website using Vue.js, JavaScript, TypeScript, CSS, HTML. Starting to learn more about backend development and databases. </li><li class="paragraph-text break-text" data-v-8fe9346a> Started learning <a class="text-links" href="https://doc.rust-lang.org/book/title-page.html" data-v-8fe9346a>Rust</a> as well. Have practiced more German too, so it is <u data-v-8fe9346a>a lot</u> of language learning! </li></ul><h2 style="text-align:left;" data-v-8fe9346a>More info if interested:</h2><p class="paragraph-text break-text" style="padding-top:1em;border-top:1px solid rgb(170, 170, 170);" data-v-8fe9346a> This websites focus is to show some projects and other work, plus it&#39;s fun to have a website made in a framework (Vue.js) and be able to build stuff. </p>',4),l={class:"paragraph-text break-text"},u=i((()=>(0,n._)("a",{class:"text-links",href:"https://vuejs.org/guide/typescript/overview.html"},"Vue.js itself is written in TypeScript",-1))),c={class:"center-figure"},d=["src"],h=i((()=>(0,n._)("figcaption",{class:"figure-caption"},"Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript. ",-1))),p=i((()=>(0,n._)("br",null,null,-1))),g=i((()=>(0,n._)("h2",{style:{"text-align":"left"}},"About the Vue Routing with GitHub Pages:",-1))),f=i((()=>(0,n._)("div",null,[(0,n._)("p",{class:"paragraph-text break-text",style:{"padding-top":"1em","border-top":"1px solid rgb(170, 170, 170)"}},[(0,n.Uk)(" Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly. For example, in order to deploy this website, the command "),(0,n._)("i",null,'"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"'),(0,n.Uk)(' is used, and this command is added to the package.json file. To publish modifications to the website, one can run the command "npm run deploy". This will first build the vue.js application by running "npm run build", and then put the production build of the website into the \'dist\' folder.')]),(0,n._)("p",{class:"paragraph-text break-text"}," A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html. This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead show a 404 error on GitHub Pages. However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when using gh-pages.")],-1))),m=i((()=>(0,n._)("h3",{class:"aside-text",style:{"margin-top":"1em",color:"#c7c7c7"}},[(0,n.Uk)(" This aside is a "),(0,n._)("a",{class:"text-links",href:"https://vuejs.org/guide/components/slots.html"},"slot"),(0,n.Uk)(": ")],-1))),b=["src"],v=i((()=>(0,n._)("p",{class:"aside-text",style:{color:"#c7c7c7"}},[(0,n._)("a",{class:"text-links",href:"https://en.wikipedia.org/wiki/Great_tit"},"Kohlmeise"),(0,n.Uk)(" (name in German, English name is Great Tit) photo taken in Tübingen, Germany. It is a species of bird that is native to Europe. They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!")],-1)));function w(e,t,a,i,w,k){const y=(0,n.up)("router-link"),x=(0,n.up)("AsideContent"),_=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)("body",null,[(0,n._)("div",o,[(0,n._)("div",r,[s,(0,n._)("p",l,[(0,n.Uk)("Much of this website was originally written in Vue 3 and straight JavaScript, however I converted it to have TypeScript support later on, and new projects such as the "),(0,n.Wm)(y,{class:"text-links",to:"/projects/cowgame"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cow Game")])),_:1}),(0,n.Uk)(" heavily use TypeScript. "),u,(0,n.Uk)(" so one could also say using Vue.js is using TypeScript to an extent. As of July, 2023, have been working on integrating backend development. In July, 2023 I also started learning Rust and some of this website now uses Rust compiled into Web Assembly. ")]),(0,n._)("figure",c,[(0,n._)("img",{class:"img-container",src:w.imagePath,alt:"Coding Languages used"},null,8,d),h]),p,g,f]),(0,n.Wm)(x,{style:{"background-color":"rgb(40, 40, 40)"}},{"aside-content":(0,n.w5)((()=>[m,(0,n._)("img",{style:{"border-radius":"0.5em",width:"200px"},src:w.birdPicture,alt:"Kohlmeise picture"},null,8,b),v])),_:1})]),(0,n.Wm)(_)])}a(6229),a(7330),a(2062);var k=a(6295),y=a(5585),x=a(5660),_=a.n(x),S={name:"HomeView",components:{AsideContent:k.Z,FirstFooter:y.Z},data(){return{birdPicture:a(9758),imagePath:a(9190)}},downloadPDF(){const e="https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf";fetch(e).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","my-document.pdf"),document.body.appendChild(a),a.click()}))},mounted(){_().highlightAll()}},T=a(3744);const j=(0,T.Z)(S,[["render",w],["__scopeId","data-v-8fe9346a"]]);var U=j},9758:function(e,t,a){e.exports=a.p+"img/Kohlenmeise.3b49d678.jpg"},9190:function(e,t,a){e.exports=a.p+"img/languages_july_17_2023.1260acd6.jpg"}}]);
//# sourceMappingURL=607.28638392.js.map