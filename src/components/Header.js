import React from 'react';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="header">
            <p>This is a demo website - Nats </p>

            <div className="header__container">
                <div className="header__companyLogo">
                    <Link to="/"><img src="http://westzonefresh.com/assets/img/west-zone-half(1).png" alt=""/></Link>
                    
                </div>

                <div className="header__navLinks">
                        <div className="header__navLink header__navlink__active">HOME</div>
                        <div className="header__navLink">SHOP</div>
                        <div className="header__navLink">PAGES</div>
                        <div className="header__navLink">BLOG</div>
                        <div className="header__navLink">CONTACT</div>
                </div>

                <div className="header__shoppingCart">
                        <div className="header__shoppingCartIcons">
                            <Badge badgeContent={4} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </div>

                        <div className="header__shoppingCartTotal">
                            <span>item: </span>
                            <span><strong>AED 150.00</strong></span>
                        </div>

                        <div className="header__login">
                        <PersonIcon /> Login
                            
                        </div>
                </div>


            </div>

        </div>
    )
}

export default Header;
