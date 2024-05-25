import React from 'react'
import axios from 'axios';

export const GetNews = () => {

   return axios.get(`${process.env.REACT_APP_API_Endpoint}&apiKey=${process.env.REACT_APP_API_Key}`)
}
