//this root reducer will be the actual code that combines all the actual state together
//we want to break code in individual sections

import {combineReducers} from 'redux';

import userReducer from './user/user-reducer'

export default combineReducers({
    //key goes to the actual reducer that we want 
    user: userReducer
})