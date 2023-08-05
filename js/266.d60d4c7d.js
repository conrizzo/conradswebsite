(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[266],{7045:function(e,t,a){var i=a(6339),s=a(3070);e.exports=function(e,t,a){return a.get&&i(a.get,t,{getter:!0}),a.set&&i(a.set,t,{setter:!0}),s.f(e,t,a)}},2062:function(e,t,a){"use strict";var i=a(9781),s=a(1702),n=a(7045),o=URLSearchParams.prototype,r=s(o.forEach);i&&!("size"in o)&&n(o,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})},6295:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var i=a(6252);function s(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i.WI)(e.$slots,"aside-content",{},void 0,!0)])}var n={name:"AsideContent"},o=a(3744);const r=(0,o.Z)(n,[["render",s],["__scopeId","data-v-c8f6de7c"]]);var l=r},2256:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var i=a(6252),s=a(3577);const n={class:"footer"},o={class:""},r=(0,i._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),l=(0,i._)("br",null,null,-1),c=(0,i._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,a,u,d,h){return(0,i.wg)(),(0,i.iD)("footer",n,[(0,i._)("div",o,[(0,i._)("p",null,[(0,i.Uk)(" Conrad's account on "),r,(0,i.Uk)(" | conradswebsite.com © "+(0,s.zw)(h.getCurrentYear),1),l,(0,i.Uk)(" unless mentioned otherwise, licensing is "),c,(0,i.Uk)(". ")])])])}var d={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=a(3744);const p=(0,h.Z)(d,[["render",u]]);var g=p},2266:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var i=a(6252);const s=e=>((0,i.dD)("data-v-51aecf51"),e=e(),(0,i.Cn)(),e),n={class:"container background-color-about-page"},o={class:"text-container"},r=(0,i.uE)('<h1 class="h1-title" data-v-51aecf51>About</h1><ul data-v-51aecf51><li class="paragraph-text break-text" data-v-51aecf51>This iteration of the website was started in March, 2023 and is totally self-made by me (Conrad) using <a class="text-links" style="color:#42b883;" href="https://vuejs.org/guide/introduction.html" data-v-51aecf51><b data-v-51aecf51>Vue 3</b></a> (Vue.js). It is hosted on <a class="text-links" href="https://github.com/conrizzo/conradswebsite" data-v-51aecf51><b data-v-51aecf51>Conrad&#39;s GitHub</b></a> with <a class="text-links" href="https://pages.github.com/" data-v-51aecf51><b data-v-51aecf51>GitHub pages</b></a>. </li><li class="paragraph-text break-text" data-v-51aecf51>I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max Planck in Tübingen, Germany.</li><li class="paragraph-text break-text" data-v-51aecf51>I hold a degree in Computational Linguistics from the University of Tübingen in Germany, and previously completed a Bachelor of Science in Biology from the University of North Carolina at Wilmington, Wilmington, NC, USA.</li><li class="paragraph-text break-text" data-v-51aecf51>Have been working on this website using Vue.js, JavaScript, TypeScript, CSS, HTML. Starting to learn more about backend development and databases. </li><li class="paragraph-text break-text" data-v-51aecf51> Started learning <a class="text-links" href="https://doc.rust-lang.org/book/title-page.html" data-v-51aecf51>Rust</a> as well. Have practiced more German too, so it is <u data-v-51aecf51>a lot</u> of language learning! </li></ul><h2 style="text-align:left;" data-v-51aecf51>More info if interested:</h2><p class="paragraph-text break-text" style="padding-top:1em;border-top:1px solid rgb(170, 170, 170);" data-v-51aecf51> This websites focus is to show some projects and other work, plus it&#39;s fun to have a website made in a framework (Vue.js) and be able to build stuff. </p>',4),l={class:"paragraph-text break-text"},c=s((()=>(0,i._)("b",null,"Cow Game",-1))),u={class:"center-figure"},d=["src"],h=s((()=>(0,i._)("figcaption",null,"Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript. ",-1))),p=s((()=>(0,i._)("br",null,null,-1))),g=s((()=>(0,i._)("h2",{style:{"text-align":"left"}},"About the Vue Routing with GitHub Pages:",-1))),b=s((()=>(0,i._)("div",null,[(0,i._)("p",{class:"paragraph-text break-text",style:{"padding-top":"1em","border-top":"1px solid rgb(170, 170, 170)"}},[(0,i.Uk)(" Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly. For example, in order to deploy this website, the command "),(0,i._)("i",null,'"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"'),(0,i.Uk)(' is used, and this command is added to the package.json file. To publish modifications to the website, one can run the command "npm run deploy". This will first build the vue.js application by running "npm run build", and then put the production build of the website into the \'dist\' folder.')]),(0,i._)("p",{class:"paragraph-text break-text"}," A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html. This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead show a 404 error on GitHub Pages. However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when using gh-pages.")],-1))),f=s((()=>(0,i._)("p",{class:"aside-text",style:{"margin-top":"1em",color:"#c7c7c7"}},[(0,i.Uk)(" This aside is a "),(0,i._)("a",{class:"text-links",href:"https://vuejs.org/guide/components/slots.html"},[(0,i._)("i",null,"slot")]),(0,i.Uk)(": ")],-1))),m=["src"],w=s((()=>(0,i._)("p",{class:"aside-text",style:{color:"#c7c7c7"}},[(0,i.Uk)("This is a "),(0,i._)("a",{class:"text-links",href:"https://en.wikipedia.org/wiki/Great_tit"},"Kohlmeise"),(0,i.Uk)(" (name in German, English name is Great Tit) photo taken in Tübingen, Germany. It is a species of bird that is native to Europe. They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!")],-1)));function k(e,t,a,s,k,v){const y=(0,i.up)("router-link"),x=(0,i.up)("AsideContent"),_=(0,i.up)("FirstFooter");return(0,i.wg)(),(0,i.iD)("body",null,[(0,i._)("div",n,[(0,i._)("div",o,[r,(0,i._)("p",l,[(0,i.Uk)("Much of this website was originally written in Vue 3 and straight JavaScript, however I converted it to have TypeScript support later on, and new projects such as the "),(0,i.Wm)(y,{class:"text-links",to:"/projects/cowgame"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Uk)(" heavily use TypeScript. As of July, 2023, have been working on integrating backend development. In July, 2023 I also started learning Rust and some of this website now uses Rust compiled into Web Assembly. ")]),(0,i._)("figure",u,[(0,i._)("img",{class:"img-container",src:k.imagePath,alt:"Coding Languages used"},null,8,d),h]),p,g,b]),(0,i.Wm)(x,{style:{"background-color":"rgb(40, 40, 40)"}},{"aside-content":(0,i.w5)((()=>[f,(0,i._)("img",{style:{"border-radius":"0.5em",width:"200px"},src:k.birdPicture,alt:"Kohlmeise picture"},null,8,m),w])),_:1})]),(0,i.Wm)(_)])}a(2062);var v=a(6295),y=a(2256),x=a(5660),_=a.n(x),C={name:"HomeView",components:{AsideContent:v.Z,FirstFooter:y.Z},data(){return{birdPicture:a(9758),imagePath:a(9190)}},downloadPDF(){const e="https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf";fetch(e).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","my-document.pdf"),document.body.appendChild(a),a.click()}))},mounted(){_().highlightAll()}},T=a(3744);const S=(0,T.Z)(C,[["render",k],["__scopeId","data-v-51aecf51"]]);var U=S},9758:function(e,t,a){"use strict";e.exports=a.p+"img/Kohlenmeise.3b49d678.jpg"},9190:function(e,t,a){"use strict";e.exports=a.p+"img/languages_july_17_2023.1260acd6.jpg"}}]);
//# sourceMappingURL=266.d60d4c7d.js.map