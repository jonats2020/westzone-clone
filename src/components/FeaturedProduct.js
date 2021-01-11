import React from 'react';
import "./FeaturedProduct.css";
import ProductCard from "./ProductCard";
import Carousel from 'react-elastic-carousel';

function FeaturedProduct() {

    return (
        <div className="featuredProduct">
            <h1>Our Products</h1>

            <div className="products__container">

            <Carousel className="rec-carousel-item" itemsToShow={4}>
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/Fresh%20Fruits%20HD%20Wallpapers.jpg"
                    title="FRUITS"
                    description="Choose from our healthy selection of fresh fruits from around the world."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/vegetable.jpg"
                    title="VEGETABLES"
                    description="Turn your world green with our range of quality fresh vegetables."                         
                    />
                    <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/organic-food.jpg"
                    title="ORGANIC FOODS"
                    description="At West Zone Fresh, we’ve gone organic with a wide range of wholesome, natural food products. Also, check out our non-food, organic cosmetics and health & wellness ranges."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/Bakery-Products.jpg"
                    title="BAKERY"
                    description="You’ll love our delicious breads and cakes, freshly baked on the premises using only the best ingredients."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/butchery5.jpg"
                    title="BUTCHERY"
                    description="Our meat counter has the freshest, choicest cuts, imported from over 20 countries and prepared how you choose."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/frozenfood.jpg"
                    title="FROZEN FOODS"
                    description="Stock up on essential freezer fillers with our quality, frozen vegetables, fruits,desserts, meat and poultry."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/seafood.jpg"
                    title="SEAFOODS"
                    description="Select from our range of fresh, quality seafood that brings you the best of the ocean’s bounty."                         
                    />
            </Carousel>

                
                {/* <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/Fresh%20Fruits%20HD%20Wallpapers.jpg"
                    title="FRUITS"
                    description="Choose from our healthy selection of fresh fruits from around the world."                         
                    /> */}
                {/* <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/vegetable.jpg"
                    title="VEGETABLE"
                    description="Turn your world green with our range of quality fresh vegetables."                         
                    /> */}
                {/* <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/organic-food.jpg"
                    title="ORGANIC FOOD"
                    description="At West Zone Fresh, we’ve gone organic with a wide range of wholesome, natural food products. Also, check out our non-food, organic cosmetics and health & wellness ranges."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/pulsesandstaples.jpg"
                    title="PULSES AND STAPLES"
                    description="You are what you eat, so enjoy our range of pulses and dried staples for a healthy diet that lets you live life to the full."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/Bakery-Products.jpg"
                    title="BAKERY"
                    description="You’ll love our delicious breads and cakes, freshly baked on the premises using only the best ingredients."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/spices.jpg"
                    title="MASALA & SPICES"
                    description="Add a little spice to your life with our colourful selection of masla, spices and seasonings."                         
                    />
                <ProductCard 
                    imageUrl="http://westzonefresh.com/assets/img/category/butchery5.jpg"
                    title="BUTCHERY"
                    description="Our meat counter has the freshest, choicest cuts, imported from over 20 countries and prepared how you choose."                         
                    /> */}
                
            </div>
        </div>
    )
}

export default FeaturedProduct
