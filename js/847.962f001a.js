"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[847],{9105:function(t,e,o){o.d(e,{Z:function(){return s}});var r={name:"FastQuickSort",data(){return{}},methods:{invoke(t=[]){let e=t;const o=this.getQuickSort(e,0,e.length-1);return o},getQuickSort(t,e,o){const r=(t,e,o)=>{if(!Array.isArray(t))throw new TypeError("Please input a valid list or array.");if(e<o){const a=n(t,e,o);r(t,e,a-1),r(t,a+1,o)}return t},n=(t,e,o)=>{const r=t[o];let n=e;for(let a=e;a<=o-1;a++)t[a]<r&&([t[a],t[n]]=[t[n],t[a]],n+=1);return[t[n],t[o]]=[t[o],t[n]],n},a=r(t,e,o);return a}}},n=o(3744);const a=(0,n.Z)(r,[["__scopeId","data-v-1cae36b8"]]);var s=a},8847:function(t,e,o){o.r(e),o.d(e,{default:function(){return p}});var r=o(6252),n=o(3577);const a={style:{"padding-top":"2.7em","background-color":"rgb(93, 76, 29)","padding-bottom":"1em"}},s=(0,r.uE)('<h2 style="" class="homeview" data-v-3436887d><span style="background-color:rgb(255, 255, 255);border-radius:0.25em;padding:0.2em;" data-v-3436887d>Coffee Consumers by country</span></h2><div style="margin-left:8px;margin-right:8px;text-align:left;width:width: calc(100% - 16px);" data-v-3436887d><div id="chartContainer" data-v-3436887d></div></div><h4 style="margin-top:0.3em;text-align:left;margin-left:0.5em;margin-right:0.5em;color:#fff;" data-v-3436887d><b class="main-red-color" data-v-3436887d>Note:</b> click on the column titles in the table below for each column to sort data numerically/alphabetically. The graph will update to the sorted values. All 0 values are removed for the column that is sorted. The graph now uses an SVG format output.</h4>',3),i={style:{"margin-top":"1em"}};function l(t,e,o,l,c,u){const h=(0,r.up)("FastQuickSort");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[s,(0,r._)("table",i,[(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{style:{cursor:"pointer"},onClick:e[0]||(e[0]=t=>u.sortData("country"))},"Country"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[1]||(e[1]=t=>(u.removeZeros("perCapitaCons2016"),u.sortData("perCapitaCons2016"),u.barChart("perCapitaCons2016","Coffee Consumption Per Capita 2016 (kg)")))}," Coffee Consumption per Capita 2016 (kg)"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[2]||(e[2]=t=>(u.removeZeros("totCons2019"),u.sortData("totCons2019"),u.barChart("totCons2019","Dry coffee beans 2019 (kg)")))}," Dry coffee beans 2019 (kg)"),(0,r._)("th",{style:{cursor:"pointer"},onClick:e[3]||(e[3]=t=>u.sortData("region"))},"Region"),(0,r._)("th",{class:"table-column-buttons",style:{cursor:"pointer"},onClick:e[4]||(e[4]=t=>(u.sortData("pop2023"),u.barChart("pop2023","Population 2023")))},"Population 2023")])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.sortedData,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,n.zw)(t.country),1),(0,r._)("td",null,(0,n.zw)(Math.round(100*t.perCapitaCons2016/2.20462)/100),1),(0,r._)("td",null,(0,n.zw)(c.addCommas(Math.round(6e4*t.totCons2019*100/2.20462)/100)),1),(0,r._)("td",null,(0,n.zw)(t.region),1),(0,r._)("td",null,(0,n.zw)(c.addCommas(t.pop2023)),1)])))),128))])])]),(0,r.Wm)(h,{ref:"fastQuickSort"},null,512)],64)}var c=o(9105),u={name:"DatasetsView",components:{FastQuickSort:c.Z},data(){return{fileContents:"",fileContentsArray:[],jsonData:null,sortedData:null,removedZeros:null,addCommas:function(t){t=t.toString();var e=t.split(/([\d.]+)/g);for(let o=1;o<e.length;o+=2)e[o]=e[o].replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.join("")}}},mounted(){const t="conrizzo",e="conradswebsite",o="src/data/data.tsv",r=`https://raw.githubusercontent.com/${t}/${e}/master/${o}`;fetch(r).then((t=>t.text())).then((t=>{this.fileContents=t,this.fileContentsArray=t.split("\n").map((t=>t.split("\t")));const e=this.fileContentsArray[this.fileContentsArray.length-1];e&&""===e[e.length-1]&&this.fileContentsArray.pop()})).catch((t=>{this.errorMessage="An error occurred while fetching the data. Please try again later."+t}));const n="conrizzo",a="data_sets_for_conradswebsite",s="coffee_data.json",i=`https://raw.githubusercontent.com/${n}/${a}/main/${s}`;fetch(i).then((t=>t.json())).then((t=>{this.jsonData=t,this.removeZeros(),this.sortData(),this.barChart()})).catch((t=>{this.errorMessage="An error occurred while fetching the data. Please try again later."+t})),this.sortedData=this.jsonData},methods:{quickSort(t){console.log(t);const e=[t];console.log(e);let o=e;const r=this.$refs.fastQuickSort;this.quickSortedArray=r.invoke([...o],0,o.length-1),console.log(this.quickSortedArray)},sortData(t){const e=this.sortedColumn===t;this.sortDirection=!e||!this.sortDirection,this.sortedData=this.removedZeros.slice().sort(((e,o)=>{const r=e[t],n=o[t];if(null===r)return 1;if(null===n)return-1;if("number"===typeof r&&"number"===typeof n){const t=n-r;return this.sortDirection?t:-t}{const t=String(r).toLowerCase(),e=String(n).toLowerCase(),o=e.localeCompare(t);return this.sortDirection?o:-o}})),this.sortedColumn=t},removeZeros(t="perCapitaCons2016"){this.removedZeros=this.jsonData.filter((e=>0!==e[t]&&null!==e[t]))},barChart(t="perCapitaCons2016",e="Coffee Consumption Per Capita 2016 (kg)"){const o=this.sortedData.map((e=>{let o;return o="perCapitaCons2016"===t?Math.round(100*e.perCapitaCons2016/2.20462)/100:"totCons2019"===t?Math.round(6e4*e[t]*100/2.20462)/100:e[t],{label:`${e.country} (${this.addCommas(o)})`,value:o}})),r=.95*window.innerWidth,n=20,a=4,s=Math.max(...o.map((t=>t.value))),i=r/s;let l=`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${(n+a)*o.length+30}">`;l+=`<text x="${r/2}" y="20" text-anchor="middle" font-size="17" font-weight="bold" fill="#fff">${e}</text>`;let c=30;for(let u=0;u<o.length;u++){const t=o[u],e=t.value*i;l+=`<rect x="0" y="${c}" width="${e}" height="${n}" fill="#66ff99" />`,l+=`<text x="5" y="${c+n/2+6}" font-size="17">${t.label}</text>`,c+=n+a}l+="</svg>",document.getElementById("chartContainer").innerHTML=l}}},h=o(3744);const d=(0,h.Z)(u,[["render",l],["__scopeId","data-v-3436887d"]]);var p=d}}]);
//# sourceMappingURL=847.962f001a.js.map