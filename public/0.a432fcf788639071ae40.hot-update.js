webpackHotUpdate(0,{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(38);

var _SubmitView = __webpack_require__(147);

var _SubmitView2 = _interopRequireDefault(_SubmitView);

var _actions = __webpack_require__(41);

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterRedux = __webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// submitAnswer(){
//   const { history } = this.props ;
//   axios.post('/submit',{
//     answerList : this.state.answerList
//   })
//   .then(function (response) {
//     const status = parseInt(response.status,10);
//     if ( status === 200 ){
//       history.push('/submit');
//     } else {
//       ;
//     }
//   })
// };

var mapStateToProps = function mapStateToProps(state) {
  return {
    answerList: state.answerList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmitClick: function onSubmitClick(answerList) {
      dispatch((0, _actions.submitAnswer)(answerList));
    }
  };
};

var Submit = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SubmitView2.default);

//const QuestionFormViewWithRouter = withRouter(QuestionFormView);

exports.default = Submit;

/***/ })

})