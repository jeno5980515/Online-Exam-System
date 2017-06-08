import { connect } from 'react-redux' ;
import OptionView from '../components/OptionView' ;
import { changeAnswer } from '../actions' ; 

const mapStateToProps = (state) => {
  return {
    answerList: state.answerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOptionClick: (index,answer) => {
      dispatch(changeAnswer(index,answer)) ;
    }
  }
}

const Option = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionView) ;

export default Option ;