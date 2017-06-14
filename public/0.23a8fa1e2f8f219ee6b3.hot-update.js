webpackHotUpdate(0,{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(185);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(275);

var _App = __webpack_require__(144);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(150);

var _reducers2 = _interopRequireDefault(_reducers);

var _Submit = __webpack_require__(145);

var _Submit2 = _interopRequireDefault(_Submit);

var _redux = __webpack_require__(67);

var _reactRedux = __webpack_require__(38);

var _reduxThunk = __webpack_require__(301);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _createBrowserHistory = __webpack_require__(78);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = __webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(middleware, _reduxThunk2.default));

store.subscribe(function () {
  console.log(store.getState());
});

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: history },
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
//     <App />
//   </Router>
// )

// export default ViewEntry ;

/***/ })

})