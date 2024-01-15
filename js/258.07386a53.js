"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[258],{1258:function(e,t,s){s.r(t),s.d(t,{default:function(){return ze}});var n=s(6252),o=s(3577),a=s(9963);const r=e=>((0,n.dD)("data-v-8b1d131a"),e=e(),(0,n.Cn)(),e),i={style:{background:"rgb(255, 255, 255)","padding-bottom":"2em","padding-top":"2.7em"}},l={style:{"justify-content":"center"}},c={key:0,class:"button-35"},d={class:"top-text-container"},u={class:"top-text-sub-container"},g={key:0},m=r((()=>(0,n._)("br",null,null,-1))),p=r((()=>(0,n._)("p",{class:"login-information"}," The sign in currently just allows message posting and routing to user authorized pages. ",-1))),f={key:0,style:{color:"rgb(18,18,18)",border:"2px rgb(218, 220, 224)"}},h={style:{"justify-content":"center",display:"flex"}},y={class:"login-information",style:{padding:"1em"}},b={style:{"justify-content":"center",display:"flex"}},w={class:"login-information",style:{padding:"1em"}},v={key:1},k={style:{cursor:"auto",color:"#c4c4c4","font-size":"1.5em","margin-top":"2em","font-weight":"bold"}},_=r((()=>(0,n._)("br",null,null,-1))),x=r((()=>(0,n._)("span",{style:{"font-size":"0.75em",color:"#c4c4c4"}},"You are logged in.",-1))),S={style:{"padding-top":"2em"}},I={style:{color:"#ff4a4a"}},L=r((()=>(0,n._)("h2",{style:{color:"#181818"}},"Submit Message!",-1))),U={key:0,style:{color:"rgb(255, 89, 89)"}},M={style:{"max-width":"40em"}},E={style:{display:"flex","flex-direction":"column"}},N=r((()=>(0,n._)("label",{for:"Subject",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25rem"}},"Subject:",-1))),P={style:{display:"flex"}},D={style:{color:"#ff6b6b","margin-left":"0.5em","padding-top":"0.5em"}},j={style:{display:"flex","flex-direction":"column"}},O=r((()=>(0,n._)("label",{for:"Message",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25rem"}},"Message:",-1))),z={class:"submission-container"},C=r((()=>(0,n._)("h3",{style:{color:"rgb(0, 227, 227)"}},"Messages will appear publicly here.",-1))),T={style:{"list-style":"none"}},q={style:{"font-weight":"bold","font-size":"1em",color:"#87ff7a",display:"inline-block",padding:"0.25em 0 0.25em 0"}},A=r((()=>(0,n._)("br",null,null,-1))),V=r((()=>(0,n._)("span",{style:{color:"#d8d8d8","font-size":"0.9em"}},"Subject:",-1))),Y={style:{color:"#ffffff"}},H={key:0,style:{"padding-left":"0.5em","font-size":"0.8em",color:"#ffffff",display:"inline-block"}},Z={class:"break-text",style:{"background-color":"white",display:"inline-block",padding:"0.5em","margin-bottom":"0.5em","border-radius":"0.5em"}};function $(e,t,s,r,$,B){const F=(0,n.up)("CookieAccept"),W=(0,n.up)("router-link"),G=(0,n.up)("LoginPage"),J=(0,n.up)("SignUpPage");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(F),(0,n._)("div",i,[(0,n._)("div",l,[$.isLoggedIn?((0,n.wg)(),(0,n.iD)("button",c,[(0,n.Wm)(W,{class:"text-links",style:{"text-decoration":"none",color:"white"},to:"/authorized"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Enter authorized user page ")])),_:1})])):(0,n.kq)("",!0)]),(0,n._)("article",d,[(0,n._)("div",u,[$.isLoggedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("h1",g,"Sign In")),m,p])]),$.isLoggedIn?((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",k,[(0,n._)("span",null,[(0,n.Uk)("Welcome, "+(0,o.zw)($.displayName)+"!",1),(0,n._)("button",{class:"button-35",style:{float:"inline-block","margin-left":"4em"},onClick:t[2]||(t[2]=(...e)=>B.handleLogout&&B.handleLogout(...e))},"Logout"),_,x])])])):((0,n.wg)(),(0,n.iD)("div",f,[$.showLogin?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(G,{onLoggedIn:B.handleLogin},null,8,["onLoggedIn"]),(0,n._)("div",h,[(0,n._)("p",y,[(0,n.Uk)("No account yet? "),(0,n._)("span",{class:"login-sign-up",onClick:t[0]||(t[0]=e=>$.showLogin=!1)},"Sign up")])])],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(J,{onLoggedIn:B.handleLogin},null,8,["onLoggedIn"]),(0,n._)("div",b,[(0,n._)("p",w,[(0,n.Uk)("Already registered? "),(0,n._)("span",{class:"login-sign-up",style:{color:"cursor: pointer"},onClick:t[1]||(t[1]=e=>$.showLogin=!0)},"Log in")])])],64))])),(0,n._)("div",S,[(0,n._)("form",{name:"sendMessage",class:"addinput-form",onSubmit:t[6]||(t[6]=(0,a.iM)(((...t)=>e.createSubmission&&e.createSubmission(...t)),["prevent"]))},[(0,n._)("div",I,(0,o.zw)($.errorMessage),1),L,$.isLoggedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("h2",U,"You are not logged in!")),(0,n._)("div",M,[(0,n._)("div",E,[N,(0,n._)("div",P,[(0,n.wy)((0,n._)("input",{style:{width:"23em"},type:"text",placeholder:"Subject",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>$.name=e),name:"submissionName",maxlength:"{{this.messageLength}}",ref:"subjectInput"},null,512),[[a.nr,$.name]]),(0,n._)("span",D,[(0,n._)("span",{style:(0,o.j5)(B.textStyle)},(0,o.zw)($.name.length)+"/"+(0,o.zw)(this.messageLength),5)])])])]),(0,n._)("div",j,[O,(0,n.wy)((0,n._)("textarea",{type:"text",placeholder:"Message",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>$.message=e),name:"submissionMessage",cols:"50",rows:"10"},null,512),[[a.nr,$.message]])]),(0,n._)("button",{onClick:t[5]||(t[5]=(...e)=>B.createUser&&B.createUser(...e)),class:"button-35"},"Add Entry")],32),(0,n._)("div",z,[C,(0,n._)("ul",T,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)($.submissions,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n._)("div",null,[(0,n._)("span",q,[(0,n.Uk)((0,o.zw)(e.userName)+" ",1),A,V,(0,n.Uk)(),(0,n._)("span",Y,(0,o.zw)(e.name),1)]),e.timestamp?((0,n.wg)(),(0,n.iD)("p",H,(0,o.zw)(e.timestamp.toDate().toLocaleString()),1)):(0,n.kq)("",!0)]),(0,n._)("p",Z,(0,o.zw)(e.message),1)])))),128))])])])])],64)}s(560);const B=e=>((0,n.dD)("data-v-57244d81"),e=e(),(0,n.Cn)(),e),F=B((()=>(0,n._)("h2",{style:{padding:"0.5em"}},"Sign Up",-1))),W={style:{display:"flex","flex-direction":"column"}},G=B((()=>(0,n._)("label",{class:"label-title-styling",for:"text",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Make a Username:",-1))),J={style:{display:"flex","flex-direction":"column"}},K=B((()=>(0,n._)("label",{class:"label-title-styling",for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Enter an email:",-1))),Q={style:{display:"flex","flex-direction":"column"}},R=B((()=>(0,n._)("label",{class:"label-title-styling",for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),X=["disabled"],ee={key:0,style:{color:"red"}};function te(e,t,s,r,i,l){const c=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>l.signUp&&l.signUp(...e)),["prevent"]))},[F,(0,n._)("div",W,[G,(0,n.wy)((0,n._)("input",{name:"text",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>i.userName=e),maxlength:"20"},null,512),[[a.nr,i.userName],[c]])]),(0,n._)("div",J,[K,(0,n.wy)((0,n._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e)},null,512),[[a.nr,i.email]])]),(0,n._)("div",Q,[R,(0,n.wy)((0,n._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>i.password=e)},null,512),[[a.nr,i.password]])]),(0,n._)("button",{style:{margin:"0.5em"},class:"button-35",disabled:i.isSigningUp},(0,o.zw)(l.signUpButtonText),9,X),i.signUpError?((0,n.wg)(),(0,n.iD)("div",ee,(0,o.zw)(i.signUpError),1)):(0,n.kq)("",!0)],32)}var se=s(316),ne=s(2392);const oe={mounted:e=>e.focus()};var ae={emits:["loggedIn"],directives:{focus:oe},data(){return{userName:"",email:"",password:"",isSigningUp:!1,signUpError:null}},computed:{signUpButtonText(){return this.isSigningUp?"Signing Up...":"Sign Up"},isFormValid(){return this.userName&&this.email&&this.password}},methods:{async signUp(){if(this.isFormValid&&""!==this.userName.trim()&&""!==this.email.trim()&&""!==this.password.trim()){this.isSigningUp=!0;try{await(0,se.Xb)(ne.I,this.email,this.password),await(0,se.ck)(ne.I.currentUser,{displayName:this.userName}),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/email-already-in-use":this.signUpError="Error: Email already in use.";break;default:this.signUpError=e.message;break}}finally{this.isSigningUp=!1}}}}},re=s(3744);const ie=(0,re.Z)(ae,[["render",te],["__scopeId","data-v-57244d81"]]);var le=ie;const ce=e=>((0,n.dD)("data-v-2035747d"),e=e(),(0,n.Cn)(),e),de={class:"login-form-container"},ue={class:"login-form-styling"},ge=ce((()=>(0,n._)("h2",{style:{padding:"0.5em",color:"rgb(18,18,18)"}},"Log in",-1))),me={style:{display:"flex","flex-direction":"column"}},pe=ce((()=>(0,n._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Email:",-1))),fe={style:{display:"flex","flex-direction":"column"}},he=ce((()=>(0,n._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),ye=ce((()=>(0,n._)("button",{style:{"margin-top":"0.5em"},class:"button-35"}," Log in ",-1))),be={style:{"margin-top":"1em"}},we={style:{color:"red"}};function ve(e,t,s,r,i,l){const c=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("div",de,[(0,n._)("div",ue,[(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>l.login&&l.login(...e)),["prevent"]))},[ge,(0,n._)("div",me,[pe,(0,n.wy)((0,n._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),autocomplete:"email"},null,512),[[a.nr,i.email],[c]])]),(0,n._)("div",fe,[he,(0,n.wy)((0,n._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e)},null,512),[[a.nr,i.password]])]),ye,(0,n._)("div",be,[(0,n._)("span",we,(0,o.zw)(i.errorMessage),1)])],32)])])}const ke={mounted:e=>e.focus()};var _e={emits:["loggedIn"],directives:{focus:ke},data(){return{email:"",password:"",errorMessage:""}},methods:{async login(){try{await(0,se.e5)(ne.I,this.email,this.password),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/wrong-password":this.errorMessage="Error: Invalid password.";break;case"auth/user-not-found":this.errorMessage="Error: User not found.";break;case"auth/invalid-email":this.errorMessage="Error: Invalid email.";break;default:this.errorMessage=e.message;break}}}}};const xe=(0,re.Z)(_e,[["render",ve],["__scopeId","data-v-2035747d"]]);var Se=xe,Ie=s(6100);const Le={key:0,class:"backdrop"},Ue={class:"cookie-modal"},Me=(0,n.uE)('<h2 data-v-7b246896>Privacy Policy</h2><p class="text" data-v-7b246896> By using this page you agree to the use of essential <a class="text-links" href="https://en.wikipedia.org/wiki/HTTP_cookie" data-v-7b246896>cookies</a> stored locally in the browser for website functionality. This site optionally (with a user made account) connects to <a class="text-links" href="https://firebase.google.com" data-v-7b246896>Firebase</a> for user authentication and backend database storage. Other than Firebase, no other data is transmitted to 3rd party websites or services. The only cookies used are those essential for the site to function. By clicking &quot;Accept&quot; or closing this modal, you agree to these terms. </p><br data-v-7b246896><p class="text" data-v-7b246896><span style="color:#ff5959;" data-v-7b246896>Also:</span> This site is being developed and currently is hosted using <a class="text-links" href="https://pages.github.com/" data-v-7b246896>GitHub Pages</a>. In case the site is not loading or certain features do not work, the code on this site is targeted toward modern web browsers, and the solution may be to update your browser to the newest version.</p>',4);function Ee(e,t,s,o,a,r){return a.showModal?((0,n.wg)(),(0,n.iD)("div",Le,[(0,n._)("div",Ue,[(0,n._)("button",{class:"close",onClick:t[0]||(t[0]=(...e)=>r.acceptCookies&&r.acceptCookies(...e))}),Me,(0,n._)("button",{class:"button-35",onClick:t[1]||(t[1]=(...e)=>r.acceptCookies&&r.acceptCookies(...e))},"Accept")])])):(0,n.kq)("",!0)}var Ne={data(){return{showModal:!0}},methods:{closeModal(){this.$emit("close")},acceptCookies(){this.showModal=!1,localStorage.setItem("cookiesAccepted","true")}},mounted(){const e=localStorage.getItem("cookiesAccepted");"true"===e&&(this.showModal=!1)}};const Pe=(0,re.Z)(Ne,[["render",Ee],["__scopeId","data-v-7b246896"]]);var De=Pe,je={components:{SignUpPage:le,LoginPage:Se,CookieAccept:De},data(){return{isLoggedIn:!1,showLogin:!0,userName:this.displayName,name:"",message:"",messageLength:50,submissions:[],displayName:"",lastMessageSentTime:0,timeElapsed:0,errorMessage:""}},computed:{textStyle(){return{color:this.name.length>0?"#87ff7a":"#ff6b6b"}}},beforeUpdate(){ne.I.currentUser&&(this.displayName=ne.I.currentUser.displayName,this.userName=this.displayName)},watch:{name(e){e.length>=this.messageLength?(this.errorMessage="Subject cannot be longer than "+this.messageLength+" characters!",this.name=e.slice(0,this.messageLength)):0==e.length&&(this.textStyle.color="#ff6b6b")},isLoggedIn(){this.isLoggedIn&&this.$nextTick((()=>{this.$refs.subjectInput.focus()}))}},methods:{async createUser(){try{if(""==this.name)throw this.errorMessage="Please enter a subject!",new Error("Please enter a subject!");if(""==this.message)throw this.errorMessage="Please enter a message!",new Error("Please enter a message!");this.displayName=ne.I.currentUser,this.isLoggedIn?this.sendMessage():alert("You must be logged in to submit a message!")}catch(e){console.error("Error adding document!: ",e)}},async sendMessage(){const e=(new Date).getTime();if(console.log(e),this.timeElapsed=e-this.lastMessageSentTime,console.log(this.timeElapsed),this.timeElapsed<1e4)return console.log("Please wait at least 10 seconds before sending another message."),void alert("Please wait at least 10 seconds before sending another message.");console.log("message sent"),this.lastMessageSentTime=e;const t=(0,Ie.hJ)(ne.Z,"submissions"),s={name:this.name,userName:this.userName,message:this.message,timestamp:(0,Ie.Bt)()},n=await(0,Ie.ET)(t,s);console.log("Document written with ID: ",n.id)},handleLogin(){this.isLoggedIn=!0,document.cookie="isLoggedIn=true; SameSite=Strict",localStorage.setItem("isLoggedIn","true"),document.cookie=`userName=${this.userName}; SameSite=Strict`,localStorage.setItem("userName",this.userName)},signOut(){try{(0,se.w7)(ne.I)}catch(e){console.error("Error signing out user: ",e)}},handleLogout(){this.signOut(),this.isLoggedIn=!1,document.cookie="isLoggedIn=false; SameSite=Strict",document.cookie="userName=; SameSite=Strict",localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userName")}},created(){const e=(0,Ie.hJ)(ne.Z,"submissions");(0,Ie.cf)(e,(e=>{const t=[];e.forEach((e=>{const s={id:e.id,...e.data()};s.timestamp&&t.push(s)})),t.sort(((e,t)=>e.timestamp.toMillis()-t.timestamp.toMillis())),this.submissions=t}));const t=localStorage.getItem("isLoggedIn");"true"===t&&(this.isLoggedIn=!0)}};const Oe=(0,re.Z)(je,[["render",$],["__scopeId","data-v-8b1d131a"]]);var ze=Oe},4328:function(e,t,s){var n=s(5290),o=s(7578),a=s(6310),r=function(e){return function(t,s,r){var i,l=n(t),c=a(l),d=o(r,c);if(e&&s!==s){while(c>d)if(i=l[d++],i!==i)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===s)return e||d||0;return!e&&-1}};e.exports={includes:r(!0),indexOf:r(!1)}},5649:function(e,t,s){var n=s(7697),o=s(2297),a=TypeError,r=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=i?function(e,t){if(o(e)&&!r(e,"length").writable)throw new a("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},8758:function(e,t,s){var n=s(6812),o=s(9152),a=s(2474),r=s(2560);e.exports=function(e,t,s){for(var i=o(t),l=r.f,c=a.f,d=0;d<i.length;d++){var u=i[d];n(e,u)||s&&n(s,u)||l(e,u,c(t,u))}}},5565:function(e){var t=TypeError,s=9007199254740991;e.exports=function(e){if(e>s)throw t("Maximum allowed index exceeded");return e}},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(e,t,s){var n=s(9037),o=s(2474).f,a=s(5773),r=s(1880),i=s(5014),l=s(8758),c=s(5266);e.exports=function(e,t){var s,d,u,g,m,p,f=e.target,h=e.global,y=e.stat;if(d=h?n:y?n[f]||i(f,{}):(n[f]||{}).prototype,d)for(u in t){if(m=t[u],e.dontCallGetSet?(p=o(d,u),g=p&&p.value):g=d[u],s=c(h?u:f+(y?".":"#")+u,e.forced),!s&&void 0!==g){if(typeof m==typeof g)continue;l(m,g)}(e.sham||g&&g.sham)&&a(m,"sham",!0),r(d,u,m,e)}}},4413:function(e,t,s){var n=s(8844),o=s(3689),a=s(6648),r=Object,i=n("".split);e.exports=o((function(){return!r("z").propertyIsEnumerable(0)}))?function(e){return"String"===a(e)?i(e,""):r(e)}:r},2297:function(e,t,s){var n=s(6648);e.exports=Array.isArray||function(e){return"Array"===n(e)}},5266:function(e,t,s){var n=s(3689),o=s(9985),a=/#|\.prototype\./,r=function(e,t){var s=l[i(e)];return s===d||s!==c&&(o(t)?n(t):!!t)},i=r.normalize=function(e){return String(e).replace(a,".").toLowerCase()},l=r.data={},c=r.NATIVE="N",d=r.POLYFILL="P";e.exports=r},6310:function(e,t,s){var n=s(3126);e.exports=function(e){return n(e.length)}},8828:function(e){var t=Math.ceil,s=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?s:t)(n)}},2474:function(e,t,s){var n=s(7697),o=s(2615),a=s(9556),r=s(5684),i=s(5290),l=s(8360),c=s(6812),d=s(8506),u=Object.getOwnPropertyDescriptor;t.f=n?u:function(e,t){if(e=i(e),t=l(t),d)try{return u(e,t)}catch(s){}if(c(e,t))return r(!o(a.f,e,t),e[t])}},2741:function(e,t,s){var n=s(4948),o=s(2739),a=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},4948:function(e,t,s){var n=s(8844),o=s(6812),a=s(5290),r=s(4328).indexOf,i=s(7248),l=n([].push);e.exports=function(e,t){var s,n=a(e),c=0,d=[];for(s in n)!o(i,s)&&o(n,s)&&l(d,s);while(t.length>c)o(n,s=t[c++])&&(~r(d,s)||l(d,s));return d}},9556:function(e,t){var s={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!s.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:s},9152:function(e,t,s){var n=s(6058),o=s(8844),a=s(2741),r=s(7518),i=s(5027),l=o([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(i(e)),s=r.f;return s?l(t,s(e)):t}},7578:function(e,t,s){var n=s(8700),o=Math.max,a=Math.min;e.exports=function(e,t){var s=n(e);return s<0?o(s+t,0):a(s,t)}},5290:function(e,t,s){var n=s(4413),o=s(4684);e.exports=function(e){return n(o(e))}},8700:function(e,t,s){var n=s(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},3126:function(e,t,s){var n=s(8700),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},560:function(e,t,s){var n=s(9989),o=s(690),a=s(6310),r=s(5649),i=s(5565),l=s(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},u=c||!d();n({target:"Array",proto:!0,arity:1,forced:u},{push:function(e){var t=o(this),s=a(t),n=arguments.length;i(s+n);for(var l=0;l<n;l++)t[s]=arguments[l],s++;return r(t,s),s}})}}]);
//# sourceMappingURL=258.07386a53.js.map