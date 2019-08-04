import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { usersReducer } from './users';
import { currentPageReducer } from './currentPage';

const rootReducer = combineReducers({
  users: usersReducer,
  currentPage: currentPageReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
