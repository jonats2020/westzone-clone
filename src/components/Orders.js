import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../services/reducer';
import { useStateValue } from '../services/StateProvider';
import OrderItem from './OrderItem';
import "./Orders.css";

function Orders() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="orders">
            <div className="orders__container">

                <div className="orders__left">
                    <div className="orderItem__headerTop">
                        <h1>Shopping Cart</h1>
                    </div>

                    <div className="orderItem__headerBottom">
                        <p>Price</p>
                    </div>

                    <div className="orderItem__itemContainer">

                        {basket?.map((basketItem) => (
                            <OrderItem 
                                id={basketItem.id}
                                title={basketItem.title}
                                image={basketItem.image}
                                price={basketItem.price}
                                checkout={true}
                            />
                        ))}
                    
                    </div>

                    <div className="orders__subtotal">
                        <p>Subtotal ({basket.length} items): <strong>AED {Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(getBasketTotal(basket))}</strong></p>
                    </div>
                </div>

                <div className="orders__right">
                    <div className="orders__total">
                        <p>Subtotal ({basket.length} items):</p>
                        <p><strong>AED {Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(getBasketTotal(basket))}</strong></p>
                        <Link to="/checkout"><Button>Proceed to Checkout</Button></Link>
                    </div>
                
                </div>

            </div>

        </div>
    )
}

export default Orders
