!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("@material-ui/core"),require("@material-ui/core/styles")):"function"==typeof define&&define.amd?define(["prop-types","react","@material-ui/core","@material-ui/core/styles"],t):"object"==typeof exports?exports.MaterialUiSplitButton=t(require("prop-types"),require("react"),require("@material-ui/core"),require("@material-ui/core/styles")):e.MaterialUiSplitButton=t(e.PropTypes,e.React,e["@material-ui/core"],e["@material-ui/core/styles"])}(window,function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var u in o)n.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0),a=n.n(i),u=n(3),l=n.n(u),s=n(2),c=n(4);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=b(t).call(this,e))||"object"!==f(r)&&"function"!=typeof r?y(o):r).state={anchorEl:null},n.menuButton=n.menuButton.bind(y(n)),n.handleOpen=n.handleOpen.bind(y(n)),n.handleClose=n.handleClose.bind(y(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleOpen",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}},{key:"menuButton",value:function(){var e=this.state.anchorEl,t=this.props,n=t.MenuButtonProps,o=void 0===n?{}:n,i=t.classes,a=t.position,u=void 0===a?"right":a,c=t.variant,f=t.color,h=o.className,b=void 0===h?"":h,y=d(o,["className"]);return r.a.createElement(s.Button,p({"aria-owns":e?"material-ui-split-button-menu":void 0,"aria-haspopup":"true",onClick:this.handleOpen,variant:c,color:f},y,{className:l()("left"===u?i.menuPositionLeft:i.menuPositionRight,i.menuButton,b)}),r.a.createElement(s.SvgIcon,null,r.a.createElement("path",{d:"M7 10l5 5 5-5z"})))}},{key:"render",value:function(){var e=this.state.anchorEl,t=this.props,n=t.classes,o=t.className,i=void 0===o?"":o,a=t.fullWidth,u=void 0!==a&&a,c=t.children,f=t.position,h=void 0===f?"right":f,b=t.variant,y=(t.MenuButtonProps,t.renderMenu),m=t.MenuProps,v=d(t,["classes","className","fullWidth","children","position","variant","MenuButtonProps","renderMenu","MenuProps"]);return r.a.createElement("div",{className:l()(n.root,"contained"===b&&n.rootContained,u&&n.buttonFullWidth)},"left"===h&&this.menuButton(),r.a.createElement(s.Button,p({variant:b},v,{className:l()("left"===h?n.buttonPositionLeft:n.buttonPositionRight,n.button,i)}),c),"right"===h&&this.menuButton(),r.a.createElement(s.Menu,p({id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose,getContentAnchorEl:null,anchorOrigin:{horizontal:"left",vertical:"bottom"}},m),r.a.createElement("div",null,y({handleClose:this.handleClose}))))}}])&&h(n.prototype,o),i&&h(n,i),t}();v.propTypes={position:a.a.oneOf(["left","right"]),classes:a.a.object.isRequired,MenuButtonProps:a.a.object,MenuProps:a.a.object,variant:a.a.oneOf(["text","outlined","contained"]),color:a.a.oneOf(["default","inherit","primary","secondary"]),className:a.a.string,fullWidth:a.a.bool,children:a.a.node.isRequired,renderMenu:a.a.func.isRequired},v.defaultProps={position:"right",MenuButtonProps:{},MenuProps:{},variant:"text",color:"default",className:"",fullWidth:!1};var g=Object(c.withStyles)(function(e){return{root:{borderRadius:e.spacing.unit/2},rootContained:{boxShadow:e.shadows[4]},button:{flex:"1 0 auto",boxShadow:"none"},buttonPositionLeft:{borderLeftWidth:0,borderTopLeftRadius:0,borderBottomLeftRadius:0,"&:hover":{borderLeftWidth:0}},buttonPositionRight:{borderRightWidth:0,borderTopRightRadius:0,borderBottomRightRadius:0,"&:hover":{borderRightWidth:0}},menuPositionLeft:{borderTopRightRadius:0,borderBottomRightRadius:0},menuPositionRight:{borderTopLeftRadius:0,borderBottomLeftRadius:0},menuButton:{width:4*e.spacing.unit,minWidth:4*e.spacing.unit,paddingLeft:0,paddingRight:0,flex:"none",boxShadow:"none"},buttonFullWidth:{width:"100%",display:"flex"}}})(v);t.default=g}])});