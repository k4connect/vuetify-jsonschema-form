import{u as B}from"./vue.f36acd1f.CZYg80q1.js";import{n as S,o as D,p as F,q as y,e as w,_ as T}from"./vjsf.CegUpih0.js";import{N as C,O as N,Q as O,r as _,S as I,T as b,U as R,c as k,V as v,W as A,z as s,F as U,A as c,G as u,t as j,x as z,y as H,B as h}from"./entry.Em_w2vkp.js";import{u as L}from"./VSpacer.DxMptBk2.js";import{V as W}from"./index.0p4MnDYI.js";import{u as q}from"./tag.BbZReLd1.js";import{V as G}from"./VBtn.Ddqt8drh.js";import{V as J}from"./VCard.PYsE7GGG.js";import{V as M}from"./VContainer.BBVcp9F_.js";import"./en.C2aea8f9.js";import"./VAlert.DmzpOxSv.js";import"./VList.bijAn8QG.js";import"./ssrBoot.D9K4zIbO.js";/* empty css              */import"./resizeObserver.C_eRLqUb.js";const Q=C({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...S({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),$=N()({name:"VDialog",props:Q(),emits:{"update:modelValue":t=>!0},setup(t,d){let{slots:n}=d;const i=O(t,"modelValue"),{scopeId:f}=L(),e=_();function g(r){var l,m;const a=r.relatedTarget,o=r.target;if(a!==o&&((l=e.value)!=null&&l.contentEl)&&((m=e.value)!=null&&m.globalTop)&&![document,e.value.contentEl].includes(o)&&!e.value.contentEl.contains(o)){const p=A(e.value.contentEl);if(!p.length)return;const V=p[0],P=p[p.length-1];a===V?P.focus():V.focus()}}I&&b(()=>i.value&&t.retainFocus,r=>{r?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)},{immediate:!0}),b(i,async r=>{var a,o;await R(),r?(a=e.value.contentEl)==null||a.focus({preventScroll:!0}):(o=e.value.activatorEl)==null||o.focus({preventScroll:!0})});const x=k(()=>v({"aria-haspopup":"dialog","aria-expanded":String(i.value)},t.activatorProps));return q(()=>{const r=y.filterProps(t);return s(y,v({ref:e,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable},t.class],style:t.style},r,{modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,"aria-modal":"true",activatorProps:x.value,role:"dialog"},f),{activator:n.activator,default:function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return s(W,{root:"VDialog"},{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n,...o)]}})}})}),F({},e)}}),E="dev - dialog integration",me={__name:"dialog",setup(t){const d=_({}),n={type:"object",properties:{array1:{type:"array",items:{type:"object",properties:{string1:{type:"string"},string2:{type:"string"}}}}}};return B({title:"VJSF - "+E}),(i,f)=>(j(),U(u(M),{class:"doc-content-page"},{default:c(()=>[z("h1",{class:"text-h2 mb-8"},H(E)),s(u($),{width:"auto"},{activator:c(({props:e})=>[s(u(G),v(e,{color:"primary"}),{default:c(()=>[h(" Open dialog ")]),_:2},1040)]),default:c(()=>[s(u(J),null,{default:c(()=>[s(u(w),null,{default:c(()=>[h(" Hello "),s(u(T),{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=e=>d.value=e),schema:n},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{me as default};
