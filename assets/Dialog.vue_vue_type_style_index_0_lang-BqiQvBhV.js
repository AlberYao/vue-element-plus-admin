var $=Object.defineProperty;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(s,t,e)=>t in s?$(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,h=(s,t)=>{for(var e in t||(t={}))N.call(t,e)&&y(s,e,t[e]);if(v)for(var e of v(t))D.call(t,e)&&y(s,e,t[e]);return s};var H=(s,t,e)=>new Promise((p,l)=>{var d=o=>{try{i(e.next(o))}catch(a){l(a)}},r=o=>{try{i(e.throw(o))}catch(a){l(a)}},i=o=>o.done?p(o.value):Promise.resolve(o.value).then(d,r);i((e=e.apply(s,t)).next())});import{p as f,D as x}from"./index-CXvLa8iJ.js";import{f as T,a3 as B}from"./element-plus-BmqQxCtl.js";import{l as E,P as j,e as b,a as k,b as w,ag as F,m as S,R as _,a8 as A,u as c,Q as m,F as I,Y as O,E as g,q as C,U as P,V as q,W as z,M as V,T as M,n as Q}from"./vue-chunks-ApmF_VrE.js";const R={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},U={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},K=E({__name:"Dialog",props:{modelValue:f.bool.def(!1),title:f.string.def("Dialog"),fullscreen:f.bool.def(!0),maxHeight:f.oneOfType([String,Number]).def("400px")},setup(s){const t=j(),e=s,p=b(()=>{const o=["fullscreen","title","maxHeight"],a=O(),n=h(h({},a),e);for(const u in n)o.indexOf(u)!==-1&&delete n[u];return n}),l=k(!1),d=()=>{l.value=!c(l)},r=k(x(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight);w(()=>l.value,o=>H(this,null,function*(){if(yield Q(),o){const a=document.documentElement.offsetHeight;r.value=`${a-55-60-(t.footer?63:0)}px`}else r.value=x(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight}),{immediate:!0}),w(()=>e.maxHeight,o=>{r.value=x(o)?`${o}px`:o});const i=b(()=>({height:c(r)}));return(o,a)=>{const n=F("Icon");return S(),_(c(B),I(p.value,{fullscreen:l.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),A({header:m(({close:u})=>[C("div",R,[g(o.$slots,"title",{},()=>[P(q(s.title),1)]),C("div",U,[s.fullscreen?(S(),_(n,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:l.value?"vi-radix-icons:exit-full-screen":"vi-radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:d},null,8,["icon"])):z("",!0),V(n,{class:"cursor-pointer is-hover !h-54px",icon:"vi-ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:u},null,8,["onClick"])])])]),default:m(()=>[V(c(T),{style:M(i.value)},{default:m(()=>[g(o.$slots,"default")]),_:3},8,["style"])]),_:2},[c(t).footer?{name:"footer",fn:m(()=>[g(o.$slots,"footer")]),key:"0"}:void 0]),1040,["fullscreen"])}}});export{K as _};
