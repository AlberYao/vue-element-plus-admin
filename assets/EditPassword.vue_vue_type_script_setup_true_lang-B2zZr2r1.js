var i=(_,t,o)=>new Promise((p,l)=>{var d=s=>{try{r(o.next(s))}catch(n){l(n)}},m=s=>{try{r(o.throw(s))}catch(n){l(n)}},r=s=>s.done?p(s.value):Promise.resolve(s.value).then(d,m);r((o=o.apply(_,t)).next())});import{F as h}from"./Form-CPeIhX5s.js";import{u as y}from"./useForm-R8Bxs0x8.js";import{u as v}from"./useValidator-D6XiB8X8.js";import"./index-CXvLa8iJ.js";/* empty css                   */import{k as B,i as E,b as x}from"./element-plus-BmqQxCtl.js";import{l as F,I as g,a as V,ag as C,m as D,p as I,M as w,u as P,Q as M,U as R,O as T}from"./vue-chunks-ApmF_VrE.js";const U=F({__name:"EditPassword",setup(_){const{required:t}=v(),o=g([{field:"password",label:"旧密码",component:"InputPassword",colProps:{span:24}},{field:"newPassword",label:"新密码",component:"InputPassword",colProps:{span:24},componentProps:{strength:!0}},{field:"newPassword2",label:"确认新密码",component:"InputPassword",colProps:{span:24},componentProps:{strength:!0}}]),p=g({password:[t()],newPassword:[t(),{asyncValidator:(a,c,e)=>i(this,null,function*(){const u=yield m(),{newPassword2:f}=u;c!==f?e(new Error("新密码与确认新密码不一致")):e()})}],newPassword2:[t(),{asyncValidator:(a,c,e)=>i(this,null,function*(){const u=yield m(),{newPassword:f}=u;c!==f?e(new Error("确认新密码与新密码不一致")):e()})}]}),{formRegister:l,formMethods:d}=y(),{getFormData:m,getElFormExpose:r}=d,s=V(!1),n=()=>i(this,null,function*(){const a=yield r();(yield a==null?void 0:a.validate().catch(e=>{}))&&E.confirm("是否确认修改?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>i(this,null,function*(){try{s.value=!0,x.success("修改成功")}catch(e){}finally{s.value=!1}})).catch(()=>{})});return(a,c)=>{const e=C("BaseButton");return D(),I(T,null,[w(P(h),{rules:p,onRegister:P(l),schema:o},null,8,["rules","onRegister","schema"]),w(P(B)),w(e,{type:"primary",onClick:n},{default:M(()=>[R("确认修改")]),_:1})],64)}}});export{U as _};
