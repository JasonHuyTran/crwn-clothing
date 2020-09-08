import React from 'react';

import Custombutton from '../custom-button/custom-button.component'

import './collection-item.styles.scss';

//functional component since we don't need state
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className = 'collection-item'>
        <div 
            className = 'image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className = 'collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Custombutton inverted> Add to cart </Custombutton>
    </div>

);

export default CollectionItem;