"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[207],{9207:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var r=a(6252),c=a(3577);const i={class:"background"},n={class:"product-information-area"},o={class:"grid-container"},s={class:"product-image-container"},u=["src","alt"],d={class:"product-details"};function l(e,t,a,l,m,p){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",n,[(0,r._)("div",o,[(0,r._)("div",s,[(0,r._)("img",{class:"gallery-component-image",src:p.itemImageSrc,alt:p.itemName},null,8,u)]),(0,r._)("div",d,[(0,r._)("h1",null,(0,c.zw)(p.itemName),1),(0,r._)("p",null,"Product ID: "+(0,c.zw)(p.productId),1),(0,r._)("p",null,"Product: "+(0,c.zw)(p.itemName),1),(0,r._)("p",null,"Price: €"+(0,c.zw)(p.itemPrice),1),(0,r._)("div",null,[(0,r._)("button",{style:{},class:"clean-button",onClick:t[0]||(t[0]=(...e)=>p.goBackOnePage&&p.goBackOnePage(...e))},"Go Back")])])])])])}var m={components:{},data(){return{activeSelection:null}},computed:{productId(){return this.$route.params.id},itemName(){return this.$route.params.name},itemImageSrc(){return this.$route.params.image},itemPrice(){return this.$route.params.price}},methods:{goBackOnePage(){this.$router.go(-1)},addToCartClicked(e,t){this.$emit("add-to-cart",e,t)}}},p=a(3744);const g=(0,p.Z)(m,[["render",l],["__scopeId","data-v-3a513782"]]);var _=g}}]);
//# sourceMappingURL=207.9e01abb0.js.map