import axios from 'axios';

export const GetNews = (category) => {
    const endpoint = process.env.REACT_APP_API_Endpoint;
    const apiKey = process.env.REACT_APP_API_Key;

    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e0374276f2684efcfbc2028327ba8d002e956eca572e1d8b807a3e2338fdd0dc/stage`);
};
