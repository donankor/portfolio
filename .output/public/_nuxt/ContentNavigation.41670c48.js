import{l as R,_ as r,e as m,v,q as O,C as V,D as T,E as S,F as P,i as p,G as b,p as A,d as i,t as j,H as N,f as $,I as k}from"./entry.6047cf60.js";import{u as B}from"./asyncData.a9e88209.js";import{h as c,e as C,j as w}from"./ContentQuery.ffd024ca.js";import{w as y,s as x,u as M,a as z}from"./utils.d6a672b9.js";/* empty css                                                               */import"./\u0421ontacts.vue_vue_type_style_index_0_scoped_60f16897_lang.06d7835e.js";import"./index.f89c5c0f.js";/* empty css                                                             */import"./ContentDoc.260a77c4.js";import"./ContentList.375c64a2.js";import"./ContentRenderer.78b20201.js";import"./ContentRendererMarkdown.5f6bbc11.js";import"./ContentSlot.9c07448c.js";import"./DocumentDrivenEmpty.28bbbd62.js";import"./DocumentDrivenNotFound.801fdd75.js";import"./Markdown.e31923cc.js";import"./ProseCode.2de3ae99.js";import{u as H}from"./composables.87096b79.js";import"./_commonjsHelpers.fed2a411.js";const q=async t=>{var n,_;const{content:e}=R().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(n=o.where)==null?void 0:n.find(u=>u._locale))!=null&&_._locale||(o.where=o.where||[],o.where.push({_locale:e.defaultLocale})));const l=e.experimental.stripQueryParameters?y(`/navigation/${`${c(o)}.${e.integrity}`}/${C(o)}.json`):y(`/navigation/${c(o)}.${e.integrity}.json`);if(x())return(await r(()=>import("./client-db.8b1b6596.js"),["./client-db.8b1b6596.js","./entry.6047cf60.js","./entry.2e993722.css","./utils.d6a672b9.js","./ContentQuery.ffd024ca.js","./asyncData.a9e88209.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(u=>u.generateNavigation))(o);const a=await $fetch(l,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:w(o),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const F=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const l=v(null),a=O();return V(n=>{if(!a.isHydrating)return o("error",n),l.value=n,!1}),()=>{var n,_;return l.value?(n=e.error)==null?void 0:n.call(e,{error:l}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:o}){const l=v(!1);return T(()=>{l.value=!0}),a=>{var u;if(l.value)return(u=e.default)==null?void 0:u.call(e);const n=e.fallback||e.placeholder;if(n)return n();const _=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return S(d,o,_)}}}),g=new WeakMap;function G(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...l)=>{var a;if(o.mounted$){const n=t.render(o,...l);return n.children===null||typeof n.children=="string"?P(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):p(n)}else return p("div",(a=o.$attrs)!=null?a:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,l)=>{var n;const a=v(!1);return T(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,l))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...d)=>{if(a.value){const u=_(...d);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",l.attrs)})},g.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),Y=m({name:"DevOnly",setup(t,e){return()=>null}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),J=m({name:"ServerPlaceholder",render(){return S("div")}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),X=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=tt({duration:t.duration,throttle:t.throttle}),l=O();return l.hook("page:start",o.start),l.hook("page:finish",o.finish),b(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),o=v(!1),l=A(()=>1e4/t.duration);let a=null,n=null;function _(){u(),e.value=0,o.value=!0,t.throttle?n=setTimeout(E,t.throttle):E()}function d(){e.value=100,I()}function u(){clearInterval(a),clearTimeout(n),a=null,n=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){u(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){a=setInterval(()=>{L(l.value)},100)}return{progress:e,isLoading:o,start:_,finish:d,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,l)=>(H(()=>t({...rt(o),...l.attrs},l)),()=>{var a,n;return e?(n=(a=l.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const o={...t},l=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return l&&(o.children=l),{noscript:[o]}})}),ot=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),nt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var l,a,n;return{title:((n=(a=(l=e.default)==null?void 0:l.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),lt=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ut=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,_;const o={...t},l=(_=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:_.children;return l&&(o.children=l),{style:[o]}})}),_t=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,l;return(l=(o=e.slots).default)==null?void 0:l.call(o)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:ot,Base:nt,Title:at,Meta:lt,Style:ut,Head:_t,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Button.75f6ae51.js"),["./Button.75f6ae51.js","./entry.6047cf60.js","./entry.2e993722.css","./Header.d2d38107.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Education.9396bf51.js"),["./Education.9396bf51.js","./entry.6047cf60.js","./entry.2e993722.css","./Сontacts.9b29028c.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Experience.0210a6c5.js"),["./Experience.0210a6c5.js","./entry.6047cf60.js","./entry.2e993722.css","./Сontacts.9b29028c.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Card.9d4f58dc.js"),["./Card.9d4f58dc.js","./index.f89c5c0f.js","./entry.6047cf60.js","./entry.2e993722.css","./Card.e7e06a46.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Skills.b6511aa3.js"),["./Skills.b6511aa3.js","./entry.6047cf60.js","./entry.2e993722.css","./Сontacts.9b29028c.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./\u0421ontacts.e391de28.js"),["./Сontacts.e391de28.js","./entry.6047cf60.js","./entry.2e993722.css","./Сontacts.9b29028c.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Header.6dd62b1b.js"),["./Header.6dd62b1b.js","./Button.75f6ae51.js","./entry.6047cf60.js","./entry.2e993722.css","./Header.d2d38107.css","./index.f89c5c0f.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.260a77c4.js"),["./ContentDoc.260a77c4.js","./entry.6047cf60.js","./entry.2e993722.css","./composables.87096b79.js","./ContentRenderer.78b20201.js","./ContentRendererMarkdown.5f6bbc11.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.ffd024ca.js","./asyncData.a9e88209.js","./utils.d6a672b9.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.375c64a2.js"),["./ContentList.375c64a2.js","./ContentQuery.ffd024ca.js","./entry.6047cf60.js","./entry.2e993722.css","./asyncData.a9e88209.js","./utils.d6a672b9.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.ffd024ca.js").then(t=>t.C),["./ContentQuery.ffd024ca.js","./entry.6047cf60.js","./entry.2e993722.css","./asyncData.a9e88209.js","./utils.d6a672b9.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.78b20201.js"),["./ContentRenderer.78b20201.js","./ContentRendererMarkdown.5f6bbc11.js","./entry.6047cf60.js","./entry.2e993722.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.5f6bbc11.js"),["./ContentRendererMarkdown.5f6bbc11.js","./entry.6047cf60.js","./entry.2e993722.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.9c07448c.js"),["./ContentSlot.9c07448c.js","./utils.d6a672b9.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.28bbbd62.js"),["./DocumentDrivenEmpty.28bbbd62.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.801fdd75.js"),["./DocumentDrivenNotFound.801fdd75.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.e31923cc.js"),["./Markdown.e31923cc.js","./ContentSlot.9c07448c.js","./utils.d6a672b9.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.86bc5a72.js"),["./ProseA.86bc5a72.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.81770c2f.js"),["./ProseBlockquote.81770c2f.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.2de3ae99.js"),["./ProseCode.2de3ae99.js","./entry.6047cf60.js","./entry.2e993722.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.2c69f908.js"),["./ProseCodeInline.2c69f908.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.25a81d69.js"),["./ProseEm.25a81d69.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.6f4512b5.js"),["./ProseH1.6f4512b5.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.394ac6a0.js"),["./ProseH2.394ac6a0.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.f0a16af9.js"),["./ProseH3.f0a16af9.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.94b01216.js"),["./ProseH4.94b01216.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.f86666b0.js"),["./ProseH5.f86666b0.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.62af3f2e.js"),["./ProseH6.62af3f2e.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.9399c1bb.js"),["./ProseHr.9399c1bb.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.585776c4.js"),["./ProseImg.585776c4.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.94fb7134.js"),["./ProseLi.94fb7134.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.b28f19ff.js"),["./ProseOl.b28f19ff.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.be2d1978.js"),["./ProseP.be2d1978.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.48558da8.js"),["./ProseStrong.48558da8.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.cca231f0.js"),["./ProseTable.cca231f0.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.13db0a29.js"),["./ProseTbody.13db0a29.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.10dab46b.js"),["./ProseTd.10dab46b.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.5594a71e.js"),["./ProseTh.5594a71e.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.a8ed96d6.js"),["./ProseThead.a8ed96d6.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.b98bcaf4.js"),["./ProseTr.b98bcaf4.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.3226f645.js"),["./ProseUl.3226f645.js","./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.5e7c30c4.js"),["./welcome.5e7c30c4.js","./composables.87096b79.js","./entry.6047cf60.js","./entry.2e993722.css","./asyncData.a9e88209.js","./ContentQuery.ffd024ca.js","./utils.d6a672b9.js","./index.f89c5c0f.js","./ContentDoc.260a77c4.js","./ContentRenderer.78b20201.js","./ContentRendererMarkdown.5f6bbc11.js","./_commonjsHelpers.fed2a411.js","./ContentList.375c64a2.js","./ContentSlot.9c07448c.js","./DocumentDrivenEmpty.28bbbd62.js","./DocumentDrivenNotFound.801fdd75.js","./Markdown.e31923cc.js","./ProseCode.2de3ae99.js","./ProseCode.e63e49c6.css","./Header.d2d38107.css","./Сontacts.9b29028c.css","./Card.e7e06a46.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.6047cf60.js").then(t=>t.$),["./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.6047cf60.js").then(t=>t.Y),["./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.6047cf60.js").then(t=>t.Z),["./entry.6047cf60.js","./entry.2e993722.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),o=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!o.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:l}=await B(`content-navigation-${c(o.value)}`,()=>q(o.value));return{navigation:l}},render(t){const e=$(),{navigation:o}=t,l=_=>p(k,{to:_._path},()=>_.title),a=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(u=>u.children?p("li",null,[l(u),a(u.children,d+1)]):p("li",null,l(u)))),n=_=>a(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):n(o)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};