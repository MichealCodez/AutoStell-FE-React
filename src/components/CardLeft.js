
const CardLeft = ({content, onClickJoin}) => {
    const imageName = content.imageUrl;
    const imageUrl = require(`../images/${imageName}`)
    return(
        <div className="card-left">
            <div className="col-1">
                <img src={imageUrl} alt='' />
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