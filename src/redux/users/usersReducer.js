import { combineReducers } from 'redux';

import types from './usersActionTypes';

const INIT_USERS = {
  data: [],
  length: null,
};

function dataReducer(state = INIT_USERS.data, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.data;

    case types.FETCH_ERROR:
      return INIT_USERS.data;

    default:
      return state;
  }
}

function lengthReducer(state = INIT_USERS.length, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.length;

    case types.FETCH_ERROR:
      return INIT_USERS.length;

    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  length: lengthReducer,
});
