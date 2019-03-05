(window.webpackJsonppanneau=window.webpackJsonppanneau||[]).push([[12],{497:function(e,n){ace.define("ace/ext/chromevox",["require","exports","module","ace/editor","ace/config"],function(e,n,o){var t={};t.SpeechProperty,t.Cursor,t.Token,t.Annotation;var c={punctuationEcho:"none",relativePitch:-.6},r=[{substr:";",newSubstr:" semicolon "},{substr:":",newSubstr:" colon "}],i="annots",a="all_annots",s="toggle_location",u="mode",p="row_col",l="toggle_displacement",d="focus_text";t.editor=null;var f=null,v={},m=!1,g=!1,h=!1,k=null,x={},A={},w=function(){return"ace/keyboard/vim"===t.editor.keyBinding.getKeyboardHandler().$id},y=function(e){return t.editor.getSession().getTokenAt(e.row,e.column+1)},S=function(e){return t.editor.getSession().getLine(e.row)},b={constant:{prop:{rate:.8,pitch:.4,volume:.9}},entity:{prop:{rate:.8,pitch:.8,volume:.9}},keyword:{prop:{rate:.8,pitch:.3,volume:.9}},storage:{prop:{rate:.8,pitch:.7,volume:.9}},variable:{prop:{rate:.8,pitch:.8,volume:.9}},meta:{prop:{rate:1,pitch:.5,volume:.9},replace:[{substr:"</",newSubstr:" closing tag "},{substr:"/>",newSubstr:" close tag "},{substr:"<",newSubstr:" tag start "},{substr:">",newSubstr:" tag end "}]}},E={prop:E},C=function(e,n){for(var o=e,t=0;t<n.length;t++){var c=n[t],r=new RegExp(c.substr,"g");o=o.replace(r,c.newSubstr)}return o},T=function(e,n,o){var t={value:""};t.type=e[n].type;for(var c=n;c<o;c++)t.value+=e[c].value;return t},L=function(e,n){var o=t.editor.getSession().getTokens(e);if(0===o.length||function(e){var n=t.editor.getSession().getLine(e);return null!==/^\s*$/.exec(n)}(e))cvox.Api.playEarcon("EDITABLE_TEXT");else{var c=(o=function(e){if(e.length<=1)return e;for(var n=[],o=0,t=1;t<e.length;t++){var c=e[o],r=e[t];O(c)!==O(r)&&(n.push(T(e,o,t)),o=t)}return n.push(T(e,o,e.length)),n}(o))[0];o=o.filter(function(e){return e!==c}),M(c,n),o.forEach(_)}},_=function(e){M(e,1)},O=function(e){if(e&&e.type){var n=e.type.split(".");if(0!==n.length){var o=n[0],t=b[o];return t||E}}},M=function(e,n){var o=O(e),t=C(e.value,r);o.replace&&(t=C(t,o.replace)),cvox.Api.speak(t,n,o.prop)},K=function(e){var n=S(e);cvox.Api.speak(n[e.column],1)},N=function(e,n){var o=S(n).substring(e.column,n.column);o=o.replace(/ /g," space "),cvox.Api.speak(o)},R=function(e,n){if(1!==Math.abs(e.column-n.column)){var o=S(n).length;if(0===n.column||n.column===o)return void L(n.row,0);if(function(e){var n=S(e),o=n.substr(e.column-1);0===e.column&&(o=" "+n);return null!==/^\W(\w+)/.exec(o)}(n))return cvox.Api.stop(),void _(y(n))}K(n)},D=function(e){if(h)h=!1;else{var n=t.editor.selection.getCursor();n.row!==f.row?function(e){v[e.row]&&cvox.Api.playEarcon("ALERT_NONMODAL"),m?(cvox.Api.stop(),K(e),_(y(e)),L(e.row,1)):L(e.row,0)}(n):function(e,n){t.editor.selection.isEmpty()?g?N(e,n):R(e,n):(N(e,n),cvox.Api.speak("selected",1))}(f,n),f=n}},B=function(e){t.editor.selection.isEmpty()&&cvox.Api.speak("unselected")},I=function(e){switch(e.action){case"remove":cvox.Api.speak(e.text,0,c),h=!0;break;case"insert":cvox.Api.speak(e.text,0),h=!0}},$=function(e){var n=e.row,o=e.column;return!v[n]||!v[n][o]},q=function(e){var n=t.editor.getSession().getAnnotations();n.filter($).length>0&&cvox.Api.playEarcon("ALERT_NONMODAL"),function(e){v={};for(var n=0;n<e.length;n++){var o=e[n],t=o.row,c=o.column;v[t]||(v[t]={}),v[t][c]=o}}(n)},J=function(e){var n=e.type+" "+e.text+" on "+F(e.row,e.column);n=n.replace(";","semicolon"),cvox.Api.speak(n,1)},P=function(e){var n=v[e];for(var o in n)J(n[o])},F=function(e,n){return"row "+(e+1)+" column "+(n+1)},H=function(e){if(e.ctrlKey&&e.shiftKey){var n=x[e.keyCode];n&&n.func()}},V=function(e,n){if(w()){var o=n.keyBinding.$data.state;if(o!==k){switch(o){case"insertMode":cvox.Api.playEarcon("ALERT_MODAL"),cvox.Api.setKeyEcho(!0);break;case"start":cvox.Api.playEarcon("ALERT_MODAL"),cvox.Api.setKeyEcho(!1)}k=o}}},W=function(e){var n=e.detail.customCommand,o=A[n];o&&(o.func(),t.editor.focus())},X=function(e){e.match?L(f.row,0):cvox.Api.playEarcon("INVALID_KEYPRESS")},Y=[{keyCode:49,func:function(){P(f.row)},cmd:i,desc:"Speak annotations on line"},{keyCode:50,func:function(){for(var e in v)P(e)},cmd:a,desc:"Speak all annotations"},{keyCode:51,func:function(){if(w())switch(t.editor.keyBinding.$data.state){case"insertMode":cvox.Api.speak("Insert mode");break;case"start":cvox.Api.speak("Command mode")}},cmd:u,desc:"Speak Vim mode"},{keyCode:52,func:function(){(m=!m)?cvox.Api.speak("Speak location on row change enabled."):cvox.Api.speak("Speak location on row change disabled.")},cmd:s,desc:"Toggle speak row location"},{keyCode:53,func:function(){cvox.Api.speak(F(f.row,f.column))},cmd:p,desc:"Speak row and column"},{keyCode:54,func:function(){(g=!g)?cvox.Api.speak("Speak displacement on column changes."):cvox.Api.speak("Speak current character or word on column changes.")},cmd:l,desc:"Toggle speak displacement"},{keyCode:55,func:function(){t.editor.focus()},cmd:d,desc:"Focus text"}],j=function(e,n){t.editor=n,n.getSession().selection.on("changeCursor",D),n.getSession().selection.on("changeSelection",B),n.getSession().on("change",I),n.getSession().on("changeAnnotation",q),n.on("changeStatus",V),n.on("findSearchBox",X),n.container.addEventListener("keydown",H),f=n.selection.getCursor()},z=function(e){j(0,e),Y.forEach(function(e){x[e.keyCode]=e,A[e.cmd]=e}),e.on("focus",j),w()&&cvox.Api.setKeyEcho(!1),function(){var e=Y.map(function(e){return{desc:e.desc+(n=e.keyCode,"CONTROL + SHIFT "+String.fromCharCode(n)),cmd:e.cmd};var n}),n=document.querySelector("body");n.setAttribute("contextMenuActions",JSON.stringify(e)),n.addEventListener("ATCustomEvent",W,!0)}()};var G=0,Q=15;function U(e){if("undefined"!==typeof cvox&&cvox&&cvox.Api)z(e);else{if(++G>=Q)return;window.setTimeout(U,500,e)}}var Z=e("../editor").Editor;e("../config").defineOptions(Z.prototype,"editor",{enableChromevoxEnhancements:{set:function(e){e&&U(this)},value:!0}})}),ace.acequire(["ace/ext/chromevox"],function(){})}}]);