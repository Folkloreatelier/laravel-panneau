flklrJsonp([76],{347:function(e,t,a){"use strict";t.__esModule=!0;var l=_interopRequireDefault(a(8)),r=_interopRequireDefault(a(0)),u=_interopRequireDefault(a(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.className,a=e.vertical,n=e.marks,i=e.included,o=e.upperBound,f=e.lowerBound,s=e.max,d=e.min,c=Object.keys(n),m=c.length,p=.9*(m>1?100/(m-1):100),_=s-d,v=c.map(parseFloat).sort(function(e,t){return e-t}).map(function(e){var s,c=n[e],m="object"==typeof c&&!r.default.isValidElement(c),v=m?c.label:c;if(!v)return null;var y=!i&&e===o||i&&e<=o&&e>=f,b=(0,u.default)(((s={})[t+"-text"]=!0,s[t+"-text-active"]=y,s)),k=a?{marginBottom:"-50%",bottom:(e-d)/_*100+"%"}:{width:p+"%",marginLeft:-p/2+"%",left:(e-d)/_*100+"%"},q=m?(0,l.default)({},k,c.style):k;return r.default.createElement("span",{className:b,style:q,key:e},v)});return r.default.createElement("div",{className:t},v)},e.exports=t.default}});