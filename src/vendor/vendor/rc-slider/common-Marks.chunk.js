webpackJsonppanneau([76],{197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0;var l=n(800),r=o(l),u=n(0),f=o(u),i=n(7),c=o(i),s=function(e){var t=e.className,n=e.vertical,o=e.marks,l=e.included,u=e.upperBound,i=e.lowerBound,s=e.max,m=e.min,d=Object.keys(o),p=d.length,y=p>1?100/(p-1):100,b=.9*y,v=s-m,S=d.map(parseFloat).sort(function(e,t){return e-t}).map(function(e){var s,d=o[e],p="object"===("undefined"===typeof d?"undefined":a(d))&&!f.default.isValidElement(d),y=p?d.label:d;if(!y)return null;var S=!l&&e===u||l&&e<=u&&e>=i,k=(0,c.default)((s={},s[t+"-text"]=!0,s[t+"-text-active"]=S,s)),x={marginBottom:"-50%",bottom:(e-m)/v*100+"%"},_={width:b+"%",marginLeft:-b/2+"%",left:(e-m)/v*100+"%"},g=n?x:_,w=p?(0,r.default)({},g,d.style):g;return f.default.createElement("span",{className:k,style:w,key:e},y)});return f.default.createElement("div",{className:t},S)};t.default=s,e.exports=t.default}});
//# sourceMappingURL=common-Marks.chunk.js.map