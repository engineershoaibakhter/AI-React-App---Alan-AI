import axios from 'axios';

export const GetNews = (category) => {
    const endpoint = process.env.REACT_APP_API_Endpoint;
    const apiKey = process.env.REACT_APP_API_Key;

    return axios.get(`${endpoint}&category=${category}&apiKey=${apiKey}`);
};
