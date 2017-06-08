import axios from 'axios' ;

export const changeAnswer = (index,answer) => {
	return {
		type : 'CHANGE_ANSWER' ,
		index ,
		answer 
	}
}

export const submitAnswerStart = () => {
	return {
		type : 'SUBMIT_ANSWER_START' 
	}
}
export const submitAnswerEnd = () => {
	return {
		type : 'SUBMIT_ANSWER_END' 
	}
}