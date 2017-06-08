import { combineReducers } from 'redux'

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

const submitStatus = (state = '' , action) => {
	console.log(action.response);
  return state ;
}

export default combineReducers({ answerList , submitStatus });