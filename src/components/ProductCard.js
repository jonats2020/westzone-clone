import React from 'react';
import "./ProductCard.css";

function ProductCard({ imageUrl, title, description }) {

    return (
        <div className="productCard">
            <div className="product__image">
                <img src={imageUrl} alt="" srcset=""/>
            </div>
            <div className="product__description">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            

        </div>
    )
}

export default ProductCard
