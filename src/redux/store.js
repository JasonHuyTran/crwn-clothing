import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//we want to do middlewares with arrays so we can modify it easier in the future. 
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; 

//add middlewear to our store so when actions get fired or dispatched we can catch them and display them. 
//functions that receive action in and do something with them and return to root reducer 
