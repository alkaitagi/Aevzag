(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9e31e70"],{"04d4":function(t,e,n){"use strict";var a=n("7a23");function c(t,e,n,c,o,r){var i=Object(a["A"])("btn");return Object(a["r"])(),Object(a["d"])(i,{class:"highlight-font-alert",icon:t.icon,text:t.text,onClick:t.confirm},null,8,["icon","text","onClick"])}var o=Object(a["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(t,e){var n=e.emit;function a(){window.confirm(t.message)&&n("confirm")}return{confirm:a}}});o.render=c;e["a"]=o},"22e9":function(t,e,n){"use strict";n("2adb")},"230a":function(t,e,n){},"2adb":function(t,e,n){},"2d64":function(t,e,n){"use strict";n("4760")},"2db1":function(t,e,n){},"2eb1":function(t,e,n){},"35d6":function(t,e,n){"use strict";n("a07b")},"428a":function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["N"])("data-v-79fb7e88");Object(a["u"])("data-v-79fb7e88");var o={class:"row-1 wrap blocks"};Object(a["s"])();var r=c((function(t,e,n,r,i,u){var l=Object(a["A"])("ArrayControl"),d=Object(a["A"])("Context"),s=Object(a["A"])("btn"),b=Object(a["A"])("Block"),f=Object(a["A"])("EditorCard");return t.mphrase?(Object(a["r"])(),Object(a["d"])(f,{key:0,icon:"widgets",header:"Blocks"},{header:c((function(){return[Object(a["g"])(l,{modelValue:t.blocks,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.blocks=e}),item:t.block,"onUpdate:item":e[2]||(e[2]=function(e){return t.block=e}),add:function(){return[t.newState()]},copy:"",shift:"",remove:""},null,8,["modelValue","item","add"])]})),default:c((function(){return[Object(a["g"])(d,{translation:t.phrase.id?null:t.phrase.context},null,8,["translation"]),Object(a["g"])("div",o,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(t.blocks,(function(e,n){return Object(a["r"])(),Object(a["d"])("div",{key:n+"--"+Math.random(),class:"row"},[Object(a["g"])(s,{icon:"edit","is-on":t.block===e,onClick:function(n){return t.block=e}},null,8,["is-on","onClick"]),Object(a["g"])(b,{block:e},null,8,["block"])])})),128))])]})),_:1})):Object(a["e"])("",!0)})),i=n("b5cc"),u=n("7694"),l=n("5794"),d=n("72e9"),s=n("7ec3"),b=Object(a["h"])({name:"OrderEditor",components:{ArrayControl:i["a"],EditorCard:u["a"],Context:l["a"],Block:d["a"]},props:{modelValue:{type:Array,default:void 0},phrase:{type:Object,default:void 0}},emits:["update:modelValue","update:phrase"],setup:function(t,e){var n=e.emit,c=Object(a["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),o=Object(a["b"])({get:function(){return t.phrase},set:function(t){return n("update:modelValue",t)}}),r=Object(a["b"])({get:function(){return o.value.blocks},set:function(t){return o.value.blocks=t}});return{mphrase:o,blocks:r,block:c,newState:s["e"]}}});n("22e9");b.render=r,b.__scopeId="data-v-79fb7e88";e["a"]=b},"45fc":function(t,e,n){"use strict";var a=n("23e7"),c=n("b727").some,o=n("a640"),r=n("ae40"),i=o("some"),u=r("some");a({target:"Array",proto:!0,forced:!i||!u},{some:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},4760:function(t,e,n){},5794:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["N"])("data-v-05dd3a1d");Object(a["u"])("data-v-05dd3a1d");var o={class:"row text-caption wrap"},r=Object(a["g"])("div",{class:"icon"},"info",-1),i={key:1,class:"no-select"};Object(a["s"])();var u=c((function(t,e,n,c,u,l){return Object(a["r"])(),Object(a["d"])("div",o,[r,t.any?(Object(a["r"])(!0),Object(a["d"])(a["a"],{key:0},Object(a["y"])(t.translated,(function(t,e){return Object(a["r"])(),Object(a["d"])(a["a"],{key:e},[t.length?(Object(a["r"])(!0),Object(a["d"])(a["a"],{key:0},Object(a["y"])(t,(function(t){return Object(a["r"])(),Object(a["d"])("p",{key:t+"--"+e,class:"colored-dot-"+e},Object(a["C"])(t),3)})),128)):Object(a["e"])("",!0)],64)})),128)):(Object(a["r"])(),Object(a["d"])("p",i,"…"))])})),l=(n("4de4"),n("4160"),n("d81d"),n("45fc"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),d=n("3835"),s=n("b85c"),b=Object(a["h"])({name:"Context",props:{translation:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}}},setup:function(t){var e=Object(a["k"])("context",{}),n=Object(a["b"])((function(){var e,n={},a=Object(s["a"])(t.blocks);try{for(a.s();!(e=a.n()).done;){var c=e.value.state,o=null===c||void 0===c?void 0:c.conditions;o&&Object.entries(o).forEach((function(t){var e=Object(d["a"])(t,2),a=e[0],c=e[1];return Object.entries(c).forEach((function(t){var e=Object(d["a"])(t,1),c=e[0];n[a]||(n[a]=new Set),n[a].add(c)}))}))}}catch(r){a.e(r)}finally{a.f()}return n}));function c(t,e){return(null===t||void 0===t?void 0:t[e])||e}var o=Object(a["b"])((function(){return Object.entries(e.value).map((function(e){var a=Object(d["a"])(e,2),o=a[0],r=a[1];return Object(l["a"])(r).filter((function(t){var e;return!(null!==(e=n.value[o])&&void 0!==e&&e.has(t))})).map((function(e){var n;return c(null===(n=t.translation)||void 0===n?void 0:n[o],e)}))}))})),r=Object(a["b"])((function(){return o.value.some((function(t){return null===t||void 0===t?void 0:t.length}))}));return{translated:o,any:r}}});n("35d6");b.render=u,b.__scopeId="data-v-05dd3a1d";e["a"]=b},6722:function(t,e,n){"use strict";n("2eb1")},"72e9":function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["N"])("data-v-6daab2aa"),o=c((function(t,e,n,c,o,r){var i=Object(a["A"])("VState");return t.state?Object(a["M"])((Object(a["r"])(),Object(a["d"])("button",{key:0,ref:"button",class:["small",{disabled:t.disabled,glossed:t.glossed,flash:t.flash}],onClick:e[2]||(e[2]=function(){return t.move&&t.move.apply(t,arguments)})},[Object(a["g"])(i,{glossed:t.glossed,state:t.state,onText:e[1]||(e[1]=function(e){return t.text=e})},null,8,["glossed","state"])],2)),[[a["I"],t.text]]):Object(a["e"])("",!0)})),r=(n("5db7"),n("c975"),n("d81d"),n("73d9"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("2909")),i=n("3835"),u=n("af66"),l=n("7ec3"),d=Object(a["h"])({name:"Block",components:{VState:u["a"]},props:{block:{type:Array,default:void 0},glossed:Boolean},emits:["update"],setup:function(t,e){var n=e.emit,c=Object(a["x"])(),o=Object(a["x"])("");Object(a["J"])([c,o],(function(t){var e=Object(i["a"])(t,2),a=e[0],c=e[1];return n("update",{state:a,text:c})}),{immediate:!0});var u=Object(a["b"])((function(){var e;return!(null!==(e=c.value)&&void 0!==e&&e.transition)||t.block.length<2})),d=Object(a["k"])("context",{});function s(t){var e;Object(a["D"])(t)!==Object(a["D"])(c.value)&&(Object(l["a"])(d,null===(e=c.value)||void 0===e?void 0:e.conditions,!1),Object(l["a"])(d,null===t||void 0===t?void 0:t.conditions,!0),c.value=t)}var b=Object(a["b"])((function(){var e=t.block.flatMap((function(t){var e=t.conditions;return e?Object.keys(e):[]}));return Object(r["a"])(new Set(e)).map((function(t){return d.value[t]}))}));function f(){var e,n;if(!u.value){var o,r=null===(e=c.value)||void 0===e?void 0:e.transition,i=t.block;if("next"===r){var b=c.value?i.indexOf(Object(a["D"])(c.value)):-1;o=i[(b+1)%i.length]}else r&&(o=Object(l["d"])(r,i,d.value));s(o),Object(l["b"])(null===(n=o)||void 0===n?void 0:n.conditions,d.value)[0]<0&&(c.value=void 0)}}Object(a["J"])(b,(function(){return s(Object(l["d"])(void 0,t.block,d.value))}),{immediate:!0,deep:!0});var O=Object(a["x"])(!1);return Object(a["J"])(c,(function(){O.value=!1,setTimeout((function(){return O.value=!0}),50)})),{flash:O,move:f,state:c,disabled:u,text:o}}});n("2d64");d.render=o,d.__scopeId="data-v-6daab2aa";e["a"]=d},7577:function(t,e,n){"use strict";n("230a")},7694:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["N"])("data-v-a8e2d0ea");Object(a["u"])("data-v-a8e2d0ea");var o={class:"col"},r={class:"row header wrap"},i={class:"icon"},u={class:"flex"},l=Object(a["g"])("hr",null,null,-1),d={key:0,class:"text-caption text-faded"},s={class:"col"};Object(a["s"])();var b=c((function(t,e,n,c,b,f){return Object(a["r"])(),Object(a["d"])("div",o,[Object(a["g"])("div",r,[Object(a["g"])("p",i,Object(a["C"])(t.icon),1),Object(a["g"])("h2",u,Object(a["C"])(t.header),1),Object(a["z"])(t.$slots,"header")]),l,t.caption?(Object(a["r"])(),Object(a["d"])("p",d,[Object(a["z"])(t.$slots,"caption")])):Object(a["e"])("",!0),Object(a["g"])("div",s,[Object(a["z"])(t.$slots,"default")])])})),f=Object(a["h"])({name:"EditorCard",props:{button:{type:String,default:"add"},icon:{type:String,default:""},header:{type:String,default:""}},emits:["action"],setup:function(t,e){var n=e.emit,a=e.slots;return{emit:n,caption:a.caption}}});n("7577");f.render=b,f.__scopeId="data-v-a8e2d0ea";e["a"]=f},"7ec3":function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u}));n("4160"),n("d81d"),n("4fad"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var a=n("3835");function c(){return{text:{plain:"new state"}}}function o(t,e){e&&(t.value={},e.forEach((function(e){var n=e.entity;return t.value[n]=new Set})))}function r(t,e){if(!t)return[1,0];for(var n=0,c=0,o=0,r=Object.entries(t);o<r.length;o++)for(var i=Object(a["a"])(r[o],2),u=i[0],l=i[1],d=0,s=Object.entries(l);d<s.length;d++){var b,f=Object(a["a"])(s[d],2),O=f[0],j=f[1],v=null===(b=e[u])||void 0===b?void 0:b.has(O);if(!j&&!v)return[-1,0];v&&(n+=1),c+=1}return[n/(c||1),c]}function i(t,e,n){var c,o,i=-1,u=0,l=null!==(c=null===t||void 0===t?void 0:t.map((function(t){return e[t]})))&&void 0!==c?c:e;return l.forEach((function(t){var e=r(t.conditions,n),c=Object(a["a"])(e,2),l=c[0],d=c[1];(1===i?1===l&&d>u:l>i)&&(o=t,i=l,u=d)})),o}function u(t,e,n){e&&t.value&&Object.entries(e).forEach((function(e){var c=Object(a["a"])(e,2),o=c[0],r=c[1];return Object.entries(r).forEach((function(e){var c=Object(a["a"])(e,2),r=c[0],i=c[1],u=t.value[o];i&&u&&(n?u.add(r):u.delete(r))}))}))}},9362:function(t,e,n){"use strict";var a=n("7a23"),c={key:0,class:"block col-2"},o={class:"row wrap"},r={class:"row"},i={class:"row"};function u(t,e,n,u,l,d){var s=Object(a["A"])("ArrayControl"),b=Object(a["A"])("VState"),f=Object(a["A"])("EditorCard"),O=Object(a["A"])("ConditionsEditor"),j=Object(a["A"])("TransitionEditor"),v=Object(a["A"])("btn"),p=Object(a["A"])("toggle");return t.block?(Object(a["r"])(),Object(a["d"])("div",c,[Object(a["g"])(f,{icon:"account_tree",header:"States"},{header:Object(a["L"])((function(){return[Object(a["g"])(s,{modelValue:t.block,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.block=e}),item:t.state,"onUpdate:item":e[2]||(e[2]=function(e){return t.state=e}),add:t.newState,copy:"",shift:"",remove:""},null,8,["modelValue","item","add"])]})),default:Object(a["L"])((function(){return[Object(a["g"])("div",o,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(t.block,(function(e,n){return Object(a["r"])(),Object(a["d"])("button",{key:n,class:"select-"+(t.state===e),onClick:function(n){return t.state=e}},[Object(a["g"])(b,{state:e},null,8,["state"])],10,["onClick"])})),128))])]})),_:1}),t.state?(Object(a["r"])(),Object(a["d"])(a["a"],{key:0},[Object(a["g"])(O,{modelValue:t.state.conditions,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.conditions=e})},null,8,["modelValue"]),Object(a["g"])(j,{modelValue:t.state.transition,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.state.transition=e}),states:t.block},null,8,["modelValue","states"]),Object(a["g"])(f,{icon:"text_format",header:"text"},{default:Object(a["L"])((function(){return[Object(a["g"])("div",r,[Object(a["M"])(Object(a["g"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.state.text.plain=e}),type:"text",placeholder:"plain"},null,512),[[a["H"],t.state.text.plain]]),Object(a["M"])(Object(a["g"])("input",{"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.state.text.ipa=e}),class:"text-ipa",type:"text",placeholder:"ipa"},null,512),[[a["H"],t.state.text.ipa]]),Object(a["M"])(Object(a["g"])("input",{"onUpdate:modelValue":e[7]||(e[7]=function(e){return t.state.text.glossed=e}),type:"text",placeholder:"glossed"},null,512),[[a["H"],t.state.text.glossed]])])]})),_:1}),Object(a["g"])(f,{icon:"miscellaneous_services",header:"miscellaneous"},{header:Object(a["L"])((function(){return[Object(a["g"])("div",i,[Object(a["g"])(v,{icon:"music_off","is-on":null===t.state.audio,onClick:e[8]||(e[8]=function(e){return t.state.audio=null===t.state.audio?"":null})},null,8,["is-on"]),Object(a["g"])(p,{modelValue:t.state.implicit,"onUpdate:modelValue":e[9]||(e[9]=function(e){return t.state.implicit=e}),icon:"opacity"},null,8,["modelValue"]),Object(a["g"])(p,{modelValue:t.state.noSpace,"onUpdate:modelValue":e[10]||(e[10]=function(e){return t.state.noSpace=e}),icon:"compress"},null,8,["modelValue"])])]})),default:Object(a["L"])((function(){return[null!==t.state.audio?Object(a["M"])((Object(a["r"])(),Object(a["d"])("input",{key:0,"onUpdate:modelValue":e[11]||(e[11]=function(e){return t.state.audio=e}),type:"text",placeholder:"audio filename override, by default - plain text value"},null,512)),[[a["H"],t.state.audio]]):Object(a["e"])("",!0)]})),_:1})],64)):Object(a["e"])("",!0)])):Object(a["e"])("",!0)}var l=n("b5cc"),d=n("7694"),s=Object(a["N"])("data-v-50ac71b5");Object(a["u"])("data-v-50ac71b5");var b=Object(a["f"])("TODO brief explanation"),f={class:"row wrap"};Object(a["s"])();var O=s((function(t,e,n,c,o,r){var i=Object(a["A"])("btn"),u=Object(a["A"])("EditorCard");return Object(a["r"])(),Object(a["d"])(u,{icon:"tune",header:"conditions"},{header:s((function(){return[Object(a["g"])(i,{icon:"clear",onClick:e[1]||(e[1]=function(e){return t.conditions=void 0})})]})),caption:s((function(){return[b]})),default:s((function(){return[Object(a["g"])("div",f,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(t.tags,(function(e,n){var c=e.entity,o=e.tag,r=e.color,i=e.select;return Object(a["r"])(),Object(a["d"])("button",{key:c+"--"+o,class:"select-"+i,onClick:function(e){return t.toggle(n)}},[Object(a["g"])("span",{class:r},Object(a["C"])(o),3)],10,["onClick"])})),128))])]})),_:1})})),j=(n("5db7"),n("d81d"),n("73d9"),n("b64b"),n("3835")),v=Object(a["h"])({name:"ConditionsEditor",components:{EditorCard:d["a"]},props:{modelValue:{type:Object,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,c=Object(a["k"])("contextSource",{}),o=Object(a["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),r=Object(a["x"])([]);function i(t){var e;if(r.value){var n=r.value[t],a=n.flag,c=n.entity,i=n.tag,u=null!==(e=o.value)&&void 0!==e?e:{};void 0===a?(u[c]||(u[c]={}),u[c][i]=!0):a?u[c][i]=!1:(delete u[c][i],Object.keys(u[c]).length||delete u[c]),o.value=u}}return Object(a["J"])([c,o],(function(t){var e=Object(j["a"])(t,2),n=e[0],a=e[1];n&&(r.value=n.flatMap((function(t,e){var n=t.entity,c=t.tags;return c.map((function(t){var c,o=null===a||void 0===a||null===(c=a[n])||void 0===c?void 0:c[t];return{tag:t,entity:n,color:"colored-dot-"+e,select:void 0===o?"false":(o?"":"alt-")+"true",flag:o}}))})))}),{immediate:!0,deep:!0}),{context:c,conditions:o,tags:r,toggle:i}}});n("6722");v.render=O,v.__scopeId="data-v-50ac71b5";var p=v,m=(n("caad"),n("2532"),{class:"row"}),g={key:0,class:"row wrap"};function y(t,e,n,c,o,r){var i=Object(a["A"])("btn"),u=Object(a["A"])("VState"),l=Object(a["A"])("EditorCard");return Object(a["r"])(),Object(a["d"])(l,{icon:"alt_route",header:"transition"},{header:Object(a["L"])((function(){return[Object(a["g"])("div",m,[Object(a["g"])(i,{icon:"block","is-on":0===t.mode,onClick:e[1]||(e[1]=function(e){return t.mode=0})},null,8,["is-on"]),Object(a["g"])(i,{icon:"arrow_forward","is-on":1===t.mode,onClick:e[2]||(e[2]=function(e){return t.mode=1})},null,8,["is-on"]),Object(a["g"])(i,{icon:"star_outline","is-on":2===t.mode,onClick:e[3]||(e[3]=function(e){return t.mode=2})},null,8,["is-on"])])]})),default:Object(a["L"])((function(){return[2===t.mode?(Object(a["r"])(),Object(a["d"])("div",g,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(t.states,(function(e,n){return Object(a["r"])(),Object(a["d"])("button",{key:n,class:["col","select-"+t.transition.includes(n)],onClick:function(e){return t.toggle(n)}},[Object(a["g"])(u,{state:e},null,8,["state"])],10,["onClick"])})),128))])):Object(a["e"])("",!0)]})),_:1})}n("c975"),n("a434");var h=n("af66"),k=Object(a["h"])({name:"TransitionEditor",components:{EditorCard:d["a"],VState:h["a"]},props:{modelValue:{type:[Array,String],default:void 0},states:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,c=Object(a["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),o=Object(a["b"])({get:function(){return c.value?"next"===c.value?1:2:0},set:function(t){return c.value=t?1===t?"next":[]:void 0}});function r(t){if(Array.isArray(c.value)){var e=c.value.indexOf(t);e<0?c.value.push(t):c.value.splice(e,1)}}return{transition:c,mode:o,toggle:r}}});k.render=y;var x=k,C=n("7ec3"),w=Object(a["h"])({name:"BlockEditor",components:{ArrayControl:l["a"],EditorCard:d["a"],ConditionsEditor:p,TransitionEditor:x,VState:h["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,c=Object(a["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),o=Object(a["x"])(void 0);return{newState:C["e"],state:o,block:c}}});w.render=u;e["a"]=w},9392:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return u}));var a=n("7a23"),c={defaultFile:{},storage:"",filename:""},o=Object(a["x"])();function r(){o.value=JSON.parse(JSON.stringify(c.defaultFile))}function i(){localStorage[c.storage]=JSON.stringify(o.value)}function u(t){Object.assign(c,t);try{o.value=JSON.parse(localStorage[c.storage])}catch(e){r()}return Object(a["J"])(o,i,{deep:!0}),o}},a07b:function(t,e,n){},a25b:function(t,e,n){"use strict";n("2db1")},a434:function(t,e,n){"use strict";var a=n("23e7"),c=n("23cb"),o=n("a691"),r=n("50c4"),i=n("7b0b"),u=n("65f0"),l=n("8418"),d=n("1dde"),s=n("ae40"),b=d("splice"),f=s("splice",{ACCESSORS:!0,0:0,1:2}),O=Math.max,j=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b||!f},{splice:function(t,e){var n,a,d,s,b,f,m=i(this),g=r(m.length),y=c(t,g),h=arguments.length;if(0===h?n=a=0:1===h?(n=0,a=g-y):(n=h-2,a=j(O(o(e),0),g-y)),g+n-a>v)throw TypeError(p);for(d=u(m,a),s=0;s<a;s++)b=y+s,b in m&&l(d,s,m[b]);if(d.length=a,n<a){for(s=y;s<g-a;s++)b=s+a,f=s+n,b in m?m[f]=m[b]:delete m[f];for(s=g;s>g-a+n;s--)delete m[s-1]}else if(n>a)for(s=g-a;s>y;s--)b=s+a-1,f=s+n-1,b in m?m[f]=m[b]:delete m[f];for(s=0;s<n;s++)m[s+y]=arguments[s+2];return m.length=g-a+n,d}})},af66:function(t,e,n){"use strict";n("a15b");var a=n("7a23"),c=Object(a["N"])("data-v-27e17666");Object(a["u"])("data-v-27e17666");var o={class:"row dashes"};Object(a["s"])();var r=c((function(t,e,n,c,r,i){var u,l=Object(a["A"])("Notes");return Object(a["r"])(),Object(a["d"])("div",{class:["display row",{glossed:t.canGloss,"text-faded":null===(u=t.state)||void 0===u?void 0:u.implicit}]},[Object(a["g"])(l,{class:"col-0",notes:t.texts,onTexts:e[1]||(e[1]=function(e){return t.emit("text",e.join("\n"))})},null,8,["notes"]),Object(a["g"])("div",o,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(t.dashColors,(function(t,e){return Object(a["r"])(),Object(a["d"])("p",{key:e,class:t},null,2)})),128))])],2)})),i=(n("4de4"),n("c975"),n("d81d"),n("45fc"),n("4fad"),n("b64b"),n("07ac"),n("3835")),u=n("d9c7"),l=Object(a["h"])({name:"State",components:{Notes:u["a"]},props:{state:{type:Object,default:function(){return{}}},glossed:{type:Boolean,default:!1}},emits:["text"],setup:function(t,e){var n=e.emit,c=Object(a["k"])("context",{}),o=Object(a["b"])((function(){return Object.keys(c.value)})),r=Object(a["b"])((function(){return t.glossed&&t.state&&(t.state.text.ipa||t.state.text.glossed)})),u=Object(a["b"])((function(){var e=[];return r.value?(t.state.text.ipa&&e.push("/"+t.state.text.ipa+"/"),t.state.text.glossed&&e.push(t.state.text.glossed)):e.push(t.state.text.plain),e})),l=Object(a["b"])((function(){return t.state.transition&&t.state.conditions?Object.entries(t.state.conditions).filter((function(t){var e=Object(i["a"])(t,2),n=e[1];return Object.values(n).some((function(t){return t}))})).map((function(t){var e=Object(i["a"])(t,1),n=e[0];return o.value.indexOf(n)})).map((function(t){return"colored-back-"+t})):[]}));return{texts:u,canGloss:r,dashColors:l,emit:n}}});n("a25b");l.render=r,l.__scopeId="data-v-27e17666";e["a"]=l},b5cc:function(t,e,n){"use strict";var a=n("7a23"),c={class:"row"};function o(t,e,n,o,r,i){var u=Object(a["A"])("btn"),l=Object(a["A"])("ConfirmButton");return Object(a["r"])(),Object(a["d"])("div",c,[void 0!==t.add?(Object(a["r"])(),Object(a["d"])(u,{key:0,icon:"add",onClick:t.action.add},null,8,["onClick"])):Object(a["e"])("",!0),t.array&&t.item?(Object(a["r"])(),Object(a["d"])(a["a"],{key:1},[t.copy?(Object(a["r"])(),Object(a["d"])(u,{key:0,icon:"queue",onClick:t.action.copy},null,8,["onClick"])):Object(a["e"])("",!0),t.shift?(Object(a["r"])(),Object(a["d"])(u,{key:1,icon:"keyboard_arrow_right",onClick:e[1]||(e[1]=function(e){return t.action.shift(1)})})):t.shiftTwo?(Object(a["r"])(),Object(a["d"])(a["a"],{key:2},[Object(a["g"])(u,{icon:"keyboard_arrow_up",onClick:e[2]||(e[2]=function(e){return t.action.shift(-1)})}),Object(a["g"])(u,{icon:"keyboard_arrow_down",onClick:e[3]||(e[3]=function(e){return t.action.shift(1)})})],64)):Object(a["e"])("",!0),t.remove?(Object(a["r"])(),Object(a["d"])(l,{key:3,onConfirm:t.action.remove},null,8,["onConfirm"])):Object(a["e"])("",!0)],64)):Object(a["e"])("",!0)])}n("c975"),n("a434"),n("a9e3"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n("96cf");var i=n("1da1"),u=n("04d4"),l=Object(a["h"])({name:"ArrayControl",components:{ConfirmButton:u["a"]},props:{modelValue:{type:Array,default:function(){}},item:{type:Object,default:void 0},add:{type:[Number,String,Object,Function],default:void 0},copy:Boolean,shift:Boolean,shiftTwo:Boolean,remove:Boolean},emits:["update:modelValue","update:item"],setup:function(t,e){var n=e.emit,c=Object(a["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}});function o(){n("update:item",c.value?c.value[c.value.length-1]:void 0)}function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.add,void 0!==!n){e.next=3;break}return e.abrupt("return");case 3:if(c.value){e.next=7;break}return c.value=[],e.next=7,Object(a["m"])();case 7:n="function"===typeof n?n():"object"===r(n)?JSON.parse(JSON.stringify(n)):n,c.value.push(n),o();case 10:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){var e=JSON.parse(JSON.stringify(Object(a["D"])(t.item)));c.value.push(e),o()}function s(e){var n=c.value.length,o=t.item,r=c.value.indexOf(Object(a["D"])(o)),i=(r+e+n)%n;c.value.splice(r,1),c.value.splice(i,0,o)}function b(){var e=c.value.indexOf(Object(a["D"])(t.item));c.value.splice(e,1),o()}return Object(a["J"])(c,o,{immediate:!0}),{array:c,action:{add:u,copy:d,shift:s,remove:b}}}});l.render=o;e["a"]=l},c975:function(t,e,n){"use strict";var a=n("23e7"),c=n("4d64").indexOf,o=n("a640"),r=n("ae40"),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:u||!l||!d},{indexOf:function(t){return u?i.apply(this,arguments)||0:c(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);