(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"143":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return f}));var c=n(1),u=n(10),i=n(2),a=n(30),r=n(25),l=n(142),b=n(29),o=(n(144),Object(u.k)({"name":"Page","props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(t,e){var n=e.slots,r=e.attrs,l=Object(i.j)(0),o=Object(u.d)((function(){return Object(c.a)({"page":!0},"".concat(r.class),Boolean(r.class))})),s=Object(u.d)((function(){var t=Object(b.getSystemInfoSync)().windowWidth;return b.default.getEnv()===b.default.ENV_TYPE.WEB?{"width":t>=1024?"75%":"100%","margin":"auto"}:null}));return Object(u.r)((function(){Object(b.createSelectorQuery)().select("#home").boundingClientRect((function(t){l.value=t.height+30})).exec()})),function(){return Object(u.n)(a.n,{"class":o.value,"style":s.value},{"default":function _default(){return[Object(u.n)(a.n,{"class":"doc-header"},{"default":function _default(){return[Object(u.n)(a.n,{"class":"doc-header__title"},{"default":function _default(){return t.headerTitle}})]}}),Object(u.n)(a.n,{"class":"doc-body","style":r.style},{"default":function _default(){return n.default&&n.default()}}),n.extra&&n.extra(),Object(u.n)(j,{"to":"back","btnIcon":"chevron-left","style":{"bottom":"".concat(l.value,"px")}}),Object(u.n)(j,{"id":"home","to":"home"})]}})}}})),j=Object(u.k)({"name":"NavBtn","props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(t,e){var n=e.attrs;function handleClick(){switch(t.to){case"home":b.default.navigateTo({"url":"/pages/index/index"});break;case"back":b.default.navigateBack({"delta":1})}}return function(){return Object(u.n)(a.n,{"class":"btn-fab","style":n.style},{"default":function _default(){return[Object(u.n)(l.o,{"size":t.size,"onClick":handleClick},{"default":function _default(){return[t.btnText&&Object(u.n)(r.a,null,{"default":function _default(){return t.btnText}}),t.btnIcon&&!t.btnText&&Object(u.n)(r.a,{"class":"at-fab__icon at-icon at-icon-".concat(t.btnIcon)})]}})]}})}}}),s=Object(u.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(t,e){var n=e.slots,c=e.attrs,i=Object(u.d)((function(){return{"panel__content":!0,"no-padding":t.noPadding}}));return function(){return Object(u.n)(a.n,{"class":"panel"},{"default":function _default(){return[t.title&&Object(u.n)(a.n,{"class":"panel__title"},{"default":function _default(){return t.title}}),n.controller&&n.controller(),Object(u.n)(a.n,{"class":i.value,"style":c.style},{"default":function _default(){return n.default&&n.default()}})]}})}}}),f=Object(u.k)({"name":"ExampleItem","setup":function setup(t,e){var n=e.slots,c=e.attrs;return function(){return Object(u.n)(a.n,Object(u.o)(c,{"class":"example-item"}),{"default":function _default(){return n.default&&n.default()}})}}})},"144":function(t,e,n){var c=n(21),u=n(145);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[t.i,u,""]]);var i={"insert":"head","singleton":!1},a=(c(u,i),u.locals?u.locals:{});t.exports=a},"145":function(t,e,n){(e=n(22)(!1)).push([t.i,'.doc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem;\n}\n.doc-header__title {\n  position: relative;\n  height: 1.92rem;\n  color: #333;\n  font-size: 0.85333rem;\n  font-weight: bold;\n}\n.doc-header__title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 2.56rem;\n  height: 2PX;\n  border-radius: 1PX;\n  background-color: #6190E8;\n}\n\n.btn-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}',""]),t.exports=e},"162":function(t,e,n){var c=n(21),u=n(163);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[t.i,u,""]]);var i={"insert":"head","singleton":!1},a=(c(u,i),u.locals?u.locals:{});t.exports=a},"163":function(t,e,n){(e=n(22)(!1)).push([t.i,".my-button.at-button {\n  color: red;\n}\n\n.panel__content.demo-button .at-form {\n  padding-left: 0;\n}\n.panel__content .btn-demo-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}\n.panel__content .btn-item {\n  margin-bottom: 0.42667rem;\n}\n.panel__content .btn-item:last-child {\n  margin-bottom: 0;\n}\n.panel__content .btn-item .subitem {\n  display: inline-block;\n  margin-left: 0.512rem;\n}\n.panel__content .btn-item .subitem:first-child {\n  margin-left: 0;\n}",""]),t.exports=e},"284":function(t,e,n){"use strict";n.r(e);var c=n(10),u=Object(c.i)("主要操作按钮"),i=Object(c.i)("加载中"),a=Object(c.i)("不可操作"),r=Object(c.i)("次要操作"),l=Object(c.i)("加载中"),b=Object(c.i)("不可操作"),o=Object(c.i)("次次要操作"),j=Object(c.i)("加载中"),s=Object(c.i)("不可操作"),f=Object(c.i)("主操作按钮"),O=Object(c.i)("次操作按钮"),d=Object(c.i)("次次操作按钮"),m=Object(c.i)("不可操作"),_=Object(c.i)("按钮"),p=Object(c.i)("按钮"),y=Object(c.i)("按钮"),D=Object(c.i)("按钮"),g=Object(c.i)("按钮"),h=Object(c.i)("按钮"),v=Object(c.i)("按钮"),k=Object(c.i)("按钮"),w=Object(c.i)("按钮"),x=Object(c.i)("按钮"),z=Object(c.i)("按钮"),S=Object(c.i)("按钮"),T=Object(c.i)("分享"),C=Object(c.i)("登录授权"),E=Object(c.i)("联系 Taro UI 客服"),P=Object(c.i)("表格提交"),I=Object(c.i)("表格重置"),A=Object(c.i)("分享"),B=Object(c.i)("登录授权"),U=Object(c.i)("表格提交"),R=Object(c.i)("表格重置"),M=Object(c.i)("右侧是浮动操作按钮👉");var N=n(3),W=n(2),Y=n(29),G=n(142),J=n(143),L=(n(162),Object(c.k)({"name":"ButtonDemo","components":{"Page":J.c,"Panel":J.d,"ExampleItem":J.a,"AtButton":G.g,"AtFab":G.o,"AtForm":G.s},"setup":function setup(){var t=Object(W.i)({"isWEAPP":Y.default.getEnv()===Y.default.ENV_TYPE.WEAPP,"isALIPAY":Y.default.getEnv()===Y.default.ENV_TYPE.ALIPAY,"isWEB":Y.default.getEnv()===Y.default.ENV_TYPE.WEB});return Object(N.a)(Object(N.a)({},Object(W.o)(t)),{},{"handleButtonClick":function handleButtonClick(){var e=Array.prototype.slice.call(arguments).find((function(t){return"string"==typeof t}));t.isWEAPP&&Object(Y.showModal)({"content":e||"您点击了按钮！","showCancel":!1}),t.isWEB&&alert(e||"您点击了按钮！")},"onShareAppMessage":function onShareAppMessage(){return{"title":"Taro UI","path":"/pages/index/index","imageUrl":"http://storage.360buyimg.com/mtd/home/share1535013100318.jpg"}},"onContact":function onContact(t){Object(Y.showToast)({"title":"呼起客服回调: ".concat(t.detail)})},"onSubmit":function onSubmit(t){Object(Y.showModal)({"content":"submit event detail: ".concat(JSON.stringify(t.detail)),"showCancel":!1})},"onReset":function onReset(t){Object(Y.showModal)({"content":"reset event detail: ".concat(JSON.stringify(t.detail||"无数据")),"showCancel":!1})},"onGetUserInfo":function onGetUserInfo(t){Object(Y.showModal)({"content":"getUserInfo event detail: ".concat(JSON.stringify(t.detail))})},"onOpenSetting":function onOpenSetting(t){Object(Y.showToast)({"title":"onOpenSetting: ".concat(t.detail)})}})}}));L.render=function render(t,e,n,N,W,Y){var G=Object(c.w)("at-button"),J=Object(c.w)("taro-view"),L=Object(c.w)("panel"),V=Object(c.w)("at-form"),q=Object(c.w)("taro-text"),F=Object(c.w)("at-fab"),X=Object(c.w)("page");return Object(c.u)(),Object(c.e)(X,{"header-title":"Button 按钮"},{"default":Object(c.D)((function(){return[Object(c.j)(L,{"title":"主操作"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","onClick":t.handleButtonClick},{"default":Object(c.D)((function(){return[u]})),"_":1},8,["onClick"])]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":"","type":"primary","onClick":t.handleButtonClick},{"default":Object(c.D)((function(){return[i]})),"_":1},8,["onClick"])]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":"","type":"primary"},{"default":Object(c.D)((function(){return[a]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"次要操作"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"secondary"},{"default":Object(c.D)((function(){return[r]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":"","type":"secondary"},{"default":Object(c.D)((function(){return[l]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":"","type":"secondary"},{"default":Object(c.D)((function(){return[b]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"次次要操作"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,null,{"default":Object(c.D)((function(){return[o]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":""},{"default":Object(c.D)((function(){return[j]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":""},{"default":Object(c.D)((function(){return[s]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"通栏按钮"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"full":"","type":"primary"},{"default":Object(c.D)((function(){return[f]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"full":"","type":"secondary"},{"default":Object(c.D)((function(){return[O]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"full":""},{"default":Object(c.D)((function(){return[d]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"full":"","disabled":""},{"default":Object(c.D)((function(){return[m]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"小按钮"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","size":"small"},{"default":Object(c.D)((function(){return[_]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"secondary","size":"small"},{"default":Object(c.D)((function(){return[p]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"size":"small"},{"default":Object(c.D)((function(){return[y]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":"","type":"primary","size":"small"})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":"","type":"secondary","size":"small"})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"loading":"","size":"small"})]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":"","type":"primary","size":"small"},{"default":Object(c.D)((function(){return[D]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":"","type":"secondary","size":"small"},{"default":Object(c.D)((function(){return[g]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"disabled":"","size":"small"},{"default":Object(c.D)((function(){return[h]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"圆角按钮"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","type":"primary","size":"small"},{"default":Object(c.D)((function(){return[v]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","type":"secondary","size":"small"},{"default":Object(c.D)((function(){return[k]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","size":"small"},{"default":Object(c.D)((function(){return[w]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","loading":"","type":"primary","size":"small"})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","loading":"","type":"secondary","size":"small"})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","loading":"","size":"small"})]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","disabled":"","type":"primary","size":"small"},{"default":Object(c.D)((function(){return[x]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","disabled":"","type":"secondary","size":"small"},{"default":Object(c.D)((function(){return[z]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"subitem"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"circle":"","disabled":"","size":"small"},{"default":Object(c.D)((function(){return[S]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(L,{"title":"微信小程序 button 属性"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","openType":"share"},{"default":Object(c.D)((function(){return[T]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","openType":"getUserInfo","onGetUserInfo":t.onGetUserInfo},{"default":Object(c.D)((function(){return[C]})),"_":1},8,["onGetUserInfo"])]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"secondary","openType":"contact","onContact":t.onContact},{"default":Object(c.D)((function(){return[E]})),"_":1},8,["onContact"])]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(V,{"report-submit":"","onSubmit":t.onSubmit,"onReset":t.onReset},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","formType":"submit"},{"default":Object(c.D)((function(){return[P]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"secondary","formType":"reset"},{"default":Object(c.D)((function(){return[I]})),"_":1})]})),"_":1})]})),"_":1},8,["onSubmit","onReset"])]})),"_":1})]})),"_":1}),t.isALIPAY?(Object(c.u)(),Object(c.e)(L,{"key":0,"class":"demo-button","title":"支付宝小程序 button 属性"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","openType":"share"},{"default":Object(c.D)((function(){return[A]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","openType":"getAuthorize"},{"default":Object(c.D)((function(){return[B]})),"_":1})]})),"_":1}),Object(c.j)(V,{"onSubmit":t.onSubmit,"onReset":t.onReset},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"primary","formType":"submit"},{"default":Object(c.D)((function(){return[U]})),"_":1})]})),"_":1}),Object(c.j)(J,{"class":"btn-item"},{"default":Object(c.D)((function(){return[Object(c.j)(G,{"type":"secondary","formType":"reset"},{"default":Object(c.D)((function(){return[R]})),"_":1})]})),"_":1})]})),"_":1},8,["onSubmit","onReset"])]})),"_":1})):Object(c.f)("",!0),t.isALIPAY?Object(c.f)("",!0):(Object(c.u)(),Object(c.e)(L,{"key":1,"title":"浮动按钮"},{"default":Object(c.D)((function(){return[Object(c.j)(J,{"class":"at-article__p"},{"default":Object(c.D)((function(){return[M]})),"_":1}),Object(c.j)(J,{"class":"btn-demo-fab"},{"default":Object(c.D)((function(){return[Object(c.j)(F,{"size":"small","onClick":t.handleButtonClick},{"default":Object(c.D)((function(){return[Object(c.j)(q,{"class":"at-fab__icon at-icon at-icon-menu"})]})),"_":1},8,["onClick"])]})),"_":1})]})),"_":1}))]})),"_":1})};e.default=L}}]);