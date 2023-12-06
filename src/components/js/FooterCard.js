import footerCardImage from '../../images/footer-card-image.png';
import React, { useState } from 'react';
import '../styles/Footer.css'
import car1 from '../../images/car1.png';
import car2 from '../../images/car5.png';
import car3 from '../../images/car3.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function FooterCard() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 3;

    const handleCarouselChange = index => {
        const nextIndex = index === totalItems - 1 ? 0 : index + 1;
        setCurrentIndex(nextIndex);
    };

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
                        showArrows={false}
                        interval={2000}
                        transitionTime={2000}
                        selectedItem={currentIndex}
                        handleCarouselChange={handleCarouselChange}
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
                        {/* <div>
                            <img src={car4} alt="car4" />  
                        </div>
                        <div>
                            <img src={car5} alt="car5" />  
                        </div>
                        <div>
                            <img src={car6} alt="car6" />  
                        </div> */}
                    </Carousel>

                </div>
                {/* <div className="footer-slider" style={{ backgroundImage: `url(${images[currentImage]})` }}></div> */}

            </div>
        </div>
    );
}

