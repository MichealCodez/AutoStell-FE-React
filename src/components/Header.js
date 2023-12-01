import React from 'react'
import './Header.css'

const Header = ({onClickJoin}) => {
    return (
        <div className='header'>
            <div className='header-left'>
                <p href='/' >Autostell</p>
            </div>
            {/* <div className='header-right'>
                <p onClick={onClickJoin}>Join Waitlist</p>
            </div> */}
            <button onClick={onClickJoin}>Join Waitlist</button>
        </div>
    )
}

export default Header;