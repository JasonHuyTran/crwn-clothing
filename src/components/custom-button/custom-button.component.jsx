import React from 'react';

import './custom-button.styles.scss';

//want to submit the form that they're in
//pulling the children that get passed in
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    //if inverted is true then add the inverted class 
    <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

