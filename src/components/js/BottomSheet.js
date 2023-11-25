import React from 'react';
import closeBtn from '../../images/close.svg';
import '../styles/BottomSheet.css';
import '../styles/WaitListComponent.css'

const BottomSheet = ({isOpen, toggleCloseBottomSheet, toggleBottomSheet}) => {

  return (
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
      <div className="wait-list-drawer">
            <div className="head">
                <p onClick={toggleBottomSheet}>Waitlist: 10</p>
                <img src={closeBtn} alt="close-btn" onClick={toggleCloseBottomSheet}/>
            </div>
            <div className='content'>
                <p>Exciting things are on the horizon! Autosell is coming soon to revolutionize your car buying, selling, and servicing experience. Stay tuned for updates and be among the first to explore the future of automotive solutions.</p>
                <select>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                </select>

                <label>Email Address:
                    <input type='email' />
                </label>


                <button>Join Waitlist</button>
            </div>
        </div>
    </div>
  );
};

export default BottomSheet;
