webpackJsonppanneau([124],{338:function(e,t){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function e(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},e.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};i.inherits(r,o),r.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/swift_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("../lib/lang"),r=e("./doc_comment_highlight_rules").DocCommentHighlightRules,a=e("./text_highlight_rules").TextHighlightRules,s=function(){var e=this.createKeywordMapper({"variable.language":"",keyword:"__COLUMN__|__FILE__|__FUNCTION__|__LINE__|as|associativity|break|case|class|continue|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|for|func|get|if|import|in|infix|init|inout|is|left|let|let|mutating|new|none|nonmutating|operator|override|postfix|precedence|prefix|protocol|return|right|safe|Self|self|set|struct|subscript|switch|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|convenience|dynamic|final|infix|lazy|mutating|nonmutating|optional|override|postfix|prefix|acequired|static|guard|defer","storage.type":"bool|double|Double|extension|float|Float|int|Int|private|public|string|String","constant.language":"false|Infinity|NaN|nil|no|null|null|off|on|super|this|true|undefined|yes","support.function":""},"identifier");this.$rules={start:[function(e,t){var n=t.nestable||t.interpolation,i=t.interpolation&&t.interpolation.nextState||"start",r={regex:e+(t.multiline?"":"(?=.)"),token:"string.start"},a=[t.escape&&{regex:t.escape,token:"character.escape"},t.interpolation&&{token:"paren.quasi.start",regex:o.escapeRegExp(t.interpolation.lead+t.interpolation.open),push:i},t.error&&{regex:t.error,token:"error.invalid"},{regex:e+(t.multiline?"":"|$"),token:"string.end",next:n?"pop":"start"},{defaultToken:"string"}].filter(Boolean);if(n?r.push=a:r.next=a,!t.interpolation)return r;var s=t.interpolation.open,l=t.interpolation.close;return[{regex:"["+o.escapeRegExp(s+l)+"]",onMatch:function(e,t,n){return this.next=e==s?this.nextState:"",e==s&&n.length?(n.unshift("start",t),"paren"):e==l&&n.length&&(n.shift(),this.next=n.shift(),-1!=this.next.indexOf("string"))?"paren.quasi.end":e==s?"paren.lparen":"paren.rparen"},nextState:i},r]}('"',{escape:/\\(?:[0\\tnr"']|u{[a-fA-F1-9]{0,8}})/,interpolation:{lead:"\\",open:"(",close:")"},error:/\\./,multiline:!1}),function(){return[{token:"comment",regex:"\\/\\/(?=.)",next:[r.getTagRule(),{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment",caseInsensitive:!0}]},r.getStartRule("doc-start"),{token:"comment.start",regex:/\/\*/,stateName:"nested_comment",push:[r.getTagRule(),{token:"comment.start",regex:/\/\*/,push:"nested_comment"},{token:"comment.end",regex:"\\*\\/",next:"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}(),{regex:/@[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:"variable.parameter"},{regex:/[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:e},{token:"constant.numeric",regex:/[+-]?(?:0(?:b[01]+|o[0-7]+|x[\da-fA-F])|\d+(?:(?:\.\d*)?(?:[PpEe][+-]?\d+)?)\b)/},{token:"keyword.operator",regex:/--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/}]},this.embedRules(r,"doc-",[r.getEndRule("start")]),this.normalizeRules()};i.inherits(s,a),t.HighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var i=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};i.inherits(a,r),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(e,t,n,i){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var r=o.match(this.foldingStartMarker);if(r){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var s=e.getCommentFoldRange(n,a+r[0].length,1);return s&&!s.isMultiLine()&&(i?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){var r=o.match(this.foldingStopMarker);if(r){var a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),i=n.search(/\S/),r=t,a=n.length;t+=1;for(var s=t,l=e.getLength();++t<l;){n=e.getLine(t);var g=n.search(/\S/);if(-1!==g){if(i>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(i==g)break}s=t}}return new o(r,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),r=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<r;){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}var c=n;if(c>a)return new o(a,i,c,t.length)}}.call(a.prototype)}),ace.define("ace/mode/swift",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/swift_highlight_rules","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text").Mode,r=e("./swift_highlight_rules").HighlightRules,a=e("./behaviour/cstyle").CstyleBehaviour,s=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=r,this.foldingRules=new s,this.$behaviour=new a,this.$behaviour=this.$defaultBehaviour};i.inherits(l,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/",nestable:!0},this.$id="ace/mode/swift"}.call(l.prototype),t.Mode=l})}});
//# sourceMappingURL=swift.chunk.js.map