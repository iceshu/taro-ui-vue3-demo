(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"128":function(e,t,o){"use strict";o.r(t),o.d(t,"taro_progress_core",(function(){return s}));var r=o(23),s=function(){function Index(e){Object(r.g)(this,e),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return Index.prototype.render=function(){var e=this,t=e.percent,o=e.showInfo,s=e.borderRadius,i=e.fontSize,n=e.strokeWidth,c=e.activeColor,a=t>100?100:t<0?0:t,d={"height":n+"px","backgroundColor":e.backgroundColor},u=e.active?"width 1s ease-in-out":"none",p={"width":a+"%","transition":u,"WebkitTransition":u,"backgroundColor":c,"borderRadius":s?s+"px":"0px"};return Object(r.f)(r.a,{"class":"weui-progress"},Object(r.f)("div",{"class":"weui-progress__bar","style":d},Object(r.f)("div",{"class":"weui-progress__inner-bar","style":p})),o&&Object(r.f)("div",{"class":"weui-progress__opr","style":{"font-size":i+"px"}},Object(r.f)("span",null,a,"%")))},Index}()}}]);