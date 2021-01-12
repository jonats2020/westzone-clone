import React, { useState } from 'react';
import "./Header.css";
// import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { useStateValue } from '../services/StateProvider';
import { getBasketTotal } from '../services/reducer';

function Header() {

    const [{basket, favorites}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    const Login = (e) => {
        e.preventDefault();
    }

    // Handles login modal form open and close
    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="header">
            <p>Disclaimer: This is a demo website and created for presentation purposes only. For more information on this website, <Link to="https://bit.ly/2X5YAYR">click here</Link></p>

            <div className="header__container">
                <div className="header__companyLogo">
                    <Link to="/"><img src="http://westzonefresh.com/assets/img/west-zone-half(1).png" alt=""/></Link>
                    
                </div>

                <div className="header__navLinks">
                        <div className="header__navLink header__navlink__active"><Link to="/">HOME</Link></div>
                        <div className="header__navLink">SHOP</div>
                        <div className="header__navLink">PAGES</div>
                        <div className="header__navLink">BLOG</div>
                        <div className="header__navLink">CONTACT</div>
                </div>

                <div className="header__shoppingCart">
                        <div className="header__shoppingCartIcons">
                            <Badge badgeContent={favorites?.length} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                            <Badge badgeContent={basket?.length} color="secondary">
                                <Link to="/orders"><ShoppingBasketIcon /></Link>
                            </Badge>
                        </div>

                        <div className="header__shoppingCartTotal">
                            <span>item: </span>
                            <span><strong>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED' }).format(getBasketTotal(basket))}</strong></span>
                        </div>

                        <div className="header__login" onClick={Login}>
                        <PersonIcon /> Login
                            
                        </div>
                </div>


            </div>

        </div>
    )
}

export default Header;
