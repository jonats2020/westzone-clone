import React from 'react';
import { useStateValue } from '../services/StateProvider';
import "./OnSale.css";
import SaleCard from './SaleCard';

function OnSale() {

    return (
        <div className="onSale">
            <h1>Promotions</h1>

            <div className="onSale__container">
                <SaleCard
                    id={1}
                    imageUrl="https://m.media-amazon.com/images/I/81y9JH3qLcL._AC_UL320_.jpg"
                    title="Lacnor Full Cream Milk - 1 Litre (Pack of 4)"
                    price={13.10}
                    bestSeller="true"
                />
                <SaleCard 
                    id={2}
                    imageUrl="https://m.media-amazon.com/images/I/81HdszfPvNL._AC_UL320_.jpg"
                    title="Nutella Hazelnut Spread with Cocoa 750g"
                    price={26.45}
                />
                <SaleCard 
                    id={3}
                    imageUrl="https://m.media-amazon.com/images/I/91ceDg6RqxL._AC_UL320_.jpg"
                    title="Bayara Almond Shelled, 1 Kg"
                    price={46.00}
                    bestSeller="true"
                />
                <SaleCard 
                    id={4}
                    imageUrl="https://m.media-amazon.com/images/I/71pj8SWtMpL._AC_UL320_.jpg"
                    title="Oreo Milk and Chocolate Cookies, 16 x 38 gm"
                    price={15.65}
                />
            </div>
        </div>
    )
}

export default OnSale
