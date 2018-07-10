webpackJsonppanneau([172],{536:function(e,t){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},r.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};i.inherits(r,o),r.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/lean_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,r=e("./text_highlight_rules").TextHighlightRules,a=function(){var e=["add_rewrite","alias","as","assume","attribute","begin","by","calc","calc_refl","calc_subst","calc_trans","check","classes","coercions","conjecture","constants","context","corollary","else","end","environment","eval","example","exists","exit","export","exposing","extends","fields","find_decl","forall","from","fun","have","help","hiding","if","import","in","infix","infixl","infixr","instances","let","local","match","namespace","notation","obtain","obtains","omit","opaque","open","options","parameter","parameters","postfix","precedence","prefix","premise","premises","print","private","proof","protected","qed","raw","renaming","section","set_option","show","tactic_hint","take","then","universe","universes","using","variable","variables","with"].join("|"),t=["inductive","structure","record","theorem","axiom","axioms","lemma","hypothesis","definition","constant"].join("|"),n=["Prop","Type","Type'","Type\u208a","Type\u2081","Type\u2082","Type\u2083"].join("|"),i="\\[("+["abbreviations","all-transparent","begin-end-hints","class","classes","coercion","coercions","declarations","decls","instance","irreducible","multiple-instances","notation","notations","parsing-only","persistent","reduce-hints","reducible","tactic-hints","visible","wf","whnf"].join("|")+")\\]",r=[].join("|"),a=this.$keywords=this.createKeywordMapper({"keyword.control":e,"storage.type":n,"keyword.operator":r,"variable.language":"sorry"},"identifier"),s="[A-Za-z_\u03b1-\u03ba\u03bc-\u03fb\u1f00-\u1ffe\u2100-\u214f][A-Za-z0-9_'\u03b1-\u03ba\u03bc-\u03fb\u1f00-\u1ffe\u2070-\u2079\u207f-\u2089\u2090-\u209c\u2100-\u214f]*",c=new RegExp(["#","@","->","\u223c","\u2194","/","==","=",":=","<->","/\\","\\/","\u2227","\u2228","\u2260","<",">","\u2264","\u2265","\xac","<=",">=","\u207b\xb9","\u2b1d","\u25b8","\\+","\\*","-","/","\u03bb","\u2192","\u2203","\u2200",":="].join("|"));this.$rules={start:[{token:"comment",regex:"--.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/-",next:"comment"},{stateName:"qqstring",token:"string.start",regex:'"',next:[{token:"string.end",regex:'"',next:"start"},{token:"constant.language.escape",regex:/\\[n"\\]/},{defaultToken:"string"}]},{token:"keyword.control",regex:t,next:[{token:"variable.language",regex:s,next:"start"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"storage.modifier",regex:i},{token:a,regex:s},{token:"operator",regex:c},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"-/",next:"start"},{defaultToken:"comment"}]},this.embedRules(o,"doc-",[o.getEndRule("start")]),this.normalizeRules()};i.inherits(a,r),t.leanHighlightRules=a}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var i=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t),o=n.match(/^(\s*\})/);if(!o)return 0;var r=o[1].length,a=e.findMatchingBracket({row:t,column:r});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new i(t,0,t,r-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o}),ace.define("ace/mode/lean",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lean_highlight_rules","ace/mode/matching_brace_outdent","ace/range"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text").Mode,r=e("./lean_highlight_rules").leanHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,s=(e("../range").Range,function(){this.HighlightRules=r,this.$outdent=new a});i.inherits(s,o),function(){this.lineCommentStart="--",this.blockComment={start:"/-",end:"-/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),r=o.tokens,a=o.state;if(r.length&&"comment"==r[r.length-1].type)return i;if("start"==e){var s=t.match(/^.*[\{\(\[]\s*$/);s&&(i+=n)}else if("doc-start"==e){if("start"==a)return"";var s=t.match(/^\s*(\/?)\*/);s&&(s[1]&&(i+=" "),i+="- ")}return i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/lean"}.call(s.prototype),t.Mode=s})}});