(window.webpackJsonppanneau=window.webpackJsonppanneau||[]).push([[54],{341:function(e,t){ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,o=t.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",a=t.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",s=function(){var e=this.createKeywordMapper({keyword:o,"support.function.builtin":a,"invalid.deprecated":"debugger"},"identifier");this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(e,t,n){var i="-"==e[2]?"indentedHeredoc":"heredoc",r=e.split(this.splitRegex);return n.push(i,r[4]),[{type:"constant",value:r[1]},{type:"text",value:r[2]},{type:"string",value:r[3]},{type:"support.class",value:r[4]},{type:"string",value:r[5]}]},rules:{heredoc:[{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:"(?:\\$(?:SHLVL|\\$|\\!|\\?))"},{token:"variable",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*=)"},{include:"variables"},{token:"support.function",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*\\s*\\(\\))"},{token:"support.function",regex:"(?:&(?:\\d+))"},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:"(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+)))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"},{token:"constant.numeric",regex:"(?:(?:[1-9]\\d*)|(?:0))\\b"},{token:e,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};i.inherits(s,r),t.ShHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var i=e("../../lib/oop"),r=e("../../range").Range,o=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};i.inherits(a,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(i)?"start":r},this.getFoldWidgetRange=function(e,t,n,i){var r,o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);if(r=o.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var s=e.getCommentFoldRange(n,a+r[0].length,1);return s&&!s.isMultiLine()&&(i?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t&&(r=o.match(this.foldingStopMarker))){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),i=n.search(/\S/),o=t,a=n.length,s=t+=1,l=e.getLength();++t<l;){var g=(n=e.getLine(t)).search(/\S/);if(-1!==g){if(i>g)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=o)break;if(h.isMultiLine())t=h.end.row;else if(i==g)break}s=t}}return new r(o,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),o=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<o;){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}if(n>a)return new r(a,i,n,t.length)}}.call(a.prototype)}),ace.define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],function(e,t,n){"use strict";var i=e("../lib/oop"),r=e("./text").Mode,o=e("./sh_highlight_rules").ShHighlightRules,a=e("../range").Range,s=e("./folding/cstyle").FoldMode,l=e("./behaviour/cstyle").CstyleBehaviour,g=function(){this.HighlightRules=o,this.foldingRules=new s,this.$behaviour=new l};i.inherits(g,r),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e).tokens;if(r.length&&"comment"==r[r.length-1].type)return i;"start"==e&&(t.match(/^.*[\{\(\[:]\s*$/)&&(i+=n));return i};var e={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(t,n,i){if("\r\n"!==i&&"\r"!==i&&"\n"!==i)return!1;var r=this.getTokenizer().getLineTokens(n.trim(),t).tokens;if(!r)return!1;do{var o=r.pop()}while(o&&("comment"==o.type||"text"==o.type&&o.value.match(/^\s+$/)));return!!o&&("keyword"==o.type&&e[o.value])},this.autoOutdent=function(e,t,n){n+=1;var i=this.$getIndent(t.getLine(n)),r=t.getTabString();i.slice(-r.length)==r&&t.remove(new a(n,i.length-r.length,n,i.length))},this.$id="ace/mode/sh"}.call(g.prototype),t.Mode=g}),ace.define("ace/mode/dockerfile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/sh_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),r=e("./sh_highlight_rules").ShHighlightRules,o=function(){r.call(this);for(var e=this.$rules.start,t=0;t<e.length;t++)if("variable.language"==e[t].token){e.splice(t,0,{token:"constant.language",regex:"(?:^(?:FROM|MAINTAINER|RUN|CMD|EXPOSE|ENV|ADD|ENTRYPOINT|VOLUME|USER|WORKDIR|ONBUILD|COPY|LABEL)\\b)",caseInsensitive:!0});break}};i.inherits(o,r),t.DockerfileHighlightRules=o}),ace.define("ace/mode/dockerfile",["require","exports","module","ace/lib/oop","ace/mode/sh","ace/mode/dockerfile_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var i=e("../lib/oop"),r=e("./sh").Mode,o=e("./dockerfile_highlight_rules").DockerfileHighlightRules,a=e("./folding/cstyle").FoldMode,s=function(){r.call(this),this.HighlightRules=o,this.foldingRules=new a};i.inherits(s,r),function(){this.$id="ace/mode/dockerfile"}.call(s.prototype),t.Mode=s})}}]);