(window.webpackJsonppanneau=window.webpackJsonppanneau||[]).push([[23],{507:function(e,n){ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],function(e,n,t){"use strict";var i=e("../lib/event");n.contextMenuHandler=function(e){var n=e.target,t=n.textInput.getElement();if(n.selection.isEmpty()){var s=n.getCursorPosition(),o=n.session.getWordRange(s.row,s.column),c=n.session.getTextRange(o);if(n.session.tokenRe.lastIndex=0,n.session.tokenRe.test(c)){var r=c+" \x01\x01";t.value=r,t.setSelectionRange(c.length,c.length+1),t.setSelectionRange(0,0),t.setSelectionRange(0,c.length);var l=!1;i.addListener(t,"keydown",function e(){i.removeListener(t,"keydown",e),l=!0}),n.textInput.setInputHandler(function(e){if(console.log(e,r,t.selectionStart,t.selectionEnd),e==r)return"";if(0===e.lastIndexOf(r,0))return e.slice(r.length);if(e.substr(t.selectionEnd)==r)return e.slice(0,-r.length);if("\x01\x01"==e.slice(-2)){var i=e.slice(0,-2);if(" "==i.slice(-1))return l?i.substring(0,t.selectionEnd):(i=i.slice(0,-1),n.session.replace(o,i),"")}return e})}}};var s=e("../editor").Editor;e("../config").defineOptions(s.prototype,"editor",{spellcheck:{set:function(e){this.textInput.getElement().spellcheck=!!e,e?this.on("nativecontextmenu",n.contextMenuHandler):this.removeListener("nativecontextmenu",n.contextMenuHandler)},value:!0}})}),ace.acequire(["ace/ext/spellcheck"],function(){})}}]);