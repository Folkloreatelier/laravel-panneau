webpackJsonppanneau([75],{196:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(800),l=r(u),d=a(0),n=r(d),o=a(7),s=r(o),f=a(12),i=r(f),c=function(e,t,a,r,u,l){(0,i.default)(!a||r>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var d=Object.keys(t).map(parseFloat);if(a)for(var n=u;n<=l;n+=r)d.indexOf(n)>=0||d.push(n);return d},p=function(e){var t=e.prefixCls,a=e.vertical,r=e.marks,u=e.dots,d=e.step,o=e.included,f=e.lowerBound,i=e.upperBound,p=e.max,m=e.min,v=e.dotStyle,b=e.activeDotStyle,k=p-m,y=c(0,r,u,d,m,p).map(function(e){var r,u=Math.abs(e-m)/k*100+"%",d=!o&&e===i||o&&e<=i&&e>=f,c=a?(0,l.default)({bottom:u},v):(0,l.default)({left:u},v);d&&(c=(0,l.default)({},c,b));var p=(0,s.default)((r={},r[t+"-dot"]=!0,r[t+"-dot-active"]=d,r));return n.default.createElement("span",{className:p,style:c,key:e})});return n.default.createElement("div",{className:t+"-step"},y)};t.default=p,e.exports=t.default}});
//# sourceMappingURL=common-Steps.chunk.js.map