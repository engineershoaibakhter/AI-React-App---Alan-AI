import React, { useEffect, useState } from "react";
import { GetNews } from "../Service/GetNews";
import moment from "moment";
const NewsData = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectOption,setSelectOption]=useState('')

    const getAllNews = async () => {
    let response = await GetNews(selectOption);
    setNewsData(response.data.articles);
    };

    const selectCategory=(event)=>{
        setSelectOption(event.target.value)
    }
  useEffect(() => {
    getAllNews();
  }, [selectOption]);

  return (
    <>
      <div className="main">
        <h1>Voice News</h1>
        <div className="select">
          <label for="cars">Choose a car:</label>

          <select className="select-box" name="category" id="category" onChange={selectCategory}>
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="grid-main">
          {newsData.map((news) => {
            return (
              <div className="grid-child">
                <img className="news-image" src={news.urlToImage}></img>
                <p className="news-title">{news.title}</p>

                <p className="news-content">{news.content}</p>
                <div className="space-between">
                  <p className="news-author">
                    Author:{" "}
                    {news.author ? news.author : "Author Name is not Available"}
                  </p>

                  <p className="news-date">
                    Date: {moment(news.publishedAt).format("LL")}
                  </p>
                </div>

                <a href={news.url} target="_blank">
                  Read More...
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsData;
