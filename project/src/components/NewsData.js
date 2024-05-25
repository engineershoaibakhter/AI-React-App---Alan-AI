import React, { useEffect, useState } from "react";
import { GetNews } from "../Service/GetNews";
import moment from "moment";
import alanBtn from '@alan-ai/alan-sdk-web';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);
    const [selectOption, setSelectOption] = useState('general');

    // Ensure your Alan AI key is stored in an environment variable
    const alanKey = process.env.REACT_APP_ALAN_API;


    const getAllNews = async (category) => {
        try {
            const response = await GetNews(category);
            setNewsData(response.data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const selectCategory = (event) => {
        setSelectOption(event.target.value);
    };

    useEffect(() => {
        getAllNews(selectOption);
    }, [selectOption]);


    useEffect(() => {

        alanBtn({
            key: process.env.REACT_APP_ALAN_API,
            onCommand: (commandData) => {
                if (commandData.command === 'VoiceNews') {
                    setSelectOption(commandData.data);
                }
            }
        });
    }, []);

    return (
        <div className="main">
            <h1>Voice News</h1>
            <div className="select">
                <label htmlFor="category">Choose a category:</label>
                <select className="select-box" name="category" id="category" onChange={selectCategory} value={selectOption}>
                    <option value="general">General</option>
                    <option value="business">Business</option>
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
            <div className="grid-main">
                {newsData.map((news, index) => (
                    <div key={index} className="grid-child">
                        <img className="news-image" src={news.urlToImage} alt="news" />
                        <p className="news-title">{news.title}</p>
                        <p className="news-content">{news.content}</p>
                        <div className="space-between">
                            <p className="news-author">Author: {news.author || "Author Name is not Available"}</p>
                            <p className="news-date">Date: {moment(news.publishedAt).format("LL")}</p>
                        </div>
                        <a href={news.url} target="_blank" rel="noopener noreferrer">Read More...</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsData;
