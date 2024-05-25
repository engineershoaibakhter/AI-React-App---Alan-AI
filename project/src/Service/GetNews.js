import React from 'react'
import axios from 'axios';

export const GetNews = (category) => {

   return axios.get(`${process.env.REACT_APP_API_Endpoint}&category=${category}&apiKey=${process.env.REACT_APP_API_Key}`)
}
