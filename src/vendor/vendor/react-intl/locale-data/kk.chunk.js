webpackJsonppanneau([199],{542:function(e,t,o){function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,i;!function(a,u){"object"==r(t)&&"undefined"!=typeof e?e.exports=u():(n=u,void 0!==(i="function"===typeof n?n.call(t,o,t,e):n)&&(e.exports=i))}(0,function(){"use strict";return[{locale:"kk",pluralRuleFunction:function(e,t){var o=String(e).split("."),r=Number(o[0])==e,n=r&&o[0].slice(-1);return t?6==n||9==n||r&&0==n&&0!=e?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"\u0436\u044b\u043b",relative:{0:"\u0431\u0438\u044b\u043b\u0493\u044b \u0436\u044b\u043b",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0436\u044b\u043b","-1":"\u0431\u044b\u043b\u0442\u044b\u0440\u0493\u044b \u0436\u044b\u043b"},relativeTime:{future:{one:"{0} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d"}}},month:{displayName:"\u0430\u0439",relative:{0:"\u043e\u0441\u044b \u0430\u0439",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0430\u0439","-1":"\u04e9\u0442\u043a\u0435\u043d \u0430\u0439"},relativeTime:{future:{one:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d"}}},day:{displayName:"\u043a\u04af\u043d",relative:{0:"\u0431\u04af\u0433\u0456\u043d",1:"\u0435\u0440\u0442\u0435\u04a3",2:"\u0431\u04af\u0440\u0441\u0456\u0433\u04af\u043d\u0456","-2":"\u0430\u043b\u0434\u044b\u04a3\u0433\u04af\u043d\u0456","-1":"\u043a\u0435\u0448\u0435"},relativeTime:{future:{one:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d"}}},hour:{displayName:"\u0441\u0430\u0493\u0430\u0442",relative:{0:"\u043e\u0441\u044b \u0441\u0430\u0493\u0430\u0442"},relativeTime:{future:{one:"{0} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d"}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442",relative:{0:"\u043e\u0441\u044b \u043c\u0438\u043d\u0443\u0442"},relativeTime:{future:{one:"{0} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434",relative:{0:"\u049b\u0430\u0437\u0456\u0440"},relativeTime:{future:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d"}}}}}]})}});