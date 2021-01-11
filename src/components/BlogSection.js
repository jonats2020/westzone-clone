import React from 'react';
import "./BlogSection.css";
import ImgMediaCard from './ImageMediaCard';

function BlogSection() {
    return (
        <div className="blogSection">
            <h1>News and Media</h1>

            <div className="blog__container">
                <ImgMediaCard 
                    imageUrl="http://westzonefresh.com/assets/data/blog/1510745069.jpeg"
                    title="Shop Worth Supermarket"
                    description="ShopWorth Supermarket - A Part of West Zone Fresh Supermarket is proud to announce the Grand Opening of our new outlet in Al-Mamzar, The Square Complex, Near MÃvenpick Hotel on 15th November 2017 at 4:30 P.M. We cordially invite our customers to come discover freshness, quality & value by ShopWorth Supermarket."
                />
                <ImgMediaCard 
                    imageUrl="http://westzonefresh.com/assets/data/blog/1497103899.jpeg"
                    title="New Supermarket"
                    description="Pleasures to Announce that we are opening of our new store West Zone Fresh at AL-SHARHAN BUILDING 5 pm. Come and join the West Zone Fresh team at our new store and celebrate with us. Our shelves are packed with imported and local quality products at great prices and Deals. we look forward to welcoming you soon."
                />
            </div>
        </div>
    )
}

export default BlogSection
