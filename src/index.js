import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import  thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import destinationReducer from './reducers/destinationReducer.js';
import attractionReducer from './reducers/attractionReducer.js';
import commentReducer from './reducers/commentReducer.js';

//import 'bootstrap/dist/css/bootstrap.min.css';




import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    destination: destinationReducer,
    attraction: attractionReducer,
    comment: commentReducer
})

//set up our redux store, use rootReducer once there are multiple reducers created

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, 
document.getElementById('root'));

export default store;


