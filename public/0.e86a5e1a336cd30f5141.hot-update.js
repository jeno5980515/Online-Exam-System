webpackHotUpdate(0,{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(182);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(272);

var _App = __webpack_require__(140);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(146);

var _reducers2 = _interopRequireDefault(_reducers);

var _Submit = __webpack_require__(141);

var _Submit2 = _interopRequireDefault(_Submit);

var _redux = __webpack_require__(67);

var _reactRedux = __webpack_require__(38);

var _reduxPromiseMiddleware = __webpack_require__(296);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)()));

store.subscribe(function () {
	console.log(store.getState());
});

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_reactRouterDom.Route, { path: '/exam', component: _App2.default }),
			_react2.default.createElement(_reactRouterDom.Route, { path: '/submit', component: _Submit2.default })
		)
	)
), document.getElementById('root'));

// const ViewEntry = ({ location , context }) => (
//   <Router location={location} context={context} >
//   	<App />
//   </Router>
// )

// export default ViewEntry ;

/***/ })

})