"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[888],{1318:function(t,e,r){var n=r(5656),o=r(1400),a=r(6244),i=function(t){return function(e,r,i){var s,l=n(e),u=a(l),c=o(i,u);if(t&&r!=r){while(u>c)if(s=l[c++],s!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===r)return t||c||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},3658:function(t,e,r){var n=r(9781),o=r(3157),a=TypeError,i=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(o(t)&&!i(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9920:function(t,e,r){var n=r(2597),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e,r){for(var s=o(e),l=i.f,u=a.f,c=0;c<s.length;c++){var h=s[c];n(t,h)||r&&n(r,h)||l(t,h,u(e,h))}}},7207:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,a=r(8880),i=r(8052),s=r(3072),l=r(9920),u=r(4705);t.exports=function(t,e){var r,c,h,f,d,m,p=t.target,g=t.global,y=t.stat;if(c=g?n:y?n[p]||s(p,{}):(n[p]||{}).prototype,c)for(h in e){if(d=e[h],t.dontCallGetSet?(m=o(c,h),f=m&&m.value):f=c[h],r=u(g?h:p+(y?".":"#")+h,t.forced),!r&&void 0!==f){if(typeof d==typeof f)continue;l(d,f)}(t.sham||f&&f.sham)&&a(d,"sham",!0),i(c,h,d,t)}}},8361:function(t,e,r){var n=r(1702),o=r(7293),a=r(4326),i=Object,s=n("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):i(t)}:i},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),o=r(614),a=/#|\.prototype\./,i=function(t,e){var r=l[s(t)];return r==c||r!=u&&(o(e)?n(e):!!e)},s=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},l=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},4758:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},1236:function(t,e,r){var n=r(9781),o=r(6916),a=r(5296),i=r(9114),s=r(5656),l=r(4948),u=r(2597),c=r(4664),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=s(t),e=l(e),c)try{return h(t,e)}catch(r){}if(u(t,e))return i(!o(a.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748),a=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,r){var n=r(1702),o=r(2597),a=r(5656),i=r(1318).indexOf,s=r(3501),l=n([].push);t.exports=function(t,e){var r,n=a(t),u=0,c=[];for(r in n)!o(s,r)&&o(n,r)&&l(c,r);while(e.length>u)o(n,r=e[u++])&&(~i(c,r)||l(c,r));return c}},5296:function(t,e){var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:function(t,e,r){var n=r(5005),o=r(1702),a=r(8006),i=r(5181),s=r(9670),l=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(s(t)),r=i.f;return r?l(e,r(t)):e}},1400:function(t,e,r){var n=r(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t,e,r){var n=r(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7658:function(t,e,r){var n=r(2109),o=r(7908),a=r(6244),i=r(3658),s=r(7207),l=r(7293),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!c();n({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=o(this),r=a(e),n=arguments.length;s(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return i(e,r),r}})},9105:function(t,e,r){r.d(e,{Z:function(){return i}});var n={name:"FastQuickSort",data(){return{}},methods:{invoke(t=[]){let e=t;const r=this.getQuickSort(e,0,e.length-1);return r},getQuickSort(t,e,r){const n=(t,e,r)=>{if(!Array.isArray(t))throw new TypeError("Please input a valid list or array.");if(e<r){const a=o(t,e,r);n(t,e,a-1),n(t,a+1,r)}return t},o=(t,e,r)=>{const n=t[r];let o=e;for(let a=e;a<=r-1;a++)t[a]<n&&([t[a],t[o]]=[t[o],t[a]],o+=1);return[t[o],t[r]]=[t[r],t[o]],o},a=n(t,e,r);return a}}},o=r(3744);const a=(0,o.Z)(n,[["__scopeId","data-v-1cae36b8"]]);var i=a},6888:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n=r(6252),o=r(9963),a=r(3577);const i=t=>((0,n.dD)("data-v-69880757"),t=t(),(0,n.Cn)(),t),s={class:"background-color",style:{"padding-top":"3em"}},l={class:""},u=(0,n.uE)('<h1 data-v-69880757>Sorting algorithms: <p style="font-size:0.5em;" data-v-69880757>This area is just a place to do stuff with sorting algorithms </p></h1><div class="text-container" data-v-69880757><p class="paragraph-text" data-v-69880757>What is <a class="bogo-link no-underlines" style="color:#fff;" href="https://en.wikipedia.org/wiki/Bogosort" data-v-69880757>Bogosort?</a></p><br data-v-69880757><p class="paragraph-text" data-v-69880757>This button below will Bogosort an array. There really is no limit on how bad a sorting algorithm can be, they can always be made worse. Bogosort is nearly useless unless the goal is to heat up a room with a cpu. This code will, with each iteration add an element (random integer 1-100) to an array of the user specified array length. This is currently using the performance.now() function to measure performance time it takes to sort each newly pushed element. <b data-v-69880757>Careful!</b> If the size of a &#39;bogosorted&#39; (Bogosort as a past tense verb) array is 12 or higher it will likely freeze the page. It uses the time complexity of Θ(n × n!) which means that the algorithm&#39;s running time grows at a rate proportional to n multiplied by the factorial of n. This is an extremely high time complexity and is considered to be extremely, extremely inefficient.<br data-v-69880757> Next will be a Bogosorted array of Bogosorted arrays? <br data-v-69880757></p><br data-v-69880757></div>',2),c={style:{display:"inline-block"}},h=i((()=>(0,n._)("br",null,null,-1))),f=i((()=>(0,n._)("br",null,null,-1))),d=i((()=>(0,n._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Bogosort!",-1))),m=i((()=>(0,n._)("br",null,null,-1))),p={class:"table-container"},g={style:{color:"#fff","text-align":"left"}},y=i((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{width:"6em"}},"Array Size"),(0,n._)("th",{style:{width:"15em"}},"Sorted Array"),(0,n._)("th",{style:{width:"11em"}},"Number of Shuffles"),(0,n._)("th",null,"Elapsed Time (ms)")])],-1))),b={style:{"padding-right":"1em"}},w={style:{"padding-right":"1em","padding-bottom":"0.5em"}},v={style:{"padding-bottom":"0.5em"}},k=(0,n.uE)('<img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1195690/4e2f1695d6cad53e90dbd8b481db806b49f6a56f.png" alt="Bogo Sort GIF" data-v-69880757><pre class="language-JavaScript line-numbers" data-v-69880757><code data-v-69880757>      \n  // Following section is BOGOSORT\n    bogoSort() {\n      let startTime = performance.now();\n\n      this.bogoSortArrayButtonClicked = true;\n\n      for (let i = 1; i &lt;= this.arrayInput; i++) {\n        const arr = [];\n        for (let j = 0; j &lt; i; j++) {\n          const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed\n          arr.push(randomNumber);\n        }\n        let number_of_shuffles = 0;\n        \n        while (!this.isSorted(arr)) {\n          number_of_shuffles++;\n          this.shuffle(arr);\n        }\n        let endTime = performance.now();\n        let elapsedTime = (endTime - startTime);\n\n        this.arrayOfArrays.push([i, arr, number_of_shuffles, elapsedTime]);\n      }\n    },\n    // Function to generate a random integer between min and max (inclusive)\n    getRandomInt(min, max) {\n      return Math.floor(Math.random() * (max - min + 1)) + min;\n    },\n    // This is an implementation of the Fisher-Yates shuffle algorithm, which is an efficient way to shuffle an array.\n    shuffle(arr) {\n      for (let i = arr.length - 1; i &gt; 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [arr[i], arr[j]] = [arr[j], arr[i]];\n      }\n    },\n    isSorted(arr) {\n      for (let i = 1; i &lt; arr.length; i++) {\n        if (arr[i] &lt; arr[i - 1]) {\n          return false;\n        }\n      }\n      return true;\n    },\n</code>\n</pre><div class="text-container" data-v-69880757><p style="padding-top:1em;" class="paragraph-text" data-v-69880757>What is <a class="bogo-link no-underlines" style="color:#fff;" href="https://en.wikipedia.org/wiki/Bogosort" data-v-69880757>Quicksort?</a></p><br data-v-69880757><p class="paragraph-text" style="padding-top:1em;" data-v-69880757> A professional recursive quicksort algorithm is much, much, much better than BogoSort! On my computer 1000 random integers between 1-100 only takes about 0.53ms to sort. <br data-v-69880757> What is interesting about this is with 1000 arrays each with a size of 1000, on the first button click, and sometimes the first few it tends to take around 1.5ms on this computer for the sorting to complete, but then the time on subsequent clicks drops down to around 0.419ms. This is likely due to browser caching and the local computer operating system deciding how to allocate resources to the browser when new code is loaded to run. Running 1000 arrays generating 1000 random integers between 1-100 it takes Quicksort about 0.419 ms on this computer. This processing time will be faster or slower depending on the cpu speed, resources available, etc. What is also interesting is that the time it takes to sort these 1000 random integers is slightly slower on the Firefox Browser than Chrome. For general use no one will ever notice, but Firefox with the same computer takes about 0.751ms to sort 1000 arrays of 1000 random integers between 1-100 using Quicksort. Resetting the variables after already running the sorting algorithm removes this initial lag time! The browser already knows what code to run so the first iterations immediately run fast. <br data-v-69880757> Quicksort is usually the fastest sorting algorithm there is for most applications. If one has a list that is already almost sorted insertion sort is faster. Quicksort will create an unncessary amount of pivots and waste time if given a long list/array that has 1 million items and only 2 items are not in order. Insertion sort will be faster than quickSort for a small set of data when based on the worst case scenario. Heap sort will be faster than quickSort with a large set of data when quickSort has the worst case scenario. <br data-v-69880757> Good explanation of quickSort and other algorithms: <a class="text-links" style="color:#fff;" href="https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html" data-v-69880757>https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html</a></p></div>',3),S={style:{display:"inline-block"}},_=i((()=>(0,n._)("br",null,null,-1))),x=i((()=>(0,n._)("br",null,null,-1))),A=i((()=>(0,n._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Quicksort!",-1))),T=i((()=>(0,n._)("br",null,null,-1))),O={class:"table-container"},I={style:{color:"#fff","text-align":"left"}},B=i((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{width:"6em"}},"Array Size"),(0,n._)("th",{style:{width:"15em"}},"Sorted Array"),(0,n._)("th",null,"Elapsed Time (ms)"),(0,n._)("th",null,"Average")])],-1))),C={style:{"vertical-align":"top","padding-right":"1em"}},q={style:{"padding-right":"1em","padding-bottom":"0.5em"}},z={style:{"vertical-align":"top","padding-right":"1em"}},M={style:{"vertical-align":"top","padding-bottom":"0.5em"}};function Q(t,e,r,i,Q,j){const F=(0,n.up)("FastQuickSort");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",l,[u,(0,n._)("div",c,[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>j.bogoSort&&j.bogoSort(...t)),class:"button-35",style:{background:"#424242"}},"Click me to Bogosort"),(0,n._)("button",{onClick:e[1]||(e[1]=t=>(Q.arrayOfArrays=[],Q.bogoSortArrayButtonClicked=!1)),class:"button-35",style:{background:"#424242","margin-left":"0.5em"}},"Reset")]),h,f,d,(0,n.wy)((0,n._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[2]||(e[2]=t=>Q.arrayInput=t),placeholder:""},null,512),[[o.nr,Q.arrayInput]]),m,(0,n.wy)((0,n._)("div",p,[(0,n._)("table",g,[y,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Q.arrayOfArrays,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",b,(0,a.zw)(t[0]),1),(0,n._)("td",w,(0,a.zw)(t[1]),1),(0,n._)("td",v,(0,a.zw)(t[2]),1),(0,n._)("td",null,(0,a.zw)("Milliseconds: "+t[3].toFixed(3)),1)])))),128))])])],512),[[o.F8,Q.bogoSortArrayButtonClicked]]),k,(0,n._)("div",S,[(0,n._)("button",{class:"button-35",onClick:e[3]||(e[3]=(...t)=>j.quickSort&&j.quickSort(...t))},"Quick Sort"),(0,n._)("button",{onClick:e[4]||(e[4]=t=>(Q.quickSortArrays=[],Q.averageTimeTaken=0)),class:"button-35",style:{background:"#424242","margin-left":"0.5em"}},"Reset")]),_,x,A,(0,n.wy)((0,n._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[5]||(e[5]=t=>Q.arrayInputQuickSort=t),placeholder:""},null,512),[[o.nr,Q.arrayInputQuickSort]]),T,(0,n.wy)((0,n._)("div",O,[(0,n._)("table",I,[B,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Q.quickSortArrays,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",C,(0,a.zw)(t[0]),1),(0,n._)("td",q,(0,a.zw)(t[1]),1),(0,n._)("td",z,(0,a.zw)("Milliseconds: "+t[2].toFixed(3)),1),(0,n._)("td",M,(0,a.zw)((Q.averageTimeTaken/Q.quickSortArrays.length).toFixed(3)),1)])))),128))])])],512),[[o.F8,Q.quickSortArrayButtonClicked]]),(0,n.Wm)(F,{ref:"fastQuickSort"},null,512)])])}r(7658);var j=r(5660),F=r.n(j),E=r(9105),P={name:"SortingAlgorithmsView",components:{FastQuickSort:E.Z},data(){return{bogoSortArray:[],bogoSortArrayButtonClicked:!1,arrayOfArrays:[],quickSortArray:[],quickSortArrayButtonClicked:!1,quickSortArrays:[],averageTimeTaken:0,arrayInput:9,arrayInputQuickSort:1e3,sortedArray:[],arrayToSort:[],thousandArray:[]}},mounted(){F().highlightAll()},methods:{bogoSort(){let t=performance.now();this.bogoSortArrayButtonClicked=!0;for(let e=1;e<=this.arrayInput;e++){const r=[];for(let t=0;t<e;t++){const t=this.getRandomInt(1,100);r.push(t)}let n=0;while(!this.isSorted(r))n++,this.shuffle(r);let o=performance.now(),a=o-t;this.arrayOfArrays.push([e,r,n,a])}},getRandomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t},shuffle(t){for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}},isSorted(t){for(let e=1;e<t.length;e++)if(t[e]<t[e-1])return!1;return!0},quickSort(){this.arrayToSort=[];let t=this.arrayToSort;for(let o=0;o<this.arrayInputQuickSort;o++){const e=Math.floor(100*Math.random())+1;t.push(e)}this.quickSortArrayButtonClicked=!0;let e=performance.now();const r=this.$refs.fastQuickSort;this.thousandArray=r.invoke([...t],0,t.length-1),console.log(this.thousandArray);let n=performance.now();this.timeTaken=n-e,this.averageTimeTaken+=this.timeTaken,this.quickSortArrays.push([this.thousandArray.length,this.thousandArray,this.timeTaken])}}},R=r(3744);const D=(0,R.Z)(P,[["render",Q],["__scopeId","data-v-69880757"]]);var N=D}}]);
//# sourceMappingURL=888.c69301d0.js.map