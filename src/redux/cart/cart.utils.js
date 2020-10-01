//adding any utltity functions related to our cart
//so if we wanted to add multiple items, this is where it would go 
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //returns the first matching pair 
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    //we always need to return the entire object so that it gets rerendered 
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          //if the cart item doesn't match, just return the cartItem 
          //no modificatons 
          : cartItem
      );
    }
  
    //if the cart item is not found 
    //quantity gets attached so quantity isn't readded everytime once it is ran once 
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };