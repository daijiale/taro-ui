(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"178":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=n(62),a=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(65)),l=_interopRequireDefault(n(74)),s=_interopRequireDefault(n(179)),c=_interopRequireDefault(n(180)),f=_interopRequireDefault(n(181)),p=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var d=function(e){function AtActionSheet(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheet);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheet.__proto__||Object.getPrototypeOf(AtActionSheet)).apply(this,arguments));t.handleClose=function(){(0,l.default)(t.props.onClose)&&t.props.onClose()},t.handleCancel=function(){if((0,l.default)(t.props.onCancel))return t.props.onCancel();t.close()},t.close=function(){t.setState({"_isOpened":!1},t.handleClose)},t.handleTouchMove=function(e){e.stopPropagation(),e.preventDefault()};var n=e.isOpened;return t.state={"_isOpened":n},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheet,p.default),o(AtActionSheet,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;t!==this.state._isOpened&&(this.setState({"_isOpened":t}),!t&&this.handleClose())}},{"key":"render","value":function render(){var e=this.props,t=e.title,n=e.cancelText,o=e.className,a=this.state._isOpened,l=(0,u.default)("at-action-sheet",{"at-action-sheet--active":a},o);return r.default.createElement(i.View,{"className":l,"onTouchMove":this.handleTouchMove},r.default.createElement(i.View,{"onClick":this.close,"className":"at-action-sheet__overlay"}),r.default.createElement(i.View,{"className":"at-action-sheet__container"},t&&r.default.createElement(c.default,null,t),r.default.createElement(s.default,null,this.props.children),n&&r.default.createElement(f.default,{"onClick":this.handleCancel},n)))}}]),AtActionSheet}();t.default=d,d.defaultProps={"title":"","cancelText":"","isOpened":!1},d.propTypes={"title":a.default.string,"onClose":a.default.func,"onCancel":a.default.func,"isOpened":a.default.bool,"cancelText":a.default.string}},"179":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(65)),a=n(62),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function AtActionSheetBody(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetBody),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheetBody.__proto__||Object.getPrototypeOf(AtActionSheetBody)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetBody,u.default),o(AtActionSheetBody,[{"key":"render","value":function render(){var e=(0,i.default)("at-action-sheet__body",this.props.className);return r.default.createElement(a.View,{"className":e},this.props.children)}}]),AtActionSheetBody}();t.default=l},"180":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(65)),a=n(62),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function AtActionSheetHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheetHeader.__proto__||Object.getPrototypeOf(AtActionSheetHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetHeader,u.default),o(AtActionSheetHeader,[{"key":"render","value":function render(){var e=(0,i.default)("at-action-sheet__header",this.props.className);return r.default.createElement(a.View,{"className":e},this.props.children)}}]),AtActionSheetHeader}();t.default=l},"181":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=n(62),a=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(65)),l=_interopRequireDefault(n(74)),s=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function AtActionSheetFooter(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetFooter);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=AtActionSheetFooter.__proto__||Object.getPrototypeOf(AtActionSheetFooter)).call.apply(e,[this].concat(r))),f.call(n),_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetFooter,s.default),o(AtActionSheetFooter,[{"key":"render","value":function render(){var e=(0,u.default)("at-action-sheet__footer",this.props.className);return r.default.createElement(i.View,{"onClick":this.handleClick,"className":e},this.props.children)}}]),AtActionSheetFooter}(),f=function _initialiseProps(){var e=this;this.handleClick=function(){var t;(0,l.default)(e.props.onClick)&&(t=e.props).onClick.apply(t,arguments)}};t.default=c,c.propTypes={"onClick":a.default.func}},"182":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(65)),a=n(62),u=_interopRequireDefault(n(63)),l=_interopRequireDefault(n(74)),s=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function AtActionSheetItem(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetItem);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=AtActionSheetItem.__proto__||Object.getPrototypeOf(AtActionSheetItem)).call.apply(e,[this].concat(r))),f.call(n),_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetItem,s.default),o(AtActionSheetItem,[{"key":"render","value":function render(){var e=(0,i.default)("at-action-sheet__item",this.props.className);return r.default.createElement(a.View,{"className":e,"onClick":this.handleClick},this.props.children)}}]),AtActionSheetItem}(),f=function _initialiseProps(){var e=this;this.handleClick=function(){var t;(0,l.default)(e.props.onClick)&&(t=e.props).onClick.apply(t,arguments)}};t.default=c,c.propTypes={"onClick":u.default.func}},"183":function(e,t,n){},"31":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),a=n(62),u=_interopRequireDefault(n(178)),l=_interopRequireDefault(n(182)),s=_interopRequireDefault(n(81)),c=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}n(183);var f=function(e){function ActionSheetPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ActionSheetPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ActionSheetPage.__proto__||Object.getPrototypeOf(ActionSheetPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(t){e.setState(_defineProperty({},"isOpened"+t,!0))},e.handleClose=function(t){console.log("第 "+t+" 个Action Sheet已经关闭"),e.setState(_defineProperty({},"isOpened"+t,!1))},e.handleCancel=function(){e.showToast("点击了取消按钮")},e.showToast=function(e){r.default.showToast({"icon":"none","title":e})},e.state={"isOpened1":!1,"isOpened2":!1,"isOpened3":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ActionSheetPage,r.default.Component),o(ActionSheetPage,[{"key":"render","value":function render(){var e=this.state,t=e.isOpened1,n=e.isOpened2,o=e.isOpened3;return i.default.createElement(a.View,{"className":"page"},i.default.createElement(c.default,{"title":"ActionSheet 动作面板"}),i.default.createElement(a.View,{"className":"doc-body"},i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"无标题"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(a.View,{"className":"example-item"},i.default.createElement(s.default,{"onClick":this.handleClick.bind(this,1)},"打开 ActionSheet")))),i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"含标题"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(a.View,{"className":"example-item"},i.default.createElement(s.default,{"onClick":this.handleClick.bind(this,2)},"打开 ActionSheet")))),i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"自定义选项"),i.default.createElement(a.View,{"className":"panel__content"},i.default.createElement(a.View,{"className":"example-item"},i.default.createElement(s.default,{"onClick":this.handleClick.bind(this,3)},"打开 ActionSheet"))))),i.default.createElement(u.default,{"cancelText":"取消","isOpened":t,"onClose":this.handleClose.bind(this,1)},i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二")),i.default.createElement(u.default,{"cancelText":"取消","isOpened":n,"onClose":this.handleClose.bind(this,2),"title":"清除位置信息后， 别人将不能查看到你"},i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二")),i.default.createElement(u.default,{"cancelText":"取消","isOpened":o,"onCancel":this.handleCancel,"onClose":this.handleClose.bind(this,3),"title":"清除位置信息后， 别人将不能查看到你"},i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮一")},"按钮一"),i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"点击了按钮二")},"按钮二"),i.default.createElement(l.default,{"onClick":this.showToast.bind(this,"成功清除位置")},i.default.createElement(a.Text,{"className":"danger"},"清除位置信息并退出"))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ActionSheetPage}();t.default=f},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(1);_interopRequireDefault(i),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i.Component),o(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":r(e))&&t&&"object"===(void 0===t?"undefined":r(t))?Object.assign({},e,t):a(e)+a(t)}}]),AtComponent}();u.options={"addGlobalClass":!0},t.default=u},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var o=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),i=(_interopRequireDefault(r),_interopRequireDefault(n(2))),a=_interopRequireDefault(n(63)),u=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(u.View,{"className":"doc-header"},i.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":a.default.string}},"69":function(e,t,n){},"71":function(e,t,n){var o=n(73).Symbol;e.exports=o},"72":function(e,t,n){var o=n(71),r=n(79),i=n(80),a="[object Null]",u="[object Undefined]",l=o?o.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?u:a:l&&l in Object(e)?r(e):i(e)}},"73":function(e,t,n){var o=n(78),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},"74":function(e,t,n){var o=n(72),r=n(75),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=function isFunction(e){if(!r(e))return!1;var t=o(e);return t==a||t==u||t==i||t==l}},"75":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),a=n(62),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,u.default),o(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,o={"width":n+"px","height":n+"px"},i={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},u=Object.assign({},i,o);return r.default.createElement(a.View,{"className":"at-loading","style":o},r.default.createElement(a.View,{"className":"at-loading__ring","style":u}),r.default.createElement(a.View,{"className":"at-loading__ring","style":u}),r.default.createElement(a.View,{"className":"at-loading__ring","style":u}))}}]),AtLoading}();t.default=l,l.defaultProps={"size":"18","color":"#fff"},l.propTypes={"size":i.default.oneOfType([i.default.string,i.default.number]),"color":i.default.oneOfType([i.default.string,i.default.number])}},"77":function(e,t,n){e.exports=n(0)(15)},"78":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(77))},"79":function(e,t,n){var o=n(71),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,u=o?o.toStringTag:void 0;e.exports=function getRawTag(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var o=!0}catch(e){}var r=a.call(e);return o&&(t?e[u]=n:delete e[u]),r}},"80":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"81":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),a=n(62),u=_interopRequireDefault(n(63)),l=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(76)),c=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var f={"normal":"normal","small":"small"},p={"primary":"primary","secondary":"secondary"},d=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={"isWEB":r.default.getEnv()===r.default.ENV_TYPE.WEB,"isWEAPP":r.default.getEnv()===r.default.ENV_TYPE.WEAPP,"isALIPAY":r.default.getEnv()===r.default.ENV_TYPE.ALIPAY},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,c.default),o(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"onGetUserInfo","value":function onGetUserInfo(){var e;this.props.onGetUserInfo&&(e=this.props).onGetUserInfo.apply(e,arguments)}},{"key":"onContact","value":function onContact(){var e;this.props.onContact&&(e=this.props).onContact.apply(e,arguments)}},{"key":"onGetPhoneNumber","value":function onGetPhoneNumber(){var e;this.props.onGetPhoneNumber&&(e=this.props).onGetPhoneNumber.apply(e,arguments)}},{"key":"onError","value":function onError(){var e;this.props.onError&&(e=this.props).onError.apply(e,arguments)}},{"key":"onOpenSetting","value":function onOpenSetting(){var e;this.props.onOpenSetting&&(e=this.props).onOpenSetting.apply(e,arguments)}},{"key":"onSumit","value":function onSumit(){this.state.isWEAPP&&this.$scope.triggerEvent("submit",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"onReset","value":function onReset(){this.state.isWEAPP&&this.$scope.triggerEvent("reset",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"render","value":function render(){var e,t=this.props,n=t.size,o=void 0===n?"normal":n,r=t.type,u=void 0===r?"":r,c=t.circle,d=t.full,h=t.loading,b=t.disabled,y=t.customStyle,_=t.formType,m=t.openType,v=t.lang,g=t.sessionFrom,O=t.sendMessageTitle,P=t.sendMessagePath,w=t.sendMessageImg,C=t.showMessageCard,A=t.appParameter,E=this.state,S=E.isWEAPP,j=E.isALIPAY,R=["at-button"],k=(_defineProperty(e={},"at-button--"+f[o],f[o]),_defineProperty(e,"at-button--disabled",b),_defineProperty(e,"at-button--"+u,p[u]),_defineProperty(e,"at-button--circle",c),_defineProperty(e,"at-button--full",d),e),T="primary"===u?"#fff":"#6190E8",D="small"===o?"16":"18",q=void 0;h&&(q=i.default.createElement(a.View,{"className":"at-button__icon"},i.default.createElement(s.default,{"color":T,"size":D})),R.push("at-button--icon"));var N=i.default.createElement(a.Button,{"className":"at-button__wxbutton","formType":_,"openType":m,"lang":v,"sessionFrom":g,"sendMessageTitle":O,"sendMessagePath":P,"sendMessageImg":w,"showMessageCard":C,"appParameter":A,"onGetUserInfo":this.onGetUserInfo.bind(this),"onGetPhoneNumber":this.onGetPhoneNumber.bind(this),"onOpenSetting":this.onOpenSetting.bind(this),"onError":this.onError.bind(this),"onContact":this.onContact.bind(this)});return i.default.createElement(a.View,{"className":(0,l.default)(R,k,this.props.className),"style":y,"onClick":this.onClick.bind(this)},S&&!b&&i.default.createElement(a.Form,{"reportSubmit":!0,"onSubmit":this.onSumit.bind(this),"onReset":this.onReset.bind(this)},N),j&&!b&&N,q,i.default.createElement(a.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=d,d.defaultProps={"size":"normal","type":"","circle":!1,"full":!1,"loading":!1,"disabled":!1,"customStyle":{},"onClick":function onClick(){},"formType":"","openType":"","lang":"en","sessionFrom":"","sendMessageTitle":"","sendMessagePath":"","sendMessageImg":"","showMessageCard":!1,"appParameter":"","onGetUserInfo":function onGetUserInfo(){},"onContact":function onContact(){},"onGetPhoneNumber":function onGetPhoneNumber(){},"onError":function onError(){},"onOpenSetting":function onOpenSetting(){}},d.propTypes={"size":u.default.oneOf(["normal","small"]),"type":u.default.oneOf(["primary","secondary",""]),"circle":u.default.bool,"full":u.default.bool,"loading":u.default.bool,"disabled":u.default.bool,"onClick":u.default.func,"customStyle":u.default.oneOfType([u.default.object,u.default.string]),"formType":u.default.oneOf(["submit","reset",""]),"openType":u.default.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo",""]),"lang":u.default.string,"sessionFrom":u.default.string,"sendMessageTitle":u.default.string,"sendMessagePath":u.default.string,"sendMessageImg":u.default.string,"showMessageCard":u.default.bool,"appParameter":u.default.string,"onGetUserInfo":u.default.func,"onContact":u.default.func,"onGetPhoneNumber":u.default.func,"onError":u.default.func,"onOpenSetting":u.default.func}}}]);