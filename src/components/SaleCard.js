import React from 'react';
import "./SaleCard.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SaleCard( {imageUrl, title, price, bestSeller}) {
    return (
        <div className="saleCard">
            {bestSeller && (
                <div className="saleCard__bestSeller">
                    Best Seller
                </div>
            )}
            

            <div className="saleCard__image">
                <img src={imageUrl} alt="" srcset=""/>

                <div className="saleCard__likeButton">
                    <FavoriteBorderIcon />
                </div>
            </div>

            <div className="saleCard__description">
                <p>{title}</p>
                <p>AED <strong>{price}</strong></p>
            </div>

            <div className="saleCard__button">
                <Button variant="contained" color="secondary">
                    <ShoppingCartIcon />Add to Basket
                </Button>
            </div>
        </div>
    )
}

export default SaleCard
