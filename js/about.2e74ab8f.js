(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[443],{7045:function(e,t,a){var i=a(6339),s=a(3070);e.exports=function(e,t,a){return a.get&&i(a.get,t,{getter:!0}),a.set&&i(a.set,t,{setter:!0}),s.f(e,t,a)}},2062:function(e,t,a){"use strict";var i=a(9781),s=a(1702),n=a(7045),o=URLSearchParams.prototype,r=s(o.forEach);i&&!("size"in o)&&n(o,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})},6295:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var i=a(6252);function s(e,t,a,s,n,o){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i.WI)(e.$slots,"aside-content",{},void 0,!0)])}var n={name:"AsideContent"},o=a(3744);const r=(0,o.Z)(n,[["render",s],["__scopeId","data-v-c8f6de7c"]]);var l=r},2256:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var i=a(6252),s=a(3577);const n={class:"footer"},o={class:""},r=(0,i._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),l=(0,i._)("br",null,null,-1),c=(0,i._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function d(e,t,a,d,u,h){return(0,i.wg)(),(0,i.iD)("footer",n,[(0,i._)("div",o,[(0,i._)("p",null,[(0,i.Uk)(" Conrad's account on "),r,(0,i.Uk)(" | conradswebsite.com © "+(0,s.zw)(h.getCurrentYear),1),l,(0,i.Uk)(" unless mentioned otherwise, licensing is "),c,(0,i.Uk)(". ")])])])}var u={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=a(3744);const p=(0,h.Z)(u,[["render",d]]);var b=p},3622:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var i=a(6252);const s=e=>((0,i.dD)("data-v-4f50169b"),e=e(),(0,i.Cn)(),e),n={class:"fill-page-to-footer"},o={class:"container background-color-about-page"},r=s((()=>(0,i._)("h1",{class:"h1-title"},"About",-1))),l={class:"text-container"},c=(0,i.uE)('<h2 style="text-align:left;padding-bottom:1em;padding-top:3em;" data-v-4f50169b>About this website</h2><ul data-v-4f50169b><li class="paragraph-text break-text" data-v-4f50169b>This iteration of the website was started in March, 2023 and is totally self-made by Conrad using <a class="text-links" style="color:#42b883;" href="https://vuejs.org/guide/introduction.html" data-v-4f50169b><b data-v-4f50169b>Vue 3</b></a> (Vue.js). It is hosted on <a class="text-links" href="https://github.com/conrizzo/conradswebsite" data-v-4f50169b><b data-v-4f50169b>Conrad&#39;s GitHub</b></a> with <a class="text-links" href="https://pages.github.com/" data-v-4f50169b><b data-v-4f50169b>GitHub pages</b></a>.</li><li class="paragraph-text break-text" data-v-4f50169b>I started learning about Vue.JS when I worked on the Bioinformatics Toolkit at Max Planck in Tübingen, Germany.</li><li class="paragraph-text break-text" data-v-4f50169b>I hold a degree in Computational Linguistics from the University of Tübingen in Germany, and previously completed a Bachelor of Science in Biology from the University of North Carolina at Wilmington, Wilmington, NC, USA.</li><li class="paragraph-text break-text" data-v-4f50169b>Have been working on this website using Vue.js, JavaScript, TypeScript, CSS, HTML. Starting to learn more about backend development and databases. The normal routine is to spend a few hours a day reviewing and learning code. Usually a commit or two on github each day to make some changes. </li><li class="paragraph-text break-text" data-v-4f50169b> Started learning <a class="text-links" href="https://doc.rust-lang.org/book/title-page.html" data-v-4f50169b>Rust</a> as well. German too, so it is <u data-v-4f50169b>a lot</u> of language learning! </li></ul><h2 style="text-align:left;padding-bottom:1em;" data-v-4f50169b>More about this website</h2><p class="paragraph-text break-text" data-v-4f50169b> This websites focus is to show some examples of work I&#39;ve done using code, plus it&#39;s fun to have a website made in a framework (Vue.js) and be able to build somewhat complex projects. Once one has a basic understanding of HTML, CSS, and JavaScript, the next step in front-end web development is frameworks. Framework description: <a class="text-links" href="https://en.wikipedia.org/wiki/Web_framework" data-v-4f50169b>https://en.wikipedia.org/wiki/Web_framework</a></p>',4),d={class:"paragraph-text break-text"},u=s((()=>(0,i._)("b",null,"Cow Game",-1))),h={class:"center-figure"},p=["src"],b=s((()=>(0,i._)("figcaption",null,"Here is an approximation of the languages this website uses. It's mostly Vue.js. As of June 2023, currently starting to add in TypeScript support. Some pages (such as the Cowculator) are pure Vue/JavaScript and no TypeScript. ",-1))),g=s((()=>(0,i._)("br",null,null,-1))),m=s((()=>(0,i._)("div",null,[(0,i._)("p",{class:"paragraph-text break-text",style:{"padding-top":"1em","border-top":"1px solid rgb(211, 211, 211)"}},[(0,i.Uk)(" Since this site is using Vue.JS router-linking and hosted with GitHub Pages, it requires special methods to work properly. For example, in order to deploy this website, the command "),(0,i._)("i",null,'"deploy": "copy dist\\index.html dist\\404.html & gh-pages -d dist"'),(0,i.Uk)(' is used, and this command is added to the package.json file. To publish modifications to the website, one can run the command "npm run deploy". This will first build the vue.js application by running "npm run build", and then put the production build of the website into the \'dist\' folder.')]),(0,i._)("p",{class:"paragraph-text break-text"}," A copy of the index.html file that is built in the 'dist' folder is created and renamed to 404.html. This is a workaround that allows router-linking in vue.js to work correctly for all routes. Without this workaround, direct URL links such as https://conradswebsite.com/projects/cowculator would not work and instead show a 404 error on GitHub Pages. However, by creating a copy of index.html and renaming it to 404.html whenever the site is updated, all addresses now work properly by falling back to the index.html page. This solution may not be ideal, but it is necessary when using gh-pages.")],-1))),f=s((()=>(0,i._)("p",{class:"aside-text",style:{"margin-top":"1em"}},[(0,i.Uk)(" This aside is a "),(0,i._)("a",{class:"text-links",href:"https://vuejs.org/guide/components/slots.html"},[(0,i._)("i",null,"slot")]),(0,i.Uk)(". ")],-1))),w=["src"],k=s((()=>(0,i._)("p",{class:"aside-text"},[(0,i.Uk)("This is a self-taken "),(0,i._)("a",{class:"text-links",href:"https://en.wikipedia.org/wiki/Great_tit"},"Kohlmeise"),(0,i.Uk)(" (name in German, English name is Great Tit) photo in Tübingen, Germany. It is a species of bird that is native to Europe. They are known for their distinctive black and white plumage and their cheerful songs. They also love to eat peanuts!")],-1)));function v(e,t,a,s,v,y){const x=(0,i.up)("router-link"),_=(0,i.up)("AsideContent"),T=(0,i.up)("FirstFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i._)("div",o,[(0,i._)("div",null,[r,(0,i._)("div",l,[(0,i._)("div",null,[c,(0,i._)("p",d,[(0,i.Uk)("Much of this website was originally written in Vue 3 and straight JavaScript, however it was converted to have TypeScript supports later on, and new projects such as the "),(0,i.Wm)(x,{class:"text-links",to:"/projects/cowgame"},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Uk)(" heavily use TypeScript. This website is designed to be minimal and offer simple navigation to some projects I've made. The focus has really been to use progressively more complex aspects of Vue 3, JavaScript, TypeScript, CSS, HTML, and really just learn everything that is useful to know and make some more sophisticated projects. As of July, 2023, have been working on integrating backend development. This website has been a static website, but will change into a dynamic one with a backend. ")]),(0,i._)("figure",h,[(0,i._)("img",{class:"img-container",src:v.imagePath,alt:"Coding Languages used"},null,8,p),b]),g,m])])]),(0,i.Wm)(_,null,{"aside-content":(0,i.w5)((()=>[f,(0,i._)("img",{style:{"border-radius":"1em"},src:v.birdPicture,alt:"Kohlmeise picture"},null,8,w),k])),_:1})])]),(0,i.Wm)(T)],64)}a(2062);var y=a(6295),x=a(2256),_=a(5660),T=a.n(_),S={name:"HomeView",components:{AsideContent:y.Z,FirstFooter:x.Z},data(){return{birdPicture:a(9758),imagePath:a(9190)}},downloadPDF(){const e="https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf";fetch(e).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download","my-document.pdf"),document.body.appendChild(a),a.click()}))},mounted(){T().highlightAll()}},C=a(3744);const j=(0,C.Z)(S,[["render",v],["__scopeId","data-v-4f50169b"]]);var U=j},9758:function(e,t,a){"use strict";e.exports=a.p+"img/Kohlenmeise.3b49d678.jpg"},9190:function(e,t,a){"use strict";e.exports=a.p+"img/languages_july_17_2023.1260acd6.jpg"}}]);
//# sourceMappingURL=about.2e74ab8f.js.map