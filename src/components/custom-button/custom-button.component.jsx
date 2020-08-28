import React from 'react';

import './custom-button.styles.scss';

//want to submit the form that they're in
//pulling the children that get passed in
const CustomButton = ({children, ...otherProps}) => (
    <button className = 'custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

