import './Card.css';
import cardImage1 from '../images/card-image-1.png';


const CardRight = ({content, onClickJoin}) => {
    return (
        <div className="card-right">
            <div className="col-1">
                <p className='title'>{content.title}</p>
                <p>{content.text}</p>
                <button onClick={onClickJoin}>Join Waitlist</button>
            </div>
            <div className="col-2">
                <img src={cardImage1} alt='' />
            </div>
        </div>
    )
}

export default CardRight;