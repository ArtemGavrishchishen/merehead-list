import axios from 'axios';

const baseURL = () => {
  axios.defaults.baseURL = 'http://localhost:8080';
};

export default {
  baseURL,
};
