"use strict";(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[578],{9578:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(6252);const a={id:"app"};function i(e,t,r,i,o,u){const l=(0,n.up)("WeatherAPI");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(l)])}var o=r(3577),u=r(9963);const l=e=>((0,n.dD)("data-v-1f0b805a"),e=e(),(0,n.Cn)(),e),c={class:"weather-background"},h=l((()=>(0,n._)("h1",{style:{"padding-top":"1em","padding-bottom":"1em",color:"#ffffff","font-size":"5em"}},"Weather",-1))),s={class:"center-content"},w=l((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"City / Country / Region"),(0,n._)("th",null,"Sun Rise / Sun Set"),(0,n._)("th",null,"Weather Conditions"),(0,n._)("th",null,"High / Low °C"),(0,n._)("th",null,"°C"),(0,n._)("th",null,"Wind Speed")])],-1))),d=l((()=>(0,n._)("br",null,null,-1))),p=l((()=>(0,n._)("br",null,null,-1))),f=l((()=>(0,n._)("span",null,"Country:",-1))),m=l((()=>(0,n._)("br",null,null,-1))),y=l((()=>(0,n._)("span",null,"Region: ",-1))),g=l((()=>(0,n._)("br",null,null,-1))),_=l((()=>(0,n._)("br",null,null,-1))),b={style:{"margin-top":"0.25em"}},k=l((()=>(0,n._)("br",null,null,-1))),v=l((()=>(0,n._)("span",{style:{color:"rgb(255, 100, 100)"}},"Latest Query:",-1))),D={class:"sunny-background"},x=l((()=>(0,n._)("br",null,null,-1))),z={class:"sun-hour-background"},U=l((()=>(0,n._)("br",null,null,-1))),C={class:"sun-hour-background"},F={key:0},O={key:1},H={key:0},L={key:0},A={key:1},S={key:0},T={key:1},j={key:0},M={key:1},P={key:0},W=l((()=>(0,n._)("br",null,null,-1))),I={key:1},Y=l((()=>(0,n._)("br",null,null,-1))),E={style:{background:"#fff",display:"inline-block","border-radius":"1em",padding:"0.5em"}},N={class:"switch"},q=l((()=>(0,n._)("span",{class:"slider round"},null,-1))),R=l((()=>(0,n._)("div",null,[(0,n._)("span",null,"Fahrenheit")],-1))),$=l((()=>(0,n._)("br",null,null,-1))),V=l((()=>(0,n._)("br",null,null,-1))),K=l((()=>(0,n._)("div",{style:{"margin-bottom":"2em","border-radius":"1em",background:"#fff",opacity:"0.8",display:"inline-block","max-width":"30rem",padding:"1em"}},[(0,n._)("p",{style:{"text-align":"left"}},[(0,n.Uk)(" All the locations here are easily customizable! Data is queried as JSON using "),(0,n._)("a",{class:"text-links",href:"https://github.com/chubin/wttr.in"},"https://github.com/chubin/wttr.in"),(0,n.Uk)(", then formatted and displayed here in a custom made table. This is just a simple project to fetch and format customized data. ")])],-1)));function G(e,t,r,a,i,l){return(0,n.wg)(),(0,n.iD)("div",c,[h,(0,n._)("div",s,[(0,n._)("table",null,[w,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.cityWeathers,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.city},[(0,n._)("td",null,[(0,n._)("b",null,[(0,n._)("u",null,(0,o.zw)(e.city),1)]),d,p,e.weather&&e.weather.request[0].query?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[f,(0,n.Uk)(" "+(0,o.zw)(e.weather.nearest_area[0].country[0].value),1),m,y,(0,n.Uk)(" "+(0,o.zw)(e.weather.nearest_area[0].region[0].value),1),g,(0,n.Uk)(" "+(0,o.zw)(e.weather.request[0].query),1),_,(0,n._)("div",b,[k,v,(0,n.Uk)(" "+(0,o.zw)(e.weather.current_condition[0].observation_time)+" - "+(0,o.zw)(l.formatDate(e.weather.weather[0].date)),1)])],64)):(0,n.kq)("",!0)]),(0,n._)("td",null,[e.weather&&e.weather.weather[0].astronomy[0].sunrise?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("span",D,(0,o.zw)(e.weather.weather[0].astronomy[0].sunrise)+" - "+(0,o.zw)(e.weather.weather[0].astronomy[0].sunset),1),x,(0,n.Uk)(" Astronomical Sun Hours: "),(0,n._)("span",z,(0,o.zw)(this.calculateDaylightTime(e.weather.weather[0].astronomy[0].sunrise,e.weather.weather[0].astronomy[0].sunset)),1),U,(0,n.Uk)(" Estimated actual sun hours: "),(0,n._)("span",C,(0,o.zw)(parseInt(e.weather.weather[0].sunHour))+" hours "+(0,o.zw)(100*Math.round(60*(e.weather.weather[0].sunHour-parseInt(e.weather.weather[0].sunHour)))/100)+" minutes",1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" N/A ")],64))]),(0,n._)("td",{class:(0,o.C_)({"gray-background":e.weather&&"Partly cloudy"==e.weather.current_condition[0].weatherDesc[0].value,"rain-showers-background":e.weather&&"Rain shower"==e.weather.current_condition[0].weatherDesc[0].value,"overcast-background":e.weather&&"Overcast"==e.weather.current_condition[0].weatherDesc[0].value,"cloudy-background":e.weather&&"Cloudy"==e.weather.current_condition[0].weatherDesc[0].value,"sunny-background":e.weather&&"Sunny"==e.weather.current_condition[0].weatherDesc[0].value,"light-rain-background":e.weather&&"Light rain"==e.weather.current_condition[0].weatherDesc[0].value,"rain-background":e.weather&&"Rain"==e.weather.current_condition[0].weatherDesc[0].value,"clear-background":e.weather&&"Clear"==e.weather.current_condition[0].weatherDesc[0].value})},[e.weather&&e.weather.current_condition[0]?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},["Partly cloudy"==e.weather.current_condition[0].weatherDesc[0].value?((0,n.wg)(),(0,n.iD)("div",F,(0,o.zw)(e.weather.current_condition[0].weatherDesc[0].value),1)):((0,n.wg)(),(0,n.iD)("div",O,(0,o.zw)(e.weather.current_condition[0].weatherDesc[0].value),1))],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" N/A ")],64))],2),(0,n._)("td",null,[e.weather&&e.weather.current_condition[0].temp_C?((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Uk)((0,o.zw)(l.formatDate(e.weather.weather[0].date))+" ",1),(0,n._)("div",null,[0===i.temperatureUnit?((0,n.wg)(),(0,n.iD)("span",L,(0,o.zw)(e.weather.weather[0].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[0].mintempC)+"°C ",1)):((0,n.wg)(),(0,n.iD)("span",A,(0,o.zw)(e.weather.weather[0].maxtempF)+"°F "+(0,o.zw)(e.weather.weather[0].mintempF)+"°F",1))]),(0,n.Uk)(" "+(0,o.zw)(l.formatDate(e.weather.weather[1].date))+" ",1),(0,n._)("div",null,[0===i.temperatureUnit?((0,n.wg)(),(0,n.iD)("span",S,(0,o.zw)(e.weather.weather[1].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[1].mintempC)+"°C ",1)):((0,n.wg)(),(0,n.iD)("span",T,(0,o.zw)(e.weather.weather[1].maxtempF)+"°F "+(0,o.zw)(e.weather.weather[1].mintempF)+"°F",1))]),(0,n.Uk)(" "+(0,o.zw)(l.formatDate(e.weather.weather[2].date))+" ",1),(0,n._)("div",null,[0===i.temperatureUnit?((0,n.wg)(),(0,n.iD)("span",j,(0,o.zw)(e.weather.weather[2].maxtempC)+"°C "+(0,o.zw)(e.weather.weather[2].mintempC)+"°C ",1)):1===i.temperatureUnit?((0,n.wg)(),(0,n.iD)("span",M,(0,o.zw)(e.weather.weather[2].maxtempF)+"°F "+(0,o.zw)(e.weather.weather[2].mintempF)+"°F",1)):(0,n.kq)("",!0)])])):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" N/A ")],64))]),(0,n._)("td",null,[e.weather&&e.weather.current_condition[0]?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[0===i.temperatureUnit?((0,n.wg)(),(0,n.iD)("div",P,[(0,n.Uk)(" Most recent: "),(0,n._)("b",null,(0,o.zw)(e.weather.current_condition[0].temp_C)+"°C",1),(0,n.Uk)("  Humidity: "+(0,o.zw)(e.weather.current_condition[0].humidity)+"%",1),W,(0,n.Uk)(" Feels like: "+(0,o.zw)(e.weather.current_condition[0].FeelsLikeC)+"°C ",1)])):((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Uk)(" Most recent: "),(0,n._)("b",null,(0,o.zw)(e.weather.current_condition[0].temp_F)+"°F",1),(0,n.Uk)(" Humidity: "+(0,o.zw)(e.weather.current_condition[0].humidity)+"%",1),Y,(0,n.Uk)(" Feels like: "+(0,o.zw)(e.weather.current_condition[0].FeelsLikeF)+"°F ",1)]))],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" N/A ")],64))]),(0,n._)("td",null,[e.weather&&e.weather.current_condition[0]?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)((0,o.zw)(e.weather.current_condition[0].windspeedKmph)+" km/h ",1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" N/A ")],64))])])))),128))])])]),(0,n._)("div",E,[(0,n._)("label",N,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.temperatureUnit=e),type:"checkbox"},null,512),[[u.e8,i.temperatureUnit]]),q]),R]),(0,n._)("div",null,[(0,n._)("button",{class:"clean-button",onClick:t[1]||(t[1]=e=>l.addWeatherLocation(i.weatherLocationInputText))},"Add A Location"),(0,n.wy)((0,n._)("input",{style:{padding:"10px 20px",margin:"8px 0","border-radius":"1em","box-sizing":"border-box"},type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>i.weatherLocationInputText=e),placeholder:"Miami, Florida"},null,512),[[u.nr,i.weatherLocationInputText]])]),$,V,K])}r(560);var Z={data(){return{temperatureUnit:0,weatherLocationInputText:"Miami, Florida",cityWeathers:[{city:"Tübingen, Germany",weather:""},{city:"Uppsala, Sweden",weather:""}],jsonData:null,regularText:null}},mounted(){this.fetchWeather()},methods:{fetchWeather(){this.cityWeathers.forEach((e=>{const t=`https://wttr.in/${e.city}?format=j1`;fetch(t).then((e=>e.json())).then((t=>{e.weather=t,this.jsonData=t})).catch((e=>{this.jsonData={data:{error:[{msg:"Unknown error occurred."+e}]}}}))}))},calculateDaylightTime(e,t){const r=new Date(`2023/01/01 ${e}`),n=new Date(`2023/01/01 ${t}`),a=(n.getTime()-r.getTime())/36e5,i=Math.floor(a),o=Math.floor(60*(a-i));return`${i} hours ${o} minutes`},formatDate(e){const t=new Date(e),r={weekday:"long",month:"long",day:"numeric"},n=t.toLocaleDateString("en-US",r);return n},addWeatherLocation(e="Miami, Florida"){this.cityWeathers.push({city:e,weather:""}),this.fetchWeather()}}},J=r(3744);const Q=(0,J.Z)(Z,[["render",G],["__scopeId","data-v-1f0b805a"]]);var B=Q,X={name:"DatasetsView",components:{WeatherAPI:B}};const ee=(0,J.Z)(X,[["render",i]]);var te=ee},4328:function(e,t,r){var n=r(5290),a=r(7578),i=r(6310),o=function(e){return function(t,r,o){var u,l=n(t),c=i(l),h=a(o,c);if(e&&r!==r){while(c>h)if(u=l[h++],u!==u)return!0}else for(;c>h;h++)if((e||h in l)&&l[h]===r)return e||h||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,r){var n=r(7697),a=r(2297),i=TypeError,o=Object.getOwnPropertyDescriptor,u=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=u?function(e,t){if(a(e)&&!o(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},8758:function(e,t,r){var n=r(6812),a=r(9152),i=r(2474),o=r(2560);e.exports=function(e,t,r){for(var u=a(t),l=o.f,c=i.f,h=0;h<u.length;h++){var s=u[h];n(e,s)||r&&n(r,s)||l(e,s,c(t,s))}}},5565:function(e){var t=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw t("Maximum allowed index exceeded");return e}},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(e,t,r){var n=r(9037),a=r(2474).f,i=r(5773),o=r(1880),u=r(5014),l=r(8758),c=r(5266);e.exports=function(e,t){var r,h,s,w,d,p,f=e.target,m=e.global,y=e.stat;if(h=m?n:y?n[f]||u(f,{}):(n[f]||{}).prototype,h)for(s in t){if(d=t[s],e.dontCallGetSet?(p=a(h,s),w=p&&p.value):w=h[s],r=c(m?s:f+(y?".":"#")+s,e.forced),!r&&void 0!==w){if(typeof d==typeof w)continue;l(d,w)}(e.sham||w&&w.sham)&&i(d,"sham",!0),o(h,s,d,e)}}},4413:function(e,t,r){var n=r(8844),a=r(3689),i=r(6648),o=Object,u=n("".split);e.exports=a((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?u(e,""):o(e)}:o},2297:function(e,t,r){var n=r(6648);e.exports=Array.isArray||function(e){return"Array"===n(e)}},5266:function(e,t,r){var n=r(3689),a=r(9985),i=/#|\.prototype\./,o=function(e,t){var r=l[u(e)];return r===h||r!==c&&(a(t)?n(t):!!t)},u=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",h=o.POLYFILL="P";e.exports=o},6310:function(e,t,r){var n=r(3126);e.exports=function(e){return n(e.length)}},8828:function(e){var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},2474:function(e,t,r){var n=r(7697),a=r(2615),i=r(9556),o=r(5684),u=r(5290),l=r(8360),c=r(6812),h=r(8506),s=Object.getOwnPropertyDescriptor;t.f=n?s:function(e,t){if(e=u(e),t=l(t),h)try{return s(e,t)}catch(r){}if(c(e,t))return o(!a(i.f,e,t),e[t])}},2741:function(e,t,r){var n=r(4948),a=r(2739),i=a.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},4948:function(e,t,r){var n=r(8844),a=r(6812),i=r(5290),o=r(4328).indexOf,u=r(7248),l=n([].push);e.exports=function(e,t){var r,n=i(e),c=0,h=[];for(r in n)!a(u,r)&&a(n,r)&&l(h,r);while(t.length>c)a(n,r=t[c++])&&(~o(h,r)||l(h,r));return h}},9556:function(e,t){var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);t.f=a?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},9152:function(e,t,r){var n=r(6058),a=r(8844),i=r(2741),o=r(7518),u=r(5027),l=a([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(u(e)),r=o.f;return r?l(t,r(e)):t}},7578:function(e,t,r){var n=r(8700),a=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?a(r+t,0):i(r,t)}},5290:function(e,t,r){var n=r(4413),a=r(4684);e.exports=function(e){return n(a(e))}},8700:function(e,t,r){var n=r(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},3126:function(e,t,r){var n=r(8700),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},560:function(e,t,r){var n=r(9989),a=r(690),i=r(6310),o=r(5649),u=r(5565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},s=c||!h();n({target:"Array",proto:!0,arity:1,forced:s},{push:function(e){var t=a(this),r=i(t),n=arguments.length;u(r+n);for(var l=0;l<n;l++)t[r]=arguments[l],r++;return o(t,r),r}})}}]);
//# sourceMappingURL=578.ec3599cb.js.map