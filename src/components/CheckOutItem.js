import React from 'react';
import "./CheckOutItem.css";

function CheckOutItem({ image, price, title }) {
    return (
        <div className="checkoutItem">
            <div className="item__container">
                <div className="item__image">
                    <img src={image} alt=""/>
                </div>

                <div className="item__info">
                    <h4>{title}</h4>
                    <p>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(price)}</p>
                </div>
            </div>
        </div>
    )
}

export default CheckOutItem
