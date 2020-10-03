import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/checkout-item/checkout-item.component'

import {selectionCollection} from '../../redux/shop/shop.selectors'

import './collection.styles.scss';

const CollectionPage = ({collection}) => (
    <div className = 'collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectionCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);