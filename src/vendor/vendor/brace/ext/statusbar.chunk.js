webpackJsonppanneau([448],{873:function(e,t){ace.define("ace/ext/statusbar",["require","exports","module","ace/lib/dom","ace/lib/lang"],function(e,t,n){"use strict";var a=e("ace/lib/dom"),i=e("ace/lib/lang"),c=function(e,t){this.element=a.createElement("div"),this.element.className="ace_status-indicator",this.element.style.cssText="display: inline-block;",t.appendChild(this.element);var n=i.delayedCall(function(){this.updateStatus(e)}.bind(this)).schedule.bind(null,100);e.on("changeStatus",n),e.on("changeSelection",n),e.on("keyboardActivity",n)};(function(){this.updateStatus=function(e){function t(e,t){e&&n.push(e,t||"|")}var n=[];t(e.keyBinding.getStatusText(e)),e.commands.recording&&t("REC");var a=e.selection,i=a.lead;if(!a.isEmpty()){var c=e.getSelectionRange();t("("+(c.end.row-c.start.row)+":"+(c.end.column-c.start.column)+")"," ")}t(i.row+":"+i.column," "),a.rangeCount&&t("["+a.rangeCount+"]"," "),n.pop(),this.element.textContent=n.join("")}}).call(c.prototype),t.StatusBar=c}),function(){ace.acequire(["ace/ext/statusbar"],function(){})}()}});