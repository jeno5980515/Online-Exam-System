import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link  } from 'react-router-dom';
import App from './App';
import Reducer from './reducers';
import Submit from './Submit';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';


const store = createStore(Reducer,applyMiddleware(promiseMiddleware())) ;

store.subscribe(()=>{
	console.log(store.getState());
})

ReactDOM.render((
	<Provider store={store} >
		<Router >
			<div>
		    	<Route path="/exam" component={App}/>
		    	<Route path="/submit" component={Submit} />
			</div>
		</Router>
	</Provider>
), document.getElementById('root'));

// const ViewEntry = ({ location , context }) => (
//   <Router location={location} context={context} >
//   	<App />
//   </Router>
// )

// export default ViewEntry ;