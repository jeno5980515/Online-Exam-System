import axios from 'axios' ;
import { push } from 'react-router-redux';

export const changeAnswer = (index,answer) => {
  return {
    type : 'CHANGE_ANSWER' ,
    index ,
    answer 
  }
}

export const submitAnswer = (answerList) => {
  return (dispatch) => {
  	dispatch(push('/submit'));
	axios.post('/submit', {
	  answerList : answerList
	})
	.then((response) => {
	  if ( response.data === 'OK' ){
	    dispatch(submitAnswerEnd(response));
	  } else {
	    dispatch(submitAnswerError(response));
	  }
	})
	.catch((error) => {
	  dispatch(submitAnswerError(error));
	});
  }
}

export const submitAnswerEnd = (response) => {
  return {
    type : 'SUBMIT_ANSWER_END' ,
    response 
  }
}
export const submitAnswerError = (error) => {
  return {
    type : 'SUBMIT_ANSWER_ERROR' ,
    error
  }
}