(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce2b3a7c"],{"07ac":function(e,t,a){var c=a("23e7"),r=a("6f53").values;c({target:"Object",stat:!0},{values:function(e){return r(e)}})},"1dde":function(e,t,a){var c=a("d039"),r=a("b622"),o=a("2d00"),n=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"6f53":function(e,t,a){var c=a("83ab"),r=a("df75"),o=a("fc6a"),n=a("d1e7").f,l=function(e){return function(t){var a,l=o(t),s=r(l),d=s.length,i=0,u=[];while(d>i)a=s[i++],c&&!n.call(l,a)||u.push(e?[a,l[a]]:l[a]);return u}};e.exports={entries:l(!0),values:l(!1)}},8418:function(e,t,a){"use strict";var c=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?r.f(e,n,o(0,a)):e[n]=a}},"94ee":function(e,t,a){"use strict";var c=a("7a23"),r={class:"row justify-content-center list-unstyled py-5 px-3"},o={class:"col-md-4"},n={class:"col-md-4"},l={class:"col-md-4"};function s(e,t,a,s,d,i){return Object(c["openBlock"])(),Object(c["createBlock"])("ul",r,[Object(c["createVNode"])("li",o,[Object(c["createVNode"])("div",{class:[["checkout"===a.step?"text-primary":"text-muted"],"bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light"]}," 1. 填寫訂單 ",2)]),Object(c["createVNode"])("li",n,[Object(c["createVNode"])("div",{class:[["payment"===a.step?"text-primary":"text-muted"],"p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light"]}," 2. 訂單結帳 ",2)]),Object(c["createVNode"])("li",l,[Object(c["createVNode"])("div",{class:[["paid"===a.step?"text-primary":"text-muted"],"p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light"]}," 3. 付款完成 ",2)])])}var d={props:{step:{type:String,default:""}}},i=a("d959"),u=a.n(i);const b=u()(d,[["render",s]]);t["a"]=b},"99af":function(e,t,a){"use strict";var c=a("23e7"),r=a("d039"),o=a("e8b5"),n=a("861d"),l=a("7b0b"),s=a("50c4"),d=a("8418"),i=a("65f0"),u=a("1dde"),b=a("b622"),m=a("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",j=m>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),V=u("concat"),v=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},h=!j||!V;c({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,c,r,o,n=l(this),u=i(n,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?n:arguments[t],v(o)){if(r=s(o.length),b+r>p)throw TypeError(O);for(a=0;a<r;a++,b++)a in o&&d(u,b,o[a])}else{if(b>=p)throw TypeError(O);d(u,b++,o)}return u.length=b,u}})},b0c0:function(e,t,a){var c=a("83ab"),r=a("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,s="name";c&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},b7c8:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),r={class:"container"},o={class:"row justify-content-center"},n={class:"col-md-7"},l={class:"mb-3"},s=Object(c["createVNode"])("label",{for:"name",class:"form-label"},[Object(c["createTextVNode"])("姓名 "),Object(c["createVNode"])("span",{class:"text-danger"},"*")],-1),d={class:"mb-3"},i=Object(c["createVNode"])("label",{for:"email",class:"form-label"},[Object(c["createTextVNode"])("Email "),Object(c["createVNode"])("span",{class:"text-danger"},"*")],-1),u={class:"mb-3"},b=Object(c["createVNode"])("label",{for:"tel",class:"form-label"},[Object(c["createTextVNode"])("電話 "),Object(c["createVNode"])("span",{class:"text-danger"},"*")],-1),m={class:"mb-3"},f=Object(c["createVNode"])("label",{for:"addr",class:"form-label"},[Object(c["createTextVNode"])("地址 "),Object(c["createVNode"])("span",{class:"text-danger"},"*")],-1),p={class:"mb-3"},O=Object(c["createVNode"])("label",{for:"payMethod",class:"form-label"},[Object(c["createTextVNode"])("付款方式 "),Object(c["createVNode"])("span",{class:"text-danger"},"*")],-1),j=Object(c["createVNode"])("option",{value:"",disabled:""}," 請選擇付款方式 ",-1),V=Object(c["createVNode"])("option",{value:"ATM"}," ATM ",-1),v=Object(c["createVNode"])("option",{value:"信用卡"}," 信用卡 ",-1),h={class:"mb-3"},N=Object(c["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1);function g(e,t,a,g,y,x){var w=Object(c["resolveComponent"])("CheckOutStep"),k=Object(c["resolveComponent"])("Field"),S=Object(c["resolveComponent"])("ErrorMessage"),M=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])(w,{step:"checkout"}),Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])(M,{onSubmit:x.submitOrder},{default:Object(c["withCtx"])((function(e){var a=e.errors;return[Object(c["createVNode"])("div",l,[s,Object(c["createVNode"])(k,{id:"name",modelValue:y.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.user.name=e}),name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入 姓名",rules:"required"},null,8,["modelValue","class"]),Object(c["createVNode"])(S,{name:"姓名",class:"invalid-feedback"})]),Object(c["createVNode"])("div",d,[i,Object(c["createVNode"])(k,{id:"email",modelValue:y.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return y.user.email=e}),name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),Object(c["createVNode"])(S,{name:"email",class:"invalid-feedback"})]),Object(c["createVNode"])("div",u,[b,Object(c["createVNode"])(k,{id:"tel",modelValue:y.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.user.tel=e}),name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入 電話",rules:"required|min:8|max:10"},null,8,["modelValue","class"]),Object(c["createVNode"])(S,{name:"電話",class:"invalid-feedback"})]),Object(c["createVNode"])("div",m,[f,Object(c["createVNode"])(k,{id:"addr",modelValue:y.user.addr,"onUpdate:modelValue":t[4]||(t[4]=function(e){return y.user.addr=e}),name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入 地址",rules:"required"},null,8,["modelValue","class"]),Object(c["createVNode"])(S,{name:"地址",class:"invalid-feedback"})]),Object(c["createVNode"])("div",p,[O,Object(c["createVNode"])(k,{id:"payMethod",modelValue:y.user.payMethod,"onUpdate:modelValue":t[5]||(t[5]=function(e){return y.user.payMethod=e}),as:"select",name:"付款方式",class:["form-control",{"is-invalid":a["付款方式"]}],rules:"required"},{default:Object(c["withCtx"])((function(){return[j,V,v]})),_:2},1032,["modelValue","class"]),Object(c["createVNode"])(S,{name:"付款方式",class:"invalid-feedback"})]),Object(c["createVNode"])("div",h,[N,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{id:"message","onUpdate:modelValue":t[6]||(t[6]=function(e){return y.msg=e}),class:"form-control",placeholder:"請輸入留言","aria-describedby":"message",rows:"5"},null,512),[[c["vModelText"],y.msg]])]),Object(c["createVNode"])("div",{class:["text-center mb-5",{"cursor-notAllow":!x.checkSubmit(a)}]},[Object(c["createVNode"])("button",{disabled:!x.checkSubmit(a),class:"btn btn-primary",type:x.checkSubmit(a)?"submit":"button"}," 送出訂單 ",8,["disabled","type"])],2)]})),_:1},8,["onSubmit"])])])])])}a("07ac"),a("99af");var y=a("94ee"),x={name:"Checkout",components:{CheckOutStep:y["a"]},data:function(){return{msg:"",user:{name:"",email:"",tel:"",addr:"",payMethod:""}}},methods:{checkSubmit:function(e){var t=Object.values(e).length<=0,a=Object.values(this.user).every((function(e){return""!==e}));return t&&a},submitOrder:function(){var e=this,t={data:{user:{name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.addr,payMethod:this.user.payMethod},message:this.user.msg}};this.$emitter.emit("fullScreenLoading",!0),this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/order"),t).then((function(t){if(t.data.success){var a=t.data,c=a.message,r=a.total,o=a.orderId;e.$emitter.emit("nav-getCarts","updateOnly"),e.$swal("".concat(c,", \n共$").concat(r,"元, \n訂單編號: \n ").concat(o," \n 付款去!"),"","success").then((function(){e.$router.push("/payment/".concat(o))}))}else e.$swal(t.data.message,"","error");e.$emitter.emit("fullScreenLoading",!1)})).catch((function(t){e.$emitter.emit("fullScreenLoading",!1),e.$swal(t,"","error")}))}}},w=a("d959"),k=a.n(w);const S=k()(x,[["render",g]]);t["default"]=S}}]);
//# sourceMappingURL=chunk-ce2b3a7c.98c7e989.js.map