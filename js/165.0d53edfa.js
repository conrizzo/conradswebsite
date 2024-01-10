"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[165],{9105:function(t,e,r){r.d(e,{Z:function(){return i}});var a={name:"FastQuickSort",data(){return{}},methods:{invoke(t=[]){let e=t;const r=this.getQuickSort(e,0,e.length-1);return r},getQuickSort(t,e,r){const a=(t,e,r)=>{if(!Array.isArray(t))throw new TypeError("Please input a valid list or array.");if(e<r){const o=n(t,e,r);a(t,e,o-1),a(t,o+1,r)}return t},n=(t,e,r)=>{const a=t[r];let n=e;for(let o=e;o<=r-1;o++)t[o]<a&&([t[o],t[n]]=[t[n],t[o]],n+=1);return[t[n],t[r]]=[t[r],t[n]],n},o=a(t,e,r);return o}}},n=r(3744);const o=(0,n.Z)(a,[["__scopeId","data-v-1cae36b8"]]);var i=o},3165:function(t,e,r){r.r(e),r.d(e,{default:function(){return G}});var a=r(6252),n=r(3577),o=r(9963);const i=t=>((0,a.dD)("data-v-21b3094c"),t=t(),(0,a.Cn)(),t),s={class:"background-color",style:{"padding-top":"3em"}},l={class:""},c=i((()=>(0,a._)("div",{class:"main-title-sorting-algorithms"},[(0,a._)("h1",null,"Sorting Algorithm Examples"),(0,a._)("p",{style:{margin:"auto"}}," This area is just a place to do stuff with sorting algorithms. ")],-1))),u={class:"first-algorithm"},h=i((()=>(0,a._)("h2",null,"Bogosort",-1))),f={class:"text-container"},d=(0,a.uE)('<p class="paragraph-text" data-v-21b3094c>What is <a class="bogo-link no-underlines" style="color:#fff;" href="https://en.wikipedia.org/wiki/Bogosort" data-v-21b3094c>Bogosort?</a></p><br data-v-21b3094c><p class="paragraph-text" data-v-21b3094c>This button below will Bogosort an array. There really is no limit on how bad a sorting algorithm can be, they can always be made worse. Bogosort is nearly useless unless the goal is to heat up a room with a cpu. This code will, with each iteration add an element (random integer 1-100) to an array of the user specified array length. This is currently using the performance.now() function to measure performance time it takes to sort each newly pushed element. <b data-v-21b3094c>Careful!</b> If the size of a &#39;bogosorted&#39; (Bogosort as a past tense verb) array is 12 or higher it will likely freeze the page. It uses the time complexity of Θ(n × n!) which means that the algorithm&#39;s running time grows at a rate proportional to n multiplied by the factorial of n. This is an extremely high time complexity and is considered to be extremely, extremely inefficient.<br data-v-21b3094c> Next will be a Bogosorted array of Bogosorted arrays? <br data-v-21b3094c></p><br data-v-21b3094c><div style="justify-content:center;display:flex;padding-bottom:1rem;" data-v-21b3094c><figure data-v-21b3094c><img src="https://www.researchgate.net/publication/371457259/figure/fig3/AS:11431281166794429@1686405800300/Big-O-time-complexity-chart-based-feature-selection-a-Big-O-complexity-chart-b-Time.ppm" alt="Big O Complexity Chart" data-v-21b3094c><figcaption style="text-align:left;color:#fff;" data-v-21b3094c>Big O Complexity Chart -<br data-v-21b3094c> source: <a class="text-links" style="color:#fff;" href="https://www.researchgate.net/publication/371457259_Wearable_Electromyography_Classification_of_Epileptic_Seizures_A_Feasibility_Study" data-v-21b3094c>https://www.researchgate.net/</a></figcaption></figure></div><p class="paragraph-text" data-v-21b3094c>BogoSort is worse than even the worst sorting algorithm on the chart above. To emphasize, it&#39;s useless unless the goal is to heat up a room in the winter with a CPU. It&#39;s still a good educational tool to understand why using the wrong sorting algorithm or a bad algorithm could yield catastropic results. </p>',6),m={style:{display:"inline-block"}},p=i((()=>(0,a._)("br",null,null,-1))),g=i((()=>(0,a._)("br",null,null,-1))),y=i((()=>(0,a._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Bogosort!",-1))),b=i((()=>(0,a._)("br",null,null,-1))),w={class:"table-container"},v={style:{color:"#fff","text-align":"left"}},k=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{style:{width:"6em"}},"Array Size"),(0,a._)("th",{style:{width:"15em"}},"Sorted Array"),(0,a._)("th",{style:{width:"11em"}},"Number of Shuffles"),(0,a._)("th",null,"Elapsed Time (ms)")])],-1))),_={style:{"padding-right":"1em"}},S={style:{"padding-right":"1em","padding-bottom":"0.5em"}},x={style:{"padding-bottom":"0.5em"}},A=i((()=>(0,a._)("div",{style:{"justify-content":"center",display:"flex"}},[(0,a._)("figure",null,[(0,a._)("img",{src:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1195690/4e2f1695d6cad53e90dbd8b481db806b49f6a56f.png",alt:"Bogo Sort GIF"}),(0,a._)("figcaption",null,[(0,a._)("a",{style:{color:"#fff"},class:"text-links",href:"https://vademon.github.io/steam2019emoticons/stickers-Winter2019.html"}," Bird Plop ")])])],-1))),T=i((()=>(0,a._)("pre",{class:(0,n.C_)("language-JavaScript line-numbers")},[(0,a.Uk)("  "),(0,a._)("code",null,"      \n    // Following section is BOGOSORT\n      bogoSort() {\n        let startTime = performance.now();\n\n        this.bogoSortArrayButtonClicked = true;\n\n        for (let i = 1; i <= this.arrayInput; i++) {\n          const arr = [];\n          for (let j = 0; j < i; j++) {\n            const randomNumber = this.getRandomInt(1, 100); // Adjust the range as needed\n            arr.push(randomNumber);\n          }\n          let number_of_shuffles = 0;\n          \n          while (!this.isSorted(arr)) {\n            number_of_shuffles++;\n            this.shuffle(arr);\n          }\n          let endTime = performance.now();\n          let elapsedTime = (endTime - startTime);\n\n          this.arrayOfArrays.push([i, arr, number_of_shuffles, elapsedTime]);\n        }\n      },\n      // Function to generate a random integer between min and max (inclusive)\n      getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n      },\n      // This is an implementation of the Fisher-Yates shuffle algorithm, which is an efficient way to shuffle an array.\n      shuffle(arr) {\n        for (let i = arr.length - 1; i > 0; i--) {\n          const j = Math.floor(Math.random() * (i + 1));\n          [arr[i], arr[j]] = [arr[j], arr[i]];\n        }\n      },\n      isSorted(arr) {\n        for (let i = 1; i < arr.length; i++) {\n          if (arr[i] < arr[i - 1]) {\n            return false;\n          }\n        }\n        return true;\n      },\n  "),(0,a.Uk)("\n  ")],-1))),O={class:"second-algorithm"},B=(0,a.uE)('<div class="text-container" data-v-21b3094c><h2 data-v-21b3094c>Quicksort</h2><p class="paragraph-text" data-v-21b3094c>What is <a class="bogo-link no-underlines" style="color:#fff;" href="https://en.wikipedia.org/wiki/Bogosort" data-v-21b3094c>Quicksort?</a></p><br data-v-21b3094c><p class="paragraph-text" style="padding-top:1em;" data-v-21b3094c> A professional recursive quicksort algorithm is much, much, much better than BogoSort! On my computer 1000 random integers between 1-100 only takes about 0.53ms to sort. What is interesting about this is with 1000 arrays each with a size of 1000, on the first button click, and sometimes the first few it tends to take around 1.5ms on this computer for the sorting to complete, but then the time on subsequent clicks drops down to around 0.419ms. This is likely due to browser caching and the local computer operating system deciding how to allocate resources to the browser when new code is loaded to run. </p><p class="paragraph-text" data-v-21b3094c> Running 1000 arrays generating 1000 random integers between 1-100 it takes Quicksort about 0.419 ms on this computer. This processing time will be faster or slower depending on the cpu speed, resources available, etc. What is also interesting is that the time it takes to sort these 1000 random integers is slightly slower on the Firefox Browser than Chrome. For general use no one will ever notice, but Firefox with the same computer takes about 0.751ms to sort 1000 arrays of 1000 random integers between 1-100 using Quicksort. Resetting the variables after already running the sorting algorithm removes this initial lag time! The browser already knows what code to run so the first iterations immediately run fast. </p><p class="paragraph-text" data-v-21b3094c> Quicksort is usually the fastest sorting algorithm there is for most applications. If one has a list that is already almost sorted insertion sort is faster. Quicksort will create an unncessary amount of pivots and waste time if given a long list/array that has 1 million items and only 2 items are not in order. Insertion sort will be faster than quickSort for a small set of data when based on the worst case scenario. Heap sort will be faster than quickSort with a large set of data when quickSort has the worst case scenario. <br data-v-21b3094c><br data-v-21b3094c><b data-v-21b3094c>A very good explanation of quickSort and other algorithms:</b> <a class="text-links" style="color:#fff;" href="https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html" data-v-21b3094c>https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html</a></p></div>',1),C={style:{display:"inline-block"}},I=i((()=>(0,a._)("br",null,null,-1))),z=i((()=>(0,a._)("br",null,null,-1))),q=i((()=>(0,a._)("label",{style:{"padding-right":"1em",color:"#fff"},for:"number-input"},"Enter length of array to Quicksort!",-1))),M=i((()=>(0,a._)("br",null,null,-1))),Q={class:"table-container"},j={style:{color:"#fff","text-align":"left"}},E=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{style:{width:"6em"}},"Array Size"),(0,a._)("th",{style:{width:"15em"}},"Sorted Array"),(0,a._)("th",null,"Elapsed Time (ms)"),(0,a._)("th",null,"Average")])],-1))),F={style:{"vertical-align":"top","padding-right":"1em"}},P={style:{"padding-right":"1em","padding-bottom":"0.5em"}},R={style:{"vertical-align":"top","padding-right":"1em"}},D={style:{"vertical-align":"top","padding-bottom":"0.5em"}};function N(t,e,r,i,N,W){const L=(0,a.up)("FastQuickSort");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",l,[c,(0,a._)("div",u,[h,(0,a._)("div",f,[d,(0,a._)("div",m,[(0,a._)("button",{onClick:e[0]||(e[0]=(...t)=>W.bogoSort&&W.bogoSort(...t)),class:"button-35"},"Click me to Bogosort"),(0,a._)("button",{onClick:e[1]||(e[1]=t=>(N.arrayOfArrays=[],N.bogoSortArrayButtonClicked=!1)),class:"button-35",style:{"margin-left":"0.5em"}},"Reset")])]),p,g,y,(0,a.wy)((0,a._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[2]||(e[2]=t=>N.arrayInput=t),placeholder:""},null,512),[[o.nr,N.arrayInput]]),b,(0,a.wy)((0,a._)("div",w,[(0,a._)("table",v,[k,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(N.arrayOfArrays,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",_,(0,n.zw)(t[0]),1),(0,a._)("td",S,(0,n.zw)(t[1]),1),(0,a._)("td",x,(0,n.zw)(t[2]),1),(0,a._)("td",null,(0,n.zw)("Milliseconds: "+t[3].toFixed(3)),1)])))),128))])])],512),[[o.F8,N.bogoSortArrayButtonClicked]]),A,T]),(0,a._)("div",O,[B,(0,a._)("div",C,[(0,a._)("button",{class:"button-35",onClick:e[3]||(e[3]=(...t)=>W.quickSort&&W.quickSort(...t))},"Quick Sort"),(0,a._)("button",{onClick:e[4]||(e[4]=t=>(N.quickSortArrays=[],N.averageTimeTaken=0)),class:"button-35",style:{"margin-left":"0.5em"}},"Reset")]),I,z,q,(0,a.wy)((0,a._)("input",{style:{"font-size":"1.25em","margin-bottom":"1em"},type:"text",id:"number-input","onUpdate:modelValue":e[5]||(e[5]=t=>N.arrayInputQuickSort=t),placeholder:""},null,512),[[o.nr,N.arrayInputQuickSort]]),M,(0,a.wy)((0,a._)("div",Q,[(0,a._)("table",j,[E,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(N.quickSortArrays,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",F,(0,n.zw)(t[0]),1),(0,a._)("td",P,(0,n.zw)(t[1]),1),(0,a._)("td",R,(0,n.zw)("Milliseconds: "+t[2].toFixed(3)),1),(0,a._)("td",D,(0,n.zw)((N.averageTimeTaken/N.quickSortArrays.length).toFixed(3)),1)])))),128))])])],512),[[o.F8,N.quickSortArrayButtonClicked]]),(0,a.Wm)(L,{ref:"fastQuickSort"},null,512)])])])}r(560);var W=r(5660),L=r.n(W),U=r(9105),V={name:"SortingAlgorithmsView",components:{FastQuickSort:U.Z},data(){return{bogoSortArray:[],bogoSortArrayButtonClicked:!1,arrayOfArrays:[],quickSortArray:[],quickSortArrayButtonClicked:!1,quickSortArrays:[],averageTimeTaken:0,arrayInput:9,arrayInputQuickSort:1e3,sortedArray:[],arrayToSort:[],thousandArray:[]}},mounted(){L().highlightAll()},methods:{bogoSort(){let t=performance.now();this.bogoSortArrayButtonClicked=!0;for(let e=1;e<=this.arrayInput;e++){const r=[];for(let t=0;t<e;t++){const t=this.getRandomInt(1,100);r.push(t)}let a=0;while(!this.isSorted(r))a++,this.shuffle(r);let n=performance.now(),o=n-t;this.arrayOfArrays.push([e,r,a,o])}},getRandomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t},shuffle(t){for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}},isSorted(t){for(let e=1;e<t.length;e++)if(t[e]<t[e-1])return!1;return!0},quickSort(){this.arrayToSort=[];let t=this.arrayToSort;for(let n=0;n<this.arrayInputQuickSort;n++){const e=Math.floor(100*Math.random())+1;t.push(e)}this.quickSortArrayButtonClicked=!0;let e=performance.now();const r=this.$refs.fastQuickSort;this.thousandArray=r.invoke([...t],0,t.length-1),console.log(this.thousandArray);let a=performance.now();this.timeTaken=a-e,this.averageTimeTaken+=this.timeTaken,this.quickSortArrays.push([this.thousandArray.length,this.thousandArray,this.timeTaken])}}},Y=r(3744);const Z=(0,Y.Z)(V,[["render",N],["__scopeId","data-v-21b3094c"]]);var G=Z},4328:function(t,e,r){var a=r(5290),n=r(7578),o=r(6310),i=function(t){return function(e,r,i){var s,l=a(e),c=o(l),u=n(i,c);if(t&&r!==r){while(c>u)if(s=l[u++],s!==s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},5649:function(t,e,r){var a=r(7697),n=r(2297),o=TypeError,i=Object.getOwnPropertyDescriptor,s=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(n(t)&&!i(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:function(t,e,r){var a=r(6812),n=r(9152),o=r(2474),i=r(2560);t.exports=function(t,e,r){for(var s=n(e),l=i.f,c=o.f,u=0;u<s.length;u++){var h=s[u];a(t,h)||r&&a(r,h)||l(t,h,c(e,h))}}},5565:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,e,r){var a=r(9037),n=r(2474).f,o=r(5773),i=r(1880),s=r(5014),l=r(8758),c=r(5266);t.exports=function(t,e){var r,u,h,f,d,m,p=t.target,g=t.global,y=t.stat;if(u=g?a:y?a[p]||s(p,{}):(a[p]||{}).prototype,u)for(h in e){if(d=e[h],t.dontCallGetSet?(m=n(u,h),f=m&&m.value):f=u[h],r=c(g?h:p+(y?".":"#")+h,t.forced),!r&&void 0!==f){if(typeof d==typeof f)continue;l(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),i(u,h,d,t)}}},4413:function(t,e,r){var a=r(8844),n=r(3689),o=r(6648),i=Object,s=a("".split);t.exports=n((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?s(t,""):i(t)}:i},2297:function(t,e,r){var a=r(6648);t.exports=Array.isArray||function(t){return"Array"===a(t)}},5266:function(t,e,r){var a=r(3689),n=r(9985),o=/#|\.prototype\./,i=function(t,e){var r=l[s(t)];return r===u||r!==c&&(n(e)?a(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},l=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},6310:function(t,e,r){var a=r(3126);t.exports=function(t){return a(t.length)}},8828:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var a=+t;return(a>0?r:e)(a)}},2474:function(t,e,r){var a=r(7697),n=r(2615),o=r(9556),i=r(5684),s=r(5290),l=r(8360),c=r(6812),u=r(8506),h=Object.getOwnPropertyDescriptor;e.f=a?h:function(t,e){if(t=s(t),e=l(e),u)try{return h(t,e)}catch(r){}if(c(t,e))return i(!n(o.f,t,e),t[e])}},2741:function(t,e,r){var a=r(4948),n=r(2739),o=n.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}},7518:function(t,e){e.f=Object.getOwnPropertySymbols},4948:function(t,e,r){var a=r(8844),n=r(6812),o=r(5290),i=r(4328).indexOf,s=r(7248),l=a([].push);t.exports=function(t,e){var r,a=o(t),c=0,u=[];for(r in a)!n(s,r)&&n(a,r)&&l(u,r);while(e.length>c)n(a,r=e[c++])&&(~i(u,r)||l(u,r));return u}},9556:function(t,e){var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,n=a&&!r.call({1:2},1);e.f=n?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},9152:function(t,e,r){var a=r(6058),n=r(8844),o=r(2741),i=r(7518),s=r(5027),l=n([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=o.f(s(t)),r=i.f;return r?l(e,r(t)):e}},7578:function(t,e,r){var a=r(8700),n=Math.max,o=Math.min;t.exports=function(t,e){var r=a(t);return r<0?n(r+e,0):o(r,e)}},5290:function(t,e,r){var a=r(4413),n=r(4684);t.exports=function(t){return a(n(t))}},8700:function(t,e,r){var a=r(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:a(e)}},3126:function(t,e,r){var a=r(8700),n=Math.min;t.exports=function(t){return t>0?n(a(t),9007199254740991):0}},560:function(t,e,r){var a=r(9989),n=r(690),o=r(6310),i=r(5649),s=r(5565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!u();a({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=n(this),r=o(e),a=arguments.length;s(r+a);for(var l=0;l<a;l++)e[r]=arguments[l],r++;return i(e,r),r}})}}]);
//# sourceMappingURL=165.0d53edfa.js.map