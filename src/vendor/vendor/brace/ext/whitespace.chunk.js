webpackJsonppanneau([435],{866:function(e,t){ace.define("ace/ext/whitespace",["require","exports","module","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../lib/lang");t.$detectIndentation=function(e,t){for(var n=[],r=[],a=0,i=0,s=Math.min(e.length,1e3),c=0;c<s;c++){var o=e[c];if(/^\s*[^*+\-\s]/.test(o)){if("\t"==o[0])a++,i=-Number.MAX_VALUE;else{var g=o.match(/^ */)[0].length;if(g&&"\t"!=o[g]){var h=g-i;!(h>0)||i%h||g%h||(r[h]=(r[h]||0)+1),n[g]=(n[g]||0)+1}i=g}for(;c<s&&"\\"==o[o.length-1];)o=e[c++]}}for(var l=r.reduce(function(e,t){return e+t},0),f={score:0,length:0},u=0,c=1;c<12;c++){var v=function(e){for(var t=0,r=e;r<n.length;r+=e)t+=n[r]||0;return t}(c);1==c?(u=v,v=n[1]?.9:.8,n.length||(v=0)):v/=u,r[c]&&(v+=r[c]/l),v>f.score&&(f={score:v,length:c})}if(f.score&&f.score>1.4)var d=f.length;return a>u+1?((1==d||u<a/4||f.score<1.8)&&(d=void 0),{ch:"\t",length:d}):u>a+1?{ch:" ",length:d}:void 0},t.detectIndentation=function(e){var n=e.getLines(0,1e3),r=t.$detectIndentation(n)||{};return r.ch&&e.setUseSoftTabs(" "==r.ch),r.length&&e.setTabSize(r.length),r},t.trimTrailingSpace=function(e,t){for(var n=e.getDocument(),r=n.getAllLines(),a=t?-1:0,i=0,s=r.length;i<s;i++){var c=r[i],o=c.search(/\s+$/);o>a&&n.removeInLine(i,o,c.length)}},t.convertIndentation=function(e,t,n){var a=e.getTabString()[0],i=e.getTabSize();n||(n=i),t||(t=a);for(var s="\t"==t?t:r.stringRepeat(t,n),c=e.doc,o=c.getAllLines(),g={},h={},l=0,f=o.length;l<f;l++){var u=o[l],v=u.match(/^\s*/)[0];if(v){var d=e.$getStringScreenWidth(v)[0],p=Math.floor(d/i),m=d%i,S=g[p]||(g[p]=r.stringRepeat(s,p));S+=h[m]||(h[m]=r.stringRepeat(" ",m)),S!=v&&(c.removeInLine(l,0,v.length),c.insertInLine({row:l,column:0},S))}}e.setTabSize(n),e.setUseSoftTabs(" "==t)},t.$parseStringArg=function(e){var t={};/t/.test(e)?t.ch="\t":/s/.test(e)&&(t.ch=" ");var n=e.match(/\d+/);return n&&(t.length=parseInt(n[0],10)),t},t.$parseArg=function(e){return e?"string"==typeof e?t.$parseStringArg(e):"string"==typeof e.text?t.$parseStringArg(e.text):e:{}},t.commands=[{name:"detectIndentation",exec:function(e){t.detectIndentation(e.session)}},{name:"trimTrailingSpace",exec:function(e){t.trimTrailingSpace(e.session)}},{name:"convertIndentation",exec:function(e,n){var r=t.$parseArg(n);t.convertIndentation(e.session,r.ch,r.length)}},{name:"setIndentation",exec:function(e,n){var r=t.$parseArg(n);r.length&&e.session.setTabSize(r.length),r.ch&&e.session.setUseSoftTabs(" "==r.ch)}}]}),function(){ace.acequire(["ace/ext/whitespace"],function(){})}()}});