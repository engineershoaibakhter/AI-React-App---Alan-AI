import React, { useEffect, useState } from 'react'
import { GetNews } from '../Service/GetNews';
import moment from 'moment';
const NewsData = () => {
    const [newsData,setNewsData]=useState([]);
    const getAllNews=async ()=>{
    let response=  await GetNews();
        setNewsData(response.data.articles);
    }
    useEffect(()=>{
        getAllNews()
    },[])
    
  return (
    <>
    <div className='main'>
        <h1>Voice News</h1>
        <div className='grid-main'>
        {newsData.map((news)=>{
        return(
            <div className='grid-child'>
                <img className='news-image' src={news.urlToImage}></img>
                <p className='news-title'>{news.title}</p>

                <p className='news-content'>{news.content}</p>
                <p className='news-author'>Author: {news.author}</p>
                <p>Date:  {moment(news.publishedAt).format('LL')}</p>
                
                <a href={news.url} target='_blank'>Read More...</a>

                
                
            </div>
        )
    })}
        </div>
    
    </div>
    </>
  )
}

export default NewsData