import { connect } from 'react-redux' ;
import SubmitView from '../components/SubmitView' ;
import { submitAnswer } from '../actions' ; 

const mapStateToProps = (state) => {
  return {
    answerList: state.answerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (answerList) => {
      dispatch(submitAnswer())
      new Promiise(resolve => {
        axios.post('/submit',{
          answerList : answerList
        })
        .then((response) => {
          resolve(response) ;
        })
      })
      .then()
      dispatch(submitAnswer(answerList)) ;
    }
  }
}

const Submit = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitView) ;

export default Submit ;