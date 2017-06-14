import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const answerList = (state = [] , action) => {
  switch ( action.type ){
    case 'CHANGE_ANSWER':
      let newState = state.slice();
      newState[action.index] = action.answer ;
      return newState ;
    default:
      return state ;
  }
}

const submitStatus = (state = { status : 'INIT' } , action) => {
  switch ( action.type ){
  	case 'SUBMIT_ANSWER_START':
  	  return { status : 'START' } ;
  	case 'SUBMIT_ANSWER_END' :
  	  return { status : 'END' , response : action.response } ;
  	case 'SUBMIT_ANSWER_ERROR' :
  	  return { status : 'ERROR' , error : action.error } ;
  }
  return state ;
}

export default combineReducers({ answerList , submitStatus , routerReducer });