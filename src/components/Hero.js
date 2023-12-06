import Header from './Header';
import './Hero.css';
import topBackImage from '../images/top-background-logo.png';

export default function Hero ({onClickJoin}) {
    return(
    <div className='Hero'>
        <Header onClickJoin={onClickJoin}/>
        <div className='img-back'>
            <img src={topBackImage} alt='CAR' />
        </div>
    </div>
    )
}


