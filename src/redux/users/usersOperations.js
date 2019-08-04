import axios from 'axios';

import actions from './usersActions';
import axiosParams from '../../configs/axiosParams';

const getUsers = () => dispatch => {
  dispatch(actions.fetchUsersRequest());
  axiosParams.baseURL();

  axios
    .get('/users')
    .then(({ data }) => {
      const users = {
        data,
        length: data.length,
      };
      dispatch(actions.fetchUsersSuccess(users));
    })
    .catch(error => dispatch(actions.fetchUsersError(error)));
};

export default {
  getUsers,
};
