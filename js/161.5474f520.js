"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[161],{1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),l=function(t){return function(e,n,l){var s,a=r(e),u=o(a),d=i(l,u);if(t&&n!=n){while(u>d)if(s=a[d++],s!=s)return!0}else for(;u>d;d++)if((t||d in a)&&a[d]===n)return t||d||0;return!t&&-1}};t.exports={includes:l(!0),indexOf:l(!1)}},3658:function(t,e,n){var r=n(9781),i=n(3157),o=TypeError,l=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(i(t)&&!l(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),l=n(3070);t.exports=function(t,e,n){for(var s=i(e),a=l.f,u=o.f,d=0;d<s.length;d++){var p=s[d];r(t,p)||n&&r(n,p)||a(t,p,u(e,p))}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),l=n(8052),s=n(3072),a=n(9920),u=n(4705);t.exports=function(t,e){var n,d,p,c,h,f,b=t.target,y=t.global,w=t.stat;if(d=y?r:w?r[b]||s(b,{}):(r[b]||{}).prototype,d)for(p in e){if(h=e[p],t.dontCallGetSet?(f=i(d,p),c=f&&f.value):c=d[p],n=u(y?p:b+(w?".":"#")+p,t.forced),!n&&void 0!==c){if(typeof h==typeof c)continue;a(h,c)}(t.sham||c&&c.sham)&&o(h,"sham",!0),l(d,p,h,t)}}},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),l=Object,s=r("".split);t.exports=i((function(){return!l("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?s(t,""):l(t)}:l},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,l=function(t,e){var n=a[s(t)];return n==d||n!=u&&(i(e)?r(e):!!e)},s=l.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=l.data={},u=l.NATIVE="N",d=l.POLYFILL="P";t.exports=l},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),l=n(9114),s=n(5656),a=n(4948),u=n(2597),d=n(4664),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=s(t),e=a(e),d)try{return p(t,e)}catch(n){}if(u(t,e))return l(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),l=n(1318).indexOf,s=n(3501),a=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,d=[];for(n in r)!i(s,n)&&i(r,n)&&a(d,n);while(e.length>u)i(r,n=e[u++])&&(~l(d,n)||a(d,n));return d}},5296:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),l=n(5181),s=n(9670),a=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=l.f;return n?a(e,n(t)):e}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7658:function(t,e,n){var r=n(2109),i=n(7908),o=n(6244),l=n(3658),s=n(7207),a=n(7293),u=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=u||!d();r({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var e=i(this),n=o(e),r=arguments.length;s(n+r);for(var a=0;a<r;a++)e[n]=arguments[a],n++;return l(e,n),n}})},7161:function(t,e,n){n.r(e),n.d(e,{default:function(){return rt}});var r=n(6252),i=n(3577),o=n(9963);const l=t=>((0,r.dD)("data-v-77bdd9f1"),t=t(),(0,r.Cn)(),t),s={style:{"background-color":"rgb(255, 255, 255)"}},a=l((()=>(0,r._)("h1",{style:{"padding-top":"1.5em",color:"#000"}}," Welcome to the cards page! German game Skat ",-1))),u=l((()=>(0,r._)("br",null,null,-1))),d=l((()=>(0,r._)("br",null,null,-1))),p=l((()=>(0,r._)("br",null,null,-1))),c=l((()=>(0,r._)("div",{class:"cards"},null,-1))),h=l((()=>(0,r._)("br",null,null,-1))),f=l((()=>(0,r._)("p",null," Initially the goal will be to play against the computer. ",-1))),b=l((()=>(0,r._)("br",null,null,-1))),y={key:0},w=l((()=>(0,r._)("b",null,"(Dealer) You:",-1))),g={key:1},v=l((()=>(0,r._)("b",null,"You:",-1))),k=l((()=>(0,r._)("br",null,null,-1))),m=l((()=>(0,r._)("br",null,null,-1))),_={key:2},B=l((()=>(0,r._)("b",null,"(Dealer) Player 2:",-1))),x={key:3},O=l((()=>(0,r._)("b",null,"Player 2:",-1))),D=l((()=>(0,r._)("br",null,null,-1))),C=l((()=>(0,r._)("br",null,null,-1))),P={key:4},M=l((()=>(0,r._)("b",null,"(Dealer) Player 3:",-1))),T={key:5},z=l((()=>(0,r._)("b",null,"Player 3:",-1))),A=l((()=>(0,r._)("br",null,null,-1))),S=l((()=>(0,r._)("br",null,null,-1))),U=l((()=>(0,r._)("b",null,"Skat cards:",-1))),I=l((()=>(0,r._)("br",null,null,-1))),j=l((()=>(0,r._)("br",null,null,-1))),Y=l((()=>(0,r._)("label",{for:"textBox"},[(0,r._)("b",null,"Make your bid:")],-1))),E=l((()=>(0,r._)("br",null,null,-1))),N=l((()=>(0,r._)("br",null,null,-1))),R={key:6},L=l((()=>(0,r._)("br",null,null,-1))),q=l((()=>(0,r._)("br",null,null,-1))),F=l((()=>(0,r._)("br",null,null,-1))),G=l((()=>(0,r._)("br",null,null,-1))),V=l((()=>(0,r._)("br",null,null,-1))),W=l((()=>(0,r._)("br",null,null,-1))),Z={key:7},K={key:8};function H(t,e,n,l,H,J){return(0,r.wg)(),(0,r.iD)("div",s,[a,u,(0,r.Uk)(" The cat says "+(0,i.zw)(H.cat)+", this project was started 20/11/2023. Working on the logic of how to make the opponents make decisions. The dealer is randomly selected. ",1),d,p,c,h,f,b,0===H.dealer?((0,r.wg)(),(0,r.iD)("div",y,[w,(0,r.Uk)(" "+(0,i.zw)(H.player1),1)])):((0,r.wg)(),(0,r.iD)("div",g,[v,(0,r.Uk)(" "+(0,i.zw)(H.player1),1)])),k,m,1===H.dealer?((0,r.wg)(),(0,r.iD)("div",_,[B,(0,r.Uk)(" "+(0,i.zw)(H.player1),1)])):((0,r.wg)(),(0,r.iD)("div",x,[O,(0,r.Uk)(" "+(0,i.zw)(H.player2),1)])),D,C,2===H.dealer?((0,r.wg)(),(0,r.iD)("div",P,[M,(0,r.Uk)(" "+(0,i.zw)(H.player3),1)])):((0,r.wg)(),(0,r.iD)("div",T,[z,(0,r.Uk)(" "+(0,i.zw)(H.player3),1)])),A,S,U,(0,r.Uk)(" "+(0,i.zw)(H.skat)+" ",1),I,j,Y,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>H.bid=t)},null,512),[[o.nr,H.bid]]),(0,r._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em"},onClick:e[1]||(e[1]=t=>J.placeBid())},(0,i.zw)(H.submitButtonText),1),E,N,H.validBid?((0,r.wg)(),(0,r.iD)("div",R,[(0,r.Uk)("You submitted a valid bid of: "),(0,r._)("b",null,(0,i.zw)(H.bid),1),L,q,(0,r.Uk)(" Player 2 bids: "),(0,r._)("b",null,(0,i.zw)(H.opponentBid),1),F,G,(0,r.Uk)(" Player 3 bids: "),(0,r._)("b",null,(0,i.zw)(H.opponentTwoBid),1),V,W])):(0,r.kq)("",!0),H.winningBid?((0,r.wg)(),(0,r.iD)("div",Z,"Your bid of "+(0,i.zw)(H.bid)+" wins!",1)):"pass"!==H.opponentBid||"pass"!==H.opponentTwoBid?((0,r.wg)(),(0,r.iD)("div",K,[(0,r.Uk)((0,i.zw)(H.biddingMessage)+" ",1),(0,r._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em"},onClick:e[2]||(e[2]=t=>{this.stopBid()})},"Stop bidding")])):(0,r.kq)("",!0)])}n(7658);function J(t,e,n,i,o,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{onClick:e[0]||(e[0]=e=>t.printResult())},"Click me"),(0,r._)("button",{onClick:e[1]||(e[1]=(...e)=>t.printResult&&t.printResult(...e))},"Add left Node"),(0,r._)("button",{onClick:e[2]||(e[2]=(...e)=>t.printResult&&t.printResult(...e))},"Add right Node")])}var Q={name:"NodeGraph",data(){return{nodeStack:[],currentValue:0}},methods:{}},X=n(3744);const $=(0,X.Z)(Q,[["render",J],["__scopeId","data-v-50ac4202"]]);var tt=$,et={name:"YourComponentName",components:tt,data(){return{cat:"meow",submitButtonText:"Submit this bid",biddingMessage:"You have been outbidded, do you want to enter a higher bid? or stop bidding?",firstCardDeck:[],shallowFirstDeckCopy:[],skat:[],player1:[],player2:[],player3:[],player1Pass:!1,player2Pass:!1,player3Pass:!1,dealer:0,bidsAllowed:[18,20,22,23,24,27,30,33,35,36,40,44,45,46,48,50,54,55,59,60],currentOpponentBids:[],bid:0,lastBid:-1,validBid:!1,opponentBid:"pass",opponentTwoBid:"pass",winningBid:!1}},methods:{createCards(){let t=["hearts","diamonds","spades","clubs"],e=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];for(let n=0;n<t.length;n++)for(let r=5;r<e.length;r++)this.firstCardDeck.push([t[n],e[r]])},shuffle(t){let e,n,r=t.length;while(0!==r)n=Math.floor(Math.random()*r),r-=1,e=t[r],t[r]=t[n],t[n]=e;return t},placeBid(){this.bidsAllowed.includes(parseInt(this.bid))&&this.bid>this.lastBid?(this.validBid=!0,this.lastBid=this.bid,this.firstOpponentBid()):this.bid<=this.lastBid?alert("You need to enter a higher valid bid, it can't be the same number, or lower than the opponents bid: "+this.bidsAllowed):alert("Please enter a valid bid, they are: "+this.bidsAllowed)},firstOpponentBid(){if(!0!==this.player2Pass)return void this.secondOpponentBid();let t=Math.floor(3*Math.random())+0;if(0===t)this.opponentBid="pass",this.secondOpponentBid();else{let t=this.bidsAllowed.indexOf(parseInt(this.bid)),e=t+1;this.opponentBid=this.bidsAllowed[e],this.currentOpponentBids.push(this.opponentBid),this.submitButtonText="Submit a new higher bid?",!0!==this.player3Pass&&this.secondOpponentBid()}},secondOpponentBid(){let t=Math.floor(3*Math.random())+0;if(1===t)this.opponentTwoBid="pass",this.player2Pass=!0,"pass"==this.opponentBid&"pass"==this.opponentTwoBid&&(this.winningBid=!0);else{let t=this.bidsAllowed.indexOf(parseInt(this.bid))+1;console.log(t);let e=t+1;this.opponentTwoBid=this.bidsAllowed[e],this.currentOpponentBids.push(this.opponentBid),this.submitButtonText="Submit a new higher bid?"}(this.opponentBid>this.bid||this.opponentTwoBid>this.bid)&&(this.winningBid=!1)},stopBid(){this.biddingMessage="You have decided to stop bidding!"}},computed:{updateCards(){return this.firstCardDeck}},mounted(){this.createCards(),this.shuffle(this.firstCardDeck),this.shallowFirstDeckCopy=this.firstCardDeck,this.dealer=Math.floor(3*Math.random())+0,this.player1=this.firstCardDeck.splice(0,10),this.player2=this.firstCardDeck.splice(0,10),this.player3=this.firstCardDeck.splice(0,10),this.skat=this.firstCardDeck.splice(0,2)}};const nt=(0,X.Z)(et,[["render",H],["__scopeId","data-v-77bdd9f1"]]);var rt=nt}}]);
//# sourceMappingURL=161.5474f520.js.map