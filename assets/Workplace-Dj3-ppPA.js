var x=(e,o,i)=>new Promise((E,h)=>{var M=p=>{try{w(i.next(p))}catch(k){h(k)}},v=p=>{try{w(i.throw(p))}catch(k){h(k)}},w=p=>p.done?E(p.value):Promise.resolve(p.value).then(M,v);w((i=i.apply(e,o)).next())});import{_ as R}from"./avatar-DPidohIc.js";import{e as z,f as G,r as C,h as W,c as F}from"./index-CXvLa8iJ.js";import{e as Q,u as t,l as U,a as H,I as $,ag as J,m as u,p as g,q as l,M as a,Q as s,V as n,U as j,O as b,a6 as O,R as B}from"./vue-chunks-ApmF_VrE.js";/* empty css               *//* empty css                         *//* empty css                *//* empty css                   *//* empty css                */import{_ as I}from"./CountTo.vue_vue_type_script_setup_true_lang-CiDKdHrj.js";import{r as K,_ as X}from"./Echart.vue_vue_type_script_setup_true_lang-DO5_wySW.js";import{_ as Y}from"./Highlight.vue_vue_type_script_lang-CoAHSxaO.js";import{r as y,s as A,p as _,k as N,q as f,u as D,t as P}from"./element-plus-BmqQxCtl.js";import"./echarts-Dz9MjGyW.js";const Z={"zh-CN":{justNow:"刚刚",invalid:"无效时间",past:e=>e.match(/\d/)?`${e}前`:e,future:e=>e.match(/\d/)?`${e}后`:e,month:(e,o)=>e===1?o?"上个月":"下个月":`${e} 个月`,year:(e,o)=>e===1?o?"去年":"明年":`${e} 年`,day:(e,o)=>e===1?o?"昨天":"明天":`${e} 天`,week:(e,o)=>e===1?o?"上周":"下周":`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`},en:{justNow:"刚刚",invalid:"Invalid Date",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,o)=>e===1?o?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,o)=>e===1?o?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,o)=>e===1?o?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,o)=>e===1?o?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`}},ee=e=>{const o=z(),i=Q(()=>o.getCurrentLocale);return G(e,{messages:Z[t(i).lang]})},te=()=>C.get({url:"/mock/workplace/total"}),ae=()=>C.get({url:"/mock/workplace/project"}),se=()=>C.get({url:"/mock/workplace/dynamic"}),le=()=>C.get({url:"/mock/workplace/team"}),oe=()=>C.get({url:"/mock/workplace/radar"}),ne={class:"flex items-center"},re=l("img",{src:R,alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,-1),ce={class:"text-20px"},de={class:"mt-10px text-14px text-gray-500"},ie={class:"flex h-70px items-center justify-end lt-sm:mt-20px"},pe={class:"px-8px text-right"},ue={class:"text-14px text-gray-400 mb-20px"},me={class:"px-8px text-right"},xe={class:"text-14px text-gray-400 mb-20px"},_e={class:"px-8px text-right"},fe={class:"text-14px text-gray-400 mb-20px"},he={class:"flex justify-between"},ge={class:"flex items-center"},ye={class:"text-16px"},ve={class:"mt-15px text-14px text-gray-400"},we={class:"mt-20px text-12px text-gray-400 flex justify-between"},ke={class:"flex justify-between"},$e={class:"flex items-center"},je=l("img",{src:R,alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),be={class:"text-14px"},Ae={class:"mt-15px text-12px text-gray-400"},Ce={class:"flex items-center"},Ge=U({__name:"Workplace",setup(e){const o=H(!0);let i=$({project:0,access:0,todo:0});const E=()=>x(this,null,function*(){const c=yield te().catch(()=>{});c&&(i=Object.assign(i,c.data))});let h=$([]);const M=()=>x(this,null,function*(){const c=yield ae().catch(()=>{});c&&(h=Object.assign(h,c.data))});let v=$([]);const w=()=>x(this,null,function*(){const c=yield se().catch(()=>{});c&&(v=Object.assign(v,c.data))});let p=$([]);const k=()=>x(this,null,function*(){const c=yield le().catch(()=>{});c&&(p=Object.assign(p,c.data))}),S=$(K),V=()=>x(this,null,function*(){const c=yield oe().catch(()=>{});c&&(P(S,"radar.indicator",c.data.map(m=>({name:r(m.name),max:m.max}))),P(S,"series",[{name:`xxx${r("workplace.index")}`,type:"radar",data:[{value:c.data.map(m=>m.personal),name:r("workplace.personal")},{value:c.data.map(m=>m.team),name:r("workplace.team")}]}]))});x(this,null,function*(){yield Promise.all([E(),M(),w(),k(),V()]),o.value=!1});const{t:r}=F();return(c,m)=>{const L=J("Icon");return u(),g(b,null,[l("div",null,[a(t(f),{shadow:"never"},{default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[a(t(A),{gutter:20,justify:"space-between"},{default:s(()=>[a(t(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:s(()=>[l("div",ne,[re,l("div",null,[l("div",ce,n(t(r)("workplace.goodMorning"))+"，Archer，"+n(t(r)("workplace.happyDay")),1),l("div",de,n(t(r)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])]),_:1}),a(t(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:s(()=>[l("div",ie,[l("div",pe,[l("div",ue,n(t(r)("workplace.project")),1),a(t(I),{class:"text-20px","start-val":0,"end-val":t(i).project,duration:2600},null,8,["end-val"])]),a(t(N),{direction:"vertical"}),l("div",me,[l("div",xe,n(t(r)("workplace.toDo")),1),a(t(I),{class:"text-20px","start-val":0,"end-val":t(i).todo,duration:2600},null,8,["end-val"])]),a(t(N),{direction:"vertical","border-style":"dashed"}),l("div",_e,[l("div",fe,n(t(r)("workplace.access")),1),a(t(I),{class:"text-20px","start-val":0,"end-val":t(i).access,duration:2600},null,8,["end-val"])])])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),a(t(A),{class:"mt-20px",gutter:20,justify:"space-between"},{default:s(()=>[a(t(_),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:s(()=>[a(t(f),{shadow:"never"},{header:s(()=>[l("div",he,[l("span",null,n(t(r)("workplace.project")),1),a(t(D),{type:"primary",underline:!1},{default:s(()=>[j(n(t(r)("workplace.more")),1)]),_:1})])]),default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[a(t(A),null,{default:s(()=>[(u(!0),g(b,null,O(t(h),(d,T)=>(u(),B(t(_),{key:`card-${T}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:s(()=>[a(t(f),{shadow:"hover"},{default:s(()=>[l("div",ge,[a(L,{icon:d.icon,size:25,class:"mr-10px"},null,8,["icon"]),l("span",ye,n(d.name),1)]),l("div",ve,n(t(r)(d.message)),1),l("div",we,[l("span",null,n(d.personal),1),l("span",null,n(t(W)(d.time,"yyyy-MM-dd")),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1}),a(t(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("div",ke,[l("span",null,n(t(r)("workplace.dynamic")),1),a(t(D),{type:"primary",underline:!1},{default:s(()=>[j(n(t(r)("workplace.more")),1)]),_:1})])]),default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[(u(!0),g(b,null,O(t(v),(d,T)=>(u(),g("div",{key:`dynamics-${T}`},[l("div",$e,[je,l("div",null,[l("div",be,[a(t(Y),{keys:d.keys.map(q=>t(r)(q))},{default:s(()=>[j(n(t(r)("workplace.pushCode")),1)]),_:2},1032,["keys"])]),l("div",Ae,n(t(ee)(d.time)),1)])]),a(t(N))]))),128))]),_:1},8,["loading"])]),_:1})]),_:1}),a(t(_),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:s(()=>[a(t(f),{shadow:"never"},{header:s(()=>[l("span",null,n(t(r)("workplace.shortcutOperation")),1)]),default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[a(t(A),null,{default:s(()=>[(u(),g(b,null,O(9,d=>a(t(_),{key:`card-${d}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:s(()=>[a(t(D),{type:"default",underline:!1},{default:s(()=>[j(n(t(r)("workplace.operation"))+n(d),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1},8,["loading"])]),_:1}),a(t(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("span",null,"xx"+n(t(r)("workplace.index")),1)]),default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[a(t(X),{options:S,height:400},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(t(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("span",null,n(t(r)("workplace.team")),1)]),default:s(()=>[a(t(y),{loading:o.value,animated:""},{default:s(()=>[a(t(A),null,{default:s(()=>[(u(!0),g(b,null,O(t(p),d=>(u(),B(t(_),{key:`team-${d.name}`,span:12,class:"mb-20px"},{default:s(()=>[l("div",Ce,[a(L,{icon:d.icon,class:"mr-10px"},null,8,["icon"]),a(t(D),{type:"default",underline:!1},{default:s(()=>[j(n(d.name),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}});export{Ge as default};
