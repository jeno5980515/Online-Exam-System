import { connect } from 'react-redux' ;
import SubmitView from '../components/SubmitView' ;
import { submitAnswer , submitAnswerEnd , submitAnswerError } from '../actions' ; 
import axios from 'axios' ;

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

const mapStateToProps = (state) => {
  return {
    answerList: state.answerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (answerList) => {
      dispatch(submitAnswer(answerList)) ;
    }
  }
}

const Submit = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitView) ;



//const QuestionFormViewWithRouter = withRouter(QuestionFormView);

export default Submit ;