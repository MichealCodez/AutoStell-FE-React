import React, { useEffect, useState } from 'react';
import closeBtn from '../../images/close.svg';
import '../styles/BottomSheet.css';
import '../styles/WaitListComponent.css'
import CustomDropDown from './CustomDropDown';

const BottomSheet = ({ isOpen, toggleCloseBottomSheet, toggleBottomSheet }) => {
  const roles = ['Sell Cars', 'Buy Cars', 'Blog About Cars', 'Get A Repairer', 'Be A Repairer', 'Others'];
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(null);
  const [data, setData] = useState(null);
  const apiUrl = 'https://f7team.vercel.app/api/autostells/';
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error during GET request:', error);
      }
    };

    fetchData();
  }, []);

  const handleJoinWaitlist = async () => {
    setSending(true)
    const requestData = {
      role: role,
      email: email,
    };

    console.log(requestData)
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log(response);
      setEmail('');

    } catch (error) {
      console.error('Error during POST request:', error);
    }

    setSending(false);
  };


  return (
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
      <div className="wait-list-drawer">
        <div className="head">
          <p onClick={toggleBottomSheet}>Waitlist: {data === null ? 0 : data.length}</p>
          {isOpen ?
            <img src={closeBtn} alt="close-btn" onClick={toggleCloseBottomSheet} />
            : <p onClick={toggleBottomSheet} className='head-button'>Join Waitlist</p>
          }
        </div>
        <div className='content'>
          <CustomDropDown options={roles} onChangeRole={(role) => setRole(role)} />
          <label>Email Address:
          </label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleJoinWaitlist} disabled={sending}>{sending ? 'Sending' :'Join Waitlist'}</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
