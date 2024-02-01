"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[123],{1072:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(6252),i=n(3577);const r={class:"second-main-area"},s={class:"second-area-grid-container"},o={class:"grid-item-coffee"},l=["src"];function c(e,t,n,c,u,d){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",{class:(0,i.C_)(["hidden",{show:u.isContentVisible}]),ref:"content"},[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("img",{class:"coffee-image",src:n.contentImage,alt:"Image"},null,8,l)]),(0,a._)("div",{class:"grid-item-text",style:(0,i.j5)({background:n.bgColor})},[(0,a._)("h2",null,(0,i.zw)(n.titleText),1),(0,a._)("p",null,(0,i.zw)(n.contentText),1)],4)])],2)])}var u=n(5797),d=(n.p,{name:"CoffeeGridContent",props:{titleText:{type:String,default:"This is the default text for the title."},contentText:{type:String,default:"This is the default text for the prop, anything can be added here in the parent component."},contentImage:{type:String,default:u},bgColor:{type:String,default:"rgba(0, 0, 0, 0.5)"}},data(){return{coffee_image:u,isContentVisible:!1,isTextVisible:!1}},mounted(){const e={root:null,rootMargin:"0px",threshold:.5};this.observer=new IntersectionObserver(this.handleIntersection,e),this.observer.observe(this.$refs.content)},methods:{handleIntersection(e){e.forEach((e=>{e.isIntersecting&&e.target===this.$refs.content&&(this.isContentVisible=!0,this.observer.unobserve(this.$refs.content))}))}}}),h=n(3744);const g=(0,h.Z)(d,[["render",c],["__scopeId","data-v-833150ca"]]);var f=g},3950:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(6252),i=n(3577),r=n(9963);const s=e=>((0,a.dD)("data-v-6eea5ef1"),e=e(),(0,a.Cn)(),e),o={id:"body"},l={class:"center-content-within"},c={style:{width:"80rem"}},u={class:"text-container"},d={class:"width-container"},h={class:"language-container"},g={class:"language-arrow-text tooltip"},f=s((()=>(0,a._)("span",{class:"tooltiptext"}," CSS and Vue.js, not an image or drawn arrow! ",-1))),b=(0,a.uE)('<div style="transform:rotate(-55deg);" data-v-6eea5ef1><div class="arrow-container" data-v-6eea5ef1><div class="arrow" data-v-6eea5ef1><div class="curve" data-v-6eea5ef1></div><div class="point" data-v-6eea5ef1></div></div></div></div>',1),m=s((()=>(0,a._)("div",{class:"parabola"},null,-1))),v={class:"center-content-within"},p={class:"each-section"},w=(0,a.uE)('<h1 data-v-6eea5ef1>About</h1><ul data-v-6eea5ef1><li data-v-6eea5ef1> This website is made by me (Conrad) and heavily uses <a href="https://vuejs.org/" class="text-links" style="color:#42b883;" data-v-6eea5ef1>Vue 3 (Vue.js)</a> for its reactivity and interactivity. It&#39;s open-source and has been a continuous project </li><li data-v-6eea5ef1> It is currently hosted on <a class="text-links" href="https://github.com/conrizzo/conradswebsite" data-v-6eea5ef1>GitHub</a></li><li data-v-6eea5ef1> Made with <span class="languages-used" data-v-6eea5ef1>Vue.js, JavaScript, TypeScript, HTML, CSS, Rust into Web Assembly,</span> and soon more projects in other languages such as Angular, Wordpress, Astro </li><li data-v-6eea5ef1> I started learning about Vue.js when I worked on the Bioinformatics Toolkit at Max-Planck-Institut für Biologie in Tübingen, Germany </li><li data-v-6eea5ef1> Side project <a class="text-links" href="https://blog.conradswebsite.com" data-v-6eea5ef1>https://blog.conradswebsite.com</a> to try out the <a class="text-links" href="https://astro.build/" data-v-6eea5ef1>Astro</a> framework </li></ul>',2),y=[w],k={class:"each-section"},x=(0,a.uE)('<h1 data-v-6eea5ef1>About</h1><ul data-v-6eea5ef1><li data-v-6eea5ef1> Diese Website wurde von mir (Conrad) selbst erstellt, weitgehend mit <a href="https://vuejs.org/" class="text-links" style="color:#42b883;" data-v-6eea5ef1>Vue 3 (Vue.js)</a> für seine Reaktivität und Interaktivität </li><li data-v-6eea5ef1> Sie wird auf meinem <a class="text-links" href="https://github.com/conrizzo/conradswebsite" data-v-6eea5ef1>GitHub</a> gehostet. Es ist Open Source und ein kontinuierliches Projekt </li><li data-v-6eea5ef1> Die Programmiersprachen/Frameworks, die ich für die Erstellung dieser Website verwendet habe, sind <span class="languages-used" data-v-6eea5ef1>Vue.js, JavaScript, TypeScript, HTML, CSS und Rust für Web Assembly.</span> In Zukunft plane ich, weitere Projekte in anderen Sprachen wie Angular, Wordpress und Astro umzusetzen </li><li data-v-6eea5ef1> Ich habe damit begonnen, Vue.js zu lernen, als ich am Bioinformatik-Toolkit am Max-Planck-Institut für Biologie in Tübingen, Deutschland, gearbeitet habe </li><li data-v-6eea5ef1> Nebenprojekt <a class="text-links" href="https://blog.conradswebsite.com" data-v-6eea5ef1>https://blog.conradswebsite.com</a> die das <a class="text-links" href="https://astro.build/" data-v-6eea5ef1>Astro</a> framework verwendet </li></ul>',2),T=[x],_={class:"center-content-within"},I={class:"each-section"},S=s((()=>(0,a._)("h2",null,"More about me",-1))),C=s((()=>(0,a._)("p",null," In 2022 I completed studies in Computational Linguistics at the University of Tübingen in Germany. I am pleased to have successfully earned a degree from a German university. Before this I obtained a Biology degree in the USA. Most of the information in todays world travels through the internet in one way or another, so I thought it would be interesting to go back to websites and learn how to build my own websites and web applications. ",-1))),j=s((()=>(0,a._)("p",null," I am now keen on enhancing my programming abilities and advancing as a developer. Every day I'm motivated and curious to learn more. Anything in Front-end, back-end, or full-stack web applications piques my interest. Potentially more machine learning and NLP is an option, but these machine learning subjects (while incredibly interesting) can get very complicated quickly! I look forward to new opportunities, am excited about learning more, and confident in my ability to do problem-solving through code and research. ",-1))),z=[S,C,j],A={class:"each-section"},P=s((()=>(0,a._)("h2",null,"Mehr über mich",-1))),B=s((()=>(0,a._)("p",null," In 2022 habe ich ein Studium der Computerlinguistik an der Universität Tübingen in Deutschland abgeschlossen. Ich freue mich, dass ich erfolgreich einen Abschluss an einer deutschen Universität erworben habe. Vorher habe ich einen Biologie-Abschluss in den USA erhalten. Die meisten Informationen in der heutigen Welt werden auf eine oder andere Weise über das Internet übertragen. Deshalb dachte ich, es wäre interessant, mich wieder mit Websites zu beschäftigen und zu lernen, wie ich meine eigenen Websites und Web-Anwendungen erstellen kann. ",-1))),D=s((()=>(0,a._)("p",null," Ich bin jetzt daran interessiert, meine Programmierfähigkeiten zu verbessern und mich als Entwickler weiterzuentwickeln. Jeden Tag bin ich motiviert und neugierig mehr zu lernen. Alles rund um Front-end, back-end oder full-stack Web-Anwendungen weckt mein Interesse. Potenziell auch Maschinenlernen und NLP (Natural Language Processing) möglich, aber diese Maschinenlernthemen (obwohl unglaublich interessant) können sehr schnell sehr komplex werden! Ich freue mich auf neue Möglichkeiten, bin begeistert, mehr zu lernen und habe Vertrauen in meine Fähigkeiten, Probleme durch Code und Forschung zu lösen. ",-1))),E=[P,B,D];function V(e,t,n,s,w,x){const S=(0,a.up)("twoColumnsGridContentTemplate");return(0,a.wg)(),(0,a.iD)("body",o,[(0,a._)("div",l,[(0,a._)("div",c,[(0,a.Wm)(S,{titleText:w.titleText,"content-text":w.contentText,"content-image":w.birdPicture,style:{background:"linear-gradient(to right, rgba(0,0,0,.8) 50%, rgba(0, 0, 0, .78) 50%)"}},null,8,["titleText","content-text","content-image"])])]),(0,a._)("main",u,[(0,a._)("div",d,[(0,a._)("div",h,[(0,a._)("span",g,[(0,a.Uk)((0,i.zw)(w.arrowText)+" ",1),f]),b,(0,a._)("button",{onClick:t[0]||(t[0]=e=>{x.language()}),class:"language-button",role:"button"},(0,i.zw)(w.languageButtonText),1)]),m,(0,a._)("div",v,[(0,a.wy)((0,a._)("section",p,y,512),[[r.F8,"Deutsch wechseln"===w.languageButtonText]]),(0,a.wy)((0,a._)("section",k,T,512),[[r.F8,"Switch to English"===w.languageButtonText]])]),(0,a._)("div",_,[(0,a.wy)((0,a._)("section",I,z,512),[[r.F8,"Deutsch wechseln"===w.languageButtonText]]),(0,a.wy)((0,a._)("section",A,E,512),[[r.F8,"Switch to English"===w.languageButtonText]])])])])])}n(8858),n(1318),n(3228);var W=n(1072),L=n(5660),M=n.n(L),U={name:"HomeView",components:{twoColumnsGridContentTemplate:W.Z},data(){return{birdPicture:n(9758),imagePath:n(7655),languageChange:!1,languageButtonText:"Deutsch wechseln",arrowText:"Deutsch",titleText:"ConradsWebsite",contentText:"Thank you for visiting!                    Welcome to the personal website of Conrad Lundberg. This is primarily a place to test ideas and make some projects."}},downloadPDF(){const e="https://raw.githubusercontent.com/username/repo/branch/path/to/file.pdf";fetch(e).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(new Blob([e])),n=document.createElement("a");n.href=t,n.setAttribute("download","my-document.pdf"),document.body.appendChild(n),n.click()}))},mounted(){document.title="About Conrad's Website",M().highlightAll()},methods:{language(){"Deutsch wechseln"==this.languageButtonText?(this.languageButtonText="Switch to English",this.arrowText="English"):(this.languageButtonText="Deutsch wechseln",this.arrowText="Deutsch")}}},F=n(3744);const G=(0,F.Z)(U,[["render",V],["__scopeId","data-v-6eea5ef1"]]);var R=G},9758:function(e,t,n){e.exports=n.p+"img/Kohlenmeise.3b49d678.jpg"},5797:function(e,t,n){e.exports=n.p+"img/generated_cup_of_coffee.41e8c8ae.jpg"},7655:function(e,t,n){e.exports=n.p+"img/project_languages.cc7fbbaa.jpg"},926:function(e,t,n){var a=n(3043),i=n(9985),r=n(6648),s=n(4201),o=s("toStringTag"),l=Object,c="Arguments"===r(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=a?r:function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),o))?n:c?r(t):"Object"===(a=r(t))&&i(t.callee)?"Arguments":a}},2148:function(e,t,n){var a=n(8702),i=n(2560);e.exports=function(e,t,n){return n.get&&a(n.get,t,{getter:!0}),n.set&&a(n.set,t,{setter:!0}),i.f(e,t,n)}},3043:function(e,t,n){var a=n(4201),i=a("toStringTag"),r={};r[i]="z",e.exports="[object z]"===String(r)},4327:function(e,t,n){var a=n(926),i=String;e.exports=function(e){if("Symbol"===a(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},1500:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8858:function(e,t,n){var a=n(1880),i=n(8844),r=n(4327),s=n(1500),o=URLSearchParams,l=o.prototype,c=i(l.append),u=i(l["delete"]),d=i(l.forEach),h=i([].push),g=new o("a=1&a=2&b=3");g["delete"]("a",1),g["delete"]("b",void 0),g+""!=="a=2"&&a(l,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var a=[];d(this,(function(e,t){h(a,{key:t,value:e})})),s(t,1);var i,o=r(e),l=r(n),g=0,f=0,b=!1,m=a.length;while(g<m)i=a[g++],b||i.key===o?(b=!0,u(this,i.key)):f++;while(f<m)i=a[f++],i.key===o&&i.value===l||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,t,n){var a=n(1880),i=n(8844),r=n(4327),s=n(1500),o=URLSearchParams,l=o.prototype,c=i(l.getAll),u=i(l.has),d=new o("a=1");!d.has("a",2)&&d.has("a",void 0)||a(l,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var a=c(this,e);s(t,1);var i=r(n),o=0;while(o<a.length)if(a[o++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,t,n){var a=n(7697),i=n(8844),r=n(2148),s=URLSearchParams.prototype,o=i(s.forEach);a&&!("size"in s)&&r(s,"size",{get:function(){var e=0;return o(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=123.614b046c.js.map