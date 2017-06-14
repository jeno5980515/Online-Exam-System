import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Link  } from 'react-router-dom';
import App from './App';
import Reducer from './reducers';
import Submit from './Submit';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk' ;
import createHistory from 'history/createBrowserHistory' ;
import { ConnectedRouter , routerMiddleware } from 'react-router-redux';

const history = createHistory() ;
const middleware = routerMiddleware(history) ;

const store = createStore(Reducer,applyMiddleware(middleware,ReduxThunk)) ;

store.subscribe(()=>{
  console.log(store.getState());
})

ReactDOM.render((
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div>
        <Route path="/exam" component={App}/>
        <Route path="/submit" component={Submit} />
      </div>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// const ViewEntry = ({ location , context }) => (
//   <Router location={location} context={context} >
//     <App />
//   </Router>
// )

// export default ViewEntry ;