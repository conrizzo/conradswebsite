(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0281":function(t,e,n){"use strict";var a=n("6a5c"),r=n.n(a);r.a},1742:function(t,e,n){},2668:function(t,e,n){},"3a39":function(t,e,n){},"3fc0":function(t,e,n){"use strict";var a=n("4a72"),r=n.n(a);r.a},4764:function(t,e,n){"use strict";var a=n("3a39"),r=n.n(a);r.a},"4a72":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("the-left-nav",{attrs:{id:"left-nav"}}),n("the-mobile-nav",{attrs:{id:"mobile-nav"}}),n("div",{staticClass:"view-container"},[n("router-view")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("div",{staticClass:"nav-logo"}),n("div",{staticClass:"nav-menu"},[n("ul",{staticClass:"nav-menu-list"},[n("router-link",{attrs:{to:"/"}},[n("li",{staticClass:"nav-list-item"},[t._v(" Home ")])]),n("router-link",{attrs:{to:"/project"}},[n("li",{staticClass:"nav-list-item"},[t._v(" Project ")])])],1)])])},o=[],c={},u=c,l=(n("0281"),n("d234"),n("2877")),v=Object(l["a"])(u,i,o,!1,null,"a1ed6bbe",null),d=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("div",{staticClass:"nav-logo"}),n("div",{staticClass:"nav-menu"},[n("ul",{staticClass:"nav-menu-list"},[n("router-link",{attrs:{to:"/"}},[n("li",{staticClass:"nav-list-item"},[t._v(" Home ")])]),n("router-link",{attrs:{to:"/project"}},[n("li",{staticClass:"nav-list-item"},[t._v(" Project ")])])],1)])])},p=[],h={name:"app",components:{}},b=h,_=(n("6ab7"),n("8caf"),Object(l["a"])(b,f,p,!1,null,"57785a96",null)),m=_.exports,g={components:{TheLeftNav:d,TheMobileNav:m}},w=g,j=(n("4764"),Object(l["a"])(w,r,s,!1,null,"88141fda",null)),C=j.exports,y=n("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-card"},[n("div",{staticClass:"card-title"},[n("div",{staticClass:"title-text-content"},[n("p",[t._v("About me:")]),n("h2",[t._v("Conrad Lundberg ")])])]),n("div",{staticClass:"card-content"},[n("p",[t._v("This website was started March 1st, 2020 and the hosting service is "),n("a",{attrs:{href:"https://pages.github.com/"}},[t._v("Github Pages")]),t._v(". It is being built from scratch in "),n("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),n("br"),t._v(" Multiple pages link with Vue.js Router and all the page resizing works at a basic level. Now working to connect in a custom Vue app to do some basic things with inputs and code.")]),n("hr"),n("p",[t._v("Updating the actual webpage takes a few minutes since the 'npm run build' needs to generate a new 'dist' file and convert the code to a running Vue.js build. This 'dist' folder then needs to be pushed into a branch that Github Pages hosts the Vue.js build in, and then the custom web domain "),n("a",{attrs:{href:"https://conradswebsite.com"}},[t._v("conradswebsite.com")]),t._v(" needs to be selected. This domain is already redirected for Githubs servers to use with the proper addresses. ")]),n("div",{attrs:{id:"app2"}}),n("p",[t._v("For reference the necessary commands to do this are:"),n("br"),t._v(" 1. npm run build"),n("br"),t._v(" 2. git add dist -f"),n("br"),t._v(" 3. git commit dist -m 'gh-pages'"),n("br"),t._v(" 4. git subtree push --prefix dist origin gh-pages"),n("br"),n("table",[n("tr",[n("th",[t._v("0 Row")]),n("th",[t._v("Amphibious Mammal")]),n("th",[t._v("Mammal")])]),n("tr",[n("td",[t._v("R1")]),n("td",[t._v("Walrus")]),n("td",[t._v("Squirrel")])]),n("tr",[n("td",[t._v("R2")]),n("td",[t._v("Seal of approval")]),n("td",[t._v("Parrot")])]),n("tr",[n("td",[t._v("R3")]),n("td",[t._v("Platypus")]),n("td",[t._v("Horse")])]),n("tr",[n("td",[t._v("R4")]),n("td",[t._v("Otter")]),n("td",[t._v("Cat")])])])]),n("p",[t._v("More features are being connected together! ")])]),n("footer",[n("p",[t._v("Text to use for the footer.")])])])}],P=(n("3fc0"),n("7965"),{}),k=Object(l["a"])(P,O,x,!1,null,"8242e668",null),M=k.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-card"},[n("div",{staticClass:"card-title"},[n("div",{staticClass:"title-text-content"},[n("h2",[t._v("Project Page")])])]),n("div",{staticClass:"card-content"},[n("p",[t._v(" This is the project page. I'll integrate some kind of 1337 coded application here. ")])])])}],E=(n("be5c"),n("bb98"),{}),S=Object(l["a"])(E,T,$,!1,null,"72ca832e",null),R=S.exports;a["a"].use(y["a"]);var V=[{path:"/",name:"about",component:M},{path:"/project",name:"project",component:R}],G=new y["a"]({routes:V}),H=G;a["a"].config.productionTip=!1,new a["a"]({router:H,render:function(t){return t(C)}}).$mount("#app")},"6a5c":function(t,e,n){},"6ab7":function(t,e,n){"use strict";var a=n("c7ee"),r=n.n(a);r.a},7965:function(t,e,n){"use strict";var a=n("9731"),r=n.n(a);r.a},"8caf":function(t,e,n){"use strict";var a=n("1742"),r=n.n(a);r.a},9274:function(t,e,n){},"951f":function(t,e,n){},9731:function(t,e,n){},bb98:function(t,e,n){"use strict";var a=n("2668"),r=n.n(a);r.a},be5c:function(t,e,n){"use strict";var a=n("9274"),r=n.n(a);r.a},c7ee:function(t,e,n){},d234:function(t,e,n){"use strict";var a=n("951f"),r=n.n(a);r.a}});
//# sourceMappingURL=app.877f221a.js.map