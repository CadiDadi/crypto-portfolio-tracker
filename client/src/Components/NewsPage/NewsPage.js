import React from 'react'
import './NewsPage.css'

const NewsPage = () => {
    return(
        <div className='news-container'>
        <div className='crypto-news'>
            <h2 className='news-header'>CRYPTO-CURRENCY NEWS</h2>
                <iframe src="https://bitmakler.net/get_widget_news.php" width="700" height="900" scrolling="no" seamless />
            
        </div>
        </div>
    )
}

export default NewsPage


