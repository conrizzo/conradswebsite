"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[365],{3054:function(e,t,r){r.d(t,{Z:function(){return _}});var a=r(6252),n=r(3577);const l={class:"footer"},o={class:"alignment"},i=(0,a._)("a",{class:"footer-links",href:"https://github.com/conrizzo"},"GitHub",-1),u=(0,a._)("br",null,null,-1),s=(0,a._)("a",{class:"footer-links",href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0",-1);function h(e,t,r,h,c,w){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",l,[(0,a._)("div",o,[(0,a._)("span",null,[(0,a.Wm)(d,{class:"footer-links",to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),(0,a.Uk)("    "),i,(0,a.Uk)("    "),(0,a.Wm)(d,{class:"footer-links",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("ConradsWebsite.com")])),_:1}),(0,a.Uk)(" © "+(0,n.zw)(w.getCurrentYear),1),u,(0,a.Uk)(" Licensed under "),s,(0,a.Uk)(" unless noted otherwise. ")])])])}var c={name:"FirstFooter",computed:{getCurrentYear(){return(new Date).getFullYear()}}},w=r(3744);const d=(0,w.Z)(c,[["render",h]]);var _=d},365:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var a=r(6252);const n={id:"app",style:{"padding-top":"2.8em"}};function l(e,t,r,l,o,i){const u=(0,a.up)("WeatherAPI"),s=(0,a.up)("FirstFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[(0,a.Wm)(u)]),(0,a.Wm)(s)],64)}var o=r(3577);const i=e=>((0,a.dD)("data-v-2fa0c312"),e=e(),(0,a.Cn)(),e),u={style:{background:"linear-gradient(0deg, rgba(1,239,249,1) 0%, rgba(0,112,255,0.5746673669467788) 38%, rgba(23,50,143,0.8155637254901961) 78%)","padding-bottom":"9em"}},s=i((()=>(0,a._)("h1",{style:{"padding-top":"1em","padding-bottom":"1em"}},"Weather",-1))),h=i((()=>(0,a._)("p",{class:"paragraph-text white-color-text"},[(0,a.Uk)(" All the locations here are easily customizable! Data is queried as JSON using "),(0,a._)("a",{class:"text-links",href:"https://github.com/chubin/wttr.in"},"https://github.com/chubin/wttr.in"),(0,a.Uk)(", then formatted and displayed here in a custom made table.")],-1))),c=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"City / Country / Region"),(0,a._)("th",null,"Sun Rise/Sun Set"),(0,a._)("th",null,"Weather Conditions"),(0,a._)("th",null,"Temperature °C"),(0,a._)("th",null,"Temperature °C (Feels Like)"),(0,a._)("th",null,"Wind Speed")])],-1))),w=i((()=>(0,a._)("br",null,null,-1))),d=i((()=>(0,a._)("br",null,null,-1))),_=i((()=>(0,a._)("span",{style:{color:"rgb(0, 149, 255)"}},"Country:",-1))),m=i((()=>(0,a._)("br",null,null,-1))),g=i((()=>(0,a._)("span",{style:{color:"rgb(255, 133, 133)"}},"Region:",-1))),y=i((()=>(0,a._)("br",null,null,-1))),k=i((()=>(0,a._)("br",null,null,-1))),b={style:{"margin-top":"0.25em"}},p=i((()=>(0,a._)("br",null,null,-1))),D=i((()=>(0,a._)("span",{style:{color:"rgb(123, 123, 123)"}},"Query Date:",-1))),f={class:"sunny-background"},U=i((()=>(0,a._)("br",null,null,-1))),v={class:"sun-hour-background"},C=i((()=>(0,a._)("br",null,null,-1))),z={class:"sun-hour-background"},F={key:0},H={key:1},A={style:{"margin-bottom":"0.25em"}},W={class:"high-temp-text-coloring"},Y=i((()=>(0,a._)("br",null,null,-1))),x=i((()=>(0,a._)("br",null,null,-1))),S=i((()=>(0,a._)("br",null,null,-1))),T=i((()=>(0,a._)("br",null,null,-1))),N=i((()=>(0,a._)("br",null,null,-1))),R={class:""},q={class:"high-temp-text-coloring-1"},j=i((()=>(0,a._)("br",null,null,-1))),L=i((()=>(0,a._)("br",null,null,-1))),M={class:""},P={class:"high-temp-text-coloring-2"},I=i((()=>(0,a._)("br",null,null,-1))),Z=i((()=>(0,a._)("br",null,null,-1)));function $(e,t,r,n,l,i){return(0,a.wg)(),(0,a.iD)("div",u,[s,h,(0,a._)("table",null,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.cityWeathers,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.city},[(0,a._)("td",null,[(0,a._)("b",null,(0,o.zw)(e.city),1),w,d,e.weather&&e.weather.request[0].query?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[_,(0,a.Uk)(" "+(0,o.zw)(e.weather.nearest_area[0].country[0].value),1),m,g,(0,a.Uk)(" "+(0,o.zw)(e.weather.nearest_area[0].region[0].value),1),y,(0,a.Uk)(" "+(0,o.zw)(e.weather.request[0].query),1),k,(0,a._)("div",b,[p,D,(0,a.Uk)(" "+(0,o.zw)(e.weather.current_condition[0].observation_time)+" - "+(0,o.zw)(i.formatDate(e.weather.weather[0].date)),1)])],64)):(0,a.kq)("",!0)]),(0,a._)("td",null,[e.weather&&e.weather.weather[0].astronomy[0].sunrise?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("span",f,(0,o.zw)(e.weather.weather[0].astronomy[0].sunrise)+" - "+(0,o.zw)(e.weather.weather[0].astronomy[0].sunset),1),U,(0,a.Uk)(" Astronomical Sun Hours: "),(0,a._)("span",v,(0,o.zw)(this.calculateDaylightTime(e.weather.weather[0].astronomy[0].sunrise,e.weather.weather[0].astronomy[0].sunset)),1),C,(0,a.Uk)(" Estimated actual sun hours: "),(0,a._)("span",z,(0,o.zw)(parseInt(e.weather.weather[0].sunHour))+" hours "+(0,o.zw)(100*Math.round(60*(e.weather.weather[0].sunHour-parseInt(e.weather.weather[0].sunHour)))/100)+" minutes",1)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)(" N/A ")],64))]),(0,a._)("td",{class:(0,o.C_)({"gray-background":e.weather&&"Partly cloudy"==e.weather.current_condition[0].weatherDesc[0].value,"rain-showers-background":e.weather&&"Rain shower"==e.weather.current_condition[0].weatherDesc[0].value,"overcast-background":e.weather&&"Overcast"==e.weather.current_condition[0].weatherDesc[0].value,"cloudy-background":e.weather&&"Cloudy"==e.weather.current_condition[0].weatherDesc[0].value,"sunny-background":e.weather&&"Sunny"==e.weather.current_condition[0].weatherDesc[0].value,"light-rain-background":e.weather&&"Light rain"==e.weather.current_condition[0].weatherDesc[0].value,"rain-background":e.weather&&"Rain"==e.weather.current_condition[0].weatherDesc[0].value,"clear-background":e.weather&&"Clear"==e.weather.current_condition[0].weatherDesc[0].value})},[e.weather&&e.weather.current_condition[0]?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},["Partly cloudy"==e.weather.current_condition[0].weatherDesc[0].value?((0,a.wg)(),(0,a.iD)("div",F,(0,o.zw)(e.weather.current_condition[0].weatherDesc[0].value),1)):((0,a.wg)(),(0,a.iD)("div",H,(0,o.zw)(e.weather.current_condition[0].weatherDesc[0].value),1))],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)(" N/A ")],64))],2),(0,a._)("td",null,[e.weather&&e.weather.current_condition[0].temp_C?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",A,[(0,a.Uk)(" Projected High Today: "),(0,a._)("span",W,(0,o.zw)(e.weather.weather[0].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[0].maxtempF)+"°F",1),Y]),(0,a.Uk)(" Recent Temperature: "),(0,a._)("b",null,(0,o.zw)(e.weather.current_condition[0].temp_C)+"°C "+(0,o.zw)(e.weather.current_condition[0].temp_F)+"°F",1),x,S,(0,a.Uk)(" Humidity: "+(0,o.zw)(e.weather.current_condition[0].humidity)+"%",1),T,(0,a.Uk)(" - - - -"),N,(0,a._)("span",R,[(0,a.Uk)((0,o.zw)(i.formatDate(e.weather.weather[1].date))+": ",1),(0,a._)("span",q,(0,o.zw)(e.weather.weather[1].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[1].maxtempF)+"°F",1),j]),(0,a.Uk)("- - - -"),L,(0,a._)("span",M,[(0,a.Uk)((0,o.zw)(i.formatDate(e.weather.weather[2].date))+": ",1),(0,a._)("span",P,(0,o.zw)(e.weather.weather[2].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[2].maxtempF)+"°F",1),I])],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)(" N/A ")],64))]),(0,a._)("td",null,[e.weather&&e.weather.current_condition[0]?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)((0,o.zw)(e.weather.current_condition[0].FeelsLikeC)+"°C",1),Z,(0,a.Uk)(" "+(0,o.zw)(e.weather.current_condition[0].FeelsLikeF)+"°F ",1)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)(" N/A ")],64))]),(0,a._)("td",null,[e.weather&&e.weather.current_condition[0]?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)((0,o.zw)(e.weather.current_condition[0].windspeedKmph)+" km/h ",1)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)(" N/A ")],64))])])))),128))])])])}var G={data(){return{cityWeathers:[{city:"Death Valley, CA",weather:""},{city:"Tübingen, Germany",weather:""},{city:"STR, Stuttgart Airport, Germany",weather:""},{city:"Cary, NC",weather:""},{city:"Wilmington, NC",weather:""},{city:"Albuquerque, New Mexico",weather:""},{city:"Shamokin, PA",weather:""},{city:"Temecula, CA",weather:""},{city:"Albany WA, Australia",weather:""},{city:"RDU, Raleigh Durham Airport, USA",weather:""},{city:"Uppsala, Sweden",weather:""},{city:"Miami, Florida",weather:""},{city:"Madrid",weather:""},{city:"Helsinki",weather:""}],jsonData:null,regularText:null}},mounted(){this.fetchWeather()},methods:{fetchWeather(){this.cityWeathers.forEach((e=>{const t=`https://wttr.in/${e.city}?format=j1`;fetch(t).then((e=>e.json())).then((t=>{e.weather=t,this.jsonData=t})).catch((e=>{this.jsonData={data:{error:[{msg:"Unknown error occurred."+e}]}}}))}))},calculateDaylightTime(e,t){const r=new Date(`2023/01/01 ${e}`),a=new Date(`2023/01/01 ${t}`),n=(a.getTime()-r.getTime())/36e5,l=Math.floor(n),o=Math.floor(60*(n-l));return`${l} hours ${o} minutes`},formatDate(e){const t=new Date(e),r={weekday:"long",month:"long",day:"numeric"},a=t.toLocaleDateString("en-US",r);return a}}},E=r(3744);const K=(0,E.Z)(G,[["render",$],["__scopeId","data-v-2fa0c312"]]);var O=K,V=r(3054),B={name:"DatasetsView",components:{WeatherAPI:O,FirstFooter:V.Z}};const J=(0,E.Z)(B,[["render",l]]);var Q=J}}]);
//# sourceMappingURL=365.1e8b5316.js.map