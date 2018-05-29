webpackJsonppanneau([144],{563:function(e,t){ace.define("ace/mode/praat_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"string.interpolated",regex:/'((?:[a-z][a-zA-Z0-9_]*)(?:\$|#|:[0-9]+)?)'/},{token:["text","text","keyword.operator","text","keyword"],regex:/(^\s*)(?:([a-z][a-zA-Z0-9_]*\$?\s+)(=)(\s+))?(stopwatch)/},{token:["text","keyword","text","string"],regex:/(^\s*)(print(?:line|tab)?|echo|exit|pause|send(?:praat|socket)|include|execute|system(?:_nocheck)?)(\s+)(.*)/},{token:["text","keyword"],regex:"(^\\s*)(clearinfo|endSendPraat)$"},{token:["text","keyword.operator","text"],regex:/(\s+)((?:\+|-|\/|\*|<|>)=?|==?|!=|%|\^|\||and|or|not)(\s+)/},{token:["text","text","keyword.operator","text","keyword","text","keyword"],regex:/(^\s*)(?:([a-z][a-zA-Z0-9_]*\$?\s+)(=)(\s+))?(?:((?:no)?warn|(?:unix_)?nocheck|noprogress)(\s+))?((?:[A-Z][^.:"]+)(?:$|(?:\.{3}|:)))/},{token:["text","keyword","text","keyword"],regex:/(^\s*)(?:(demo)?(\s+))((?:[A-Z][^.:"]+)(?:$|(?:\.{3}|:)))/},{token:["text","keyword","text","keyword"],regex:/^(\s*)(?:(demo)(\s+))?(10|12|14|16|24)$/},{token:["text","support.function","text"],regex:/(\s*)(do\$?)(\s*:\s*|\s*\(\s*)/},{token:"entity.name.type",regex:"(Activation|AffineTransform|AmplitudeTier|Art|Artword|Autosegment|BarkFilter|CCA|Categories|Cepstrum|Cepstrumc|ChebyshevSeries|ClassificationTable|Cochleagram|Collection|Configuration|Confusion|ContingencyTable|Corpus|Correlation|Covariance|CrossCorrelationTable|CrossCorrelationTables|DTW|Diagonalizer|Discriminant|Dissimilarity|Distance|Distributions|DurationTier|EEG|ERP|ERPTier|Eigen|Excitation|Excitations|ExperimentMFC|FFNet|FeatureWeights|Formant|FormantFilter|FormantGrid|FormantPoint|FormantTier|GaussianMixture|HMM|HMM_Observation|HMM_ObservationSequence|HMM_State|HMM_StateSequence|Harmonicity|ISpline|Index|Intensity|IntensityTier|IntervalTier|KNN|KlattGrid|KlattTable|LFCC|LPC|Label|LegendreSeries|LinearRegression|LogisticRegression|LongSound|Ltas|MFCC|MSpline|ManPages|Manipulation|Matrix|MelFilter|MixingMatrix|Movie|Network|OTGrammar|OTHistory|OTMulti|PCA|PairDistribution|ParamCurve|Pattern|Permutation|Pitch|PitchTier|PointProcess|Polygon|Polynomial|Procrustes|RealPoint|RealTier|ResultsMFC|Roots|SPINET|SSCP|SVD|Salience|ScalarProduct|Similarity|SimpleString|SortedSetOfString|Sound|Speaker|Spectrogram|Spectrum|SpectrumTier|SpeechSynthesizer|SpellingChecker|Strings|StringsIndex|Table|TableOfReal|TextGrid|TextInterval|TextPoint|TextTier|Tier|Transition|VocalTract|Weight|WordList)"},{token:"variable.language",regex:"(macintosh|windows|unix|praatVersion|praatVersion\\$pi|undefined|newline\\$|tab\\$|shellDirectory\\$|homeDirectory\\$|preferencesDirectory\\$|temporaryDirectory\\$|defaultDirectory\\$)"},{token:["support.function","text"],regex:"((?:writeInfo|writeInfoLine|appendInfo|appendInfoLine|info\\$|writeFile|writeFileLine|appendFile|appendFileLine|abs|round|floor|ceiling|min|max|imin|imax|sqrt|sin|cos|tan|arcsin|arccos|arctan|arctan2|sinc|sincpi|exp|ln|lnBeta|lnGamma|log10|log2|sinh|cosh|tanh|arcsinh|arccosh|arctanh|sigmoid|invSigmoid|erf|erfc|random(?:Uniform|Integer|Gauss|Poisson|Binomial)|gaussP|gaussQ|invGaussQ|incompleteGammaP|incompleteBeta|chiSquareP|chiSquareQ|invChiSquareQ|studentP|studentQ|invStudentQ|fisherP|fisherQ|invFisherQ|binomialP|binomialQ|invBinomialP|invBinomialQ|hertzToBark|barkToHerz|hertzToMel|melToHertz|hertzToSemitones|semitonesToHerz|erb|hertzToErb|erbToHertz|phonToDifferenceLimens|differenceLimensToPhon|soundPressureToPhon|beta|beta2|besselI|besselK|numberOfColumns|numberOfRows|selected|selected\\$|numberOfSelected|variableExists|index|rindex|startsWith|endsWith|index_regex|rindex_regex|replace_regex\\$|length|extractWord\\$|extractLine\\$|extractNumber|left\\$|right\\$|mid\\$|replace\\$|date\\$|fixed\\$|percent\\$|zero#|linear#|randomUniform#|randomInteger#|randomGauss#|beginPause|endPause|demoShow|demoWindowTitle|demoInput|demoWaitForInput|demoClicked|demoClickedIn|demoX|demoY|demoKeyPressed|demoKey\\$|demoExtraControlKeyPressed|demoShiftKeyPressed|demoCommandKeyPressed|demoOptionKeyPressed|environment\\$|chooseReadFile\\$|chooseDirectory\\$|createDirectory|fileReadable|deleteFile|selectObject|removeObject|plusObject|minusObject|runScript|exitScript|beginSendPraat|endSendPraat|objectsAreIdentical)\\$?)(\\s*(?::|\\())"},{token:"keyword",regex:/(\bfor\b)/,next:"for"},{token:"keyword",regex:"(\\b(?:if|then|else|elsif|elif|endif|fi|endfor|endproc|while|endwhile|repeat|until|select|plus|minus|assert|asserterror)\\b)"},{token:"string",regex:/"[^"]*"/},{token:"string",regex:/"[^"]*$/,next:"brokenstring"},{token:["text","keyword","text","entity.name.section"],regex:/(^\s*)(\bform\b)(\s+)(.*)/,next:"form"},{token:"constant.numeric",regex:/\b[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["keyword","text","entity.name.function"],regex:/(procedure)(\s+)(\S+)/},{token:["entity.name.function","text"],regex:/(@\S+)(:|\s*\()/},{token:["text","keyword","text","entity.name.function"],regex:/(^\s*)(call)(\s+)(\S+)/},{token:"comment",regex:/(^\s*#|;).*$/},{token:"text",regex:/\s+/}],form:[{token:["keyword","text","constant.numeric"],regex:/((?:optionmenu|choice)\s+)(\S+:\s+)([0-9]+)/},{token:["keyword","constant.numeric"],regex:/((?:option|button)\s+)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b)/},{token:["keyword","string"],regex:/((?:option|button)\s+)(.*)/},{token:["keyword","text","string"],regex:/((?:sentence|text)\s+)(\S+\s*)(.*)/},{token:["keyword","text","string","invalid.illegal"],regex:/(word\s+)(\S+\s*)(\S+)?(\s.*)?/},{token:["keyword","text","constant.language"],regex:/(boolean\s+)(\S+\s*)(0|1|"?(?:yes|no)"?)/},{token:["keyword","text","constant.numeric"],regex:/((?:real|natural|positive|integer)\s+)(\S+\s*)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b)/},{token:["keyword","string"],regex:/(comment\s+)(.*)/},{token:"keyword",regex:"endform",next:"start"}],for:[{token:["keyword","text","constant.numeric","text"],regex:/(from|to)(\s+)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?)(\s*)/},{token:["keyword","text"],regex:/(from|to)(\s+\S+\s*)/},{token:"text",regex:/$/,next:"start"}],brokenstring:[{token:["text","string"],regex:/(\s*\.{3})([^"]*)/},{token:"string",regex:/"/,next:"start"}]}};r.inherits(o,i),t.PraatHighlightRules=o}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var o=i[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new r(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,o=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var o=i.match(this.foldingStartMarker);if(o){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,a);var s=e.getCommentFoldRange(n,a+o[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){var o=i.match(this.foldingStopMarker);if(o){var a=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),o=t,a=n.length;t+=1;for(var s=t,c=e.getLength();++t<c;){n=e.getLine(t);var d=n.search(/\S/);if(-1!==d){if(r>d)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=o)break;if(l.isMultiLine())t=l.end.row;else if(r==d)break}s=t}}return new i(o,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),o=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++n<o;){t=e.getLine(n);var d=s.exec(t);if(d&&(d[1]?c--:c++,!c))break}var l=n;if(l>a)return new i(a,r,l,t.length)}}.call(a.prototype)}),ace.define("ace/mode/praat",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/praat_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,o=e("./praat_highlight_rules").PraatHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("./folding/cstyle").FoldMode,c=function(){this.HighlightRules=o,this.$outdent=new a,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};r.inherits(c,i),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),o=i.tokens;if(o.length&&"comment"==o[o.length-1].type)return r;if("start"==e){t.match(/^.*[\{\(\[:]\s*$/)&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/praat"}.call(c.prototype),t.Mode=c})}});