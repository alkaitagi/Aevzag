(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f36f2e50"],{"13d5":function(e,t,n){"use strict";var c=n("23e7"),r=n("d58f").left,a=n("a640"),u=n("ae40"),i=n("2d00"),l=n("605d"),o=a("reduce"),b=u("reduce",{1:0}),s=!l&&i>79&&i<83;c({target:"Array",proto:!0,forced:!o||!b||s},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"21ae":function(e,t,n){"use strict";n("6fc0")},"340d":function(e,t,n){"use strict";n("a3c3")},"45fc":function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").some,a=n("a640"),u=n("ae40"),i=a("some"),l=u("some");c({target:"Array",proto:!0,forced:!i||!l},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").filter,a=n("1dde"),u=n("ae40"),i=a("filter"),l=u("filter");c({target:"Array",proto:!0,forced:!i||!l},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fad":function(e,t,n){var c=n("23e7"),r=n("6f53").entries;c({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"51db":function(e,t,n){"use strict";n("f0a8")},"6fc0":function(e,t,n){},a3c3:function(e,t,n){},a8d4:function(e,t,n){},c178:function(e,t,n){"use strict";n("a8d4")},d58f:function(e,t,n){var c=n("1c0b"),r=n("7b0b"),a=n("44ad"),u=n("50c4"),i=function(e){return function(t,n,i,l){c(n);var o=r(t),b=a(o),s=u(o.length),d=e?s-1:0,f=e?-1:1;if(i<2)while(1){if(d in b){l=b[d],d+=f;break}if(d+=f,e?d<0:s<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:s>d;d+=f)d in b&&(l=n(l,b[d],d,o));return l}};e.exports={left:i(!1),right:i(!0)}},f0a8:function(e,t,n){},f5be:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["N"])("data-v-54761f16");Object(c["u"])("data-v-54761f16");var a={class:"section col small"},u={class:"row-1 lects fill"},i={class:"col card lect"},l=Object(c["f"])(" English "),o={class:"flex"},b={class:"col lect"},s=Object(c["g"])("hr",null,null,-1),d={class:"text-faded translation"},f=Object(c["g"])("hr",null,null,-1);Object(c["s"])();var j=r((function(e,t,n,r,j,O){var p=Object(c["A"])("btn"),v=Object(c["A"])("Flag"),y=Object(c["A"])("EntryCard");return Object(c["r"])(),Object(c["d"])("div",a,[Object(c["g"])("div",u,[Object(c["g"])("div",i,[l,e.lect?(Object(c["r"])(),Object(c["d"])(p,{key:1,icon:"search",text:"Search by meaning...",onClick:t[2]||(t[2]=function(t){return e.lect=""})},null,8,["text"])):Object(c["M"])((Object(c["r"])(),Object(c["d"])("input",{key:0,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.query=t}),type:"text"},null,512)),[[c["H"],e.query]])]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.lects,(function(n){return Object(c["r"])(),Object(c["d"])("div",{key:n,class:"col card lect flag"},[Object(c["g"])(v,{lect:n,class:"blur"},null,8,["lect"]),Object(c["g"])("h2",o,Object(c["C"])(n),1),e.lect===n?Object(c["M"])((Object(c["r"])(),Object(c["d"])("input",{key:0,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.query=t}),type:"text"},null,512)),[[c["H"],e.query]]):(Object(c["r"])(),Object(c["d"])(p,{key:1,icon:"search",text:"Search by ".concat(n," form..."),onClick:function(t){return e.lect=n}},null,8,["text","onClick"]))])})),128))]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.searchResult,(function(t,n){return Object(c["r"])(),Object(c["d"])("div",{key:n,class:"row-1 lects"},[Object(c["g"])("div",b,[s,Object(c["g"])("i",d,Object(c["C"])(n),1)]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.lects,(function(e){return Object(c["r"])(),Object(c["d"])("div",{key:e,class:"col lect"},[f,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(t[e],(function(e,t){return Object(c["r"])(),Object(c["d"])(y,{key:t,entry:e},null,8,["entry"])})),128))])})),128))])})),128))])})),O=(n("b64b"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("13d5"),n("45fc"),n("4fad"),n("2532"),n("159b"),n("3835")),p=(n("96cf"),n("1da1")),v=n("3a0b"),y=Object(c["B"])({});function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e&&Object.entries(y.value).forEach((function(c){var r=Object(O["a"])(c,2),a=r[0],u=r[1];u.filter((function(n){return t?n.translation===e:n.translation.includes(e)})).forEach((function(e){var t=e.translation;n[t]||(n[t]={}),n[t][a]||(n[t][a]=[]),n[t][a].push(e)}))})),n}function x(e,t){return t&&e?y.value[e].filter((function(e){var n=e.forms;return n.some((function(e){var n=e.text;return n.plain.includes(t)}))})).map((function(e){var t=e.translation;return t})).reduce((function(e,t){return g(t,!0,e)}),{}):g(t)}Object(c["J"])(v["a"],Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return y.value={},e.next=3,Object(v["c"])("dictionary");case 3:y.value=e.sent;case 4:case"end":return e.stop()}}),e)}))));var h=Object(c["N"])("data-v-0426b1a4");Object(c["u"])("data-v-0426b1a4");var k={key:0,class:"col"},m={class:"row"},C={key:0,class:"col card"},w={key:0},_={class:"text-faded text-caption"},A={class:"text-faded text-caption"};Object(c["s"])();var E=h((function(e,t,n,r,a,u){var i=Object(c["A"])("btn");return e.entry?(Object(c["r"])(),Object(c["d"])("div",k,[Object(c["g"])("div",m,[Object(c["g"])(i,{class:"flex","is-on":e.expand>0,text:e.plain,onClick:t[1]||(t[1]=function(t){return e.expand=e.expand?0:1})},null,8,["is-on","text"]),e.expand?(Object(c["r"])(),Object(c["d"])(c["a"],{key:0},[Object(c["g"])(i,{icon:"info","is-on":1===e.expand,onClick:t[2]||(t[2]=function(t){return e.expand=1})},null,8,["is-on"]),Object(c["g"])(i,{icon:"format_list_bulleted","is-on":2===e.expand,onClick:t[3]||(t[3]=function(t){return e.expand=2})},null,8,["is-on"]),Object(c["g"])(i,{icon:"speaker_notes","is-on":3===e.expand,onClick:t[4]||(t[4]=function(t){return e.expand=3})},null,8,["is-on"])],64)):Object(c["e"])("",!0)]),e.expand?(Object(c["r"])(),Object(c["d"])("div",C,[1===e.expand&&e.entry.explanation?(Object(c["r"])(),Object(c["d"])("p",w,Object(c["C"])(e.entry.explanation),1)):2===e.expand?(Object(c["r"])(!0),Object(c["d"])(c["a"],{key:1},Object(c["y"])(e.entry.forms,(function(e,t){return Object(c["r"])(),Object(c["d"])("div",{key:t,class:"col-0"},[Object(c["f"])(Object(c["C"])(e.text.plain)+Object(c["C"])(e.text.glossed)+" ",1),Object(c["g"])("span",_,Object(c["C"])(e.grammar),1)])})),128)):3===e.expand?(Object(c["r"])(!0),Object(c["d"])(c["a"],{key:2},Object(c["y"])(e.entry.samples,(function(e,t){return Object(c["r"])(),Object(c["d"])("div",{key:t,class:"col-0"},[Object(c["g"])("p",null,Object(c["C"])(e.text.plain),1),Object(c["g"])("p",A,Object(c["C"])(e.translation),1)])})),128)):Object(c["e"])("",!0)])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)})),q=Object(c["h"])({name:"EntryCard",props:{entry:{type:Object,default:void 0}},setup:function(e){var t=Object(c["x"])(0),n=Object(c["b"])((function(){var t;return null===(t=e.entry)||void 0===t?void 0:t.forms[0].text.plain}));return{expand:t,plain:n}}});n("340d");q.render=E,q.__scopeId="data-v-0426b1a4";var R=q,I=n("f929"),J=Object(c["h"])({components:{EntryCard:R,Flag:I["a"]},setup:function(){var e=Object(c["v"])({}),t=Object(c["x"])(""),n=Object(c["b"])((function(){return Object.keys(y.value)})),r=Object(c["b"])({get:function(){return e[t.value]},set:function(n){return e[t.value]=n}}),a=Object(c["b"])((function(){return x(t.value,r.value)}));return{dictionaries:y,lects:n,query:r,lect:t,searchResult:a}}});n("51db");J.render=j,J.__scopeId="data-v-54761f16";t["default"]=J},f929:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["N"])("data-v-54304c3e"),a=r((function(e,t,n,r,a,u){return e.lect?(Object(c["r"])(),Object(c["d"])("img",{key:0,src:e.src,class:"no-select"},null,8,["src"])):Object(c["e"])("",!0)})),u=n("3a0b"),i=Object(c["h"])({props:{lect:{type:String,default:""}},setup:function(e){var t=Object(c["b"])((function(){return u["d"]+e.lect+"/flag.png"}));return{src:t}}});n("21ae"),n("c178");i.render=a,i.__scopeId="data-v-54304c3e";t["a"]=i}}]);