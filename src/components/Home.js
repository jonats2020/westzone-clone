import React from 'react';
import CustomizedAccordions from './CustomizedAccordion';
import "./Home.css";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import CallIcon from '@material-ui/icons/Call';
import FeaturedProduct from './FeaturedProduct';
import BlogSection from './BlogSection';
import OnSale from './OnSale';

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__searchContainer">
                    <div className="home__departmentSelect">
                        <CustomizedAccordions />
                    </div>

                    <div className="home__categorySelect">
                        <div className="categorySelectTop">
                            <div className="home__search">
                                <input type="text" name="" id=""/>
                                <button>SEARCH</button>
                            </div>

                            <div className="home__contact">
                                <CallIcon />
                                <div className="contact__details">
                                    <div className="contact__detailsTop">
                                        (+971) 04 338 2727
                                    </div>
                                    <div className="contact__detailsBottom">
                                        support 24/7
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="categorySelectBottom">
                            <Slider>
                                <img src="http://westzonefresh.com/assets/img/slideshow/wzfbanner1%20(2).jpg" />
                                <img src="http://westzonefresh.com/assets/img/slideshow/supermarketbanner1.jpg" />
                                <img src="http://westzonefresh.com/assets/img/slideshow/onlineshopping.jpg" />
                            </Slider>
                            {/* <AnimatedSlider /> */}
                        </div>
                    </div>
                </div>

            <FeaturedProduct />
            <OnSale />
            <BlogSection />

            
                
            </div>
        </div>
    )
}

export default Home
