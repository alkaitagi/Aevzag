(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b6a4571"],{"0481":function(e,t,n){"use strict";var c=n("23e7"),a=n("a2bf"),r=n("7b0b"),o=n("50c4"),u=n("a691"),l=n("65f0");c({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=r(this),n=o(t.length),c=l(t,0);return c.length=a(c,t,t,n,0,void 0===e?1:u(e)),c}})},"0e36":function(e,t,n){},3464:function(e,t,n){},"3c94":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a=Object(c["N"])("data-v-3a2173a2");Object(c["u"])("data-v-3a2173a2");var r={class:"section col-1"},o={class:"col-1"},u={class:"row"},l={key:1,class:"col-1 flex"},s={key:0,class:"scroll col phrases"},i={class:"col-0"},b={key:1,class:"scroll col-0 phrases"};Object(c["s"])();var d=a((function(e,t,n,a,d,j){var O=Object(c["A"])("toggle"),v=Object(c["A"])("InputQuery"),f=Object(c["A"])("btn"),p=Object(c["A"])("PhraseCard");return Object(c["r"])(),Object(c["d"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("div",u,[Object(c["g"])(O,{modelValue:e.searching,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searching=t}),icon:"search"},null,8,["modelValue"]),e.searching?(Object(c["r"])(),Object(c["d"])(v,{key:0,modelValue:e.query,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.query=t}),placeholder:"Search in English & translations"},null,8,["modelValue"])):(Object(c["r"])(),Object(c["d"])("h2",l,[Object(c["M"])(Object(c["g"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.section=t}),style:{flex:"none"},onChange:t[4]||(t[4]=function(t){return e.select(e.section)})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.corpus,(function(e){return Object(c["r"])(),Object(c["d"])("option",{key:e.id,value:e},Object(c["C"])(e.name),9,["value"])})),128))],544),[[c["G"],e.section]])]))]),e.searching?(Object(c["r"])(),Object(c["d"])("div",s,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.phrases,(function(t,n){return Object(c["r"])(),Object(c["d"])(c["a"],{key:n},[Object(c["g"])("h2",null,Object(c["C"])(e.corpus[n].name),1),Object(c["g"])("div",i,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(t,(function(t){return Object(c["r"])(),Object(c["d"])(f,{key:t,text:e.corpus[n].phrases[t].name,"is-on":e.phrase===e.corpus[n].phrases[t],onClick:function(c){return e.select(e.corpus[n],e.corpus[n].phrases[t])}},null,8,["text","is-on","onClick"])})),128))])],64)})),128))])):(Object(c["r"])(),Object(c["d"])("div",b,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.phrases,(function(t){return Object(c["r"])(),Object(c["d"])(f,{key:t.id,text:t.name,"is-on":e.phrase===t,onClick:function(n){return e.select(null,t)}},null,8,["text","is-on","onClick"])})),128))]))]),e.phrase?(Object(c["r"])(),Object(c["d"])("div",{key:e.phrase.id,class:"col-1"},[Object(c["g"])(p,{phrase:e.phrase,flat:""},null,8,["phrase"]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.phrasebooks,(function(t,n){return Object(c["r"])(),Object(c["d"])(p,{key:n,lect:n,path:e.path,phrase:t[e.phrase.id]},null,8,["lect","path","phrase"])})),128))])):Object(c["e"])("",!0)])})),j=(n("a15b"),n("d81d"),n("13d5"),n("0481"),Object(c["N"])("data-v-fd7054b6"));Object(c["u"])("data-v-fd7054b6");var O={class:"row small wrap",style:{width:"100%"}},v={key:0,class:"flex"},f={key:1,class:"row"},p={class:"row wrap flex"};Object(c["s"])();var h=j((function(e,t,n,a,r,o){var u,l,s=Object(c["A"])("Flag"),i=Object(c["A"])("Context"),b=Object(c["A"])("toggle"),d=Object(c["A"])("btn"),j=Object(c["A"])("Seeker"),h=Object(c["A"])("Block"),g=Object(c["A"])("Notes");return null!==(u=e.phrase)&&void 0!==u&&null!==(l=u.blocks)&&void 0!==l&&l.length?(Object(c["r"])(),Object(c["d"])("div",{key:0,class:["col flag",{card:!e.flat}]},[Object(c["g"])(s,{lect:e.lect,class:"blur"},null,8,["lect"]),Object(c["g"])("div",O,[e.lect?(Object(c["r"])(),Object(c["d"])("h2",v,Object(c["C"])(e.lect),1)):Object(c["e"])("",!0),Object(c["g"])(i,{translation:e.contextTranslation,blocks:e.vblocks,reverse:!!e.lect},null,8,["translation","blocks","reverse"]),e.lect?(Object(c["r"])(),Object(c["d"])("div",f,[Object(c["g"])(b,{modelValue:e.playing,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.playing=t}),icon:"play_arrow"},null,8,["modelValue"]),Object(c["g"])(d,{icon:"assignment",onClick:e.copy},null,8,["onClick"]),Object(c["g"])(b,{modelValue:e.glossed,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.glossed=t}),icon:"segment"},null,8,["modelValue"])])):Object(c["e"])("",!0)]),Object(c["g"])("div",p,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.phrase.blocks,(function(t,n){var a,r;return Object(c["M"])((Object(c["r"])(),Object(c["d"])("div",{key:n,class:"blocks row seeker"},[Object(c["g"])(j,{check:e.playing,seek:null===(a=e.player.queue[n])||void 0===a?void 0:a.seek},null,8,["check","seek"]),Object(c["g"])(h,{block:t,glossed:e.glossed,onUpdate:function(t){return e.vblocks[n]=t}},null,8,["block","glossed","onUpdate"])],512)),[[c["I"],null===(r=e.vblocks[n])||void 0===r?void 0:r.show]])})),128))]),Object(c["g"])(g,{class:"text-caption",notes:e.phrase.notes},null,8,["notes"])],2)):Object(c["e"])("",!0)})),g=(n("498a"),n("4de4"),n("2532"),n("5794")),k=n("72e9"),y=n("d9c7"),m=n("f929"),x=n("9458"),w=n("e7de"),C=Object(c["h"])({components:{Context:g["a"],Block:k["a"],Notes:y["a"],Flag:m["a"],Seeker:x["a"]},props:{lect:{type:String,default:""},path:{type:String,default:""},phrase:{type:Object,default:void 0},flat:Boolean},setup:function(e){var t=Object(c["x"])(!1),n=Object(c["v"])([]),a=Object(c["b"])((function(){return e.lect&&!t.value?e.phrase.context:null})),r=Object(c["b"])((function(){return n.filter((function(e){var t=e.state;return t})).map((function(e){var t=e.text;return(":,.?!".includes(t)?"":" ")+t})).join("").trim()}));function o(){navigator.clipboard.writeText(r.value)}var u=Object(c["b"])({get:function(){return w["a"].key===e.lect},set:function(t){t?w["a"].play(e.lect,n.map((function(e){var t=e.text;return t.toLowerCase()})).map((function(t){return null===t?"":e.path+(null!==t&&void 0!==t?t:"")}))):w["a"].stop()}});return{glossed:t,vblocks:n,copy:o,player:w["a"],playing:u,contextTranslation:a}}});n("aa7c");C.render=h,C.__scopeId="data-v-fd7054b6";var A=C,V=n("80b3"),S=n("ac93"),_=n("7ec3"),I=n("d53c"),N=Object(c["h"])({components:{PhraseCard:A,InputQuery:V["a"]},setup:function(){var e=Object(c["x"])({});Object(c["J"])(S["b"],(function(t){return Object(_["c"])(e,null===t||void 0===t?void 0:t.context)}),{immediate:!0}),Object(c["t"])("context",e);var t=Object(c["b"])((function(){var e,t,n=["phrasebook",null===(e=S["e"].value)||void 0===e?void 0:e.name,null===(t=S["b"].value)||void 0===t?void 0:t.name];return n.every((function(e){return e}))?n.map((function(e){return e+"/"})).join(""):""})),n=Object(c["x"])(!1),a=Object(c["x"])({}),r=Object(c["b"])((function(){var e;return n.value?S["a"].value.reduce((function(e,t,n){return e[n]=t.phrases.reduce((function(e,t,c){return Object(I["a"])(S["d"].value[n][c],a.value)&&e.push(c),e}),[]),e[n].length||delete e[n],e}),{}):null===(e=S["e"].value)||void 0===e?void 0:e.phrases}));function o(e,t){var n;e&&(S["e"].value=e),S["b"].value=null!==t&&void 0!==t?t:null===(n=S["e"].value)||void 0===n?void 0:n.phrases[0]}return{searching:n,query:a,corpus:S["a"],section:S["e"],phrase:S["b"],select:o,phrases:r,phrasebooks:S["c"],path:t}}});n("fe17");N.render=d,N.__scopeId="data-v-3a2173a2";t["default"]=N},"4dbb":function(e,t,n){"use strict";n("9805")},5794:function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["N"])("data-v-b1408446");Object(c["u"])("data-v-b1408446");var r=Object(c["g"])("div",{class:"icon"},"info",-1);Object(c["s"])();var o=a((function(e,t,n,a,o,u){return e.any?(Object(c["r"])(),Object(c["d"])("div",{key:0,class:["row text-caption wrap context",{reverse:e.reverse}]},[r,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.translated,(function(e,t){return Object(c["r"])(),Object(c["d"])(c["a"],{key:t},[e.length?(Object(c["r"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["y"])(e,(function(e){return Object(c["r"])(),Object(c["d"])("p",{key:e+"--"+t,class:"colored-dot-"+t},Object(c["C"])(e),3)})),128)):Object(c["e"])("",!0)],64)})),128))],2)):Object(c["e"])("",!0)})),u=n("2909"),l=n("3835"),s=n("b85c"),i=(n("159b"),n("4fad"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),Object(c["h"])({name:"Context",props:{translation:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}},reverse:Boolean},setup:function(e){var t=Object(c["k"])("context",{}),n=Object(c["b"])((function(){var t,n={},c=Object(s["a"])(e.blocks);try{for(c.s();!(t=c.n()).done;){var a=t.value.state,r=null===a||void 0===a?void 0:a.conditions;r&&Object.entries(r).forEach((function(e){var t=Object(l["a"])(e,2),c=t[0],a=t[1];return Object.entries(a).forEach((function(e){var t=Object(l["a"])(e,1),a=t[0];n[c]||(n[c]=new Set),n[c].add(a)}))}))}}catch(o){c.e(o)}finally{c.f()}return n}));function a(e,t){return(null===e||void 0===e?void 0:e[t])||t}var r=Object(c["b"])((function(){return Object.entries(t.value).map((function(t){var c=Object(l["a"])(t,2),r=c[0],o=c[1];return Object(u["a"])(o).filter((function(e){var t;return!(null!==(t=n.value[r])&&void 0!==t&&t.has(e))})).map((function(t){var n;return a(null===(n=e.translation)||void 0===n?void 0:n[r],t)}))}))})),o=Object(c["b"])((function(){return r.value.some((function(e){return null===e||void 0===e?void 0:e.length}))}));return{translated:r,any:o}}}));n("9bd4");i.render=o,i.__scopeId="data-v-b1408446";t["a"]=i},"72e9":function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["N"])("data-v-301880bc"),r=a((function(e,t,n,a,r,o){var u=Object(c["A"])("VState");return e.state?Object(c["M"])((Object(c["r"])(),Object(c["d"])("button",{key:0,ref:"button",class:["small",{disabled:e.disabled,glossed:e.glossed,flash:e.flash}],onClick:t[2]||(t[2]=function(){return e.move&&e.move.apply(e,arguments)})},[Object(c["g"])(u,{glossed:e.glossed,state:e.state,onText:t[1]||(t[1]=function(t){return e.text=t})},null,8,["glossed","state"])],2)),[[c["I"],e.show]]):Object(c["e"])("",!0)})),o=n("2909"),u=n("3835"),l=(n("5db7"),n("73d9"),n("b64b"),n("d81d"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("af66")),s=n("7ec3"),i=Object(c["h"])({name:"Block",components:{VState:l["a"]},props:{block:{type:Array,default:void 0},glossed:Boolean},emits:["update"],setup:function(e,t){var n=t.emit,a=Object(c["x"])(),r=Object(c["x"])(""),l=Object(c["b"])((function(){return a.value&&r.value}));Object(c["J"])([a,r],(function(e){var t=Object(u["a"])(e,2),c=t[0],a=t[1];return n("update",{state:c,text:a,show:l})}),{immediate:!0});var i=Object(c["b"])((function(){var e;return null===(e=a.value)||void 0===e?void 0:e.transition})),b=Object(c["b"])((function(){return e.block.length<2||i.value&&!i.value.length})),d=Object(c["k"])("context",{});function j(e){var t;Object(c["D"])(e)!==Object(c["D"])(a.value)&&(Object(s["a"])(d,null===(t=a.value)||void 0===t?void 0:t.conditions,!1),Object(s["a"])(d,null===e||void 0===e?void 0:e.conditions,!0),a.value=e)}var O=Object(c["b"])((function(){var t=e.block.flatMap((function(e){var t=e.conditions;return t?Object.keys(t):[]}));return Object(o["a"])(new Set(t)).map((function(e){return d.value[e]}))}));function v(){var t;if(!b.value){var n,r=e.block;if(i.value)n=Object(s["d"])(i.value,r,d.value);else{var o=a.value?r.indexOf(Object(c["D"])(a.value)):-1;n=r[(o+1)%r.length]}j(n),Object(s["b"])(null===(t=n)||void 0===t?void 0:t.conditions,d.value)[0]<0&&(a.value=void 0)}}Object(c["J"])(O,(function(){return j(Object(s["d"])(void 0,e.block,d.value))}),{immediate:!0,deep:!0});var f=Object(c["x"])(!1);return Object(c["J"])(a,(function(){f.value=!1,setTimeout((function(){return f.value=!0}),50)})),{flash:f,move:v,state:a,disabled:b,text:r,show:l}}});n("4dbb");i.render=r,i.__scopeId="data-v-301880bc";t["a"]=i},"7ec3":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l}));var c=n("3835");n("159b"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("4fad"),n("d81d");function a(){return{text:{plain:"new state"}}}function r(e,t){t&&(e.value={},t.forEach((function(t){var n=t.entity;return e.value[n]=new Set})))}function o(e,t){if(!e)return[1,0];for(var n=0,a=0,r=0,o=Object.entries(e);r<o.length;r++)for(var u=Object(c["a"])(o[r],2),l=u[0],s=u[1],i=0,b=Object.entries(s);i<b.length;i++){var d,j=Object(c["a"])(b[i],2),O=j[0],v=j[1],f=null===(d=t[l])||void 0===d?void 0:d.has(O);if(!v&&!f)return[-1,0];f&&(n+=1),a+=1}return[n/(a||1),a]}function u(e,t,n){var a,r,u=-1,l=0,s=null!==(a=null===e||void 0===e?void 0:e.map((function(e){return t[e]})))&&void 0!==a?a:t;return s.forEach((function(e){var t=o(e.conditions,n),a=Object(c["a"])(t,2),s=a[0],i=a[1];(1===u?1===s&&i>l:s>u)&&(r=e,u=s,l=i)})),r}function l(e,t,n){t&&e.value&&Object.entries(t).forEach((function(t){var a=Object(c["a"])(t,2),r=a[0],o=a[1];return Object.entries(o).forEach((function(t){var a=Object(c["a"])(t,2),o=a[0],u=a[1],l=e.value[r];u&&l&&(n?l.add(o):l.delete(o))}))}))}},"8ca6":function(e,t,n){"use strict";n("a807")},9805:function(e,t,n){},"9bd4":function(e,t,n){"use strict";n("3464")},a807:function(e,t,n){},aa7c:function(e,t,n){"use strict";n("e2ce")},af66:function(e,t,n){"use strict";n("a15b");var c=n("7a23"),a=Object(c["N"])("data-v-324fb9fc");Object(c["u"])("data-v-324fb9fc");var r={class:"row dashes"};Object(c["s"])();var o=a((function(e,t,n,a,o,u){var l=Object(c["A"])("Notes");return Object(c["r"])(),Object(c["d"])("div",{class:["display row",{glossed:e.canGloss}]},[Object(c["g"])(l,{class:"col-0",notes:e.texts,onTexts:t[1]||(t[1]=function(t){return e.emit("text",t.join("\n"))})},null,8,["notes"]),Object(c["g"])("div",r,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.dashColors,(function(e,t){return Object(c["r"])(),Object(c["d"])("p",{key:t,class:e},null,2)})),128))])],2)})),u=n("3835"),l=(n("b64b"),n("d81d"),n("4de4"),n("4fad"),n("07ac"),n("d9c7")),s=Object(c["h"])({name:"State",components:{Notes:l["a"]},props:{state:{type:Object,default:function(){return{}}},glossed:{type:Boolean,default:!1}},emits:["text"],setup:function(e,t){var n=t.emit,a=Object(c["k"])("context",{}),r=Object(c["b"])((function(){return Object.keys(a.value)})),o=Object(c["b"])((function(){return e.glossed&&e.state&&(e.state.text.ipa||e.state.text.glossed)})),l=Object(c["b"])((function(){var t=[];return o.value?(e.state.text.ipa&&t.push("/"+e.state.text.ipa+"/"),e.state.text.glossed&&t.push(e.state.text.glossed)):t.push(e.state.text.plain),t})),s=Object(c["b"])((function(){return e.state.transition&&!e.state.transition.length||!e.state.conditions?[]:Object.entries(e.state.conditions).filter((function(e){var t=Object(u["a"])(e,2),n=t[1];return Object.values(n).some((function(e){return e}))})).map((function(e){var t=Object(u["a"])(e,1),n=t[0];return r.value.indexOf(n)})).map((function(e){return"colored-back-"+e}))}));return{texts:l,canGloss:o,dashColors:s,emit:n}}});n("8ca6");s.render=o,s.__scopeId="data-v-324fb9fc";t["a"]=s},e2ce:function(e,t,n){},fe17:function(e,t,n){"use strict";n("0e36")}}]);