"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[225],{1046:function(e,t,r){r.r(t),r.d(t,{default:function(){return yt}});var l=r(6252),o=r(3577);const n=e=>((0,l.dD)("data-v-2ac79318"),e=e(),(0,l.Cn)(),e),i={class:"store-background"},a=n((()=>(0,l._)("div",{class:"main-banner"},[(0,l._)("div",{class:"main-banner-text-container"},[(0,l._)("h1",null," Buy awesome things here..."),(0,l._)("p",{class:"main-banner-sub-text"},"A simple modular store layout made in Vue.js and TypeScript")])],-1))),s={style:{background:"#fff"}},d={key:0};function g(e,t,r,n,g,c){const m=(0,l.up)("ProductGallery"),h=(0,l.up)("CheckOut"),p=(0,l.up)("DiagramModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[a,(0,l.Wm)(m,{onAddToCart:c.updateValue},null,8,["onAddToCart"]),(0,l.Wm)(h,{propValue:g.propValue,propValue2:g.propValue2,propUpdate:g.updated},null,8,["propValue","propValue2","propUpdate"]),(0,l._)("div",s,[(0,l._)("button",{onClick:t[0]||(t[0]=e=>(c.showDiagramAndSourceCode,c.toggleDiagramModal())),class:"clean-button store-show-diagram-button"},(0,o.zw)(g.showDiagramButtonText),1)])]),g.showDiagramModal?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(p,{onClose:c.toggleDiagramModal},null,8,["onClose"])])):(0,l.kq)("",!0)],64)}const c=e=>((0,l.dD)("data-v-cb89d158"),e=e(),(0,l.Cn)(),e),m={class:"centerAll"},h={class:"image-gallery"},p=c((()=>(0,l._)("h1",null,"MAKE A SELECTION",-1))),y={class:"image-gallery-grid-container"},u=["src","alt"],x=["onClick"];function f(e,t,r,n,i,a){return(0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",h,[p,(0,l._)("div",{class:"gallery-button-left",onClick:t[0]||(t[0]=e=>a.changeImageArray("left"))},"<"),(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.slicedProductInventoryArray,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"grid-item"},[(0,l._)("img",{class:"gallery-component-image",src:e.imageSrc,alt:e.altText},null,8,u),(0,l._)("figcaption",null,(0,o.zw)(e.name)+" €"+(0,o.zw)(e.price),1),(0,l._)("button",{onClick:r=>{a.showArray(t,e.id)},class:"clean-button"},"Add to cart",8,x)])))),128))]),(0,l._)("div",{class:"gallery-button-right",onClick:t[1]||(t[1]=e=>a.changeImageArray("right"))},">")])])}r(560);var w=r(6223),v={name:"ProductGallery",components:{},props:{images:{type:Array,default:null}},data(){return w.a[0].imageSrc=r(1680),w.a[1].imageSrc=r(8182),w.a[2].imageSrc=r(1955),w.a[3].imageSrc=r(7563),w.a[4].imageSrc=r(2152),{imageArrayChoice:null,productInventoryArray:w.a}},mounted(){this.imageArrayChoice=this.productInventoryArray[0]},computed:{slicedProductInventoryArray(){const e=4;return this.productInventoryArray.slice(0,e)}},methods:{showArray(e=null,t=null){if(null===e||null===t)return;const r=e;this.$emit("add-to-cart",r,t)},changeImageArray(e){const t=this.productInventoryArray.length-1;if("left"===e){const e=this.productInventoryArray.pop();this.productInventoryArray.unshift(e),this.imageArrayChoice=this.productInventoryArray[0]}else if("right"===e){const e=this.productInventoryArray.shift();this.productInventoryArray.push(e),this.imageArrayChoice=this.productInventoryArray[t]}}}},b=r(3744);const k=(0,b.Z)(v,[["render",f],["__scopeId","data-v-cb89d158"]]);var _=k,L=r(2773),C=r(9963);const W=e=>((0,l.dD)("data-v-72a54b04"),e=e(),(0,l.Cn)(),e),S={class:"aboutDiagram"},D=W((()=>(0,l._)("h2",null,"Diagram of how this project works",-1))),G=W((()=>(0,l._)("div",{style:{"text-align":"left",padding:"1em"}},[(0,l._)("p",null,[(0,l._)("b",null,"CheckOut.vue"),(0,l.Uk)(" is the main part of this application.")]),(0,l._)("a",{class:"text-links",href:"https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store"}," Component and TypeScript source code on GitHub"),(0,l._)("br"),(0,l._)("a",{class:"text-links",href:"https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreView.vue"},"Store page view"),(0,l._)("br"),(0,l._)("a",{class:"text-links",href:"https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreCheckOutView.vue"},"Checkout page view")],-1))),V={style:{padding:"0.5em"}},I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"760px",viewBox:"-0.5 -0.5 760 456",content:'<mxfile host="app.diagrams.net" modified="2024-01-02T20:28:48.417Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" etag="DldS2HZbVtGZNieE6RZs" version="22.1.16" type="device">\n  <diagram id="C5RBs43oDa-KdzZeNtuy" name="Page-1">\n    <mxGraphModel dx="1434" dy="746" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">\n      <root>\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-0" />\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-1" parent="WIyWlLk6GJQsqaUBKTNV-0" />\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-2" value="" style="rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;edgeStyle=orthogonalEdgeStyle;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-3" edge="1">\n          <mxGeometry relative="1" as="geometry">\n            <mxPoint x="250" y="270" as="targetPoint" />\n          </mxGeometry>\n        </mxCell>\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-3" value="&lt;br&gt;&lt;font color=&quot;#ff0000&quot;&gt;(Main Page)&lt;/font&gt;&lt;br&gt;StoreView.vue&lt;br&gt;" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">\n          <mxGeometry x="180" y="150" width="140" height="70" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-0" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-7" target="WIyWlLk6GJQsqaUBKTNV-3">\n          <mxGeometry relative="1" as="geometry">\n            <Array as="points">\n              <mxPoint x="370" y="235" />\n              <mxPoint x="370" y="200" />\n            </Array>\n          </mxGeometry>\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-19" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.75;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-7" target="WIyWlLk6GJQsqaUBKTNV-11">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-7" value="&lt;font color=&quot;#8c00ff&quot;&gt;Component&lt;/font&gt;&lt;br&gt;CheckOut.vue" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">\n          <mxGeometry x="420" y="200" width="114" height="70" as="geometry" />\n        </mxCell>\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-11" value="&lt;font color=&quot;#ff0000&quot;&gt;(Checkout Page)&lt;/font&gt;&lt;br&gt;StoreCheckOutView.vue" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">\n          <mxGeometry x="180" y="270" width="140" height="90" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.25;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-12" target="WIyWlLk6GJQsqaUBKTNV-3">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="WIyWlLk6GJQsqaUBKTNV-12" value="&lt;br&gt;&lt;font color=&quot;#8c00ff&quot;&gt;Component&lt;br&gt;&lt;/font&gt;ProductGallery.vue" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">\n          <mxGeometry x="414" y="110" width="120" height="70" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-4" value="" style="shape=flexArrow;endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" target="WIyWlLk6GJQsqaUBKTNV-12">\n          <mxGeometry width="100" height="100" relative="1" as="geometry">\n            <mxPoint x="534" y="235" as="sourcePoint" />\n            <mxPoint x="634" y="135" as="targetPoint" />\n            <Array as="points">\n              <mxPoint x="620" y="190" />\n            </Array>\n          </mxGeometry>\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-5" value="These components interact only by using props passed through the StoreView.vue main page." style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">\n          <mxGeometry x="630" y="130" width="230" height="110" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.75;entryY=1;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-7" target="WIyWlLk6GJQsqaUBKTNV-7">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-7" value="(Interface and simple data structure organization for each product - stored as an array of objects)&lt;br&gt;&lt;font color=&quot;#0800ff&quot;&gt;InventoryData.ts&lt;/font&gt;" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">\n          <mxGeometry x="640" y="350" width="210" height="70" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-14" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.25;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" target="WIyWlLk6GJQsqaUBKTNV-12">\n          <mxGeometry relative="1" as="geometry">\n            <mxPoint x="430" y="70" as="targetPoint" />\n            <mxPoint x="845" y="293.75" as="sourcePoint" />\n            <Array as="points">\n              <mxPoint x="931" y="294" />\n              <mxPoint x="931" y="70" />\n              <mxPoint x="474" y="70" />\n            </Array>\n          </mxGeometry>\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-9" value="&lt;br&gt;&lt;font color=&quot;#0800ff&quot;&gt;(Inventory of Products Data)&lt;br&gt;&lt;/font&gt;productInventoryOptionsData.ts" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">\n          <mxGeometry x="645" y="260" width="200" height="70" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-11" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.633;entryY=1.014;entryDx=0;entryDy=0;entryPerimeter=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-9" target="WIyWlLk6GJQsqaUBKTNV-7">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-15" value="&lt;font color=&quot;#00cc00&quot;&gt;Local Cookies&lt;br&gt;&lt;/font&gt;User cookies held locally on their system for selection choices. This allows seamless sharing of data between the Main Page and Checkout Page. Get and set cookies with vue-cookies." style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">\n          <mxGeometry x="310" y="410" width="270" height="100" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-16" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=0.25;entryY=1;entryDx=0;entryDy=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-15" target="WIyWlLk6GJQsqaUBKTNV-7">\n          <mxGeometry width="50" height="50" relative="1" as="geometry">\n            <mxPoint x="390" y="410" as="sourcePoint" />\n            <mxPoint x="440" y="360" as="targetPoint" />\n            <Array as="points">\n              <mxPoint x="450" y="300" />\n            </Array>\n          </mxGeometry>\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-21" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-15" target="4Sem7h08CXicW_EyFrDL-15">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-22" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-15" target="4Sem7h08CXicW_EyFrDL-15">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n        <mxCell id="4Sem7h08CXicW_EyFrDL-24" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="4Sem7h08CXicW_EyFrDL-15" target="4Sem7h08CXicW_EyFrDL-15">\n          <mxGeometry relative="1" as="geometry" />\n        </mxCell>\n      </root>\n    </mxGraphModel>\n  </diagram>\n</mxfile>\n',onclick:"(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&page=0&edit=_blank');}}})(this);",style:{cursor:"pointer","max-width":"100%","max-height":"456px"}},T=W((()=>(0,l._)("defs",null,null,-1))),q=W((()=>(0,l._)("path",{d:"M 70 157 L 70 182 L 70 196.88",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),z=W((()=>(0,l._)("path",{d:"M 70 205.88 L 65.5 196.88 L 74.5 196.88 Z",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),U=W((()=>(0,l._)("rect",{x:"0",y:"87",width:"140",height:"70",rx:"10.5",ry:"10.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),A={transform:"translate(-0.5 -0.5)"},E={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},B={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"138px",height:"1px","padding-top":"122px","margin-left":"1px"}},M={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},N={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},K=W((()=>(0,l._)("br",null,null,-1))),P=W((()=>(0,l._)("br",null,null,-1))),J=W((()=>(0,l._)("br",null,null,-1))),Q=W((()=>(0,l._)("text",{x:"70",y:"126",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"(Main Page)...",-1))),j=(0,l.uE)('<path d="M 240 172 L 190 172 L 190 137 L 146.37 137" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" data-v-72a54b04></path><path d="M 141.12 137 L 148.12 133.5 L 146.37 137 L 148.12 140.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" data-v-72a54b04></path><path d="M 240 189.5 L 190 189.5 L 190 252 L 146.37 252" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" data-v-72a54b04></path><path d="M 141.12 252 L 148.12 248.5 L 146.37 252 L 148.12 255.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" data-v-72a54b04></path><rect x="240" y="137" width="114" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" data-v-72a54b04></rect>',5),X={transform:"translate(-0.5 -0.5)"},F={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},H={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"112px",height:"1px","padding-top":"172px","margin-left":"241px"}},O={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},Z={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},Y=W((()=>(0,l._)("br",null,null,-1))),R=W((()=>(0,l._)("text",{x:"297",y:"176",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"Component...",-1))),$=W((()=>(0,l._)("rect",{x:"0",y:"207",width:"140",height:"90",rx:"13.5",ry:"13.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),ee={transform:"translate(-0.5 -0.5)"},te={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},re={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"138px",height:"1px","padding-top":"252px","margin-left":"1px"}},le={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},oe={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},ne=W((()=>(0,l._)("br",null,null,-1))),ie=W((()=>(0,l._)("text",{x:"70",y:"256",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"(Checkout Page)...",-1))),ae=W((()=>(0,l._)("path",{d:"M 234 82 L 187 82 L 187 104.5 L 146.37 104.5",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),se=W((()=>(0,l._)("path",{d:"M 141.12 104.5 L 148.12 101 L 146.37 104.5 L 148.12 108 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),de=W((()=>(0,l._)("rect",{x:"234",y:"47",width:"120",height:"70",rx:"10.5",ry:"10.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),ge={transform:"translate(-0.5 -0.5)"},ce={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},me={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"118px",height:"1px","padding-top":"82px","margin-left":"235px"}},he={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},pe={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},ye=W((()=>(0,l._)("br",null,null,-1))),ue=W((()=>(0,l._)("br",null,null,-1))),xe=W((()=>(0,l._)("text",{x:"294",y:"86",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"Component...",-1))),fe=W((()=>(0,l._)("path",{d:"M 373.6 167.39 L 378.46 176.69 L 354.44 171.77 L 364.09 149.23 L 368.96 158.53 L 429.22 127 L 368.96 95.47 L 364.09 104.77 L 354.44 82.23 L 378.46 77.31 L 373.6 86.61 L 450.78 127 Z",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"1.42","pointer-events":"all"},null,-1))),we=W((()=>(0,l._)("path",{d:"M 373.6 167.39 L 378.46 176.69 L 354.44 171.77 L 364.09 149.23 L 368.96 158.53",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"4","pointer-events":"all"},null,-1))),ve=W((()=>(0,l._)("path",{d:"M 368.96 95.47 L 364.09 104.77 L 354.44 82.23 L 378.46 77.31 L 373.6 86.61",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"4","pointer-events":"all"},null,-1))),be=W((()=>(0,l._)("rect",{x:"450",y:"67",width:"230",height:"110",rx:"16.5",ry:"16.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),ke={transform:"translate(-0.5 -0.5)"},_e={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},Le=W((()=>(0,l._)("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"228px",height:"1px","padding-top":"122px","margin-left":"451px"}},[(0,l._)("div",{"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},[(0,l._)("div",{style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}}," These components interact only by using props passed through the StoreView.vue main page.")])],-1))),Ce=[Le],We=W((()=>(0,l._)("text",{x:"565",y:"126",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"These components interact only by usin...",-1))),Se=W((()=>(0,l._)("path",{d:"M 460 322 L 325.5 322 L 325.5 213.37",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),De=W((()=>(0,l._)("path",{d:"M 325.5 208.12 L 329 215.12 L 325.5 213.37 L 322 215.12 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),Ge=W((()=>(0,l._)("rect",{x:"460",y:"287",width:"210",height:"70",rx:"10.5",ry:"10.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),Ve={transform:"translate(-0.5 -0.5)"},Ie={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},Te={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"208px",height:"1px","padding-top":"322px","margin-left":"461px"}},qe={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},ze={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},Ue=W((()=>(0,l._)("br",null,null,-1))),Ae=W((()=>(0,l._)("text",{x:"565",y:"326",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"(Interface and simple data structur...",-1))),Ee=W((()=>(0,l._)("path",{d:"M 665 230.75 L 751 230.8 L 751 7 L 294 7 L 294 40.63",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),Be=W((()=>(0,l._)("path",{d:"M 294 45.88 L 290.5 38.88 L 294 40.63 L 297.5 38.88 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),Me=W((()=>(0,l._)("rect",{x:"465",y:"197",width:"200",height:"70",rx:"10.5",ry:"10.5",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),Ne={transform:"translate(-0.5 -0.5)"},Ke={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},Pe={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"198px",height:"1px","padding-top":"232px","margin-left":"466px"}},Je={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},Qe={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},je=W((()=>(0,l._)("br",null,null,-1))),Xe=W((()=>(0,l._)("br",null,null,-1))),Fe=W((()=>(0,l._)("text",{x:"565",y:"236",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"(Inventory of Products Data)...",-1))),He=W((()=>(0,l._)("path",{d:"M 465 232 L 312.2 232 L 312.17 214.35",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),Oe=W((()=>(0,l._)("path",{d:"M 312.16 209.1 L 315.67 216.09 L 312.17 214.35 L 308.67 216.1 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),Ze=W((()=>(0,l._)("rect",{x:"130",y:"347",width:"270",height:"100",rx:"15",ry:"15",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)","pointer-events":"all"},null,-1))),Ye={transform:"translate(-0.5 -0.5)"},Re={"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility",style:{overflow:"visible","text-align":"left"}},$e={xmlns:"http://www.w3.org/1999/xhtml",style:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"268px",height:"1px","padding-top":"397px","margin-left":"131px"}},et={"data-drawio-colors":"color: rgb(0, 0, 0); ",style:{"box-sizing":"border-box","font-size":"0px","text-align":"center"}},tt={style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","pointer-events":"all","white-space":"normal","overflow-wrap":"normal"}},rt=W((()=>(0,l._)("br",null,null,-1))),lt=W((()=>(0,l._)("text",{x:"265",y:"401",fill:"rgb(0, 0, 0)","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"},"Local Cookies...",-1))),ot=W((()=>(0,l._)("path",{d:"M 265.29 340.64 L 270 237 L 268.82 213.36",fill:"none",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1))),nt=W((()=>(0,l._)("path",{d:"M 265.05 345.88 L 261.87 338.73 L 265.29 340.64 L 268.87 339.05 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),it=W((()=>(0,l._)("path",{d:"M 268.56 208.12 L 272.4 214.93 L 268.82 213.36 L 265.41 215.28 Z",fill:"rgb(0, 0, 0)",stroke:"rgb(0, 0, 0)","stroke-miterlimit":"10","pointer-events":"all"},null,-1))),at=W((()=>(0,l._)("switch",null,[(0,l._)("g",{requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}),(0,l._)("a",{transform:"translate(0,-5)","xlink:href":"https://www.drawio.com/doc/faq/svg-export-text-problems",target:"_blank"},[(0,l._)("text",{"text-anchor":"middle","font-size":"10px",x:"50%",y:"100%"},"Text is not SVG - cannot display")])],-1))),st=W((()=>(0,l._)("p",null,[(0,l.Uk)("Diagram made using "),(0,l._)("a",{class:"text-links",href:"https://app.diagrams.net/"}," https://app.diagrams.net/ ")],-1)));function dt(e,t,r,o,n,i){const a=(0,l.up)("font");return(0,l.wg)(),(0,l.iD)("div",{class:"backdrop",onClick:t[1]||(t[1]=(0,C.iM)(((...e)=>i.closeModal&&i.closeModal(...e)),["self"]))},[(0,l._)("div",S,[(0,l._)("button",{class:"close",onClick:t[0]||(t[0]=(0,C.iM)(((...e)=>i.closeModal&&i.closeModal(...e)),["self"]))}),D,G,(0,l._)("div",V,[((0,l.wg)(),(0,l.iD)("svg",I,[T,(0,l._)("g",null,[q,z,U,(0,l._)("g",A,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",E,[(0,l._)("div",B,[(0,l._)("div",M,[(0,l._)("div",N,[K,(0,l.Wm)(a,{color:"#ff0000"},{default:(0,l.w5)((()=>[(0,l.Uk)("(Main Page)")])),_:1}),P,(0,l.Uk)("StoreView.vue"),J])])])])),Q])]),j,(0,l._)("g",X,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",F,[(0,l._)("div",H,[(0,l._)("div",O,[(0,l._)("div",Z,[(0,l.Wm)(a,{color:"#8c00ff"},{default:(0,l.w5)((()=>[(0,l.Uk)("Component")])),_:1}),Y,(0,l.Uk)("CheckOut.vue ")])])])])),R])]),$,(0,l._)("g",ee,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",te,[(0,l._)("div",re,[(0,l._)("div",le,[(0,l._)("div",oe,[(0,l.Wm)(a,{color:"#ff0000"},{default:(0,l.w5)((()=>[(0,l.Uk)("(Checkout Page)")])),_:1}),ne,(0,l.Uk)("StoreCheckOutView.vue ")])])])])),ie])]),ae,se,de,(0,l._)("g",ge,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",ce,[(0,l._)("div",me,[(0,l._)("div",he,[(0,l._)("div",pe,[ye,(0,l.Wm)(a,{color:"#8c00ff"},{default:(0,l.w5)((()=>[(0,l.Uk)("Component"),ue])),_:1}),(0,l.Uk)("ProductGallery.vue ")])])])])),xe])]),fe,we,ve,be,(0,l._)("g",ke,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",_e,Ce)),We])]),Se,De,Ge,(0,l._)("g",Ve,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",Ie,[(0,l._)("div",Te,[(0,l._)("div",qe,[(0,l._)("div",ze,[(0,l.Uk)(" (Interface and simple data structure organization for each product - stored as an array of objects)"),Ue,(0,l.Wm)(a,{color:"#0800ff"},{default:(0,l.w5)((()=>[(0,l.Uk)("InventoryData.ts")])),_:1})])])])])),Ae])]),Ee,Be,Me,(0,l._)("g",Ne,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",Ke,[(0,l._)("div",Pe,[(0,l._)("div",Je,[(0,l._)("div",Qe,[je,(0,l.Wm)(a,{color:"#0800ff"},{default:(0,l.w5)((()=>[(0,l.Uk)("(Inventory of Products Data)"),Xe])),_:1}),(0,l.Uk)("productInventoryOptionsData.ts ")])])])])),Fe])]),He,Oe,Ze,(0,l._)("g",Ye,[(0,l._)("switch",null,[((0,l.wg)(),(0,l.iD)("foreignObject",Re,[(0,l._)("div",$e,[(0,l._)("div",et,[(0,l._)("div",tt,[(0,l.Wm)(a,{color:"#00cc00"},{default:(0,l.w5)((()=>[(0,l.Uk)("Local Cookies"),rt])),_:1}),(0,l.Uk)("User cookies held locally on their system for selection choices. This allows seamless sharing of data between the Main Page and Checkout Page. Get and set cookies with vue-cookies. ")])])])])),lt])]),ot,nt,it]),at]))]),st])])}var gt={props:["title","header","text","imagePath","url"],methods:{closeModal(){this.$emit("close")}}};const ct=(0,b.Z)(gt,[["render",dt],["__scopeId","data-v-72a54b04"]]);var mt=ct,ht={name:"StoreView",components:{ProductGallery:_,CheckOut:L.Z,DiagramModal:mt},data(){return{propValue:0,propValue2:0,updated:!1,openDiagramAndSourceCodeLinks:!1,showDiagramButtonText:"Show Diagram and Source Code",showDiagramModal:!1}},methods:{updateValue(e,t){this.propValue=e,this.propValue2=t,this.updated=!this.updated,console.log("VALUE",this.propValue,this.propValue2)},showDiagramAndSourceCode(){this.openDiagramAndSourceCodeLinks=!this.openDiagramAndSourceCodeLinks,this.openDiagramAndSourceCodeLinks?this.showDiagramButtonText="Hide Diagram and Source Code":this.showDiagramButtonText="Show Diagram and Source Code"},toggleDiagramModal(){this.showDiagramModal=!this.showDiagramModal}}};const pt=(0,b.Z)(ht,[["render",g],["__scopeId","data-v-2ac79318"]]);var yt=pt},7563:function(e,t,r){e.exports=r.p+"img/cake.c78d5e5e.jpg"},8182:function(e,t,r){e.exports=r.p+"img/coffee_food.f7634650.jpg"},1955:function(e,t,r){e.exports=r.p+"img/diffBird.30532a98.jpg"},2152:function(e,t,r){e.exports=r.p+"img/purple_cake.674eb19a.jpg"},1680:function(e,t,r){e.exports=r.p+"img/second_coffee.c1bb6620.jpg"}}]);
//# sourceMappingURL=225.94ff35ea.js.map