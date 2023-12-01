import footerCardImage from '../../images/footer-card-image.png';
// import React, { useState, useEffect } from 'react';
import '../styles/Footer.css'
import car1 from '../../images/car-image-1.png';
import car2 from '../../images/car-image-2.png';
import car3 from '../../images/car-image-3.png';
import car4 from '../../images/car-image-4.png';
import car5 from '../../images/car-image-5.png';
import car6 from '../../images/car-image-6.png';

export default function FooterCard() {
    const images = [
        car1, car2, car3, car4, car5, car6
    ]
    // const [currentImage, setCurrentImage] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    //     }, 3000); // Change the interval duration as needed (in milliseconds)

    //     return () => clearInterval(intervalId);
    // }, [images.length]);

    return (
        <div className="footer-card">
            <div className='back-image'>
                <img src={footerCardImage} alt="footer-card-background" />
                <div className='footer-slider'>
                    <img src={images[0]} alt="" />
                </div>
                {/* <div className="footer-slider" style={{ backgroundImage: `url(${images[currentImage]})` }}></div> */}

            </div>
        </div>
    );
}

