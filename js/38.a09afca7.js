(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"143":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var a=n(1),c=n(10),l=n(2),o=n(30),u=n(25),r=n(142),i=n(29),s=(n(144),Object(c.k)({"name":"Page","props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(e,t){var n=t.slots,u=t.attrs,r=Object(l.j)(0),s=Object(c.d)((function(){return Object(a.a)({"page":!0},"".concat(u.class),Boolean(u.class))})),j=Object(c.d)((function(){var e=Object(i.getSystemInfoSync)().windowWidth;return i.default.getEnv()===i.default.ENV_TYPE.WEB?{"width":e>=1024?"75%":"100%","margin":"auto"}:null}));return Object(c.r)((function(){Object(i.createSelectorQuery)().select("#home").boundingClientRect((function(e){r.value=e.height+30})).exec()})),function(){return Object(c.n)(o.n,{"class":s.value,"style":j.value},{"default":function _default(){return[Object(c.n)(o.n,{"class":"doc-header"},{"default":function _default(){return[Object(c.n)(o.n,{"class":"doc-header__title"},{"default":function _default(){return e.headerTitle}})]}}),Object(c.n)(o.n,{"class":"doc-body","style":u.style},{"default":function _default(){return n.default&&n.default()}}),n.extra&&n.extra(),Object(c.n)(d,{"to":"back","btnIcon":"chevron-left","style":{"bottom":"".concat(r.value,"px")}}),Object(c.n)(d,{"id":"home","to":"home"})]}})}}})),d=Object(c.k)({"name":"NavBtn","props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(e,t){var n=t.attrs;function handleClick(){switch(e.to){case"home":i.default.navigateTo({"url":"/pages/index/index"});break;case"back":i.default.navigateBack({"delta":1})}}return function(){return Object(c.n)(o.n,{"class":"btn-fab","style":n.style},{"default":function _default(){return[Object(c.n)(r.o,{"size":e.size,"onClick":handleClick},{"default":function _default(){return[e.btnText&&Object(c.n)(u.a,null,{"default":function _default(){return e.btnText}}),e.btnIcon&&!e.btnText&&Object(c.n)(u.a,{"class":"at-fab__icon at-icon at-icon-".concat(e.btnIcon)})]}})]}})}}}),j=Object(c.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(e,t){var n=t.slots,a=t.attrs,l=Object(c.d)((function(){return{"panel__content":!0,"no-padding":e.noPadding}}));return function(){return Object(c.n)(o.n,{"class":"panel"},{"default":function _default(){return[e.title&&Object(c.n)(o.n,{"class":"panel__title"},{"default":function _default(){return e.title}}),n.controller&&n.controller(),Object(c.n)(o.n,{"class":l.value,"style":a.style},{"default":function _default(){return n.default&&n.default()}})]}})}}}),b=Object(c.k)({"name":"ExampleItem","setup":function setup(e,t){var n=t.slots,a=t.attrs;return function(){return Object(c.n)(o.n,Object(c.o)(a,{"class":"example-item"}),{"default":function _default(){return n.default&&n.default()}})}}})},"144":function(e,t,n){var a=n(21),c=n(145);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var l={"insert":"head","singleton":!1},o=(a(c,l),c.locals?c.locals:{});e.exports=o},"145":function(e,t,n){(t=n(22)(!1)).push([e.i,'.doc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem;\n}\n.doc-header__title {\n  position: relative;\n  height: 1.92rem;\n  color: #333;\n  font-size: 0.85333rem;\n  font-weight: bold;\n}\n.doc-header__title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  width: 2.56rem;\n  height: 2PX;\n  border-radius: 1PX;\n  background-color: #6190E8;\n}\n\n.btn-fab {\n  position: fixed;\n  right: 0.68267rem;\n  bottom: 0.68267rem;\n  z-index: 1100;\n}',""]),e.exports=t},"250":function(e,t,n){var a=n(21),c=n(251);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var l={"insert":"head","singleton":!1},o=(a(c,l),c.locals?c.locals:{});e.exports=o},"251":function(e,t,n){(t=n(22)(!1)).push([e.i,".example-item__desc {\n  margin-top: 0.256rem;\n  margin-bottom: 0.256rem;\n  color: #333;\n  font-size: 0.512rem;\n}\n\n.at-switch__title {\n  font-size: 0.512rem;\n  color: red;\n}",""]),e.exports=t},"308":function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(0),l=Object(a.i)("bench"),o=Object(a.i)("viewport"),u=Object(a.i)("* 可视区域外渲染的列表行数"),r=Object(a.i)("* 可视区域渲染的列表行数"),i=Object(a.i)("height"),s=Object(a.i)("* 长列表组件的高度, 用作 css 样式值"),d=Object(a.i)("itemHeight"),j=Object(a.i)("* 显示列表单项的高度，单位为 px"),b=Object(a.i)("items.length"),h=Object(a.i)("* 列表长度"),f=Object(a.i)(" 初始 scrollIntoItem 索引设置: 10 "),O=Object(a.i)("左滑看看");n(250);var m=n(2),g=n(142),p=n(143),_=n(29),v=Object(a.k)({"name":"VirtualScrollDemo","components":{"AtFab":g.o,"AtFlex":g.p,"AtCard":g.i,"AtButton":g.g,"AtSlider":g.Q,"AtDivider":g.m,"AtSwitch":g.T,"AtFlexItem":g.q,"AtListItem":g.A,"AtLoadMore":g.B,"AtInputNumber":g.y,"AtVirtualScroll":g.bb,"AtSwipeAction":g.S,"AtSearchBar":g.O,"Page":p.c,"Panel":p.d,"ExampleItem":p.a},"setup":function setup(){var e=Object(m.j)(5),t=Object(m.j)(5),n=Object(m.j)(20),c=Object(m.j)(80),l=Object(m.j)(300),o=Object(m.j)(10),u=Object(m.j)(void 0),r=Object(m.j)(!0),i=Object(m.j)(!0),s=Object(m.j)({"status":"loading","show":!1}),d=Object(m.j)(["#2196F3","#90CAF9","#64B5F6","#42A5F5","#1E88E5","#1976D2","#1565C0","#0D47A1","#82B1FF","#448AFF","#2979FF","#2962FF"]),j=Object(m.j)(["Oliver","Jake","Noah","James","Jack","Connor","Liam","John","Harry","Callum","Mason","Robert","Jacob","Jacob","Jacob","Michael","Charlie","Kyle","William","William","Thomas","Joe","Ethan","David","George","Reece","Michael","Richard","Oscar","Rhys","Alexander","Joseph","James","Charlie","James","Charles","William","Damian","Daniel","Thomas","Amelia","Margaret","Emma","Mary","Olivia","Samantha","Olivia","Patricia","Isla","Bethany"]),b=Object(m.j)(["Smith","Anderson","Clark","Wright","Mitchell","Johnson","Thomas","Rodriguez","Lopez","Perez","Williams","Jackson","Lewis","Hill","Roberts","Jones","White","Lee","Scott","Turner","Brown","Harris","Walker","Green","Phillips","Davis","Martin","Hall","Adams","Campbell","Miller","Thompson","Allen","Baker","Parker","Wilson","Garcia","Young","Gonzalez","Evans","Moore","Martinez","Hernandez","Nelson","Edwards","Taylor","Robinson","King","Carter","Collins"]),h=Object(m.j)([{"text":"删除","style":{"backgroundColor":"#E93B3D"}},{"text":"查看详情","style":{"backgroundColor":"#3ba1e9"}}]),f=Object(a.d)((function(){var e=j.value.length,t=b.value.length,a=d.value.length;return Array.from({"length":n.value},(function(){var n=j.value[genRandomIndex(e)],c=b.value[genRandomIndex(t)];return{"color":d.value[genRandomIndex(a)],"fullName":"".concat(n," ").concat(c),"initials":"".concat(n[0]," ").concat(c[0])}}))}));function genRandomIndex(e){return Math.ceil(Math.random()*(e-1))}return{"loadMore":s,"reachTopOn":r,"reachBottomOn":i,"searchbarValue":u,"toItem":o,"OPTIONS":h,"benched":e,"viewportRows":t,"length":n,"height":l,"itemHeight":c,"directoryItems":f,"handleClick":function handleClick(e,t,a){0===t?Object(_.showModal)({"title":"提示","content":"是否要删除第".concat(a+1,"条数据？"),"showCancel":!0,"success":function success(e){e.confirm&&(n.value-=1)}}):1===t&&Object(_.showModal)({"title":"详情","content":"Data: ".concat(JSON.stringify(f.value[a]),", Index: ").concat(a+1),"showCancel":!1})},"handleBenchChange":function handleBenchChange(t){e.value=t},"handleLengthChange":function handleLengthChange(e){n.value=e},"handleHeightChange":function handleHeightChange(e){l.value=e},"handleItemHeightChange":function handleItemHeightChange(e){c.value=e},"handleReachTop":function handleReachTop(){r.value&&Object(_.showToast)({"title":"刷新数据中...","icon":"loading","duration":genRandomIndex(3e3),"success":function success(e){var t=genRandomIndex(d.value.length);j.value.push(j.value[t]),b.value.push(b.value[t]),n.value=20}})},"handleReachBottom":function handleReachBottom(){s.value.show=!0,i.value?(s.value.status="loading",Object(_.showToast)({"title":"reachBottom 加载数据","icon":"loading","duration":genRandomIndex(3e3),"success":function success(e){setTimeout((function(){n.value+=10,s.value.show=!1}),3e3)}})):s.value.status="noMore"},"handleChange":function handleChange(e){u.value=e},"handleActionClick":function handleActionClick(){o.value=u.value||0},"handleViewportChange":function handleViewportChange(e){t.value=e},"handleReachToOn":function handleReachToOn(e){r.value=e},"handleReachBottomOn":function handleReachBottomOn(e){i.value=e}}}});v.render=function render(e,t,n,m,g,p){var _=Object(a.w)("taro-view"),v=Object(a.w)("at-flex-item"),w=Object(a.w)("at-flex"),x=Object(a.w)("at-input-number"),C=Object(a.w)("example-item"),D=Object(a.w)("at-slider"),y=Object(a.w)("at-switch"),k=Object(a.w)("at-card"),R=Object(a.w)("at-search-bar"),I=Object(a.w)("at-fab"),A=Object(a.w)("at-swipe-action"),T=Object(a.w)("at-load-more"),B=Object(a.w)("at-virtual-scroll"),S=Object(a.w)("panel"),M=Object(a.w)("page");return Object(a.u)(),Object(a.e)(M,{"class":"virtual-scroll-page","header-title":"VirtualScroll 虚拟列表"},{"default":Object(a.D)((function(){return[Object(a.j)(S,{"title":"功能展示"},{"controller":Object(a.D)((function(){return[Object(a.j)(k,{"style":{"margin":"15px"},"title":"参数控制"},{"default":Object(a.D)((function(){return[Object(a.j)(C,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,{"justify":"around"},{"default":Object(a.D)((function(){return[Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc","style":{"color":"red"}},{"default":Object(a.D)((function(){return[l]})),"_":1})]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc","style":{"color":"red"}},{"default":Object(a.D)((function(){return[o]})),"_":1})]})),"_":1})]})),"_":1}),Object(a.j)(w,{"justify":"around"},{"default":Object(a.D)((function(){return[Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(x,{"min":0,"max":10,"step":1,"value":e.benched,"onChange":e.handleBenchChange},null,8,["value","onChange"])]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(x,{"min":1,"max":10,"step":1,"value":e.viewportRows,"onChange":e.handleViewportChange},null,8,["value","onChange"])]})),"_":1})]})),"_":1}),Object(a.j)(w,{"justify":"around"},{"default":Object(a.D)((function(){return[Object(a.j)(v,{"is-wrap":""},{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[u]})),"_":1})]})),"_":1}),Object(a.j)(v,{"is-wrap":""},{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[r]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1}),Object(a.j)(C,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,null,{"default":Object(a.D)((function(){return[Object(a.j)(v,{"size":3,"style":{"color":"red"}},{"default":Object(a.D)((function(){return[i]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(D,{"showValue":"","min":200,"max":500,"step":10,"value":e.height,"onChange":e.handleHeightChange},null,8,["value","onChange"])]})),"_":1})]})),"_":1}),Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[s]})),"_":1})]})),"_":1}),Object(a.j)(C,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,null,{"default":Object(a.D)((function(){return[Object(a.j)(v,{"size":3,"style":{"color":"red"}},{"default":Object(a.D)((function(){return[d]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(D,{"showValue":"","min":48,"max":128,"step":1,"value":e.itemHeight,"onChange":e.handleItemHeightChange},null,8,["value","onChange"])]})),"_":1})]})),"_":1}),Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[j]})),"_":1})]})),"_":1}),Object(a.j)(C,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,null,{"default":Object(a.D)((function(){return[Object(a.j)(v,{"size":3,"style":{"color":"red"}},{"default":Object(a.D)((function(){return[b]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(D,{"showValue":"","min":1,"max":15e4,"step":1,"value":e.length,"onChange":e.handleLengthChange},null,8,["value","onChange"])]})),"_":1})]})),"_":1}),Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[h]})),"_":1})]})),"_":1}),Object(a.j)(C,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,null,{"default":Object(a.D)((function(){return[Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(y,{"border":"","style":{"margin-left":"0px"},"title":"onReachTop","checked":e.reachTopOn,"onChange":e.handleReachToOn},null,8,["checked","onChange"])]})),"_":1}),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(y,{"border":"","style":{"margin-left":"0px"},"title":"onReachBottom","checked":e.reachBottomOn,"onChange":e.handleReachBottomOn},null,8,["checked","onChange"])]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"default":Object(a.D)((function(){return[Object(a.j)(k,{"style":{"margin":"5px"},"title":"列表展示"},{"default":Object(a.D)((function(){return[Object(a.j)(B,{"bench":e.benched,"viewport":e.viewportRows,"height":e.height,"items":e.directoryItems,"scroll-into-item":e.toItem,"item-height":e.itemHeight,"reach-bottom-threshold":5,"onReachTop":e.handleReachTop,"onReachBottom":e.handleReachBottom},{"header":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc","style":{"text-align":"center"}},{"default":Object(a.D)((function(){return[f]})),"_":1}),Object(a.j)(R,{"action-name":"跳转","placeholder":"header 插槽: 输入需跳转的列表索引","input-type":"number","value":e.searchbarValue,"onChange":e.handleChange,"onActionClick":e.handleActionClick},null,8,["value","onChange","onActionClick"])]})),"default":Object(a.D)((function(t){var n=t.index,l=t.item;return[Object(a.j)(A,{"auto-close":"","key":n,"options":e.OPTIONS,"style":{"marginBottom":"5px"},"onClick":function onClick(t,a){return e.handleClick(t,a,n)}},{"default":Object(a.D)((function(){return[Object(a.j)(_,null,{"default":Object(a.D)((function(){return[Object(a.j)(w,{"style":{"border":"solid 1px gray"}},{"default":Object(a.D)((function(){return[Object(a.j)(v,{"size":2},{"default":Object(a.D)((function(){return[Object(a.j)(I,{"size":"small","style":{"backgroundColor":l.color,"boxShadow":"unset"}},{"default":Object(a.D)((function(){return[Object(a.i)(Object(c.I)(l.initials),1)]})),"_":2},1032,["style"])]})),"_":2},1024),Object(a.j)(v,null,{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc","style":{"font-weight":"bolder"}},{"default":Object(a.D)((function(){return[Object(a.i)(Object(c.I)(l.fullName),1)]})),"_":2},1024),Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[Object(a.i)("第 "+Object(c.I)(n+1)+" 条/共 "+Object(c.I)(e.length)+" 条",1)]})),"_":2},1024)]})),"_":2},1024),Object(a.j)(v,{"size":3},{"default":Object(a.D)((function(){return[Object(a.j)(_,{"class":"example-item__desc"},{"default":Object(a.D)((function(){return[O]})),"_":1})]})),"_":1})]})),"_":2},1024)]})),"_":2},1024)]})),"_":2},1032,["options","onClick"])]})),"footer":Object(a.D)((function(){return[e.loadMore.show?(Object(a.u)(),Object(a.e)(T,{"key":0,"status":e.loadMore.status},null,8,["status"])):Object(a.f)("",!0)]})),"_":1},8,["bench","viewport","height","items","scroll-into-item","item-height","onReachTop","onReachBottom"])]})),"_":1})]})),"_":1})]})),"_":1})};t.default=v}}]);