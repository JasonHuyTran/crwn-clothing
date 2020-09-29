import CartActionTypes from './cart.types'
import {addItemToCart} from "./cart.utils"

const INITIAL_STATE = {
    //we wanna hide the drop down when we first load the page 
    hidden: true,
    //empty array will be the default array 
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //whatever the boolean value is, convert it to the opposite 
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //old cart items + new action, deposit the item that is in the payload into the array
                cartItems: addItemToCart(state.cartItems, action.payload) 
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                //return any instace of the item we're trying to clear away
                //if the cartitem id DOES match, then filter it 
                //filter returns anythin that yields true 
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default cartReducer;