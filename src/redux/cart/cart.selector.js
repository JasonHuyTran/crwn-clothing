import {createSelector} from 'reselect';

//two types of selectors

//input selector that doesn't use createSelector
//function that takes naming structure of select...Cart
    //states the whole state and returns a part of it 

//output selector that use input selector and createSelector


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0)
)