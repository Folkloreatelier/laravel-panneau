webpackJsonppanneau([379],{794:function(e,t){ace.define("ace/mode/prolog_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{include:"#comment"},{include:"#basic_fact"},{include:"#rule"},{include:"#directive"},{include:"#fact"}],"#atom":[{token:"constant.other.atom.prolog",regex:"\\b[a-z][a-zA-Z0-9_]*\\b"},{token:"constant.numeric.prolog",regex:"-?\\d+(?:\\.\\d+)?"},{include:"#string"}],"#basic_elem":[{include:"#comment"},{include:"#statement"},{include:"#constants"},{include:"#operators"},{include:"#builtins"},{include:"#list"},{include:"#atom"},{include:"#variable"}],"#basic_fact":[{token:["entity.name.function.fact.basic.prolog","punctuation.end.fact.basic.prolog"],regex:"([a-z]\\w*)(\\.)"}],"#builtins":[{token:"support.function.builtin.prolog",regex:"\\b(?:abolish|abort|ancestors|arg|ascii|assert[az]|atom(?:ic)?|body|char|close|conc|concat|consult|define|definition|dynamic|dump|fail|file|free|free_proc|functor|getc|goal|halt|head|head|integer|length|listing|match_args|member|next_clause|nl|nonvar|nth|number|cvars|nvars|offset|op|print?|prompt|putc|quoted|ratom|read|redefine|rename|retract(?:all)?|see|seeing|seen|skip|spy|statistics|system|tab|tell|telling|term|time|told|univ|unlink_clause|unspy_predicate|var|write)\\b"}],"#comment":[{token:["punctuation.definition.comment.prolog","comment.line.percentage.prolog"],regex:"(%)(.*$)"},{token:"punctuation.definition.comment.prolog",regex:"/\\*",push:[{token:"punctuation.definition.comment.prolog",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.prolog"}]}],"#constants":[{token:"constant.language.prolog",regex:"\\b(?:true|false|yes|no)\\b"}],"#directive":[{token:"keyword.operator.directive.prolog",regex:":-",push:[{token:"meta.directive.prolog",regex:"\\.",next:"pop"},{include:"#comment"},{include:"#statement"},{defaultToken:"meta.directive.prolog"}]}],"#expr":[{include:"#comments"},{token:"meta.expression.prolog",regex:"\\(",push:[{token:"meta.expression.prolog",regex:"\\)",next:"pop"},{include:"#expr"},{defaultToken:"meta.expression.prolog"}]},{token:"keyword.control.cutoff.prolog",regex:"!"},{token:"punctuation.control.and.prolog",regex:","},{token:"punctuation.control.or.prolog",regex:";"},{include:"#basic_elem"}],"#fact":[{token:["entity.name.function.fact.prolog","punctuation.begin.fact.parameters.prolog"],regex:"([a-z]\\w*)(\\()(?!.*:-)",push:[{token:["punctuation.end.fact.parameters.prolog","punctuation.end.fact.prolog"],regex:"(\\))(\\.?)",next:"pop"},{include:"#parameter"},{defaultToken:"meta.fact.prolog"}]}],"#list":[{token:"punctuation.begin.list.prolog",regex:"\\[(?=.*\\])",push:[{token:"punctuation.end.list.prolog",regex:"\\]",next:"pop"},{include:"#comment"},{token:"punctuation.separator.list.prolog",regex:","},{token:"punctuation.concat.list.prolog",regex:"\\|",push:[{token:"meta.list.concat.prolog",regex:"(?=\\s*\\])",next:"pop"},{include:"#basic_elem"},{defaultToken:"meta.list.concat.prolog"}]},{include:"#basic_elem"},{defaultToken:"meta.list.prolog"}]}],"#operators":[{token:"keyword.operator.prolog",regex:"\\\\\\+|\\bnot\\b|\\bis\\b|->|[><]|[><\\\\:=]?=|(?:=\\\\|\\\\=)="}],"#parameter":[{token:"variable.language.anonymous.prolog",regex:"\\b_\\b"},{token:"variable.parameter.prolog",regex:"\\b[A-Z_]\\w*\\b"},{token:"punctuation.separator.parameters.prolog",regex:","},{include:"#basic_elem"},{token:"text",regex:"[^\\s]"}],"#rule":[{token:"meta.rule.prolog",regex:"(?=[a-z]\\w*.*:-)",push:[{token:"punctuation.rule.end.prolog",regex:"\\.",next:"pop"},{token:"meta.rule.signature.prolog",regex:"(?=[a-z]\\w*.*:-)",push:[{token:"meta.rule.signature.prolog",regex:"(?=:-)",next:"pop"},{token:"entity.name.function.rule.prolog",regex:"[a-z]\\w*(?=\\(|\\s*:-)"},{token:"punctuation.rule.parameters.begin.prolog",regex:"\\(",push:[{token:"punctuation.rule.parameters.end.prolog",regex:"\\)",next:"pop"},{include:"#parameter"},{defaultToken:"meta.rule.parameters.prolog"}]},{defaultToken:"meta.rule.signature.prolog"}]},{token:"keyword.operator.definition.prolog",regex:":-",push:[{token:"meta.rule.definition.prolog",regex:"(?=\\.)",next:"pop"},{include:"#comment"},{include:"#expr"},{defaultToken:"meta.rule.definition.prolog"}]},{defaultToken:"meta.rule.prolog"}]}],"#statement":[{token:"meta.statement.prolog",regex:"(?=[a-z]\\w*\\()",push:[{token:"punctuation.end.statement.parameters.prolog",regex:"\\)",next:"pop"},{include:"#builtins"},{include:"#atom"},{token:"punctuation.begin.statement.parameters.prolog",regex:"\\(",push:[{token:"meta.statement.parameters.prolog",regex:"(?=\\))",next:"pop"},{token:"punctuation.separator.statement.prolog",regex:","},{include:"#basic_elem"},{defaultToken:"meta.statement.parameters.prolog"}]},{defaultToken:"meta.statement.prolog"}]}],"#string":[{token:"punctuation.definition.string.begin.prolog",regex:"'",push:[{token:"punctuation.definition.string.end.prolog",regex:"'",next:"pop"},{token:"constant.character.escape.prolog",regex:"\\\\."},{token:"constant.character.escape.quote.prolog",regex:"''"},{defaultToken:"string.quoted.single.prolog"}]}],"#variable":[{token:"variable.language.anonymous.prolog",regex:"\\b_\\b"},{token:"variable.other.prolog",regex:"\\b[A-Z_][a-zA-Z0-9_]*\\b"}]},this.normalizeRules()};i.metaData={fileTypes:["plg","prolog"],foldingStartMarker:"(%\\s*region \\w*)|([a-z]\\w*.*:- ?)",foldingStopMarker:"(%\\s*end(\\s*region)?)|(?=\\.)",keyEquivalent:"^~P",name:"Prolog",scopeName:"source.prolog"},n.inherits(i,r),t.PrologHighlightRules=i}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(a,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var n=e.getLine(o);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var r=this._getFoldWidgetBase(e,t,o);return!r&&this.startRegionRe.test(n)?"start":r},this.getFoldWidgetRange=function(e,t,o,n){var r=e.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,o);var i=r.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],o,a);var l=e.getCommentFoldRange(o,a+i[0].length,1);return l&&!l.isMultiLine()&&(n?l=this.getSectionRange(e,o):"all"!=t&&(l=null)),l}if("markbegin"!==t){var i=r.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],o,a):e.getCommentFoldRange(o,a,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),n=o.search(/\S/),i=t,a=o.length;t+=1;for(var l=t,g=e.getLength();++t<g;){o=e.getLine(t);var s=o.search(/\S/);if(-1!==s){if(n>s)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(n==s)break}l=t}}return new r(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,o){for(var n=t.search(/\s*$/),i=e.getLength(),a=o,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++o<i;){t=e.getLine(o);var s=l.exec(t);if(s&&(s[1]?g--:g++,!g))break}var c=o;if(c>a)return new r(a,n,c,t.length)}}.call(a.prototype)}),ace.define("ace/mode/prolog",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/prolog_highlight_rules","ace/mode/folding/cstyle"],function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,i=e("./prolog_highlight_rules").PrologHighlightRules,a=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=i,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};n.inherits(l,r),function(){this.lineCommentStart="%",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/prolog"}.call(l.prototype),t.Mode=l})}});