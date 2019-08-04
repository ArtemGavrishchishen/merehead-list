import { combineReducers } from 'redux';

import types from './paginationActionTypes';
import typesUsers from '../users/usersActionTypes';
import constants from '../../configs/constants';

function currentPageReducer(state = 1, { type }) {
  switch (type) {
    case types.PREVIOUS_PAGE:
      return state - 1;

    case types.NEXT_PAGE:
      return state + 1;

    default:
      return state;
  }
}

function maxPageReducer(state = 1, { type, payload }) {
  switch (type) {
    case typesUsers.FETCH_SUCCESS:
      return Math.ceil(payload.length / constants.LIMIT_USERS);

    case typesUsers.FETCH_ERROR:
      return 1;

    default:
      return state;
  }
}

export default combineReducers({
  currentPage: currentPageReducer,
  maxPage: maxPageReducer,
});
