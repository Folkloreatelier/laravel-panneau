webpackJsonppanneau([183],{262:function(e,t){ace.define("ace/mode/hjson_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{include:"#comments"},{include:"#rootObject"},{include:"#value"}],"#array":[{token:"paren.lparen",regex:/\[/,push:[{token:"paren.rparen",regex:/\]/,next:"pop"},{include:"#value"},{include:"#comments"},{token:"text",regex:/,|$/},{token:"invalid.illegal",regex:/[^\s\]]/},{defaultToken:"array"}]}],"#comments":[{token:["comment.punctuation","comment.line"],regex:/(#)(.*$)/},{token:"comment.punctuation",regex:/\/\*/,push:[{token:"comment.punctuation",regex:/\*\//,next:"pop"},{defaultToken:"comment.block"}]},{token:["comment.punctuation","comment.line"],regex:/(\/\/)(.*$)/}],"#constant":[{token:"constant",regex:/\b(?:true|false|null)\b/}],"#keyname":[{token:"keyword",regex:/(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/}],"#mstring":[{token:"string",regex:/'''/,push:[{token:"string",regex:/'''/,next:"pop"},{defaultToken:"string"}]}],"#number":[{token:"constant.numeric",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,comment:"handles integer and decimal numbers"}],"#object":[{token:"paren.lparen",regex:/\{/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#rootObject":[{token:"paren",regex:/(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,push:[{token:"paren.rparen",regex:/---none---/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#string":[{token:"string",regex:/"/,push:[{token:"string",regex:/"/,next:"pop"},{token:"constant.language.escape",regex:/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/},{token:"invalid.illegal",regex:/\\./},{defaultToken:"string"}]}],"#ustring":[{token:"string",regex:/\b[^:,0-9\-\{\[\}\]\s].*$/}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"},{include:"#mstring"},{include:"#ustring"}]},this.normalizeRules()};r.metaData={fileTypes:["hjson"],foldingStartMarker:"(?x:     # turn on extended mode\n              ^    # a line beginning with\n              \\s*    # some optional space\n              [{\\[]  # the start of an object or array\n              (?!    # but not followed by\n              .*   # whatever\n              [}\\]]  # and the close of an object or array\n              ,?   # an optional comma\n              \\s*  # some optional space\n              $    # at the end of the line\n              )\n              |    # ...or...\n              [{\\[]  # the start of an object or array\n              \\s*    # some optional space\n              $    # at the end of the line\n            )",foldingStopMarker:"(?x:   # turn on extended mode\n             ^    # a line beginning with\n             \\s*  # some optional space\n             [}\\]]  # and the close of an object or array\n             )",keyEquivalent:"^~J",name:"Hjson",scopeName:"source.hjson"},o.inherits(r,i),t.HjsonHighlightRules=r}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var o=e("../../lib/oop"),i=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,r),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(o)?"start":i},this.getFoldWidgetRange=function(e,t,n,o){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var r=i.match(this.foldingStartMarker);if(r){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var s=e.getCommentFoldRange(n,a+r[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){var r=i.match(this.foldingStopMarker);if(r){var a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),o=n.search(/\S/),r=t,a=n.length;t+=1;for(var s=t,l=e.getLength();++t<l;){n=e.getLine(t);var g=n.search(/\S/);if(-1!==g){if(o>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(o==g)break}s=t}}return new i(r,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),r=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<r;){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}var c=n;if(c>a)return new i(a,o,c,t.length)}}.call(a.prototype)}),ace.define("ace/mode/hjson",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/hjson_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./text").Mode,r=e("./hjson_highlight_rules").HjsonHighlightRules,a=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=r,this.foldingRules=new a};o.inherits(s,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/hjson"}.call(s.prototype),t.Mode=s})}});
//# sourceMappingURL=hjson.chunk.js.map