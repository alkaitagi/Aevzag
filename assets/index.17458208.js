import{c as e,a as t,r as a,w as o,t as n,l as s,s as r,b as i,d as l,e as c,f as u,u as p,g as d,h as m,o as h,i as f,j as v,k as _,m as g,n as y,p as E,v as b,q as w}from"./vendor.c8bf7c27.js";let k;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){a(self[t].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");const j={},O=function(e,t){if(!t)return e();if(void 0===k){const e=document.createElement("link").relList;k=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in j)return;j[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":k,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},L=[{path:"phonology",name:"phonology",icon:"audiotrack",component:()=>O((()=>__import__("./index.bef40b7d.js")),["/assets/index.bef40b7d.js","/assets/index.19ea6d5c.css","/assets/vendor.c8bf7c27.js","/assets/types.a423ec07.js","/assets/types.c828ff55.css","/assets/TableEntry.6c130267.js","/assets/TableEntry.28ab263e.css","/assets/Flag.6b68628d.js","/assets/Flag.57192830.css","/assets/Seeker.7110ab0c.js","/assets/Seeker.e7e6ce0a.css","/assets/index.cbab1530.js","/assets/audio-player.66c5ceae.js"])},{path:"converter",name:"converter",icon:"sync_alt",component:()=>O((()=>__import__("./index.a043c338.js")),["/assets/index.a043c338.js","/assets/index.e1b1f002.css","/assets/Flag.6b68628d.js","/assets/Flag.57192830.css","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js"])},{path:"phrasebook",name:"phrasebook",icon:"chat",component:()=>O((()=>__import__("./index.3abd340e.js")),["/assets/index.3abd340e.js","/assets/index.09de23dd.css","/assets/types.a423ec07.js","/assets/types.c828ff55.css","/assets/vendor.c8bf7c27.js","/assets/Flag.6b68628d.js","/assets/Flag.57192830.css","/assets/Seeker.7110ab0c.js","/assets/Seeker.e7e6ce0a.css","/assets/index.cbab1530.js","/assets/index.4762e9dd.js","/assets/index.0ef8c241.css","/assets/audio-player.66c5ceae.js"])},{path:"dictionary",name:"dictionary",icon:"book",component:()=>O((()=>__import__("./index.e4b8e9bc.js")),["/assets/index.e4b8e9bc.js","/assets/index.8f68c5d5.css","/assets/Seeker.7110ab0c.js","/assets/Seeker.e7e6ce0a.css","/assets/vendor.c8bf7c27.js","/assets/Flag.6b68628d.js","/assets/Flag.57192830.css","/assets/index.cbab1530.js","/assets/search.f060bdbd.js"])}],R=[{path:"phonology",title:"Phonology",name:"phonologyEditor",component:()=>O((()=>__import__("./Editor.f494e2c0.js")),["/assets/Editor.f494e2c0.js","/assets/Editor.9c3fef38.css","/assets/EditorCard.4f913c9b.js","/assets/EditorCard.84fe7593.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js","/assets/NotesEditor.93693ece.js","/assets/TableEntry.6c130267.js","/assets/TableEntry.28ab263e.css"])},{path:"converter",title:"Converter",name:"converterEditor",component:()=>O((()=>__import__("./Editor.b17c3502.js")),["/assets/Editor.b17c3502.js","/assets/Editor.7e321a3a.css","/assets/EditorCard.4f913c9b.js","/assets/EditorCard.84fe7593.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js"])},{path:"phrasebook",title:"Phrasebook",name:"phrasebookEditor",component:()=>O((()=>__import__("./Editor.13399e46.js")),["/assets/Editor.13399e46.js","/assets/Editor.6c2a920a.css","/assets/NotesEditor.93693ece.js","/assets/EditorCard.4f913c9b.js","/assets/EditorCard.84fe7593.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js","/assets/index.4762e9dd.js","/assets/index.0ef8c241.css","/assets/index.cbab1530.js","/assets/Editor.7825c974.js","/assets/Editor.b37d8f6a.css"])},{path:"phrasebookСorpus",title:"Phrasebook Corpus",name:"phrasebookCorpusEditor",component:()=>O((()=>__import__("./CorpusEditor.e8b35d78.js")),["/assets/CorpusEditor.e8b35d78.js","/assets/CorpusEditor.0268b338.css","/assets/EditorCard.4f913c9b.js","/assets/EditorCard.84fe7593.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js","/assets/Editor.7825c974.js","/assets/Editor.b37d8f6a.css","/assets/index.4762e9dd.js","/assets/index.0ef8c241.css","/assets/index.cbab1530.js"])},{path:"dictionary",title:"Dictionary",name:"dictionaryEditor",component:()=>O((()=>__import__("./Editor.1218e66f.js")),["/assets/Editor.1218e66f.js","/assets/Editor.33dc40bf.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js","/assets/Seeker.7110ab0c.js","/assets/Seeker.e7e6ce0a.css","/assets/EditorCard.4f913c9b.js","/assets/EditorCard.84fe7593.css","/assets/NotesEditor.93693ece.js","/assets/search.f060bdbd.js"])}],P=[{path:"/home",name:"home",component:()=>O((()=>__import__("./index.f26d2592.js")),["/assets/index.f26d2592.js","/assets/index.bc0f7e7b.css","/assets/types.a423ec07.js","/assets/types.c828ff55.css","/assets/vendor.c8bf7c27.js","/assets/Flag.6b68628d.js","/assets/Flag.57192830.css"])},{path:"/",component:()=>O((()=>__import__("./Navigation.cdf4ec11.js")),["/assets/Navigation.cdf4ec11.js","/assets/Navigation.a06d9b94.css","/assets/vendor.c8bf7c27.js"]),children:L},{path:"/editor/",component:()=>O((()=>__import__("./EditorNavigation.1ba73f2c.js")),["/assets/EditorNavigation.1ba73f2c.js","/assets/EditorNavigation.a4f4174d.css","/assets/editor.3b06b836.js","/assets/vendor.c8bf7c27.js","/assets/file-manager.9a2fdd9a.js"]),children:R},{path:"/:pathMatch(.*)",redirect:{name:"home"}}];var I=e({history:t(),routes:P});class V{constructor(e,t="cache",s){this.storage=e,this.records=a({}),e.getItem(t).then((a=>{a&&(this.records.value=a),o(this.records,(()=>e.setItem(t,n(this.records.value))),{deep:!0}),null==s||s()}))}clean(){this.records.value={}}add(e){return!this.records.value[e]&&!!this.update(e)}delete(e){delete this.records.value[e]}update(e){return this.records.value[e]=Date.now()}updateOf(e){var t;return null!=(t=this.records.value[e])?t:0}}const x=a([]),D="https://raw.githubusercontent.com/alkaitagi/avzag/store/",A=s.createInstance({name:"user"}),T=new V(A,"cache",(()=>A.getItem("lects").then((e=>x.value=null!=e?e:["Kaitag"])).then((()=>C(!0)))));async function C(e=!1){const t=Object.entries(T.records.value).filter((([e])=>!e.includes("/")||x.value.some((t=>e.startsWith(t))))),a=[];for(const[o,n]of t){const e=await S(o);Date.now()-3e5>e&&e>n&&a.push(o)}a.length&&(console.log("cleaning outdated cache",a),e&&Object.keys(T.records.value).length&&window.alert("New data is available, reloading..."),null==a||a.forEach((e=>T.delete(e))),location.reload())}async function S(e){var t,a;let o=0;if(e){const n="https://api.github.com/repos/alkaitagi/avzag/commits",s=new URLSearchParams({path:e,sha:"store",per_page:"1"}),r=null==(a=null==(t=(await fetch(n+"?"+s).then((e=>e.json())))[0])?void 0:t.commit.committer)?void 0:a.date;r&&(o=new Date(r).getTime())}return o}async function U(e,t){if(e.endsWith(".json")||(e+=".json"),!T.add(e))return await A.getItem(e);console.log("cached",e);const a=await fetch(D+e,{cache:"no-store"}).then((e=>e.json())).then((e=>e)).catch((()=>t));return await A.setItem(e,a),a}async function M(e){const t={};for(const a of x.value){const o=await U(a+"/"+e);o&&(t[a]=o)}return t}let $;const B=r([]),N=r(),W=a([]);function q(e){let t="";for(const{ipa:a,tags:o}of $.primary)if(e.includes(a)){t+=o;break}for(const{ipa:a,tags:o}of $.secondary)e.includes(a)&&(t+=" "+o);return t}function z(e){let t="",a=0;return" "===e.charAt(0)&&(t=" ",a=1),t+e.charAt(a).toUpperCase()+e.slice(a+1)}function F(e,t){e=" "+e.replace(/\n/g,"\n ").trim();let a="";for(let o=0;o<e.length;){let n=!1;for(const[s,r]of t){if(!s||!r)continue;const t=s.length,i=e.substring(o,o+t),l=[[s,r],[z(s),z(r)],[s.toUpperCase(),r.toUpperCase()]];for(const[e,s]of l)if(i===e){n=!0,a+=s,o+=t;break}if(n)break}n||(a+=e[o],o++)}return a.replace(/\n /g,"\n").trim()}o(x,(async()=>{B.value.length=0,W.value.length=0,$=await U("ipa");const e=await M("phonology");W.value=Object.keys(e),function(e){const t={};for(const a in e){const o=e[a];o&&o.forEach((e=>{const o=e.phoneme;o in t||(t[o]={ipa:o,tags:q(o),lects:{}}),t[o].lects[a]=e}))}B.value=Object.values(t),B.value.sort((({ipa:e},{ipa:t})=>e>t?1:t>e?-1:0)),N.value=B.value[0]}(e)}));const K=r({});o(x,(async()=>{K.value={},K.value=await M("converter")}));const G=r();o(K,(e=>{e&&(G.value=Object.values(e)[0])}));const H=i({});o(G,(e=>{e&&(H.initial=e.mappings[0],H.final=e.mappings[1],Q.initial="")}));const J=l((()=>{var e,t,a,o;return{initial:null!=(t=null==(e=H.initial)?void 0:e.pairs)?t:[],final:null!=(o=null==(a=H.final)?void 0:a.pairs.map((([e,t])=>[t,e])))?o:[]}}));o((()=>J.value.initial),((e,t)=>{Q.initial=F(F(Q.initial,t),e.map((([e,t])=>[t,e])))}));const Q=i({initial:"",final:l((()=>F(F(Q.initial,J.value.initial),J.value.final)))}),X=r([]),Y=r({}),Z=r(),ee=r(),te=a([]);function ae(e){return e.flatMap((e=>e.map((e=>e.text.plain.replaceAll("*","")))))}o(x,(async()=>{X.value=[],Y.value={},X.value=await U("phrasebookCorpus",[]),Y.value=await M("phrasebook"),function(){if(!Y.value)return;const e=Object.values(Y.value);te.value=X.value.map((({phrases:t})=>t.map((({id:t,name:a,blocks:o})=>[a,...ae(o),...e.flatMap((e=>{var a,o;return ae(null!=(o=null==(a=e[t])?void 0:a.blocks)?o:[])}))].join(" ").toLowerCase()))))}(),Z.value=X.value[0],ee.value=Z.value.phrases[0]}));const oe=r({lists:[]}),ne=r({});o(x,(async()=>{ne.value={},ne.value=await M("dictionary"),oe.value=await U("dictionaryMeta")}));var se=c({setup(){const e=p(),t=d();e.name&&"home"!==e.name||t.push(localStorage.url&&localStorage.url!==e.path?{path:localStorage.url}:{name:"home"}),u((()=>{const t=e.name;t&&(localStorage.url=e.path,["phonology","converter","phrasebook","dictionary"].includes(t)&&(localStorage.urlUser=e.path))}))}});se.render=function(e,t,a,o,n,s){const r=f("router-view");return h(),m(r)};var re=c({props:{icon:{type:String,default:""},text:{type:String,default:""},isOn:Boolean}});const ie={key:0,class:"icon"},le={key:1};re.render=function(e,t,a,o,n,s){return h(),m("button",{class:{highlight:e.isOn}},[e.icon?(h(),m("p",ie,v(e.icon),1)):_("",!0),e.text?(h(),m("p",le,v(e.text),1)):_("",!0),g(e.$slots,"default")],2)};var ce=c({props:{modelValue:Boolean,icon:{type:String,default:""},text:{type:String,default:""}},emits:["update:modelValue"],setup:(e,{emit:t,attrs:a})=>({toggle:function(){t("update:modelValue",!e.modelValue)},attrs:a})});ce.render=function(e,t,a,o,n,s){const r=re;return h(),m("div",{onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t))},[g(e.$slots,"default",{on:e.modelValue},(()=>[y(r,E({style:{width:"100%"}},e.attrs,{icon:e.icon,text:e.text,"is-on":e.modelValue}),null,16,["icon","text","is-on"])]))])},function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:o}=e;let n;"serviceWorker"in navigator&&(n=new b("/sw.js",{scope:"/"}),n.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==o||o()})),n.register({immediate:t}).then((e=>e)))}();const ue=w(se);ue.component("Btn",re),ue.component("Toggle",ce),ue.use(I),I.isReady().then((()=>ue.mount("#app")));export{V as S,ce as _,C as a,U as b,T as c,re as d,R as e,N as f,W as g,K as h,G as i,J as j,F as k,x as l,H as m,ee as n,Z as o,B as p,X as q,D as r,A as s,Q as t,L as u,te as v,Y as w,ne as x,oe as y};