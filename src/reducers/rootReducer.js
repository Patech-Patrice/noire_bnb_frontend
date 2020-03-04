import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';
//import destinationReducer from 'src/reducers/destinationReducer.js';

const rootReducer = combinereducers({
    destination: destinationReducer,
})


export default rootReducer;