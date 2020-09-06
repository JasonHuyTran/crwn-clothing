import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    //we wanna hide the drop down when we first load the page 
    hidden: true 
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //whatever the boolean value is, convert it to the opposite 
            };

        default:
            return state;
    }
}

export default cartReducer;