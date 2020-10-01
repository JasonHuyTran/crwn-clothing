import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//cache store on certain options 
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

//we want to do middlewares with arrays so we can modify it easier in the future. 
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//a persisted version of our store 
//create a new provider that wrapping our application 
export const persistor = persistStore(store);


export default {store, persistor}; 

//add middlewear to our store so when actions get fired or dispatched we can catch them and display them. 
//functions that receive action in and do something with them and return to root reducer 
