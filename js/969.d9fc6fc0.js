(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[969],{1318:function(s,t,e){"use strict";var i=e(5656),n=e(1400),o=e(6244),r=function(s){return function(t,e,r){var a,c=i(t),u=o(c),l=n(r,u);if(s&&e!=e){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((s||l in c)&&c[l]===e)return s||l||0;return!s&&-1}};s.exports={includes:r(!0),indexOf:r(!1)}},3658:function(s,t,e){"use strict";var i=e(9781),n=e(3157),o=TypeError,r=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(s){return s instanceof TypeError}}();s.exports=a?function(s,t){if(n(s)&&!r(s,"length").writable)throw o("Cannot set read only .length");return s.length=t}:function(s,t){return s.length=t}},9920:function(s,t,e){"use strict";var i=e(2597),n=e(3887),o=e(1236),r=e(3070);s.exports=function(s,t,e){for(var a=n(t),c=r.f,u=o.f,l=0;l<a.length;l++){var d=a[l];i(s,d)||e&&i(e,d)||c(s,d,u(t,d))}}},7207:function(s){"use strict";var t=TypeError,e=9007199254740991;s.exports=function(s){if(s>e)throw t("Maximum allowed index exceeded");return s}},748:function(s){"use strict";s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(s,t,e){"use strict";var i=e(7854),n=e(1236).f,o=e(8880),r=e(8052),a=e(3072),c=e(9920),u=e(4705);s.exports=function(s,t){var e,l,d,f,p,g,_=s.target,h=s.global,m=s.stat;if(l=h?i:m?i[_]||a(_,{}):(i[_]||{}).prototype,l)for(d in t){if(p=t[d],s.dontCallGetSet?(g=n(l,d),f=g&&g.value):f=l[d],e=u(h?d:_+(m?".":"#")+d,s.forced),!e&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(s.sham||f&&f.sham)&&o(p,"sham",!0),r(l,d,p,s)}}},8361:function(s,t,e){"use strict";var i=e(1702),n=e(7293),o=e(4326),r=Object,a=i("".split);s.exports=n((function(){return!r("z").propertyIsEnumerable(0)}))?function(s){return"String"==o(s)?a(s,""):r(s)}:r},3157:function(s,t,e){"use strict";var i=e(4326);s.exports=Array.isArray||function(s){return"Array"==i(s)}},4705:function(s,t,e){"use strict";var i=e(7293),n=e(614),o=/#|\.prototype\./,r=function(s,t){var e=c[a(s)];return e==l||e!=u&&(n(t)?i(t):!!t)},a=r.normalize=function(s){return String(s).replace(o,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",l=r.POLYFILL="P";s.exports=r},6244:function(s,t,e){"use strict";var i=e(7466);s.exports=function(s){return i(s.length)}},4758:function(s){"use strict";var t=Math.ceil,e=Math.floor;s.exports=Math.trunc||function(s){var i=+s;return(i>0?e:t)(i)}},1236:function(s,t,e){"use strict";var i=e(9781),n=e(6916),o=e(5296),r=e(9114),a=e(5656),c=e(4948),u=e(2597),l=e(4664),d=Object.getOwnPropertyDescriptor;t.f=i?d:function(s,t){if(s=a(s),t=c(t),l)try{return d(s,t)}catch(e){}if(u(s,t))return r(!n(o.f,s,t),s[t])}},8006:function(s,t,e){"use strict";var i=e(6324),n=e(748),o=n.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(s){return i(s,o)}},5181:function(s,t){"use strict";t.f=Object.getOwnPropertySymbols},6324:function(s,t,e){"use strict";var i=e(1702),n=e(2597),o=e(5656),r=e(1318).indexOf,a=e(3501),c=i([].push);s.exports=function(s,t){var e,i=o(s),u=0,l=[];for(e in i)!n(a,e)&&n(i,e)&&c(l,e);while(t.length>u)n(i,e=t[u++])&&(~r(l,e)||c(l,e));return l}},5296:function(s,t){"use strict";var e={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,n=i&&!e.call({1:2},1);t.f=n?function(s){var t=i(this,s);return!!t&&t.enumerable}:e},3887:function(s,t,e){"use strict";var i=e(5005),n=e(1702),o=e(8006),r=e(5181),a=e(9670),c=n([].concat);s.exports=i("Reflect","ownKeys")||function(s){var t=o.f(a(s)),e=r.f;return e?c(t,e(s)):t}},1400:function(s,t,e){"use strict";var i=e(9303),n=Math.max,o=Math.min;s.exports=function(s,t){var e=i(s);return e<0?n(e+t,0):o(e,t)}},5656:function(s,t,e){"use strict";var i=e(8361),n=e(4488);s.exports=function(s){return i(n(s))}},9303:function(s,t,e){"use strict";var i=e(4758);s.exports=function(s){var t=+s;return t!==t||0===t?0:i(t)}},7466:function(s,t,e){"use strict";var i=e(9303),n=Math.min;s.exports=function(s){return s>0?n(i(s),9007199254740991):0}},7658:function(s,t,e){"use strict";var i=e(2109),n=e(7908),o=e(6244),r=e(3658),a=e(7207),c=e(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(s){return s instanceof TypeError}},d=u||!l();i({target:"Array",proto:!0,arity:1,forced:d},{push:function(s){var t=n(this),e=o(t),i=arguments.length;a(e+i);for(var c=0;c<i;c++)t[e]=arguments[c],e++;return r(t,e),e}})},7672:function(s,t,e){"use strict";e.d(t,{Z:function(){return p}});var i=e(6252),n=e(3577);const o={class:"footer"},r=(0,i._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),a=(0,i._)("br",null,null,-1),c=(0,i._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(s,t,e,u,l,d){const f=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("footer",o,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(f,{class:"footer-links",to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About")])),_:1}),(0,i.Uk)("    "),r,(0,i.Uk)("    conradswebsite.com © "+(0,n.zw)(d.getCurrentYear),1),a,(0,i.Uk)(" unless mentioned otherwise, licensing is "),c,(0,i.Uk)(". ")])])])}var l={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},d=e(3744);const f=(0,d.Z)(l,[["render",u]]);var p=f},6537:function(s,t,e){"use strict";e.r(t),e.d(t,{default:function(){return ys}});var i=e(6252),n=e(3577),o=e(9963);const r=s=>((0,i.dD)("data-v-43c312bb"),s=s(),(0,i.Cn)(),s),a={class:"body"},c=r((()=>(0,i._)("h1",{style:{"padding-top":"1.5em",color:"#6b490b","font-size":"3em","font-family":"'Helvetica'"}},[(0,i._)("span",{style:{color:"#fff"}},"Welcome"),(0,i.Uk)(" to the card game page! Current game is Skat! ")],-1))),u=r((()=>(0,i._)("br",null,null,-1))),l=r((()=>(0,i._)("br",null,null,-1))),d={style:{"background-color":"rgba(0,0,0,0.5)",padding:"0.5em","padding-top":"1.5em","max-width":"auto"}},f={style:{color:"#fff"},class:"paragraph-text"},p=r((()=>(0,i._)("b",null,"20/11/2023",-1))),g=r((()=>(0,i._)("p",{style:{color:"#fff"},class:"paragraph-text"}," Working on the logic of how to make the opponents make decisions (This is the hard part). The dealer is randomly selected. The logic to make this work takes some thinking, also because I don't even know the specific rules to play Skat and all the variations of it I need to look these up and verify I'm making this correctly. Making things look beautiful will be part of the process. Once a winning bid is placed the user can't input anymore into the bid box. Initially the goal will be to play against the computer. ",-1))),_=r((()=>(0,i._)("br",null,null,-1))),h=r((()=>(0,i._)("br",null,null,-1))),m=r((()=>(0,i._)("br",null,null,-1))),b=r((()=>(0,i._)("br",null,null,-1))),v={class:"input-container"},y=r((()=>(0,i._)("label",{style:{"margin-right":"0.3em"},for:"inputField"},[(0,i._)("b",null,"Make your bid:")],-1))),k=["disabled"],w=r((()=>(0,i._)("br",null,null,-1))),x=r((()=>(0,i._)("br",null,null,-1))),C={key:0,style:{color:"blue"}},O=r((()=>(0,i._)("br",null,null,-1))),B=r((()=>(0,i._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em","margin-bottom":"0.5em"}},"Pass, don't take cards",-1))),D={key:1},j=r((()=>(0,i._)("br",null,null,-1))),P=r((()=>(0,i._)("br",null,null,-1))),S=r((()=>(0,i._)("br",null,null,-1))),T=r((()=>(0,i._)("br",null,null,-1))),M=r((()=>(0,i._)("br",null,null,-1))),I=r((()=>(0,i._)("br",null,null,-1))),U={key:2},q={key:3},z={key:4},A=r((()=>(0,i._)("b",null,"(Dealer) Your cards:",-1))),Y=[A],F={key:5},L=r((()=>(0,i._)("b",null,"Your cards:",-1))),E=[L],N=r((()=>(0,i._)("br",null,null,-1))),V={class:"button-container"},$={class:"cards"},K={class:"card-container"},W=["src"],Z={class:"interactions"},G=["src"],H={class:"card-info",style:{color:"rgb(255, 255, 255)","background-color":"rgba(0, 0, 0, 0.6)"}},J={key:0},Q=r((()=>(0,i._)("b",null,"(Dealer) Player 2",-1))),R={key:1},X=r((()=>(0,i._)("b",null,"Player 2",-1))),ss=r((()=>(0,i._)("br",null,null,-1))),ts={key:2},es=r((()=>(0,i._)("b",null,"(Dealer) Player 3",-1))),is={key:3},ns=r((()=>(0,i._)("b",null,"Player 3",-1))),os=r((()=>(0,i._)("br",null,null,-1))),rs=r((()=>(0,i._)("b",null,"Skat cards:",-1))),as={class:"footer-space-vertical"};function cs(s,t,e,r,A,L){const cs=(0,i.up)("FirstFooter");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",null,[c,u,l,(0,i._)("div",d,[(0,i._)("p",f,[(0,i.Uk)(" The cat says "+(0,n.zw)(A.cat)+", this project was started ",1),p,(0,i.Uk)("... This is using Vue.js, JavaScript, TypeScript, object oriented programming, and multiple classes to create players in a game of Skat. ")]),g])]),_,h,m,b,(0,i._)("div",v,[(0,i._)("div",null,[y,(0,i.wy)((0,i._)("input",{class:"custom-input",type:"text",id:"inputField","onUpdate:modelValue":t[0]||(t[0]=s=>A.bid=s),disabled:A.winningBid},null,8,k),[[o.nr,A.bid]]),(0,i._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"},onClick:t[1]||(t[1]=s=>L.placeBid())},(0,n.zw)(A.submitButtonText),1),(0,i._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"},onClick:t[2]||(t[2]=s=>L.passBid())},"Pass")]),w,x,A.winningBid?((0,i.wg)(),(0,i.iD)("div",C,[(0,i.Uk)((0,n.zw)(A.informationMessage)+" ",1),O,(0,i._)("button",{onClick:t[3]||(t[3]=s=>{L.takeCardsOrPass()}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em","margin-bottom":"0.5em"}},"Take cards"),B])):(0,i.kq)("",!0),A.validBid?((0,i.wg)(),(0,i.iD)("div",D,[(0,i.Uk)("You submitted a valid bid of: "),(0,i._)("b",null,(0,n.zw)(A.bid),1),j,P,(0,i.Uk)(" Player 2 bids: "),(0,i._)("b",null,(0,n.zw)(A.opponentBid),1),S,T,(0,i.Uk)(" Player 3 bids: "),(0,i._)("b",null,(0,n.zw)(A.opponentTwoBid),1),M,I])):(0,i.kq)("",!0),A.winningBid?((0,i.wg)(),(0,i.iD)("div",U,"Your bid of "+(0,n.zw)(A.bid)+" wins!",1)):"pass"!==A.opponentBid||"pass"!==A.opponentTwoBid?((0,i.wg)(),(0,i.iD)("div",q,[(0,i.Uk)((0,n.zw)(A.biddingMessage)+" ",1),(0,i._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em"},onClick:t[4]||(t[4]=s=>{this.stopBid()})},"Stop bidding")])):(0,i.kq)("",!0),0===A.dealer?((0,i.wg)(),(0,i.iD)("div",z,Y)):((0,i.wg)(),(0,i.iD)("div",F,E)),N,(0,i._)("div",null,[(0,i._)("b",null,(0,n.zw)(A.player1.cards.length)+" cards are in your hand.",1)]),(0,i._)("div",V,[(0,i._)("button",{onClick:t[5]||(t[5]=s=>{L.increaseMarginLeft("+")}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"+ card space"),(0,i._)("button",{onClick:t[6]||(t[6]=s=>{L.increaseMarginLeft("-")}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"- card space")]),(0,i._)("button",{onClick:t[7]||(t[7]=s=>{L.dealCards()}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"Deal new cards")]),(0,i._)("div",$,[(0,i._)("div",K,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(A.imagesOfCardsInhand,((s,t)=>((0,i.wg)(),(0,i.iD)("div",{key:s,class:"card-item",style:(0,n.j5)({"margin-left":A.marginLeft,...L.cardStyles[t]})},[(0,i._)("img",{src:s,alt:"SVG Image"},null,8,W)],4)))),128))])]),(0,i._)("div",Z,[(0,i._)("img",{class:"saloon-image",src:A.saloonImage,alt:"Saloon Image"},null,8,G),(0,i._)("div",H,[1===A.dealer?((0,i.wg)(),(0,i.iD)("div",J,[Q,(0,i.Uk)(" is holding "+(0,n.zw)(A.player2.cards.length)+" cards.",1)])):((0,i.wg)(),(0,i.iD)("div",R,[X,(0,i.Uk)(" is holding "+(0,n.zw)(A.player2.cards.length)+" cards.",1)])),ss,2===A.dealer?((0,i.wg)(),(0,i.iD)("div",ts,[es,(0,i.Uk)(" is holding "+(0,n.zw)(A.player2.cards.length)+" cards.",1)])):((0,i.wg)(),(0,i.iD)("div",is,[ns,(0,i.Uk)(" is holding "+(0,n.zw)(A.player3.cards.length)+" cards.",1)])),os,rs,(0,i.Uk)(" Unbekannt! Unknown! "+(0,n.zw)(A.skat.length)+" cards ",1)])]),(0,i._)("div",as,[(0,i.Wm)(cs)])])}e(7658);function us(s){return us="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},us(s)}function ls(s,t){if("object"!==us(s)||null===s)return s;var e=s[Symbol.toPrimitive];if(void 0!==e){var i=e.call(s,t||"default");if("object"!==us(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(s)}function ds(s){var t=ls(s,"string");return"symbol"===us(t)?t:String(t)}function fs(s,t,e){return t=ds(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}class ps{constructor(s,t,e){fs(this,"name",void 0),fs(this,"cards",void 0),fs(this,"card_values",void 0),this.name=s,this.cards=t,this.card_values=e}displayInfo(){console.log(`Player: ${this.name}, Cards: ${this.cards}, Values: ${this.card_values}`)}}class gs{constructor(s){fs(this,"theDeckOfCards",void 0),this.theDeckOfCards=s}createCards(){const s=["hearts","diamonds","spades","clubs"],t=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];for(let e=0;e<s.length;e++)for(let i=5;i<t.length;i++)this.theDeckOfCards.push([t[i],s[e]])}shuffle(){const s=this.theDeckOfCards;let t,e,i=s.length;while(0!==i)e=Math.floor(Math.random()*i),i-=1,t=s[i],s[i]=s[e],s[e]=t;return s}}var _s=e.p+"img/Saloon.1f2ec9e5.jpg",hs=e(7672),ms={name:"YourComponentName",components:{FirstFooter:hs.Z},data(){return{marginLeft:"0.5em",saloonImage:_s,svgFiles:[],imagesOfCardsInhand:[],players:[],cat:"meow",submitButtonText:"Submit this bid",biddingMessage:"You have been outbidded, do you want to enter a higher bid? or stop bidding?",informationMessage:"You won the bid! Take Skat cards and add them to your hand? or pass?",firstCardDeck:[],skat:[],player1:{cards:[]},player2:{cards:[]},player3:{cards:[]},player1Cards:[],player2Cards:[],player3Cards:[],player1Pass:!1,player2Pass:!1,player3Pass:!1,dealer:0,bidsAllowed:[18,20,22,23,24,27,30,33,35,36,40,44,45,46,48,50,54,55,59,60],currentOpponentBids:[],bid:0,lastBid:-1,validBid:!1,opponentBid:"pass",opponentTwoBid:"pass",winningBid:!1,pass:!1,cardValues:new Map([["J",2],["A",11],["10",10],["K",4],["Q",3],["9",0],["8",0],["7",0]])}},computed:{cardStyles(){return this.imagesOfCardsInhand.map(((s,t)=>({marginTop:t*(Math.random()-.1)*.1+"em",transform:`rotate(${3*(t-4)}deg)`})))}},methods:{increaseMarginLeft(s){const t=parseFloat(this.marginLeft);if("+"===s){const s=t+.5;this.marginLeft=`${s}em`}else{const s=t-.5;this.marginLeft=`${s}em`}},updateCards(){this.imagesOfCardsInhand=[],this.svgFiles.forEach((s=>{const t=s.slice(0,-13);this.player1.cards.forEach((e=>{t.includes(e[0])&&t.includes(e[1])&&!t.includes("2")&&(console.log(s),this.imagesOfCardsInhand.push(s))}))}))},passBid(){this.player1Pass=!0;let s=this.currentOpponentBids.includes(60);while("pass"!==this.opponentBid||"pass"!==this.opponentTwoBid||s)this.firstOpponentBid()},placeBid(){this.bidsAllowed.includes(parseInt(this.bid))&&this.bid>this.lastBid?(this.validBid=!0,this.lastBid=this.bid,this.firstOpponentBid()):this.bid<=this.lastBid?alert("You need to enter a higher valid bid, it can't be the same number, or lower than the opponents bid: "+this.bidsAllowed):alert("Please enter a valid bid, they are: "+this.bidsAllowed)},takeCardsOrPass(){0!==this.skat.length&&(this.informationMessage="You took the SKAT cards! They are the ["+this.skat[0][0]+" of "+this.skat[0][1]+"] and the ["+this.skat[1][0]+" of "+this.skat[1][1]+"]",this.player1.cards=this.player1.cards.concat(this.skat),this.updateCards(),this.skat=[])},firstOpponentBid(){if(!0!==this.player2Pass)return void this.secondOpponentBid();let s=Math.floor(3*Math.random())+0;if(0===s)this.opponentBid="pass",this.secondOpponentBid();else{let s=this.bidsAllowed.indexOf(parseInt(this.bid)),t=s+1;this.opponentBid=this.bidsAllowed[t],this.currentOpponentBids.push(["p2",this.opponentBid]),this.submitButtonText="Submit a new higher bid?",!0!==this.player3Pass&&this.secondOpponentBid()}},secondOpponentBid(){let s=Math.floor(3*Math.random())+0;if(1===s)this.opponentTwoBid="pass",this.player3Pass=!0,"pass"===this.opponentBid&"pass"===this.opponentTwoBid&&(this.winningBid=!0);else{let s=this.bidsAllowed.indexOf(parseInt(this.bid))+1,t=s+1;this.opponentTwoBid=this.bidsAllowed[t],this.currentOpponentBids.push(["p3",this.opponentTwoBid]),this.submitButtonText="Submit a new higher bid?"}this.opponentBid>this.bid||(this.opponentTwoBid,this.bid)},stopBid(){this.biddingMessage="You have decided to stop bidding!"},dealCards(){this.skat=[],this.DeckOfCards=new gs([]),this.DeckOfCards.createCards(),this.DeckOfCards.shuffle(),this.dealer=Math.floor(3*Math.random())+0,this.player1=new ps("Conrad",this.player1Cards,0),this.player2=new ps("Alice",this.player2Cards,0),this.player3=new ps("Bob",this.player3Cards,0),this.players.push(this.player1,this.player2,this.player3),this.player1.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.player2.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.player3.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.skat=this.DeckOfCards.theDeckOfCards.splice(0,2),this.updateCards()}},mounted(){const s=e(150);this.svgFiles=s.keys().map(s),this.dealCards(),this.player1.displayInfo(),this.updateCards()}},bs=e(3744);const vs=(0,bs.Z)(ms,[["render",cs],["__scopeId","data-v-43c312bb"]]);var ys=vs},150:function(s,t,e){var i={"./10_of_clubs.svg":6729,"./10_of_diamonds.svg":8160,"./10_of_hearts.svg":9220,"./10_of_spades.svg":3317,"./2_of_clubs.svg":6770,"./2_of_diamonds.svg":8913,"./2_of_hearts.svg":505,"./2_of_spades.svg":8508,"./3_of_clubs.svg":7600,"./3_of_diamonds.svg":1896,"./3_of_hearts.svg":8369,"./3_of_spades.svg":4933,"./4_of_clubs.svg":7642,"./4_of_diamonds.svg":6116,"./4_of_hearts.svg":5706,"./4_of_spades.svg":4159,"./5_of_clubs.svg":5973,"./5_of_diamonds.svg":5597,"./5_of_hearts.svg":1135,"./5_of_spades.svg":9602,"./6_of_clubs.svg":3810,"./6_of_diamonds.svg":8243,"./6_of_hearts.svg":790,"./6_of_spades.svg":4221,"./7_of_clubs.svg":2909,"./7_of_diamonds.svg":2419,"./7_of_hearts.svg":7122,"./7_of_spades.svg":2007,"./8_of_clubs.svg":6349,"./8_of_diamonds.svg":6542,"./8_of_hearts.svg":2549,"./8_of_spades.svg":3594,"./9_of_clubs.svg":9916,"./9_of_diamonds.svg":3982,"./9_of_hearts.svg":9352,"./9_of_spades.svg":3571,"./ace_of_clubs.svg":4912,"./ace_of_diamonds.svg":549,"./ace_of_hearts.svg":1944,"./ace_of_spades.svg":7764,"./ace_of_spades2.svg":1764,"./black_joker.svg":579,"./jack_of_clubs.svg":9643,"./jack_of_clubs2.svg":8609,"./jack_of_diamonds.svg":1049,"./jack_of_diamonds2.svg":9432,"./jack_of_hearts.svg":3763,"./jack_of_hearts2.svg":9802,"./jack_of_spades.svg":6754,"./jack_of_spades2.svg":6291,"./king_of_clubs.svg":7056,"./king_of_clubs2.svg":417,"./king_of_diamonds.svg":2820,"./king_of_diamonds2.svg":6366,"./king_of_hearts.svg":7602,"./king_of_hearts2.svg":4721,"./king_of_spades.svg":2016,"./king_of_spades2.svg":171,"./queen_of_clubs.svg":592,"./queen_of_clubs2.svg":1681,"./queen_of_diamonds.svg":4087,"./queen_of_diamonds2.svg":6358,"./queen_of_hearts.svg":2101,"./queen_of_hearts2.svg":5289,"./queen_of_spades.svg":332,"./queen_of_spades2.svg":1397,"./red_joker.svg":999};function n(s){var t=o(s);return e(t)}function o(s){if(!e.o(i,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return i[s]}n.keys=function(){return Object.keys(i)},n.resolve=o,s.exports=n,n.id=150},6729:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_clubs.be13dd46.svg"},8160:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_diamonds.485b49ca.svg"},9220:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_hearts.59768fe5.svg"},3317:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_spades.f653b772.svg"},6770:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_clubs.553685ef.svg"},8913:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_diamonds.86de4ec3.svg"},505:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_hearts.8a31ec38.svg"},8508:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_spades.1f70f97d.svg"},7600:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_clubs.2e4985d0.svg"},1896:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_diamonds.e6ddd285.svg"},8369:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_hearts.c1fc5245.svg"},4933:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_spades.eb37c109.svg"},7642:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_clubs.92c6ffe2.svg"},6116:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_diamonds.e0a830f3.svg"},5706:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_hearts.d7144276.svg"},4159:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_spades.883cc59a.svg"},5973:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_clubs.626aba2b.svg"},5597:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_diamonds.97ccc670.svg"},1135:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_hearts.064ba1e8.svg"},9602:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_spades.bfe723eb.svg"},3810:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_clubs.333de8c8.svg"},8243:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_diamonds.937ad31d.svg"},790:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_hearts.56677356.svg"},4221:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_spades.2b7a1d05.svg"},2909:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_clubs.23ea96f3.svg"},2419:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_diamonds.52bec6ce.svg"},7122:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_hearts.bbb4293b.svg"},2007:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_spades.c4850e7c.svg"},6349:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_clubs.15be9f0b.svg"},6542:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_diamonds.1b01fbcc.svg"},2549:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_hearts.3a8e1e59.svg"},3594:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_spades.0c6f2494.svg"},9916:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_clubs.475f6dae.svg"},3982:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_diamonds.1a3205e1.svg"},9352:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_hearts.790d945d.svg"},3571:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_spades.eaecf3ee.svg"},4912:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_clubs.f1cb0dd3.svg"},549:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_diamonds.9cfaab82.svg"},1944:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_hearts.d875eb4b.svg"},7764:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_spades.462aa32e.svg"},1764:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_spades2.d6d5f927.svg"},579:function(s,t,e){"use strict";s.exports=e.p+"img/black_joker.bb9b4f46.svg"},9643:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_clubs.aa8f8526.svg"},8609:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_clubs2.f0543a49.svg"},1049:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_diamonds.2766ca31.svg"},9432:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_diamonds2.b6e9e33c.svg"},3763:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_hearts.7c7e27f9.svg"},9802:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_hearts2.57533a78.svg"},6754:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_spades.5989636d.svg"},6291:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_spades2.4ea68a1c.svg"},7056:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_clubs.4cbb9902.svg"},417:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_clubs2.a3d048df.svg"},2820:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_diamonds.b20af9d1.svg"},6366:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_diamonds2.d0093b34.svg"},7602:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_hearts.515d454b.svg"},4721:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_hearts2.d20793f2.svg"},2016:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_spades.eb2381a3.svg"},171:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_spades2.8ae28cf8.svg"},592:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_clubs.627cefa4.svg"},1681:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_clubs2.06ffb3c4.svg"},4087:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_diamonds.a5c9e359.svg"},6358:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_diamonds2.72d4294f.svg"},2101:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_hearts.be3acb9e.svg"},5289:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_hearts2.6655a001.svg"},332:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_spades.a6854bba.svg"},1397:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_spades2.8672dd55.svg"},999:function(s,t,e){"use strict";s.exports=e.p+"img/red_joker.f4262f94.svg"}}]);
//# sourceMappingURL=969.d9fc6fc0.js.map