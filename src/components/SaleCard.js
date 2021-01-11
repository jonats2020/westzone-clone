import React, { useState } from 'react';
import "./SaleCard.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button, Snackbar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStateValue } from '../services/StateProvider';
import { isLiked } from '../services/reducer';

function SaleCard( {id, imageUrl, title, price, bestSeller}) {

    const [{basket, favorites}, dispatch] = useStateValue();
    const [isFavorite, setIsFavorite] = useState(false);

    // Handles snackbar events
    const [open, setOpen] = useState(false)

    const addToBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: imageUrl,
                price: price,
            }
        })
        
        setOpen(true);
    }

    const addToFav = () => {
        //dispatch the item to the data layer
        dispatch({
            type: "ADD_TO_FAV",
            item: {
                id: id,
                title: title,
                image: imageUrl,
                price: price,
            },
            id: id
        })

        setIsFavorite(true);
    }

    const removeToFav =() => {
        dispatch({
            type: "REMOVE_FROM_FAV",
            id: id
        })
        setIsFavorite(false);
    }
        
    const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="saleCard">
            {bestSeller && (
                <div className="saleCard__bestSeller">
                    Best Seller
                </div>
            )}

            <div className="saleCard__notification">
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={open}
                    onClose={handleClose}
                    message="Added item to basket"
                    // key={vertical + horizontal}
                />
            </div>
            
            <div className="saleCard__image">
                <img src={imageUrl} alt="" srcset=""/>

                <div className="saleCard__likeButton">
                    {isFavorite? 
                    (
                        <FavoriteIcon onClick={removeToFav} />
                    ) : (
                        <FavoriteBorderIcon onClick={addToFav} />
                    )}
                </div>
            </div>

            <div className="saleCard__description">
                <p>{title}</p>
                <p>AED <strong>{price}</strong></p>
            </div>

            <div className="saleCard__button">
                <Button onClick={addToBasket} variant="contained" color="secondary">
                    <ShoppingCartIcon />Add to Basket
                </Button>
            </div>
        </div>
    )
}

export default SaleCard;


