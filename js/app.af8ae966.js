(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],f=0,s=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(n);while(s.length)s.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0e413a7c":"7364cb42","chunk-0fa422bb":"1b72c248","chunk-194a4587":"cb600e35","chunk-333f458c":"b82f4be6","chunk-501397a1":"60243ad6","chunk-c8337bde":"02098b3c","chunk-caeaab96":"cde251d5","chunk-e75c74de":"28f6f604","chunk-00273453":"aed8bfee","chunk-0f1cf672":"0c7658d1","chunk-b4a6307e":"875b2fe2","chunk-8270c2c2":"410a4efd","chunk-4b6a4571":"959097b8","chunk-6187bee6":"77a5c1cb"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0e413a7c":1,"chunk-0fa422bb":1,"chunk-194a4587":1,"chunk-333f458c":1,"chunk-501397a1":1,"chunk-c8337bde":1,"chunk-caeaab96":1,"chunk-00273453":1,"chunk-0f1cf672":1,"chunk-b4a6307e":1,"chunk-8270c2c2":1,"chunk-4b6a4571":1,"chunk-6187bee6":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e413a7c":"24dabdca","chunk-0fa422bb":"5b700cf2","chunk-194a4587":"2f278f3d","chunk-333f458c":"3ad80072","chunk-501397a1":"a0d91a31","chunk-c8337bde":"1f934e04","chunk-caeaab96":"c8b67449","chunk-e75c74de":"31d6cfe0","chunk-00273453":"3718f239","chunk-0f1cf672":"ed37c87e","chunk-b4a6307e":"25e478a7","chunk-8270c2c2":"0a96254d","chunk-4b6a4571":"c7238c87","chunk-6187bee6":"22cfe44a"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===a))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===a)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),t(o)},b.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(b);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}a[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var b=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0319":function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return f}));var r,c=t("b85c"),a=t("1da1"),o=(t("96cf"),t("b64b"),t("caad"),t("2532"),t("07ac"),t("159b"),t("3a0b")),u=t("7a23"),i=Object(u["B"])([]),l=Object(u["B"])(),f=Object(u["x"])([]);function s(e){var n,t="",a=Object(c["a"])(r.primary);try{for(a.s();!(n=a.n()).done;){var o=n.value,u=o.ipa,i=o.tags;if(e.includes(u)){t+=i;break}}}catch(h){a.e(h)}finally{a.f()}var l,f=Object(c["a"])(r.secondary);try{for(f.s();!(l=f.n()).done;){var s=l.value,b=s.ipa,d=s.tags;e.includes(b)&&(t+=" "+d)}}catch(h){f.e(h)}finally{f.f()}return t}function b(e){var n={},t=function(t){var r=e[t];if(!r)return"continue";r.forEach((function(e){var r=e.phoneme;r in n||(n[r]={ipa:r,tags:s(r),lects:{}}),n[r].lects[t]=e}))};for(var r in e)t(r);i.value=Object.values(n),i.value.sort((function(e,n){var t=e.ipa,r=n.ipa;return t>r?1:r>t?-1:0})),l.value=i.value[0]}Object(u["J"])(o["a"],Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.value.length=0,f.value.length=0,e.next=4,Object(o["b"])("ipa",{});case 4:return r=e.sent,e.next=7,Object(o["c"])("phonology");case 7:n=e.sent,f.value=Object.keys(n),b(n);case 10:case"end":return e.stop()}}),e)}))))},"03a7":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return s})),t.d(n,"e",(function(){return b}));var r=t("3835"),c=t("1da1"),a=(t("07ac"),t("d81d"),t("96cf"),t("7a23")),o=t("3a0b"),u=t("fa5c"),i=Object(a["B"])({});Object(a["J"])(o["a"],Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.value={},e.next=3,Object(o["c"])("converter");case 3:i.value=e.sent;case 4:case"end":return e.stop()}}),e)}))));var l=Object(a["B"])();Object(a["J"])(i,(function(e){e&&(l.value=Object.values(e)[0])}));var f=Object(a["v"])({});Object(a["J"])(l,(function(e){e&&(f.initial=e.mappings[0],f.final=e.mappings[1],b.initial="")}));var s=Object(a["b"])((function(){var e,n,t,c;return{initial:null!==(e=null===(n=f.initial)||void 0===n?void 0:n.pairs)&&void 0!==e?e:[],final:null!==(t=null===(c=f.final)||void 0===c?void 0:c.pairs.map((function(e){var n=Object(r["a"])(e,2),t=n[0],c=n[1];return[c,t]})))&&void 0!==t?t:[]}}));Object(a["J"])((function(){return s.value.initial}),(function(e,n){b.initial=Object(u["a"])(Object(u["a"])(b.initial,n),e.map((function(e){var n=Object(r["a"])(e,2),t=n[0],c=n[1];return[c,t]})))}));var b=Object(a["v"])({initial:"",final:Object(a["b"])((function(){return Object(u["a"])(Object(u["a"])(b.initial,s.value.initial),s.value.final)}))})},"3a0b":function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return s}));var r,c=t("b85c"),a=t("1da1"),o=(t("96cf"),t("d3b7"),t("7a23")),u=Object(o["x"])([]),i=null!==(r=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_STORE)&&void 0!==r?r:"https://raw.githubusercontent.com/alkaitagi/Avzag/store/";function l(e,n){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+n+".json").then((function(e){return e.json()})).catch((function(){return t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function s(e){return b.apply(this,arguments)}function b(){return b=Object(a["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={},r=Object(c["a"])(u.value),e.prev=2,r.s();case 4:if((a=r.n()).done){e.next=12;break}return o=a.value,e.next=8,l(o+"/"+n);case 8:i=e.sent,i&&(t[o]=i);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),r.e(e.t0);case 17:return e.prev=17,r.f(),e.finish(17);case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),b.apply(this,arguments)}},9041:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return s}));var r=t("3835"),c=t("1da1"),a=(t("13d5"),t("159b"),t("4fad"),t("4de4"),t("caad"),t("2532"),t("d81d"),t("96cf"),t("3a0b")),o=t("7a23"),u=Object(o["B"])(),i=Object(o["B"])({});function l(e,n){return e.reduce((function(e,t){return Object.entries(i.value).forEach((function(c){var a=Object(r["a"])(c,2),o=a[0],u=a[1];u.filter((function(e){var r,c;return null===(r="Tags"===n?null!==(c=e.tags)&&void 0!==c?c:"":e.translation)||void 0===r?void 0:r.includes(t)})).forEach((function(n){var t=n.translation;e[t]||(e[t]={}),e[t][o]||(e[t][o]=[]),e[t][o].push(n)}))})),e}),{})}function f(e,n){return i.value[e].filter((function(e){var t=e.forms;return t.some((function(e){var t=e.text;return n.some((function(e){return t.plain.includes(e)}))}))})).map((function(e){var n=e.translation;return n}))}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Translation";return e?l(f(e,n),"Translation"):l(n,t)}Object(o["J"])(a["a"],Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.value={},u.value=void 0,e.next=4,Object(a["c"])("dictionary");case 4:return i.value=e.sent,e.next=7,Object(a["b"])("dictionary");case 7:u.value=e.sent;case 8:case"end":return e.stop()}}),e)}))))},"9f88":function(e,n,t){},ac93:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return l})),t.d(n,"b",(function(){return f})),t.d(n,"d",(function(){return s}));var r=t("2909"),c=t("1da1"),a=(t("5db7"),t("73d9"),t("d81d"),t("07ac"),t("b0c0"),t("a15b"),t("99af"),t("96cf"),t("3a0b")),o=t("7a23"),u=Object(o["B"])([]),i=Object(o["B"])({}),l=Object(o["B"])(),f=Object(o["B"])(),s=Object(o["x"])([]);function b(e){return e.flatMap((function(e){return e.map((function(e){return e.text.plain.replaceAll("*","")}))}))}function d(){if(i.value){var e=Object.values(i.value);s.value=u.value.map((function(n){var t=n.phrases;return t.map((function(n){var t=n.id,c=n.name,a=n.blocks;return[c].concat(Object(r["a"])(b(a)),Object(r["a"])(e.flatMap((function(e){var n,r;return b(null!==(n=null===(r=e[t])||void 0===r?void 0:r.blocks)&&void 0!==n?n:[])})))).join(" ").toLowerCase()}))}))}}Object(o["J"])(a["a"],Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.value=[],i.value={},e.next=4,Object(a["b"])("phrasebook",[]);case 4:return u.value=e.sent,e.next=7,Object(a["c"])("phrasebook");case 7:i.value=e.sent,d(),l.value=u.value[0],f.value=l.value.phrases[0];case 11:case"end":return e.stop()}}),e)}))))},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("9483");Object(r["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var c=t("7a23"),a=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),o=function(){return t.e("chunk-c8337bde").then(t.bind(null,"36e7"))},u=function(){return t.e("chunk-caeaab96").then(t.bind(null,"900c"))},i=function(){return t.e("chunk-194a4587").then(t.bind(null,"acdc"))},l=function(){return Promise.all([t.e("chunk-e75c74de"),t.e("chunk-8270c2c2"),t.e("chunk-6187bee6")]).then(t.bind(null,"aeb7"))},f=function(){return t.e("chunk-0e413a7c").then(t.bind(null,"31a6"))},s=function(){return Promise.all([t.e("chunk-e75c74de"),t.e("chunk-8270c2c2"),t.e("chunk-4b6a4571")]).then(t.bind(null,"3c94"))},b=function(){return t.e("chunk-0fa422bb").then(t.bind(null,"f5be"))},d=function(){return t.e("chunk-501397a1").then(t.bind(null,"4929"))},h=function(){return t.e("chunk-333f458c").then(t.bind(null,"3cb6"))},p=function(){return Promise.all([t.e("chunk-e75c74de"),t.e("chunk-00273453"),t.e("chunk-0f1cf672")]).then(t.bind(null,"a1df"))},v=function(){return Promise.all([t.e("chunk-e75c74de"),t.e("chunk-00273453"),t.e("chunk-b4a6307e")]).then(t.bind(null,"e701"))},m=[{path:"/home",name:"Home",component:o},{path:"/",component:u,children:[{path:"phonology",name:"Phonology",component:l},{path:"converter",name:"Converter",component:f},{path:"phrasebook",name:"Phrasebook",component:s},{path:"dictionary",name:"Dictionary",component:b}]},{path:"/editor/",component:i,children:[{path:"phonology",name:"PhonologyEditor",component:d},{path:"converter",name:"ConverterEditor",component:h},{path:"phrasebook",name:"PhrasebookEditor",component:p},{path:"phrasebook/corpus",name:"PhrasebookCorpusEditor",component:v}]},{path:"/:pathMatch(.*)",redirect:{name:"Home"}}],g=Object(a["a"])({history:Object(a["b"])(),routes:m});function O(e,n,t,r,a,o){var u=Object(c["A"])("router-view");return Object(c["r"])(),Object(c["d"])(u)}t("b0c0"),t("caad");var j=t("3a0b"),k=(t("0319"),t("03a7"),t("ac93"),t("9041"),Object(c["h"])({setup:function(){var e,n=Object(a["c"])(),t=Object(a["d"])();n.name&&"Home"!==n.name||t.push(localStorage.url&&localStorage.url!==n.path?{path:localStorage.url}:{name:"Home"}),"Home"!==n.name&&(j["a"].value=JSON.parse(null!==(e=localStorage.lects)&&void 0!==e?e:"[]")),Object(c["K"])((function(){var e=n.name;e&&(localStorage.url=n.path,["Phonology","Converter","Phrasebook","Dictionary"].includes(e)&&(localStorage.urlUser=n.path))}))}}));t("dfe3");k.render=O;var y=k,w={key:0,class:"icon"},x={key:1};function P(e,n,t,r,a,o){return Object(c["r"])(),Object(c["d"])("button",{class:{highlight:e.isOn}},[e.icon?(Object(c["r"])(),Object(c["d"])("p",w,Object(c["C"])(e.icon),1)):Object(c["e"])("",!0),e.text?(Object(c["r"])(),Object(c["d"])("p",x,Object(c["C"])(e.text),1)):Object(c["e"])("",!0)],2)}var S=Object(c["h"])({props:{icon:{type:String,default:""},text:{type:String,default:""},isOn:Boolean}});S.render=P;var E=S;function C(e,n,t,r,a,o){var u=Object(c["A"])("btn");return Object(c["r"])(),Object(c["d"])("div",{onClick:n[1]||(n[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(c["z"])(e.$slots,"default",{on:e.modelValue},(function(){return[Object(c["g"])(u,Object(c["l"])({style:{width:"100%"}},e.attrs,{icon:e.icon,text:e.text,"is-on":e.modelValue}),null,16,["icon","text","is-on"])]}))])}var B=Object(c["h"])({props:{modelValue:Boolean,icon:{type:String,default:""},text:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,n){var t=n.emit,r=n.attrs;function c(){t("update:modelValue",!e.modelValue)}return{toggle:c,attrs:r}}});B.render=C;var A=B,R=Object(c["c"])(y);R.component("Btn",E),R.component("Toggle",A),R.use(g),g.isReady().then((function(){return R.mount("#app")}))},dfe3:function(e,n,t){"use strict";t("9f88")},fa5c:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("3835"),c=t("b85c");t("fb6a"),t("498a"),t("5319"),t("ac1f");function a(e){var n="",t=0;return" "===e.charAt(0)&&(n=" ",t=1),n+e.charAt(t).toUpperCase()+e.slice(t+1)}function o(e,n){e=" "+e.replace(/\n/g,"\n ").trim();for(var t="",o=0;o<e.length;){var u,i=!1,l=Object(c["a"])(n);try{for(l.s();!(u=l.n()).done;){var f=Object(r["a"])(u.value,2),s=f[0],b=f[1];if(s&&b){for(var d=s.length,h=e.substring(o,o+d),p=[[s,b],[a(s),a(b)],[s.toUpperCase(),b.toUpperCase()]],v=0,m=p;v<m.length;v++){var g=Object(r["a"])(m[v],2),O=g[0],j=g[1];if(h===O){i=!0,t+=j,o+=d;break}}if(i)break}}}catch(k){l.e(k)}finally{l.f()}i||(t+=e[o],o++)}return t.replace(/\n /g,"\n").trim()}}});