import React, { useEffect} from 'react';
import Header from './Header';
import './Hero.css';
import topBackImage from '../images/top-background-logo.png';

export default function Hero({ onClickJoin }) {

    // const [rotationAngle, setRotationAngle] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setRotationAngle((prevAngle) => (prevAngle + 15) % 360);
    //     }, 500);
    //     return () => clearInterval(intervalId);
    // }, []);

    // const carStyle = {
    //     transform: `rotate(${rotationAngle}deg)`,
    // };


    return (
        <div className='Hero'>
            <Header onClickJoin={onClickJoin} />
            <div className='hero-image-background'>
                <img src={topBackImage} alt='CAR' />
                {/* <img
                    // src={`.car_${rotationAngle}.png`}
                    src={`../images/car1.png`}
                    alt="Rotating Car"
                    className="rotating-car"
                    style={carStyle}
                /> */}
            </div>
        </div>
    )
}


