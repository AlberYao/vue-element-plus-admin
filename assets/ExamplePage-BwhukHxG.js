var Y=Object.defineProperty;var R=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var T=(r,i,a)=>i in r?Y(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,$=(r,i)=>{for(var a in i||(i={}))j.call(i,a)&&T(r,a,i[a]);if(R)for(var a of R(i))H.call(i,a)&&T(r,a,i[a]);return r};var b=(r,i,a)=>new Promise((f,p)=>{var y=m=>{try{d(a.next(m))}catch(c){p(c)}},g=m=>{try{d(a.throw(m))}catch(c){p(c)}},d=m=>m.done?f(m.value):Promise.resolve(m.value).then(y,g);d((a=a.apply(r,i)).next())});import{_ as O}from"./ContentWrap.vue_vue_type_script_setup_true_lang-x79p3ENq.js";import{_ as U}from"./Search.vue_vue_type_script_setup_true_lang-DjPRuq6-.js";import{i as u,c as F}from"./index-CXvLa8iJ.js";/* empty css               */import{_ as q}from"./Table.vue_vue_type_script_lang-h5Q80TYX.js";import{g as Q,d as G}from"./index-ChR76wi-.js";import{u as J}from"./useTable-Bo0abxn-.js";import{l as K,aB as W,a as S,I as X,M as s,O as Z,u as t,m as ee,R as te,Q as w,q as ae,U as z,V as A,B,y as oe}from"./vue-chunks-ApmF_VrE.js";import{u as le}from"./useEventBus-em_0C-Eo.js";import{u as ie}from"./useCrudSchemas-DyIikQXk.js";import{l as re}from"./element-plus-BmqQxCtl.js";/* empty css                *//* empty css                  */import"./Form-CPeIhX5s.js";/* empty css                     *//* empty css               *//* empty css                    */import"./el-radio-button-BzKGxwza.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-CQ1K9Gkr.js";import"./style.css_vue_type_style_index_0_src_true_lang-CJGijAvd.js";import"./wang-editor-CANOApoX.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DV-sAFXb.js";import"./IconPicker-KoZ3LMnR.js";/* empty css                      */import"./IAgree.vue_vue_type_script_setup_true_lang-DAtq1aqC.js";import"./Highlight.vue_vue_type_script_lang-CoAHSxaO.js";import"./useForm-R8Bxs0x8.js";import"./useIcon-3FdG6QVw.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                         *//* empty css                  */import"./index-C6Oj1jlu.js";import"./tree-Dgaev6Pi.js";const ne={class:"mb-10px"};function P(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!oe(r)}const Je=K({name:"ExamplePage",__name:"ExamplePage",setup(r){const{push:i}=W(),a=S([]),f=S({}),p=e=>{f.value=e,_()},{tableRegister:y,tableState:g,tableMethods:d}=J({fetchDataApi:()=>b(this,null,function*(){const{currentPage:e,pageSize:o}=g,n=yield Q($({pageIndex:t(e),pageSize:t(o)},t(f)));return{list:n.data.list,total:n.data.total}}),fetchDelApi:()=>b(this,null,function*(){return!!(yield G(t(a)))})}),{loading:m,dataList:c,total:E,currentPage:h,pageSize:D}=g,{getList:_,getElTableExpose:I,delList:M}=d;_(),le({name:"getList",callback:e=>{e==="add"&&(h.value=1),_()}});const{t:l}=F(),N=X([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:l("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:l("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:l("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:l("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:l("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>s(re,{type:e.importance===1?"success":e.importance===2?"warning":"danger"},{default:()=>[e.importance===1?l("tableDemo.important"):e.importance===2?l("tableDemo.good"):l("tableDemo.commonly")]})}}},{field:"pageviews",label:l("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:l("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>s("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:l("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let o,n,v;return s(Z,null,[s(u,{type:"primary",onClick:()=>L(e.row,"edit")},P(o=l("exampleDemo.edit"))?o:{default:()=>[o]}),s(u,{type:"success",onClick:()=>L(e.row,"detail")},P(n=l("exampleDemo.detail"))?n:{default:()=>[n]}),s(u,{type:"danger",onClick:()=>C(e.row)},P(v=l("exampleDemo.del"))?v:{default:()=>[v]})])}}}}]),{allSchemas:k}=ie(N),V=()=>{i("/example/example-add")},x=S(!1),C=e=>b(this,null,function*(){const o=yield I();a.value=e?[e.id]:(o==null?void 0:o.getSelectionRows().map(n=>n.id))||[],x.value=!0,yield M(t(a).length).finally(()=>{x.value=!1})}),L=(e,o)=>{i(`/example/example-${o}?id=${e.id}`)};return(e,o)=>(ee(),te(t(O),null,{default:w(()=>[s(t(U),{schema:t(k).searchSchema,onSearch:p,onReset:p},null,8,["schema"]),ae("div",ne,[s(t(u),{type:"primary",onClick:V},{default:w(()=>[z(A(t(l)("exampleDemo.add")),1)]),_:1}),s(t(u),{loading:x.value,type:"danger",onClick:o[0]||(o[0]=n=>C(null))},{default:w(()=>[z(A(t(l)("exampleDemo.del")),1)]),_:1},8,["loading"])]),s(t(q),{pageSize:t(D),"onUpdate:pageSize":o[1]||(o[1]=n=>B(D)?D.value=n:null),currentPage:t(h),"onUpdate:currentPage":o[2]||(o[2]=n=>B(h)?h.value=n:null),columns:t(k).tableColumns,data:t(c),loading:t(m),pagination:{total:t(E)},onRegister:t(y)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1}))}});export{Je as default};
