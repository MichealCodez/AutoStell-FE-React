import React, { useState } from 'react';
import '../styles/CustomDropDown.css';
import openIcon from '../../images/upload.png';
import closedIcon from '../../images/down.png';

const CustomDropDown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select">
            <div className="select-header" onClick={handleToggle}>
                {selectedOption ? selectedOption : 'What action would you like to take on the app?'}
                {isOpen ?
                    <img src={openIcon} alt='opened' style={{
                        width: '20px'
                    }}/>
                    : <img src={closedIcon} alt='closed' style={{
                        width: '28px'
                    }}/>
                }
            </div>
            {isOpen && (
                <div className="options-container">
                    {options.map((option, key) => (
                        <div
                            key={key}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropDown;
