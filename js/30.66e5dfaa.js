(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"143":function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return b}));var l=n(1),c=n(10),a=n(2),u=n(30),i=n(25),o=n(142),r=n(29),d=(n(144),Object(c.k)({"name":"Page","props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(t,e){var n=e.slots,i=e.attrs,o=Object(a.j)(0),d=Object(c.d)((function(){return Object(l.a)({"page":!0},"".concat(i.class),Boolean(i.class))})),s=Object(c.d)((function(){var t=Object(r.getSystemInfoSync)().windowWidth;return r.default.getEnv()===r.default.ENV_TYPE.WEB?{"width":t>=1024?"75%":"100%","margin":"auto"}:null}));return Object(c.r)((function(){Object(r.createSelectorQuery)().select("#home").boundingClientRect((function(t){o.value=t.height+30})).exec()})),function(){return Object(c.n)(u.n,{"class":d.value,"style":s.value},{"default":function _default(){return[Object(c.n)(u.n,{"class":"doc-header"},{"default":function _default(){return[Object(c.n)(u.n,{"class":"doc-header__title"},{"default":function _default(){return t.headerTitle}})]}}),Object(c.n)(u.n,{"class":"doc-body","style":i.style},{"default":function _default(){return n.default&&n.default()}}),n.extra&&n.extra(),Object(c.n)(f,{"to":"back","btnIcon":"chevron-left","style":{"bottom":"".concat(o.value,"px")}}),Object(c.n)(f,{"id":"home","to":"home"})]}})}}})),f=Object(c.k)({"name":"NavBtn","props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(t,e){var n=e.attrs;function handleClick(){switch(t.to){case"home":r.default.navigateTo({"url":"/pages/index/index"});break;case"back":r.default.navigateBack({"delta":1})}}return function(){return Object(c.n)(u.n,{"class":"btn-fab","style":n.style},{"default":function _default(){return[Object(c.n)(o.o,{"size":t.size,"onClick":handleClick},{"default":function _default(){return[t.btnText&&Object(c.n)(i.a,null,{"default":function _default(){return t.btnText}}),t.btnIcon&&!t.btnText&&Object(c.n)(i.a,{"class":"at-fab__icon at-icon at-icon-".concat(t.btnIcon)})]}})]}})}}}),s=Object(c.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(t,e){var n=e.slots,l=e.attrs,a=Object(c.d)((function(){return{"panel__content":!0,"no-padding":t.noPadding}}));return function(){return Object(c.n)(u.n,{"class":"panel"},{"default":function _default(){return[t.title&&Object(c.n)(u.n,{"class":"panel__title"},{"default":function _default(){return t.title}}),n.controller&&n.controller(),Object(c.n)(u.n,{"class":a.value,"style":l.style},{"default":function _default(){return n.default&&n.default()}})]}})}}}),b=Object(c.k)({"name":"ExampleItem","setup":function setup(t,e){var n=e.slots,l=e.attrs;return function(){return Object(c.n)(u.n,Object(c.o)(l,{"class":"example-item"}),{"default":function _default(){return n.default&&n.default()}})}}})},"144":function(t,e,n){var l=n(21),c=n(145);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[t.i,c,""]]);var a={"insert":"head","singleton":!1},u=(l(c,a),c.locals?c.locals:{});t.exports=u},"145":function(t,e,n){(e=n(22)(!1)).push([t.i,'.doc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem;\n}\n.doc-header__title {\n  position: relative;\n  height: 1.92rem;\n  color: #333;\n  font-size: 0.85333rem;\n  font-weight: bold;\n}\n.doc-header__title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 2.56rem;\n  height: 2PX;\n  border-radius: 1PX;\n  background-color: #6190E8;\n}\n\n.btn-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}',""]),t.exports=e},"178":function(t,e,n){var l=n(21),c=n(179);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[t.i,c,""]]);var a={"insert":"head","singleton":!1},u=(l(c,a),c.locals?c.locals:{});t.exports=u},"179":function(t,e,n){(e=n(22)(!1)).push([t.i,"",""]),t.exports=e},"258":function(t,e,n){"use strict";n.r(e);var l=n(10),c=n(142),a=n(143);n(178);e.default=Object(l.k)({"name":"TimelineDemo","setup":function setup(){return function(){return Object(l.n)(a.c,{"class":"page","headerTitle":"Timeline 时间轴"},{"default":function _default(){return[Object(l.n)(a.d,{"title":"基础用法","class":"panel__content"},{"default":function _default(){return[Object(l.n)(a.a,null,{"default":function _default(){return[Object(l.n)(c.Z,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})]}})]}}),Object(l.n)(a.d,{"title":"自定义颜色","class":"panel__content"},{"default":function _default(){return[Object(l.n)(a.a,null,{"default":function _default(){return[Object(l.n)(c.Z,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})]}})]}}),Object(l.n)(a.d,{"title":"自定义图标","class":"panel__content"},{"default":function _default(){return[Object(l.n)(a.a,null,{"default":function _default(){return[Object(l.n)(c.Z,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})]}})]}}),Object(l.n)(a.d,{"title":"幽灵节点","class":"panel__content"},{"default":function _default(){return[Object(l.n)(a.a,null,{"default":function _default(){return[Object(l.n)(c.Z,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})]}})]}}),Object(l.n)(a.d,{"title":"丰富内容","class":"panel__content"},{"default":function _default(){return[Object(l.n)(a.a,null,{"default":function _default(){return[Object(l.n)(c.Z,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]})]}})]}})]}})}}})}}]);