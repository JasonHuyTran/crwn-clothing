import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//converts our object into an array 
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //takes all the keys of an object that we pass into it and gives it in an array format 
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );