import React, { Component } from 'react';
import QuestionList from './tests/questions' ;
import { withRouter } from 'react-router';
import { connect } from 'react-redux' ;
import { changeAnswer } from './actions' ;
import Option from './containers/Option' ;
import Submit from './containers/Submit' ;


const TitleView = ({text}) => {
  return (
    <pre>
      {text}
    </pre>
  )
}


const OptionsView = ({options,questionIndex}) => {
  return (
    <div>
    {
      options.map((option,index)=>(
        <Option 
          key={index} 
          text={option}
          index={index}
          questionIndex={questionIndex}
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

// const mapStateToProps = (state) => {
//   return {
//     answerList: state.answerList 
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onOptionClick: (index,answer) => {
//       dispatch(changeAnswer(index,answer)) ;
//     }
//   }
// }

// const Submit = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Submit) ;



class QuestionFormView extends React.Component {
  constructor(props) {
    super(props);
  }

  submitAnswer(){
    const { history } = this.props ;
    axios.post('/submit',{
      answerList : this.state.answerList
    })
    .then(function (response) {
      const status = parseInt(response.status,10);
      if ( status === 200 ){
        history.push('/submit');
      } else {
        ;
      }
    })
  };

  render() {
    return ( 
      <div>
        <QuestionListView list={QuestionList}/>
        <Submit />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <QuestionFormView />
      </div>
    );
  }
}



export default App;
