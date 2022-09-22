import React from 'react';
import "./Card.css"
const Card = (props) => {

    const { urlToImage, title, author, source, content, publishedAt } = props.x
    const newCont = content.slice(0,300)
    return (
        <div className='col'>
            <div className='card'>
                <div class="card-body">
                    <img src={urlToImage ? urlToImage : "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png"} alt='headline' ></img>
                    <h4 class="card-title">{title}</h4>
                    <div className='author-name'>
                        <p className='author'>{author}</p>
                        <p><small>{source.name}</small></p>
                    </div>
                    <p className='publish'>{publishedAt}</p>
                    <p class="card-text">{newCont}...</p>
                </div>
            </div>
        </div>

    );
};

export default Card;