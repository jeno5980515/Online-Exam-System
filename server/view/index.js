import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as Router , Route , Link  } from 'react-router-dom';
import App from './App';
import Submit from './Submit';

// ReactDOM.render((
//   <Router >
//   	<div>
// 	    <Route path="/exam/:id" component={App}/>
// 	    <Route path="/submit" component={Submit}/>
// 	</div>
//   </Router>
// ), document.getElementById('root'));

const ViewEntry = ({ location , context }) => (
  <Router location={location} context={context} >
  	<App />
  </Router>
)

export default ViewEntry ;