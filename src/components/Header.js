import React from 'react'
import './Header.css'

const Header = ({onClickJoin}) => {
    return (
        <div className='header'>
            <div className='header-left'>
                <a href='/' >Autostell</a>
            </div>

            <div className='header-right'>
                <a onClick={onClickJoin}>Join Waitlist</a>
            </div>
        </div>
    )
}

export default Header;