(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d32d2"],{"5c3a":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"dashBoard"},o={class:"navbar navbar-expand-lg navbar-light bg-light"},r={class:"container-fluid"},i=Object(c["createTextVNode"])(" 食無定所 "),s=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),l={id:"navbarSupportedContent",class:"collapse navbar-collapse"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},h=Object(c["createTextVNode"])(" 返回前台 "),b={class:"nav-item"},p=Object(c["createTextVNode"])(" 產品列表 "),g={class:"nav-item"},v=Object(c["createTextVNode"])(" 訂單列表 "),f={class:"nav-item"},O=Object(c["createTextVNode"])(" 優惠劵列表 "),j={class:"nav-item"};function m(e,t,a,m,N,V){var $=Object(c["resolveComponent"])("router-link"),k=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("nav",o,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])($,{to:"/",class:"navbar-brand"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),s,Object(c["createVNode"])("div",l,[Object(c["createVNode"])("ul",u,[Object(c["createVNode"])("li",d,[Object(c["createVNode"])($,{to:"/",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[h]})),_:1})]),Object(c["createVNode"])("li",b,[Object(c["createVNode"])($,{to:"/admin/products",class:"nav-link active"},{default:Object(c["withCtx"])((function(){return[p]})),_:1})]),Object(c["createVNode"])("li",g,[Object(c["createVNode"])($,{to:"/admin/orders",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[v]})),_:1})]),Object(c["createVNode"])("li",f,[Object(c["createVNode"])($,{to:"/admin/coupons",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[O]})),_:1})]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])("a",{class:"nav-link","aria-current":"page",href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return V.signOut&&V.signOut.apply(V,arguments)}),["prevent"]))},"登出")])])])])]),N.hasRight?(Object(c["openBlock"])(),Object(c["createBlock"])(k,{key:0})):Object(c["createCommentVNode"])("",!0)])}a("ac1f"),a("5319");var N={name:"DashBoard",data:function(){return{hasRight:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)shop\s*=\s*([^;]*).*$)|^.*$/,"$1");""!==t?(this.$http.defaults.headers.common.Authorization=t,this.$emitter.emit("fullScreenLoading",!0),this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/user/check")).then((function(t){t.data.success?e.hasRight=!0:(e.hasRight=!1,e.$swal(t.data.message,"","error").then((function(){e.$router.push("/login")}))),e.$emitter.emit("fullScreenLoading",!1)})).catch((function(t){e.hasRight=!1,e.$swal(t,"","error").then((function(){e.$router.push("/login")})),e.$emitter.emit("fullScreenLoading",!1)}))):this.$swal("沒有登入狀態 將導回登入頁面","","error").then((function(){e.$router.push("/login")}))},signOut:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/logout");this.$emitter.emit("fullScreenLoading",!0),this.$http.post(t).then((function(t){document.cookie="shop=;expires=;";var a=t.data.success?"success":"error";e.$swal(t.data.message,"",a).then((function(){e.$router.push("/login")})),e.$emitter.emit("fullScreenLoading",!1)})).catch((function(t){e.$swal(t,"","error").then((function(){e.$router.push("/login")})),e.$emitter.emit("fullScreenLoading",!1)}))}}},V=a("d959"),$=a.n(V);const k=$()(N,[["render",m]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-2d0d32d2.0a86c406.js.map