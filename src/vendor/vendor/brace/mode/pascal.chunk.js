webpackJsonppanneau([385],{787:function(e,t){ace.define("ace/mode/pascal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{caseInsensitive:!0,token:"keyword.control.pascal",regex:"\\b(?:(absolute|abstract|all|and|and_then|array|as|asm|attribute|begin|bindable|case|class|const|constructor|destructor|div|do|do|else|end|except|export|exports|external|far|file|finalization|finally|for|forward|goto|if|implementation|import|in|inherited|initialization|interface|interrupt|is|label|library|mod|module|name|near|nil|not|object|of|only|operator|or|or_else|otherwise|packed|pow|private|program|property|protected|public|published|qualified|record|repeat|resident|restricted|segment|set|shl|shr|then|to|try|type|unit|until|uses|value|var|view|virtual|while|with|xor))\\b"},{caseInsensitive:!0,token:["variable.pascal","text","storage.type.prototype.pascal","entity.name.function.prototype.pascal"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))"},{caseInsensitive:!0,token:["variable.pascal","text","storage.type.function.pascal","entity.name.function.pascal"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?"},{token:"constant.numeric.pascal",regex:"\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"punctuation.definition.comment.pascal",regex:"--.*$",push_:[{token:"comment.line.double-dash.pascal.one",regex:"$",next:"pop"},{defaultToken:"comment.line.double-dash.pascal.one"}]},{token:"punctuation.definition.comment.pascal",regex:"//.*$",push_:[{token:"comment.line.double-slash.pascal.two",regex:"$",next:"pop"},{defaultToken:"comment.line.double-slash.pascal.two"}]},{token:"punctuation.definition.comment.pascal",regex:"\\(\\*",push:[{token:"punctuation.definition.comment.pascal",regex:"\\*\\)",next:"pop"},{defaultToken:"comment.block.pascal.one"}]},{token:"punctuation.definition.comment.pascal",regex:"\\{",push:[{token:"punctuation.definition.comment.pascal",regex:"\\}",next:"pop"},{defaultToken:"comment.block.pascal.two"}]},{token:"punctuation.definition.string.begin.pascal",regex:'"',push:[{token:"constant.character.escape.pascal",regex:"\\\\."},{token:"punctuation.definition.string.end.pascal",regex:'"',next:"pop"},{defaultToken:"string.quoted.double.pascal"}]},{token:"punctuation.definition.string.begin.pascal",regex:"'",push:[{token:"constant.character.escape.apostrophe.pascal",regex:"''"},{token:"punctuation.definition.string.end.pascal",regex:"'",next:"pop"},{defaultToken:"string.quoted.single.pascal"}]},{token:"keyword.operator",regex:"[+\\-;,/*%]|:=|="}]},this.normalizeRules()};o.inherits(i,a),t.PascalHighlightRules=i}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,n){"use strict";var o=e("../../lib/oop"),a=e("./fold_mode").FoldMode,i=e("../../range").Range,r=t.FoldMode=function(){};o.inherits(r,a),function(){this.getFoldWidgetRange=function(e,t,n){var o=this.indentationBlock(e,n);if(o)return o;var a=/\S/,r=e.getLine(n),s=r.search(a);if(-1!=s&&"#"==r[s]){for(var l=r.length,c=e.getLength(),p=n,u=n;++n<c;){r=e.getLine(n);var d=r.search(a);if(-1!=d){if("#"!=r[d])break;u=n}}if(u>p){var g=e.getLine(u).length;return new i(p,l,u,g)}}},this.getFoldWidget=function(e,t,n){var o=e.getLine(n),a=o.search(/\S/),i=e.getLine(n+1),r=e.getLine(n-1),s=r.search(/\S/),l=i.search(/\S/);if(-1==a)return e.foldWidgets[n-1]=-1!=s&&s<l?"start":"","";if(-1==s){if(a==l&&"#"==o[a]&&"#"==i[a])return e.foldWidgets[n-1]="",e.foldWidgets[n+1]="","start"}else if(s==a&&"#"==o[a]&&"#"==r[a]&&-1==e.getLine(n-2).search(/\S/))return e.foldWidgets[n-1]="start",e.foldWidgets[n+1]="","";return e.foldWidgets[n-1]=-1!=s&&s<a?"start":"",a<l?"start":""}}.call(r.prototype)}),ace.define("ace/mode/pascal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pascal_highlight_rules","ace/mode/folding/coffee"],function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text").Mode,i=e("./pascal_highlight_rules").PascalHighlightRules,r=e("./folding/coffee").FoldMode,s=function(){this.HighlightRules=i,this.foldingRules=new r,this.$behaviour=this.$defaultBehaviour};o.inherits(s,a),function(){this.lineCommentStart=["--","//"],this.blockComment=[{start:"(*",end:"*)"},{start:"{",end:"}"}],this.$id="ace/mode/pascal"}.call(s.prototype),t.Mode=s})}});