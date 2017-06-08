import React from 'react' ;

const SubmitView = ({ onSubmitClick , answerList }) => (
  <input 
    type="submit" 
    value="Submit" 
    onClick={() => {
      onSubmitClick(answerList) ;
    }} />
)


export default SubmitView ;