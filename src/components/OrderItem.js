import { Button } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../services/StateProvider';
import "./OrderItem.css";

function OrderItem({id, title, image, price, checkout}) {

    const [{basket, favorites}, dispatch] = useStateValue();

    // console.log("basket >> ", basket);

    const removeFromBasket = () => {
        
        console.log("remove >> ", id)

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })

        // console.log("basket after delete >> ", basket);
    }

    return (
        <div className="orderItem">
            <div className="orderItem__item">
                        <div className="basket__itemImage">
                            <img src={image} alt="" srcset=""/>
                        </div>

                        <div className="orderItem__itemDescription">
                            <h4>{title}</h4>
                            <p>Eligible for FREE Shipping</p>
                            {checkout && (
                                <>
                                <Button onClick={removeFromBasket}>Delete</Button>
                                <h4>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(price)}</h4>
                                </>
                                )
                            }

                        </div>

                        <div className="orderItem__itemPrice">
                            {checkout && Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(price)}
                        </div>
                    </div>
        </div>
    )
}

export default OrderItem
