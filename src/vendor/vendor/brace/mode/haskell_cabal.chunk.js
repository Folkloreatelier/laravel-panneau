webpackJsonppanneau([397],{720:function(e,t){ace.define("ace/mode/haskell_cabal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,i){"use strict";var n=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment",regex:"^\\s*--.*$"},{token:["keyword"],regex:/^(\s*\w.*?)(:(?:\s+|$))/},{token:"constant.numeric",regex:/[\d_]+(?:(?:[\.\d_]*)?)/},{token:"constant.language.boolean",regex:"(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"markup.heading",regex:/^(\w.*)$/}]}};n.inherits(l,a),t.CabalHighlightRules=l}),ace.define("ace/mode/folding/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,i){"use strict";var n=e("../../lib/oop"),a=e("./fold_mode").FoldMode,l=e("../../range").Range,o=t.FoldMode=function(){};n.inherits(o,a),function(){this.isHeading=function(e,t){var i=e.getTokens(t)[0];return 0==t||i&&0===i.type.lastIndexOf("markup.heading",0)},this.getFoldWidget=function(e,t,i){if(this.isHeading(e,i))return"start";if("markbeginend"===t&&!/^\s*$/.test(e.getLine(i))){for(var n=e.getLength();++i<n&&/^\s*$/.test(e.getLine(i)););if(i==n||this.isHeading(e,i))return"end"}return""},this.getFoldWidgetRange=function(e,t,i){var n=e.getLine(i),a=n.length,o=e.getLength(),s=i,r=i;if(this.isHeading(e,i)){for(;++i<o;)if(this.isHeading(e,i)){i--;break}if((r=i)>s)for(;r>s&&/^\s*$/.test(e.getLine(r));)r--;if(r>s){var g=e.getLine(r).length;return new l(s,a,r,g)}}else if("end"===this.getFoldWidget(e,t,i)){for(var r=i,g=e.getLine(r).length;--i>=0&&!this.isHeading(e,i););var n=e.getLine(i),a=n.length;return new l(i,a,r,g)}}}.call(o.prototype)}),ace.define("ace/mode/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/haskell_cabal_highlight_rules","ace/mode/folding/haskell_cabal"],function(e,t,i){"use strict";var n=e("../lib/oop"),a=e("./text").Mode,l=e("./haskell_cabal_highlight_rules").CabalHighlightRules,o=e("./folding/haskell_cabal").FoldMode,s=function(){this.HighlightRules=l,this.foldingRules=new o,this.$behaviour=this.$defaultBehaviour};n.inherits(s,a),function(){this.lineCommentStart="--",this.blockComment=null,this.$id="ace/mode/haskell_cabal"}.call(s.prototype),t.Mode=s})}});