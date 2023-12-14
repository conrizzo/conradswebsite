"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[393],{648:function(e,t,a){var i=a(1694),n=a(614),s=a(4326),o=a(5112),r=o("toStringTag"),l=Object,u="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(a){}};e.exports=i?s:function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=d(t=l(e),r))?a:u?s(t):"Object"==(i=s(t))&&n(t.callee)?"Arguments":i}},7045:function(e,t,a){var i=a(6339),n=a(3070);e.exports=function(e,t,a){return a.get&&i(a.get,t,{getter:!0}),a.set&&i(a.set,t,{setter:!0}),n.f(e,t,a)}},1694:function(e,t,a){var i=a(5112),n=i("toStringTag"),s={};s[n]="z",e.exports="[object z]"===String(s)},1340:function(e,t,a){var i=a(648),n=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return n(e)}},8053:function(e){var t=TypeError;e.exports=function(e,a){if(e<a)throw t("Not enough arguments");return e}},6229:function(e,t,a){var i=a(8052),n=a(1702),s=a(1340),o=a(8053),r=URLSearchParams,l=r.prototype,u=n(l.append),d=n(l["delete"]),c=n(l.forEach),h=n([].push),m=new r("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&i(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var i=[];c(this,(function(e,t){h(i,{key:t,value:e})})),o(t,1);var n,r=s(e),l=s(a),m=0,p=0,g=!1,b=i.length;while(m<b)n=i[m++],g||n.key===r?(g=!0,d(this,n.key)):p++;while(p<b)n=i[p++],n.key===r&&n.value===l||u(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,a){var i=a(8052),n=a(1702),s=a(1340),o=a(8053),r=URLSearchParams,l=r.prototype,u=n(l.getAll),d=n(l.has),c=new r("a=1");!c.has("a",2)&&c.has("a",void 0)||i(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var i=u(this,e);o(t,1);var n=s(a),r=0;while(r<i.length)if(i[r++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,a){var i=a(9781),n=a(1702),s=a(7045),o=URLSearchParams.prototype,r=n(o.forEach);i&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})},6433:function(e,t,a){a.d(t,{Z:function(){return l}});var i=a(6252);function n(e,t,a,n,s,o){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i.WI)(e.$slots,"aside-content",{},void 0,!0)])}var s={name:"AsideContent"},o=a(3744);const r=(0,o.Z)(s,[["render",n],["__scopeId","data-v-5d61191c"]]);var l=r},1393:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var i=a(6252),n=a(3577),s=a(9963);const o=e=>((0,i.dD)("data-v-03239f6a"),e=e(),(0,i.Cn)(),e),r={id:"body"},l={class:"main-content"},u={class:"text-container"},d={class:"title-container"},c=o((()=>(0,i._)("h1",null,"About",-1))),h=(0,i.uE)('<div class="bullets" data-v-03239f6a><ul data-v-03239f6a><li data-v-03239f6a>This iteration of the website was started March, 2023 and is totally self-made by me (Conrad) using primarily <a class="home-text-links" style="color:#42b883;" href="https://vuejs.org/guide/introduction.html" data-v-03239f6a><b data-v-03239f6a>Vue 3</b></a> (Vue.js) for its reactivity and interactivity. </li><li data-v-03239f6a>This website&#39;s primary aim is to create and exhibit various projects. It is hosted on <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite" data-v-03239f6a> my GitHub</a> with <a class="home-text-links" href="https://pages.github.com/" data-v-03239f6a> GitHub Pages</a>. </li><li data-v-03239f6a>I started learning about Vue.js when I worked on the Bioinformatics Toolkit at <i data-v-03239f6a>Max-Planck-Institut für Biologie</i> in Tübingen, Germany. </li><li data-v-03239f6a>Programming languages/frameworks I used to make this website include: Vue.js, JavaScript, TypeScript, HTML, CSS, Rust into Web Assembly, and more! </li><li data-v-03239f6a>I also started a <b data-v-03239f6a><a class="home-text-links" href="https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/" data-v-03239f6a>blog site</a></b> that uses the <a class="home-text-links" href="https://astro.build/" data-v-03239f6a>Astro</a> framework. </li><li data-v-03239f6a>This website has mostly been about improving my knowledge of web programming. The point has been to learn. </li></ul></div><h2 data-v-03239f6a>Motivation:</h2><div class="horizontal-line" data-v-03239f6a></div><p data-v-03239f6a> This website is constantly being updated and improved. I am always learning new things. All projects here are not meant to be text-book examples of how to do things, but rather examples of how I learned to make things. The fun thing about this website is it is entirely made from scratch by me, so I understand it well. </p><h2 data-v-03239f6a>Progression:</h2><div class="horizontal-line" data-v-03239f6a></div>',6),m={class:"figure-location"},p=["src"],g=o((()=>(0,i._)("figcaption",{class:"figure-caption"},"Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript. ",-1))),b=o((()=>(0,i._)("a",{class:"home-text-links",href:"https://vuejs.org/guide/typescript/overview.html"},"Vue.js itself is written in TypeScript",-1))),f=o((()=>(0,i._)("h2",null,"About the Vue Routing with GitHub Pages:",-1))),w=o((()=>(0,i._)("div",{class:"horizontal-line"},null,-1))),v=o((()=>(0,i._)("div",null,[(0,i._)("p",null,"December 6th 2023 - Next item for deployment will be to convert this process below to use GitHub actions and a .yaml file to automate it. Lately I've been making many small commits so I may not need to deploy the website everytime I make small adjustments with an automated process but the auto deployment using GitHub actions is a nice tool. "),(0,i._)("p",null,[(0,i.Uk)(" Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly. For example, in order to deploy this website, the command "),(0,i._)("i",null,'"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"'),(0,i.Uk)(' is used, and this command is added to the package.json file. To publish modifications to the website, one can run the command "npm run deploy". This will first build the vue.js application by running "npm run build", and then put the production build of the website into the \'dist\' folder.')]),(0,i._)("p",null," A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html. This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead show a 404 error on GitHub Pages. However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when using gh-pages.")],-1))),y={class:"bird-container"},k=o((()=>(0,i._)("h3",null," Bird of the Month: Kohlmeise ",-1))),x=["src"],T=o((()=>(0,i._)("p",{class:"bird-text",style:{color:"#c7c7c7"}},[(0,i._)("a",{class:"home-text-links",href:"https://en.wikipedia.org/wiki/Great_tit"},"Kohlmeise"),(0,i.Uk)(" (name in German, English name is Great Tit) photo taken in Tübingen, Germany. It is a species of bird that is native to Europe. They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!")],-1))),_={id:"body"},j={class:"main-content"},S={class:"text-container"},I={class:"title-container"},A=o((()=>(0,i._)("h1",{class:"h1-title"},"Über",-1))),G=(0,i.uE)('<div class="bullets" data-v-03239f6a><ul data-v-03239f6a><li data-v-03239f6a>Diese Version der Website wurde im März 2023 gestartet und komplett von mir (Conrad) selbst erstellt, hauptsächlich mit <a class="home-text-links" style="color:#42b883;" href="https://vuejs.org/guide/introduction.html" data-v-03239f6a><b data-v-03239f6a>Vue 3</b></a> (Vue.js) für seine Reaktivität und Interaktivität. </li><li data-v-03239f6a>Das Hauptziel dieser Website ist es, verschiedene Projekte zu erstellen und auszustellen. Sie wird auf <a class="home-text-links" href="https://github.com/conrizzo/conradswebsite" data-v-03239f6a> meinem GitHub</a> mit <a class="home-text-links" href="https://pages.github.com/" data-v-03239f6a> GitHub Pages</a> gehostet. </li><li data-v-03239f6a> Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am <i data-v-03239f6a>Max-Planck-Institut für Biologie</i> in Tübingen, Deutschland, gearbeitet habe. </li><li data-v-03239f6a> Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe, sind Vue.js, JavaScript, TypeScript, HTML, CSS, Rust für Web Assembly und mehr! </li><li data-v-03239f6a>Außerdem habe ich begonnen, eine <b data-v-03239f6a><a class="home-text-links" href="https://blog.conradswebsite.com/blog/using-var-and-let-in-javascript/" data-v-03239f6a>Blogseite</a></b> zu erstellen, die das <a class="home-text-links" href="https://astro.build/" data-v-03239f6a>Astro</a> framework verwendet. </li><li data-v-03239f6a> Diese Website handelt größtenteils davon, mein Wissen im Bereich Webprogrammierung zu verbessern. Der Zweck bestand darin zu lernen. </li></ul></div><h2 data-v-03239f6a>Motivation:</h2><div class="horizontal-line" data-v-03239f6a></div><p data-v-03239f6a> This website is constantly being updated and improved. I am always learning new things. All projects here are not meant to be text-book examples of how to do things, but rather examples of how I learned to make things. The fun thing about this website is it is entirely made from scratch by me, so I understand it well, and if I make some mistakes or something explodes it&#39;s just science. </p><h2 data-v-03239f6a>Progression:</h2><div class="horizontal-line" data-v-03239f6a></div>',6),U={class:"figure-location"},P=["src"],z=o((()=>(0,i._)("figcaption",{class:"figure-caption"},"Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript. ",-1))),C=o((()=>(0,i._)("a",{class:"home-text-links",href:"https://vuejs.org/guide/typescript/overview.html"},"Vue.js itself is written in TypeScript",-1))),V=o((()=>(0,i._)("h2",null,"About the Vue Routing with GitHub Pages:",-1))),H=o((()=>(0,i._)("div",{class:"horizontal-line"},null,-1))),W=o((()=>(0,i._)("div",null,[(0,i._)("p",null,"December 6th 2023 - Next item for deployment will be to convert this process below to use GitHub actions and a .yaml file to automate it. Lately I've been making many small commits so I may not need to deploy the website everytime I make small adjustments with an automated process but the auto deployment using GitHub actions is a nice tool. "),(0,i._)("p",null,[(0,i.Uk)(" Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly. For example, in order to deploy this website, the command "),(0,i._)("i",null,'"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"'),(0,i.Uk)(' is used, and this command is added to the package.json file. To publish modifications to the website, one can run the command "npm run deploy". This will first build the vue.js application by running "npm run build", and then put the production build of the website into the \'dist\' folder.')]),(0,i._)("p",null," A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html. This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead show a 404 error on GitHub Pages. However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when using gh-pages.")],-1))),R={class:"bird-container"},B=o((()=>(0,i._)("h3",null," Bird of the Month: Kohlmeise ",-1))),D=["src"],L=o((()=>(0,i._)("p",{class:"bird-text",style:{color:"#c7c7c7"}},[(0,i._)("a",{class:"home-text-links",href:"https://en.wikipedia.org/wiki/Great_tit"},"Kohlmeise"),(0,i.Uk)(" (name in German, English name is Great Tit) photo taken in Tübingen, Germany. It is a species of bird that is native to Europe. They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!")],-1)));function E(e,t,a,o,E,J){const M=(0,i.up)("router-link"),K=(0,i.up)("AsideContent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.wy)((0,i._)("body",r,[(0,i._)("main",l,[(0,i._)("div",u,[(0,i._)("div",d,[c,(0,i._)("button",{onClick:t[0]||(t[0]=e=>{J.language()}),class:"language-button"},(0,n.zw)(E.languageButtonText),1)]),h,(0,i._)("figure",m,[(0,i._)("img",{class:"img-container",src:E.imagePath,alt:"Coding Languages used"},null,8,p),g]),(0,i._)("p",null,[(0,i.Uk)(" This website was originally written in Vue 3 and straight JavaScript. Later on I converted it to have TypeScript support, and new projects such as the "),(0,i.Wm)(M,{class:"home-text-links",to:"/projects/cowgame"},{default:(0,i.w5)((()=>[(0,i.Uk)("Cow Game")])),_:1}),(0,i.Uk)(" heavily use TypeScript. The "),(0,i.Wm)(M,{class:"home-text-links",to:"/projects/cards"},{default:(0,i.w5)((()=>[(0,i.Uk)("Card Game")])),_:1}),(0,i.Uk)(" also uses TypeScript. "),b,(0,i.Uk)(" so one could also say using Vue.js is using TypeScript to an extent. In July, 2023, started working on integrating some minor backend services for experimenting. In July, 2023 I also started learning how to use Rust with Web Assembly, so some of this website now uses Rust compiled into Web Assembly. Recently I've been reviewing code I wrote and upgrading it to be simpler and more professional. There is a lot one can learn by reviewing their own code and seeing what could be improved after seeing how other developers write code. ")]),f,w,v]),(0,i.Wm)(K,{style:{"background-color":"rgb(40, 40, 40)"}},{"aside-content":(0,i.w5)((()=>[(0,i._)("div",y,[k,(0,i._)("img",{class:"bird",src:E.birdPicture,alt:"Kohlmeise picture"},null,8,x)]),T])),_:1})])],512),[[s.F8,"Deutsch wechseln"===E.languageButtonText]]),(0,i.wy)((0,i._)("body",_,[(0,i._)("main",j,[(0,i._)("div",S,[(0,i._)("div",I,[A,(0,i._)("button",{onClick:t[1]||(t[1]=e=>{J.language()}),class:"language-button"},(0,n.zw)(E.languageButtonText),1)]),G,(0,i._)("figure",U,[(0,i._)("img",{class:"img-container",src:E.imagePath,alt:"Coding Languages used"},null,8,P),z]),(0,i._)("p",null,[(0,i.Uk)(" This website was originally written in Vue 3 and straight JavaScript. Later on I converted it to have TypeScript support, and new projects such as the "),(0,i.Wm)(M,{class:"home-text-links",to:"/projects/cowgame"},{default:(0,i.w5)((()=>[(0,i.Uk)("Cow Game")])),_:1}),(0,i.Uk)(" heavily use TypeScript. The "),(0,i.Wm)(M,{class:"home-text-links",to:"/projects/cards"},{default:(0,i.w5)((()=>[(0,i.Uk)("Card Game")])),_:1}),(0,i.Uk)(" also uses TypeScript. "),C,(0,i.Uk)(" so one could also say using Vue.js is using TypeScript to an extent. In July, 2023, started working on integrating some minor backend services for experimenting. In July, 2023 I also started learning how to use Rust with Web Assembly, so some of this website now uses Rust compiled into Web Assembly. Recently I've been reviewing code I wrote and upgrading it to be simpler and more professional. There is a lot one can learn by reviewing their own code and seeing what could be improved after seeing how other developers write code. ")]),V,H,W]),(0,i.Wm)(K,{style:{"background-color":"rgb(40, 40, 40)"}},{"aside-content":(0,i.w5)((()=>[(0,i._)("div",R,[B,(0,i._)("img",{class:"bird",src:E.birdPicture,alt:"Kohlmeise picture"},null,8,D)]),L])),_:1})])],512),[[s.F8,"Switch to English"===E.languageButtonText]])],64)}a(6229),a(7330),a(2062);var J=a(6433),M=a(5660),K=a.n(M),F={name:"HomeView",components:{AsideContent:J.Z},data(){return{birdPicture:a(9758),imagePath:a(7655),languageChange:!1,languageButtonText:"Deutsch wechseln"}},downloadPDF(){const e="https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf";fetch(e).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","my-document.pdf"),document.body.appendChild(a),a.click()}))},mounted(){document.title="About Conrad's Website",K().highlightAll()},methods:{language(){"Deutsch wechseln"==this.languageButtonText?this.languageButtonText="Switch to English":this.languageButtonText="Deutsch wechseln"}}},Z=a(3744);const N=(0,Z.Z)(F,[["render",E],["__scopeId","data-v-03239f6a"]]);var O=N},9758:function(e,t,a){e.exports=a.p+"img/Kohlenmeise.3b49d678.jpg"},7655:function(e,t,a){e.exports=a.p+"img/project_languages.799b3abe.jpg"}}]);
//# sourceMappingURL=393.4433473d.js.map