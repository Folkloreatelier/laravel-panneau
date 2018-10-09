webpackJsonppanneau([381],{763:function(e,t){ace.define("ace/mode/maze_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"keyword.control",regex:/##|``/,comment:"Wall"},{token:"entity.name.tag",regex:/\.\./,comment:"Path"},{token:"keyword.control",regex:/<>/,comment:"Splitter"},{token:"entity.name.tag",regex:/\*[\*A-Za-z0-9]/,comment:"Signal"},{token:"constant.numeric",regex:/[0-9]{2}/,comment:"Pause"},{token:"keyword.control",regex:/\^\^/,comment:"Start"},{token:"keyword.control",regex:/\(\)/,comment:"Hole"},{token:"support.function",regex:/>>/,comment:"Out"},{token:"support.function",regex:/>\//,comment:"Ln Out"},{token:"support.function",regex:/<</,comment:"In"},{token:"keyword.control",regex:/--/,comment:"One use"},{token:"constant.language",regex:/%[LRUDNlrudn]/,comment:"Direction"},{token:["entity.name.function","keyword.other","keyword.operator","keyword.other","keyword.operator","constant.numeric","keyword.operator","keyword.other","keyword.operator","constant.numeric","string.quoted.double","string.quoted.single"],regex:/([A-Za-z][A-Za-z0-9])( *-> *)(?:([-+*\/]=)( *)((?:-)?)([0-9]+)|(=)( *)(?:((?:-)?)([0-9]+)|("[^"]*")|('[^']*')))/,comment:"Assignment function"},{token:["entity.name.function","keyword.other","keyword.control","keyword.other","keyword.operator","keyword.other","keyword.operator","constant.numeric","entity.name.tag","keyword.other","keyword.control","keyword.other","constant.language","keyword.other","keyword.control","keyword.other","constant.language"],regex:/([A-Za-z][A-Za-z0-9])( *-> *)(IF|if)( *)(?:([<>]=?|==)( *)((?:-)?)([0-9]+)|(\*[\*A-Za-z0-9]))( *)(THEN|then)( *)(%[LRUDNlrudn])(?:( *)(ELSE|else)( *)(%[LRUDNlrudn]))?/,comment:"Equality Function"},{token:"entity.name.function",regex:/[A-Za-z][A-Za-z0-9]/,comment:"Function cell"},{token:"comment.line.double-slash",regex:/ *\/\/.*/,comment:"Comment"}]},this.normalizeRules()};i.metaData={fileTypes:["mz"],name:"Maze",scopeName:"source.maze"},n.inherits(i,r),t.MazeHighlightRules=i}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(a,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var n=e.getLine(o);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var r=this._getFoldWidgetBase(e,t,o);return!r&&this.startRegionRe.test(n)?"start":r},this.getFoldWidgetRange=function(e,t,o,n){var r=e.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,o);var i=r.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],o,a);var l=e.getCommentFoldRange(o,a+i[0].length,1);return l&&!l.isMultiLine()&&(n?l=this.getSectionRange(e,o):"all"!=t&&(l=null)),l}if("markbegin"!==t){var i=r.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],o,a):e.getCommentFoldRange(o,a,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),n=o.search(/\S/),i=t,a=o.length;t+=1;for(var l=t,s=e.getLength();++t<s;){o=e.getLine(t);var g=o.search(/\S/);if(-1!==g){if(n>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(n==g)break}l=t}}return new r(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,o){for(var n=t.search(/\s*$/),i=e.getLength(),a=o,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++o<i;){t=e.getLine(o);var g=l.exec(t);if(g&&(g[1]?s--:s++,!s))break}var c=o;if(c>a)return new r(a,n,c,t.length)}}.call(a.prototype)}),ace.define("ace/mode/maze",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/maze_highlight_rules","ace/mode/folding/cstyle"],function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,i=e("./maze_highlight_rules").MazeHighlightRules,a=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=i,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};n.inherits(l,r),function(){this.lineCommentStart="//",this.$id="ace/mode/maze"}.call(l.prototype),t.Mode=l})}});