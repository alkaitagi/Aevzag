(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66711ced"],{"0a45":function(t,e,n){},"0e32":function(t,e,n){"use strict";var c=n("7a23");function o(t,e,n,o,a,r){var l=Object(c["B"])("btn"),u=Object(c["B"])("EditorCard");return Object(c["t"])(),Object(c["d"])(u,{icon:"sticky_note_2",header:"Notes",onAction:t.add},{caption:Object(c["K"])((function(){return[Object(c["A"])(t.$slots,"default")]})),default:Object(c["K"])((function(){return[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.notes,(function(e,n){return Object(c["t"])(),Object(c["d"])("div",{key:n,class:"row"},[Object(c["L"])(Object(c["h"])("input",{"onUpdate:modelValue":function(e){return t.notes[n]=e},type:"text"},null,8,["onUpdate:modelValue"]),[[c["H"],t.notes[n]]]),Object(c["h"])(l,{icon:"clear",onClick:function(e){return t.remove(n)}},null,8,["onClick"])])})),128))]})),_:1},8,["onAction"])}n("a434");var a=n("7694"),r=Object(c["i"])({components:{EditorCard:a["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,o=Object(c["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}});function a(){o.value?o.value.push(""):o.value=[""]}function r(t){o.value&&o.value.splice(t,1)}return{notes:o,add:a,remove:r}}});r.render=o;e["a"]=r},4395:function(t,e,n){"use strict";n("0a45")},a1df:function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),o=Object(c["M"])("data-v-249239ff");Object(c["w"])("data-v-249239ff");var a={key:0,class:"section col-2 small grid"},r={class:"col-2"},l={class:"col wrap card"},u={class:"row-1"},i=Object(c["h"])("p",{class:"icon"},"topic",-1),s={class:"col-1 flex"},b={key:0,class:"row-1"},d=Object(c["h"])("p",{class:"icon"},"short_text",-1),O=Object(c["h"])("p",{class:"text-faded text-caption"}," The source corpus is loading from what is saved on Phrasebook Corpus editor page. ",-1),j=Object(c["g"])(" You can add notes, for example, to explain certain grammatical rules. "),p=Object(c["g"])(" Translate the context keys (entites & tags) to provide full phrase localization. ");Object(c["u"])();var f=o((function(t,e,n,f,v,m){var h=Object(c["B"])("VContext"),k=Object(c["B"])("VBlock"),y=Object(c["B"])("BlocksOrderEditor"),V=Object(c["B"])("NotesEditor"),x=Object(c["B"])("ContextTranslationEditor"),g=Object(c["B"])("BlockEditor");return t.file&&t.corpus?(Object(c["t"])(),Object(c["d"])("div",a,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("div",u,[i,Object(c["h"])("h2",s,[Object(c["L"])(Object(c["h"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.section=e})},[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.corpus,(function(t){return Object(c["t"])(),Object(c["d"])("option",{key:t.name,value:t},Object(c["D"])(t.name),9,["value"])})),128))],512),[[c["G"],t.section]])])]),t.section?(Object(c["t"])(),Object(c["d"])("div",b,[d,Object(c["L"])(Object(c["h"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.phrase=e})},[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.section.phrases,(function(t){return Object(c["t"])(),Object(c["d"])("option",{key:t.id,value:t},Object(c["D"])(t.name),9,["value"])})),128))],512),[[c["G"],t.phrase]])])):Object(c["e"])("",!0),O,Object(c["h"])(h),t.phrase?(Object(c["t"])(),Object(c["d"])("div",{key:t.phrase.id,class:"row wrap flex"},[(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.phrase.blocks,(function(t,e){return Object(c["t"])(),Object(c["d"])(k,{key:e,block:t},null,8,["block"])})),128))])):Object(c["e"])("",!0)]),t.translation?(Object(c["t"])(),Object(c["d"])(c["a"],{key:0},[Object(c["h"])(y,{key:t.phrase.id,modelValue:t.block,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.block=e}),phrase:t.translation,"onUpdate:phrase":e[4]||(e[4]=function(e){return t.translation=e})},null,8,["modelValue","phrase"]),Object(c["h"])(V,{modelValue:t.translation.notes,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.translation.notes=e})},{default:o((function(){return[j]})),_:1},8,["modelValue"]),Object(c["h"])(x,{modelValue:t.translation.context,"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.translation.context=e})},{default:o((function(){return[p]})),_:1},8,["modelValue"])],64)):Object(c["e"])("",!0)]),t.block?(Object(c["t"])(),Object(c["d"])(g,{key:0,modelValue:t.block,"onUpdate:modelValue":e[7]||(e[7]=function(e){return t.block=e})},null,8,["modelValue"])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)})),v=(n("c975"),n("a434"),n("3835")),m=n("0e32"),h=n("5794"),k=n("72e9"),y=n("428a"),V=n("9362"),x={class:"row wrap block-editor"},g={class:"col"},B={class:"text-caption"};function w(t,e,n,o,a,r){var l=Object(c["B"])("ButtonAlert"),u=Object(c["B"])("EditorCard");return Object(c["t"])(),Object(c["d"])(u,{button:t.translation?"":"queue",icon:"format_list_bulleted",header:"context translation",onAction:t.add},Object(c["f"])({caption:Object(c["K"])((function(){return[Object(c["A"])(t.$slots,"default")]})),default:Object(c["K"])((function(){return[t.translation?(Object(c["t"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["z"])(t.entities,(function(e,n){return Object(c["t"])(),Object(c["d"])("div",{key:n,class:"row wrap"},[Object(c["h"])("div",x,[Object(c["h"])("div",g,[Object(c["h"])("h2",{class:["text-caption",t.colors[n]]},Object(c["D"])(e[0]),3),Object(c["L"])(Object(c["h"])("input",{"onUpdate:modelValue":function(t){return e[1]=t},size:t.sizes[n].entity,type:"text"},null,8,["onUpdate:modelValue","size"]),[[c["H"],e[1]]])]),(Object(c["t"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(t.tags[n],(function(e,o){return Object(c["t"])(),Object(c["d"])("div",{key:e[0],class:"col"},[Object(c["h"])("p",B,Object(c["D"])(e[0]),1),Object(c["L"])(Object(c["h"])("input",{"onUpdate:modelValue":function(t){return e[1]=t},size:t.sizes[n].tags[o],type:"text"},null,8,["onUpdate:modelValue","size"]),[[c["H"],e[1]]])])})),128))])])})),128)):Object(c["e"])("",!0)]})),_:2},[t.translation?{name:"header",fn:Object(c["K"])((function(){return[Object(c["h"])(l,{onConfirm:e[1]||(e[1]=function(e){return t.translation=null})})]}))}:void 0]),1032,["button","onAction"])}n("d81d"),n("4fad");var E=n("2909"),z=n("898d"),C=n("7694"),U=Object(c["i"])({name:"PhraseContextTranslationEditor",components:{ButtonAlert:z["a"],EditorCard:C["a"]},props:{modelValue:{type:Object,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,o=Object(c["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),a=Object(c["l"])("contextSource",{}),r=Object(c["b"])((function(){var t;return null===(t=o.value)||void 0===t?void 0:t.map((function(t){return t.entity}))})),l=Object(c["b"])((function(){var t;return null===(t=o.value)||void 0===t?void 0:t.map((function(t){return t.tags}))})),u=Object(c["b"])((function(){var t;return null===(t=o.value)||void 0===t?void 0:t.map((function(t){var e=t.entity,n=t.tags;return{entity:Math.max(e[1].length,1),tags:n.map((function(t){return Math.max(t[1].length,1)}))}}))})),i=Object(c["b"])((function(){var t;return null===(t=r.value)||void 0===t?void 0:t.map((function(t,e){return"colored-dot-"+e}))}));function s(){o.value=Object.entries(a.value).map((function(t){var e=Object(v["a"])(t,2),n=e[0],c=e[1];return{entity:[n,""],tags:Object(E["a"])(c).map((function(t){return[t,""]}))}}))}return{translation:o,add:s,entities:r,tags:l,sizes:u,colors:i}}});U.render=w;var _=U,A=n("3a0b"),I=n("9392"),K=n("7ec3"),L=Object(c["i"])({components:{VContext:h["a"],VBlock:k["a"],NotesEditor:m["a"],BlocksOrderEditor:y["a"],BlockEditor:V["a"],ContextTranslationEditor:_},setup:function(){var t=Object(c["y"])([]);try{t.value=JSON.parse(localStorage["editor.phrasebookCorpus"])}catch(b){Object(A["b"])("phrasebook").then((function(e){return t.value=e}))}var e=Object(c["y"])({}),n=Object(c["y"])({}),o=Object(c["y"])({}),a=Object(c["y"])({}),r=Object(c["y"])({}),l=Object(c["y"])({}),u=Object(I["d"])({defaultFile:{},filename:"phrasebook",storage:"editor.phrasebook"});function i(){l.value=l.value={states:[{display:[{text:"new state"}],transition:"next"}]},o.value.blocks.push(l.value)}function s(){var t=Object(c["E"])(o.value.blocks),e=t.indexOf(Object(c["E"])(l.value));t.splice(e,1),l.value=t[t.length-1]}return Object(c["v"])("context",a),Object(c["v"])("contextSource",r),Object(c["I"])(t,(function(t){return e.value=t[t.length-1]}),{immediate:!0}),Object(c["I"])(e,(function(t){null!==t&&void 0!==t&&t.phrases&&(n.value=t.phrases[t.phrases.length-1])}),{immediate:!0}),Object(c["I"])([n,u],(function(t){var e=Object(v["a"])(t,1),n=e[0];n&&(u.value[n.id]||(u.value[n.id]={blocks:[]}),o.value=u.value[n.id],Object(K["a"])(a,n.context),Object(K["a"])(r,n.context,!0))}),{immediate:!0}),Object(c["I"])(o,(function(t){null!==t&&void 0!==t&&t.blocks&&(l.value=t.blocks[t.blocks.length-1])}),{immediate:!0}),{file:u,corpus:t,section:e,phrase:n,translation:o,block:l,addBlock:i,removeBlock:s}}});n("a5d8"),n("4395");L.render=f,L.__scopeId="data-v-249239ff";e["default"]=L},a5d8:function(t,e,n){"use strict";n("beaa")},beaa:function(t,e,n){}}]);
//# sourceMappingURL=chunk-66711ced.b526113d.js.map