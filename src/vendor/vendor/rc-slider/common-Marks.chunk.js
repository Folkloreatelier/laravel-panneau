webpackJsonppanneau([298],{432:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(407),u=n(l),r=a(0),o=n(r),s=a(5),c=n(s),d=function(e){var t=e.className,a=e.vertical,n=e.marks,l=e.included,r=e.upperBound,s=e.lowerBound,d=e.max,f=e.min,i=Object.keys(n),m=i.length,p=m>1?100/(m-1):100,v=.9*p,b=d-f,y=i.map(parseFloat).sort(function(e,t){return e-t}).map(function(e){var d,i=n[e],m="object"===typeof i&&!o.default.isValidElement(i),p=m?i.label:i;if(!p)return null;var y=!l&&e===r||l&&e<=r&&e>=s,k=(0,c.default)((d={},d[t+"-text"]=!0,d[t+"-text-active"]=y,d)),x={marginBottom:"-50%",bottom:(e-f)/b*100+"%"},_={width:v+"%",marginLeft:-v/2+"%",left:(e-f)/b*100+"%"},g=a?x:_,w=m?(0,u.default)({},g,i.style):g;return o.default.createElement("span",{className:k,style:w,key:e},p)});return o.default.createElement("div",{className:t},y)};t.default=d,e.exports=t.default}});