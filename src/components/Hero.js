import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Hero.css';
import topBackImage from '../images/footer-card-image.png';

export default function Hero({ onClickJoin }) {
    const [rotationAngle, setRotationAngle] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotationAngle((prevAngle) => {
                if (prevAngle === 72) {
                    return 1;
                }
                else {
                    return prevAngle + 1;
                }
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    const carStyle = {
        transition: 'all 0.5s ease-in-out',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
    };

    const image = require(`../images/rotating-cars/${rotationAngle}.png`);

    return (
        <div className='Hero'>
            <Header onClickJoin={onClickJoin} />
            <div className='hero-image-background'>
                <div style={{
                    position: 'relative'
                }}>
                    <img src={topBackImage} alt='backImage' />
                    <img
                        src={image}
                        alt="Rotating Car"
                        className="rotating-car"
                        style={carStyle}
                    />
                </div>

            </div>
        </div>
    );
}
