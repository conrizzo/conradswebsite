"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[551],{1318:function(t,e,r){var n=r(5656),o=r(1400),a=r(6244),i=function(t){return function(e,r,i){var s,l=n(e),u=a(l),c=o(i,u);if(t&&r!=r){while(u>c)if(s=l[c++],s!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===r)return t||c||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},3658:function(t,e,r){var n=r(9781),o=r(3157),a=TypeError,i=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(o(t)&&!i(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9920:function(t,e,r){var n=r(2597),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e,r){for(var s=o(e),l=i.f,u=a.f,c=0;c<s.length;c++){var h=s[c];n(t,h)||r&&n(r,h)||l(t,h,u(e,h))}}},7207:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,a=r(8880),i=r(8052),s=r(3072),l=r(9920),u=r(4705);t.exports=function(t,e){var r,c,h,d,f,m,g=t.target,p=t.global,y=t.stat;if(c=p?n:y?n[g]||s(g,{}):(n[g]||{}).prototype,c)for(h in e){if(f=e[h],t.dontCallGetSet?(m=o(c,h),d=m&&m.value):d=c[h],r=u(p?h:g+(y?".":"#")+h,t.forced),!r&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&a(f,"sham",!0),i(c,h,f,t)}}},8361:function(t,e,r){var n=r(1702),o=r(7293),a=r(4326),i=Object,s=n("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):i(t)}:i},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),o=r(614),a=/#|\.prototype\./,i=function(t,e){var r=l[s(t)];return r==c||r!=u&&(o(e)?n(e):!!e)},s=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},l=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},4758:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},1236:function(t,e,r){var n=r(9781),o=r(6916),a=r(5296),i=r(9114),s=r(5656),l=r(4948),u=r(2597),c=r(4664),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=s(t),e=l(e),c)try{return h(t,e)}catch(r){}if(u(t,e))return i(!o(a.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748),a=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,r){var n=r(1702),o=r(2597),a=r(5656),i=r(1318).indexOf,s=r(3501),l=n([].push);t.exports=function(t,e){var r,n=a(t),u=0,c=[];for(r in n)!o(s,r)&&o(n,r)&&l(c,r);while(e.length>u)o(n,r=e[u++])&&(~i(c,r)||l(c,r));return c}},5296:function(t,e){var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:function(t,e,r){var n=r(5005),o=r(1702),a=r(8006),i=r(5181),s=r(9670),l=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(s(t)),r=i.f;return r?l(e,r(t)):e}},1400:function(t,e,r){var n=r(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t,e,r){var n=r(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7658:function(t,e,r){var n=r(2109),o=r(7908),a=r(6244),i=r(3658),s=r(7207),l=r(7293),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!c();n({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=o(this),r=a(e),n=arguments.length;s(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return i(e,r),r}})},5585:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(6252),o=r(3577);const a={class:"footer"},i=(0,n._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),s=(0,n._)("br",null,null,-1),l=(0,n._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY NC 4.0",-1);function u(t,e,r,u,c,h){return(0,n.wg)(),(0,n.iD)("footer",a,[(0,n._)("div",null,[(0,n._)("span",null,[(0,n.Uk)(" Conrad's account on "),i,(0,n.Uk)(" | conradswebsite.com © "+(0,o.zw)(h.getCurrentYear),1),s,(0,n.Uk)(" unless mentioned otherwise, licensing is "),l,(0,n.Uk)(". ")])])])}var c={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},h=r(3744);const d=(0,h.Z)(c,[["render",u]]);var f=d},9105:function(t,e,r){r.d(e,{Z:function(){return i}});var n={name:"FastQuickSort",data(){return{}},methods:{invoke(t=[]){let e=t;const r=this.getQuickSort(e,0,e.length-1);return r},getQuickSort(t,e,r){const n=(t,e,r)=>{if(!Array.isArray(t))throw new TypeError("Please input a valid list or array.");if(e<r){const a=o(t,e,r);n(t,e,a-1),n(t,a+1,r)}return t},o=(t,e,r)=>{const n=t[r];let o=e;for(let a=e;a<=r-1;a++)t[a]<n&&([t[a],t[o]]=[t[o],t[a]],o+=1);return[t[o],t[r]]=[t[r],t[o]],o},a=n(t,e,r);return a}}},o=r(3744);const a=(0,o.Z)(n,[["__scopeId","data-v-1cae36b8"]]);var i=a},5551:function(t,e,r){r.r(e),r.d(e,{default:function(){return H}});var n=r(6252),o=r(9963),a=r(3577);const i=t=>((0,n.dD)("data-v-cd74d086"),t=t(),(0,n.Cn)(),t),s={class:"background-color",style:{"padding-top":"3em"}},l={class:""},u=i((()=>(0,n._)("h1",null,[(0,n.Uk)("Sorting algorithms: "),(0,n._)("p",{style:{"font-size":"0.5em"}},"This area is just a place to do stuff with sorting algorithms")],-1))),c=i((()=>(0,n._)("p",{class:"paragraph-text"},[(0,n.Uk)("What is "),(0,n._)("a",{class:"bogo-link no-underlines",style:{color:"#fff"},href:"https://en.wikipedia.org/wiki/Bogosort"},"Bogosort?")],-1))),h=i((()=>(0,n._)("br",null,null,-1))),d=i((()=>(0,n._)("p",{class:"paragraph-text"},[(0,n.Uk)("This button below will Bogosort an array. There really is no limit on how bad a sorting algorithm can be, they can always be made worse. Bogosort is nearly useless unless the goal is to heat up a room with a cpu. This code will, with each iteration add an element (random integer 1-100) to an array of the user specified array length. This is currently using the performance.now() function to measure performance time it takes to sort each newly pushed element. "),(0,n._)("b",null,"Careful!"),(0,n.Uk)(" If the size of a 'bogosorted' (Bogosort as a past tense verb) array is 12 or higher it will likely freeze the page. It uses the time complexity of Θ(n × n!) which means that the algorithm's running time grows at a rate proportional to n multiplied by the factorial of n. This is an extremely high time complexity and is considered to be extremely, extremely inefficient."),(0,n._)("br"),(0,n.Uk)(" Next will be a Bogosorted array of Bogosorted arrays? "),(0,n._)("br")],-1))),f=i((()=>(0,n._)("br",null,null,-1))),m={style:{display:"inline-block"}},g=i((()=>(0,n._)("br",null,null,-1))),p=i((()=>(0,n._)("br",null,null,-1))),y=i((()=>(0,n._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Bogosort!",-1))),b=i((()=>(0,n._)("br",null,null,-1))),w={class:"table-container"},k={style:{color:"#fff","text-align":"left"}},v=i((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{width:"6em"}},"Array Size"),(0,n._)("th",{style:{width:"15em"}},"Sorted Array"),(0,n._)("th",{style:{width:"11em"}},"Number of Shuffles"),(0,n._)("th",null,"Elapsed Time (ms)")])],-1))),_={style:{"padding-right":"1em"}},S={style:{"padding-right":"1em","padding-bottom":"0.5em"}},x={style:{"padding-bottom":"0.5em"}},A=(0,n.uE)('<img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1195690/4e2f1695d6cad53e90dbd8b481db806b49f6a56f.png" alt="Bogo Sort GIF" data-v-cd74d086><pre class="language-JavaScript line-numbers" data-v-cd74d086><code data-v-cd74d086>      \n  // Following section is BOGOSORT\n    bogoSort() {\n      let startTime = performance.now();\n\n      this.bogoSortArrayButtonClicked = true;\n\n      for (let i = 1; i &lt;= this.arrayInput; i++) {\n        const arr = [];\n        for (let j = 0; j &lt; i; j++) {\n          const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed\n          arr.push(randomNumber);\n        }\n        let number_of_shuffles = 0;\n        \n        while (!this.isSorted(arr)) {\n          number_of_shuffles++;\n          this.shuffle(arr);\n        }\n        let endTime = performance.now();\n        let elapsedTime = (endTime - startTime);\n\n        this.arrayOfArrays.push([i, arr, number_of_shuffles, elapsedTime]);\n      }\n    },\n    // Function to generate a random integer between min and max (inclusive)\n    getRandomInt(min, max) {\n      return Math.floor(Math.random() * (max - min + 1)) + min;\n    },\n    // This is an implementation of the Fisher-Yates shuffle algorithm, which is an efficient way to shuffle an array.\n    shuffle(arr) {\n      for (let i = arr.length - 1; i &gt; 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [arr[i], arr[j]] = [arr[j], arr[i]];\n      }\n    },\n    isSorted(arr) {\n      for (let i = 1; i &lt; arr.length; i++) {\n        if (arr[i] &lt; arr[i - 1]) {\n          return false;\n        }\n      }\n      return true;\n    },\n</code>\n</pre><p style="padding-top:1em;" class="paragraph-text" data-v-cd74d086>What is <a class="bogo-link no-underlines" style="color:#fff;" href="https://en.wikipedia.org/wiki/Bogosort" data-v-cd74d086>Quicksort?</a></p><br data-v-cd74d086><p class="paragraph-text" style="padding-top:1em;" data-v-cd74d086> A professional recursive quicksort algorithm is much, much, much better than BogoSort! On my computer 1000 random integers between 1-100 only takes about 0.53ms to sort. <br data-v-cd74d086> What is interesting about this is with 1000 arrays each with a size of 1000, on the first button click, and sometimes the first few it tends to take around 1.5ms on this computer for the sorting to complete, but then the time on subsequent clicks drops down to around 0.419ms. This is likely due to browser caching and the local computer operating system deciding how to allocate resources to the browser when new code is loaded to run. Running 1000 arrays generating 1000 random integers between 1-100 it takes Quicksort about 0.419 ms on this computer. This processing time will be faster or slower depending on the cpu speed, resources available, etc. What is also interesting is that the time it takes to sort these 1000 random integers is slightly slower on the Firefox Browser than Chrome. For general use no one will ever notice, but Firefox with the same computer takes about 0.751ms to sort 1000 arrays of 1000 random integers between 1-100 using Quicksort. Resetting the variables after already running the sorting algorithm removes this initial lag time! The browser already knows what code to run so the first iterations immediately run fast. <br data-v-cd74d086> Quicksort is usually the fastest sorting algorithm there is for most applications. If one has a list that is already almost sorted insertion sort is faster. Quicksort will create an unncessary amount of pivots and waste time if given a long list/array that has 1 million items and only 2 items are not in order. Insertion sort will be faster than quickSort for a small set of data when based on the worst case scenario. Heap sort will be faster than quickSort with a large set of data when quickSort has the worst case scenario. <br data-v-cd74d086> Good explanation of quickSort and other algorithms: <a class="text-links" href="https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html" data-v-cd74d086>https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html</a></p>',5),T={style:{display:"inline-block"}},O=i((()=>(0,n._)("br",null,null,-1))),C=i((()=>(0,n._)("br",null,null,-1))),I=i((()=>(0,n._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Quicksort!",-1))),z=i((()=>(0,n._)("br",null,null,-1))),B={class:"table-container"},F={style:{color:"#fff","text-align":"left"}},q=i((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{width:"6em"}},"Array Size"),(0,n._)("th",{style:{width:"15em"}},"Sorted Array"),(0,n._)("th",null,"Elapsed Time (ms)"),(0,n._)("th",null,"Average")])],-1))),M={style:{"vertical-align":"top","padding-right":"1em"}},Q={style:{"padding-right":"1em","padding-bottom":"0.5em"}},j={style:{"vertical-align":"top","padding-right":"1em"}},E={style:{"vertical-align":"top","padding-bottom":"0.5em"}},P=i((()=>(0,n._)("div",{style:{height:"95vh"}},null,-1)));function D(t,e,r,i,D,U){const R=(0,n.up)("FastQuickSort"),Y=(0,n.up)("FirstFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n._)("div",l,[u,c,h,d,f,(0,n._)("div",m,[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>U.bogoSort&&U.bogoSort(...t)),class:"button-35",style:{background:"#424242"}},"Click me to Bogosort"),(0,n._)("button",{onClick:e[1]||(e[1]=t=>(D.arrayOfArrays=[],D.bogoSortArrayButtonClicked=!1)),class:"button-35",style:{background:"#424242","margin-left":"0.5em"}},"Reset")]),g,p,y,(0,n.wy)((0,n._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[2]||(e[2]=t=>D.arrayInput=t),placeholder:""},null,512),[[o.nr,D.arrayInput]]),b,(0,n.wy)((0,n._)("div",w,[(0,n._)("table",k,[v,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.arrayOfArrays,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",_,(0,a.zw)(t[0]),1),(0,n._)("td",S,(0,a.zw)(t[1]),1),(0,n._)("td",x,(0,a.zw)(t[2]),1),(0,n._)("td",null,(0,a.zw)("Milliseconds: "+t[3].toFixed(3)),1)])))),128))])])],512),[[o.F8,D.bogoSortArrayButtonClicked]]),A,(0,n._)("div",T,[(0,n._)("button",{class:"button-35",onClick:e[3]||(e[3]=(...t)=>U.quickSort&&U.quickSort(...t))},"Quick Sort"),(0,n._)("button",{onClick:e[4]||(e[4]=t=>(D.quickSortArrays=[],D.averageTimeTaken=0)),class:"button-35",style:{background:"#424242","margin-left":"0.5em"}},"Reset")]),O,C,I,(0,n.wy)((0,n._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[5]||(e[5]=t=>D.arrayInputQuickSort=t),placeholder:""},null,512),[[o.nr,D.arrayInputQuickSort]]),z,(0,n.wy)((0,n._)("div",B,[(0,n._)("table",F,[q,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.quickSortArrays,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",M,(0,a.zw)(t[0]),1),(0,n._)("td",Q,(0,a.zw)(t[1]),1),(0,n._)("td",j,(0,a.zw)("Milliseconds: "+t[2].toFixed(3)),1),(0,n._)("td",E,(0,a.zw)((D.averageTimeTaken/D.quickSortArrays.length).toFixed(3)),1)])))),128))])])],512),[[o.F8,D.quickSortArrayButtonClicked]]),(0,n.Wm)(R,{ref:"fastQuickSort"},null,512)]),P]),(0,n.Wm)(Y)],64)}r(7658);var U=r(5585),R=r(5660),Y=r.n(R),N=r(9105),Z={name:"SortingAlgorithmsView",components:{FirstFooter:U.Z,FastQuickSort:N.Z},data(){return{bogoSortArray:[],bogoSortArrayButtonClicked:!1,arrayOfArrays:[],quickSortArray:[],quickSortArrayButtonClicked:!1,quickSortArrays:[],averageTimeTaken:0,arrayInput:9,arrayInputQuickSort:1e3,sortedArray:[],arrayToSort:[],thousandArray:[]}},mounted(){Y().highlightAll()},methods:{bogoSort(){let t=performance.now();this.bogoSortArrayButtonClicked=!0;for(let e=1;e<=this.arrayInput;e++){const r=[];for(let t=0;t<e;t++){const t=this.getRandomInt(1,100);r.push(t)}let n=0;while(!this.isSorted(r))n++,this.shuffle(r);let o=performance.now(),a=o-t;this.arrayOfArrays.push([e,r,n,a])}},getRandomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t},shuffle(t){for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}},isSorted(t){for(let e=1;e<t.length;e++)if(t[e]<t[e-1])return!1;return!0},quickSort(){this.arrayToSort=[];let t=this.arrayToSort;for(let o=0;o<this.arrayInputQuickSort;o++){const e=Math.floor(100*Math.random())+1;t.push(e)}this.quickSortArrayButtonClicked=!0;let e=performance.now();const r=this.$refs.fastQuickSort;this.thousandArray=r.invoke([...t],0,t.length-1),console.log(this.thousandArray);let n=performance.now();this.timeTaken=n-e,this.averageTimeTaken+=this.timeTaken,this.quickSortArrays.push([this.thousandArray.length,this.thousandArray,this.timeTaken])}}},W=r(3744);const G=(0,W.Z)(Z,[["render",D],["__scopeId","data-v-cd74d086"]]);var H=G}}]);
//# sourceMappingURL=551.6f6734f6.js.map