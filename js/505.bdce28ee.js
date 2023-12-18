"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[505],{9105:function(t,e,o){o.d(e,{Z:function(){return s}});var r={name:"FastQuickSort",data(){return{}},methods:{invoke(t=[]){let e=t;const o=this.getQuickSort(e,0,e.length-1);return o},getQuickSort(t,e,o){const r=(t,e,o)=>{if(!Array.isArray(t))throw new TypeError("Please input a valid list or array.");if(e<o){const a=n(t,e,o);r(t,e,a-1),r(t,a+1,o)}return t},n=(t,e,o)=>{const r=t[o];let n=e;for(let a=e;a<=o-1;a++)t[a]<r&&([t[a],t[n]]=[t[n],t[a]],n+=1);return[t[n],t[o]]=[t[o],t[n]],n},a=r(t,e,o);return a}}},n=o(3744);const a=(0,n.Z)(r,[["__scopeId","data-v-1cae36b8"]]);var s=a},2505:function(t,e,o){o.r(e),o.d(e,{default:function(){return m}});var r=o(6252),n=o(3577);const a=t=>((0,r.dD)("data-v-454e4957"),t=t(),(0,r.Cn)(),t),s={class:"coffee-data-background"},i=a((()=>(0,r._)("h1",null,"Coffee Consumers by country",-1))),l=a((()=>(0,r._)("div",{class:"container-for-svg-graph"},[(0,r._)("div",{id:"chartContainer"})],-1))),c=a((()=>(0,r._)("h4",{style:{"margin-top":"0.3em","text-align":"left","margin-left":"0.5em","margin-right":"0.5em",color:"#fff"}},[(0,r._)("b",{class:"main-red-color"},"Note:"),(0,r.Uk)(" click on the column titles in the table below for each column to sort data numerically/alphabetically. The graph will update to the sorted values. All 0 values are removed for the column that is sorted. The graph now uses an SVG format output.")],-1))),u={style:{"margin-top":"1em"}};function h(t,e,o,a,h,d){const f=(0,r.up)("FastQuickSort");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[i,l,c,(0,r._)("table",u,[(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{style:{cursor:"pointer"},onClick:e[0]||(e[0]=t=>d.sortData("country"))},"Country"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[1]||(e[1]=t=>(d.removeZeros("perCapitaCons2016"),d.sortData("perCapitaCons2016"),d.barChart("perCapitaCons2016","Coffee Consumption Per Capita 2016 (kg)")))}," Coffee Consumption per Capita 2016 (kg)"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[2]||(e[2]=t=>(d.removeZeros("totCons2019"),d.sortData("totCons2019"),d.barChart("totCons2019","Dry coffee beans 2019 (kg)")))}," Dry coffee beans 2019 (kg)"),(0,r._)("th",{style:{cursor:"pointer"},onClick:e[3]||(e[3]=t=>d.sortData("region"))},"Region"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[4]||(e[4]=t=>(d.sortData("pop2023"),d.barChart("pop2023","Population 2023")))},"Population 2023")])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.sortedData,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,n.zw)(t.country),1),(0,r._)("td",null,(0,n.zw)(Math.round(100*t.perCapitaCons2016/2.20462)/100),1),(0,r._)("td",null,(0,n.zw)(h.addCommas(Math.round(6e4*t.totCons2019*100/2.20462)/100)),1),(0,r._)("td",null,(0,n.zw)(t.region),1),(0,r._)("td",null,(0,n.zw)(h.addCommas(t.pop2023)),1)])))),128))])])]),(0,r.Wm)(f,{ref:"fastQuickSort"},null,512)],64)}var d=o(9105),f={name:"DatasetsView",components:{FastQuickSort:d.Z},data(){return{fileContents:"",fileContentsArray:[],jsonData:null,sortedData:null,removedZeros:null,addCommas:function(t){t=t.toString();var e=t.split(/([\d.]+)/g);for(let o=1;o<e.length;o+=2)e[o]=e[o].replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.join("")}}},mounted(){const t="conrizzo",e="conradswebsite",o="src/data/data.tsv",r=`https://raw.githubusercontent.com/${t}/${e}/master/${o}`;fetch(r).then((t=>t.text())).then((t=>{this.fileContents=t,this.fileContentsArray=t.split("\n").map((t=>t.split("\t")));const e=this.fileContentsArray[this.fileContentsArray.length-1];e&&""===e[e.length-1]&&this.fileContentsArray.pop()})).catch((t=>{this.errorMessage="An error occurred while fetching the data. Please try again later."+t}));const n="conrizzo",a="data_sets_for_conradswebsite",s="coffee_data.json",i=`https://raw.githubusercontent.com/${n}/${a}/main/${s}`;fetch(i).then((t=>t.json())).then((t=>{this.jsonData=t,this.removeZeros(),this.sortData(),this.barChart()})).catch((t=>{this.errorMessage="An error occurred while fetching the data. Please try again later."+t})),this.sortedData=this.jsonData},methods:{quickSort(t){console.log(t);const e=[t];console.log(e);let o=e;const r=this.$refs.fastQuickSort;this.quickSortedArray=r.invoke([...o],0,o.length-1),console.log(this.quickSortedArray)},sortData(t){const e=this.sortedColumn===t;this.sortDirection=!e||!this.sortDirection,this.sortedData=this.removedZeros.slice().sort(((e,o)=>{const r=e[t],n=o[t];if(null===r)return 1;if(null===n)return-1;if("number"===typeof r&&"number"===typeof n){const t=n-r;return this.sortDirection?t:-t}{const t=String(r).toLowerCase(),e=String(n).toLowerCase(),o=e.localeCompare(t);return this.sortDirection?o:-o}})),this.sortedColumn=t},removeZeros(t="perCapitaCons2016"){this.removedZeros=this.jsonData.filter((e=>0!==e[t]&&null!==e[t]))},barChart(t="perCapitaCons2016",e="Coffee Consumption Per Capita 2016 (kg)"){const o=this.sortedData.map((e=>{let o;return o="perCapitaCons2016"===t?Math.round(100*e.perCapitaCons2016/2.20462)/100:"totCons2019"===t?Math.round(6e4*e[t]*100/2.20462)/100:e[t],{label:`${e.country} (${this.addCommas(o)})`,value:o}})),r=.9*window.innerWidth,n=20,a=4,s=Math.max(...o.map((t=>t.value))),i=r/s;let l=`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${(n+a)*o.length+30}">`;l+=`<text x="${r/2}" y="15" text-anchor="middle" font-size="17" font-weight="bold" fill="#fff">${e}</text>`;let c=30;for(let u=0;u<o.length;u++){const t=o[u],e=t.value*i;l+=`<rect x="0" y="${c}" width="${e}" height="${n}" fill="#66ff99" />`,l+=`<text x="5" y="${c+n/2+6}" font-size="17">${t.label}</text>`,c+=n+a}l+="</svg>",document.getElementById("chartContainer").innerHTML=l}}},p=o(3744);const C=(0,p.Z)(f,[["render",h],["__scopeId","data-v-454e4957"]]);var m=C}}]);
//# sourceMappingURL=505.bdce28ee.js.map