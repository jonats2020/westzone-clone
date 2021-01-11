import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__companyDetails">
                    <img src="http://westzonefresh.com/assets/img/west-zone-half(1).png" alt="" srcset=""/>
                    <ul>
                        <li>
                            Industrial Area
                            Al Quoz 2,
                            Dubai, UAE</li>
                        <li>(+971) 04 338 2727</li>
                        <li>Email: info@westzonefresh.com</li>
                    </ul>

                </div>

                <div className="footer__usefulLinks">
                    <h4>Useful Links</h4>
                    <div className="footer__usefulLinks1">
                        <div>
                            <ul>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Secure Shopping</li>
                                <li>Delivery Information</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Who We Are</li>
                                <li>Our Services</li>
                                <li>Porjects</li>
                                <li>Contact</li>
                                <li>Innovation</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer__newsletter">
                    <h4>Join Our Newsletter Now</h4>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <input type="text" name="" id=""/><button>SUBSCRIBE</button>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
