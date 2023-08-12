"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[529],{1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7658:function(e,t,n){var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},5585:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(6252),i=n(3577);const s={class:"footer"},o=(0,r._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),a=(0,r._)("br",null,null,-1),c=(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,n,u,l,h){return(0,r.wg)(),(0,r.iD)("footer",s,[(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)(" Conrad's account on "),o,(0,r.Uk)(" | conradswebsite.com © "+(0,i.zw)(h.getCurrentYear),1),a,(0,r.Uk)(" unless mentioned otherwise, licensing is "),c,(0,r.Uk)(". ")])])])}var l={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=n(3744);const d=(0,h.Z)(l,[["render",u]]);var f=d},8529:function(e,t,n){n.r(t),n.d(t,{default:function(){return __}});var r=n(6252),i=n(3577),s=n(9963);const o=e=>((0,r.dD)("data-v-b4375eae"),e=e(),(0,r.Cn)(),e),a={style:{background:"rgb(80, 80, 80)","padding-bottom":"2em","padding-top":"2.7em"}},c=o((()=>(0,r._)("hr",{style:{position:"absolute",top:"7.6em",left:"0",right:"0",border:"none","border-top":"1px solid black"}},null,-1))),u=o((()=>(0,r._)("h2",{style:{padding:"1em","margin-top":"3em",color:"#fff"}},"Working on this page... ",-1))),l=o((()=>(0,r._)("div",{style:{display:"flex","justify-content":"center",color:"#fff"}},[(0,r._)("p",{class:"paragraph-text"},[(0,r.Uk)("Here I am setting up a login/sign out setup using BaaS (Back end as a service) to post messages and do more!"),(0,r._)("br"),(0,r.Uk)(" The goal will eventually be to create a more comprehensive backend once there is a need for it. This is all being built from scratch!")])],-1))),h={key:0,style:{color:"#fff"}},d={style:{padding:"1em"}},f={key:1},p={style:{cursor:"auto",color:"#808080",position:"absolute",left:"0.5em",top:"0.5em","margin-top":"1.7em","font-size":"1.5em","font-weight":"bold"}},g=o((()=>(0,r._)("br",null,null,-1))),m=o((()=>(0,r._)("span",{style:{"font-size":"0.75em",color:"#808080"}},"You are logged in.",-1))),y={style:{"padding-top":"2em"}},v={style:{color:"#ff0000"}},w=o((()=>(0,r._)("h2",{style:{color:"#fff"}},"Submit Message! - must be logged in for it to work.",-1))),_={style:{"max-width":"40em"}},E={style:{display:"flex","flex-direction":"column"}},b=o((()=>(0,r._)("label",{for:"Subject",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25em"}},"Subject:",-1))),I={style:{display:"flex"}},T=["v-focus"],S={style:{color:"#ff6b6b","margin-left":"0.5em","padding-top":"0.5em"}},C={style:{display:"flex","flex-direction":"column"}},k=o((()=>(0,r._)("label",{for:"Message",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25em"}},"Message:",-1))),A={class:"submission-container"},N={style:{"list-style":"none"}},R={style:{"font-weight":"bold","font-size":"1em",color:"#87ff7a",display:"inline-block",padding:"0.25em 0 0.25em 0"}},D=o((()=>(0,r._)("br",null,null,-1))),O=o((()=>(0,r._)("span",{style:{color:"#d8d8d8","font-size":"0.9em"}},"Subject:",-1))),P={style:{color:"#ffffff"}},L={key:0,style:{"padding-left":"0.5em","font-size":"0.8em",color:"#ffffff",display:"inline-block"}},M={class:"break-text",style:{"background-color":"white",display:"inline-block",padding:"0.5em","margin-bottom":"0.5em","border-radius":"0.5em"}};function x(e,t,n,o,x,U){const F=(0,r.up)("LoginPage"),V=(0,r.up)("SignUpPage"),j=(0,r.up)("FirstFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[c,u,l,x.isLoggedIn?((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",p,[(0,r._)("span",null,[(0,r.Uk)("Welcome, "+(0,i.zw)(x.displayName)+"!",1),g,m])]),(0,r._)("button",{class:"button-35",style:{position:"absolute",top:"3em",right:"1em",color:"#87ff7a"},onClick:t[2]||(t[2]=(...e)=>U.handleLogout&&U.handleLogout(...e))},"Logout")])):((0,r.wg)(),(0,r.iD)("div",h,[x.showLogin?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(F,{onLoggedIn:U.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",d,[(0,r.Uk)("No account yet? "),(0,r._)("span",{class:"login-sign-up",style:{color:"#87ff7a",cursor:"pointer"},onClick:t[0]||(t[0]=e=>x.showLogin=!1)},"Sign up")])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(V,{onLoggedIn:U.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",null,[(0,r.Uk)("Already registered? "),(0,r._)("span",{class:"login-sign-up",style:{color:"#87ff7a",cursor:"pointer"},onClick:t[1]||(t[1]=e=>x.showLogin=!0)},"Login")])],64))])),(0,r._)("div",y,[(0,r._)("form",{name:"sendMessage",class:"addinput-form",onSubmit:t[6]||(t[6]=(0,s.iM)(((...t)=>e.createSubmission&&e.createSubmission(...t)),["prevent"]))},[(0,r._)("div",v,(0,i.zw)(x.errorMessage),1),w,(0,r._)("div",_,[(0,r._)("div",E,[b,(0,r._)("div",I,[(0,r.wy)((0,r._)("input",{style:{width:"23em"},type:"text",placeholder:"Subject",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>x.name=e),name:"submissionName",maxlength:"{{this.messageLength}}","v-focus":e.shouldFocus},null,8,T),[[s.nr,x.name]]),(0,r._)("span",S,[(0,r._)("span",{style:(0,i.j5)(U.textStyle)},(0,i.zw)(x.name.length)+"/"+(0,i.zw)(this.messageLength),5)])])])]),(0,r._)("div",C,[k,(0,r.wy)((0,r._)("textarea",{type:"text",placeholder:"Message",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>x.message=e),name:"submissionMessage",cols:"50",rows:"10"},null,512),[[s.nr,x.message]])]),(0,r._)("button",{style:{color:"#87ff7a"},onClick:t[5]||(t[5]=(...e)=>U.createUser&&U.createUser(...e)),class:"button-35"},"Add Entry")],32),(0,r._)("div",A,[(0,r._)("ul",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(x.submissions,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r._)("div",null,[(0,r._)("span",R,[(0,r.Uk)((0,i.zw)(e.userName)+" ",1),D,O,(0,r.Uk)(),(0,r._)("span",P,(0,i.zw)(e.name),1)]),e.timestamp?((0,r.wg)(),(0,r.iD)("p",L,(0,i.zw)(e.timestamp.toDate().toLocaleString()),1)):(0,r.kq)("",!0)]),(0,r._)("p",M,(0,i.zw)(e.message),1)])))),128))])])])]),(0,r.Wm)(j)],64)}n(7658);var U=n(5585);const F=e=>((0,r.dD)("data-v-43847825"),e=e(),(0,r.Cn)(),e),V=F((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Sign Up",-1))),j={style:{display:"flex","flex-direction":"column"}},B=F((()=>(0,r._)("label",{for:"text",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Make a Username:",-1))),z={style:{display:"flex","flex-direction":"column"}},q=F((()=>(0,r._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Enter an email:",-1))),$={style:{display:"flex","flex-direction":"column"}},K=F((()=>(0,r._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),H=["disabled"],G={key:0,style:{color:"red"}};function W(e,t,n,o,a,c){const u=(0,r.Q2)("focus");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>c.signUp&&c.signUp(...e)),["prevent"]))},[V,(0,r._)("div",j,[B,(0,r.wy)((0,r._)("input",{name:"text",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.userName=e),maxlength:"20"},null,512),[[s.nr,a.userName],[u]])]),(0,r._)("div",z,[q,(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e)},null,512),[[s.nr,a.email]])]),(0,r._)("div",$,[K,(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e)},null,512),[[s.nr,a.password]])]),(0,r._)("button",{style:{margin:"0.5em",color:"#87ff7a"},class:"button-35",disabled:a.isSigningUp},(0,i.zw)(c.signUpButtonText),9,H),a.signUpError?((0,r.wg)(),(0,r.iD)("div",G,(0,i.zw)(a.signUpError),1)):(0,r.kq)("",!0)],32)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},J=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},X={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Q(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):J(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw new Y;const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z=function(e){const t=Q(e);return X.encodeByteArray(t,!0)},ee=function(e){return Z(e).replace(/\./g,"")},te=function(e){try{return X.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=()=>ne().__FIREBASE_DEFAULTS__,ie=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},se=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&te(e[1]);return t&&JSON.parse(t)},oe=()=>{try{return re()||ie()||se()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ae=e=>{var t,n;return null===(n=null===(t=oe())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ce=e=>{const t=ae(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ue=()=>{var e;return null===(e=oe())||void 0===e?void 0:e.config},le=e=>{var t;return null===(t=oe())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ee(JSON.stringify(n)),ee(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function pe(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function ge(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function me(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function ye(){const e=fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ve(){try{return"object"===typeof indexedDB}catch(e){return!1}}function we(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="FirebaseError";class Ee extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=_e,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?Ie(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new Ee(r,o,n);return a}}function Ie(e,t){return e.replace(Te,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const Te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ce(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ke(n)&&ke(s)){if(!Ce(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ke(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ne(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Re(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t){const n=new Oe(e,t);return n.subscribe.bind(n)}class Oe{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=Pe(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Le),void 0===r.error&&(r.error=Le),void 0===r.complete&&(r.complete=Le);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Pe(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Le(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(e){return e&&e._delegate?e._delegate:e}class xe{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new he;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(je(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ve(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Ve(e){return e===Ue?void 0:e}function je(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=[];var qe;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(qe||(qe={}));const $e={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},Ke=qe.INFO,He={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},Ge=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=He[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class We{constructor(e){this.name=e,this._logLevel=Ke,this._logHandler=Ge,this._userLogHandler=null,ze.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?$e[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const Qe=(e,t)=>t.some((t=>e instanceof t));let Je,Xe;function Ye(){return Je||(Je=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ze(){return Xe||(Xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const et=new WeakMap,tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap;function st(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ht(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&et.set(t,e)})).catch((()=>{})),it.set(t,e),t}function ot(e){if(tt.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));tt.set(e,t)}let at={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return tt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||nt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ct(e){at=e(at)}function ut(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Ze().includes(e)?function(...t){return e.apply(dt(this),t),ht(et.get(this))}:function(...t){return ht(e.apply(dt(this),t))}:function(t,...n){const r=e.call(dt(this),t,...n);return nt.set(r,t.sort?t.sort():[t]),ht(r)}}function lt(e){return"function"===typeof e?ut(e):(e instanceof IDBTransaction&&ot(e),Qe(e,Ye())?new Proxy(e,at):e)}function ht(e){if(e instanceof IDBRequest)return st(e);if(rt.has(e))return rt.get(e);const t=lt(e);return t!==e&&(rt.set(e,t),it.set(t,e)),t}const dt=e=>it.get(e);function ft(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ht(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ht(o.result),e.oldVersion,e.newVersion,ht(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const pt=["get","getKey","getAll","getAllKeys","count"],gt=["put","add","delete","clear"],mt=new Map;function yt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(mt.get(t))return mt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!pt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return mt.set(t,s),s}ct((e=>({...e,get:(t,n,r)=>yt(t,n)||e.get(t,n,r),has:(t,n)=>!!yt(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(wt(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function wt(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const _t="@firebase/app",Et="0.9.15",bt=new We("@firebase/app"),It="@firebase/app-compat",Tt="@firebase/analytics-compat",St="@firebase/analytics",Ct="@firebase/app-check-compat",kt="@firebase/app-check",At="@firebase/auth",Nt="@firebase/auth-compat",Rt="@firebase/database",Dt="@firebase/database-compat",Ot="@firebase/functions",Pt="@firebase/functions-compat",Lt="@firebase/installations",Mt="@firebase/installations-compat",xt="@firebase/messaging",Ut="@firebase/messaging-compat",Ft="@firebase/performance",Vt="@firebase/performance-compat",jt="@firebase/remote-config",Bt="@firebase/remote-config-compat",zt="@firebase/storage",qt="@firebase/storage-compat",$t="@firebase/firestore",Kt="@firebase/firestore-compat",Ht="firebase",Gt="10.1.0",Wt="[DEFAULT]",Qt={[_t]:"fire-core",[It]:"fire-core-compat",[St]:"fire-analytics",[Tt]:"fire-analytics-compat",[kt]:"fire-app-check",[Ct]:"fire-app-check-compat",[At]:"fire-auth",[Nt]:"fire-auth-compat",[Rt]:"fire-rtdb",[Dt]:"fire-rtdb-compat",[Ot]:"fire-fn",[Pt]:"fire-fn-compat",[Lt]:"fire-iid",[Mt]:"fire-iid-compat",[xt]:"fire-fcm",[Ut]:"fire-fcm-compat",[Ft]:"fire-perf",[Vt]:"fire-perf-compat",[jt]:"fire-rc",[Bt]:"fire-rc-compat",[zt]:"fire-gcs",[qt]:"fire-gcs-compat",[$t]:"fire-fst",[Kt]:"fire-fst-compat","fire-js":"fire-js",[Ht]:"fire-js-all"},Jt=new Map,Xt=new Map;function Yt(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zt(e){const t=e.name;if(Xt.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Xt.set(t,e);for(const n of Jt.values())Yt(n,e);return!0}function en(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new be("app","Firebase",tn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xe("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=Gt;function on(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:Wt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!==typeof i||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=ue()),!n)throw nn.create("no-options");const s=Jt.get(i);if(s){if(Ce(n,s.options)&&Ce(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new Be(i);for(const c of Xt.values())o.addComponent(c);const a=new rn(n,r,o);return Jt.set(i,a),a}function an(e=Wt){const t=Jt.get(e);if(!t&&e===Wt&&ue())return on();if(!t)throw nn.create("no-app",{appName:e});return t}function cn(e,t,n){var r;let i=null!==(r=Qt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void bt.warn(e.join(" "))}Zt(new xe(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="firebase-heartbeat-database",ln=1,hn="firebase-heartbeat-store";let dn=null;function fn(){return dn||(dn=ft(un,ln,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hn)}}}).catch((e=>{throw nn.create("idb-open",{originalErrorMessage:e.message})}))),dn}async function pn(e){try{const t=await fn(),n=await t.transaction(hn).objectStore(hn).get(mn(e));return n}catch(t){if(t instanceof Ee)bt.warn(t.message);else{const e=nn.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});bt.warn(e.message)}}}async function gn(e,t){try{const n=await fn(),r=n.transaction(hn,"readwrite"),i=r.objectStore(hn);await i.put(t,mn(e)),await r.done}catch(n){if(n instanceof Ee)bt.warn(n.message);else{const e=nn.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});bt.warn(e.message)}}}function mn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=1024,vn=2592e6;class wn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=_n();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=vn})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=_n(),{heartbeatsToSend:t,unsentEntries:n}=En(this._heartbeatsCache.heartbeats),r=ee(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _n(){const e=new Date;return e.toISOString().substring(0,10)}function En(e,t=yn){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),In(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),In(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ve()&&we().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await pn(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return gn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return gn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function In(e){return ee(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){Zt(new xe("platform-logger",(e=>new vt(e)),"PRIVATE")),Zt(new xe("heartbeat",(e=>new wn(e)),"PRIVATE")),cn(_t,Et,e),cn(_t,Et,"esm2017"),cn("fire-js","")}Tn("");function Sn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function Cn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kn=Cn,An=new be("auth","Firebase",Cn()),Nn=new We("@firebase/auth");function Rn(e,...t){Nn.logLevel<=qe.WARN&&Nn.warn(`Auth (${sn}): ${e}`,...t)}function Dn(e,...t){Nn.logLevel<=qe.ERROR&&Nn.error(`Auth (${sn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,...t){throw Mn(e,...t)}function Pn(e,...t){return Mn(e,...t)}function Ln(e,t,n){const r=Object.assign(Object.assign({},kn()),{[t]:n}),i=new be("auth","Firebase",r);return i.create(t,{appName:e.name})}function Mn(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return An.create(e,...t)}function xn(e,t,...n){if(!e)throw Mn(t,...n)}function Un(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dn(t),new Error(t)}function Fn(e,t){e||Un(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function jn(){return"http:"===Bn()||"https:"===Bn()}function Bn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(jn()||ge()||"connection"in navigator))||navigator.onLine}function qn(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=pe()||me()}get(){return zn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){Fn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},Wn=new $n(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Jn(e,t,n,r,i={}){return Xn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ae(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Hn.fetch()(Zn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Xn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gn),t);try{const t=new er(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw tr(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw tr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw tr(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw tr(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ln(e,a,o);On(e,a)}}catch(i){if(i instanceof Ee)throw i;On(e,"network-request-failed",{message:String(i)})}}async function Yn(e,t,n,r,i={}){const s=await Jn(e,t,n,r,i);return"mfaPendingCredential"in s&&On(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Zn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Kn(e.config,i):`${e.config.apiScheme}://${i}`}class er{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Pn(this.auth,"network-request-failed"))),Wn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function tr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(e,t){return Jn(e,"POST","/v1/accounts:delete",t)}async function rr(e,t){return Jn(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t=!1){const n=Me(e),r=await n.getIdToken(t),i=ar(r);xn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:ir(or(i.auth_time)),issuedAtTime:ir(or(i.iat)),expirationTime:ir(or(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function or(e){return 1e3*Number(e)}function ar(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Dn("JWT malformed, contained fewer than 3 sections"),null;try{const e=te(n);return e?JSON.parse(e):(Dn("Failed to decode base64 JWT payload"),null)}catch(i){return Dn("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function cr(e){const t=ar(e);return xn(t,"internal-error"),xn("undefined"!==typeof t.exp,"internal-error"),xn("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ee&&lr(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function lr({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ur(e,rr(n,{idToken:r}));xn(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?mr(s.providerUserInfo):[],a=gr(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dr(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function pr(e){const t=Me(e);await fr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gr(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function mr(e){return e.map((e=>{var{providerId:t}=e,n=Sn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(e,t){const n=await Xn(e,{},(async()=>{const n=Ae({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Zn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Hn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xn(e.idToken,"internal-error"),xn("undefined"!==typeof e.idToken,"internal-error"),xn("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):cr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return xn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await yr(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new vr;return n&&(xn("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(xn("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(xn("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return Un("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t){xn("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class _r{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return xn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sr(this,e)}reload(){return pr(this)}_assign(e){this!==e&&(xn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){xn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await fr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,nr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:b}=t;xn(v&&b,e,"internal-error");const I=vr.fromJSON(this.name,b);xn("string"===typeof v,e,"internal-error"),wr(l,e.name),wr(h,e.name),xn("boolean"===typeof w,e,"internal-error"),xn("boolean"===typeof _,e,"internal-error"),wr(d,e.name),wr(f,e.name),wr(p,e.name),wr(g,e.name),wr(m,e.name),wr(y,e.name);const T=new _r({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new vr;r.updateFromServerResponse(t);const i=new _r({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await fr(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map;function br(e){Fn(e instanceof Function,"Expected a class definition");let t=Er.get(e);return t?(Fn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Er.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ir.type="NONE";const Tr=Ir;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t,n){return`firebase:${e}:${t}:${n}`}class Cr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Sr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Sr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Cr(br(Tr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||br(Tr);const s=Sr(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=_r._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new Cr(i,e,n)):new Cr(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ar(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pr(t))return"Blackberry";if(Lr(t))return"Webos";if(Nr(t))return"Safari";if((t.includes("chrome/")||Rr(t))&&!t.includes("edge/"))return"Chrome";if(Or(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Ar(e=fe()){return/firefox\//i.test(e)}function Nr(e=fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rr(e=fe()){return/crios\//i.test(e)}function Dr(e=fe()){return/iemobile/i.test(e)}function Or(e=fe()){return/android/i.test(e)}function Pr(e=fe()){return/blackberry/i.test(e)}function Lr(e=fe()){return/webos/i.test(e)}function Mr(e=fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xr(e=fe()){var t;return Mr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ur(){return ye()&&10===document.documentMode}function Fr(e=fe()){return Mr(e)||Or(e)||Lr(e)||Pr(e)||/windows phone/i.test(e)||Dr(e)}function Vr(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t=[]){let n;switch(e){case"Browser":n=kr(fe());break;case"Worker":n=`${kr(fe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${sn}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(e,t){return Jn(e,"GET","/v2/recaptchaConfig",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){return void 0!==e&&void 0!==e.enterprise}class qr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Kr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Pn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",$r().appendChild(r)}))}function Hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Gr="https://www.google.com/recaptcha/enterprise.js?render=",Wr="recaptcha-enterprise",Qr="NO_RECAPTCHA";class Jr{constructor(e){this.type=Wr,this.auth=ei(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Br(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new qr(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;zr(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Qr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&zr(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Kr(Gr+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Xr(e,t,n,r=!1){const i=new Jr(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ti(this),this.idTokenSubscription=new ti(this),this.beforeStateQueue=new Yr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=An,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return xn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fr(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Me(e):null;return t&&xn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(br(e))}))}async initializeRecaptchaConfig(){const e=await Br(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new qr(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Jr(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new be("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;xn(t,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return xn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&Rn(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function ei(e){return Me(e)}class ti{constructor(e){this.auth=e,this.observer=null,this.addObserver=De((e=>this.observer=e))}get next(){return xn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t){const n=en(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Ce(r,null!==t&&void 0!==t?t:{}))return e;On(e,"already-initialized")}const r=n.initialize({options:t});return r}function ri(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(br);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function ii(e,t,n){const r=ei(e);xn(r._canInitEmulator,r,"emulator-config-failed"),xn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=si(t),{host:o,port:a}=oi(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ci()}function si(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function oi(e){const t=si(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ai(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ai(t)}}}function ai(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ci(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,t){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e,t){return Jn(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hi(e,t){return Yn(e,"POST","/v1/accounts:signInWithPassword",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function di(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Qn(e,t))}async function fi(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ui{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new pi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Xr(e,n,"signInWithPassword");return hi(e,t)}return hi(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Xr(e,n,"signInWithPassword");return hi(e,t)}return Promise.reject(t)}));case"emailLink":return di(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return li(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fi(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e,t){return Yn(e,"POST","/v1/accounts:signInWithIdp",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="http://localhost";class yi extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Sn(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new yi(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return gi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gi(e,t)}buildRequest(){const e={requestUri:mi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Ae(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(e,t){return Jn(e,"POST","/v1/accounts:sendVerificationCode",Qn(e,t))}async function wi(e,t){return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Qn(e,t))}async function _i(e,t){const n=await Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Qn(e,t));if(n.temporaryProof)throw tr(e,"account-exists-with-different-credential",n);return n}const Ei={["USER_NOT_FOUND"]:"user-not-found"};async function bi(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Qn(e,n),Ei)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends ui{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ii({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ii({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return wi(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _i(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bi(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ii({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Si(e){const t=Ne(Re(e))["link"],n=t?Ne(Re(t))["deep_link_id"]:null,r=Ne(Re(e))["deep_link_id"],i=r?Ne(Re(r))["link"]:null;return i||r||n||t||e}class Ci{constructor(e){var t,n,r,i,s,o;const a=Ne(Re(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=Ti(null!==(r=a["mode"])&&void 0!==r?r:null);xn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Si(e);try{return new Ci(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,t){return pi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ci.parseLink(t);return xn(n,"argument-error"),pi._fromEmailAndCode(e,n.code,n.tenantId)}}ki.PROVIDER_ID="password",ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri extends Ni{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch(t){return null}}}Ri.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ri.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yi._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Di.credential(t,n)}catch(r){return null}}}Di.GOOGLE_SIGN_IN_METHOD="google.com",Di.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi extends Ni{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oi.credential(e.oauthAccessToken)}catch(t){return null}}}Oi.GITHUB_SIGN_IN_METHOD="github.com",Oi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi extends Ni{constructor(){super("twitter.com")}static credential(e,t){return yi._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pi.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Li(e,t){return Yn(e,"POST","/v1/accounts:signUp",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi.TWITTER_SIGN_IN_METHOD="twitter.com",Pi.PROVIDER_ID="twitter.com";class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await _r._fromIdTokenResponse(e,n,r),s=xi(n),o=new Mi({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=xi(n);return new Mi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function xi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui extends Ee{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ui.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ui(e,t,n,r)}}function Fi(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ui._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(e,t,n=!1){const r=await ur(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mi._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ji(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ur(e,Fi(r,i,t,e),n);xn(s.idToken,r,"internal-error");const o=ar(s.idToken);xn(o,r,"internal-error");const{sub:a}=o;return xn(e.uid===a,r,"user-mismatch"),Mi._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&On(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t,n=!1){const r="signIn",i=await Fi(e,r,t),s=await Mi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function zi(e,t){return Bi(ei(e),t)}async function qi(e,t,n){var r;const i=ei(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Xr(i,s,"signUpPassword");o=Li(i,e)}else o=Li(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Xr(i,s,"signUpPassword");return Li(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await Mi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function $i(e,t,n){return zi(Me(e),ki.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ki(e,t){return Jn(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Me(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await ur(r,Ki(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Gi(e,t,n,r){return Me(e).onIdTokenChanged(t,n,r)}function Wi(e,t,n){return Me(e).beforeAuthStateChanged(t,n)}function Qi(e){return Me(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ji(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:start",Qn(e,t))}function Xi(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Qn(e,t))}function Yi(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:start",Qn(e,t))}function Zi(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Qn(e,t))}new WeakMap;const es="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){const e=fe();return Nr(e)||Mr(e)}const rs=1e3,is=10;class ss extends ts{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ns()&&Vr(),this.fallbackToPolling=Fr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ur()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,is):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),rs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ss.type="LOCAL";const os=ss;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends ts{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}as.type="SESSION";const cs=as;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ls(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await us(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hs(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.receivers=[];class ds{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=hs("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){return window}function ps(e){fs().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){return"undefined"!==typeof fs()["WorkerGlobalScope"]&&"function"===typeof fs()["importScripts"]}async function ms(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ys(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function vs(){return gs()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="firebaseLocalStorageDb",_s=1,Es="firebaseLocalStorage",bs="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ts(e,t){return e.transaction([Es],t?"readwrite":"readonly").objectStore(Es)}function Ss(){const e=indexedDB.deleteDatabase(ws);return new Is(e).toPromise()}function Cs(){const e=indexedDB.open(ws,_s);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Es,{keyPath:bs})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Es)?t(n):(n.close(),await Ss(),t(await Cs()))}))}))}async function ks(e,t,n){const r=Ts(e,!0).put({[bs]:t,value:n});return new Is(r).toPromise()}async function As(e,t){const n=Ts(e,!1).get(t),r=await new Is(n).toPromise();return void 0===r?null:r.value}function Ns(e,t){const n=Ts(e,!0).delete(t);return new Is(n).toPromise()}const Rs=800,Ds=3;class Os{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Cs()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ds)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(vs()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ms(),!this.activeServiceWorker)return;this.sender=new ds(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ys()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await ks(e,es,"1"),await Ns(e,es),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ks(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>As(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ns(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ts(e,!1).getAll();return new Is(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Rs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Os.type="LOCAL";const Ps=Os;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e,t){return Jn(e,"POST","/v2/accounts/mfaSignIn:start",Qn(e,t))}function Ms(e,t){return Jn(e,"POST","/v2/accounts/mfaSignIn:finalize",Qn(e,t))}function xs(e,t){return Jn(e,"POST","/v2/accounts/mfaSignIn:finalize",Qn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Hr("rcb"),new $n(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Us="recaptcha";async function Fs(e,t,n){var r;const i=await n.verify();try{let s;if(xn("string"===typeof i,e,"argument-error"),xn(n.type===Us,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){xn("enroll"===t.type,e,"internal-error");const n=await Ji(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{xn("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;xn(n,e,"missing-multi-factor-info");const o=await Ls(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await vi(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e){this.providerId=Vs.PROVIDER_ID,this.auth=ei(e)}verifyPhoneNumber(e,t){return Fs(this.auth,e,Me(t))}static credential(e,t){return Ii._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Vs.credentialFromTaggedObject(t)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ii._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function js(e,t){return t?br(t):(xn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs.PROVIDER_ID="phone",Vs.PHONE_SIGN_IN_METHOD="phone";class Bs extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zs(e){return Bi(e.auth,new Bs(e),e.bypassAuthState)}function qs(e){const{auth:t,user:n}=e;return xn(n,t,"internal-error"),ji(n,new Bs(e),e.bypassAuthState)}async function $s(e){const{auth:t,user:n}=e;return xn(n,t,"internal-error"),Vi(n,new Bs(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zs;case"linkViaPopup":case"linkViaRedirect":return $s;case"reauthViaPopup":case"reauthViaRedirect":return qs;default:On(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new $n(2e3,1e4);class Gs extends Ks{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xn(e,this.auth,"internal-error"),e}async onExecution(){Fn(1===this.filter.length,"Popup operations only handle one event");const e=hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Pn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Hs.get())};e()}}Gs.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ws="pendingRedirect",Qs=new Map;class Js extends Ks{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const t=await Xs(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Xs(e,t){const n=eo(t),r=Zs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Ys(e,t){Qs.set(e._key(),t)}function Zs(e){return br(e._redirectPersistence)}function eo(e){return Sr(Ws,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e,t,n=!1){const r=ei(e),i=js(r,t),s=new Js(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const no=6e5;class ro{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!oo(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!so(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Pn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=no&&this.cachedEventUids.clear(),this.cachedEventUids.has(io(e))}saveEventToCache(e){this.cachedEventUids.add(io(e)),this.lastProcessedEventTime=Date.now()}}function io(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function so({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function oo(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return so(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e,t={}){return Jn(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uo=/^https?/;async function lo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ao(e);for(const r of t)try{if(ho(r))return}catch(n){}On(e,"unauthorized-domain")}function ho(e){const t=Vn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!uo.test(n))return!1;if(co.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new $n(3e4,6e4);function po(){const e=fs().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function go(e){return new Promise(((t,n)=>{var r,i,s;function o(){po(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{po(),n(Pn(e,"network-request-failed"))},timeout:fo.get()})}if(null===(i=null===(r=fs().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=fs().gapi)||void 0===s?void 0:s.load)){const t=Hr("iframefcb");return fs()[t]=()=>{gapi.load?o():n(Pn(e,"network-request-failed"))},Kr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw mo=null,e}))}let mo=null;function yo(e){return mo=mo||go(e),mo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new $n(5e3,15e3),wo="__/auth/iframe",_o="emulator/auth/iframe",Eo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Io(e){const t=e.config;xn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Kn(t,_o):`https://${e.config.authDomain}/${wo}`,r={apiKey:t.apiKey,appName:e.name,v:sn},i=bo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ae(r).slice(1)}`}async function To(e){const t=await yo(e),n=fs().gapi;return xn(n,e,"internal-error"),t.open({where:document.body,url:Io(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eo,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Pn(e,"network-request-failed"),s=fs().setTimeout((()=>{r(i)}),vo.get());function o(){fs().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Co=500,ko=600,Ao="_blank",No="http://localhost";class Ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Do(e,t,n,r=Co,i=ko){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},So),{width:r.toString(),height:i.toString(),top:s,left:o}),u=fe().toLowerCase();n&&(a=Rr(u)?Ao:n),Ar(u)&&(t=t||No,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(xr(u)&&"_self"!==a)return Oo(t||"",a),new Ro(null);const h=window.open(t||"",a,l);xn(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Ro(h)}function Oo(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="__/auth/handler",Lo="emulator/auth/handler",Mo=encodeURIComponent("fac");async function xo(e,t,n,r,i,s){xn(e.config.authDomain,e,"auth-domain-config-required"),xn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:sn,eventId:i};if(t instanceof Ai){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Se(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ni){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${Mo}=${encodeURIComponent(c)}`:"";return`${Uo(e)}?${Ae(a).slice(1)}${u}`}function Uo({config:e}){return e.emulator?Kn(e,Lo):`https://${e.authDomain}/${Po}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="webStorageSupport";class Vo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cs,this._completeRedirectFn=to,this._overrideRedirectResult=Ys}async _openPopup(e,t,n,r){var i;Fn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await xo(e,t,n,Vn(),r);return Do(e,s,hs())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await xo(e,t,n,Vn(),r);return ps(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await To(e),n=new ro(e);return t.register("authEvent",(t=>{xn(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Fo,{type:Fo},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Fo];void 0!==i&&t(!!i),On(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fr()||Nr()||Mr()}}const jo=Vo;class Bo{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Un("unexpected MultiFactorSessionType")}}}class zo extends Bo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zo(e)}_finalizeEnroll(e,t,n){return Xi(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ms(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qo{constructor(){}static assertion(e){return zo._fromCredential(e)}}qo.FACTOR_ID="phone";class $o{static assertionForEnrollment(e,t){return Ko._fromSecret(e,t)}static assertionForSignIn(e,t){return Ko._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;xn("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Yi(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ho._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}$o.FACTOR_ID="totp";class Ko extends Bo{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ko(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ko(t,e)}async _finalizeEnroll(e,t,n){return xn("undefined"!==typeof this.secret,e,"argument-error"),Zi(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){xn(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return xs(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ho{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ho(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Go(e)||Go(t))&&(r=!0),r&&(Go(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Go(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Go(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Wo="@firebase/auth",Qo="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yo(e){Zt(new xe("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;xn(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jr(e)},u=new Zr(r,i,s,c);return ri(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),Zt(new xe("auth-internal",(e=>{const t=ei(e.getProvider("auth").getImmediate());return(e=>new Jo(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Wo,Qo,Xo(e)),cn(Wo,Qo,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=300,ea=le("authIdTokenMaxAge")||Zo;let ta=null;const na=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ea)return;const i=null===n||void 0===n?void 0:n.token;ta!==i&&(ta=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ra(e=an()){const t=en(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ni(e,{popupRedirectResolver:jo,persistence:[Ps,os,cs]}),r=le("authTokenSyncURL");if(r){const e=na(r);Wi(n,e,(()=>e(n.currentUser))),Gi(n,(t=>e(t)))}const i=ae("auth");return i&&ii(n,`http://${i}`),n}Yo("Browser");var ia="firebase",sa="10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
cn(ia,sa,"app");var oa,aa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},ca={},ua=ua||{},la=aa||self;function ha(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function da(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function fa(e){return Object.prototype.hasOwnProperty.call(e,pa)&&e[pa]||(e[pa]=++ga)}var pa="closure_uid_"+(1e9*Math.random()>>>0),ga=0;function ma(e,t,n){return e.call.apply(e.bind,arguments)}function ya(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function va(e,t,n){return va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:ya,va.apply(null,arguments)}function wa(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _a(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Ea(){this.s=this.s,this.o=this.o}var ba=0;Ea.prototype.s=!1,Ea.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==ba)||fa(this)},Ea.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ia=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ta(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Sa(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(ha(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function Ca(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ca.prototype.h=function(){this.defaultPrevented=!0};var ka=function(){if(!la.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{la.addEventListener("test",(()=>{}),t),la.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function Aa(e){return/^[\s\xa0]*$/.test(e)}function Na(){var e=la.navigator;return e&&(e=e.userAgent)?e:""}function Ra(e){return-1!=Na().indexOf(e)}function Da(e){return Da[" "](e),e}function Oa(e,t){var n=vh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}Da[" "]=function(){};var Pa,La,Ma=Ra("Opera"),xa=Ra("Trident")||Ra("MSIE"),Ua=Ra("Edge"),Fa=Ua||xa,Va=Ra("Gecko")&&!(-1!=Na().toLowerCase().indexOf("webkit")&&!Ra("Edge"))&&!(Ra("Trident")||Ra("MSIE"))&&!Ra("Edge"),ja=-1!=Na().toLowerCase().indexOf("webkit")&&!Ra("Edge");function Ba(){var e=la.document;return e?e.documentMode:void 0}e:{var za="",qa=function(){var e=Na();return Va?/rv:([^\);]+)(\)|;)/.exec(e):Ua?/Edge\/([\d\.]+)/.exec(e):xa?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):ja?/WebKit\/(\S+)/.exec(e):Ma?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(qa&&(za=qa?qa[1]:""),xa){var $a=Ba();if(null!=$a&&$a>parseFloat(za)){Pa=String($a);break e}}Pa=za}if(la.document&&xa){var Ka=Ba();La=Ka||(parseInt(Pa,10)||void 0)}else La=void 0;var Ha=La;function Ga(e,t){if(Ca.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Va){e:{try{Da(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Wa[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ga.$.h.call(this)}}_a(Ga,Ca);var Wa={2:"touch",3:"pen",4:"mouse"};Ga.prototype.h=function(){Ga.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qa="closure_listenable_"+(1e6*Math.random()|0),Ja=0;function Xa(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ja,this.fa=this.ia=!1}function Ya(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Za(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ec(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function tc(e){const t={};for(const n in e)t[n]=e[n];return t}const nc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rc(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<nc.length;t++)n=nc[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ic(e){this.src=e,this.g={},this.h=0}function sc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ia(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ya(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oc(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ic.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=oc(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Xa(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ac="closure_lm_"+(1e6*Math.random()|0),cc={};function uc(e,t,n,r,i){if(r&&r.once)return dc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)uc(e,t[s],n,r,i);return null}return n=wc(n),e&&e[Qa]?e.O(t,n,da(r)?!!r.capture:!!r,i):lc(e,t,n,!1,r,i)}function lc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=da(i)?!!i.capture:!!i,a=yc(e);if(a||(e[ac]=a=new ic(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=hc(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ka||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(gc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function hc(){function e(n){return t.call(e.src,e.listener,n)}const t=mc;return e}function dc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)dc(e,t[s],n,r,i);return null}return n=wc(n),e&&e[Qa]?e.P(t,n,da(r)?!!r.capture:!!r,i):lc(e,t,n,!0,r,i)}function fc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)fc(e,t[s],n,r,i);else r=da(r)?!!r.capture:!!r,n=wc(n),e&&e[Qa]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=oc(s,n,r,i),-1<n&&(Ya(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=yc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oc(t,n,r,i)),(n=-1<e?t[e]:null)&&pc(n))}function pc(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Qa])sc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(gc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=yc(t))?(sc(n,e),0==n.h&&(n.src=null,t[ac]=null)):Ya(e)}}}function gc(e){return e in cc?cc[e]:cc[e]="on"+e}function mc(e,t){if(e.fa)e=!0;else{t=new Ga(t,this);var n=e.listener,r=e.la||e.src;e.ia&&pc(e),e=n.call(r,t)}return e}function yc(e){return e=e[ac],e instanceof ic?e:null}var vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wc(e){return"function"===typeof e?e:(e[vc]||(e[vc]=function(t){return e.handleEvent(t)}),e[vc])}function _c(){Ea.call(this),this.i=new ic(this),this.S=this,this.J=null}function Ec(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new Ca(t,e);else if(t instanceof Ca)t.target=t.target||e;else{var i=t;t=new Ca(r,e),rc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=bc(o,r,!0,t)&&i}if(o=t.g=e,i=bc(o,r,!0,t)&&i,i=bc(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=bc(o,r,!1,t)&&i}function bc(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&sc(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_a(_c,Ea),_c.prototype[Qa]=!0,_c.prototype.removeEventListener=function(e,t,n,r){fc(this,e,t,n,r)},_c.prototype.N=function(){if(_c.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ya(n[r]);delete t.g[e],t.h--}}this.J=null},_c.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},_c.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ic=la.JSON.stringify;class Tc{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Sc(){var e=Pc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Cc{constructor(){this.h=this.g=null}add(e,t){const n=kc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var kc=new Tc((()=>new Ac),(e=>e.reset()));class Ac{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Nc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Rc(e){la.setTimeout((()=>{throw e}),0)}let Dc,Oc=!1,Pc=new Cc,Lc=()=>{const e=la.Promise.resolve(void 0);Dc=()=>{e.then(Mc)}};var Mc=()=>{for(var e;e=Sc();){try{e.h.call(e.g)}catch(n){Rc(n)}var t=kc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Oc=!1};function xc(e,t){_c.call(this),this.h=e||1,this.g=t||la,this.j=va(this.qb,this),this.l=Date.now()}function Uc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Fc(e,t,n){if("function"===typeof e)n&&(e=va(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=va(e.handleEvent,e)}return 2147483647<Number(t)?-1:la.setTimeout(e,t||0)}function Vc(e){e.g=Fc((()=>{e.g=null,e.i&&(e.i=!1,Vc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_a(xc,_c),oa=xc.prototype,oa.ga=!1,oa.T=null,oa.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ec(this,"tick"),this.ga&&(Uc(this),this.start()))}},oa.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},oa.N=function(){xc.$.N.call(this),Uc(this),delete this.g};class jc extends Ea{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vc(this)}N(){super.N(),this.g&&(la.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bc(e){Ea.call(this),this.h=e,this.g={}}_a(Bc,Ea);var zc=[];function qc(e,t,n,r){Array.isArray(n)||(n&&(zc[0]=n.toString()),n=zc);for(var i=0;i<n.length;i++){var s=uc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function $c(e){Za(e.g,(function(e,t){this.g.hasOwnProperty(t)&&pc(e)}),e),e.g={}}function Kc(){this.g=!0}function Hc(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Gc(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Wc(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Jc(e,n)+(r?" "+r:"")}))}function Qc(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Jc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ic(n)}catch(a){return t}}Bc.prototype.N=function(){Bc.$.N.call(this),$c(this)},Bc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kc.prototype.Ea=function(){this.g=!1},Kc.prototype.info=function(){};var Xc={},Yc=null;function Zc(){return Yc=Yc||new _c}function eu(e){Ca.call(this,Xc.Ta,e)}function tu(e){const t=Zc();Ec(t,new eu(t))}function nu(e,t){Ca.call(this,Xc.STAT_EVENT,e),this.stat=t}function ru(e){const t=Zc();Ec(t,new nu(t,e))}function iu(e,t){Ca.call(this,Xc.Ua,e),this.size=t}function su(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return la.setTimeout((function(){e()}),t)}Xc.Ta="serverreachability",_a(eu,Ca),Xc.STAT_EVENT="statevent",_a(nu,Ca),Xc.Ua="timingevent",_a(iu,Ca);var ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},au={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cu(){}function uu(e){return e.h||(e.h=e.i())}function lu(){}cu.prototype.h=null;var hu,du={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fu(){Ca.call(this,"d")}function pu(){Ca.call(this,"c")}function gu(){}function mu(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Bc(this),this.P=vu,e=Fa?125:void 0,this.V=new xc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yu}function yu(){this.i=null,this.g="",this.h=!1}_a(fu,Ca),_a(pu,Ca),_a(gu,cu),gu.prototype.g=function(){return new XMLHttpRequest},gu.prototype.i=function(){return{}},hu=new gu;var vu=45e3,wu={},_u={};function Eu(e,t,n){e.L=1,e.v=qu(Fu(t)),e.s=n,e.S=!0,bu(e,null)}function bu(e,t){e.G=Date.now(),Cu(e),e.A=Fu(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),nl(n.i,"t",r),e.C=0,n=e.l.J,e.h=new yu,e.g=ah(e.l,n?t:null,!e.s),0<e.O&&(e.M=new jc(va(e.Pa,e,e.g),e.O)),qc(e.U,e.g,"readystatechange",e.nb),t=e.I?tc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),tu(),Hc(e.j,e.u,e.A,e.m,e.W,e.s)}function Iu(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Tu(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Su(e,n),r==_u){4==t&&(e.o=4,ru(14),i=!1),Wc(e.j,e.m,null,"[Incomplete Response]");break}if(r==wu){e.o=4,ru(15),Wc(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Wc(e.j,e.m,r,null),Du(e,r)}Iu(e)&&r!=_u&&r!=wu&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ru(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zl(t),t.M=!0,ru(11))):(Wc(e.j,e.m,n,"[Invalid Chunked Response]"),Ru(e),Nu(e))}function Su(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?_u:(n=Number(t.substring(n,r)),isNaN(n)?wu:(r+=1,r+n>t.length?_u:(t=t.slice(r,r+n),e.C=r+n,t)))}function Cu(e){e.Y=Date.now()+e.P,ku(e,e.P)}function ku(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=su(va(e.lb,e),t)}function Au(e){e.B&&(la.clearTimeout(e.B),e.B=null)}function Nu(e){0==e.l.H||e.J||nh(e.l,e)}function Ru(e){Au(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Uc(e.V),$c(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Du(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ll(n.i,e)))if(!e.K&&ll(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;th(n),$l(n)}Yl(n),ru(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=su(va(n.ib,n),6e3));if(1>=ul(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ih(n,11)}else if((e.K||n.g==e)&&th(n),!Aa(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(hl(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,zu(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=oh(r,r.J?r.pa:null,r.Y),o.K){dl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Au(a),Cu(a)),r.g=o}else Xl(r);0<n.j.length&&Hl(n)}else"stop"!=u[0]&&"close"!=u[0]||ih(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ih(n,7):ql(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}tu(4)}catch(u){}}function Ou(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(ha(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pu(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(ha(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ha(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pu(e),r=Ou(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}oa=mu.prototype,oa.setTimeout=function(e){this.P=e},oa.nb=function(e){e=e.target;const t=this.M;t&&3==xl(e)?t.l():this.Pa(e)},oa.Pa=function(e){try{if(e==this.g)e:{const l=xl(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||Fa||this.g&&(this.h.h||this.g.ja()||Ul(this.g)))){this.J||4!=l||7==t||tu(8==t||0>=h?3:2),Au(this);var n=this.g.da();this.ca=n;t:if(Iu(this)){var r=Ul(this.g);e="";var i=r.length,s=4==xl(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ru(this),Nu(this);var o="";break t}this.h.i=new la.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Gc(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Aa(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ru(12),Ru(this),Nu(this);break e}Wc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Du(this,n)}this.S?(Tu(this,l,o),Fa&&this.i&&3==l&&(qc(this.U,this.V,"tick",this.mb),this.V.start())):(Wc(this.j,this.m,o,null),Du(this,o)),4==l&&Ru(this),this.i&&!this.J&&(4==l?nh(this.l,this):(this.i=!1,Cu(this)))}else Fl(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ru(12)):(this.o=0,ru(13)),Ru(this),Nu(this)}}}catch(l){}},oa.mb=function(){if(this.g){var e=xl(this.g),t=this.g.ja();this.C<t.length&&(Au(this),Tu(this,e,t),this.i&&4!=e&&Cu(this))}},oa.cancel=function(){this.J=!0,Ru(this)},oa.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qc(this.j,this.A),2!=this.L&&(tu(),ru(17)),Ru(this),this.o=2,Nu(this)):ku(this,this.Y-e)};var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Uu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Uu){this.h=e.h,Vu(this,e.j),this.s=e.s,this.g=e.g,ju(this,e.m),this.l=e.l;var t=e.i,n=new Yu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bu(this,n),this.o=e.o}else e&&(t=String(e).match(Mu))?(this.h=!1,Vu(this,t[1]||"",!0),this.s=$u(t[2]||""),this.g=$u(t[3]||"",!0),ju(this,t[4]),this.l=$u(t[5]||"",!0),Bu(this,t[6]||"",!0),this.o=$u(t[7]||"")):(this.h=!1,this.i=new Yu(null,this.h))}function Fu(e){return new Uu(e)}function Vu(e,t,n){e.j=n?$u(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ju(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bu(e,t,n){t instanceof Yu?(e.i=t,il(e.i,e.h)):(n||(t=Ku(t,Ju)),e.i=new Yu(t,e.h))}function zu(e,t,n){e.i.set(t,n)}function qu(e){return zu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $u(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ku(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Hu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Uu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ku(t,Gu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ku(t,Gu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ku(n,"/"==n.charAt(0)?Qu:Wu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ku(n,Xu)),e.join("")};var Gu=/[#\/\?@]/g,Wu=/[#\?:]/g,Qu=/[#\?]/g,Ju=/[#\?@]/g,Xu=/#/g;function Yu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zu(e){e.g||(e.g=new Map,e.h=0,e.i&&xu(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function el(e,t){Zu(e),t=rl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tl(e,t){return Zu(e),t=rl(e,t),e.g.has(t)}function nl(e,t,n){el(e,t),0<n.length&&(e.i=null,e.g.set(rl(e,t),Ta(n)),e.h+=n.length)}function rl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function il(e,t){t&&!e.j&&(Zu(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(el(this,t),nl(this,n,e))}),e)),e.j=t}oa=Yu.prototype,oa.add=function(e,t){Zu(this),this.i=null,e=rl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},oa.forEach=function(e,t){Zu(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},oa.ta=function(){Zu(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},oa.Z=function(e){Zu(this);let t=[];if("string"===typeof e)tl(this,e)&&(t=t.concat(this.g.get(rl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},oa.set=function(e,t){return Zu(this),this.i=null,e=rl(this,e),tl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},oa.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},oa.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var sl=class{constructor(e,t){this.g=e,this.map=t}};function ol(e){this.l=e||al,la.PerformanceNavigationTiming?(e=la.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(la.g&&la.g.Ka&&la.g.Ka()&&la.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var al=10;function cl(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ul(e){return e.h?1:e.g?e.g.size:0}function ll(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function hl(e,t){e.g?e.g.add(t):e.h=t}function dl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function fl(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ta(e.i)}ol.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var pl=class{stringify(e){return la.JSON.stringify(e,void 0)}parse(e){return la.JSON.parse(e,void 0)}};function gl(){this.g=new pl}function ml(e,t,n){const r=n||"";try{Lu(e,(function(e,n){let i=e;da(e)&&(i=Ic(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function yl(e,t){const n=new Kc;if(la.Image){const r=new Image;r.onload=wa(vl,n,r,"TestLoadImage: loaded",!0,t),r.onerror=wa(vl,n,r,"TestLoadImage: error",!1,t),r.onabort=wa(vl,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=wa(vl,n,r,"TestLoadImage: timeout",!1,t),la.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function vl(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function wl(e){this.l=e.fc||null,this.j=e.ob||!1}function _l(e,t){_c.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=El,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_a(wl,cu),wl.prototype.g=function(){return new _l(this.l,this.j)},wl.prototype.i=function(e){return function(){return e}}({}),_a(_l,_c);var El=0;function bl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Il(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Tl(e)}function Tl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}oa=_l.prototype,oa.open=function(e,t){if(this.readyState!=El)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Tl(this)},oa.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||la).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},oa.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Il(this)),this.readyState=El},oa.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Tl(this)),this.g&&(this.readyState=3,Tl(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof la.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},oa.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Il(this):Tl(this),3==this.readyState&&bl(this)}},oa.Za=function(e){this.g&&(this.response=this.responseText=e,Il(this))},oa.Ya=function(e){this.g&&(this.response=e,Il(this))},oa.ka=function(){this.g&&Il(this)},oa.setRequestHeader=function(e,t){this.v.append(e,t)},oa.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},oa.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Sl=la.JSON.parse;function Cl(e){_c.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kl,this.L=this.M=!1}_a(Cl,_c);var kl="",Al=/^https?$/i,Nl=["POST","PUT"];function Rl(e){return xa&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ol(e),Ll(e)}function Ol(e){e.F||(e.F=!0,Ec(e,"complete"),Ec(e,"error"))}function Pl(e){if(e.h&&"undefined"!=typeof ua&&(!e.C[1]||4!=xl(e)||2!=e.da()))if(e.v&&4==xl(e))Fc(e.La,0,e);else if(Ec(e,"readystatechange"),4==xl(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Mu)[1]||null;!i&&la.self&&la.self.location&&(i=la.self.location.protocol.slice(0,-1)),r=!Al.test(i?i.toLowerCase():"")}n=r}if(n)Ec(e,"complete"),Ec(e,"success");else{e.m=6;try{var s=2<xl(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Ol(e)}}finally{Ll(e)}}}function Ll(e,t){if(e.g){Ml(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ec(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Ml(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(la.clearTimeout(e.A),e.A=null)}function xl(e){return e.g?e.g.readyState:0}function Ul(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case kl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Wh){return null}}function Fl(e){const t={};e=(e.g&&2<=xl(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(Aa(e[r]))continue;var n=Nc(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ec(t,(function(e){return e.join(", ")}))}function Vl(e){let t="";return Za(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function jl(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Vl(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):zu(e,t,n))}function Bl(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zl(e){this.Ga=0,this.j=[],this.l=new Kc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bl("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bl("baseRetryDelayMs",5e3,e),this.hb=Bl("retryDelaySeedMs",1e4,e),this.eb=Bl("forwardChannelMaxRetries",2,e),this.xa=Bl("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ol(e&&e.concurrentRequestLimit),this.Ja=new gl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ql(e){if(Kl(e),3==e.H){var t=e.W++,n=Fu(e.I);if(zu(n,"SID",e.K),zu(n,"RID",t),zu(n,"TYPE","terminate"),Ql(e,n),t=new mu(e,e.l,t),t.L=2,t.v=qu(Fu(n)),n=!1,la.navigator&&la.navigator.sendBeacon)try{n=la.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&la.Image&&((new Image).src=t.v,n=!0),n||(t.g=ah(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Cu(t)}sh(e)}function $l(e){e.g&&(Zl(e),e.g.cancel(),e.g=null)}function Kl(e){$l(e),e.u&&(la.clearTimeout(e.u),e.u=null),th(e),e.i.cancel(),e.m&&("number"===typeof e.m&&la.clearTimeout(e.m),e.m=null)}function Hl(e){if(!cl(e.i)&&!e.m){e.m=!0;var t=e.Na;Dc||Lc(),Oc||(Dc(),Oc=!0),Pc.add(t,e),e.C=0}}function Gl(e,t){return!(ul(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=su(va(e.Na,e,t),rh(e,e.C)),e.C++,!0))}function Wl(e,t){var n;n=t?t.m:e.W++;const r=Fu(e.I);zu(r,"SID",e.K),zu(r,"RID",n),zu(r,"AID",e.V),Ql(e,r),e.o&&e.s&&jl(r,e.o,e.s),n=new mu(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Jl(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),hl(e.i,n),Eu(n,r,t)}function Ql(e,t){e.na&&Za(e.na,(function(e,n){zu(t,n,e)})),e.h&&Lu({},(function(e,n){zu(t,n,e)}))}function Jl(e,t,n){n=Math.min(e.j.length,n);var r=e.h?va(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{ml(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Xl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Dc||Lc(),Oc||(Dc(),Oc=!0),Pc.add(t,e),e.A=0}}function Yl(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=su(va(e.Ma,e),rh(e,e.A)),e.A++,!0)}function Zl(e){null!=e.B&&(la.clearTimeout(e.B),e.B=null)}function eh(e){e.g=new mu(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Fu(e.wa);zu(t,"RID","rpc"),zu(t,"SID",e.K),zu(t,"AID",e.V),zu(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&zu(t,"TO",e.qa),zu(t,"TYPE","xmlhttp"),Ql(e,t),e.o&&e.s&&jl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qu(Fu(t)),n.s=null,n.S=!0,bu(n,e)}function th(e){null!=e.v&&(la.clearTimeout(e.v),e.v=null)}function nh(e,t){var n=null;if(e.g==t){th(e),Zl(e),e.g=null;var r=2}else{if(!ll(e.i,t))return;n=t.F,dl(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Zc(),Ec(r,new iu(r,n)),Hl(e)}else Xl(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Gl(e,t)||2==r&&Yl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ih(e,5);break;case 4:ih(e,10);break;case 3:ih(e,6);break;default:ih(e,2)}}function rh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ih(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=va(e.pb,e);n||(n=new Uu("//www.google.com/images/cleardot.gif"),la.location&&"http"==la.location.protocol||Vu(n,"https"),qu(n)),yl(n.toString(),r)}else ru(2);e.H=0,e.h&&e.h.za(t),sh(e),Kl(e)}function sh(e){if(e.H=0,e.ma=[],e.h){const t=fl(e.i);0==t.length&&0==e.j.length||(Sa(e.ma,t),Sa(e.ma,e.j),e.i.i.length=0,Ta(e.j),e.j.length=0),e.h.ya()}}function oh(e,t,n){var r=n instanceof Uu?Fu(n):new Uu(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ju(r,r.m);else{var i=la.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Uu(null);r&&Vu(s,r),t&&(s.g=t),i&&ju(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&zu(r,n,t),zu(r,"VER",e.ra),Ql(e,r),r}function ah(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Cl(new wl({ob:!0})):new Cl(e.va),t.Oa(e.J),t}function ch(){}function uh(){if(xa&&!(10<=Number(Ha)))throw Error("Environmental error: no available transport.")}function lh(e,t){_c.call(this),this.g=new zl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Aa(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Aa(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new fh(this)}function hh(e){fu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dh(){pu.call(this),this.status=1}function fh(e){this.g=e}function ph(){this.blockSize=-1}function gh(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function mh(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function yh(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}oa=Cl.prototype,oa.Oa=function(e){this.M=e},oa.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hu.g(),this.C=this.u?uu(this.u):uu(hu),this.g.onreadystatechange=va(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Dl(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=la.FormData&&e instanceof la.FormData,!(0<=Ia(Nl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ml(this),0<this.B&&((this.L=Rl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=va(this.ua,this)):this.A=Fc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dl(this,s)}},oa.ua=function(){"undefined"!=typeof ua&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ec(this,"timeout"),this.abort(8))},oa.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ec(this,"complete"),Ec(this,"abort"),Ll(this))},oa.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ll(this,!0)),Cl.$.N.call(this)},oa.La=function(){this.s||(this.G||this.v||this.l?Pl(this):this.kb())},oa.kb=function(){Pl(this)},oa.isActive=function(){return!!this.g},oa.da=function(){try{return 2<xl(this)?this.g.status:-1}catch(e){return-1}},oa.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},oa.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Sl(t)}},oa.Ia=function(){return this.m},oa.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},oa=zl.prototype,oa.ra=8,oa.H=1,oa.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new mu(this,this.l,e);let s=this.s;if(this.U&&(s?(s=tc(s),rc(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jl(this,i,t),n=Fu(this.I),zu(n,"RID",e),zu(n,"CVER",22),this.F&&zu(n,"X-HTTP-Session-Id",this.F),Ql(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Vl(s)))+"&"+t:this.o&&jl(n,this.o,s)),hl(this.i,i),this.bb&&zu(n,"TYPE","init"),this.P?(zu(n,"$req",t),zu(n,"SID","null"),i.aa=!0,Eu(i,n,null)):Eu(i,n,t),this.H=2}}else 3==this.H&&(e?Wl(this,e):0==this.j.length||cl(this.i)||Wl(this))},oa.Ma=function(){if(this.u=null,eh(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=su(va(this.jb,this),e)}},oa.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ru(10),$l(this),eh(this))},oa.ib=function(){null!=this.v&&(this.v=null,$l(this),Yl(this),ru(19))},oa.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ru(2)):(this.l.info("Failed to ping google.com"),ru(1))},oa.isActive=function(){return!!this.h&&this.h.isActive(this)},oa=ch.prototype,oa.Ba=function(){},oa.Aa=function(){},oa.za=function(){},oa.ya=function(){},oa.isActive=function(){return!0},oa.Va=function(){},uh.prototype.g=function(e,t){return new lh(e,t)},_a(lh,_c),lh.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ru(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=oh(e,null,e.Y),Hl(e)},lh.prototype.close=function(){ql(this.g)},lh.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ic(e),e=n);t.j.push(new sl(t.fb++,e)),3==t.H&&Hl(t)},lh.prototype.N=function(){this.g.h=null,delete this.j,ql(this.g),delete this.g,lh.$.N.call(this)},_a(hh,fu),_a(dh,pu),_a(fh,ch),fh.prototype.Ba=function(){Ec(this.g,"a")},fh.prototype.Aa=function(e){Ec(this.g,new hh(e))},fh.prototype.za=function(e){Ec(this.g,new dh)},fh.prototype.ya=function(){Ec(this.g,"b")},_a(gh,ph),gh.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},gh.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)mh(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){mh(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){mh(this,r),i=0;break}}this.h=i,this.i+=t},gh.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var vh={};function wh(e){return-128<=e&&128>e?Oa(e,(function(e){return new yh([0|e],0>e?-1:0)})):new yh([0|e],0>e?-1:0)}function _h(e){if(isNaN(e)||!isFinite(e))return Ih;if(0>e)return Ah(_h(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=bh;return new yh(t,0)}function Eh(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Ah(Eh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_h(Math.pow(t,8)),r=Ih,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=_h(Math.pow(t,s)),r=r.R(s).add(_h(o))):(r=r.R(n),r=r.add(_h(o)))}return r}var bh=4294967296,Ih=wh(0),Th=wh(1),Sh=wh(16777216);function Ch(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function kh(e){return-1==e.h}function Ah(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new yh(n,~e.h).add(Th)}function Nh(e,t){return e.add(Ah(t))}function Rh(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Dh(e,t){this.g=e,this.h=t}function Oh(e,t){if(Ch(t))throw Error("division by zero");if(Ch(e))return new Dh(Ih,Ih);if(kh(e))return t=Oh(Ah(e),t),new Dh(Ah(t.g),Ah(t.h));if(kh(t))return t=Oh(e,Ah(t)),new Dh(Ah(t.g),t.h);if(30<e.g.length){if(kh(e)||kh(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Th,r=t;0>=r.X(e);)n=Ph(n),r=Ph(r);var i=Lh(n,1),s=Lh(r,1);for(r=Lh(r,2),n=Lh(n,2);!Ch(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Lh(r,1),n=Lh(n,1)}return t=Nh(e,i.R(t)),new Dh(i,t)}for(i=Ih;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_h(n),o=s.R(t);kh(o)||0<o.X(e);)n-=r,s=_h(n),o=s.R(t);Ch(s)&&(s=Th),i=i.add(s),e=Nh(e,o)}return new Dh(i,e)}function Ph(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new yh(n,e.h)}function Lh(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new yh(i,e.h)}oa=yh.prototype,oa.ea=function(){if(kh(this))return-Ah(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:bh+r)*t,t*=bh}return e},oa.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ch(this))return"0";if(kh(this))return"-"+Ah(this).toString(e);for(var t=_h(Math.pow(e,6)),n=this,r="";;){var i=Oh(n,t).g;n=Nh(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ch(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},oa.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},oa.X=function(e){return e=Nh(this,e),kh(e)?-1:Ch(e)?0:1},oa.abs=function(){return kh(this)?Ah(this):this},oa.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new yh(n,-2147483648&n[n.length-1]?-1:0)},oa.R=function(e){if(Ch(this)||Ch(e))return Ih;if(kh(this))return kh(e)?Ah(this).R(Ah(e)):Ah(Ah(this).R(e));if(kh(e))return Ah(this.R(Ah(e)));if(0>this.X(Sh)&&0>e.X(Sh))return _h(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Rh(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Rh(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Rh(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Rh(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new yh(n,0)},oa.gb=function(e){return Oh(this,e).h},oa.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new yh(n,this.h&e.h)},oa.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new yh(n,this.h|e.h)},oa.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new yh(n,this.h^e.h)},uh.prototype.createWebChannel=uh.prototype.g,lh.prototype.send=lh.prototype.u,lh.prototype.open=lh.prototype.m,lh.prototype.close=lh.prototype.close,ou.NO_ERROR=0,ou.TIMEOUT=8,ou.HTTP_ERROR=6,au.COMPLETE="complete",lu.EventType=du,du.OPEN="a",du.CLOSE="b",du.ERROR="c",du.MESSAGE="d",_c.prototype.listen=_c.prototype.O,Cl.prototype.listenOnce=Cl.prototype.P,Cl.prototype.getLastError=Cl.prototype.Sa,Cl.prototype.getLastErrorCode=Cl.prototype.Ia,Cl.prototype.getStatus=Cl.prototype.da,Cl.prototype.getResponseJson=Cl.prototype.Wa,Cl.prototype.getResponseText=Cl.prototype.ja,Cl.prototype.send=Cl.prototype.ha,Cl.prototype.setWithCredentials=Cl.prototype.Oa,gh.prototype.digest=gh.prototype.l,gh.prototype.reset=gh.prototype.reset,gh.prototype.update=gh.prototype.j,yh.prototype.add=yh.prototype.add,yh.prototype.multiply=yh.prototype.R,yh.prototype.modulo=yh.prototype.gb,yh.prototype.compare=yh.prototype.X,yh.prototype.toNumber=yh.prototype.ea,yh.prototype.toString=yh.prototype.toString,yh.prototype.getBits=yh.prototype.D,yh.fromNumber=_h,yh.fromString=Eh;var Mh=ca.createWebChannelTransport=function(){return new uh},xh=ca.getStatEventTarget=function(){return Zc()},Uh=ca.ErrorCode=ou,Fh=ca.EventType=au,Vh=ca.Event=Xc,jh=ca.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bh=ca.FetchXmlHttpFactory=wl,zh=ca.WebChannel=lu,qh=ca.XhrIo=Cl,$h=ca.Md5=gh,Kh=ca.Integer=yh;const Hh="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gh.UNAUTHENTICATED=new Gh(null),Gh.GOOGLE_CREDENTIALS=new Gh("google-credentials-uid"),Gh.FIRST_PARTY=new Gh("first-party-uid"),Gh.MOCK_USER=new Gh("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wh="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new We("@firebase/firestore");function Jh(){return Qh.logLevel}function Xh(e,...t){if(Qh.logLevel<=qe.DEBUG){const n=t.map(ed);Qh.debug(`Firestore (${Wh}): ${e}`,...n)}}function Yh(e,...t){if(Qh.logLevel<=qe.ERROR){const n=t.map(ed);Qh.error(`Firestore (${Wh}): ${e}`,...n)}}function Zh(e,...t){if(Qh.logLevel<=qe.WARN){const n=t.map(ed);Qh.warn(`Firestore (${Wh}): ${e}`,...n)}}function ed(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e="Unexpected state"){const t=`FIRESTORE (${Wh}) INTERNAL ASSERTION FAILED: `+e;throw Yh(t),new Error(t)}function nd(e,t){e||td()}function rd(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sd extends Ee{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Gh.UNAUTHENTICATED)))}shutdown(){}}class ud{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ld{constructor(e){this.t=e,this.currentUser=Gh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new od;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new od,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Xh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Xh("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new od)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Xh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(nd("string"==typeof t.accessToken),new ad(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return nd(null===e||"string"==typeof e),new Gh(e)}}class hd{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Gh.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dd{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new hd(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Gh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pd{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Xh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Xh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Xh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Xh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(nd("string"==typeof e.token),this.R=e.token,new fd(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gd(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=gd(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function yd(e,t){return e<t?-1:e>t?1:0}function vd(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wd{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new sd(id.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new sd(id.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new sd(id.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new sd(id.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wd.fromMillis(Date.now())}static fromDate(e){return wd.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new wd(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yd(this.nanoseconds,e.nanoseconds):yd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _d(e)}static min(){return new _d(new wd(0,0))}static max(){return new _d(new wd(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,n){void 0===t?t=0:t>e.length&&td(),void 0===n?n=e.length-t:n>e.length-t&&td(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ed.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ed?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class bd extends Ed{construct(e,t,n){return new bd(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new sd(id.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new bd(t)}static emptyPath(){return new bd([])}}const Id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Td extends Ed{construct(e,t,n){return new Td(e,t,n)}static isValidIdentifier(e){return Id.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Td.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Td(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new sd(id.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new sd(id.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new sd(id.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new sd(id.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Td(t)}static emptyPath(){return new Td([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.path=e}static fromPath(e){return new Sd(bd.fromString(e))}static fromName(e){return new Sd(bd.fromString(e).popFirst(5))}static empty(){return new Sd(bd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===bd.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return bd.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Sd(new bd(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Cd.UNKNOWN_ID=-1;function kd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=_d.fromTimestamp(1e9===r?new wd(n+1,0):new wd(n,r));return new Nd(i,Sd.empty(),t)}function Ad(e){return new Nd(e.readTime,e.key,-1)}class Nd{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Nd(_d.min(),Sd.empty(),-1)}static max(){return new Nd(_d.max(),Sd.empty(),-1)}}function Rd(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Sd.comparator(e.documentKey,t.documentKey),0!==n?n:yd(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Od{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pd(e){if(e.code!==id.FAILED_PRECONDITION||e.message!==Dd)throw e;Xh("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&td(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ld(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ld?t:Ld.resolve(t)}catch(e){return Ld.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ld.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ld.reject(t)}static resolve(e){return new Ld(((t,n)=>{t(e)}))}static reject(e){return new Ld(((t,n)=>{n(e)}))}static waitFor(e){return new Ld(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ld.resolve(!1);for(const n of e)t=t.next((e=>e?Ld.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ld(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ld(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function Ud(e){return null==e}function Fd(e){return 0===e&&1/e==-1/0}function Vd(e){return"number"==typeof e&&Number.isInteger(e)&&!Fd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xd.ae=-1;const jd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zd=Bd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $d(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Kd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.comparator=e,this.root=t||Wd.EMPTY}insert(e,t){return new Hd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wd.BLACK,null,null))}remove(e){return new Hd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gd(this.root,e,this.comparator,!0)}}class Gd{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Wd.RED,this.left=null!=r?r:Wd.EMPTY,this.right=null!=i?i:Wd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Wd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Wd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Wd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw td();if(this.right.isRed())throw td();const e=this.left.check();if(e!==this.right.check())throw td();return e+(this.isRed()?0:1)}}Wd.EMPTY=null,Wd.RED=!0,Wd.BLACK=!1,Wd.EMPTY=new class{constructor(){this.size=0}get key(){throw td()}get value(){throw td()}get color(){throw td()}get left(){throw td()}get right(){throw td()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Wd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qd{constructor(e){this.comparator=e,this.data=new Hd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jd(this.data.getIterator())}getIteratorFrom(e){return new Jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Qd))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Qd(this.comparator);return t.data=e,t}}class Jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xd{constructor(e){this.fields=e,e.sort(Td.comparator)}static empty(){return new Xd([])}unionWith(e){let t=new Qd(Td.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Xd(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vd(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zd{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Yd("Invalid base64 string: "+e):e}}(e);return new Zd(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Zd(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zd.EMPTY_BYTE_STRING=new Zd("");const ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tf(e){if(nd(!!e),"string"==typeof e){let t=0;const n=ef.exec(e);if(nd(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nf(e.seconds),nanos:nf(e.nanos)}}function nf(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rf(e){return"string"==typeof e?Zd.fromBase64String(e):Zd.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function of(e){const t=e.mapValue.fields.__previous_value__;return sf(t)?of(t):t}function af(e){const t=tf(e.mapValue.fields.__local_write_time__.timestampValue);return new wd(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class uf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new uf("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof uf&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sf(e)?4:Tf(e)?9007199254740991:10:td()}function df(e,t){if(e===t)return!0;const n=hf(e);if(n!==hf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return af(e).isEqual(af(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=tf(e.timestampValue),r=tf(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return rf(e.bytesValue).isEqual(rf(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return nf(e.geoPointValue.latitude)===nf(t.geoPointValue.latitude)&&nf(e.geoPointValue.longitude)===nf(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nf(e.integerValue)===nf(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=nf(e.doubleValue),r=nf(t.doubleValue);return n===r?Fd(n)===Fd(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return vd(e.arrayValue.values||[],t.arrayValue.values||[],df);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(qd(n)!==qd(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!df(n[i],r[i])))return!1;return!0}(e,t);default:return td()}}function ff(e,t){return void 0!==(e.values||[]).find((e=>df(e,t)))}function pf(e,t){if(e===t)return 0;const n=hf(e),r=hf(t);if(n!==r)return yd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yd(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=nf(e.integerValue||e.doubleValue),r=nf(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gf(e.timestampValue,t.timestampValue);case 4:return gf(af(e),af(t));case 5:return yd(e.stringValue,t.stringValue);case 6:return function(e,t){const n=rf(e),r=rf(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=yd(n[i],r[i]);if(0!==e)return e}return yd(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yd(nf(e.latitude),nf(t.latitude));return 0!==n?n:yd(nf(e.longitude),nf(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=pf(n[i],r[i]);if(e)return e}return yd(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===lf.mapValue&&t===lf.mapValue)return 0;if(e===lf.mapValue)return 1;if(t===lf.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=yd(r[o],s[o]);if(0!==e)return e;const t=pf(n[r[o]],i[s[o]]);if(0!==t)return t}return yd(r.length,s.length)}(e.mapValue,t.mapValue);default:throw td()}}function gf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yd(e,t);const n=tf(e),r=tf(t),i=yd(n.seconds,r.seconds);return 0!==i?i:yd(n.nanos,r.nanos)}function mf(e){return yf(e)}function yf(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=tf(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return rf(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Sd.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=yf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${yf(e.fields[i])}`;return n+"}"}(e.mapValue):td()}function vf(e){return!!e&&"integerValue"in e}function wf(e){return!!e&&"arrayValue"in e}function _f(e){return!!e&&"nullValue"in e}function Ef(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bf(e){return!!e&&"mapValue"in e}function If(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $d(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=If(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=If(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Tf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(e){this.value=e}static empty(){return new Sf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=If(t)}setAll(e){let t=Td.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=If(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());bf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return df(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];bf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){$d(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Sf(If(this.value))}}function Cf(e){const t=[];return $d(e.fields,((e,n)=>{const r=new Td([e]);if(bf(n)){const e=Cf(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Xd(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class kf{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new kf(e,0,_d.min(),_d.min(),_d.min(),Sf.empty(),0)}static newFoundDocument(e,t,n,r){return new kf(e,1,t,_d.min(),n,r,0)}static newNoDocument(e,t){return new kf(e,2,t,_d.min(),_d.min(),Sf.empty(),0)}static newUnknownDocument(e,t){return new kf(e,3,t,_d.min(),_d.min(),Sf.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_d.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_d.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof kf&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.position=e,this.inclusive=t}}function Nf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Sd.comparator(Sd.fromName(o.referenceValue),n.key):pf(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Rf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!df(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t="asc"){this.field=e,this.dir=t}}function Of(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{}class Lf extends Pf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zf(e,t,n):"array-contains"===t?new Hf(e,n):"in"===t?new Gf(e,n):"not-in"===t?new Wf(e,n):"array-contains-any"===t?new Qf(e,n):new Lf(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qf(e,n):new $f(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(pf(t,this.value)):null!==t&&hf(this.value)===hf(t)&&this.matchesComparison(pf(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return td()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mf extends Pf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Mf(e,t)}matches(e){return xf(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function xf(e){return"and"===e.op}function Uf(e){return Ff(e)&&xf(e)}function Ff(e){for(const t of e.filters)if(t instanceof Mf)return!1;return!0}function Vf(e){if(e instanceof Lf)return e.field.canonicalString()+e.op.toString()+mf(e.value);if(Uf(e))return e.filters.map((e=>Vf(e))).join(",");{const t=e.filters.map((e=>Vf(e))).join(",");return`${e.op}(${t})`}}function jf(e,t){return e instanceof Lf?function(e,t){return t instanceof Lf&&e.op===t.op&&e.field.isEqual(t.field)&&df(e.value,t.value)}(e,t):e instanceof Mf?function(e,t){return t instanceof Mf&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&jf(n,t.filters[r])),!0)}(e,t):void td()}function Bf(e){return e instanceof Lf?function(e){return`${e.field.canonicalString()} ${e.op} ${mf(e.value)}`}(e):e instanceof Mf?function(e){return e.op.toString()+" {"+e.getFilters().map(Bf).join(" ,")+"}"}(e):"Filter"}class zf extends Lf{constructor(e,t,n){super(e,t,n),this.key=Sd.fromName(n.referenceValue)}matches(e){const t=Sd.comparator(e.key,this.key);return this.matchesComparison(t)}}class qf extends Lf{constructor(e,t){super(e,"in",t),this.keys=Kf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $f extends Lf{constructor(e,t){super(e,"not-in",t),this.keys=Kf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Sd.fromName(e.referenceValue)))}class Hf extends Lf{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wf(t)&&ff(t.arrayValue,this.value)}}class Gf extends Lf{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ff(this.value.arrayValue,t)}}class Wf extends Lf{constructor(e,t){super(e,"not-in",t)}matches(e){if(ff(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ff(this.value.arrayValue,t)}}class Qf extends Lf{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ff(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Xf(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Jf(e,t,n,r,i,s,o)}function Yf(e){const t=rd(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Vf(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ud(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>mf(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>mf(e))).join(",")),t.he=e}return t.he}function Zf(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Of(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Rf(e.startAt,t.startAt)&&Rf(e.endAt,t.endAt)}function ep(e){return Sd.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tp{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function np(e,t,n,r,i,s,o,a){return new tp(e,t,n,r,i,s,o,a)}function rp(e){return new tp(e)}function ip(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sp(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function op(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ap(e){return null!==e.collectionGroup}function cp(e){const t=rd(e);if(null===t.Pe){t.Pe=[];const e=op(t),n=sp(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new Df(e)),t.Pe.push(new Df(Td.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Df(Td.keyField(),e))}}}return t.Pe}function up(e){const t=rd(e);if(!t.Ie)if("F"===t.limitType)t.Ie=Xf(t.path,t.collectionGroup,cp(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of cp(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Df(i.field,t))}const n=t.endAt?new Af(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Af(t.startAt.position,t.startAt.inclusive):null;t.Ie=Xf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.Ie}function lp(e,t,n){return new tp(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hp(e,t){return Zf(up(e),up(t))&&e.limitType===t.limitType}function dp(e){return`${Yf(up(e))}|lt:${e.limitType}`}function fp(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Bf(e))).join(", ")}]`),Ud(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>mf(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>mf(e))).join(",")),`Target(${t})`}(up(e))}; limitType=${e.limitType})`}function pp(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Sd.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of cp(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Nf(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,cp(e),t))&&!(e.endAt&&!function(e,t,n){const r=Nf(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,cp(e),t))}(e,t)}function gp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function mp(e){return(t,n)=>{let r=!1;for(const i of cp(e)){const e=yp(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function yp(e,t,n){const r=e.field.isKeyField()?Sd.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?pf(r,i):td()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return td()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$d(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Kd(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Hd(Sd.comparator);function _p(){return wp}const Ep=new Hd(Sd.comparator);function bp(...e){let t=Ep;for(const n of e)t=t.insert(n.key,n);return t}function Ip(e){let t=Ep;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Tp(){return Cp()}function Sp(){return Cp()}function Cp(){return new vp((e=>e.toString()),((e,t)=>e.isEqual(t)))}const kp=new Hd(Sd.comparator),Ap=new Qd(Sd.comparator);function Np(...e){let t=Ap;for(const n of e)t=t.add(n);return t}const Rp=new Qd(yd);function Dp(){return Rp}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fd(t)?"-0":t}}function Pp(e){return{integerValue:""+e}}function Lp(e,t){return Vd(t)?Pp(t):Op(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this._=void 0}}function xp(e,t,n){return e instanceof Vp?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&sf(t)&&(t=of(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof jp?Bp(e,t):e instanceof zp?qp(e,t):function(e,t){const n=Fp(e,t),r=Kp(n)+Kp(e.Te);return vf(n)&&vf(e.Te)?Pp(r):Op(e.serializer,r)}(e,t)}function Up(e,t,n){return e instanceof jp?Bp(e,t):e instanceof zp?qp(e,t):n}function Fp(e,t){return e instanceof $p?function(e){return vf(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Vp extends Mp{}class jp extends Mp{constructor(e){super(),this.elements=e}}function Bp(e,t){const n=Hp(t);for(const r of e.elements)n.some((e=>df(e,r)))||n.push(r);return{arrayValue:{values:n}}}class zp extends Mp{constructor(e){super(),this.elements=e}}function qp(e,t){let n=Hp(t);for(const r of e.elements)n=n.filter((e=>!df(e,r)));return{arrayValue:{values:n}}}class $p extends Mp{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Kp(e){return nf(e.integerValue||e.doubleValue)}function Hp(e){return wf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){this.field=e,this.transform=t}}function Wp(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof jp&&t instanceof jp||e instanceof zp&&t instanceof zp?vd(e.elements,t.elements,df):e instanceof $p&&t instanceof $p?df(e.Te,t.Te):e instanceof Vp&&t instanceof Vp}(e.transform,t.transform)}class Qp{constructor(e,t){this.version=e,this.transformResults=t}}class Jp{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jp}static exists(e){return new Jp(void 0,e)}static updateTime(e){return new Jp(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Yp{}function Zp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ug(e.key,Jp.none()):new ig(e.key,e.data,Jp.none());{const n=e.data,r=Sf.empty();let i=new Qd(Td.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new sg(e.key,r,new Xd(i.toArray()),Jp.none())}}function eg(e,t,n){e instanceof ig?function(e,t,n){const r=e.value.clone(),i=ag(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof sg?function(e,t,n){if(!Xp(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ag(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(og(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function tg(e,t,n,r){return e instanceof ig?function(e,t,n,r){if(!Xp(e.precondition,t))return n;const i=e.value.clone(),s=cg(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof sg?function(e,t,n,r){if(!Xp(e.precondition,t))return n;const i=cg(e.fieldTransforms,r,t),s=t.data;return s.setAll(og(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Xp(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ng(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Fp(r.transform,e||null);null!=i&&(null===n&&(n=Sf.empty()),n.set(r.field,i))}return n||null}function rg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&vd(e,t,((e,t)=>Wp(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ig extends Yp{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sg extends Yp{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function og(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ag(e,t,n){const r=new Map;nd(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Up(o,a,n[i]))}return r}function cg(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,xp(e,s,t))}return r}class ug extends Yp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lg extends Yp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&eg(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=tg(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=tg(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sp();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Zp(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(_d.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Np())}isEqual(e){return this.batchId===e.batchId&&vd(this.mutations,e.mutations,((e,t)=>rg(e,t)))&&vd(this.baseMutations,e.baseMutations,((e,t)=>rg(e,t)))}}class dg{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){nd(e.mutations.length===n.length);let r=function(){return kp}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new dg(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pg{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gg,mg;function yg(e){switch(e){default:return td();case id.CANCELLED:case id.UNKNOWN:case id.DEADLINE_EXCEEDED:case id.RESOURCE_EXHAUSTED:case id.INTERNAL:case id.UNAVAILABLE:case id.UNAUTHENTICATED:return!1;case id.INVALID_ARGUMENT:case id.NOT_FOUND:case id.ALREADY_EXISTS:case id.PERMISSION_DENIED:case id.FAILED_PRECONDITION:case id.ABORTED:case id.OUT_OF_RANGE:case id.UNIMPLEMENTED:case id.DATA_LOSS:return!0}}function vg(e){if(void 0===e)return Yh("GRPC error has no .code"),id.UNKNOWN;switch(e){case gg.OK:return id.OK;case gg.CANCELLED:return id.CANCELLED;case gg.UNKNOWN:return id.UNKNOWN;case gg.DEADLINE_EXCEEDED:return id.DEADLINE_EXCEEDED;case gg.RESOURCE_EXHAUSTED:return id.RESOURCE_EXHAUSTED;case gg.INTERNAL:return id.INTERNAL;case gg.UNAVAILABLE:return id.UNAVAILABLE;case gg.UNAUTHENTICATED:return id.UNAUTHENTICATED;case gg.INVALID_ARGUMENT:return id.INVALID_ARGUMENT;case gg.NOT_FOUND:return id.NOT_FOUND;case gg.ALREADY_EXISTS:return id.ALREADY_EXISTS;case gg.PERMISSION_DENIED:return id.PERMISSION_DENIED;case gg.FAILED_PRECONDITION:return id.FAILED_PRECONDITION;case gg.ABORTED:return id.ABORTED;case gg.OUT_OF_RANGE:return id.OUT_OF_RANGE;case gg.UNIMPLEMENTED:return id.UNIMPLEMENTED;case gg.DATA_LOSS:return id.DATA_LOSS;default:return td()}}(mg=gg||(gg={}))[mg.OK=0]="OK",mg[mg.CANCELLED=1]="CANCELLED",mg[mg.UNKNOWN=2]="UNKNOWN",mg[mg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mg[mg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mg[mg.NOT_FOUND=5]="NOT_FOUND",mg[mg.ALREADY_EXISTS=6]="ALREADY_EXISTS",mg[mg.PERMISSION_DENIED=7]="PERMISSION_DENIED",mg[mg.UNAUTHENTICATED=16]="UNAUTHENTICATED",mg[mg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mg[mg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mg[mg.ABORTED=10]="ABORTED",mg[mg.OUT_OF_RANGE=11]="OUT_OF_RANGE",mg[mg.UNIMPLEMENTED=12]="UNIMPLEMENTED",mg[mg.INTERNAL=13]="INTERNAL",mg[mg.UNAVAILABLE=14]="UNAVAILABLE",mg[mg.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _g}static getOrCreateInstance(){return null===_g&&(_g=new wg),_g}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let _g=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Kh([4294967295,4294967295],0);function Ig(e){const t=Eg().encode(e),n=new $h;return n.update(t),new Uint8Array(n.digest())}function Tg(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Kh([n,r],0),new Kh([i,s],0)]}class Sg{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Cg(`Invalid padding: ${t}`);if(n<0)throw new Cg(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Cg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Cg(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Kh.fromNumber(this.de)}Re(e,t,n){let r=e.add(t.multiply(Kh.fromNumber(n)));return 1===r.compare(bg)&&(r=new Kh([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;const t=Ig(e),[n,r]=Tg(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);if(!this.Ve(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Sg(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.de)return;const t=Ig(e),[n,r]=Tg(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);this.me(e)}}me(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Cg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ag.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new kg(_d.min(),r,new Hd(yd),_p(),Np())}}class Ag{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ag(n,t,Np(),Np(),Np())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,n,r){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=r}}class Rg{constructor(e,t){this.targetId=e,this.pe=t}}class Dg{constructor(e,t,n=Zd.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Og{constructor(){this.ye=0,this.we=Mg(),this.Se=Zd.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=Np(),t=Np(),n=Np();return this.we.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:td()}})),new Ag(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=Mg()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Pg{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=_p(),this.$e=Lg(),this.Ue=new Hd(yd)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:td()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){var t,n;const r=e.targetId,i=e.pe.count,s=this.Xe(r);if(s){const o=s.target;if(ep(o))if(0===i){const e=new Sd(o.path);this.ze(r,e,kf.newNoDocument(e,_d.min()))}else nd(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(e,s);if(0!==i.status){this.Ye(r);const e=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,e)}null===(t=wg.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,r){var i,s,o,a,c,u;const l={localCacheCount:n,existenceFilterCount:r.count},h=r.unchangedNames;return h&&(l.bloomFilter={applied:0===e,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},t&&(l.bloomFilter.mightContain=t)),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){const{unchangedNames:n,count:r}=e.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=rf(i).toUint8Array()}catch(e){if(e instanceof Yd)return Zh("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{c=new Sg(a,s,o)}catch(e){return Zh(e instanceof Cg?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}const u=e=>{const t=this.qe.rt();return c.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===c.de?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const n=this.qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{t(n.path.canonicalString())||(this.ze(e,n,null),r++)})),r}st(e){const t=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&ep(i.target)){const t=new Sd(i.target.path);null!==this.Ke.get(t)||this.ot(r,t)||this.ze(r,t,kf.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Me()),n.xe())}}));let n=Np();this.$e.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ke.forEach(((t,n)=>n.setReadTime(e)));const r=new kg(e,t,this.Ue,this.Ke,n);return this.Ke=_p(),this.$e=Lg(),this.Ue=new Hd(yd),r}Ge(e,t){if(!this.Je(e))return;const n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Og,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Qd(yd),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||Xh("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Og),this.qe.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Lg(){return new Hd(Sd.comparator)}function Mg(){return new Hd(Sd.comparator)}const xg=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ug=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Fg=(()=>{const e={and:"AND",or:"OR"};return e})();class Vg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jg(e,t){return e.useProto3Json||Ud(t)?t:{value:t}}function Bg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function qg(e,t){return Bg(e,t.toTimestamp())}function $g(e){return nd(!!e),_d.fromTimestamp(function(e){const t=tf(e);return new wd(t.seconds,t.nanos)}(e))}function Kg(e,t){return function(e){return new bd(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Hg(e){const t=bd.fromString(e);return nd(gm(t)),t}function Gg(e,t){return Kg(e.databaseId,t.path)}function Wg(e,t){const n=Hg(t);if(n.get(1)!==e.databaseId.projectId)throw new sd(id.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new sd(id.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Sd(Yg(n))}function Qg(e,t){return Kg(e.databaseId,t)}function Jg(e){const t=Hg(e);return 4===t.length?bd.emptyPath():Yg(t)}function Xg(e){return new bd(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yg(e){return nd(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Zg(e,t,n){return{name:Gg(e,t),fields:n.value.mapValue.fields}}function em(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:td()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(nd(void 0===t||"string"==typeof t),Zd.fromBase64String(t||"")):(nd(void 0===t||t instanceof Uint8Array),Zd.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?id.UNKNOWN:vg(e.code);return new sd(t,e.message||"")}(o);n=new Dg(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wg(e,r.document.name),s=$g(r.document.updateTime),o=r.document.createTime?$g(r.document.createTime):_d.min(),a=new Sf({mapValue:{fields:r.document.fields}}),c=kf.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ng(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Wg(e,r.document),s=r.readTime?$g(r.readTime):_d.min(),o=kf.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ng([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Wg(e,r.document),s=r.removedTargetIds||[];n=new Ng([],s,i,null)}else{if(!("filter"in t))return td();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new pg(r,i),o=e.targetId;n=new Rg(o,s)}}return n}function tm(e,t){let n;if(t instanceof ig)n={update:Zg(e,t.key,t.value)};else if(t instanceof ug)n={delete:Gg(e,t.key)};else if(t instanceof sg)n={update:Zg(e,t.key,t.data),updateMask:pm(t.fieldMask)};else{if(!(t instanceof lg))return td();n={verify:Gg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Vp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof $p)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw td()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:qg(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:td()}(e,t.precondition)),n}function nm(e,t){return e&&e.length>0?(nd(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?$g(e.updateTime):$g(t);return n.isEqual(_d.min())&&(n=$g(t)),new Qp(n,e.transformResults||[])}(e,t)))):[]}function rm(e,t){return{documents:[Qg(e,t.path)]}}function im(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Qg(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Qg(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return fm(Mf.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:hm(e.field),direction:cm(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=jg(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function sm(e){let t=Jg(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){nd(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=am(e);return t instanceof Mf&&Uf(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Df(dm(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ud(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Af(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Af(n,t)}(n.endAt)),np(t,i,o,s,a,"F",c,u)}function om(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return td()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function am(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=dm(e.unaryFilter.field);return Lf.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=dm(e.unaryFilter.field);return Lf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dm(e.unaryFilter.field);return Lf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=dm(e.unaryFilter.field);return Lf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return td()}}(e):void 0!==e.fieldFilter?function(e){return Lf.create(dm(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return td()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Mf.create(e.compositeFilter.filters.map((e=>am(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return td()}}(e.compositeFilter.op))}(e):td()}function cm(e){return xg[e]}function um(e){return Ug[e]}function lm(e){return Fg[e]}function hm(e){return{fieldPath:e.canonicalString()}}function dm(e){return Td.fromServerFormat(e.fieldPath)}function fm(e){return e instanceof Lf?function(e){if("=="===e.op){if(Ef(e.value))return{unaryFilter:{field:hm(e.field),op:"IS_NAN"}};if(_f(e.value))return{unaryFilter:{field:hm(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ef(e.value))return{unaryFilter:{field:hm(e.field),op:"IS_NOT_NAN"}};if(_f(e.value))return{unaryFilter:{field:hm(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hm(e.field),op:um(e.op),value:e.value}}}(e):e instanceof Mf?function(e){const t=e.getFilters().map((e=>fm(e)));return 1===t.length?t[0]:{compositeFilter:{op:lm(e.op),filters:t}}}(e):td()}function pm(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gm(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,n,r,i=_d.min(),s=_d.min(),o=Zd.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new mm(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mm(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.ct=e}}function vm(e){const t=sm({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?lp(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wm{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(nf(e.integerValue));else if("doubleValue"in e){const n=nf(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Fd(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(rf(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?Tf(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):td()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),Sd.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}wm.bt=new wm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _m{constructor(){this.sn=new Em}addToCollectionParentIndex(e,t){return this.sn.add(t),Ld.resolve()}getCollectionParents(e,t){return Ld.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Ld.resolve()}deleteFieldIndex(e,t){return Ld.resolve()}getDocumentsMatchingTarget(e,t){return Ld.resolve(null)}getIndexType(e,t){return Ld.resolve(0)}getFieldIndexes(e,t){return Ld.resolve([])}getNextCollectionGroupToUpdate(e){return Ld.resolve(null)}getMinOffset(e,t){return Ld.resolve(Nd.min())}getMinOffsetFromCollectionGroup(e,t){return Ld.resolve(Nd.min())}updateCollectionGroup(e,t,n){return Ld.resolve()}updateIndexEntries(e,t){return Ld.resolve()}}class Em{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Qd(bd.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Qd(bd.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class bm{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new bm(e,bm.DEFAULT_COLLECTION_PERCENTILE,bm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bm.DEFAULT_COLLECTION_PERCENTILE=10,bm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bm.DEFAULT=new bm(41943040,bm.DEFAULT_COLLECTION_PERCENTILE,bm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bm.DISABLED=new bm(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Im{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Im(0)}static On(){return new Im(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tm{constructor(){this.changes=new vp((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kf.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ld.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&tg(n.mutation,e,Xd.empty(),wd.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Np()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Np()){const r=Tp();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=bp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Tp();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Np())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=_p();const s=Cp(),o=function(){return Cp()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof sg)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),tg(o.mutation,t,o.mutation.getFieldMask(),wd.now())):s.set(t.key,Xd.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Sm(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Cp();let r=new Hd(((e,t)=>e-t)),i=Np();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Xd.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Np()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Sp();c.forEach((e=>{if(!i.has(e)){const r=Zp(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ld.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Sd.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ap(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ld.resolve(Tp());let o=-1,a=i;return s.next((t=>Ld.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ld.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Np()))).next((e=>({batchId:o,changes:Ip(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Sd(t)).next((e=>{let t=bp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=bp();return this.indexManager.getCollectionParents(e,r).next((s=>Ld.forEach(s,(s=>{const o=function(e,t){return new tp(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,kf.newInvalidDocument(r)))}));let n=bp();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&tg(s.mutation,i,Xd.empty(),wd.now()),pp(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return Ld.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(e){return{id:e.id,version:e.version,createTime:$g(e.createTime)}}(t)),Ld.resolve()}getNamedQuery(e,t){return Ld.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(e){return{name:e.name,query:vm(e.bundledQuery),readTime:$g(e.readTime)}}(t)),Ld.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.overlays=new Hd(Sd.comparator),this.cr=new Map}getOverlay(e,t){return Ld.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Tp();return Ld.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Ld.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.cr.delete(n)),Ld.resolve()}getOverlaysForCollection(e,t,n){const r=Tp(),i=t.length+1,s=new Sd(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ld.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Hd(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Tp(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Tp(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ld.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new fg(t,n));let i=this.cr.get(t);void 0===i&&(i=Np(),this.cr.set(t,i)),this.cr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.lr=new Qd(Rm.hr),this.Pr=new Qd(Rm.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const n=new Rm(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Er(new Rm(e,t))}dr(e,t){e.forEach((e=>this.removeReference(e,t)))}Ar(e){const t=new Sd(new bd([])),n=new Rm(t,e),r=new Rm(t,e+1),i=[];return this.Pr.forEachInRange([n,r],(e=>{this.Er(e),i.push(e.key)})),i}Rr(){this.lr.forEach((e=>this.Er(e)))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new Sd(new bd([])),n=new Rm(t,e),r=new Rm(t,e+1);let i=Np();return this.Pr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Rm(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Rm{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return Sd.comparator(e.key,t.key)||yd(e.mr,t.mr)}static Ir(e,t){return yd(e.mr,t.mr)||Sd.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Qd(Rm.hr)}checkEmpty(e){return Ld.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new hg(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new Rm(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ld.resolve(s)}lookupMutationBatch(e,t){return Ld.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.wr(n),i=r<0?0:r;return Ld.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ld.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return Ld.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Rm(t,0),r=new Rm(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(e=>{const t=this.yr(e.mr);i.push(t)})),Ld.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qd(yd);return t.forEach((e=>{const t=new Rm(e,0),r=new Rm(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,r],(e=>{n=n.add(e.mr)}))})),Ld.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Sd.isDocumentKey(i)||(i=i.child(""));const s=new Rm(new Sd(i),0);let o=new Qd(yd);return this.pr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.mr)),!0)}),s),Ld.resolve(this.Sr(o))}Sr(e){const t=[];return e.forEach((e=>{const n=this.yr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){nd(0===this.br(t.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Ld.forEach(t.mutations,(r=>{const i=new Rm(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.pr=n}))}Cn(e){}containsKey(e,t){const n=new Rm(t,0),r=this.pr.firstAfterOrEqual(n);return Ld.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ld.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.Dr=e,this.docs=function(){return new Hd(Sd.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ld.resolve(n?n.document.mutableCopy():kf.newInvalidDocument(t))}getEntries(e,t){let n=_p();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():kf.newInvalidDocument(e))})),Ld.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=_p();const s=t.path,o=new Sd(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Rd(Ad(o),n)<=0||(r.has(o.key)||pp(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ld.resolve(i)}getAllFromCollectionGroup(e,t,n,r){td()}vr(e,t){return Ld.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Pm(this)}getSize(e){return Ld.resolve(this.size)}}class Pm extends Tm{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(n)})),Ld.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.persistence=e,this.Cr=new vp((e=>Yf(e)),Zf),this.lastRemoteSnapshotVersion=_d.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Nm,this.targetCount=0,this.Or=Im.xn()}forEachTarget(e,t){return this.Cr.forEach(((e,n)=>t(n))),Ld.resolve()}getLastRemoteSnapshotVersion(e){return Ld.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ld.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),Ld.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),Ld.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Im(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,Ld.resolve()}updateTargetData(e,t){return this.Ln(t),Ld.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,Ld.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ld.waitFor(i).next((()=>r))}getTargetCount(e){return Ld.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cr.get(t)||null;return Ld.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),Ld.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ld.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),Ld.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mr.Vr(t);return Ld.resolve(n)}containsKey(e,t){return Ld.resolve(this.Mr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.Nr={},this.overlays={},this.Br=new xd(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Lm(this),this.indexManager=new _m,this.remoteDocumentCache=function(e){return new Om(e)}((e=>this.referenceDelegate.qr(e))),this.serializer=new ym(t),this.Qr=new km(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Am,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new Dm(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){Xh("MemoryPersistence","Starting transaction:",e);const r=new xm(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((e=>this.referenceDelegate.$r(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ur(e,t){return Ld.or(Object.values(this.Nr).map((n=>()=>n.containsKey(e,t))))}}class xm extends Od{constructor(e){super(),this.currentSequenceNumber=e}}class Um{constructor(e){this.persistence=e,this.Wr=new Nm,this.Gr=null}static zr(e){return new Um(e)}get jr(){if(this.Gr)return this.Gr;throw td()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),Ld.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),Ld.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),Ld.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach((e=>this.jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ld.forEach(this.jr,(n=>{const r=Sd.fromPath(n);return this.Hr(e,r).next((e=>{e||t.removeEntry(r,_d.min())}))})).next((()=>(this.Gr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hr(e,t).next((e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())}))}qr(e){return 0}Hr(e,t){return Ld.or([()=>Ld.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fm{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=r}static qi(e,t){let n=Np(),r=Np();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fm(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.$i(e,t).next((i=>i||this.Ui(e,t,r,n))).next((n=>n||this.Wi(e,t)))}$i(e,t){if(ip(t))return Ld.resolve(null);let n=up(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=lp(t,null,"F"),n=up(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Np(...r);return this.Ki.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Gi(t,r);return this.zi(t,s,i,n.readTime)?this.$i(e,lp(t,null,"F")):this.ji(e,s,t,n)}))))})))))}Ui(e,t,n,r){return ip(t)||r.isEqual(_d.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next((i=>{const s=this.Gi(t,i);return this.zi(t,s,n,r)?this.Wi(e,t):(Jh()<=qe.DEBUG&&Xh("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fp(t)),this.ji(e,s,t,kd(r,-1)))}))}Gi(e,t){let n=new Qd(mp(e));return t.forEach(((t,r)=>{pp(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,t){return Jh()<=qe.DEBUG&&Xh("QueryEngine","Using full collection scan to execute query:",fp(t)),this.Ki.getDocumentsMatchingQuery(e,t,Nd.min())}ji(e,t,n,r){return this.Ki.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Hd(yd),this.Yi=new vp((e=>Yf(e)),Zf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cm(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Bm(e,t,n,r){return new jm(e,t,n,r)}async function zm(e,t){const n=rd(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.es(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Np();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ts:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function qm(e,t){const n=rd(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ld.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);nd(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Np();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function $m(e){const t=rd(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.kr.getLastRemoteSnapshotVersion(e)))}function Km(e,t){const n=rd(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Zd.EMPTY_BYTE_STRING,_d.min()).withLastLimboFreeSnapshotVersion(_d.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(e,u))}));let a=_p(),c=Np();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Hm(e,s,t.documentUpdates).next((e=>{a=e.ns,c=e.rs}))),!r.isEqual(_d.min())){const t=n.kr.getLastRemoteSnapshotVersion(e).next((t=>n.kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ld.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Hm(e,t,n){let r=Np(),i=Np();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=_p();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(_d.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Xh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function Gm(e,t){const n=rd(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Wm(e,t){const n=rd(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.kr.getTargetData(e,t).next((i=>i?(r=i,Ld.resolve(r)):n.kr.allocateTargetId(e).next((i=>(r=new mm(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Qm(e,t,n){const r=rd(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Md(e))throw e;Xh("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Jm(e,t,n){const r=rd(e);let i=_d.min(),s=Np();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=rd(e),i=r.Yi.get(n);return void 0!==i?Ld.resolve(r.Ji.get(i)):r.kr.getTargetData(t,n)}(r,e,up(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:_d.min(),n?s:Np()))).next((e=>(Xm(r,gp(t),e),{documents:e,ss:s})))))}function Xm(e,t,n){let r=e.Zi.get(t)||_d.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Zi.set(t,r)}class Ym{constructor(){this.activeTargetIds=Dp()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zm{constructor(){this.Hs=new Ym,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Ym,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{Ys(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Xh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){Xh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny=null;function ry(){return null===ny?ny=function(){return 268435456+Math.round(2147483648*Math.random())}():ny++,"0x"+ny.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const iy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="WebChannelConnection";class ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(e,t,n,r,i){const s=ry(),o=this.mo(e,t);Xh("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(e,o,a,n).then((t=>(Xh("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Zh("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}yo(e,t,n,r,i,s){return this.Vo(e,t,n,r,i)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wh}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}mo(e,t){const n=iy[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,r){const i=ry();return new Promise(((s,o)=>{const a=new qh;a.setWithCredentials(!0),a.listenOnce(Fh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Uh.NO_ERROR:const t=a.getResponseJson();Xh(oy,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Uh.TIMEOUT:Xh(oy,`RPC '${e}' ${i} timed out`),o(new sd(id.DEADLINE_EXCEEDED,"Request time out"));break;case Uh.HTTP_ERROR:const n=a.getStatus();if(Xh(oy,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(id).indexOf(t)>=0?t:id.UNKNOWN}(t.status);o(new sd(e,t.message))}else o(new sd(id.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new sd(id.UNAVAILABLE,"Connection failed."));break;default:td()}}finally{Xh(oy,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Xh(oy,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=ry(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Mh(),o=xh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Bh({})),this.fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Xh(oy,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new sy({so:t=>{d?Xh(oy,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Xh(oy,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Xh(oy,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,zh.EventType.OPEN,(()=>{d||Xh(oy,`RPC '${e}' stream ${r} transport opened.`)})),p(l,zh.EventType.CLOSE,(()=>{d||(d=!0,Xh(oy,`RPC '${e}' stream ${r} transport closed`),f.Po())})),p(l,zh.EventType.ERROR,(t=>{d||(d=!0,Zh(oy,`RPC '${e}' stream ${r} transport errored:`,t),f.Po(new sd(id.UNAVAILABLE,"The operation could not be completed")))})),p(l,zh.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];nd(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Xh(oy,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=gg[e];if(void 0!==t)return vg(t)}(t),i=o.message;void 0===n&&(n=id.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Po(new sd(n,i)),l.close()}else Xh(oy,`RPC '${e}' stream ${r} received:`,i),f.Io(i)}})),p(o,Vh.STAT_EVENT,(t=>{t.stat===jh.PROXY?Xh(oy,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===jh.NOPROXY&&Xh(oy,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e){return new Vg(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-n);r>0&&Xh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),e()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new ly(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===id.RESOURCE_EXHAUSTED?(Yh(t.toString()),Yh("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===id.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.ko===t&&this.e_(e,n)}),(t=>{e((()=>{const e=new sd(id.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)}))}))}e_(e,t){const n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((e=>{n((()=>this.t_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(e){return Xh("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.ko===e?t():(Xh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dy extends hy{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=em(this.serializer,e),n=function(e){if(!("targetChange"in e))return _d.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?_d.min():t.readTime?$g(t.readTime):_d.min()}(e);return this.listener.r_(t,n)}i_(e){const t={};t.database=Xg(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ep(r)?{documents:rm(e,r)}:{query:im(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=zg(e,t.resumeToken);const r=jg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(_d.min())>0){n.readTime=Bg(e,t.snapshotVersion.toTimestamp());const r=jg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=om(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){const t={};t.database=Xg(this.serializer),t.removeTarget=e,this.Ho(t)}}class fy extends hy{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(nd(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=nm(e.writeResults,e.commitTime),n=$g(e.commitTime);return this.listener.u_(n,t)}return nd(!e.writeResults||0===e.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Xg(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>tm(this.serializer,e)))};this.Ho(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new sd(id.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===id.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sd(id.UNKNOWN,e.toString())}))}yo(e,t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===id.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sd(id.UNKNOWN,e.toString())}))}terminate(){this.h_=!0}}class gy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Yh(t),this.d_=!1):Xh("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((e=>{n.enqueueAndForget((async()=>{Sy(this)&&(Xh("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=rd(e);t.y_.add(4),await vy(t),t.b_.set("Unknown"),t.y_.delete(4),await yy(t)}(this))}))})),this.b_=new gy(n,r)}}async function yy(e){if(Sy(e))for(const t of e.w_)await t(!0)}async function vy(e){for(const t of e.w_)await t(!1)}function wy(e,t){const n=rd(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Ty(n)?Iy(n):qy(n).Uo()&&Ey(n,t))}function _y(e,t){const n=rd(e),r=qy(n);n.p_.delete(t),r.Uo()&&by(n,t),0===n.p_.size&&(r.Uo()?r.zo():Sy(n)&&n.b_.set("Unknown"))}function Ey(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_d.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qy(e).i_(t)}function by(e,t){e.D_.Be(t),qy(e).s_(t)}function Iy(e){e.D_=new Pg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),qy(e).start(),e.b_.A_()}function Ty(e){return Sy(e)&&!qy(e).$o()&&e.p_.size>0}function Sy(e){return 0===rd(e).y_.size}function Cy(e){e.D_=void 0}async function ky(e){e.p_.forEach(((t,n)=>{Ey(e,t)}))}async function Ay(e,t){Cy(e),Ty(e)?(e.b_.m_(t),Iy(e)):e.b_.set("Unknown")}async function Ny(e,t,n){if(e.b_.set("Online"),t instanceof Dg&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.p_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.p_.delete(r),e.D_.removeTarget(r))}(e,t)}catch(n){Xh("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ry(e,n)}else if(t instanceof Ng?e.D_.We(t):t instanceof Rg?e.D_.Ze(t):e.D_.je(t),!n.isEqual(_d.min()))try{const t=await $m(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.D_.st(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.p_.get(r);i&&e.p_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.p_.get(t);if(!r)return;e.p_.set(t,r.withResumeToken(Zd.EMPTY_BYTE_STRING,r.snapshotVersion)),by(e,t);const i=new mm(r.target,t,n,r.sequenceNumber);Ey(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Xh("RemoteStore","Failed to raise snapshot:",t),await Ry(e,t)}}async function Ry(e,t,n){if(!Md(t))throw t;e.y_.add(1),await vy(e),e.b_.set("Offline"),n||(n=()=>$m(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Xh("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await yy(e)}))}function Dy(e,t){return t().catch((n=>Ry(e,n,t)))}async function Oy(e){const t=rd(e),n=$y(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;Py(t);)try{const e=await Gm(t.localStore,r);if(null===e){0===t.g_.length&&n.zo();break}r=e.batchId,Ly(t,e)}catch(e){await Ry(t,e)}My(t)&&xy(t)}function Py(e){return Sy(e)&&e.g_.length<10}function Ly(e,t){e.g_.push(t);const n=$y(e);n.Uo()&&n.__&&n.a_(t.mutations)}function My(e){return Sy(e)&&!$y(e).$o()&&e.g_.length>0}function xy(e){$y(e).start()}async function Uy(e){$y(e).l_()}async function Fy(e){const t=$y(e);for(const n of e.g_)t.a_(n.mutations)}async function Vy(e,t,n){const r=e.g_.shift(),i=dg.from(r,t,n);await Dy(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Oy(e)}async function jy(e,t){t&&$y(e).__&&await async function(e,t){if(function(e){return yg(e)&&e!==id.ABORTED}(t.code)){const n=e.g_.shift();$y(e).Go(),await Dy(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Oy(e)}}(e,t),My(e)&&xy(e)}async function By(e,t){const n=rd(e);n.asyncQueue.verifyOperationInProgress(),Xh("RemoteStore","RemoteStore received new credentials");const r=Sy(n);n.y_.add(3),await vy(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await yy(n)}async function zy(e,t){const n=rd(e);t?(n.y_.delete(2),await yy(n)):t||(n.y_.add(2),await vy(n),n.b_.set("Unknown"))}function qy(e){return e.v_||(e.v_=function(e,t,n){const r=rd(e);return r.P_(),new dy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{_o:ky.bind(null,e),uo:Ay.bind(null,e),r_:Ny.bind(null,e)}),e.w_.push((async t=>{t?(e.v_.Go(),Ty(e)?Iy(e):e.b_.set("Unknown")):(await e.v_.stop(),Cy(e))}))),e.v_}function $y(e){return e.C_||(e.C_=function(e,t,n){const r=rd(e);return r.P_(),new fy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{_o:Uy.bind(null,e),uo:jy.bind(null,e),c_:Fy.bind(null,e),u_:Vy.bind(null,e)}),e.w_.push((async t=>{t?(e.C_.Go(),await Oy(e)):(await e.C_.stop(),e.g_.length>0&&(Xh("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ky{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new od,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ky(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new sd(id.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hy(e,t){if(Yh("AsyncQueue",`${t}: ${e}`),Md(e))return new sd(id.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Sd.comparator(t.key,n.key):(e,t)=>Sd.comparator(e.key,t.key),this.keyedMap=bp(),this.sortedSet=new Hd(this.comparator)}static emptySet(e){return new Gy(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Gy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.F_=new Hd(Sd.comparator)}track(e){const t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):td():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Qy{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Qy(e,t,Gy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.x_=void 0,this.listeners=[]}}class Xy{constructor(){this.queries=new vp((e=>dp(e)),hp),this.onlineState="Unknown",this.O_=new Set}}async function Yy(e,t){const n=rd(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Jy),i)try{s.x_=await n.onListen(r)}catch(e){const n=Hy(e,`Initialization of query '${fp(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&nv(n)}async function Zy(e,t){const n=rd(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ev(e,t){const n=rd(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.B_(i)&&(r=!0);t.x_=i}}r&&nv(n)}function tv(e,t,n){const r=rd(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function nv(e){e.O_.forEach((e=>{e.next()}))}class rv{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Qy(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.W_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=Qy.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iv{constructor(e){this.key=e}}class sv{constructor(e){this.key=e}}class ov{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Np(),this.mutatedKeys=Np(),this.na=mp(e),this.ra=new Gy(this.na)}get ia(){return this.X_}sa(e,t){const n=t?t.oa:new Wy,r=t?t.ra:this.ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=pp(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this._a(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.na(l,a)>0||c&&this.na(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return td()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.na(e.doc,t.doc))),this.aa(n);const s=t?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new Qy(this.query,e.ra,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Wy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach((e=>this.X_=this.X_.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.X_=this.X_.delete(e))),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=Np(),this.ra.forEach((e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))}));const t=[];return e.forEach((e=>{this.ta.has(e)||t.push(new sv(e))})),this.ta.forEach((n=>{e.has(n)||t.push(new iv(n))})),t}ha(e){this.X_=e.ss,this.ta=Np();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Qy.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class av{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class cv{constructor(e){this.key=e,this.Ia=!1}}class uv{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new vp((e=>dp(e)),hp),this.da=new Map,this.Aa=new Set,this.Ra=new Hd(Sd.comparator),this.Va=new Map,this.ma=new Nm,this.fa={},this.ga=new Map,this.pa=Im.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function lv(e,t){const n=Nv(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const e=await Wm(n.localStore,up(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await hv(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&wy(n.remoteStore,e)}return i}async function hv(e,t,n,r,i){e.wa=(t,n,r)=>async function(e,t,n,r){let i=t.view.sa(n);i.zi&&(i=await Jm(e.localStore,t.query,!1).then((({documents:e})=>t.view.sa(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Iv(e,t.targetId,o.ca),o.snapshot}(e,t,n,r);const s=await Jm(e.localStore,t,!0),o=new ov(t,s.ss),a=o.sa(s.documents),c=Ag.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Iv(e,n,u.ca);const l=new av(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function dv(e,t){const n=rd(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((e=>!hp(e,t)))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qm(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),_y(n.remoteStore,r.targetId),Ev(n,r.targetId)})).catch(Pd)):(Ev(n,r.targetId),await Qm(n.localStore,r.targetId,!0))}async function fv(e,t,n){const r=Rv(e);try{const e=await function(e,t){const n=rd(e),r=wd.now(),i=t.reduce(((e,t)=>e.add(t.key)),Np());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=_p(),c=Np();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ng(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new sg(e.key,t,Cf(t.value.mapValue),Jp.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ip(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fa[e.currentUser.toKey()];r||(r=new Hd(yd)),r=r.insert(t,n),e.fa[e.currentUser.toKey()]=r}(r,e.batchId,n),await Cv(r,e.changes),await Oy(r.remoteStore)}catch(e){const t=Hy(e,"Failed to persist write");n.reject(t)}}async function pv(e,t){const n=rd(e);try{const e=await Km(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Va.get(t);r&&(nd(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ia=!0:e.modifiedDocuments.size>0?nd(r.Ia):e.removedDocuments.size>0&&(nd(r.Ia),r.Ia=!1))})),await Cv(n,e,t)}catch(e){await Pd(e)}}function gv(e,t,n){const r=rd(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=rd(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.N_(t)&&(r=!0)})),r&&nv(n)}(r.eventManager,t),e.length&&r.Ta.r_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function mv(e,t,n){const r=rd(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let e=new Hd(Sd.comparator);e=e.insert(s,kf.newNoDocument(s,_d.min()));const n=Np().add(s),i=new kg(_d.min(),new Map,new Hd(yd),e,n);await pv(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(t),Sv(r)}else await Qm(r.localStore,t,!1).then((()=>Ev(r,t,n))).catch(Pd)}async function yv(e,t){const n=rd(e),r=t.batch.batchId;try{const e=await qm(n.localStore,t);_v(n,r,null),wv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cv(n,e)}catch(e){await Pd(e)}}async function vv(e,t,n){const r=rd(e);try{const e=await function(e,t){const n=rd(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(nd(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);_v(r,t,n),wv(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cv(r,e)}catch(n){await Pd(n)}}function wv(e,t){(e.ga.get(t)||[]).forEach((e=>{e.resolve()})),e.ga.delete(t)}function _v(e,t,n){const r=rd(e);let i=r.fa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Ev(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach((t=>{e.ma.containsKey(t)||bv(e,t)}))}function bv(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);null!==n&&(_y(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Sv(e))}function Iv(e,t,n){for(const r of n)r instanceof iv?(e.ma.addReference(r.key,t),Tv(e,r)):r instanceof sv?(Xh("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||bv(e,r.key)):td()}function Tv(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(Xh("SyncEngine","New document in limbo: "+n),e.Aa.add(r),Sv(e))}function Sv(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new Sd(bd.fromString(t)),r=e.pa.next();e.Va.set(r,new cv(n)),e.Ra=e.Ra.insert(n,r),wy(e.remoteStore,new mm(up(rp(n.path)),r,"TargetPurposeLimboResolution",xd.ae))}}async function Cv(e,t,n){const r=rd(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((e,a)=>{o.push(r.wa(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Fm.qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(e,t){const n=rd(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ld.forEach(t,(t=>Ld.forEach(t.Li,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ld.forEach(t.ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Md(e))throw e;Xh("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function kv(e,t){const n=rd(e);if(!n.currentUser.isEqual(t)){Xh("SyncEngine","User change. New user:",t.toKey());const e=await zm(n.localStore,t);n.currentUser=t,function(e,t){e.ga.forEach((e=>{e.forEach((e=>{e.reject(new sd(id.CANCELLED,t))}))})),e.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Cv(n,e.ts)}}function Av(e,t){const n=rd(e),r=n.Va.get(t);if(r&&r.Ia)return Np().add(r.key);{let e=Np();const r=n.da.get(t);if(!r)return e;for(const t of r){const r=n.Ea.get(t);e=e.unionWith(r.view.ia)}return e}}function Nv(e){const t=rd(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=pv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Av.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mv.bind(null,t),t.Ta.r_=ev.bind(null,t.eventManager),t.Ta.Sa=tv.bind(null,t.eventManager),t}function Rv(e){const t=rd(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vv.bind(null,t),t}class Dv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uy(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Bm(this.persistence,new Vm,e.initialUser,this.serializer)}createPersistence(e){return new Mm(Um.zr,this.serializer)}createSharedClientState(e){return new Zm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ov{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gv(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=kv.bind(null,this.syncEngine),await zy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xy}()}createDatastore(e){const t=uy(e.databaseInfo.databaseId),n=function(e){return new ay(e)}(e.databaseInfo);return function(e,t,n,r){return new py(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new my(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>gv(this.syncEngine,e,0)),function(){return ty.v()?new ty:new ey}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new uv(e,t,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=rd(e);Xh("RemoteStore","RemoteStore shutting down."),t.y_.add(5),await vy(t),t.S_.shutdown(),t.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Yh("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lv{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Gh.UNAUTHENTICATED,this.clientId=md.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Xh("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Xh("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new sd(id.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new od;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Hy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Mv(e,t){e.asyncQueue.verifyOperationInProgress(),Xh("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await zm(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function xv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fv(e);Xh("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>By(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>By(t.remoteStore,n))),e._onlineComponents=t}function Uv(e){return"FirebaseError"===e.name?e.code===id.FAILED_PRECONDITION||e.code===id.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Fv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Xh("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Uv(n))throw n;Zh("Error using user provided cache. Falling back to memory cache: "+n),await Mv(e,new Dv)}}else Xh("FirestoreClient","Using default OfflineComponentProvider"),await Mv(e,new Dv);return e._offlineComponents}async function Vv(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Xh("FirestoreClient","Using user provided OnlineComponentProvider"),await xv(e,e._uninitializedComponentsProvider._online)):(Xh("FirestoreClient","Using default OnlineComponentProvider"),await xv(e,new Ov))),e._onlineComponents}function jv(e){return Vv(e).then((e=>e.syncEngine))}async function Bv(e){const t=await Vv(e),n=t.eventManager;return n.onListen=lv.bind(null,t.syncEngine),n.onUnlisten=dv.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zv(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const qv=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e,t,n){if(!n)throw new sd(id.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Kv(e,t,n,r){if(!0===t&&!0===r)throw new sd(id.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Hv(e){if(!Sd.isDocumentKey(e))throw new sd(id.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Gv(e){if(Sd.isDocumentKey(e))throw new sd(id.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Wv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":td()}function Qv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new sd(id.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wv(e);throw new sd(id.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new sd(id.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new sd(id.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zv(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new sd(id.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new sd(id.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new sd(id.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new sd(id.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new sd(id.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new cd;switch(e.type){case"firstParty":return new dd(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new sd(id.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=qv.get(e);t&&(Xh("ComponentProvider","Removing Datastore"),qv.delete(e),t.terminate())}(this),Promise.resolve()}}function Yv(e,t,n,r={}){var i;const s=(e=Qv(e,Xv))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Zh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Gh.MOCK_USER;else{t=de(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new sd(id.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gh(s)}e._authCredentials=new ud(new ad(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Zv(this.firestore,e,this._query)}}class ew{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ew(this.firestore,e,this._key)}}class tw extends Zv{constructor(e,t,n){super(e,t,rp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ew(this.firestore,null,new Sd(e))}withConverter(e){return new tw(this.firestore,e,this._path)}}function nw(e,t,...n){if(e=Me(e),$v("collection","path",t),e instanceof Xv){const r=bd.fromString(t,...n);return Gv(r),new tw(e,null,r)}{if(!(e instanceof ew||e instanceof tw))throw new sd(id.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bd.fromString(t,...n));return Gv(r),new tw(e.firestore,null,r)}}function rw(e,t,...n){if(e=Me(e),1===arguments.length&&(t=md.V()),$v("doc","path",t),e instanceof Xv){const r=bd.fromString(t,...n);return Hv(r),new ew(e,null,new Sd(r))}{if(!(e instanceof ew||e instanceof tw))throw new sd(id.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bd.fromString(t,...n));return Hv(r),new ew(e.firestore,e instanceof tw?e.converter:null,new Sd(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iw{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new ly(this,"async_queue_retry"),this.Xa=()=>{const e=cy();e&&Xh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const e=cy();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=cy();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise((()=>{}));const t=new od;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ga.push(e),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Md(e))throw e;Xh("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(e){const t=this.Wa.then((()=>(this.Ja=!0,e().catch((e=>{this.Ha=e,this.Ja=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Yh("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ja=!1,e))))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Ky.createAndSchedule(this,e,t,n,(e=>this.ru(e)));return this.ja.push(r),r}eu(){this.Ha&&td()}verifyOperationInProgress(){}async iu(){let e;do{e=this.Wa,await e}while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then((()=>{this.ja.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.ja)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()}))}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function sw(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class ow extends Xv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new iw}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uw(this),this._firestoreClient.terminate()}}function aw(e,t){const n="object"==typeof e?e:an(),r="string"==typeof e?e:t||"(default)",i=en(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=ce("firestore");e&&Yv(i,...e)}return i}function cw(e){return e._firestoreClient||uw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function uw(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new cf(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,zv(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Lv(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lw(Zd.fromBase64String(e))}catch(e){throw new sd(id.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new lw(Zd.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new sd(id.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Td(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dw{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new sd(id.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new sd(id.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yd(this._lat,e._lat)||yd(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=/^__.*__$/;class gw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sg(e,this.data,this.fieldMask,t,this.fieldTransforms):new ig(e,this.data,t,this.fieldTransforms)}}function mw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw td()}}class yw{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new yw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.Pu(e),r}Iu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Nw(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(mw(this.uu)&&pw.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class vw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||uy(e)}Ru(e,t,n,r=!1){return new yw({uu:e,methodName:t,Au:n,path:Td.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ww(e){const t=e._freezeSettings(),n=uy(e._databaseId);return new vw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function _w(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);Sw("Data must be an object, but it was:",o,r);const a=Iw(r,o);let c,u;if(s.merge)c=new Xd(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Cw(t,r,n);if(!o.contains(i))throw new sd(id.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Rw(e,i)||e.push(i)}c=new Xd(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new gw(new Sf(a),c,u)}class Ew extends dw{_toFieldTransform(e){return new Gp(e.path,new Vp)}isEqual(e){return e instanceof Ew}}function bw(e,t){if(Tw(e=Me(e)))return Sw("Unsupported field value:",t,e),Iw(e,t);if(e instanceof dw)return function(e,t){if(!mw(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=bw(i,t.Tu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Me(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Lp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=wd.fromDate(e);return{timestampValue:Bg(t.serializer,n)}}if(e instanceof wd){const n=new wd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Bg(t.serializer,n)}}if(e instanceof fw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof lw)return{bytesValue:zg(t.serializer,e._byteString)};if(e instanceof ew){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Kg(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${Wv(e)}`)}(e,t)}function Iw(e,t){const n={};return Kd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$d(e,((e,r)=>{const i=bw(r,t.lu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Tw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof wd||e instanceof fw||e instanceof lw||e instanceof ew||e instanceof dw)}function Sw(e,t,n){if(!Tw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Wv(n);throw"an object"===r?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function Cw(e,t,n){if((t=Me(t))instanceof hw)return t._internalPath;if("string"==typeof t)return Aw(e,t);throw Nw("Field path arguments must be of type string or ",e,!1,void 0,n)}const kw=new RegExp("[~\\*/\\[\\]]");function Aw(e,t,n){if(t.search(kw)>=0)throw Nw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hw(...t.split("."))._internalPath}catch(_a){throw Nw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Nw(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new sd(id.INVALID_ARGUMENT,a+e+c)}function Rw(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ew(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ow(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ow extends Dw{data(){return super.data()}}function Pw(e,t){return"string"==typeof t?Aw(e,t):t instanceof hw?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new sd(id.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mw{convertValue(e,t="none"){switch(hf(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nf(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rf(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw td()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $d(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new fw(nf(e.latitude),nf(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=of(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(af(e));default:return null}}convertTimestamp(e){const t=tf(e);return new wd(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=bd.fromString(e);nd(gm(n));const r=new uf(n.get(1),n.get(3)),i=new Sd(n.popFirst(5));return r.isEqual(t)||Yh(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fw extends Dw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Pw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Vw extends Fw{data(e={}){return super.data(e)}}class jw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Uw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vw(this._firestore,this._userDataWriter,n.key,n,new Uw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new sd(id.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Vw(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Uw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Vw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Uw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Bw(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return td()}}class zw extends Mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new lw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ew(this.firestore,null,t)}}function qw(e,t){const n=Qv(e.firestore,ow),r=rw(e),i=xw(e.converter,t);return Kw(n,[_w(ww(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Jp.exists(!1))]).then((()=>r))}function $w(e,...t){var n,r,i;e=Me(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||sw(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sw(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof ew)u=Qv(e.firestore,ow),l=rp(e._key.path),c={next:n=>{t[o]&&t[o](Hw(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Qv(e,Zv);u=Qv(n.firestore,ow),l=n._query;const r=new zw(u);c={next:e=>{t[o]&&t[o](new jw(u,r,n,e))},error:t[o+1],complete:t[o+2]},Lw(e._query)}return function(e,t,n,r){const i=new Pv(r),s=new rv(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Yy(await Bv(e),s))),()=>{i.Ca(),e.asyncQueue.enqueueAndForget((async()=>Zy(await Bv(e),s)))}}(cw(u),l,a,c)}function Kw(e,t){return function(e,t){const n=new od;return e.asyncQueue.enqueueAndForget((async()=>fv(await jv(e),t,n))),n.promise}(cw(e),t)}function Hw(e,t,n){const r=n.docs.get(t._key),i=new zw(e);return new Fw(e,i,t._key,r,new Uw(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){return new Ew("serverTimestamp")}!function(e,t=!0){!function(e){Wh=e}(sn),Zt(new xe("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ow(new ld(e.getProvider("auth-internal")),new pd(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new sd(id.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uf(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),cn(Hh,"4.1.0",e),cn(Hh,"4.1.0","esm2017")}();const Ww={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},Qw=on(Ww),Jw=aw(Qw);var Xw=Jw;const Yw=ra(),Zw={mounted:e=>e.focus()};var e_={emits:["loggedIn"],directives:{focus:Zw},data(){return{userName:"",email:"",password:"",isSigningUp:!1,signUpError:null}},computed:{signUpButtonText(){return this.isSigningUp?"Signing Up...":"Sign Up"},isFormValid(){return this.userName&&this.email&&this.password}},methods:{async signUp(){if(this.isFormValid&&""!==this.userName.trim()&&""!==this.email.trim()&&""!==this.password.trim()){this.isSigningUp=!0;try{await qi(Yw,this.email,this.password),await Hi(Yw.currentUser,{displayName:this.userName}),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/email-already-in-use":this.signUpError="Error: Email already in use.";break;default:this.signUpError=e.message;break}}finally{this.isSigningUp=!1}}}}},t_=n(3744);const n_=(0,t_.Z)(e_,[["render",W],["__scopeId","data-v-43847825"]]);var r_=n_;const i_=e=>((0,r.dD)("data-v-72937d8e"),e=e(),(0,r.Cn)(),e),s_=i_((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Log in",-1))),o_={style:{display:"flex","flex-direction":"column"}},a_=i_((()=>(0,r._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Email:",-1))),c_={style:{display:"flex","flex-direction":"column"}},u_=i_((()=>(0,r._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),l_=i_((()=>(0,r._)("button",{style:{"margin-top":"0.5em",color:"#87ff7a"},class:"button-35"},"Log in",-1))),h_={style:{"margin-top":"1em"}},d_={style:{color:"red"}};function f_(e,t,n,o,a,c){const u=(0,r.Q2)("focus");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>c.login&&c.login(...e)),["prevent"]))},[s_,(0,r._)("div",o_,[a_,(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),autocomplete:"email"},null,512),[[s.nr,a.email],[u]])]),(0,r._)("div",c_,[u_,(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e)},null,512),[[s.nr,a.password]])]),l_,(0,r._)("div",h_,[(0,r._)("span",d_,(0,i.zw)(a.errorMessage),1)])],32)}const p_={mounted:e=>e.focus()};var g_={emits:["loggedIn"],directives:{focus:p_},data(){return{email:"",password:"",errorMessage:""}},methods:{async login(){try{await $i(Yw,this.email,this.password),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/wrong-password":this.errorMessage="Error: Invalid password.";break;case"auth/user-not-found":this.errorMessage="Error: User not found.";break;case"auth/invalid-email":this.errorMessage="Error: Invalid email.";break;default:this.errorMessage=e.message;break}}}}};const m_=(0,t_.Z)(g_,[["render",f_],["__scopeId","data-v-72937d8e"]]);var y_=m_,v_={components:{SignUpPage:r_,LoginPage:y_,FirstFooter:U.Z},data(){return{isLoggedIn:!1,showLogin:!0,userName:this.displayName,name:"",message:"",messageLength:50,submissions:[],displayName:"",lastMessageSentTime:0,timeElapsed:0,errorMessage:""}},computed:{textStyle(){return{color:this.name.length>0?"#87ff7a":"#ff6b6b;"}}},beforeUpdate(){Yw.currentUser&&(this.displayName=Yw.currentUser.displayName,this.userName=this.displayName)},watch:{name(e){e.length>=this.messageLength?(this.errorMessage="Subject cannot be longer than "+this.messageLength+" characters!",this.name=e.slice(0,this.messageLength)):0==e.length&&(this.textStyle.color="#ff6b6b")}},methods:{async createUser(){try{if(""==this.name)throw this.errorMessage="Please enter a subject!",new Error("Please enter a subject!");if(""==this.message)throw this.errorMessage="Please enter a message!",new Error("Please enter a message!");this.displayName=Yw.currentUser,this.isLoggedIn?this.sendMessage():alert("You must be logged in to submit a message!")}catch(e){console.error("Error adding document!: ",e)}},async sendMessage(){const e=(new Date).getTime();if(console.log(e),this.timeElapsed=e-this.lastMessageSentTime,console.log(this.timeElapsed),this.timeElapsed<1e4)return console.log("Please wait at least 10 seconds before sending another message."),void alert("Please wait at least 10 seconds before sending another message.");console.log("message sent"),this.lastMessageSentTime=e;const t=nw(Xw,"submissions"),n={name:this.name,userName:this.userName,message:this.message,timestamp:Gw()},r=await qw(t,n);console.log("Document written with ID: ",r.id)},handleLogin(){this.isLoggedIn=!0,document.cookie="isLoggedIn=true; SameSite=Strict",localStorage.setItem("isLoggedIn","true"),document.cookie=`userName=${this.userName}; SameSite=Strict`,localStorage.setItem("userName",this.userName)},signOut(){try{Qi(Yw)}catch(e){console.error("Error signing out user: ",e)}},handleLogout(){this.signOut(),this.isLoggedIn=!1,document.cookie="isLoggedIn=false; SameSite=Strict",document.cookie="userName=; SameSite=Strict",localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userName")}},created(){const e=nw(Xw,"submissions");$w(e,(e=>{const t=[];e.forEach((e=>{const n={id:e.id,...e.data()};n.timestamp&&t.push(n)})),t.sort(((e,t)=>e.timestamp.toMillis()-t.timestamp.toMillis())),this.submissions=t}));const t=localStorage.getItem("isLoggedIn");"true"===t&&(this.isLoggedIn=!0)}};const w_=(0,t_.Z)(v_,[["render",x],["__scopeId","data-v-b4375eae"]]);var __=w_}}]);
//# sourceMappingURL=529.684471cf.js.map