webpackJsonppanneau([135],{579:function(e,t){ace.define("ace/mode/rust_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,r){"use strict";var o=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,s=/\\(?:[nrt0'"\\]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\})/.source,i=function(){this.$rules={start:[{token:"variable.other.source.rust",regex:"'[a-zA-Z_][a-zA-Z0-9_]*(?![\\'])"},{token:"string.quoted.single.source.rust",regex:"'(?:[^'\\\\]|"+s+")'"},{stateName:"bracketedComment",onMatch:function(e,t,r){return r.unshift(this.next,e.length-1,t),"string.quoted.raw.source.rust"},regex:/r#*"/,next:[{onMatch:function(e,t,r){var o="string.quoted.raw.source.rust";return e.length>=r[1]?(e.length>r[1]&&(o="invalid"),r.shift(),r.shift(),this.next=r.shift()):this.next="",o},regex:/"#*/,next:"start"},{defaultToken:"string.quoted.raw.source.rust"}]},{token:"string.quoted.double.source.rust",regex:'"',push:[{token:"string.quoted.double.source.rust",regex:'"',next:"pop"},{token:"constant.character.escape.source.rust",regex:s},{defaultToken:"string.quoted.double.source.rust"}]},{token:["keyword.source.rust","text","entity.name.function.source.rust"],regex:"\\b(fn)(\\s+)([a-zA-Z_][a-zA-Z0-9_]*)"},{token:"support.constant",regex:"\\b[a-zA-Z_][\\w\\d]*::"},{token:"keyword.source.rust",regex:"\\b(?:abstract|alignof|as|box|break|continue|const|crate|do|else|enum|extern|for|final|if|impl|in|let|loop|macro|match|mod|move|mut|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\\b"},{token:"storage.type.source.rust",regex:"\\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|u128|f16|f32|f64|i8|i16|i32|i64|i128|str|option|either|c_float|c_double|c_void|FILE|fpos_t|DIR|dirent|c_char|c_schar|c_uchar|c_short|c_ushort|c_int|c_uint|c_long|c_ulong|size_t|ptrdiff_t|clock_t|time_t|c_longlong|c_ulonglong|intptr_t|uintptr_t|off_t|dev_t|ino_t|pid_t|mode_t|ssize_t)\\b"},{token:"variable.language.source.rust",regex:"\\bself\\b"},{token:"comment.line.doc.source.rust",regex:"//!.*$"},{token:"comment.line.double-dash.source.rust",regex:"//.*$"},{token:"comment.start.block.source.rust",regex:"/\\*",stateName:"comment",push:[{token:"comment.start.block.source.rust",regex:"/\\*",push:"comment"},{token:"comment.end.block.source.rust",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.source.rust"}]},{token:"keyword.operator",regex:/\$|[-=]>|[-+%^=!&|<>]=?|[*\/](?![*\/])=?/},{token:"punctuation.operator",regex:/[?:,;.]/},{token:"paren.lparen",regex:/[\[({]/},{token:"paren.rparen",regex:/[\])}]/},{token:"constant.language.source.rust",regex:"\\b(?:true|false|Some|None|Ok|Err)\\b"},{token:"support.constant.source.rust",regex:"\\b(?:EXIT_FAILURE|EXIT_SUCCESS|RAND_MAX|EOF|SEEK_SET|SEEK_CUR|SEEK_END|_IOFBF|_IONBF|_IOLBF|BUFSIZ|FOPEN_MAX|FILENAME_MAX|L_tmpnam|TMP_MAX|O_RDONLY|O_WRONLY|O_RDWR|O_APPEND|O_CREAT|O_EXCL|O_TRUNC|S_IFIFO|S_IFCHR|S_IFBLK|S_IFDIR|S_IFREG|S_IFMT|S_IEXEC|S_IWRITE|S_IREAD|S_IRWXU|S_IXUSR|S_IWUSR|S_IRUSR|F_OK|R_OK|W_OK|X_OK|STDIN_FILENO|STDOUT_FILENO|STDERR_FILENO)\\b"},{token:"meta.preprocessor.source.rust",regex:"\\b\\w\\(\\w\\)*!|#\\[[\\w=\\(\\)_]+\\]\\b"},{token:"constant.numeric.source.rust",regex:/\b(?:0x[a-fA-F0-9_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*(?!\.))(?:[iu](?:size|8|16|32|64|128))?\b/},{token:"constant.numeric.source.rust",regex:/\b(?:[0-9][0-9_]*)(?:\.[0-9][0-9_]*)?(?:[Ee][+-][0-9][0-9_]*)?(?:f32|f64)?\b/}]},this.normalizeRules()};i.metaData={fileTypes:["rs","rc"],foldingStartMarker:"^.*\\bfn\\s*(\\w+\\s*)?\\([^\\)]*\\)(\\s*\\{[^\\}]*)?\\s*$",foldingStopMarker:"^\\s*\\}",name:"Rust",scopeName:"source.rust"},o.inherits(i,n),t.RustHighlightRules=i}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,r){"use strict";var o=e("../../lib/oop"),n=e("../../range").Range,s=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(i,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var o=e.getLine(r);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var n=this._getFoldWidgetBase(e,t,r);return!n&&this.startRegionRe.test(o)?"start":n},this.getFoldWidgetRange=function(e,t,r,o){var n=e.getLine(r);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,r);var s=n.match(this.foldingStartMarker);if(s){var i=s.index;if(s[1])return this.openingBracketBlock(e,s[1],r,i);var a=e.getCommentFoldRange(r,i+s[0].length,1);return a&&!a.isMultiLine()&&(o?a=this.getSectionRange(e,r):"all"!=t&&(a=null)),a}if("markbegin"!==t){var s=n.match(this.foldingStopMarker);if(s){var i=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],r,i):e.getCommentFoldRange(r,i,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),o=r.search(/\S/),s=t,i=r.length;t+=1;for(var a=t,u=e.getLength();++t<u;){r=e.getLine(t);var c=r.search(/\S/);if(-1!==c){if(o>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(o==c)break}a=t}}return new n(s,i,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,r){for(var o=t.search(/\s*$/),s=e.getLength(),i=r,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,u=1;++r<s;){t=e.getLine(r);var c=a.exec(t);if(c&&(c[1]?u--:u++,!u))break}var l=r;if(l>i)return new n(i,o,l,t.length)}}.call(i.prototype)}),ace.define("ace/mode/rust",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rust_highlight_rules","ace/mode/folding/cstyle"],function(e,t,r){"use strict";var o=e("../lib/oop"),n=e("./text").Mode,s=e("./rust_highlight_rules").RustHighlightRules,i=e("./folding/cstyle").FoldMode,a=function(){this.HighlightRules=s,this.foldingRules=new i,this.$behaviour=this.$defaultBehaviour};o.inherits(a,n),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/",nestable:!0},this.$id="ace/mode/rust"}.call(a.prototype),t.Mode=a})}});