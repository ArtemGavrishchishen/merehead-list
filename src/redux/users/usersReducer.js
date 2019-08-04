import types from './usersActionTypes';

const INIT_USERS = [];

function usersReducer(state = INIT_USERS, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.FETCH_ERROR:
      return INIT_USERS;

    default:
      return state;
  }
}

export default usersReducer;
