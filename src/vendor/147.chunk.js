(window.webpackJsonppanneau=window.webpackJsonppanneau||[]).push([[147],{438:function(e,t){ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,i){"use strict";var o=e("../../lib/oop"),n=e("./fold_mode").FoldMode,r=e("../../range").Range,a=t.FoldMode=function(){};o.inherits(a,n),function(){this.getFoldWidgetRange=function(e,t,i){var o=this.indentationBlock(e,i);if(o)return o;var n=/\S/,a=e.getLine(i),l=a.search(n);if(-1!=l&&"#"==a[l]){for(var s=a.length,g=e.getLength(),d=i,c=i;++i<g;){var h=(a=e.getLine(i)).search(n);if(-1!=h){if("#"!=a[h])break;c=i}}if(c>d){var u=e.getLine(c).length;return new r(d,s,c,u)}}},this.getFoldWidget=function(e,t,i){var o=e.getLine(i),n=o.search(/\S/),r=e.getLine(i+1),a=e.getLine(i-1),l=a.search(/\S/),s=r.search(/\S/);if(-1==n)return e.foldWidgets[i-1]=-1!=l&&l<s?"start":"","";if(-1==l){if(n==s&&"#"==o[n]&&"#"==r[n])return e.foldWidgets[i-1]="",e.foldWidgets[i+1]="","start"}else if(l==n&&"#"==o[n]&&"#"==a[n]&&-1==e.getLine(i-2).search(/\S/))return e.foldWidgets[i-1]="start",e.foldWidgets[i+1]="","";return e.foldWidgets[i-1]=-1!=l&&l<n?"start":"",n<s?"start":""}}.call(a.prototype)}),ace.define("ace/mode/space_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){"use strict";var o=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"empty_line",regex:/ */,next:"key"},{token:"empty_line",regex:/$/,next:"key"}],key:[{token:"variable",regex:/\S+/},{token:"empty_line",regex:/$/,next:"start"},{token:"keyword.operator",regex:/ /,next:"value"}],value:[{token:"keyword.operator",regex:/$/,next:"start"},{token:"string",regex:/[^$]/}]}};o.inherits(r,n),t.SpaceHighlightRules=r}),ace.define("ace/mode/space",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/coffee","ace/mode/space_highlight_rules"],function(e,t,i){"use strict";var o=e("../lib/oop"),n=e("./text").Mode,r=e("./folding/coffee").FoldMode,a=e("./space_highlight_rules").SpaceHighlightRules,l=function(){this.HighlightRules=a,this.foldingRules=new r,this.$behaviour=this.$defaultBehaviour};o.inherits(l,n),function(){this.$id="ace/mode/space"}.call(l.prototype),t.Mode=l})}}]);