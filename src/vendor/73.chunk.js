webpackJsonppanneau([73],{654:function(e,t,o){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,a;!function(i,f){"object"==n(t)&&"undefined"!=typeof e?e.exports=f():(r=f,void 0!==(a="function"===typeof r?r.call(t,o,t,e):r)&&(e.exports=a))}(0,function(){"use strict";return[{locale:"uk",pluralRuleFunction:function(e,t){var o=String(e).split("."),n=o[0],r=!o[1],a=Number(o[0])==e,i=a&&o[0].slice(-1),f=a&&o[0].slice(-2),l=n.slice(-1),u=n.slice(-2);return t?3==i&&13!=f?"few":"other":r&&1==l&&11!=u?"one":r&&l>=2&&l<=4&&(u<12||u>14)?"few":r&&0==l||r&&l>=5&&l<=9||r&&u>=11&&u<=14?"many":"other"},fields:{year:{displayName:"\u0440\u0456\u043a",relative:{0:"\u0446\u044c\u043e\u0433\u043e \u0440\u043e\u043a\u0443",1:"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0440\u043e\u043a\u0443","-1":"\u0442\u043e\u0440\u0456\u043a"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0440\u0456\u043a",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0440\u043e\u043a\u0438",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0440\u043e\u043a\u0456\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0440\u043e\u043a\u0443"},past:{one:"{0} \u0440\u0456\u043a \u0442\u043e\u043c\u0443",few:"{0} \u0440\u043e\u043a\u0438 \u0442\u043e\u043c\u0443",many:"{0} \u0440\u043e\u043a\u0456\u0432 \u0442\u043e\u043c\u0443",other:"{0} \u0440\u043e\u043a\u0443 \u0442\u043e\u043c\u0443"}}},month:{displayName:"\u043c\u0456\u0441\u044f\u0446\u044c",relative:{0:"\u0446\u044c\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f",1:"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f","-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0456\u0441\u044f\u0446\u044c",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0456\u0441\u044f\u0446\u0456",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0456\u0441\u044f\u0446\u0456\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043c\u0456\u0441\u044f\u0446\u044f"},past:{one:"{0} \u043c\u0456\u0441\u044f\u0446\u044c \u0442\u043e\u043c\u0443",few:"{0} \u043c\u0456\u0441\u044f\u0446\u0456 \u0442\u043e\u043c\u0443",many:"{0} \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0442\u043e\u043c\u0443",other:"{0} \u043c\u0456\u0441\u044f\u0446\u044f \u0442\u043e\u043c\u0443"}}},day:{displayName:"\u0434\u0435\u043d\u044c",relative:{0:"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456",1:"\u0437\u0430\u0432\u0442\u0440\u0430",2:"\u043f\u0456\u0441\u043b\u044f\u0437\u0430\u0432\u0442\u0440\u0430","-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u043e\u0440\u0430","-1":"\u0443\u0447\u043e\u0440\u0430"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u0435\u043d\u044c",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u0456",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u0456\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043d\u044f"},past:{one:"{0} \u0434\u0435\u043d\u044c \u0442\u043e\u043c\u0443",few:"{0} \u0434\u043d\u0456 \u0442\u043e\u043c\u0443",many:"{0} \u0434\u043d\u0456\u0432 \u0442\u043e\u043c\u0443",other:"{0} \u0434\u043d\u044f \u0442\u043e\u043c\u0443"}}},hour:{displayName:"\u0433\u043e\u0434\u0438\u043d\u0430",relative:{0:"\u0446\u0456\u0454\u0457 \u0433\u043e\u0434\u0438\u043d\u0438"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0438\u043d\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0438\u043d\u0438",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0438\u043d",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043e\u0434\u0438\u043d\u0438"},past:{one:"{0} \u0433\u043e\u0434\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",few:"{0} \u0433\u043e\u0434\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",many:"{0} \u0433\u043e\u0434\u0438\u043d \u0442\u043e\u043c\u0443",other:"{0} \u0433\u043e\u0434\u0438\u043d\u0438 \u0442\u043e\u043c\u0443"}}},minute:{displayName:"\u0445\u0432\u0438\u043b\u0438\u043d\u0430",relative:{0:"\u0446\u0456\u0454\u0457 \u0445\u0432\u0438\u043b\u0438\u043d\u0438"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0445\u0432\u0438\u043b\u0438\u043d",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0445\u0432\u0438\u043b\u0438\u043d\u0438"},past:{one:"{0} \u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",few:"{0} \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",many:"{0} \u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443",other:"{0} \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434\u0430",relative:{0:"\u0437\u0430\u0440\u0430\u0437"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},past:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u043e\u043c\u0443",few:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0442\u043e\u043c\u0443",many:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u043e\u043c\u0443",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0442\u043e\u043c\u0443"}}}}}]})}});