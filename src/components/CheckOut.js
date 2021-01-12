import React from 'react';
import { useStateValue } from '../services/StateProvider';
import "./CheckOut.css";
import CheckOutItem from './CheckOutItem';
import OrderItem from './OrderItem';

function CheckOut() {

    const [{basket, favorites}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__container">
                <div className="checkout__header">
                    <h1>Checkout ({basket?.length} items)</h1>
                </div>

                <div className="checkout__delivery">
                    <div className="delivery__left"><h3>Delivery Address</h3></div>
                    <div>
                        <span>310 Al Arif Bldg. Al Mankhool, Dubai, UAE</span>
                    </div>
                    
                </div>

                <div className="checkout__review">
                    <div className="review__left"><h3>Review items and delivery</h3></div>
                    <div className="review__right">
                        {basket.map(basketItem => (
                            <CheckOutItem
                                title={basketItem.title}
                                price={basketItem.price}
                                image={basketItem.image}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
