webpackJsonppanneau([298],{471:function(e,t,o){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,a;!function(i,f){"object"==n(t)&&"undefined"!=typeof e?e.exports=f():(r=f,void 0!==(a="function"===typeof r?r.call(t,o,t,e):r)&&(e.exports=a))}(0,function(){"use strict";return[{locale:"be",pluralRuleFunction:function(e,t){var o=String(e).split("."),n=Number(o[0])==e,r=n&&o[0].slice(-1),a=n&&o[0].slice(-2);return t?2!=r&&3!=r||12==a||13==a?"other":"few":1==r&&11!=a?"one":r>=2&&r<=4&&(a<12||a>14)?"few":n&&0==r||r>=5&&r<=9||a>=11&&a<=14?"many":"other"},fields:{year:{displayName:"\u0433\u043e\u0434",relative:{0:"\u0443 \u0433\u044d\u0442\u044b\u043c \u0433\u043e\u0434\u0437\u0435",1:"\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0433\u043e\u0434\u0437\u0435","-1":"\u0443 \u043c\u0456\u043d\u0443\u043b\u044b\u043c \u0433\u043e\u0434\u0437\u0435"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u0433\u043e\u0434",few:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u044b",many:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u043e\u045e",other:"\u043f\u0440\u0430\u0437 {0} \u0433\u043e\u0434\u0430"},past:{one:"{0} \u0433\u043e\u0434 \u0442\u0430\u043c\u0443",few:"{0} \u0433\u0430\u0434\u044b \u0442\u0430\u043c\u0443",many:"{0} \u0433\u0430\u0434\u043e\u045e \u0442\u0430\u043c\u0443",other:"{0} \u0433\u043e\u0434\u0430 \u0442\u0430\u043c\u0443"}}},month:{displayName:"\u043c\u0435\u0441\u044f\u0446",relative:{0:"\u0443 \u0433\u044d\u0442\u044b\u043c \u043c\u0435\u0441\u044f\u0446\u044b",1:"\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u043c\u0435\u0441\u044f\u0446\u044b","-1":"\u0443 \u043c\u0456\u043d\u0443\u043b\u044b\u043c \u043c\u0435\u0441\u044f\u0446\u044b"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u043c\u0435\u0441\u044f\u0446",few:"\u043f\u0440\u0430\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u044b",many:"\u043f\u0440\u0430\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u0430\u045e",other:"\u043f\u0440\u0430\u0437 {0} \u043c\u0435\u0441\u044f\u0446\u0430"},past:{one:"{0} \u043c\u0435\u0441\u044f\u0446 \u0442\u0430\u043c\u0443",few:"{0} \u043c\u0435\u0441\u044f\u0446\u044b \u0442\u0430\u043c\u0443",many:"{0} \u043c\u0435\u0441\u044f\u0446\u0430\u045e \u0442\u0430\u043c\u0443",other:"{0} \u043c\u0435\u0441\u044f\u0446\u0430 \u0442\u0430\u043c\u0443"}}},day:{displayName:"\u0434\u0437\u0435\u043d\u044c",relative:{0:"\u0441\u0451\u043d\u043d\u044f",1:"\u0437\u0430\u045e\u0442\u0440\u0430",2:"\u043f\u0430\u0441\u043b\u044f\u0437\u0430\u045e\u0442\u0440\u0430","-2":"\u043f\u0430\u0437\u0430\u045e\u0447\u043e\u0440\u0430","-1":"\u0443\u0447\u043e\u0440\u0430"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u0434\u0437\u0435\u043d\u044c",few:"\u043f\u0440\u0430\u0437 {0} \u0434\u043d\u0456",many:"\u043f\u0440\u0430\u0437 {0} \u0434\u0437\u0451\u043d",other:"\u043f\u0440\u0430\u0437 {0} \u0434\u043d\u044f"},past:{one:"{0} \u0434\u0437\u0435\u043d\u044c \u0442\u0430\u043c\u0443",few:"{0} \u0434\u043d\u0456 \u0442\u0430\u043c\u0443",many:"{0} \u0434\u0437\u0451\u043d \u0442\u0430\u043c\u0443",other:"{0} \u0434\u043d\u044f \u0442\u0430\u043c\u0443"}}},hour:{displayName:"\u0433\u0430\u0434\u0437\u0456\u043d\u0430",relative:{0:"\u0443 \u0433\u044d\u0442\u0443 \u0433\u0430\u0434\u0437\u0456\u043d\u0443"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u0437\u0456\u043d\u0443",few:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u0437\u0456\u043d\u044b",many:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u0437\u0456\u043d",other:"\u043f\u0440\u0430\u0437 {0} \u0433\u0430\u0434\u0437\u0456\u043d\u044b"},past:{one:"{0} \u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",few:"{0} \u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443",many:"{0} \u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443",other:"{0} \u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443"}}},minute:{displayName:"\u0445\u0432\u0456\u043b\u0456\u043d\u0430",relative:{0:"\u0443 \u0433\u044d\u0442\u0443 \u0445\u0432\u0456\u043b\u0456\u043d\u0443"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u0445\u0432\u0456\u043b\u0456\u043d\u0443",few:"\u043f\u0440\u0430\u0437 {0} \u0445\u0432\u0456\u043b\u0456\u043d\u044b",many:"\u043f\u0440\u0430\u0437 {0} \u0445\u0432\u0456\u043b\u0456\u043d",other:"\u043f\u0440\u0430\u0437 {0} \u0445\u0432\u0456\u043b\u0456\u043d\u044b"},past:{one:"{0} \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",few:"{0} \u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443",many:"{0} \u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443",other:"{0} \u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434\u0430",relative:{0:"\u0446\u044f\u043f\u0435\u0440"},relativeTime:{future:{one:"\u043f\u0440\u0430\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",few:"\u043f\u0440\u0430\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",many:"\u043f\u0440\u0430\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434",other:"\u043f\u0440\u0430\u0437 {0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b"},past:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u0430\u043c\u0443",few:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0442\u0430\u043c\u0443",many:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u0430\u043c\u0443",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0442\u0430\u043c\u0443"}}}}}]})}});