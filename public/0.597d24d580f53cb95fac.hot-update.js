webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(38);

var _SubmitView = __webpack_require__(143);

var _SubmitView2 = _interopRequireDefault(_SubmitView);

var _actions = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    answerList: state.answerList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmitClick: function onSubmitClick(answerList) {
      console.log(dispatch);
    }
  };
};

var Submit = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SubmitView2.default);

exports.default = Submit;

/***/ })

})