import './Card.css';
import React from 'react';
import arrow from '../images/arrow.svg'


const CardRight = ({content, onClickJoin}) => {
    const imageName = content.imageUrl;
    const imageUrl = require(`../images/${imageName}`)
    return (
        <div className="card-right">
            <div className="col-1">
                <p className='title'>{content.title}</p>
                <p>{content.text}</p>
                <button onClick={onClickJoin}>
                    Join Waitlist
                    <img src={arrow} alt='arrow' />
                    </button>
            </div>
            <div className="col-2">
                <img src={imageUrl} alt=''/>
            </div>
        </div>
    )
}

export default CardRight;