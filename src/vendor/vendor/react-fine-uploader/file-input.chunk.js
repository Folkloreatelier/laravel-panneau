webpackJsonppanneau([479],{1622:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),p=r(c),f=n(1),d=r(f),h=n(1756),y=r(h),b=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={key:O()},e._onFilesSelected=v.bind(e),e}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=(e.uploader,o(e,["text","uploader"]));return p.default.createElement(y.default,u({},n,{key:this.state.key,onChange:this._onFilesSelected}),this.props.children?this.props.children:p.default.createElement("span",null,n.multiple?t.selectFiles:t.selectFile))}},{key:"_resetInput",value:function(){this.setState({key:O()})}}]),t}(c.Component);b.propTypes={text:d.default.shape({selectFile:d.default.string,selectFiles:d.default.string}),uploader:d.default.object.isRequired},b.defaultProps={text:{selectFile:"Select a File",selectFiles:"Select Files"}};var v=function(e){this.props.uploader.methods.addFiles(e.target),this._resetInput()},O=function(){return Date.now()};t.default=b},1756:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l={display:"inline-block",position:"relative"},u={bottom:0,height:"100%",left:0,margin:0,opacity:0,padding:0,position:"absolute",right:0,top:0,width:"100%"},s=function(e){var t=e.children,n=e.className,a=e.onChange,s=r(e,["children","className","onChange"]);return i.default.createElement("div",{className:"react-fine-uploader-file-input-container "+(n||""),style:l},t,i.default.createElement("input",o({},s,{className:"react-fine-uploader-file-input",onChange:a,style:u,type:"file"})))};t.default=s}});