webpackJsonppanneau([148],{621:function(e,t,i){function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,u;!function(o,m){"object"==a(t)&&"undefined"!=typeof e?e.exports=m():(n=m,void 0!==(u="function"===typeof n?n.call(t,i,t,e):n)&&(e.exports=u))}(0,function(){"use strict";return[{locale:"pl",pluralRuleFunction:function(e,t){var i=String(e).split("."),a=i[0],n=!i[1],u=a.slice(-1),o=a.slice(-2);return t?"other":1==e&&n?"one":n&&u>=2&&u<=4&&(o<12||o>14)?"few":n&&1!=a&&(0==u||1==u)||n&&u>=5&&u<=9||n&&o>=12&&o<=14?"many":"other"},fields:{year:{displayName:"rok",relative:{0:"w tym roku",1:"w przysz\u0142ym roku","-1":"w zesz\u0142ym roku"},relativeTime:{future:{one:"za {0} rok",few:"za {0} lata",many:"za {0} lat",other:"za {0} roku"},past:{one:"{0} rok temu",few:"{0} lata temu",many:"{0} lat temu",other:"{0} roku temu"}}},month:{displayName:"miesi\u0105c",relative:{0:"w tym miesi\u0105cu",1:"w przysz\u0142ym miesi\u0105cu","-1":"w zesz\u0142ym miesi\u0105cu"},relativeTime:{future:{one:"za {0} miesi\u0105c",few:"za {0} miesi\u0105ce",many:"za {0} miesi\u0119cy",other:"za {0} miesi\u0105ca"},past:{one:"{0} miesi\u0105c temu",few:"{0} miesi\u0105ce temu",many:"{0} miesi\u0119cy temu",other:"{0} miesi\u0105ca temu"}}},day:{displayName:"dzie\u0144",relative:{0:"dzisiaj",1:"jutro",2:"pojutrze","-2":"przedwczoraj","-1":"wczoraj"},relativeTime:{future:{one:"za {0} dzie\u0144",few:"za {0} dni",many:"za {0} dni",other:"za {0} dnia"},past:{one:"{0} dzie\u0144 temu",few:"{0} dni temu",many:"{0} dni temu",other:"{0} dnia temu"}}},hour:{displayName:"godzina",relative:{0:"ta godzina"},relativeTime:{future:{one:"za {0} godzin\u0119",few:"za {0} godziny",many:"za {0} godzin",other:"za {0} godziny"},past:{one:"{0} godzin\u0119 temu",few:"{0} godziny temu",many:"{0} godzin temu",other:"{0} godziny temu"}}},minute:{displayName:"minuta",relative:{0:"ta minuta"},relativeTime:{future:{one:"za {0} minut\u0119",few:"za {0} minuty",many:"za {0} minut",other:"za {0} minuty"},past:{one:"{0} minut\u0119 temu",few:"{0} minuty temu",many:"{0} minut temu",other:"{0} minuty temu"}}},second:{displayName:"sekunda",relative:{0:"teraz"},relativeTime:{future:{one:"za {0} sekund\u0119",few:"za {0} sekundy",many:"za {0} sekund",other:"za {0} sekundy"},past:{one:"{0} sekund\u0119 temu",few:"{0} sekundy temu",many:"{0} sekund temu",other:"{0} sekundy temu"}}}}}]})}});