(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"28":function(A,e,t){"use strict";t.d(e,"c",function(){return r}),t.d(e,"b",function(){return a}),t.d(e,"a",function(){return i});var n=t(20),o=function getImageSrc(A,e){return"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/"+A+"/"+e},r=function smartLoading(A,e){return Object(n.b)({"title":A}),n.a},a=function parseTypes(A){var e=A&&A.match(/\|.*已收录.*\|/g);if(!e)return[];var t=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return e.map(function(A){var e=A.match(t);if(!e)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var n=e[1],r=n.replace(/^(\w)*/,"").replace(/BQB$/,""),a=e[2],i=Number(e[3]);return{"name":r,"link":"/pages/list/index?name="+n+"&title="+r,"imgSrc":o(n,a),"imgNum":i}}).filter(function(A){return!!A.imgNum}).sort(function(A,e){return e.imgNum-A.imgNum})},i=function parseImages(A){var e=A&&A.match(/\[.*?\]/g);if(!e)return[];var t=/.*master\/(.*)\/(.*)\]/;return e.map(function(A){var e=A.match(t);if(!e)return{"src":"","name":"未命名"};var n=e[1],r=e[2];return{"src":o(n,r),"name":r.replace(/\..*$/,"")}}).filter(function(A){return!!A.src})}},"29":function(A,e,t){"use strict";t.d(e,"a",function(){return l});var n=t(1),o=t(2),r=t(99),a=t(100),i=t(101),c=t(30),s=t.n(c),u=(t(31),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var l=function(A){function BQBItem(){!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,BQBItem);var A=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(BQBItem.__proto__||Object.getPrototypeOf(BQBItem)).apply(this,arguments));return A.handleImageLoad=function(){A.setState({"isLoad":!0})},A.handleIamgeError=function(){A.setState({"isError":!0})},A}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(BQBItem,o["a"].Component),u(BQBItem,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(A){A.src!==this.props.src&&this.setState({"isLoad":!1,"isError":!1})}},{"key":"render","value":function render(){var A=this,e=this.props,t=e.num,o=e.src,c=e.name,u=e.onClick,l=this.state,p=l.isLoad,f=l.isError;return n.k.createElement(r.a,{"className":"bqb-item bqb-custom-class","onClick":u},n.k.createElement(a.a,{"className":"bqb-image "+(p?"":"hide"),"mode":"aspectFill","lazyLoad":!0,"src":f?s.a:o,"onLoad":function onLoad(){return A.handleImageLoad()},"onError":function onError(){return A.handleIamgeError()}}),p?null:n.k.createElement(r.a,{"className":"bqb-image bqb-load"}),t&&n.k.createElement(i.a,{"className":"bqb-num"},t,"张"),n.k.createElement(i.a,{"className":"bqb-name"},c))}}]),BQBItem}();l.defaultProps={"onClick":function onClick(){}},l.externalClasses=["bqb-custom-class"]},"30":function(A,e){A.exports="data:image/jpeg;base64,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"},"31":function(A,e,t){},"80":function(A,e){A.exports="data:image/jpeg;base64,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"},"81":function(A,e,t){},"98":function(A,e,t){"use strict";t.r(e),t.d(e,"default",function(){return B});var n=t(1),o=t(19),r=t(102),a=t(2),i=t(103),c=t(106),s=t(99),u=t(104),l=t(105),p=t(28),f=t(29),h=t(80),m=t.n(h),d=(t(81),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}()),y=function get(A,e,t){null===A&&(A=Function.prototype);var n=Object.getOwnPropertyDescriptor(A,e);if(void 0===n){var o=Object.getPrototypeOf(A);return null===o?void 0:get(o,e,t)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(t):void 0};function _asyncToGenerator(A){return function(){var e=A.apply(this,arguments);return new Promise(function(A,t){return function step(n,o){try{var r=e[n](o),a=r.value}catch(A){return void t(A)}if(!r.done)return Promise.resolve(a).then(function(A){step("next",A)},function(A){step("throw",A)});A(a)}("next")})}}var B=function(A){function Index(A){var e=this;!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Index);var t=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(Index.__proto__||Object.getPrototypeOf(Index)).call(this,A));return t.config={"navigationBarTitleText":"中国表情包","enablePullDownRefresh":!0},t.fetchTypes=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var A,n,a,i;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return(A=Object(o.c)("readme"))&&(t.types=Object(p.b)(A),t.showMoreTypes(!0)),n=Object(p.c)("加载中",!!A),e.next=5,Object(r.a)({"url":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","dataType":"text","responseType":"text"});case 5:a=e.sent,i=a.data,Object(o.d)({"key":"readme","data":i}),t.types=Object(p.b)(i),t.showMoreTypes(!0),n();case 11:case"end":return e.stop()}},_callee,e)})),t.showMoreTypes=function(A){var e=t.state.types,n=t.types.splice(0,20);A?t.setState({"types":n,"loaded":!1}):t.setState({"types":e.concat(n)})},t.handleNavigate=function(A){A&&a.a.navigateTo({"url":A})},t.state={"types":[],"loaded":!1},t}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(Index,a["a"].Component),d(Index,[{"key":"componentDidMount","value":function componentDidMount(){this.fetchTypes()}},{"key":"onPullDownRefresh","value":function(){var A=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.fetchTypes();case 2:Object(i.a)();case 3:case"end":return A.stop()}},_callee2,this)}));return function onPullDownRefresh(){return A.apply(this,arguments)}}()},{"key":"onReachBottom","value":function onReachBottom(){this.types.length?this.showMoreTypes():this.setState({"loaded":!0})}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"中国表情包"}}},{"key":"render","value":function render(){var A=this,e=this.state,t=e.types,o=void 0===t?[]:t,r=e.loaded;if(!o.length){var a=n.k.createElement(s.a,null);return n.k.createElement(u.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},a)}var i=n.k.createElement(s.a,{"className":"list"},o.map(function(e){return n.k.createElement(f.a,{"key":e.imgSrc,"name":e.name,"src":e.imgSrc,"num":e.imgNum,"onClick":function onClick(){return A.handleNavigate(e.link)}})}),r&&n.k.createElement(f.a,{"src":m.a,"name":"关于","onClick":function onClick(){return A.handleNavigate("/pages/about/index")}}),n.k.createElement(l.a,{"className":"flat-btn contact-btn","open-type":"contact"},"+"));return n.k.createElement(u.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},i)}},{"key":"componentDidShow","value":function componentDidShow(){y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this),this._offReachBottom=Object(c.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0}),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom(),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Index}()}}]);