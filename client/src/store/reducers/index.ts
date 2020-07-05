import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { user } from './user';
import { cart } from './cart';
import { shop } from './shop';
import { directory } from './directory';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducer = combineReducers({ user, cart, directory, shop });

export default persistReducer(persistConfig, rootReducer);
