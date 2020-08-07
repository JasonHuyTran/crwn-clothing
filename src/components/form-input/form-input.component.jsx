import React from 'react';

import './form-input.styles.scss';

//acts like an input but we can use the label and microinteraction when we click on the text box 
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className = 'form-input' onChange = {handleChange} {...otherProps}/>
        {
            //with this label prop, we're going to selectively render a label
            //we don't know if we actually need it
            //if a developer passes in a label property, then we need it. If not, we don't need it.
            label ? 
            (<label 
                className = {`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;