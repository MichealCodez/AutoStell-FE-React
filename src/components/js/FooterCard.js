import footerCardImage from '../../images/footer-card-image.png';
// import React, { useState, useEffect } from 'react';
import '../styles/Footer.css'
import car1 from '../../images/car-image-1.png';
import car2 from '../../images/car-image-2.png';
import car3 from '../../images/car-image-3.png';
import car4 from '../../images/car-image-4.png';
import car5 from '../../images/car-image-5.png';
import car6 from '../../images/car-image-6.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function FooterCard() {
    // const images = [
    //     car1, car2, car3, car4, car5, car6
    // ]
    

    return (
        <div className="footer-card">
            <div className='back-image'>
                <img src={footerCardImage} alt="footer-card-background" />
                <div className='footer-slider'>
                    <Carousel
                        autoPlay={true}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                    >
                        <div>
                            <img src={car1} alt="car1" />  
                        </div>
                        <div>
                            <img src={car2} alt="car2" />  
                        </div>
                        <div>
                            <img src={car3} alt="car3" />  
                        </div>
                        <div>
                            <img src={car4} alt="car4" />  
                        </div>
                        <div>
                            <img src={car5} alt="car5" />  
                        </div>
                        <div>
                            <img src={car6} alt="car6" />  
                        </div>
                    </Carousel>
                    
                </div>
                {/* <div className="footer-slider" style={{ backgroundImage: `url(${images[currentImage]})` }}></div> */}

            </div>
        </div>
    );
}

