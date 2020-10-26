(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"143":function(n,t,e){"use strict";e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return s})),e.d(t,"b",(function(){return f})),e.d(t,"a",(function(){return b}));var a=e(1),u=e(10),o=e(2),c=e(30),l=e(25),i=e(142),r=e(29),d=(e(144),Object(u.k)({"name":"Page","props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(n,t){var e=t.slots,l=t.attrs,i=Object(o.j)(0),d=Object(u.d)((function(){return Object(a.a)({"page":!0},"".concat(l.class),Boolean(l.class))})),s=Object(u.d)((function(){var n=Object(r.getSystemInfoSync)().windowWidth;return r.default.getEnv()===r.default.ENV_TYPE.WEB?{"width":n>=1024?"75%":"100%","margin":"auto"}:null}));return Object(u.r)((function(){Object(r.createSelectorQuery)().select("#home").boundingClientRect((function(n){i.value=n.height+30})).exec()})),function(){return Object(u.n)(c.n,{"class":d.value,"style":s.value},{"default":function _default(){return[Object(u.n)(c.n,{"class":"doc-header"},{"default":function _default(){return[Object(u.n)(c.n,{"class":"doc-header__title"},{"default":function _default(){return n.headerTitle}})]}}),Object(u.n)(c.n,{"class":"doc-body","style":l.style},{"default":function _default(){return e.default&&e.default()}}),e.extra&&e.extra(),Object(u.n)(f,{"to":"back","btnIcon":"chevron-left","style":{"bottom":"".concat(i.value,"px")}}),Object(u.n)(f,{"id":"home","to":"home"})]}})}}})),f=Object(u.k)({"name":"NavBtn","props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(n,t){var e=t.attrs;function handleClick(){switch(n.to){case"home":r.default.navigateTo({"url":"/pages/index/index"});break;case"back":r.default.navigateBack({"delta":1})}}return function(){return Object(u.n)(c.n,{"class":"btn-fab","style":e.style},{"default":function _default(){return[Object(u.n)(i.o,{"size":n.size,"onClick":handleClick},{"default":function _default(){return[n.btnText&&Object(u.n)(l.a,null,{"default":function _default(){return n.btnText}}),n.btnIcon&&!n.btnText&&Object(u.n)(l.a,{"class":"at-fab__icon at-icon at-icon-".concat(n.btnIcon)})]}})]}})}}}),s=Object(u.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(n,t){var e=t.slots,a=t.attrs,o=Object(u.d)((function(){return{"panel__content":!0,"no-padding":n.noPadding}}));return function(){return Object(u.n)(c.n,{"class":"panel"},{"default":function _default(){return[n.title&&Object(u.n)(c.n,{"class":"panel__title"},{"default":function _default(){return n.title}}),e.controller&&e.controller(),Object(u.n)(c.n,{"class":o.value,"style":a.style},{"default":function _default(){return e.default&&e.default()}})]}})}}}),b=Object(u.k)({"name":"ExampleItem","setup":function setup(n,t){var e=t.slots,a=t.attrs;return function(){return Object(u.n)(c.n,Object(u.o)(a,{"class":"example-item"}),{"default":function _default(){return e.default&&e.default()}})}}})},"144":function(n,t,e){var a=e(21),u=e(145);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[n.i,u,""]]);var o={"insert":"head","singleton":!1},c=(a(u,o),u.locals?u.locals:{});n.exports=c},"145":function(n,t,e){(t=e(22)(!1)).push([n.i,'.doc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem;\n}\n.doc-header__title {\n  position: relative;\n  height: 1.92rem;\n  color: #333;\n  font-size: 0.85333rem;\n  font-weight: bold;\n}\n.doc-header__title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 2.56rem;\n  height: 2PX;\n  border-radius: 1PX;\n  background-color: #6190E8;\n}\n\n.btn-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}',""]),n.exports=t},"242":function(n,t,e){var a=e(21),u=e(243);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[n.i,u,""]]);var o={"insert":"head","singleton":!1},c=(a(u,o),u.locals?u.locals:{});n.exports=c},"243":function(n,t,e){(t=e(22)(!1)).push([n.i,"",""]),n.exports=t},"275":function(n,t,e){"use strict";e.r(t);var a=e(10),u=e(2),o=e(142),c=e(30),l=e(29),i=e(143);e(242);t.default=Object(a.k)({"setup":function setup(){var n=this,t=Object(u.i)({"value1":"","value2":"","value3":"","value4":""});function _onChange(n,e){t[n]=e}function onActionClick(n){Object(l.showToast)({"title":"开始搜索: ".concat(t[n]),"icon":"success","duration":2e3})}return function(){return Object(a.n)(i.c,{"headerTitle":"SearchBar 搜索栏"},{"default":function _default(){return[Object(a.n)(i.d,{"title":"基础用法","noPadding":!0},{"default":function _default(){return[Object(a.n)(c.n,{"class":"component-item"},{"default":function _default(){return[Object(a.n)(o.O,{"value":t.value1,"onChange":function onChange(n){return _onChange("value1",n)},"onActionClick":onActionClick.bind(n,"value1")})]}})]}}),Object(a.n)(i.d,{"title":"自定义按钮文字和点击事件","noPadding":!0},{"default":function _default(){return[Object(a.n)(c.n,{"class":"component-item"},{"default":function _default(){return[Object(a.n)(o.O,{"actionName":"搜一下","value":t.value2,"onChange":function onChange(n){return _onChange("value2",n)},"onActionClick":onActionClick.bind(n,"value2")})]}})]}}),Object(a.n)(i.d,{"title":"始终显示按钮","noPadding":!0},{"default":function _default(){return[Object(a.n)(c.n,{"class":"component-item"},{"default":function _default(){return[Object(a.n)(o.O,{"placeholder":"请输入ISBN号","showActionButton":!0,"value":t.value3,"onChange":function onChange(n){return _onChange("value3",n)},"onActionClick":onActionClick.bind(n,"value3")})]}})]}}),Object(a.n)(i.d,{"title":"自定义输入框类型","noPadding":!0},{"default":function _default(){return[Object(a.n)(c.n,{"class":"component-item"},{"default":function _default(){return[Object(a.n)(o.O,{"placeholder":"请输入数字","inputType":"number","value":t.value4,"onChange":function onChange(n){return _onChange("value4",n)},"onActionClick":onActionClick.bind(n,"value4")})]}})]}})]}})}}})}}]);