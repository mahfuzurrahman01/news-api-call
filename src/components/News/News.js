import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import "./News.css"
const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=8a81e8256bba423a843898a61adb9432')
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])

    return (
        <div className='container my-lg-5 my-3'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {
                    news.map(x => <Card x = {x} key = {x.publishedAt}></Card>)
                }
                <button className='button'>Show All</button>
            </div>
        </div>
    );
};


export default News;