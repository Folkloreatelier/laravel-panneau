webpackJsonppanneau([77],{182:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(800),n=l(u),r=a(75),d=l(r),f=a(20),s=l(f),o=a(23),i=l(o),c=a(24),m=l(c),p=a(0),b=l(p),v=a(1),h=l(v),y=function(e){function t(){return(0,s.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,m.default)(t,e),t.prototype.focus=function(){this.handle.focus()},t.prototype.blur=function(){this.handle.blur()},t.prototype.render=function(){var e=this,t=this.props,a=t.className,l=t.vertical,u=t.offset,r=t.style,f=t.disabled,s=t.min,o=t.max,i=t.value,c=(0,d.default)(t,["className","vertical","offset","style","disabled","min","max","value"]),m=l?{bottom:u+"%"}:{left:u+"%"},p=(0,n.default)({},r,m),v={};return void 0!==i&&(v=(0,n.default)({},v,{"aria-valuemin":s,"aria-valuemax":o,"aria-valuenow":i,"aria-disabled":!!f})),b.default.createElement("div",(0,n.default)({ref:function(t){return e.handle=t},role:"slider",tabIndex:"0"},v,c,{className:a,style:p}))},t}(b.default.Component);t.default=y,y.propTypes={className:h.default.string,vertical:h.default.bool,offset:h.default.number,style:h.default.object,disabled:h.default.bool,min:h.default.number,max:h.default.number,value:h.default.number},e.exports=t.default}});
//# sourceMappingURL=Handle.chunk.js.map