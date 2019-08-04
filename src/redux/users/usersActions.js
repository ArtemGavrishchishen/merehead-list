import types from './usersActionTypes';

const fetchUsersRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchUsersSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: users,
});

const fetchUsersError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
};
