import {createSelector} from 'reselect';

//string value go to an id 
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//return createSelector, function that returns a function 
export const selectionCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => 
            collections.find(
                collection => collections.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    )