flklrJsonp([77],{220:function(e,t,a){"use strict";t.__esModule=!0;var l=_interopRequireDefault(a(3)),u=_interopRequireDefault(a(9)),r=_interopRequireDefault(a(4)),n=_interopRequireDefault(a(6)),i=_interopRequireDefault(a(7)),f=_interopRequireDefault(a(0)),d=_interopRequireDefault(a(1));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function Handle(){return(0,r.default)(this,Handle),(0,n.default)(this,e.apply(this,arguments))}return(0,i.default)(Handle,e),Handle.prototype.focus=function(){this.handle.focus()},Handle.prototype.blur=function(){this.handle.blur()},Handle.prototype.render=function(){var e=this,t=this.props,a=t.className,r=t.vertical,n=t.offset,i=t.style,d=t.disabled,o=t.min,s=t.max,p=t.value,c=(0,u.default)(t,["className","vertical","offset","style","disabled","min","max","value"]),m=r?{bottom:n+"%"}:{left:n+"%"},b=(0,l.default)({},i,m),v={};return void 0!==p&&(v=(0,l.default)({},v,{"aria-valuemin":o,"aria-valuemax":s,"aria-valuenow":p,"aria-disabled":!!d})),f.default.createElement("div",(0,l.default)({ref:function(t){return e.handle=t},role:"slider",tabIndex:"0"},v,c,{className:a,style:b}))},Handle}(f.default.Component);t.default=o,o.propTypes={className:d.default.string,vertical:d.default.bool,offset:d.default.number,style:d.default.object,disabled:d.default.bool,min:d.default.number,max:d.default.number,value:d.default.number},e.exports=t.default}});