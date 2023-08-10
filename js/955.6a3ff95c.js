"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[955],{1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7658:function(e,t,n){var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},5585:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(6252),i=n(3577);const s={class:"footer"},o=(0,r._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),a=(0,r._)("br",null,null,-1),c=(0,r._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,n,u,l,h){return(0,r.wg)(),(0,r.iD)("footer",s,[(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)(" Conrad's account on "),o,(0,r.Uk)(" | conradswebsite.com © "+(0,i.zw)(h.getCurrentYear),1),a,(0,r.Uk)(" unless mentioned otherwise, licensing is "),c,(0,r.Uk)(". ")])])])}var l={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=n(3744);const d=(0,h.Z)(l,[["render",u]]);var f=d},955:function(e,t,n){n.r(t),n.d(t,{default:function(){return t_}});var r=n(6252),i=n(3577),s=n(9963);const o=e=>((0,r.dD)("data-v-3f94b739"),e=e(),(0,r.Cn)(),e),a={style:{background:"rgb(255, 255, 255)","padding-bottom":"2em","padding-top":"2.7em"}},c=o((()=>(0,r._)("h2",{style:{"padding-top":"5em"}},"This page is still under construction - actively working on this!",-1))),u=o((()=>(0,r._)("p",null,[(0,r.Uk)("This is just a place to learn more about setting up a login/sign out setup using a basic BaaS (Back end as a service) tools."),(0,r._)("br"),(0,r.Uk)(" The goal will eventually be to create a more comprehensive backend once there is a need for it.")],-1))),l={key:0},h={style:{padding:"1em"}},d={key:1},f={style:{"padding-top":"1em","font-size":"2em"}},p={style:{"padding-top":"2em"}},g=o((()=>(0,r._)("h2",null,"Submit Message! - must be logged in for it to work.",-1))),m={class:"submission-container"},y={style:{"list-style":"none"}},v={style:{"font-weight":"bold","font-size":"1em",color:"#ff6b6b",display:"inline-block",padding:"0.25em 0 0.25em 0"}},w={key:0,style:{"padding-left":"0.5em","font-size":"0.8em",color:"#4d4d4d",display:"inline-block"}},_={class:"break-text",style:{"background-color":"white",display:"inline-block",padding:"0.5em","margin-bottom":"0.5em","border-radius":"0.5em"}};function E(e,t,n,o,E,b){const I=(0,r.up)("LoginPage"),T=(0,r.up)("SignUpPage"),S=(0,r.up)("FirstFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[c,u,E.isLoggedIn?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("h2",f,"Welcome, you can submit a message now, you are logged in! "+(0,i.zw)(E.displayName),1),(0,r._)("button",{class:"button-35",style:{position:"absolute",top:"3em",right:"1em"},onClick:t[2]||(t[2]=(...e)=>b.handleLogout&&b.handleLogout(...e))},"Logout")])):((0,r.wg)(),(0,r.iD)("div",l,[E.showLogin?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(I,{onLoggedIn:b.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",h,[(0,r.Uk)("No account yet? "),(0,r._)("span",{onClick:t[0]||(t[0]=e=>E.showLogin=!1)},"Sign up")])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(T,{onLoggedIn:b.handleLogin},null,8,["onLoggedIn"]),(0,r._)("p",null,[(0,r.Uk)("Already registered? "),(0,r._)("span",{onClick:t[1]||(t[1]=e=>E.showLogin=!0)},"Login")])],64))])),(0,r._)("div",p,[(0,r._)("form",{name:"sendMessage",class:"addinput-form",onSubmit:t[6]||(t[6]=(0,s.iM)(((...t)=>e.createSubmission&&e.createSubmission(...t)),["prevent"]))},[g,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Name to post as",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>E.name=e),name:"submissionName"},null,512),[[s.nr,E.name]]),(0,r.wy)((0,r._)("textarea",{type:"text",placeholder:"Description",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>E.description=e),name:"submissionDescription",cols:"50",rows:"10"},null,512),[[s.nr,E.description]]),(0,r._)("button",{onClick:t[5]||(t[5]=(...e)=>b.createUser&&b.createUser(...e)),class:"button-35"},"Add Entry")],32),(0,r._)("div",m,[(0,r._)("ul",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(E.submissions,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r._)("div",null,[(0,r._)("span",v,(0,i.zw)(e.name),1),e.timestamp?((0,r.wg)(),(0,r.iD)("p",w,(0,i.zw)(e.timestamp.toDate().toLocaleString()),1)):(0,r.kq)("",!0)]),(0,r._)("p",_,(0,i.zw)(e.description),1)])))),128))])])])]),(0,r.Wm)(S)],64)}n(7658);var b=n(5585);const I=e=>((0,r.dD)("data-v-5916ff6c"),e=e(),(0,r.Cn)(),e),T=I((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Sign Up",-1))),S={style:{display:"flex","flex-direction":"column"}},C=I((()=>(0,r._)("label",{for:"text",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Make a username:",-1))),k={style:{display:"flex","flex-direction":"column"}},A=I((()=>(0,r._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Email:",-1))),N={style:{display:"flex","flex-direction":"column"}},R=I((()=>(0,r._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),D=["disabled"],O={key:0,style:{color:"red"}};function P(e,t,n,o,a,c){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>c.signUp&&c.signUp(...e)),["prevent"]))},[T,(0,r._)("div",S,[C,(0,r.wy)((0,r._)("input",{name:"text",type:"text",placeholder:"Username",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e)},null,512),[[s.nr,a.username]])]),(0,r._)("div",k,[A,(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e)},null,512),[[s.nr,a.email]])]),(0,r._)("div",N,[R,(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e)},null,512),[[s.nr,a.password]])]),(0,r._)("button",{style:{margin:"0.5em"},class:"button-35",disabled:a.isSigningUp},(0,i.zw)(c.signUpButtonText),9,D),a.signUpError?((0,r.wg)(),(0,r.iD)("div",O,(0,i.zw)(a.signUpError),1)):(0,r.kq)("",!0)],32)}
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
const L=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},M=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},x={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(L(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):M(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw new U;const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class U extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F=function(e){const t=L(e);return x.encodeByteArray(t,!0)},V=function(e){return F(e).replace(/\./g,"")},j=function(e){try{return x.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function B(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const z=()=>B().__FIREBASE_DEFAULTS__,q=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},$=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&j(e[1]);return t&&JSON.parse(t)},K=()=>{try{return z()||q()||$()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},H=e=>{var t,n;return null===(n=null===(t=K())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},G=e=>{const t=H(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},W=()=>{var e;return null===(e=K())||void 0===e?void 0:e.config},Q=e=>{var t;return null===(t=K())||void 0===t?void 0:t[`_${e}`]};
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
class J{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function X(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[V(JSON.stringify(n)),V(JSON.stringify(o)),a].join(".")}
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
 */function Y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function Z(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function ee(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function te(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function ne(){const e=Y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function re(){try{return"object"===typeof indexedDB}catch(e){return!1}}function ie(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const se="FirebaseError";class oe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=se,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ae.prototype.create)}}class ae{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?ce(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new oe(r,o,n);return a}}function ce(e,t){return e.replace(ue,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const ue=/\{\$([^}]+)}/g;
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
 */function le(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function he(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(de(n)&&de(s)){if(!he(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function de(e){return null!==e&&"object"===typeof e}
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
function fe(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pe(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ge(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function me(e,t){const n=new ye(e,t);return n.subscribe.bind(n)}class ye{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ve(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=we),void 0===r.error&&(r.error=we),void 0===r.complete&&(r.complete=we);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ve(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function we(){}
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
function _e(e){return e&&e._delegate?e._delegate:e}class Ee{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const be="[DEFAULT]";
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
 */class Ie{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new J;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(Se(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Te(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Te(e){return e===be?void 0:e}function Se(e){return"EAGER"===e.instantiationMode}
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
 */class Ce{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ie(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const ke=[];var Ae;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(Ae||(Ae={}));const Ne={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},Re=Ae.INFO,De={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Oe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=De[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Pe{constructor(e){this.name=e,this._logLevel=Re,this._logHandler=Oe,this._userLogHandler=null,ke.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Ne[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const Le=(e,t)=>t.some((t=>e instanceof t));let Me,xe;function Ue(){return Me||(Me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fe(){return xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ve=new WeakMap,je=new WeakMap,Be=new WeakMap,ze=new WeakMap,qe=new WeakMap;function $e(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Je(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ve.set(t,e)})).catch((()=>{})),qe.set(t,e),t}function Ke(e){if(je.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));je.set(e,t)}let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return je.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Be.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ge(e){He=e(He)}function We(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Fe().includes(e)?function(...t){return e.apply(Xe(this),t),Je(Ve.get(this))}:function(...t){return Je(e.apply(Xe(this),t))}:function(t,...n){const r=e.call(Xe(this),t,...n);return Be.set(r,t.sort?t.sort():[t]),Je(r)}}function Qe(e){return"function"===typeof e?We(e):(e instanceof IDBTransaction&&Ke(e),Le(e,Ue())?new Proxy(e,He):e)}function Je(e){if(e instanceof IDBRequest)return $e(e);if(ze.has(e))return ze.get(e);const t=Qe(e);return t!==e&&(ze.set(e,t),qe.set(t,e)),t}const Xe=e=>qe.get(e);function Ye(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ze=["get","getKey","getAll","getAllKeys","count"],et=["put","add","delete","clear"],tt=new Map;function nt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(tt.get(t))return tt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=et.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ze.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return tt.set(t,s),s}Ge((e=>({...e,get:(t,n,r)=>nt(t,n)||e.get(t,n,r),has:(t,n)=>!!nt(t,n)||e.has(t,n)})));
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
class rt{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(it(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function it(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const st="@firebase/app",ot="0.9.15",at=new Pe("@firebase/app"),ct="@firebase/app-compat",ut="@firebase/analytics-compat",lt="@firebase/analytics",ht="@firebase/app-check-compat",dt="@firebase/app-check",ft="@firebase/auth",pt="@firebase/auth-compat",gt="@firebase/database",mt="@firebase/database-compat",yt="@firebase/functions",vt="@firebase/functions-compat",wt="@firebase/installations",_t="@firebase/installations-compat",Et="@firebase/messaging",bt="@firebase/messaging-compat",It="@firebase/performance",Tt="@firebase/performance-compat",St="@firebase/remote-config",Ct="@firebase/remote-config-compat",kt="@firebase/storage",At="@firebase/storage-compat",Nt="@firebase/firestore",Rt="@firebase/firestore-compat",Dt="firebase",Ot="10.1.0",Pt="[DEFAULT]",Lt={[st]:"fire-core",[ct]:"fire-core-compat",[lt]:"fire-analytics",[ut]:"fire-analytics-compat",[dt]:"fire-app-check",[ht]:"fire-app-check-compat",[ft]:"fire-auth",[pt]:"fire-auth-compat",[gt]:"fire-rtdb",[mt]:"fire-rtdb-compat",[yt]:"fire-fn",[vt]:"fire-fn-compat",[wt]:"fire-iid",[_t]:"fire-iid-compat",[Et]:"fire-fcm",[bt]:"fire-fcm-compat",[It]:"fire-perf",[Tt]:"fire-perf-compat",[St]:"fire-rc",[Ct]:"fire-rc-compat",[kt]:"fire-gcs",[At]:"fire-gcs-compat",[Nt]:"fire-fst",[Rt]:"fire-fst-compat","fire-js":"fire-js",[Dt]:"fire-js-all"},Mt=new Map,xt=new Map;function Ut(e,t){try{e.container.addComponent(t)}catch(n){at.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ft(e){const t=e.name;if(xt.has(t))return at.debug(`There were multiple attempts to register component ${t}.`),!1;xt.set(t,e);for(const n of Mt.values())Ut(n,e);return!0}function Vt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const jt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new ae("app","Firebase",jt);
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
class zt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ee("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}
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
 */const qt=Ot;function $t(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!==typeof i||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(n||(n=W()),!n)throw Bt.create("no-options");const s=Mt.get(i);if(s){if(he(n,s.options)&&he(r,s.config))return s;throw Bt.create("duplicate-app",{appName:i})}const o=new Ce(i);for(const c of xt.values())o.addComponent(c);const a=new zt(n,r,o);return Mt.set(i,a),a}function Kt(e=Pt){const t=Mt.get(e);if(!t&&e===Pt&&W())return $t();if(!t)throw Bt.create("no-app",{appName:e});return t}function Ht(e,t,n){var r;let i=null!==(r=Lt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void at.warn(e.join(" "))}Ft(new Ee(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const Gt="firebase-heartbeat-database",Wt=1,Qt="firebase-heartbeat-store";let Jt=null;function Xt(){return Jt||(Jt=Ye(Gt,Wt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qt)}}}).catch((e=>{throw Bt.create("idb-open",{originalErrorMessage:e.message})}))),Jt}async function Yt(e){try{const t=await Xt(),n=await t.transaction(Qt).objectStore(Qt).get(en(e));return n}catch(t){if(t instanceof oe)at.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});at.warn(e.message)}}}async function Zt(e,t){try{const n=await Xt(),r=n.transaction(Qt,"readwrite"),i=r.objectStore(Qt);await i.put(t,en(e)),await r.done}catch(n){if(n instanceof oe)at.warn(n.message);else{const e=Bt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});at.warn(e.message)}}}function en(e){return`${e.name}!${e.options.appId}`}
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
 */const tn=1024,nn=2592e6;class rn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new an(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=sn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=nn})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=sn(),{heartbeatsToSend:t,unsentEntries:n}=on(this._heartbeatsCache.heartbeats),r=V(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sn(){const e=new Date;return e.toISOString().substring(0,10)}function on(e,t=tn){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),cn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class an{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!re()&&ie().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Yt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Zt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Zt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function cn(e){return V(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function un(e){Ft(new Ee("platform-logger",(e=>new rt(e)),"PRIVATE")),Ft(new Ee("heartbeat",(e=>new rn(e)),"PRIVATE")),Ht(st,ot,e),Ht(st,ot,"esm2017"),Ht("fire-js","")}un("");function ln(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function hn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dn=hn,fn=new ae("auth","Firebase",hn()),pn=new Pe("@firebase/auth");function gn(e,...t){pn.logLevel<=Ae.WARN&&pn.warn(`Auth (${qt}): ${e}`,...t)}function mn(e,...t){pn.logLevel<=Ae.ERROR&&pn.error(`Auth (${qt}): ${e}`,...t)}
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
 */function yn(e,...t){throw _n(e,...t)}function vn(e,...t){return _n(e,...t)}function wn(e,t,n){const r=Object.assign(Object.assign({},dn()),{[t]:n}),i=new ae("auth","Firebase",r);return i.create(t,{appName:e.name})}function _n(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return fn.create(e,...t)}function En(e,t,...n){if(!e)throw _n(t,...n)}function bn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mn(t),new Error(t)}function In(e,t){e||bn(t)}
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
 */function Tn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Sn(){return"http:"===Cn()||"https:"===Cn()}function Cn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function kn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Sn()||ee()||"connection"in navigator))||navigator.onLine}function An(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class Nn{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=Z()||te()}get(){return kn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Rn(e,t){In(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Dn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const On={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},Pn=new Nn(3e4,6e4);
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
 */function Ln(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mn(e,t,n,r,i={}){return xn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=fe(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Dn.fetch()(Fn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function xn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},On),t);try{const t=new Vn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw jn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw jn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw jn(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw jn(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw wn(e,a,o);yn(e,a)}}catch(i){if(i instanceof oe)throw i;yn(e,"network-request-failed",{message:String(i)})}}async function Un(e,t,n,r,i={}){const s=await Mn(e,t,n,r,i);return"mfaPendingCredential"in s&&yn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Fn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Rn(e.config,i):`${e.config.apiScheme}://${i}`}class Vn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(vn(this.auth,"network-request-failed"))),Pn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function jn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function Bn(e,t){return Mn(e,"POST","/v1/accounts:delete",t)}async function zn(e,t){return Mn(e,"POST","/v1/accounts:lookup",t)}
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
 */function qn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function $n(e,t=!1){const n=_e(e),r=await n.getIdToken(t),i=Hn(r);En(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:qn(Kn(i.auth_time)),issuedAtTime:qn(Kn(i.iat)),expirationTime:qn(Kn(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Kn(e){return 1e3*Number(e)}function Hn(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return mn("JWT malformed, contained fewer than 3 sections"),null;try{const e=j(n);return e?JSON.parse(e):(mn("Failed to decode base64 JWT payload"),null)}catch(i){return mn("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Gn(e){const t=Hn(e);return En(t,"internal-error"),En("undefined"!==typeof t.exp,"internal-error"),En("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Wn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof oe&&Qn(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qn({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class Jn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Xn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Yn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wn(e,zn(n,{idToken:r}));En(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?tr(s.providerUserInfo):[],a=er(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xn(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Zn(e){const t=_e(e);await Yn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function er(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function tr(e){return e.map((e=>{var{providerId:t}=e,n=ln(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function nr(e,t){const n=await xn(e,{},(async()=>{const n=fe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Fn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Dn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){En(e.idToken,"internal-error"),En("undefined"!==typeof e.idToken,"internal-error"),En("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Gn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return En(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await nr(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new rr;return n&&(En("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(En("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(En("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return bn("not implemented")}}
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
 */function ir(e,t){En("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class sr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ln(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return En(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $n(this,e)}reload(){return Zn(this)}_assign(e){this!==e&&(En(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){En(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Yn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,Bn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:b}=t;En(v&&b,e,"internal-error");const I=rr.fromJSON(this.name,b);En("string"===typeof v,e,"internal-error"),ir(l,e.name),ir(h,e.name),En("boolean"===typeof w,e,"internal-error"),En("boolean"===typeof _,e,"internal-error"),ir(d,e.name),ir(f,e.name),ir(p,e.name),ir(g,e.name),ir(m,e.name),ir(y,e.name);const T=new sr({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new rr;r.updateFromServerResponse(t);const i=new sr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Yn(i),i}}
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
 */const or=new Map;function ar(e){In(e instanceof Function,"Expected a class definition");let t=or.get(e);return t?(In(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,or.set(e,t),t)}
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
 */class cr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cr.type="NONE";const ur=cr;
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
 */function lr(e,t,n){return`firebase:${e}:${t}:${n}`}class hr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=lr(this.userKey,r.apiKey,i),this.fullPersistenceKey=lr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new hr(ar(ur),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ar(ur);const s=lr(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=sr._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new hr(i,e,n)):new hr(i,e,n)}}
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
 */function dr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vr(t))return"Blackberry";if(wr(t))return"Webos";if(pr(t))return"Safari";if((t.includes("chrome/")||gr(t))&&!t.includes("edge/"))return"Chrome";if(yr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fr(e=Y()){return/firefox\//i.test(e)}function pr(e=Y()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gr(e=Y()){return/crios\//i.test(e)}function mr(e=Y()){return/iemobile/i.test(e)}function yr(e=Y()){return/android/i.test(e)}function vr(e=Y()){return/blackberry/i.test(e)}function wr(e=Y()){return/webos/i.test(e)}function _r(e=Y()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Er(e=Y()){var t;return _r(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function br(){return ne()&&10===document.documentMode}function Ir(e=Y()){return _r(e)||yr(e)||wr(e)||vr(e)||/windows phone/i.test(e)||mr(e)}function Tr(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Sr(e,t=[]){let n;switch(e){case"Browser":n=dr(Y());break;case"Worker":n=`${dr(Y())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qt}/${r}`}
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
 */async function Cr(e,t){return Mn(e,"GET","/v2/recaptchaConfig",Ln(e,t))}
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
 */function kr(e){return void 0!==e&&void 0!==e.enterprise}class Ar{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Nr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Rr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=vn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Nr().appendChild(r)}))}function Dr(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Or="https://www.google.com/recaptcha/enterprise.js?render=",Pr="recaptcha-enterprise",Lr="NO_RECAPTCHA";class Mr{constructor(e){this.type=Pr,this.auth=Vr(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Cr(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ar(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;kr(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Lr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&kr(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Rr(Or+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function xr(e,t,n,r=!1){const i=new Mr(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Ur{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Fr{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jr(this),this.idTokenSubscription=new jr(this),this.beforeStateQueue=new Ur(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ar(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return En(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yn(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=An()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_e(e):null;return t&&En(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&En(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ar(e))}))}async initializeRecaptchaConfig(){const e=await Cr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ar(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Mr(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ae("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ar(e)||this._popupRedirectResolver;En(t,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return En(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return En(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&gn(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Vr(e){return _e(e)}class jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=me((e=>this.observer=e))}get next(){return En(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Br(e,t){const n=Vt(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(he(r,null!==t&&void 0!==t?t:{}))return e;yn(e,"already-initialized")}const r=n.initialize({options:t});return r}function zr(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function qr(e,t,n){const r=Vr(e);En(r._canInitEmulator,r,"emulator-config-failed"),En(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=$r(t),{host:o,port:a}=Kr(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Gr()}function $r(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Kr(e){const t=$r(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Hr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Hr(t)}}}function Hr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Gr(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class Wr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,t){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}
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
 */async function Qr(e,t){return Mn(e,"POST","/v1/accounts:update",t)}
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
async function Jr(e,t){return Un(e,"POST","/v1/accounts:signInWithPassword",Ln(e,t))}
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
async function Xr(e,t){return Un(e,"POST","/v1/accounts:signInWithEmailLink",Ln(e,t))}async function Yr(e,t){return Un(e,"POST","/v1/accounts:signInWithEmailLink",Ln(e,t))}
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
 */class Zr extends Wr{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Zr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Zr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await xr(e,n,"signInWithPassword");return Jr(e,t)}return Jr(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await xr(e,n,"signInWithPassword");return Jr(e,t)}return Promise.reject(t)}));case"emailLink":return Xr(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yr(e,{idToken:t,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function ei(e,t){return Un(e,"POST","/v1/accounts:signInWithIdp",Ln(e,t))}
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
 */const ti="http://localhost";class ni extends Wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ln(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ni(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ei(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ei(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ei(e,t)}buildRequest(){const e={requestUri:ti,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=fe(t)}return e}}
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
 */async function ri(e,t){return Mn(e,"POST","/v1/accounts:sendVerificationCode",Ln(e,t))}async function ii(e,t){return Un(e,"POST","/v1/accounts:signInWithPhoneNumber",Ln(e,t))}async function si(e,t){const n=await Un(e,"POST","/v1/accounts:signInWithPhoneNumber",Ln(e,t));if(n.temporaryProof)throw jn(e,"account-exists-with-different-credential",n);return n}const oi={["USER_NOT_FOUND"]:"user-not-found"};async function ai(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Un(e,"POST","/v1/accounts:signInWithPhoneNumber",Ln(e,n),oi)}
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
 */class ci extends Wr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ci({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ci({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ii(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return si(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ai(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ci({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ui(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function li(e){const t=pe(ge(e))["link"],n=t?pe(ge(t))["deep_link_id"]:null,r=pe(ge(e))["deep_link_id"],i=r?pe(ge(r))["link"]:null;return i||r||n||t||e}class hi{constructor(e){var t,n,r,i,s,o;const a=pe(ge(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=ui(null!==(r=a["mode"])&&void 0!==r?r:null);En(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=li(e);try{return new hi(t)}catch(n){return null}}}
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
class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,t){return Zr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=hi.parseLink(t);return En(n,"argument-error"),Zr._fromEmailAndCode(e,n.code,n.tenantId)}}di.PROVIDER_ID="password",di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class pi extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class gi extends pi{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch(t){return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com",gi.PROVIDER_ID="facebook.com";
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
class mi extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ni._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mi.credential(t,n)}catch(r){return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com",mi.PROVIDER_ID="google.com";
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
class yi extends pi{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch(t){return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com",yi.PROVIDER_ID="github.com";
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
class vi extends pi{constructor(){super("twitter.com")}static credential(e,t){return ni._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vi.credential(t,n)}catch(r){return null}}}
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
async function wi(e,t){return Un(e,"POST","/v1/accounts:signUp",Ln(e,t))}
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
 */vi.TWITTER_SIGN_IN_METHOD="twitter.com",vi.PROVIDER_ID="twitter.com";class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await sr._fromIdTokenResponse(e,n,r),s=Ei(n),o=new _i({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ei(n);return new _i({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ei(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class bi extends oe{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new bi(e,t,n,r)}}function Ii(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw bi._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Ti(e,t,n=!1){const r=await Wn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _i._forOperation(e,"link",r)}
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
async function Si(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Wn(e,Ii(r,i,t,e),n);En(s.idToken,r,"internal-error");const o=Hn(s.idToken);En(o,r,"internal-error");const{sub:a}=o;return En(e.uid===a,r,"user-mismatch"),_i._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&yn(r,"user-mismatch"),s}}
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
 */async function Ci(e,t,n=!1){const r="signIn",i=await Ii(e,r,t),s=await _i._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ki(e,t){return Ci(Vr(e),t)}async function Ai(e,t,n){var r;const i=Vr(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await xr(i,s,"signUpPassword");o=wi(i,e)}else o=wi(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await xr(i,s,"signUpPassword");return wi(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await _i._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ni(e,t,n){return ki(_e(e),di.credential(t,n))}
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
async function Ri(e,t){return Mn(e,"POST","/v1/accounts:update",t)}
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
 */async function Di(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=_e(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await Wn(r,Ri(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Oi(e,t,n,r){return _e(e).onIdTokenChanged(t,n,r)}function Pi(e,t,n){return _e(e).beforeAuthStateChanged(t,n)}function Li(e){return _e(e).signOut()}
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
function Mi(e,t){return Mn(e,"POST","/v2/accounts/mfaEnrollment:start",Ln(e,t))}function xi(e,t){return Mn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ln(e,t))}function Ui(e,t){return Mn(e,"POST","/v2/accounts/mfaEnrollment:start",Ln(e,t))}function Fi(e,t){return Mn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ln(e,t))}new WeakMap;const Vi="__sak";
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
 */class ji{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Bi(){const e=Y();return pr(e)||_r(e)}const zi=1e3,qi=10;class $i extends ji{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bi()&&Tr(),this.fallbackToPolling=Ir(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);br()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qi):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),zi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$i.type="LOCAL";const Ki=$i;
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
 */class Hi extends ji{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hi.type="SESSION";const Gi=Hi;
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
 */function Wi(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class Qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Wi(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ji(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Qi.receivers=[];class Xi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ji("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Yi(){return window}function Zi(e){Yi().location.href=e}
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
 */function es(){return"undefined"!==typeof Yi()["WorkerGlobalScope"]&&"function"===typeof Yi()["importScripts"]}async function ts(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ns(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function rs(){return es()?self:null}
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
 */const is="firebaseLocalStorageDb",ss=1,os="firebaseLocalStorage",as="fbase_key";class cs{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function us(e,t){return e.transaction([os],t?"readwrite":"readonly").objectStore(os)}function ls(){const e=indexedDB.deleteDatabase(is);return new cs(e).toPromise()}function hs(){const e=indexedDB.open(is,ss);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(os,{keyPath:as})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(os)?t(n):(n.close(),await ls(),t(await hs()))}))}))}async function ds(e,t,n){const r=us(e,!0).put({[as]:t,value:n});return new cs(r).toPromise()}async function fs(e,t){const n=us(e,!1).get(t),r=await new cs(n).toPromise();return void 0===r?null:r.value}function ps(e,t){const n=us(e,!0).delete(t);return new cs(n).toPromise()}const gs=800,ms=3;class ys{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hs()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ms)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return es()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qi._getInstance(rs()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ts(),!this.activeServiceWorker)return;this.sender=new Xi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ns()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hs();return await ds(e,Vi,"1"),await ps(e,Vi),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ds(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>fs(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ps(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=us(e,!1).getAll();return new cs(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ys.type="LOCAL";const vs=ys;
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
 */function ws(e,t){return Mn(e,"POST","/v2/accounts/mfaSignIn:start",Ln(e,t))}function _s(e,t){return Mn(e,"POST","/v2/accounts/mfaSignIn:finalize",Ln(e,t))}function Es(e,t){return Mn(e,"POST","/v2/accounts/mfaSignIn:finalize",Ln(e,t))}
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
Dr("rcb"),new Nn(3e4,6e4);
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
const bs="recaptcha";async function Is(e,t,n){var r;const i=await n.verify();try{let s;if(En("string"===typeof i,e,"argument-error"),En(n.type===bs,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){En("enroll"===t.type,e,"internal-error");const n=await Mi(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{En("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;En(n,e,"missing-multi-factor-info");const o=await ws(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ri(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Ts{constructor(e){this.providerId=Ts.PROVIDER_ID,this.auth=Vr(e)}verifyPhoneNumber(e,t){return Is(this.auth,e,_e(t))}static credential(e,t){return ci._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ts.credentialFromTaggedObject(t)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ci._fromTokenResponse(t,n):null}}
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
function Ss(e,t){return t?ar(t):(En(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ts.PROVIDER_ID="phone",Ts.PHONE_SIGN_IN_METHOD="phone";class Cs extends Wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ei(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ks(e){return Ci(e.auth,new Cs(e),e.bypassAuthState)}function As(e){const{auth:t,user:n}=e;return En(n,t,"internal-error"),Si(n,new Cs(e),e.bypassAuthState)}async function Ns(e){const{auth:t,user:n}=e;return En(n,t,"internal-error"),Ti(n,new Cs(e),e.bypassAuthState)}
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
 */class Rs{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ks;case"linkViaPopup":case"linkViaRedirect":return Ns;case"reauthViaPopup":case"reauthViaRedirect":return As;default:yn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ds=new Nn(2e3,1e4);class Os extends Rs{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return En(e,this.auth,"internal-error"),e}async onExecution(){In(1===this.filter.length,"Popup operations only handle one event");const e=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(vn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ds.get())};e()}}Os.currentPopupAction=null;
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
const Ps="pendingRedirect",Ls=new Map;class Ms extends Rs{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ls.get(this.auth._key());if(!e){try{const t=await xs(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ls.set(this.auth._key(),e)}return this.bypassAuthState||Ls.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function xs(e,t){const n=Vs(t),r=Fs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Us(e,t){Ls.set(e._key(),t)}function Fs(e){return ar(e._redirectPersistence)}function Vs(e){return lr(Ps,e.config.apiKey,e.name)}
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
 */async function js(e,t,n=!1){const r=Vr(e),i=Ss(r,t),s=new Ms(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const Bs=6e5;class zs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ks(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!$s(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(vn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bs&&this.cachedEventUids.clear(),this.cachedEventUids.has(qs(e))}saveEventToCache(e){this.cachedEventUids.add(qs(e)),this.lastProcessedEventTime=Date.now()}}function qs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $s({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ks(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $s(e);default:return!1}}
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
 */async function Hs(e,t={}){return Mn(e,"GET","/v1/projects",t)}
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
 */const Gs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ws=/^https?/;async function Qs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Hs(e);for(const r of t)try{if(Js(r))return}catch(n){}yn(e,"unauthorized-domain")}function Js(e){const t=Tn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ws.test(n))return!1;if(Gs.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Xs=new Nn(3e4,6e4);function Ys(){const e=Yi().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Zs(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ys(),n(vn(e,"network-request-failed"))},timeout:Xs.get()})}if(null===(i=null===(r=Yi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Yi().gapi)||void 0===s?void 0:s.load)){const t=Dr("iframefcb");return Yi()[t]=()=>{gapi.load?o():n(vn(e,"network-request-failed"))},Rr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw eo=null,e}))}let eo=null;function to(e){return eo=eo||Zs(e),eo}
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
 */const no=new Nn(5e3,15e3),ro="__/auth/iframe",io="emulator/auth/iframe",so={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ao(e){const t=e.config;En(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rn(t,io):`https://${e.config.authDomain}/${ro}`,r={apiKey:t.apiKey,appName:e.name,v:qt},i=oo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fe(r).slice(1)}`}async function co(e){const t=await to(e),n=Yi().gapi;return En(n,e,"internal-error"),t.open({where:document.body,url:ao(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:so,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=vn(e,"network-request-failed"),s=Yi().setTimeout((()=>{r(i)}),no.get());function o(){Yi().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const uo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lo=500,ho=600,fo="_blank",po="http://localhost";class go{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function mo(e,t,n,r=lo,i=ho){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uo),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Y().toLowerCase();n&&(a=gr(u)?fo:n),fr(u)&&(t=t||po,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Er(u)&&"_self"!==a)return yo(t||"",a),new go(null);const h=window.open(t||"",a,l);En(h,e,"popup-blocked");try{h.focus()}catch(d){}return new go(h)}function yo(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const vo="__/auth/handler",wo="emulator/auth/handler",_o=encodeURIComponent("fac");async function Eo(e,t,n,r,i,s){En(e.config.authDomain,e,"auth-domain-config-required"),En(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qt,eventId:i};if(t instanceof fi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",le(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof pi){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${_o}=${encodeURIComponent(c)}`:"";return`${bo(e)}?${fe(a).slice(1)}${u}`}function bo({config:e}){return e.emulator?Rn(e,wo):`https://${e.authDomain}/${vo}`}
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
 */const Io="webStorageSupport";class To{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gi,this._completeRedirectFn=js,this._overrideRedirectResult=Us}async _openPopup(e,t,n,r){var i;In(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Eo(e,t,n,Tn(),r);return mo(e,s,Ji())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Eo(e,t,n,Tn(),r);return Zi(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(In(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await co(e),n=new zs(e);return t.register("authEvent",(t=>{En(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Io,{type:Io},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Io];void 0!==i&&t(!!i),yn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ir()||pr()||_r()}}const So=To;class Co{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return bn("unexpected MultiFactorSessionType")}}}class ko extends Co{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ko(e)}_finalizeEnroll(e,t,n){return xi(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _s(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ao{constructor(){}static assertion(e){return ko._fromCredential(e)}}Ao.FACTOR_ID="phone";class No{static assertionForEnrollment(e,t){return Ro._fromSecret(e,t)}static assertionForSignIn(e,t){return Ro._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;En("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ui(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Do._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}No.FACTOR_ID="totp";class Ro extends Co{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ro(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ro(t,e)}async _finalizeEnroll(e,t,n){return En("undefined"!==typeof this.secret,e,"argument-error"),Fi(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){En(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Es(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Do{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Do(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Oo(e)||Oo(t))&&(r=!0),r&&(Oo(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Oo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Oo(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Po="@firebase/auth",Lo="1.1.0";
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
class Mo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){En(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function xo(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uo(e){Ft(new Ee("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;En(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sr(e)},u=new Fr(r,i,s,c);return zr(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),Ft(new Ee("auth-internal",(e=>{const t=Vr(e.getProvider("auth").getImmediate());return(e=>new Mo(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Po,Lo,xo(e)),Ht(Po,Lo,"esm2017")}
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
 */const Fo=300,Vo=Q("authIdTokenMaxAge")||Fo;let jo=null;const Bo=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vo)return;const i=null===n||void 0===n?void 0:n.token;jo!==i&&(jo=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zo(e=Kt()){const t=Vt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Br(e,{popupRedirectResolver:So,persistence:[vs,Ki,Gi]}),r=Q("authTokenSyncURL");if(r){const e=Bo(r);Pi(n,e,(()=>e(n.currentUser))),Oi(n,(t=>e(t)))}const i=H("auth");return i&&qr(n,`http://${i}`),n}Uo("Browser");var qo="firebase",$o="10.1.0";
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
Ht(qo,$o,"app");var Ko,Ho="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Go={},Wo=Wo||{},Qo=Ho||self;function Jo(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function Xo(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Yo(e){return Object.prototype.hasOwnProperty.call(e,Zo)&&e[Zo]||(e[Zo]=++ea)}var Zo="closure_uid_"+(1e9*Math.random()>>>0),ea=0;function ta(e,t,n){return e.call.apply(e.bind,arguments)}function na(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ra(e,t,n){return ra=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ta:na,ra.apply(null,arguments)}function ia(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function sa(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function oa(){this.s=this.s,this.o=this.o}var aa=0;oa.prototype.s=!1,oa.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==aa)||Yo(this)},oa.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ca=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ua(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function la(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(Jo(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function ha(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ha.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!Qo.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Qo.addEventListener("test",(()=>{}),t),Qo.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function fa(e){return/^[\s\xa0]*$/.test(e)}function pa(){var e=Qo.navigator;return e&&(e=e.userAgent)?e:""}function ga(e){return-1!=pa().indexOf(e)}function ma(e){return ma[" "](e),e}function ya(e,t){var n=rh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}ma[" "]=function(){};var va,wa,_a=ga("Opera"),Ea=ga("Trident")||ga("MSIE"),ba=ga("Edge"),Ia=ba||Ea,Ta=ga("Gecko")&&!(-1!=pa().toLowerCase().indexOf("webkit")&&!ga("Edge"))&&!(ga("Trident")||ga("MSIE"))&&!ga("Edge"),Sa=-1!=pa().toLowerCase().indexOf("webkit")&&!ga("Edge");function Ca(){var e=Qo.document;return e?e.documentMode:void 0}e:{var ka="",Aa=function(){var e=pa();return Ta?/rv:([^\);]+)(\)|;)/.exec(e):ba?/Edge\/([\d\.]+)/.exec(e):Ea?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Sa?/WebKit\/(\S+)/.exec(e):_a?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Aa&&(ka=Aa?Aa[1]:""),Ea){var Na=Ca();if(null!=Na&&Na>parseFloat(ka)){va=String(Na);break e}}va=ka}if(Qo.document&&Ea){var Ra=Ca();wa=Ra||(parseInt(va,10)||void 0)}else wa=void 0;var Da=wa;function Oa(e,t){if(ha.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ta){e:{try{ma(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Pa[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oa.$.h.call(this)}}sa(Oa,ha);var Pa={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var La="closure_listenable_"+(1e6*Math.random()|0),Ma=0;function xa(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ma,this.fa=this.ia=!1}function Ua(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Fa(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Va(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ja(e){const t={};for(const n in e)t[n]=e[n];return t}const Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<Ba.length;t++)n=Ba[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function qa(e){this.src=e,this.g={},this.h=0}function $a(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ca(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ua(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ka(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}qa.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ka(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new xa(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var Ha="closure_lm_"+(1e6*Math.random()|0),Ga={};function Wa(e,t,n,r,i){if(r&&r.once)return Xa(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Wa(e,t[s],n,r,i);return null}return n=ic(n),e&&e[La]?e.O(t,n,Xo(r)?!!r.capture:!!r,i):Qa(e,t,n,!1,r,i)}function Qa(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Xo(i)?!!i.capture:!!i,a=nc(e);if(a||(e[Ha]=a=new qa(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ja(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)da||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ec(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ja(){function e(n){return t.call(e.src,e.listener,n)}const t=tc;return e}function Xa(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xa(e,t[s],n,r,i);return null}return n=ic(n),e&&e[La]?e.P(t,n,Xo(r)?!!r.capture:!!r,i):Qa(e,t,n,!0,r,i)}function Ya(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ya(e,t[s],n,r,i);else r=Xo(r)?!!r.capture:!!r,n=ic(n),e&&e[La]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ka(s,n,r,i),-1<n&&(Ua(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=nc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ka(t,n,r,i)),(n=-1<e?t[e]:null)&&Za(n))}function Za(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[La])$a(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ec(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=nc(t))?($a(n,e),0==n.h&&(n.src=null,t[Ha]=null)):Ua(e)}}}function ec(e){return e in Ga?Ga[e]:Ga[e]="on"+e}function tc(e,t){if(e.fa)e=!0;else{t=new Oa(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Za(e),e=n.call(r,t)}return e}function nc(e){return e=e[Ha],e instanceof qa?e:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ic(e){return"function"===typeof e?e:(e[rc]||(e[rc]=function(t){return e.handleEvent(t)}),e[rc])}function sc(){oa.call(this),this.i=new qa(this),this.S=this,this.J=null}function oc(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new ha(t,e);else if(t instanceof ha)t.target=t.target||e;else{var i=t;t=new ha(r,e),za(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ac(o,r,!0,t)&&i}if(o=t.g=e,i=ac(o,r,!0,t)&&i,i=ac(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ac(o,r,!1,t)&&i}function ac(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&$a(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}sa(sc,oa),sc.prototype[La]=!0,sc.prototype.removeEventListener=function(e,t,n,r){Ya(this,e,t,n,r)},sc.prototype.N=function(){if(sc.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ua(n[r]);delete t.g[e],t.h--}}this.J=null},sc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},sc.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var cc=Qo.JSON.stringify;class uc{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function lc(){var e=vc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class hc{constructor(){this.h=this.g=null}add(e,t){const n=dc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var dc=new uc((()=>new fc),(e=>e.reset()));class fc{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function pc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function gc(e){Qo.setTimeout((()=>{throw e}),0)}let mc,yc=!1,vc=new hc,wc=()=>{const e=Qo.Promise.resolve(void 0);mc=()=>{e.then(_c)}};var _c=()=>{for(var e;e=lc();){try{e.h.call(e.g)}catch(n){gc(n)}var t=dc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}yc=!1};function Ec(e,t){sc.call(this),this.h=e||1,this.g=t||Qo,this.j=ra(this.qb,this),this.l=Date.now()}function bc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ic(e,t,n){if("function"===typeof e)n&&(e=ra(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ra(e.handleEvent,e)}return 2147483647<Number(t)?-1:Qo.setTimeout(e,t||0)}function Tc(e){e.g=Ic((()=>{e.g=null,e.i&&(e.i=!1,Tc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}sa(Ec,sc),Ko=Ec.prototype,Ko.ga=!1,Ko.T=null,Ko.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),oc(this,"tick"),this.ga&&(bc(this),this.start()))}},Ko.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ko.N=function(){Ec.$.N.call(this),bc(this),delete this.g};class Sc extends oa{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tc(this)}N(){super.N(),this.g&&(Qo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cc(e){oa.call(this),this.h=e,this.g={}}sa(Cc,oa);var kc=[];function Ac(e,t,n,r){Array.isArray(n)||(n&&(kc[0]=n.toString()),n=kc);for(var i=0;i<n.length;i++){var s=Wa(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Nc(e){Fa(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Za(e)}),e),e.g={}}function Rc(){this.g=!0}function Dc(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Oc(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Pc(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Mc(e,n)+(r?" "+r:"")}))}function Lc(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Mc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return cc(n)}catch(a){return t}}Cc.prototype.N=function(){Cc.$.N.call(this),Nc(this)},Cc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rc.prototype.Ea=function(){this.g=!1},Rc.prototype.info=function(){};var xc={},Uc=null;function Fc(){return Uc=Uc||new sc}function Vc(e){ha.call(this,xc.Ta,e)}function jc(e){const t=Fc();oc(t,new Vc(t))}function Bc(e,t){ha.call(this,xc.STAT_EVENT,e),this.stat=t}function zc(e){const t=Fc();oc(t,new Bc(t,e))}function qc(e,t){ha.call(this,xc.Ua,e),this.size=t}function $c(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Qo.setTimeout((function(){e()}),t)}xc.Ta="serverreachability",sa(Vc,ha),xc.STAT_EVENT="statevent",sa(Bc,ha),xc.Ua="timingevent",sa(qc,ha);var Kc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gc(){}function Wc(e){return e.h||(e.h=e.i())}function Qc(){}Gc.prototype.h=null;var Jc,Xc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){ha.call(this,"d")}function Zc(){ha.call(this,"c")}function eu(){}function tu(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Cc(this),this.P=ru,e=Ia?125:void 0,this.V=new Ec(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}sa(Yc,ha),sa(Zc,ha),sa(eu,Gc),eu.prototype.g=function(){return new XMLHttpRequest},eu.prototype.i=function(){return{}},Jc=new eu;var ru=45e3,iu={},su={};function ou(e,t,n){e.L=1,e.v=Au(Iu(t)),e.s=n,e.S=!0,au(e,null)}function au(e,t){e.G=Date.now(),hu(e),e.A=Iu(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Bu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new nu,e.g=Hl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Sc(ra(e.Pa,e,e.g),e.O)),Ac(e.U,e.g,"readystatechange",e.nb),t=e.I?ja(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),jc(),Dc(e.j,e.u,e.A,e.m,e.W,e.s)}function cu(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function uu(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=lu(e,n),r==su){4==t&&(e.o=4,zc(14),i=!1),Pc(e.j,e.m,null,"[Incomplete Response]");break}if(r==iu){e.o=4,zc(15),Pc(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Pc(e.j,e.m,r,null),mu(e,r)}cu(e)&&r!=su&&r!=iu&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,zc(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fl(t),t.M=!0,zc(11))):(Pc(e.j,e.m,n,"[Invalid Chunked Response]"),gu(e),pu(e))}function lu(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?su:(n=Number(t.substring(n,r)),isNaN(n)?iu:(r+=1,r+n>t.length?su:(t=t.slice(r,r+n),e.C=r+n,t)))}function hu(e){e.Y=Date.now()+e.P,du(e,e.P)}function du(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=$c(ra(e.lb,e),t)}function fu(e){e.B&&(Qo.clearTimeout(e.B),e.B=null)}function pu(e){0==e.l.H||e.J||Bl(e.l,e)}function gu(e){fu(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,bc(e.V),Nc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function mu(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Qu(n.i,e)))if(!e.K&&Qu(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;jl(n),Nl(n)}Ul(n),zc(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=$c(ra(n.ib,n),6e3));if(1>=Wu(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ql(n,11)}else if((e.K||n.g==e)&&jl(n),!fa(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ju(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,ku(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Kl(r,r.J?r.pa:null,r.Y),o.K){Xu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(fu(a),hu(a)),r.g=o}else xl(r);0<n.j.length&&Dl(n)}else"stop"!=u[0]&&"close"!=u[0]||ql(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ql(n,7):Al(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}jc(4)}catch(u){}}function yu(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(Jo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function vu(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(Jo(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function wu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Jo(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=vu(e),r=yu(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}Ko=tu.prototype,Ko.setTimeout=function(e){this.P=e},Ko.nb=function(e){e=e.target;const t=this.M;t&&3==El(e)?t.l():this.Pa(e)},Ko.Pa=function(e){try{if(e==this.g)e:{const l=El(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||Ia||this.g&&(this.h.h||this.g.ja()||bl(this.g)))){this.J||4!=l||7==t||jc(8==t||0>=h?3:2),fu(this);var n=this.g.da();this.ca=n;t:if(cu(this)){var r=bl(this.g);e="";var i=r.length,s=4==El(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){gu(this),pu(this);var o="";break t}this.h.i=new Qo.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Oc(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fa(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,zc(12),gu(this),pu(this);break e}Pc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mu(this,n)}this.S?(uu(this,l,o),Ia&&this.i&&3==l&&(Ac(this.U,this.V,"tick",this.mb),this.V.start())):(Pc(this.j,this.m,o,null),mu(this,o)),4==l&&gu(this),this.i&&!this.J&&(4==l?Bl(this.l,this):(this.i=!1,hu(this)))}else Il(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zc(12)):(this.o=0,zc(13)),gu(this),pu(this)}}}catch(l){}},Ko.mb=function(){if(this.g){var e=El(this.g),t=this.g.ja();this.C<t.length&&(fu(this),uu(this,e,t),this.i&&4!=e&&hu(this))}},Ko.cancel=function(){this.J=!0,gu(this)},Ko.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Lc(this.j,this.A),2!=this.L&&(jc(),zc(17)),gu(this),this.o=2,pu(this)):du(this,this.Y-e)};var _u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bu){this.h=e.h,Tu(this,e.j),this.s=e.s,this.g=e.g,Su(this,e.m),this.l=e.l;var t=e.i,n=new Uu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Cu(this,n),this.o=e.o}else e&&(t=String(e).match(_u))?(this.h=!1,Tu(this,t[1]||"",!0),this.s=Nu(t[2]||""),this.g=Nu(t[3]||"",!0),Su(this,t[4]),this.l=Nu(t[5]||"",!0),Cu(this,t[6]||"",!0),this.o=Nu(t[7]||"")):(this.h=!1,this.i=new Uu(null,this.h))}function Iu(e){return new bu(e)}function Tu(e,t,n){e.j=n?Nu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Su(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Cu(e,t,n){t instanceof Uu?(e.i=t,qu(e.i,e.h)):(n||(t=Ru(t,Mu)),e.i=new Uu(t,e.h))}function ku(e,t,n){e.i.set(t,n)}function Au(e){return ku(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Nu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ru(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Du),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Du(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}bu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ru(t,Ou,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ru(t,Ou,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ru(n,"/"==n.charAt(0)?Lu:Pu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ru(n,xu)),e.join("")};var Ou=/[#\/\?@]/g,Pu=/[#\?:]/g,Lu=/[#\?]/g,Mu=/[#\?@]/g,xu=/#/g;function Uu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Fu(e){e.g||(e.g=new Map,e.h=0,e.i&&Eu(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Vu(e,t){Fu(e),t=zu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ju(e,t){return Fu(e),t=zu(e,t),e.g.has(t)}function Bu(e,t,n){Vu(e,t),0<n.length&&(e.i=null,e.g.set(zu(e,t),ua(n)),e.h+=n.length)}function zu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qu(e,t){t&&!e.j&&(Fu(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Vu(this,t),Bu(this,n,e))}),e)),e.j=t}Ko=Uu.prototype,Ko.add=function(e,t){Fu(this),this.i=null,e=zu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ko.forEach=function(e,t){Fu(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Ko.ta=function(){Fu(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Ko.Z=function(e){Fu(this);let t=[];if("string"===typeof e)ju(this,e)&&(t=t.concat(this.g.get(zu(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Ko.set=function(e,t){return Fu(this),this.i=null,e=zu(this,e),ju(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ko.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},Ko.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var $u=class{constructor(e,t){this.g=e,this.map=t}};function Ku(e){this.l=e||Hu,Qo.PerformanceNavigationTiming?(e=Qo.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Qo.g&&Qo.g.Ka&&Qo.g.Ka()&&Qo.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hu=10;function Gu(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Wu(e){return e.h?1:e.g?e.g.size:0}function Qu(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ju(e,t){e.g?e.g.add(t):e.h=t}function Xu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Yu(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ua(e.i)}Ku.prototype.cancel=function(){if(this.i=Yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Zu=class{stringify(e){return Qo.JSON.stringify(e,void 0)}parse(e){return Qo.JSON.parse(e,void 0)}};function el(){this.g=new Zu}function tl(e,t,n){const r=n||"";try{wu(e,(function(e,n){let i=e;Xo(e)&&(i=cc(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function nl(e,t){const n=new Rc;if(Qo.Image){const r=new Image;r.onload=ia(rl,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ia(rl,n,r,"TestLoadImage: error",!1,t),r.onabort=ia(rl,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ia(rl,n,r,"TestLoadImage: timeout",!1,t),Qo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function rl(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function il(e){this.l=e.fc||null,this.j=e.ob||!1}function sl(e,t){sc.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ol,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sa(il,Gc),il.prototype.g=function(){return new sl(this.l,this.j)},il.prototype.i=function(e){return function(){return e}}({}),sa(sl,sc);var ol=0;function al(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function cl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ul(e)}function ul(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Ko=sl.prototype,Ko.open=function(e,t){if(this.readyState!=ol)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ul(this)},Ko.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Qo).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Ko.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cl(this)),this.readyState=ol},Ko.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ul(this)),this.g&&(this.readyState=3,ul(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof Qo.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;al(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Ko.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cl(this):ul(this),3==this.readyState&&al(this)}},Ko.Za=function(e){this.g&&(this.response=this.responseText=e,cl(this))},Ko.Ya=function(e){this.g&&(this.response=e,cl(this))},Ko.ka=function(){this.g&&cl(this)},Ko.setRequestHeader=function(e,t){this.v.append(e,t)},Ko.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ko.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(sl.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ll=Qo.JSON.parse;function hl(e){sc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dl,this.L=this.M=!1}sa(hl,sc);var dl="",fl=/^https?$/i,pl=["POST","PUT"];function gl(e){return Ea&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function ml(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yl(e),wl(e)}function yl(e){e.F||(e.F=!0,oc(e,"complete"),oc(e,"error"))}function vl(e){if(e.h&&"undefined"!=typeof Wo&&(!e.C[1]||4!=El(e)||2!=e.da()))if(e.v&&4==El(e))Ic(e.La,0,e);else if(oc(e,"readystatechange"),4==El(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(_u)[1]||null;!i&&Qo.self&&Qo.self.location&&(i=Qo.self.location.protocol.slice(0,-1)),r=!fl.test(i?i.toLowerCase():"")}n=r}if(n)oc(e,"complete"),oc(e,"success");else{e.m=6;try{var s=2<El(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",yl(e)}}finally{wl(e)}}}function wl(e,t){if(e.g){_l(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||oc(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function _l(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Qo.clearTimeout(e.A),e.A=null)}function El(e){return e.g?e.g.readyState:0}function bl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case dl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ph){return null}}function Il(e){const t={};e=(e.g&&2<=El(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(fa(e[r]))continue;var n=pc(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Va(t,(function(e){return e.join(", ")}))}function Tl(e){let t="";return Fa(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Sl(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Tl(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):ku(e,t,n))}function Cl(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kl(e){this.Ga=0,this.j=[],this.l=new Rc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cl("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cl("baseRetryDelayMs",5e3,e),this.hb=Cl("retryDelaySeedMs",1e4,e),this.eb=Cl("forwardChannelMaxRetries",2,e),this.xa=Cl("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ku(e&&e.concurrentRequestLimit),this.Ja=new el,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Al(e){if(Rl(e),3==e.H){var t=e.W++,n=Iu(e.I);if(ku(n,"SID",e.K),ku(n,"RID",t),ku(n,"TYPE","terminate"),Ll(e,n),t=new tu(e,e.l,t),t.L=2,t.v=Au(Iu(n)),n=!1,Qo.navigator&&Qo.navigator.sendBeacon)try{n=Qo.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&Qo.Image&&((new Image).src=t.v,n=!0),n||(t.g=Hl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),hu(t)}$l(e)}function Nl(e){e.g&&(Fl(e),e.g.cancel(),e.g=null)}function Rl(e){Nl(e),e.u&&(Qo.clearTimeout(e.u),e.u=null),jl(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Qo.clearTimeout(e.m),e.m=null)}function Dl(e){if(!Gu(e.i)&&!e.m){e.m=!0;var t=e.Na;mc||wc(),yc||(mc(),yc=!0),vc.add(t,e),e.C=0}}function Ol(e,t){return!(Wu(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=$c(ra(e.Na,e,t),zl(e,e.C)),e.C++,!0))}function Pl(e,t){var n;n=t?t.m:e.W++;const r=Iu(e.I);ku(r,"SID",e.K),ku(r,"RID",n),ku(r,"AID",e.V),Ll(e,r),e.o&&e.s&&Sl(r,e.o,e.s),n=new tu(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ml(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ju(e.i,n),ou(n,r,t)}function Ll(e,t){e.na&&Fa(e.na,(function(e,n){ku(t,n,e)})),e.h&&wu({},(function(e,n){ku(t,n,e)}))}function Ml(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ra(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{tl(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function xl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;mc||wc(),yc||(mc(),yc=!0),vc.add(t,e),e.A=0}}function Ul(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=$c(ra(e.Ma,e),zl(e,e.A)),e.A++,!0)}function Fl(e){null!=e.B&&(Qo.clearTimeout(e.B),e.B=null)}function Vl(e){e.g=new tu(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Iu(e.wa);ku(t,"RID","rpc"),ku(t,"SID",e.K),ku(t,"AID",e.V),ku(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ku(t,"TO",e.qa),ku(t,"TYPE","xmlhttp"),Ll(e,t),e.o&&e.s&&Sl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Au(Iu(t)),n.s=null,n.S=!0,au(n,e)}function jl(e){null!=e.v&&(Qo.clearTimeout(e.v),e.v=null)}function Bl(e,t){var n=null;if(e.g==t){jl(e),Fl(e),e.g=null;var r=2}else{if(!Qu(e.i,t))return;n=t.F,Xu(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Fc(),oc(r,new qc(r,n)),Dl(e)}else xl(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Ol(e,t)||2==r&&Ul(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ql(e,5);break;case 4:ql(e,10);break;case 3:ql(e,6);break;default:ql(e,2)}}function zl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ql(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=ra(e.pb,e);n||(n=new bu("//www.google.com/images/cleardot.gif"),Qo.location&&"http"==Qo.location.protocol||Tu(n,"https"),Au(n)),nl(n.toString(),r)}else zc(2);e.H=0,e.h&&e.h.za(t),$l(e),Rl(e)}function $l(e){if(e.H=0,e.ma=[],e.h){const t=Yu(e.i);0==t.length&&0==e.j.length||(la(e.ma,t),la(e.ma,e.j),e.i.i.length=0,ua(e.j),e.j.length=0),e.h.ya()}}function Kl(e,t,n){var r=n instanceof bu?Iu(n):new bu(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Su(r,r.m);else{var i=Qo.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new bu(null);r&&Tu(s,r),t&&(s.g=t),i&&Su(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ku(r,n,t),ku(r,"VER",e.ra),Ll(e,r),r}function Hl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new hl(new il({ob:!0})):new hl(e.va),t.Oa(e.J),t}function Gl(){}function Wl(){if(Ea&&!(10<=Number(Da)))throw Error("Environmental error: no available transport.")}function Ql(e,t){sc.call(this),this.g=new kl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!fa(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!fa(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yl(this)}function Jl(e){Yc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Xl(){Zc.call(this),this.status=1}function Yl(e){this.g=e}function Zl(){this.blockSize=-1}function eh(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function th(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nh(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}Ko=hl.prototype,Ko.Oa=function(e){this.M=e},Ko.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jc.g(),this.C=this.u?Wc(this.u):Wc(Jc),this.g.onreadystatechange=ra(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void ml(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Qo.FormData&&e instanceof Qo.FormData,!(0<=ca(pl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_l(this),0<this.B&&((this.L=gl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ra(this.ua,this)):this.A=Ic(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ml(this,s)}},Ko.ua=function(){"undefined"!=typeof Wo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,oc(this,"timeout"),this.abort(8))},Ko.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,oc(this,"complete"),oc(this,"abort"),wl(this))},Ko.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wl(this,!0)),hl.$.N.call(this)},Ko.La=function(){this.s||(this.G||this.v||this.l?vl(this):this.kb())},Ko.kb=function(){vl(this)},Ko.isActive=function(){return!!this.g},Ko.da=function(){try{return 2<El(this)?this.g.status:-1}catch(e){return-1}},Ko.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ko.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ll(t)}},Ko.Ia=function(){return this.m},Ko.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Ko=kl.prototype,Ko.ra=8,Ko.H=1,Ko.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new tu(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ja(s),za(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ml(this,i,t),n=Iu(this.I),ku(n,"RID",e),ku(n,"CVER",22),this.F&&ku(n,"X-HTTP-Session-Id",this.F),Ll(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Tl(s)))+"&"+t:this.o&&Sl(n,this.o,s)),Ju(this.i,i),this.bb&&ku(n,"TYPE","init"),this.P?(ku(n,"$req",t),ku(n,"SID","null"),i.aa=!0,ou(i,n,null)):ou(i,n,t),this.H=2}}else 3==this.H&&(e?Pl(this,e):0==this.j.length||Gu(this.i)||Pl(this))},Ko.Ma=function(){if(this.u=null,Vl(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=$c(ra(this.jb,this),e)}},Ko.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zc(10),Nl(this),Vl(this))},Ko.ib=function(){null!=this.v&&(this.v=null,Nl(this),Ul(this),zc(19))},Ko.pb=function(e){e?(this.l.info("Successfully pinged google.com"),zc(2)):(this.l.info("Failed to ping google.com"),zc(1))},Ko.isActive=function(){return!!this.h&&this.h.isActive(this)},Ko=Gl.prototype,Ko.Ba=function(){},Ko.Aa=function(){},Ko.za=function(){},Ko.ya=function(){},Ko.isActive=function(){return!0},Ko.Va=function(){},Wl.prototype.g=function(e,t){return new Ql(e,t)},sa(Ql,sc),Ql.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;zc(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Kl(e,null,e.Y),Dl(e)},Ql.prototype.close=function(){Al(this.g)},Ql.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=cc(e),e=n);t.j.push(new $u(t.fb++,e)),3==t.H&&Dl(t)},Ql.prototype.N=function(){this.g.h=null,delete this.j,Al(this.g),delete this.g,Ql.$.N.call(this)},sa(Jl,Yc),sa(Xl,Zc),sa(Yl,Gl),Yl.prototype.Ba=function(){oc(this.g,"a")},Yl.prototype.Aa=function(e){oc(this.g,new Jl(e))},Yl.prototype.za=function(e){oc(this.g,new Xl)},Yl.prototype.ya=function(){oc(this.g,"b")},sa(eh,Zl),eh.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},eh.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)th(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){th(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){th(this,r),i=0;break}}this.h=i,this.i+=t},eh.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var rh={};function ih(e){return-128<=e&&128>e?ya(e,(function(e){return new nh([0|e],0>e?-1:0)})):new nh([0|e],0>e?-1:0)}function sh(e){if(isNaN(e)||!isFinite(e))return ch;if(0>e)return fh(sh(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ah;return new nh(t,0)}function oh(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return fh(oh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sh(Math.pow(t,8)),r=ch,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=sh(Math.pow(t,s)),r=r.R(s).add(sh(o))):(r=r.R(n),r=r.add(sh(o)))}return r}var ah=4294967296,ch=ih(0),uh=ih(1),lh=ih(16777216);function hh(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function dh(e){return-1==e.h}function fh(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nh(n,~e.h).add(uh)}function ph(e,t){return e.add(fh(t))}function gh(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function mh(e,t){this.g=e,this.h=t}function yh(e,t){if(hh(t))throw Error("division by zero");if(hh(e))return new mh(ch,ch);if(dh(e))return t=yh(fh(e),t),new mh(fh(t.g),fh(t.h));if(dh(t))return t=yh(e,fh(t)),new mh(fh(t.g),t.h);if(30<e.g.length){if(dh(e)||dh(t))throw Error("slowDivide_ only works with positive integers.");for(var n=uh,r=t;0>=r.X(e);)n=vh(n),r=vh(r);var i=wh(n,1),s=wh(r,1);for(r=wh(r,2),n=wh(n,2);!hh(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=wh(r,1),n=wh(n,1)}return t=ph(e,i.R(t)),new mh(i,t)}for(i=ch;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=sh(n),o=s.R(t);dh(o)||0<o.X(e);)n-=r,s=sh(n),o=s.R(t);hh(s)&&(s=uh),i=i.add(s),e=ph(e,o)}return new mh(i,e)}function vh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nh(n,e.h)}function wh(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nh(i,e.h)}Ko=nh.prototype,Ko.ea=function(){if(dh(this))return-fh(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ah+r)*t,t*=ah}return e},Ko.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(hh(this))return"0";if(dh(this))return"-"+fh(this).toString(e);for(var t=sh(Math.pow(e,6)),n=this,r="";;){var i=yh(n,t).g;n=ph(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,hh(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Ko.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Ko.X=function(e){return e=ph(this,e),dh(e)?-1:hh(e)?0:1},Ko.abs=function(){return dh(this)?fh(this):this},Ko.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new nh(n,-2147483648&n[n.length-1]?-1:0)},Ko.R=function(e){if(hh(this)||hh(e))return ch;if(dh(this))return dh(e)?fh(this).R(fh(e)):fh(fh(this).R(e));if(dh(e))return fh(this.R(fh(e)));if(0>this.X(lh)&&0>e.X(lh))return sh(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,gh(n,2*r+2*i),n[2*r+2*i+1]+=s*c,gh(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gh(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gh(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nh(n,0)},Ko.gb=function(e){return yh(this,e).h},Ko.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nh(n,this.h&e.h)},Ko.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nh(n,this.h|e.h)},Ko.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nh(n,this.h^e.h)},Wl.prototype.createWebChannel=Wl.prototype.g,Ql.prototype.send=Ql.prototype.u,Ql.prototype.open=Ql.prototype.m,Ql.prototype.close=Ql.prototype.close,Kc.NO_ERROR=0,Kc.TIMEOUT=8,Kc.HTTP_ERROR=6,Hc.COMPLETE="complete",Qc.EventType=Xc,Xc.OPEN="a",Xc.CLOSE="b",Xc.ERROR="c",Xc.MESSAGE="d",sc.prototype.listen=sc.prototype.O,hl.prototype.listenOnce=hl.prototype.P,hl.prototype.getLastError=hl.prototype.Sa,hl.prototype.getLastErrorCode=hl.prototype.Ia,hl.prototype.getStatus=hl.prototype.da,hl.prototype.getResponseJson=hl.prototype.Wa,hl.prototype.getResponseText=hl.prototype.ja,hl.prototype.send=hl.prototype.ha,hl.prototype.setWithCredentials=hl.prototype.Oa,eh.prototype.digest=eh.prototype.l,eh.prototype.reset=eh.prototype.reset,eh.prototype.update=eh.prototype.j,nh.prototype.add=nh.prototype.add,nh.prototype.multiply=nh.prototype.R,nh.prototype.modulo=nh.prototype.gb,nh.prototype.compare=nh.prototype.X,nh.prototype.toNumber=nh.prototype.ea,nh.prototype.toString=nh.prototype.toString,nh.prototype.getBits=nh.prototype.D,nh.fromNumber=sh,nh.fromString=oh;var _h=Go.createWebChannelTransport=function(){return new Wl},Eh=Go.getStatEventTarget=function(){return Fc()},bh=Go.ErrorCode=Kc,Ih=Go.EventType=Hc,Th=Go.Event=xc,Sh=Go.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ch=Go.FetchXmlHttpFactory=il,kh=Go.WebChannel=Qc,Ah=Go.XhrIo=hl,Nh=Go.Md5=eh,Rh=Go.Integer=nh;const Dh="@firebase/firestore";
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
 */class Oh{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oh.UNAUTHENTICATED=new Oh(null),Oh.GOOGLE_CREDENTIALS=new Oh("google-credentials-uid"),Oh.FIRST_PARTY=new Oh("first-party-uid"),Oh.MOCK_USER=new Oh("mock-user");
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
let Ph="10.1.0";
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
 */const Lh=new Pe("@firebase/firestore");function Mh(){return Lh.logLevel}function xh(e,...t){if(Lh.logLevel<=Ae.DEBUG){const n=t.map(Vh);Lh.debug(`Firestore (${Ph}): ${e}`,...n)}}function Uh(e,...t){if(Lh.logLevel<=Ae.ERROR){const n=t.map(Vh);Lh.error(`Firestore (${Ph}): ${e}`,...n)}}function Fh(e,...t){if(Lh.logLevel<=Ae.WARN){const n=t.map(Vh);Lh.warn(`Firestore (${Ph}): ${e}`,...n)}}function Vh(e){if("string"==typeof e)return e;try{
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
 */function jh(e="Unexpected state"){const t=`FIRESTORE (${Ph}) INTERNAL ASSERTION FAILED: `+e;throw Uh(t),new Error(t)}function Bh(e,t){e||jh()}function zh(e,t){return e}
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
 */const qh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $h extends oe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Kh{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oh.UNAUTHENTICATED)))}shutdown(){}}class Wh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qh{constructor(e){this.t=e,this.currentUser=Oh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Kh;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kh,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{xh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(xh("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kh)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(xh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Bh("string"==typeof t.accessToken),new Hh(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Bh(null===e||"string"==typeof e),new Oh(e)}}class Jh{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Oh.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xh{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Jh(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Oh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&xh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,xh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{xh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):xh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Bh("string"==typeof e.token),this.R=e.token,new Yh(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ed(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class td{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ed(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function nd(e,t){return e<t?-1:e>t?1:0}function rd(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class id{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $h(qh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $h(qh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $h(qh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $h(qh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return id.fromMillis(Date.now())}static fromDate(e){return id.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new id(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nd(this.nanoseconds,e.nanoseconds):nd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class sd{constructor(e){this.timestamp=e}static fromTimestamp(e){return new sd(e)}static min(){return new sd(new id(0,0))}static max(){return new sd(new id(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class od{constructor(e,t,n){void 0===t?t=0:t>e.length&&jh(),void 0===n?n=e.length-t:n>e.length-t&&jh(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===od.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof od?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ad extends od{construct(e,t,n){return new ad(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $h(qh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ad(t)}static emptyPath(){return new ad([])}}const cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ud extends od{construct(e,t,n){return new ud(e,t,n)}static isValidIdentifier(e){return cd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ud.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ud(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new $h(qh.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new $h(qh.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new $h(qh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new $h(qh.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ud(t)}static emptyPath(){return new ud([])}}
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
 */class ld{constructor(e){this.path=e}static fromPath(e){return new ld(ad.fromString(e))}static fromName(e){return new ld(ad.fromString(e).popFirst(5))}static empty(){return new ld(ad.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ad.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ad.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ld(new ad(e.slice()))}}
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
 */class hd{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}hd.UNKNOWN_ID=-1;function dd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=sd.fromTimestamp(1e9===r?new id(n+1,0):new id(n,r));return new pd(i,ld.empty(),t)}function fd(e){return new pd(e.readTime,e.key,-1)}class pd{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new pd(sd.min(),ld.empty(),-1)}static max(){return new pd(sd.max(),ld.empty(),-1)}}function gd(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ld.comparator(e.documentKey,t.documentKey),0!==n?n:nd(e.largestBatchId,t.largestBatchId))}
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
 */const md="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function vd(e){if(e.code!==qh.FAILED_PRECONDITION||e.message!==md)throw e;xh("LocalStore","Unexpectedly lost primary lease")}
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
 */class wd{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&jh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new wd(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof wd?t:wd.resolve(t)}catch(e){return wd.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):wd.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):wd.reject(t)}static resolve(e){return new wd(((t,n)=>{t(e)}))}static reject(e){return new wd(((t,n)=>{n(e)}))}static waitFor(e){return new wd(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=wd.resolve(!1);for(const n of e)t=t.next((e=>e?wd.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new wd(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new wd(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function _d(e){return"IndexedDbTransactionError"===e.name}
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
class Ed{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function bd(e){return null==e}function Id(e){return 0===e&&1/e==-1/0}function Td(e){return"number"==typeof e&&Number.isInteger(e)&&!Id(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */Ed.ae=-1;const Sd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Cd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kd=Cd;
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
function Ad(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Nd(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Rd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Dd{constructor(e,t){this.comparator=e,this.root=t||Pd.EMPTY}insert(e,t){return new Dd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pd.BLACK,null,null))}remove(e){return new Dd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Od(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Od(this.root,e,this.comparator,!1)}getReverseIterator(){return new Od(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Od(this.root,e,this.comparator,!0)}}class Od{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Pd.RED,this.left=null!=r?r:Pd.EMPTY,this.right=null!=i?i:Pd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Pd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Pd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw jh();if(this.right.isRed())throw jh();const e=this.left.check();if(e!==this.right.check())throw jh();return e+(this.isRed()?0:1)}}Pd.EMPTY=null,Pd.RED=!0,Pd.BLACK=!1,Pd.EMPTY=new class{constructor(){this.size=0}get key(){throw jh()}get value(){throw jh()}get color(){throw jh()}get left(){throw jh()}get right(){throw jh()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Pd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ld{constructor(e){this.comparator=e,this.data=new Dd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Md(this.data.getIterator())}getIteratorFrom(e){return new Md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ld))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ld(this.comparator);return t.data=e,t}}class Md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class xd{constructor(e){this.fields=e,e.sort(ud.comparator)}static empty(){return new xd([])}unionWith(e){let t=new Ld(ud.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xd(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rd(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class Ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Fd{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ud("Invalid base64 string: "+e):e}}(e);return new Fd(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fd(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fd.EMPTY_BYTE_STRING=new Fd("");const Vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jd(e){if(Bh(!!e),"string"==typeof e){let t=0;const n=Vd.exec(e);if(Bh(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Bd(e.seconds),nanos:Bd(e.nanos)}}function Bd(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function zd(e){return"string"==typeof e?Fd.fromBase64String(e):Fd.fromUint8Array(e)}
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
 */function qd(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $d(e){const t=e.mapValue.fields.__previous_value__;return qd(t)?$d(t):t}function Kd(e){const t=jd(e.mapValue.fields.__local_write_time__.timestampValue);return new id(t.seconds,t.nanos)}
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
 */class Hd{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Gd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Gd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Gd&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Wd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qd(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qd(e)?4:uf(e)?9007199254740991:10:jh()}function Jd(e,t){if(e===t)return!0;const n=Qd(e);if(n!==Qd(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Kd(e).isEqual(Kd(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=jd(e.timestampValue),r=jd(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return zd(e.bytesValue).isEqual(zd(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Bd(e.geoPointValue.latitude)===Bd(t.geoPointValue.latitude)&&Bd(e.geoPointValue.longitude)===Bd(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Bd(e.integerValue)===Bd(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Bd(e.doubleValue),r=Bd(t.doubleValue);return n===r?Id(n)===Id(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return rd(e.arrayValue.values||[],t.arrayValue.values||[],Jd);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ad(n)!==Ad(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Jd(n[i],r[i])))return!1;return!0}(e,t);default:return jh()}}function Xd(e,t){return void 0!==(e.values||[]).find((e=>Jd(e,t)))}function Yd(e,t){if(e===t)return 0;const n=Qd(e),r=Qd(t);if(n!==r)return nd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return nd(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Bd(e.integerValue||e.doubleValue),r=Bd(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Zd(e.timestampValue,t.timestampValue);case 4:return Zd(Kd(e),Kd(t));case 5:return nd(e.stringValue,t.stringValue);case 6:return function(e,t){const n=zd(e),r=zd(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=nd(n[i],r[i]);if(0!==e)return e}return nd(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=nd(Bd(e.latitude),Bd(t.latitude));return 0!==n?n:nd(Bd(e.longitude),Bd(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Yd(n[i],r[i]);if(e)return e}return nd(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Wd.mapValue&&t===Wd.mapValue)return 0;if(e===Wd.mapValue)return 1;if(t===Wd.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=nd(r[o],s[o]);if(0!==e)return e;const t=Yd(n[r[o]],i[s[o]]);if(0!==t)return t}return nd(r.length,s.length)}(e.mapValue,t.mapValue);default:throw jh()}}function Zd(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nd(e,t);const n=jd(e),r=jd(t),i=nd(n.seconds,r.seconds);return 0!==i?i:nd(n.nanos,r.nanos)}function ef(e){return tf(e)}function tf(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=jd(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return zd(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ld.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=tf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${tf(e.fields[i])}`;return n+"}"}(e.mapValue):jh()}function nf(e){return!!e&&"integerValue"in e}function rf(e){return!!e&&"arrayValue"in e}function sf(e){return!!e&&"nullValue"in e}function of(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function af(e){return!!e&&"mapValue"in e}function cf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Nd(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=cf(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cf(e.arrayValue.values[n]);return t}return Object.assign({},e)}function uf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class lf{constructor(e){this.value=e}static empty(){return new lf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!af(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cf(t)}setAll(e){let t=ud.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=cf(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());af(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jd(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];af(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Nd(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new lf(cf(this.value))}}function hf(e){const t=[];return Nd(e.fields,((e,n)=>{const r=new ud([e]);if(af(n)){const e=hf(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new xd(t)
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
 */}class df{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new df(e,0,sd.min(),sd.min(),sd.min(),lf.empty(),0)}static newFoundDocument(e,t,n,r){return new df(e,1,t,sd.min(),n,r,0)}static newNoDocument(e,t){return new df(e,2,t,sd.min(),sd.min(),lf.empty(),0)}static newUnknownDocument(e,t){return new df(e,3,t,sd.min(),sd.min(),lf.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(sd.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof df&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new df(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ff{constructor(e,t){this.position=e,this.inclusive=t}}function pf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ld.comparator(ld.fromName(o.referenceValue),n.key):Yd(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function gf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Jd(e.position[n],t.position[n]))return!1;return!0}
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
 */class mf{constructor(e,t="asc"){this.field=e,this.dir=t}}function yf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class vf{}class wf extends vf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new kf(e,t,n):"array-contains"===t?new Df(e,n):"in"===t?new Of(e,n):"not-in"===t?new Pf(e,n):"array-contains-any"===t?new Lf(e,n):new wf(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Af(e,n):new Nf(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Yd(t,this.value)):null!==t&&Qd(this.value)===Qd(t)&&this.matchesComparison(Yd(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return jh()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _f extends vf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new _f(e,t)}matches(e){return Ef(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ef(e){return"and"===e.op}function bf(e){return If(e)&&Ef(e)}function If(e){for(const t of e.filters)if(t instanceof _f)return!1;return!0}function Tf(e){if(e instanceof wf)return e.field.canonicalString()+e.op.toString()+ef(e.value);if(bf(e))return e.filters.map((e=>Tf(e))).join(",");{const t=e.filters.map((e=>Tf(e))).join(",");return`${e.op}(${t})`}}function Sf(e,t){return e instanceof wf?function(e,t){return t instanceof wf&&e.op===t.op&&e.field.isEqual(t.field)&&Jd(e.value,t.value)}(e,t):e instanceof _f?function(e,t){return t instanceof _f&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Sf(n,t.filters[r])),!0)}(e,t):void jh()}function Cf(e){return e instanceof wf?function(e){return`${e.field.canonicalString()} ${e.op} ${ef(e.value)}`}(e):e instanceof _f?function(e){return e.op.toString()+" {"+e.getFilters().map(Cf).join(" ,")+"}"}(e):"Filter"}class kf extends wf{constructor(e,t,n){super(e,t,n),this.key=ld.fromName(n.referenceValue)}matches(e){const t=ld.comparator(e.key,this.key);return this.matchesComparison(t)}}class Af extends wf{constructor(e,t){super(e,"in",t),this.keys=Rf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Nf extends wf{constructor(e,t){super(e,"not-in",t),this.keys=Rf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ld.fromName(e.referenceValue)))}class Df extends wf{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rf(t)&&Xd(t.arrayValue,this.value)}}class Of extends wf{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Xd(this.value.arrayValue,t)}}class Pf extends wf{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Xd(this.value.arrayValue,t)}}class Lf extends wf{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Xd(this.value.arrayValue,e)))}}
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
 */class Mf{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function xf(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Mf(e,t,n,r,i,s,o)}function Uf(e){const t=zh(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Tf(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),bd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ef(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ef(e))).join(",")),t.he=e}return t.he}function Ff(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Sf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!gf(e.startAt,t.startAt)&&gf(e.endAt,t.endAt)}function Vf(e){return ld.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class jf{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Bf(e,t,n,r,i,s,o,a){return new jf(e,t,n,r,i,s,o,a)}function zf(e){return new jf(e)}function qf(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $f(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kf(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Hf(e){return null!==e.collectionGroup}function Gf(e){const t=zh(e);if(null===t.Pe){t.Pe=[];const e=Kf(t),n=$f(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new mf(e)),t.Pe.push(new mf(ud.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new mf(ud.keyField(),e))}}}return t.Pe}function Wf(e){const t=zh(e);if(!t.Ie)if("F"===t.limitType)t.Ie=xf(t.path,t.collectionGroup,Gf(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Gf(t)){const t="desc"===i.dir?"asc":"desc";e.push(new mf(i.field,t))}const n=t.endAt?new ff(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ff(t.startAt.position,t.startAt.inclusive):null;t.Ie=xf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.Ie}function Qf(e,t,n){return new jf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Jf(e,t){return Ff(Wf(e),Wf(t))&&e.limitType===t.limitType}function Xf(e){return`${Uf(Wf(e))}|lt:${e.limitType}`}function Yf(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Cf(e))).join(", ")}]`),bd(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ef(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ef(e))).join(",")),`Target(${t})`}(Wf(e))}; limitType=${e.limitType})`}function Zf(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ld.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Gf(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=pf(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Gf(e),t))&&!(e.endAt&&!function(e,t,n){const r=pf(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Gf(e),t))}(e,t)}function ep(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tp(e){return(t,n)=>{let r=!1;for(const i of Gf(e)){const e=np(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function np(e,t,n){const r=e.field.isKeyField()?ld.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Yd(r,i):jh()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return jh()}}
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
 */class rp{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nd(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Rd(this.inner)}size(){return this.innerSize}}
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
 */const ip=new Dd(ld.comparator);function sp(){return ip}const op=new Dd(ld.comparator);function ap(...e){let t=op;for(const n of e)t=t.insert(n.key,n);return t}function cp(e){let t=op;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function up(){return hp()}function lp(){return hp()}function hp(){return new rp((e=>e.toString()),((e,t)=>e.isEqual(t)))}const dp=new Dd(ld.comparator),fp=new Ld(ld.comparator);function pp(...e){let t=fp;for(const n of e)t=t.add(n);return t}const gp=new Ld(nd);function mp(){return gp}
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
 */function yp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Id(t)?"-0":t}}function vp(e){return{integerValue:""+e}}function wp(e,t){return Td(t)?vp(t):yp(e,t)}
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
 */class _p{constructor(){this._=void 0}}function Ep(e,t,n){return e instanceof Tp?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&qd(t)&&(t=$d(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Sp?Cp(e,t):e instanceof kp?Ap(e,t):function(e,t){const n=Ip(e,t),r=Rp(n)+Rp(e.Te);return nf(n)&&nf(e.Te)?vp(r):yp(e.serializer,r)}(e,t)}function bp(e,t,n){return e instanceof Sp?Cp(e,t):e instanceof kp?Ap(e,t):n}function Ip(e,t){return e instanceof Np?function(e){return nf(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Tp extends _p{}class Sp extends _p{constructor(e){super(),this.elements=e}}function Cp(e,t){const n=Dp(t);for(const r of e.elements)n.some((e=>Jd(e,r)))||n.push(r);return{arrayValue:{values:n}}}class kp extends _p{constructor(e){super(),this.elements=e}}function Ap(e,t){let n=Dp(t);for(const r of e.elements)n=n.filter((e=>!Jd(e,r)));return{arrayValue:{values:n}}}class Np extends _p{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Rp(e){return Bd(e.integerValue||e.doubleValue)}function Dp(e){return rf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Op{constructor(e,t){this.field=e,this.transform=t}}function Pp(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Sp&&t instanceof Sp||e instanceof kp&&t instanceof kp?rd(e.elements,t.elements,Jd):e instanceof Np&&t instanceof Np?Jd(e.Te,t.Te):e instanceof Tp&&t instanceof Tp}(e.transform,t.transform)}class Lp{constructor(e,t){this.version=e,this.transformResults=t}}class Mp{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mp}static exists(e){return new Mp(void 0,e)}static updateTime(e){return new Mp(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Up{}function Fp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Wp(e.key,Mp.none()):new qp(e.key,e.data,Mp.none());{const n=e.data,r=lf.empty();let i=new Ld(ud.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new $p(e.key,r,new xd(i.toArray()),Mp.none())}}function Vp(e,t,n){e instanceof qp?function(e,t,n){const r=e.value.clone(),i=Hp(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof $p?function(e,t,n){if(!xp(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Hp(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Kp(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function jp(e,t,n,r){return e instanceof qp?function(e,t,n,r){if(!xp(e.precondition,t))return n;const i=e.value.clone(),s=Gp(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof $p?function(e,t,n,r){if(!xp(e.precondition,t))return n;const i=Gp(e.fieldTransforms,r,t),s=t.data;return s.setAll(Kp(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return xp(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Bp(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ip(r.transform,e||null);null!=i&&(null===n&&(n=lf.empty()),n.set(r.field,i))}return n||null}function zp(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&rd(e,t,((e,t)=>Pp(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qp extends Up{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $p extends Up{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kp(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Hp(e,t,n){const r=new Map;Bh(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,bp(o,a,n[i]))}return r}function Gp(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ep(e,s,t))}return r}class Wp extends Up{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qp extends Up{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Jp{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Vp(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=jp(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=jp(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=lp();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Fp(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(sd.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pp())}isEqual(e){return this.batchId===e.batchId&&rd(this.mutations,e.mutations,((e,t)=>zp(e,t)))&&rd(this.baseMutations,e.baseMutations,((e,t)=>zp(e,t)))}}class Xp{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Bh(e.mutations.length===n.length);let r=function(){return dp}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Xp(e,t,n,r)}}
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
 */class Yp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Zp{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var eg,tg;function ng(e){switch(e){default:return jh();case qh.CANCELLED:case qh.UNKNOWN:case qh.DEADLINE_EXCEEDED:case qh.RESOURCE_EXHAUSTED:case qh.INTERNAL:case qh.UNAVAILABLE:case qh.UNAUTHENTICATED:return!1;case qh.INVALID_ARGUMENT:case qh.NOT_FOUND:case qh.ALREADY_EXISTS:case qh.PERMISSION_DENIED:case qh.FAILED_PRECONDITION:case qh.ABORTED:case qh.OUT_OF_RANGE:case qh.UNIMPLEMENTED:case qh.DATA_LOSS:return!0}}function rg(e){if(void 0===e)return Uh("GRPC error has no .code"),qh.UNKNOWN;switch(e){case eg.OK:return qh.OK;case eg.CANCELLED:return qh.CANCELLED;case eg.UNKNOWN:return qh.UNKNOWN;case eg.DEADLINE_EXCEEDED:return qh.DEADLINE_EXCEEDED;case eg.RESOURCE_EXHAUSTED:return qh.RESOURCE_EXHAUSTED;case eg.INTERNAL:return qh.INTERNAL;case eg.UNAVAILABLE:return qh.UNAVAILABLE;case eg.UNAUTHENTICATED:return qh.UNAUTHENTICATED;case eg.INVALID_ARGUMENT:return qh.INVALID_ARGUMENT;case eg.NOT_FOUND:return qh.NOT_FOUND;case eg.ALREADY_EXISTS:return qh.ALREADY_EXISTS;case eg.PERMISSION_DENIED:return qh.PERMISSION_DENIED;case eg.FAILED_PRECONDITION:return qh.FAILED_PRECONDITION;case eg.ABORTED:return qh.ABORTED;case eg.OUT_OF_RANGE:return qh.OUT_OF_RANGE;case eg.UNIMPLEMENTED:return qh.UNIMPLEMENTED;case eg.DATA_LOSS:return qh.DATA_LOSS;default:return jh()}}(tg=eg||(eg={}))[tg.OK=0]="OK",tg[tg.CANCELLED=1]="CANCELLED",tg[tg.UNKNOWN=2]="UNKNOWN",tg[tg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tg[tg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tg[tg.NOT_FOUND=5]="NOT_FOUND",tg[tg.ALREADY_EXISTS=6]="ALREADY_EXISTS",tg[tg.PERMISSION_DENIED=7]="PERMISSION_DENIED",tg[tg.UNAUTHENTICATED=16]="UNAUTHENTICATED",tg[tg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tg[tg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tg[tg.ABORTED=10]="ABORTED",tg[tg.OUT_OF_RANGE=11]="OUT_OF_RANGE",tg[tg.UNIMPLEMENTED=12]="UNIMPLEMENTED",tg[tg.INTERNAL=13]="INTERNAL",tg[tg.UNAVAILABLE=14]="UNAVAILABLE",tg[tg.DATA_LOSS=15]="DATA_LOSS";
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
class ig{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sg}static getOrCreateInstance(){return null===sg&&(sg=new ig),sg}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let sg=null;
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
 */function og(){return new TextEncoder}
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
 */const ag=new Rh([4294967295,4294967295],0);function cg(e){const t=og().encode(e),n=new Nh;return n.update(t),new Uint8Array(n.digest())}function ug(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Rh([n,r],0),new Rh([i,s],0)]}class lg{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new hg(`Invalid padding: ${t}`);if(n<0)throw new hg(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new hg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new hg(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Rh.fromNumber(this.de)}Re(e,t,n){let r=e.add(t.multiply(Rh.fromNumber(n)));return 1===r.compare(ag)&&(r=new Rh([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;const t=cg(e),[n,r]=ug(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);if(!this.Ve(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new lg(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.de)return;const t=cg(e),[n,r]=ug(t);for(let i=0;i<this.hashCount;i++){const e=this.Re(n,r,i);this.me(e)}}me(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class hg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class dg{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,fg.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new dg(sd.min(),r,new Dd(nd),sp(),pp())}}class fg{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new fg(n,t,pp(),pp(),pp())}}
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
 */class pg{constructor(e,t,n,r){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=r}}class gg{constructor(e,t){this.targetId=e,this.pe=t}}class mg{constructor(e,t,n=Fd.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class yg{constructor(){this.ye=0,this.we=_g(),this.Se=Fd.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=pp(),t=pp(),n=pp();return this.we.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:jh()}})),new fg(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=_g()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class vg{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=sp(),this.$e=wg(),this.Ue=new Dd(nd)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:jh()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){var t,n;const r=e.targetId,i=e.pe.count,s=this.Xe(r);if(s){const o=s.target;if(Vf(o))if(0===i){const e=new ld(o.path);this.ze(r,e,df.newNoDocument(e,sd.min()))}else Bh(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(e,s);if(0!==i.status){this.Ye(r);const e=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,e)}null===(t=ig.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,r){var i,s,o,a,c,u;const l={localCacheCount:n,existenceFilterCount:r.count},h=r.unchangedNames;return h&&(l.bloomFilter={applied:0===e,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},t&&(l.bloomFilter.mightContain=t)),l}
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
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){const{unchangedNames:n,count:r}=e.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=zd(i).toUint8Array()}catch(e){if(e instanceof Ud)return Fh("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{c=new lg(a,s,o)}catch(e){return Fh(e instanceof hg?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}const u=e=>{const t=this.qe.rt();return c.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===c.de?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const n=this.qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{t(n.path.canonicalString())||(this.ze(e,n,null),r++)})),r}st(e){const t=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&Vf(i.target)){const t=new ld(i.target.path);null!==this.Ke.get(t)||this.ot(r,t)||this.ze(r,t,df.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Me()),n.xe())}}));let n=pp();this.$e.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ke.forEach(((t,n)=>n.setReadTime(e)));const r=new dg(e,t,this.Ue,this.Ke,n);return this.Ke=sp(),this.$e=wg(),this.Ue=new Dd(nd),r}Ge(e,t){if(!this.Je(e))return;const n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new yg,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ld(nd),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||xh("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new yg),this.qe.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function wg(){return new Dd(ld.comparator)}function _g(){return new Dd(ld.comparator)}const Eg=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),bg=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ig=(()=>{const e={and:"AND",or:"OR"};return e})();class Tg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sg(e,t){return e.useProto3Json||bd(t)?t:{value:t}}function Cg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ag(e,t){return Cg(e,t.toTimestamp())}function Ng(e){return Bh(!!e),sd.fromTimestamp(function(e){const t=jd(e);return new id(t.seconds,t.nanos)}(e))}function Rg(e,t){return function(e){return new ad(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Dg(e){const t=ad.fromString(e);return Bh(em(t)),t}function Og(e,t){return Rg(e.databaseId,t.path)}function Pg(e,t){const n=Dg(t);if(n.get(1)!==e.databaseId.projectId)throw new $h(qh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $h(qh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ld(Ug(n))}function Lg(e,t){return Rg(e.databaseId,t)}function Mg(e){const t=Dg(e);return 4===t.length?ad.emptyPath():Ug(t)}function xg(e){return new ad(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ug(e){return Bh(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Fg(e,t,n){return{name:Og(e,t),fields:n.value.mapValue.fields}}function Vg(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:jh()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Bh(void 0===t||"string"==typeof t),Fd.fromBase64String(t||"")):(Bh(void 0===t||t instanceof Uint8Array),Fd.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?qh.UNKNOWN:rg(e.code);return new $h(t,e.message||"")}(o);n=new mg(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pg(e,r.document.name),s=Ng(r.document.updateTime),o=r.document.createTime?Ng(r.document.createTime):sd.min(),a=new lf({mapValue:{fields:r.document.fields}}),c=df.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new pg(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Pg(e,r.document),s=r.readTime?Ng(r.readTime):sd.min(),o=df.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pg([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Pg(e,r.document),s=r.removedTargetIds||[];n=new pg([],s,i,null)}else{if(!("filter"in t))return jh();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Zp(r,i),o=e.targetId;n=new gg(o,s)}}return n}function jg(e,t){let n;if(t instanceof qp)n={update:Fg(e,t.key,t.value)};else if(t instanceof Wp)n={delete:Og(e,t.key)};else if(t instanceof $p)n={update:Fg(e,t.key,t.data),updateMask:Zg(t.fieldMask)};else{if(!(t instanceof Qp))return jh();n={verify:Og(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Tp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Np)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw jh()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ag(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:jh()}(e,t.precondition)),n}function Bg(e,t){return e&&e.length>0?(Bh(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ng(e.updateTime):Ng(t);return n.isEqual(sd.min())&&(n=Ng(t)),new Lp(n,e.transformResults||[])}(e,t)))):[]}function zg(e,t){return{documents:[Lg(e,t.path)]}}function qg(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Lg(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Lg(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Yg(_f.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Jg(e.field),direction:Gg(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Sg(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function $g(e){let t=Mg(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Bh(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Hg(e);return t instanceof _f&&bf(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new mf(Xg(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,bd(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ff(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ff(n,t)}(n.endAt)),Bf(t,i,o,s,a,"F",c,u)}function Kg(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return jh()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Hg(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xg(e.unaryFilter.field);return wf.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Xg(e.unaryFilter.field);return wf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xg(e.unaryFilter.field);return wf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xg(e.unaryFilter.field);return wf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return jh()}}(e):void 0!==e.fieldFilter?function(e){return wf.create(Xg(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return jh()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return _f.create(e.compositeFilter.filters.map((e=>Hg(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return jh()}}(e.compositeFilter.op))}(e):jh()}function Gg(e){return Eg[e]}function Wg(e){return bg[e]}function Qg(e){return Ig[e]}function Jg(e){return{fieldPath:e.canonicalString()}}function Xg(e){return ud.fromServerFormat(e.fieldPath)}function Yg(e){return e instanceof wf?function(e){if("=="===e.op){if(of(e.value))return{unaryFilter:{field:Jg(e.field),op:"IS_NAN"}};if(sf(e.value))return{unaryFilter:{field:Jg(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(of(e.value))return{unaryFilter:{field:Jg(e.field),op:"IS_NOT_NAN"}};if(sf(e.value))return{unaryFilter:{field:Jg(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jg(e.field),op:Wg(e.op),value:e.value}}}(e):e instanceof _f?function(e){const t=e.getFilters().map((e=>Yg(e)));return 1===t.length?t[0]:{compositeFilter:{op:Qg(e.op),filters:t}}}(e):jh()}function Zg(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function em(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class tm{constructor(e,t,n,r,i=sd.min(),s=sd.min(),o=Fd.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new tm(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tm(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tm(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class nm{constructor(e){this.ct=e}}function rm(e){const t=$g({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Qf(t,t.limit,"L"):t}
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
class im{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Bd(e.integerValue));else if("doubleValue"in e){const n=Bd(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Id(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(zd(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?uf(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):jh()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),ld.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}im.bt=new im;
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
class sm{constructor(){this.sn=new om}addToCollectionParentIndex(e,t){return this.sn.add(t),wd.resolve()}getCollectionParents(e,t){return wd.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return wd.resolve()}deleteFieldIndex(e,t){return wd.resolve()}getDocumentsMatchingTarget(e,t){return wd.resolve(null)}getIndexType(e,t){return wd.resolve(0)}getFieldIndexes(e,t){return wd.resolve([])}getNextCollectionGroupToUpdate(e){return wd.resolve(null)}getMinOffset(e,t){return wd.resolve(pd.min())}getMinOffsetFromCollectionGroup(e,t){return wd.resolve(pd.min())}updateCollectionGroup(e,t,n){return wd.resolve()}updateIndexEntries(e,t){return wd.resolve()}}class om{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ld(ad.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ld(ad.comparator)).toArray()}}
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
 */new Uint8Array(0);class am{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new am(e,am.DEFAULT_COLLECTION_PERCENTILE,am.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */am.DEFAULT_COLLECTION_PERCENTILE=10,am.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,am.DEFAULT=new am(41943040,am.DEFAULT_COLLECTION_PERCENTILE,am.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),am.DISABLED=new am(-1,0,0);
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
class cm{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new cm(0)}static On(){return new cm(-1)}}
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
class um{constructor(){this.changes=new rp((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,df.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?wd.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class lm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class hm{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&jp(n.mutation,e,xd.empty(),id.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,pp()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=pp()){const r=up();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ap();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=up();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,pp())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=sp();const s=hp(),o=function(){return hp()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof $p)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),jp(o.mutation,t,o.mutation.getFieldMask(),id.now())):s.set(t.key,xd.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new lm(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=hp();let r=new Dd(((e,t)=>e-t)),i=pp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||xd.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||pp()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=lp();c.forEach((e=>{if(!i.has(e)){const r=Fp(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return wd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ld.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):wd.resolve(up());let o=-1,a=i;return s.next((t=>wd.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?wd.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,pp()))).next((e=>({batchId:o,changes:cp(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ld(t)).next((e=>{let t=ap();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ap();return this.indexManager.getCollectionParents(e,r).next((s=>wd.forEach(s,(s=>{const o=function(e,t){return new jf(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,df.newInvalidDocument(r)))}));let n=ap();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&jp(s.mutation,i,xd.empty(),id.now()),Zf(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class dm{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return wd.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ng(e.createTime)}}(t)),wd.resolve()}getNamedQuery(e,t){return wd.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(e){return{name:e.name,query:rm(e.bundledQuery),readTime:Ng(e.readTime)}}(t)),wd.resolve()}}
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
 */class fm{constructor(){this.overlays=new Dd(ld.comparator),this.cr=new Map}getOverlay(e,t){return wd.resolve(this.overlays.get(t))}getOverlays(e,t){const n=up();return wd.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),wd.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.cr.delete(n)),wd.resolve()}getOverlaysForCollection(e,t,n){const r=up(),i=t.length+1,s=new ld(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return wd.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Dd(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=up(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=up(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return wd.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Yp(t,n));let i=this.cr.get(t);void 0===i&&(i=pp(),this.cr.set(t,i)),this.cr.set(t,i.add(n.key))}}
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
 */class pm{constructor(){this.lr=new Ld(gm.hr),this.Pr=new Ld(gm.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const n=new gm(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Er(new gm(e,t))}dr(e,t){e.forEach((e=>this.removeReference(e,t)))}Ar(e){const t=new ld(new ad([])),n=new gm(t,e),r=new gm(t,e+1),i=[];return this.Pr.forEachInRange([n,r],(e=>{this.Er(e),i.push(e.key)})),i}Rr(){this.lr.forEach((e=>this.Er(e)))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new ld(new ad([])),n=new gm(t,e),r=new gm(t,e+1);let i=pp();return this.Pr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new gm(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class gm{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return ld.comparator(e.key,t.key)||nd(e.mr,t.mr)}static Ir(e,t){return nd(e.mr,t.mr)||ld.comparator(e.key,t.key)}}
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
 */class mm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Ld(gm.hr)}checkEmpty(e){return wd.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Jp(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new gm(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return wd.resolve(s)}lookupMutationBatch(e,t){return wd.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.wr(n),i=r<0?0:r;return wd.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return wd.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return wd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new gm(t,0),r=new gm(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(e=>{const t=this.yr(e.mr);i.push(t)})),wd.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ld(nd);return t.forEach((e=>{const t=new gm(e,0),r=new gm(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,r],(e=>{n=n.add(e.mr)}))})),wd.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ld.isDocumentKey(i)||(i=i.child(""));const s=new gm(new ld(i),0);let o=new Ld(nd);return this.pr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.mr)),!0)}),s),wd.resolve(this.Sr(o))}Sr(e){const t=[];return e.forEach((e=>{const n=this.yr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Bh(0===this.br(t.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return wd.forEach(t.mutations,(r=>{const i=new gm(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.pr=n}))}Cn(e){}containsKey(e,t){const n=new gm(t,0),r=this.pr.firstAfterOrEqual(n);return wd.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,wd.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class ym{constructor(e){this.Dr=e,this.docs=function(){return new Dd(ld.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return wd.resolve(n?n.document.mutableCopy():df.newInvalidDocument(t))}getEntries(e,t){let n=sp();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():df.newInvalidDocument(e))})),wd.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=sp();const s=t.path,o=new ld(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||gd(fd(o),n)<=0||(r.has(o.key)||Zf(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return wd.resolve(i)}getAllFromCollectionGroup(e,t,n,r){jh()}vr(e,t){return wd.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new vm(this)}getSize(e){return wd.resolve(this.size)}}class vm extends um{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(n)})),wd.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}
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
 */class wm{constructor(e){this.persistence=e,this.Cr=new rp((e=>Uf(e)),Ff),this.lastRemoteSnapshotVersion=sd.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new pm,this.targetCount=0,this.Or=cm.xn()}forEachTarget(e,t){return this.Cr.forEach(((e,n)=>t(n))),wd.resolve()}getLastRemoteSnapshotVersion(e){return wd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return wd.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),wd.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),wd.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new cm(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,wd.resolve()}updateTargetData(e,t){return this.Ln(t),wd.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,wd.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),wd.waitFor(i).next((()=>r))}getTargetCount(e){return wd.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cr.get(t)||null;return wd.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),wd.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),wd.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),wd.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mr.Vr(t);return wd.resolve(n)}containsKey(e,t){return wd.resolve(this.Mr.containsKey(t))}}
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
 */class _m{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Ed(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new wm(this),this.indexManager=new sm,this.remoteDocumentCache=function(e){return new ym(e)}((e=>this.referenceDelegate.qr(e))),this.serializer=new nm(t),this.Qr=new dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new mm(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){xh("MemoryPersistence","Starting transaction:",e);const r=new Em(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((e=>this.referenceDelegate.$r(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ur(e,t){return wd.or(Object.values(this.Nr).map((n=>()=>n.containsKey(e,t))))}}class Em extends yd{constructor(e){super(),this.currentSequenceNumber=e}}class bm{constructor(e){this.persistence=e,this.Wr=new pm,this.Gr=null}static zr(e){return new bm(e)}get jr(){if(this.Gr)return this.Gr;throw jh()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),wd.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),wd.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),wd.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach((e=>this.jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wd.forEach(this.jr,(n=>{const r=ld.fromPath(n);return this.Hr(e,r).next((e=>{e||t.removeEntry(r,sd.min())}))})).next((()=>(this.Gr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hr(e,t).next((e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())}))}qr(e){return 0}Hr(e,t){return wd.or([()=>wd.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}
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
class Im{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=r}static qi(e,t){let n=pp(),r=pp();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Im(e,t.fromCache,n,r)}}
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
 */class Tm{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.$i(e,t).next((i=>i||this.Ui(e,t,r,n))).next((n=>n||this.Wi(e,t)))}$i(e,t){if(qf(t))return wd.resolve(null);let n=Wf(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Qf(t,null,"F"),n=Wf(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=pp(...r);return this.Ki.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Gi(t,r);return this.zi(t,s,i,n.readTime)?this.$i(e,Qf(t,null,"F")):this.ji(e,s,t,n)}))))})))))}Ui(e,t,n,r){return qf(t)||r.isEqual(sd.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next((i=>{const s=this.Gi(t,i);return this.zi(t,s,n,r)?this.Wi(e,t):(Mh()<=Ae.DEBUG&&xh("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yf(t)),this.ji(e,s,t,dd(r,-1)))}))}Gi(e,t){let n=new Ld(tp(e));return t.forEach(((t,r)=>{Zf(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,t){return Mh()<=Ae.DEBUG&&xh("QueryEngine","Using full collection scan to execute query:",Yf(t)),this.Ki.getDocumentsMatchingQuery(e,t,pd.min())}ji(e,t,n,r){return this.Ki.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class Sm{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Dd(nd),this.Yi=new rp((e=>Uf(e)),Ff),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hm(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Cm(e,t,n,r){return new Sm(e,t,n,r)}async function km(e,t){const n=zh(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.es(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=pp();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ts:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Am(e,t){const n=zh(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=wd.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Bh(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=pp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Nm(e){const t=zh(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.kr.getLastRemoteSnapshotVersion(e)))}function Rm(e,t){const n=zh(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Fd.EMPTY_BYTE_STRING,sd.min()).withLastLimboFreeSnapshotVersion(sd.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(e,u))}));let a=sp(),c=pp();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Dm(e,s,t.documentUpdates).next((e=>{a=e.ns,c=e.rs}))),!r.isEqual(sd.min())){const t=n.kr.getLastRemoteSnapshotVersion(e).next((t=>n.kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return wd.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Dm(e,t,n){let r=pp(),i=pp();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=sp();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(sd.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):xh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function Om(e,t){const n=zh(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Pm(e,t){const n=zh(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.kr.getTargetData(e,t).next((i=>i?(r=i,wd.resolve(r)):n.kr.allocateTargetId(e).next((i=>(r=new tm(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Lm(e,t,n){const r=zh(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!_d(e))throw e;xh("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Mm(e,t,n){const r=zh(e);let i=sd.min(),s=pp();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=zh(e),i=r.Yi.get(n);return void 0!==i?wd.resolve(r.Ji.get(i)):r.kr.getTargetData(t,n)}(r,e,Wf(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:sd.min(),n?s:pp()))).next((e=>(xm(r,ep(t),e),{documents:e,ss:s})))))}function xm(e,t,n){let r=e.Zi.get(t)||sd.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Zi.set(t,r)}class Um{constructor(){this.activeTargetIds=mp()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fm{constructor(){this.Hs=new Um,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Um,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Vm{Ys(e){}shutdown(){}}
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
 */class jm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){xh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){xh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Bm=null;function zm(){return null===Bm?Bm=function(){return 268435456+Math.round(2147483648*Math.random())}():Bm++,"0x"+Bm.toString(16)
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
 */}const qm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class $m{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}
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
 */const Km="WebChannelConnection";class Hm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(e,t,n,r,i){const s=zm(),o=this.mo(e,t);xh("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(e,o,a,n).then((t=>(xh("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Fh("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}yo(e,t,n,r,i,s){return this.Vo(e,t,n,r,i)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ph}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}mo(e,t){const n=qm[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,r){const i=zm();return new Promise(((s,o)=>{const a=new Ah;a.setWithCredentials(!0),a.listenOnce(Ih.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bh.NO_ERROR:const t=a.getResponseJson();xh(Km,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case bh.TIMEOUT:xh(Km,`RPC '${e}' ${i} timed out`),o(new $h(qh.DEADLINE_EXCEEDED,"Request time out"));break;case bh.HTTP_ERROR:const n=a.getStatus();if(xh(Km,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(qh).indexOf(t)>=0?t:qh.UNKNOWN}(t.status);o(new $h(e,t.message))}else o(new $h(qh.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $h(qh.UNAVAILABLE,"Connection failed."));break;default:jh()}}finally{xh(Km,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);xh(Km,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=zm(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_h(),o=Eh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Ch({})),this.fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");xh(Km,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new $m({so:t=>{d?xh(Km,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(xh(Km,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),xh(Km,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,kh.EventType.OPEN,(()=>{d||xh(Km,`RPC '${e}' stream ${r} transport opened.`)})),p(l,kh.EventType.CLOSE,(()=>{d||(d=!0,xh(Km,`RPC '${e}' stream ${r} transport closed`),f.Po())})),p(l,kh.EventType.ERROR,(t=>{d||(d=!0,Fh(Km,`RPC '${e}' stream ${r} transport errored:`,t),f.Po(new $h(qh.UNAVAILABLE,"The operation could not be completed")))})),p(l,kh.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Bh(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){xh(Km,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=eg[e];if(void 0!==t)return rg(t)}(t),i=o.message;void 0===n&&(n=qh.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Po(new $h(n,i)),l.close()}else xh(Km,`RPC '${e}' stream ${r} received:`,i),f.Io(i)}})),p(o,Th.STAT_EVENT,(t=>{t.stat===Sh.PROXY?xh(Km,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Sh.NOPROXY&&xh(Km,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
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
 */function Gm(){return"undefined"!=typeof document?document:null}
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
 */function Wm(e){return new Tg(e,!0)}
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
 */class Qm{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-n);r>0&&xh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),e()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
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
 */class Jm{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Qm(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===qh.RESOURCE_EXHAUSTED?(Uh(t.toString()),Uh("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===qh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.ko===t&&this.e_(e,n)}),(t=>{e((()=>{const e=new $h(qh.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)}))}))}e_(e,t){const n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((e=>{n((()=>this.t_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(e){return xh("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.ko===e?t():(xh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xm extends Jm{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=Vg(this.serializer,e),n=function(e){if(!("targetChange"in e))return sd.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?sd.min():t.readTime?Ng(t.readTime):sd.min()}(e);return this.listener.r_(t,n)}i_(e){const t={};t.database=xg(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Vf(r)?{documents:zg(e,r)}:{query:qg(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=kg(e,t.resumeToken);const r=Sg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(sd.min())>0){n.readTime=Cg(e,t.snapshotVersion.toTimestamp());const r=Sg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Kg(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){const t={};t.database=xg(this.serializer),t.removeTarget=e,this.Ho(t)}}class Ym extends Jm{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Bh(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=Bg(e.writeResults,e.commitTime),n=Ng(e.commitTime);return this.listener.u_(n,t)}return Bh(!e.writeResults||0===e.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=xg(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>jg(this.serializer,e)))};this.Ho(t)}}
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
 */class Zm extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new $h(qh.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $h(qh.UNKNOWN,e.toString())}))}yo(e,t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $h(qh.UNKNOWN,e.toString())}))}terminate(){this.h_=!0}}class ey{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Uh(t),this.d_=!1):xh("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
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
 */class ty{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((e=>{n.enqueueAndForget((async()=>{ly(this)&&(xh("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=zh(e);t.y_.add(4),await ry(t),t.b_.set("Unknown"),t.y_.delete(4),await ny(t)}(this))}))})),this.b_=new ey(n,r)}}async function ny(e){if(ly(e))for(const t of e.w_)await t(!0)}async function ry(e){for(const t of e.w_)await t(!1)}function iy(e,t){const n=zh(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),uy(n)?cy(n):Ay(n).Uo()&&oy(n,t))}function sy(e,t){const n=zh(e),r=Ay(n);n.p_.delete(t),r.Uo()&&ay(n,t),0===n.p_.size&&(r.Uo()?r.zo():ly(n)&&n.b_.set("Unknown"))}function oy(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(sd.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ay(e).i_(t)}function ay(e,t){e.D_.Be(t),Ay(e).s_(t)}function cy(e){e.D_=new vg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Ay(e).start(),e.b_.A_()}function uy(e){return ly(e)&&!Ay(e).$o()&&e.p_.size>0}function ly(e){return 0===zh(e).y_.size}function hy(e){e.D_=void 0}async function dy(e){e.p_.forEach(((t,n)=>{oy(e,t)}))}async function fy(e,t){hy(e),uy(e)?(e.b_.m_(t),cy(e)):e.b_.set("Unknown")}async function py(e,t,n){if(e.b_.set("Online"),t instanceof mg&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.p_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.p_.delete(r),e.D_.removeTarget(r))}(e,t)}catch(n){xh("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await gy(e,n)}else if(t instanceof pg?e.D_.We(t):t instanceof gg?e.D_.Ze(t):e.D_.je(t),!n.isEqual(sd.min()))try{const t=await Nm(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.D_.st(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.p_.get(r);i&&e.p_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.p_.get(t);if(!r)return;e.p_.set(t,r.withResumeToken(Fd.EMPTY_BYTE_STRING,r.snapshotVersion)),ay(e,t);const i=new tm(r.target,t,n,r.sequenceNumber);oy(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){xh("RemoteStore","Failed to raise snapshot:",t),await gy(e,t)}}async function gy(e,t,n){if(!_d(t))throw t;e.y_.add(1),await ry(e),e.b_.set("Offline"),n||(n=()=>Nm(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{xh("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await ny(e)}))}function my(e,t){return t().catch((n=>gy(e,n,t)))}async function yy(e){const t=zh(e),n=Ny(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;vy(t);)try{const e=await Om(t.localStore,r);if(null===e){0===t.g_.length&&n.zo();break}r=e.batchId,wy(t,e)}catch(e){await gy(t,e)}_y(t)&&Ey(t)}function vy(e){return ly(e)&&e.g_.length<10}function wy(e,t){e.g_.push(t);const n=Ny(e);n.Uo()&&n.__&&n.a_(t.mutations)}function _y(e){return ly(e)&&!Ny(e).$o()&&e.g_.length>0}function Ey(e){Ny(e).start()}async function by(e){Ny(e).l_()}async function Iy(e){const t=Ny(e);for(const n of e.g_)t.a_(n.mutations)}async function Ty(e,t,n){const r=e.g_.shift(),i=Xp.from(r,t,n);await my(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await yy(e)}async function Sy(e,t){t&&Ny(e).__&&await async function(e,t){if(function(e){return ng(e)&&e!==qh.ABORTED}(t.code)){const n=e.g_.shift();Ny(e).Go(),await my(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await yy(e)}}(e,t),_y(e)&&Ey(e)}async function Cy(e,t){const n=zh(e);n.asyncQueue.verifyOperationInProgress(),xh("RemoteStore","RemoteStore received new credentials");const r=ly(n);n.y_.add(3),await ry(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await ny(n)}async function ky(e,t){const n=zh(e);t?(n.y_.delete(2),await ny(n)):t||(n.y_.add(2),await ry(n),n.b_.set("Unknown"))}function Ay(e){return e.v_||(e.v_=function(e,t,n){const r=zh(e);return r.P_(),new Xm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{_o:dy.bind(null,e),uo:fy.bind(null,e),r_:py.bind(null,e)}),e.w_.push((async t=>{t?(e.v_.Go(),uy(e)?cy(e):e.b_.set("Unknown")):(await e.v_.stop(),hy(e))}))),e.v_}function Ny(e){return e.C_||(e.C_=function(e,t,n){const r=zh(e);return r.P_(),new Ym(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{_o:by.bind(null,e),uo:Sy.bind(null,e),c_:Iy.bind(null,e),u_:Ty.bind(null,e)}),e.w_.push((async t=>{t?(e.C_.Go(),await yy(e)):(await e.C_.stop(),e.g_.length>0&&(xh("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_
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
 */}class Ry{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Kh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ry(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $h(qh.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dy(e,t){if(Uh("AsyncQueue",`${t}: ${e}`),_d(e))return new $h(qh.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Oy{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ld.comparator(t.key,n.key):(e,t)=>ld.comparator(e.key,t.key),this.keyedMap=ap(),this.sortedSet=new Dd(this.comparator)}static emptySet(e){return new Oy(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Oy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Py{constructor(){this.F_=new Dd(ld.comparator)}track(e){const t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):jh():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ly{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ly(e,t,Oy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class My{constructor(){this.x_=void 0,this.listeners=[]}}class xy{constructor(){this.queries=new rp((e=>Xf(e)),Jf),this.onlineState="Unknown",this.O_=new Set}}async function Uy(e,t){const n=zh(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new My),i)try{s.x_=await n.onListen(r)}catch(e){const n=Dy(e,`Initialization of query '${Yf(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&By(n)}async function Fy(e,t){const n=zh(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Vy(e,t){const n=zh(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.B_(i)&&(r=!0);t.x_=i}}r&&By(n)}function jy(e,t,n){const r=zh(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function By(e){e.O_.forEach((e=>{e.next()}))}class zy{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ly(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.W_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=Ly.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}
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
class qy{constructor(e){this.key=e}}class $y{constructor(e){this.key=e}}class Ky{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=pp(),this.mutatedKeys=pp(),this.na=tp(e),this.ra=new Oy(this.na)}get ia(){return this.X_}sa(e,t){const n=t?t.oa:new Py,r=t?t.ra:this.ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Zf(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this._a(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.na(l,a)>0||c&&this.na(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return jh()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.na(e.doc,t.doc))),this.aa(n);const s=t?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new Ly(this.query,e.ra,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Py,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach((e=>this.X_=this.X_.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.X_=this.X_.delete(e))),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=pp(),this.ra.forEach((e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))}));const t=[];return e.forEach((e=>{this.ta.has(e)||t.push(new $y(e))})),this.ta.forEach((n=>{e.has(n)||t.push(new qy(n))})),t}ha(e){this.X_=e.ss,this.ta=pp();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Ly.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Hy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gy{constructor(e){this.key=e,this.Ia=!1}}class Wy{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new rp((e=>Xf(e)),Jf),this.da=new Map,this.Aa=new Set,this.Ra=new Dd(ld.comparator),this.Va=new Map,this.ma=new pm,this.fa={},this.ga=new Map,this.pa=cm.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Qy(e,t){const n=pv(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const e=await Pm(n.localStore,Wf(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Jy(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&iy(n.remoteStore,e)}return i}async function Jy(e,t,n,r,i){e.wa=(t,n,r)=>async function(e,t,n,r){let i=t.view.sa(n);i.zi&&(i=await Mm(e.localStore,t.query,!1).then((({documents:e})=>t.view.sa(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return cv(e,t.targetId,o.ca),o.snapshot}(e,t,n,r);const s=await Mm(e.localStore,t,!0),o=new Ky(t,s.ss),a=o.sa(s.documents),c=fg.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);cv(e,n,u.ca);const l=new Hy(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function Xy(e,t){const n=zh(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((e=>!Jf(e,t)))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lm(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),sy(n.remoteStore,r.targetId),ov(n,r.targetId)})).catch(vd)):(ov(n,r.targetId),await Lm(n.localStore,r.targetId,!0))}async function Yy(e,t,n){const r=gv(e);try{const e=await function(e,t){const n=zh(e),r=id.now(),i=t.reduce(((e,t)=>e.add(t.key)),pp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=sp(),c=pp();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Bp(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new $p(e.key,t,hf(t.value.mapValue),Mp.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:cp(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fa[e.currentUser.toKey()];r||(r=new Dd(nd)),r=r.insert(t,n),e.fa[e.currentUser.toKey()]=r}(r,e.batchId,n),await hv(r,e.changes),await yy(r.remoteStore)}catch(e){const t=Dy(e,"Failed to persist write");n.reject(t)}}async function Zy(e,t){const n=zh(e);try{const e=await Rm(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Va.get(t);r&&(Bh(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ia=!0:e.modifiedDocuments.size>0?Bh(r.Ia):e.removedDocuments.size>0&&(Bh(r.Ia),r.Ia=!1))})),await hv(n,e,t)}catch(e){await vd(e)}}function ev(e,t,n){const r=zh(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=zh(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.N_(t)&&(r=!0)})),r&&By(n)}(r.eventManager,t),e.length&&r.Ta.r_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tv(e,t,n){const r=zh(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let e=new Dd(ld.comparator);e=e.insert(s,df.newNoDocument(s,sd.min()));const n=pp().add(s),i=new dg(sd.min(),new Map,new Dd(nd),e,n);await Zy(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(t),lv(r)}else await Lm(r.localStore,t,!1).then((()=>ov(r,t,n))).catch(vd)}async function nv(e,t){const n=zh(e),r=t.batch.batchId;try{const e=await Am(n.localStore,t);sv(n,r,null),iv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hv(n,e)}catch(e){await vd(e)}}async function rv(e,t,n){const r=zh(e);try{const e=await function(e,t){const n=zh(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Bh(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);sv(r,t,n),iv(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hv(r,e)}catch(n){await vd(n)}}function iv(e,t){(e.ga.get(t)||[]).forEach((e=>{e.resolve()})),e.ga.delete(t)}function sv(e,t,n){const r=zh(e);let i=r.fa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function ov(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach((t=>{e.ma.containsKey(t)||av(e,t)}))}function av(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);null!==n&&(sy(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),lv(e))}function cv(e,t,n){for(const r of n)r instanceof qy?(e.ma.addReference(r.key,t),uv(e,r)):r instanceof $y?(xh("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||av(e,r.key)):jh()}function uv(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(xh("SyncEngine","New document in limbo: "+n),e.Aa.add(r),lv(e))}function lv(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new ld(ad.fromString(t)),r=e.pa.next();e.Va.set(r,new Gy(n)),e.Ra=e.Ra.insert(n,r),iy(e.remoteStore,new tm(Wf(zf(n.path)),r,"TargetPurposeLimboResolution",Ed.ae))}}async function hv(e,t,n){const r=zh(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((e,a)=>{o.push(r.wa(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Im.qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(e,t){const n=zh(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>wd.forEach(t,(t=>wd.forEach(t.Li,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>wd.forEach(t.ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!_d(e))throw e;xh("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function dv(e,t){const n=zh(e);if(!n.currentUser.isEqual(t)){xh("SyncEngine","User change. New user:",t.toKey());const e=await km(n.localStore,t);n.currentUser=t,function(e,t){e.ga.forEach((e=>{e.forEach((e=>{e.reject(new $h(qh.CANCELLED,t))}))})),e.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hv(n,e.ts)}}function fv(e,t){const n=zh(e),r=n.Va.get(t);if(r&&r.Ia)return pp().add(r.key);{let e=pp();const r=n.da.get(t);if(!r)return e;for(const t of r){const r=n.Ea.get(t);e=e.unionWith(r.view.ia)}return e}}function pv(e){const t=zh(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zy.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tv.bind(null,t),t.Ta.r_=Vy.bind(null,t.eventManager),t.Ta.Sa=jy.bind(null,t.eventManager),t}function gv(e){const t=zh(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rv.bind(null,t),t}class mv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Cm(this.persistence,new Tm,e.initialUser,this.serializer)}createPersistence(e){return new _m(bm.zr,this.serializer)}createSharedClientState(e){return new Fm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ev(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=dv.bind(null,this.syncEngine),await ky(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xy}()}createDatastore(e){const t=Wm(e.databaseInfo.databaseId),n=function(e){return new Hm(e)}(e.databaseInfo);return function(e,t,n,r){return new Zm(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new ty(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>ev(this.syncEngine,e,0)),function(){return jm.v()?new jm:new Vm}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Wy(e,t,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=zh(e);xh("RemoteStore","RemoteStore shutting down."),t.y_.add(5),await ry(t),t.S_.shutdown(),t.b_.set("Unknown")}(this.remoteStore)}}
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
class vv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Uh("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class wv{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Oh.UNAUTHENTICATED,this.clientId=td.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{xh("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(xh("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $h(qh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Dy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function _v(e,t){e.asyncQueue.verifyOperationInProgress(),xh("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await km(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Ev(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Iv(e);xh("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Cy(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Cy(t.remoteStore,n))),e._onlineComponents=t}function bv(e){return"FirebaseError"===e.name?e.code===qh.FAILED_PRECONDITION||e.code===qh.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Iv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){xh("FirestoreClient","Using user provided OfflineComponentProvider");try{await _v(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!bv(n))throw n;Fh("Error using user provided cache. Falling back to memory cache: "+n),await _v(e,new mv)}}else xh("FirestoreClient","Using default OfflineComponentProvider"),await _v(e,new mv);return e._offlineComponents}async function Tv(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(xh("FirestoreClient","Using user provided OnlineComponentProvider"),await Ev(e,e._uninitializedComponentsProvider._online)):(xh("FirestoreClient","Using default OnlineComponentProvider"),await Ev(e,new yv))),e._onlineComponents}function Sv(e){return Tv(e).then((e=>e.syncEngine))}async function Cv(e){const t=await Tv(e),n=t.eventManager;return n.onListen=Qy.bind(null,t.syncEngine),n.onUnlisten=Xy.bind(null,t.syncEngine),n}
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
function kv(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Av=new Map;
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
 */function Nv(e,t,n){if(!n)throw new $h(qh.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Rv(e,t,n,r){if(!0===t&&!0===r)throw new $h(qh.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Dv(e){if(!ld.isDocumentKey(e))throw new $h(qh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ov(e){if(ld.isDocumentKey(e))throw new $h(qh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Pv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":jh()}function Lv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $h(qh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pv(e);throw new $h(qh.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Mv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new $h(qh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new $h(qh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kv(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new $h(qh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new $h(qh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new $h(qh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $h(qh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new $h(qh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Gh;switch(e.type){case"firstParty":return new Xh(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new $h(qh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Av.get(e);t&&(xh("ComponentProvider","Removing Datastore"),Av.delete(e),t.terminate())}(this),Promise.resolve()}}function Uv(e,t,n,r={}){var i;const s=(e=Lv(e,xv))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Fh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Oh.MOCK_USER;else{t=X(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new $h(qh.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Oh(s)}e._authCredentials=new Wh(new Hh(t,n))}}
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
 */class Fv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Fv(this.firestore,e,this._query)}}class Vv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vv(this.firestore,e,this._key)}}class jv extends Fv{constructor(e,t,n){super(e,t,zf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vv(this.firestore,null,new ld(e))}withConverter(e){return new jv(this.firestore,e,this._path)}}function Bv(e,t,...n){if(e=_e(e),Nv("collection","path",t),e instanceof xv){const r=ad.fromString(t,...n);return Ov(r),new jv(e,null,r)}{if(!(e instanceof Vv||e instanceof jv))throw new $h(qh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ad.fromString(t,...n));return Ov(r),new jv(e.firestore,null,r)}}function zv(e,t,...n){if(e=_e(e),1===arguments.length&&(t=td.V()),Nv("doc","path",t),e instanceof xv){const r=ad.fromString(t,...n);return Dv(r),new Vv(e,null,new ld(r))}{if(!(e instanceof Vv||e instanceof jv))throw new $h(qh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ad.fromString(t,...n));return Dv(r),new Vv(e.firestore,e instanceof jv?e.converter:null,new ld(r))}}
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
class qv{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Qm(this,"async_queue_retry"),this.Xa=()=>{const e=Gm();e&&xh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const e=Gm();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Gm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise((()=>{}));const t=new Kh;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ga.push(e),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!_d(e))throw e;xh("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(e){const t=this.Wa.then((()=>(this.Ja=!0,e().catch((e=>{this.Ha=e,this.Ja=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Uh("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ja=!1,e))))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Ry.createAndSchedule(this,e,t,n,(e=>this.ru(e)));return this.ja.push(r),r}eu(){this.Ha&&jh()}verifyOperationInProgress(){}async iu(){let e;do{e=this.Wa,await e}while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then((()=>{this.ja.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.ja)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()}))}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function $v(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class Kv extends xv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new qv}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wv(this),this._firestoreClient.terminate()}}function Hv(e,t){const n="object"==typeof e?e:Kt(),r="string"==typeof e?e:t||"(default)",i=Vt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=G("firestore");e&&Uv(i,...e)}return i}function Gv(e){return e._firestoreClient||Wv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wv(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Hd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,kv(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new wv(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
class Qv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qv(Fd.fromBase64String(e))}catch(e){throw new $h(qh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qv(Fd.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Jv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new $h(qh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ud(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Xv{constructor(e){this._methodName=e}}
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
 */class Yv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $h(qh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $h(qh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nd(this._lat,e._lat)||nd(this._long,e._long)}}
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
 */const Zv=/^__.*__$/;class ew{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new $p(e,this.data,this.fieldMask,t,this.fieldTransforms):new qp(e,this.data,t,this.fieldTransforms)}}function tw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw jh()}}class nw{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new nw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.Pu(e),r}Iu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return pw(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(tw(this.uu)&&Zv.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class rw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Wm(e)}Ru(e,t,n,r=!1){return new nw({uu:e,methodName:t,Au:n,path:ud.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iw(e){const t=e._freezeSettings(),n=Wm(e._databaseId);return new rw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sw(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);lw("Data must be an object, but it was:",o,r);const a=cw(r,o);let c,u;if(s.merge)c=new xd(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=hw(t,r,n);if(!o.contains(i))throw new $h(qh.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gw(e,i)||e.push(i)}c=new xd(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ew(new lf(a),c,u)}class ow extends Xv{_toFieldTransform(e){return new Op(e.path,new Tp)}isEqual(e){return e instanceof ow}}function aw(e,t){if(uw(e=_e(e)))return lw("Unsupported field value:",t,e),cw(e,t);if(e instanceof Xv)return function(e,t){if(!tw(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=aw(i,t.Tu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=_e(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return wp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=id.fromDate(e);return{timestampValue:Cg(t.serializer,n)}}if(e instanceof id){const n=new id(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Cg(t.serializer,n)}}if(e instanceof Yv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qv)return{bytesValue:kg(t.serializer,e._byteString)};if(e instanceof Vv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rg(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${Pv(e)}`)}(e,t)}function cw(e,t){const n={};return Rd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Nd(e,((e,r)=>{const i=aw(r,t.lu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function uw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof id||e instanceof Yv||e instanceof Qv||e instanceof Vv||e instanceof Xv)}function lw(e,t,n){if(!uw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Pv(n);throw"an object"===r?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function hw(e,t,n){if((t=_e(t))instanceof Jv)return t._internalPath;if("string"==typeof t)return fw(e,t);throw pw("Field path arguments must be of type string or ",e,!1,void 0,n)}const dw=new RegExp("[~\\*/\\[\\]]");function fw(e,t,n){if(t.search(dw)>=0)throw pw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jv(...t.split("."))._internalPath}catch(sa){throw pw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pw(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new $h(qh.INVALID_ARGUMENT,a+e+c)}function gw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class mw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yw extends mw{data(){return super.data()}}function vw(e,t){return"string"==typeof t?fw(e,t):t instanceof Jv?t._internalPath:t._delegate._internalPath}
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
 */function ww(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new $h(qh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _w{convertValue(e,t="none"){switch(Qd(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bd(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zd(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw jh()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Nd(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Yv(Bd(e.latitude),Bd(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=$d(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Kd(e));default:return null}}convertTimestamp(e){const t=jd(e);return new id(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ad.fromString(e);Bh(em(n));const r=new Gd(n.get(1),n.get(3)),i=new ld(n.popFirst(5));return r.isEqual(t)||Uh(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Ew(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class bw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Iw extends mw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Tw extends Iw{data(e={}){return super.data(e)}}class Sw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new bw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Tw(this._firestore,this._userDataWriter,n.key,n,new bw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $h(qh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Tw(e._firestore,e._userDataWriter,n.doc.key,n.doc,new bw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Tw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new bw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Cw(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Cw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return jh()}}class kw extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vv(this.firestore,null,t)}}function Aw(e,t){const n=Lv(e.firestore,Kv),r=zv(e),i=Ew(e.converter,t);return Rw(n,[sw(iw(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Mp.exists(!1))]).then((()=>r))}function Nw(e,...t){var n,r,i;e=_e(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||$v(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if($v(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Vv)u=Lv(e.firestore,Kv),l=zf(e._key.path),c={next:n=>{t[o]&&t[o](Dw(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Lv(e,Fv);u=Lv(n.firestore,Kv),l=n._query;const r=new kw(u);c={next:e=>{t[o]&&t[o](new Sw(u,r,n,e))},error:t[o+1],complete:t[o+2]},ww(e._query)}return function(e,t,n,r){const i=new vv(r),s=new zy(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Uy(await Cv(e),s))),()=>{i.Ca(),e.asyncQueue.enqueueAndForget((async()=>Fy(await Cv(e),s)))}}(Gv(u),l,a,c)}function Rw(e,t){return function(e,t){const n=new Kh;return e.asyncQueue.enqueueAndForget((async()=>Yy(await Sv(e),t,n))),n.promise}(Gv(e),t)}function Dw(e,t,n){const r=n.docs.get(t._key),i=new kw(e);return new Iw(e,i,t._key,r,new bw(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */function Ow(){return new ow("serverTimestamp")}!function(e,t=!0){!function(e){Ph=e}(qt),Ft(new Ee("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Kv(new Qh(e.getProvider("auth-internal")),new Zh(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new $h(qh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gd(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ht(Dh,"4.1.0",e),Ht(Dh,"4.1.0","esm2017")}();const Pw={apiKey:"AIzaSyA6CUjNqjMAPkewYuJAWZ1cjMoghoDWcvY",authDomain:"conrads-website-firebase.firebaseapp.com",projectId:"conrads-website-firebase",storageBucket:"conrads-website-firebase.appspot.com",messagingSenderId:"53250906031",appId:"1:53250906031:web:a7f46789ee3e62e0c3c15a",measurementId:"G-2F69HP3G2N"},Lw=$t(Pw),Mw=Hv(Lw);var xw=Mw;const Uw=zo();var Fw={emits:["loggedIn"],data(){return{username:"",email:"",password:"",isSigningUp:!1,signUpError:null}},computed:{signUpButtonText(){return this.isSigningUp?"Signing Up...":"Sign Up"},isFormValid(){return this.username&&this.email&&this.password}},methods:{signUp(){this.isFormValid&&(this.isSigningUp=!0,this.signUpError=null,Ai(Uw,this.email,this.password).then((()=>{Di(Uw.currentUser,{displayName:this.username}).then((()=>{this.$emit("loggedIn",this.username)})).catch((e=>{this.signUpError=e.message})).finally((()=>{this.isSigningUp=!1}))})).catch((e=>{this.signUpError=e.message,this.isSigningUp=!1})))}}},Vw=n(3744);const jw=(0,Vw.Z)(Fw,[["render",P],["__scopeId","data-v-5916ff6c"]]);var Bw=jw;const zw=e=>((0,r.dD)("data-v-4e1d994a"),e=e(),(0,r.Cn)(),e),qw=zw((()=>(0,r._)("h2",{style:{padding:"0.5em"}},"Log in",-1))),$w={style:{display:"flex","flex-direction":"column"}},Kw=zw((()=>(0,r._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Email:",-1))),Hw={style:{display:"flex","flex-direction":"column"}},Gw=zw((()=>(0,r._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),Ww=zw((()=>(0,r._)("button",{style:{"margin-top":"0.5em"},class:"button-35"},"Log in",-1)));function Qw(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[qw,(0,r._)("div",$w,[Kw,(0,r.wy)((0,r._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),autocomplete:"email"},null,512),[[s.nr,o.email]])]),(0,r._)("div",Hw,[Gw,(0,r.wy)((0,r._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e)},null,512),[[s.nr,o.password]])]),Ww],32)}var Jw={emits:["loggedIn"],data(){return{email:"",password:""}},methods:{login(){Ni(Uw,this.email,this.password).then((()=>{this.$emit("loggedIn",this.username)})).catch((e=>{const t=e.code,n=e.message;"auth/user-not-found"===t?alert("User not found! Please check your email and password and try again."):alert(n)}))}}};const Xw=(0,Vw.Z)(Jw,[["render",Qw],["__scopeId","data-v-4e1d994a"]]);var Yw=Xw,Zw={components:{SignUpPage:Bw,LoginPage:Yw,FirstFooter:b.Z},data(){return{isLoggedIn:!1,showLogin:!0,userName:"",name:"",description:"",submissions:[],displayName:"",lastMessageSentTime:0,timeElapsed:0}},beforeUpdate(){Uw.currentUser&&(this.displayName=Uw.currentUser.displayName)},methods:{async createUser(){try{this.displayName=Uw.currentUser,this.isLoggedIn?this.sendMessage():alert("You must be logged in to submit a message!")}catch(e){console.error("Error adding document!: ",e)}},async sendMessage(){const e=(new Date).getTime();if(console.log(e),this.timeElapsed=e-this.lastMessageSentTime,console.log(this.timeElapsed),this.timeElapsed<1e4)return console.log("Please wait at least 10 seconds before sending another message."),void alert("Please wait at least 10 seconds before sending another message.");console.log("message sent"),this.lastMessageSentTime=e;const t=Bv(xw,"submissions"),n={name:this.name,description:this.description,timestamp:Ow()},r=await Aw(t,n);console.log("Document written with ID: ",r.id)},handleLogin(){this.isLoggedIn=!0,document.cookie="isLoggedIn=true; SameSite=Strict",localStorage.setItem("isLoggedIn","true"),document.cookie=`userName=${this.username}; SameSite=Strict`,localStorage.setItem("userName",this.username)},signOut(){try{Li(Uw)}catch(e){console.error("Error signing out user: ",e)}},handleLogout(){this.signOut(),this.isLoggedIn=!1,document.cookie="isLoggedIn=false; SameSite=Strict",document.cookie="userName=; SameSite=Strict",localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userName")}},created(){const e=Bv(xw,"submissions");Nw(e,(e=>{const t=[];e.forEach((e=>{const n={id:e.id,...e.data()};n.timestamp&&t.push(n)})),t.sort(((e,t)=>e.timestamp.toMillis()-t.timestamp.toMillis())),this.submissions=t}));const t=localStorage.getItem("isLoggedIn");"true"===t&&(this.isLoggedIn=!0)}};const e_=(0,Vw.Z)(Zw,[["render",E],["__scopeId","data-v-3f94b739"]]);var t_=e_}}]);
//# sourceMappingURL=955.6a3ff95c.js.map