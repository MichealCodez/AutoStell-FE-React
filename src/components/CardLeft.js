import cardImage2 from '../images/card-image-2.png';

const CardLeft = ({content, onClickJoin}) => {
    return(
        <div className="card-left">
            <div className="col-1">
                <img src={cardImage2} alt='' />
            </div>

            <div className="col-2">
                <p className='title'>{content.title} </p>
                <p>{content.text}</p>
                <button onClick={onClickJoin}>Join Waitlist</button>
            </div>

        </div>
    )
}


export default CardLeft;