import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({ category,country }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category,country]);

    return (
        <div className="container">
            <h2 className="text-center my-4">
                Latest <span className="badge bg-primary">News</span>
            </h2>
            <div className="row">
                {articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsBoard;
