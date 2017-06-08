webpackHotUpdate(0,{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.submitAnswer = exports.changeAnswer = undefined;

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeAnswer = exports.changeAnswer = function changeAnswer(index, answer) {
	return {
		type: 'CHANGE_ANSWER',
		index: index,
		answer: answer
	};
};

var submitAnswer = exports.submitAnswer = function submitAnswer(answerList) {
	return {
		type: 'SUBMIT_ANSWER',
		response: new Promise(function (resolve) {
			_axios2.default.post('/submit', {
				answerList: answerList
			}).then(function (response) {
				resolve(response);
			});
		})
	};
};

/***/ })

})