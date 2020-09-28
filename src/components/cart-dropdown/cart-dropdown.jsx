import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//for the history action to push it through? 
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'

import './cart-dropdown.styles.scss';

//cartItems.length conditional renders 
// === is a strict evaluation versus == is a loose evaluation 
// 0 or false or undefined or null or NaN or "" are all false 
const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ) : (
      <span className = 'empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));