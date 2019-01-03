(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"125":function(e,t,n){},"13":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),l=n(62),i=_interopRequireDefault(n(81)),s=_interopRequireDefault(n(87)),u=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(125);var c=function(e){function ButtonPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonPage);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=n=_possibleConstructorReturn(this,(e=ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"Taro UI"},n.state={"isWEAPP":r.default.getEnv()===r.default.ENV_TYPE.WEAPP,"isALIPAY":r.default.getEnv()===r.default.ENV_TYPE.ALIPAY},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonPage,r.default.Component),a(ButtonPage,[{"key":"onButtonClick","value":function onButtonClick(){var e=[].concat(Array.prototype.slice.call(arguments)).find(function(e){return"string"==typeof e}),t=r.default.getEnv();"WEAPP"===t?r.default.showModal({"content":e||"\b您点击了！","showCancel":!1}):"WEB"===t&&alert(e||"\b您点击了！")}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"Taro UI","path":"/pages/index/index","imageUrl":"http://storage.360buyimg.com/mtd/home/share1535013100318.jpg"}}},{"key":"onContact","value":function onContact(){console.log("呼起客服回调")}},{"key":"onSubmit","value":function onSubmit(){r.default.showModal({"content":"submit event detail: "+JSON.stringify(arguments[0].detail),"showCancel":!1})}},{"key":"onReset","value":function onReset(){r.default.showModal({"content":"reset event detail: "+JSON.stringify(arguments[0].detail||"无数据"),"showCancel":!1})}},{"key":"onGetUserInfo","value":function onGetUserInfo(){console.log("onGetUserInfo",arguments)}},{"key":"render","value":function render(){var e=this.state,t=e.isWEAPP,n=e.isALIPAY;return o.default.createElement(l.View,{"className":"page"},o.default.createElement(u.default,{"title":"Button 按钮"}),o.default.createElement(l.View,{"className":"doc-body"},o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"主操作"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"primary","onClick":this.onButtonClick.bind(this)},"主操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"primary","loading":!0,"onClick":this.onButtonClick.bind(this)},"Loading")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"primary","disabled":!0},"不可操作")))),o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"次要操作"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary"},"次操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary","loading":!0},"Loading")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary","disabled":!0},"不可操作")))),o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"次次要操作"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,null,"次次要操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"loading":!0},"Loading")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"disabled":!0},"不可操作")))),o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"通栏按钮"),o.default.createElement(l.View,{"className":"panel__content","style":"padding:0"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"primary","full":!0},"主操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary","full":!0},"次操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"full":!0},"次次要操作按钮")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"disabled":!0,"full":!0},"不可操作")))),o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"小按钮"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small"},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small"},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small"},"按钮"))),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small","loading":!0})),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small","loading":!0})),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small","loading":!0}))),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small","disabled":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small","disabled":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small","disabled":!0},"按钮"))))),o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"圆角按钮"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small","circle":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small","circle":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small","loading":!0,"circle":!0})),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small","loading":!0,"circle":!0})),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small","loading":!0,"circle":!0}))),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),o.default.createElement(l.View,{"className":"subitem"},o.default.createElement(i.default,{"size":"small","disabled":!0,"circle":!0},"按钮"))))),t&&o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"微信小程序 button 属性"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"openType":"share","type":"primary"},"分享")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary","openType":"contact","onContact":this.onContact.bind(this)},"联系 Taro UI 客服")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(l.Form,{"reportSubmit":!0,"onSubmit":this.onSubmit.bind(this),"onReset":this.onReset.bind(this)},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"primary","formType":"submit"},"form submit")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"type":"secondary","formType":"reset"},"form reset")))))),n&&o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"支付宝小程序 button 属性"),o.default.createElement(l.View,{"className":"panel__content demo-button"},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"openType":"share","type":"primary"},"分享")),o.default.createElement(s.default,{"onSubmit":this.onSubmit.bind(this),"onReset":this.onReset.bind(this)},o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"formType":"submit","type":"primary"},"form submit")),o.default.createElement(l.View,{"className":"btn-item"},o.default.createElement(i.default,{"formType":"reset","type":"primary"},"form reset")))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ButtonPage}();t.default=c},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);_interopRequireDefault(o),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t="";return Object.keys(e).forEach(function(n){var a=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=a+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),a(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":r(e))&&t&&"object"===(void 0===t?"undefined":r(t))?Object.assign({},e,t):l(e)+l(t)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var a=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,o,l){if(l!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),o=(_interopRequireDefault(r),_interopRequireDefault(n(2))),l=_interopRequireDefault(n(63)),i=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var s=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=s,s.defaultProps={"title":"标题"},s.propTypes={"title":l.default.string}},"69":function(e,t,n){},"76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),o=_interopRequireDefault(n(63)),l=n(62),i=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,i.default),a(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,a={"width":n+"px","height":n+"px"},o={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},i=Object.assign({},o,a);return r.default.createElement(l.View,{"className":"at-loading","style":a},r.default.createElement(l.View,{"className":"at-loading__ring","style":i}),r.default.createElement(l.View,{"className":"at-loading__ring","style":i}),r.default.createElement(l.View,{"className":"at-loading__ring","style":i}))}}]),AtLoading}();t.default=s,s.defaultProps={"size":"18","color":"#fff"},s.propTypes={"size":o.default.oneOfType([o.default.string,o.default.number]),"color":o.default.oneOfType([o.default.string,o.default.number])}},"81":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),l=n(62),i=_interopRequireDefault(n(63)),s=_interopRequireDefault(n(65)),u=_interopRequireDefault(n(76)),c=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var f={"normal":"normal","small":"small"},d={"primary":"primary","secondary":"secondary"},p=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={"isWEB":r.default.getEnv()===r.default.ENV_TYPE.WEB,"isWEAPP":r.default.getEnv()===r.default.ENV_TYPE.WEAPP,"isALIPAY":r.default.getEnv()===r.default.ENV_TYPE.ALIPAY},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,c.default),a(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"onGetUserInfo","value":function onGetUserInfo(){var e;this.props.onGetUserInfo&&(e=this.props).onGetUserInfo.apply(e,arguments)}},{"key":"onContact","value":function onContact(){var e;this.props.onContact&&(e=this.props).onContact.apply(e,arguments)}},{"key":"onGetPhoneNumber","value":function onGetPhoneNumber(){var e;this.props.onGetPhoneNumber&&(e=this.props).onGetPhoneNumber.apply(e,arguments)}},{"key":"onError","value":function onError(){var e;this.props.onError&&(e=this.props).onError.apply(e,arguments)}},{"key":"onOpenSetting","value":function onOpenSetting(){var e;this.props.onOpenSetting&&(e=this.props).onOpenSetting.apply(e,arguments)}},{"key":"onSumit","value":function onSumit(){this.state.isWEAPP&&this.$scope.triggerEvent("submit",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"onReset","value":function onReset(){this.state.isWEAPP&&this.$scope.triggerEvent("reset",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"render","value":function render(){var e,t=this.props,n=t.size,a=void 0===n?"normal":n,r=t.type,i=void 0===r?"":r,c=t.circle,p=t.full,m=t.loading,b=t.disabled,y=t.customStyle,h=t.formType,E=t.openType,_=t.lang,g=t.sessionFrom,w=t.sendMessageTitle,P=t.sendMessagePath,v=t.sendMessageImg,N=t.showMessageCard,O=t.appParameter,V=this.state,C=V.isWEAPP,S=V.isALIPAY,R=["at-button"],T=(_defineProperty(e={},"at-button--"+f[a],f[a]),_defineProperty(e,"at-button--disabled",b),_defineProperty(e,"at-button--"+i,d[i]),_defineProperty(e,"at-button--circle",c),_defineProperty(e,"at-button--full",p),e),k="primary"===i?"#fff":"#6190E8",A="small"===a?"16":"18",j=void 0;m&&(j=o.default.createElement(l.View,{"className":"at-button__icon"},o.default.createElement(u.default,{"color":k,"size":A})),R.push("at-button--icon"));var D=o.default.createElement(l.Button,{"className":"at-button__wxbutton","formType":h,"openType":E,"lang":_,"sessionFrom":g,"sendMessageTitle":w,"sendMessagePath":P,"sendMessageImg":v,"showMessageCard":N,"appParameter":O,"onGetUserInfo":this.onGetUserInfo.bind(this),"onGetPhoneNumber":this.onGetPhoneNumber.bind(this),"onOpenSetting":this.onOpenSetting.bind(this),"onError":this.onError.bind(this),"onContact":this.onContact.bind(this)});return o.default.createElement(l.View,{"className":(0,s.default)(R,T,this.props.className),"style":y,"onClick":this.onClick.bind(this)},C&&!b&&o.default.createElement(l.Form,{"reportSubmit":!0,"onSubmit":this.onSumit.bind(this),"onReset":this.onReset.bind(this)},D),S&&!b&&D,j,o.default.createElement(l.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=p,p.defaultProps={"size":"normal","type":"","circle":!1,"full":!1,"loading":!1,"disabled":!1,"customStyle":{},"onClick":function onClick(){},"formType":"","openType":"","lang":"en","sessionFrom":"","sendMessageTitle":"","sendMessagePath":"","sendMessageImg":"","showMessageCard":!1,"appParameter":"","onGetUserInfo":function onGetUserInfo(){},"onContact":function onContact(){},"onGetPhoneNumber":function onGetPhoneNumber(){},"onError":function onError(){},"onOpenSetting":function onOpenSetting(){}},p.propTypes={"size":i.default.oneOf(["normal","small"]),"type":i.default.oneOf(["primary","secondary",""]),"circle":i.default.bool,"full":i.default.bool,"loading":i.default.bool,"disabled":i.default.bool,"onClick":i.default.func,"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"formType":i.default.oneOf(["submit","reset",""]),"openType":i.default.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo",""]),"lang":i.default.string,"sessionFrom":i.default.string,"sendMessageTitle":i.default.string,"sendMessagePath":i.default.string,"sendMessageImg":i.default.string,"showMessageCard":i.default.bool,"appParameter":i.default.string,"onGetUserInfo":i.default.func,"onContact":i.default.func,"onGetPhoneNumber":i.default.func,"onError":i.default.func,"onOpenSetting":i.default.func}},"87":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),o=n(62),l=_interopRequireDefault(n(63)),i=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function AtForm(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtForm),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtForm.__proto__||Object.getPrototypeOf(AtForm)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtForm,s.default),a(AtForm,[{"key":"onSubmit","value":function onSubmit(){var e;(e=this.props).onSubmit.apply(e,arguments)}},{"key":"onReset","value":function onReset(){var e;(e=this.props).onReset.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,a=e.reportSubmit;return r.default.createElement(o.Form,{"className":(0,i.default)("at-form",n),"style":t,"onSubmit":this.onSubmit.bind(this),"reportSubmit":a,"onReset":this.onReset.bind(this)},this.props.children)}}]),AtForm}();t.default=u,u.defaultProps={"customStyle":"","className":"","reportSubmit":!1,"onSubmit":function onSubmit(){},"onReset":function onReset(){}},u.propTypes={"customStyle":l.default.oneOfType([l.default.object,l.default.string]),"className":l.default.oneOfType([l.default.array,l.default.string]),"reportSubmit":l.default.bool,"onSubmit":l.default.func,"onReset":l.default.func}}}]);