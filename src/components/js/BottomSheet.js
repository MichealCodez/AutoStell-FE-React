import React from 'react';
import closeBtn from '../../images/close.svg';
import '../styles/BottomSheet.css';
import '../styles/WaitListComponent.css'
import CustomDropDown from './CustomDropDown';

const BottomSheet = ({isOpen, toggleCloseBottomSheet, toggleBottomSheet}) => {
  const options = ['Sell Cars', 'Blog about cars', 'Be a Repairer','Get a Repairer','Others'];
  // const defaultOption = options[0];
  return (
    
    
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
      <div className="wait-list-drawer">
            <div className="head">
                <p onClick={toggleBottomSheet}>Waitlist: 10</p>
                {isOpen ? 
                  <img src={closeBtn} alt="close-btn" onClick={toggleCloseBottomSheet}/>
                  : <p onClick={toggleBottomSheet} className='head-button'>Join Waitlist</p>
                }
            </div>
            <div className='content'>
                <p>Exciting things are on the horizon! Autosell is coming soon to revolutionize your car buying, selling, and servicing experience. Stay tuned for updates and be among the first to explore the future of automotive solutions.</p>
                {/* <select>
                    <option>What action would you like to take on the app?</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                    <option>Sell Cars</option>
                </select> */}
                <CustomDropDown options={options} />
                <label>Email Address:
                </label>
                <input type='email' />
                <button>Join Waitlist</button>
            </div>
        </div>
    </div>
  );
};

export default BottomSheet;
