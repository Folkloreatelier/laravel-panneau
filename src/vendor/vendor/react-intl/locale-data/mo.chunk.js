webpackJsonppanneau([157],{568:function(e,t,o){function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i,n;!function(a,u){"object"==r(t)&&"undefined"!=typeof e?e.exports=u():(i=u,void 0!==(n="function"===typeof i?i.call(t,o,t,e):i)&&(e.exports=n))}(0,function(){"use strict";return[{locale:"mo",pluralRuleFunction:function(e,t){var o=String(e).split("."),r=!o[1],i=Number(o[0])==e&&o[0].slice(-2);return t?1==e?"one":"other":1==e&&r?"one":!r||0==e||1!=e&&i>=1&&i<=19?"few":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}]})}});