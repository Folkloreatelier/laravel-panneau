webpackJsonppanneau([459],{1612:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(417),r=a(o),u=n(75),i=a(u),s=n(97),l=a(s),c=n(98),d=a(c),f=n(0),p=a(f),h=n(1),v=a(h),m=n(23),E=(a(m),n(1737)),g=a(E),y=n(1738),M=a(y),_=n(1725),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(_),N=function(e){function t(n){(0,i.default)(this,t);var a=(0,l.default)(this,e.call(this,n));a.onEnd=function(){a.setState({dragging:!1}),a.removeDocumentEvents(),a.props.onAfterChange(a.getValue())};var o=void 0!==n.defaultValue?n.defaultValue:n.min,r=void 0!==n.value?n.value:o;return a.state={value:a.trimAlignValue(r),dragging:!1},a}return(0,d.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()},t.prototype.componentWillReceiveProps=function(e){if("value"in e||"min"in e||"max"in e){var t=this.state.value,n=void 0!==e.value?e.value:t,a=this.trimAlignValue(n,e);a!==t&&(this.setState({value:a}),S.isValueOutOfRange(n,e)&&this.props.onChange(a))}},t.prototype.onChange=function(e){var t=this.props;!("value"in t)&&this.setState(e);var n=e.value;t.onChange(n)},t.prototype.onStart=function(e){this.setState({dragging:!0});var t=this.props,n=this.getValue();t.onBeforeChange(n);var a=this.calcValueByPos(e);this.startValue=a,this.startPosition=e,a!==n&&this.onChange({value:a})},t.prototype.onMove=function(e,t){S.pauseEvent(e);var n=this.state.value,a=this.calcValueByPos(t);a!==n&&this.onChange({value:a})},t.prototype.onKeyboard=function(e){var t=S.getKeyboardValueMutator(e);if(t){S.pauseEvent(e);var n=this.state,a=n.value,o=t(a,this.props),r=this.trimAlignValue(o);if(r===a)return;this.onChange({value:r})}},t.prototype.getValue=function(){return this.state.value},t.prototype.getLowerBound=function(){return this.props.min},t.prototype.getUpperBound=function(){return this.state.value},t.prototype.trimAlignValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)({},this.props,t),a=S.ensureValueInRange(e,n);return S.ensureValuePrecision(a,n)},t.prototype.render=function(){var e=this,t=this.props,n=t.prefixCls,a=t.vertical,o=t.included,u=t.disabled,i=t.minimumTrackStyle,s=t.trackStyle,l=t.handleStyle,c=t.min,d=t.max,f=t.handle,h=this.state,v=h.value,m=h.dragging,E=this.calcOffset(v),y=f({className:n+"-handle",vertical:a,offset:E,value:v,dragging:m,disabled:u,min:c,max:d,index:0,style:l[0]||l,ref:function(t){return e.saveHandle(0,t)}}),M=s[0]||s;return{tracks:p.default.createElement(g.default,{className:n+"-track",vertical:a,included:o,offset:0,length:E,style:(0,r.default)({},i,M)}),handles:y}},t}(p.default.Component);N.propTypes={defaultValue:v.default.number,value:v.default.number,disabled:v.default.bool,autoFocus:v.default.bool},t.default=(0,M.default)(N),e.exports=t.default},1725:function(e,t,n){"use strict";function a(e,t){return Object.keys(t).some(function(n){return e.target===(0,v.findDOMNode)(t[n])})}function o(e,t){var n=t.min,a=t.max;return e<n||e>a}function r(e){return e.touches.length>1||"touchend"===e.type.toLowerCase()&&e.touches.length>0}function u(e,t){var n=t.marks,a=t.step,o=t.min,r=Object.keys(n).map(parseFloat);if(null!==a){var u=Math.round((e-o)/a)*a+o;r.push(u)}var i=r.map(function(t){return Math.abs(e-t)});return r[i.indexOf(Math.min.apply(Math,i))]}function i(e){var t=e.toString(),n=0;return t.indexOf(".")>=0&&(n=t.length-t.indexOf(".")-1),n}function s(e,t){return e?t.clientY:t.pageX}function l(e,t){return e?t.touches[0].clientY:t.touches[0].pageX}function c(e,t){var n=t.getBoundingClientRect();return e?n.top+.5*n.height:n.left+.5*n.width}function d(e,t){var n=t.max,a=t.min;return e<=a?a:e>=n?n:e}function f(e,t){var n=t.step,a=u(e,t);return null===n?a:parseFloat(a.toFixed(i(n)))}function p(e){e.stopPropagation(),e.preventDefault()}function h(e){switch(e.keyCode){case E.default.UP:case E.default.RIGHT:return function(e,t){return e+t.step};case E.default.DOWN:case E.default.LEFT:return function(e,t){return e-t.step};case E.default.END:return function(e,t){return t.max};case E.default.HOME:return function(e,t){return t.min};case E.default.PAGE_UP:return function(e,t){return e+2*t.step};case E.default.PAGE_DOWN:return function(e,t){return e-2*t.step};default:return}}t.__esModule=!0,t.isEventFromHandle=a,t.isValueOutOfRange=o,t.isNotTouchEvent=r,t.getClosestPoint=u,t.getPrecision=i,t.getMousePosition=s,t.getTouchPosition=l,t.getHandleCenterPosition=c,t.ensureValueInRange=d,t.ensureValuePrecision=f,t.pauseEvent=p,t.getKeyboardValueMutator=h;var v=n(116),m=n(1746),E=function(e){return e&&e.__esModule?e:{default:e}}(m)},1737:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(417),r=a(o),u=n(0),i=a(u),s=function(e){var t=e.className,n=e.included,a=e.vertical,o=e.offset,u=e.length,s=e.style,l=a?{bottom:o+"%",height:u+"%"}:{left:o+"%",width:u+"%"},c=(0,r.default)({visibility:n?"visible":"hidden"},s,l);return i.default.createElement("div",{className:t,style:c})};t.default=s,e.exports=t.default},1738:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(){}function r(e){var t,n;return n=t=function(e){function t(n){(0,d.default)(this,t);var a=(0,p.default)(this,e.call(this,n));a.onMouseDown=function(e){if(0===e.button){var t=a.props.vertical,n=D.getMousePosition(t,e);if(D.isEventFromHandle(e,a.handlesRefs)){var o=D.getHandleCenterPosition(t,e.target);a.dragOffset=n-o,n=o}else a.dragOffset=0;a.removeDocumentEvents(),a.onStart(n),a.addDocumentMouseEvents(),D.pauseEvent(e)}},a.onTouchStart=function(e){if(!D.isNotTouchEvent(e)){var t=a.props.vertical,n=D.getTouchPosition(t,e);if(D.isEventFromHandle(e,a.handlesRefs)){var o=D.getHandleCenterPosition(t,e.target);a.dragOffset=n-o,n=o}else a.dragOffset=0;a.onStart(n),a.addDocumentTouchEvents(),D.pauseEvent(e)}},a.onFocus=function(e){var t=a.props,n=t.onFocus,o=t.vertical;if(D.isEventFromHandle(e,a.handlesRefs)){var r=D.getHandleCenterPosition(o,e.target);a.dragOffset=0,a.onStart(r),D.pauseEvent(e),n&&n(e)}},a.onBlur=function(e){var t=a.props.onBlur;a.onEnd(e),t&&t(e)},a.onMouseUp=function(){a.onEnd(),a.removeDocumentEvents()},a.onMouseMove=function(e){if(!a.sliderRef)return void a.onEnd();var t=D.getMousePosition(a.props.vertical,e);a.onMove(e,t-a.dragOffset)},a.onTouchMove=function(e){if(D.isNotTouchEvent(e)||!a.sliderRef)return void a.onEnd();var t=D.getTouchPosition(a.props.vertical,e);a.onMove(e,t-a.dragOffset)},a.onKeyDown=function(e){a.sliderRef&&D.isEventFromHandle(e,a.handlesRefs)&&a.onKeyboard(e)},a.saveSlider=function(e){a.sliderRef=e};return a.handlesRefs={},a}return(0,v.default)(t,e),t.prototype.componentWillUnmount=function(){e.prototype.componentWillUnmount&&e.prototype.componentWillUnmount.call(this),this.removeDocumentEvents()},t.prototype.componentDidMount=function(){this.document=this.sliderRef&&this.sliderRef.ownerDocument},t.prototype.addDocumentTouchEvents=function(){this.onTouchMoveListener=(0,_.default)(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=(0,_.default)(this.document,"touchend",this.onEnd)},t.prototype.addDocumentMouseEvents=function(){this.onMouseMoveListener=(0,_.default)(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=(0,_.default)(this.document,"mouseup",this.onEnd)},t.prototype.removeDocumentEvents=function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()},t.prototype.focus=function(){this.props.disabled||this.handlesRefs[0].focus()},t.prototype.blur=function(){this.props.disabled||this.handlesRefs[0].blur()},t.prototype.getSliderStart=function(){var e=this.sliderRef,t=e.getBoundingClientRect();return this.props.vertical?t.top:t.left},t.prototype.getSliderLength=function(){var e=this.sliderRef;if(!e)return 0;var t=e.getBoundingClientRect();return this.props.vertical?t.height:t.width},t.prototype.calcValue=function(e){var t=this.props,n=t.vertical,a=t.min,o=t.max,r=Math.abs(Math.max(e,0)/this.getSliderLength());return n?(1-r)*(o-a)+a:r*(o-a)+a},t.prototype.calcValueByPos=function(e){var t=e-this.getSliderStart();return this.trimAlignValue(this.calcValue(t))},t.prototype.calcOffset=function(e){var t=this.props,n=t.min;return(e-n)/(t.max-n)*100},t.prototype.saveHandle=function(e,t){this.handlesRefs[e]=t},t.prototype.render=function(){var t,n=this.props,a=n.prefixCls,r=n.className,u=n.marks,i=n.dots,s=n.step,c=n.included,d=n.disabled,f=n.vertical,p=n.min,h=n.max,v=n.children,m=n.maximumTrackStyle,g=n.style,y=n.railStyle,M=n.dotStyle,_=n.activeDotStyle,S=e.prototype.render.call(this),b=S.tracks,T=S.handles,P=(0,N.default)(a,(t={},t[a+"-with-marks"]=Object.keys(u).length,t[a+"-disabled"]=d,t[a+"-vertical"]=f,t[r]=r,t));return E.default.createElement("div",{ref:this.saveSlider,className:P,onTouchStart:d?o:this.onTouchStart,onMouseDown:d?o:this.onMouseDown,onMouseUp:d?o:this.onMouseUp,onKeyDown:d?o:this.onKeyDown,onFocus:d?o:this.onFocus,onBlur:d?o:this.onBlur,style:g},E.default.createElement("div",{className:a+"-rail",style:(0,l.default)({},m,y)}),b,E.default.createElement(O.default,{prefixCls:a,vertical:f,marks:u,dots:i,step:s,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:h,min:p,dotStyle:M,activeDotStyle:_}),T,E.default.createElement(C.default,{className:a+"-mark",vertical:f,marks:u,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:h,min:p}),v)},t}(e),t.displayName="ComponentEnhancer("+e.displayName+")",t.propTypes=(0,l.default)({},e.propTypes,{min:y.default.number,max:y.default.number,step:y.default.number,marks:y.default.object,included:y.default.bool,className:y.default.string,prefixCls:y.default.string,disabled:y.default.bool,children:y.default.any,onBeforeChange:y.default.func,onChange:y.default.func,onAfterChange:y.default.func,handle:y.default.func,dots:y.default.bool,vertical:y.default.bool,style:y.default.object,minimumTrackStyle:y.default.object,maximumTrackStyle:y.default.object,handleStyle:y.default.oneOfType([y.default.object,y.default.arrayOf(y.default.object)]),trackStyle:y.default.oneOfType([y.default.object,y.default.arrayOf(y.default.object)]),railStyle:y.default.object,dotStyle:y.default.object,activeDotStyle:y.default.object,autoFocus:y.default.bool,onFocus:y.default.func,onBlur:y.default.func}),t.defaultProps=(0,l.default)({},e.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(e){var t=e.index,n=(0,i.default)(e,["index"]);return delete n.dragging,E.default.createElement(R.default,(0,l.default)({},n,{key:t}))},onBeforeChange:o,onChange:o,onAfterChange:o,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),n}t.__esModule=!0;var u=n(156),i=a(u),s=n(417),l=a(s),c=n(75),d=a(c),f=n(97),p=a(f),h=n(98),v=a(h);t.default=r;var m=n(0),E=a(m),g=n(1),y=a(g),M=n(1739),_=a(M),S=n(5),N=a(S),b=n(23),T=(a(b),n(1743)),O=a(T),P=n(1744),C=a(P),U=n(1745),R=a(U),A=n(1725),D=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(A);e.exports=t.default},1739:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){var a=s.default.unstable_batchedUpdates?function(e){s.default.unstable_batchedUpdates(n,e)}:n;return(0,u.default)(e,t,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(1740),u=a(r),i=n(116),s=a(i);e.exports=t.default},1740:function(e,t,n){"use strict";function a(e,t,n){function a(t){var a=new r.default(t);n.call(e,a)}return e.addEventListener?(e.addEventListener(t,a,!1),{remove:function(){e.removeEventListener(t,a,!1)}}):e.attachEvent?(e.attachEvent("on"+t,a),{remove:function(){e.detachEvent("on"+t,a)}}):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=n(1741),r=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},1741:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return null===e||void 0===e}function r(){return f}function u(){return p}function i(e){var t=e.type,n="function"===typeof e.stopPropagation||"boolean"===typeof e.cancelBubble;l.default.call(this),this.nativeEvent=e;var a=u;"defaultPrevented"in e?a=e.defaultPrevented?r:u:"getPreventDefault"in e?a=e.getPreventDefault()?r:u:"returnValue"in e&&(a=e.returnValue===p?r:u),this.isDefaultPrevented=a;var o=[],i=void 0,s=void 0,c=h.concat();for(v.forEach(function(e){t.match(e.reg)&&(c=c.concat(e.props),e.fix&&o.push(e.fix))}),i=c.length;i;)s=c[--i],this[s]=e[s];for(!this.target&&n&&(this.target=e.srcElement||document),this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode),i=o.length;i;)(0,o[--i])(this,e);this.timeStamp=e.timeStamp||Date.now()}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1742),l=a(s),c=n(117),d=a(c),f=!0,p=!1,h=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"],v=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(e,t){o(e.which)&&(e.which=o(t.charCode)?t.keyCode:t.charCode),void 0===e.metaKey&&(e.metaKey=e.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(e,t){var n=void 0,a=void 0,o=void 0,r=t.wheelDelta,u=t.axis,i=t.wheelDeltaY,s=t.wheelDeltaX,l=t.detail;r&&(o=r/120),l&&(o=0-(l%3===0?l/3:l)),void 0!==u&&(u===e.HORIZONTAL_AXIS?(a=0,n=0-o):u===e.VERTICAL_AXIS&&(n=0,a=o)),void 0!==i&&(a=i/120),void 0!==s&&(n=-1*s/120),n||a||(a=o),void 0!==n&&(e.deltaX=n),void 0!==a&&(e.deltaY=a),void 0!==o&&(e.delta=o)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(e,t){var n=void 0,a=void 0,r=void 0,u=e.target,i=t.button;return u&&o(e.pageX)&&!o(t.clientX)&&(n=u.ownerDocument||document,a=n.documentElement,r=n.body,e.pageX=t.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),e.which||void 0===i||(e.which=1&i?1:2&i?3:4&i?2:0),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===u?e.toElement:e.fromElement),e}}],m=l.default.prototype;(0,d.default)(i.prototype,m,{constructor:i,preventDefault:function(){var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=p,m.preventDefault.call(this)},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=f,m.stopPropagation.call(this)}}),t.default=i,e.exports=t.default},1742:function(e,t,n){"use strict";function a(){return!1}function o(){return!0}function r(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}Object.defineProperty(t,"__esModule",{value:!0}),r.prototype={isEventObject:1,constructor:r,isDefaultPrevented:a,isPropagationStopped:a,isImmediatePropagationStopped:a,preventDefault:function(){this.isDefaultPrevented=o},stopPropagation:function(){this.isPropagationStopped=o},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=r,e.exports=t.default},1743:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(417),r=a(o),u=n(0),i=a(u),s=n(5),l=a(s),c=n(23),d=a(c),f=function(e,t,n,a,o,r){(0,d.default)(!n||a>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var u=Object.keys(t).map(parseFloat);if(n)for(var i=o;i<=r;i+=a)u.indexOf(i)>=0||u.push(i);return u},p=function(e){var t=e.prefixCls,n=e.vertical,a=e.marks,o=e.dots,u=e.step,s=e.included,c=e.lowerBound,d=e.upperBound,p=e.max,h=e.min,v=e.dotStyle,m=e.activeDotStyle,E=p-h,g=f(0,a,o,u,h,p).map(function(e){var a,o=Math.abs(e-h)/E*100+"%",u=!s&&e===d||s&&e<=d&&e>=c,f=n?(0,r.default)({bottom:o},v):(0,r.default)({left:o},v);u&&(f=(0,r.default)({},f,m));var p=(0,l.default)((a={},a[t+"-dot"]=!0,a[t+"-dot-active"]=u,a));return i.default.createElement("span",{className:p,style:f,key:e})});return i.default.createElement("div",{className:t+"-step"},g)};t.default=p,e.exports=t.default},1744:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(417),r=a(o),u=n(0),i=a(u),s=n(5),l=a(s),c=function(e){var t=e.className,n=e.vertical,a=e.marks,o=e.included,u=e.upperBound,s=e.lowerBound,c=e.max,d=e.min,f=Object.keys(a),p=f.length,h=p>1?100/(p-1):100,v=.9*h,m=c-d,E=f.map(parseFloat).sort(function(e,t){return e-t}).map(function(e){var c,f=a[e],p="object"===typeof f&&!i.default.isValidElement(f),h=p?f.label:f;if(!h)return null;var E=!o&&e===u||o&&e<=u&&e>=s,g=(0,l.default)((c={},c[t+"-text"]=!0,c[t+"-text-active"]=E,c)),y={marginBottom:"-50%",bottom:(e-d)/m*100+"%"},M={width:v+"%",marginLeft:-v/2+"%",left:(e-d)/m*100+"%"},_=n?y:M,S=p?(0,r.default)({},_,f.style):_;return i.default.createElement("span",{className:g,style:S,key:e},h)});return i.default.createElement("div",{className:t},E)};t.default=c,e.exports=t.default},1745:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(417),r=a(o),u=n(156),i=a(u),s=n(75),l=a(s),c=n(97),d=a(c),f=n(98),p=a(f),h=n(0),v=a(h),m=n(1),E=a(m),g=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.focus=function(){this.handle.focus()},t.prototype.blur=function(){this.handle.blur()},t.prototype.render=function(){var e=this,t=this.props,n=t.className,a=t.vertical,o=t.offset,u=t.style,s=t.disabled,l=t.min,c=t.max,d=t.value,f=(0,i.default)(t,["className","vertical","offset","style","disabled","min","max","value"]),p=a?{bottom:o+"%"}:{left:o+"%"},h=(0,r.default)({},u,p),m={};return void 0!==d&&(m=(0,r.default)({},m,{"aria-valuemin":l,"aria-valuemax":c,"aria-valuenow":d,"aria-disabled":!!s})),v.default.createElement("div",(0,r.default)({ref:function(t){return e.handle=t},role:"slider",tabIndex:"0"},m,f,{className:n,style:h}))},t}(v.default.Component);t.default=g,g.propTypes={className:E.default.string,vertical:E.default.bool,offset:E.default.number,style:E.default.object,disabled:E.default.bool,min:E.default.number,max:E.default.number,value:E.default.number},e.exports=t.default},1746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229};a.isTextModifyingKeyEvent=function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=a.F1&&t<=a.F12)return!1;switch(t){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},a.isCharacterKey=function(e){if(e>=a.ZERO&&e<=a.NINE)return!0;if(e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY)return!0;if(e>=a.A&&e<=a.Z)return!0;if(-1!==window.navigation.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}},t.default=a,e.exports=t.default}});