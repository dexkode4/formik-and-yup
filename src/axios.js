import axios from 'axios';

export const BASE_URL = 'https://fitted-portal-api.herokuapp.com/api/v1/';

export const getToken = () => {
    return localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';
  };
  

export const AxiosCreator = () => {
  let Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });

  return Axios;
};

export default AxiosCreator();
