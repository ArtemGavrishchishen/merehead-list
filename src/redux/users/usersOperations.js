import axios from 'axios';

import actions from './usersActions';
import axiosParams from '../../configs/axiosParams';

const getUsers = () => dispatch => {
  dispatch(actions.fetchUsersRequest());
  axiosParams.baseURL();

  axios
    .get('/users')
    .then(({ data }) => {
      dispatch(actions.fetchUsersSuccess(data.notes));
    })
    .catch(error => dispatch(actions.fetchUsersError(error)));
};

export default {
  getUsers,
};
