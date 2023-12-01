import './Card.css';


const CardRight = ({content, onClickJoin}) => {
    const imageName = content.imageUrl;
    const imageUrl = require(`../images/${imageName}`)
    return (
        <div className="card-right">
            <div className="col-1">
                <p className='title'>{content.title}</p>
                <p>{content.text}</p>
                <button onClick={onClickJoin}>Join Waitlist</button>
            </div>
            <div className="col-2">
                <img src={imageUrl} alt=''/>
            </div>
        </div>
    )
}

export default CardRight;