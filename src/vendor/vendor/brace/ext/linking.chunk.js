webpackJsonppanneau([470],{880:function(e,o){ace.define("ace/ext/linking",["require","exports","module","ace/editor","ace/config"],function(e,o,i){function n(e){var o=e.editor;if(e.getAccelKey()){var o=e.editor,i=e.getDocumentPosition(),n=o.session,t=n.getTokenAt(i.row,i.column);o._emit("linkHover",{position:i,token:t})}}function t(e){var o=e.getAccelKey();if(0==e.getButton()&&o){var i=e.editor,n=e.getDocumentPosition(),t=i.session,c=t.getTokenAt(n.row,n.column);i._emit("linkClick",{position:n,token:c})}}var c=e("ace/editor").Editor;e("../config").defineOptions(c.prototype,"editor",{enableLinking:{set:function(e){e?(this.on("click",t),this.on("mousemove",n)):(this.off("click",t),this.off("mousemove",n))},value:!1}})}),function(){ace.acequire(["ace/ext/linking"],function(){})}()}});