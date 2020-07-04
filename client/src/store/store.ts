import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const middlewares = [thunk, logger];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
