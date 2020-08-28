import React from 'react';

import './custom-button.styles.scss';

//want to submit the form that they're in
//pulling the children that get passed in
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    //if property of isGoogleSignIn is true, then render google-sign-in
    //custom buttom is also always rendered 
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

