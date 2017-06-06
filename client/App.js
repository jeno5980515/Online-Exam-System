import React, { Component } from 'react';
import QuestionList from './tests/questions' ;
import axios from 'axios' ;

const TitleView = ({text}) => {
  return (
    <pre>
      {text}
    </pre>
  )
}

const OptionView = ({questionIndex , text , index , onChange}) => (
  <div>
    <input type="radio" name={questionIndex} value={index} onChange={onChange.bind(this,questionIndex,index)} />{text}
  </div>
)

const OptionsView = ({options,questionIndex,onChange}) => {
  return (
    <div>
    {
      options.map((option,index)=>(
        <OptionView 
          key={index} 
          text={option}
          index={index}
          questionIndex={questionIndex}
          onChange={onChange}
        />
      ))
    }
    </div>
  )
}
const QuestionView = ({title,options,questionIndex,onChange}) => {
  return (
    <li>
      <TitleView text={title}/>
      <OptionsView 
        options={options}
        questionIndex={questionIndex}
        onChange={onChange}
      />
    </li>
  )
}

const QuestionListView = ({list , onChange}) => (
  <ol>
  {
    list.map((question,index) => (
      <QuestionView 
        key={index} 
        {...question}
        questionIndex={index}
        onChange={onChange}
      />
    ))
  }
  </ol>
)

const SubmitView = ({ onClick }) => (
  <input type="submit" value="Submit" onClick={onClick}/>
)

class QuestionFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answerList: []};
    this.submitAnswer = this.submitAnswer.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  submitAnswer(){
    axios.post('/submit',{
      answerList : this.state.answerList
    })
    .then(function (response) {
      console.log(response);
    })
  };

  changeAnswer(index,answer){
    let newAnswerList = this.state.answerList.slice() ;
    newAnswerList[index] = answer ;
    this.setState({
      answerList : newAnswerList 
    })
  }
  render() {
    return ( 
      <div>
        <QuestionListView list={QuestionList} onChange={this.changeAnswer}/>
        <SubmitView onClick={this.submitAnswer}/>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <QuestionFormView/ >
      </div>
    );
  }
}


export default App;
