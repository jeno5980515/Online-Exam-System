import React from 'react' ;

const OptionView = ({questionIndex , text , index , onOptionClick}) => (
  <div>
    <input 
      type="radio" 
      name={questionIndex} 
      value={index} 
      onChange={() => { 
        onOptionClick(questionIndex,index)} 
      } 
    />
    {text}
  </div>
)

export default OptionView ;