import React, { useState, useEffect} from 'react';
import Header from './Header';
import './Hero.css';
import topBackImage from '../images/top-background-logo.png';
import image1 from '../images/cars/0.jpg'

export default function Hero({ onClickJoin }) {

    const [rotationAngle, setRotationAngle] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotationAngle((prevAngle) => (prevAngle + 5) % 80);
          }, 300);
        return () => clearInterval(intervalId);
    }, []);

    const carStyle = {
        transition: 'transform 0.5s ease-in-out',
    };

    const image = require(`../images/cars/${rotationAngle}.jpg`)
    return (
        <div className='Hero'>
            <Header onClickJoin={onClickJoin} />
            <div className='hero-image-background'>
                <img
                    src={image}
                    alt="Rotating Car"
                    className="rotating-car"
                    style={carStyle}
                />
            </div>
        </div>
    )
}


