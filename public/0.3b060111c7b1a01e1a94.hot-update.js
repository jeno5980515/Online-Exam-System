webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(38);

var _OptionView = __webpack_require__(142);

var _OptionView2 = _interopRequireDefault(_OptionView);

var _actions = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    answerList: state.answerList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onOptionClick: function onOptionClick(index, answer) {
      dispatch((0, _actions.changeAnswer)(index, answer));
    }
  };
};

var Option = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_OptionView2.default);

exports.default = Option;

/***/ })

})