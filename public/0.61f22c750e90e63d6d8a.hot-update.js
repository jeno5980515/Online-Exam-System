webpackHotUpdate(0,{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(67);

var answerList = function answerList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_ANSWER':
      var newState = state.slice();
      newState[action.index] = action.answer;
      return newState;
    default:
      return state;
  }
};

var submitStatus = function submitStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  console.log(action.response);
  return state;
};

exports.default = (0, _redux.combineReducers)({ answerList: answerList, submitStatus: submitStatus });

/***/ })

})