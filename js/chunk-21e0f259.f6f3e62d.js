(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e0f259"],{"07ac":function(e,t,n){var r=n("23e7"),c=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return c(e)}})},"09a7":function(e,t,n){},"13d5":function(e,t,n){"use strict";var r=n("23e7"),c=n("d58f").left,a=n("a640"),u=n("ae40"),l=n("2d00"),o=n("605d"),i=a("reduce"),b=u("reduce",{1:0}),d=!o&&l>79&&l<83;r({target:"Array",proto:!0,forced:!i||!b||d},{reduce:function(e){return c(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"294e":function(e,t,n){},"595b":function(e,t,n){"use strict";n("09a7")},"5bfb":function(e,t,n){"use strict";n("9d0a")},"80b3":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["N"])("data-v-3ae1a95e"),a=c((function(e,t,n,c,a,u){return Object(r["M"])((Object(r["t"])(),Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.input=t}),placeholder:e.placeholder,type:"text"},null,8,["placeholder"])),[[r["H"],e.input]])})),u=(n("4de4"),n("13d5"),n("ac1f"),n("1276"),Object(r["i"])({props:{modelValue:{type:Object,default:void 0},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["y"])(""),a=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return Object(r["K"])((function(){return a.value=c.value.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})})),{input:c}}}));n("d9c9");u.render=a,u.__scopeId="data-v-3ae1a95e";t["a"]=u},9898:function(e,t,n){"use strict";n("e97b")},"9d0a":function(e,t,n){},a134:function(e,t,n){"use strict";n("294e")},ab04:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["N"])("data-v-143c97ea"),a=c((function(e,t,n,c,a,u){return Object(r["t"])(),Object(r["d"])("button",{class:[{"text-faded":e.faded,highlight:e.selected},"col-0"]},[Object(r["h"])("b",null,Object(r["D"])(e.str),1),Object(r["h"])("span",{class:["text-ipa",{"text-faded":e.str}]},Object(r["D"])(e.ipa),3)],2)})),u=Object(r["i"])({props:{selected:Boolean,faded:Boolean,ipa:{type:String,default:""},str:{type:String,default:""}}});n("595b");u.render=a,u.__scopeId="data-v-143c97ea";t["a"]=u},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},aeb7:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["N"])("data-v-2853883f");Object(r["w"])("data-v-2853883f");var a={key:0,class:"section"},u={class:"col-1 scroll"},l={key:0,class:"col-1"},o={class:"card col-1"},i={class:"text-ipa"},b={class:"text-caption text-faded text-spaced"};Object(r["u"])();var d=c((function(e,t,n,c,d,s){var f=Object(r["B"])("ToggleQuery"),j=Object(r["B"])("InputQuery"),O=Object(r["B"])("Table"),v=Object(r["B"])("PhonemeUse");return e.phonemes?(Object(r["t"])(),Object(r["d"])("div",a,[Object(r["h"])("div",u,[Object(r["h"])(f,{modelValue:e.lectQuery,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.lectQuery=t}),labels:e.lects},null,8,["modelValue","labels"]),Object(r["h"])(j,{modelValue:e.featureQuery,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.featureQuery=t}),placeholder:"Query phonemes, e.g. voiced -velar..."},null,8,["modelValue"]),(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.categories,(function(n){return Object(r["t"])(),Object(r["d"])("div",{key:n,class:"col"},[Object(r["h"])("h2",null,Object(r["D"])(n+"s"),1),Object(r["h"])(O,{modelValue:e.phoneme,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phoneme=t}),filter:n,"feature-query":e.featureQuery,"lect-query":e.lectQuery,phonemes:e.phonemes},null,8,["modelValue","filter","feature-query","lect-query","phonemes"])])})),128))]),e.phoneme?(Object(r["t"])(),Object(r["d"])("div",l,[Object(r["h"])("div",o,[Object(r["h"])("h1",i,Object(r["D"])(e.phoneme.ipa),1),Object(r["h"])("p",b,Object(r["D"])(e.phoneme.tags),1)]),(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.phoneme.lects,(function(e,t){return Object(r["t"])(),Object(r["d"])(v,{key:t,lect:t,use:e},null,8,["lect","use"])})),128))])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),s={key:0,class:"row scroll small"};function f(e,t,n,c,a,u){var l=Object(r["B"])("btn");return e.visible?(Object(r["t"])(),Object(r["d"])("div",s,[Object(r["h"])(l,{class:"round",icon:"clear",onClick:t[1]||(t[1]=function(t){return e.query={}})}),(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.labels,(function(t){return Object(r["t"])(),Object(r["d"])(l,{key:t,text:t,class:["round",e.highlights[t]],onClick:function(n){return e.toggle(t)}},null,8,["text","class","onClick"])})),128))])):Object(r["e"])("",!0)}n("d81d"),n("4fad"),n("c1f9");var j=n("ade3"),O=n("3835"),v=Object(r["i"])({props:{modelValue:{type:Object,default:void 0},labels:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function a(e){e in c.value?c.value[e]?c.value[e]=!1:delete c.value[e]:c.value[e]=!0}var u=Object(r["b"])((function(){return e.labels.length>1})),l=Object(r["b"])((function(){return Object.fromEntries(Object.entries(c.value).map((function(e){var t=Object(O["a"])(e,2),n=t[0],r=t[1];return[n,r?"highlight-confirm":"highlight-alert"]})))})),o=Object(r["b"])((function(){return 1===e.labels.length?Object(j["a"])({},e.labels[0],!0):{}}));return Object(r["J"])((function(){return e.labels}),(function(){return c.value=o.value}),{immediate:!0}),{query:c,highlights:l,visible:u,toggle:a}}});v.render=f;var p=v,h=n("80b3"),y=Object(r["N"])("data-v-449b557c"),m=y((function(e,t,n,c,a,u){var l=Object(r["B"])("TableEntry");return Object(r["t"])(),Object(r["d"])("div",{id:"root",class:[{narrow:e.narrow},"row scroll wrap"]},[(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.filtered,(function(t,n){return Object(r["t"])(),Object(r["d"])(l,{key:n,faded:!e.fitting[n],ipa:t.ipa,str:e.graphemes[n],selected:e.selected==t,onClick:function(n){return e.selected=t}},null,8,["faded","ipa","str","selected","onClick"])})),128))],2)})),g=(n("4de4"),n("caad"),n("b64b"),n("2532"),n("ab04")),w=n("d53c"),k=Object(r["i"])({components:{TableEntry:g["a"]},props:{modelValue:{type:Object,default:void 0},phonemes:{type:Array,default:function(){return[]}},filter:{type:String,default:""},lectQuery:{type:Object,default:""},featureQuery:{type:Object,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}}),a=Object(r["b"])((function(){return e.filter?e.phonemes.filter((function(t){var n=t.tags;return null===n||void 0===n?void 0:n.includes(e.filter)})):e.phonemes})),u=Object(r["b"])((function(){return a.value.map((function(t){var n=t.lects,r=t.tags;return Object(w["a"])(Object.keys(n),e.lectQuery)&&Object(w["a"])(r,e.featureQuery)}))})),l=Object(r["b"])((function(){for(var t="",n=0,r=Object.entries(e.lectQuery);n<r.length;n++){var c=Object(O["a"])(r[n],2),a=c[0],u=c[1];if(u){if(t)break;t=a}}return t})),o=Object(r["b"])((function(){return l.value?a.value.map((function(e){var t,n,r,c=e.lects;return null===(t=c[l.value])||void 0===t||null===(n=t.samples)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.grapheme})):[]})),i=Object(r["b"])((function(){return a.value.length<=12}));return{narrow:i,graphemes:o,fitting:u,selected:c,filtered:a}}});n("a134");k.render=m,k.__scopeId="data-v-449b557c";var V=k,x=Object(r["N"])("data-v-5b71e50b");Object(r["w"])("data-v-5b71e50b");var Q={class:"col-1 card small"},D={class:"title"},_={class:"flex"},A={class:"col-0"},C={class:"icon"};Object(r["u"])();var E=x((function(e,t,n,c,a,u){var l=Object(r["B"])("Notes");return Object(r["t"])(),Object(r["d"])("div",Q,[Object(r["h"])("div",D,[Object(r["h"])("h2",_,Object(r["D"])(e.lect),1),(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.graphemes,(function(e){return Object(r["t"])(),Object(r["d"])("p",{key:e,class:"text-dot"},Object(r["D"])(e),1)})),128))]),Object(r["h"])("div",A,[(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.fullSamples,(function(t,n){return Object(r["t"])(),Object(r["d"])("button",{key:n,class:"row",onClick:function(t){return e.play(n)}},[Object(r["h"])("span",C,Object(r["D"])(e.playable[n]?"play_arrow":"arrow_right"),1),Object(r["h"])(l,{class:"word",notes:[e.words[n]]},null,8,["notes"]),Object(r["h"])(l,{notes:[e.ipas[n]]},null,8,["notes"])],8,["onClick"])})),128))]),Object(r["h"])(l,{class:"text-caption",notes:e.use.notes},null,8,["notes"])])})),S=(n("4160"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("d9c7")),B=n("3a0b"),T=n("e7de"),z=Object(r["i"])({components:{Notes:S["a"]},props:{lect:{type:String,default:""},use:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(r["b"])((function(){return B["d"]+e.lect+"/audio/"})),n=Object(r["b"])((function(){var t,n=new Set(null===(t=e.use.samples)||void 0===t?void 0:t.map((function(e){var t=e.grapheme;return t})));return n.delete(void 0),n})),c=Object(r["b"])((function(){var t;return null===(t=e.use.samples)||void 0===t?void 0:t.filter((function(e){var t=e.word,n=e.ipa;return t||n}))})),a=Object(r["b"])((function(){var e;return null===(e=c.value)||void 0===e?void 0:e.map((function(e){var t,n=e.word,r=e.ipa;return null!==(t=null===n||void 0===n?void 0:n.replaceAll("*",""))&&void 0!==t?t:r})).map((function(e){return t.value+e+".mp3"}))}));function u(e,t){return e.includes("*")?e:e.replaceAll(t,"*".concat(t,"*"))}var l=Object(r["b"])((function(){var e;return null===(e=c.value)||void 0===e?void 0:e.map((function(e){var t=e.word,n=e.grapheme;return u(null!==t&&void 0!==t?t:"",null!==n&&void 0!==n?n:"")}))})),o=Object(r["b"])((function(){var t;return null===(t=c.value)||void 0===t?void 0:t.map((function(t){var n=t.ipa;return u(null!==n&&void 0!==n?n:"",e.use.phoneme)}))})),i=Object(r["y"])([]);function b(t){i.value[t]&&a.value&&T["play"](e.lect,a.value[t])}return Object(r["J"])(a,(function(e){e&&(i.value=new Array(e.length),e.forEach((function(e,t){return fetch(e,{method:"HEAD"}).then((function(e){var n=e.ok;return i.value[t]=n}))})))}),{immediate:!0}),{play:b,playable:i,ipas:o,words:l,fullSamples:c,graphemes:n}}});n("5bfb");z.render=E,z.__scopeId="data-v-5b71e50b";var I,N=z,q=(n("07ac"),n("96cf"),n("1da1")),U=n("b85c"),J=Object(r["y"])([]),R=Object(r["C"])(),P=Object(r["C"])();function H(e){var t,n="",r=Object(U["a"])(I.primary);try{for(r.s();!(t=r.n()).done;){var c=t.value,a=c.ipa,u=c.tags;if(e.includes(a)){n+=u;break}}}catch(s){r.e(s)}finally{r.f()}var l,o=Object(U["a"])(I.secondary);try{for(o.s();!(l=o.n()).done;){var i=l.value,b=i.ipa,d=i.tags;e.includes(b)&&(n+=" "+d)}}catch(s){o.e(s)}finally{o.f()}return n}function K(e){var t={},n=function(n){var r=e[n];if(!r)return"continue";r.forEach((function(e){var r=e.phoneme;r in t||(t[r]={ipa:r,tags:H(r),lects:{}}),t[r].lects[n]=e}))};for(var r in e)n(r);R.value=Object.values(t),R.value.sort((function(e,t){var n=e.ipa,r=t.ipa;return n>r?1:r>n?-1:0})),P.value=R.value[0]}var L=Object(B["a"])(Object(q["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(B["b"])("ipa");case 2:return I=e.sent,e.next=5,Object(B["c"])("phonology");case 5:t=e.sent,J.value=Object.keys(t),K(t);case 8:case"end":return e.stop()}}),e)})))),M=Object(r["i"])({components:{ToggleQuery:p,InputQuery:h["a"],Table:V,PhonemeUse:N},setup:function(){L();var e=["vowel","consonant"],t=Object(r["y"])({}),n=Object(r["y"])({});return{phonemes:R,phoneme:P,lects:J,categories:e,lectQuery:t,featureQuery:n}}});n("9898");M.render=d,M.__scopeId="data-v-2853883f";t["default"]=M},b64b:function(e,t,n){var r=n("23e7"),c=n("7b0b"),a=n("df75"),u=n("d039"),l=u((function(){a(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return a(c(e))}})},c1f9:function(e,t,n){var r=n("23e7"),c=n("2266"),a=n("8418");r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return c(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},c836:function(e,t,n){},d53c:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("caad"),n("4fad"),n("2532");var r=n("3835");function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return!0;var c=Object.entries(t);if(n&&!c.length)return!1;for(var a=0,u=c;a<u.length;a++){var l=Object(r["a"])(u[a],2),o=l[0],i=l[1];if(i!==e.includes(o))return!1}return!0}},d58f:function(e,t,n){var r=n("1c0b"),c=n("7b0b"),a=n("44ad"),u=n("50c4"),l=function(e){return function(t,n,l,o){r(n);var i=c(t),b=a(i),d=u(i.length),s=e?d-1:0,f=e?-1:1;if(l<2)while(1){if(s in b){o=b[s],s+=f;break}if(s+=f,e?s<0:d<=s)throw TypeError("Reduce of empty array with no initial value")}for(;e?s>=0:d>s;s+=f)s in b&&(o=n(o,b[s],s,i));return o}};e.exports={left:l(!1),right:l(!0)}},d9c7:function(e,t,n){"use strict";var r=n("7a23"),c={key:0,class:"col"},a={key:0},u={key:1,class:"highlight-font"},l={key:2},o={key:3,class:"text-ipa"};function i(e,t,n,i,b,d){return e.notes.length?(Object(r["t"])(),Object(r["d"])("div",c,[(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.pieces,(function(e,t){return Object(r["t"])(),Object(r["d"])("p",{key:t},[(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e,(function(e,t){var n=e.text,c=e.display;return Object(r["t"])(),Object(r["d"])(r["a"],{key:t},["plain"===c?(Object(r["t"])(),Object(r["d"])("span",a,Object(r["D"])(n),1)):"highlight"===c?(Object(r["t"])(),Object(r["d"])("span",u,Object(r["D"])(n),1)):"grapheme"===c?(Object(r["t"])(),Object(r["d"])("b",l,Object(r["D"])(n),1)):(Object(r["t"])(),Object(r["d"])("span",o,Object(r["D"])(n),1))],64)})),128))])})),128))])):Object(r["e"])("",!0)}n("d81d"),n("fb6a"),n("ac1f"),n("1276");var b=n("3835"),d=Object(r["i"])({props:{notes:{type:Array,default:function(){return[]}}},setup:function(e){function t(e,t,n){return e[0]===t&&e[e.length-1]===n}function n(e){for(var n=[["*","*","highlight"],["/","/","phoneme"],["<",">","grapheme"]],r=0,c=n;r<c.length;r++){var a=Object(b["a"])(c[r],3),u=a[0],l=a[1],o=a[2];if(t(e,u,l))return{text:e.slice(1,-1),display:o}}return{text:e,display:"plain"}}var c=Object(r["b"])((function(){var t=/(\/[^/]+\/|<[^<>]+>|\*[^*]+\*)/g;return e.notes.map((function(e){return e.split(t).map((function(e){return n(e)}))}))}));return{pieces:c}}});d.render=i;t["a"]=d},d9c9:function(e,t,n){"use strict";n("c836")},e7de:function(e,t,n){"use strict";n.r(t),n.d(t,"audio",(function(){return c})),n.d(t,"id",(function(){return a})),n.d(t,"current",(function(){return u})),n.d(t,"queue",(function(){return l})),n.d(t,"playing",(function(){return o})),n.d(t,"playback",(function(){return i})),n.d(t,"play",(function(){return d})),n.d(t,"stop",(function(){return s}));n("fb6a");var r=n("7a23"),c=new Audio,a=Object(r["y"])(""),u=Object(r["y"])(-1),l=Object(r["y"])([]),o=Object(r["y"])(!1),i=Object(r["y"])(0);function b(){o.value&&(u.value+=1,u.value>=l.value.length?s():c.src=l.value[u.value])}function d(e){a.value=e,o.value=!0;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];l.value=n.slice(),u.value=-1,b()}function s(){c.pause(),o.value=!1,l.value.length=0,u.value=-1,i.value=0}c.ontimeupdate=function(){return i.value=c.currentTime/c.duration},c.oncanplaythrough=c.play,c.onended=b,c.onerror=b},e97b:function(e,t,n){}}]);
//# sourceMappingURL=chunk-21e0f259.f6f3e62d.js.map