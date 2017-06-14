webpackHotUpdate(0,{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitAnswerError = exports.submitAnswerEnd = exports.submitAnswer = exports.changeAnswer = undefined;

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterRedux = __webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeAnswer = exports.changeAnswer = function changeAnswer(index, answer) {
  return {
    type: 'CHANGE_ANSWER',
    index: index,
    answer: answer
  };
};

var submitAnswer = exports.submitAnswer = function submitAnswer(answerList) {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/submit'));
    _axios2.default.post('/submit22', {
      answerList: answerList
    }).then(function (response) {
      if (response.data === 'OK') {
        dispatch(submitAnswerEnd(response));
      } else {
        dispatch(submitAnswerError(response));
      }
    }).catch(function (error) {
      dispatch(submitAnswerError(error));
    });
  };
};

var submitAnswerEnd = exports.submitAnswerEnd = function submitAnswerEnd(response) {
  return {
    type: 'SUBMIT_ANSWER_END',
    response: response
  };
};
var submitAnswerError = exports.submitAnswerError = function submitAnswerError(error) {
  return {
    type: 'SUBMIT_ANSWER_ERROR',
    error: error
  };
};

/***/ })

})