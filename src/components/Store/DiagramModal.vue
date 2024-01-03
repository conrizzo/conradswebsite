<template>
    <!-- click.self means only this item will activate this function-->
   <div class="backdrop" @click.self="closeModal">
     <div class="aboutDiagram">
       <button class="close" @click.self="closeModal"></button>
      
       <h2>Diagram of how this project works</h2>
       <div style="text-align: left; padding: 1em;">              
            <p><b>CheckOut.vue</b> is the main part of this application.</p>
            <a class="text-links" href="https://github.com/conrizzo/conradswebsite/tree/master/src/components/Store">
            Component and TypeScript source code on GitHub</a><br>
            <a class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreView.vue">Store page
            view</a><br>
            <a class="text-links"
            href="https://github.com/conrizzo/conradswebsite/blob/master/src/views/projects/StoreCheckOutView.vue">Checkout
            page view</a>
       </div>
       <div style="padding: 0.5em;">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="760px"
            viewBox="-0.5 -0.5 760 456"
            content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2024-01-02T20:28:48.417Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&quot; etag=&quot;DldS2HZbVtGZNieE6RZs&quot; version=&quot;22.1.16&quot; type=&quot;device&quot;&gt;&#10;  &lt;diagram id=&quot;C5RBs43oDa-KdzZeNtuy&quot; name=&quot;Page-1&quot;&gt;&#10;    &lt;mxGraphModel dx=&quot;1434&quot; dy=&quot;746&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;1&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; math=&quot;0&quot; shadow=&quot;0&quot;&gt;&#10;      &lt;root&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-0&quot; /&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-0&quot; /&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-2&quot; value=&quot;&quot; style=&quot;rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;edgeStyle=orthogonalEdgeStyle;&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;WIyWlLk6GJQsqaUBKTNV-3&quot; edge=&quot;1&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&#10;            &lt;mxPoint x=&quot;250&quot; y=&quot;270&quot; as=&quot;targetPoint&quot; /&gt;&#10;          &lt;/mxGeometry&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-3&quot; value=&quot;&amp;lt;br&amp;gt;&amp;lt;font color=&amp;quot;#ff0000&amp;quot;&amp;gt;(Main Page)&amp;lt;/font&amp;gt;&amp;lt;br&amp;gt;StoreView.vue&amp;lt;br&amp;gt;&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; vertex=&quot;1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;180&quot; y=&quot;150&quot; width=&quot;140&quot; height=&quot;70&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-0&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-3&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&#10;            &lt;Array as=&quot;points&quot;&gt;&#10;              &lt;mxPoint x=&quot;370&quot; y=&quot;235&quot; /&gt;&#10;              &lt;mxPoint x=&quot;370&quot; y=&quot;200&quot; /&gt;&#10;            &lt;/Array&gt;&#10;          &lt;/mxGeometry&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-19&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.75;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-11&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot; value=&quot;&amp;lt;font color=&amp;quot;#8c00ff&amp;quot;&amp;gt;Component&amp;lt;/font&amp;gt;&amp;lt;br&amp;gt;CheckOut.vue&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; vertex=&quot;1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;420&quot; y=&quot;200&quot; width=&quot;114&quot; height=&quot;70&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-11&quot; value=&quot;&amp;lt;font color=&amp;quot;#ff0000&amp;quot;&amp;gt;(Checkout Page)&amp;lt;/font&amp;gt;&amp;lt;br&amp;gt;StoreCheckOutView.vue&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; vertex=&quot;1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;180&quot; y=&quot;270&quot; width=&quot;140&quot; height=&quot;90&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-3&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.25;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;WIyWlLk6GJQsqaUBKTNV-12&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-3&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;WIyWlLk6GJQsqaUBKTNV-12&quot; value=&quot;&amp;lt;br&amp;gt;&amp;lt;font color=&amp;quot;#8c00ff&amp;quot;&amp;gt;Component&amp;lt;br&amp;gt;&amp;lt;/font&amp;gt;ProductGallery.vue&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; vertex=&quot;1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;414&quot; y=&quot;110&quot; width=&quot;120&quot; height=&quot;70&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-4&quot; value=&quot;&quot; style=&quot;shape=flexArrow;endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-12&quot;&gt;&#10;          &lt;mxGeometry width=&quot;100&quot; height=&quot;100&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&#10;            &lt;mxPoint x=&quot;534&quot; y=&quot;235&quot; as=&quot;sourcePoint&quot; /&gt;&#10;            &lt;mxPoint x=&quot;634&quot; y=&quot;135&quot; as=&quot;targetPoint&quot; /&gt;&#10;            &lt;Array as=&quot;points&quot;&gt;&#10;              &lt;mxPoint x=&quot;620&quot; y=&quot;190&quot; /&gt;&#10;            &lt;/Array&gt;&#10;          &lt;/mxGeometry&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-5&quot; value=&quot;These components interact only by using props passed through the StoreView.vue main page.&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;630&quot; y=&quot;130&quot; width=&quot;230&quot; height=&quot;110&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-8&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.75;entryY=1;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-7&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-7&quot; value=&quot;(Interface and simple data structure organization for each product - stored as an array of objects)&amp;lt;br&amp;gt;&amp;lt;font color=&amp;quot;#0800ff&amp;quot;&amp;gt;InventoryData.ts&amp;lt;/font&amp;gt;&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;640&quot; y=&quot;350&quot; width=&quot;210&quot; height=&quot;70&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-14&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.25;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-12&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&#10;            &lt;mxPoint x=&quot;430&quot; y=&quot;70&quot; as=&quot;targetPoint&quot; /&gt;&#10;            &lt;mxPoint x=&quot;845&quot; y=&quot;293.75&quot; as=&quot;sourcePoint&quot; /&gt;&#10;            &lt;Array as=&quot;points&quot;&gt;&#10;              &lt;mxPoint x=&quot;931&quot; y=&quot;294&quot; /&gt;&#10;              &lt;mxPoint x=&quot;931&quot; y=&quot;70&quot; /&gt;&#10;              &lt;mxPoint x=&quot;474&quot; y=&quot;70&quot; /&gt;&#10;            &lt;/Array&gt;&#10;          &lt;/mxGeometry&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-9&quot; value=&quot;&amp;lt;br&amp;gt;&amp;lt;font color=&amp;quot;#0800ff&amp;quot;&amp;gt;(Inventory of Products Data)&amp;lt;br&amp;gt;&amp;lt;/font&amp;gt;productInventoryOptionsData.ts&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;645&quot; y=&quot;260&quot; width=&quot;200&quot; height=&quot;70&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-11&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.633;entryY=1.014;entryDx=0;entryDy=0;entryPerimeter=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-9&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-15&quot; value=&quot;&amp;lt;font color=&amp;quot;#00cc00&amp;quot;&amp;gt;Local Cookies&amp;lt;br&amp;gt;&amp;lt;/font&amp;gt;User cookies held locally on their system for selection choices. This allows seamless sharing of data between the Main Page and Checkout Page. Get and set cookies with vue-cookies.&quot; style=&quot;rounded=1;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot;&gt;&#10;          &lt;mxGeometry x=&quot;310&quot; y=&quot;410&quot; width=&quot;270&quot; height=&quot;100&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-16&quot; value=&quot;&quot; style=&quot;endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=0.25;entryY=1;entryDx=0;entryDy=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-15&quot; target=&quot;WIyWlLk6GJQsqaUBKTNV-7&quot;&gt;&#10;          &lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&#10;            &lt;mxPoint x=&quot;390&quot; y=&quot;410&quot; as=&quot;sourcePoint&quot; /&gt;&#10;            &lt;mxPoint x=&quot;440&quot; y=&quot;360&quot; as=&quot;targetPoint&quot; /&gt;&#10;            &lt;Array as=&quot;points&quot;&gt;&#10;              &lt;mxPoint x=&quot;450&quot; y=&quot;300&quot; /&gt;&#10;            &lt;/Array&gt;&#10;          &lt;/mxGeometry&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-21&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-15&quot; target=&quot;4Sem7h08CXicW_EyFrDL-15&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-22&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-15&quot; target=&quot;4Sem7h08CXicW_EyFrDL-15&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;        &lt;mxCell id=&quot;4Sem7h08CXicW_EyFrDL-24&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;&quot; edge=&quot;1&quot; parent=&quot;WIyWlLk6GJQsqaUBKTNV-1&quot; source=&quot;4Sem7h08CXicW_EyFrDL-15&quot; target=&quot;4Sem7h08CXicW_EyFrDL-15&quot;&gt;&#10;          &lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; /&gt;&#10;        &lt;/mxCell&gt;&#10;      &lt;/root&gt;&#10;    &lt;/mxGraphModel&gt;&#10;  &lt;/diagram&gt;&#10;&lt;/mxfile&gt;&#10;"
            onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;page=0&amp;edit=_blank');}}})(this);"
            style="cursor:pointer;max-width:100%;max-height:456px;">
            <defs />
            <g>
            <path d="M 70 157 L 70 182 L 70 196.88" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="stroke" />
            <path d="M 70 205.88 L 65.5 196.88 L 74.5 196.88 Z" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="all" />
            <rect x="0" y="87" width="140" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
                <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 122px; margin-left: 1px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                        style="box-sizing: border-box; font-size: 0px; text-align: center;">
                        <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <br />
                        <font color="#ff0000">(Main Page)</font><br />StoreView.vue<br />
                        </div>
                    </div>
                    </div>
                </foreignObject><text x="70" y="126" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                    text-anchor="middle">(Main Page)...</text>
                </switch>
            </g>
            <path d="M 240 172 L 190 172 L 190 137 L 146.37 137" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="stroke" />
            <path d="M 141.12 137 L 148.12 133.5 L 146.37 137 L 148.12 140.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="all" />
            <path d="M 240 189.5 L 190 189.5 L 190 252 L 146.37 252" fill="none" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="stroke" />
            <path d="M 141.12 252 L 148.12 248.5 L 146.37 252 L 148.12 255.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="all" />
            <rect x="240" y="137" width="114" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)"
                stroke="rgb(0, 0, 0)" pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
                <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 112px; height: 1px; padding-top: 172px; margin-left: 241px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                        style="box-sizing: border-box; font-size: 0px; text-align: center;">
                        <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <font color="#8c00ff">Component</font><br />CheckOut.vue
                        </div>
                    </div>
                    </div>
                </foreignObject><text x="297" y="176" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                    text-anchor="middle">Component...</text>
                </switch>
            </g>
            <rect x="0" y="207" width="140" height="90" rx="13.5" ry="13.5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
                <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 252px; margin-left: 1px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                        style="box-sizing: border-box; font-size: 0px; text-align: center;">
                        <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <font color="#ff0000">(Checkout Page)</font><br />StoreCheckOutView.vue
                        </div>
                    </div>
                    </div>
                </foreignObject><text x="70" y="256" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                    text-anchor="middle">(Checkout Page)...</text>
                </switch>
            </g>
            <path d="M 234 82 L 187 82 L 187 104.5 L 146.37 104.5" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="stroke" />
            <path d="M 141.12 104.5 L 148.12 101 L 146.37 104.5 L 148.12 108 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="all" />
            <rect x="234" y="47" width="120" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
                <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 82px; margin-left: 235px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                        style="box-sizing: border-box; font-size: 0px; text-align: center;">
                        <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <br />
                        <font color="#8c00ff">Component<br /></font>ProductGallery.vue
                        </div>
                    </div>
                    </div>
                </foreignObject><text x="294" y="86" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                    text-anchor="middle">Component...</text>
                </switch>
            </g>
            <path
            d="M 373.6 167.39 L 378.46 176.69 L 354.44 171.77 L 364.09 149.23 L 368.96 158.53 L 429.22 127 L 368.96 95.47 L 364.09 104.77 L 354.44 82.23 L 378.46 77.31 L 373.6 86.61 L 450.78 127 Z"
            fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="1.42" pointer-events="all" />
            <path d="M 373.6 167.39 L 378.46 176.69 L 354.44 171.77 L 364.09 149.23 L 368.96 158.53" fill="none"
            stroke="rgb(0, 0, 0)" stroke-miterlimit="4" pointer-events="all" />
            <path d="M 368.96 95.47 L 364.09 104.77 L 354.44 82.23 L 378.46 77.31 L 373.6 86.61" fill="none"
            stroke="rgb(0, 0, 0)" stroke-miterlimit="4" pointer-events="all" />
            <rect x="450" y="67" width="230" height="110" rx="16.5" ry="16.5" fill="rgb(255, 255, 255)"
            stroke="rgb(0, 0, 0)" pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 228px; height: 1px; padding-top: 122px; margin-left: 451px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        These components interact only by using props passed through the StoreView.vue main page.</div>
                    </div>
                </div>
                </foreignObject><text x="565" y="126" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                text-anchor="middle">These components interact only by usin...</text>
            </switch>
            </g>
            <path d="M 460 322 L 325.5 322 L 325.5 213.37" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
            pointer-events="stroke" />
            <path d="M 325.5 208.12 L 329 215.12 L 325.5 213.37 L 322 215.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
            stroke-miterlimit="10" pointer-events="all" />
            <rect x="460" y="287" width="210" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)"
            stroke="rgb(0, 0, 0)" pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 208px; height: 1px; padding-top: 322px; margin-left: 461px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        (Interface and simple data structure organization for each product - stored as an array of
                        objects)<br />
                        <font color="#0800ff">InventoryData.ts</font>
                    </div>
                    </div>
                </div>
                </foreignObject><text x="565" y="326" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                text-anchor="middle">(Interface and simple data structur...</text>
            </switch>
            </g>
            <path d="M 665 230.75 L 751 230.8 L 751 7 L 294 7 L 294 40.63" fill="none" stroke="rgb(0, 0, 0)"
            stroke-miterlimit="10" pointer-events="stroke" />
            <path d="M 294 45.88 L 290.5 38.88 L 294 40.63 L 297.5 38.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
            stroke-miterlimit="10" pointer-events="all" />
            <rect x="465" y="197" width="200" height="70" rx="10.5" ry="10.5" fill="rgb(255, 255, 255)"
            stroke="rgb(0, 0, 0)" pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 198px; height: 1px; padding-top: 232px; margin-left: 466px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <br />
                        <font color="#0800ff">(Inventory of Products Data)<br /></font>productInventoryOptionsData.ts
                    </div>
                    </div>
                </div>
                </foreignObject><text x="565" y="236" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                text-anchor="middle">(Inventory of Products Data)...</text>
            </switch>
            </g>
            <path d="M 465 232 L 312.2 232 L 312.17 214.35" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
            pointer-events="stroke" />
            <path d="M 312.16 209.1 L 315.67 216.09 L 312.17 214.35 L 308.67 216.1 Z" fill="rgb(0, 0, 0)"
            stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" />
            <rect x="130" y="347" width="270" height="100" rx="15" ry="15" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
            pointer-events="all" />
            <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 268px; height: 1px; padding-top: 397px; margin-left: 131px;">
                    <div data-drawio-colors="color: rgb(0, 0, 0); "
                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                        <font color="#00cc00">Local Cookies<br /></font>User cookies held locally on their system for
                        selection choices. This allows seamless sharing of data between the Main Page and Checkout Page. Get
                        and set cookies with vue-cookies.
                    </div>
                    </div>
                </div>
                </foreignObject><text x="265" y="401" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px"
                text-anchor="middle">Local Cookies...</text>
            </switch>
            </g>
            <path d="M 265.29 340.64 L 270 237 L 268.82 213.36" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
            pointer-events="stroke" />
            <path d="M 265.05 345.88 L 261.87 338.73 L 265.29 340.64 L 268.87 339.05 Z" fill="rgb(0, 0, 0)"
            stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" />
            <path d="M 268.56 208.12 L 272.4 214.93 L 268.82 213.36 L 265.41 215.28 Z" fill="rgb(0, 0, 0)"
            stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" />
        </g>
        <switch>
            <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" /><a transform="translate(0,-5)"
            xlink:href="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank"><text
                text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a>
        </switch>
        </svg>
    </div>   
 
    <p>Diagram made using <a class="text-links" href='https://app.diagrams.net/'>
                https://app.diagrams.net/
     </a></p>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   props: ["title", "header", "text", "imagePath", "url"],
   methods: {
     closeModal() {
       this.$emit("close");
     },
   },
 };
 </script>
 
 
 <!-- scoped applies to only this component -->
 <style scoped>
 h1 {
   color: rgb(105, 105, 198);
   border: none;
   padding: 0;
 }
 
 .aboutDiagram {   
   width:calc(100% - 40%);
   margin-left: 20%;
   margin-top: 8vh;
   background: rgb(255, 255, 255);
   border-radius: 2em;
   position: relative;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
   
 }
 
 .backdrop {
   top: 0;
   position: fixed;
   width: 100%;
   height: 100%;
   
   /* bring this in front of all other elements */
   z-index: 1000;
 }
 
 .text-links {
   color: #42b883;  
 }
 
 ul{
   text-align: left; 
   padding-left: 4em;
   font-size: 1.3em;
   list-style: none;
 }
 
 
 .about-modal-text {
   display: inline-block;
   max-width: 500px;
   text-align: left;
   padding: 1em;
   font-size: 1em;
   line-height: 1.5;
   padding-bottom: 1em; 
   
 }
 
 h2 {
   color: rgb(16, 16, 16);   
   padding: 1em;
   
   padding-bottom: 0em;
   font-size: 2.25em;
   text-align: left;
 }
 
 /* CSS FOR MODAL "X" Close button*/
 .close {
   position: absolute;
   top: 0em;
   right: 0em;
   cursor: pointer;
   width: 15px;
   height: 15px;
 
   border: none;
   width: 40px;
   height: 40px;
   background-color: #42b883;
   border-top-right-radius: 10px;
   /* matches the modal top right corner */
   border-bottom-left-radius: 10px;
   /* matches the modal top right corner */
 }
 
 .close:hover {
   background-color: #ff5959;
 }
 
 .close:before,
 .close:after {
   position: absolute;
   left: 15px;
   content: " ";
   height: 28px;
   width: 2px;
   background-color: #000000;
   top: 0.5em;
   left: 1.4em;
 }
 .close:before {
   transform: rotate(45deg);
 }
 .close:after {
   transform: rotate(-45deg);
 }
 li + li {
   margin-top: 0.5em;
 }
 
 @media only screen and (max-width: 50rem) {
   h2 {
     font-size: 1.25em;
   }

   .aboutDiagram {  
    width:calc(100% - 2%);
   margin-left: 1%;
   }
 }
 </style>