import * as ActionTypes from './types';

export const updateCollections = (collectionsMap: {}) => ({
  type: ActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const fetchCollectionsStart = () => ({
  type: ActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
