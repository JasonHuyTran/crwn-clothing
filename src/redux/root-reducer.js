//this root reducer will be the actual code that combines all the actual state together
//we want to break code in individual sections

import {combineReducers} from 'redux';

import userReducer from './user/user-reducer'

//create root reducer object 
//has properties like user 
export default combineReducers({
    //property of user that points to user reducer 
    user: userReducer
});