(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db5c3efc"],{"1dde":function(e,t,r){var c=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");e.exports=function(e){return i>=51||!c((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"22f6":function(e,t,r){"use strict";r("caad"),r("2532");var c=r("7a23"),o={class:"card__imgWrap"},i={class:"card-body"},a={class:"d-flex justify-content-between"},n={class:"card-title"},s={class:"badge rounded-pill bg-secondary h5"},l={class:"d-flex justify-content-between"},d={key:0,class:"h5 ms-auto"},u={class:"text-primary h5 ms-auto"},p=Object(c["createTextVNode"])(" 載入中... ");function b(e,t,r,b,f,g){var h=Object(c["resolveComponent"])("SwiperSlide"),v=Object(c["resolveComponent"])("Swiper");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])(v,{ref:"swiperaa",breakpoints:f.swiper.breakpoints,autoplay:f.swiper.autoplay,navigation:!0,loop:!0,onSwiper:g.controlSwiper,onMouseleave:g.startSwiper},{default:Object(c["withCtx"])((function(){return[f.products.length>0?(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(g.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(h,{key:e.id},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",{class:"card h-100",role:"button",onClick:function(t){return g.getProductDetail(e.id)}},[Object(c["createVNode"])("div",{class:"card__Favorite",onClick:Object(c["withModifiers"])((function(t){return g.setFavorite(e.id,e.title)}),["stop"])},[Object(c["createVNode"])("i",{class:["bi",[f.favoriteList.includes(e.id)?"bi-heart-fill":"bi-heart"]]},null,2)],8,["onClick"]),Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",{class:"card__img bg-cover",style:[{height:"250px"},"background-image: url(".concat(e.imageUrl,")")]},null,4)]),Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("h5",n,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",s,Object(c["toDisplayString"])(e.category),1)])]),Object(c["createVNode"])("div",l,[e.origin_price===e.price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",d,"原價： "+Object(c["toDisplayString"])(e.origin_price)+" 元",1)):(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:1},[Object(c["createVNode"])("del",null,"原價： "+Object(c["toDisplayString"])(e.origin_price)+" 元",1),Object(c["createVNode"])("span",u,"特價： "+Object(c["toDisplayString"])(e.price)+" 元",1)],64))])])],8,["onClick"])]})),_:2},1024)})),128)):(Object(c["openBlock"])(),Object(c["createBlock"])(h,{key:1},{default:Object(c["withCtx"])((function(){return[p]})),_:1}))]})),_:1},8,["breakpoints","autoplay","onSwiper","onMouseleave"])])}r("4de4"),r("99af"),r("c740"),r("a434");var f={name:"ProductsSwiper",props:{category:{type:String,default:function(){return""}}},data:function(){return{swiper:{breakpoints:{767:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:20}},autoplay:{delay:2500,disableOnInteraction:!0,pauseOnMouseEnter:!0}},products:[],favoriteList:[]}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return""===e.category||t.category===e.category}))}},created:function(){this.getFavorite(),this.getProducts()},methods:{getProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/products/all")).then((function(t){if(t.data.success){var r=t.data.products;e.products=r}else e.$swal(t.data.message,"","error")})).catch((function(t){e.$swal(t,"","error")}))},getProductDetail:function(e){var t=this;this.$emitter.emit("fullScreenLoading",!0),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/product/").concat(e)).then((function(r){r.data.success?t.$router.push("/product/".concat(e)):t.$swal(r.data.message,"","error"),t.$emitter.emit("fullScreenLoading",!1)})).catch((function(e){t.$swal(e,"","error"),t.$emitter.emit("fullScreenLoading",!1)}))},getFavorite:function(){var e=localStorage.getItem("homeLessFavorite")||"[]";this.favoriteList=JSON.parse(e),this.$emitter.emit("nav-getfavorite"),this.$emit("get-favorite")},setFavorite:function(e,t){if(this.favoriteList.includes(e)){var r=this.favoriteList.findIndex((function(t){return t===e}));this.favoriteList.splice(r,1),this.$emitter.emit("toast:push",{icon:"error",title:"".concat(t,"已 移除 我的最愛")})}else this.favoriteList.push(e),this.$emitter.emit("toast:push",{icon:"success",title:"".concat(t,"已 加入 我的最愛")});var c=JSON.stringify(this.favoriteList);localStorage.setItem("homeLessFavorite",""),localStorage.setItem("homeLessFavorite",c),this.getFavorite()},controlSwiper:function(e){this.swiperInstance=e},startSwiper:function(){this.swiperInstance.autoplay.start()}}},g=r("d959"),h=r.n(g);const v=h()(f,[["render",b]]);t["a"]=v},2532:function(e,t,r){"use strict";var c=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");c({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var c=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"4de4":function(e,t,r){"use strict";var c=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var c=r("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},8418:function(e,t,r){"use strict";var c=r("c04e"),o=r("9bf2"),i=r("5c6c");e.exports=function(e,t,r){var a=c(t);a in e?o.f(e,a,i(0,r)):e[a]=r}},8619:function(e,t,r){"use strict";r.r(t);r("caad"),r("2532");var c=r("7a23"),o={class:"favorite"},i={class:"container"},a={"aria-label":"breadcrumb"},n={class:"breadcrumb"},s={class:"breadcrumb-item"},l=Object(c["createTextVNode"])(" 首頁 "),d=Object(c["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 我的最愛 ",-1),u={class:"row mb-5"},p={class:"card__imgWrap"},b={class:"card-body"},f={class:"d-flex justify-content-between"},g={class:"card-title"},h={class:"badge rounded-pill bg-secondary h5"},v={class:"d-flex justify-content-between"},m={key:0,class:"h5 ms-auto"},O={class:"text-primary h5 ms-auto"},j={class:"d-flex justify-content-center"},y={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},k=Object(c["createTextVNode"])(" 看詳細 "),S={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},w=Object(c["createVNode"])("i",{class:"bi bi-cart-plus"},null,-1),V={key:1,class:"text-center mb-5"},N=Object(c["createVNode"])("h2",null,"沒有我的最愛",-1),B=Object(c["createVNode"])("p",{class:"display-2 mb-3"}," 快去產品頁挑選!!! ",-1),x=Object(c["createTextVNode"])(" 點此跳轉! "),L={class:"bg-light py-4"},F={class:"container"},C=Object(c["createVNode"])("h3",{class:"text-primary mb-3"}," 忘了我了嗎? 快把我加上去 ",-1);function $(e,t,r,$,P,D){var M=Object(c["resolveComponent"])("HeaderPic"),I=Object(c["resolveComponent"])("router-link"),_=Object(c["resolveComponent"])("ProductsSwiper");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(M,{title:"喜歡的 通通都在這",class:"mb-4",url:P.url},null,8,["url"]),Object(c["createVNode"])("div",i,[Object(c["createVNode"])("nav",a,[Object(c["createVNode"])("ol",n,[Object(c["createVNode"])("li",s,[Object(c["createVNode"])(I,{to:"/",class:"nav-link active p-0"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]),d])]),Object(c["createVNode"])("div",u,[D.filterProducts.length>0?(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(D.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id,class:"col-lg-4 col-md-6 mb-3"},[Object(c["createVNode"])("div",{class:["card h-100 position-relative",{moveToCart:P.moveToCart===e.id}],role:"button",onClick:function(t){return D.getProductDetail(e.id)}},[Object(c["createVNode"])("div",{class:"card__Favorite",onClick:Object(c["withModifiers"])((function(t){return D.setFavorite(e.id,e.title)}),["stop"])},[Object(c["createVNode"])("i",{class:["bi",[P.favoriteList.includes(e.id)?"bi-heart-fill":"bi-heart"]]},null,2)],8,["onClick"]),Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",{class:"card__img bg-cover",style:[{height:"250px"},"background-image: url(".concat(e.imageUrl,")")]},null,4)]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("h5",g,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",h,Object(c["toDisplayString"])(e.category),1)])]),Object(c["createVNode"])("div",v,[e.origin_price===e.price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",m,"原價： "+Object(c["toDisplayString"])(e.origin_price)+" 元",1)):(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:1},[Object(c["createVNode"])("del",null,"原價： "+Object(c["toDisplayString"])(e.origin_price)+" 元",1),Object(c["createVNode"])("span",O,"特價： "+Object(c["toDisplayString"])(e.price)+" 元",1)],64))]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("button",{class:"btn btn-outline-primary me-3",type:"button",onClick:function(t){return D.getProductDetail(e.id)}},[P.loadingStatus.itemLoading===e.id?(Object(c["openBlock"])(),Object(c["createBlock"])("span",y)):Object(c["createCommentVNode"])("",!0),k],8,["onClick"]),Object(c["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:Object(c["withModifiers"])((function(t){return D.addCart(e.id)}),["stop"]),onMouseenter:function(t){return D.cartBtnMoveHandler(e.id)},onMouseleave:t[1]||(t[1]=function(e){return D.cartBtnMoveHandler(null)})},[P.loadingStatus.itemLoading===e.id?(Object(c["openBlock"])(),Object(c["createBlock"])("span",S)):Object(c["createCommentVNode"])("",!0),w],40,["onClick","onMouseenter"])])])],10,["onClick"])])})),128)):(Object(c["openBlock"])(),Object(c["createBlock"])("div",V,[N,B,Object(c["createVNode"])(I,{to:"/products",class:"btn btn-primary"},{default:Object(c["withCtx"])((function(){return[x]})),_:1})]))])]),Object(c["createVNode"])("section",L,[Object(c["createVNode"])("div",F,[C,Object(c["createVNode"])(_,{ref:"productSwiper",onGetFavorite:D.getFavorite},null,8,["onGetFavorite"])])])])}r("4de4"),r("99af"),r("c740"),r("a434");var P=r("ae61"),D=r("22f6"),M={name:"Favorite",components:{HeaderPic:P["a"],ProductsSwiper:D["a"]},data:function(){return{url:"https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627780826134.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KMQXrwxi3OrY0z870p926cf80WkIhKPI7Z122qoYH5PUyCHSzvX4hpxloBJz2H5qEge9KzndKO1VczB7U1BnU5ou%2BqicJGbDM6lEz1DK5McQn9R4xOrHQp0CK%2BqGr%2B%2FL6dZUi2eVrc5OP3StJATrHHaDy56sBWbwsfc%2FPYbzcQeff36PUDtulHYFrYU%2Bw98kIuC6Xl37TMiVIeewh8byjnHg%2FlhVNXKWjmj%2FGW6MctBqoADf8EQI%2BzlpFSQWzR%2FR9MSVOWxTS5VfUN3OlRKuNAX7x2OYoDgdfWtaHW18sl2Czl%2FveTWUNWWHCUiBD9%2FQ2KS%2B6SWxKBOV2FWouOaimg%3D%3D",loadingStatus:{itemLoading:!1},moveToCart:null,list:{currentCategory:"all",ary:[],changeCategory:!1},products:[],favoriteList:[]}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return e.favoriteList.includes(t.id)}))}},mounted:function(){this.getFavorite(),this.getProducts()},methods:{getProducts:function(){var e=this;this.$emitter.emit("fullScreenLoading",!0),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/products/all")).then((function(t){if(t.data.success){var r=t.data.products;e.products=r}else e.$swal(t.data.message,"","error");e.$emitter.emit("fullScreenLoading",!1)})).catch((function(t){e.$swal(t,"","error"),e.$emitter.emit("fullScreenLoading",!1)}))},getFavorite:function(){var e=JSON.parse(localStorage.getItem("homeLessFavorite"))||[];this.favoriteList=e,this.$emitter.emit("nav-getfavorite"),this.getProducts()},setFavorite:function(e,t){if(this.favoriteList.includes(e)){var r=this.favoriteList.findIndex((function(t){return t===e}));this.favoriteList.splice(r,1),this.$emitter.emit("toast:push",{icon:"error",title:"".concat(t,"已 移除 我的最愛")})}else this.favoriteList.push(e),this.$emitter.emit("toast:push",{icon:"success",title:"".concat(t,"已 加入 我的最愛")});var c=JSON.stringify(this.favoriteList);localStorage.setItem("homeLessFavorite",""),localStorage.setItem("homeLessFavorite",c),this.getFavorite(),this.$refs.productSwiper.getFavorite()},cartBtnMoveHandler:function(e){this.moveToCart=e},getProductDetail:function(e){var t=this;this.loadingStatus.itemLoading=e,this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/product/").concat(e)).then((function(r){t.loadingStatus.itemLoading=null,r.data.success?t.$router.push("/product/".concat(e)):t.$swal(r.data.message,"","error")})).catch((function(e){t.$swal(e,"","error"),t.loadingStatus.itemLoading=null}))},addCart:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={data:{product_id:e,qty:r}};this.loadingStatus.itemLoading=e,this.$emitter.emit("fullScreenLoading",!0),this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("pet","/cart"),c).then((function(e){e.data.success?(t.loadingStatus.itemLoading=null,t.$emitter.emit("nav-getCarts"),t.$emitter.emit("toast:push",{icon:"success",title:"".concat(e.data.data.product.title," ").concat(e.data.message)})):t.$swal(e.data.message,"","error"),t.$emitter.emit("fullScreenLoading",!1)})).catch((function(e){t.loadingStatus.itemLoading=null,t.$swal(e,"","error"),t.$emitter.emit("fullScreenLoading",!1)}))}}},I=r("d959"),_=r.n(I);const z=_()(M,[["render",$]]);t["default"]=z},"99af":function(e,t,r){"use strict";var c=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),n=r("7b0b"),s=r("50c4"),l=r("8418"),d=r("65f0"),u=r("1dde"),p=r("b622"),b=r("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=b>=51||!o((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),m=u("concat"),O=function(e){if(!a(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},j=!v||!m;c({target:"Array",proto:!0,forced:j},{concat:function(e){var t,r,c,o,i,a=n(this),u=d(a,0),p=0;for(t=-1,c=arguments.length;t<c;t++)if(i=-1===t?a:arguments[t],O(i)){if(o=s(i.length),p+o>g)throw TypeError(h);for(r=0;r<o;r++,p++)r in i&&l(u,p,i[r])}else{if(p>=g)throw TypeError(h);l(u,p++,i)}return u.length=p,u}})},a434:function(e,t,r){"use strict";var c=r("23e7"),o=r("23cb"),i=r("a691"),a=r("50c4"),n=r("7b0b"),s=r("65f0"),l=r("8418"),d=r("1dde"),u=d("splice"),p=Math.max,b=Math.min,f=9007199254740991,g="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,c,d,u,h,v,m=n(this),O=a(m.length),j=o(e,O),y=arguments.length;if(0===y?r=c=0:1===y?(r=0,c=O-j):(r=y-2,c=b(p(i(t),0),O-j)),O+r-c>f)throw TypeError(g);for(d=s(m,c),u=0;u<c;u++)h=j+u,h in m&&l(d,u,m[h]);if(d.length=c,r<c){for(u=j;u<O-c;u++)h=u+c,v=u+r,h in m?m[v]=m[h]:delete m[v];for(u=O;u>O-c+r;u--)delete m[u-1]}else if(r>c)for(u=O-c;u>j;u--)h=u+c-1,v=u+r-1,h in m?m[v]=m[h]:delete m[v];for(u=0;u<r;u++)m[u+j]=arguments[u+2];return m.length=O-c+r,d}})},ab13:function(e,t,r){var c=r("b622"),o=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[o]=!1,"/./"[e](t)}catch(c){}}return!1}},ae61:function(e,t,r){"use strict";var c=r("7a23"),o={class:"container"},i={class:"h-100 p-5"},a={class:"text-center my-5"};function n(e,t,r,n,s,l){return Object(c["openBlock"])(),Object(c["createBlock"])("section",{class:"bg-cover text-white p-3",style:"background-image:linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat(r.url,")")},[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("h2",a,Object(c["toDisplayString"])(r.title),1)])])],4)}var s={name:"HeaderPic",props:{title:{type:String,default:"標題"},url:{type:String,default:"https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725743798.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0urWJyIBQAQ3dSjkCiowGLobrsB06EbZw7pSzdZ3cczq4z2385fFAPFgFwM3TMEw6TbRn5mgua6A6x39oSO1BpyMoOxjb3ddRDB3MO5KBZBNzKezl154gL%2Bxk77LbWU6pGla7S9QXtJ%2FsX7dP7OWHUpDtb7f3Fg0obeyPFlsp46vjEbBhMv7WuFCtJ8wz0aBaEgXkHOz8t5eQC9GpcETu7dDQBgzhSLja0Ik1MnkllRJNSu%2B6OQjSvrhkVV%2BA3g1rSvqhUJoLVySloYh7UZrvJ68MdNW4kP0kZys9ZmqBnUV2rsmX7jW1OI62EQ8Yr1qD0wUf4kSTacNekaLJqNng%3D%3D"}}},l=r("d959"),d=r.n(l);const u=d()(s,[["render",n]]);t["a"]=u},c740:function(e,t,r){"use strict";var c=r("23e7"),o=r("b727").findIndex,i=r("44d2"),a="findIndex",n=!0;a in[]&&Array(1)[a]((function(){n=!1})),c({target:"Array",proto:!0,forced:n},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},caad:function(e,t,r){"use strict";var c=r("23e7"),o=r("4d64").includes,i=r("44d2");c({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);
//# sourceMappingURL=chunk-db5c3efc.42b71bc9.js.map