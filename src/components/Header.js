import React, { useState } from 'react';
import "./Header.css";
// import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../services/StateProvider';
import { getBasketTotal } from '../services/reducer';
import { auth } from '../services/firebase';
import { Backdrop, Button, Fade, makeStyles, Modal, TextField } from '@material-ui/core';

function Header() {

    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: 'white',
        //   border: '2px solid #000',
          border: 'none',
        //   boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

    const [{basket, favorites, user}, dispatch] = useStateValue();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handle__loginClick = (e) => {
        e.preventDefault();

        setOpen(true);

    }
    // Handles login modal form open and close
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(username, password)
        .then(auth => {
            history.push("/")
            dispatch({
                type: "SET_USER",
                user: auth.user
            });            
            setOpen(false);
        })
        .catch(error => alert(error.message));

    }

    const handleSignUp = (e) => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(username, password)
        .then(auth => {
            history.push("/")
            dispatch({
                type: "SET_USER",
                user: auth.user
            });
            setOpen(false);
        })
        .catch(error => alert(error.message));
    }

    const handleLogout = (e) => {
        e.preventDefault();

        auth
        .signOut()
        .then(
            dispatch({
                type: "SET_USER",
                user: null
            })
        )
    }

    console.log("user >> ", user)

    return (
        <div className="header">

        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <div className="login__form">
                        <img src="http://westzonefresh.com/assets/img/west-zone-half(1).png" alt="" srcset=""/>
                        
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  
                            placeholder="Email"                              
                        />
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

                        <Button onClick={handleLogin}>Login</Button>                        

                        <p>Don't have an account yet? Sign Up below</p>

                        <Button onClick={handleSignUp}>Sign Up</Button>
                    </div>
                </div>
                </Fade>
            </Modal>

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

                        {user ? 
                        (
                            <>
                            <div className="header__login" onClick={handleLogout}>
                                <PersonIcon /> Logout
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="header__login" onClick={handle__loginClick}>
                                <PersonIcon /> Login
                            </div>
                            </>
                        )}
{/* 
                        <div className="header__login" onClick={handle__loginClick}>
                        <PersonIcon /> Login
                            
                        </div> */}
                </div>


            </div>

        </div>
    )
}

export default Header;
