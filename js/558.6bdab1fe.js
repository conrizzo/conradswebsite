"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[558],{1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7658:function(e,t,n){var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},5585:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(6252),i=n(3577);const s={class:"footer"},o=(0,r._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),a=(0,r._)("br",null,null,-1),c=(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,n,u,l,h){return(0,r.wg)(),(0,r.iD)("footer",s,[(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)(" Conrad's account on "),o,(0,r.Uk)(" | conradswebsite.com © "+(0,i.zw)(h.getCurrentYear),1),a,(0,r.Uk)(" unless mentioned otherwise, licensing is "),c,(0,r.Uk)(". ")])])])}var l={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=n(3744);const d=(0,h.Z)(l,[["render",u]]);var f=d},6558:function(e,t,n){n.r(t),n.d(t,{default:function(){return Kw}});var r=n(6252),i=n(3577),s=n(9963);const o=e=>((0,r.dD)("data-v-43b1eea6"),e=e(),(0,r.Cn)(),e),a={style:{background:"rgb(255, 255, 255)","padding-bottom":"2em","padding-top":"2.7em"}},c=o((()=>(0,r._)("h2",{style:{"padding-top":"5em"}},"This page is still under construction - actively working on this!",-1))),u=o((()=>(0,r._)("p",null,[(0,r.Uk)("This is just a place to learn more about setting up a login/sign out setup using a basic BaaS (Back end as a service) tools."),(0,r._)("br"),(0,r.Uk)(" The goal will eventually be to create a more comprehensive backend once there is a need for it.")],-1))),l={key:0},h={style:{padding:"1em"}},d={key:1},f={style:{"padding-top":"1em","font-size":"2em"}},p={style:{"padding-top":"2em"}},g=o((()=>(0,r._)("h2",null,"Submit Message! - must be logged in for it to work.",-1))),m={class:"submission-container"},y={style:{"list-style":"none"}},v={style:{"font-weight":"bold","font-size":"1em",color:"rgb(3, 212, 142)",display:"inline-block",padding:"0.25em 0 0.25em 0"}},w={key:0,style:{"padding-left":"0.5em","font-size":"0.8em",color:"#ff6b6b",display:"inline-block"}},_={class:"break-text",style:{"background-color":"white",display:"inline-block",padding:"0.5em","margin-bottom":"0.5em","border-radius":"0.5em"}};function E(e,t,n,o,E,b){const I=(0,r.up)("LoginPage"),T=(0,r.up)("SignUpPage"),S=(0,r.up)("FirstFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[c,u,E.isLoggedIn?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("h2",f,"Welcome, you can submit a message now, you are logged in! "+(0,i.zw)(E.displayName),1),(0,r._)("button",{class:"button-35",style:{position:"absolute",top:"3em",right:"1em"},onClick:t[2]||(t[2]=(...e)=>b.handleLogout&&b.handleLogout(...e))},"Logout")])):((0,r.wg)(),(0,r.iD)("div",l,[E.showLogin?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(I,{onLoggedIn:b.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",h,[(0,r.Uk)("No account yet? "),(0,r._)("span",{onClick:t[0]||(t[0]=e=>E.showLogin=!1)},"Sign up")])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(T,{onLoggedIn:b.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",null,[(0,r.Uk)("Already registered? "),(0,r._)("span",{onClick:t[1]||(t[1]=e=>E.showLogin=!0)},"Login")])],64))])),(0,r._)("div",p,[(0,r._)("form",{name:"sendMessage",class:"addinput-form",onSubmit:t[6]||(t[6]=(0,s.iM)(((...t)=>e.createSubmission&&e.createSubmission(...t)),["prevent"]))},[g,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Name to post as",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>E.name=e),name:"submissionName"},null,512),[[s.nr,E.name]]),(0,r.wy)((0,r._)("textarea",{type:"text",placeholder:"Description",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>E.description=e),name:"submissionDescription",cols:"50",rows:"10"},null,512),[[s.nr,E.description]]),(0,r._)("button",{onClick:t[5]||(t[5]=(...e)=>b.createUser&&b.createUser(...e)),class:"button-35"},"Add Entry")],32),(0,r._)("div",m,[(0,r._)("ul",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(E.submissions,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r._)("div",null,[(0,r._)("span",v,(0,i.zw)(e.name),1),e.timestamp?((0,r.wg)(),(0,r.iD)("p",w,(0,i.zw)(e.timestamp.toDate().toLocaleString()),1)):(0,r.kq)("",!0)]),(0,r._)("p",_,(0,i.zw)(e.description),1)])))),128))])])])]),(0,r.Wm)(S)],64)}n(7658);var b=n(5585);const I=e=>((0,r.dD)("data-v-6ee66ad6"),e=e(),(0,r.Cn)(),e),T=I((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Sign Up",-1))),S=["disabled"],C={key:0,style:{color:"red"}};function k(e,t,n,o,a,c){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>c.signUp&&c.signUp(...e)),["prevent"]))},[T,(0,r.wy)((0,r._)("input",{name:"text",type:"text",placeholder:"Username",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e)},null,512),[[s.nr,a.username]]),(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e)},null,512),[[s.nr,a.email]]),(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e)},null,512),[[s.nr,a.password]]),(0,r._)("button",{style:{margin:"0.5em"},class:"button-35",disabled:a.isSigningUp},(0,i.zw)(c.signUpButtonText),9,S),a.signUpError?((0,r.wg)(),(0,r.iD)("div",C,(0,i.zw)(a.signUpError),1)):(0,r.kq)("",!0)],32)}
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
const A=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},N=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(A(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):N(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw new D;const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O=function(e){const t=A(e);return R.encodeByteArray(t,!0)},P=function(e){return O(e).replace(/\./g,"")},L=function(e){try{return R.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function M(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const x=()=>M().__FIREBASE_DEFAULTS__,U=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},F=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&L(e[1]);return t&&JSON.parse(t)},V=()=>{try{return x()||U()||F()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},j=e=>{var t,n;return null===(n=null===(t=V())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},B=e=>{const t=j(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},z=()=>{var e;return null===(e=V())||void 0===e?void 0:e.config},q=e=>{var t;return null===(t=V())||void 0===t?void 0:t[`_${e}`]};
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
class ${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function K(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[P(JSON.stringify(n)),P(JSON.stringify(o)),a].join(".")}
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
 */function H(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function G(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function W(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function Q(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function J(){const e=H();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function X(){try{return"object"===typeof indexedDB}catch(e){return!1}}function Y(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const Z="FirebaseError";class ee extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Z,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,te.prototype.create)}}class te{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?ne(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new ee(r,o,n);return a}}function ne(e,t){return e.replace(re,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const re=/\{\$([^}]+)}/g;
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
 */function ie(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function se(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(oe(n)&&oe(s)){if(!se(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function oe(e){return null!==e&&"object"===typeof e}
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
function ae(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ce(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ue(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function le(e,t){const n=new he(e,t);return n.subscribe.bind(n)}class he{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=de(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=fe),void 0===r.error&&(r.error=fe),void 0===r.complete&&(r.complete=fe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function de(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function fe(){}
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
function pe(e){return e&&e._delegate?e._delegate:e}class ge{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const me="[DEFAULT]";
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
 */class ye{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new $;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(we(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ve(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ve(e){return e===me?void 0:e}function we(e){return"EAGER"===e.instantiationMode}
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
 */class _e{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ye(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const Ee=[];var be;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(be||(be={}));const Ie={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Te=be.INFO,Se={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Ce=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Se[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ke{constructor(e){this.name=e,this._logLevel=Te,this._logHandler=Ce,this._userLogHandler=null,Ee.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const Ae=(e,t)=>t.some((t=>e instanceof t));let Ne,Re;function De(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oe(){return Re||(Re=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pe=new WeakMap,Le=new WeakMap,Me=new WeakMap,xe=new WeakMap,Ue=new WeakMap;function Fe(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t($e(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Pe.set(t,e)})).catch((()=>{})),Ue.set(t,e),t}function Ve(e){if(Le.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Le.set(e,t)}let je={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Le.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Me.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Be(e){je=e(je)}function ze(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Oe().includes(e)?function(...t){return e.apply(Ke(this),t),$e(Pe.get(this))}:function(...t){return $e(e.apply(Ke(this),t))}:function(t,...n){const r=e.call(Ke(this),t,...n);return Me.set(r,t.sort?t.sort():[t]),$e(r)}}function qe(e){return"function"===typeof e?ze(e):(e instanceof IDBTransaction&&Ve(e),Ae(e,De())?new Proxy(e,je):e)}function $e(e){if(e instanceof IDBRequest)return Fe(e);if(xe.has(e))return xe.get(e);const t=qe(e);return t!==e&&(xe.set(e,t),Ue.set(t,e)),t}const Ke=e=>Ue.get(e);function He(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=$e(o);return r&&o.addEventListener("upgradeneeded",(e=>{r($e(o.result),e.oldVersion,e.newVersion,$e(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ge=["get","getKey","getAll","getAllKeys","count"],We=["put","add","delete","clear"],Qe=new Map;function Je(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Qe.get(t))return Qe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=We.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Qe.set(t,s),s}Be((e=>({...e,get:(t,n,r)=>Je(t,n)||e.get(t,n,r),has:(t,n)=>!!Je(t,n)||e.has(t,n)})));
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
class Xe{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Ye(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Ye(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Ze="@firebase/app",et="0.9.15",tt=new ke("@firebase/app"),nt="@firebase/app-compat",rt="@firebase/analytics-compat",it="@firebase/analytics",st="@firebase/app-check-compat",ot="@firebase/app-check",at="@firebase/auth",ct="@firebase/auth-compat",ut="@firebase/database",lt="@firebase/database-compat",ht="@firebase/functions",dt="@firebase/functions-compat",ft="@firebase/installations",pt="@firebase/installations-compat",gt="@firebase/messaging",mt="@firebase/messaging-compat",yt="@firebase/performance",vt="@firebase/performance-compat",wt="@firebase/remote-config",_t="@firebase/remote-config-compat",Et="@firebase/storage",bt="@firebase/storage-compat",It="@firebase/firestore",Tt="@firebase/firestore-compat",St="firebase",Ct="10.1.0",kt="[DEFAULT]",At={[Ze]:"fire-core",[nt]:"fire-core-compat",[it]:"fire-analytics",[rt]:"fire-analytics-compat",[ot]:"fire-app-check",[st]:"fire-app-check-compat",[at]:"fire-auth",[ct]:"fire-auth-compat",[ut]:"fire-rtdb",[lt]:"fire-rtdb-compat",[ht]:"fire-fn",[dt]:"fire-fn-compat",[ft]:"fire-iid",[pt]:"fire-iid-compat",[gt]:"fire-fcm",[mt]:"fire-fcm-compat",[yt]:"fire-perf",[vt]:"fire-perf-compat",[wt]:"fire-rc",[_t]:"fire-rc-compat",[Et]:"fire-gcs",[bt]:"fire-gcs-compat",[It]:"fire-fst",[Tt]:"fire-fst-compat","fire-js":"fire-js",[St]:"fire-js-all"},Nt=new Map,Rt=new Map;function Dt(e,t){try{e.container.addComponent(t)}catch(n){tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ot(e){const t=e.name;if(Rt.has(t))return tt.debug(`There were multiple attempts to register component ${t}.`),!1;Rt.set(t,e);for(const n of Nt.values())Dt(n,e);return!0}function Pt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Lt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new te("app","Firebase",Lt);
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
class xt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}
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
 */const Ut=Ct;function Ft(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:kt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!==typeof i||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=z()),!n)throw Mt.create("no-options");const s=Nt.get(i);if(s){if(se(n,s.options)&&se(r,s.config))return s;throw Mt.create("duplicate-app",{appName:i})}const o=new _e(i);for(const c of Rt.values())o.addComponent(c);const a=new xt(n,r,o);return Nt.set(i,a),a}function Vt(e=kt){const t=Nt.get(e);if(!t&&e===kt&&z())return Ft();if(!t)throw Mt.create("no-app",{appName:e});return t}function jt(e,t,n){var r;let i=null!==(r=At[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void tt.warn(e.join(" "))}Ot(new ge(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const Bt="firebase-heartbeat-database",zt=1,qt="firebase-heartbeat-store";let $t=null;function Kt(){return $t||($t=He(Bt,zt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qt)}}}).catch((e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})}))),$t}async function Ht(e){try{const t=await Kt(),n=await t.transaction(qt).objectStore(qt).get(Wt(e));return n}catch(t){if(t instanceof ee)tt.warn(t.message);else{const e=Mt.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});tt.warn(e.message)}}}async function Gt(e,t){try{const n=await Kt(),r=n.transaction(qt,"readwrite"),i=r.objectStore(qt);await i.put(t,Wt(e)),await r.done}catch(n){if(n instanceof ee)tt.warn(n.message);else{const e=Mt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});tt.warn(e.message)}}}function Wt(e){return`${e.name}!${e.options.appId}`}
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
 */const Qt=1024,Jt=2592e6;class Xt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new en(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Yt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Jt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Yt(),{heartbeatsToSend:t,unsentEntries:n}=Zt(this._heartbeatsCache.heartbeats),r=P(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yt(){const e=new Date;return e.toISOString().substring(0,10)}function Zt(e,t=Qt){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),tn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class en{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!X()&&Y().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ht(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tn(e){return P(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function nn(e){Ot(new ge("platform-logger",(e=>new Xe(e)),"PRIVATE")),Ot(new ge("heartbeat",(e=>new Xt(e)),"PRIVATE")),jt(Ze,et,e),jt(Ze,et,"esm2017"),jt("fire-js","")}nn("");function rn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function sn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const on=sn,an=new te("auth","Firebase",sn()),cn=new ke("@firebase/auth");function un(e,...t){cn.logLevel<=be.WARN&&cn.warn(`Auth (${Ut}): ${e}`,...t)}function ln(e,...t){cn.logLevel<=be.ERROR&&cn.error(`Auth (${Ut}): ${e}`,...t)}
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
 */function hn(e,...t){throw pn(e,...t)}function dn(e,...t){return pn(e,...t)}function fn(e,t,n){const r=Object.assign(Object.assign({},on()),{[t]:n}),i=new te("auth","Firebase",r);return i.create(t,{appName:e.name})}function pn(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return an.create(e,...t)}function gn(e,t,...n){if(!e)throw pn(t,...n)}function mn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ln(t),new Error(t)}function yn(e,t){e||mn(t)}
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
 */function vn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wn(){return"http:"===_n()||"https:"===_n()}function _n(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function En(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(wn()||W()||"connection"in navigator))||navigator.onLine}function bn(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class In{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=G()||Q()}get(){return En()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Tn(e,t){yn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Sn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Cn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},kn=new In(3e4,6e4);
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
 */function An(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nn(e,t,n,r,i={}){return Rn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ae(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Sn.fetch()(On(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Rn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cn),t);try{const t=new Pn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ln(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ln(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ln(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ln(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw fn(e,a,o);hn(e,a)}}catch(i){if(i instanceof ee)throw i;hn(e,"network-request-failed",{message:String(i)})}}async function Dn(e,t,n,r,i={}){const s=await Nn(e,t,n,r,i);return"mfaPendingCredential"in s&&hn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function On(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Tn(e.config,i):`${e.config.apiScheme}://${i}`}class Pn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(dn(this.auth,"network-request-failed"))),kn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ln(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function Mn(e,t){return Nn(e,"POST","/v1/accounts:delete",t)}async function xn(e,t){return Nn(e,"POST","/v1/accounts:lookup",t)}
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
 */function Un(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function Fn(e,t=!1){const n=pe(e),r=await n.getIdToken(t),i=jn(r);gn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:Un(Vn(i.auth_time)),issuedAtTime:Un(Vn(i.iat)),expirationTime:Un(Vn(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Vn(e){return 1e3*Number(e)}function jn(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ln("JWT malformed, contained fewer than 3 sections"),null;try{const e=L(n);return e?JSON.parse(e):(ln("Failed to decode base64 JWT payload"),null)}catch(i){return ln("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Bn(e){const t=jn(e);return gn(t,"internal-error"),gn("undefined"!==typeof t.exp,"internal-error"),gn("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ee&&qn(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function qn({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class $n{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Kn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Hn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zn(e,xn(n,{idToken:r}));gn(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Qn(s.providerUserInfo):[],a=Wn(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kn(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Gn(e){const t=pe(e);await Hn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wn(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Qn(e){return e.map((e=>{var{providerId:t}=e,n=rn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function Jn(e,t){const n=await Rn(e,{},(async()=>{const n=ae({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=On(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Sn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gn(e.idToken,"internal-error"),gn("undefined"!==typeof e.idToken,"internal-error"),gn("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Bn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return gn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Jn(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Xn;return n&&(gn("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(gn("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(gn("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return mn("not implemented")}}
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
 */function Yn(e,t){gn("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Zn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=rn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $n(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return gn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fn(this,e)}reload(){return Gn(this)}_assign(e){this!==e&&(gn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){gn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Hn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zn(this,Mn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:b}=t;gn(v&&b,e,"internal-error");const I=Xn.fromJSON(this.name,b);gn("string"===typeof v,e,"internal-error"),Yn(l,e.name),Yn(h,e.name),gn("boolean"===typeof w,e,"internal-error"),gn("boolean"===typeof _,e,"internal-error"),Yn(d,e.name),Yn(f,e.name),Yn(p,e.name),Yn(g,e.name),Yn(m,e.name),Yn(y,e.name);const T=new Zn({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Xn;r.updateFromServerResponse(t);const i=new Zn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Hn(i),i}}
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
 */const er=new Map;function tr(e){yn(e instanceof Function,"Expected a class definition");let t=er.get(e);return t?(yn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,er.set(e,t),t)}
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
 */class nr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nr.type="NONE";const rr=nr;
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
 */function ir(e,t,n){return`firebase:${e}:${t}:${n}`}class sr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ir(this.userKey,r.apiKey,i),this.fullPersistenceKey=ir("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sr(tr(rr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||tr(rr);const s=ir(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=Zn._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new sr(i,e,n)):new sr(i,e,n)}}
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
 */function or(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ar(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dr(t))return"Blackberry";if(fr(t))return"Webos";if(cr(t))return"Safari";if((t.includes("chrome/")||ur(t))&&!t.includes("edge/"))return"Chrome";if(hr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ar(e=H()){return/firefox\//i.test(e)}function cr(e=H()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ur(e=H()){return/crios\//i.test(e)}function lr(e=H()){return/iemobile/i.test(e)}function hr(e=H()){return/android/i.test(e)}function dr(e=H()){return/blackberry/i.test(e)}function fr(e=H()){return/webos/i.test(e)}function pr(e=H()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gr(e=H()){var t;return pr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function mr(){return J()&&10===document.documentMode}function yr(e=H()){return pr(e)||hr(e)||fr(e)||dr(e)||/windows phone/i.test(e)||lr(e)}function vr(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function wr(e,t=[]){let n;switch(e){case"Browser":n=or(H());break;case"Worker":n=`${or(H())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ut}/${r}`}
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
 */async function _r(e,t){return Nn(e,"GET","/v2/recaptchaConfig",An(e,t))}
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
 */function Er(e){return void 0!==e&&void 0!==e.enterprise}class br{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Ir(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Tr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=dn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ir().appendChild(r)}))}function Sr(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Cr="https://www.google.com/recaptcha/enterprise.js?render=",kr="recaptcha-enterprise",Ar="NO_RECAPTCHA";class Nr{constructor(e){this.type=kr,this.auth=Pr(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{_r(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new br(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Er(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ar)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Er(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Tr(Cr+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Rr(e,t,n,r=!1){const i=new Nr(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Dr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Or{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lr(this),this.idTokenSubscription=new Lr(this),this.beforeStateQueue=new Dr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=an,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return gn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pe(e):null;return t&&gn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&gn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(tr(e))}))}async initializeRecaptchaConfig(){const e=await _r(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new br(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Nr(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new te("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;gn(t,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&un(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Pr(e){return pe(e)}class Lr{constructor(e){this.auth=e,this.observer=null,this.addObserver=le((e=>this.observer=e))}get next(){return gn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Mr(e,t){const n=Pt(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(se(r,null!==t&&void 0!==t?t:{}))return e;hn(e,"already-initialized")}const r=n.initialize({options:t});return r}function xr(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ur(e,t,n){const r=Pr(e);gn(r._canInitEmulator,r,"emulator-config-failed"),gn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Fr(t),{host:o,port:a}=Vr(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Br()}function Fr(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vr(e){const t=Fr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:jr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:jr(t)}}}function jr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Br(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class zr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}
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
 */async function qr(e,t){return Nn(e,"POST","/v1/accounts:update",t)}
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
async function $r(e,t){return Dn(e,"POST","/v1/accounts:signInWithPassword",An(e,t))}
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
async function Kr(e,t){return Dn(e,"POST","/v1/accounts:signInWithEmailLink",An(e,t))}async function Hr(e,t){return Dn(e,"POST","/v1/accounts:signInWithEmailLink",An(e,t))}
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
 */class Gr extends zr{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Gr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Rr(e,n,"signInWithPassword");return $r(e,t)}return $r(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Rr(e,n,"signInWithPassword");return $r(e,t)}return Promise.reject(t)}));case"emailLink":return Kr(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hr(e,{idToken:t,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Wr(e,t){return Dn(e,"POST","/v1/accounts:signInWithIdp",An(e,t))}
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
 */const Qr="http://localhost";class Jr extends zr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=rn(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jr(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Wr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Wr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wr(e,t)}buildRequest(){const e={requestUri:Qr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=ae(t)}return e}}
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
 */async function Xr(e,t){return Nn(e,"POST","/v1/accounts:sendVerificationCode",An(e,t))}async function Yr(e,t){return Dn(e,"POST","/v1/accounts:signInWithPhoneNumber",An(e,t))}async function Zr(e,t){const n=await Dn(e,"POST","/v1/accounts:signInWithPhoneNumber",An(e,t));if(n.temporaryProof)throw Ln(e,"account-exists-with-different-credential",n);return n}const ei={["USER_NOT_FOUND"]:"user-not-found"};async function ti(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Dn(e,"POST","/v1/accounts:signInWithPhoneNumber",An(e,n),ei)}
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
 */class ni extends zr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ni({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ni({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Yr(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Zr(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ti(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ni({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ri(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ii(e){const t=ce(ue(e))["link"],n=t?ce(ue(t))["deep_link_id"]:null,r=ce(ue(e))["deep_link_id"],i=r?ce(ue(r))["link"]:null;return i||r||n||t||e}class si{constructor(e){var t,n,r,i,s,o;const a=ce(ue(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=ri(null!==(r=a["mode"])&&void 0!==r?r:null);gn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=ii(e);try{return new si(t)}catch(n){return null}}}
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
class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,t){return Gr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=si.parseLink(t);return gn(n,"argument-error"),Gr._fromEmailAndCode(e,n.code,n.tenantId)}}oi.PROVIDER_ID="password",oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ci extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class ui extends ci{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch(t){return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com",ui.PROVIDER_ID="facebook.com";
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
class li extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jr._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return li.credential(t,n)}catch(r){return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com",li.PROVIDER_ID="google.com";
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
class hi extends ci{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch(t){return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com",hi.PROVIDER_ID="github.com";
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
class di extends ci{constructor(){super("twitter.com")}static credential(e,t){return Jr._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return di.credential(t,n)}catch(r){return null}}}
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
async function fi(e,t){return Dn(e,"POST","/v1/accounts:signUp",An(e,t))}
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
 */di.TWITTER_SIGN_IN_METHOD="twitter.com",di.PROVIDER_ID="twitter.com";class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Zn._fromIdTokenResponse(e,n,r),s=gi(n),o=new pi({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=gi(n);return new pi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function gi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class mi extends ee{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,mi.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new mi(e,t,n,r)}}function yi(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw mi._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function vi(e,t,n=!1){const r=await zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pi._forOperation(e,"link",r)}
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
async function wi(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await zn(e,yi(r,i,t,e),n);gn(s.idToken,r,"internal-error");const o=jn(s.idToken);gn(o,r,"internal-error");const{sub:a}=o;return gn(e.uid===a,r,"user-mismatch"),pi._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&hn(r,"user-mismatch"),s}}
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
 */async function _i(e,t,n=!1){const r="signIn",i=await yi(e,r,t),s=await pi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ei(e,t){return _i(Pr(e),t)}async function bi(e,t,n){var r;const i=Pr(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Rr(i,s,"signUpPassword");o=fi(i,e)}else o=fi(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Rr(i,s,"signUpPassword");return fi(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await pi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ii(e,t,n){return Ei(pe(e),oi.credential(t,n))}
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
async function Ti(e,t){return Nn(e,"POST","/v1/accounts:update",t)}
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
 */async function Si(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=pe(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await zn(r,Ti(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ci(e,t,n,r){return pe(e).onIdTokenChanged(t,n,r)}function ki(e,t,n){return pe(e).beforeAuthStateChanged(t,n)}function Ai(e){return pe(e).signOut()}
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
function Ni(e,t){return Nn(e,"POST","/v2/accounts/mfaEnrollment:start",An(e,t))}function Ri(e,t){return Nn(e,"POST","/v2/accounts/mfaEnrollment:finalize",An(e,t))}function Di(e,t){return Nn(e,"POST","/v2/accounts/mfaEnrollment:start",An(e,t))}function Oi(e,t){return Nn(e,"POST","/v2/accounts/mfaEnrollment:finalize",An(e,t))}new WeakMap;const Pi="__sak";
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
 */class Li{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Mi(){const e=H();return cr(e)||pr(e)}const xi=1e3,Ui=10;class Fi extends Li{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mi()&&vr(),this.fallbackToPolling=yr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);mr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ui):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),xi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fi.type="LOCAL";const Vi=Fi;
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
 */class ji extends Li{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ji.type="SESSION";const Bi=ji;
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
 */function zi(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await zi(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function $i(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */qi.receivers=[];class Ki{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=$i("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Hi(){return window}function Gi(e){Hi().location.href=e}
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
 */function Wi(){return"undefined"!==typeof Hi()["WorkerGlobalScope"]&&"function"===typeof Hi()["importScripts"]}async function Qi(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ji(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Xi(){return Wi()?self:null}
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
 */const Yi="firebaseLocalStorageDb",Zi=1,es="firebaseLocalStorage",ts="fbase_key";class ns{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function rs(e,t){return e.transaction([es],t?"readwrite":"readonly").objectStore(es)}function is(){const e=indexedDB.deleteDatabase(Yi);return new ns(e).toPromise()}function ss(){const e=indexedDB.open(Yi,Zi);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(es,{keyPath:ts})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(es)?t(n):(n.close(),await is(),t(await ss()))}))}))}async function os(e,t,n){const r=rs(e,!0).put({[ts]:t,value:n});return new ns(r).toPromise()}async function as(e,t){const n=rs(e,!1).get(t),r=await new ns(n).toPromise();return void 0===r?null:r.value}function cs(e,t){const n=rs(e,!0).delete(t);return new ns(n).toPromise()}const us=800,ls=3;class hs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ss()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ls)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(Xi()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qi(),!this.activeServiceWorker)return;this.sender=new Ki(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ji()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ss();return await os(e,Pi,"1"),await cs(e,Pi),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>os(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>as(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>cs(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=rs(e,!1).getAll();return new ns(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),us)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}hs.type="LOCAL";const ds=hs;
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
 */function fs(e,t){return Nn(e,"POST","/v2/accounts/mfaSignIn:start",An(e,t))}function ps(e,t){return Nn(e,"POST","/v2/accounts/mfaSignIn:finalize",An(e,t))}function gs(e,t){return Nn(e,"POST","/v2/accounts/mfaSignIn:finalize",An(e,t))}
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
Sr("rcb"),new In(3e4,6e4);
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
const ms="recaptcha";async function ys(e,t,n){var r;const i=await n.verify();try{let s;if(gn("string"===typeof i,e,"argument-error"),gn(n.type===ms,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){gn("enroll"===t.type,e,"internal-error");const n=await Ni(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{gn("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;gn(n,e,"missing-multi-factor-info");const o=await fs(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Xr(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class vs{constructor(e){this.providerId=vs.PROVIDER_ID,this.auth=Pr(e)}verifyPhoneNumber(e,t){return ys(this.auth,e,pe(t))}static credential(e,t){return ni._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vs.credentialFromTaggedObject(t)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ni._fromTokenResponse(t,n):null}}
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
function ws(e,t){return t?tr(t):(gn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */vs.PROVIDER_ID="phone",vs.PHONE_SIGN_IN_METHOD="phone";class _s extends zr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Es(e){return _i(e.auth,new _s(e),e.bypassAuthState)}function bs(e){const{auth:t,user:n}=e;return gn(n,t,"internal-error"),wi(n,new _s(e),e.bypassAuthState)}async function Is(e){const{auth:t,user:n}=e;return gn(n,t,"internal-error"),vi(n,new _s(e),e.bypassAuthState)}
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
 */class Ts{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Es;case"linkViaPopup":case"linkViaRedirect":return Is;case"reauthViaPopup":case"reauthViaRedirect":return bs;default:hn(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ss=new In(2e3,1e4);class Cs extends Ts{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return gn(e,this.auth,"internal-error"),e}async onExecution(){yn(1===this.filter.length,"Popup operations only handle one event");const e=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(dn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ss.get())};e()}}Cs.currentPopupAction=null;
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
const ks="pendingRedirect",As=new Map;class Ns extends Ts{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=As.get(this.auth._key());if(!e){try{const t=await Rs(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}As.set(this.auth._key(),e)}return this.bypassAuthState||As.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rs(e,t){const n=Ps(t),r=Os(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Ds(e,t){As.set(e._key(),t)}function Os(e){return tr(e._redirectPersistence)}function Ps(e){return ir(ks,e.config.apiKey,e.name)}
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
 */async function Ls(e,t,n=!1){const r=Pr(e),i=ws(r,t),s=new Ns(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const Ms=6e5;class xs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Vs(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fs(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(dn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ms&&this.cachedEventUids.clear(),this.cachedEventUids.has(Us(e))}saveEventToCache(e){this.cachedEventUids.add(Us(e)),this.lastProcessedEventTime=Date.now()}}function Us(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fs({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Vs(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fs(e);default:return!1}}
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
 */async function js(e,t={}){return Nn(e,"GET","/v1/projects",t)}
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
 */const Bs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zs=/^https?/;async function qs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await js(e);for(const r of t)try{if($s(r))return}catch(n){}hn(e,"unauthorized-domain")}function $s(e){const t=vn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!zs.test(n))return!1;if(Bs.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Ks=new In(3e4,6e4);function Hs(){const e=Hi().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Gs(e){return new Promise(((t,n)=>{var r,i,s;function o(){Hs(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hs(),n(dn(e,"network-request-failed"))},timeout:Ks.get()})}if(null===(i=null===(r=Hi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Hi().gapi)||void 0===s?void 0:s.load)){const t=Sr("iframefcb");return Hi()[t]=()=>{gapi.load?o():n(dn(e,"network-request-failed"))},Tr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ws=null,e}))}let Ws=null;function Qs(e){return Ws=Ws||Gs(e),Ws}
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
 */const Js=new In(5e3,15e3),Xs="__/auth/iframe",Ys="emulator/auth/iframe",Zs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function to(e){const t=e.config;gn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tn(t,Ys):`https://${e.config.authDomain}/${Xs}`,r={apiKey:t.apiKey,appName:e.name,v:Ut},i=eo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ae(r).slice(1)}`}async function no(e){const t=await Qs(e),n=Hi().gapi;return gn(n,e,"internal-error"),t.open({where:document.body,url:to(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zs,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=dn(e,"network-request-failed"),s=Hi().setTimeout((()=>{r(i)}),Js.get());function o(){Hi().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const ro={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},io=500,so=600,oo="_blank",ao="http://localhost";class co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function uo(e,t,n,r=io,i=so){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ro),{width:r.toString(),height:i.toString(),top:s,left:o}),u=H().toLowerCase();n&&(a=ur(u)?oo:n),ar(u)&&(t=t||ao,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(gr(u)&&"_self"!==a)return lo(t||"",a),new co(null);const h=window.open(t||"",a,l);gn(h,e,"popup-blocked");try{h.focus()}catch(d){}return new co(h)}function lo(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const ho="__/auth/handler",fo="emulator/auth/handler",po=encodeURIComponent("fac");async function go(e,t,n,r,i,s){gn(e.config.authDomain,e,"auth-domain-config-required"),gn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ut,eventId:i};if(t instanceof ai){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ie(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ci){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${po}=${encodeURIComponent(c)}`:"";return`${mo(e)}?${ae(a).slice(1)}${u}`}function mo({config:e}){return e.emulator?Tn(e,fo):`https://${e.authDomain}/${ho}`}
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
 */const yo="webStorageSupport";class vo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bi,this._completeRedirectFn=Ls,this._overrideRedirectResult=Ds}async _openPopup(e,t,n,r){var i;yn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await go(e,t,n,vn(),r);return uo(e,s,$i())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await go(e,t,n,vn(),r);return Gi(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await no(e),n=new xs(e);return t.register("authEvent",(t=>{gn(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(yo,{type:yo},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[yo];void 0!==i&&t(!!i),hn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yr()||cr()||pr()}}const wo=vo;class _o{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return mn("unexpected MultiFactorSessionType")}}}class Eo extends _o{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Eo(e)}_finalizeEnroll(e,t,n){return Ri(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ps(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bo{constructor(){}static assertion(e){return Eo._fromCredential(e)}}bo.FACTOR_ID="phone";class Io{static assertionForEnrollment(e,t){return To._fromSecret(e,t)}static assertionForSignIn(e,t){return To._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;gn("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Di(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return So._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Io.FACTOR_ID="totp";class To extends _o{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new To(t,void 0,e)}static _fromEnrollmentId(e,t){return new To(t,e)}async _finalizeEnroll(e,t,n){return gn("undefined"!==typeof this.secret,e,"argument-error"),Oi(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){gn(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return gs(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class So{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new So(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Co(e)||Co(t))&&(r=!0),r&&(Co(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Co(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Co(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ko="@firebase/auth",Ao="1.1.0";
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
class No{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Ro(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Do(e){Ot(new ge("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;gn(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wr(e)},u=new Or(r,i,s,c);return xr(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),Ot(new ge("auth-internal",(e=>{const t=Pr(e.getProvider("auth").getImmediate());return(e=>new No(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),jt(ko,Ao,Ro(e)),jt(ko,Ao,"esm2017")}
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
 */const Oo=300,Po=q("authIdTokenMaxAge")||Oo;let Lo=null;const Mo=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Po)return;const i=null===n||void 0===n?void 0:n.token;Lo!==i&&(Lo=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xo(e=Vt()){const t=Pt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Mr(e,{popupRedirectResolver:wo,persistence:[ds,Vi,Bi]}),r=q("authTokenSyncURL");if(r){const e=Mo(r);ki(n,e,(()=>e(n.currentUser))),Ci(n,(t=>e(t)))}const i=j("auth");return i&&Ur(n,`http://${i}`),n}Do("Browser");var Uo="firebase",Fo="10.1.0";
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
jt(Uo,Fo,"app");var Vo,jo="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Bo={},zo=zo||{},qo=jo||self;function $o(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function Ko(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Ho(e){return Object.prototype.hasOwnProperty.call(e,Go)&&e[Go]||(e[Go]=++Wo)}var Go="closure_uid_"+(1e9*Math.random()>>>0),Wo=0;function Qo(e,t,n){return e.call.apply(e.bind,arguments)}function Jo(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Xo(e,t,n){return Xo=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qo:Jo,Xo.apply(null,arguments)}function Yo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Zo(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function ea(){this.s=this.s,this.o=this.o}var ta=0;ea.prototype.s=!1,ea.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==ta)||Ho(this)},ea.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const na=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ra(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ia(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if($o(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function sa(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}sa.prototype.h=function(){this.defaultPrevented=!0};var oa=function(){if(!qo.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{qo.addEventListener("test",(()=>{}),t),qo.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function aa(e){return/^[\s\xa0]*$/.test(e)}function ca(){var e=qo.navigator;return e&&(e=e.userAgent)?e:""}function ua(e){return-1!=ca().indexOf(e)}function la(e){return la[" "](e),e}function ha(e,t){var n=Xl;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}la[" "]=function(){};var da,fa,pa=ua("Opera"),ga=ua("Trident")||ua("MSIE"),ma=ua("Edge"),ya=ma||ga,va=ua("Gecko")&&!(-1!=ca().toLowerCase().indexOf("webkit")&&!ua("Edge"))&&!(ua("Trident")||ua("MSIE"))&&!ua("Edge"),wa=-1!=ca().toLowerCase().indexOf("webkit")&&!ua("Edge");function _a(){var e=qo.document;return e?e.documentMode:void 0}e:{var Ea="",ba=function(){var e=ca();return va?/rv:([^\);]+)(\)|;)/.exec(e):ma?/Edge\/([\d\.]+)/.exec(e):ga?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):wa?/WebKit\/(\S+)/.exec(e):pa?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ba&&(Ea=ba?ba[1]:""),ga){var Ia=_a();if(null!=Ia&&Ia>parseFloat(Ea)){da=String(Ia);break e}}da=Ea}if(qo.document&&ga){var Ta=_a();fa=Ta||(parseInt(da,10)||void 0)}else fa=void 0;var Sa=fa;function Ca(e,t){if(sa.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(va){e:{try{la(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ka[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ca.$.h.call(this)}}Zo(Ca,sa);var ka={2:"touch",3:"pen",4:"mouse"};Ca.prototype.h=function(){Ca.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),Na=0;function Ra(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Na,this.fa=this.ia=!1}function Da(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Oa(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Pa(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function La(e){const t={};for(const n in e)t[n]=e[n];return t}const Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xa(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<Ma.length;t++)n=Ma[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ua(e){this.src=e,this.g={},this.h=0}function Fa(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=na(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Da(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Va(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}Ua.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Va(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ra(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ja="closure_lm_"+(1e6*Math.random()|0),Ba={};function za(e,t,n,r,i){if(r&&r.once)return Ka(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)za(e,t[s],n,r,i);return null}return n=Ya(n),e&&e[Aa]?e.O(t,n,Ko(r)?!!r.capture:!!r,i):qa(e,t,n,!1,r,i)}function qa(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ko(i)?!!i.capture:!!i,a=Ja(e);if(a||(e[ja]=a=new Ua(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=$a(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oa||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Wa(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function $a(){function e(n){return t.call(e.src,e.listener,n)}const t=Qa;return e}function Ka(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ka(e,t[s],n,r,i);return null}return n=Ya(n),e&&e[Aa]?e.P(t,n,Ko(r)?!!r.capture:!!r,i):qa(e,t,n,!0,r,i)}function Ha(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ha(e,t[s],n,r,i);else r=Ko(r)?!!r.capture:!!r,n=Ya(n),e&&e[Aa]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Va(s,n,r,i),-1<n&&(Da(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ja(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Va(t,n,r,i)),(n=-1<e?t[e]:null)&&Ga(n))}function Ga(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Aa])Fa(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Wa(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ja(t))?(Fa(n,e),0==n.h&&(n.src=null,t[ja]=null)):Da(e)}}}function Wa(e){return e in Ba?Ba[e]:Ba[e]="on"+e}function Qa(e,t){if(e.fa)e=!0;else{t=new Ca(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ga(e),e=n.call(r,t)}return e}function Ja(e){return e=e[ja],e instanceof Ua?e:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(e){return"function"===typeof e?e:(e[Xa]||(e[Xa]=function(t){return e.handleEvent(t)}),e[Xa])}function Za(){ea.call(this),this.i=new Ua(this),this.S=this,this.J=null}function ec(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new sa(t,e);else if(t instanceof sa)t.target=t.target||e;else{var i=t;t=new sa(r,e),xa(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=tc(o,r,!0,t)&&i}if(o=t.g=e,i=tc(o,r,!0,t)&&i,i=tc(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=tc(o,r,!1,t)&&i}function tc(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Fa(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Zo(Za,ea),Za.prototype[Aa]=!0,Za.prototype.removeEventListener=function(e,t,n,r){Ha(this,e,t,n,r)},Za.prototype.N=function(){if(Za.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Da(n[r]);delete t.g[e],t.h--}}this.J=null},Za.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Za.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var nc=qo.JSON.stringify;class rc{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ic(){var e=dc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class sc{constructor(){this.h=this.g=null}add(e,t){const n=oc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var oc=new rc((()=>new ac),(e=>e.reset()));class ac{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function cc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function uc(e){qo.setTimeout((()=>{throw e}),0)}let lc,hc=!1,dc=new sc,fc=()=>{const e=qo.Promise.resolve(void 0);lc=()=>{e.then(pc)}};var pc=()=>{for(var e;e=ic();){try{e.h.call(e.g)}catch(n){uc(n)}var t=oc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}hc=!1};function gc(e,t){Za.call(this),this.h=e||1,this.g=t||qo,this.j=Xo(this.qb,this),this.l=Date.now()}function mc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function yc(e,t,n){if("function"===typeof e)n&&(e=Xo(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Xo(e.handleEvent,e)}return 2147483647<Number(t)?-1:qo.setTimeout(e,t||0)}function vc(e){e.g=yc((()=>{e.g=null,e.i&&(e.i=!1,vc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Zo(gc,Za),Vo=gc.prototype,Vo.ga=!1,Vo.T=null,Vo.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ec(this,"tick"),this.ga&&(mc(this),this.start()))}},Vo.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Vo.N=function(){gc.$.N.call(this),mc(this),delete this.g};class wc extends ea{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(qo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _c(e){ea.call(this),this.h=e,this.g={}}Zo(_c,ea);var Ec=[];function bc(e,t,n,r){Array.isArray(n)||(n&&(Ec[0]=n.toString()),n=Ec);for(var i=0;i<n.length;i++){var s=za(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ic(e){Oa(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ga(e)}),e),e.g={}}function Tc(){this.g=!0}function Sc(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Cc(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function kc(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Nc(e,n)+(r?" "+r:"")}))}function Ac(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Nc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return nc(n)}catch(a){return t}}_c.prototype.N=function(){_c.$.N.call(this),Ic(this)},_c.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Tc.prototype.Ea=function(){this.g=!1},Tc.prototype.info=function(){};var Rc={},Dc=null;function Oc(){return Dc=Dc||new Za}function Pc(e){sa.call(this,Rc.Ta,e)}function Lc(e){const t=Oc();ec(t,new Pc(t))}function Mc(e,t){sa.call(this,Rc.STAT_EVENT,e),this.stat=t}function xc(e){const t=Oc();ec(t,new Mc(t,e))}function Uc(e,t){sa.call(this,Rc.Ua,e),this.size=t}function Fc(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return qo.setTimeout((function(){e()}),t)}Rc.Ta="serverreachability",Zo(Pc,sa),Rc.STAT_EVENT="statevent",Zo(Mc,sa),Rc.Ua="timingevent",Zo(Uc,sa);var Vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bc(){}function zc(e){return e.h||(e.h=e.i())}function qc(){}Bc.prototype.h=null;var $c,Kc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hc(){sa.call(this,"d")}function Gc(){sa.call(this,"c")}function Wc(){}function Qc(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new _c(this),this.P=Xc,e=ya?125:void 0,this.V=new gc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jc}function Jc(){this.i=null,this.g="",this.h=!1}Zo(Hc,sa),Zo(Gc,sa),Zo(Wc,Bc),Wc.prototype.g=function(){return new XMLHttpRequest},Wc.prototype.i=function(){return{}},$c=new Wc;var Xc=45e3,Yc={},Zc={};function eu(e,t,n){e.L=1,e.v=bu(yu(t)),e.s=n,e.S=!0,tu(e,null)}function tu(e,t){e.G=Date.now(),su(e),e.A=yu(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Mu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Jc,e.g=jl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new wc(Xo(e.Pa,e,e.g),e.O)),bc(e.U,e.g,"readystatechange",e.nb),t=e.I?La(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Lc(),Sc(e.j,e.u,e.A,e.m,e.W,e.s)}function nu(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function ru(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=iu(e,n),r==Zc){4==t&&(e.o=4,xc(14),i=!1),kc(e.j,e.m,null,"[Incomplete Response]");break}if(r==Yc){e.o=4,xc(15),kc(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}kc(e.j,e.m,r,null),lu(e,r)}nu(e)&&r!=Zc&&r!=Yc&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,xc(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ol(t),t.M=!0,xc(11))):(kc(e.j,e.m,n,"[Invalid Chunked Response]"),uu(e),cu(e))}function iu(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Zc:(n=Number(t.substring(n,r)),isNaN(n)?Yc:(r+=1,r+n>t.length?Zc:(t=t.slice(r,r+n),e.C=r+n,t)))}function su(e){e.Y=Date.now()+e.P,ou(e,e.P)}function ou(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Fc(Xo(e.lb,e),t)}function au(e){e.B&&(qo.clearTimeout(e.B),e.B=null)}function cu(e){0==e.l.H||e.J||Ml(e.l,e)}function uu(e){au(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,mc(e.V),Ic(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function lu(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||qu(n.i,e)))if(!e.K&&qu(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Ll(n),Il(n)}Dl(n),xc(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Fc(Xo(n.ib,n),6e3));if(1>=zu(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else Ul(n,11)}else if((e.K||n.g==e)&&Ll(n),!aa(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&($u(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Eu(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Vl(r,r.J?r.pa:null,r.Y),o.K){Ku(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(au(a),su(a)),r.g=o}else Rl(r);0<n.j.length&&Sl(n)}else"stop"!=u[0]&&"close"!=u[0]||Ul(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ul(n,7):bl(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Lc(4)}catch(u){}}function hu(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if($o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function du(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if($o(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function fu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if($o(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=du(e),r=hu(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}Vo=Qc.prototype,Vo.setTimeout=function(e){this.P=e},Vo.nb=function(e){e=e.target;const t=this.M;t&&3==gl(e)?t.l():this.Pa(e)},Vo.Pa=function(e){try{if(e==this.g)e:{const l=gl(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||ya||this.g&&(this.h.h||this.g.ja()||ml(this.g)))){this.J||4!=l||7==t||Lc(8==t||0>=h?3:2),au(this);var n=this.g.da();this.ca=n;t:if(nu(this)){var r=ml(this.g);e="";var i=r.length,s=4==gl(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){uu(this),cu(this);var o="";break t}this.h.i=new qo.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Cc(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,xc(12),uu(this),cu(this);break e}kc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lu(this,n)}this.S?(ru(this,l,o),ya&&this.i&&3==l&&(bc(this.U,this.V,"tick",this.mb),this.V.start())):(kc(this.j,this.m,o,null),lu(this,o)),4==l&&uu(this),this.i&&!this.J&&(4==l?Ml(this.l,this):(this.i=!1,su(this)))}else yl(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,xc(12)):(this.o=0,xc(13)),uu(this),cu(this)}}}catch(l){}},Vo.mb=function(){if(this.g){var e=gl(this.g),t=this.g.ja();this.C<t.length&&(au(this),ru(this,e,t),this.i&&4!=e&&su(this))}},Vo.cancel=function(){this.J=!0,uu(this)},Vo.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ac(this.j,this.A),2!=this.L&&(Lc(),xc(17)),uu(this),this.o=2,cu(this)):ou(this,this.Y-e)};var pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof mu){this.h=e.h,vu(this,e.j),this.s=e.s,this.g=e.g,wu(this,e.m),this.l=e.l;var t=e.i,n=new Du;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_u(this,n),this.o=e.o}else e&&(t=String(e).match(pu))?(this.h=!1,vu(this,t[1]||"",!0),this.s=Iu(t[2]||""),this.g=Iu(t[3]||"",!0),wu(this,t[4]),this.l=Iu(t[5]||"",!0),_u(this,t[6]||"",!0),this.o=Iu(t[7]||"")):(this.h=!1,this.i=new Du(null,this.h))}function yu(e){return new mu(e)}function vu(e,t,n){e.j=n?Iu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function wu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _u(e,t,n){t instanceof Du?(e.i=t,Uu(e.i,e.h)):(n||(t=Tu(t,Nu)),e.i=new Du(t,e.h))}function Eu(e,t,n){e.i.set(t,n)}function bu(e){return Eu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Iu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Tu(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Su),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Su(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}mu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Tu(t,Cu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Tu(t,Cu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Tu(n,"/"==n.charAt(0)?Au:ku,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Tu(n,Ru)),e.join("")};var Cu=/[#\/\?@]/g,ku=/[#\?:]/g,Au=/[#\?]/g,Nu=/[#\?@]/g,Ru=/#/g;function Du(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ou(e){e.g||(e.g=new Map,e.h=0,e.i&&gu(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Pu(e,t){Ou(e),t=xu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Lu(e,t){return Ou(e),t=xu(e,t),e.g.has(t)}function Mu(e,t,n){Pu(e,t),0<n.length&&(e.i=null,e.g.set(xu(e,t),ra(n)),e.h+=n.length)}function xu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Uu(e,t){t&&!e.j&&(Ou(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Pu(this,t),Mu(this,n,e))}),e)),e.j=t}Vo=Du.prototype,Vo.add=function(e,t){Ou(this),this.i=null,e=xu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Vo.forEach=function(e,t){Ou(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Vo.ta=function(){Ou(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Vo.Z=function(e){Ou(this);let t=[];if("string"===typeof e)Lu(this,e)&&(t=t.concat(this.g.get(xu(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Vo.set=function(e,t){return Ou(this),this.i=null,e=xu(this,e),Lu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Vo.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},Vo.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var Fu=class{constructor(e,t){this.g=e,this.map=t}};function Vu(e){this.l=e||ju,qo.PerformanceNavigationTiming?(e=qo.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(qo.g&&qo.g.Ka&&qo.g.Ka()&&qo.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ju=10;function Bu(e){return!!e.h||!!e.g&&e.g.size>=e.j}function zu(e){return e.h?1:e.g?e.g.size:0}function qu(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function $u(e,t){e.g?e.g.add(t):e.h=t}function Ku(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Hu(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ra(e.i)}Vu.prototype.cancel=function(){if(this.i=Hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Gu=class{stringify(e){return qo.JSON.stringify(e,void 0)}parse(e){return qo.JSON.parse(e,void 0)}};function Wu(){this.g=new Gu}function Qu(e,t,n){const r=n||"";try{fu(e,(function(e,n){let i=e;Ko(e)&&(i=nc(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ju(e,t){const n=new Tc;if(qo.Image){const r=new Image;r.onload=Yo(Xu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Yo(Xu,n,r,"TestLoadImage: error",!1,t),r.onabort=Yo(Xu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Yo(Xu,n,r,"TestLoadImage: timeout",!1,t),qo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Xu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Yu(e){this.l=e.fc||null,this.j=e.ob||!1}function Zu(e,t){Za.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=el,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zo(Yu,Bc),Yu.prototype.g=function(){return new Zu(this.l,this.j)},Yu.prototype.i=function(e){return function(){return e}}({}),Zo(Zu,Za);var el=0;function tl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function nl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rl(e)}function rl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Vo=Zu.prototype,Vo.open=function(e,t){if(this.readyState!=el)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rl(this)},Vo.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||qo).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Vo.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nl(this)),this.readyState=el},Vo.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rl(this)),this.g&&(this.readyState=3,rl(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof qo.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Vo.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nl(this):rl(this),3==this.readyState&&tl(this)}},Vo.Za=function(e){this.g&&(this.response=this.responseText=e,nl(this))},Vo.Ya=function(e){this.g&&(this.response=e,nl(this))},Vo.ka=function(){this.g&&nl(this)},Vo.setRequestHeader=function(e,t){this.v.append(e,t)},Vo.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Vo.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Zu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var il=qo.JSON.parse;function sl(e){Za.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ol,this.L=this.M=!1}Zo(sl,Za);var ol="",al=/^https?$/i,cl=["POST","PUT"];function ul(e){return ga&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function ll(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hl(e),fl(e)}function hl(e){e.F||(e.F=!0,ec(e,"complete"),ec(e,"error"))}function dl(e){if(e.h&&"undefined"!=typeof zo&&(!e.C[1]||4!=gl(e)||2!=e.da()))if(e.v&&4==gl(e))yc(e.La,0,e);else if(ec(e,"readystatechange"),4==gl(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(pu)[1]||null;!i&&qo.self&&qo.self.location&&(i=qo.self.location.protocol.slice(0,-1)),r=!al.test(i?i.toLowerCase():"")}n=r}if(n)ec(e,"complete"),ec(e,"success");else{e.m=6;try{var s=2<gl(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",hl(e)}}finally{fl(e)}}}function fl(e,t){if(e.g){pl(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ec(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function pl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(qo.clearTimeout(e.A),e.A=null)}function gl(e){return e.g?e.g.readyState:0}function ml(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ol:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(kh){return null}}function yl(e){const t={};e=(e.g&&2<=gl(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(aa(e[r]))continue;var n=cc(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Pa(t,(function(e){return e.join(", ")}))}function vl(e){let t="";return Oa(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function wl(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vl(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Eu(e,t,n))}function _l(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function El(e){this.Ga=0,this.j=[],this.l=new Tc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_l("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_l("baseRetryDelayMs",5e3,e),this.hb=_l("retryDelaySeedMs",1e4,e),this.eb=_l("forwardChannelMaxRetries",2,e),this.xa=_l("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Vu(e&&e.concurrentRequestLimit),this.Ja=new Wu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function bl(e){if(Tl(e),3==e.H){var t=e.W++,n=yu(e.I);if(Eu(n,"SID",e.K),Eu(n,"RID",t),Eu(n,"TYPE","terminate"),Al(e,n),t=new Qc(e,e.l,t),t.L=2,t.v=bu(yu(n)),n=!1,qo.navigator&&qo.navigator.sendBeacon)try{n=qo.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&qo.Image&&((new Image).src=t.v,n=!0),n||(t.g=jl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),su(t)}Fl(e)}function Il(e){e.g&&(Ol(e),e.g.cancel(),e.g=null)}function Tl(e){Il(e),e.u&&(qo.clearTimeout(e.u),e.u=null),Ll(e),e.i.cancel(),e.m&&("number"===typeof e.m&&qo.clearTimeout(e.m),e.m=null)}function Sl(e){if(!Bu(e.i)&&!e.m){e.m=!0;var t=e.Na;lc||fc(),hc||(lc(),hc=!0),dc.add(t,e),e.C=0}}function Cl(e,t){return!(zu(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=Fc(Xo(e.Na,e,t),xl(e,e.C)),e.C++,!0))}function kl(e,t){var n;n=t?t.m:e.W++;const r=yu(e.I);Eu(r,"SID",e.K),Eu(r,"RID",n),Eu(r,"AID",e.V),Al(e,r),e.o&&e.s&&wl(r,e.o,e.s),n=new Qc(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Nl(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),$u(e.i,n),eu(n,r,t)}function Al(e,t){e.na&&Oa(e.na,(function(e,n){Eu(t,n,e)})),e.h&&fu({},(function(e,n){Eu(t,n,e)}))}function Nl(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Xo(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Qu(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Rl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;lc||fc(),hc||(lc(),hc=!0),dc.add(t,e),e.A=0}}function Dl(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Fc(Xo(e.Ma,e),xl(e,e.A)),e.A++,!0)}function Ol(e){null!=e.B&&(qo.clearTimeout(e.B),e.B=null)}function Pl(e){e.g=new Qc(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=yu(e.wa);Eu(t,"RID","rpc"),Eu(t,"SID",e.K),Eu(t,"AID",e.V),Eu(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Eu(t,"TO",e.qa),Eu(t,"TYPE","xmlhttp"),Al(e,t),e.o&&e.s&&wl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=bu(yu(t)),n.s=null,n.S=!0,tu(n,e)}function Ll(e){null!=e.v&&(qo.clearTimeout(e.v),e.v=null)}function Ml(e,t){var n=null;if(e.g==t){Ll(e),Ol(e),e.g=null;var r=2}else{if(!qu(e.i,t))return;n=t.F,Ku(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Oc(),ec(r,new Uc(r,n)),Sl(e)}else Rl(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Cl(e,t)||2==r&&Dl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ul(e,5);break;case 4:Ul(e,10);break;case 3:Ul(e,6);break;default:Ul(e,2)}}function xl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ul(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=Xo(e.pb,e);n||(n=new mu("//www.google.com/images/cleardot.gif"),qo.location&&"http"==qo.location.protocol||vu(n,"https"),bu(n)),Ju(n.toString(),r)}else xc(2);e.H=0,e.h&&e.h.za(t),Fl(e),Tl(e)}function Fl(e){if(e.H=0,e.ma=[],e.h){const t=Hu(e.i);0==t.length&&0==e.j.length||(ia(e.ma,t),ia(e.ma,e.j),e.i.i.length=0,ra(e.j),e.j.length=0),e.h.ya()}}function Vl(e,t,n){var r=n instanceof mu?yu(n):new mu(n);if(""!=r.g)t&&(r.g=t+"."+r.g),wu(r,r.m);else{var i=qo.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new mu(null);r&&vu(s,r),t&&(s.g=t),i&&wu(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Eu(r,n,t),Eu(r,"VER",e.ra),Al(e,r),r}function jl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new sl(new Yu({ob:!0})):new sl(e.va),t.Oa(e.J),t}function Bl(){}function zl(){if(ga&&!(10<=Number(Sa)))throw Error("Environmental error: no available transport.")}function ql(e,t){Za.call(this),this.g=new El(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!aa(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!aa(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Hl(this)}function $l(e){Hc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Kl(){Gc.call(this),this.status=1}function Hl(e){this.g=e}function Gl(){this.blockSize=-1}function Wl(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ql(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Jl(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}Vo=sl.prototype,Vo.Oa=function(e){this.M=e},Vo.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?zc(this.u):zc($c),this.g.onreadystatechange=Xo(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void ll(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=qo.FormData&&e instanceof qo.FormData,!(0<=na(cl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pl(this),0<this.B&&((this.L=ul(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xo(this.ua,this)):this.A=yc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ll(this,s)}},Vo.ua=function(){"undefined"!=typeof zo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ec(this,"timeout"),this.abort(8))},Vo.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ec(this,"complete"),ec(this,"abort"),fl(this))},Vo.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fl(this,!0)),sl.$.N.call(this)},Vo.La=function(){this.s||(this.G||this.v||this.l?dl(this):this.kb())},Vo.kb=function(){dl(this)},Vo.isActive=function(){return!!this.g},Vo.da=function(){try{return 2<gl(this)?this.g.status:-1}catch(e){return-1}},Vo.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Vo.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),il(t)}},Vo.Ia=function(){return this.m},Vo.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Vo=El.prototype,Vo.ra=8,Vo.H=1,Vo.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qc(this,this.l,e);let s=this.s;if(this.U&&(s?(s=La(s),xa(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Nl(this,i,t),n=yu(this.I),Eu(n,"RID",e),Eu(n,"CVER",22),this.F&&Eu(n,"X-HTTP-Session-Id",this.F),Al(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(vl(s)))+"&"+t:this.o&&wl(n,this.o,s)),$u(this.i,i),this.bb&&Eu(n,"TYPE","init"),this.P?(Eu(n,"$req",t),Eu(n,"SID","null"),i.aa=!0,eu(i,n,null)):eu(i,n,t),this.H=2}}else 3==this.H&&(e?kl(this,e):0==this.j.length||Bu(this.i)||kl(this))},Vo.Ma=function(){if(this.u=null,Pl(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Fc(Xo(this.jb,this),e)}},Vo.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xc(10),Il(this),Pl(this))},Vo.ib=function(){null!=this.v&&(this.v=null,Il(this),Dl(this),xc(19))},Vo.pb=function(e){e?(this.l.info("Successfully pinged google.com"),xc(2)):(this.l.info("Failed to ping google.com"),xc(1))},Vo.isActive=function(){return!!this.h&&this.h.isActive(this)},Vo=Bl.prototype,Vo.Ba=function(){},Vo.Aa=function(){},Vo.za=function(){},Vo.ya=function(){},Vo.isActive=function(){return!0},Vo.Va=function(){},zl.prototype.g=function(e,t){return new ql(e,t)},Zo(ql,Za),ql.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;xc(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Vl(e,null,e.Y),Sl(e)},ql.prototype.close=function(){bl(this.g)},ql.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=nc(e),e=n);t.j.push(new Fu(t.fb++,e)),3==t.H&&Sl(t)},ql.prototype.N=function(){this.g.h=null,delete this.j,bl(this.g),delete this.g,ql.$.N.call(this)},Zo($l,Hc),Zo(Kl,Gc),Zo(Hl,Bl),Hl.prototype.Ba=function(){ec(this.g,"a")},Hl.prototype.Aa=function(e){ec(this.g,new $l(e))},Hl.prototype.za=function(e){ec(this.g,new Kl)},Hl.prototype.ya=function(){ec(this.g,"b")},Zo(Wl,Gl),Wl.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Wl.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Ql(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ql(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ql(this,r),i=0;break}}this.h=i,this.i+=t},Wl.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Xl={};function Yl(e){return-128<=e&&128>e?ha(e,(function(e){return new Jl([0|e],0>e?-1:0)})):new Jl([0|e],0>e?-1:0)}function Zl(e){if(isNaN(e)||!isFinite(e))return nh;if(0>e)return ah(Zl(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=th;return new Jl(t,0)}function eh(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return ah(eh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zl(Math.pow(t,8)),r=nh,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Zl(Math.pow(t,s)),r=r.R(s).add(Zl(o))):(r=r.R(n),r=r.add(Zl(o)))}return r}var th=4294967296,nh=Yl(0),rh=Yl(1),ih=Yl(16777216);function sh(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function oh(e){return-1==e.h}function ah(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Jl(n,~e.h).add(rh)}function ch(e,t){return e.add(ah(t))}function uh(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lh(e,t){this.g=e,this.h=t}function hh(e,t){if(sh(t))throw Error("division by zero");if(sh(e))return new lh(nh,nh);if(oh(e))return t=hh(ah(e),t),new lh(ah(t.g),ah(t.h));if(oh(t))return t=hh(e,ah(t)),new lh(ah(t.g),t.h);if(30<e.g.length){if(oh(e)||oh(t))throw Error("slowDivide_ only works with positive integers.");for(var n=rh,r=t;0>=r.X(e);)n=dh(n),r=dh(r);var i=fh(n,1),s=fh(r,1);for(r=fh(r,2),n=fh(n,2);!sh(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=fh(r,1),n=fh(n,1)}return t=ch(e,i.R(t)),new lh(i,t)}for(i=nh;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zl(n),o=s.R(t);oh(o)||0<o.X(e);)n-=r,s=Zl(n),o=s.R(t);sh(s)&&(s=rh),i=i.add(s),e=ch(e,o)}return new lh(i,e)}function dh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Jl(n,e.h)}function fh(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Jl(i,e.h)}Vo=Jl.prototype,Vo.ea=function(){if(oh(this))return-ah(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:th+r)*t,t*=th}return e},Vo.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(sh(this))return"0";if(oh(this))return"-"+ah(this).toString(e);for(var t=Zl(Math.pow(e,6)),n=this,r="";;){var i=hh(n,t).g;n=ch(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,sh(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Vo.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Vo.X=function(e){return e=ch(this,e),oh(e)?-1:sh(e)?0:1},Vo.abs=function(){return oh(this)?ah(this):this},Vo.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Jl(n,-2147483648&n[n.length-1]?-1:0)},Vo.R=function(e){if(sh(this)||sh(e))return nh;if(oh(this))return oh(e)?ah(this).R(ah(e)):ah(ah(this).R(e));if(oh(e))return ah(this.R(ah(e)));if(0>this.X(ih)&&0>e.X(ih))return Zl(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,uh(n,2*r+2*i),n[2*r+2*i+1]+=s*c,uh(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,uh(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,uh(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Jl(n,0)},Vo.gb=function(e){return hh(this,e).h},Vo.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Jl(n,this.h&e.h)},Vo.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Jl(n,this.h|e.h)},Vo.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Jl(n,this.h^e.h)},zl.prototype.createWebChannel=zl.prototype.g,ql.prototype.send=ql.prototype.u,ql.prototype.open=ql.prototype.m,ql.prototype.close=ql.prototype.close,Vc.NO_ERROR=0,Vc.TIMEOUT=8,Vc.HTTP_ERROR=6,jc.COMPLETE="complete",qc.EventType=Kc,Kc.OPEN="a",Kc.CLOSE="b",Kc.ERROR="c",Kc.MESSAGE="d",Za.prototype.listen=Za.prototype.O,sl.prototype.listenOnce=sl.prototype.P,sl.prototype.getLastError=sl.prototype.Sa,sl.prototype.getLastErrorCode=sl.prototype.Ia,sl.prototype.getStatus=sl.prototype.da,sl.prototype.getResponseJson=sl.prototype.Wa,sl.prototype.getResponseText=sl.prototype.ja,sl.prototype.send=sl.prototype.ha,sl.prototype.setWithCredentials=sl.prototype.Oa,Wl.prototype.digest=Wl.prototype.l,Wl.prototype.reset=Wl.prototype.reset,Wl.prototype.update=Wl.prototype.j,Jl.prototype.add=Jl.prototype.add,Jl.prototype.multiply=Jl.prototype.R,Jl.prototype.modulo=Jl.prototype.gb,Jl.prototype.compare=Jl.prototype.X,Jl.prototype.toNumber=Jl.prototype.ea,Jl.prototype.toString=Jl.prototype.toString,Jl.prototype.getBits=Jl.prototype.D,Jl.fromNumber=Zl,Jl.fromString=eh;var ph=Bo.createWebChannelTransport=function(){return new zl},gh=Bo.getStatEventTarget=function(){return Oc()},mh=Bo.ErrorCode=Vc,yh=Bo.EventType=jc,vh=Bo.Event=Rc,wh=Bo.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_h=Bo.FetchXmlHttpFactory=Yu,Eh=Bo.WebChannel=qc,bh=Bo.XhrIo=sl,Ih=Bo.Md5=Wl,Th=Bo.Integer=Jl;const Sh="@firebase/firestore";
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
 */class Ch{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ch.UNAUTHENTICATED=new Ch(null),Ch.GOOGLE_CREDENTIALS=new Ch("google-credentials-uid"),Ch.FIRST_PARTY=new Ch("first-party-uid"),Ch.MOCK_USER=new Ch("mock-user");
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
let kh="10.1.0";
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
 */const Ah=new ke("@firebase/firestore");function Nh(){return Ah.logLevel}function Rh(e,...t){if(Ah.logLevel<=be.DEBUG){const n=t.map(Ph);Ah.debug(`Firestore (${kh}): ${e}`,...n)}}function Dh(e,...t){if(Ah.logLevel<=be.ERROR){const n=t.map(Ph);Ah.error(`Firestore (${kh}): ${e}`,...n)}}function Oh(e,...t){if(Ah.logLevel<=be.WARN){const n=t.map(Ph);Ah.warn(`Firestore (${kh}): ${e}`,...n)}}function Ph(e){if("string"==typeof e)return e;try{
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
 */function Lh(e="Unexpected state"){const t=`FIRESTORE (${kh}) INTERNAL ASSERTION FAILED: `+e;throw Dh(t),new Error(t)}function Mh(e,t){e||Lh()}function xh(e,t){return e}
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
 */const Uh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fh extends ee{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Vh{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class jh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ch.UNAUTHENTICATED)))}shutdown(){}}class zh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qh{constructor(e){this.t=e,this.currentUser=Ch.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Vh;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vh,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Rh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Rh("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vh)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Rh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Mh("string"==typeof t.accessToken),new jh(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mh(null===e||"string"==typeof e),new Ch(e)}}class $h{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ch.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kh{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new $h(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ch.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Rh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Rh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Rh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Rh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Mh("string"==typeof e.token),this.R=e.token,new Hh(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Wh(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Qh{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Wh(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Jh(e,t){return e<t?-1:e>t?1:0}function Xh(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Yh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fh(Uh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fh(Uh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fh(Uh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fh(Uh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Yh.fromMillis(Date.now())}static fromDate(e){return Yh.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Yh(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Jh(this.nanoseconds,e.nanoseconds):Jh(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Zh{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Zh(e)}static min(){return new Zh(new Yh(0,0))}static max(){return new Zh(new Yh(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ed{constructor(e,t,n){void 0===t?t=0:t>e.length&&Lh(),void 0===n?n=e.length-t:n>e.length-t&&Lh(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ed.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ed?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class td extends ed{construct(e,t,n){return new td(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fh(Uh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new td(t)}static emptyPath(){return new td([])}}const nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rd extends ed{construct(e,t,n){return new rd(e,t,n)}static isValidIdentifier(e){return nd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rd.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rd(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Fh(Uh.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Fh(Uh.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fh(Uh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Fh(Uh.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rd(t)}static emptyPath(){return new rd([])}}
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
 */class id{constructor(e){this.path=e}static fromPath(e){return new id(td.fromString(e))}static fromName(e){return new id(td.fromString(e).popFirst(5))}static empty(){return new id(td.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===td.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return td.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new id(new td(e.slice()))}}
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
 */class sd{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}sd.UNKNOWN_ID=-1;function od(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Zh.fromTimestamp(1e9===r?new Yh(n+1,0):new Yh(n,r));return new cd(i,id.empty(),t)}function ad(e){return new cd(e.readTime,e.key,-1)}class cd{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new cd(Zh.min(),id.empty(),-1)}static max(){return new cd(Zh.max(),id.empty(),-1)}}function ud(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=id.comparator(e.documentKey,t.documentKey),0!==n?n:Jh(e.largestBatchId,t.largestBatchId))}
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
 */const ld="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function dd(e){if(e.code!==Uh.FAILED_PRECONDITION||e.message!==ld)throw e;Rh("LocalStore","Unexpectedly lost primary lease")}
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
 */class fd{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Lh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new fd(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof fd?t:fd.resolve(t)}catch(e){return fd.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):fd.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):fd.reject(t)}static resolve(e){return new fd(((t,n)=>{t(e)}))}static reject(e){return new fd(((t,n)=>{n(e)}))}static waitFor(e){return new fd(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=fd.resolve(!1);for(const n of e)t=t.next((e=>e?fd.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new fd(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new fd(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function pd(e){return"IndexedDbTransactionError"===e.name}
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
class gd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function md(e){return null==e}function yd(e){return 0===e&&1/e==-1/0}function vd(e){return"number"==typeof e&&Number.isInteger(e)&&!yd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */gd.ae=-1;const wd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_d=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ed=_d;
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
function bd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Id(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Td(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Sd{constructor(e,t){this.comparator=e,this.root=t||kd.EMPTY}insert(e,t){return new Sd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kd.BLACK,null,null))}remove(e){return new Sd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cd(this.root,e,this.comparator,!0)}}class Cd{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:kd.RED,this.left=null!=r?r:kd.EMPTY,this.right=null!=i?i:kd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new kd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return kd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return kd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Lh();if(this.right.isRed())throw Lh();const e=this.left.check();if(e!==this.right.check())throw Lh();return e+(this.isRed()?0:1)}}kd.EMPTY=null,kd.RED=!0,kd.BLACK=!1,kd.EMPTY=new class{constructor(){this.size=0}get key(){throw Lh()}get value(){throw Lh()}get color(){throw Lh()}get left(){throw Lh()}get right(){throw Lh()}copy(e,t,n,r,i){return this}insert(e,t,n){return new kd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ad{constructor(e){this.comparator=e,this.data=new Sd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(e){return new Nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ad))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ad(this.comparator);return t.data=e,t}}class Nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Rd{constructor(e){this.fields=e,e.sort(rd.comparator)}static empty(){return new Rd([])}unionWith(e){let t=new Ad(rd.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Rd(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xh(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class Dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Od{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Dd("Invalid base64 string: "+e):e}}(e);return new Od(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Od(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Jh(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Od.EMPTY_BYTE_STRING=new Od("");const Pd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ld(e){if(Mh(!!e),"string"==typeof e){let t=0;const n=Pd.exec(e);if(Mh(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Md(e.seconds),nanos:Md(e.nanos)}}function Md(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xd(e){return"string"==typeof e?Od.fromBase64String(e):Od.fromUint8Array(e)}
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
 */function Ud(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fd(e){const t=e.mapValue.fields.__previous_value__;return Ud(t)?Fd(t):t}function Vd(e){const t=Ld(e.mapValue.fields.__local_write_time__.timestampValue);return new Yh(t.seconds,t.nanos)}
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
 */class jd{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Bd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Bd&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const zd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qd(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ud(e)?4:nf(e)?9007199254740991:10:Lh()}function $d(e,t){if(e===t)return!0;const n=qd(e);if(n!==qd(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Vd(e).isEqual(Vd(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ld(e.timestampValue),r=Ld(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return xd(e.bytesValue).isEqual(xd(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Md(e.geoPointValue.latitude)===Md(t.geoPointValue.latitude)&&Md(e.geoPointValue.longitude)===Md(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Md(e.integerValue)===Md(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Md(e.doubleValue),r=Md(t.doubleValue);return n===r?yd(n)===yd(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Xh(e.arrayValue.values||[],t.arrayValue.values||[],$d);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bd(n)!==bd(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$d(n[i],r[i])))return!1;return!0}(e,t);default:return Lh()}}function Kd(e,t){return void 0!==(e.values||[]).find((e=>$d(e,t)))}function Hd(e,t){if(e===t)return 0;const n=qd(e),r=qd(t);if(n!==r)return Jh(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Jh(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Md(e.integerValue||e.doubleValue),r=Md(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Gd(e.timestampValue,t.timestampValue);case 4:return Gd(Vd(e),Vd(t));case 5:return Jh(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xd(e),r=xd(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Jh(n[i],r[i]);if(0!==e)return e}return Jh(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Jh(Md(e.latitude),Md(t.latitude));return 0!==n?n:Jh(Md(e.longitude),Md(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Hd(n[i],r[i]);if(e)return e}return Jh(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===zd.mapValue&&t===zd.mapValue)return 0;if(e===zd.mapValue)return 1;if(t===zd.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Jh(r[o],s[o]);if(0!==e)return e;const t=Hd(n[r[o]],i[s[o]]);if(0!==t)return t}return Jh(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Lh()}}function Gd(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Jh(e,t);const n=Ld(e),r=Ld(t),i=Jh(n.seconds,r.seconds);return 0!==i?i:Jh(n.nanos,r.nanos)}function Wd(e){return Qd(e)}function Qd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ld(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return xd(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return id.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qd(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qd(e.fields[i])}`;return n+"}"}(e.mapValue):Lh()}function Jd(e){return!!e&&"integerValue"in e}function Xd(e){return!!e&&"arrayValue"in e}function Yd(e){return!!e&&"nullValue"in e}function Zd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ef(e){return!!e&&"mapValue"in e}function tf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Id(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=tf(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tf(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class rf{constructor(e){this.value=e}static empty(){return new rf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tf(t)}setAll(e){let t=rd.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tf(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $d(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ef(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Id(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new rf(tf(this.value))}}function sf(e){const t=[];return Id(e.fields,((e,n)=>{const r=new rd([e]);if(ef(n)){const e=sf(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Rd(t)
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
 */}class of{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new of(e,0,Zh.min(),Zh.min(),Zh.min(),rf.empty(),0)}static newFoundDocument(e,t,n,r){return new of(e,1,t,Zh.min(),n,r,0)}static newNoDocument(e,t){return new of(e,2,t,Zh.min(),Zh.min(),rf.empty(),0)}static newUnknownDocument(e,t){return new of(e,3,t,Zh.min(),Zh.min(),rf.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Zh.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Zh.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof of&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new of(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class af{constructor(e,t){this.position=e,this.inclusive=t}}function cf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?id.comparator(id.fromName(o.referenceValue),n.key):Hd(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function uf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$d(e.position[n],t.position[n]))return!1;return!0}
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
 */class lf{constructor(e,t="asc"){this.field=e,this.dir=t}}function hf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class df{}class ff extends df{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ef(e,t,n):"array-contains"===t?new Sf(e,n):"in"===t?new Cf(e,n):"not-in"===t?new kf(e,n):"array-contains-any"===t?new Af(e,n):new ff(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new bf(e,n):new If(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Hd(t,this.value)):null!==t&&qd(this.value)===qd(t)&&this.matchesComparison(Hd(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Lh()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pf extends df{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new pf(e,t)}matches(e){return gf(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gf(e){return"and"===e.op}function mf(e){return yf(e)&&gf(e)}function yf(e){for(const t of e.filters)if(t instanceof pf)return!1;return!0}function vf(e){if(e instanceof ff)return e.field.canonicalString()+e.op.toString()+Wd(e.value);if(mf(e))return e.filters.map((e=>vf(e))).join(",");{const t=e.filters.map((e=>vf(e))).join(",");return`${e.op}(${t})`}}function wf(e,t){return e instanceof ff?function(e,t){return t instanceof ff&&e.op===t.op&&e.field.isEqual(t.field)&&$d(e.value,t.value)}(e,t):e instanceof pf?function(e,t){return t instanceof pf&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&wf(n,t.filters[r])),!0)}(e,t):void Lh()}function _f(e){return e instanceof ff?function(e){return`${e.field.canonicalString()} ${e.op} ${Wd(e.value)}`}(e):e instanceof pf?function(e){return e.op.toString()+" {"+e.getFilters().map(_f).join(" ,")+"}"}(e):"Filter"}class Ef extends ff{constructor(e,t,n){super(e,t,n),this.key=id.fromName(n.referenceValue)}matches(e){const t=id.comparator(e.key,this.key);return this.matchesComparison(t)}}class bf extends ff{constructor(e,t){super(e,"in",t),this.keys=Tf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class If extends ff{constructor(e,t){super(e,"not-in",t),this.keys=Tf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Tf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>id.fromName(e.referenceValue)))}class Sf extends ff{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&Kd(t.arrayValue,this.value)}}class Cf extends ff{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Kd(this.value.arrayValue,t)}}class kf extends ff{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Kd(this.value.arrayValue,t)}}class Af extends ff{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Kd(this.value.arrayValue,e)))}}
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
 */class Nf{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Rf(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Nf(e,t,n,r,i,s,o)}function Df(e){const t=xh(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>vf(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),md(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Wd(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Wd(e))).join(",")),t.he=e}return t.he}function Of(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!uf(e.startAt,t.startAt)&&uf(e.endAt,t.endAt)}function Pf(e){return id.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Lf{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Mf(e,t,n,r,i,s,o,a){return new Lf(e,t,n,r,i,s,o,a)}function xf(e){return new Lf(e)}function Uf(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ff(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Vf(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function jf(e){return null!==e.collectionGroup}function Bf(e){const t=xh(e);if(null===t.Pe){t.Pe=[];const e=Vf(t),n=Ff(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new lf(e)),t.Pe.push(new lf(rd.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new lf(rd.keyField(),e))}}}return t.Pe}function zf(e){const t=xh(e);if(!t.Ie)if("F"===t.limitType)t.Ie=Rf(t.path,t.collectionGroup,Bf(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Bf(t)){const t="desc"===i.dir?"asc":"desc";e.push(new lf(i.field,t))}const n=t.endAt?new af(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new af(t.startAt.position,t.startAt.inclusive):null;t.Ie=Rf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.Ie}function qf(e,t,n){return new Lf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $f(e,t){return Of(zf(e),zf(t))&&e.limitType===t.limitType}function Kf(e){return`${Df(zf(e))}|lt:${e.limitType}`}function Hf(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_f(e))).join(", ")}]`),md(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Wd(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Wd(e))).join(",")),`Target(${t})`}(zf(e))}; limitType=${e.limitType})`}function Gf(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):id.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Bf(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=cf(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Bf(e),t))&&!(e.endAt&&!function(e,t,n){const r=cf(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Bf(e),t))}(e,t)}function Wf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qf(e){return(t,n)=>{let r=!1;for(const i of Bf(e)){const e=Jf(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Jf(e,t,n){const r=e.field.isKeyField()?id.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Hd(r,i):Lh()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Lh()}}
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
 */class Xf{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Id(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Td(this.inner)}size(){return this.innerSize}}
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
 */const Yf=new Sd(id.comparator);function Zf(){return Yf}const ep=new Sd(id.comparator);function tp(...e){let t=ep;for(const n of e)t=t.insert(n.key,n);return t}function np(e){let t=ep;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function rp(){return sp()}function ip(){return sp()}function sp(){return new Xf((e=>e.toString()),((e,t)=>e.isEqual(t)))}const op=new Sd(id.comparator),ap=new Ad(id.comparator);function cp(...e){let t=ap;for(const n of e)t=t.add(n);return t}const up=new Ad(Jh);function lp(){return up}
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
 */function hp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yd(t)?"-0":t}}function dp(e){return{integerValue:""+e}}function fp(e,t){return vd(t)?dp(t):hp(e,t)}
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
 */class pp{constructor(){this._=void 0}}function gp(e,t,n){return e instanceof vp?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ud(t)&&(t=Fd(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof wp?_p(e,t):e instanceof Ep?bp(e,t):function(e,t){const n=yp(e,t),r=Tp(n)+Tp(e.Te);return Jd(n)&&Jd(e.Te)?dp(r):hp(e.serializer,r)}(e,t)}function mp(e,t,n){return e instanceof wp?_p(e,t):e instanceof Ep?bp(e,t):n}function yp(e,t){return e instanceof Ip?function(e){return Jd(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class vp extends pp{}class wp extends pp{constructor(e){super(),this.elements=e}}function _p(e,t){const n=Sp(t);for(const r of e.elements)n.some((e=>$d(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ep extends pp{constructor(e){super(),this.elements=e}}function bp(e,t){let n=Sp(t);for(const r of e.elements)n=n.filter((e=>!$d(e,r)));return{arrayValue:{values:n}}}class Ip extends pp{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Tp(e){return Md(e.integerValue||e.doubleValue)}function Sp(e){return Xd(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Cp{constructor(e,t){this.field=e,this.transform=t}}function kp(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wp&&t instanceof wp||e instanceof Ep&&t instanceof Ep?Xh(e.elements,t.elements,$d):e instanceof Ip&&t instanceof Ip?$d(e.Te,t.Te):e instanceof vp&&t instanceof vp}(e.transform,t.transform)}class Ap{constructor(e,t){this.version=e,this.transformResults=t}}class Np{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Np}static exists(e){return new Np(void 0,e)}static updateTime(e){return new Np(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dp{}function Op(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zp(e.key,Np.none()):new Up(e.key,e.data,Np.none());{const n=e.data,r=rf.empty();let i=new Ad(rd.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Fp(e.key,r,new Rd(i.toArray()),Np.none())}}function Pp(e,t,n){e instanceof Up?function(e,t,n){const r=e.value.clone(),i=jp(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Fp?function(e,t,n){if(!Rp(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=jp(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Vp(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Lp(e,t,n,r){return e instanceof Up?function(e,t,n,r){if(!Rp(e.precondition,t))return n;const i=e.value.clone(),s=Bp(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fp?function(e,t,n,r){if(!Rp(e.precondition,t))return n;const i=Bp(e.fieldTransforms,r,t),s=t.data;return s.setAll(Vp(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Rp(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Mp(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=yp(r.transform,e||null);null!=i&&(null===n&&(n=rf.empty()),n.set(r.field,i))}return n||null}function xp(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Xh(e,t,((e,t)=>kp(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Up extends Dp{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fp extends Dp{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vp(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function jp(e,t,n){const r=new Map;Mh(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mp(o,a,n[i]))}return r}function Bp(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,gp(e,s,t))}return r}class zp extends Dp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qp extends Dp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class $p{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Pp(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Lp(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Lp(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ip();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Op(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Zh.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),cp())}isEqual(e){return this.batchId===e.batchId&&Xh(this.mutations,e.mutations,((e,t)=>xp(e,t)))&&Xh(this.baseMutations,e.baseMutations,((e,t)=>xp(e,t)))}}class Kp{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Mh(e.mutations.length===n.length);let r=function(){return op}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Kp(e,t,n,r)}}
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
 */class Hp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Gp{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Wp,Qp;function Jp(e){switch(e){default:return Lh();case Uh.CANCELLED:case Uh.UNKNOWN:case Uh.DEADLINE_EXCEEDED:case Uh.RESOURCE_EXHAUSTED:case Uh.INTERNAL:case Uh.UNAVAILABLE:case Uh.UNAUTHENTICATED:return!1;case Uh.INVALID_ARGUMENT:case Uh.NOT_FOUND:case Uh.ALREADY_EXISTS:case Uh.PERMISSION_DENIED:case Uh.FAILED_PRECONDITION:case Uh.ABORTED:case Uh.OUT_OF_RANGE:case Uh.UNIMPLEMENTED:case Uh.DATA_LOSS:return!0}}function Xp(e){if(void 0===e)return Dh("GRPC error has no .code"),Uh.UNKNOWN;switch(e){case Wp.OK:return Uh.OK;case Wp.CANCELLED:return Uh.CANCELLED;case Wp.UNKNOWN:return Uh.UNKNOWN;case Wp.DEADLINE_EXCEEDED:return Uh.DEADLINE_EXCEEDED;case Wp.RESOURCE_EXHAUSTED:return Uh.RESOURCE_EXHAUSTED;case Wp.INTERNAL:return Uh.INTERNAL;case Wp.UNAVAILABLE:return Uh.UNAVAILABLE;case Wp.UNAUTHENTICATED:return Uh.UNAUTHENTICATED;case Wp.INVALID_ARGUMENT:return Uh.INVALID_ARGUMENT;case Wp.NOT_FOUND:return Uh.NOT_FOUND;case Wp.ALREADY_EXISTS:return Uh.ALREADY_EXISTS;case Wp.PERMISSION_DENIED:return Uh.PERMISSION_DENIED;case Wp.FAILED_PRECONDITION:return Uh.FAILED_PRECONDITION;case Wp.ABORTED:return Uh.ABORTED;case Wp.OUT_OF_RANGE:return Uh.OUT_OF_RANGE;case Wp.UNIMPLEMENTED:return Uh.UNIMPLEMENTED;case Wp.DATA_LOSS:return Uh.DATA_LOSS;default:return Lh()}}(Qp=Wp||(Wp={}))[Qp.OK=0]="OK",Qp[Qp.CANCELLED=1]="CANCELLED",Qp[Qp.UNKNOWN=2]="UNKNOWN",Qp[Qp.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qp[Qp.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qp[Qp.NOT_FOUND=5]="NOT_FOUND",Qp[Qp.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qp[Qp.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qp[Qp.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qp[Qp.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qp[Qp.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qp[Qp.ABORTED=10]="ABORTED",Qp[Qp.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qp[Qp.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qp[Qp.INTERNAL=13]="INTERNAL",Qp[Qp.UNAVAILABLE=14]="UNAVAILABLE",Qp[Qp.DATA_LOSS=15]="DATA_LOSS";
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
class Yp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zp}static getOrCreateInstance(){return null===Zp&&(Zp=new Yp),Zp}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Zp=null;
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
 */function eg(){return new TextEncoder}
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
 */const tg=new Th([4294967295,4294967295],0);function ng(e){const t=eg().encode(e),n=new Ih;return n.update(t),new Uint8Array(n.digest())}function rg(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Th([n,r],0),new Th([i,s],0)]}class ig{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sg(`Invalid padding: ${t}`);if(n<0)throw new sg(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new sg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sg(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Th.fromNumber(this.de)}Re(e,t,n){let r=e.add(t.multiply(Th.fromNumber(n)));return 1===r.compare(tg)&&(r=new Th([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;const t=ng(e),[n,r]=rg(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);if(!this.Ve(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ig(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.de)return;const t=ng(e),[n,r]=rg(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);this.me(e)}}me(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class sg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class og{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ag.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new og(Zh.min(),r,new Sd(Jh),Zf(),cp())}}class ag{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ag(n,t,cp(),cp(),cp())}}
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
 */class cg{constructor(e,t,n,r){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=r}}class ug{constructor(e,t){this.targetId=e,this.pe=t}}class lg{constructor(e,t,n=Od.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class hg{constructor(){this.ye=0,this.we=pg(),this.Se=Od.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=cp(),t=cp(),n=cp();return this.we.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Lh()}})),new ag(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=pg()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class dg{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Zf(),this.$e=fg(),this.Ue=new Sd(Jh)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:Lh()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){var t,n;const r=e.targetId,i=e.pe.count,s=this.Xe(r);if(s){const o=s.target;if(Pf(o))if(0===i){const e=new id(o.path);this.ze(r,e,of.newNoDocument(e,Zh.min()))}else Mh(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(e,s);if(0!==i.status){this.Ye(r);const e=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,e)}null===(t=Yp.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,r){var i,s,o,a,c,u;const l={localCacheCount:n,existenceFilterCount:r.count},h=r.unchangedNames;return h&&(l.bloomFilter={applied:0===e,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},t&&(l.bloomFilter.mightContain=t)),l}
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
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){const{unchangedNames:n,count:r}=e.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=xd(i).toUint8Array()}catch(e){if(e instanceof Dd)return Oh("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{c=new ig(a,s,o)}catch(e){return Oh(e instanceof sg?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}const u=e=>{const t=this.qe.rt();return c.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===c.de?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const n=this.qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{t(n.path.canonicalString())||(this.ze(e,n,null),r++)})),r}st(e){const t=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&Pf(i.target)){const t=new id(i.target.path);null!==this.Ke.get(t)||this.ot(r,t)||this.ze(r,t,of.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Me()),n.xe())}}));let n=cp();this.$e.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ke.forEach(((t,n)=>n.setReadTime(e)));const r=new og(e,t,this.Ue,this.Ke,n);return this.Ke=Zf(),this.$e=fg(),this.Ue=new Sd(Jh),r}Ge(e,t){if(!this.Je(e))return;const n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new hg,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ad(Jh),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||Rh("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new hg),this.qe.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function fg(){return new Sd(id.comparator)}function pg(){return new Sd(id.comparator)}const gg=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),mg=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),yg=(()=>{const e={and:"AND",or:"OR"};return e})();class vg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wg(e,t){return e.useProto3Json||md(t)?t:{value:t}}function _g(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bg(e,t){return _g(e,t.toTimestamp())}function Ig(e){return Mh(!!e),Zh.fromTimestamp(function(e){const t=Ld(e);return new Yh(t.seconds,t.nanos)}(e))}function Tg(e,t){return function(e){return new td(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Sg(e){const t=td.fromString(e);return Mh(Wg(t)),t}function Cg(e,t){return Tg(e.databaseId,t.path)}function kg(e,t){const n=Sg(t);if(n.get(1)!==e.databaseId.projectId)throw new Fh(Uh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Fh(Uh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new id(Dg(n))}function Ag(e,t){return Tg(e.databaseId,t)}function Ng(e){const t=Sg(e);return 4===t.length?td.emptyPath():Dg(t)}function Rg(e){return new td(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dg(e){return Mh(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Og(e,t,n){return{name:Cg(e,t),fields:n.value.mapValue.fields}}function Pg(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Lh()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Mh(void 0===t||"string"==typeof t),Od.fromBase64String(t||"")):(Mh(void 0===t||t instanceof Uint8Array),Od.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Uh.UNKNOWN:Xp(e.code);return new Fh(t,e.message||"")}(o);n=new lg(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=kg(e,r.document.name),s=Ig(r.document.updateTime),o=r.document.createTime?Ig(r.document.createTime):Zh.min(),a=new rf({mapValue:{fields:r.document.fields}}),c=of.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new cg(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=kg(e,r.document),s=r.readTime?Ig(r.readTime):Zh.min(),o=of.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cg([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=kg(e,r.document),s=r.removedTargetIds||[];n=new cg([],s,i,null)}else{if(!("filter"in t))return Lh();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Gp(r,i),o=e.targetId;n=new ug(o,s)}}return n}function Lg(e,t){let n;if(t instanceof Up)n={update:Og(e,t.key,t.value)};else if(t instanceof zp)n={delete:Cg(e,t.key)};else if(t instanceof Fp)n={update:Og(e,t.key,t.data),updateMask:Gg(t.fieldMask)};else{if(!(t instanceof qp))return Lh();n={verify:Cg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof vp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ep)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ip)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw Lh()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bg(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Lh()}(e,t.precondition)),n}function Mg(e,t){return e&&e.length>0?(Mh(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ig(e.updateTime):Ig(t);return n.isEqual(Zh.min())&&(n=Ig(t)),new Ap(n,e.transformResults||[])}(e,t)))):[]}function xg(e,t){return{documents:[Ag(e,t.path)]}}function Ug(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ag(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ag(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Hg(pf.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:$g(e.field),direction:Bg(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wg(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Fg(e){let t=Ng(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mh(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=jg(e);return t instanceof pf&&mf(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new lf(Kg(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,md(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new af(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new af(n,t)}(n.endAt)),Mf(t,i,o,s,a,"F",c,u)}function Vg(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Lh()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function jg(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kg(e.unaryFilter.field);return ff.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Kg(e.unaryFilter.field);return ff.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kg(e.unaryFilter.field);return ff.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kg(e.unaryFilter.field);return ff.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Lh()}}(e):void 0!==e.fieldFilter?function(e){return ff.create(Kg(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Lh()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return pf.create(e.compositeFilter.filters.map((e=>jg(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Lh()}}(e.compositeFilter.op))}(e):Lh()}function Bg(e){return gg[e]}function zg(e){return mg[e]}function qg(e){return yg[e]}function $g(e){return{fieldPath:e.canonicalString()}}function Kg(e){return rd.fromServerFormat(e.fieldPath)}function Hg(e){return e instanceof ff?function(e){if("=="===e.op){if(Zd(e.value))return{unaryFilter:{field:$g(e.field),op:"IS_NAN"}};if(Yd(e.value))return{unaryFilter:{field:$g(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Zd(e.value))return{unaryFilter:{field:$g(e.field),op:"IS_NOT_NAN"}};if(Yd(e.value))return{unaryFilter:{field:$g(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$g(e.field),op:zg(e.op),value:e.value}}}(e):e instanceof pf?function(e){const t=e.getFilters().map((e=>Hg(e)));return 1===t.length?t[0]:{compositeFilter:{op:qg(e.op),filters:t}}}(e):Lh()}function Gg(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Wg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Qg{constructor(e,t,n,r,i=Zh.min(),s=Zh.min(),o=Od.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Qg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Jg{constructor(e){this.ct=e}}function Xg(e){const t=Fg({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qf(t,t.limit,"L"):t}
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
class Yg{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Md(e.integerValue));else if("doubleValue"in e){const n=Md(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),yd(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(xd(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?nf(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):Lh()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),id.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Yg.bt=new Yg;
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
class Zg{constructor(){this.sn=new em}addToCollectionParentIndex(e,t){return this.sn.add(t),fd.resolve()}getCollectionParents(e,t){return fd.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return fd.resolve()}deleteFieldIndex(e,t){return fd.resolve()}getDocumentsMatchingTarget(e,t){return fd.resolve(null)}getIndexType(e,t){return fd.resolve(0)}getFieldIndexes(e,t){return fd.resolve([])}getNextCollectionGroupToUpdate(e){return fd.resolve(null)}getMinOffset(e,t){return fd.resolve(cd.min())}getMinOffsetFromCollectionGroup(e,t){return fd.resolve(cd.min())}updateCollectionGroup(e,t,n){return fd.resolve()}updateIndexEntries(e,t){return fd.resolve()}}class em{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ad(td.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ad(td.comparator)).toArray()}}
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
 */new Uint8Array(0);class tm{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new tm(e,tm.DEFAULT_COLLECTION_PERCENTILE,tm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */tm.DEFAULT_COLLECTION_PERCENTILE=10,tm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tm.DEFAULT=new tm(41943040,tm.DEFAULT_COLLECTION_PERCENTILE,tm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tm.DISABLED=new tm(-1,0,0);
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
class nm{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new nm(0)}static On(){return new nm(-1)}}
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
class rm{constructor(){this.changes=new Xf((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,of.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?fd.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class im{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class sm{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Lp(n.mutation,e,Rd.empty(),Yh.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,cp()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=cp()){const r=rp();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=tp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=rp();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,cp())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Zf();const s=sp(),o=function(){return sp()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Fp)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Lp(o.mutation,t,o.mutation.getFieldMask(),Yh.now())):s.set(t.key,Rd.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new im(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=sp();let r=new Sd(((e,t)=>e-t)),i=cp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Rd.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||cp()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ip();c.forEach((e=>{if(!i.has(e)){const r=Op(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return fd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return id.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):fd.resolve(rp());let o=-1,a=i;return s.next((t=>fd.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?fd.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,cp()))).next((e=>({batchId:o,changes:np(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new id(t)).next((e=>{let t=tp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=tp();return this.indexManager.getCollectionParents(e,r).next((s=>fd.forEach(s,(s=>{const o=function(e,t){return new Lf(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,of.newInvalidDocument(r)))}));let n=tp();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Lp(s.mutation,i,Rd.empty(),Yh.now()),Gf(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class om{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return fd.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ig(e.createTime)}}(t)),fd.resolve()}getNamedQuery(e,t){return fd.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(e){return{name:e.name,query:Xg(e.bundledQuery),readTime:Ig(e.readTime)}}(t)),fd.resolve()}}
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
 */class am{constructor(){this.overlays=new Sd(id.comparator),this.cr=new Map}getOverlay(e,t){return fd.resolve(this.overlays.get(t))}getOverlays(e,t){const n=rp();return fd.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),fd.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.cr.delete(n)),fd.resolve()}getOverlaysForCollection(e,t,n){const r=rp(),i=t.length+1,s=new id(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return fd.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Sd(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=rp(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=rp(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return fd.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Hp(t,n));let i=this.cr.get(t);void 0===i&&(i=cp(),this.cr.set(t,i)),this.cr.set(t,i.add(n.key))}}
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
 */class cm{constructor(){this.lr=new Ad(um.hr),this.Pr=new Ad(um.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const n=new um(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Er(new um(e,t))}dr(e,t){e.forEach((e=>this.removeReference(e,t)))}Ar(e){const t=new id(new td([])),n=new um(t,e),r=new um(t,e+1),i=[];return this.Pr.forEachInRange([n,r],(e=>{this.Er(e),i.push(e.key)})),i}Rr(){this.lr.forEach((e=>this.Er(e)))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new id(new td([])),n=new um(t,e),r=new um(t,e+1);let i=cp();return this.Pr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new um(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class um{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return id.comparator(e.key,t.key)||Jh(e.mr,t.mr)}static Ir(e,t){return Jh(e.mr,t.mr)||id.comparator(e.key,t.key)}}
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
 */class lm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Ad(um.hr)}checkEmpty(e){return fd.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $p(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new um(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return fd.resolve(s)}lookupMutationBatch(e,t){return fd.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.wr(n),i=r<0?0:r;return fd.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return fd.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return fd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new um(t,0),r=new um(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(e=>{const t=this.yr(e.mr);i.push(t)})),fd.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ad(Jh);return t.forEach((e=>{const t=new um(e,0),r=new um(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,r],(e=>{n=n.add(e.mr)}))})),fd.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;id.isDocumentKey(i)||(i=i.child(""));const s=new um(new id(i),0);let o=new Ad(Jh);return this.pr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.mr)),!0)}),s),fd.resolve(this.Sr(o))}Sr(e){const t=[];return e.forEach((e=>{const n=this.yr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Mh(0===this.br(t.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return fd.forEach(t.mutations,(r=>{const i=new um(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.pr=n}))}Cn(e){}containsKey(e,t){const n=new um(t,0),r=this.pr.firstAfterOrEqual(n);return fd.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,fd.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class hm{constructor(e){this.Dr=e,this.docs=function(){return new Sd(id.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return fd.resolve(n?n.document.mutableCopy():of.newInvalidDocument(t))}getEntries(e,t){let n=Zf();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():of.newInvalidDocument(e))})),fd.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Zf();const s=t.path,o=new id(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ud(ad(o),n)<=0||(r.has(o.key)||Gf(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return fd.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Lh()}vr(e,t){return fd.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new dm(this)}getSize(e){return fd.resolve(this.size)}}class dm extends rm{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(n)})),fd.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}
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
 */class fm{constructor(e){this.persistence=e,this.Cr=new Xf((e=>Df(e)),Of),this.lastRemoteSnapshotVersion=Zh.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new cm,this.targetCount=0,this.Or=nm.xn()}forEachTarget(e,t){return this.Cr.forEach(((e,n)=>t(n))),fd.resolve()}getLastRemoteSnapshotVersion(e){return fd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return fd.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),fd.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),fd.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new nm(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,fd.resolve()}updateTargetData(e,t){return this.Ln(t),fd.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,fd.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),fd.waitFor(i).next((()=>r))}getTargetCount(e){return fd.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cr.get(t)||null;return fd.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),fd.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),fd.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),fd.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mr.Vr(t);return fd.resolve(n)}containsKey(e,t){return fd.resolve(this.Mr.containsKey(t))}}
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
 */class pm{constructor(e,t){this.Nr={},this.overlays={},this.Br=new gd(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new fm(this),this.indexManager=new Zg,this.remoteDocumentCache=function(e){return new hm(e)}((e=>this.referenceDelegate.qr(e))),this.serializer=new Jg(t),this.Qr=new om(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new am,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new lm(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){Rh("MemoryPersistence","Starting transaction:",e);const r=new gm(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((e=>this.referenceDelegate.$r(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ur(e,t){return fd.or(Object.values(this.Nr).map((n=>()=>n.containsKey(e,t))))}}class gm extends hd{constructor(e){super(),this.currentSequenceNumber=e}}class mm{constructor(e){this.persistence=e,this.Wr=new cm,this.Gr=null}static zr(e){return new mm(e)}get jr(){if(this.Gr)return this.Gr;throw Lh()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),fd.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),fd.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),fd.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach((e=>this.jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fd.forEach(this.jr,(n=>{const r=id.fromPath(n);return this.Hr(e,r).next((e=>{e||t.removeEntry(r,Zh.min())}))})).next((()=>(this.Gr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hr(e,t).next((e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())}))}qr(e){return 0}Hr(e,t){return fd.or([()=>fd.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}
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
class ym{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=r}static qi(e,t){let n=cp(),r=cp();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ym(e,t.fromCache,n,r)}}
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
 */class vm{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.$i(e,t).next((i=>i||this.Ui(e,t,r,n))).next((n=>n||this.Wi(e,t)))}$i(e,t){if(Uf(t))return fd.resolve(null);let n=zf(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=qf(t,null,"F"),n=zf(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=cp(...r);return this.Ki.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Gi(t,r);return this.zi(t,s,i,n.readTime)?this.$i(e,qf(t,null,"F")):this.ji(e,s,t,n)}))))})))))}Ui(e,t,n,r){return Uf(t)||r.isEqual(Zh.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next((i=>{const s=this.Gi(t,i);return this.zi(t,s,n,r)?this.Wi(e,t):(Nh()<=be.DEBUG&&Rh("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hf(t)),this.ji(e,s,t,od(r,-1)))}))}Gi(e,t){let n=new Ad(Qf(e));return t.forEach(((t,r)=>{Gf(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,t){return Nh()<=be.DEBUG&&Rh("QueryEngine","Using full collection scan to execute query:",Hf(t)),this.Ki.getDocumentsMatchingQuery(e,t,cd.min())}ji(e,t,n,r){return this.Ki.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class wm{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Sd(Jh),this.Yi=new Xf((e=>Df(e)),Of),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sm(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function _m(e,t,n,r){return new wm(e,t,n,r)}async function Em(e,t){const n=xh(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.es(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=cp();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ts:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function bm(e,t){const n=xh(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=fd.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Mh(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=cp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Im(e){const t=xh(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.kr.getLastRemoteSnapshotVersion(e)))}function Tm(e,t){const n=xh(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Od.EMPTY_BYTE_STRING,Zh.min()).withLastLimboFreeSnapshotVersion(Zh.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(e,u))}));let a=Zf(),c=cp();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Sm(e,s,t.documentUpdates).next((e=>{a=e.ns,c=e.rs}))),!r.isEqual(Zh.min())){const t=n.kr.getLastRemoteSnapshotVersion(e).next((t=>n.kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return fd.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Sm(e,t,n){let r=cp(),i=cp();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Zf();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Zh.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Rh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function Cm(e,t){const n=xh(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function km(e,t){const n=xh(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.kr.getTargetData(e,t).next((i=>i?(r=i,fd.resolve(r)):n.kr.allocateTargetId(e).next((i=>(r=new Qg(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Am(e,t,n){const r=xh(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!pd(e))throw e;Rh("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Nm(e,t,n){const r=xh(e);let i=Zh.min(),s=cp();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=xh(e),i=r.Yi.get(n);return void 0!==i?fd.resolve(r.Ji.get(i)):r.kr.getTargetData(t,n)}(r,e,zf(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Zh.min(),n?s:cp()))).next((e=>(Rm(r,Wf(t),e),{documents:e,ss:s})))))}function Rm(e,t,n){let r=e.Zi.get(t)||Zh.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Zi.set(t,r)}class Dm{constructor(){this.activeTargetIds=lp()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Om{constructor(){this.Hs=new Dm,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Dm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Pm{Ys(e){}shutdown(){}}
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
 */class Lm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Rh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){Rh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Mm=null;function xm(){return null===Mm?Mm=function(){return 268435456+Math.round(2147483648*Math.random())}():Mm++,"0x"+Mm.toString(16)
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
 */}const Um={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Fm{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}
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
 */const Vm="WebChannelConnection";class jm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(e,t,n,r,i){const s=xm(),o=this.mo(e,t);Rh("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(e,o,a,n).then((t=>(Rh("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Oh("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}yo(e,t,n,r,i,s){return this.Vo(e,t,n,r,i)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kh}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}mo(e,t){const n=Um[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,r){const i=xm();return new Promise(((s,o)=>{const a=new bh;a.setWithCredentials(!0),a.listenOnce(yh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case mh.NO_ERROR:const t=a.getResponseJson();Rh(Vm,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case mh.TIMEOUT:Rh(Vm,`RPC '${e}' ${i} timed out`),o(new Fh(Uh.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const n=a.getStatus();if(Rh(Vm,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Uh).indexOf(t)>=0?t:Uh.UNKNOWN}(t.status);o(new Fh(e,t.message))}else o(new Fh(Uh.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fh(Uh.UNAVAILABLE,"Connection failed."));break;default:Lh()}}finally{Rh(Vm,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Rh(Vm,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=xm(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ph(),o=gh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new _h({})),this.fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Rh(Vm,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Fm({so:t=>{d?Rh(Vm,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Rh(Vm,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Rh(Vm,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Eh.EventType.OPEN,(()=>{d||Rh(Vm,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Eh.EventType.CLOSE,(()=>{d||(d=!0,Rh(Vm,`RPC '${e}' stream ${r} transport closed`),f.Po())})),p(l,Eh.EventType.ERROR,(t=>{d||(d=!0,Oh(Vm,`RPC '${e}' stream ${r} transport errored:`,t),f.Po(new Fh(Uh.UNAVAILABLE,"The operation could not be completed")))})),p(l,Eh.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Mh(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Rh(Vm,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Wp[e];if(void 0!==t)return Xp(t)}(t),i=o.message;void 0===n&&(n=Uh.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Po(new Fh(n,i)),l.close()}else Rh(Vm,`RPC '${e}' stream ${r} received:`,i),f.Io(i)}})),p(o,vh.STAT_EVENT,(t=>{t.stat===wh.PROXY?Rh(Vm,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===wh.NOPROXY&&Rh(Vm,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
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
 */function Bm(){return"undefined"!=typeof document?document:null}
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
 */function zm(e){return new vg(e,!0)}
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
 */class qm{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-n);r>0&&Rh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),e()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
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
 */class $m{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new qm(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===Uh.RESOURCE_EXHAUSTED?(Dh(t.toString()),Dh("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===Uh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.ko===t&&this.e_(e,n)}),(t=>{e((()=>{const e=new Fh(Uh.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)}))}))}e_(e,t){const n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((e=>{n((()=>this.t_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(e){return Rh("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.ko===e?t():(Rh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Km extends $m{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=Pg(this.serializer,e),n=function(e){if(!("targetChange"in e))return Zh.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Zh.min():t.readTime?Ig(t.readTime):Zh.min()}(e);return this.listener.r_(t,n)}i_(e){const t={};t.database=Rg(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Pf(r)?{documents:xg(e,r)}:{query:Ug(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Eg(e,t.resumeToken);const r=wg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Zh.min())>0){n.readTime=_g(e,t.snapshotVersion.toTimestamp());const r=wg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Vg(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){const t={};t.database=Rg(this.serializer),t.removeTarget=e,this.Ho(t)}}class Hm extends $m{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Mh(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=Mg(e.writeResults,e.commitTime),n=Ig(e.commitTime);return this.listener.u_(n,t)}return Mh(!e.writeResults||0===e.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Rg(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Lg(this.serializer,e)))};this.Ho(t)}}
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
 */class Gm extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new Fh(Uh.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Uh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fh(Uh.UNKNOWN,e.toString())}))}yo(e,t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Uh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fh(Uh.UNKNOWN,e.toString())}))}terminate(){this.h_=!0}}class Wm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Dh(t),this.d_=!1):Rh("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
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
 */class Qm{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((e=>{n.enqueueAndForget((async()=>{iy(this)&&(Rh("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=xh(e);t.y_.add(4),await Xm(t),t.b_.set("Unknown"),t.y_.delete(4),await Jm(t)}(this))}))})),this.b_=new Wm(n,r)}}async function Jm(e){if(iy(e))for(const t of e.w_)await t(!0)}async function Xm(e){for(const t of e.w_)await t(!1)}function Ym(e,t){const n=xh(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),ry(n)?ny(n):by(n).Uo()&&ey(n,t))}function Zm(e,t){const n=xh(e),r=by(n);n.p_.delete(t),r.Uo()&&ty(n,t),0===n.p_.size&&(r.Uo()?r.zo():iy(n)&&n.b_.set("Unknown"))}function ey(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Zh.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}by(e).i_(t)}function ty(e,t){e.D_.Be(t),by(e).s_(t)}function ny(e){e.D_=new dg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),by(e).start(),e.b_.A_()}function ry(e){return iy(e)&&!by(e).$o()&&e.p_.size>0}function iy(e){return 0===xh(e).y_.size}function sy(e){e.D_=void 0}async function oy(e){e.p_.forEach(((t,n)=>{ey(e,t)}))}async function ay(e,t){sy(e),ry(e)?(e.b_.m_(t),ny(e)):e.b_.set("Unknown")}async function cy(e,t,n){if(e.b_.set("Online"),t instanceof lg&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.p_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.p_.delete(r),e.D_.removeTarget(r))}(e,t)}catch(n){Rh("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await uy(e,n)}else if(t instanceof cg?e.D_.We(t):t instanceof ug?e.D_.Ze(t):e.D_.je(t),!n.isEqual(Zh.min()))try{const t=await Im(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.D_.st(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.p_.get(r);i&&e.p_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.p_.get(t);if(!r)return;e.p_.set(t,r.withResumeToken(Od.EMPTY_BYTE_STRING,r.snapshotVersion)),ty(e,t);const i=new Qg(r.target,t,n,r.sequenceNumber);ey(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Rh("RemoteStore","Failed to raise snapshot:",t),await uy(e,t)}}async function uy(e,t,n){if(!pd(t))throw t;e.y_.add(1),await Xm(e),e.b_.set("Offline"),n||(n=()=>Im(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Rh("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Jm(e)}))}function ly(e,t){return t().catch((n=>uy(e,n,t)))}async function hy(e){const t=xh(e),n=Iy(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;dy(t);)try{const e=await Cm(t.localStore,r);if(null===e){0===t.g_.length&&n.zo();break}r=e.batchId,fy(t,e)}catch(e){await uy(t,e)}py(t)&&gy(t)}function dy(e){return iy(e)&&e.g_.length<10}function fy(e,t){e.g_.push(t);const n=Iy(e);n.Uo()&&n.__&&n.a_(t.mutations)}function py(e){return iy(e)&&!Iy(e).$o()&&e.g_.length>0}function gy(e){Iy(e).start()}async function my(e){Iy(e).l_()}async function yy(e){const t=Iy(e);for(const n of e.g_)t.a_(n.mutations)}async function vy(e,t,n){const r=e.g_.shift(),i=Kp.from(r,t,n);await ly(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await hy(e)}async function wy(e,t){t&&Iy(e).__&&await async function(e,t){if(function(e){return Jp(e)&&e!==Uh.ABORTED}(t.code)){const n=e.g_.shift();Iy(e).Go(),await ly(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await hy(e)}}(e,t),py(e)&&gy(e)}async function _y(e,t){const n=xh(e);n.asyncQueue.verifyOperationInProgress(),Rh("RemoteStore","RemoteStore received new credentials");const r=iy(n);n.y_.add(3),await Xm(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Jm(n)}async function Ey(e,t){const n=xh(e);t?(n.y_.delete(2),await Jm(n)):t||(n.y_.add(2),await Xm(n),n.b_.set("Unknown"))}function by(e){return e.v_||(e.v_=function(e,t,n){const r=xh(e);return r.P_(),new Km(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{_o:oy.bind(null,e),uo:ay.bind(null,e),r_:cy.bind(null,e)}),e.w_.push((async t=>{t?(e.v_.Go(),ry(e)?ny(e):e.b_.set("Unknown")):(await e.v_.stop(),sy(e))}))),e.v_}function Iy(e){return e.C_||(e.C_=function(e,t,n){const r=xh(e);return r.P_(),new Hm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{_o:my.bind(null,e),uo:wy.bind(null,e),c_:yy.bind(null,e),u_:vy.bind(null,e)}),e.w_.push((async t=>{t?(e.C_.Go(),await hy(e)):(await e.C_.stop(),e.g_.length>0&&(Rh("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_
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
 */}class Ty{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ty(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fh(Uh.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sy(e,t){if(Dh("AsyncQueue",`${t}: ${e}`),pd(e))return new Fh(Uh.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Cy{constructor(e){this.comparator=e?(t,n)=>e(t,n)||id.comparator(t.key,n.key):(e,t)=>id.comparator(e.key,t.key),this.keyedMap=tp(),this.sortedSet=new Sd(this.comparator)}static emptySet(e){return new Cy(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Cy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class ky{constructor(){this.F_=new Sd(id.comparator)}track(e){const t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):Lh():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ay{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ay(e,t,Cy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Ny{constructor(){this.x_=void 0,this.listeners=[]}}class Ry{constructor(){this.queries=new Xf((e=>Kf(e)),$f),this.onlineState="Unknown",this.O_=new Set}}async function Dy(e,t){const n=xh(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ny),i)try{s.x_=await n.onListen(r)}catch(e){const n=Sy(e,`Initialization of query '${Hf(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&My(n)}async function Oy(e,t){const n=xh(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Py(e,t){const n=xh(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.B_(i)&&(r=!0);t.x_=i}}r&&My(n)}function Ly(e,t,n){const r=xh(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function My(e){e.O_.forEach((e=>{e.next()}))}class xy{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ay(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.W_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=Ay.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}
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
class Uy{constructor(e){this.key=e}}class Fy{constructor(e){this.key=e}}class Vy{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=cp(),this.mutatedKeys=cp(),this.na=Qf(e),this.ra=new Cy(this.na)}get ia(){return this.X_}sa(e,t){const n=t?t.oa:new ky,r=t?t.ra:this.ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Gf(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this._a(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.na(l,a)>0||c&&this.na(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Lh()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.na(e.doc,t.doc))),this.aa(n);const s=t?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new Ay(this.query,e.ra,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new ky,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach((e=>this.X_=this.X_.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.X_=this.X_.delete(e))),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=cp(),this.ra.forEach((e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))}));const t=[];return e.forEach((e=>{this.ta.has(e)||t.push(new Fy(e))})),this.ta.forEach((n=>{e.has(n)||t.push(new Uy(n))})),t}ha(e){this.X_=e.ss,this.ta=cp();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Ay.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class jy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class By{constructor(e){this.key=e,this.Ia=!1}}class zy{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Xf((e=>Kf(e)),$f),this.da=new Map,this.Aa=new Set,this.Ra=new Sd(id.comparator),this.Va=new Map,this.ma=new cm,this.fa={},this.ga=new Map,this.pa=nm.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function qy(e,t){const n=cv(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const e=await km(n.localStore,zf(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await $y(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Ym(n.remoteStore,e)}return i}async function $y(e,t,n,r,i){e.wa=(t,n,r)=>async function(e,t,n,r){let i=t.view.sa(n);i.zi&&(i=await Nm(e.localStore,t.query,!1).then((({documents:e})=>t.view.sa(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return nv(e,t.targetId,o.ca),o.snapshot}(e,t,n,r);const s=await Nm(e.localStore,t,!0),o=new Vy(t,s.ss),a=o.sa(s.documents),c=ag.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);nv(e,n,u.ca);const l=new jy(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function Ky(e,t){const n=xh(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((e=>!$f(e,t)))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Am(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Zm(n.remoteStore,r.targetId),ev(n,r.targetId)})).catch(dd)):(ev(n,r.targetId),await Am(n.localStore,r.targetId,!0))}async function Hy(e,t,n){const r=uv(e);try{const e=await function(e,t){const n=xh(e),r=Yh.now(),i=t.reduce(((e,t)=>e.add(t.key)),cp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Zf(),c=cp();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Mp(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Fp(e.key,t,sf(t.value.mapValue),Np.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:np(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fa[e.currentUser.toKey()];r||(r=new Sd(Jh)),r=r.insert(t,n),e.fa[e.currentUser.toKey()]=r}(r,e.batchId,n),await sv(r,e.changes),await hy(r.remoteStore)}catch(e){const t=Sy(e,"Failed to persist write");n.reject(t)}}async function Gy(e,t){const n=xh(e);try{const e=await Tm(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Va.get(t);r&&(Mh(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ia=!0:e.modifiedDocuments.size>0?Mh(r.Ia):e.removedDocuments.size>0&&(Mh(r.Ia),r.Ia=!1))})),await sv(n,e,t)}catch(e){await dd(e)}}function Wy(e,t,n){const r=xh(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=xh(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.N_(t)&&(r=!0)})),r&&My(n)}(r.eventManager,t),e.length&&r.Ta.r_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qy(e,t,n){const r=xh(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let e=new Sd(id.comparator);e=e.insert(s,of.newNoDocument(s,Zh.min()));const n=cp().add(s),i=new og(Zh.min(),new Map,new Sd(Jh),e,n);await Gy(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(t),iv(r)}else await Am(r.localStore,t,!1).then((()=>ev(r,t,n))).catch(dd)}async function Jy(e,t){const n=xh(e),r=t.batch.batchId;try{const e=await bm(n.localStore,t);Zy(n,r,null),Yy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sv(n,e)}catch(e){await dd(e)}}async function Xy(e,t,n){const r=xh(e);try{const e=await function(e,t){const n=xh(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Mh(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Zy(r,t,n),Yy(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await sv(r,e)}catch(n){await dd(n)}}function Yy(e,t){(e.ga.get(t)||[]).forEach((e=>{e.resolve()})),e.ga.delete(t)}function Zy(e,t,n){const r=xh(e);let i=r.fa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function ev(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach((t=>{e.ma.containsKey(t)||tv(e,t)}))}function tv(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);null!==n&&(Zm(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),iv(e))}function nv(e,t,n){for(const r of n)r instanceof Uy?(e.ma.addReference(r.key,t),rv(e,r)):r instanceof Fy?(Rh("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||tv(e,r.key)):Lh()}function rv(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(Rh("SyncEngine","New document in limbo: "+n),e.Aa.add(r),iv(e))}function iv(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new id(td.fromString(t)),r=e.pa.next();e.Va.set(r,new By(n)),e.Ra=e.Ra.insert(n,r),Ym(e.remoteStore,new Qg(zf(xf(n.path)),r,"TargetPurposeLimboResolution",gd.ae))}}async function sv(e,t,n){const r=xh(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((e,a)=>{o.push(r.wa(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=ym.qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(e,t){const n=xh(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>fd.forEach(t,(t=>fd.forEach(t.Li,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>fd.forEach(t.ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!pd(e))throw e;Rh("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function ov(e,t){const n=xh(e);if(!n.currentUser.isEqual(t)){Rh("SyncEngine","User change. New user:",t.toKey());const e=await Em(n.localStore,t);n.currentUser=t,function(e,t){e.ga.forEach((e=>{e.forEach((e=>{e.reject(new Fh(Uh.CANCELLED,t))}))})),e.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await sv(n,e.ts)}}function av(e,t){const n=xh(e),r=n.Va.get(t);if(r&&r.Ia)return cp().add(r.key);{let e=cp();const r=n.da.get(t);if(!r)return e;for(const t of r){const r=n.Ea.get(t);e=e.unionWith(r.view.ia)}return e}}function cv(e){const t=xh(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gy.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=av.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qy.bind(null,t),t.Ta.r_=Py.bind(null,t.eventManager),t.Ta.Sa=Ly.bind(null,t.eventManager),t}function uv(e){const t=xh(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xy.bind(null,t),t}class lv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return _m(this.persistence,new vm,e.initialUser,this.serializer)}createPersistence(e){return new pm(mm.zr,this.serializer)}createSharedClientState(e){return new Om}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Wy(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ov.bind(null,this.syncEngine),await Ey(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ry}()}createDatastore(e){const t=zm(e.databaseInfo.databaseId),n=function(e){return new jm(e)}(e.databaseInfo);return function(e,t,n,r){return new Gm(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Qm(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Wy(this.syncEngine,e,0)),function(){return Lm.v()?new Lm:new Pm}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new zy(e,t,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=xh(e);Rh("RemoteStore","RemoteStore shutting down."),t.y_.add(5),await Xm(t),t.S_.shutdown(),t.b_.set("Unknown")}(this.remoteStore)}}
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
class dv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Dh("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class fv{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ch.UNAUTHENTICATED,this.clientId=Qh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Rh("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Rh("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fh(Uh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Sy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function pv(e,t){e.asyncQueue.verifyOperationInProgress(),Rh("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Em(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function gv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yv(e);Rh("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>_y(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>_y(t.remoteStore,n))),e._onlineComponents=t}function mv(e){return"FirebaseError"===e.name?e.code===Uh.FAILED_PRECONDITION||e.code===Uh.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function yv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Rh("FirestoreClient","Using user provided OfflineComponentProvider");try{await pv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mv(n))throw n;Oh("Error using user provided cache. Falling back to memory cache: "+n),await pv(e,new lv)}}else Rh("FirestoreClient","Using default OfflineComponentProvider"),await pv(e,new lv);return e._offlineComponents}async function vv(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Rh("FirestoreClient","Using user provided OnlineComponentProvider"),await gv(e,e._uninitializedComponentsProvider._online)):(Rh("FirestoreClient","Using default OnlineComponentProvider"),await gv(e,new hv))),e._onlineComponents}function wv(e){return vv(e).then((e=>e.syncEngine))}async function _v(e){const t=await vv(e),n=t.eventManager;return n.onListen=qy.bind(null,t.syncEngine),n.onUnlisten=Ky.bind(null,t.syncEngine),n}
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
function Ev(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const bv=new Map;
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
 */function Iv(e,t,n){if(!n)throw new Fh(Uh.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tv(e,t,n,r){if(!0===t&&!0===r)throw new Fh(Uh.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sv(e){if(!id.isDocumentKey(e))throw new Fh(Uh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Cv(e){if(id.isDocumentKey(e))throw new Fh(Uh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function kv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Lh()}function Av(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fh(Uh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kv(e);throw new Fh(Uh.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Nv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Fh(Uh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fh(Uh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ev(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Fh(Uh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Fh(Uh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Fh(Uh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fh(Uh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fh(Uh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Bh;switch(e.type){case"firstParty":return new Kh(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fh(Uh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bv.get(e);t&&(Rh("ComponentProvider","Removing Datastore"),bv.delete(e),t.terminate())}(this),Promise.resolve()}}function Dv(e,t,n,r={}){var i;const s=(e=Av(e,Rv))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Oh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ch.MOCK_USER;else{t=K(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Fh(Uh.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ch(s)}e._authCredentials=new zh(new jh(t,n))}}
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
 */class Ov{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ov(this.firestore,e,this._query)}}class Pv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pv(this.firestore,e,this._key)}}class Lv extends Ov{constructor(e,t,n){super(e,t,xf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pv(this.firestore,null,new id(e))}withConverter(e){return new Lv(this.firestore,e,this._path)}}function Mv(e,t,...n){if(e=pe(e),Iv("collection","path",t),e instanceof Rv){const r=td.fromString(t,...n);return Cv(r),new Lv(e,null,r)}{if(!(e instanceof Pv||e instanceof Lv))throw new Fh(Uh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(td.fromString(t,...n));return Cv(r),new Lv(e.firestore,null,r)}}function xv(e,t,...n){if(e=pe(e),1===arguments.length&&(t=Qh.V()),Iv("doc","path",t),e instanceof Rv){const r=td.fromString(t,...n);return Sv(r),new Pv(e,null,new id(r))}{if(!(e instanceof Pv||e instanceof Lv))throw new Fh(Uh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(td.fromString(t,...n));return Sv(r),new Pv(e.firestore,e instanceof Lv?e.converter:null,new id(r))}}
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
class Uv{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new qm(this,"async_queue_retry"),this.Xa=()=>{const e=Bm();e&&Rh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const e=Bm();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Bm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise((()=>{}));const t=new Vh;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ga.push(e),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!pd(e))throw e;Rh("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(e){const t=this.Wa.then((()=>(this.Ja=!0,e().catch((e=>{this.Ha=e,this.Ja=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Dh("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ja=!1,e))))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Ty.createAndSchedule(this,e,t,n,(e=>this.ru(e)));return this.ja.push(r),r}eu(){this.Ha&&Lh()}verifyOperationInProgress(){}async iu(){let e;do{e=this.Wa,await e}while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then((()=>{this.ja.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.ja)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()}))}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function Fv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class Vv extends Rv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Uv}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zv(this),this._firestoreClient.terminate()}}function jv(e,t){const n="object"==typeof e?e:Vt(),r="string"==typeof e?e:t||"(default)",i=Pt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=B("firestore");e&&Dv(i,...e)}return i}function Bv(e){return e._firestoreClient||zv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function zv(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new jd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ev(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new fv(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
class qv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qv(Od.fromBase64String(e))}catch(e){throw new Fh(Uh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new qv(Od.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class $v{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fh(Uh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rd(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Kv{constructor(e){this._methodName=e}}
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
 */class Hv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fh(Uh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fh(Uh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Jh(this._lat,e._lat)||Jh(this._long,e._long)}}
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
 */const Gv=/^__.*__$/;class Wv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Fp(e,this.data,this.fieldMask,t,this.fieldTransforms):new Up(e,this.data,t,this.fieldTransforms)}}function Qv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Lh()}}class Jv{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Jv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.Pu(e),r}Iu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return cw(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(Qv(this.uu)&&Gv.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class Xv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zm(e)}Ru(e,t,n,r=!1){return new Jv({uu:e,methodName:t,Au:n,path:rd.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yv(e){const t=e._freezeSettings(),n=zm(e._databaseId);return new Xv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Zv(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);iw("Data must be an object, but it was:",o,r);const a=nw(r,o);let c,u;if(s.merge)c=new Rd(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=sw(t,r,n);if(!o.contains(i))throw new Fh(Uh.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);uw(e,i)||e.push(i)}c=new Rd(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Wv(new rf(a),c,u)}class ew extends Kv{_toFieldTransform(e){return new Cp(e.path,new vp)}isEqual(e){return e instanceof ew}}function tw(e,t){if(rw(e=pe(e)))return iw("Unsupported field value:",t,e),nw(e,t);if(e instanceof Kv)return function(e,t){if(!Qv(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=tw(i,t.Tu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=pe(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return fp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Yh.fromDate(e);return{timestampValue:_g(t.serializer,n)}}if(e instanceof Yh){const n=new Yh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:_g(t.serializer,n)}}if(e instanceof Hv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof qv)return{bytesValue:Eg(t.serializer,e._byteString)};if(e instanceof Pv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tg(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${kv(e)}`)}(e,t)}function nw(e,t){const n={};return Td(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Id(e,((e,r)=>{const i=tw(r,t.lu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function rw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Yh||e instanceof Hv||e instanceof qv||e instanceof Pv||e instanceof Kv)}function iw(e,t,n){if(!rw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=kv(n);throw"an object"===r?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function sw(e,t,n){if((t=pe(t))instanceof $v)return t._internalPath;if("string"==typeof t)return aw(e,t);throw cw("Field path arguments must be of type string or ",e,!1,void 0,n)}const ow=new RegExp("[~\\*/\\[\\]]");function aw(e,t,n){if(t.search(ow)>=0)throw cw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new $v(...t.split("."))._internalPath}catch(Zo){throw cw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cw(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Fh(Uh.INVALID_ARGUMENT,a+e+c)}function uw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class lw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new hw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class hw extends lw{data(){return super.data()}}function dw(e,t){return"string"==typeof t?aw(e,t):t instanceof $v?t._internalPath:t._delegate._internalPath}
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
 */function fw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Fh(Uh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pw{convertValue(e,t="none"){switch(qd(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Md(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xd(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Lh()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Id(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Hv(Md(e.latitude),Md(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fd(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Vd(e));default:return null}}convertTimestamp(e){const t=Ld(e);return new Yh(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=td.fromString(e);Mh(Wg(n));const r=new Bd(n.get(1),n.get(3)),i=new id(n.popFirst(5));return r.isEqual(t)||Dh(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function gw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class mw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yw extends lw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(dw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class vw extends yw{data(e={}){return super.data(e)}}class ww{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new vw(this._firestore,this._userDataWriter,n.key,n,new mw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Fh(Uh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new vw(e._firestore,e._userDataWriter,n.doc.key,n.doc,new mw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new vw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new mw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:_w(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _w(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Lh()}}class Ew extends pw{constructor(e){super(),this.firestore=e}convertBytes(e){return new qv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pv(this.firestore,null,t)}}function bw(e,t){const n=Av(e.firestore,Vv),r=xv(e),i=gw(e.converter,t);return Tw(n,[Zv(Yv(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Np.exists(!1))]).then((()=>r))}function Iw(e,...t){var n,r,i;e=pe(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Fv(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Fv(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Pv)u=Av(e.firestore,Vv),l=xf(e._key.path),c={next:n=>{t[o]&&t[o](Sw(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Av(e,Ov);u=Av(n.firestore,Vv),l=n._query;const r=new Ew(u);c={next:e=>{t[o]&&t[o](new ww(u,r,n,e))},error:t[o+1],complete:t[o+2]},fw(e._query)}return function(e,t,n,r){const i=new dv(r),s=new xy(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Dy(await _v(e),s))),()=>{i.Ca(),e.asyncQueue.enqueueAndForget((async()=>Oy(await _v(e),s)))}}(Bv(u),l,a,c)}function Tw(e,t){return function(e,t){const n=new Vh;return e.asyncQueue.enqueueAndForget((async()=>Hy(await wv(e),t,n))),n.promise}(Bv(e),t)}function Sw(e,t,n){const r=n.docs.get(t._key),i=new Ew(e);return new yw(e,i,t._key,r,new mw(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */function Cw(){return new ew("serverTimestamp")}!function(e,t=!0){!function(e){kh=e}(Ut),Ot(new ge("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Vv(new qh(e.getProvider("auth-internal")),new Gh(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fh(Uh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bd(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),jt(Sh,"4.1.0",e),jt(Sh,"4.1.0","esm2017")}();const kw={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},Aw=Ft(kw),Nw=jv(Aw);var Rw=Nw;const Dw=xo();var Ow={emits:["loggedIn"],data(){return{username:"",email:"",password:"",isSigningUp:!1,signUpError:null}},computed:{signUpButtonText(){return this.isSigningUp?"Signing Up...":"Sign Up"},isFormValid(){return this.username&&this.email&&this.password}},methods:{signUp(){this.isFormValid&&(this.isSigningUp=!0,this.signUpError=null,bi(Dw,this.email,this.password).then((()=>{Si(Dw.currentUser,{displayName:this.username}).then((()=>{this.$emit("loggedIn",this.username)})).catch((e=>{this.signUpError=e.message})).finally((()=>{this.isSigningUp=!1}))})).catch((e=>{this.signUpError=e.message,this.isSigningUp=!1})))}}},Pw=n(3744);const Lw=(0,Pw.Z)(Ow,[["render",k],["__scopeId","data-v-6ee66ad6"]]);var Mw=Lw;const xw=e=>((0,r.dD)("data-v-4f7ecfd2"),e=e(),(0,r.Cn)(),e),Uw=xw((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Log in",-1))),Fw=xw((()=>(0,r._)("button",{style:{"margin-top":"0.5em"},class:"button-35"},"Log in",-1)));function Vw(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[Uw,(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),autocomplete:"email"},null,512),[[s.nr,o.email]]),(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e)},null,512),[[s.nr,o.password]]),Fw],32)}var jw={emits:["loggedIn"],data(){return{email:"",password:""}},methods:{login(){Ii(Dw,this.email,this.password).then((()=>{this.$emit("loggedIn")})).catch((e=>{const t=e.code,n=e.message;"auth/user-not-found"===t?alert("User not found! Please check your email and password and try again."):alert(n)}))}}};const Bw=(0,Pw.Z)(jw,[["render",Vw],["__scopeId","data-v-4f7ecfd2"]]);var zw=Bw,qw={components:{SignUpPage:Mw,LoginPage:zw,FirstFooter:b.Z},data(){return{isLoggedIn:!1,showLogin:!0,userName:"",name:"",description:"",submissions:[],displayName:"",lastMessageSentTime:0,timeElapsed:0}},beforeUpdate(){Dw.currentUser&&(this.displayName=Dw.currentUser.displayName)},methods:{async createUser(){try{this.displayName=Dw.currentUser,this.isLoggedIn?this.sendMessage():alert("You must be logged in to submit a message!")}catch(e){console.error("Error adding document!: ",e)}},async sendMessage(){const e=(new Date).getTime();if(console.log(e),this.timeElapsed=e-this.lastMessageSentTime,console.log(this.timeElapsed),this.timeElapsed<1e4)return console.log("Please wait at least 10 seconds before sending another message."),void alert("Please wait at least 10 seconds before sending another message.");console.log("message sent"),this.lastMessageSentTime=e;const t=Mv(Rw,"submissions"),n={name:this.name,description:this.description,timestamp:Cw()},r=await bw(t,n);console.log("Document written with ID: ",r.id)},handleLogin(){this.isLoggedIn=!0,document.cookie="isLoggedIn=true; SameSite=Strict",localStorage.setItem("isLoggedIn","true"),document.cookie=`userName=${this.username}; SameSite=Strict`,localStorage.setItem("userName",this.username)},signOut(){try{Ai(Dw)}catch(e){console.error("Error signing out user: ",e)}},handleLogout(){this.signOut(),this.isLoggedIn=!1,document.cookie="isLoggedIn=false; SameSite=Strict",document.cookie="userName=; SameSite=Strict",localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userName")}},created(){const e=Mv(Rw,"submissions");Iw(e,(e=>{const t=[];e.forEach((e=>{const n={id:e.id,...e.data()};n.timestamp&&t.push(n)})),t.sort(((e,t)=>e.timestamp.toMillis()-t.timestamp.toMillis())),this.submissions=t}));const t=localStorage.getItem("isLoggedIn");"true"===t&&(this.isLoggedIn=!0)}};const $w=(0,Pw.Z)(qw,[["render",E],["__scopeId","data-v-43b1eea6"]]);var Kw=$w}}]);
//# sourceMappingURL=558.6bdab1fe.js.map