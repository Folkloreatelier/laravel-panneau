webpackJsonppanneau([452],{852:function(e,n){ace.define("ace/ext/chromevox",["require","exports","module","ace/editor","ace/config"],function(e,n,o){function t(){return"undefined"!==typeof cvox&&cvox&&cvox.Api}function c(e){if(t())le(e);else{if(++fe>=de)return;window.setTimeout(c,500,e)}}var r={};r.SpeechProperty,r.Cursor,r.Token,r.Annotation;var i={rate:.8,pitch:.4,volume:.9},a={rate:1,pitch:.5,volume:.9},u={rate:.8,pitch:.8,volume:.9},s={rate:.8,pitch:.3,volume:.9},p={rate:.8,pitch:.7,volume:.9},l={rate:.8,pitch:.8,volume:.9},f={punctuationEcho:"none",relativePitch:-.6},d=[{substr:";",newSubstr:" semicolon "},{substr:":",newSubstr:" colon "}],v={SPEAK_ANNOT:"annots",SPEAK_ALL_ANNOTS:"all_annots",TOGGLE_LOCATION:"toggle_location",SPEAK_MODE:"mode",SPEAK_ROW_COL:"row_col",TOGGLE_DISPLACEMENT:"toggle_displacement",FOCUS_TEXT:"focus_text"};r.editor=null;var m=null,A={},g=!1,E=!1,h=!1,k=null,S={},x={},y=function(e){return"CONTROL + SHIFT "+String.fromCharCode(e)},w=function(){return"ace/keyboard/vim"===r.editor.keyBinding.getKeyboardHandler().$id},T=function(e){return r.editor.getSession().getTokenAt(e.row,e.column+1)},O=function(e){return r.editor.getSession().getLine(e.row)},b=function(e){A[e.row]&&cvox.Api.playEarcon("ALERT_NONMODAL"),g?(cvox.Api.stop(),B(e),I(T(e)),D(e.row,1)):D(e.row,0)},C=function(e){var n=O(e),o=n.substr(e.column-1);return 0===e.column&&(o=" "+n),null!==/^\W(\w+)/.exec(o)},L={constant:{prop:i},entity:{prop:u},keyword:{prop:s},storage:{prop:p},variable:{prop:l},meta:{prop:a,replace:[{substr:"</",newSubstr:" closing tag "},{substr:"/>",newSubstr:" close tag "},{substr:"<",newSubstr:" tag start "},{substr:">",newSubstr:" tag end "}]}},_={prop:_},N=function(e,n){for(var o=e,t=0;t<n.length;t++){var c=n[t],r=new RegExp(c.substr,"g");o=o.replace(r,c.newSubstr)}return o},K=function(e,n,o){var t={};t.value="",t.type=e[n].type;for(var c=n;c<o;c++)t.value+=e[c].value;return t},P=function(e){if(e.length<=1)return e;for(var n=[],o=0,t=1;t<e.length;t++){var c=e[o],r=e[t];R(c)!==R(r)&&(n.push(K(e,o,t)),o=t)}return n.push(K(e,o,e.length)),n},M=function(e){return null!==/^\s*$/.exec(r.editor.getSession().getLine(e))},D=function(e,n){var o=r.editor.getSession().getTokens(e);if(0===o.length||M(e))return void cvox.Api.playEarcon("EDITABLE_TEXT");o=P(o);var t=o[0];o=o.filter(function(e){return e!==t}),G(t,n),o.forEach(I)},I=function(e){G(e,1)},R=function(e){if(e&&e.type){var n=e.type.split(".");if(0!==n.length){var o=n[0],t=L[o];return t||_}}},G=function(e,n){var o=R(e),t=N(e.value,d);o.replace&&(t=N(t,o.replace)),cvox.Api.speak(t,n,o.prop)},B=function(e){var n=O(e);cvox.Api.speak(n[e.column],1)},F=function(e,n){var o=O(n),t=o.substring(e.column,n.column);t=t.replace(/ /g," space "),cvox.Api.speak(t)},$=function(e,n){if(1!==Math.abs(e.column-n.column)){var o=O(n).length;if(0===n.column||n.column===o)return void D(n.row,0);if(C(n))return cvox.Api.stop(),void I(T(n))}B(n)},q=function(e,n){r.editor.selection.isEmpty()?E?F(e,n):$(e,n):(F(e,n),cvox.Api.speak("selected",1))},W=function(e){if(h)return void(h=!1);var n=r.editor.selection.getCursor();n.row!==m.row?b(n):q(m,n),m=n},X=function(e){r.editor.selection.isEmpty()&&cvox.Api.speak("unselected")},H=function(e){switch(e.action){case"remove":cvox.Api.speak(e.text,0,f),h=!0;break;case"insert":cvox.Api.speak(e.text,0),h=!0}},J=function(e){var n=e.row,o=e.column;return!A[n]||!A[n][o]},U=function(e){A={};for(var n=0;n<e.length;n++){var o=e[n],t=o.row,c=o.column;A[t]||(A[t]={}),A[t][c]=o}},V=function(e){var n=r.editor.getSession().getAnnotations();n.filter(J).length>0&&cvox.Api.playEarcon("ALERT_NONMODAL"),U(n)},Y=function(e){var n=e.type+" "+e.text+" on "+z(e.row,e.column);n=n.replace(";","semicolon"),cvox.Api.speak(n,1)},j=function(e){var n=A[e];for(var o in n)Y(n[o])},z=function(e,n){return"row "+(e+1)+" column "+(n+1)},Q=function(){cvox.Api.speak(z(m.row,m.column))},Z=function(){for(var e in A)j(e)},ee=function(){if(w())switch(r.editor.keyBinding.$data.state){case"insertMode":cvox.Api.speak("Insert mode");break;case"start":cvox.Api.speak("Command mode")}},ne=function(){g=!g,g?cvox.Api.speak("Speak location on row change enabled."):cvox.Api.speak("Speak location on row change disabled.")},oe=function(){E=!E,E?cvox.Api.speak("Speak displacement on column changes."):cvox.Api.speak("Speak current character or word on column changes.")},te=function(e){if(e.ctrlKey&&e.shiftKey){var n=S[e.keyCode];n&&n.func()}},ce=function(e,n){if(w()){var o=n.keyBinding.$data.state;if(o!==k){switch(o){case"insertMode":cvox.Api.playEarcon("ALERT_MODAL"),cvox.Api.setKeyEcho(!0);break;case"start":cvox.Api.playEarcon("ALERT_MODAL"),cvox.Api.setKeyEcho(!1)}k=o}}},re=function(e){var n=e.detail.customCommand,o=x[n];o&&(o.func(),r.editor.focus())},ie=function(){var e=se.map(function(e){return{desc:e.desc+y(e.keyCode),cmd:e.cmd}}),n=document.querySelector("body");n.setAttribute("contextMenuActions",JSON.stringify(e)),n.addEventListener("ATCustomEvent",re,!0)},ae=function(e){e.match?D(m.row,0):cvox.Api.playEarcon("INVALID_KEYPRESS")},ue=function(){r.editor.focus()},se=[{keyCode:49,func:function(){j(m.row)},cmd:v.SPEAK_ANNOT,desc:"Speak annotations on line"},{keyCode:50,func:Z,cmd:v.SPEAK_ALL_ANNOTS,desc:"Speak all annotations"},{keyCode:51,func:ee,cmd:v.SPEAK_MODE,desc:"Speak Vim mode"},{keyCode:52,func:ne,cmd:v.TOGGLE_LOCATION,desc:"Toggle speak row location"},{keyCode:53,func:Q,cmd:v.SPEAK_ROW_COL,desc:"Speak row and column"},{keyCode:54,func:oe,cmd:v.TOGGLE_DISPLACEMENT,desc:"Toggle speak displacement"},{keyCode:55,func:ue,cmd:v.FOCUS_TEXT,desc:"Focus text"}],pe=function(e,n){r.editor=n,n.getSession().selection.on("changeCursor",W),n.getSession().selection.on("changeSelection",X),n.getSession().on("change",H),n.getSession().on("changeAnnotation",V),n.on("changeStatus",ce),n.on("findSearchBox",ae),n.container.addEventListener("keydown",te),m=n.selection.getCursor()},le=function(e){pe(0,e),se.forEach(function(e){S[e.keyCode]=e,x[e.cmd]=e}),e.on("focus",pe),w()&&cvox.Api.setKeyEcho(!1),ie()},fe=0,de=15,ve=e("../editor").Editor;e("../config").defineOptions(ve.prototype,"editor",{enableChromevoxEnhancements:{set:function(e){e&&c(this)},value:!0}})}),function(){ace.acequire(["ace/ext/chromevox"],function(){})}()}});