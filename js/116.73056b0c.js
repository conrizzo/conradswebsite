(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[116],{1318:function(s,t,e){"use strict";var i=e(5656),r=e(1400),n=e(6244),a=function(s){return function(t,e,a){var o,c=i(t),u=n(c),d=r(a,u);if(s&&e!=e){while(u>d)if(o=c[d++],o!=o)return!0}else for(;u>d;d++)if((s||d in c)&&c[d]===e)return s||d||0;return!s&&-1}};s.exports={includes:a(!0),indexOf:a(!1)}},3658:function(s,t,e){"use strict";var i=e(9781),r=e(3157),n=TypeError,a=Object.getOwnPropertyDescriptor,o=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(s){return s instanceof TypeError}}();s.exports=o?function(s,t){if(r(s)&&!a(s,"length").writable)throw n("Cannot set read only .length");return s.length=t}:function(s,t){return s.length=t}},9920:function(s,t,e){"use strict";var i=e(2597),r=e(3887),n=e(1236),a=e(3070);s.exports=function(s,t,e){for(var o=r(t),c=a.f,u=n.f,d=0;d<o.length;d++){var l=o[d];i(s,l)||e&&i(e,l)||c(s,l,u(t,l))}}},7207:function(s){"use strict";var t=TypeError,e=9007199254740991;s.exports=function(s){if(s>e)throw t("Maximum allowed index exceeded");return s}},748:function(s){"use strict";s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(s,t,e){"use strict";var i=e(7854),r=e(1236).f,n=e(8880),a=e(8052),o=e(3072),c=e(9920),u=e(4705);s.exports=function(s,t){var e,d,l,f,p,g,_=s.target,h=s.global,m=s.stat;if(d=h?i:m?i[_]||o(_,{}):(i[_]||{}).prototype,d)for(l in t){if(p=t[l],s.dontCallGetSet?(g=r(d,l),f=g&&g.value):f=d[l],e=u(h?l:_+(m?".":"#")+l,s.forced),!e&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(s.sham||f&&f.sham)&&n(p,"sham",!0),a(d,l,p,s)}}},8361:function(s,t,e){"use strict";var i=e(1702),r=e(7293),n=e(4326),a=Object,o=i("".split);s.exports=r((function(){return!a("z").propertyIsEnumerable(0)}))?function(s){return"String"==n(s)?o(s,""):a(s)}:a},3157:function(s,t,e){"use strict";var i=e(4326);s.exports=Array.isArray||function(s){return"Array"==i(s)}},4705:function(s,t,e){"use strict";var i=e(7293),r=e(614),n=/#|\.prototype\./,a=function(s,t){var e=c[o(s)];return e==d||e!=u&&(r(t)?i(t):!!t)},o=a.normalize=function(s){return String(s).replace(n,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",d=a.POLYFILL="P";s.exports=a},6244:function(s,t,e){"use strict";var i=e(7466);s.exports=function(s){return i(s.length)}},4758:function(s){"use strict";var t=Math.ceil,e=Math.floor;s.exports=Math.trunc||function(s){var i=+s;return(i>0?e:t)(i)}},1236:function(s,t,e){"use strict";var i=e(9781),r=e(6916),n=e(5296),a=e(9114),o=e(5656),c=e(4948),u=e(2597),d=e(4664),l=Object.getOwnPropertyDescriptor;t.f=i?l:function(s,t){if(s=o(s),t=c(t),d)try{return l(s,t)}catch(e){}if(u(s,t))return a(!r(n.f,s,t),s[t])}},8006:function(s,t,e){"use strict";var i=e(6324),r=e(748),n=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(s){return i(s,n)}},5181:function(s,t){"use strict";t.f=Object.getOwnPropertySymbols},6324:function(s,t,e){"use strict";var i=e(1702),r=e(2597),n=e(5656),a=e(1318).indexOf,o=e(3501),c=i([].push);s.exports=function(s,t){var e,i=n(s),u=0,d=[];for(e in i)!r(o,e)&&r(i,e)&&c(d,e);while(t.length>u)r(i,e=t[u++])&&(~a(d,e)||c(d,e));return d}},5296:function(s,t){"use strict";var e={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!e.call({1:2},1);t.f=r?function(s){var t=i(this,s);return!!t&&t.enumerable}:e},3887:function(s,t,e){"use strict";var i=e(5005),r=e(1702),n=e(8006),a=e(5181),o=e(9670),c=r([].concat);s.exports=i("Reflect","ownKeys")||function(s){var t=n.f(o(s)),e=a.f;return e?c(t,e(s)):t}},1400:function(s,t,e){"use strict";var i=e(9303),r=Math.max,n=Math.min;s.exports=function(s,t){var e=i(s);return e<0?r(e+t,0):n(e,t)}},5656:function(s,t,e){"use strict";var i=e(8361),r=e(4488);s.exports=function(s){return i(r(s))}},9303:function(s,t,e){"use strict";var i=e(4758);s.exports=function(s){var t=+s;return t!==t||0===t?0:i(t)}},7466:function(s,t,e){"use strict";var i=e(9303),r=Math.min;s.exports=function(s){return s>0?r(i(s),9007199254740991):0}},7658:function(s,t,e){"use strict";var i=e(2109),r=e(7908),n=e(6244),a=e(3658),o=e(7207),c=e(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(s){return s instanceof TypeError}},l=u||!d();i({target:"Array",proto:!0,arity:1,forced:l},{push:function(s){var t=r(this),e=n(t),i=arguments.length;o(e+i);for(var c=0;c<i;c++)t[e]=arguments[c],e++;return a(t,e),e}})},5446:function(s,t,e){"use strict";e.r(t),e.d(t,{default:function(){return gs}});var i=e(6252),r=e(9963),n=e(3577);const a=s=>((0,i.dD)("data-v-7f6f3118"),s=s(),(0,i.Cn)(),s),o={id:"body"},c=(0,i.uE)('<div data-v-7f6f3118><h1 class="title" data-v-7f6f3118>Skat</h1><br data-v-7f6f3118><div style="background-color:rgba(0,0,0,0.5);padding:0.5em;padding-top:1.5em;max-width:auto;" data-v-7f6f3118><p style="color:#fff;" class="paragraph-text" data-v-7f6f3118>This project was started <b data-v-7f6f3118>20/11/2023</b>... <br data-v-7f6f3118><span style="margin-left:1em;display:inline-block;" data-v-7f6f3118>Made with Vue.js, JavaScript, TypeScript and Object-oriented programming</span><br data-v-7f6f3118><span style="margin-left:2em;display:inline-block;" data-v-7f6f3118>Will be a <a class="text-links" href="https://en.wikipedia.org/wiki/Skat_(card_game)" data-v-7f6f3118>Skat</a> game when finished?</span></p><p style="color:#fff;" class="paragraph-text" data-v-7f6f3118></p></div></div><br data-v-7f6f3118><br data-v-7f6f3118><br data-v-7f6f3118><br data-v-7f6f3118>',5),u={class:"input-container"},d=a((()=>(0,i._)("label",{style:{"margin-right":"0.3em"},for:"inputField"},[(0,i._)("b",null,"Make your bid:")],-1))),l=["disabled"],f=a((()=>(0,i._)("br",null,null,-1))),p=a((()=>(0,i._)("br",null,null,-1))),g={key:0,style:{color:"#ffffff","background-color":"rgb(198, 111, 58)","border-radius":"1em","padding-top":"0.5em","margin-bottom":"0.5em"}},_=a((()=>(0,i._)("br",null,null,-1))),h=a((()=>(0,i._)("button",{type:"button",class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em","margin-bottom":"0.5em"}},"Pass, don't take cards",-1))),m={key:1},v=a((()=>(0,i._)("br",null,null,-1))),b=a((()=>(0,i._)("br",null,null,-1))),y={key:0},k={key:1},x=a((()=>(0,i._)("br",null,null,-1))),w=a((()=>(0,i._)("br",null,null,-1))),C={key:2},O={key:3},D=a((()=>(0,i._)("br",null,null,-1))),j=a((()=>(0,i._)("br",null,null,-1))),P={key:2},S={key:3},B=a((()=>(0,i._)("br",null,null,-1))),M={key:4},I=a((()=>(0,i._)("b",null,"(Dealer) Your cards:",-1))),q=[I],T={key:5},z=a((()=>(0,i._)("b",null,"Your cards:",-1))),A=[z],U=a((()=>(0,i._)("br",null,null,-1))),E=a((()=>(0,i._)("br",null,null,-1))),L={class:"cards"},Y={class:"card-container"},F=["onClick"],Z=["src"],V={class:"select-options"},N=a((()=>(0,i._)("h2",null,[(0,i._)("u",null,"Options")],-1))),R={class:"button-container"},$={class:"interactions"},K=["src"],J={class:"card-info",style:{color:"rgb(255, 255, 255)","background-color":"rgba(0, 0, 0, 0.33)"}},G={key:0},Q=a((()=>(0,i._)("b",null,"(Dealer) Player 2",-1))),H={key:1},W=a((()=>(0,i._)("b",null,"Player 2",-1))),X=a((()=>(0,i._)("br",null,null,-1))),ss={key:2},ts=a((()=>(0,i._)("b",null,"(Dealer) Player 3",-1))),es={key:3},is=a((()=>(0,i._)("b",null,"Player 3",-1))),rs=a((()=>(0,i._)("br",null,null,-1))),ns=a((()=>(0,i._)("b",null,"Skat cards:",-1)));function as(s,t,e,a,I,z){return(0,i.wg)(),(0,i.iD)("div",o,[c,(0,i._)("div",u,[(0,i._)("div",null,[d,(0,i.wy)((0,i._)("input",{class:"custom-input",type:"text",id:"inputField","onUpdate:modelValue":t[0]||(t[0]=s=>this.player1.bid=s),disabled:I.winningBid,placeholder:"0"},null,8,l),[[r.nr,this.player1.bid]]),(0,i._)("button",{class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"},onClick:t[1]||(t[1]=s=>z.placeBid())},(0,n.zw)(I.submitButtonText),1),(0,i._)("button",{type:"button",class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"},onClick:t[2]||(t[2]=s=>z.passBid())},"Pass")]),f,p,I.winningBid?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("b",null,(0,n.zw)(I.informationMessage),1),_,(0,i._)("button",{type:"button",onClick:t[3]||(t[3]=s=>{z.takeCardsOrPass()}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em","margin-bottom":"0.5em"}},"Take cards"),h])):(0,i.kq)("",!0),I.validBid?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Uk)("You submitted a valid bid of: "),(0,i._)("b",null,(0,n.zw)(this.player1.bid),1),v,b,!1===this.player2.pass?((0,i.wg)(),(0,i.iD)("div",y,[(0,i.Uk)(" Player 2 bids: "),(0,i._)("b",null,(0,n.zw)(this.player2.bid),1)])):((0,i.wg)(),(0,i.iD)("div",k," Player 2: Pass")),x,w,!1===this.player3.pass?((0,i.wg)(),(0,i.iD)("div",C,[(0,i.Uk)(" Player 3 bids: "),(0,i._)("b",null,(0,n.zw)(this.player2.bid),1)])):((0,i.wg)(),(0,i.iD)("div",O," Player 3: Pass")),D,j])):(0,i.kq)("",!0),I.winningBid?((0,i.wg)(),(0,i.iD)("div",P,"Your bid of "+(0,n.zw)(this.player1.bid)+" wins!",1)):!0!==this.player1.pass||!0!==this.player2.pass?((0,i.wg)(),(0,i.iD)("div",S,[(0,i.Uk)((0,n.zw)(I.biddingMessage)+" ",1),(0,i._)("button",{type:"button",class:"button-35",style:{"margin-left":"0.25em",height:"0.5em"},onClick:t[4]||(t[4]=s=>{this.stopBid()})},"Stop bidding")])):(0,i.kq)("",!0),B,0===I.dealer?((0,i.wg)(),(0,i.iD)("div",M,q)):((0,i.wg)(),(0,i.iD)("div",T,A)),U,(0,i._)("div",null,[(0,i._)("b",null,(0,n.zw)(I.player1.cards.length)+" cards are in your hand.",1),E,(0,i.Uk)(" "+(0,n.zw)(this.player1.cards),1)])]),(0,i._)("div",L,[(0,i._)("div",Y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.imagesOfCardsInhand,((s,t)=>((0,i.wg)(),(0,i.iD)("div",{key:s,onClick:s=>z.removeImage(t),class:"card-item",style:(0,n.j5)({"margin-left":I.marginLeft,...z.cardStyles[t]})},[(0,i._)("img",{src:s,alt:""},null,8,Z)],12,F)))),128))])]),(0,i._)("div",V,[N,(0,i._)("div",R,[(0,i._)("button",{type:"button",onClick:t[5]||(t[5]=s=>{z.increaseMarginLeft("+")}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"+ spacing"),(0,i._)("button",{type:"button",onClick:t[6]||(t[6]=s=>{z.increaseMarginLeft("-")}),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"- spacing")]),(0,i._)("button",{type:"button",onClick:t[7]||(t[7]=s=>z.dealCards()),class:"button-35",style:{"margin-left":"0.25em",height:"0.5em","margin-top":"0.5em"}},"Deal new cards")]),(0,i._)("div",$,[(0,i._)("img",{class:"saloon-image",src:I.saloonImage,alt:"Saloon Image"},null,8,K),(0,i._)("div",J,[1===I.dealer?((0,i.wg)(),(0,i.iD)("div",G,[Q,(0,i.Uk)(" is holding "+(0,n.zw)(I.player2.cards.length)+" cards.",1)])):((0,i.wg)(),(0,i.iD)("div",H,[W,(0,i.Uk)(" is holding "+(0,n.zw)(I.player2.cards.length)+" cards.",1)])),X,2===I.dealer?((0,i.wg)(),(0,i.iD)("div",ss,[ts,(0,i.Uk)(" is holding "+(0,n.zw)(I.player2.cards.length)+" cards.",1)])):((0,i.wg)(),(0,i.iD)("div",es,[is,(0,i.Uk)(" is holding "+(0,n.zw)(I.player3.cards.length)+" cards.",1)])),rs,ns,(0,i.Uk)(" Unbekannt! Unknown! "+(0,n.zw)(I.skat.length)+" cards ",1)])])])}e(7658);var os=e(7327);class cs{constructor(s,t,e,i=!1,r){(0,os.Z)(this,"name",void 0),(0,os.Z)(this,"cards",void 0),(0,os.Z)(this,"card_values",void 0),(0,os.Z)(this,"pass",void 0),(0,os.Z)(this,"bid",void 0),this.name=s,this.cards=t,this.card_values=e,this.pass=i,this.bid=r}}class us{constructor(s){(0,os.Z)(this,"theDeckOfCards",void 0),this.theDeckOfCards=s}createCards(){const s=["hearts","diamonds","spades","clubs"],t=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];for(let e=0;e<s.length;e++)for(let i=5;i<t.length;i++)this.theDeckOfCards.push([t[i],s[e]])}shuffle(){const s=this.theDeckOfCards;let t,e,i=s.length;while(0!==i)e=Math.floor(Math.random()*i),i-=1,t=s[i],s[i]=s[e],s[e]=t;return s}}var ds=e.p+"img/Saloon.1f2ec9e5.jpg",ls={name:"SkatGame",components:{},data(){return{marginLeft:"0.5em",saloonImage:ds,svgFiles:[],imagesOfCardsInhand:[],players:[],cat:"meow",submitButtonText:"Submit this bid",biddingMessage:"You have been outbidded, do you want to enter a higher bid? or stop bidding?",informationMessage:"You won the bid! Take Skat cards and add them to your hand? or pass?",firstCardDeck:[],skat:[],player1:{cards:[],bid:0},player2:{cards:[]},player3:{cards:[]},dealer:0,bidsAllowed:[18,20,22,23,24,27,30,33,35,36,40,44,45,46,48,50,54,55,59,60],currentOpponentBids:[],lastBid:-1,validBid:!1,winningBid:!1,pass:!1,cardSuitValues:{spades:2,hearts:3,diamonds:4,clubs:1},cardRankValues:{J:100,A:13,10:10,K:12,Q:11,9:9,8:8,7:7},cardValues:new Map([["J",2],["A",11],["10",10],["K",4],["Q",3],["9",0],["8",0],["7",0]])}},computed:{cardStyles(){return this.imagesOfCardsInhand.map(((s,t)=>({marginTop:t*(Math.random()-.1)*.1+"em",transform:`rotate(${3*(t-4)}deg)`})))}},methods:{removeImage(s){console.log("------------",this.imagesOfCardsInhand[s].slice(0,-13).slice(5));const t=this.imagesOfCardsInhand[s].slice(0,-13).slice(5);this.player1.cards=this.player1.cards.filter((s=>!(t.includes(s[0])&&t.includes(s[1])))),this.imagesOfCardsInhand.splice(s,1)},increaseMarginLeft(s){const t=parseFloat(this.marginLeft);if("+"===s){const s=t+.5;this.marginLeft=`${s}em`}else{const s=t-.5;this.marginLeft=`${s}em`}},updateCards(){this.imagesOfCardsInhand=[],this.svgFiles.forEach((s=>{const t=s.slice(0,-13);this.player1.cards.forEach((e=>{t.includes(e[0])&&t.includes(e[1])&&!t.includes("2")&&this.imagesOfCardsInhand.push(s)}))}))},passBid(){this.player1Pass=!0;let s=this.currentOpponentBids.includes(60);while("pass"!==this.opponentBid||"pass"!==this.opponentTwoBid||s)this.opponent()},placeBid(){console.log(this.player1.bid),this.bidsAllowed.includes(parseInt(this.player1.bid))&&this.player1.bid>this.lastBid?(this.validBid=!0,this.lastBid=this.player1.bid,this.opponent(2)):this.bid<=this.lastBid?alert("You need to enter a higher valid bid, it can't be the same number, or lower than the opponents bid: "+this.bidsAllowed):alert("Please enter a valid bid, they are: "+this.bidsAllowed)},generateRandomBoolean(){const s=Math.random()<.5;return s},opponent(s){console.log(s);let t=this.generateRandomBoolean(),e=Math.max(this.player1.bid,this.player2.bid,this.player3.bid);console.log("Random",t),!0===t&&"Pass!"!==this.player2.bid?this.player2.bid=this.bidsAllowed.find((s=>s>e)):this.player2.pass=!0,t=this.generateRandomBoolean(),!0===t&&"Pass!"!==this.player3.bid?this.player3.bid=this.bidsAllowed.find((s=>s>e)):this.player3.pass=!0,!0===this.player2.pass&&!0===this.player3.pass&&(this.winningBid=!0)},takeCardsOrPass(){0!==this.skat.length&&(this.informationMessage="You took the SKAT cards! They are the ["+this.skat[0][0]+" of "+this.skat[0][1]+"] and the ["+this.skat[1][0]+" of "+this.skat[1][1]+"]",this.player1.cards=this.player1.cards.concat(this.skat),this.updateCards(),this.skat=[])},displayInfo(s,t,e){console.log(`Player Information: \nPlayer: ${s}\nCards: ${t}\nValues: ${e}`)},stopBid(){this.biddingMessage="You have decided to stop bidding!"},dealCards(){this.skat=[],this.DeckOfCards=new us([]),this.DeckOfCards.createCards(),this.DeckOfCards.shuffle(),this.dealer=Math.floor(3*Math.random())+0,this.player1=new cs("Conrad",this.player1Cards,0),this.player2=new cs("Alice",this.player2Cards,0),this.player3=new cs("Bob",this.player3Cards,0),this.players.push(this.player1,this.player2,this.player3),this.player1.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.player2.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.player3.cards=this.DeckOfCards.theDeckOfCards.splice(0,10),this.skat=this.DeckOfCards.theDeckOfCards.splice(0,2),this.updateCards(),this.displayInfo(this.player1.name,this.player1.cards,this.player1.card_values)}},mounted(){document.title="Skat";const s=e(150);this.svgFiles=s.keys().map(s),this.dealCards(),this.updateCards()}},fs=e(3744);const ps=(0,fs.Z)(ls,[["render",as],["__scopeId","data-v-7f6f3118"]]);var gs=ps},150:function(s,t,e){var i={"./10_of_clubs.svg":6729,"./10_of_diamonds.svg":8160,"./10_of_hearts.svg":9220,"./10_of_spades.svg":3317,"./2_of_clubs.svg":6770,"./2_of_diamonds.svg":8913,"./2_of_hearts.svg":505,"./2_of_spades.svg":8508,"./3_of_clubs.svg":7600,"./3_of_diamonds.svg":1896,"./3_of_hearts.svg":8369,"./3_of_spades.svg":4933,"./4_of_clubs.svg":7642,"./4_of_diamonds.svg":6116,"./4_of_hearts.svg":5706,"./4_of_spades.svg":4159,"./5_of_clubs.svg":5973,"./5_of_diamonds.svg":5597,"./5_of_hearts.svg":1135,"./5_of_spades.svg":9602,"./6_of_clubs.svg":3810,"./6_of_diamonds.svg":8243,"./6_of_hearts.svg":790,"./6_of_spades.svg":4221,"./7_of_clubs.svg":2909,"./7_of_diamonds.svg":2419,"./7_of_hearts.svg":7122,"./7_of_spades.svg":2007,"./8_of_clubs.svg":6349,"./8_of_diamonds.svg":6542,"./8_of_hearts.svg":2549,"./8_of_spades.svg":3594,"./9_of_clubs.svg":9916,"./9_of_diamonds.svg":3982,"./9_of_hearts.svg":9352,"./9_of_spades.svg":3571,"./ace_of_clubs.svg":4912,"./ace_of_diamonds.svg":549,"./ace_of_hearts.svg":1944,"./ace_of_spades.svg":7764,"./ace_of_spades2.svg":1764,"./black_joker.svg":579,"./jack_of_clubs.svg":9643,"./jack_of_clubs2.svg":8609,"./jack_of_diamonds.svg":1049,"./jack_of_diamonds2.svg":9432,"./jack_of_hearts.svg":3763,"./jack_of_hearts2.svg":9802,"./jack_of_spades.svg":6754,"./jack_of_spades2.svg":6291,"./king_of_clubs.svg":7056,"./king_of_clubs2.svg":417,"./king_of_diamonds.svg":2820,"./king_of_diamonds2.svg":6366,"./king_of_hearts.svg":7602,"./king_of_hearts2.svg":4721,"./king_of_spades.svg":2016,"./king_of_spades2.svg":171,"./queen_of_clubs.svg":592,"./queen_of_clubs2.svg":1681,"./queen_of_diamonds.svg":4087,"./queen_of_diamonds2.svg":6358,"./queen_of_hearts.svg":2101,"./queen_of_hearts2.svg":5289,"./queen_of_spades.svg":332,"./queen_of_spades2.svg":1397,"./red_joker.svg":999};function r(s){var t=n(s);return e(t)}function n(s){if(!e.o(i,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return i[s]}r.keys=function(){return Object.keys(i)},r.resolve=n,s.exports=r,r.id=150},6729:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_clubs.be13dd46.svg"},8160:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_diamonds.485b49ca.svg"},9220:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_hearts.59768fe5.svg"},3317:function(s,t,e){"use strict";s.exports=e.p+"img/10_of_spades.f653b772.svg"},6770:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_clubs.553685ef.svg"},8913:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_diamonds.86de4ec3.svg"},505:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_hearts.8a31ec38.svg"},8508:function(s,t,e){"use strict";s.exports=e.p+"img/2_of_spades.1f70f97d.svg"},7600:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_clubs.2e4985d0.svg"},1896:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_diamonds.e6ddd285.svg"},8369:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_hearts.c1fc5245.svg"},4933:function(s,t,e){"use strict";s.exports=e.p+"img/3_of_spades.eb37c109.svg"},7642:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_clubs.92c6ffe2.svg"},6116:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_diamonds.e0a830f3.svg"},5706:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_hearts.d7144276.svg"},4159:function(s,t,e){"use strict";s.exports=e.p+"img/4_of_spades.883cc59a.svg"},5973:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_clubs.626aba2b.svg"},5597:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_diamonds.97ccc670.svg"},1135:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_hearts.064ba1e8.svg"},9602:function(s,t,e){"use strict";s.exports=e.p+"img/5_of_spades.bfe723eb.svg"},3810:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_clubs.333de8c8.svg"},8243:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_diamonds.937ad31d.svg"},790:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_hearts.56677356.svg"},4221:function(s,t,e){"use strict";s.exports=e.p+"img/6_of_spades.2b7a1d05.svg"},2909:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_clubs.23ea96f3.svg"},2419:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_diamonds.52bec6ce.svg"},7122:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_hearts.bbb4293b.svg"},2007:function(s,t,e){"use strict";s.exports=e.p+"img/7_of_spades.c4850e7c.svg"},6349:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_clubs.15be9f0b.svg"},6542:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_diamonds.1b01fbcc.svg"},2549:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_hearts.3a8e1e59.svg"},3594:function(s,t,e){"use strict";s.exports=e.p+"img/8_of_spades.0c6f2494.svg"},9916:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_clubs.475f6dae.svg"},3982:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_diamonds.1a3205e1.svg"},9352:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_hearts.790d945d.svg"},3571:function(s,t,e){"use strict";s.exports=e.p+"img/9_of_spades.eaecf3ee.svg"},4912:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_clubs.f1cb0dd3.svg"},549:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_diamonds.9cfaab82.svg"},1944:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_hearts.d875eb4b.svg"},7764:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_spades.462aa32e.svg"},1764:function(s,t,e){"use strict";s.exports=e.p+"img/ace_of_spades2.d6d5f927.svg"},579:function(s,t,e){"use strict";s.exports=e.p+"img/black_joker.bb9b4f46.svg"},9643:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_clubs.aa8f8526.svg"},8609:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_clubs2.f0543a49.svg"},1049:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_diamonds.2766ca31.svg"},9432:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_diamonds2.b6e9e33c.svg"},3763:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_hearts.7c7e27f9.svg"},9802:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_hearts2.57533a78.svg"},6754:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_spades.5989636d.svg"},6291:function(s,t,e){"use strict";s.exports=e.p+"img/jack_of_spades2.4ea68a1c.svg"},7056:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_clubs.4cbb9902.svg"},417:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_clubs2.a3d048df.svg"},2820:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_diamonds.b20af9d1.svg"},6366:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_diamonds2.d0093b34.svg"},7602:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_hearts.515d454b.svg"},4721:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_hearts2.d20793f2.svg"},2016:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_spades.eb2381a3.svg"},171:function(s,t,e){"use strict";s.exports=e.p+"img/king_of_spades2.8ae28cf8.svg"},592:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_clubs.627cefa4.svg"},1681:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_clubs2.06ffb3c4.svg"},4087:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_diamonds.a5c9e359.svg"},6358:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_diamonds2.72d4294f.svg"},2101:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_hearts.be3acb9e.svg"},5289:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_hearts2.6655a001.svg"},332:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_spades.a6854bba.svg"},1397:function(s,t,e){"use strict";s.exports=e.p+"img/queen_of_spades2.8672dd55.svg"},999:function(s,t,e){"use strict";s.exports=e.p+"img/red_joker.f4262f94.svg"},7327:function(s,t,e){"use strict";function i(s){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(s)}function r(s,t){if("object"!==i(s)||null===s)return s;var e=s[Symbol.toPrimitive];if(void 0!==e){var r=e.call(s,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(s)}function n(s){var t=r(s,"string");return"symbol"===i(t)?t:String(t)}function a(s,t,e){return t=n(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=116.73056b0c.js.map