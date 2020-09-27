import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
)

//pull the state in and get the value
//map state to props keep firing 
//reduce is always doing an new value 
//what we want to do if that if we sent in a two new object, we want to not rerender it 
//this is obviously not good for performance 
//espically if the state doesn't actually change 
const mapStateToProps = state => ( {
    //how we added up the values together 
    //3 cart items, the quantity were 1 2 and 3...
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);