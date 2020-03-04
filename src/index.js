import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import  thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import destinationReducer from './reducers/destinationReducer.js';
//import rootReducer from 'src/reducers/rootReducer.js';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//set up our redux store, use rootReducer once there are multiple reducers created

let store = createStore(destinationReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, 
document.getElementById('root'));


