//this root reducer will be the actual code that combines all the actual state together
//we want to break code in individual sections

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

//get the actual local storage object in our window object 
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'

const persistConfig = {
    key: 'root',
    storage, 
    //the only reducer we want to persist is the cart 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    //property of user that points to user reducer 
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
