"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[811],{1318:function(e,t,s){var n=s(5656),r=s(1400),o=s(6244),i=function(e){return function(t,s,i){var a,l=n(t),u=o(l),c=r(i,u);if(e&&s!=s){while(u>c)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===s)return e||c||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},3658:function(e,t,s){var n=s(9781),r=s(3157),o=TypeError,i=Object.getOwnPropertyDescriptor,a=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!i(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9920:function(e,t,s){var n=s(2597),r=s(3887),o=s(1236),i=s(3070);e.exports=function(e,t,s){for(var a=r(t),l=i.f,u=o.f,c=0;c<a.length;c++){var d=a[c];n(e,d)||s&&n(s,d)||l(e,d,u(t,d))}}},7207:function(e){var t=TypeError,s=9007199254740991;e.exports=function(e){if(e>s)throw t("Maximum allowed index exceeded");return e}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,s){var n=s(7854),r=s(1236).f,o=s(8880),i=s(8052),a=s(3072),l=s(9920),u=s(4705);e.exports=function(e,t){var s,c,d,g,m,f,p=e.target,h=e.global,y=e.stat;if(c=h?n:y?n[p]||a(p,{}):(n[p]||{}).prototype,c)for(d in t){if(m=t[d],e.dontCallGetSet?(f=r(c,d),g=f&&f.value):g=c[d],s=u(h?d:p+(y?".":"#")+d,e.forced),!s&&void 0!==g){if(typeof m==typeof g)continue;l(m,g)}(e.sham||g&&g.sham)&&o(m,"sham",!0),i(c,d,m,e)}}},8361:function(e,t,s){var n=s(1702),r=s(7293),o=s(4326),i=Object,a=n("".split);e.exports=r((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):i(e)}:i},3157:function(e,t,s){var n=s(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4705:function(e,t,s){var n=s(7293),r=s(614),o=/#|\.prototype\./,i=function(e,t){var s=l[a(e)];return s==c||s!=u&&(r(t)?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},6244:function(e,t,s){var n=s(7466);e.exports=function(e){return n(e.length)}},4758:function(e){var t=Math.ceil,s=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?s:t)(n)}},1236:function(e,t,s){var n=s(9781),r=s(6916),o=s(5296),i=s(9114),a=s(5656),l=s(4948),u=s(2597),c=s(4664),d=Object.getOwnPropertyDescriptor;t.f=n?d:function(e,t){if(e=a(e),t=l(t),c)try{return d(e,t)}catch(s){}if(u(e,t))return i(!r(o.f,e,t),e[t])}},8006:function(e,t,s){var n=s(6324),r=s(748),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,s){var n=s(1702),r=s(2597),o=s(5656),i=s(1318).indexOf,a=s(3501),l=n([].push);e.exports=function(e,t){var s,n=o(e),u=0,c=[];for(s in n)!r(a,s)&&r(n,s)&&l(c,s);while(t.length>u)r(n,s=t[u++])&&(~i(c,s)||l(c,s));return c}},5296:function(e,t){var s={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!s.call({1:2},1);t.f=r?function(e){var t=n(this,e);return!!t&&t.enumerable}:s},3887:function(e,t,s){var n=s(5005),r=s(1702),o=s(8006),i=s(5181),a=s(9670),l=r([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(a(e)),s=i.f;return s?l(t,s(e)):t}},1400:function(e,t,s){var n=s(9303),r=Math.max,o=Math.min;e.exports=function(e,t){var s=n(e);return s<0?r(s+t,0):o(s,t)}},5656:function(e,t,s){var n=s(8361),r=s(4488);e.exports=function(e){return n(r(e))}},9303:function(e,t,s){var n=s(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},7466:function(e,t,s){var n=s(9303),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},7658:function(e,t,s){var n=s(2109),r=s(7908),o=s(6244),i=s(3658),a=s(7207),l=s(7293),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!c();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=r(this),s=o(t),n=arguments.length;a(s+n);for(var l=0;l<n;l++)t[s]=arguments[l],s++;return i(t,s),s}})},4260:function(e,t,s){s.d(t,{Z:function(){return m}});var n=s(6252),r=s(3577);const o={class:"footer"},i=(0,n._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),a=(0,n._)("br",null,null,-1),l=(0,n._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(e,t,s,u,c,d){const g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("footer",o,[(0,n._)("div",null,[(0,n._)("span",null,[(0,n.Wm)(g,{class:"footer-links",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About  ")])),_:1}),(0,n.Uk)("  "),i,(0,n.Uk)("    conradswebsite.com © "+(0,r.zw)(d.getCurrentYear),1),a,(0,n.Uk)(" unless mentioned otherwise, licensing is "),l,(0,n.Uk)(". ")])])])}var c={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},d=s(3744);const g=(0,d.Z)(c,[["render",u]]);var m=g},3504:function(e,t,s){s.r(t),s.d(t,{default:function(){return ve}});var n=s(6252),r=s(3577),o=s(9963);const i=e=>((0,n.dD)("data-v-d2ef53d2"),e=e(),(0,n.Cn)(),e),a={style:{background:"rgb(80, 80, 80)","padding-bottom":"2em","padding-top":"2.7em"}},l={style:{"justify-content":"center","margin-top":"6em"}},u={class:"button-35"},c=i((()=>(0,n._)("hr",{style:{position:"absolute",top:"7.6em",left:"0",right:"0",border:"none","border-top":"1px solid black"}},null,-1))),d=i((()=>(0,n._)("h2",{style:{padding:"1em","margin-top":"3em",color:"#fff"}},"Working on this page... ",-1))),g=i((()=>(0,n._)("div",{style:{display:"flex","justify-content":"center",color:"#fff"}},[(0,n._)("p",{class:"paragraph-text"},'Here I am setting up a login/sign out setup using BaaS (Back end as a service) to post messages and do more! The goal will eventually be to create a more comprehensive backend once there is a need for it. This is all being built from scratch! The "Enter authorized user page" link won\'t take the user anywhere unless they are authorized. It stays on this page and does nothing. If the user is authorized it routes to a locked user logged in only page. ')],-1))),m={key:0,style:{color:"#fff"}},f={style:{padding:"1em"}},p={key:1},h={style:{cursor:"auto",color:"#808080",position:"absolute",left:"0.5em",top:"0.5em","margin-top":"1.7em","font-size":"1.5em","font-weight":"bold"}},y=i((()=>(0,n._)("br",null,null,-1))),b=i((()=>(0,n._)("span",{style:{"font-size":"0.75em",color:"#808080"}},"You are logged in.",-1))),w={style:{"padding-top":"2em"}},v={style:{color:"#ff0000"}},_=i((()=>(0,n._)("h2",{style:{color:"#fff"}},"Submit Message! - must be logged in for it to work.",-1))),x={style:{"max-width":"40em"}},k={style:{display:"flex","flex-direction":"column"}},S=i((()=>(0,n._)("label",{for:"Subject",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25em"}},"Subject:",-1))),I={style:{display:"flex"}},U={style:{color:"#ff6b6b","margin-left":"0.5em","padding-top":"0.5em"}},L={style:{display:"flex","flex-direction":"column"}},E=i((()=>(0,n._)("label",{for:"Message",style:{color:"#fff","align-self":"flex-start","padding-left":"0.25em"}},"Message:",-1))),M={class:"submission-container"},N={style:{"list-style":"none"}},z={style:{"font-weight":"bold","font-size":"1em",color:"#87ff7a",display:"inline-block",padding:"0.25em 0 0.25em 0"}},P=i((()=>(0,n._)("br",null,null,-1))),D=i((()=>(0,n._)("span",{style:{color:"#d8d8d8","font-size":"0.9em"}},"Subject:",-1))),O={style:{color:"#ffffff"}},j={key:0,style:{"padding-left":"0.5em","font-size":"0.8em",color:"#ffffff",display:"inline-block"}},C={class:"break-text",style:{"background-color":"white",display:"inline-block",padding:"0.5em","margin-bottom":"0.5em","border-radius":"0.5em"}};function T(e,t,s,i,T,Y){const F=(0,n.up)("router-link"),V=(0,n.up)("LoginPage"),q=(0,n.up)("SignUpPage"),A=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",a,[(0,n._)("div",l,[(0,n._)("button",u,[(0,n.Wm)(F,{class:"text-links",style:{"text-decoration":"none"},to:"/authorized"},{default:(0,n.w5)((()=>[(0,n.Uk)("Enter authorized user page")])),_:1})])]),c,d,g,T.isLoggedIn?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",h,[(0,n._)("span",null,[(0,n.Uk)("Welcome, "+(0,r.zw)(T.displayName)+"!",1),y,b])]),(0,n._)("button",{class:"button-35",style:{position:"absolute",top:"3em",right:"1em",color:"#87ff7a"},onClick:t[2]||(t[2]=(...e)=>Y.handleLogout&&Y.handleLogout(...e))},"Logout")])):((0,n.wg)(),(0,n.iD)("div",m,[T.showLogin?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(V,{onLoggedIn:Y.handleLogin},null,8,["onLoggedIn"]),(0,n._)("p",f,[(0,n.Uk)("No account yet? "),(0,n._)("span",{class:"login-sign-up",style:{color:"#87ff7a",cursor:"pointer"},onClick:t[0]||(t[0]=e=>T.showLogin=!1)},"Sign up")])],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(q,{onLoggedIn:Y.handleLogin},null,8,["onLoggedIn"]),(0,n._)("p",null,[(0,n.Uk)("Already registered? "),(0,n._)("span",{class:"login-sign-up",style:{color:"#87ff7a",cursor:"pointer"},onClick:t[1]||(t[1]=e=>T.showLogin=!0)},"Login")])],64))])),(0,n._)("div",w,[(0,n._)("form",{name:"sendMessage",class:"addinput-form",onSubmit:t[6]||(t[6]=(0,o.iM)(((...t)=>e.createSubmission&&e.createSubmission(...t)),["prevent"]))},[(0,n._)("div",v,(0,r.zw)(T.errorMessage),1),_,(0,n._)("div",x,[(0,n._)("div",k,[S,(0,n._)("div",I,[(0,n.wy)((0,n._)("input",{style:{width:"23em"},type:"text",placeholder:"Subject",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>T.name=e),name:"submissionName",maxlength:"{{this.messageLength}}",ref:"subjectInput"},null,512),[[o.nr,T.name]]),(0,n._)("span",U,[(0,n._)("span",{style:(0,r.j5)(Y.textStyle)},(0,r.zw)(T.name.length)+"/"+(0,r.zw)(this.messageLength),5)])])])]),(0,n._)("div",L,[E,(0,n.wy)((0,n._)("textarea",{type:"text",placeholder:"Message",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>T.message=e),name:"submissionMessage",cols:"50",rows:"10"},null,512),[[o.nr,T.message]])]),(0,n._)("button",{style:{color:"#87ff7a"},onClick:t[5]||(t[5]=(...e)=>Y.createUser&&Y.createUser(...e)),class:"button-35"},"Add Entry")],32),(0,n._)("div",M,[(0,n._)("ul",N,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(T.submissions,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n._)("div",null,[(0,n._)("span",z,[(0,n.Uk)((0,r.zw)(e.userName)+" ",1),P,D,(0,n.Uk)(),(0,n._)("span",O,(0,r.zw)(e.name),1)]),e.timestamp?((0,n.wg)(),(0,n.iD)("p",j,(0,r.zw)(e.timestamp.toDate().toLocaleString()),1)):(0,n.kq)("",!0)]),(0,n._)("p",C,(0,r.zw)(e.message),1)])))),128))])])])]),(0,n.Wm)(A)],64)}s(7658);var Y=s(4260);const F=e=>((0,n.dD)("data-v-43847825"),e=e(),(0,n.Cn)(),e),V=F((()=>(0,n._)("h2",{style:{padding:"0.5em"}},"Sign Up",-1))),q={style:{display:"flex","flex-direction":"column"}},A=F((()=>(0,n._)("label",{for:"text",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Make a Username:",-1))),Z={style:{display:"flex","flex-direction":"column"}},W=F((()=>(0,n._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Enter an email:",-1))),B={style:{display:"flex","flex-direction":"column"}},H=F((()=>(0,n._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),$=["disabled"],G={key:0,style:{color:"red"}};function J(e,t,s,i,a,l){const u=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>l.signUp&&l.signUp(...e)),["prevent"]))},[V,(0,n._)("div",q,[A,(0,n.wy)((0,n._)("input",{name:"text",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.userName=e),maxlength:"20"},null,512),[[o.nr,a.userName],[u]])]),(0,n._)("div",Z,[W,(0,n.wy)((0,n._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e)},null,512),[[o.nr,a.email]])]),(0,n._)("div",B,[H,(0,n.wy)((0,n._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e)},null,512),[[o.nr,a.password]])]),(0,n._)("button",{style:{margin:"0.5em",color:"#87ff7a"},class:"button-35",disabled:a.isSigningUp},(0,r.zw)(l.signUpButtonText),9,$),a.signUpError?((0,n.wg)(),(0,n.iD)("div",G,(0,r.zw)(a.signUpError),1)):(0,n.kq)("",!0)],32)}var K=s(4857),Q=s(2392);const R={mounted:e=>e.focus()};var X={emits:["loggedIn"],directives:{focus:R},data(){return{userName:"",email:"",password:"",isSigningUp:!1,signUpError:null}},computed:{signUpButtonText(){return this.isSigningUp?"Signing Up...":"Sign Up"},isFormValid(){return this.userName&&this.email&&this.password}},methods:{async signUp(){if(this.isFormValid&&""!==this.userName.trim()&&""!==this.email.trim()&&""!==this.password.trim()){this.isSigningUp=!0;try{await(0,K.Xb)(Q.I,this.email,this.password),await(0,K.ck)(Q.I.currentUser,{displayName:this.userName}),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/email-already-in-use":this.signUpError="Error: Email already in use.";break;default:this.signUpError=e.message;break}}finally{this.isSigningUp=!1}}}}},ee=s(3744);const te=(0,ee.Z)(X,[["render",J],["__scopeId","data-v-43847825"]]);var se=te;const ne=e=>((0,n.dD)("data-v-72937d8e"),e=e(),(0,n.Cn)(),e),re=ne((()=>(0,n._)("h2",{style:{padding:"0.5em"}},"Log in",-1))),oe={style:{display:"flex","flex-direction":"column"}},ie=ne((()=>(0,n._)("label",{for:"email",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Email:",-1))),ae={style:{display:"flex","flex-direction":"column"}},le=ne((()=>(0,n._)("label",{for:"password",style:{"align-self":"flex-start","padding-left":"0.25em"}},"Password:",-1))),ue=ne((()=>(0,n._)("button",{style:{"margin-top":"0.5em",color:"#87ff7a"},class:"button-35"},"Log in",-1))),ce={style:{"margin-top":"1em"}},de={style:{color:"red"}};function ge(e,t,s,i,a,l){const u=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>l.login&&l.login(...e)),["prevent"]))},[re,(0,n._)("div",oe,[ie,(0,n.wy)((0,n._)("input",{name:"email",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),autocomplete:"email"},null,512),[[o.nr,a.email],[u]])]),(0,n._)("div",ae,[le,(0,n.wy)((0,n._)("input",{name:"password",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e)},null,512),[[o.nr,a.password]])]),ue,(0,n._)("div",ce,[(0,n._)("span",de,(0,r.zw)(a.errorMessage),1)])],32)}const me={mounted:e=>e.focus()};var fe={emits:["loggedIn"],directives:{focus:me},data(){return{email:"",password:"",errorMessage:""}},methods:{async login(){try{await(0,K.e5)(Q.I,this.email,this.password),this.$emit("loggedIn",this.userName)}catch(e){switch(e.code){case"auth/wrong-password":this.errorMessage="Error: Invalid password.";break;case"auth/user-not-found":this.errorMessage="Error: User not found.";break;case"auth/invalid-email":this.errorMessage="Error: Invalid email.";break;default:this.errorMessage=e.message;break}}}}};const pe=(0,ee.Z)(fe,[["render",ge],["__scopeId","data-v-72937d8e"]]);var he=pe,ye=s(6100),be={components:{SignUpPage:se,LoginPage:he,FirstFooter:Y.Z},data(){return{isLoggedIn:!1,showLogin:!0,userName:this.displayName,name:"",message:"",messageLength:50,submissions:[],displayName:"",lastMessageSentTime:0,timeElapsed:0,errorMessage:""}},computed:{textStyle(){return{color:this.name.length>0?"#87ff7a":"#ff6b6b"}}},beforeUpdate(){Q.I.currentUser&&(this.displayName=Q.I.currentUser.displayName,this.userName=this.displayName)},watch:{name(e){e.length>=this.messageLength?(this.errorMessage="Subject cannot be longer than "+this.messageLength+" characters!",this.name=e.slice(0,this.messageLength)):0==e.length&&(this.textStyle.color="#ff6b6b")},isLoggedIn(){this.isLoggedIn&&this.$nextTick((()=>{this.$refs.subjectInput.focus()}))}},methods:{async createUser(){try{if(""==this.name)throw this.errorMessage="Please enter a subject!",new Error("Please enter a subject!");if(""==this.message)throw this.errorMessage="Please enter a message!",new Error("Please enter a message!");this.displayName=Q.I.currentUser,this.isLoggedIn?this.sendMessage():alert("You must be logged in to submit a message!")}catch(e){console.error("Error adding document!: ",e)}},async sendMessage(){const e=(new Date).getTime();if(console.log(e),this.timeElapsed=e-this.lastMessageSentTime,console.log(this.timeElapsed),this.timeElapsed<1e4)return console.log("Please wait at least 10 seconds before sending another message."),void alert("Please wait at least 10 seconds before sending another message.");console.log("message sent"),this.lastMessageSentTime=e;const t=(0,ye.hJ)(Q.Z,"submissions"),s={name:this.name,userName:this.userName,message:this.message,timestamp:(0,ye.Bt)()},n=await(0,ye.ET)(t,s);console.log("Document written with ID: ",n.id)},handleLogin(){this.isLoggedIn=!0,document.cookie="isLoggedIn=true; SameSite=Strict",localStorage.setItem("isLoggedIn","true"),document.cookie=`userName=${this.userName}; SameSite=Strict`,localStorage.setItem("userName",this.userName)},signOut(){try{(0,K.w7)(Q.I)}catch(e){console.error("Error signing out user: ",e)}},handleLogout(){this.signOut(),this.isLoggedIn=!1,document.cookie="isLoggedIn=false; SameSite=Strict",document.cookie="userName=; SameSite=Strict",localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userName")}},created(){const e=(0,ye.hJ)(Q.Z,"submissions");(0,ye.cf)(e,(e=>{const t=[];e.forEach((e=>{const s={id:e.id,...e.data()};s.timestamp&&t.push(s)})),t.sort(((e,t)=>e.timestamp.toMillis()-t.timestamp.toMillis())),this.submissions=t}));const t=localStorage.getItem("isLoggedIn");"true"===t&&(this.isLoggedIn=!0)}};const we=(0,ee.Z)(be,[["render",T],["__scopeId","data-v-d2ef53d2"]]);var ve=we}}]);
//# sourceMappingURL=811.801d68c9.js.map