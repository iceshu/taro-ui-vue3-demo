(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"143":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return b}));var u=n(1),a=n(10),l=n(2),c=n(30),r=n(25),o=n(142),f=n(29),i=(n(144),Object(a.k)({"name":"Page","props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(t,e){var n=e.slots,r=e.attrs,o=Object(l.j)(0),i=Object(a.d)((function(){return Object(u.a)({"page":!0},"".concat(r.class),Boolean(r.class))})),s=Object(a.d)((function(){var t=Object(f.getSystemInfoSync)().windowWidth;return f.default.getEnv()===f.default.ENV_TYPE.WEB?{"width":t>=1024?"75%":"100%","margin":"auto"}:null}));return Object(a.r)((function(){Object(f.createSelectorQuery)().select("#home").boundingClientRect((function(t){o.value=t.height+30})).exec()})),function(){return Object(a.n)(c.n,{"class":i.value,"style":s.value},{"default":function _default(){return[Object(a.n)(c.n,{"class":"doc-header"},{"default":function _default(){return[Object(a.n)(c.n,{"class":"doc-header__title"},{"default":function _default(){return t.headerTitle}})]}}),Object(a.n)(c.n,{"class":"doc-body","style":r.style},{"default":function _default(){return n.default&&n.default()}}),n.extra&&n.extra(),Object(a.n)(d,{"to":"back","btnIcon":"chevron-left","style":{"bottom":"".concat(o.value,"px")}}),Object(a.n)(d,{"id":"home","to":"home"})]}})}}})),d=Object(a.k)({"name":"NavBtn","props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(t,e){var n=e.attrs;function handleClick(){switch(t.to){case"home":f.default.navigateTo({"url":"/pages/index/index"});break;case"back":f.default.navigateBack({"delta":1})}}return function(){return Object(a.n)(c.n,{"class":"btn-fab","style":n.style},{"default":function _default(){return[Object(a.n)(o.o,{"size":t.size,"onClick":handleClick},{"default":function _default(){return[t.btnText&&Object(a.n)(r.a,null,{"default":function _default(){return t.btnText}}),t.btnIcon&&!t.btnText&&Object(a.n)(r.a,{"class":"at-fab__icon at-icon at-icon-".concat(t.btnIcon)})]}})]}})}}}),s=Object(a.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(t,e){var n=e.slots,u=e.attrs,l=Object(a.d)((function(){return{"panel__content":!0,"no-padding":t.noPadding}}));return function(){return Object(a.n)(c.n,{"class":"panel"},{"default":function _default(){return[t.title&&Object(a.n)(c.n,{"class":"panel__title"},{"default":function _default(){return t.title}}),n.controller&&n.controller(),Object(a.n)(c.n,{"class":l.value,"style":u.style},{"default":function _default(){return n.default&&n.default()}})]}})}}}),b=Object(a.k)({"name":"ExampleItem","setup":function setup(t,e){var n=e.slots,u=e.attrs;return function(){return Object(a.n)(c.n,Object(a.o)(u,{"class":"example-item"}),{"default":function _default(){return n.default&&n.default()}})}}})},"144":function(t,e,n){var u=n(21),a=n(145);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={"insert":"head","singleton":!1},c=(u(a,l),a.locals?a.locals:{});t.exports=c},"145":function(t,e,n){(e=n(22)(!1)).push([t.i,'.doc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem;\n}\n.doc-header__title {\n  position: relative;\n  height: 1.92rem;\n  color: #333;\n  font-size: 0.85333rem;\n  font-weight: bold;\n}\n.doc-header__title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 2.56rem;\n  height: 2PX;\n  border-radius: 1PX;\n  background-color: #6190E8;\n}\n\n.btn-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}',""]),t.exports=e},"168":function(t,e,n){var u=n(21),a=n(169);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={"insert":"head","singleton":!1},c=(u(a,l),a.locals?a.locals:{});t.exports=c},"169":function(t,e,n){(e=n(22)(!1)).push([t.i,".panel__content .bar-item {\n  margin-bottom: 0.42667rem;\n}\n.panel__content .bar-item:last-child {\n  margin-bottom: 0;\n}",""]),t.exports=e},"253":function(t,e,n){"use strict";n.r(e);var u=n(10),a=n(142),l=n(30),c=n(25),r=n(29),o=n(143);n(168);e.default=Object(u.k)({"name":"NoticebarDemo","setup":function setup(){var t=this,e="[单行] 这是 NoticeBar 通告栏。云对雨，雪对风，晚照退晴空。来鸿对去雁，宿鸟对鸣虫。",n="[多行] 这是 NoticeBar 通告栏。云对雨，雪对风，晚照退晴空。来鸿对去雁，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。";function onGotoMore(){r.default.getEnv()!==r.default.ENV_TYPE.WEB?Object(r.showModal)({"content":"点击了更多!","cancelText":"取消"}):alert("您点击了更多!")}return function(){return Object(u.n)(o.c,{"headerTitle":"NoticeBar 通告栏"},{"default":function _default(){return[Object(u.n)(o.d,{"title":"文字","class":"panel__content"},{"default":function _default(){return[Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"single":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,null,{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}})]}}),Object(u.n)(o.d,{"title":"跑马灯","class":"panel__content"},{"default":function _default(){return[Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"marquee":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0,"style":"white-space: nowrap;"},{"default":function _default(){return"[纯文字] 这是 NoticeBar 通告栏。云对雨，雪对风，晚照退晴空。来鸿对去雁，宿鸟对鸣虫。 [结束]"}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"marquee":!0,"icon":"volume-plus"},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0,"style":"white-space: nowrap;"},{"default":function _default(){return"[带icon] 这是 NoticeBar 通告栏。云对雨，雪对风，晚照退晴空。来鸿对去雁，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。 [结束]"}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"marquee":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0,"style":"white-space: nowrap;"},{"default":function _default(){return"[超长文本] 这是 NoticeBar 通告栏。云对雨，雪对风，晚照退晴空。来鸿对去雁，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客，一蓑烟雨，溪边晚钓之翁。沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。 [结束]"}})]}})]}})]}}),Object(u.n)(o.d,{"title":"图标","class":"panel__content"},{"default":function _default(){return[Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"icon":"volume-plus","single":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"icon":"volume-plus"},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}})]}}),Object(u.n)(o.d,{"title":"查看更多","class":"panel__content"},{"default":function _default(){return[Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"showMore":!0,"single":!0,"onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"showMore":!0,"single":!0,"icon":"volume-plus","onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"showMore":!0,"moreText":"更多内容","onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"showMore":!0,"moreText":"更多内容","icon":"volume-plus","onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}})]}}),Object(u.n)(o.d,{"title":"关闭按钮","class":"panel__content"},{"default":function _default(){return[Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0,"single":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0,"icon":"volume-plus","single":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0,"single":!0,"showMore":!0,"onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0,"single":!0,"showMore":!0,"icon":"volume-plus","onGotoMore":onGotoMore.bind(t)},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return e}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}}),Object(u.n)(l.n,{"class":"bar-item"},{"default":function _default(){return[Object(u.n)(a.I,{"close":!0,"icon":"volume-plus"},{"default":function _default(){return[Object(u.n)(c.a,{"user-select":!0},{"default":function _default(){return n}})]}})]}})]}})]}})}}})}}]);